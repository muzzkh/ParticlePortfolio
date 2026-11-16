import * as THREE from 'three';
import { groundHeight, groundGradient } from './noise.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Cloak } from './cloak.js';

const THIGH = 0.45;
const SHIN = 0.44;
const LEG = THIGH + SHIN;
const ANKLE = 0.075;
const UPPER = 0.29;
const FORE = 0.27;
const HIP_W = 0.095;
const SHOULDER_W = 0.2;
const SHOULDER_Y = 0.46;
const STAND = ANKLE + LEG * 0.965;
const WALK_SPEED = 1.9;
const RUN_SPEED = 5.4;
const FOOT_SINK = 0.035;
const GRAVITY = 16;

const UP = new THREE.Vector3(0, 1, 0);
const _d = new THREE.Vector3();
const _g = { x: 0, z: 0 };
const _t1 = new THREE.Vector3();
const _t2 = new THREE.Vector3();
const _fwd = new THREE.Vector3();

function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}
function lerpAngle(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
const _x = new THREE.Vector3();
const _z = new THREE.Vector3();
const _basis = new THREE.Matrix4();
// Lay a limb from a to b: its length runs along +y, and its front (+z) is turned as far
// toward `fwd` as it will go, so what is strapped to the front of it stays in front.
function placeBetween(obj, a, b, fwd) {
  obj.position.addVectors(a, b).multiplyScalar(0.5);
  _d.subVectors(b, a).normalize();
  _z.copy(fwd).addScaledVector(_d, -fwd.dot(_d));
  if (_z.lengthSq() < 1e-4) _z.set(0, 1, 0).addScaledVector(_d, -_d.y);
  _z.normalize();
  _x.crossVectors(_d, _z);
  obj.quaternion.setFromRotationMatrix(_basis.makeBasis(_x, _d, _z));
}
function shadowed(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------------------
// The walker's parts. Every piece of the suit is a simple solid; the pieces of one part
// that share a material are baked into a single mesh, so all the straps, plates and
// pouches cost no more to draw than the bare limbs did. Built once, shared by every
// walker in the desert.
// ---------------------------------------------------------------------------
const TAU = Math.PI * 2;
const _km = new THREE.Matrix4();
const _kp = new THREE.Vector3();
const _kq = new THREE.Quaternion();
const _ke = new THREE.Euler();
const _ks = new THREE.Vector3();

class Loop extends THREE.Curve {
  constructor(rx, rz) {
    super();
    this.rx = rx;
    this.rz = rz;
  }
  getPoint(t, target = new THREE.Vector3()) {
    return target.set(Math.cos(t * TAU) * this.rx, 0, Math.sin(t * TAU) * this.rz);
  }
}
// a band lying flat round the body (or a limb): rx to the side, rz front to back
const hoop = (rx, rz, tube, radial = 6) => new THREE.TubeGeometry(new Loop(rx, rz), 28, tube, radial, true);
const sphere = (r, w = 12, h = 10) => new THREE.SphereGeometry(r, w, h);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const cyl = (rt, rb, h, n = 10) => new THREE.CylinderGeometry(rt, rb, h, n);
const capsule = (r, len, n = 12) => new THREE.CapsuleGeometry(r, len, 4, n);
const limbCapsule = (r, length) => capsule(r, Math.max(0.01, length - r * 0.6));

function kit() {
  const bins = {};
  const k = {
    // place a solid: position, rotation (x, y, z), scale; the scale is applied first
    add(mat, geo, px = 0, py = 0, pz = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
      geo.applyMatrix4(_km.compose(_kp.set(px, py, pz), _kq.setFromEuler(_ke.set(rx, ry, rz)), _ks.set(sx, sy, sz)));
      (bins[mat] ||= []).push(geo);
      return k;
    },
    done() {
      const out = {};
      for (const [mat, geos] of Object.entries(bins)) {
        out[mat] = mergeGeometries(geos);
        out[mat].userData.shared = true; // every walker draws this same geometry
        for (const g of geos) g.dispose();
      }
      return out;
    },
  };
  return k;
}

let PARTS = null;
function parts() {
  if (PARTS) return PARTS;

  // ---- torso (origin at the pelvis, +z forward) ----
  const body = kit();
  body
    .add('suit', sphere(0.14, 16, 12), 0, 0, 0, 0, 0, 0, 1.12, 0.78, 0.88)
    .add('suit', capsule(0.118, 0.1, 14), 0, 0.16, 0, 0, 0, 0, 1.08, 1, 0.84)
    .add('suit', capsule(0.145, 0.12, 16), 0, 0.33, 0, 0, 0, 0, 1.2, 1, 0.84)
    .add('suit', cyl(0.048, 0.055, 0.09), 0, 0.52, 0);
  for (const sx of [-1, 1]) {
    body.add('suit', sphere(0.066), sx * 0.2, 0.435, -0.01);
    // shoulder plates, tipped outward
    body.add('suitRib', new THREE.SphereGeometry(0.085, 12, 8, 0, TAU, 0, Math.PI / 2), sx * 0.222, 0.452, -0.01, 0, 0, -sx * 0.4, 1.2, 0.72, 1.15);
    // valves on the chest plate
    body.add('metal', cyl(0.011, 0.011, 0.022, 8), sx * 0.055, 0.387, 0.134, Math.PI / 2);
    // the harness: two straps crossing on the chest
    body.add('wrap', hoop(0.222, 0.129, 0.012, 4), 0, 0.29, 0, 0, 0, sx * 0.62);
    // reclamation canisters on the back, under the cloak
    body.add('suitRib', cyl(0.03, 0.03, 0.2, 8), sx * 0.06, 0.32, -0.168);
  }
  // catchtubes round the chest
  for (let i = 0; i < 3; i++) body.add('suitRib', hoop(0.181 - i * 0.003, 0.13, 0.011), 0, 0.22 + i * 0.075, 0);
  body
    .add('suitRib', box(0.17, 0.13, 0.03), 0, 0.36, 0.118, -0.12)
    .add('suitRib', box(0.1, 0.07, 0.02), 0, 0.365, 0.134, -0.12)
    .add('suitRib', hoop(0.07, 0.064, 0.017), 0, 0.5, 0)
    .add('suitRib', box(0.2, 0.22, 0.07), 0, 0.32, -0.135);
  // layered pads down the stomach
  for (let i = 0; i < 3; i++) body.add('suitRib', box(0.13 - i * 0.014, 0.034, 0.022), 0, 0.2 - i * 0.047, 0.1 - i * 0.003, 0.05);
  body.add('wrap', hoop(0.157, 0.129, 0.026), 0, 0.05, 0);
  for (const [x, z, w] of [
    [0.13, 0.04, 0.07],
    [-0.12, -0.06, 0.08],
    [0.02, -0.13, 0.1],
    [-0.135, 0.05, 0.06],
  ]) {
    body.add('wrap', box(w, 0.075, 0.05), x, 0.03, z, 0, Math.atan2(-x, -z), 0);
  }
  body
    .add('metal', box(0.055, 0.045, 0.016), 0, 0.05, 0.134)
    .add('metal', cyl(0.03, 0.03, 0.014), 0, 0.29, 0.13, Math.PI / 2)
    // crysknife at the hip: sheath, hilt and pommel, leaning out
    .add('wrap', box(0.032, 0.2, 0.02), 0.15, -0.04, 0.06, 0, 0, -0.35)
    .add('bone', cyl(0.012, 0.015, 0.1, 6), 0.201, 0.101, 0.06, 0, 0, -0.35)
    .add('bone', sphere(0.017, 8, 6), 0.222, 0.157, 0.06)
    // the mantle: cloth gathered on the shoulders, where the cloak hangs from
    .add('cloth', hoop(0.212, 0.132, 0.04, 8), 0, 0.478, 0)
    .add('cloth', hoop(0.13, 0.1, 0.04, 8), 0, 0.512, 0);

  // ---- head (origin at its middle) ----
  const head = kit();
  head
    .add('skin', sphere(0.1, 18, 14), 0, 0, 0, 0, 0, 0, 0.92, 1.05, 1)
    .add('cloth', new THREE.SphereGeometry(0.128, 22, 16, 0, TAU, 0, Math.PI * 0.62), 0, 0.012, -0.012, -0.55, 0, 0, 0.98, 1.12, 1.08)
    // drape around the back of the head and neck, open at the face (+z)
    .add('cloth', new THREE.SphereGeometry(0.132, 18, 12, Math.PI * 0.72, Math.PI * 1.56, Math.PI * 0.3, Math.PI * 0.42), 0, -0.02, -0.012)
    .add('cloth', new THREE.TorusGeometry(0.085, 0.042, 10, 24), 0, -0.1, 0.005, Math.PI / 2 + 0.15)
    // the peak of the hood, falling back
    .add('cloth', new THREE.ConeGeometry(0.05, 0.12, 8), 0, 0.085, -0.115, -2.0)
    .add('wrap', hoop(0.097, 0.105, 0.012, 5), 0, 0.045, -0.004, -0.2)
    .add('mask', capsule(0.05, 0.05), 0, -0.045, 0.078, 0, 0, Math.PI / 2, 0.9, 1, 0.75)
    .add('mask', box(0.02, 0.045, 0.028), 0, 0.0, 0.09);
  for (const sx of [-1, 1]) {
    head
      .add('mask', new THREE.TorusGeometry(0.07, 0.008, 6, 16, Math.PI * 0.9), sx * 0.02, -0.05, 0.02, 0, Math.PI / 2, -0.4)
      // filter canisters at the cheeks, and the rims of the eyepieces
      .add('mask', cyl(0.019, 0.019, 0.05, 8), sx * 0.052, -0.062, 0.084, Math.PI / 2, 0, -sx * 0.45)
      .add('mask', new THREE.TorusGeometry(0.02, 0.0065, 6, 14), sx * 0.034, 0.014, 0.087)
      .add('eye', sphere(0.0135, 10, 8), sx * 0.034, 0.014, 0.088);
  }

  // ---- limbs: +y runs down the limb, +z is its front; body +x is the limb's -x ----
  const thigh = [1, -1].map((side) =>
    kit()
      .add('suit', limbCapsule(0.07, THIGH))
      .add('wrap', hoop(0.076, 0.076, 0.011, 5), 0, -0.07, 0)
      .add('wrap', hoop(0.075, 0.075, 0.011, 5), 0, 0.06, 0)
      .add('wrap', box(0.04, 0.12, 0.075), -side * 0.078, -0.005, 0)
      .done(),
  );
  const shin = kit()
    .add('suit', limbCapsule(0.056, SHIN))
    // knee guard and a plate down the shin
    .add('suitRib', sphere(0.068, 10, 8), 0, -0.215, 0.028, 0, 0, 0, 1, 1.3, 0.7)
    .add('suitRib', capsule(0.026, 0.17, 8), 0, -0.03, 0.042, 0, 0, 0, 1.5, 1, 0.6)
    .add('wrap', hoop(0.058, 0.058, 0.009, 5), 0, 0.1, 0)
    .add('wrap', hoop(0.058, 0.058, 0.009, 5), 0, 0.136, 0)
    .add('boot', cyl(0.058, 0.064, 0.075, 12), 0, 0.185, 0)
    .done();
  const knee = kit().add('suitRib', sphere(0.058, 10, 8)).done();
  // origin at the ankle end of the foot, +z toward the toes
  const boot = kit()
    .add('boot', new THREE.CapsuleGeometry(0.052, 0.15, 4, 10).rotateX(Math.PI / 2).scale(1, 0.72, 1))
    .add('boot', box(0.085, 0.05, 0.07), 0, -0.012, -0.075)
    .add('suit', box(0.098, 0.02, 0.262), 0, -0.04, 0)
    .add('suitRib', sphere(0.05, 10, 8), 0, -0.006, 0.09, 0, 0, 0, 1, 0.62, 1)
    .done();
  const upperArm = kit()
    .add('suit', limbCapsule(0.05, UPPER))
    .add('wrap', hoop(0.054, 0.054, 0.009, 5), 0, -0.02, 0)
    .add('suitRib', sphere(0.052, 10, 8), 0, 0.14, -0.018, 0, 0, 0, 1, 1.1, 0.8)
    .done();
  const forearm = kit()
    .add('cloth', limbCapsule(0.044, FORE))
    // a bracer, bound at both ends
    .add('wrap', cyl(0.047, 0.05, 0.12, 12), 0, 0.02, 0)
    .add('wrap', hoop(0.051, 0.051, 0.007, 5), 0, -0.045, 0)
    .add('wrap', hoop(0.049, 0.049, 0.007, 5), 0, 0.085, 0)
    .done();
  // origin at the wrist, +y on from the forearm
  const hand = kit()
    .add('mask', sphere(0.04, 10, 8), 0, 0.025, 0, 0, 0, 0, 0.85, 1.3, 0.62)
    .add('mask', sphere(0.017, 8, 6), 0, 0.02, 0.03, 0, 0, 0, 1, 1.4, 1)
    .done();

  PARTS = { body: body.done(), head: head.done(), thigh, shin, knee, boot, upperArm, forearm, hand };
  return PARTS;
}

// one part, put together in this walker's own materials
function assemble(part, materials) {
  const g = new THREE.Group();
  for (const [key, geo] of Object.entries(part)) g.add(shadowed(new THREE.Mesh(geo, materials[key])));
  return g;
}

export class Fremen {
  constructor() {
    this.root = new THREE.Group();
    this.root.name = 'fremen';

    const suit = new THREE.MeshStandardMaterial({ color: '#2f2b28', roughness: 0.5, metalness: 0.25 });
    const suitRib = new THREE.MeshStandardMaterial({ color: '#45403a', roughness: 0.45, metalness: 0.3 });
    const cloth = new THREE.MeshStandardMaterial({ color: '#76614b', roughness: 1, metalness: 0, side: THREE.DoubleSide });
    const wrap = new THREE.MeshStandardMaterial({ color: '#5d4a3a', roughness: 0.95 });
    const boot = new THREE.MeshStandardMaterial({ color: '#3b3029', roughness: 0.8 });
    const mask = new THREE.MeshStandardMaterial({ color: '#1a1817', roughness: 0.4, metalness: 0.5 });
    const eye = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.25, 0.75, 3.2), toneMapped: true });
    const skin = new THREE.MeshStandardMaterial({ color: '#8a6450', roughness: 0.7 });
    const metal = new THREE.MeshStandardMaterial({ color: '#7a6448', roughness: 0.42, metalness: 0.7 });
    const bone = new THREE.MeshStandardMaterial({ color: '#d9ccb0', roughness: 0.35 });
    this.materials = { suit, cloth, wrap, boot, mask, eye, skin, suitRib, metal, bone };

    // ---- torso group (origin = pelvis) ----
    const kitParts = parts();
    const body = assemble(kitParts.body, this.materials);
    this.body = body;
    this.root.add(body);

    // ---- head ----
    const head = assemble(kitParts.head, this.materials);
    head.position.y = 0.64;
    body.add(head);
    this.head = head;

    // ---- limbs (world space) ----
    const pair = (part) => [0, 1].map((i) => assemble(Array.isArray(part) ? part[i] : part, this.materials));
    this.thighs = pair(kitParts.thigh);
    this.shins = pair(kitParts.shin);
    this.upperArms = pair(kitParts.upperArm);
    this.forearms = pair(kitParts.forearm);
    this.hands = pair(kitParts.hand);
    this.boots = pair(kitParts.boot);
    this.knees = pair(kitParts.knee);
    for (const arr of [this.thighs, this.shins, this.upperArms, this.forearms, this.hands, this.boots, this.knees]) {
      for (const m of arr) this.root.add(m);
    }

    // ---- cloak ----
    this.cloak = new Cloak(cloth, { cols: 9, rows: 14, width: 0.64, length: 1.2, flare: 1.6 });
    this.root.add(this.cloak.mesh);
    this.cloakAnchorsLocal = [];
    for (let c = 0; c < 9; c++) {
      const th = -1.95 + (3.9 * c) / 8;
      this.cloakAnchorsLocal.push(new THREE.Vector3(Math.sin(th) * 0.215, SHOULDER_Y + 0.03 + Math.cos(th) * 0.02, -Math.cos(th) * 0.135));
    }
    this.cloakAnchors = this.cloakAnchorsLocal.map((v) => v.clone());
    this.colliders = [
      { a: new THREE.Vector3(), b: new THREE.Vector3(), r: 0.2 },
      { a: new THREE.Vector3(), b: new THREE.Vector3(), r: 0.1 },
      { a: new THREE.Vector3(), b: new THREE.Vector3(), r: 0.1 },
      { a: new THREE.Vector3(), b: new THREE.Vector3(), r: 0.075 },
      { a: new THREE.Vector3(), b: new THREE.Vector3(), r: 0.075 },
    ];

    // ---- state ----
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.bodyY = 0;
    this.phase = 0;
    this.runBlend = 0;
    this.lean = 0;
    this.time = 0;
    this.speed = 0;
    this.sliding = 0;
    this.stumble = 0;
    this.sandwalk = false;
    this.sw = { timer: 0, target: 1, mul: 1 };
    this.speedMul = 1; // the games speed the walker up
    this.air = 0; // height of a jump above the sand
    this.vy = 0;
    this.squash = 0; // a little crouch on landing
    this.armSwing = [0, 0];
    this.feet = [0, 1].map((i) => ({
      side: i === 0 ? 1 : -1,
      offset: i * 0.5,
      pos: new THREE.Vector3(),
      from: new THREE.Vector3(),
      target: new THREE.Vector3(),
      y: 0,
      fromY: 0,
      yaw: 0,
      pitch: 0,
      swinging: false,
      wasInWindow: false,
      lastLocal: 0,
      s: 0,
    }));
    this.lastStepTime = 0;
    this.stepIntervals = [];
    this.rhythm = 0;
    this.regularity = 0;

    this.onFootstep = null; // (info) => void
    this.onLift = null;
  }

  spawn(x, z, yaw = 0) {
    this.pos.set(x, groundHeight(x, z), z);
    this.vel.set(0, 0, 0);
    this.yaw = yaw;
    const lx = Math.cos(yaw);
    const lz = -Math.sin(yaw);
    for (const f of this.feet) {
      f.pos.set(x + lx * f.side * HIP_W, 0, z + lz * f.side * HIP_W);
      f.y = groundHeight(f.pos.x, f.pos.z) - FOOT_SINK;
      f.pos.y = f.y;
      f.yaw = yaw;
      f.swinging = false;
    }
    this.bodyY = this.pos.y + STAND;
    this.air = 0;
    this.vy = 0;
    this.squash = 0;
    this.cloak.initialized = false;
    this.rhythm = 0;
    this.stepIntervals.length = 0;
  }

  get airborne() {
    return this.air > 0 || this.vy > 0;
  }

  // leap straight up (keeping the run's speed); false while already in the air
  jump(v = 5.6) {
    if (this.airborne) return false;
    this.vy = v;
    this.air = 1e-4;
    return true;
  }

  applyImpulse(x, z, stumble = 0.8) {
    this.vel.x += x;
    this.vel.z += z;
    this.stumble = Math.max(this.stumble, stumble);
  }

  // input: { x, z } world direction (length 0..1), run: bool
  // env: { wind: Vector3 air velocity, collide(pos, r, vel), onRock: bool }
  update(dt, input, env) {
    this.time += dt;
    const feet = this.feet;

    // ---------------- locomotion ----------------
    let ix = input.x;
    let iz = input.z;
    const mag = Math.min(1, Math.hypot(ix, iz));
    if (mag > 1e-4) {
      const l = Math.hypot(ix, iz);
      ix /= l;
      iz /= l;
    }
    let maxSpeed = (input.run ? RUN_SPEED : WALK_SPEED) * this.speedMul;
    if (this.sandwalk) {
      const sw = this.sw;
      sw.timer -= dt;
      if (sw.timer <= 0) {
        sw.timer = 0.2 + Math.random() * 0.75;
        sw.target = Math.random() < 0.2 ? 0.12 : 0.45 + Math.random() * 0.8;
      }
      sw.mul += (sw.target - sw.mul) * (1 - Math.exp(-dt * 7));
      maxSpeed = (input.run ? 3.4 : 1.9) * sw.mul * this.speedMul;
    }
    groundGradient(this.pos.x, this.pos.z, _g);
    const uphill = ix * _g.x + iz * _g.z;
    const slopeF = clamp(1 - Math.max(0, uphill) * 0.8 + Math.max(0, -uphill) * 0.12, 0.32, 1.15);
    const tvx = ix * maxSpeed * mag * slopeF;
    const tvz = iz * maxSpeed * mag * slopeF;
    this.stumble = Math.max(0, this.stumble - dt);
    const accRate = this.stumble > 0 ? 1.2 : mag > 0.01 ? 5.5 : 7;
    const acc = 1 - Math.exp(-dt * accRate);
    this.vel.x += (tvx - this.vel.x) * acc;
    this.vel.z += (tvz - this.vel.z) * acc;

    // slip faces: past the angle of repose the sand gives way underfoot
    const steep = Math.hypot(_g.x, _g.z);
    this.sliding = 0;
    if (steep > 0.68) {
      const k = Math.min(1, (steep - 0.68) * 2.2);
      const moveAlong = (this.vel.x * -_g.x + this.vel.z * -_g.z) / steep; // + = downhill
      this.vel.x -= (_g.x / steep) * k * 2.6 * dt;
      this.vel.z -= (_g.z / steep) * k * 2.6 * dt;
      this.sliding = k * clamp(0.35 + Math.max(0, moveAlong) * 0.3, 0, 1);
    }

    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    if (env.collide) env.collide(this.pos, 0.34, this.vel);
    this.pos.y = groundHeight(this.pos.x, this.pos.z);

    // a jump: up and down over the sand (pos stays on the ground; air is the height)
    let landed = false;
    if (this.airborne) {
      this.vy -= GRAVITY * dt;
      this.air += this.vy * dt;
      if (this.air <= 0) {
        this.air = 0;
        this.vy = 0;
        landed = true;
        this.squash = 0.14;
      }
    }
    const airborne = this.air > 0;
    this.squash = Math.max(0, this.squash - dt * 0.6);

    const speed = Math.hypot(this.vel.x, this.vel.z);
    this.speed = speed;
    if (speed > 0.12 && this.stumble <= 0.3) {
      const targetYaw = Math.atan2(this.vel.x, this.vel.z);
      this.yaw = lerpAngle(this.yaw, targetYaw, 1 - Math.exp(-dt * 9));
    }
    const fx = Math.sin(this.yaw);
    const fz = Math.cos(this.yaw);
    const lx = Math.cos(this.yaw);
    const lz = -Math.sin(this.yaw);
    const dirX = speed > 0.05 ? this.vel.x / speed : fx;
    const dirZ = speed > 0.05 ? this.vel.z / speed : fz;

    // ---------------- gait ----------------
    const running = speed > 3.2;
    this.runBlend += ((running ? 1 : 0) - this.runBlend) * (1 - Math.exp(-dt * 5));
    const moving = speed > 0.12;
    const swingFrac = 0.4 + 0.2 * this.runBlend;
    const stepLenTarget = 0.36 + speed * 0.17;
    let rate = moving ? Math.max(speed / (2 * stepLenTarget), 0.95) : 1.8;
    const stride = moving ? speed / rate : 0;
    const stanceHalf = stride * (1 - swingFrac) * 0.5;
    const lateral = HIP_W * (1.05 - 0.35 * this.runBlend);

    let anySwing = false;
    let needSettle = false;
    for (const f of feet) {
      const hx = this.pos.x + lx * f.side * lateral;
      const hz = this.pos.z + lz * f.side * lateral;
      if (f.swinging && !airborne) anySwing = true;
      else if (Math.hypot(f.pos.x - hx, f.pos.z - hz) > 0.1) needSettle = true;
    }
    if (moving || anySwing || needSettle) this.phase = (this.phase + rate * dt) % 1;

    for (let i = 0; i < 2; i++) {
      const f = feet[i];
      const local = (((this.phase - f.offset) % 1) + 1) % 1;
      const inWindow = local < swingFrac;
      const hx = this.pos.x + lx * f.side * lateral;
      const hz = this.pos.z + lz * f.side * lateral;
      if (airborne || landed) {
        if (airborne) {
          // tucked up under the body, one knee forward
          const off = f.side > 0 ? 0.2 : -0.06;
          f.swinging = false;
          f.y = this.pos.y + this.air + 0.3 + (f.side > 0 ? 0.08 : 0);
          f.pos.set(hx + dirX * off, f.y, hz + dirZ * off);
          f.pitch = f.side > 0 ? -0.5 : 0.35;
        } else {
          // both feet come down together
          f.swinging = false;
          f.pos.set(hx + dirX * 0.08 * f.side, 0, hz + dirZ * 0.08 * f.side);
          f.y = groundHeight(f.pos.x, f.pos.z) - FOOT_SINK;
          f.pos.y = f.y;
          f.pitch = 0;
          if (this.onFootstep) this.onFootstep({ x: f.pos.x, y: f.y, z: f.pos.z, yaw: f.yaw, side: f.side, speed, run: 1, sliding: 0, dirX, dirZ });
        }
        f.yaw = lerpAngle(f.yaw, this.yaw, 1 - Math.exp(-dt * 14));
        f.wasInWindow = inWindow;
        f.lastLocal = local;
        continue;
      }
      if (f.swinging) {
        if (!inWindow || local < f.lastLocal) {
          // land
          f.swinging = false;
          f.pos.x = f.target.x;
          f.pos.z = f.target.z;
          f.y = groundHeight(f.pos.x, f.pos.z) - FOOT_SINK - 0.02 * this.runBlend;
          f.pos.y = f.y;
          f.pitch = 0;
          this._registerStep(env);
          if (this.onFootstep) {
            this.onFootstep({
              x: f.pos.x,
              y: f.y,
              z: f.pos.z,
              yaw: f.yaw,
              side: f.side,
              speed,
              run: this.runBlend,
              sliding: this.sliding,
              dirX,
              dirZ,
            });
          }
        } else {
          const remain = (swingFrac - local) / rate;
          f.target.set(hx + this.vel.x * remain + dirX * stanceHalf, 0, hz + this.vel.z * remain + dirZ * stanceHalf);
          const s = clamp(local / swingFrac, 0, 1);
          f.s = s;
          const e = s * s * (3 - 2 * s);
          const ty = groundHeight(f.target.x, f.target.z) - FOOT_SINK;
          f.pos.x = f.from.x + (f.target.x - f.from.x) * e;
          f.pos.z = f.from.z + (f.target.z - f.from.z) * e;
          const lift = (0.1 + 0.12 * this.runBlend) * Math.min(1, 0.4 + speed * 0.4);
          f.y = f.fromY + (ty - f.fromY) * e + Math.sin(Math.PI * s) * lift;
          f.pos.y = f.y;
          f.pitch = Math.sin(Math.PI * s) * (0.5 - s) * 1.4;
          f.yaw = lerpAngle(f.yaw, this.yaw, 1 - Math.exp(-dt * 14));
        }
      } else if (inWindow && !f.wasInWindow) {
        const far = Math.hypot(f.pos.x - hx, f.pos.z - hz) > 0.1;
        if (moving || far) {
          f.swinging = true;
          f.from.copy(f.pos);
          f.fromY = f.y;
          f.target.set(hx, 0, hz);
          if (this.onLift) this.onLift({ x: f.pos.x, y: f.y, z: f.pos.z, speed, run: this.runBlend, dirX, dirZ });
        }
      }
      f.wasInWindow = inWindow;
      f.lastLocal = local;
    }

    // ---------------- rhythm (worm attraction) ----------------
    const sinceStep = this.time - this.lastStepTime;
    const decay = env.onRock ? 0.18 : moving ? 0.004 : 0.075;
    this.rhythm = clamp(this.rhythm - decay * dt - (sinceStep > 1.1 ? 0.03 * dt : 0), 0, 1);

    // ---------------- pelvis ----------------
    const psi = this.phase - swingFrac;
    const bobAmp = moving ? 0.022 + 0.03 * this.runBlend : 0;
    const bob = -bobAmp * Math.cos(4 * Math.PI * psi);
    let hipMax = Infinity;
    for (const f of feet) {
      if (f.swinging || airborne) continue;
      const dx = this.pos.x + lx * f.side * HIP_W - f.pos.x;
      const dz = this.pos.z + lz * f.side * HIP_W - f.pos.z;
      const reach = Math.sqrt(Math.max(0, (LEG * 0.985) ** 2 - dx * dx - dz * dz));
      hipMax = Math.min(hipMax, f.y + ANKLE + reach);
    }
    const breathe = Math.sin(this.time * 1.7) * 0.004;
    let hipTarget = this.pos.y + STAND + bob - this.sliding * 0.12 + breathe - this.runBlend * 0.03 + this.air - this.squash;
    // legs may over-extend a little: the solver lifts the heel (toe-off) instead of crouching
    hipTarget = Math.min(hipTarget, hipMax + 0.09 + 0.07 * this.runBlend);
    hipTarget = Math.max(hipTarget, this.pos.y + 0.55);
    if (airborne) this.bodyY = hipTarget;
    else this.bodyY += (hipTarget - this.bodyY) * (1 - Math.exp(-dt * 18));

    const slopeAlong = speed > 0.1 ? (_g.x * this.vel.x + _g.z * this.vel.z) / speed : 0;
    const leanTarget = speed * 0.028 + this.runBlend * 0.14 + clamp(slopeAlong * 0.25, -0.12, 0.2) - this.sliding * 0.15 + (this.stumble > 0 ? 0.25 : 0) + (airborne ? 0.12 : 0);
    this.lean += (leanTarget - this.lean) * (1 - Math.exp(-dt * 6));
    const sway = moving ? Math.sin(2 * Math.PI * psi) * (0.035 - 0.015 * this.runBlend) : 0;
    this.body.position.set(this.pos.x, this.bodyY, this.pos.z);
    this.body.rotation.set(this.lean, this.yaw, sway, 'YXZ');
    this.body.updateMatrixWorld(true);
    this.head.rotation.x = -this.lean * 0.55 + Math.sin(this.time * 0.6) * 0.03;
    this.head.rotation.y = Math.sin(this.time * 0.37) * 0.12 * (moving ? 0.3 : 1);

    // ---------------- legs ----------------
    const knees = [];
    _fwd.set(fx, 0, fz);
    for (let i = 0; i < 2; i++) {
      const f = feet[i];
      const hip = _t1.set(f.side * HIP_W, -0.03, 0);
      this.body.localToWorld(hip);
      const ankle = new THREE.Vector3(f.pos.x, f.y + ANKLE, f.pos.z);
      const knee = this._solveKnee(hip, ankle, fx + lx * f.side * 0.12, fz + lz * f.side * 0.12);
      knees.push(knee);
      placeBetween(this.thighs[i], hip, knee, _fwd);
      placeBetween(this.shins[i], knee, ankle, _fwd);
      this.knees[i].position.copy(knee);
      const b = this.boots[i];
      const cy = Math.cos(f.yaw);
      const sy = Math.sin(f.yaw);
      b.position.set(ankle.x + sy * 0.045, ankle.y - 0.035, ankle.z + cy * 0.045);
      b.rotation.set(f.pitch, f.yaw, 0, 'YXZ');
      // cloak colliders for this leg
      this.colliders[1 + i].a.copy(hip);
      this.colliders[1 + i].b.copy(knee);
      this.colliders[3 + i].a.copy(knee);
      this.colliders[3 + i].b.copy(ankle);
    }

    // ---------------- arms ----------------
    const armAmp = 0.42 + 0.55 * this.runBlend;
    const bend = 0.28 + 1.05 * this.runBlend;
    for (let i = 0; i < 2; i++) {
      const s = feet[i].side;
      const opp = feet[1 - i];
      const ohx = this.pos.x + lx * opp.side * lateral;
      const ohz = this.pos.z + lz * opp.side * lateral;
      const rel = moving ? clamp(((opp.pos.x - ohx) * dirX + (opp.pos.z - ohz) * dirZ) / (stride * 0.5 + 0.05), -1, 1) : 0;
      const target = rel * armAmp + (this.sliding > 0 ? 0.6 : 0);
      this.armSwing[i] += (target - this.armSwing[i]) * (1 - Math.exp(-dt * 12));
      const sw = this.armSwing[i];
      const abd = 0.13 + this.sliding * 0.5 + (this.stumble > 0 ? 0.4 : 0);
      const shoulder = _t2.set(s * SHOULDER_W, SHOULDER_Y - 0.03, -0.01);
      const upDir = new THREE.Vector3(s * Math.sin(abd), -Math.cos(sw) * Math.cos(abd), Math.sin(sw) * Math.cos(abd)).normalize();
      const fa = sw + bend;
      const foreDir = new THREE.Vector3(s * Math.sin(abd * 0.5), -Math.cos(fa), Math.sin(fa)).normalize();
      const elbowL = shoulder.clone().addScaledVector(upDir, UPPER);
      const handL = elbowL.clone().addScaledVector(foreDir, FORE);
      const shoulderW = this.body.localToWorld(shoulder.clone());
      const elbowW = this.body.localToWorld(elbowL);
      const handW = this.body.localToWorld(handL);
      placeBetween(this.upperArms[i], shoulderW, elbowW, _fwd);
      placeBetween(this.forearms[i], elbowW, handW, _fwd);
      this.hands[i].position.copy(handW);
      this.hands[i].quaternion.copy(this.forearms[i].quaternion);
    }

    // ---------------- cloak ----------------
    for (let c = 0; c < this.cloakAnchorsLocal.length; c++) {
      this.cloakAnchors[c].copy(this.cloakAnchorsLocal[c]);
      this.body.localToWorld(this.cloakAnchors[c]);
    }
    this.body.localToWorld(this.colliders[0].a.set(0, -0.06, -0.02));
    this.body.localToWorld(this.colliders[0].b.set(0, 0.4, -0.02));
    const hang = _t1.set(-fx, 0, -fz);
    this.cloak.update(dt, this.cloakAnchors, this.colliders, env.wind, groundHeight, hang);
  }

  _solveKnee(hip, ankle, bx, bz) {
    const d = new THREE.Vector3().subVectors(ankle, hip);
    let len = d.length();
    const max = LEG - 0.002;
    if (len > max) {
      d.multiplyScalar(max / len);
      ankle.copy(hip).add(d);
      len = max;
    }
    const dn = d.clone().divideScalar(len || 1);
    const a = (THIGH * THIGH - SHIN * SHIN + len * len) / (2 * len);
    const h = Math.sqrt(Math.max(0, THIGH * THIGH - a * a));
    const bend = new THREE.Vector3(bx, 0, bz);
    bend.addScaledVector(dn, -bend.dot(dn));
    if (bend.lengthSq() < 1e-6) bend.set(bx, 0.01, bz);
    bend.normalize();
    return hip.clone().addScaledVector(dn, a).addScaledVector(bend, h);
  }

  _registerStep(env) {
    const now = this.time;
    const interval = now - this.lastStepTime;
    this.lastStepTime = now;
    if (interval > 1.3) {
      this.stepIntervals.length = 0;
      return;
    }
    this.stepIntervals.push(interval);
    if (this.stepIntervals.length > 8) this.stepIntervals.shift();
    const n = this.stepIntervals.length;
    if (n < 3) return;
    let mean = 0;
    for (const v of this.stepIntervals) mean += v;
    mean /= n;
    let varc = 0;
    for (const v of this.stepIntervals) varc += (v - mean) ** 2;
    const cv = Math.sqrt(varc / n) / mean;
    this.regularity = clamp(1 - cv / 0.3, 0, 1);
    const weight = 1 + 0.9 * this.runBlend;
    const gain = env.onRock ? -0.03 : 0.018 * weight * this.regularity - 0.011 - (1 - this.regularity) * 0.03;
    this.rhythm = clamp(this.rhythm + gain, 0, 1);
  }

  get headPosition() {
    return this.head.getWorldPosition(new THREE.Vector3());
  }
}
