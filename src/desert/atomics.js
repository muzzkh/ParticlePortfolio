import * as THREE from 'three';
import { ed25519 } from '@noble/curves/ed25519.js';
import { groundHeight, addCrater } from './noise.js';
import { STAMP } from './trails.js';
import { PT } from './particles.js';

// ---------------------------------------------------------------------------
// The launch code
// ---------------------------------------------------------------------------
// The code itself is never stored anywhere. An entered code is stretched with PBKDF2
// into an Ed25519 signing key; the code is right when that key's public half matches
// PUBLIC_KEY. The same key signs each strike, so other visitors only accept strikes
// from someone who knows the code. (A short numeric code can still be brute-forced by
// anyone patient enough to run PBKDF2 offline; a longer code makes that impractical.)
const PUBLIC_KEY = hexToBytes('05d32d846dbe1d7f690760f173c37090b8b0f2b1c0ed6e100fc6c16cf76b6e43');
const SALT = 'muzzamilkhan.com/atomics/v1';
const ROUNDS = 200000;

function hexToBytes(h) {
  const out = new Uint8Array(h.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(h.substr(i * 2, 2), 16);
  return out;
}
function bytesToHex(b) {
  return Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
}
function sameBytes(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a[i] ^ b[i];
  return d === 0;
}

export class LaunchKey {
  constructor() {
    this.secret = null;
    this.fails = 0;
    this.lockedUntil = 0;
  }

  // 'ok' | 'wrong' | 'locked' | 'unsupported'
  async tryCode(code) {
    if (Date.now() < this.lockedUntil) return 'locked';
    if (!crypto.subtle) return 'unsupported';
    const enc = new TextEncoder();
    const base = await crypto.subtle.importKey('raw', enc.encode(code), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: enc.encode(SALT), iterations: ROUNDS }, base, 256);
    const secret = new Uint8Array(bits);
    if (sameBytes(ed25519.getPublicKey(secret), PUBLIC_KEY)) {
      this.secret = secret;
      this.fails = 0;
      return 'ok';
    }
    this.fails++;
    if (this.fails >= 3) {
      this.fails = 0;
      this.lockedUntil = Date.now() + 30000;
    }
    return 'wrong';
  }

  get lockSeconds() {
    return Math.max(0, Math.ceil((this.lockedUntil - Date.now()) / 1000));
  }

  // a signed, self-describing strike order for other visitors
  sign(order) {
    const p = JSON.stringify(order);
    return { p, s: bytesToHex(ed25519.sign(new TextEncoder().encode(p), this.secret)) };
  }

  static verify(msg) {
    try {
      if (!msg || typeof msg.p !== 'string' || typeof msg.s !== 'string' || msg.p.length > 2000) return null;
      if (!ed25519.verify(hexToBytes(msg.s), new TextEncoder().encode(msg.p), PUBLIC_KEY)) return null;
      return JSON.parse(msg.p);
    } catch {
      return null;
    }
  }
}

// ---------------------------------------------------------------------------
// The strike
// ---------------------------------------------------------------------------
const FALL = 1.7; // seconds from release to impact
const DROP_H = 80;

// A fireball: turbulent, white-hot at the centre and red at the rim, soft-edged.
const FIRE_VERT = /* glsl */ `
varying vec3 vN;
varying vec3 vP;
void main() {
  vN = normalize(normalMatrix * normal);
  vP = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const FIRE_FRAG = /* glsl */ `
