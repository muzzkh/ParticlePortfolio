import * as THREE from 'three';
import { terrainHeight, vnoise, hash2, getSeed } from './noise.js';

const CELL = 60;
const RANGE = 2; // cells around the player kept alive

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ROCK_DARK = new THREE.Color('#5a3526');
const ROCK_MID = new THREE.Color('#7f4c33');
const ROCK_LIGHT = new THREE.Color('#9a6444');
const ROCK_SAND = new THREE.Color('#d7a067');

export function makeRockGeometry(rng, sx, sy, sz, layers) {
  let geo = new THREE.IcosahedronGeometry(1, 3);
  geo.deleteAttribute('normal');
  const p = geo.getAttribute('position');
  const ox = rng() * 100;
  const oz = rng() * 100;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    // lumpy silhouette
    const n = vnoise(v.x * 1.7 + ox, v.z * 1.7 + v.y * 1.3 + oz) * 0.5 + vnoise(v.x * 4.1 + oz, v.y * 4.3 + ox) * 0.22;
    let r = 0.72 + n * 0.6;
    // flatter tops (mesa) and undercut base
    if (v.y > 0.25) r *= 1 - (v.y - 0.25) * 0.35;
    v.multiplyScalar(r);
    // strata: terrace the height into ledges
    const y = v.y;
    const k = layers;
    const f = (y + 1) * k;
    const fl = Math.floor(f);
    const fr = f - fl;
    const ter = (fl + Math.pow(fr, 3.5)) / k - 1;
    v.y = y * 0.35 + ter * 0.65;
    // ledges step in/out a little per layer
    const shelf = 1 + (hash2(fl + 7, Math.floor(ox)) - 0.5) * 0.14;
    v.x *= shelf;
    v.z *= shelf;
    p.setXYZ(i, v.x * sx, v.y * sy, v.z * sz);
  }
  if (geo.index) geo = geo.toNonIndexed();
  geo.computeVertexNormals();
  // colour per face: strata bands, sand dusting on up-facing ledges
  const pos = geo.getAttribute('position');
  const nor = geo.getAttribute('normal');
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 3) {
    const ny = nor.getY(i);
    const cy = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    const band = Math.sin(cy * 3.1 + ox) * 0.5 + 0.5;
    c.copy(ROCK_DARK).lerp(ROCK_MID, band).lerp(ROCK_LIGHT, Math.max(0, Math.sin(cy * 7.3 + oz)) * 0.35);
    const jitter = 0.9 + rng() * 0.2;
    c.multiplyScalar(jitter);
    if (ny > 0.62) c.lerp(ROCK_SAND, Math.min(1, (ny - 0.62) * 3.2) * 0.85);
    for (let j = 0; j < 3; j++) {
      colors[(i + j) * 3] = c.r;
      colors[(i + j) * 3 + 1] = c.g;
      colors[(i + j) * 3 + 2] = c.b;
    }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

export class RockField {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'rocks';
    scene.add(this.group);
    this.cells = new Map();
    this.colliders = [];
    this.material = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.92, metalness: 0 });
    this.pebbleMat = new THREE.MeshStandardMaterial({ color: '#4a2e22', flatShading: true, roughness: 0.9 });
    this.pebbleGeo = new THREE.DodecahedronGeometry(1, 0);
    this.lastKey = '';
    this.exclude = null; // (x, z, r) => true where no rock may stand
    this.lastPos = null;
  }

  // keep rocks off some ground (the games' tracks); rebuilds what's around
  setExclusion(fn) {
    this.exclude = fn;
    const p = this.lastPos;
    this.reset();
    if (p) this.update(p.x, p.z);
  }

  reset() {
    for (const cell of this.cells.values()) this._dispose(cell);
    this.cells.clear();
    this.colliders.length = 0;
    this.lastKey = '';
  }

  _dispose(cell) {
    for (const m of cell.meshes) {
      this.group.remove(m);
      if (m.geometry !== this.pebbleGeo) m.geometry.dispose();
      if (m.isInstancedMesh) m.dispose();
    }
  }

  update(x, z) {
    this.lastPos = { x, z };
    const cx = Math.floor(x / CELL);
    const cz = Math.floor(z / CELL);
    const key = `${cx},${cz}`;
    if (key === this.lastKey) return;
    this.lastKey = key;
    const want = new Set();
    for (let dz = -RANGE; dz <= RANGE; dz++) {
      for (let dx = -RANGE; dx <= RANGE; dx++) {
        const k = `${cx + dx},${cz + dz}`;
        want.add(k);
        if (!this.cells.has(k)) this.cells.set(k, this._build(cx + dx, cz + dz));
      }
    }
    for (const [k, cell] of this.cells) {
      if (!want.has(k)) {
        this._dispose(cell);
        this.cells.delete(k);
      }
    }
    this.colliders = [];
    for (const cell of this.cells.values()) this.colliders.push(...cell.colliders);
  }

  _build(cx, cz) {
    const seed = getSeed();
    const cell = { meshes: [], colliders: [] };
    const rng = mulberry32((Math.imul(cx, 73856093) ^ Math.imul(cz, 19349663) ^ Math.floor(seed.x * 13 + seed.z * 7)) >>> 0);
    const px = (cx + 0.2 + rng() * 0.6) * CELL;
    const pz = (cz + 0.2 + rng() * 0.6) * CELL;
    const info = {};
    terrainHeight(px, pz, info);
    // rocks crop out where the erg thins into flat pans
    const chance = 0.12 + (1 - info.A) * 0.55;
    if (rng() > chance) return cell;
    // keep the spawn point clear
    if (Math.hypot(px, pz) < 14) return cell;

    const count = 1 + Math.floor(rng() * 5);
    const big = rng() < 0.35;
    for (let i = 0; i < count; i++) {
      const a = rng() * Math.PI * 2;
      const d = i === 0 ? 0 : 3 + rng() * 9;
      const rx = px + Math.cos(a) * d;
      const rz = pz + Math.sin(a) * d;
      const s = (i === 0 && big ? 4.5 : 1.3) + rng() * (big && i === 0 ? 3.5 : 2.4);
      const sx = s * (0.8 + rng() * 0.6);
      const sz = s * (0.8 + rng() * 0.6);
      const sy = s * (i === 0 && big ? 0.9 + rng() * 0.7 : 0.45 + rng() * 0.6);
      const geo = makeRockGeometry(rng, sx, sy, sz, 3 + Math.floor(rng() * 4));
      // built either way, so leaving one out doesn't reshuffle the rest of the cell
      if (this.exclude && this.exclude(rx, rz, Math.max(sx, sz))) {
        geo.dispose();
        continue;
      }
      const mesh = new THREE.Mesh(geo, this.material);
      // sink the base into the sand around it
      let minH = Infinity;
      const rad = Math.max(sx, sz) * 0.8;
      for (let k = 0; k < 8; k++) {
        const aa = (k / 8) * Math.PI * 2;
        minH = Math.min(minH, terrainHeight(rx + Math.cos(aa) * rad, rz + Math.sin(aa) * rad));
      }
      minH = Math.min(minH, terrainHeight(rx, rz));
      mesh.position.set(rx, minH + sy * 0.25, rz);
      mesh.rotation.y = rng() * Math.PI * 2;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      cell.meshes.push(mesh);
      cell.colliders.push({ x: rx, z: rz, r: Math.min(sx, sz) * 0.78, top: minH + sy * 1.2 });
    }

    // scattered pebbles & fallen blocks around the formation
    const pebbles = 20 + Math.floor(rng() * 40);
    const inst = new THREE.InstancedMesh(this.pebbleGeo, this.pebbleMat, pebbles);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const sc = new THREE.Vector3();
    const p = new THREE.Vector3();
    for (let i = 0; i < pebbles; i++) {
      const a = rng() * Math.PI * 2;
      const d = 3 + rng() ** 0.7 * 16;
      const x = px + Math.cos(a) * d;
      const z = pz + Math.sin(a) * d;
      const s = 0.06 + rng() ** 3 * 0.45;
      p.set(x, terrainHeight(x, z) + s * 0.1, z);
      e.set(rng() * 3, rng() * 3, rng() * 3);
      q.setFromEuler(e);
      sc.set(s * (0.8 + rng() * 0.6), s * (0.5 + rng() * 0.4), s * (0.8 + rng() * 0.6));
      if (this.exclude && this.exclude(x, z, s)) sc.setScalar(0);
      m.compose(p, q, sc);
      inst.setMatrixAt(i, m);
    }
    inst.castShadow = true;
    inst.receiveShadow = true;
    inst.computeBoundingSphere();
    this.group.add(inst);
    cell.meshes.push(inst);
    return cell;
  }

  // push a circle out of rock colliders; returns true when standing next to rock
  collide(pos, r, vel) {
    let near = false;
    for (const c of this.colliders) {
      const dx = pos.x - c.x;
      const dz = pos.z - c.z;
      const d = Math.hypot(dx, dz);
      const min = c.r + r;
      if (d < min + 1.2) near = true;
      if (d < min && d > 1e-4) {
        const nx = dx / d;
        const nz = dz / d;
        pos.x = c.x + nx * min;
        pos.z = c.z + nz * min;
        if (vel) {
          const vn = vel.x * nx + vel.z * nz;
          if (vn < 0) {
            vel.x -= vn * nx;
            vel.z -= vn * nz;
          }
        }
      }
    }
    return near;
  }

  nearRock(x, z, margin = 2) {
    for (const c of this.colliders) {
      if (Math.hypot(x - c.x, z - c.z) < c.r + margin) return true;
    }
    return false;
  }
}
