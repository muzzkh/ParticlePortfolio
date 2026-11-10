import * as THREE from 'three';
import { groundHeight } from '../noise.js';
import { STAMP } from '../trails.js';
import { freshSeed, hashString, mulberry32 } from '../rng.js';
import { SandBike } from './sandbike.js';
import { makeTrack, pointAt, nearest } from './track.js';
import { groundRing, angleTo } from './common.js';

// The Sand Race: three laps of a marked course across the erg on a sandbike, against
// three other riders. The course is a new shape every race. The bike goes by itself:
// you steer, brake and slide. Deep sand off the course is slow; the blue arrows boost.

const R0 = 36; // the course's radius around its middle, at the start line
const HALF = 4.6; // half the width of the course
const LAPS = 3;
const TOP = 19; // m/s on the course
const BOOST = 27;
const ACC = 9;
const BRAKE = 18;
const POSTS = 72; // edge posts, both sides together
const PAD_FRACS = [0.27, 0.53, 0.78]; // the boost arrows, as fractions of a lap
const BIKE_R = 0.8;
const RIVALS = [
  { name: 'Ferrin', hull: '#5d7f8c', cloak: '#3d4c55', top: 17.7, grip: 10.5 },
  { name: 'Sabha', hull: '#8c3f32', cloak: '#5b3a2c', top: 18.2, grip: 9.6 },
  { name: 'Okkam', hull: '#c9a14a', cloak: '#6d5a3b', top: 18.6, grip: 9.0 },
];
// the grid, behind the line: [metres along, metres across (+ is right)]
const GRID = [
  [-5, -2.2],
  [-5, 2.2],
  [-10.5, -2.2],
  [-10.5, 2.2],
];
const ME = 3; // the visitor starts at the back

export function raceClock(sec) {
  const s = Math.max(0, sec);
  const m = Math.floor(s / 60);
  const r = s - m * 60;
  return `${m}:${r < 10 ? '0' : ''}${r.toFixed(1)}`;
}

const ord = (n) => `${n}${['th', 'st', 'nd', 'rd'][n] || 'th'}`;

export class SandRace {
  static meta = {
    id: 'race',
    title: 'Sand Race',
    kicker: 'Game · Sandbike race',
    howto: 'Three laps against three riders. Keep to the course (deep sand is slow) and ride over the blue arrows.',
    keys: 'A D or ← → to steer · S or ↓ to brake · Space to slide · or hold the mouse where to go · Esc to leave',
    touchKeys: 'It goes by itself · ◀ ▶ to steer, hold Brake to slow · or hold a finger where to go',
    buttons: [
      { id: 'left', label: '◀', aria: 'Steer left' },
      { id: 'brake', label: 'Brake', aria: 'Brake', cls: 'wide' },
      { id: 'right', label: '▶', aria: 'Steer right' },
    ],
    ready: 3.6,
    lowBest: true,
    fmt: raceClock,
  };

  constructor(ctx) {
    this.ctx = ctx;
    this.group = new THREE.Group();
    this.group.name = 'sand-race';
    ctx.scene.add(this.group);
    this.startPoint = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.view = { focus: new THREE.Vector3(), yaw: 0, pitch: THREE.MathUtils.degToRad(45), height: 24 };
    this.keys = new Set();
    this.held = new Set();
    this.steerTo = null;
    this.ring = null;

    // the course: a darker band of packed sand with dashed glowing edges
    this.roadMat = new THREE.MeshStandardMaterial({ color: '#4a2f1d', roughness: 1, transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
    this.edgeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 0.72, 0.28), transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide });
    this.road = new THREE.Mesh(new THREE.BufferGeometry(), this.roadMat);
    this.edges = new THREE.Mesh(new THREE.BufferGeometry(), this.edgeMat);
    this.road.renderOrder = this.edges.renderOrder = 3;
    this.road.receiveShadow = true;
    this.road.frustumCulled = this.edges.frustumCulled = false;