uniform float uHeat;
uniform float uOpacity;
uniform float uTime;
varying vec3 vN;
varying vec3 vP;
float h(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float n3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h(i), h(i + vec3(1, 0, 0)), f.x), mix(h(i + vec3(0, 1, 0)), h(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(h(i + vec3(0, 0, 1)), h(i + vec3(1, 0, 1)), f.x), mix(h(i + vec3(0, 1, 1)), h(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
void main() {
  float facing = clamp(vN.z, 0.0, 1.0);
  float turb = n3(vP * 2.2 + vec3(0.0, -uTime * 1.5, 0.0)) * 0.6 + n3(vP * 5.0 - uTime) * 0.4;
  float core = clamp(pow(facing, 1.6) * (0.65 + 0.7 * turb) * 1.3, 0.0, 1.0);
  vec3 hot = vec3(6.0, 4.6, 3.0);
  vec3 warm = vec3(3.2, 1.2, 0.35);
  vec3 cool = vec3(0.9, 0.22, 0.07);
  vec3 col = mix(cool, mix(warm, hot, uHeat), core) * (0.35 + 0.65 * uHeat + 0.3 * core);
  float a = uOpacity * smoothstep(0.0, 0.55, facing) * (0.55 + 0.45 * turb);
  gl_FragColor = vec4(col, a);
}
`;

export class Atomics {
  // hooks: { shake(amount), knock(x, z, power), sound(kind), flash() }
  constructor(scene, { particles, trails, hooks }) {
    this.scene = scene;
    this.particles = particles;
    this.trails = trails;
    this.hooks = hooks;
    this.bombs = [];
    this.blasts = [];
    // one light, always present, so no material ever recompiles for it
    this.light = new THREE.PointLight(0xffb070, 0, 120, 1.4);
    scene.add(this.light);
    this.bombGeo = new THREE.CapsuleGeometry(0.35, 1.3, 4, 10);
    this.bombMat = new THREE.MeshStandardMaterial({ color: '#2b2622', metalness: 0.7, roughness: 0.4 });
    this.trailMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.2, 1.4), transparent: true, opacity: 0.85, depthWrite: false });
    this.fireGeo = new THREE.SphereGeometry(1, 24, 16);
    this.ringGeo = new THREE.RingGeometry(0.92, 1, 64).rotateX(-Math.PI / 2);
    this._c = new THREE.Color();
  }

  // targets: [[x, z], ...]; each falls `stagger` seconds after the last
  drop(targets, stagger = 0.55) {
    targets.forEach(([x, z], i) => {
      const bomb = new THREE.Group();
      const body = new THREE.Mesh(this.bombGeo, this.bombMat);
      const streak = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.35, 14, 8).translate(0, 7.5, 0), this.trailMat);
      bomb.add(body, streak);
      bomb.visible = false;
      this.scene.add(bomb);
      this.bombs.push({ x, z, group: bomb, t: -i * stagger, whistled: false });
    });
  }

  get active() {
    return this.bombs.length > 0 || this.blasts.length > 0;
  }

  update(dt, tint) {
    for (let i = this.bombs.length - 1; i >= 0; i--) {
      const b = this.bombs[i];
      b.t += dt;
      if (b.t < 0) continue;
      if (!b.whistled) {
        b.whistled = true;
        this.hooks.sound('whistle');
      }
      const g = groundHeight(b.x, b.z);
      const k = Math.min(1, b.t / FALL);
      b.group.visible = true;
      b.group.position.set(b.x + (1 - k) * 6, g + DROP_H * (1 - k * k), b.z - (1 - k) * 4);
      if (k >= 1) {
        this.scene.remove(b.group);
        b.group.children[1].geometry.dispose();
        this.bombs.splice(i, 1);
        this._detonate(b.x, g, b.z, tint);
      }
    }
    let glow = 0;
    let lx = 0;
    let ly = 0;
    let lz = 0;
    for (let i = this.blasts.length - 1; i >= 0; i--) {
      const e = this.blasts[i];
      e.t += dt;
      const t = e.t;
      // fireball: swells fast, then rises and cools from white-hot to dull red
      const grow = 1 - Math.exp(-t * 4);
      const s = 1 + grow * 5.5;
      e.fire.scale.set(s, s * 0.9, s);
      e.fire.position.y = e.y + 2 + Math.max(0, t - 0.5) * 5;
      const fu = e.fire.material.uniforms;
      fu.uHeat.value = Math.exp(-t * 1.1);
      fu.uTime.value = t;
      fu.uOpacity.value = Math.max(0, 1 - Math.max(0, t - 1.0) / 2.2);
      // shockwave racing out over the sand
      const r = 2 + t * 34;
      e.ring.scale.set(r, 1, r);
      e.ring.material.opacity = Math.max(0, 0.4 * (1 - t / 1.6));
      // the mushroom: a rising stem of smoke, then a cap rolling outward at the top
      if (t < 4.5) {
        e.acc += dt * 70;
        const top = e.y + 4 + Math.min(t, 3.5) * 9;
        const smoke = this._c.copy(this.particles.dustColor).multiply(tint).multiplyScalar(0.5);
        while (e.acc >= 1) {
          e.acc -= 1;
          const a = Math.random() * Math.PI * 2;
          if (Math.random() < 0.55) {
            // the stem: a tight column climbing to the head
            const rr = Math.random() * 0.9;
            this.particles.spawn(PT.DUST, e.x + Math.cos(a) * rr, e.y + 1 + Math.random() * (top - e.y) * 0.7, e.z + Math.sin(a) * rr, Math.cos(a) * 0.25, 4 + Math.random() * 3, Math.sin(a) * 0.25, 1.0 + Math.random() * 0.7, 3.5 + Math.random() * 2, smoke, 0.32, { grow: 0.7, drag: 0.06 });
          } else {
            // the head: a ring that rolls outward a little and billows, rather than spreading flat
            const rr = 1.5 + Math.min(t, 3) * 1.6 + Math.random() * 1.5;
            const hot = t < 1.2 ? this._c.setRGB(2.4, 1.1, 0.4) : smoke;
            const out = 1 + Math.random() * 1.4;
            this.particles.spawn(PT.DUST, e.x + Math.cos(a) * rr, top + (Math.random() - 0.3) * 2.5, e.z + Math.sin(a) * rr, Math.cos(a) * out, 0.8 + Math.random() * 1.2, Math.sin(a) * out, 1.8 + Math.random() * 1.2, 5 + Math.random() * 3, hot, t < 1.2 ? 0.4 : 0.34, { grow: 1.2, drag: 0.12 });
          }
        }
      }
      const lit = Math.exp(-t * 1.6);
      if (lit > glow) {
        glow = lit;
        lx = e.x;
        ly = e.fire.position.y + 3;
        lz = e.z;
      }
      if (t > 5) {
        this.scene.remove(e.fire, e.ring);
        e.fire.material.dispose();
        e.ring.material.dispose();
        this.blasts.splice(i, 1);
      }
    }
    this.light.intensity = glow * 900;
    this.light.position.set(lx, ly, lz);
  }

  _detonate(x, y, z, tint) {
    const fire = new THREE.Mesh(
      this.fireGeo,
      new THREE.ShaderMaterial({
        uniforms: { uHeat: { value: 1 }, uOpacity: { value: 1 }, uTime: { value: 0 } },
        vertexShader: FIRE_VERT,
        fragmentShader: FIRE_FRAG,
        transparent: true,
        depthWrite: false,
      }),
    );
    fire.position.set(x, y + 2, z);
    fire.renderOrder = 7;
    const ring = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(1.15, 0.85, 0.6), transparent: true, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide }));
    ring.position.set(x, y + 0.4, z);
    ring.renderOrder = 7;
    this.scene.add(fire, ring);
    this.blasts.push({ x, y, z, fire, ring, t: 0, acc: 0 });
    // the sand: a crater, a blast ring, a wall of thrown sand
    addCrater(x, z, 11, 3.0, 30);
    this.trails.stamp(STAMP.CRATER, x, z, 0, 34, 34, 2.6, 0.8, 1);
    this.trails.stamp(STAMP.RING, x, z, 0, 60, 60, 0, 0.05, 1);
    this.particles.burst(x, y + 0.5, z, 1600, 18, tint, { radius: 4, dust: 0.15, puff: 1.8, grow: 2.2, chunk: 2.4, dustAlpha: 0.2 });
    this.hooks.flash();
    this.hooks.shake(x, z);
    this.hooks.knock(x, z);
    this.hooks.sound('boom');
  }
}

// Random impact points around (px, pz), never right on top of the walker.
export function strikeTargets(px, pz, n = 5) {
  const out = [];
  const a0 = Math.random() * Math.PI * 2;
  for (let i = 0; i < n; i++) {
    const a = a0 + (i / n) * Math.PI * 2 + (Math.random() - 0.5) * 0.8;
    const d = 18 + Math.random() * 24;
    out.push([Math.round((px + Math.cos(a) * d) * 10) / 10, Math.round((pz + Math.sin(a) * d) * 10) / 10]);
  }
  return out;
}
