import * as THREE from 'three';

// A world-anchored "sand memory" texture that scrolls with the player.
//   R = depression depth (m)   G = pushed-up rim height (m)   B = disturbance (0..1)
// Each frame the previous texture is copied in with a texel-exact offset and a decay
// (sand slowly refills), then new stamps are max-blended on top.

export const STAMP = {
  FOOT: 0,
  CRATER: 1,
  DISTURB: 2,
  RING: 3,
  FURROW: 4,
};

const FULLSCREEN_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const COPY_FRAG = /* glsl */ `
uniform sampler2D tPrev;
uniform vec2 uOffset;
uniform vec4 uDecay;
varying vec2 vUv;
void main() {
  vec2 suv = vUv + uOffset;
  vec4 v = texture2D(tPrev, suv);
  if (suv.x < 0.0 || suv.y < 0.0 || suv.x > 1.0 || suv.y > 1.0) v = vec4(0.0);
  gl_FragColor = v * uDecay;
}
`;

const STAMP_VERT = /* glsl */ `
attribute vec2 iPos;
attribute float iRot;
attribute vec2 iScale;
attribute vec4 iParams;
uniform vec2 uCenter;
uniform float uSize;
varying vec2 vLocal;
varying vec2 vMeters;
varying vec4 vParams;
void main() {
  vLocal = position.xy * 2.0;
  vec2 l = position.xy * iScale;
  vMeters = l;
  float c = cos(iRot), s = sin(iRot);
  vec2 w = iPos + vec2(l.x * c - l.y * s, l.x * s + l.y * c);
  vParams = iParams;
  gl_Position = vec4((w - uCenter) / uSize * 2.0, 0.0, 1.0);
}
`;

// iParams: x = type, y = depth (m), z = rim (m), w = disturbance strength
const STAMP_FRAG = /* glsl */ `
varying vec2 vLocal;
varying vec2 vMeters;
varying vec4 vParams;

float ellipse(vec2 p, vec2 c, vec2 r) {
  vec2 d = (p - c) / r;
  return length(d);
}

void main() {
  int type = int(vParams.x + 0.5);
  float depth = vParams.y;
  float rim = vParams.z;
  float dist = vParams.w;
  vec4 o = vec4(0.0);

  if (type == 0) {
    // footprint in meters: +x forward. Sole + heel, soft sand walls, rim of pushed sand.
    vec2 p = vMeters;
    float sole = ellipse(p, vec2(0.05, 0.0), vec2(0.135, 0.068));
    float heel = ellipse(p, vec2(-0.1, 0.0), vec2(0.072, 0.058));
    float d = min(sole, heel);
    float dep = depth * smoothstep(1.05, 0.45, d);
    // toe dig: push-off digs a little deeper at the front
    dep += depth * 0.35 * smoothstep(0.9, 0.2, ellipse(p, vec2(0.12, 0.0), vec2(0.06, 0.05)));
    float ring = smoothstep(0.95, 1.25, d) * smoothstep(2.1, 1.3, d);
    // sand thrown backwards at toe-off piles behind the heel a bit more
    float back = smoothstep(0.0, -0.18, p.x) * 0.6 + 0.7;
    float r = rim * ring * back;
    float dis = dist * smoothstep(2.6, 0.8, d);
    o = vec4(dep, r, dis, 1.0);
  } else if (type == 1) {
    // crater: vLocal is -1..1 over 1.6x radius
    float r = length(vLocal) * 1.6;
    float u = max(1.0 - r * r, 0.0);
    float dep = depth * u * sqrt(u);
    float ring = smoothstep(0.85, 1.05, r) * smoothstep(1.6, 1.1, r);
    float dis = dist * smoothstep(1.6, 0.6, r);
    o = vec4(dep, rim * ring, dis, 1.0);
  } else if (type == 2) {
    float r = length(vLocal);
    float u = max(1.0 - r * r, 0.0);
    o = vec4(depth * u * u, 0.0, dist * u, 1.0);
  } else if (type == 3) {
    float r = length(vLocal);
    float ring = smoothstep(0.7, 0.88, r) * smoothstep(1.0, 0.9, r);
    o = vec4(0.0, rim * ring, dist * ring, 1.0);
  } else {
    // furrow: elongated soft trench along +x
    vec2 p = vLocal;
    float e = length(vec2(p.x, p.y * 1.0));
    float u = max(1.0 - e * e, 0.0);
    float side = smoothstep(0.55, 0.85, abs(p.y)) * smoothstep(1.0, 0.85, abs(p.y));
    o = vec4(depth * u, rim * side * (1.0 - abs(p.x)), dist * u, 1.0);
  }
  gl_FragColor = o;
}
`;

const _clearColor = new THREE.Color();

