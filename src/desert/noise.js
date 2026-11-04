// Deterministic noise + the dune height field.
// Every function here has a GLSL twin in TERRAIN_GLSL below; they must stay in sync
// so the character (CPU) stands on exactly the surface the GPU draws.

export const WIND = { x: 0.8, z: 0.6 }; // prevailing wind (dunes' slip faces point downwind)
export const WINDP = { x: -0.6, z: 0.8 };
export const DUNE_K = 0.7; // fraction of a dune wavelength that is the gentle windward slope

const OFF = 1048576; // keeps integer lattice coords positive before hashing

const seed = { x: 0, z: 0 };
export function setSeed(x, z) {
  seed.x = x;
  seed.z = z;
}
export function getSeed() {
  return seed;
}

export function hash2(ix, iy) {
  let h = (Math.imul((ix + OFF) | 0, 0x8da6b343) ^ Math.imul((iy + OFF) | 0, 0xd8163841)) >>> 0;
  h = (h ^ (h >>> 13)) >>> 0;
  h = Math.imul(h, 0x5bd1e995) >>> 0;
  h = (h ^ (h >>> 15)) >>> 0;
  return (h & 0xffffff) / 16777215;
}

export function vnoise(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const a = hash2(ix, iy);
  const b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1);
  const d = hash2(ix + 1, iy + 1);
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const ab = a + (b - a) * ux;
  const cd = c + (d - c) * ux;
  return ab + (cd - ab) * uy;
}

export function fbm3(x, y) {
  let s = 0;
  let a = 0.5;
  for (let i = 0; i < 3; i++) {
    s += a * vnoise(x, y);
    const nx = x * 2.03 + 17.1;
    y = y * 2.03 + 9.7;
    x = nx;
    a *= 0.5;
  }
  return s / 0.875;
}

function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

// info: optional object receiving { A, t, crest, prof }
export function terrainHeight(wx, wz, info) {
  const px = wx + seed.x;
  const pz = wz + seed.z;
  // large-scale warp bends the dune crests into sinuous lines
  const wX = fbm3(px * 0.011, pz * 0.011) - 0.5;
  const wZ = fbm3(px * 0.011 + 41.3, pz * 0.011 + 17.9) - 0.5;
  const qx = px + wX * 34.0;
  const qz = pz + wZ * 34.0;
  const al = qx * WIND.x + qz * WIND.z;
  const ac = qx * WINDP.x + qz * WINDP.z;
  // how much sand there is: erg (tall dunes) vs. pans (flats)
  const A = smoothstep(0.26, 0.7, fbm3(px * 0.0065 + 3.7, pz * 0.0065 + 8.1));
  const ph0 = al / 20.0 + (vnoise(ac * 0.02, al * 0.005) - 0.5) * 2.0;
  // crest height varies along the ridge; low segments run ahead downwind as horns
  const crest = smoothstep(0.12, 0.88, vnoise(ac * 0.055, ph0 * 0.85 + 3.3));
  const ph = ph0 - (1 - crest) * 0.38;
  const t = ph - Math.floor(ph);
  const up = t / DUNE_K;
  const dn = (1 - t) / (1 - DUNE_K);
  const stoss = up + (up * up * (3 - 2 * up) - up) * 0.55;
  const slip = Math.pow(dn, 1.35);
  const prof = t < DUNE_K ? stoss : slip;
  let h = prof * (0.12 + 0.88 * crest) * (0.6 + (4.8 - 0.6) * A);
  // small oblique dunelets that texture the flats
  const ph2 = (qx * 0.28 + qz * 0.96) / 8.5 + vnoise(qx * 0.05, qz * 0.05) * 1.2;
  const t2 = ph2 - Math.floor(ph2);
  const prof2 = t2 < 0.65 ? smoothstep(0, 1, t2 / 0.65) : Math.pow((1 - t2) / 0.35, 1.2);
  h += prof2 * 0.55 * (1 - A * 0.75) * vnoise(px * 0.03 + 5.5, pz * 0.03 + 1.7);
  h += (fbm3(px * 0.004 - 12.3, pz * 0.004 + 5.1) - 0.5) * 16.0;
  h += (vnoise(px * 0.09, pz * 0.09) - 0.5) * 0.3 * (1 - A * 0.6);
  if (info) {
    info.A = A;
    info.t = t;
    info.crest = crest;
    info.prof = prof;
  }
  return h;
}

// Extra CPU-side displacement (worm craters) registered by gameplay code.
const craters = [];
export function addCrater(x, z, radius, depth, halfLife) {
  craters.push({ x, z, radius, depth, halfLife, age: 0 });
  if (craters.length > 8) craters.shift();
}
export function clearCraters() {
  craters.length = 0;
}
export function updateCraters(dt) {
  for (let i = craters.length - 1; i >= 0; i--) {
    craters[i].age += dt;
    if (craters[i].age > craters[i].halfLife * 6) craters.splice(i, 1);
  }
}
function craterOffset(x, z) {
  let o = 0;
  for (const c of craters) {
    const dx = x - c.x;
    const dz = z - c.z;
    const r = Math.sqrt(dx * dx + dz * dz) / c.radius;
    if (r < 1) {
      const k = Math.pow(0.5, c.age / c.halfLife);
      const u = 1 - r * r;
      o -= c.depth * u * Math.sqrt(u) * k;
    }
  }
  return o;
}

export function groundHeight(x, z, info) {
  return terrainHeight(x, z, info) + (craters.length ? craterOffset(x, z) : 0);
}

