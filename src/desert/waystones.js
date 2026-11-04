import * as THREE from 'three';
import { terrainHeight, groundGradient, vnoise, getSeed } from './noise.js';
import { makeRockGeometry } from './rocks.js';
import { PT } from './particles.js';
import { STAMP } from './trails.js';
import { Ornithopter, CargoPod } from './ornithopter.js';
import { GlbModel } from './models.js';

const DEG = Math.PI / 180;

// Waystones: basalt monoliths standing on bedrock, one per chapter of the resume.
// They are laid out as a meandering road leading away from where the walker starts,
// newest chapter first, so walking the road reads the resume in order.
// Projects are different: each sits on a stone landing pad (with its 3D model) along a
// second path that sets off the opposite way.

export const WAKE_RADIUS = 3.6; // walk this close and the stone speaks
export const SAFE_MARGIN = 2.0; // bedrock around a stone or pad: the worm can't follow you here

const STONE_W = 0.95;
const STONE_D = 0.58;
const STONE_H = 3.3;
const PLINTH_R = 1.45;
const FIRST = 7.5;
const SPACING = 11.5;
// project landing pads: off the other way from the road
const PAD_R = 3.6;
const PAD_TOP = 0.42;
const PAD_FIRST = 12;
const PAD_SPACING = 14;
const PAD_LINE = new THREE.Color(0.14, 0.55, 0.5);

// HDR colours: the inscriptions run hot enough to catch the bloom pass.
const GLOW = {
  experience: new THREE.Color(3.4, 1.4, 0.42),
  education: new THREE.Color(0.7, 1.75, 4.0),
  project: new THREE.Color(0.9, 3.0, 1.7),
  skills: new THREE.Color(3.0, 2.3, 0.9),
};
const SHAFT = {
  experience: new THREE.Color(1.0, 0.52, 0.2),
  education: new THREE.Color(0.32, 0.62, 1.0),
  project: new THREE.Color(0.4, 1.0, 0.65),
  skills: new THREE.Color(1.0, 0.8, 0.42),
};

const BASALT_DARK = new THREE.Color('#2a201b');
const BASALT_MID = new THREE.Color('#463328');
const BASALT_LIGHT = new THREE.Color('#5c4434');
const SAND = new THREE.Color('#c99560');

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}
function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

