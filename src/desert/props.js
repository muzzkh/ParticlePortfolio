import * as THREE from 'three';

// More things a project's landing pad can hold, built from primitives like the
// ornithopter: a six-wheeled rover, a floating data core, and a tracking dish.
// Each has { root, height, yaw, update(dt, t, lift, faceYaw) }, where lift runs from
// 0 (nobody near) to 1 (someone has walked up) and faceYaw is the way to them.

const HULL = new THREE.MeshStandardMaterial({ color: '#8d7b60', roughness: 0.55, metalness: 0.45 });
const DARK = new THREE.MeshStandardMaterial({ color: '#2f2924', roughness: 0.6, metalness: 0.4 });
const TYRE = new THREE.MeshStandardMaterial({ color: '#1f1b18', roughness: 0.95 });
const PANEL = new THREE.MeshStandardMaterial({ color: '#27425a', roughness: 0.35, metalness: 0.6 });

function shadowed(m) {
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// turn `cur` toward `want` by at most `max` radians
function turnToward(cur, want, max) {
  const d = ((want - cur + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  return cur + Math.max(-max, Math.min(max, d));
}

// ---------------------------------------------------------------------------
// Rover: wakes when you walk up; its mast lifts and its camera follows you
// ---------------------------------------------------------------------------
export class Rover {
  constructor() {
    this.root = new THREE.Group();
    this.yaw = 0;
    this.height = 1.7;
    const body = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.34, 2.0), HULL));
    body.position.y = 0.62;
    const deck = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 1.5), PANEL));
    deck.position.set(0, 0.82, -0.15);
    this.root.add(body, deck);
    // six wheels on rocker arms
    this.wheels = [];
    const wheelGeo = new THREE.CylinderGeometry(0.27, 0.27, 0.2, 14).rotateZ(Math.PI / 2);
    for (const side of [-1, 1]) {
      const rocker = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 2.1), DARK));
      rocker.position.set(side * 0.78, 0.42, 0);
      this.root.add(rocker);
      for (const z of [-0.9, 0, 0.9]) {
        const w = shadowed(new THREE.Mesh(wheelGeo, TYRE));
        w.position.set(side * 0.86, 0.27, z);
        const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.22, 8).rotateZ(Math.PI / 2), HULL);
        w.add(hub);
        this.root.add(w);
        this.wheels.push(w);
      }
    }
    // the mast and its camera head
    this.mast = new THREE.Group();
    this.mast.position.set(0, 0.8, 0.7);
    const pole = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.8, 8).translate(0, 0.4, 0), DARK));
    this.head = new THREE.Group();
    this.head.position.y = 0.82;
    const box = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.18), HULL));
    this.eyeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.2, 0.6, 0.8) });
    for (const x of [-0.11, 0.11]) {
      const eye = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.04, 12).rotateX(Math.PI / 2), this.eyeMat);
      eye.position.set(x, 0, 0.1);
      this.head.add(eye);
    }
    this.head.add(box);
    this.mast.add(pole, this.head);
    // a folded arm at the front
    this.arm = new THREE.Group();
    this.arm.position.set(0.45, 0.72, 0.95);
    const upper = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.55, 6).translate(0, 0.275, 0), DARK));
    this.fore = new THREE.Group();
    this.fore.position.y = 0.55;
    const lower = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.45, 6).translate(0, 0.225, 0), DARK));
    const claw = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 6).translate(0, 0.5, 0), HULL));
    this.fore.add(lower, claw);
    this.arm.add(upper, this.fore);
    // antenna
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.9, 5).translate(0, 0.45, 0), DARK);
    ant.position.set(-0.5, 0.8, -0.8);
    this.root.add(this.mast, this.arm, ant);
    this.headYaw = 0;
  }

  update(dt, t, lift, faceYaw) {
    const up = lift * lift * (3 - 2 * lift);
    // asleep: mast folded back, arm tucked; awake: mast up, arm reaching, eyes bright
    this.mast.rotation.x = -(1 - up) * 1.35;
    this.arm.rotation.x = 1.5 - up * 0.9 + Math.sin(t * 0.9) * 0.08 * up;
    this.fore.rotation.x = 1.9 - up * 1.1 + Math.sin(t * 1.3) * 0.12 * up;
    const want = faceYaw === null ? 0 : faceYaw - this.yaw;
    this.headYaw = turnToward(this.headYaw, up > 0.4 ? want : 0, dt * 1.6);
    this.head.rotation.y = this.headYaw;
    this.head.rotation.x = Math.sin(t * 0.7) * 0.06 * up;
    const b = 0.25 + up * 3.2 + (up > 0.5 ? 0.6 * Math.sin(t * 5) : 0);
    this.eyeMat.color.setRGB(0.2 * b, 0.75 * b, 1.0 * b);
    // it shuffles a little on its wheels when awake
    const roll = up > 0.5 ? Math.sin(t * 0.6) * 0.25 : 0;
    for (const w of this.wheels) w.rotation.x = roll;
    this.root.rotation.y = this.yaw;
  }
}

