import * as THREE from 'three';
import { groundHeight } from '../noise.js';
import { STAMP } from '../trails.js';
import { TAU, angleTo, groundRing, spiceOrb, mulberry32 } from './common.js';

// The Worm Pit: a ring of stone teeth around open sand. Inside it you steer a young
// sandworm: swallow spice to grow, and don't bite the ring or your own tail.

const R = 9; // arena radius
const SEG = 0.42; // spacing of the body rings
const STEP = 0.1; // spacing of the recorded path
const MAX_SEG = 180;
const START_LEN = 8;
const POSTS = 30;

const BODY = new THREE.Color('#b98a5c');
const BODY_DARK = new THREE.Color('#7d5536');

export class WormPit {
  static meta = {
    id: 'worm',
    title: 'Worm Pit',
    kicker: 'Game · Sandworm',
    howto: 'Swallow the spice to grow. Keep off the stones and your own tail.',
    keys: 'A / D or ← → to turn · or hold the mouse where to go · Esc to leave',
    touchKeys: 'Hold ◀ ▶ to turn, or touch where to go',
    buttons: [
      { id: 'left', label: '◀', aria: 'Turn left' },
      { id: 'right', label: '▶', aria: 'Turn right' },
    ],
  };

  constructor(ctx) {
    this.ctx = ctx;
    this.group = new THREE.Group();
    this.group.name = 'worm-pit';
    ctx.scene.add(this.group);
    this.center = new THREE.Vector3();
    this.startPoint = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.radius = R + 2.6; // what the layout keeps clear

    // the stone teeth
    const postGeo = new THREE.CylinderGeometry(0.1, 0.3, 1, 6, 1).translate(0, 0.5, 0);
    this.posts = new THREE.InstancedMesh(postGeo, new THREE.MeshStandardMaterial({ color: '#8a6a52', roughness: 0.95, flatShading: true }), POSTS);
    this.posts.castShadow = true;
    this.posts.receiveShadow = true;
    this.group.add(this.posts);
    this.ring = null;

    // the worm: rings of the body, instanced, and a head with an open maw
    this.body = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 14, 10), new THREE.MeshStandardMaterial({ roughness: 0.82 }), MAX_SEG);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.body.count = 0;
    this.body.frustumCulled = false;
    for (let i = 0; i < MAX_SEG; i++) this.body.setColorAt(i, i % 3 === 2 ? BODY_DARK : BODY);
    this.head = new THREE.Group();
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.46, 18, 14), new THREE.MeshStandardMaterial({ color: BODY, roughness: 0.8 }));
    skull.scale.set(1, 0.9, 1.1);
    skull.castShadow = true;
    const lip = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.07, 8, 20), new THREE.MeshStandardMaterial({ color: '#e0b58c', roughness: 0.6 }));
    lip.position.z = 0.44;
    const maw = new THREE.Mesh(new THREE.CircleGeometry(0.29, 20), new THREE.MeshBasicMaterial({ color: '#2a0d06' }));
    maw.position.z = 0.455;
    const glow = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 0.7, 0.25) }));
    glow.position.z = 0.46;
    this.head.add(skull, lip, maw, glow);
    for (let k = 0; k < 8; k++) {
      const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.13, 5), new THREE.MeshStandardMaterial({ color: '#f3e3c8', roughness: 0.4 }));
      const a = (k / 8) * TAU;
      tooth.position.set(Math.cos(a) * 0.24, Math.sin(a) * 0.24, 0.47);
      tooth.rotation.set(Math.PI / 2, 0, a - Math.PI / 2);
      this.head.add(tooth);
    }
    this.head.visible = false;
    this.group.add(this.body, this.head);

    this.orb = spiceOrb();
    this.orb.visible = false;
    this.group.add(this.orb);

    this.path = [];
    this.len = START_LEN;
    this.lenTarget = START_LEN;
    this.left = false;
    this.right = false;
    this.steer = null;
    this.view = { focus: new THREE.Vector3(), yaw: null, pitch: THREE.MathUtils.degToRad(55), height: 20 };
    this.rng = mulberry32(7);
  }

  // out: unit [x, z] pointing away from where visitors start
  place(x, z, out) {
    this.center.set(x, groundHeight(x, z), z);
    this.out = out;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();
    const rng = mulberry32(Math.floor(x * 13 + z * 7) >>> 0);
    for (let i = 0; i < POSTS; i++) {
      const a = (i / POSTS) * TAU + rng() * 0.05;
      const px = x + Math.cos(a) * (R + 0.35);
      const pz = z + Math.sin(a) * (R + 0.35);
      const h = 0.8 + rng() * 0.9;
      p.set(px, groundHeight(px, pz) - 0.15, pz);
      // lean a little outward, like ribs
      e.set(Math.sin(a) * 0.14, rng() * 3, -Math.cos(a) * 0.14);
      q.setFromEuler(e);
      s.set(1 + rng() * 0.4, h, 1 + rng() * 0.4);
      m.compose(p, q, s);
      this.posts.setMatrixAt(i, m);
    }
    this.posts.instanceMatrix.needsUpdate = true;
    this.posts.computeBoundingSphere();
    // stand just outside the ring, on the side facing the start
    const sx = x - out[0] * (R + 2.2);
    const sz = z - out[1] * (R + 2.2);
    this.startPoint.set(sx, groundHeight(sx, sz), sz);
    if (this.ring) {
      this.group.remove(this.ring);
      this.ring.geometry.dispose();
    }
    this.ring = groundRing(sx, sz, 0.75, 0.95, new THREE.Color(1.6, 0.85, 0.3));
    this.group.add(this.ring);
    this.anchor.set(x, this.center.y + 3.2, z);
  }

  keepsClear(x, z, r) {
    return Math.hypot(x - this.center.x, z - this.center.z) < this.radius + r;
  }

  // the teeth are for the worm; people step between them
  collide() {}

  idle(dt, t) {
    if (this.ring) this.ring.material.opacity = 0.55 + 0.3 * Math.sin(t * 2.2);
  }

  // ---------------------------------------------------------------- the game
  reset() {
    // the worm comes up in the middle, heading away from you
    this.heading = Math.atan2(this.out[0], this.out[1]);
    this.headX = this.center.x;
    this.headZ = this.center.z;
    this.path = [];
    const bx = -Math.sin(this.heading);
    const bz = -Math.cos(this.heading);
    const need = Math.ceil((MAX_SEG * SEG) / STEP);
    for (let i = need; i >= 0; i--) this.path.push({ x: this.headX + bx * i * STEP * 0.25, z: this.headZ + bz * i * STEP * 0.25 });
    this.travel = 0;
    this.len = START_LEN;
    this.lenTarget = START_LEN;
    this.rise = 0;
    this.sink = 0;
    this.left = this.right = false;
    this.steer = null;
    this.speed = 3.4;
    this.head.visible = true;
    this.body.count = this.len;
    this._placeOrb();
  }

  _placeOrb() {
    for (let tries = 0; tries < 40; tries++) {
      const a = this.rng() * TAU;
      const d = Math.sqrt(this.rng()) * (R - 1.8);
      const x = this.center.x + Math.cos(a) * d;
      const z = this.center.z + Math.sin(a) * d;
      if (Math.hypot(x - this.headX, z - this.headZ) < 3) continue;
      if (this._onBody(x, z, 1.2, 0)) continue;
      this.orbX = x;
      this.orbZ = z;
      this.orb.visible = true;
      return;
    }
    this.orbX = this.center.x;
    this.orbZ = this.center.z;
  }

  // a point of the recorded path, `dist` metres back from the head (which runs
  // `travel` ahead of the last recorded point)
  _at(dist, out) {
    const f = Math.max(0, dist - this.travel) / STEP;
    const n = this.path.length - 1;
    const i = Math.min(n - 1, Math.floor(f));
    const k = f - i;
    const a = this.path[n - i];
    const b = this.path[Math.max(0, n - i - 1)];
    out.x = a.x + (b.x - a.x) * k;
    out.z = a.z + (b.z - a.z) * k;
    return out;
  }

  _onBody(x, z, r, from) {
    const p = { x: 0, z: 0 };
    for (let i = from; i < this.len; i++) {
      this._at((i + 1) * SEG, p);
      if (Math.hypot(x - p.x, z - p.z) < r) return true;
    }
    return false;
  }

  key(code, down) {
    if (code === 'ArrowLeft' || code === 'KeyA') this.left = down;
    else if (code === 'ArrowRight' || code === 'KeyD') this.right = down;
    else return false;
    return true;
  }

  pointer(type, ground) {
    if (type === 'up') this.steer = null;
    else if (ground) this.steer = { x: ground.x, z: ground.z };
  }

  touch(id, down) {
    if (id === 'left') this.left = down;
    if (id === 'right') this.right = down;
  }

  // returns 'crash' when the run ends
  step(dt, t, state, api) {
    const { particles, trails, audio, tint } = this.ctx;
    if (state === 'ready') {
      this.rise = Math.min(1, this.rise + dt * 1.2);
    } else if (state === 'over') {
      this.sink = Math.min(1, this.sink + dt * 0.9);
    } else if (state === 'play') {
      // steer: keys turn, a held pointer pulls the head round toward it
      let turn = (this.left ? 1 : 0) - (this.right ? 1 : 0);
      if (this.steer && !turn) {
        const want = Math.atan2(this.steer.x - this.headX, this.steer.z - this.headZ);
        const d = angleTo(this.heading, want);
        turn = Math.abs(d) < 0.05 ? 0 : Math.sign(d) * Math.min(1, Math.abs(d) * 2.5);
      }
      this.heading += turn * 2.9 * dt;
      const fx = Math.sin(this.heading);
      const fz = Math.cos(this.heading);
      const ds = this.speed * dt;
      // record the path at even spacing
      let moved = this.travel + ds;
      let last = this.path[this.path.length - 1];
      this.headX += fx * ds;
      this.headZ += fz * ds;
      while (moved >= STEP) {
        moved -= STEP;
        last = { x: last.x + fx * STEP, z: last.z + fz * STEP };
        this.path.push(last);
      }
      this.travel = moved;
      // the head sits ahead of the last recorded point by `travel`
      const keep = Math.ceil((MAX_SEG * SEG) / STEP) + 4;
      if (this.path.length > keep) this.path.splice(0, this.path.length - keep);
      // grow a ring at a time
      if (this.len < this.lenTarget) this.len = Math.min(this.lenTarget, this.len + dt * 8);
      trails.stamp(STAMP.FURROW, this.headX, this.headZ, Math.atan2(fz, fx), 0.9, 0.75, 0.05, 0.03, 0.8);
      if (Math.random() < dt * 14) particles.kick(this.headX, groundHeight(this.headX, this.headZ), this.headZ, fx, fz, this.speed, tint());

      // spice
      if (Math.hypot(this.headX - this.orbX, this.headZ - this.orbZ) < 0.75) {
        api.addScore(1);
        this.lenTarget = Math.min(MAX_SEG - 1, this.lenTarget + 3);
        this.speed = Math.min(6.4, this.speed + 0.12);
        particles.burst(this.orbX, groundHeight(this.orbX, this.orbZ) + 0.3, this.orbZ, 26, 1.6, tint(), { radius: 0.2, dust: 0.2 });
        audio.blip('pickup');
        this._placeOrb();
      }
      // the ring of teeth, and the tail
      const fromCenter = Math.hypot(this.headX - this.center.x, this.headZ - this.center.z);
      if (fromCenter > R - 0.5 || this._onBody(this.headX, this.headZ, 0.5, 8)) {
        particles.burst(this.headX, groundHeight(this.headX, this.headZ) + 0.2, this.headZ, 60, 2.6, tint(), { radius: 0.4, dust: 0.5 });
        audio.blip('die');
        return 'crash';
      }
    }
    this._draw(t);
    return null;
  }

  _draw(t) {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const s = new THREE.Vector3();
    const p = new THREE.Vector3();
    const a = { x: 0, z: 0 };
    const b = { x: 0, z: 0 };
    const sink = this.sink * 0.9 + (1 - this.rise) * 0.7;
    const n = Math.floor(this.len);
    const yAxis = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < n; i++) {
      const d = (i + 1) * SEG;
      this._at(d, a);
      this._at(d + 0.2, b);
      const taper = 1 - 0.55 * (i / Math.max(1, n)) ** 2;
      const r = 0.36 * taper;
      const wave = Math.sin(t * 7 - i * 0.7) * 0.04;
      p.set(a.x, groundHeight(a.x, a.z) + r * 0.35 + wave - sink, a.z);
      q.setFromAxisAngle(yAxis, Math.atan2(a.x - b.x, a.z - b.z));
      s.set(r, r * 0.85, r * 1.25);
      m.compose(p, q, s);
      this.body.setMatrixAt(i, m);
    }
    this.body.count = n;
    this.body.instanceMatrix.needsUpdate = true;
    if (this.body.instanceColor) this.body.instanceColor.needsUpdate = true;
    const hy = groundHeight(this.headX, this.headZ);
    this.head.position.set(this.headX, hy + 0.3 - sink, this.headZ);
    this.head.rotation.set(-0.15 + Math.sin(t * 5) * 0.04, this.heading, 0, 'YXZ');
    if (this.orb.visible) this.orb.position.set(this.orbX, groundHeight(this.orbX, this.orbZ) + 0.45 + Math.sin(t * 3) * 0.08, this.orbZ);
  }

  updateView(aspect) {
    const across = 2 * R + 3.5;
    const fit = Math.max(across * Math.sin(this.view.pitch), across / aspect) * 1.06;
    // a tall phone can't fit the pit without shrinking the worm: follow the head instead
    const close = Math.min(fit, 28);
    const k = fit > close && this.head.visible ? 0.75 : 0;
    this.view.focus.set(this.center.x + (this.headX - this.center.x) * k, this.center.y + 0.4, this.center.z + (this.headZ - this.center.z) * k);
    this.view.height = close;
  }

  // the walker waits at the edge and watches
  walker() {
    return { hold: true };
  }

  end() {
    this.head.visible = false;
    this.body.count = 0;
    this.orb.visible = false;
    this.left = this.right = false;
    this.steer = null;
  }
}
