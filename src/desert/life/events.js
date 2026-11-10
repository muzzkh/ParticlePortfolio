import * as THREE from 'three';
import { groundHeight } from '../noise.js';
import { PT } from '../particles.js';
import { STAMP } from '../trails.js';
import { Ornithopter } from '../ornithopter.js';
import { range } from '../rng.js';
import { compass } from './lines.js';

// Things that happen by themselves, at random, so no two visits are the same: an
// ornithopter passing overhead, wormsign far off, a spice blow, a dust devil, a squall.

const _c = new THREE.Color();

export class Events {
  constructor(ctx) {
    this.ctx = ctx;
    this.next = 14; // seconds until something happens
    this.active = [];
    this.thopter = null;
    this.mound = null; // far-off wormsign, for the terrain to heave over
    this.thrum = 0;
  }

  reset() {
    for (const e of this.active) if (e.end) e.end();
    this.active = [];
    this.mound = null;
    this.thrum = 0;
    this.next = 10 + Math.random() * 10;
  }

  // env: { px, pz, rng, quiet (a game, or not yet entered), wormBusy, viewR, night, camYaw }
  update(dt, t, env) {
    const rng = env.rng;
    if (!env.quiet) {
      this.next -= dt;
      if (this.next <= 0) {
        this.next = range(rng, 22, 55);
        this._start(env, t);
      }
    }
    this.mound = null;
    this.thrum = 0;
    this.active = this.active.filter((e) => {
      const more = e.step(dt, t, env);
      if (!more && e.end) e.end();
      return more;
    });
  }

  _start(env, t) {
    const rng = env.rng;
    const roll = rng();
    const busy = (kind) => this.active.some((e) => e.kind === kind);
    if (roll < 0.3 && !busy('flyover')) this.active.push(this._flyover(env));
    else if (roll < 0.52 && !busy('blow')) this.active.push(this._blow(env));
    else if (roll < 0.72 && !busy('devil')) this.active.push(this._devil(env, t));
    else if (roll < 0.9 && !env.wormBusy && !busy('wormsign')) this.active.push(this._wormsign(env));
    else if (!busy('squall')) this.active.push(this._squall(env));
  }

  // start one by name (for the console and the tests)
  trigger(kind, env, t = 0) {
    const make = { flyover: () => this._flyover(env), blow: () => this._blow(env), devil: () => this._devil(env, t), wormsign: () => this._wormsign(env), squall: () => this._squall(env) }[kind];
    if (make) this.active.push(make());
  }

  // ---- an ornithopter crossing overhead, its shadow running over the dunes ----
  _flyover(env) {
    const { scene } = this.ctx;
    if (!this.thopter) {
      this.thopter = new Ornithopter();
      this.thopter.root.scale.setScalar(1.15);
      scene.add(this.thopter.root);
    }
    const th = this.thopter;
    const rng = env.rng;
    const a = rng() * Math.PI * 2;
    const off = range(rng, -10, 10);
    const dx = Math.cos(a);
    const dz = Math.sin(a);
    // a straight pass, a little to one side of you
    const mx = env.px - dz * off;
    const mz = env.pz + dx * off;
    const half = env.viewR + 45;
    let s = -half;
    const alt = range(rng, 12, 17);
    th.root.visible = true;
    th.yaw = Math.atan2(dx, dz);
    return {
      kind: 'flyover',
      step: (dt, t) => {
        s += 20 * dt;
        const x = mx + dx * s;
        const z = mz + dz * s;
        th.update(dt, t, 1, null);
        th.root.position.set(x, groundHeight(mx, mz) + alt - th.body.position.y, z);
        th.root.rotation.set(0.08, th.yaw, Math.sin(t * 0.9) * 0.06, 'YXZ');
        this.thrum = Math.max(this.thrum, Math.max(0, 1 - Math.hypot(x - env.px, z - env.pz) / 60) * 0.9);
        return s < half;
      },
      end: () => (th.root.visible = false),
    };
  }

