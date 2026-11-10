import * as THREE from 'three';

// A sandbike: a long, low hover-bike that skims the dunes on a cushion of blown sand,
// with a rider bent over the bars. Built from primitives; forward is +z.
// update(dt, t, speed01, steer): speed01 runs 0 (idling) to 1 (flat out).

const METAL = new THREE.MeshStandardMaterial({ color: '#3a332c', roughness: 0.55, metalness: 0.5 });
const SKIN = new THREE.MeshStandardMaterial({ color: '#2b2622', roughness: 0.5, metalness: 0.25 });

function shadowed(m) {
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export class SandBike {
  // hull: paint colour; cloak: the rider's cloak
  constructor({ hull = '#9a6a3c', cloak = '#76614b' } = {}) {
    this.root = new THREE.Group();
    this.body = new THREE.Group(); // tilts and bobs; root only moves and turns
    this.root.add(this.body);
    this.paint = new THREE.MeshStandardMaterial({ color: hull, roughness: 0.45, metalness: 0.35 });
    this.cloth = new THREE.MeshStandardMaterial({ color: cloak, roughness: 1, side: THREE.DoubleSide });

    // the hull: a long capsule with a pointed nose and a raised tail
    const hullMesh = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 1.5, 6, 14).rotateX(Math.PI / 2), this.paint));
    hullMesh.scale.set(1.05, 0.72, 1);
    hullMesh.position.y = 0.55;
    const nose = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 10).rotateX(Math.PI / 2), this.paint));
    nose.position.set(0, 0.52, 1.25);
    const belly = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 1.6), METAL));
    belly.position.y = 0.36;
    // side intakes and the tail fins
    for (const s of [-1, 1]) {
      const pod = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.75, 10).rotateX(Math.PI / 2), METAL));
      pod.position.set(s * 0.34, 0.45, -0.25);
      const fin = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.36, 0.5), this.paint));
      fin.position.set(s * 0.2, 0.84, -0.78);
      fin.rotation.set(-0.35, 0, s * 0.35);
      this.body.add(pod, fin);
    }
    // the bars
    const bars = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.62, 6).rotateZ(Math.PI / 2), METAL));
    bars.position.set(0, 0.86, 0.62);
    const stem = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.3, 6), METAL));
    stem.position.set(0, 0.74, 0.66);
    stem.rotation.x = -0.4;
    // the engine's glow at the tail, and the cushion of air under the belly
    this.glowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.7, 0.25) });
    const glow = new THREE.Mesh(new THREE.CircleGeometry(0.15, 14), this.glowMat);
    glow.position.set(0, 0.56, -1.04);
    glow.rotation.y = Math.PI;
    this.cushionMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 0.75, 0.4), transparent: true, opacity: 0.25, depthWrite: false });
    this.cushion = new THREE.Mesh(new THREE.CircleGeometry(0.55, 18).rotateX(-Math.PI / 2), this.cushionMat);
    this.cushion.scale.set(0.8, 1, 1.8);
    this.cushion.position.y = 0.08;
    this.body.add(hullMesh, nose, belly, bars, stem, glow, this.cushion);

    // the rider, bent low over the bars
    const rider = new THREE.Group();
    rider.position.set(0, 0.78, 0.05);
    const torso = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.32, 4, 10), SKIN));
    torso.position.set(0, 0.25, 0.1);
    torso.rotation.x = 0.95;
    const head = shadowed(new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), SKIN));
    head.position.set(0, 0.42, 0.38);
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.25, 0.75, 2.4) }));
    visor.position.set(0, 0.42, 0.47);
    visor.rotation.x = Math.PI / 2;
    this.cape = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.75, 10, 1, true), this.cloth));
    this.cape.position.set(0, 0.2, -0.15);
    this.cape.rotation.x = -1.25;
    for (const s of [-1, 1]) {
      const arm = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.36, 4, 8), SKIN));
      arm.position.set(s * 0.2, 0.2, 0.42);
      arm.rotation.set(1.1, 0, s * -0.2);
      const leg = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.4, 4, 8), SKIN));
      leg.position.set(s * 0.22, -0.05, -0.05);
      leg.rotation.x = 1.3;
      rider.add(arm, leg);
    }
    rider.add(torso, head, visor, this.cape);
    this.rider = rider;
    this.body.add(rider);
    this.height = 1.5;
  }

  update(dt, t, speed01, steer = 0) {
    const s = Math.max(0, Math.min(1.4, speed01));
    // it floats: a slow bob at rest, a quick shiver flat out
    this.body.position.y = 0.06 * Math.sin(t * 2.3) * (1 - Math.min(1, s)) + 0.025 * Math.sin(t * 23) * s;
    this.body.rotation.z = -steer * 0.38 * Math.min(1, s + 0.2);
    this.rider.rotation.z = steer * 0.25;
    this.cape.rotation.x = -1.25 - s * 0.35 + Math.sin(t * 14) * 0.05 * s;
    const g = 0.6 + s * 2.6;
    this.glowMat.color.setRGB(1.6 * g, 0.65 * g, 0.22 * g);
    this.cushionMat.opacity = 0.18 + s * 0.22;
  }
}
