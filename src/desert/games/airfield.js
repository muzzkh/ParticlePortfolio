import * as THREE from 'three';
import { groundHeight } from '../noise.js';
import { makeRockGeometry } from '../rocks.js';
import { Ornithopter } from '../ornithopter.js';
import { groundRing, mulberry32 } from './common.js';

// The Airfield: a stone pad with an ornithopter on it. Climb aboard and fly out over the
// erg, under the wall of a Coriolis storm: hold to beat the wings and climb, let go to
// glide down. Thread the gaps between the rock spires and the overhangs that hang from
// the cliffs; fly through the spice rings for extra.

const PAD_R = 3.2;
const PAD_TOP = 0.45;
const STORM = 15; // the storm ceiling above the (smoothed) ground
const GATES = 8;
const RIBBON = 26; // storm ribbon: points, 6 m apart

export class Airfield {
  static meta = {
    id: 'fly',
    title: 'Airfield',
    kicker: 'Game · Ornithopter',
    howto: 'Hold to climb, let go to glide. Thread the gaps; keep under the storm.',
    keys: 'Hold Space, W, ↑ or the mouse button to climb · Esc to leave',
    touchKeys: 'Hold anywhere on the screen to climb',
    buttons: [],
  };

  constructor(ctx) {
    this.ctx = ctx;
    this.group = new THREE.Group();
    this.group.name = 'airfield';
    ctx.scene.add(this.group);
    this.pad = new THREE.Vector3();
    this.startPoint = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.D = [1, 0];
    this.view = { focus: new THREE.Vector3(), yaw: 0, pitch: THREE.MathUtils.degToRad(22), height: 22 };

    const stone = new THREE.MeshStandardMaterial({ color: '#6f5240', roughness: 0.92, flatShading: true });
    this.padMesh = new THREE.Mesh(new THREE.CylinderGeometry(PAD_R, PAD_R + 0.25, 1.4, 10), stone);
    this.padMesh.castShadow = true;
    this.padMesh.receiveShadow = true;
    this.padRing = new THREE.Mesh(new THREE.RingGeometry(PAD_R - 0.5, PAD_R - 0.35, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.8, 0.3), transparent: true, opacity: 0.8 }));
    // a windsock
    this.sock = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 2.6, 6).translate(0, 1.3, 0), new THREE.MeshStandardMaterial({ color: '#3b2a20' }));
    pole.castShadow = true;
    this.sockCloth = new THREE.Mesh(new THREE.ConeGeometry(0.22, 1.1, 10, 1, true).rotateZ(-Math.PI / 2).translate(0.55, 0, 0), new THREE.MeshStandardMaterial({ color: '#ff8a3d', emissive: '#6a2405', side: THREE.DoubleSide }));
    this.sockCloth.position.y = 2.45;
    this.sock.add(pole, this.sockCloth);
    this.thopter = new Ornithopter();
    this.group.add(this.padMesh, this.padRing, this.sock, this.thopter.root);

    // spires, overhangs and their cliffs, and spice rings, reused as the course goes on
    const rng = mulberry32(777);
    this.spireGeos = [0, 1, 2].map(() => makeRockGeometry(rng, 1.25, 1, 1.25, 6));
    this.slabGeos = [0, 1, 2].map(() => makeRockGeometry(rng, 1.6, 1, 1.5, 5));
    const mk = (geo) => {
      const m = new THREE.Mesh(geo, ctx.rockMaterial);
      m.castShadow = true;
      m.receiveShadow = true;
      m.visible = false;
      this.group.add(m);
      return m;
    };
    const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1.4, 0.35) });
    this.gates = [];
    for (let i = 0; i < GATES; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.07, 8, 28), ringMat);
      ring.visible = false;
      this.group.add(ring);
      this.gates.push({ spire: mk(this.spireGeos[i % 3]), slab: mk(this.slabGeos[i % 3]), ring, used: false });
    }

    // the storm overhead: a ribbon of dark, drifting sand
    const tex = stormTexture();
    this.stormTex = tex;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(RIBBON * 2 * 3), 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(RIBBON * 2 * 2), 2));
    const idx = [];
    for (let i = 0; i < RIBBON - 1; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    geo.setIndex(idx);
    this.storm = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, color: '#6b4a32', transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }));
    this.storm.visible = false;
    this.storm.frustumCulled = false;
    this.storm.renderOrder = 6;
    this.group.add(this.storm);

    this.ring = null;
    this.ceilCache = new Map();
    this.rng = mulberry32(31337);
    this.holding = false;
  }

  place(x, z, out) {
    this.D = out;
    this.far = [out[1], -out[0]]; // the side away from the camera while flying
    this.yaw = Math.atan2(out[0], out[1]);
    let low = Infinity;
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      low = Math.min(low, groundHeight(x + Math.cos(a) * PAD_R, z + Math.sin(a) * PAD_R));
    }
    this.pad.set(x, low + PAD_TOP, z);
    this.padMesh.position.set(x, this.pad.y - 0.7, z);
    this.padRing.position.set(x, this.pad.y + 0.02, z);
    const wx = x + this.far[0] * (PAD_R + 0.8) - out[0] * 1.5;
    const wz = z + this.far[1] * (PAD_R + 0.8) - out[1] * 1.5;
    this.sock.position.set(wx, groundHeight(wx, wz) - 0.1, wz);
    this._park();
    const sx = x - out[0] * (PAD_R + 1.8);
    const sz = z - out[1] * (PAD_R + 1.8);
    this.startPoint.set(sx, groundHeight(sx, sz), sz);
    if (this.ring) {
      this.group.remove(this.ring);
      this.ring.geometry.dispose();
    }
    this.ring = groundRing(sx, sz, 0.75, 0.95, new THREE.Color(1.6, 0.85, 0.3));
    this.group.add(this.ring);
    this.anchor.set(x, this.pad.y + 4.4, z);
    this.ceilCache.clear();
  }

  _park() {
    this.x = this.pad.x;
    this.z = this.pad.z;
    this.y = this.pad.y;
    this.vy = 0;
    this.lift = 0;
    this.tumble = 0;
    this.thopter.yaw = this.yaw;
    this.thopter.root.position.set(this.x, this.pad.y, this.z);
    this.thopter.root.rotation.set(0, this.yaw, 0);
    this.thopter.body.rotation.set(0, 0, 0);
  }

  _s(x, z) {
    return (x - this.pad.x) * this.D[0] + (z - this.pad.z) * this.D[1];
  }
  _across(x, z) {
    return (x - this.pad.x) * this.far[0] + (z - this.pad.z) * this.far[1];
  }
  _point(s, across = 0) {
    return [this.pad.x + this.D[0] * s + this.far[0] * across, this.pad.z + this.D[1] * s + this.far[1] * across];
  }

  // the ground under the course, smoothed over 60 m: the storm and the gaps follow it
  _base(s) {
    const k = Math.round(s / 5);
    let v = this.ceilCache.get(k);
    if (v === undefined) {
      let sum = 0;
      let n = 0;
      for (let d = -30; d <= 30; d += 5) {
        const [x, z] = this._point(k * 5 + d);
        sum += groundHeight(x, z);
        n++;
      }
      v = sum / n;
      if (this.ceilCache.size > 400) this.ceilCache.clear();
      this.ceilCache.set(k, v);
    }
    return v;
  }
  _baseAt(s) {
    const a = Math.floor(s / 5);
    const f = s / 5 - a;
    return this._base(a * 5) * (1 - f) + this._base((a + 1) * 5) * f;
  }

  keepsClear(x, z, r) {
    const s = this._s(x, z);
    return (Math.hypot(x - this.pad.x, z - this.pad.z) < PAD_R + 3 + r) || (s > 0 && s < 50 + r && Math.abs(this._across(x, z)) < 6 + r);
  }

  corridor(x, z, r) {
    return this._s(x, z) > -PAD_R - 2 - r && Math.abs(this._across(x, z)) < 9 + r;
  }

  collide(pos, r, vel) {
    const dx = pos.x - this.pad.x;
    const dz = pos.z - this.pad.z;
    const d = Math.hypot(dx, dz);
    const min = PAD_R + 0.2 + r;
    if (d < min && d > 1e-4) {
      pos.x = this.pad.x + (dx / d) * min;
      pos.z = this.pad.z + (dz / d) * min;
      if (vel) {
        const vn = (vel.x * dx + vel.z * dz) / d;
        if (vn < 0) {
          vel.x -= (vn * dx) / d;
          vel.z -= (vn * dz) / d;
        }
      }
    }
  }

  idle(dt, t, near) {
    if (this.ring) this.ring.material.opacity = 0.55 + 0.3 * Math.sin(t * 2.2);
    this.lift += ((near ? 0.12 : 0) - this.lift) * (1 - Math.exp(-dt * 2));
    this.thopter.update(dt, t, this.lift, null);
    this.sockCloth.rotation.y = Math.sin(t * 0.7) * 0.4 + 0.6;
    this.sockCloth.rotation.z = Math.sin(t * 2.3) * 0.08;
  }

  // ---------------------------------------------------------------- the game
  reset(api) {
    this._park();
    this.easy = !!(api && api.portrait());
    this.speed = 9;
    this.gatesPassed = 0;
    this.spice = 0;
    this.next = 34;
    this.gatesSpawned = 0;
    this.holding = false;
    this.crashed = false;
    this.active = [];
    for (const g of this.gates) this._hideGate(g);
    while (this.next < 120) this._spawnGate();
    this._ribbon(0);
    this.storm.visible = true;
  }

  _hideGate(g) {
    g.spire.visible = g.slab.visible = g.ring.visible = false;
    g.s = null;
  }

  _spawnGate() {
    const g = this.gates.find((x) => x.s === null || x.s === undefined);
    const s = this.next;
    const rng = this.rng;
    this.next += Math.max(20, 32 - this.gatesSpawned * 0.4) + rng() * 8;
    this.gatesSpawned++;
    if (!g) return;
    const base = this._baseAt(s);
    const half = Math.max(2.15, 3.1 - s / 700) + (this.easy ? 0.4 : 0);
    const c = base + 4.2 + rng() * (STORM - 8.4);
    g.s = s;
    g.low = c - half;
    g.high = c + half;
    g.used = false;
    const [x, z] = this._point(s);
    const ground = groundHeight(x, z);
    // a spire up from the sand to the bottom of the gap
    if (g.low > ground + 0.4) {
      const h = g.low - (ground - 1);
      g.spire.visible = true;
      g.spire.scale.set(1, h / 2, 1);
      g.spire.position.set(x, ground - 1 + h / 2, z);
      g.spire.rotation.y = rng() * 6;
    }
    // a slab of rock carried in the storm, hanging down to the top of the gap
    const top = base + STORM + 4;
    const sh = top - g.high;
    g.slab.visible = true;
    g.slab.scale.set(1, sh / 2, 1);
    g.slab.position.set(x, g.high + sh / 2, z);
    g.slab.rotation.set(Math.PI, this.yaw + rng() * 0.6, 0);
    // spice in the gap
    g.ring.visible = rng() < 0.65;
    g.ringY = c + (rng() - 0.5) * half * 0.8;
    g.ring.position.set(x, g.ringY, z);
    g.ring.rotation.set(0, this.yaw, 0);
    this.active.push(g);
  }

  // the storm ribbon from a little behind `s` to well ahead
  _ribbon(s) {
    const pos = this.storm.geometry.getAttribute('position');
    const uv = this.storm.geometry.getAttribute('uv');
    const from = Math.floor((s - 30) / 6) * 6;
    for (let i = 0; i < RIBBON; i++) {
      const ds = from + i * 6;
      const y = this._baseAt(ds) + STORM;
      const [nx, nz] = this._point(ds, -7);
      const [fx, fz] = this._point(ds, 9);
      pos.setXYZ(i * 2, nx, y, nz);
      pos.setXYZ(i * 2 + 1, fx, y + 0.6, fz);
      uv.setXY(i * 2, ds / 24, 0);
      uv.setXY(i * 2 + 1, ds / 24, 1);
    }
    pos.needsUpdate = true;
    uv.needsUpdate = true;
    this.storm.geometry.computeBoundingSphere();
    this.ribbonFrom = from;
  }

  key(code, down) {
    if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW') {
      this.holding = down;
      return true;
    }
    return false;
  }

  pointer(type) {
    if (type === 'down') this.holding = true;
    else if (type === 'up') this.holding = false;
  }

  touch() {}

  step(dt, t, state, api) {
    const { particles, audio, tint } = this.ctx;
    const th = this.thopter;
    this.stormTex.offset.x = t * 0.05;
    if (state === 'ready') {
      // climb off the pad and turn to the course
      this.lift = Math.min(1, this.lift + dt * 0.9);
      th.update(dt, t, this.lift, this.yaw);
      th.root.position.set(this.x, this.pad.y, this.z);
      this.y = this.pad.y + th.body.position.y;
      api.thrum(this.lift);
      return null;
    }
    if (state === 'over') {
      // tumble down to the sand
      const ground = groundHeight(this.x, this.z);
      if (this.y > ground + 0.4) {
        this.vy -= 14 * dt;
        this.y = Math.max(ground + 0.4, this.y + this.vy * dt);
        this.x += this.D[0] * this.speed * 0.4 * dt;
        this.z += this.D[1] * this.speed * 0.4 * dt;
        this.tumble += dt * 3;
        if (this.y <= ground + 0.4) {
          particles.burst(this.x, ground + 0.2, this.z, 70, 3, tint(), { radius: 1, dust: 0.6, puff: 1 });
          audio.blip('die');
        }
      }
      th.update(dt * 0.3, t, 0.4, null);
      th.root.position.set(this.x, this.y - th.body.position.y, this.z);
      th.root.rotation.set(Math.min(0.6, this.tumble * 0.2), this.yaw, Math.min(1.2, this.tumble * 0.5), 'YXZ');
      api.thrum(0);
      return null;
    }

    // flying
    this.speed = Math.min(14, 9 + this.gatesPassed * 0.18) * (this.easy ? 0.78 : 1);
    this.vy += (this.holding ? 15 : -11) * dt;
    this.vy = Math.max(-7.5, Math.min(6.5, this.vy));
    this.y += this.vy * dt;
    this.x += this.D[0] * this.speed * dt;
    this.z += this.D[1] * this.speed * dt;
    const s = this._s(this.x, this.z);
    const ground = groundHeight(this.x, this.z);
    const ceil = this._baseAt(s) + STORM;
    // the storm pushes you back down, roughly
    if (this.y > ceil - 0.9) {
      this.y = ceil - 0.9;
      this.vy = Math.min(this.vy, -2.5);
      if (Math.random() < 0.3) particles.burst(this.x, this.y + 0.5, this.z, 6, 0.8, tint(), { radius: 0.6, dust: 0.6, puff: 0.6 });
    }
    th.update(dt * (this.holding ? 1.7 : 0.8), t, 1, null);
    th.root.position.set(this.x, this.y - th.body.position.y, this.z);
    th.root.rotation.set(-this.vy * 0.045, this.yaw, Math.sin(t * 1.3) * 0.05, 'YXZ');
    api.thrum(this.holding ? 1 : 0.65);

    // the downwash raises dust when you skim the sand
    if (this.y - ground < 4 && Math.random() < dt * 20) {
      particles.burst(this.x, ground + 0.1, this.z, 4, 0.9, tint(), { radius: 0.8, dust: 0.8, puff: 0.7, dustAlpha: 0.2 });
    }

    if (this.y < ground + 0.6) return this._crash(api);
    for (const g of this.active) {
      if (g.s === null) continue;
      const ds = s - g.s;
      if (Math.abs(ds) < 1.3 && (this.y < g.low + 0.45 || this.y > g.high - 0.45)) return this._crash(api);
      if (!g.used && ds > 1.3) {
        g.used = true;
        this.gatesPassed++;
        audio.blip('clear');
      }
      if (g.ring.visible && Math.abs(ds) < 0.8 && Math.abs(this.y - g.ringY) < 1.1) {
        g.ring.visible = false;
        this.spice++;
        particles.burst(this.x, this.y, this.z, 20, 1.4, tint(), { radius: 0.3, dust: 0.1 });
        audio.blip('pickup');
      }
    }
    // forget gates behind, add gates ahead, move the storm along
    for (const g of this.active) if (g.s !== null && g.s < s - 30) this._hideGate(g);
    this.active = this.active.filter((g) => g.s !== null);
    while (this.next < s + 110) this._spawnGate();
    if (s - this.ribbonFrom > 60) this._ribbon(s);
    for (const g of this.active) if (g.ring.visible) g.ring.rotation.z = t * 1.5;
    api.setScore(this.gatesPassed + this.spice * 2, `${this.gatesPassed} gates · ${this.spice} spice`);
    return null;
  }

  _crash(api) {
    this.vy = Math.min(this.vy, 0);
    this.ctx.audio.blip('hit');
    this.ctx.particles.burst(this.x, this.y, this.z, 30, 2, this.ctx.tint(), { radius: 0.6, dust: 0.4 });
    api.thrum(0);
    return 'crash';
  }

  // you're aboard: the walker is out of sight
  walker() {
    return { hold: true, hidden: true };
  }

  updateView(aspect) {
    this.view.yaw = Math.atan2(-this.D[1], this.D[0]); // the course runs to the right
    this.view.height = Math.max(21, 17 / aspect);
    const s = this._s(this.x, this.z);
    const base = this._baseAt(s);
    const ahead = Math.min(8, (this.view.height * aspect) / 4);
    // mostly the band between the sand and the storm, nudged toward the craft
    const y = (base + STORM * 0.5) * 0.7 + this.y * 0.3;
    this.view.focus.set(this.x + this.D[0] * ahead, y, this.z + this.D[1] * ahead);
  }

  end() {
    for (const g of this.gates) this._hideGate(g);
    this.active = [];
    this.storm.visible = false;
    this.holding = false;
    this._park();
  }
}

function stormTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 64;
  const g = c.getContext('2d');
  const img = g.createImageData(256, 64);
  const rng = mulberry32(5);
  // soft value noise, darker and denser toward the top
  const grid = [];
  for (let i = 0; i < 33 * 9; i++) grid.push(rng());
  const at = (x, y) => grid[(y % 9) * 33 + (x % 33)];
  for (let y = 0; y < 64; y++) {
    for (let x = 0; x < 256; x++) {
      const gx = (x / 256) * 32;
      const gy = (y / 64) * 8;
      const ix = Math.floor(gx);
      const iy = Math.floor(gy);
      const fx = gx - ix;
      const fy = gy - iy;
      const a = at(ix, iy) * (1 - fx) + at(ix + 1, iy) * fx;
      const b = at(ix, iy + 1) * (1 - fx) + at(ix + 1, iy + 1) * fx;
      const n = a * (1 - fy) + b * fy;
      const i = (y * 256 + x) * 4;
      const v = 150 + n * 105;
      img.data[i] = v;
      img.data[i + 1] = v * 0.86;
      img.data[i + 2] = v * 0.7;
      img.data[i + 3] = Math.min(255, (0.45 + n * 0.55) * 255);
    }
  }
  g.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
