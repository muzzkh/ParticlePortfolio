import * as THREE from 'three';
import { groundHeight } from '../noise.js';
import { STAMP } from '../trails.js';
import { Ornithopter } from '../ornithopter.js';
import { groundRing, angleTo } from './common.js';

// The Thopter Ride: an ornithopter parked on a stone pad. Climb aboard and fly it
// wherever you like, over the stones, out across the erg, as high as you dare. Set it
// down anywhere and step out; it waits where you left it until you come back for it.
// No score, no way to lose: it's a vehicle, not a game.

const PAD_R = 3.2;
const PAD_TOP = 0.45;
const SPEED = 16; // m/s, cruising
const FAST = 26; // m/s, after holding a direction for a few seconds
const MIN_ALT = 2.2;
const MAX_ALT = 40;

export class ThopterRide {
  static meta = {
    id: 'ride',
    title: 'Thopter Ride',
    kicker: 'Vehicle · Ornithopter',
    action: 'Board the ornithopter',
    verb: 'board',
    howto: 'Fly anywhere. Set down wherever you like and step out; it waits for you.',
    keys: 'WASD or arrows to fly · Space to climb, Shift to drop · or hold the mouse where to go · L or Esc to land',
    touchKeys: 'Touch and hold where to go · ▲ ▼ to climb and drop · Land to step out',
    buttons: [
      { id: 'up', label: '▲', aria: 'Climb' },
      { id: 'land', label: 'Land', aria: 'Land and step out', cls: 'wide' },
      { id: 'down', label: '▼', aria: 'Drop' },
    ],
    ready: 1.8,
    noBest: true,
  };

