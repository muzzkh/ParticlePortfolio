import * as THREE from 'three';
import { groundHeight } from '../noise.js';
import { STAMP } from '../trails.js';
import { range } from '../rng.js';

// Small lives: desert mice that hop about and bolt when anyone comes near, and hawks
// that wheel overhead by day, their shadows crossing the sand.

const FUR = new THREE.MeshStandardMaterial({ color: '#6f4d36', roughness: 0.95 });
const FUR_PALE = new THREE.MeshStandardMaterial({ color: '#c9a37c', roughness: 0.95 });
const EAR = new THREE.MeshStandardMaterial({ color: '#8a5f48', roughness: 0.9, side: THREE.DoubleSide });
const FEATHER = new THREE.MeshStandardMaterial({ color: '#3b2b21', roughness: 0.9, side: THREE.DoubleSide });
const FEATHER_PALE = new THREE.MeshStandardMaterial({ color: '#8d6f55', roughness: 0.9, side: THREE.DoubleSide });

function shadowed(m) {
  m.castShadow = true;
  return m;
}

// ---------------------------------------------------------------------------
// Mice
// ---------------------------------------------------------------------------
class Mouse {
  constructor(ctx, rng) {
    this.ctx = ctx;
    this.rng = rng;
    const g = new THREE.Group();
    const body = shadowed(new THREE.Mesh(new THREE.SphereGeometry(1, 12, 10), FUR));
    body.scale.set(0.11, 0.1, 0.16);
    body.position.y = 0.12;
    const belly = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), FUR_PALE);
    belly.scale.set(0.09, 0.07, 0.13);
    belly.position.set(0, 0.09, 0.02);
    const head = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), FUR));
    head.position.set(0, 0.17, 0.15);
    this.ears = [-1, 1].map((s) => {
      const e = new THREE.Mesh(new THREE.CircleGeometry(0.07, 10), EAR);
      e.position.set(s * 0.06, 0.26, 0.12);
      e.rotation.set(-0.2, s * 0.5, 0);
      g.add(e);
      return e;
    });
    this.tail = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.34, 5).rotateX(Math.PI / 2).translate(0, 0, -0.17), FUR);
    this.tail.position.set(0, 0.1, -0.14);
    const tuft = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 5), FUR_PALE);
    tuft.position.set(0, 0, -0.35);
    this.tail.add(tuft);
    g.add(body, belly, head, this.tail);
    g.scale.setScalar(1.7);
    this.root = g;
    ctx.scene.add(g);
    this.x = 0;
    this.z = 0;
    this.yaw = 0;
    this.state = 'idle';
    this.timer = rng() * 3;
    this.hops = 0;
    this.hop = null; // { fx, fz, tx, tz, s, dur, h }
    this.fleeing = 0;
  }

  place(x, z) {
    this.x = x;
    this.z = z;
    this.hop = null;
    this.state = 'idle';
    this.timer = this.rng() * 3;
  }

  _startHop(dir, len, dur, h) {
    const tx = this.x + Math.sin(dir) * len;
    const tz = this.z + Math.cos(dir) * len;
    if (this.ctx.blocked(tx, tz, 0.4)) {
      this.yaw += Math.PI * (0.5 + this.rng());
      return false;
    }
    this.hop = { fx: this.x, fz: this.z, tx, tz, s: 0, dur, h };
    this.yaw = dir;
    return true;
  }

  // threats: [{ x, z }] (you and the other walkers)
  update(dt, t, env) {
    const rng = this.rng;
    // anyone too close?
    let threat = null;
    let td = 4.2;
    for (const p of env.threats) {
      const d = Math.hypot(this.x - p.x, this.z - p.z);
      if (d < td) {
        td = d;
        threat = p;
      }
    }
    if (threat) {
      if (this.fleeing <= 0 && env.audible && td < 4) this.ctx.audio.blip('squeak');
      this.fleeing = 1.6 + rng();
      this.fleeDir = Math.atan2(this.x - threat.x, this.z - threat.z) + (rng() - 0.5) * 0.9;
    }
    this.fleeing -= dt;

    if (this.hop) {
      const h = this.hop;
      h.s = Math.min(1, h.s + dt / h.dur);
      this.x = h.fx + (h.tx - h.fx) * h.s;
      this.z = h.fz + (h.tz - h.fz) * h.s;
      if (h.s >= 1) {
        this.hop = null;
        if (env.visible) this.ctx.trails.stamp(STAMP.FOOT, this.x, this.z, Math.atan2(Math.cos(this.yaw), Math.sin(this.yaw)), 0.2, 0.14, 0.02, 0.008, 0.5);
      }
    } else if (this.fleeing > 0) {
      this._startHop(this.fleeDir + (rng() - 0.5) * 0.5, 1.0, 0.2, 0.3);
    } else if (this.hops > 0) {
      if (this._startHop(this.yaw + (rng() - 0.5) * 0.7, range(rng, 0.35, 0.6), 0.26, 0.2)) this.hops--;
    } else {
      this.timer -= dt * (env.night ? 2 : 1); // livelier after dark
      if (this.timer <= 0) {
        this.timer = range(rng, 1.2, 5);
        this.hops = 1 + Math.floor(rng() * 5);
        this.yaw = rng() * Math.PI * 2;
      }
    }

    const y = groundHeight(this.x, this.z);
    const up = this.hop ? Math.sin(Math.PI * this.hop.s) * this.hop.h : 0;
    this.root.position.set(this.x, y + up, this.z);
    this.root.rotation.set(this.hop ? -0.35 * Math.cos(Math.PI * this.hop.s) : Math.sin(t * 6 + this.x) * 0.04, this.yaw, 0, 'YXZ');
    const twitch = Math.sin(t * 9 + this.z * 3) > 0.92 ? 0.35 : 0;
    this.ears[0].rotation.x = -0.2 - twitch;
    this.ears[1].rotation.x = -0.2 - twitch;
    this.tail.rotation.x = this.hop ? 0.5 : 0.15 + Math.sin(t * 2 + this.x) * 0.1;
  }
}

