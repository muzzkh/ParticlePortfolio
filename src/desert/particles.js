import * as THREE from 'three';
import { terrainHeight, WIND, DUNE_K, fbm3, getSeed } from './noise.js';

export const PT = {
  GRAIN: 0, // ballistic sand grains; die on touching the ground
  DUST: 1, // soft puffs that drift with the wind and grow
  STREAK: 2, // saltating sand skimming the surface
  SPICE: 3, // glowing spice motes
  PLUME: 4, // spindrift blown off dune crests / storm haze
};

const VERT = /* glsl */ `
attribute vec3 aVel;
attribute vec4 aColor;
attribute float aSize;
attribute float aStretch;
attribute float aSeed;
uniform float uScale;
uniform float uFogNear;
uniform float uFogFar;
varying vec4 vColor;
varying vec2 vDir;
varying float vRatio;
varying float vFog;
varying float vSeed;
void main() {
  vSeed = aSeed;
  if (aSize <= 0.0 || aColor.a <= 0.0) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    gl_PointSize = 0.0;
    return;
  }
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  vec3 vv = (modelViewMatrix * vec4(aVel, 0.0)).xyz;
  float sp = length(vv.xy);
  vec2 d = sp > 1e-4 ? vv.xy / sp : vec2(1.0, 0.0);
  float len = aSize + sp * aStretch;
  float px = len * uScale;
  gl_PointSize = clamp(px, 1.5, 320.0);
  vDir = d;
  vRatio = clamp(aSize / len, 0.03, 1.0);
  vColor = aColor;
  // sub-pixel sprites: fade instead of shimmering
  vColor.a *= clamp(aSize * uScale / 1.5, 0.0, 1.0);
  vFog = smoothstep(uFogNear, uFogFar, -mv.z);
}
`;

const FRAG = /* glsl */ `
uniform vec3 uFogColor;
varying vec4 vColor;
varying vec2 vDir;
varying float vRatio;
varying float vFog;
varying float vSeed;
float ph(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float pn(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(ph(i), ph(i + vec2(1, 0)), u.x), mix(ph(i + vec2(0, 1)), ph(i + vec2(1, 1)), u.x), u.y);
}
void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  c.y = -c.y;
  vec2 r = vec2(dot(c, vDir), dot(c, vec2(-vDir.y, vDir.x)) / vRatio);
  float d2 = dot(r, r);
  if (d2 > 1.0) discard;
  float a = vColor.a * (1.0 - d2) * (1.0 - d2);
  // round puffs get a billowy, torn edge instead of a perfect disc
  if (vRatio > 0.6) {
    vec2 o = vec2(vSeed * 37.0, vSeed * 91.0);
    float n = pn(c * 2.3 + o) * 0.65 + pn(c * 5.1 + o * 1.7) * 0.35;
    a *= smoothstep(0.25, 0.75, n + (1.0 - d2) * 0.35 - 0.2);
  }
  gl_FragColor = vec4(mix(vColor.rgb, uFogColor, vFog * 0.85), a);
}
`;

export class Particles {
  constructor(max = 14000) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    this.stretch = new Float32Array(max);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.type = new Uint8Array(max);
    this.grow = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.seedv = new Float32Array(max);
    this.cursor = 0;
    this.active = 0;

