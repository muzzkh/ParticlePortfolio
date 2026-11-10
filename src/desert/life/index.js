import { mulberry32, freshSeed } from '../rng.js';
import { Walkers } from './walkers.js';
import { Wildlife } from './wildlife.js';
import { Spice } from './spice.js';
import { Events } from './events.js';

// Everything that makes the desert feel lived in, behind one door: other walkers,
// mice and hawks, spice to gather, and things that happen by themselves. All of it is
// reseeded on every visit, so the stones stay put but the life around them never
// repeats. main.js builds one Life, tells it when the layout changes, and calls
// update() once a frame.
//
// ctx: { scene, camera, particles, trails, audio, player, labelLayer,
//        tint(), wind(), toast(text, s), shake(x, z, k), squall(seconds) -> bool,
//        collide(pos, r, vel), blocked(x, z, margin), stones(), games(), talk() }

// what site.json's world.life asks for (all on by default); phones get fewer walkers
export function lifeSettings(world, small = false) {
  const l = (world && world.life) || {};
  const n = Number.isFinite(l.walkers) ? Math.min(8, Math.max(0, Math.round(l.walkers))) : 4;
  return {
    walkers: small ? Math.min(n, 2) : n,
    wildlife: l.wildlife !== false,
    events: l.events !== false,
    spice: l.spice !== false,
    small,
  };
}

export class Life {
  constructor(ctx) {
    this.ctx = ctx;
    this.settings = lifeSettings(null);
    this.rng = mulberry32(freshSeed());
    this.spice = new Spice(ctx);
    const inner = { ...ctx, spice: this.spice, talk: () => ({ ...ctx.talk(), spice: this.spice.total }) };
    this.walkers = new Walkers(inner);
    this.wildlife = new Wildlife(inner);
    this.events = new Events(inner);
    this.center = { x: 0, z: 0 };
  }

  configure(settings) {
    this.settings = settings;
  }

  // a new layout (or a new world): everyone and everything takes new places
  reset(center) {
    const s = this.settings;
    this.center = center;
    this.rng = mulberry32(freshSeed());
    this.walkers.populate(s.walkers, this.rng, center);
    this.wildlife.populate(s.wildlife ? (s.small ? 3 : 6) : 0, s.wildlife ? (s.small ? 1 : 2) : 0, this.rng, center);
    this.spice.clear();
    if (s.spice) this.spice.scatter(s.small ? 7 : 12, center.x, center.z, 6, 55, this.rng);
    this.events.reset();
  }

  get mound() {
    return this.events.mound;
  }

  get thrum() {
    return this.events.thrum;
  }

  // env: { entered, gaming, focus, viewR, night, worm: { x, z } | null, wormBusy }
  update(dt, t, env) {
    const { player } = this.ctx;
    const px = player.pos.x;
    const pz = player.pos.z;
    const active = env.entered && !env.gaming;
    const base = { px, pz, focus: env.focus, viewR: env.viewR, night: env.night, rng: this.rng };
    this.walkers.update(dt, t, { ...base, playerActive: active, worm: env.worm });
    this.wildlife.update(dt, t, { ...base, threats: [{ x: px, z: pz }, ...this.walkers.list], audible: active });
    if (this.settings.spice) this.spice.update(dt, t, { ...base, collecting: active });
    this.events.update(dt, t, { ...base, quiet: !active || !this.settings.events, wormBusy: env.wormBusy });
  }
}
