import * as THREE from 'three';
import { groundHeight } from '../noise.js';
import { makeRockGeometry } from '../rocks.js';
import { groundRing, spiceOrb, mulberry32 } from './common.js';
import { freshSeed } from '../rng.js';

// The Dune Run: a flagged track leading out across the open erg. The walker sprints on
// their own; you pick the lane and the moment to jump. Rock ridges can be jumped,
// boulders can't. Spice on the way is worth a detour. It gets faster the further you go.

const LANE = 2.2;
const LANES = [-1, 0, 1];
const EDGE = 3.6; // the flag stakes either side
const STAKE_EVERY = 8;
const STAKES = 18; // per side
const POOL = 24;
const ORBS = 14;
const MARK_EVERY = 2.5;
const MARKS = 36; // per lane line

export class DuneRun {
  static meta = {
    id: 'run',
    title: 'Dune Run',
    kicker: 'Game · Runner',
    howto: 'Jump the ridges, dodge the boulders, grab the spice.',
    keys: 'A / D or ← → to change lane · Space, W or ↑ to jump · Esc to leave',
    touchKeys: 'Swipe or tap ◀ ▶ to change lane · tap ▲ or swipe up to jump',
    buttons: [
      { id: 'left', label: '◀', aria: 'Lane to the left' },
      { id: 'jump', label: '▲', aria: 'Jump', cls: 'wide' },
      { id: 'right', label: '▶', aria: 'Lane to the right' },
    ],
  };