  // ---- a spice blow: the sand trembles, bursts, and leaves spice lying about ----
  _blow(env) {
    const { particles, trails, audio, toast, shake, spice, blocked } = this.ctx;
    const rng = env.rng;
    let x = env.px;
    let z = env.pz;
    for (let i = 0; i < 12; i++) {
      const a = rng() * Math.PI * 2;
      const d = range(rng, 13, Math.max(18, env.viewR * 0.8));
      x = env.px + Math.cos(a) * d;
      z = env.pz + Math.sin(a) * d;
      if (!blocked(x, z, 5)) break;
    }
    let age = 0;
    let blown = false;
    return {
      kind: 'blow',
      step: (dt) => {
        age += dt;
        const y = groundHeight(x, z);
        if (age < 2.6) {
          // the warning: the sand shivers and smokes
          if (Math.random() < dt * 22) particles.burst(x, y + 0.1, z, 3, 0.9 + age * 0.5, _c.setRGB(1.5, 0.8, 0.4), { radius: 1.2, dust: 1.2, puff: 0.6 });
          trails.stamp(STAMP.DISTURB, x, z, 0, 3 + age, 3 + age, 0.04, 0, 0.6);
          return true;
        }
        if (!blown) {
          blown = true;
          particles.burst(x, y + 0.3, z, 520, 9, _c.setRGB(1.7, 0.75, 0.3), { radius: 1.2, dust: 0.2, puff: 1.3, grow: 1.6, chunk: 1.4 });
          for (let i = 0; i < 90; i++) {
            const a = Math.random() * Math.PI * 2;
            const v = 1 + Math.random() * 5;
            particles.spawn(PT.SPICE, x, y + 0.5, z, Math.cos(a) * v, 3 + Math.random() * 6, Math.sin(a) * v, 0.05 + Math.random() * 0.05, 3 + Math.random() * 2, _c.setRGB(2.2, 0.8, 0.2), 1, { drag: 0.6, grav: 2.5 });
          }
          trails.stamp(STAMP.CRATER, x, z, 0, 7, 7, 0.5, 0.25, 1);
          audio.eruption(0.45);
          shake(x, z, 0.7);
          spice.scatter(5 + Math.floor(rng() * 4), x, z, 1.5, 6.5, rng);
          toast(`A spice blow, to the ${compass(x - env.px, z - env.pz)}!`, 3.5);
        }
        return age < 4;
      },
    };
  }

  // ---- a dust devil wandering across the sand ----
  _devil(env, t0) {
    const { particles, tint, wind } = this.ctx;
    const rng = env.rng;
    const a = rng() * Math.PI * 2;
    let x = env.px + Math.cos(a) * range(rng, 14, 26);
    let z = env.pz + Math.sin(a) * range(rng, 14, 26);
    let dir = rng() * Math.PI * 2;
    let age = 0;
    const life = range(rng, 18, 30);
    let acc = 0;
    return {
      kind: 'devil',
      step: (dt, t) => {
        age += dt;
        dir += (Math.sin(t * 0.7 + t0) * 0.8 + (rng() - 0.5)) * dt;
        const w = wind();
        x += (Math.cos(dir) * 2.2 + w.x * 0.15) * dt;
        z += (Math.sin(dir) * 2.2 + w.z * 0.15) * dt;
        const k = Math.min(1, age / 3, (life - age) / 3); // grows, then dies away
        const y = groundHeight(x, z);
        const c = _c.copy(particles.dustColor).multiply(tint());
        acc += dt * 70 * k;
        while (acc >= 1) {
          acc -= 1;
          const h = Math.random();
          const r = 0.35 + h * 1.5;
          const ang = Math.random() * Math.PI * 2;
          const sp = 5.5 * (0.5 + h);
          particles.spawn(PT.DUST, x + Math.cos(ang) * r, y + h * 6.5, z + Math.sin(ang) * r, -Math.sin(ang) * sp, 1.2 + Math.random(), Math.cos(ang) * sp, 0.3 + h * 0.5, 0.9 + Math.random() * 0.7, c, 0.2 * k, { grow: 0.5, drag: 1.4 });
        }
        return age < life;
      },
    };
  }

  // ---- wormsign, far off: something big passing under the sand ----
  _wormsign(env) {
    const { particles, trails, tint, toast } = this.ctx;
    const rng = env.rng;
    const a = rng() * Math.PI * 2;
    const dist = Math.max(48, env.viewR + 8) + rng() * 20;
    // passing by, not coming at you
    const side = rng() < 0.5 ? 1 : -1;
    const dx = -Math.sin(a) * side;
    const dz = Math.cos(a) * side;
    let x = env.px + Math.cos(a) * dist - dx * 45;
    let z = env.pz + Math.sin(a) * dist - dz * 45;
    let age = 0;
    const life = 11;
    toast(`Wormsign, far off to the ${compass(x - env.px, z - env.pz)}.`, 3.5);
    return {
      kind: 'wormsign',
      step: (dt) => {
        age += dt;
        x += dx * 8.5 * dt;
        z += dz * 8.5 * dt;
        const k = Math.min(1, age / 2, (life - age) / 2);
        this.mound = { x, z, amp: 1.1 * k, dx, dz };
        const y = groundHeight(x, z);
        if (Math.random() < dt * 9) particles.burst(x, y + 0.4, z, 5, 2.2, tint(), { radius: 2.2, dust: 1.2, puff: 1.1, grow: 1.3 });
        trails.stamp(STAMP.DISTURB, x - dx * 2, z - dz * 2, 0, 7, 7, 0.1, 0, 1);
        return age < life;
      },
    };
  }

  // ---- a squall: the wind gets up for half a minute ----
  _squall(env) {
    const { squall, toast } = this.ctx;
    if (!squall(range(env.rng, 22, 38))) return { kind: 'squall', step: () => false };
    toast('The wind gets up. A squall blows through.', 3.5);
    let age = 0;
    return { kind: 'squall', step: (dt) => (age += dt) < 40 };
  }
}
