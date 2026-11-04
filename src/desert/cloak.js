import * as THREE from 'three';

// A small verlet cloth: the Fremen's cloak. The top row is pinned to the shoulders;
// the rest reacts to gravity, wind (per-triangle aerodynamic force), the body and the ground.

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _n = new THREE.Vector3();
const _v = new THREE.Vector3();
const _p = new THREE.Vector3();

export class Cloak {
  constructor(material, { cols = 9, rows = 14, width = 0.62, length = 1.22, flare = 1.55 } = {}) {
    this.cols = cols;
    this.rows = rows;
    const n = cols * rows;
    this.pos = new Float32Array(n * 3);
    this.prev = new Float32Array(n * 3);
    this.force = new Float32Array(n * 3);
    this.constraints = [];
    this.initialized = false;

    const rowGap = length / (rows - 1);
    const idx = (c, r) => r * cols + c;
    for (let r = 0; r < rows; r++) {
      const widthAt = width * (1 + (flare - 1) * (r / (rows - 1)));
      const colGap = widthAt / (cols - 1);
      for (let c = 0; c < cols; c++) {
        if (c < cols - 1) this.constraints.push([idx(c, r), idx(c + 1, r), colGap, 1]);
        if (r < rows - 1) this.constraints.push([idx(c, r), idx(c, r + 1), rowGap, 1]);
        if (c < cols - 1 && r < rows - 1) {
          const diag = Math.hypot(colGap, rowGap);
          this.constraints.push([idx(c, r), idx(c + 1, r + 1), diag, 0.5]);
          this.constraints.push([idx(c + 1, r), idx(c, r + 1), diag, 0.5]);
        }
        if (r < rows - 2) this.constraints.push([idx(c, r), idx(c, r + 2), rowGap * 2, 0.35]);
      }
    }

    const geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(new Float32Array(n * 3), 3);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    const uv = new Float32Array(n * 2);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        uv[(r * cols + c) * 2] = c / (cols - 1);
        uv[(r * cols + c) * 2 + 1] = 1 - r / (rows - 1);
      }
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    const index = [];
    for (let r = 0; r < rows - 1; r++) {
      for (let c = 0; c < cols - 1; c++) {
        const a = idx(c, r);
        const b = idx(c + 1, r);
        const d = idx(c, r + 1);
        const e = idx(c + 1, r + 1);
        index.push(a, d, b, b, d, e);
      }
    }
    geo.setIndex(index);
    this.tris = index;
    this.geometry = geo;
    this.mesh = new THREE.Mesh(geo, material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
  }