  constructor(ctx) {
    this.ctx = ctx;
    this.group = new THREE.Group();
    this.group.name = 'dune-run';
    ctx.scene.add(this.group);
    this.gate = new THREE.Vector3();
    this.startPoint = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.D = [0, 1];
    this.R = [1, 0];
    this.view = { focus: new THREE.Vector3(), yaw: 0, pitch: THREE.MathUtils.degToRad(42), height: 17 };

    // gate pylons with glowing caps
    const stone = new THREE.MeshStandardMaterial({ color: '#7d5a44', roughness: 0.9, flatShading: true });
    const cap = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.15, 0.35) });
    this.pylons = [0, 1].map(() => {
      const g = new THREE.Group();
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 3.2, 7).translate(0, 1.6, 0), stone);
      col.castShadow = true;
      col.receiveShadow = true;
      const top = new THREE.Mesh(new THREE.OctahedronGeometry(0.28, 0), cap);
      top.position.y = 3.5;
      g.add(col, top);
      g.userData.top = top;
      this.group.add(g);
      return g;
    });

    // flag stakes along the track, either side
    const stakeGeo = new THREE.CylinderGeometry(0.04, 0.05, 1.3, 5).translate(0, 0.65, 0);
    const flagGeo = new THREE.PlaneGeometry(0.42, 0.26).translate(0.21, 1.15, 0);
    this.stakes = new THREE.InstancedMesh(stakeGeo, new THREE.MeshStandardMaterial({ color: '#3b2a20', roughness: 0.9 }), STAKES * 2);
    this.flags = new THREE.InstancedMesh(flagGeo, new THREE.MeshStandardMaterial({ color: '#ff8a3d', emissive: '#7a2c06', side: THREE.DoubleSide, roughness: 0.8 }), STAKES * 2);
    this.stakes.castShadow = this.flags.castShadow = true;
    this.stakes.frustumCulled = this.flags.frustumCulled = false;
    // pale stones marking the lanes
    this.marks = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.15, 0), new THREE.MeshStandardMaterial({ color: '#f0dcb8', roughness: 0.9, flatShading: true }), MARKS * 2);
    this.marks.receiveShadow = true;
    this.marks.frustumCulled = false;
    this.group.add(this.stakes, this.flags, this.marks);

    // obstacles: a few rock shapes, reused
    const rng = mulberry32(4242);
    this.boulderGeos = [0, 1, 2, 3].map(() => makeRockGeometry(rng, 0.72, 1.0, 0.72, 4));
    this.ridgeGeos = [0, 1, 2, 3].map(() => makeRockGeometry(rng, 1.12, 0.3, 0.42, 3));
    this.pool = [];
    for (let i = 0; i < POOL; i++) {
      const m = new THREE.Mesh(this.boulderGeos[0], ctx.rockMaterial);
      m.castShadow = true;
      m.receiveShadow = true;
      m.visible = false;
      this.group.add(m);
      this.pool.push(m);
    }
    this.orbs = [];
    for (let i = 0; i < ORBS; i++) {
      const o = spiceOrb();
      o.visible = false;
      this.group.add(o);
      this.orbs.push(o);
    }
    this.rows = [];
    this.ring = null;
    this.rng = mulberry32(99);
  }

  place(x, z, out) {
    this.D = out;
    this.R = [-out[1], out[0]]; // screen right while running (the course runs up the screen)
    this.gate.set(x, groundHeight(x, z), z);
    const yaw = Math.atan2(out[0], out[1]);
    for (let i = 0; i < 2; i++) {
      const side = i ? 1 : -1;
      const px = x + this.R[0] * side * (EDGE + 0.4);
      const pz = z + this.R[1] * side * (EDGE + 0.4);
      this.pylons[i].position.set(px, groundHeight(px, pz) - 0.2, pz);
      this.pylons[i].rotation.y = yaw;
    }
    const sx = x - out[0] * 2.2;
    const sz = z - out[1] * 2.2;
    this.startPoint.set(sx, groundHeight(sx, sz), sz);
    if (this.ring) {
      this.group.remove(this.ring);
      this.ring.geometry.dispose();
    }
    this.ring = groundRing(sx, sz, 0.75, 0.95, new THREE.Color(1.6, 0.85, 0.3));
    this.group.add(this.ring);
    this.anchor.set(x, this.gate.y + 4.6, z);
    this.yaw = yaw;
    this._stakes(0);
  }

  // where along the course, and how far across it, a point is
  _s(x, z) {
    return (x - this.gate.x) * this.D[0] + (z - this.gate.z) * this.D[1];
  }
  _across(x, z) {
    return (x - this.gate.x) * this.R[0] + (z - this.gate.z) * this.R[1];
  }
  _point(s, across) {
    return [this.gate.x + this.D[0] * s + this.R[0] * across, this.gate.z + this.D[1] * s + this.R[1] * across];
  }

  // the start of the track stays clear of stones
  keepsClear(x, z, r) {
    const s = this._s(x, z);
    return s > -4 - r && s < 60 + r && Math.abs(this._across(x, z)) < EDGE + 1.5 + r;
  }

  // no rocks anywhere on the line the run takes
  corridor(x, z, r) {
    return this._s(x, z) > -6 - r && Math.abs(this._across(x, z)) < EDGE + 2 + r;
  }

  collide(pos, r) {
    for (const p of this.pylons) {
      const dx = pos.x - p.position.x;
      const dz = pos.z - p.position.z;
      const d = Math.hypot(dx, dz);
      const min = 0.42 + r;
      if (d < min && d > 1e-4) {
        pos.x = p.position.x + (dx / d) * min;
        pos.z = p.position.z + (dz / d) * min;
      }
    }
  }

  // stakes from just behind `s` to well ahead of it
  _stakes(s) {
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const one = new THREE.Vector3(1, 1, 1);
    const p = new THREE.Vector3();
    const first = Math.max(STAKE_EVERY, Math.floor((s - 12) / STAKE_EVERY) * STAKE_EVERY);
    let k = 0;
    for (let i = 0; i < STAKES; i++) {
      const ds = first + i * STAKE_EVERY;
      for (const side of [-1, 1]) {
        const [x, z] = this._point(ds, side * EDGE);
        p.set(x, groundHeight(x, z) - 0.05, z);
        m.compose(p, q, one);
        this.stakes.setMatrixAt(k, m);
        this.flags.setMatrixAt(k, m);
        k++;
      }
    }
    this.stakes.instanceMatrix.needsUpdate = true;
    this.flags.instanceMatrix.needsUpdate = true;
    this.stakeFrom = first;
    // the lane lines, from the gate on
    const mFirst = Math.max(0, Math.floor((s - 12) / MARK_EVERY) * MARK_EVERY);
    const flat = new THREE.Quaternion();
    const sc = new THREE.Vector3(1.4, 0.5, 1);
    k = 0;
    for (let i = 0; i < MARKS; i++) {
      const ds = mFirst + i * MARK_EVERY;
      for (const side of [-1, 1]) {
        const [x, z] = this._point(ds, side * LANE * 0.5);
        p.set(x, groundHeight(x, z) + 0.02, z);
        m.compose(p, flat, sc);
        this.marks.setMatrixAt(k++, m);
      }
    }
    this.marks.instanceMatrix.needsUpdate = true;
  }

  idle(dt, t) {
    if (this.ring) this.ring.material.opacity = 0.55 + 0.3 * Math.sin(t * 2.2);
    for (const p of this.pylons) p.userData.top.rotation.y = t * 0.8;
  }

  // ---------------------------------------------------------------- the game
  reset(api) {
    this.rng = mulberry32(freshSeed()); // a new course every run
    for (const r of this.rows) this._free(r);
    this.rows = [];
    this.lane = 0;
    this.spice = 0;
    this.next = 24;
    this.crashed = false;
    this.jumpQueued = false;
    this.swipe = null;
    // on the line, just before the gate
    const [x, z] = this._point(-1.2, 0);
    api.teleport(x, z, this.yaw);
    api.player.speedMul = 1;
    this.s = this._s(x, z);
    this._stakes(this.s);
    while (this.next < this.s + 70) this._spawnRow();
  }

  _take() {
    const m = this.pool.find((x) => !x.visible);
    if (m) m.visible = true;
    return m || null;
  }
  _orb() {
    const o = this.orbs.find((x) => !x.visible);
    if (o) o.visible = true;
    return o || null;
  }
  _free(row) {
    for (const ob of row.items) ob.mesh.visible = false;
    for (const o of row.orbs) o.mesh.visible = false;
  }

  _spawnRow() {
    const rng = this.rng;
    const s = this.next;
    const speed = 5.4 * this._mul(s);
    this.next += Math.max(10, speed * 1.5) + rng() * 6;
    const row = { s, items: [], orbs: [] };
    const roll = rng();
    let kinds; // per lane: null, 'ridge' or 'boulder'
    if (roll < 0.3) kinds = ['ridge', 'ridge', 'ridge'];
    else if (roll < 0.62) {
      kinds = [null, null, null];
      const a = Math.floor(rng() * 3);
      kinds[a] = 'boulder';
      if (rng() < 0.55) kinds[(a + 1 + Math.floor(rng() * 2)) % 3] = 'boulder';
    } else {
      kinds = ['ridge', 'ridge', 'ridge'];
      kinds[Math.floor(rng() * 3)] = rng() < 0.5 ? 'boulder' : null;
      if (rng() < 0.4) kinds[Math.floor(rng() * 3)] = null;
    }
    // never three boulders: there must be a way through
    if (kinds.every((k) => k === 'boulder')) kinds[1] = null;
    LANES.forEach((lane, i) => {
      const kind = kinds[i];
      if (!kind) return;
      const mesh = this._take();
      if (!mesh) return;
      const set = kind === 'ridge' ? this.ridgeGeos : this.boulderGeos;
      mesh.geometry = set[Math.floor(rng() * set.length)];
      const [x, z] = this._point(s, lane * LANE);
      const h = kind === 'ridge' ? 0.3 : 1.0;
      mesh.position.set(x, groundHeight(x, z) + h * 0.5, z);
      mesh.rotation.set(0, this.yaw + (kind === 'ridge' ? 0 : rng() * 6), 0);
      row.items.push({ mesh, lane, kind });
    });
    // spice: a short line in a lane, lifted over a ridge so it's caught mid-jump
    if (rng() < 0.6) {
      const lane = LANES[Math.floor(rng() * 3)];
      const k = kinds[lane + 1];
      if (k !== 'boulder') {
        for (let j = -1; j <= 1; j++) {
          const o = this._orb();
          if (!o) break;
          const os = s + j * 1.6 - (k === 'ridge' ? 0 : 5);
          const [x, z] = this._point(os, lane * LANE);
          const lift = k === 'ridge' ? 1.25 - Math.abs(j) * 0.3 : 0.6;
          o.position.set(x, groundHeight(x, z) + lift, z);
          row.orbs.push({ mesh: o, s: os, lane, lift });
        }
      }
    }
    this.rows.push(row);
  }

  _mul(s) {
    return 1 + Math.min(0.6, Math.max(0, s) / 700);
  }

  key(code, down) {
    if (code === 'ArrowLeft' || code === 'KeyA') {
      if (down) this._lane(-1);
    } else if (code === 'ArrowRight' || code === 'KeyD') {
      if (down) this._lane(1);
    } else if (code === 'Space' || code === 'ArrowUp' || code === 'KeyW') {
      if (down) this.jumpQueued = true;
    } else return false;
    return true;
  }

  _lane(d) {
    this.lane = Math.max(-1, Math.min(1, this.lane + d));
  }

  // swipes on the screen: sideways changes lane, up (or a tap) jumps
  pointer(type, ground, e) {
    if (!e) return;
    if (type === 'down') this.swipe = { x: e.clientX, y: e.clientY, done: false };
    else if (type === 'move' && this.swipe && !this.swipe.done) {
      const dx = e.clientX - this.swipe.x;
      const dy = e.clientY - this.swipe.y;
      if (Math.abs(dx) > 34 && Math.abs(dx) > Math.abs(dy)) {
        this._lane(Math.sign(dx));
        this.swipe.done = true;
      } else if (dy < -34) {
        this.jumpQueued = true;
        this.swipe.done = true;
      }
    } else if (type === 'up') {
      if (this.swipe && !this.swipe.done) this.jumpQueued = true;
      this.swipe = null;
    }
  }

  touch(id, down) {
    if (!down) return;
    if (id === 'left') this._lane(-1);
    else if (id === 'right') this._lane(1);
    else if (id === 'jump') this.jumpQueued = true;
  }

  step(dt, t, state, api) {
    const { particles, audio, tint } = this.ctx;
    const player = api.player;
    this.s = this._s(player.pos.x, player.pos.z);
    if (state !== 'play') {
      this.jumpQueued = false;
      this._draw(t);
      return null;
    }
    player.speedMul = this._mul(this.s);
    if (this.jumpQueued) {
      if (player.jump(5.7)) audio.blip('jump');
      this.jumpQueued = false;
    }
    // spawn ahead, forget behind
    while (this.next < this.s + 70) this._spawnRow();
    while (this.rows.length && this.rows[0].s < this.s - 14) this._free(this.rows.shift());
    if (this.s - this.stakeFrom > STAKE_EVERY * 2 + 12) this._stakes(this.s);

    const across = this._across(player.pos.x, player.pos.z);
    for (const row of this.rows) {
      const ds = this.s - row.s;
      if (Math.abs(ds) < 0.55) {
        for (const it of row.items) {
          if (Math.abs(across - it.lane * LANE) > 0.95) continue;
          if (it.kind === 'boulder' || player.air < 0.5) {
            player.applyImpulse(-this.D[0] * 4, -this.D[1] * 4, 1.4);
            player.speedMul = 1;
            particles.burst(player.pos.x, player.pos.y + 0.4, player.pos.z, 50, 2.2, tint(), { radius: 0.4, dust: 0.5 });
            audio.blip('hit');
            return 'crash';
          }
        }
      }
      for (const o of row.orbs) {
        if (!o.mesh.visible) continue;
        if (Math.abs(this.s - o.s) < 0.7 && Math.abs(across - o.lane * LANE) < 0.8 && Math.abs(player.air + 0.6 - o.lift) < 0.9) {
          o.mesh.visible = false;
          this.spice++;
          particles.burst(o.mesh.position.x, o.mesh.position.y, o.mesh.position.z, 16, 1.2, tint(), { radius: 0.15, dust: 0.1 });
          audio.blip('pickup');
        }
      }
    }
    api.setScore(Math.max(0, Math.floor(this.s)) + this.spice * 25, `${Math.max(0, Math.floor(this.s))} m · ${this.spice} spice`);
    this._draw(t);
    return null;
  }

  _draw(t) {
    for (const row of this.rows) for (const o of row.orbs) if (o.mesh.visible) o.mesh.rotation.y = t * 2;
  }

  // the walker sprints down the chosen lane
  walker(state, player) {
    if (state !== 'play') return { hold: true };
    const err = this.lane * LANE - this._across(player.pos.x, player.pos.z);
    const k = Math.max(-1.6, Math.min(1.6, err * 1.4));
    const x = this.D[0] + this.R[0] * k;
    const z = this.D[1] + this.R[1] * k;
    const l = Math.hypot(x, z);
    return { input: { x: x / l, z: z / l, run: true } };
  }

  updateView(aspect, player) {
    this.view.yaw = Math.atan2(-this.D[0], -this.D[1]); // the course runs up the screen
    this.view.height = Math.max(17, 9 / aspect);
    this.view.focus.set(player.pos.x + this.D[0] * 4.5, player.bodyY, player.pos.z + this.D[1] * 4.5);
  }

  end(api) {
    for (const r of this.rows) this._free(r);
    this.rows = [];
    api.player.speedMul = 1;
    this._stakes(0);
  }
}