  constructor(ctx) {
    this.ctx = ctx;
    this.group = new THREE.Group();
    this.group.name = 'thopter-ride';
    ctx.scene.add(this.group);
    this.pad = new THREE.Vector3();
    this.startPoint = new THREE.Vector3();
    this.anchor = new THREE.Vector3();
    this.view = { focus: new THREE.Vector3(), yaw: null, pitch: THREE.MathUtils.degToRad(40), height: 30 };

    const stone = new THREE.MeshStandardMaterial({ color: '#6f5240', roughness: 0.92, flatShading: true });
    this.padMesh = new THREE.Mesh(new THREE.CylinderGeometry(PAD_R, PAD_R + 0.25, 1.4, 10), stone);
    this.padMesh.castShadow = true;
    this.padMesh.receiveShadow = true;
    this.padRing = new THREE.Mesh(new THREE.RingGeometry(PAD_R - 0.5, PAD_R - 0.35, 40).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.8, 0.3), transparent: true, opacity: 0.8 }));
    // a windsock beside the pad
    this.sock = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 2.6, 6).translate(0, 1.3, 0), new THREE.MeshStandardMaterial({ color: '#3b2a20' }));
    pole.castShadow = true;
    this.sockCloth = new THREE.Mesh(new THREE.ConeGeometry(0.22, 1.1, 10, 1, true).rotateZ(-Math.PI / 2).translate(0.55, 0, 0), new THREE.MeshStandardMaterial({ color: '#ff8a3d', emissive: '#6a2405', side: THREE.DoubleSide }));
    this.sockCloth.position.y = 2.45;
    this.sock.add(pole, this.sockCloth);
    this.thopter = new Ornithopter();
    // the group stays at the origin, so the thopter can be parked anywhere and still
    // hide with the site
    this.group.add(this.padMesh, this.padRing, this.sock, this.thopter.root);
    this.ring = null;
    this.keys = new Set();
    this.steer = null;
    this.lift = 0;
  }

  // out: unit [x, z] pointing away from where visitors start
  place(x, z, out) {
    this.out = out;
    this.far = [out[1], -out[0]];
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
    // home again: parked on its pad, facing out
    this._park(x, z, this.pad.y, Math.atan2(out[0], out[1]));
  }

  // set it down at (x, z): the place to board it is beside it, on the side toward the start
  _park(x, z, y, yaw) {
    this.parked = { x, z, y, yaw };
    this.x = x;
    this.z = z;
    this.y = y;
    this.vx = this.vz = 0;
    this.yaw = yaw;
    this.lift = 0;
    const th = this.thopter;
    th.yaw = yaw;
    th.root.position.set(x, y, z);
    th.root.rotation.set(0, yaw, 0);
    th.body.rotation.set(0, 0, 0);
    th.update(0, 0, 0, null);
    const side = [Math.cos(yaw), -Math.sin(yaw)]; // the craft's left
    const onPad = Math.hypot(x - this.pad.x, z - this.pad.z) < 1;
    const off = onPad ? PAD_R + 1.8 : 4.2;
    const dir = onPad ? [-this.out[0], -this.out[1]] : side;
    const sx = x + dir[0] * off;
    const sz = z + dir[1] * off;
    this.startPoint.set(sx, groundHeight(sx, sz), sz);
    if (this.ring) {
      this.group.remove(this.ring);
      this.ring.geometry.dispose();
    }
    this.ring = groundRing(sx, sz, 0.75, 0.95, new THREE.Color(1.6, 0.85, 0.3));
    this.group.add(this.ring);
    this.anchor.set(x, y + 4.4, z);
  }

  keepsClear(x, z, r) {
    return Math.hypot(x - this.pad.x, z - this.pad.z) < PAD_R + 3 + r;
  }

  collide(pos, r, vel) {
    // the pad, and the thopter wherever it's parked
    for (const [cx, cz, cr] of [
      [this.pad.x, this.pad.z, PAD_R + 0.2],
      [this.parked.x, this.parked.z, 1.6],
    ]) {
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

  idle(dt, t, near) {
    if (this.ring) this.ring.material.opacity = 0.55 + 0.3 * Math.sin(t * 2.2);
    this.lift += ((near ? 0.12 : 0) - this.lift) * (1 - Math.exp(-dt * 2));
    this.thopter.update(dt, t, this.lift, null);
    this.sockCloth.rotation.y = Math.sin(t * 0.7) * 0.4 + 0.6;
    this.sockCloth.rotation.z = Math.sin(t * 2.3) * 0.08;
  }

  // ---------------------------------------------------------------- flying
  reset(api) {
    this.api = api;
    this.phase = 'board';
    this.keys.clear();
    this.steer = null;
    this.climb = 0;
    this.touchUp = this.touchDown = false;
    this.alt = MIN_ALT + 2;
    this.gs = groundHeight(this.x, this.z);
    this.spun = 0;
  }

  // Esc, L, Leave: set down here and step out (the game ends once it has landed)
  leave() {
    if (this.phase === 'board') return false; // still on the ground: just get out
    if (this.phase !== 'land') {
      this.phase = 'land';
      this.ctx.audio.blip('clear');
    }
    return true;
  }

  key(code, down) {
    if (code === 'KeyL') {
      if (down) this.leave();
      return true;
    }
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'ShiftLeft', 'ShiftRight', 'KeyC'].includes(code)) {
      if (down) this.keys.add(code);
      else this.keys.delete(code);
      return true;
    }
    return false;
  }

  pointer(type, ground) {
    if (type === 'up') this.steer = null;
    else if (ground) this.steer = { x: ground.x, z: ground.z };
  }

  touch(id, down) {
    if (id === 'up') this.touchUp = down;
    else if (id === 'down') this.touchDown = down;
    else if (id === 'land' && down) this.leave();
  }

  // the way the keys (or the pointer) point, on the ground, as [x, z] of length ≤ 1
  _wish() {
    const k = this.keys;
    let sx = 0;
    let sy = 0;
    if (k.has('KeyW') || k.has('ArrowUp')) sy += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) sy -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) sx += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) sx -= 1;
    if (sx || sy) {
      const l = Math.hypot(sx, sy);
      const yaw = this.api.camYaw();
      // screen right = (cos yaw, −sin yaw), screen up = (−sin yaw, −cos yaw)
      return [(Math.cos(yaw) * sx - Math.sin(yaw) * sy) / l, (-Math.sin(yaw) * sx - Math.cos(yaw) * sy) / l];
    }
    if (this.steer) {
      const dx = this.steer.x - this.x;
      const dz = this.steer.z - this.z;
      const d = Math.hypot(dx, dz);
      if (d > 1.5) return [(dx / d) * Math.min(1, d / 10), (dz / d) * Math.min(1, d / 10)];
    }
    return [0, 0];
  }

  step(dt, t, state, api) {
    const { particles, trails, tint } = this.ctx;
    const th = this.thopter;
    const g = groundHeight(this.x, this.z);

    if (this.phase === 'board') {
      // wings out, engines up, off the ground
      this.lift = Math.min(1, this.lift + dt * 0.8);
      th.update(dt, t, this.lift, null);
      th.root.position.set(this.x, this.parked.y, this.z);
      th.root.rotation.set(0, this.yaw, 0);
      this.y = this.parked.y + th.body.position.y;
      api.thrum(this.lift);
      if (state === 'play') {
        this.phase = 'fly';
        this.alt = this.y - g + 1.5;
        this.gs = g;
      }
      this._hud(api, 0);
      return null;
    }

    let wish = [0, 0];
    let climb = 0;
    if (this.phase === 'fly') {
      wish = this._wish();
      const k = this.keys;
      climb = (k.has('Space') || this.touchUp ? 1 : 0) - (k.has('ShiftLeft') || k.has('ShiftRight') || k.has('KeyC') || this.touchDown ? 1 : 0);
    }
    // holding a direction winds the speed up toward FAST
    const mag = Math.hypot(wish[0], wish[1]);
    this.spun = mag > 0.9 ? Math.min(1, this.spun + dt * 0.25) : Math.max(0, this.spun - dt * 0.6);
    const top = SPEED + (FAST - SPEED) * this.spun;
    const k = 1 - Math.exp(-dt * (mag > 0.01 ? 1.4 : 0.9));
    this.vx += (wish[0] * top - this.vx) * k;
    this.vz += (wish[1] * top - this.vz) * k;
    this.x += this.vx * dt;
    this.z += this.vz * dt;
    const speed = Math.hypot(this.vx, this.vz);

    // follow the dunes loosely: keep the chosen height over the smoothed ground
    const ground = groundHeight(this.x, this.z);
    this.gs += (ground - this.gs) * (1 - Math.exp(-dt * 1.2));
    if (this.phase === 'fly') {
      this.climb += (climb - this.climb) * (1 - Math.exp(-dt * 4));
      this.alt = Math.max(MIN_ALT, Math.min(MAX_ALT, this.alt + this.climb * 7 * dt));
      const want = Math.max(this.gs + this.alt, ground + MIN_ALT);
      this.y += (want - this.y) * (1 - Math.exp(-dt * 2.2));
      this.y = Math.max(this.y, ground + 1.4);
    }

    // turn to face the way it's going, banking into the turn
    let turn = 0;
    if (speed > 1.2) {
      const want = Math.atan2(this.vx, this.vz);
      const d = angleTo(this.yaw, want);
      turn = Math.max(-1, Math.min(1, d * 2));
      this.yaw += d * (1 - Math.exp(-dt * 2.4));
    }
    th.yaw = this.yaw;

    if (this.phase === 'land') {
      // down to the sand (or back onto the pad, when it's close), wings folding at the end
      const onPad = Math.hypot(this.x - this.pad.x, this.z - this.pad.z) < 7;
      if (onPad) {
        this.x += (this.pad.x - this.x) * (1 - Math.exp(-dt * 2));
        this.z += (this.pad.z - this.z) * (1 - Math.exp(-dt * 2));
      }
      const floor = onPad ? this.pad.y : groundHeight(this.x, this.z);
      const hover = floor + 2.7;
      this.y += (hover - this.y) * (1 - Math.exp(-dt * 1.8));
      if (this.y - hover < 0.35 && speed < 2.5) {
        this.lift = Math.max(0, this.lift - dt * 0.9);
        th.update(dt, t, this.lift, null);
        th.root.position.set(this.x, floor, this.z);
        th.root.rotation.set(0, this.yaw, 0);
        api.thrum(this.lift);
        if (this.lift <= 0) {
          this._park(onPad ? this.pad.x : this.x, onPad ? this.pad.z : this.z, floor, this.yaw);
          return 'done';
        }
        this._hud(api, speed);
        return null;
      }
    }

    th.update(dt * (1 + speed / SPEED * 0.5 + Math.max(0, this.climb) * 0.5), t, 1, null);
    th.root.position.set(this.x, this.y - th.body.position.y, this.z);
    th.root.rotation.set(Math.min(0.3, speed / FAST * 0.22) - this.climb * 0.08, this.yaw, -turn * 0.35, 'YXZ');
    api.thrum(0.7 + Math.min(0.3, speed / FAST * 0.3) + Math.max(0, this.climb) * 0.2);

    // the downwash raises the sand when it flies low
    const low = this.y - ground;
    if (low < 7) {
      const n = (1 - low / 7) * dt * 30;
      if (Math.random() < n) particles.burst(this.x, ground + 0.1, this.z, 4, 1.1, tint(), { radius: 1.4, dust: 0.9, puff: 0.8, dustAlpha: 0.22 });
      if (low < 4) trails.stamp(STAMP.DISTURB, this.x, this.z, 0, 6, 6, 0.04 * (1 - low / 4), 0, 0.7);
    }
    this._hud(api, speed);
    return null;
  }

  _hud(api, speed) {
    const up = Math.max(0, Math.round(this.y - groundHeight(this.x, this.z) - 1));
    api.setScore(0, this.phase === 'land' ? 'Setting down…' : `${up} m up · ${Math.round(speed * 3.6)} km/h`);
  }

  // you're aboard: the walker is out of sight
  walker() {
    return { hold: true, hidden: true };
  }

  updateView(aspect) {
    const up = Math.max(0, this.y - (this.gs || this.y));
    this.view.height = Math.max(28, 17 / aspect) + up * 0.45;
    this.view.focus.set(this.x + this.vx * 0.7, (this.y + (this.gs ?? this.y)) / 2, this.z + this.vz * 0.7);
  }

  // where to put the walker when they step out
  exitPoint() {
    return { x: this.startPoint.x, z: this.startPoint.z, yaw: Math.atan2(this.parked.x - this.startPoint.x, this.parked.z - this.startPoint.z) };
  }

  end() {
    this.keys.clear();
    this.steer = null;
    // stepped out before take-off: back where it was; left in the air (a new world, say):
    // put it straight down where it is
    if (this.phase === 'board') this._park(this.parked.x, this.parked.z, this.parked.y, this.parked.yaw);
    else if (this.lift > 0) this._park(this.x, this.z, groundHeight(this.x, this.z), this.yaw);
  }
}