function monolithGeometry(rng, w, h, d) {
  let geo = new THREE.BoxGeometry(1, 1, 1, 2, 12, 2);
  const p = geo.getAttribute('position');
  const v = new THREE.Vector3();
  const ox = rng() * 100;
  const oz = rng() * 100;
  const slant = (rng() < 0.5 ? -1 : 1) * (0.22 + rng() * 0.3);
  const lean = (rng() - 0.5) * 0.1;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const y = v.y + 0.5;
    const taper = 1 - 0.2 * y;
    // weathering is a function of the undisplaced position, so shared corners stay welded
    const n = vnoise(v.x * 2.3 + y * 5.1 + ox, v.z * 2.3 + y * 3.7 + oz) - 0.5;
    const n2 = vnoise(y * 17 + ox, (v.x + v.z) * 6.5 + oz) - 0.5;
    const x = v.x * w * taper * (1 + n * 0.14) + lean * y * h * 0.1;
    const z = v.z * d * taper * (1 + n2 * 0.1);
    let yy = y * h;
    if (y > 0.999) yy += v.x * slant;
    p.setXYZ(i, x, yy, z);
  }
  geo = geo.toNonIndexed();
  geo.computeVertexNormals();
  const pos = geo.getAttribute('position');
  const nor = geo.getAttribute('normal');
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 3) {
    const ny = nor.getY(i);
    const cy = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    const band = Math.sin(cy * 2.6 + ox) * 0.5 + 0.5;
    c.copy(BASALT_DARK).lerp(BASALT_MID, band).lerp(BASALT_LIGHT, Math.max(0, Math.sin(cy * 6.1 + oz)) * 0.3);
    c.multiplyScalar(0.92 + rng() * 0.16);
    if (ny > 0.55) c.lerp(SAND, Math.min(1, (ny - 0.55) * 3) * 0.8);
    // wind-blown sand banked against the foot of the stone
    c.lerp(SAND, (1 - smoothstep(0.0, 0.7, cy)) * 0.55);
    for (let j = 0; j < 3; j++) {
      colors[(i + j) * 3] = c.r;
      colors[(i + j) * 3 + 1] = c.g;
      colors[(i + j) * 3 + 2] = c.b;
    }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

function drawSymbol(g, kind, x, y, r) {
  g.beginPath();
  if (kind === 'education') {
    g.arc(x, y, r * 0.85, 0, Math.PI * 2);
  } else if (kind === 'skills') {
    g.moveTo(x, y - r);
    g.lineTo(x + r * 0.95, y + r * 0.7);
    g.lineTo(x - r * 0.95, y + r * 0.7);
    g.closePath();
  } else if (kind === 'project') {
    g.rect(x - r * 0.75, y - r * 0.75, r * 1.5, r * 1.5);
  } else {
    g.moveTo(x, y - r);
    g.lineTo(x + r * 0.8, y);
    g.lineTo(x, y + r);
    g.lineTo(x - r * 0.8, y);
    g.closePath();
  }
  g.stroke();
}

// A column of invented script: a spine, a sigil for the stone's kind, and rows of marks.
function glyphTexture(rng, kind) {
  const W = 64;
  const H = 384;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext('2d');
  g.strokeStyle = '#fff';
  g.fillStyle = '#fff';
  g.lineCap = 'round';
  g.lineJoin = 'round';
  const cx = W / 2;
  g.lineWidth = 3.5;
  drawSymbol(g, kind, cx, 30, 14);
  g.globalAlpha = 0.4;
  g.lineWidth = 1.6;
  g.beginPath();
  g.moveTo(cx, 58);
  g.lineTo(cx, H - 16);
  g.stroke();
  g.globalAlpha = 1;
  let y = 74;
  while (y < H - 26) {
    const r = rng();
    g.lineWidth = 2.4 + rng() * 1.2;
    g.beginPath();
    if (r < 0.28) {
      const w = 7 + rng() * 15;
      g.moveTo(cx - w, y);
      g.lineTo(cx + w, y);
      g.stroke();
    } else if (r < 0.46) {
      const dx = 7 + rng() * 8;
      g.arc(cx - dx, y, 2.6, 0, Math.PI * 2);
      g.moveTo(cx + dx + 2.6, y);
      g.arc(cx + dx, y, 2.6, 0, Math.PI * 2);
      g.fill();
    } else if (r < 0.64) {
      const w = 9 + rng() * 8;
      const up = rng() < 0.5 ? -1 : 1;
      g.moveTo(cx - w, y - up * 5);
      g.lineTo(cx, y + up * 4);
      g.lineTo(cx + w, y - up * 5);
      g.stroke();
    } else if (r < 0.82) {
      const side = rng() < 0.5 ? -1 : 1;
      const w = 10 + rng() * 10;
      g.moveTo(cx, y);
      g.lineTo(cx + side * w, y);
      g.lineTo(cx + side * w, y + 6);
      g.stroke();
    } else {
      g.arc(cx, y, 4 + rng() * 2, 0, Math.PI * 2);
      g.stroke();
    }
    y += 17 + rng() * 12;
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

const SHAFT_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const SHAFT_FRAG = /* glsl */ `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;
uniform float uSeed;
varying vec2 vUv;
void main() {
  // Clamp the uvs: the scene is multisampled, so pixels on the column's edges are shaded
  // at their centres, just outside the quad, where the uvs run past 0..1. pow() of the
  // negative base there is NaN, and the bloom pass smears one NaN over the whole frame:
  // the screen flashed black.
  float x = min(abs(vUv.x * 2.0 - 1.0), 1.0);
  float core = pow(1.0 - x, 3.5);
  float y = clamp(vUv.y, 0.0, 1.0);
  float fade = smoothstep(0.0, 0.08, y) * pow(1.0 - y, 1.6);
  // slow bands of brighter light drifting up the column
  float drift = 0.78 + 0.22 * sin(y * 11.0 - uTime * 1.7 + uSeed * 6.0) * sin(y * 4.0 - uTime * 0.6 + uSeed);
  gl_FragColor = vec4(uColor, core * fade * drift * uOpacity);
}
`;

export class Waystones {
  constructor(scene, entries) {
    this.scene = scene;
    this.entries = entries;
    this.group = new THREE.Group();
    this.group.name = 'waystones';
    scene.add(this.group);
    this.stoneMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.78, metalness: 0.05 });
    this.plinthMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.92, metalness: 0 });
    this.pebbleMat = new THREE.MeshStandardMaterial({ color: '#6a4a36', flatShading: true, roughness: 0.9 });
    this.pebbleGeo = new THREE.DodecahedronGeometry(1, 0);
    this.padMat = new THREE.MeshStandardMaterial({ color: '#5d4b3c', flatShading: true, roughness: 0.88, metalness: 0.05 });
    this.postMat = new THREE.MeshStandardMaterial({ color: '#2f2924', roughness: 0.6, metalness: 0.5 });
    this.night = 0;
    this.selectedId = null;
    this.thrum = 0; // how loud the nearest hovering craft is, 0..1
    this._c = new THREE.Color();

    const rng = mulberry32(0x5eed);
    this.stones = entries.map((entry, i) => (entry.kind === 'project' ? this._buildPad(entry, i, rng) : this._build(entry, i, rng)));
  }

  _build(entry, index, rng) {
    const kind = GLOW[entry.kind] ? entry.kind : 'experience';
    const root = new THREE.Group();
    const scale = entry.scale || 1;
    root.scale.setScalar(scale);
    const h = STONE_H * (index === 0 ? 1.12 : 0.92 + rng() * 0.16);
    const body = new THREE.Mesh(monolithGeometry(rng, STONE_W, h, STONE_D), this.stoneMat);
    body.castShadow = true;
    body.receiveShadow = true;
    const plinth = new THREE.Mesh(makeRockGeometry(rng, 1.75, 0.5, 1.55, 3), this.plinthMat);
    plinth.castShadow = true;
    plinth.receiveShadow = true;
    plinth.rotation.y = rng() * Math.PI * 2;
    root.add(plinth, body);

    const glyphMat = new THREE.MeshBasicMaterial({
      map: glyphTexture(rng, kind),
      color: GLOW[kind].clone(),
      transparent: true,
      depthWrite: false,
    });
    const glyphGeo = new THREE.PlaneGeometry(STONE_W * 0.38, h * 0.68);
    const zFace = (STONE_D / 2) * (1 - 0.2 * 0.5) + 0.04;
    const tilt = Math.atan2((STONE_D / 2) * 0.2, h);
    for (const side of [1, -1]) {
      const glyph = new THREE.Mesh(glyphGeo, glyphMat);
      glyph.position.set(0, h * 0.5, zFace * side);
      glyph.rotation.set(-tilt * side, side > 0 ? 0 : Math.PI, 0);
      glyph.renderOrder = 2;
      root.add(glyph);
    }

    const shaftMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: SHAFT[kind].clone() },
        uOpacity: { value: 0 },
        uTime: { value: 0 },
        uSeed: { value: rng() * 10 },
      },
      vertexShader: SHAFT_VERT,
      fragmentShader: SHAFT_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const shaft = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 24).translate(0, 12, 0), shaftMat);
    shaft.renderOrder = 6;
    shaft.frustumCulled = false;

    const pebbles = new THREE.InstancedMesh(this.pebbleGeo, this.pebbleMat, 12);
    pebbles.castShadow = true;
    pebbles.receiveShadow = true;

    this.group.add(root, shaft, pebbles);
    return {
      entry,
      index,
      kind,
      h,
      root,
      shaft,
      shaftMat,
      glyphMat,
      pebbles,
      scale,
      radius: PLINTH_R * scale, // solid: the walker can't pass inside this
      wake: WAKE_RADIUS + (scale - 1) * 1.5, // within this the stone opens its dossier
      autoRot: (rng() - 0.5) * 0.6,
      x: 0,
      z: 0,
      y: 0,
      found: false,
      glow: 1,
      pulse: 0,
      moteAcc: 0,
    };
  }

  // A project: an octagonal stone landing pad, an inlaid ring and chevrons, beacon posts
  // around the rim, and the project's model parked in the middle.
  _buildPad(entry, index, rng) {
    const root = new THREE.Group();
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(PAD_R, PAD_R + 0.3, 0.6, 8), this.padMat);
    pad.position.y = PAD_TOP - 0.3;
    pad.castShadow = true;
    pad.receiveShadow = true;
    const lineMat = new THREE.MeshBasicMaterial({ color: PAD_LINE.clone() });
    const ring = new THREE.Mesh(new THREE.RingGeometry(PAD_R * 0.73, PAD_R * 0.76, 48).rotateX(-Math.PI / 2), lineMat);
    ring.position.y = PAD_TOP + 0.012;
    root.add(pad, ring);
    const chevron = new THREE.Shape();
    chevron.moveTo(-0.32, 0);
    chevron.lineTo(0, -0.34);
    chevron.lineTo(0.32, 0);
    chevron.lineTo(0.22, 0.02);
    chevron.lineTo(0, -0.2);
    chevron.lineTo(-0.22, 0.02);
    chevron.closePath();
    const chevGeo = new THREE.ShapeGeometry(chevron).rotateX(-Math.PI / 2);
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
      const c = new THREE.Mesh(chevGeo, lineMat);
      c.position.set(Math.cos(a) * PAD_R * 0.88, PAD_TOP + 0.012, Math.sin(a) * PAD_R * 0.88);
      c.rotation.y = -a - Math.PI / 2; // point at the centre
      root.add(c);
    }
    const bulbs = [];
    const bulbGeo = new THREE.SphereGeometry(0.09, 10, 8);
    const postGeo = new THREE.CylinderGeometry(0.05, 0.07, 0.5, 8);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
      const post = new THREE.Mesh(postGeo, this.postMat);
      post.position.set(Math.cos(a) * (PAD_R + 0.05), PAD_TOP + 0.25, Math.sin(a) * (PAD_R + 0.05));
      post.castShadow = true;
      const mat = new THREE.MeshBasicMaterial({ color: PAD_LINE.clone() });
      const bulb = new THREE.Mesh(bulbGeo, mat);
      bulb.position.set(post.position.x, PAD_TOP + 0.55, post.position.z);
      root.add(post, bulb);
      bulbs.push(mat);
    }
    const m = entry.model || { type: 'pod', scale: 1, yaw: 0, y: 0, lift: true };
    const model = m.type === 'ornithopter' ? new Ornithopter() : m.type === 'glb' && m.src ? new GlbModel(m.src, { lift: m.lift }) : new CargoPod();
    model.root.scale.setScalar(m.scale);
    model.root.position.y = PAD_TOP + m.y;
    model.yaw = m.yaw * DEG;
    model.root.rotation.y = model.yaw;
    root.add(model.root);
    this.group.add(root);
    return {
      entry,
      index,
      kind: 'project',
      h: model.height,
      root,
      model,
      modelScale: m.scale,
      canLift: m.lift,
      lineMat,
      bulbs,
      lift: 0,
      scale: 1,
      autoRot: 0,
      radius: PAD_R + 0.15,
      wake: PAD_R + 2.6,
      x: 0,
      z: 0,
      y: 0,
      found: false,
      glow: 1,
      pulse: 0,
      moteAcc: 0,
      dustAcc: 0,
    };
  }

  byId(id) {
    return this.stones.find((s) => s.entry.id === id) || null;
  }

  // Lay the road out from (sx, sz), setting off along `heading` (radians, world x/z plane),
  // and the project pads along their own path the opposite way.
  // `blocked(x, z, margin)` reports rock; stones keep clear of it.
  layout(sx, sz, heading, blocked) {
    const seed = getSeed();
    const rng = mulberry32((Math.floor(seed.x * 31 + seed.z * 17) ^ 0x9e3779b9) >>> 0);
    this.spawn = { x: sx, z: sz };
    const placed = [];
    // sites placed by hand go exactly where they were put; the paths flow around them
    for (const s of this.stones) {
      if (!s.entry.place) continue;
      const x = sx + s.entry.place.dx;
      const z = sz + s.entry.place.dz;
      placed.push({ x, z });
      if (s.kind === 'project') this._placePad(s, x, z);
      else this._place(s, x, z);
    }
    const road = this.stones.filter((s) => s.kind !== 'project' && !s.entry.place);
    const pads = this.stones.filter((s) => s.kind === 'project' && !s.entry.place);
    this._path(road, sx, sz, heading, FIRST, SPACING, 3.2, 7.5, 0, placed, blocked, rng, (s, x, z) => this._place(s, x, z));
    this._path(pads, sx, sz, heading + Math.PI, PAD_FIRST, PAD_SPACING, PAD_R + 2, 11, 3, placed, blocked, rng, (s, x, z) => this._placePad(s, x, z));
  }

  // Walk a meandering path, putting each site on the calmest open sand near its ideal spot.
  _path(sites, sx, sz, heading, first, spacing, rockMargin, apart, flatWeight, placed, blocked, rng, place) {
    const g = { x: 0, z: 0 };
    let x = sx;
    let z = sz;
    let px = sx;
    let pz = sz;
    let dir = heading;
    let bend = 0;
    sites.forEach((s, i) => {
      if (i > 0) {
        bend += (rng() - 0.5) * 0.7;
        bend *= 0.7;
        dir += bend + (rng() - 0.5) * 0.35;
      }
      const step = i === 0 ? first : spacing;
      let best = null;
      // when the spot is taken (a stone placed by hand, rock), look further along
      for (let push = 0; push < 6 && (!best || best.score >= 10); push++) {
        const tx = x + Math.cos(dir) * (step + push * apart * 0.6);
        const tz = z + Math.sin(dir) * (step + push * apart * 0.6);
        for (let ring = 0; ring <= 3; ring++) {
          const n = ring === 0 ? 1 : 10;
          for (let k = 0; k < n; k++) {
            const a = (k / n) * Math.PI * 2 + ring * 0.4;
            const cx = tx + Math.cos(a) * ring * 1.6;
            const cz = tz + Math.sin(a) * ring * 1.6;
            groundGradient(cx, cz, g);
            let score = Math.hypot(g.x, g.z) * (1 + flatWeight) + ring * 0.06;
            if (flatWeight) {
              // pads are wide: also check the slope across their footprint
              const hs = [0, 1, 2, 3].map((q) => terrainHeight(cx + Math.cos(q * 1.571) * PAD_R, cz + Math.sin(q * 1.571) * PAD_R));
              score += (Math.max(...hs) - Math.min(...hs)) * 0.4;
            }
            if (blocked && blocked(cx, cz, rockMargin)) score += 10;
            if (Math.hypot(cx - sx, cz - sz) < 6) score += 10;
            for (const p of placed) if (Math.hypot(cx - p.x, cz - p.z) < apart) score += 10;
            if (!best || score < best.score) best = { x: cx, z: cz, score };
          }
        }
      }
      dir = Math.atan2(best.z - pz, best.x - px);
      x = px = best.x;
      z = pz = best.z;
      placed.push({ x, z });
      place(s, x, z);
    });
  }

  _place(s, x, z) {
    // pebbles from the entry's own seed, so they stay put when the stone moves
    const rng = mulberry32(hashString(s.entry.id));
    let minH = terrainHeight(x, z);
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      minH = Math.min(minH, terrainHeight(x + Math.cos(a) * 1.2, z + Math.sin(a) * 1.2));
    }
    s.x = x;
    s.z = z;
    s.y = minH;
    // face the default camera, give or take, unless turned by hand
    s.root.position.set(x, minH - 0.3 * s.scale, z);
    s.root.rotation.y = s.entry.place ? s.entry.place.rot * DEG : s.autoRot;
    s.root.children[0].position.y = 0.32;
    s.shaft.position.set(x, minH + s.h * 0.55 * s.scale, z);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const sc = new THREE.Vector3();
    const p = new THREE.Vector3();
    for (let i = 0; i < s.pebbles.count; i++) {
      const a = rng() * Math.PI * 2;
      const d = PLINTH_R + 0.1 + rng() ** 1.4 * 1.8;
      const px = x + Math.cos(a) * d;
      const pz = z + Math.sin(a) * d;
      const k = 0.05 + rng() ** 2.5 * 0.26;
      p.set(px, terrainHeight(px, pz) - k * 0.2, pz);
      e.set(rng() * 3, rng() * 3, rng() * 3);
      q.setFromEuler(e);
      sc.set(k * (0.8 + rng() * 0.6), k * (0.5 + rng() * 0.4), k * (0.8 + rng() * 0.6));
      m.compose(p, q, sc);
      s.pebbles.setMatrixAt(i, m);
    }
    s.pebbles.instanceMatrix.needsUpdate = true;
    s.pebbles.computeBoundingSphere();
  }

  _placePad(s, x, z) {
    // sit the pad on the high side so it never floats; the sand drifts up its low side
    let sum = 0;
    let maxH = -Infinity;
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const h = terrainHeight(x + Math.cos(a) * PAD_R, z + Math.sin(a) * PAD_R);
      sum += h;
      maxH = Math.max(maxH, h);
    }
    const base = Math.min(maxH - 0.15, sum / 12 + 0.25);
    s.x = x;
    s.z = z;
    s.y = base;
    s.root.position.set(x, base, z);
    s.root.rotation.y = s.entry.place ? s.entry.place.rot * DEG : 0;
  }

  // ---- editing: move and turn sites live, find the one under the pointer ----
  moveSite(s, x, z) {
    if (s.kind === 'project') this._placePad(s, x, z);
    else this._place(s, x, z);
  }

  turnSite(s, deg) {
    s.root.rotation.y = deg * DEG;
  }

  siteRotation(s) {
    return Math.round(((s.root.rotation.y / DEG) % 360) * 10) / 10;
  }

  siteOf(object) {
    for (let o = object; o; o = o.parent) {
      const s = this.stones.find((st) => st.root === o);
      if (s) return s;
    }
    return null;
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
      for (const m of mats) {
        if (m.map) m.map.dispose();
        m.dispose();
      }
    });
    for (const s of this.stones) if (s.model && s.model.dispose) s.model.dispose();
  }

  // world-space point just above the stone (or the craft on its pad), for HUD labels
  anchor(s, out) {
    if (s.kind === 'project') return out.set(s.x, s.y + PAD_TOP + s.model.height * s.modelScale + 0.5, s.z);
    return out.set(s.x, s.y + s.h * s.scale + 0.9, s.z);
  }

  // where to stand to read the stone, coming from (fx, fz)
  approachPoint(s, fx, fz) {
    const dx = fx - s.x;
    const dz = fz - s.z;
    const d = Math.hypot(dx, dz) || 1;
    const r = s.radius + 1.0;
    return { x: s.x + (dx / d) * r, z: s.z + (dz / d) * r };
  }

  collide(pos, r, vel) {
    for (const s of this.stones) {
      const dx = pos.x - s.x;
      const dz = pos.z - s.z;
      const d = Math.hypot(dx, dz);
      const min = s.radius + r;
      if (d < min && d > 1e-4) {
        const nx = dx / d;
        const nz = dz / d;
        pos.x = s.x + nx * min;
        pos.z = s.z + nz * min;
        if (vel) {
          const vn = vel.x * nx + vel.z * nz;
          if (vn < 0) {
            vel.x -= vn * nx;
            vel.z -= vn * nz;
          }
        }
      }
    }
  }

  // within `margin` of a stone's or pad's edge
  nearStone(x, z, margin = SAFE_MARGIN) {
    for (const s of this.stones) if (Math.hypot(x - s.x, z - s.z) < s.radius + margin) return true;
    return false;
  }

  // The moment a stone is first reached: dust, a ring in the sand, a swirl of spice.
  awaken(s, particles, trails, tint) {
    s.pulse = 1;
    const r0 = s.kind === 'project' ? PAD_R : 1.4;
    particles.burst(s.x, s.y + 0.3, s.z, 70, 2.4, tint, { radius: r0, dust: 0.6, puff: 0.9, grow: 1.3 });
    trails.stamp(STAMP.RING, s.x, s.z, 0, r0 * 4.6, r0 * 4.6, 0, 0.035, 0.9);
    const glow = this._c.copy(GLOW[s.kind]).multiplyScalar(0.7);
    for (let i = 0; i < 70; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = r0 * 0.6 + Math.random() * 2.2;
      particles.spawn(
        PT.SPICE,
        s.x + Math.cos(a) * r,
        s.y + 0.2 + Math.random() * (s.h + 1.5),
        s.z + Math.sin(a) * r,
        -Math.sin(a) * 1.2,
        0,
        Math.cos(a) * 1.2,
        0.04 + Math.random() * 0.05,
        2.5 + Math.random() * 3,
        glow,
        0.95,
        { drag: 0.6 },
      );
    }
  }

  // Returns the site nearest to the walker relative to its wake radius:
  // { stone, dist, rel } where rel < 0 means the walker is inside its wake.
  update(dt, t, ctx) {
    const { px, pz, camYaw, focusX, focusZ, viewR, night, particles, tint } = ctx;
    this.night += ((night ? 1 : 0) - this.night) * (1 - Math.exp(-dt * 0.8));
    let nearest = null;
    let nd = Infinity;
    let nr = Infinity;
    let thrum = 0;
    for (const s of this.stones) {
      const d = Math.hypot(px - s.x, pz - s.z);
      if (d - s.wake < nr) {
        nr = d - s.wake;
        nd = d;
        nearest = s;
      }
      const selected = this.selectedId === s.entry.id ? 1 : 0;
      s.pulse = Math.max(0, s.pulse - dt * 0.45);
      const inView = Math.hypot(s.x - focusX, s.z - focusZ) < viewR + 8;
      if (s.kind === 'project') {
        thrum = Math.max(thrum, this._updatePad(s, dt, t, d, selected, inView, px, pz, particles, tint));
        continue;
      }
      const near = 1 - smoothstep(2.5, 10, d);
      const target = (s.found ? 0.8 : 1) + near * 0.45 + selected * 0.35 + s.pulse * 2.2;
      s.glow += (target - s.glow) * (1 - Math.exp(-dt * 4));
      const flicker = 0.93 + 0.07 * Math.sin(t * 2.1 + s.index * 1.7) * Math.sin(t * 0.77 + s.index);
      s.glyphMat.color.copy(GLOW[s.kind]).multiplyScalar(s.glow * flicker);

      // light column: a beacon until found, an ember after
      s.shaft.rotation.y = camYaw;
      const u = s.shaftMat.uniforms;
      u.uTime.value = t;
      const base = s.found ? 0.2 : 0.5;
      u.uOpacity.value = (base + selected * 0.25 + s.pulse * 0.9) * (1 + this.night * 0.7);

      // drifting spice motes around stones in view
      if (inView && particles) {
        s.moteAcc += dt * (s.found ? 2.5 : 6) * (1 + selected);
        const glow = this._c.copy(GLOW[s.kind]).multiplyScalar(0.55);
        while (s.moteAcc >= 1) {
          s.moteAcc -= 1;
          const a = Math.random() * Math.PI * 2;
          const r = 0.7 + Math.random() * 1.6;
          particles.spawn(
            PT.SPICE,
            s.x + Math.cos(a) * r,
            s.y + 0.3 + Math.random() * s.h,
            s.z + Math.sin(a) * r,
            0,
            0,
            0,
            0.035 + Math.random() * 0.035,
            2.5 + Math.random() * 2.5,
            glow,
            0.8,
            { drag: 0.5 },
          );
        }
      } else {
        s.moteAcc = 0;
      }
    }
    this.thrum = thrum;
    return { stone: nearest, dist: nd, rel: nr };
  }

  // The craft lifts off as the walker comes near, hovers facing them, and settles back
  // when they leave. Beacons breathe around the rim (smoothly: nothing blinks).
  _updatePad(s, dt, t, d, selected, inView, px, pz, particles, tint) {
    const want = s.canLift && d < 11 ? 1 : 0;
    s.lift += (want - s.lift) * (1 - Math.exp(-dt * (want > s.lift ? 0.8 : 0.5)));
    if (s.lift < 1e-3) s.lift = 0;
    s.model.update(dt, t, s.lift, Math.atan2(px - s.x, pz - s.z));
    s.h = s.model.height;
    const near = 1 - smoothstep(3, 14, d);
    const k = 0.75 + near * 0.35 + selected * 0.25 + s.pulse * 0.8;
    s.lineMat.color.copy(PAD_LINE).multiplyScalar(k);
    for (let i = 0; i < s.bulbs.length; i++) {
      const b = 0.5 + 0.5 * Math.sin(t * 1.4 - i * 0.785);
      s.bulbs[i].color.copy(PAD_LINE).multiplyScalar(0.45 + 0.75 * b * k);
    }
    // downwash: sand blown out from under the craft
    if (inView && particles && tint && s.lift > 0.15) {
      s.dustAcc += dt * 26 * s.lift;
      const c = this._c.copy(particles.dustColor).multiply(tint);
      while (s.dustAcc >= 1) {
        s.dustAcc -= 1;
        const a = Math.random() * Math.PI * 2;
        const r = PAD_R + 0.2 + Math.random() * 0.8;
        const v = 2 + Math.random() * 2.5 * s.lift;
        particles.spawn(PT.DUST, s.x + Math.cos(a) * r, s.y + 0.15, s.z + Math.sin(a) * r, Math.cos(a) * v, 0.25, Math.sin(a) * v, 0.35 + Math.random() * 0.4, 1.6 + Math.random(), c, 0.22, { grow: 0.9, drag: 0.7 });
      }
    } else {
      s.dustAcc = 0;
    }
    return s.lift * Math.max(0, 1 - d / 40);
  }
}