    const geo = new THREE.BufferGeometry();
    const mk = (arr, n) => {
      const a = new THREE.BufferAttribute(arr, n);
      a.setUsage(THREE.DynamicDrawUsage);
      return a;
    };
    this.aPos = mk(this.pos, 3);
    this.aVel = mk(this.vel, 3);
    this.aCol = mk(this.col, 4);
    this.aSize = mk(this.size, 1);
    this.aStretch = mk(this.stretch, 1);
    geo.setAttribute('position', this.aPos);
    geo.setAttribute('aVel', this.aVel);
    geo.setAttribute('aColor', this.aCol);
    geo.setAttribute('aSize', this.aSize);
    geo.setAttribute('aStretch', this.aStretch);
    this.aSeed = mk(this.seedv, 1);
    geo.setAttribute('aSeed', this.aSeed);

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uScale: { value: 40 },
        uFogColor: { value: new THREE.Color() },
        uFogNear: { value: 100 },
        uFogFar: { value: 300 },
      },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      depthTest: true,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 10;

    this._spawnAcc = { streak: 0, plume: 0, spice: 0, storm: 0 };
    this._info = {};
    this.sandColor = new THREE.Color('#d8a068');
    this.dustColor = new THREE.Color('#e4bb8a');
    this.spiceColor = new THREE.Color('#ff7a2a');
  }

  spawn(type, x, y, z, vx, vy, vz, size, life, color, alpha, opts = {}) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.max;
    const i3 = i * 3;
    const i4 = i * 4;
    this.pos[i3] = x;
    this.pos[i3 + 1] = y;
    this.pos[i3 + 2] = z;
    this.vel[i3] = vx;
    this.vel[i3 + 1] = vy;
    this.vel[i3 + 2] = vz;
    this.col[i4] = color.r;
    this.col[i4 + 1] = color.g;
    this.col[i4 + 2] = color.b;
    this.col[i4 + 3] = 0;
    this.alpha[i] = alpha;
    this.size[i] = size;
    this.stretch[i] = opts.stretch ?? 0;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.type[i] = type;
    this.grow[i] = opts.grow ?? 0;
    this.drag[i] = opts.drag ?? 1;
    this.grav[i] = opts.grav ?? 0;
    this.seedv[i] = Math.random();
  }

  // ---------------- emitters ----------------
  footstep(x, y, z, dirX, dirZ, speed, run, tint, sliding = 0) {
    const n = Math.round(8 + run * 18 + speed * 2 + sliding * 20);
    const c = _c.copy(this.sandColor).multiply(tint);
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.25 + Math.random() * (0.9 + run * 1.2);
      const back = -(0.3 + run * 1.4) * Math.random();
      this.spawn(
        PT.GRAIN,
        x + Math.cos(a) * 0.06,
        y + 0.03,
        z + Math.sin(a) * 0.06,
        Math.cos(a) * r + dirX * back * speed * 0.35,
        0.7 + Math.random() * (1.2 + run * 1.8),
        Math.sin(a) * r + dirZ * back * speed * 0.35,
        0.018 + Math.random() * 0.02,
        1.2,
        c,
        0.95,
        { stretch: 0.028, grav: 9.8, drag: 0.4 },
      );
    }
    // puffs sit low where they may be in shade, so keep them closer to the ambient level
    const d = _c2.copy(this.dustColor).multiply(tint).multiplyScalar(0.72);
    const puffs = Math.round(2 + run * 4 + sliding * 5);
    for (let k = 0; k < puffs; k++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.1 + Math.random() * 0.35;
      this.spawn(
        PT.DUST,
        x + Math.cos(a) * 0.1,
        y + 0.05 + Math.random() * 0.05,
        z + Math.sin(a) * 0.1,
        Math.cos(a) * r - dirX * speed * 0.1,
        0.15 + Math.random() * 0.25,
        Math.sin(a) * r - dirZ * speed * 0.1,
        0.12 + Math.random() * 0.1,
        1.4 + Math.random() * 1.4,
        d,
        0.13 + run * 0.08,
        { grow: 0.5 + run * 0.3, drag: 1.4 },
      );
    }
  }

  // toe-off spray kicked backwards when running
  kick(x, y, z, dirX, dirZ, speed, tint) {
    const n = Math.round(6 + speed * 3);
    const c = _c.copy(this.sandColor).multiply(tint);
    for (let k = 0; k < n; k++) {
      const spread = (Math.random() - 0.5) * 1.2;
      const back = 1.2 + Math.random() * 2.2;
      this.spawn(
        PT.GRAIN,
        x,
        y + 0.05,
        z,
        -dirX * back + -dirZ * spread,
        1.4 + Math.random() * 2.0,
        -dirZ * back + dirX * spread,
        0.016 + Math.random() * 0.02,
        1.2,
        c,
        0.9,
        { stretch: 0.03, grav: 9.8, drag: 0.35 },
      );
    }
  }

  // a sheet of sand cascading down a slip face
  cascade(x, y, z, downX, downZ, amount, tint) {
    const c = _c.copy(this.sandColor).multiply(tint);
    const d = _c2.copy(this.dustColor).multiply(tint);
    for (let k = 0; k < amount; k++) {
      const s = 0.8 + Math.random() * 1.8;
      const lat = (Math.random() - 0.5) * 0.9;
      this.spawn(
        PT.STREAK,
        x + (Math.random() - 0.5) * 0.4,
        y + 0.04,
        z + (Math.random() - 0.5) * 0.4,
        downX * s - downZ * lat,
        -0.4 * s,
        downZ * s + downX * lat,
        0.035 + Math.random() * 0.03,
        0.7 + Math.random() * 0.8,
        c,
        0.5,
        { stretch: 0.18, drag: 0 },
      );
    }
    if (Math.random() < 0.5) {
      this.spawn(PT.DUST, x, y + 0.1, z, downX * 0.8, 0.2, downZ * 0.8, 0.25, 1.8, d, 0.18, { grow: 0.6, drag: 1.2 });
    }
  }

  burst(x, y, z, count, power, tint, opts = {}) {
    const c = _c.copy(this.sandColor).multiply(tint);
    const d = _c2.copy(this.dustColor).multiply(tint);
    for (let k = 0; k < count; k++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() ** 0.6 * power * (opts.horiz ?? 0.55);
      const up = (0.4 + Math.random()) * power;
      const o = opts.radius ?? 0.5;
      this.spawn(
        PT.GRAIN,
        x + Math.cos(a) * o * Math.random(),
        y + Math.random() * 0.4,
        z + Math.sin(a) * o * Math.random(),
        Math.cos(a) * r,
        up,
        Math.sin(a) * r,
        0.03 + Math.random() * 0.06 * (opts.chunk ?? 1),
        3.5,
        c,
        0.95,
        { stretch: 0.04, grav: 9.8, drag: 0.25 },
      );
    }
    const puffs = Math.round(count * (opts.dust ?? 0.25));
    for (let k = 0; k < puffs; k++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * power * 0.35;
      this.spawn(
        PT.DUST,
        x + Math.cos(a) * (opts.radius ?? 0.5),
        y + Math.random() * power * 0.2,
        z + Math.sin(a) * (opts.radius ?? 0.5),
        Math.cos(a) * r,
        Math.random() * power * 0.35,
        Math.sin(a) * r,
        (opts.puff ?? 0.6) * (0.6 + Math.random()),
        2.5 + Math.random() * 3,
        d,
        (opts.dustAlpha ?? 0.3) * (0.6 + Math.random() * 0.6),
        { grow: opts.grow ?? 1.2, drag: 0.8 },
      );
    }
  }

  ring(x, y, z, radius, count, tint) {
    const d = _c2.copy(this.dustColor).multiply(tint);
    for (let k = 0; k < count; k++) {
      const a = (k / count) * Math.PI * 2 + Math.random() * 0.2;
      this.spawn(PT.DUST, x + Math.cos(a) * radius, y + 0.05, z + Math.sin(a) * radius, Math.cos(a) * 1.6, 0.25, Math.sin(a) * 1.6, 0.12, 0.9, d, 0.28, { grow: 0.5, drag: 2.5 });
    }
  }

  // ---------------- ambient desert ----------------
  ambient(dt, fx, fz, radius, wind, windStrength, storm, tint) {
    const acc = this._spawnAcc;
    const info = this._info;
    const seed = getSeed();
    const lightSand = _c.copy(this.dustColor).multiply(tint);
    const windLen = Math.hypot(wind.x, wind.z) || 1;
    const wx = wind.x / windLen;
    const wz = wind.z / windLen;

    // saltation streaks skimming the sand
    acc.streak += dt * (60 + 260 * windStrength + 900 * storm);
    while (acc.streak >= 1) {
      acc.streak -= 1;
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;
      const x = fx + Math.cos(a) * r;
      const z = fz + Math.sin(a) * r;
      const h = terrainHeight(x, z, info);
      if (info.t > DUNE_K + 0.04 && Math.random() < 0.8) continue; // sheltered lee
      const s = (3.5 + Math.random() * 4) * (0.5 + windStrength + storm);
      this.spawn(PT.STREAK, x, h + 0.04 + Math.random() * (0.25 + storm * 1.5), z, wx * s, 0.05, wz * s, 0.022 + Math.random() * 0.02, 0.5 + Math.random() * 0.9, lightSand, 0.28 + storm * 0.2, { stretch: 0.14 });
    }

    // spindrift ribbons off the dune crests
    acc.plume += dt * (14 + 70 * windStrength + 160 * storm);
    let tries = 0;
    while (acc.plume >= 1 && tries < 80) {
      tries++;
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius * 1.1;
      const x = fx + Math.cos(a) * r;
      const z = fz + Math.sin(a) * r;
      const h = terrainHeight(x, z, info);
      const nearCrest = info.t < DUNE_K && info.t > DUNE_K - 0.05 && info.A > 0.25 && info.crest > 0.55;
      if (!nearCrest) continue;
      acc.plume -= 1;
      const s = (1.8 + Math.random() * 2.6) * (0.6 + windStrength + storm);
      // thin wisps: small, stretched along their velocity, fading quickly
      for (let k = 0; k < 3; k++) {
        const jx = x + (Math.random() - 0.5) * 0.8;
        const jz = z + (Math.random() - 0.5) * 0.8;
        this.spawn(PT.PLUME, jx, h + 0.05 + Math.random() * 0.2, jz, wx * s * (0.8 + k * 0.2), 0.25 + Math.random() * 0.35, wz * s * (0.8 + k * 0.2), 0.05 + Math.random() * 0.05, 1.0 + Math.random() * 1.0, lightSand, 0.1 + 0.07 * windStrength, { grow: 0.06, drag: 0.5, stretch: 0.28 });
      }
    }
    if (acc.plume > 3) acc.plume = 3;

    // spice motes drifting above spice-stained pans
    acc.spice += dt * 30;
    tries = 0;
    while (acc.spice >= 1 && tries < 40) {
      tries++;
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;
      const x = fx + Math.cos(a) * r;
      const z = fz + Math.sin(a) * r;
      const sp = fbm3((x + seed.x) * 0.016 + 9.0, (z + seed.z) * 0.016 + 2.0);
      if (sp < 0.62) continue;
      acc.spice -= 1;
      const h = terrainHeight(x, z, info);
      const glow = _c2.copy(this.spiceColor).multiplyScalar(1.6 + Math.random() * 2.0);
      this.spawn(PT.SPICE, x, h + 0.1 + Math.random() * 1.2, z, wx * 0.3, 0.05, wz * 0.3, 0.035 + Math.random() * 0.035, 3 + Math.random() * 4, glow, 0.85, { drag: 0.5 });
    }
    if (acc.spice > 3) acc.spice = 3;

    // storm: dense rolling dust
    if (storm > 0.02) {
      acc.storm += dt * storm * 110;
      const d = _c2.copy(this.dustColor).multiply(tint).multiplyScalar(0.9);
      while (acc.storm >= 1) {
        acc.storm -= 1;
        // spawn upwind so they sweep across the view
        const u = (Math.random() - 0.5) * radius * 2.4;
        const back = -radius * (0.6 + Math.random() * 0.6);
        const x = fx + wx * back - wz * u;
        const z = fz + wz * back + wx * u;
        const h = terrainHeight(x, z);
        const s = 8 + Math.random() * 9;
        this.spawn(PT.PLUME, x, h + Math.random() * 6, z, wx * s, 0.2, wz * s, 2 + Math.random() * 4, 4 + Math.random() * 2, d, 0.05 + storm * 0.07, { grow: 1.5, drag: 0.2 });
      }
    }
  }

  update(dt, wind, camera, fog, pxPerUnit) {
    const { pos, vel, col, size, life, maxLife, type, grow, alpha, drag, grav, seedv } = this;
    const n = this.max;
    let active = 0;
    for (let i = 0; i < n; i++) {
      if (life[i] <= 0) continue;
      const i3 = i * 3;
      const i4 = i * 4;
      life[i] -= dt;
      if (life[i] <= 0) {
        size[i] = 0;
        col[i4 + 3] = 0;
        continue;
      }
      active++;
      const t = type[i];
      const age = maxLife[i] - life[i];
      if (t === PT.GRAIN) {
        vel[i3] += (wind.x * 0.35 - vel[i3]) * drag[i] * dt;
        vel[i3 + 2] += (wind.z * 0.35 - vel[i3 + 2]) * drag[i] * dt;
        vel[i3 + 1] -= grav[i] * dt;
        pos[i3] += vel[i3] * dt;
        pos[i3 + 1] += vel[i3 + 1] * dt;
        pos[i3 + 2] += vel[i3 + 2] * dt;
        if (vel[i3 + 1] < 0 && (i & 1) === ((this._frame ?? 0) & 1)) {
          const g = terrainHeight(pos[i3], pos[i3 + 2]);
          if (pos[i3 + 1] < g) {
            life[i] = Math.min(life[i], 0.12);
            pos[i3 + 1] = g + 0.01;
            vel[i3] *= 0.2;
            vel[i3 + 1] = 0;
            vel[i3 + 2] *= 0.2;
          }
        }
      } else if (t === PT.DUST || t === PT.PLUME) {
        const k = drag[i] * dt;
        vel[i3] += (wind.x - vel[i3]) * k;
        vel[i3 + 1] += (0.12 - vel[i3 + 1]) * k * 0.5;
        vel[i3 + 2] += (wind.z - vel[i3 + 2]) * k;
        pos[i3] += vel[i3] * dt;
        pos[i3 + 1] += vel[i3 + 1] * dt;
        pos[i3 + 2] += vel[i3 + 2] * dt;
        size[i] += grow[i] * dt;
      } else if (t === PT.STREAK) {
        pos[i3] += vel[i3] * dt;
        pos[i3 + 1] += vel[i3 + 1] * dt;
        pos[i3 + 2] += vel[i3 + 2] * dt;
        vel[i3 + 1] -= 0.8 * dt;
        if (vel[i3 + 1] < -0.6) vel[i3 + 1] = -0.6;
      } else if (t === PT.SPICE) {
        const ph = seedv[i] * 40 + age * 1.3;
        vel[i3] += (wind.x * 0.12 + Math.sin(ph) * 0.25 - vel[i3]) * dt;
        vel[i3 + 1] = Math.sin(ph * 0.7) * 0.12;
        vel[i3 + 2] += (wind.z * 0.12 + Math.cos(ph) * 0.25 - vel[i3 + 2]) * dt;
        pos[i3] += vel[i3] * dt;
        pos[i3 + 1] += vel[i3 + 1] * dt;
        pos[i3 + 2] += vel[i3 + 2] * dt;
      }
      // alpha envelope
      const fin = t === PT.GRAIN ? 1 : Math.min(1, age / (t === PT.SPICE ? 0.8 : 0.25));
      const fout = Math.min(1, life[i] / (t === PT.GRAIN ? 0.12 : maxLife[i] * 0.5));
      let a = alpha[i] * fin * fout;
      if (t === PT.SPICE) a *= 0.6 + 0.4 * Math.sin(age * 5 + seedv[i] * 20);
      col[i4 + 3] = a;
    }
    this._frame = (this._frame ?? 0) + 1;
    this.active = active;

    this.aPos.needsUpdate = true;
    this.aVel.needsUpdate = true;
    this.aCol.needsUpdate = true;
    this.aSize.needsUpdate = true;
    this.aStretch.needsUpdate = true;
    this.aSeed.needsUpdate = true;

    const u = this.material.uniforms;
    u.uScale.value = pxPerUnit;
    u.uFogColor.value.copy(fog.color);
    u.uFogNear.value = fog.near;
    u.uFogFar.value = fog.far;
  }

  clear() {
    this.life.fill(0);
    this.size.fill(0);
    for (let i = 3; i < this.col.length; i += 4) this.col[i] = 0;
  }
}

const _c = new THREE.Color();
const _c2 = new THREE.Color();
// keep the wind direction constant in sync with the dunes
export const WIND_DIR = WIND;