  // anchors: array of `cols` world-space Vector3 for the pinned top row
  // hang: world-space "down the back" direction used to lay out the cloth on reset
  reset(anchors, hang) {
    const { cols, rows } = this;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = (r * cols + c) * 3;
        const a = anchors[c];
        const f = r / (rows - 1);
        this.pos[i] = a.x + hang.x * f * 0.25;
        this.pos[i + 1] = a.y - f * 1.2;
        this.pos[i + 2] = a.z + hang.z * f * 0.25;
        this.prev[i] = this.pos[i];
        this.prev[i + 1] = this.pos[i + 1];
        this.prev[i + 2] = this.pos[i + 2];
      }
    }
    this.initialized = true;
  }

  // colliders: [{ a: Vector3, b: Vector3, r }] capsules; air: world wind velocity (m/s)
  update(dt, anchors, colliders, air, groundFn, hang) {
    if (!this.initialized) this.reset(anchors, hang);
    const { cols, rows, pos, prev, force } = this;
    const n = cols * rows;
    const steps = Math.min(4, Math.max(1, Math.ceil(dt / (1 / 120))));
    const h = Math.min(dt, 1 / 20) / steps;

    for (let s = 0; s < steps; s++) {
      force.fill(0);
      // aerodynamic force per triangle
      const tris = this.tris;
      for (let t = 0; t < tris.length; t += 3) {
        const i0 = tris[t] * 3;
        const i1 = tris[t + 1] * 3;
        const i2 = tris[t + 2] * 3;
        _a.set(pos[i0], pos[i0 + 1], pos[i0 + 2]);
        _b.set(pos[i1] - _a.x, pos[i1 + 1] - _a.y, pos[i1 + 2] - _a.z);
        _c.set(pos[i2] - _a.x, pos[i2 + 1] - _a.y, pos[i2 + 2] - _a.z);
        _n.crossVectors(_b, _c); // |n| = 2 * area
        const len = _n.length();
        if (len < 1e-8) continue;
        _n.divideScalar(len);
        // triangle velocity
        _v.set(
          (pos[i0] - prev[i0] + pos[i1] - prev[i1] + pos[i2] - prev[i2]) / (3 * h),
          (pos[i0 + 1] - prev[i0 + 1] + pos[i1 + 1] - prev[i1 + 1] + pos[i2 + 1] - prev[i2 + 1]) / (3 * h),
          (pos[i0 + 2] - prev[i0 + 2] + pos[i1 + 2] - prev[i1 + 2] + pos[i2 + 2] - prev[i2 + 2]) / (3 * h),
        );
        _v.subVectors(air, _v);
        const dv = _n.dot(_v);
        const k = dv * (Math.abs(dv) * 0.5 + 1.0) * len * 0.5 * 0.6;
        for (const ii of [i0, i1, i2]) {
          force[ii] += (_n.x * k) / 3;
          force[ii + 1] += (_n.y * k) / 3;
          force[ii + 2] += (_n.z * k) / 3;
        }
      }

      // integrate (each particle carries ~3 g of cloth)
      const invMass = 350.0;
      for (let p = cols; p < n; p++) {
        const i = p * 3;
        const x = pos[i];
        const y = pos[i + 1];
        const z = pos[i + 2];
        const damp = 0.992;
        pos[i] = x + (x - prev[i]) * damp + force[i] * invMass * h * h;
        pos[i + 1] = y + (y - prev[i + 1]) * damp + (force[i + 1] * invMass - 9.8) * h * h;
        pos[i + 2] = z + (z - prev[i + 2]) * damp + force[i + 2] * invMass * h * h;
        prev[i] = x;
        prev[i + 1] = y;
        prev[i + 2] = z;
      }
      // pin top row
      for (let c = 0; c < cols; c++) {
        const i = c * 3;
        prev[i] = pos[i];
        prev[i + 1] = pos[i + 1];
        prev[i + 2] = pos[i + 2];
        pos[i] = anchors[c].x;
        pos[i + 1] = anchors[c].y;
        pos[i + 2] = anchors[c].z;
      }

      for (let it = 0; it < 4; it++) {
        for (const [ia, ib, rest, stiff] of this.constraints) {
          const a = ia * 3;
          const b = ib * 3;
          const dx = pos[b] - pos[a];
          const dy = pos[b + 1] - pos[a + 1];
          const dz = pos[b + 2] - pos[a + 2];
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
          // cloth resists stretching strongly, compression weakly
          const diff = ((d - rest) / d) * (d > rest ? stiff : stiff * 0.3);
          const pinnedA = ia < cols;
          const pinnedB = ib < cols;
          if (pinnedA && pinnedB) continue;
          const wa = pinnedA ? 0 : pinnedB ? 1 : 0.5;
          const wb = pinnedB ? 0 : pinnedA ? 1 : 0.5;
          pos[a] += dx * diff * wa;
          pos[a + 1] += dy * diff * wa;
          pos[a + 2] += dz * diff * wa;
          pos[b] -= dx * diff * wb;
          pos[b + 1] -= dy * diff * wb;
          pos[b + 2] -= dz * diff * wb;
        }
        // body collisions
        for (let p = cols; p < n; p++) {
          const i = p * 3;
          _p.set(pos[i], pos[i + 1], pos[i + 2]);
          for (const cap of colliders) {
            _a.subVectors(cap.b, cap.a);
            const l2 = _a.lengthSq();
            let t = l2 > 0 ? _b.subVectors(_p, cap.a).dot(_a) / l2 : 0;
            t = Math.min(1, Math.max(0, t));
            _c.copy(cap.a).addScaledVector(_a, t);
            _b.subVectors(_p, _c);
            const dd = _b.length();
            if (dd < cap.r) {
              if (dd < 1e-5) _b.set(0, 0, -1);
              else _b.divideScalar(dd);
              _p.copy(_c).addScaledVector(_b, cap.r);
            }
          }
          pos[i] = _p.x;
          pos[i + 1] = _p.y;
          pos[i + 2] = _p.z;
        }
      }
      // ground
      for (let p = cols; p < n; p++) {
        const i = p * 3;
        const g = groundFn(pos[i], pos[i + 2]) + 0.04;
        if (pos[i + 1] < g) {
          pos[i + 1] = g;
          // friction
          prev[i] = pos[i] - (pos[i] - prev[i]) * 0.5;
          prev[i + 2] = pos[i + 2] - (pos[i + 2] - prev[i + 2]) * 0.5;
        }
      }
    }

    this.posAttr.array.set(pos);
    this.posAttr.needsUpdate = true;
    this.geometry.computeVertexNormals();
    this.geometry.computeBoundingSphere();
  }
}