export class TrailSystem {
  constructor(renderer, { size = 64, res = 2048, maxStamps = 512 } = {}) {
    this.renderer = renderer;
    this.size = size;
    this.res = res;
    this.texel = size / res;

    const opts = {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      depthBuffer: false,
      stencilBuffer: false,
      generateMipmaps: false,
    };
    this.read = new THREE.WebGLRenderTarget(res, res, opts);
    this.write = new THREE.WebGLRenderTarget(res, res, opts);
    this.center = new THREE.Vector2();
    this.prevCenter = new THREE.Vector2();
    this.needsClear = true;

    // half-lives in seconds for R, G, B
    this.halfLife = new THREE.Vector3(70, 70, 26);

    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.copyMat = new THREE.ShaderMaterial({
      uniforms: {
        tPrev: { value: null },
        uOffset: { value: new THREE.Vector2() },
        uDecay: { value: new THREE.Vector4(1, 1, 1, 1) },
      },
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: COPY_FRAG,
      depthTest: false,
      depthWrite: false,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.copyMat);
    quad.frustumCulled = false;
    this.copyScene = new THREE.Scene();
    this.copyScene.add(quad);

    // instanced stamp quads
    const base = new THREE.PlaneGeometry(1, 1);
    const geo = new THREE.InstancedBufferGeometry();
    geo.index = base.index;
    geo.setAttribute('position', base.getAttribute('position'));
    this.maxStamps = maxStamps;
    this.iPos = new THREE.InstancedBufferAttribute(new Float32Array(maxStamps * 2), 2);
    this.iRot = new THREE.InstancedBufferAttribute(new Float32Array(maxStamps), 1);
    this.iScale = new THREE.InstancedBufferAttribute(new Float32Array(maxStamps * 2), 2);
    this.iParams = new THREE.InstancedBufferAttribute(new Float32Array(maxStamps * 4), 4);
    for (const a of [this.iPos, this.iRot, this.iScale, this.iParams]) a.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('iPos', this.iPos);
    geo.setAttribute('iRot', this.iRot);
    geo.setAttribute('iScale', this.iScale);
    geo.setAttribute('iParams', this.iParams);
    geo.instanceCount = 0;
    this.stampGeo = geo;

    this.stampMat = new THREE.ShaderMaterial({
      uniforms: {
        uCenter: { value: this.center },
        uSize: { value: size },
      },
      vertexShader: STAMP_VERT,
      fragmentShader: STAMP_FRAG,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      blending: THREE.CustomBlending,
      blendEquation: THREE.MaxEquation,
      blendEquationAlpha: THREE.MaxEquation,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneFactor,
    });
    const stampMesh = new THREE.Mesh(geo, this.stampMat);
    stampMesh.frustumCulled = false;
    this.stampScene = new THREE.Scene();
    this.stampScene.add(stampMesh);

    this.queue = 0;

    // Uniforms consumed by the terrain shader.
    this.uniforms = {
      uTrail: { value: this.read.texture },
      uTrailCenter: { value: new THREE.Vector2() },
      uTrailSize: { value: size },
      uTrailTexel: { value: 1 / res },
    };
  }

  // x,z world; rot = angle of local +x in xz plane (atan2(dirZ, dirX)); sx,sz = quad size (m)
  stamp(type, x, z, rot, sx, sz, depth, rim, disturb) {
    if (this.queue >= this.maxStamps) return;
    const i = this.queue++;
    this.iPos.array[i * 2] = x;
    this.iPos.array[i * 2 + 1] = z;
    this.iRot.array[i] = rot;
    this.iScale.array[i * 2] = sx;
    this.iScale.array[i * 2 + 1] = sz;
    this.iParams.array[i * 4] = type;
    this.iParams.array[i * 4 + 1] = depth;
    this.iParams.array[i * 4 + 2] = rim;
    this.iParams.array[i * 4 + 3] = disturb;
  }

  clear() {
    this.needsClear = true;
  }

  update(dt, focusX, focusZ) {
    const r = this.renderer;
    const t = this.texel;
    const cx = Math.round(focusX / t) * t;
    const cz = Math.round(focusZ / t) * t;
    this.prevCenter.copy(this.center);
    this.center.set(cx, cz);

    const prevTarget = r.getRenderTarget();
    const prevAutoClear = r.autoClear;
    r.autoClear = false;

    if (this.needsClear) {
      r.getClearColor(_clearColor);
      const prevAlpha = r.getClearAlpha();
      r.setClearColor(0x000000, 0);
      for (const rt of [this.read, this.write]) {
        r.setRenderTarget(rt);
        r.clear(true, false, false);
      }
      r.setClearColor(_clearColor, prevAlpha);
      this.prevCenter.copy(this.center);
      this.needsClear = false;
    }

    // scroll + decay
    this.copyMat.uniforms.tPrev.value = this.read.texture;
    this.copyMat.uniforms.uOffset.value.set(
      (this.center.x - this.prevCenter.x) / this.size,
      (this.center.y - this.prevCenter.y) / this.size,
    );
    const hl = this.halfLife;
    this.copyMat.uniforms.uDecay.value.set(
      Math.pow(0.5, dt / hl.x),
      Math.pow(0.5, dt / hl.y),
      Math.pow(0.5, dt / hl.z),
      1,
    );
    r.setRenderTarget(this.write);
    r.render(this.copyScene, this.camera);

    // stamps
    if (this.queue > 0) {
      this.stampGeo.instanceCount = this.queue;
      for (const a of [this.iPos, this.iRot, this.iScale, this.iParams]) {
        a.clearUpdateRanges();
        a.addUpdateRange(0, this.queue * a.itemSize);
        a.needsUpdate = true;
      }
      r.render(this.stampScene, this.camera);
      this.queue = 0;
    }

    r.setRenderTarget(prevTarget);
    r.autoClear = prevAutoClear;

    const tmp = this.read;
    this.read = this.write;
    this.write = tmp;
    this.uniforms.uTrail.value = this.read.texture;
    this.uniforms.uTrailCenter.value.copy(this.center);
  }
}