    // posts along both edges, with glowing caps
    const stone = new THREE.MeshStandardMaterial({ color: '#6f5240', roughness: 0.9, flatShading: true });
    this.posts = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.18, 1.3, 6).translate(0, 0.45, 0), stone, POSTS);
    this.caps = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.16, 0).translate(0, 1.22, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.0, 0.3) }), POSTS);
    this.posts.castShadow = true;
    this.posts.frustumCulled = this.caps.frustumCulled = false;

    // the start and finish: an arch, and a chequered line across the sand
    this.arch = new THREE.Group();
    const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.2, 0.4) });
    const dark = new THREE.MeshStandardMaterial({ color: '#2b211b', roughness: 0.8 });
    this.pillars = [-1, 1].map((side) => {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 6, 8).translate(0, 2, 0), stone);
      p.castShadow = true;
      p.receiveShadow = true;
      p.position.x = side * (HALF + 1);
      this.arch.add(p);
      return p;
    });
    this.beam = new THREE.Group();
    const bar = new THREE.Mesh(new THREE.BoxGeometry(2 * HALF + 2.8, 0.5, 0.5), dark);
    bar.castShadow = true;
    this.beam.add(bar);
    const n = 12;
    const w = (2 * HALF + 1.6) / n;
    for (let i = 0; i < n; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, 0.32, 0.06), i % 2 ? dark : glow);
      b.position.set(-HALF - 0.8 + w * (i + 0.5), 0, 0.28);
      const c = b.clone();
      c.position.z = -0.28;
      this.beam.add(b, c);
    }
    this.beam.position.y = 4.6;
    this.arch.add(this.beam);
    const chk = new Uint8Array(16 * 2 * 4);
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < 16; i++) {
        const o = (j * 16 + i) * 4;
        chk.fill((i + j) % 2 ? 40 : 235, o, o + 3);
        chk[o + 3] = 255;
      }
    }
    const tex = new THREE.DataTexture(chk, 16, 2);
    tex.magFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    this.line = new THREE.Mesh(new THREE.PlaneGeometry(2 * HALF, 1.1).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9, transparent: true, opacity: 0.8, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 }));
    this.line.renderOrder = 4;

    // the boost arrows: two chevrons, pointing the way to go
    const chev = (y) => {
      const s = new THREE.Shape();
      s.moveTo(-1, y - 0.45);
      s.lineTo(0, y + 0.45);
      s.lineTo(1, y - 0.45);
      s.lineTo(1, y + 0.1);
      s.lineTo(0, y + 1);
      s.lineTo(-1, y + 0.1);
      s.closePath();
      return s;
    };
    const padGeo = new THREE.ShapeGeometry([chev(-1), chev(0.2)]).rotateX(Math.PI / 2).scale(1.2, 1, 1.2);
    this.padMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 1.6, 2.6), transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide });
    this.pads = PAD_FRACS.map(() => {
      const m = new THREE.Mesh(padGeo, this.padMat);
      m.renderOrder = 5;
      this.group.add(m);
      return { mesh: m, x: 0, z: 0 };
    });

    // the riders: you, and three others
    this.riders = GRID.map((slot, i) => {
      const r = i === ME ? { name: 'You', hull: '#d0702c', cloak: '#e3cfa6', top: TOP, grip: 10 } : RIVALS[i];
      const bike = new SandBike({ hull: r.hull, cloak: r.cloak });
      this.group.add(bike.root);
      return { ...r, me: i === ME, slot, bike, x: 0, z: 0, y: 0, yaw: 0, pitch: 0, speed: 0, vx: 0, vz: 0, lane: slot[1], laneT: slot[1], progress: 0, lastS: 0, i: 0, boost: 0, finish: 0, steer: 0, stampAt: 0, nextLane: 0, bumped: 0 };
    });
    this.me = this.riders[ME];
    this.group.add(this.road, this.edges, this.posts, this.caps, this.arch, this.line);
    this.racing = false;
  }

  // ---------------------------------------------------------------- the course
  // (x, z): the start line, on the side toward where visitors start; out: unit [x, z]
  // pointing away from them. The course loops around a middle out beyond the line.
  place(x, z, out) {
    this.out = out;
    this.sx = x;
    this.sz = z;
    this.cx = x + out[0] * R0;
    this.cz = z + out[1] * R0;
    const bx = x - out[0] * (HALF + 3.2);
    const bz = z - out[1] * (HALF + 3.2);
    this.startPoint.set(bx, groundHeight(bx, bz), bz);
    if (this.ring) {
      this.group.remove(this.ring);
      this.ring.geometry.dispose();
    }
    this.ring = groundRing(bx, bz, 0.75, 0.95, new THREE.Color(1.6, 0.85, 0.3));
    this.group.add(this.ring);
    // a course for the place, the same each visit, until a race asks for a new one
    this._build(mulberry32(hashString(`race:${Math.round(x)}:${Math.round(z)}`)));
    this._park();
  }

  _build(rng) {
    this.track = makeTrack(this.cx, this.cz, this.sx, this.sz, R0, rng);
    this._map = null;
    this._paint();
    const L = this.track.length;
    this.pads.forEach((p, k) => {
      const at = pointAt(this.track, L * PAD_FRACS[k]);
      const lane = (rng() * 2 - 1) * 2.3;
      p.x = at.x - at.tz * lane;
      p.z = at.z + at.tx * lane;
      this._lay(p.mesh, p.x, p.z, at.tx, at.tz, 1.6, 0.12);
    });
    const a = pointAt(this.track, 0);
    const gy = groundHeight(a.x, a.z);
    this.arch.position.set(a.x, gy, a.z);
    this.arch.rotation.y = Math.atan2(a.tx, a.tz);
    // the arch's local +x is the course's left: (tz, −tx)
    this.pillarAt = this.pillars.map((p) => {
      const wx = a.x + a.tz * p.position.x;
      const wz = a.z - a.tx * p.position.x;
      p.position.y = groundHeight(wx, wz) - gy - 0.9;
      return [wx, wz, 0.45];
    });
    this._lay(this.line, a.x, a.z, a.tx, a.tz, 1, 0.09);
    this.anchor.set(this.sx, gy + 7.2, this.sz);
  }

  // lay a flat piece on the sand at (x, z), facing (tx, tz), tilted with the slope
  _lay(mesh, x, z, tx, tz, reach, lift) {
    const g = groundHeight(x, z);
    const ahead = groundHeight(x + tx * reach, z + tz * reach);
    const behind = groundHeight(x - tx * reach, z - tz * reach);
    const left = groundHeight(x + tz * reach, z - tx * reach);
    const right = groundHeight(x - tz * reach, z + tx * reach);
    mesh.position.set(x, Math.max(g, (ahead + behind + left + right) / 4) + lift, z);
    mesh.rotation.set(-Math.atan((ahead - behind) / (2 * reach)), Math.atan2(tx, tz), Math.atan((left - right) / (2 * reach)), 'YXZ');
  }

  // the band, the dashed edges and the posts, following the dunes
  _paint() {
    const { pts, length } = this.track;
    const n = pts.length;
    const y = (x, z) => groundHeight(x, z) + 0.07;
    const pos = new Float32Array(n * 2 * 3);
    const idx = [];
    pts.forEach((p, i) => {
      for (const [k, side] of [
        [0, -1],
        [1, 1],
      ]) {
        const x = p.x - p.tz * HALF * side;
        const z = p.z + p.tx * HALF * side;
        pos.set([x, y(x, z), z], (i * 2 + k) * 3);
      }
      const j = (i + 1) % n;
      idx.push(i * 2, j * 2, i * 2 + 1, i * 2 + 1, j * 2, j * 2 + 1);
    });
    const road = new THREE.BufferGeometry();
    road.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    road.setIndex(idx);
    road.computeVertexNormals();
    this.road.geometry.dispose();
    this.road.geometry = road;

    const ev = [];
    const ei = [];
    for (let i = 0; i < n; i++) {
      if (Math.floor(i / 5) % 2) continue;
      const a = pts[i];
      const b = pts[(i + 1) % n];
      for (const side of [-1, 1]) {
        const base = ev.length / 3;
        for (const p of [a, b]) {
          for (const w of [HALF - 0.12, HALF + 0.12]) {
            const x = p.x - p.tz * w * side;
            const z = p.z + p.tx * w * side;
            ev.push(x, y(x, z) + 0.01, z);
          }
        }
        ei.push(base, base + 2, base + 1, base + 1, base + 2, base + 3);
      }
    }
    const edges = new THREE.BufferGeometry();
    edges.setAttribute('position', new THREE.Float32BufferAttribute(ev, 3));
    edges.setIndex(ei);
    this.edges.geometry.dispose();
    this.edges.geometry = edges;

    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const one = new THREE.Vector3(1, 1, 1);
    const v = new THREE.Vector3();
    const per = POSTS / 2;
    for (let k = 0; k < per; k++) {
      const at = pointAt(this.track, ((k + 0.5) / per) * length);
      for (const side of [-1, 1]) {
        const x = at.x - at.tz * (HALF + 0.7) * side;
        const z = at.z + at.tx * (HALF + 0.7) * side;
        v.set(x, groundHeight(x, z) - 0.05, z);
        m.compose(v, q, one);
        this.posts.setMatrixAt(k * 2 + (side > 0 ? 1 : 0), m);
        this.caps.setMatrixAt(k * 2 + (side > 0 ? 1 : 0), m);
      }
    }
    this.posts.instanceMatrix.needsUpdate = true;
    this.caps.instanceMatrix.needsUpdate = true;
  }

  // the course as a line for the map
  mapPath() {
    if (!this._map) this._map = this.track.pts.filter((p, i) => i % 8 === 0).map((p) => ({ x: p.x, z: p.z }));
    return this._map;
  }

  // the bikes on the grid, behind the line
  _park() {
    for (const r of this.riders) {
      const [s, lane] = r.slot;
      const at = pointAt(this.track, s);
      r.x = at.x - at.tz * lane;
      r.z = at.z + at.tx * lane;
      r.y = groundHeight(r.x, r.z);
      r.yaw = Math.atan2(at.tx, at.tz);
      r.pitch = 0;
      r.speed = r.vx = r.vz = 0;
      r.lane = r.laneT = lane;
      r.progress = s;
      r.lastS = (s + this.track.length) % this.track.length;
      r.i = at.i;
      r.boost = 0;
      r.finish = 0;
      r.steer = 0;
      r.lap = 1;
      this._pose(r, 0, 0);
    }
  }

  _pose(r, dt, t) {
    const b = r.bike;
    b.root.position.set(r.x, r.y, r.z);
    b.root.rotation.set(r.pitch, r.yaw, 0, 'YXZ');
    b.update(dt, t, r.speed / TOP, r.steer);
  }

  // stones keep off the whole of it; rocks keep off the ring the course can run in
  keepsClear(x, z, r) {
    return Math.hypot(x - this.cx, z - this.cz) < R0 * 1.45 + HALF + 2 + r;
  }

  corridor(x, z, r) {
    const d = Math.hypot(x - this.cx, z - this.cz);
    return d > R0 * 0.5 - HALF - r && d < R0 * 1.45 + HALF + 2 + r;
  }

  collide(pos, r, vel) {
    const things = [...this.pillarAt];
    if (!this.racing) for (const b of this.riders) things.push([b.x, b.z, BIKE_R]);
    for (const [cx, cz, cr] of things) {
      const dx = pos.x - cx;
      const dz = pos.z - cz;
      const d = Math.hypot(dx, dz);
      const min = cr + r;
      if (d < min && d > 1e-4) {
        pos.x = cx + (dx / d) * min;
        pos.z = cz + (dz / d) * min;
        if (vel) {
          const vn = (vel.x * dx + vel.z * dz) / d;
          if (vn < 0) {
            vel.x -= (vn * dx) / d;
            vel.z -= (vn * dz) / d;
          }
        }
      }
    }
  }

  idle(dt, t) {
    if (this.ring) this.ring.material.opacity = 0.55 + 0.3 * Math.sin(t * 2.2);
    this.padMat.opacity = 0.6 + 0.3 * Math.sin(t * 3.1);
    if (!this.racing) for (const r of this.riders) r.bike.update(dt, t, 0, 0);
  }

  // ---------------------------------------------------------------- racing
  reset(api) {
    this.api = api;
    this._build(mulberry32(freshSeed())); // a new course every race
    this._park();
    this.racing = true;
    this.keys.clear();
    this.held.clear();
    this.steerTo = null;
    this.clock = 0;
    this.time = 0;
    this.said = '';
    this.flashT = 0;
    this.back = 0;
    this.offT = 0;
    this.started = false;
    for (const r of this.riders) {
      r.nextLane = 1 + Math.random() * 2;
      r.stampAt = 0;
      r.bumped = 0;
    }
  }

  key(code, down) {
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'ShiftLeft', 'ShiftRight'].includes(code)) {
      if (down) this.keys.add(code);
      else this.keys.delete(code);
      return true;
    }
    return false;
  }

  pointer(type, ground) {
    if (type === 'up') this.steerTo = null;
    else if (ground) this.steerTo = { x: ground.x, z: ground.z };
  }

  touch(id, down) {
    if (down) this.held.add(id);
    else this.held.delete(id);
  }

  _say(big, small = '', secs = 0) {
    const key = `${big}|${small}`;
    if (key !== this.said) {
      this.said = key;
      this.api.say(big, small);
    }
    this.flashT = secs;
  }

  step(dt, t, state, api) {
    this.clock += dt;
    const me = this.me;
    const L = this.track.length;
    if (state === 'ready') {
      const left = SandRace.meta.ready - this.clock;
      if (left < 3) this._say(String(Math.max(1, Math.ceil(left))), '');
      for (const r of this.riders) {
        r.steer = 0;
        r.bike.update(dt, t, 0.12 + 0.08 * Math.sin(t * 9 + r.slot[0]), 0);
      }
      api.thrum(0.3);
      this._hud(api);
      return null;
    }
    if (!this.started) {
      this.started = true;
      this._say('Go!', '', 0.9);
      this.ctx.audio.blip('clear');
    }
    if (this.flashT > 0) {
      this.flashT -= dt;
      if (this.flashT <= 0) this._say('');
    }
    const racing = state === 'play' && !me.finish;
    if (racing) this.time += dt;

    this._ride(me, dt, t, racing);
    for (const r of this.riders) if (!r.me) this._rival(r, dt, t, state === 'play' || state === 'over');
    this._bump(dt);
    for (const r of this.riders) this._pose(r, dt, t);
    api.thrum(0.35 + Math.min(0.6, (me.speed / TOP) * 0.55) + (me.boost > 0 ? 0.15 : 0));

    // laps, and the finish
    if (racing) {
      const lap = Math.min(LAPS, Math.max(1, Math.floor(me.progress / L) + 1));
      if (lap > me.lap) {
        me.lap = lap;
        this._say(lap === LAPS ? 'Final lap' : `Lap ${lap} of ${LAPS}`, '', 1.3);
        this.ctx.audio.blip('clear');
      }
      if (me.progress >= LAPS * L) {
        me.finish = this.time;
        this.place = this._place();
        this._hud(api);
        return 'finish';
      }
      // warnings
      if (this.back > 1.2) this._say('Wrong way', 'Turn around', 0.5);
      else if (this.offT > 2.5) this._say('', 'Back onto the course: deep sand is slow', 0.5);
    }
    this._hud(api);
    return null;
  }

  // you: the bike goes by itself; you steer it, brake it, slide it
  _ride(r, dt, t, racing) {
    const { particles, audio, tint } = this.ctx;
    const k = this.keys;
    const h = this.held;
    let steer = (k.has('KeyA') || k.has('ArrowLeft') || h.has('left') ? 1 : 0) - (k.has('KeyD') || k.has('ArrowRight') || h.has('right') ? 1 : 0);
    if (!steer && this.steerTo) {
      const d = Math.hypot(this.steerTo.x - r.x, this.steerTo.z - r.z);
      if (d > 1.2) steer = Math.max(-1, Math.min(1, angleTo(r.yaw, Math.atan2(this.steerTo.x - r.x, this.steerTo.z - r.z)) * 2.5));
    }
    const brake = k.has('KeyS') || k.has('ArrowDown') || h.has('brake');
    const slide = k.has('Space') || k.has('ShiftLeft') || k.has('ShiftRight');
    const throttle = racing && !brake ? 1 : 0;

    let n = nearest(this.track, r.x, r.z, r.i);
    if (n.dist > HALF + 6) n = nearest(this.track, r.x, r.z);
    r.i = n.i;
    const off = Math.abs(n.across) > HALF + 0.3;
    this.offT = off && racing ? this.offT + dt : 0;

    const fx = Math.sin(r.yaw);
    const fz = Math.cos(r.yaw);
    let vf = r.vx * fx + r.vz * fz;
    let vs = r.vx * fz - r.vz * fx; // to the left
    const top = r.boost > 0 ? BOOST : off ? TOP * 0.55 : TOP;
    vf += throttle * ACC * dt;
    vf -= vf * (off ? 0.9 : 0.16) * dt;
    if (vf > top) vf += (top - vf) * (1 - Math.exp(-dt * 1.6));
    if (brake) vf = vf > 0.3 ? Math.max(0, vf - BRAKE * dt) : Math.max(-4, vf - 6 * dt);
    if (!racing && !brake) vf = Math.max(0, vf - 5 * dt); // past the line: coast to a stop
    // up a dune is slower, down one faster (it floats, so only a little)
    const ahead = groundHeight(r.x + fx * 1.5, r.z + fz * 1.5);
    const behind = groundHeight(r.x - fx * 1.5, r.z - fz * 1.5);
    const slope = (ahead - behind) / 3;
    vf -= slope * 6 * dt;
    // turning: quick at low speed, wider when fast, sharper in a slide
    const rate = (2.4 * Math.min(1, Math.abs(vf) / 5)) / (1 + Math.abs(vf) / 30) * (slide ? 1.5 : 1);
    r.yaw += steer * rate * dt * Math.sign(vf || 1);
    vs *= Math.exp(-dt * (slide ? 1.6 : off ? 3.5 : 7));
    const nfx = Math.sin(r.yaw);
    const nfz = Math.cos(r.yaw);
    r.vx = nfx * vf + nfz * vs;
    r.vz = nfz * vf - nfx * vs;
    r.x += r.vx * dt;
    r.z += r.vz * dt;
    r.speed = Math.hypot(r.vx, r.vz);
    r.steer += (steer * Math.min(1, r.speed / 8) - r.steer) * (1 - Math.exp(-dt * 6));

    // how far round: only riding along the course counts. Off it, or faster than the bike
    // moves (cutting across the middle), gains nothing; the inside of a bend still pays.
    let ds = n.s - r.lastS;
    if (ds > this.track.length / 2) ds -= this.track.length;
    if (ds < -this.track.length / 2) ds += this.track.length;
    if (n.dist < HALF + 4 && Math.abs(ds) <= r.speed * dt * 1.8 + 0.3) r.progress += ds;
    r.lastS = n.s;
    this.back = ds < -0.01 && r.speed > 3 ? this.back + dt : Math.max(0, this.back - dt * 2);

    this._hover(r, dt, slope);
    if (this._boost(r) && racing) audio.blip('pickup');
    if (r.boost > 0) r.boost -= dt;
    this._spray(r, dt, off || (slide && Math.abs(vs) > 2), particles, tint);
  }

  // the others: along the course, as fast as each bend allows
  _rival(r, dt, t, going) {
    const L = this.track.length;
    const me = this.me;
    if (going) {
      let c = 0;
      for (const ahead of [0, 7, 14, 22]) c = Math.max(c, pointAt(this.track, r.progress + ahead).curv);
      let want = Math.min(r.top, Math.sqrt(r.grip / Math.max(c, 1e-3)));
      // keep it a race: a little slower when well ahead of you, a little faster behind
      const gap = r.progress - me.progress;
      want *= Math.max(0.9, Math.min(1.07, 1 - gap * 0.004));
      if (r.boost > 0) want = BOOST * 0.92;
      if (r.progress >= LAPS * L) {
        if (!r.finish) r.finish = this.time;
        want = Math.min(want, 10);
      }
      if (r.speed < want) r.speed = Math.min(want, r.speed + ACC * dt);
      else r.speed = Math.max(want, r.speed - BRAKE * 0.5 * dt);
      // pick a line now and then; move over for anyone just ahead
      r.nextLane -= dt;
      if (r.nextLane <= 0) {
        r.nextLane = 2 + Math.random() * 3;
        r.laneT = (Math.random() * 2 - 1) * 2.8;
      }
      for (const o of this.riders) {
        if (o === r) continue;
        const ahead = o.progress - r.progress;
        const oLane = o.me ? nearest(this.track, o.x, o.z, o.i).across : o.lane;
        if (ahead > 0 && ahead < 8 && Math.abs(oLane - r.lane) < 1.9) {
          r.laneT = Math.max(-3.3, Math.min(3.3, oLane + (r.lane >= oLane ? 2.3 : -2.3)));
          if (Math.abs(r.laneT) >= 3.3 && Math.abs(oLane - r.laneT) < 1.9) r.speed = Math.min(r.speed, o.speed);
        }
      }
      r.lane += (r.laneT - r.lane) * (1 - Math.exp(-dt * 1.1));
      r.progress += r.speed * dt;
    }
    const at = pointAt(this.track, r.progress);
    const nx = at.x - at.tz * r.lane;
    const nz = at.z + at.tx * r.lane;
    const nextYaw = Math.atan2(at.tx, at.tz);
    const turn = angleTo(r.yaw, nextYaw);
    r.steer += (Math.max(-1, Math.min(1, (turn / Math.max(dt, 1e-3)) * 0.4)) - r.steer) * (1 - Math.exp(-dt * 5));
    r.yaw = nextYaw;
    const slope = (groundHeight(nx + at.tx * 1.5, nz + at.tz * 1.5) - groundHeight(nx - at.tx * 1.5, nz - at.tz * 1.5)) / 3;
    r.vx = (nx - r.x) / Math.max(dt, 1e-3);
    r.vz = (nz - r.z) / Math.max(dt, 1e-3);
    r.x = nx;
    r.z = nz;
    r.i = at.i;
    r.lap = Math.min(LAPS, Math.max(1, Math.floor(r.progress / L) + 1));
    this._hover(r, dt, slope);
    this._boost(r);
    if (r.boost > 0) r.boost -= dt;
    if (going) this._spray(r, dt, false, this.ctx.particles, this.ctx.tint);
  }

  // riding over a blue arrow
  _boost(r) {
    if (r.boost > 0.3) return false;
    for (const p of this.pads) {
      if (Math.hypot(r.x - p.x, r.z - p.z) < 1.9) {
        r.boost = 1.5;
        if (r.me) {
          const fx = Math.sin(r.yaw);
          const fz = Math.cos(r.yaw);
          r.vx += fx * 4;
          r.vz += fz * 4;
        } else r.speed += 4;
        this.ctx.particles.burst(p.x, groundHeight(p.x, p.z) + 0.3, p.z, 18, 1.4, new THREE.Color(0.6, 1.4, 2.2), { radius: 0.8, dust: 0.2 });
        return true;
      }
    }
    return false;
  }

  _hover(r, dt, slope) {
    const g = groundHeight(r.x, r.z);
    r.y += (g - r.y) * (1 - Math.exp(-dt * 10));
    r.y = Math.max(r.y, g - 0.05);
    r.pitch += (-Math.atan(slope) - r.pitch) * (1 - Math.exp(-dt * 6));
  }

  // blown sand behind, and a wake in the dunes
  _spray(r, dt, heavy, particles, tint) {
    if (r.speed < 3) return;
    const fx = Math.sin(r.yaw);
    const fz = Math.cos(r.yaw);
    const g = groundHeight(r.x, r.z);
    if (Math.random() < dt * (heavy ? 18 : 6 + r.speed * 0.3)) {
      particles.burst(r.x - fx * 1.2, g + 0.15, r.z - fz * 1.2, heavy ? 6 : 3, 0.7 + r.speed * 0.04, tint(), { radius: 0.5, dust: heavy ? 1 : 0.6, puff: 0.6, dustAlpha: 0.2 });
    }
    r.stampAt -= r.speed * dt;
    if (r.stampAt <= 0) {
      r.stampAt = 0.9;
      this.ctx.trails.stamp(STAMP.DISTURB, r.x - fx * 0.6, r.z - fz * 0.6, Math.atan2(fz, fx), 1.8, 0.9, 0.015, 0, heavy ? 0.7 : 0.45);
    }
  }

  // bikes that touch push apart; whoever ran into the other loses some speed
  _bump(dt) {
    const me = this.me;
    me.bumped -= dt;
    for (const o of this.riders) {
      if (o === me) continue;
      const dx = me.x - o.x;
      const dz = me.z - o.z;
      const d = Math.hypot(dx, dz);
      const min = BIKE_R * 2;
      if (d >= min || d < 1e-4) continue;
      const nx = dx / d;
      const nz = dz / d;
      me.x += nx * (min - d);
      me.z += nz * (min - d);
      const vn = me.vx * nx + me.vz * nz;
      if (vn < 0) {
        me.vx -= vn * nx * 1.3;
        me.vz -= vn * nz * 1.3;
      }
      const at = pointAt(this.track, o.progress);
      o.lane -= (nx * -at.tz + nz * at.tx) * 0.6; // pushed across, the other way
      o.laneT = o.lane;
      const meAhead = me.progress > o.progress;
      if (meAhead) o.speed *= 0.9;
      else {
        me.vx *= 0.9;
        me.vz *= 0.9;
      }
      if (me.bumped <= 0) {
        me.bumped = 0.4;
        this.ctx.audio.blip('hit');
        this.ctx.particles.burst((me.x + o.x) / 2, me.y + 0.5, (me.z + o.z) / 2, 14, 1.4, this.ctx.tint(), { radius: 0.3, dust: 0.4 });
      }
    }
  }

  // 1 for the front; anyone over the line already is ahead of anyone who isn't
  _place() {
    const me = this.me;
    let p = 1;
    for (const r of this.riders) {
      if (r === me) continue;
      if (r.finish && (!me.finish || r.finish < me.finish)) p++;
      else if (!r.finish && !me.finish && r.progress > me.progress) p++;
    }
    return p;
  }

  _hud(api) {
    const me = this.me;
    const place = me.finish ? this.place : this._place();
    api.setScore(0, `Lap ${me.lap}/${LAPS} · ${ord(place)} of ${this.riders.length} · ${raceClock(this.time)}`);
  }

  // how it went: the over screen, and the time to beat
  result() {
    const me = this.me;
    let winner = null;
    for (const r of this.riders) if (!r.me && r.finish && r.finish < me.finish && (!winner || r.finish < winner.finish)) winner = r;
    return {
      score: Math.round(me.finish * 10) / 10,
      big: this.place === 1 ? 'You win!' : `${ord(this.place)} place`,
      line: `${raceClock(me.finish)} for ${LAPS} laps${winner ? ` · ${winner.name} won` : ''}`,
    };
  }

  // you're on the bike: the walker waits at the ring
  walker() {
    return { hold: true, hidden: true };
  }

  updateView(aspect) {
    const me = this.me;
    const fx = Math.sin(me.yaw);
    const fz = Math.cos(me.yaw);
    this.view.yaw = Math.atan2(-fx, -fz); // the way you're going is up the screen
    this.view.height = Math.max(24, 13 / aspect) + me.speed * 0.2;
    const lead = 4 + me.speed * 0.25;
    this.view.focus.set(me.x + fx * lead, me.y + 0.6, me.z + fz * lead);
  }

  end() {
    this.keys.clear();
    this.held.clear();
    this.steerTo = null;
    this.racing = false;
    this._park();
  }
}
