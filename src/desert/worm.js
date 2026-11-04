import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { groundHeight } from './noise.js';

const RINGS = 290;
const SPACING = 0.32; // body length ≈ 93 m, longer than the visible arc so the tail never shows mid-breach
const RADIAL = 32;
const R_BODY = 3.4;
const R_LIP = 3.0;
const HIST_STEP = 0.2;
const RIB = 1.35; // metres between annular ribs

const _v = new THREE.Vector3();
const _m = new THREE.Matrix4();
const UPV = new THREE.Vector3(0, 1, 0);

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
function ribProfile(s) {
  const k = 0.5 + 0.5 * Math.cos((s / RIB) * Math.PI * 2);
  return 1 - 0.075 * Math.pow(k, 8) + 0.02 * Math.pow(1 - k, 2);
}
function radiusAt(i) {
  const s = i * SPACING;
  const head = Math.min(1, s / 2.5);
  const base = R_LIP + (R_BODY - R_LIP) * head * head * (3 - 2 * head);
  // the last stretch tapers to a closed tail
  const toEnd = (RINGS - 1) * SPACING - s;
  const tail = Math.min(1, toEnd / 22);
  const taper = 0.1 + 0.9 * Math.sqrt(tail * (2 - tail));
  return base * ribProfile(s) * taper;
}

