import * as THREE from 'three';
import { Fremen } from '../character.js';
import { groundHeight } from '../noise.js';
import { STAMP } from '../trails.js';
import { pick, range } from '../rng.js';
import { greeting } from './lines.js';

// Other people in the desert. Each is the same articulated walker as you, in a cloak of
// their own colour. They wander between the stones, the pads and the games, stop to
// read, greet you when you come close (often with a pointer to something you haven't
// found), carry a lamp at night, and run when a worm is near.

const LOOKS = [
  { cloth: '#8a4a36', wrap: '#6d3a2c' }, // rust
  { cloth: '#3f5566', wrap: '#324552' }, // indigo
  { cloth: '#a58c62', wrap: '#8a744f' }, // pale sand
  { cloth: '#5b6044', wrap: '#494e37' }, // olive
  { cloth: '#6a5a6e', wrap: '#544758' }, // dusk
  { cloth: '#4a4a48', wrap: '#3b3b39' }, // ash
  { cloth: '#7d2f3a', wrap: '#602630' }, // wine
];

const _v = new THREE.Vector3();
function turn(a, b, t) {
  const d = ((b - a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  return a + d * t;
}

class Walker {
  constructor(ctx, look, rng) {
    this.ctx = ctx;
    this.rng = rng;
    const f = new Fremen();
    this.f = f;
    f.materials.cloth.color.set(look.cloth);
    f.materials.wrap.color.set(look.wrap);
    f.onFootstep = (s) => this._step(s);
    ctx.scene.add(f.root);
    // a lamp at the shoulder, lit at night
    this.lamp = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 2.2, 0.9) }));
    this.lamp.position.set(0.3, 0.6, 0.1);
    this.lamp.visible = false;
    f.body.add(this.lamp);
    this.bubble = document.createElement('div');
    this.bubble.className = 'say';
    ctx.labelLayer.append(this.bubble);
    this.said = 0;
    this.pace = range(rng, 0.72, 1);
    this.state = 'pause';
    this.timer = rng() * 3;
    this.target = null;
    this.face = null;
    this.cool = 4 + rng() * 6;
    this.input = { x: 0, z: 0, run: false };
    this.near = false;
    this.progress = { x: 0, z: 0, t: 0 };
  }

  get x() {
    return this.f.pos.x;
  }
  get z() {
    return this.f.pos.z;
  }

  place(x, z) {
    this.f.spawn(x, z, this.rng() * Math.PI * 2);
    this.near = false;
    this.state = 'pause';
    this.timer = this.rng() * 2;
    this._hush();
  }

  _step(s) {
    if (!this.near) return;
    const { trails, particles, audio, tint, player } = this.ctx;
    const rot = Math.atan2(Math.cos(s.yaw), Math.sin(s.yaw));
    trails.stamp(STAMP.FOOT, s.x, s.z, rot, 0.74, 0.42, 0.06 + 0.035 * s.run, 0.03, 0.85);
    particles.footstep(s.x, s.y, s.z, s.dirX, s.dirZ, s.speed, s.run, tint(), 0);
    const d = Math.hypot(s.x - player.pos.x, s.z - player.pos.z);
    if (d < 9) audio.footstep(0.3 * (1 - d / 9));
  }

  _say(text) {
    this.bubble.textContent = text;
    this.bubble.classList.add('on');
    this.said = 1;
  }

  _hush() {
    this.bubble.classList.remove('on');
    this.said = 0;
  }

  // env: { px, pz, playerActive, focus, viewR, night, worm, others, fenv, pickTarget(w), greet(w) }
  update(dt, t, env) {
    const f = this.f;
    const pos = f.pos;
    const inp = this.input;
    inp.x = inp.z = 0;
    inp.run = false;
    this.cool -= dt;
    const dp = Math.hypot(pos.x - env.px, pos.z - env.pz);
    const wormNear = env.worm && Math.hypot(pos.x - env.worm.x, pos.z - env.worm.z) < 45;

    if (wormNear) {
      if (this.state !== 'flee') this._hush();
      this.state = 'flee';
    } else if (this.state === 'flee') {
      this.state = 'pause';
      this.timer = 2;
      this.face = env.worm ? { x: env.worm.x, z: env.worm.z } : null;
    } else if (env.playerActive && this.state !== 'greet' && dp < 3.4 && this.cool <= 0) {
      this.state = 'greet';
      this.timer = 6;
      this.cool = 28 + this.rng() * 22;
      this._say(env.greet(this));
    }

    let faceAt = null;
    switch (this.state) {
      case 'travel': {
        const dx = this.target.x - pos.x;
        const dz = this.target.z - pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 1.1) {
          this.state = 'pause';
          this.timer = range(this.rng, 3, 10);
          this.face = this.target.face || null;
          break;
        }
        const m = Math.min(1, d / 1.5) * this.pace;
        inp.x = (dx / d) * m;
        inp.z = (dz / d) * m;
        // not getting anywhere (a rock, a pad in the way): pick somewhere else
        this.progress.t += dt;
        if (this.progress.t > 4) {
          if (Math.hypot(pos.x - this.progress.x, pos.z - this.progress.z) < 1) this.target = env.pickTarget(this);
          this.progress = { x: pos.x, z: pos.z, t: 0 };
        }
        break;
      }
      case 'pause':
        this.timer -= dt;
        faceAt = this.face;
        if (this.timer <= 0) {
          this.target = env.pickTarget(this);
          this.state = 'travel';
          this.progress = { x: pos.x, z: pos.z, t: 0 };
        }
        break;
      case 'greet':
        this.timer -= dt;
        faceAt = { x: env.px, z: env.pz };
        if (this.timer <= 0 || dp > 7 || !env.playerActive) {
          this._hush();
          this.state = 'pause';
          this.timer = 1 + this.rng() * 2;
          this.face = null;
        }
        break;
      case 'flee': {
        const dx = pos.x - env.worm.x;
        const dz = pos.z - env.worm.z;
        const d = Math.hypot(dx, dz) || 1;
        inp.x = dx / d;
        inp.z = dz / d;
        inp.run = true;
        break;
      }
      default:
        break;
    }

    // keep a step apart from you and from each other
    if (inp.x || inp.z) {
      const push = (ox, oz, r) => {
        const dx = pos.x - ox;
        const dz = pos.z - oz;
        const d = Math.hypot(dx, dz);
        if (d < r && d > 1e-3) {
          const k = (1 - d / r) * 1.4;
          inp.x += (dx / d) * k;
          inp.z += (dz / d) * k;
        }
      };
      push(env.px, env.pz, 1.6);
      for (const o of env.others) if (o !== this) push(o.x, o.z, 1.5);
    } else if (faceAt) {
      f.yaw = turn(f.yaw, Math.atan2(faceAt.x - pos.x, faceAt.z - pos.z), 1 - Math.exp(-dt * 4));
    }

    // only the ones in view are fully animated; the rest just keep to their paths
    const near = Math.hypot(pos.x - env.focus.x, pos.z - env.focus.z) < env.viewR + 10;
    if (near) {
      if (!this.near) f.spawn(pos.x, pos.z, f.yaw);
      f.root.visible = true;
      f.update(dt, inp, env.fenv);
    } else {
      f.root.visible = false;
      const sp = inp.run ? 5 : 1.9;
      pos.x += inp.x * sp * dt;
      pos.z += inp.z * sp * dt;
      env.fenv.collide(pos, 0.34, null);
      pos.y = groundHeight(pos.x, pos.z);
      if (inp.x || inp.z) f.yaw = Math.atan2(inp.x, inp.z);
    }
    this.near = near;
    this.lamp.visible = env.night;

    if (this.said) {
      _v.set(pos.x, f.bodyY + 1.05, pos.z).project(this.ctx.camera);
      const x = (_v.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-_v.y * 0.5 + 0.5) * window.innerHeight;
      this.bubble.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
    }
  }

  dispose() {
    this.ctx.scene.remove(this.f.root);
    this.f.root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    for (const m of Object.values(this.f.materials)) m.dispose();
    this.bubble.remove();
  }
}

