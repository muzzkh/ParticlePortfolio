import * as THREE from 'three';
import { assetUrl } from './assets.js';

// Uploaded 3D models (.glb) for project pads. The glTF, Draco and Meshopt loaders are
// only fetched when a model needs them, so the page itself never waits on them.

let loaderPromise = null;
function gltfLoader() {
  if (!loaderPromise) {
    loaderPromise = Promise.all([
      import('three/addons/loaders/GLTFLoader.js'),
      import('three/addons/loaders/DRACOLoader.js'),
      import('three/addons/libs/meshopt_decoder.module.js'),
      import('three/addons/utils/SkeletonUtils.js'),
    ]).then(([{ GLTFLoader }, { DRACOLoader }, { MeshoptDecoder }, SkeletonUtils]) => {
      const loader = new GLTFLoader();
      // the Draco decoder comes with three.js (bundled next to this loader)
      loader.setDRACOLoader(new DRACOLoader());
      loader.setMeshoptDecoder(MeshoptDecoder);
      return { loader, clone: SkeletonUtils.clone };
    });
  }
  return loaderPromise;
}

// Each file is fetched and parsed once; every pad showing it gets its own copy. (The
// editor rebuilds the pads on every change, so this keeps it from refetching.)
const cache = new Map();
async function loadModel(src) {
  const url = assetUrl(src);
  const { loader, clone } = await gltfLoader();
  if (!cache.has(url)) {
    const p = loader.loadAsync(url);
    p.catch(() => cache.delete(url));
    cache.set(url, p);
  }
  const gltf = await cache.get(url);
  return { scene: clone(gltf.scene), animations: gltf.animations || [] };
}

const FIT = 5; // the model's largest dimension is scaled to this, before the user's scale

export class GlbModel {
  // lift: rise and hover when someone walks up, like the ornithopter
  constructor(src, { lift = true } = {}) {
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.height = 2;
    this.lift = lift;
    this.yaw = 0;
    this.mixer = null;
    this.state = 'loading';
    this.onState = null;
    // a dim placeholder while loading, and if loading fails
    this.placeholder = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), new THREE.MeshStandardMaterial({ color: '#5d4b3c', roughness: 0.9, transparent: true, opacity: 0.6 }));
    this.placeholder.position.y = 0.7;
    this.body.add(this.placeholder);
    loadModel(src)
      .then((gltf) => this._use(gltf))
      .catch((err) => {
        this.state = 'error';
        this.error = String((err && err.message) || err);
        this.placeholder.material.color.set('#7a2f22');
        if (this.onState) this.onState(this);
      });
  }

  _use(gltf) {
    if (this.disposed) return;
    const obj = gltf.scene;
    const box = new THREE.Box3().setFromObject(obj);
    const size = box.getSize(new THREE.Vector3());
    const k = FIT / Math.max(size.x, size.z, size.y, 1e-3);
    obj.scale.multiplyScalar(k);
    box.setFromObject(obj);
    const c = box.getCenter(new THREE.Vector3());
    obj.position.x -= c.x;
    obj.position.z -= c.z;
    obj.position.y -= box.min.y;
    obj.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    this.body.remove(this.placeholder);
    this.body.add(obj);
    this.height = size.y * k;
    if (gltf.animations && gltf.animations.length) {
      this.mixer = new THREE.AnimationMixer(obj);
      for (const clip of gltf.animations) this.mixer.clipAction(clip).play();
    }
    this.state = 'ready';
    if (this.onState) this.onState(this);
  }

  update(dt, t, lift, faceYaw) {
    if (this.mixer) this.mixer.update(dt);
    const l = this.lift ? lift : 0;
    const up = l * l * (3 - 2 * l);
    this.body.position.y = up * 2.2 + (up > 0.5 ? 0.12 * Math.sin(t * 1.6) : 0);
    if (up > 0.3 && faceYaw !== null) {
      const d = ((faceYaw - this.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      this.yaw += Math.max(-dt * 0.6, Math.min(dt * 0.6, d)) * up;
    }
    this.root.rotation.y = this.yaw;
  }

  dispose() {
    this.disposed = true;
  }
}