// ---------------------------------------------------------------------------
// Data core: a crystal held in rings; it lifts, brightens and spins up as you near
// ---------------------------------------------------------------------------
export class DataCore {
  constructor() {
    this.root = new THREE.Group();
    this.yaw = 0;
    this.height = 2.6;
    const base = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.95, 0.28, 8), DARK));
    base.position.y = 0.14;
    const collar = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.05, 8, 28).rotateX(Math.PI / 2), HULL));
    collar.position.y = 0.3;
    this.root.add(base, collar);
    this.float = new THREE.Group();
    this.float.position.y = 1.2;
    this.coreMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 1.2, 1.6) });
    this.core = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 0), this.coreMat);
    this.core.scale.y = 1.45;
    const shell = new THREE.Mesh(new THREE.OctahedronGeometry(0.56, 0), new THREE.MeshStandardMaterial({ color: '#9fd8e6', roughness: 0.15, metalness: 0.2, transparent: true, opacity: 0.28 }));
    shell.scale.y = 1.45;
    this.rings = [0, 1, 2].map((i) => {
      const r = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.82 + i * 0.16, 0.022, 6, 48), HULL));
      this.float.add(r);
      return r;
    });
    this.float.add(this.core, shell);
    this.root.add(this.float);
    this.spin = 0;
  }

  update(dt, t, lift) {
    const up = lift * lift * (3 - 2 * lift);
    this.spin += dt * (0.4 + up * 2.6);
    this.float.position.y = 1.1 + up * 0.75 + Math.sin(t * 1.4) * 0.06;
    this.core.rotation.y = this.spin;
    this.rings.forEach((r, i) => {
      r.rotation.x = Math.PI / 2 + Math.sin(this.spin * (0.6 + i * 0.2) + i * 2.1) * (0.25 + up * 0.9);
      r.rotation.y = this.spin * (i % 2 ? -0.7 : 0.9) + i;
    });
    const b = 0.55 + up * 1.6 + 0.2 * Math.sin(t * 3.1);
    this.coreMat.color.setRGB(0.5 * b, 1.2 * b, 1.6 * b);
    this.height = 2.4 + up * 0.75;
    this.root.rotation.y = this.yaw;
  }
}

// ---------------------------------------------------------------------------
// Dish: a tracking antenna that swings round to point at whoever walks up
// ---------------------------------------------------------------------------
export class Dish {
  constructor() {
    this.root = new THREE.Group();
    this.yaw = 0;
    this.height = 2.9;
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * Math.PI * 2;
      const leg = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.5, 6), DARK));
      leg.position.set(Math.cos(a) * 0.45, 0.68, Math.sin(a) * 0.45);
      leg.rotation.set(Math.sin(a) * 0.55, 0, -Math.cos(a) * 0.55);
      this.root.add(leg);
    }
    this.turret = new THREE.Group();
    this.turret.position.y = 1.4;
    const hub = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.3, 10), HULL));
    this.tilt = new THREE.Group();
    this.tilt.position.y = 0.25;
    // a shallow bowl, open toward +z
    const bowl = shadowed(new THREE.Mesh(new THREE.SphereGeometry(1.25, 24, 10, 0, Math.PI * 2, 0, 0.62), new THREE.MeshStandardMaterial({ color: '#b9a888', roughness: 0.5, metalness: 0.35, side: THREE.DoubleSide })));
    // the cap's pole points back (−z); moved forward so its rim sits at the hub
    bowl.rotation.x = -Math.PI / 2;
    bowl.position.z = 1.02;
    const feedArm = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.7, 5).rotateX(Math.PI / 2).translate(0, 0, 0.12), DARK);
    this.feedMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.5, 0.2) });
    const feed = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), this.feedMat);
    feed.position.z = 0.48;
    this.tilt.add(bowl, feedArm, feed);
    this.turret.add(hub, this.tilt);
    this.root.add(this.turret);
    this.aim = 0;
    this.sweep = Math.random() * 6;
  }

  update(dt, t, lift, faceYaw) {
    const up = lift * lift * (3 - 2 * lift);
    // idle: a slow sweep of the sky; awake: lock on to the visitor
    this.sweep += dt * 0.25;
    const want = up > 0.4 && faceYaw !== null ? faceYaw - this.yaw : Math.sin(this.sweep) * 1.4;
    this.aim = turnToward(this.aim, want, dt * (0.5 + up * 1.4));
    this.turret.rotation.y = this.aim;
    this.tilt.rotation.x = -(0.75 - up * 0.55) + Math.sin(t * 0.5) * 0.04;
    const blink = up > 0.5 ? 0.6 + 0.4 * Math.sin(t * 9) : 0.35 + 0.25 * Math.sin(t * 1.5);
    this.feedMat.color.setRGB(2.6 * blink, 0.8 * blink, 0.3 * blink);
    this.root.rotation.y = this.yaw;
  }
}