// Gradient (dh/dx, dh/dz) via central differences.
export function groundGradient(x, z, out, e = 0.15) {
  const hx = groundHeight(x + e, z) - groundHeight(x - e, z);
  const hz = groundHeight(x, z + e) - groundHeight(x, z - e);
  out.x = hx / (2 * e);
  out.z = hz / (2 * e);
  return out;
}

// ---------------------------------------------------------------------------
// GLSL twin
// ---------------------------------------------------------------------------
export const NOISE_GLSL = /* glsl */ `
float hash2i(ivec2 p) {
  uvec2 q = uvec2(p + 1048576);
  uint h = (q.x * 0x8da6b343u) ^ (q.y * 0xd8163841u);
  h ^= h >> 13u;
  h *= 0x5bd1e995u;
  h ^= h >> 15u;
  return float(h & 0xffffffu) / 16777215.0;
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = p - i;
  ivec2 ii = ivec2(i);
  float a = hash2i(ii);
  float b = hash2i(ii + ivec2(1, 0));
  float c = hash2i(ii + ivec2(0, 1));
  float d = hash2i(ii + ivec2(1, 1));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float ab = a + (b - a) * u.x;
  float cd = c + (d - c) * u.x;
  return ab + (cd - ab) * u.y;
}
float fbm3(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec2(17.1, 9.7);
    a *= 0.5;
  }
  return s / 0.875;
}
`;

export const TERRAIN_GLSL = /* glsl */ `
uniform vec2 uSeed;
const vec2 WIND = vec2(0.8, 0.6);
const vec2 WINDP = vec2(-0.6, 0.8);
const float DUNE_K = ${DUNE_K.toFixed(4)};

// Large, smooth terms (warp, sand supply, regional elevation): cheap to interpolate per-vertex.
vec4 terrainMacro(vec2 pw) {
  vec2 p = pw + uSeed;
  vec2 w = vec2(fbm3(p * 0.011), fbm3(p * 0.011 + vec2(41.3, 17.9))) - 0.5;
  vec2 q = p + w * 34.0;
  float A = smoothstep(0.26, 0.7, fbm3(p * 0.0065 + vec2(3.7, 8.1)));
  float M = (fbm3(p * 0.004 + vec2(-12.3, 5.1)) - 0.5) * 16.0;
  return vec4(q, A, M);
}
// Every noise term below is low-frequency; the dune's sharpness comes only from the
// fract()/profile step in duneShape(). So the noisy "fields" are evaluated per-vertex and
// interpolated, and only duneShape() runs per-pixel.
//   d  = (phase0, crest, amplitude, base elevation)   d2 = (dunelet phase, dunelet amp, A, 0)
void terrainFields(vec2 pw, vec4 m, out vec4 d, out vec4 d2) {
  vec2 p = pw + uSeed;
  vec2 q = m.xy;
  float A = m.z;
  float al = dot(q, WIND);
  float ac = dot(q, WINDP);
  float ph0 = al / 20.0 + (vnoise(vec2(ac * 0.02, al * 0.005)) - 0.5) * 2.0;
  float crest = smoothstep(0.12, 0.88, vnoise(vec2(ac * 0.055, ph0 * 0.85 + 3.3)));
  float ph2 = dot(q, vec2(0.28, 0.96)) / 8.5 + vnoise(q * 0.05) * 1.2;
  float amp2 = 0.55 * (1.0 - A * 0.75) * vnoise(p * 0.03 + vec2(5.5, 1.7));
  float base = m.w + (vnoise(p * 0.09) - 0.5) * 0.3 * (1.0 - A * 0.6);
  d = vec4(ph0, crest, mix(0.6, 4.8, A), base);
  d2 = vec4(ph2, amp2, A, 0.0);
}
float duneShape(vec4 d, vec4 d2, out vec4 info) {
  float ph = d.x - (1.0 - d.y) * 0.38; // low crest segments run ahead downwind as horns
  float t = ph - floor(ph);
  float up = t / DUNE_K;
  float dn = (1.0 - t) / (1.0 - DUNE_K);
  float stoss = up + (up * up * (3.0 - 2.0 * up) - up) * 0.55;
  float slip = pow(max(dn, 0.0), 1.35);
  float prof = t < DUNE_K ? stoss : slip;
  float h = prof * (0.12 + 0.88 * d.y) * d.z;
  float t2 = d2.x - floor(d2.x);
  float prof2 = t2 < 0.65 ? smoothstep(0.0, 1.0, t2 / 0.65) : pow(max((1.0 - t2) / 0.35, 0.0), 1.2);
  h += prof2 * d2.y;
  h += d.w;
  info = vec4(d2.z, t, d.y, prof);
  return h;
}
float terrainDetail(vec2 pw, vec4 m, out vec4 info) {
  vec4 d, d2;
  terrainFields(pw, m, d, d2);
  return duneShape(d, d2, info);
}
float terrainHeightInfo(vec2 pw, out vec4 info) {
  return terrainDetail(pw, terrainMacro(pw), info);
}
// The dune phase alone (crest where fract(phase) == DUNE_K); matches terrainDetail.
float dunePhase(vec4 m) {
  float al = dot(m.xy, WIND);
  float ac = dot(m.xy, WINDP);
  float ph0 = al / 20.0 + (vnoise(vec2(ac * 0.02, al * 0.005)) - 0.5) * 2.0;
  float crest = smoothstep(0.12, 0.88, vnoise(vec2(ac * 0.055, ph0 * 0.85 + 3.3)));
  return ph0 - (1.0 - crest) * 0.38;
}
float terrainHeight(vec2 pw) {
  vec4 i;
  return terrainHeightInfo(pw, i);
}
`;