export class Walkers {
  constructor(ctx) {
    this.ctx = ctx;
    this.list = [];
    this.center = { x: 0, z: 0 };
  }

  // n walkers scattered around the middle of things
  populate(n, rng, center) {
    this.center = center;
    this.rng = rng;
    while (this.list.length > n) this.list.pop().dispose();
    const looks = LOOKS.slice().sort(() => rng() - 0.5);
    while (this.list.length < n) this.list.push(new Walker(this.ctx, looks[this.list.length % looks.length], rng));
    for (const w of this.list) {
      const p = this._open(center.x, center.z, 8, 45);
      w.place(p.x, p.z);
    }
  }

  // an open spot between r0 and r1 from (x, z)
  _open(x, z, r0, r1) {
    const { blocked } = this.ctx;
    let p = { x, z };
    for (let i = 0; i < 24; i++) {
      const a = this.rng() * Math.PI * 2;
      const d = range(this.rng, r0, r1);
      p = { x: x + Math.cos(a) * d, z: z + Math.sin(a) * d };
      if (!blocked(p.x, p.z, 1.6)) break;
    }
    return p;
  }

  // somewhere worth walking to: beside a stone or a pad (to read it), near a game, or
  // just out across the sand
  _target(w) {
    const { stones, games } = this.ctx;
    const rng = this.rng;
    const roll = rng();
    const list = stones();
    if (roll < 0.55 && list.length) {
      const s = pick(rng, list);
      const a = rng() * Math.PI * 2;
      const d = s.radius + range(rng, 1.0, 1.8);
      const p = { x: s.x + Math.cos(a) * d, z: s.z + Math.sin(a) * d, face: { x: s.x, z: s.z } };
      if (!this.ctx.blocked(p.x, p.z, 0.4, s)) return p;
    } else if (roll < 0.7) {
      const g = games();
      if (g.length) {
        const s = pick(rng, g);
        const p = this._open(s.sx, s.sz, 2.5, 5);
        return { ...p, face: { x: s.x, z: s.z } };
      }
    }
    // not too far from where they stand, and never far from the middle
    const from = rng() < 0.5 ? this.center : { x: w.x, z: w.z };
    const p = this._open(from.x, from.z, 8, 34);
    if (Math.hypot(p.x - this.center.x, p.z - this.center.z) > 75) return this._open(this.center.x, this.center.z, 10, 40);
    return p;
  }

  update(dt, t, env) {
    const { ctx } = this;
    const fenv = this.fenv || (this.fenv = { wind: null, onRock: true, collide: ctx.collide });
    fenv.wind = ctx.wind();
    const e = {
      ...env,
      others: this.list,
      fenv,
      pickTarget: (w) => this._target(w),
      greet: (w) => greeting({ rng: this.rng, x: w.x, z: w.z, ...ctx.talk() }),
    };
    for (const w of this.list) w.update(dt, t, e);
  }
}
