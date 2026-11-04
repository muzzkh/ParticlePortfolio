import * as THREE from 'three';

// A dragonfly-like flapping-wing aircraft, built from primitives. Forward is +z.
// update(dt, t, lift, faceYaw): lift 0 = parked with wings folded, 1 = hovering.

const HULL = new THREE.Color('#8d7b60');
const HULL_DARK = new THREE.Color('#3a332c');

function shadowed(m) {
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function wingGeometry(len, chord) {
  // a long tapering blade, root at the origin, extending along +x
  const s = new THREE.Shape();
  s.moveTo(0, -chord * 0.35);
  s.bezierCurveTo(len * 0.3, -chord * 0.62, len * 0.75, -chord * 0.5, len, -chord * 0.08);
  s.bezierCurveTo(len * 1.02, chord * 0.05, len * 0.9, chord * 0.18, len * 0.7, chord * 0.22);
  s.bezierCurveTo(len * 0.4, chord * 0.32, len * 0.15, chord * 0.3, 0, chord * 0.22);
  s.closePath();
  const g = new THREE.ShapeGeometry(s, 18);
  g.rotateX(Math.PI / 2); // lie flat in the x/z plane
  return g;
}

export class Ornithopter {
  constructor() {
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);

    const hull = new THREE.MeshStandardMaterial({ color: HULL, roughness: 0.5, metalness: 0.55 });
    const dark = new THREE.MeshStandardMaterial({ color: HULL_DARK, roughness: 0.6, metalness: 0.5 });
    const glass = new THREE.MeshStandardMaterial({ color: '#4d6b70', roughness: 0.16, metalness: 0.55, emissive: '#0c1a1c' });
    this.membrane = new THREE.MeshStandardMaterial({
      color: '#d2bd92',
      roughness: 0.75,
      metalness: 0,
      transparent: true,
      opacity: 0.78,
      side: THREE.DoubleSide,
    });
    this.glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.2, 0.8, 0.7) });

    // fuselage: thorax-like capsule with a glass canopy up front
    const fus = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(0.5, 2.3, 6, 16), hull));
    fus.rotation.x = Math.PI / 2;
    fus.scale.set(1, 1, 0.82);
    fus.position.set(0, 1.25, 0.1);
    const belly = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 1.6, 4, 12), dark));
    belly.rotation.x = Math.PI / 2;
    belly.position.set(0, 0.98, 0.2);
    const canopy = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 16), glass));
    canopy.scale.set(0.82, 0.66, 1.35);
    canopy.position.set(0, 1.4, 1.42);
    const frame = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.47, 0.045, 6, 24), hull));
    frame.position.set(0, 1.36, 0.95);
    // struts over the glass, like a dragonfly's eye segments
    for (const a of [-0.55, 0, 0.55]) {
      const strut = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.022, 4, 20, Math.PI), dark));
      strut.scale.set(0.82, 0.66, 1.35);
      strut.rotation.set(0, Math.PI / 2, a);
      strut.position.set(0, 1.4, 1.42);
      this.body.add(strut);
    }
    // tail boom with a small fin
    const boom = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.26, 2.6, 10), hull));
    boom.rotation.x = Math.PI / 2;
    boom.position.set(0, 1.3, -2.45);
    const fin = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.55, 0.6), dark));
    fin.position.set(0, 1.6, -3.55);
    fin.rotation.x = -0.35;
    const tailplane = shadowed(new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.04, 0.35), dark));
    tailplane.position.set(0, 1.32, -3.6);
    // engine pods along the flanks
    for (const side of [1, -1]) {
      const pod = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 1.15, 12), dark));
      pod.rotation.x = Math.PI / 2;
      pod.position.set(side * 0.68, 1.0, -0.65);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.035, 6, 16), this.glow);
      ring.position.set(side * 0.68, 1.0, -1.24);
      this.body.add(pod, ring);
    }
    // landing struts and pads
    for (const [x, z] of [
      [0.75, 0.95],
      [-0.75, 0.95],
      [0.75, -0.75],
      [-0.75, -0.75],
    ]) {
      const leg = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 1.0, 6), dark));
      leg.position.set(x * 0.85, 0.45, z);
      leg.rotation.z = x > 0 ? -0.35 : 0.35;
      const foot = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.05, 10), dark));
      foot.position.set(x * 1.0, 0.02, z);
      this.body.add(leg, foot);
    }
    this.body.add(fus, belly, canopy, frame, boom, fin, tailplane);

    // two pairs of wings on hinges along the spine
    const geo = wingGeometry(3.3, 0.85);
    const spar = new THREE.BoxGeometry(3.25, 0.05, 0.06).translate(3.25 / 2, 0, -0.05);
    const rib = new THREE.BoxGeometry(0.035, 0.035, 0.75);
    this.wings = [];
    for (const [z, pair] of [
      [0.55, 0],
      [-0.55, 1],
    ]) {
      for (const side of [1, -1]) {
        const pivot = new THREE.Group();
        pivot.position.set(side * 0.28, 1.72, z);
        const flapper = new THREE.Group();
        pivot.add(flapper);
        const blade = new THREE.Group();
        blade.scale.x = side;
        const mem = shadowed(new THREE.Mesh(geo, this.membrane));
        const sp = shadowed(new THREE.Mesh(spar, dark));
        blade.add(mem, sp);
        for (const f of [0.3, 0.55, 0.8]) {
          const r = new THREE.Mesh(rib, dark);
          r.position.set(3.3 * f, 0.01, -0.02);
          r.scale.z = 1 - f * 0.55;
          blade.add(r);
        }
        flapper.add(blade);
        const hinge = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), dark));
        pivot.add(hinge);
        this.body.add(pivot);
        this.wings.push({ pivot, flapper, side, pair });
      }
    }

    this.phase = 0;
    this.yaw = 0;
    this.height = 2.2; // parked, top of the wings
  }

  // lift: 0 parked … 1 hovering; faceYaw: heading to turn toward while airborne
  update(dt, t, lift, faceYaw) {
    const spread = THREE.MathUtils.smoothstep(lift, 0.05, 0.45);
    const flying = THREE.MathUtils.smoothstep(lift, 0.3, 0.8);
    const freq = 0.6 + flying * 5.4;
    this.phase += dt * freq * Math.PI * 2;
    const amp = 0.04 + flying * 0.5;
    for (const w of this.wings) {
      const ph = this.phase + (w.pair ? Math.PI * 0.62 : 0);
      // folded: swept back along the body; spread: straight out, beating
      w.pivot.rotation.y = w.side * (1 - spread) * 1.25;
      w.flapper.rotation.z = w.side * (0.12 * spread + amp * Math.sin(ph));
    }
    // climb off the pad, bob, sway, and turn to face whoever walked up
    const up = lift * lift * (3 - 2 * lift);
    this.body.position.y = up * 2.7 + flying * 0.12 * Math.sin(t * 1.7);
    this.body.rotation.x = 0.06 * flying + 0.025 * flying * Math.sin(t * 2.3);
    this.body.rotation.z = 0.04 * flying * Math.sin(t * 1.1);
    if (flying > 0.2 && faceYaw !== null) {
      const d = ((faceYaw - this.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      this.yaw += Math.max(-dt * 0.7, Math.min(dt * 0.7, d)) * flying;
    }
    this.root.rotation.y = this.yaw;
    this.glow.color.setRGB(0.2 + 1.6 * flying, 0.8 + 2.4 * flying, 0.7 + 2.0 * flying);
    this.height = 2.2 + up * 2.7;
  }
}

// A sealed cargo pod: the stand-in for a project with no model of its own.
export class CargoPod {
  constructor() {
    this.root = new THREE.Group();
    const hull = new THREE.MeshStandardMaterial({ color: '#7d6c55', roughness: 0.55, metalness: 0.5 });
    const band = new THREE.MeshStandardMaterial({ color: '#2f2924', roughness: 0.6, metalness: 0.4 });
    const pod = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(0.7, 1.4, 6, 16), hull));
    pod.rotation.z = Math.PI / 2;
    pod.position.y = 0.75;
    const b1 = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.74, 0.18, 18), band));
    b1.rotation.z = Math.PI / 2;
    b1.position.set(0.45, 0.75, 0);
    const b2 = b1.clone();
    b2.position.x = -0.45;
    this.root.add(pod, b1, b2);
    this.height = 1.5;
  }

  update() {}
}
