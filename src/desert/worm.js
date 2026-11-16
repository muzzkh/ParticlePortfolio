import * as THREE from 'three';
import { groundHeight } from './noise.js';

const TAU = Math.PI * 2;
const SPACING = 0.22; // metres between rings of the body
const RINGS = 424; // body length ≈ 93 m, longer than the visible arc so the tail never shows mid-breach
const RADIAL = 40;
const COLS = RADIAL + 1;
const R_BODY = 3.4;
const LENGTH = (RINGS - 1) * SPACING;
const HIST_STEP = 0.2;
const CROSS_STEP = 6; // rings between the samples that look for where the body pierces the sand

// The hide is a run of overlapping segments of uneven length. The same warp is written
// into the skin's shader, which draws the crease between two segments and the plates
// each one is cracked into: keep the two in step.
const SEG = 1.4;
const SEG_A = 0.4;
const SEG_F1 = 0.83;
const SEG_B = 0.22;
const SEG_F2 = 2.1;

// The mouth. One skin runs from the hide, round a thick lip and back down the throat, so
// there is nothing to see through. It is always wide open: the front of the worm flares
// out past the width of its body to a lip of three lobes, and the throat is lined with
// teeth.
const SNOUT = 4.5; // metres of the front that flare out to the lip
const SNOUT_ROWS = Math.ceil(SNOUT / SPACING) + 1;
const GAPE = 3.3; // radius of the opening
const LIP = 0.36; // half the lip's thickness
const LOBE = 1.7; // how far the three lobes of the lip reach forward
const FLARE = 0.7; // and outward
const LIP_ROWS = 7;
const THROAT_STEP = 2; // rings of the body between rows of the throat
const THROAT_ROWS = 19;
const THROAT_DEPTH = (THROAT_ROWS - 1) * THROAT_STEP * SPACING;
const OUTER0 = 1 + THROAT_ROWS + LIP_ROWS; // first row of the hide
const ROWS = OUTER0 + RINGS + 1;

// rows of teeth down the throat: [ring, how many, length, lean forward (radians)]
const TEETH = [
  [1, 56, 1.3, 0.3],
  [3, 52, 1.2, 0.12],
  [5, 46, 1.08, -0.04],
  [7, 42, 0.96, -0.18],
  [10, 36, 0.82, -0.3],
  [13, 30, 0.68, -0.42],
  [16, 26, 0.56, -0.5],
];
const TOOTH_COUNT = TEETH.reduce((n, r) => n + r[1], 0);

const _v = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
const UPV = new THREE.Vector3(0, 1, 0);

function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

// ---------------------------------------------------------------------------
// Thumper
// ---------------------------------------------------------------------------
export class Thumper {
  constructor(scene, x, z) {
    this.scene = scene;
    this.group = new THREE.Group();
    const metal = new THREE.MeshStandardMaterial({ color: '#3d3833', roughness: 0.42, metalness: 0.75 });
    const brass = new THREE.MeshStandardMaterial({ color: '#7a6448', roughness: 0.5, metalness: 0.6 });
    this.lightMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.0, 1.2, 0.3) });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 1.25, 10), metal);
    pole.position.y = 0.45;
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), brass);
    cap.position.y = 1.08;
    this.hammer = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.24, 14), brass);
    this.hammer.position.y = 0.4;
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.08, 14), metal);
    collar.position.y = 0.2;
    this.light = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), this.lightMat);
    this.light.position.y = 1.15;
    this.group.add(pole, cap, this.hammer, collar, this.light);
    for (let i = 0; i < 3; i++) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.42), metal);
      const a = (i / 3) * Math.PI * 2;
      leg.position.set(Math.sin(a) * 0.16, 0.08, Math.cos(a) * 0.16);
      leg.rotation.y = a;
      leg.rotation.x = 0.55;
      this.group.add(leg);
    }
    this.group.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    this.x = x;
    this.z = z;
    this.baseY = groundHeight(x, z);
    this.group.position.set(x, this.baseY + 0.8, z);
    this.plant = 0;
    this.t = 0;
    this.beats = 0;
    this.alive = true;
    scene.add(this.group);
  }

  // returns true on the frame the hammer strikes
  update(dt) {
    if (!this.alive) return false;
    this.plant = Math.min(1, this.plant + dt * 3);
    const p = 1 - Math.pow(1 - this.plant, 3);
    this.group.position.y = this.baseY + 0.8 * (1 - p) - 0.12 * p;
    if (this.plant < 1) return false;
    const period = 1.05;
    const prev = this.t;
    this.t += dt;
    const ph = (this.t % period) / period;
    let hy;
    if (ph < 0.82) {
      const u = ph / 0.82;
      hy = 0.4 + 0.5 * (u * u * (3 - 2 * u));
    } else {
      const u = (ph - 0.82) / 0.18;
      hy = 0.9 - 0.5 * u * u;
    }
    this.hammer.position.y = hy;
    const flash = Math.max(0, 1 - (this.t % period) * 5);
    this.lightMat.color.setRGB(0.4 + 3 * flash, 0.15 + 1.2 * flash, 0.05 + 0.3 * flash);
    if (Math.floor(this.t / period) > Math.floor(prev / period)) {
      this.beats++;
      return true;
    }
    return false;
  }

  remove() {
    this.alive = false;
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      if (o.isMesh) o.geometry.dispose();
    });
  }
}