// ---------------------------------------------------------------------------
// Hawks
// ---------------------------------------------------------------------------
function wingGeometry(side) {
  const s = new THREE.Shape();
  s.moveTo(0, 0.16);
  s.lineTo(side * 0.5, 0.2);
  s.lineTo(side * 0.95, 0.02);
  s.lineTo(side * 0.8, -0.12);
  s.lineTo(side * 0.45, -0.2);
  s.lineTo(0, -0.16);
  s.closePath();
  return new THREE.ShapeGeometry(s).rotateX(Math.PI / 2); // lying flat, leading edge toward +z (forward)
}

class Hawk {
  constructor(ctx, rng, i) {
    this.ctx = ctx;
    this.rng = rng;
    const g = new THREE.Group();
    const body = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.55, 8).rotateX(Math.PI / 2), FEATHER));
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), FEATHER_PALE);
    head.position.z = 0.28;
    const tail = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.3, 3).rotateX(-Math.PI / 2), FEATHER_PALE));
    tail.scale.y = 0.15;
    tail.position.z = -0.36;
    this.wings = [-1, 1].map((side) => {
      const w = shadowed(new THREE.Mesh(wingGeometry(side), FEATHER));
      g.add(w);
      return w;
    });
    g.add(body, head, tail);
    g.scale.setScalar(1.5);
    this.root = g;
    ctx.scene.add(g);
    this.a = rng() * Math.PI * 2;
    this.dir = i % 2 ? 1 : -1;
    this.r = range(rng, 13, 20);
    this.alt = range(rng, 11, 15);
    this.cx = 0;
    this.cz = 0;
    this.away = 0; // 0 circling … 1 gone (night)
    this.phase = rng() * 6;
    this.flap = 0;
    this.cry = range(rng, 20, 60);
  }

  place(x, z) {
    this.cx = x;
    this.cz = z;
  }

  update(dt, t, env) {
    // drift after you, slowly; leave at night, come back with the light
    this.cx += (env.px - this.cx) * (1 - Math.exp(-dt * 0.25));
    this.cz += (env.pz - this.cz) * (1 - Math.exp(-dt * 0.25));
    this.away += ((env.night ? 1 : 0) - this.away) * (1 - Math.exp(-dt * 0.12));
    const r = this.r + Math.sin(t * 0.13 + this.phase) * 3 + this.away * 140;
    const speed = 7.5;
    this.a += (this.dir * speed * dt) / r;
    const x = this.cx + Math.cos(this.a) * r;
    const z = this.cz + Math.sin(this.a) * r;
    const y = groundHeight(this.cx, this.cz) + this.alt + Math.sin(t * 0.21 + this.phase) * 1.6;
    this.root.visible = this.away < 0.6;
    if (!this.root.visible) return;
    // mostly gliding, with a few beats now and then
    this.flap -= dt;
    if (this.flap < -range(this.rng, 3, 8)) this.flap = 1.2;
    const beat = this.flap > 0 ? Math.sin(t * 13) * 0.55 : Math.sin(t * 1.3 + this.phase) * 0.07 + 0.12;
    this.wings[0].rotation.z = -beat;
    this.wings[1].rotation.z = beat;
    // heading along the circle, banked into the turn
    const hx = -Math.sin(this.a) * this.dir;
    const hz = Math.cos(this.a) * this.dir;
    this.root.position.set(x, y, z);
    this.root.rotation.set(0, Math.atan2(hx, hz), -this.dir * 0.3, 'YXZ');
    this.cry -= dt;
    if (this.cry <= 0) {
      this.cry = range(this.rng, 25, 70);
      if (env.audible) this.ctx.audio.blip('hawk');
    }
  }
}

export class Wildlife {
  constructor(ctx) {
    this.ctx = ctx;
    this.mice = [];
    this.hawks = [];
  }

  populate(mice, hawks, rng, center) {
    this.rng = rng;
    while (this.mice.length > mice) this.ctx.scene.remove(this.mice.pop().root);
    while (this.mice.length < mice) this.mice.push(new Mouse(this.ctx, rng));
    while (this.hawks.length > hawks) this.ctx.scene.remove(this.hawks.pop().root);
    while (this.hawks.length < hawks) this.hawks.push(new Hawk(this.ctx, rng, this.hawks.length));
    for (const m of this.mice) this._scatter(m, center.x, center.z, 6, 30);
    for (const h of this.hawks) h.place(center.x, center.z);
  }

  _scatter(m, x, z, r0, r1) {
    for (let i = 0; i < 16; i++) {
      const a = this.rng() * Math.PI * 2;
      const d = range(this.rng, r0, r1);
      const px = x + Math.cos(a) * d;
      const pz = z + Math.sin(a) * d;
      if (!this.ctx.blocked(px, pz, 0.8)) return m.place(px, pz);
    }
    m.place(x + r1, z);
  }

  // env: { px, pz, focus, viewR, night, threats, audible }
  update(dt, t, env) {
    for (const m of this.mice) {
      // left behind: turn up again somewhere just out of sight
      if (Math.hypot(m.x - env.px, m.z - env.pz) > 60) this._scatter(m, env.px, env.pz, env.viewR + 2, env.viewR + 14);
      const visible = Math.hypot(m.x - env.focus.x, m.z - env.focus.z) < env.viewR + 4;
      m.root.visible = visible;
      m.update(dt, t, { ...env, visible });
    }
    for (const h of this.hawks) h.update(dt, t, env);
  }
}
