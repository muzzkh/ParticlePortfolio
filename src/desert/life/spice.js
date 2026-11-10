import * as THREE from 'three';
import { groundHeight, groundGradient } from '../noise.js';
import { PT } from '../particles.js';
import { range } from '../rng.js';

// Spice: glowing patches scattered on the sand, different on every visit, and thrown out
// by spice blows. Walk through one to gather it. The tally is kept in the browser.

const MAX = 48;
const STORE = 'arrakis.spice';
const RANKS = [
  [10, 'Ten spice. The stones call you gatherer.'],
  [25, 'Twenty-five spice. You walk like one born here.'],
  [50, 'Fifty spice. The desert shares its secrets with you.'],
  [100, 'A hundred spice. Even the worms would know your name.'],
];

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _n = new THREE.Vector3();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);
const _c = new THREE.Color();

export class Spice {
  constructor(ctx) {
    this.ctx = ctx;
    // a ragged little drift of spice, lying on the slope
    const geo = new THREE.CircleGeometry(1, 11).rotateX(-Math.PI / 2);
    const p = geo.getAttribute('position');
    for (let i = 1; i < p.count; i++) {
      const k = 0.65 + Math.random() * 0.55;
      p.setXYZ(i, p.getX(i) * k, 0, p.getZ(i) * k);
    }
    this.mesh = new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(1.45, 0.4, 0.05), transparent: true, opacity: 0.85, depthWrite: false }), MAX);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 3;
    ctx.scene.add(this.mesh);
    this.patches = []; // { x, z, r, born }
    this.total = 0;
    try {
      this.total = Math.max(0, parseInt(localStorage.getItem(STORE), 10) || 0);
    } catch {
      /* private mode */
    }
    this.el = document.getElementById('spiceCount');
    this.respawn = 12;
    this._show();
  }

  _show() {
    if (!this.el) return;
    this.el.hidden = this.total <= 0;
    this.el.textContent = ` · ${this.total} spice`;
  }

  clear() {
    this.patches.length = 0;
    this._sync();
  }

  // n patches between r0 and r1 from (x, z), on open sand
  scatter(n, x, z, r0, r1, rng) {
    for (let i = 0; i < n && this.patches.length < MAX; i++) {
      for (let tries = 0; tries < 12; tries++) {
        const a = rng() * Math.PI * 2;
        const d = range(rng, r0, r1);
        const px = x + Math.cos(a) * d;
        const pz = z + Math.sin(a) * d;
        if (this.ctx.blocked(px, pz, 1.2)) continue;
        this.patches.push({ x: px, z: pz, r: range(rng, 0.32, 0.55), born: 0 });
        break;
      }
    }
    this._sync();
  }

  _sync() {
    const g = { x: 0, z: 0 };
    this.patches.forEach((s, i) => {
      groundGradient(s.x, s.z, g);
      _n.set(-g.x, 1, -g.z).normalize();
      _q.setFromUnitVectors(UP, _n);
      _p.set(s.x, groundHeight(s.x, s.z) + 0.05, s.z);
      _s.setScalar(s.r);
      _m.compose(_p, _q, _s);
      this.mesh.setMatrixAt(i, _m);
    });
    this.mesh.count = this.patches.length;
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  // env: { px, pz, collecting, focus, viewR, rng }
  update(dt, t, env) {
    const { particles, audio, toast } = this.ctx;
    this.mesh.material.opacity = 0.7 + 0.18 * Math.sin(t * 2.4);
    // a few motes lift off the patches in view
    for (const s of this.patches) {
      if (Math.random() < dt * 1.4 && Math.hypot(s.x - env.focus.x, s.z - env.focus.z) < env.viewR) {
        const a = Math.random() * Math.PI * 2;
        particles.spawn(PT.SPICE, s.x + Math.cos(a) * s.r * 0.7, groundHeight(s.x, s.z) + 0.1, s.z + Math.sin(a) * s.r * 0.7, 0, 0.25, 0, 0.04, 2.2, _c.setRGB(1.6, 0.6, 0.15), 0.9, { drag: 0.5 });
      }
    }
    if (env.collecting) {
      for (let i = this.patches.length - 1; i >= 0; i--) {
        const s = this.patches[i];
        if (Math.hypot(s.x - env.px, s.z - env.pz) > s.r + 0.55) continue;
        this.patches.splice(i, 1);
        this.total++;
        try {
          localStorage.setItem(STORE, String(this.total));
        } catch {
          /* private mode */
        }
        particles.burst(s.x, groundHeight(s.x, s.z) + 0.2, s.z, 18, 1.5, _c.setRGB(1.8, 0.8, 0.3), { radius: 0.3, dust: 0.3 });
        audio.blip('spice');
        this._show();
        if (this.el) {
          this.el.classList.remove('bump');
          void this.el.offsetWidth;
          this.el.classList.add('bump');
        }
        const rank = RANKS.find((r) => r[0] === this.total);
        if (rank) toast(rank[1], 4);
        else if (this.total === 1) toast('Spice. Walk through the glowing patches to gather it.', 4);
        this._sync();
      }
    }
    // the desert keeps a little spice lying about
    this.respawn -= dt;
    if (this.respawn <= 0) {
      this.respawn = range(env.rng, 14, 30);
      if (this.patches.length < 9) this.scatter(1, env.px, env.pz, env.viewR * 0.6, env.viewR + 18, env.rng);
    }
    // patches left far behind are forgotten
    if (this.patches.length > 30) {
      const before = this.patches.length;
      this.patches = this.patches.filter((s) => Math.hypot(s.x - env.px, s.z - env.pz) < 140);
      if (this.patches.length !== before) this._sync();
    }
  }
}