// ---------------------------------------------------------------------------
// Sandworm
// ---------------------------------------------------------------------------
function segCoord(s) {
  return (s + SEG_A * Math.sin(s * SEG_F1) + SEG_B * Math.sin(s * SEG_F2 + 1.3)) / SEG;
}
// radius of the hide at ring i, mouth aside
function radiusAt(i) {
  const s = i * SPACING;
  const sc = segCoord(s);
  const f = sc - Math.floor(sc);
  // each segment swells toward its rear edge, which laps over the front of the next
  const rib = 0.075 * (1 - Math.pow(f, 0.7)) + 0.03 * Math.exp(-((f / 0.07) ** 2));
  // the last stretch tapers to a closed tail
  const tail = Math.min(1, (LENGTH - s) / 24);
  const taper = 0.02 + 0.98 * Math.sqrt(tail * (2 - tail));
  return R_BODY * (1 - smoothstep(2, 6, s) * rib) * taper;
}
// how far the three lobes of the lip carry back along the snout and the throat
function lobeReach(s) {
  return 1 - smoothstep(0, 2.5, s);
}
// the throat's width at depth s, as a fraction of the opening
function funnel(s) {
  return (1 - 0.52 * smoothstep(0, THROAT_DEPTH, s)) * (1 + 0.04 * Math.sin(s * 7) * smoothstep(0.2, 1, s));
}

const SKIN_VERT = /* glsl */ `
attribute vec2 aBody;
attribute vec2 aMouth;
varying vec2 vBody;
varying vec2 vMouth;
`;
const SKIN_FRAG = /* glsl */ `
uniform vec3 uDust;
uniform vec3 uGlow;
varying vec2 vBody;
varying vec2 vMouth;
float wHash(float n) {
  return fract(sin(n * 127.1 + 3.7) * 43758.5453);
}
`;
// Drawn over the vertex colours: the crease between segments, the plates each segment is
// cracked into, and fine wrinkles running back from the lip.
const SKIN_HIDE = /* glsl */ `
float hide = 1.0 - smoothstep(0.3, 0.7, vMouth.x);
{
  float s = vBody.y;
  float sc = (s + ${SEG_A.toFixed(3)} * sin(s * ${SEG_F1.toFixed(3)}) + ${SEG_B.toFixed(3)} * sin(s * ${SEG_F2.toFixed(3)} + 1.3)) / ${SEG.toFixed(3)};
  float seg = floor(sc);
  float f = sc - seg;
  float amt = smoothstep(2.0, 6.0, s) * hide;
  float crease = 1.0 - smoothstep(0.015, 0.06 + fwidth(sc), min(f, 1.0 - f));
  // a few cracks wander across each segment
  float n = 3.0 + floor(wHash(seg) * 4.0);
  float p = vBody.x / 6.2831853 * n + wHash(seg + 31.0) + 0.05 * sin(f * 9.0 + seg * 2.3);
  float pi = floor(p);
  float pf = p - pi;
  float crack = 1.0 - smoothstep(0.004, 0.014 + fwidth(p), min(pf, 1.0 - pf));
  crack *= smoothstep(0.03, 0.2, f);
  // fine ridges run the length of it, each segment's set a little out of step with the next
  float ridge = sin(vBody.x * 44.0 + wHash(seg + 5.0) * 6.2831853 + 0.7 * sin(f * 5.0 + seg));
  ridge = smoothstep(0.35, 1.0, ridge) * (1.0 - 0.6 * f);
  float tint = wHash(seg * 17.0 + mod(pi, n));
  vec3 c = diffuseColor.rgb;
  c *= mix(1.0, (0.92 + 0.12 * tint) * (0.86 + 0.22 * f), amt);
  c *= 1.0 - amt * max(max(0.66 * crease, 0.4 * crack), 0.16 * ridge);
  float wr = sin(vBody.x * 54.0 + sin(s * 1.7) * 1.4);
  c *= 1.0 - 0.1 * hide * (1.0 - amt) * smoothstep(-2.0, 0.5, s) * smoothstep(0.55, 1.0, wr);
  diffuseColor.rgb = c;
}
`;