function buildPetal(k, len) {
  const a0 = (k / 3) * Math.PI * 2 + Math.PI / 2;
  const U = 14;
  const V = 16;
  const positions = [];
  const uvs = [];
  const pivot = new THREE.Vector3(Math.cos(a0) * R_LIP, Math.sin(a0) * R_LIP, 0);
  for (let j = 0; j <= V; j++) {
    const v = j / V;
    const r = R_LIP * (1 - 0.94 * Math.pow(v, 1.25));
    const halfArc = (Math.PI / 3 - 0.05) * (1 - 0.35 * v);
    for (let i = 0; i <= U; i++) {
      const u = (i / U) * 2 - 1;
      const ang = a0 + u * halfArc;
      // petals bulge slightly outwards like a closed bud
      const bulge = 1 + Math.sin(Math.PI * v) * 0.08;
      positions.push(Math.cos(ang) * r * bulge - pivot.x, Math.sin(ang) * r * bulge - pivot.y, v * len);
      uvs.push(i / U, v);
    }
  }
  const index = [];
  for (let j = 0; j < V; j++) {
    for (let i = 0; i < U; i++) {
      const a = j * (U + 1) + i;
      const b = a + 1;
      const c = a + (U + 1);
      const d = c + 1;
      index.push(a, b, c, b, d, c);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(index);
  geo.computeVertexNormals();

  // teeth on the inner face
  const teeth = [];
  for (let j = 1; j < 7; j++) {
    const v = j / 8;
    const r = R_LIP * (1 - 0.94 * Math.pow(v, 1.25));
    const halfArc = (Math.PI / 3 - 0.05) * (1 - 0.35 * v);
    const n = Math.max(3, Math.round(9 * (1 - v)));
    for (let i = 0; i < n; i++) {
      const u = n === 1 ? 0 : (i / (n - 1)) * 1.7 - 0.85;
      const ang = a0 + u * halfArc;
      const t = new THREE.ConeGeometry(0.07 + 0.05 * (1 - v), 0.35 + 0.35 * (1 - v), 5);
      // cone points +y; aim it inwards (towards the axis) and a little back into the throat
      const inward = new THREE.Vector3(-Math.cos(ang), -Math.sin(ang), -0.35).normalize();
      t.applyMatrix4(_m.makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(UPV, inward)));
      t.translate(Math.cos(ang) * r * 0.97 - pivot.x, Math.sin(ang) * r * 0.97 - pivot.y, v * len);
      teeth.push(t);
    }
  }
  const teethGeo = mergeGeometries(teeth);
  return { geo, teethGeo, pivot, axis: new THREE.Vector3(-Math.sin(a0), Math.cos(a0), 0) };
}

export class Sandworm {
  constructor(scene) {
    this.scene = scene;
    this.active = false;
    this.state = 'idle';
    this.head = new THREE.Vector3();
    this.dir = new THREE.Vector3(1, 0, 0);
    this.history = [];
    this.open = 0;
    this.visibleAmount = 0;
    this.events = [];

    // ---- body geometry ----
    const vcount = RINGS * (RADIAL + 1);
    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(new Float32Array(vcount * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.norAttr = new THREE.BufferAttribute(new Float32Array(vcount * 3), 3).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('normal', this.norAttr);
    const colors = new Float32Array(vcount * 3);
    const skinA = new THREE.Color('#7d6b58');
    const skinB = new THREE.Color('#9a8670');
    const groove = new THREE.Color('#3b2e25');
    const c = new THREE.Color();
    this.jitter = new Float32Array(vcount);
    for (let i = 0; i < RINGS; i++) {
      const s = i * SPACING;
      const k = 0.5 + 0.5 * Math.cos((s / RIB) * Math.PI * 2);
      for (let j = 0; j <= RADIAL; j++) {
        const idx = i * (RADIAL + 1) + j;
        const jj = j % RADIAL;
        const n = Math.sin(jj * 1.7 + i * 0.37) * 0.5 + Math.sin(jj * 0.61 - i * 0.23) * 0.5;
        c.copy(skinA).lerp(skinB, 0.5 + 0.5 * n);
        c.lerp(groove, Math.pow(k, 6) * 0.85);
        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;
        this.jitter[idx] = 1 + (Math.sin(jj * 2.3 + i * 1.1) * Math.sin(i * 0.7 + jj * 0.4)) * 0.018;
      }
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const index = [];
    for (let i = 0; i < RINGS - 1; i++) {
      for (let j = 0; j < RADIAL; j++) {
        const a = i * (RADIAL + 1) + j;
        const b = a + 1;
        const d = a + (RADIAL + 1);
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
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform vec3 uDust;')
        .replace(
          '#include <normal_fragment_begin>',
          `#include <normal_fragment_begin>
          vec3 wN = inverseTransformDirection(normal, viewMatrix);
          diffuseColor.rgb = mix(diffuseColor.rgb, uDust, smoothstep(0.15, 0.85, wN.y) * 0.6);`,
        );
    };
    this.mesh = new THREE.Mesh(geo, skinMat);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.visible = false;
    scene.add(this.mesh);

    // ---- mouth ----
    this.headGroup = new THREE.Group();
    this.headGroup.matrixAutoUpdate = false;
    this.headGroup.visible = false;
    scene.add(this.headGroup);
    const petalMat = new THREE.MeshStandardMaterial({ color: '#86735e', roughness: 0.85, side: THREE.DoubleSide });
    petalMat.onBeforeCompile = (shader) => {
      shader.uniforms.uInner = { value: new THREE.Color('#6e3426') };
      shader.uniforms.uDust = { value: dustColor };
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform vec3 uInner;\nuniform vec3 uDust;')
        .replace(
          '#include <normal_fragment_begin>',
          `#include <normal_fragment_begin>
          vec3 wN = inverseTransformDirection(normal, viewMatrix);
          diffuseColor.rgb = gl_FrontFacing ? mix(diffuseColor.rgb, uDust, smoothstep(0.2, 0.9, wN.y) * 0.5) : uInner;`,
        );
    };
    const toothMat = new THREE.MeshStandardMaterial({ color: '#e8dcc0', roughness: 0.35, metalness: 0.05 });
    this.petals = [];
    for (let k = 0; k < 3; k++) {
      const p = buildPetal(k, 4.2);
      const pivot = new THREE.Group();
      pivot.position.copy(p.pivot);
      const skin = new THREE.Mesh(p.geo, petalMat);
      const teeth = new THREE.Mesh(p.teethGeo, toothMat);
      for (const m of [skin, teeth]) {
        m.castShadow = true;
        m.receiveShadow = true;
        pivot.add(m);
      }
      this.headGroup.add(pivot);
      this.petals.push({ pivot, axis: p.axis });
    }
    // throat: dark flesh with rings of baleen-like teeth, faint spice glow deep inside
    const throatGeo = new THREE.CylinderGeometry(R_LIP * 0.96, R_LIP * 0.35, 7, RADIAL, 6, true);
    throatGeo.rotateX(-Math.PI / 2);
    throatGeo.translate(0, 0, -3.5);
    const throat = new THREE.Mesh(
      throatGeo,
      new THREE.MeshStandardMaterial({ color: '#2a100c', roughness: 0.6, side: THREE.BackSide, emissive: new THREE.Color('#ff5a1a'), emissiveIntensity: 0.12 }),
    );
    this.headGroup.add(throat);
    const glow = new THREE.Mesh(new THREE.CircleGeometry(R_LIP * 0.38, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 0.75, 0.2) }));
    glow.position.z = -6.8;
    this.headGroup.add(glow);
    const ringTeeth = [];
    for (let rI = 0; rI < 4; rI++) {
      const z = -0.4 - rI * 1.3;
      const rr = R_LIP * (0.95 - rI * 0.12);
      const n = 34 - rI * 4;
      for (let i = 0; i < n; i++) {
        const ang = (i / n) * Math.PI * 2 + rI * 0.3;
        const t = new THREE.ConeGeometry(0.06, 0.55 - rI * 0.07, 4);
        const inward = new THREE.Vector3(-Math.cos(ang), -Math.sin(ang), -0.5).normalize();
        t.applyMatrix4(_m.makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(UPV, inward)));
        t.translate(Math.cos(ang) * rr, Math.sin(ang) * rr, z);
        ringTeeth.push(t);
      }
    }
    this.headGroup.add(new THREE.Mesh(mergeGeometries(ringTeeth), toothMat));

    // reusable ring frames
    this.centers = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.tangents = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.normals = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.binormals = Array.from({ length: RINGS }, () => new THREE.Vector3());
    this.radii = new Float32Array(RINGS);
    for (let i = 0; i < RINGS; i++) this.radii[i] = radiusAt(i);
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
    this.open = 0;
    this.path = null;
    this.breached = false;
    this.dived = false;
    this.swallowed = false;
    this.speed = 10.5;
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
      // mouth opens as it nears the surface and snaps shut over the top of the arc
      const s = P.s;
      let openT = 0;
      if (s > m.surface - 6 && s < m.arcStart + (m.arcEnd - m.arcStart) * 0.35) openT = 1;
      this.open += (openT - this.open) * (1 - Math.exp(-dt * (openT > this.open ? 2.4 : 3.2)));
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
      this.open += (0 - this.open) * (1 - Math.exp(-dt * 3));
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
    N[0].copy(UPV).addScaledVector(T[0], -UPV.dot(T[0]));
    if (N[0].lengthSq() < 1e-6) N[0].set(1, 0, 0).addScaledVector(T[0], -T[0].x);
    N[0].normalize();
    B[0].crossVectors(T[0], N[0]).normalize();
    for (let i = 1; i < RINGS; i++) {
      N[i].copy(N[i - 1]).addScaledVector(T[i], -N[i - 1].dot(T[i])).normalize();
      B[i].crossVectors(T[i], N[i]).normalize();
    }

    const pos = this.posAttr.array;
    const nor = this.norAttr.array;
    const R = this.radii;
    const J = this.jitter;
    for (let i = 0; i < RINGS; i++) {
      const dR = (R[Math.max(0, i - 1)] - R[Math.min(RINGS - 1, i + 1)]) / (2 * SPACING);
      for (let j = 0; j <= RADIAL; j++) {
        const th = (j / RADIAL) * Math.PI * 2;
        const cs = Math.cos(th);
        const sn = Math.sin(th);
        const rx = N[i].x * cs + B[i].x * sn;
        const ry = N[i].y * cs + B[i].y * sn;
        const rz = N[i].z * cs + B[i].z * sn;
        const idx = i * (RADIAL + 1) + j;
        const r = R[i] * J[idx];
        pos[idx * 3] = C[i].x + rx * r;
        pos[idx * 3 + 1] = C[i].y + ry * r;
        pos[idx * 3 + 2] = C[i].z + rz * r;
        let nx = rx - T[i].x * dR;
        let ny = ry - T[i].y * dR;
        let nz = rz - T[i].z * dR;
        const l = Math.hypot(nx, ny, nz) || 1;
        nor[idx * 3] = nx / l;
        nor[idx * 3 + 1] = ny / l;
        nor[idx * 3 + 2] = nz / l;
      }
    }
    this.posAttr.needsUpdate = true;
    this.norAttr.needsUpdate = true;

    // mouth frame: x = N, y = B, z = T (forward)
    _m.makeBasis(N[0], B[0], T[0]);
    _m.setPosition(C[0]);
    this.headGroup.matrix.copy(_m);
    this.headGroup.matrixWorldNeedsUpdate = true;
    const open = this.open;
    for (let k = 0; k < 3; k++) {
      const p = this.petals[k];
      p.pivot.quaternion.setFromAxisAngle(p.axis, open * 1.05);
    }

    // where the body pierces the sand (for spray + sand disturbance)
    let prevAbove = C[0].y - groundHeight(C[0].x, C[0].z) > 0;
    this.visibleAmount = prevAbove ? 1 : 0;
    for (let i = 4; i < RINGS; i += 4) {
      const above = C[i].y - groundHeight(C[i].x, C[i].z) > 0;
      if (above) this.visibleAmount++;
      if (above !== prevAbove) this.crossings.push({ x: C[i].x, z: C[i].z, up: above });
      prevAbove = above;
    }
  }

  // world position of the part of the worm most worth looking at
  get focus() {
    return this.head;
  }
}