export class Sandworm {
  constructor(scene) {
    this.scene = scene;
    this.active = false;
    this.state = 'idle';
    this.head = new THREE.Vector3();
    this.dir = new THREE.Vector3(1, 0, 0);
    this.history = [];
    this.visibleAmount = 0;
    this.events = [];

    // ---- the skin: throat, lip and hide as one grid of ROWS x COLS vertices ----
    const vcount = ROWS * COLS;
    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(new Float32Array(vcount * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.norAttr = new THREE.BufferAttribute(new Float32Array(vcount * 3), 3).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('normal', this.norAttr);

    // around the body: where the three lobes of the mouth are, and their folds
    this.cos = new Float32Array(COLS);
    this.sin = new Float32Array(COLS);
    this.lobe = new Float32Array(COLS); // 1 on a lobe, 0 in the dip between two
    for (let j = 0; j < COLS; j++) {
      const th = (j / RADIAL) * TAU;
      const g = 0.5 + 0.5 * Math.cos(3 * th);
      this.cos[j] = Math.cos(th);
      this.sin[j] = Math.sin(th);
      this.lobe[j] = Math.pow(g, 1.3);
    }

    const colors = new Float32Array(vcount * 3);
    const body = new Float32Array(vcount * 2); // angle round the body, metres back from the lip
    const mouth = new Float32Array(vcount * 2); // 1 inside the mouth, glow from the gullet
    this.jitter = new Float32Array(RINGS * COLS);
    const skinA = new THREE.Color('#7a6853');
    const skinB = new THREE.Color('#9c8970');
    const lipCol = new THREE.Color('#8b5e4c');
    const fleshA = new THREE.Color('#6a2c20');
    const fleshB = new THREE.Color('#170605');
    const c = new THREE.Color();
    const put = (k, j, inner, glow, s) => {
      const idx = k * COLS + j;
      colors[idx * 3] = c.r;
      colors[idx * 3 + 1] = c.g;
      colors[idx * 3 + 2] = c.b;
      body[idx * 2] = (j / RADIAL) * TAU;
      body[idx * 2 + 1] = s;
      mouth[idx * 2] = inner;
      mouth[idx * 2 + 1] = glow;
    };
    for (let j = 0; j < COLS; j++) {
      // the gullet, then the throat from its depths up to the lip
      c.copy(fleshB);
      put(0, j, 1, 1, -10);
      for (let q = 0; q < THROAT_ROWS; q++) {
        const depth = q / (THROAT_ROWS - 1);
        c.copy(fleshA).lerp(fleshB, Math.pow(depth, 0.7));
        // darker in the troughs between the throat's ridges
        c.multiplyScalar(0.85 + 0.15 * Math.sin(q * THROAT_STEP * SPACING * 7));
        put(THROAT_ROWS - q, j, 1, smoothstep(0.25, 1, depth) * 0.9, -10);
      }
      for (let m = 1; m <= LIP_ROWS; m++) {
        const u = m / (LIP_ROWS + 1);
        c.copy(fleshA).lerp(lipCol, smoothstep(0.2, 0.9, u));
        put(THROAT_ROWS + m, j, 1 - smoothstep(0.35, 0.95, u), 0, -10);
      }
      const jj = j % RADIAL;
      for (let i = 0; i < RINGS; i++) {
        const s = i * SPACING;
        const n = Math.sin(jj * 1.7 + i * 0.26) * 0.5 + Math.sin(jj * 0.61 - i * 0.16) * 0.5;
        c.copy(skinA).lerp(skinB, 0.5 + 0.5 * n);
        c.lerp(lipCol, (1 - smoothstep(0, 1.4, s)) * 0.8);
        put(OUTER0 + i, j, 0, 0, s);
        this.jitter[i * COLS + j] = 1 + Math.sin(jj * 2.3 + i * 0.76) * Math.sin(i * 0.48 + jj * 0.4) * 0.016;
      }
      c.copy(skinA);
      put(ROWS - 1, j, 0, 0, LENGTH);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('aBody', new THREE.BufferAttribute(body, 2));
    geo.setAttribute('aMouth', new THREE.BufferAttribute(mouth, 2));
    const index = [];
    for (let k = 0; k < ROWS - 1; k++) {
      for (let j = 0; j < RADIAL; j++) {
        const a = k * COLS + j;
        const b = a + 1;
        const d = a + COLS;
        const e = d + 1;
        index.push(a, d, b, b, d, e);
      }
    }
    geo.setIndex(index);
    this.geometry = geo;

    const dustColor = new THREE.Color('#c99a68');
    const skinMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88, metalness: 0.04 });
    skinMat.onBeforeCompile = (shader) => {
      shader.uniforms.uDust = { value: dustColor };
      shader.uniforms.uGlow = { value: new THREE.Color(2.6, 0.85, 0.2) };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>${SKIN_VERT}`)
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBody = aBody;\nvMouth = aMouth;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>${SKIN_FRAG}`)
        .replace('#include <color_fragment>', `#include <color_fragment>${SKIN_HIDE}`)
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.5, vMouth.x);')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += uGlow * vMouth.y * vMouth.y;')
        .replace(
          '#include <normal_fragment_begin>',
          `#include <normal_fragment_begin>
          vec3 wN = inverseTransformDirection(normal, viewMatrix);
          diffuseColor.rgb = mix(diffuseColor.rgb, uDust, smoothstep(0.15, 0.85, wN.y) * 0.6 * hide);`,
        );
    };
    this.mesh = new THREE.Mesh(geo, skinMat);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.visible = false;
    scene.add(this.mesh);

    // ---- teeth: rows of long needles down the throat ----
    this.headGroup = new THREE.Group();
    this.headGroup.visible = false;
    scene.add(this.headGroup);
    const toothGeo = new THREE.ConeGeometry(1, 1, 6, 1).translate(0, 0.5, 0);
    const toothMat = new THREE.MeshStandardMaterial({ color: '#e8dcc0', roughness: 0.35, metalness: 0.05 });
    this.teeth = new THREE.InstancedMesh(toothGeo, toothMat, TOOTH_COUNT);
    this.teeth.frustumCulled = false;
    this.teeth.castShadow = true;
    this.teeth.receiveShadow = true;
    this.headGroup.add(this.teeth);
    this.tooth = []; // { ring, cos, sin, lobe, len, lean, width }
    TEETH.forEach(([ring, count, len, lean], r) => {
      for (let k = 0; k < count; k++) {
        const th = ((k + (r % 2) * 0.5) / count) * TAU;
        const h = Math.abs(Math.sin(k * 12.9898 + r * 78.233) * 43758.5453) % 1;
        this.tooth.push({
          ring,
          cos: Math.cos(th),
          sin: Math.sin(th),
          lobe: Math.pow(0.5 + 0.5 * Math.cos(3 * th), 1.3),
          len: len * (0.82 + 0.36 * h),
          lean: lean + (h - 0.5) * 0.16,
          width: 0.085 + 0.035 * h,
        });
      }
    });

    // reusable ring frames
    this.centers = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.tangents = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.normals = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.binormals = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.radii = new Float32Array(RINGS);
    for (let i = 0; i < RINGS; i++) this.radii[i] = radiusAt(i);
    this.roll = new THREE.Vector3(0, 1, 0); // the head's "up", carried along the path so the skin never spins
    this.crossings = [];
  }

  get busy() {
    return this.active;
  }

  // target: { x, z, kind: 'thumper' | 'player', ref }
  summon(target, fromAngle, distance = 80) {
    this.active = true;
    this.state = 'approach';
    this.target = target;
    this.time = 0;
    this.path = null;
    this.breached = false;
    this.dived = false;
    this.swallowed = false;
    this.speed = 10.5;
    this.roll.set(0, 1, 0);
    const hx = target.x + Math.cos(fromAngle) * distance;
    const hz = target.z + Math.sin(fromAngle) * distance;
    this.head.set(hx, groundHeight(hx, hz) - 8, hz);
    this.dir.set(target.x - hx, 0, target.z - hz).normalize();
    // prefill the body trailing straight behind, deep underground
    this.history.length = 0;
    const n = Math.ceil((RINGS * SPACING) / HIST_STEP) + 4;
    for (let i = 1; i <= n; i++) {
      const x = hx - this.dir.x * i * HIST_STEP;
      const z = hz - this.dir.z * i * HIST_STEP;
      this.history.push(new THREE.Vector3(x, groundHeight(x, z) - 9, z));
    }
    this.mesh.visible = true;
    this.headGroup.visible = true;
    this.events.push({ type: 'summoned' });
  }

  dismiss(reason) {
    if (!this.active || this.state !== 'approach') return;
    this.state = 'leave';
    this.leaveTimer = 0;
    // veer away
    const a = Math.atan2(this.dir.z, this.dir.x) + (Math.random() < 0.5 ? 1 : -1) * (1.2 + Math.random() * 0.6);
    this.leaveDir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    this.events.push({ type: 'lost', reason });
  }

  _buildBreachPath(bx, bz) {
    // Designed trajectory: curve up from below, erupt vertically at B, rise, arc over and dive.
    const pts = [];
    const ox = this.head.x;
    const oz = this.head.z;
    const y0 = this.head.y;
    let dx = bx - ox;
    let dz = bz - oz;
    const rh = Math.max(3, Math.hypot(dx, dz));
    dx /= rh;
    dz /= rh;
    const g = groundHeight(bx, bz);
    const h1 = 9;
    const R2 = 7.5;
    const add = (s, y) => pts.push(new THREE.Vector3(ox + dx * s, y, oz + dz * s));
    const N1 = 40;
    for (let i = 1; i <= N1; i++) {
      const u = i / N1;
      add(rh * Math.sin((u * Math.PI) / 2), y0 + (g - y0) * (1 - Math.cos((u * Math.PI) / 2)));
    }
    const surfaceIdx = pts.length;
    for (let i = 1; i <= 30; i++) add(rh, g + (h1 * i) / 30);
    const arcStart = pts.length;
    for (let i = 1; i <= 60; i++) {
      const phi = Math.PI - (i / 60) * Math.PI;
      add(rh + R2 + R2 * Math.cos(phi), g + h1 + R2 * Math.sin(phi));
    }
    const arcEnd = pts.length;
    for (let i = 1; i <= 40; i++) add(rh + 2 * R2, g + h1 - ((h1 + 10) * i) / 40);
    for (let i = 1; i <= 30; i++) {
      const u = i / 30;
      add(rh + 2 * R2 + 7 * Math.sin((u * Math.PI) / 2), g - 10 - 5 * (1 - Math.cos((u * Math.PI) / 2)));
    }
    for (let i = 1; i <= 40; i++) add(rh + 2 * R2 + 7 + i * 1.5, g - 15);
    // cumulative lengths
    const lens = [0];
    let prev = this.head.clone();
    let total = 0;
    for (const p of pts) {
      total += p.distanceTo(prev);
      lens.push(total);
      prev = p;
    }
    this.path = { pts: [this.head.clone(), ...pts], lens, total, s: 0 };
    this.pathMarks = {
      surface: lens[surfaceIdx],
      arcStart: lens[arcStart],
      arcEnd: lens[arcEnd],
      diveX: ox + dx * (rh + 2 * R2),
      diveZ: oz + dz * (rh + 2 * R2),
    };
    this.breachPoint = new THREE.Vector3(bx, g, bz);
    this.breachDir = new THREE.Vector3(dx, 0, dz);
  }

  _advancePath(ds) {
    const P = this.path;
    P.s = Math.min(P.total, P.s + ds);
    // binary search segment
    let lo = 0;
    let hi = P.lens.length - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (P.lens[mid] <= P.s) lo = mid;
      else hi = mid;
    }
    const segLen = P.lens[hi] - P.lens[lo] || 1;
    const f = (P.s - P.lens[lo]) / segLen;
    this.head.lerpVectors(P.pts[lo], P.pts[hi], f);
    _v.subVectors(P.pts[hi], P.pts[lo]);
    if (_v.lengthSq() > 1e-8) this.dir.copy(_v.normalize());
  }

  _recordHistory() {
    const last = this.history[0];
    if (!last) {
      this.history.unshift(this.head.clone());
      return;
    }
    let d = this.head.distanceTo(last);
    let prev = last;
    let guard = 0;
    while (d >= HIST_STEP && guard++ < 400) {
      const p = prev.clone().lerp(this.head, HIST_STEP / d);
      this.history.unshift(p);
      prev = p;
      d = this.head.distanceTo(p);
    }
    const maxLen = Math.ceil((RINGS * SPACING) / HIST_STEP) + 6;
    if (this.history.length > maxLen) this.history.length = maxLen;
  }

  // ctx: { playerPos, rhythm, onRock(x,z) }
  update(dt, ctx) {
    this.crossings.length = 0;
    if (!this.active) return;
    this.time += dt;
    const T = this.target;

    if (this.state === 'approach') {
      if (T.kind === 'player') {
        T.x = ctx.playerPos.x;
        T.z = ctx.playerPos.z;
      }
      const dx = T.x - this.head.x;
      const dz = T.z - this.head.z;
      const dist = Math.hypot(dx, dz);
      // steer (limited turn rate) toward the target, snaking slightly
      const want = Math.atan2(dz, dx) + Math.sin(this.time * 0.9) * 0.18 * Math.min(1, dist / 40);
      const cur = Math.atan2(this.dir.z, this.dir.x);
      let dd = ((want - cur + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      const turn = Math.max(-1.1 * dt, Math.min(1.1 * dt, dd));
      const na = cur + turn;
      this.dir.set(Math.cos(na), 0, Math.sin(na));
      this.head.x += this.dir.x * this.speed * dt;
      this.head.z += this.dir.z * this.speed * dt;
      const gy = groundHeight(this.head.x, this.head.z) - 7.5;
      this.head.y += (gy - this.head.y) * (1 - Math.exp(-dt * 3));
      const trigger = T.kind === 'player' ? 16 : 8.5;
      if (dist < trigger) {
        let bx = T.x;
        let bz = T.z;
        if (T.kind === 'player') {
          // erupt beside the walker, not on top of them
          const side = Math.random() < 0.5 ? 1 : -1;
          const px = -this.dir.z * side;
          const pz = this.dir.x * side;
          bx = T.x + px * 7.5 - this.dir.x * 1.5;
          bz = T.z + pz * 7.5 - this.dir.z * 1.5;
        }
        this.state = 'breach';
        this._buildBreachPath(bx, bz);
        this.events.push({ type: 'rising', x: bx, z: bz });
      }
    } else if (this.state === 'breach') {
      const P = this.path;
      const m = this.pathMarks;
      let v = 12;
      if (P.s < m.surface) v = 13;
      else if (P.s < m.arcStart) v = 12.5;
      else if (P.s < m.arcEnd) v = 10.5;
      else v = 14;
      const before = P.s;
      this._advancePath(v * dt);
      const s = P.s;
      if (!this.breached && s >= m.surface - 0.5) {
        this.breached = true;
        this.events.push({ type: 'breach', x: this.breachPoint.x, y: this.breachPoint.y, z: this.breachPoint.z });
      }
      if (!this.swallowed && s >= m.surface + 2.5) {
        this.swallowed = true;
        this.events.push({ type: 'swallow', x: this.breachPoint.x, z: this.breachPoint.z });
      }
      if (!this.dived && before < m.arcEnd + 9 && s >= m.arcEnd + 9) {
        this.dived = true;
        const gx = m.diveX;
        const gz = m.diveZ;
        this.events.push({ type: 'dive', x: gx, y: groundHeight(gx, gz), z: gz });
      }
      if (P.s >= P.total - 0.01) {
        this.state = 'leave';
        this.leaveTimer = 0;
        this.leaveDir = this.breachDir.clone();
      }
    } else if (this.state === 'leave') {
      this.leaveTimer += dt;
      const cur = Math.atan2(this.dir.z, this.dir.x);
      const want = Math.atan2(this.leaveDir.z, this.leaveDir.x);
      let dd = ((want - cur + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      const na = cur + Math.max(-0.9 * dt, Math.min(0.9 * dt, dd));
      this.dir.set(Math.cos(na), 0, Math.sin(na));
      this.head.x += this.dir.x * 11 * dt;
      this.head.z += this.dir.z * 11 * dt;
      const gy = groundHeight(this.head.x, this.head.z) - 12 - this.leaveTimer * 1.5;
      this.head.y += (gy - this.head.y) * (1 - Math.exp(-dt * 2));
      // wait for the whole (very long) body to slide back under before vanishing
      if ((this.leaveTimer > 3 && this.visibleAmount === 0) || this.leaveTimer > 25) {
        this.active = false;
        this.state = 'idle';
        this.mesh.visible = false;
        this.headGroup.visible = false;
        this.events.push({ type: 'gone' });
        return;
      }
    }

    this._recordHistory();
    this._buildBody();
  }

  _buildBody() {
    const H = this.history;
    const C = this.centers;
    // walk the polyline [head, H0, H1, ...] placing rings every SPACING metres
    let segA = this.head;
    let hi = 0;
    let segB = H[0] || this.head;
    let segLen = segA.distanceTo(segB);
    let acc = 0; // distance consumed along current segment
    C[0].copy(this.head);
    for (let i = 1; i < RINGS; i++) {
      let need = SPACING;
      while (need > 0) {
        const remain = segLen - acc;
        if (remain >= need) {
          acc += need;
          need = 0;
        } else {
          need -= remain;
          hi++;
          if (hi >= H.length) {
            // extrapolate straight
            segA = segB;
            segB = segA.clone().addScaledVector(this.dir, -SPACING);
            H.push(segB);
          } else {
            segA = segB;
            segB = H[hi];
          }
          segLen = segA.distanceTo(segB);
          acc = 0;
          if (segLen < 1e-6) segLen = 1e-6;
        }
      }
      C[i].lerpVectors(segA, segB, acc / segLen);
    }

    // parallel-transport frames
    const T = this.tangents;
    const N = this.normals;
    const B = this.binormals;
    for (let i = 0; i < RINGS; i++) {
      const a = C[Math.max(0, i - 1)];
      const b = C[Math.min(RINGS - 1, i + 1)];
      T[i].subVectors(a, b);
      if (T[i].lengthSq() < 1e-10) T[i].copy(this.dir);
      T[i].normalize();
    }
    // The head's frame is carried on from the last frame, not rebuilt from "up": rebuilt,
    // it snaps round whenever the worm points straight up or down, and the whole skin
    // (the lobes of the mouth, the plates) would jump with it.
    N[0].copy(this.roll).addScaledVector(T[0], -this.roll.dot(T[0]));
    if (N[0].lengthSq() < 1e-6) N[0].set(1, 0, 0).addScaledVector(T[0], -T[0].x);
    N[0].normalize();
    this.roll.copy(N[0]);
    B[0].crossVectors(T[0], N[0]).normalize();
    for (let i = 1; i < RINGS; i++) {
      N[i].copy(N[i - 1]).addScaledVector(T[i], -N[i - 1].dot(T[i])).normalize();
      B[i].crossVectors(T[i], N[i]).normalize();
    }

    this._skin();
    this._teeth();

    // where the body pierces the sand (for spray + sand disturbance)
    let prevAbove = C[0].y - groundHeight(C[0].x, C[0].z) > 0;
    this.visibleAmount = prevAbove ? 1 : 0;
    for (let i = CROSS_STEP; i < RINGS; i += CROSS_STEP) {
      const above = C[i].y - groundHeight(C[i].x, C[i].z) > 0;
      if (above) this.visibleAmount++;
      if (above !== prevAbove) this.crossings.push({ x: C[i].x, z: C[i].z, up: above });
      prevAbove = above;
    }
  }

  // one row of the skin: ring `i` of the body, pushed `fwd` along it, at radius `rad(j)`
  _row(k, i, fwd, rad) {
    const pos = this.posAttr.array;
    const c = this.centers[i];
    const t = this.tangents[i];
    const n = this.normals[i];
    const b = this.binormals[i];
    let o = k * COLS * 3;
    for (let j = 0; j < COLS; j++) {
      const cs = this.cos[j];
      const sn = this.sin[j];
      const r = rad(j);
      const f = fwd(j);
      pos[o++] = c.x + t.x * f + (n.x * cs + b.x * sn) * r;
      pos[o++] = c.y + t.y * f + (n.y * cs + b.y * sn) * r;
      pos[o++] = c.z + t.z * f + (n.z * cs + b.z * sn) * r;
    }
  }

  _skin() {
    const pos = this.posAttr.array;
    const nor = this.norAttr.array;
    const R = this.radii;
    const J = this.jitter;
    const lobe = this.lobe;
    const zero = () => 0;

    // the gullet: a point at the bottom of the throat
    this._row(0, (THROAT_ROWS - 1) * THROAT_STEP + 2, zero, zero);
    // the throat, from its depths up to the inside of the lip
    for (let q = 0; q < THROAT_ROWS; q++) {
      const s = q * THROAT_STEP * SPACING;
      const reach = lobeReach(s);
      const fun = funnel(s);
      this._row(
        THROAT_ROWS - q,
        q * THROAT_STEP,
        (j) => LOBE * lobe[j] * reach,
        (j) => (GAPE + FLARE * lobe[j] * reach) * fun,
      );
    }
    // round the lip: half a turn, from the throat's side to the hide's
    for (let m = 1; m <= LIP_ROWS; m++) {
      const phi = -Math.PI / 2 + (Math.PI * m) / (LIP_ROWS + 1);
      const cp = Math.cos(phi);
      const sp = Math.sin(phi);
      this._row(
        THROAT_ROWS + m,
        0,
        (j) => LOBE * lobe[j] + LIP * cp,
        (j) => GAPE + FLARE * lobe[j] + LIP * (1 + sp),
      );
    }
    // the snout: from the width of the body it flares out to the lip
    const lipOuter = GAPE + 2 * LIP;
    for (let i = 0; i < SNOUT_ROWS; i++) {
      const s = i * SPACING;
      const reach = lobeReach(s);
      const wide = lipOuter + (R[i] - lipOuter) * smoothstep(0, SNOUT, s);
      this._row(
        OUTER0 + i,
        i,
        (j) => LOBE * lobe[j] * reach,
        (j) => (wide + FLARE * lobe[j] * reach) * J[i * COLS + j],
      );
    }
    // the rest of the hide
    for (let i = SNOUT_ROWS; i < RINGS; i++) {
      const c = this.centers[i];
      const n = this.normals[i];
      const b = this.binormals[i];
      let o = (OUTER0 + i) * COLS * 3;
      const ji = i * COLS;
      for (let j = 0; j < COLS; j++) {
        const cs = this.cos[j];
        const sn = this.sin[j];
        const r = R[i] * J[ji + j];
        pos[o++] = c.x + (n.x * cs + b.x * sn) * r;
        pos[o++] = c.y + (n.y * cs + b.y * sn) * r;
        pos[o++] = c.z + (n.z * cs + b.z * sn) * r;
      }
    }
    // the tip of the tail
    const last = RINGS - 1;
    _v.copy(this.centers[last]).addScaledVector(this.tangents[last], -0.4);
    for (let j = 0, o = (ROWS - 1) * COLS * 3; j < COLS; j++) {
      pos[o++] = _v.x;
      pos[o++] = _v.y;
      pos[o++] = _v.z;
    }

    // normals from the grid itself: across a row, and from the row before to the row after
    for (let k = 0; k < ROWS; k++) {
      const up = Math.min(ROWS - 1, k + 1) * COLS;
      const dn = Math.max(0, k - 1) * COLS;
      const row = k * COLS;
      for (let j = 0; j < COLS; j++) {
        const a = (up + j) * 3;
        const b = (dn + j) * 3;
        const cc = (row + (j === RADIAL ? 1 : j + 1)) * 3;
        const d = (row + (j === 0 ? RADIAL - 1 : j - 1)) * 3;
        const ux = pos[a] - pos[b];
        const uy = pos[a + 1] - pos[b + 1];
        const uz = pos[a + 2] - pos[b + 2];
        const vx = pos[cc] - pos[d];
        const vy = pos[cc + 1] - pos[d + 1];
        const vz = pos[cc + 2] - pos[d + 2];
        const nx = uy * vz - uz * vy;
        const ny = uz * vx - ux * vz;
        const nz = ux * vy - uy * vx;
        const l = Math.sqrt(nx * nx + ny * ny + nz * nz);
        const o = (row + j) * 3;
        if (l > 1e-12) {
          nor[o] = nx / l;
          nor[o + 1] = ny / l;
          nor[o + 2] = nz / l;
        }
      }
    }
    // the two rows that are a single point face along the body: out of the mouth, off the tail
    const t0 = this.tangents[(THROAT_ROWS - 1) * THROAT_STEP + 2];
    const t1 = this.tangents[last];
    for (let j = 0; j < COLS; j++) {
      let o = j * 3;
      nor[o] = t0.x;
      nor[o + 1] = t0.y;
      nor[o + 2] = t0.z;
      o = ((ROWS - 1) * COLS + j) * 3;
      nor[o] = -t1.x;
      nor[o + 1] = -t1.y;
      nor[o + 2] = -t1.z;
    }
    this.posAttr.needsUpdate = true;
    this.norAttr.needsUpdate = true;
  }

  // The teeth stand on the wall of the throat and point at its middle. None is as long as
  // the throat is wide where it stands, so none can come through the far side.
  _teeth() {
    for (let k = 0; k < this.tooth.length; k++) {
      const th = this.tooth[k];
      const i = th.ring;
      const s = i * SPACING;
      const reach = lobeReach(s);
      const r = (GAPE + FLARE * th.lobe * reach) * funnel(s);
      const c = this.centers[i];
      const t = this.tangents[i];
      const n = this.normals[i];
      const b = this.binormals[i];
      const rx = n.x * th.cos + b.x * th.sin;
      const ry = n.y * th.cos + b.y * th.sin;
      const rz = n.z * th.cos + b.z * th.sin;
      const f = LOBE * th.lobe * reach;
      // rooted a little way into the gum, so no tooth shows its base
      const root = r + 0.12;
      _p.set(c.x + t.x * f + rx * root, c.y + t.y * f + ry * root, c.z + t.z * f + rz * root);
      const cl = Math.cos(th.lean);
      const sl = Math.sin(th.lean);
      _v.set(-rx * cl + t.x * sl, -ry * cl + t.y * sl, -rz * cl + t.z * sl).normalize();
      _q.setFromUnitVectors(UPV, _v);
      _s.set(th.width, th.len, th.width);
      _m.compose(_p, _q, _s);
      this.teeth.setMatrixAt(k, _m);
    }
    this.teeth.instanceMatrix.needsUpdate = true;
  }

  // world position of the part of the worm most worth looking at
  get focus() {
    return this.head;
  }
}
