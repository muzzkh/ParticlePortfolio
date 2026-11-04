import * as THREE from 'three';

// Time-of-day palette keyframes (hours). Colours are sRGB hex; THREE.Color converts to linear.
const KEYS = [
  { t: 0.0, sun: '#a9c0f0', si: 1.35, sky: '#4a5f94', gnd: '#4a3f58', hi: 1.15, fog: '#26314f', exp: 1.45, glint: '#d4e0ff' },
  { t: 4.6, sun: '#a4acd8', si: 1.1, sky: '#4a5080', gnd: '#54424e', hi: 1.1, fog: '#34385a', exp: 1.4, glint: '#d4e0ff' },
  { t: 5.35, sun: '#c09088', si: 0.1, sky: '#6e6888', gnd: '#7a5846', hi: 1.0, fog: '#86707a', exp: 1.12, glint: '#ffd8bc' },
  { t: 6.4, sun: '#ffb27e', si: 2.3, sky: '#a8b0cc', gnd: '#c88c60', hi: 1.15, fog: '#dcb49a', exp: 1.05, glint: '#ffdcb4' },
  { t: 8.5, sun: '#ffe2bc', si: 3.1, sky: '#b4c4dc', gnd: '#d8a878', hi: 1.3, fog: '#e8cdac', exp: 1.0, glint: '#fff2de' },
  { t: 12.0, sun: '#fff3e2', si: 3.4, sky: '#c0cce0', gnd: '#e0b284', hi: 1.35, fog: '#eedcc0', exp: 0.94, glint: '#fff8ec' },
  { t: 15.5, sun: '#ffe2be', si: 3.3, sky: '#b8c0d8', gnd: '#dcaa78', hi: 1.32, fog: '#ebd2ae', exp: 0.98, glint: '#fff2de' },
  { t: 17.3, sun: '#ffcc98', si: 3.1, sky: '#aeb0cc', gnd: '#d49c6a', hi: 1.25, fog: '#e6c09a', exp: 1.02, glint: '#ffe6c4' },
  { t: 18.5, sun: '#ff9e62', si: 2.2, sky: '#9690b2', gnd: '#b87850', hi: 1.1, fog: '#d09a7c', exp: 1.08, glint: '#ffc8a0' },
  { t: 19.3, sun: '#b07488', si: 0.1, sky: '#5a5680', gnd: '#6a4a44', hi: 1.0, fog: '#665670', exp: 1.14, glint: '#ffc8ac' },
  { t: 20.4, sun: '#a4b8ea', si: 1.2, sky: '#46588c', gnd: '#4a3e56', hi: 1.1, fog: '#2a3456', exp: 1.42, glint: '#d4e0ff' },
  { t: 24.0, sun: '#a9c0f0', si: 1.35, sky: '#4a5f94', gnd: '#4a3f58', hi: 1.15, fog: '#26314f', exp: 1.45, glint: '#d4e0ff' },
];
const PARSED = KEYS.map((k) => ({
  ...k,
  sun: new THREE.Color(k.sun),
  sky: new THREE.Color(k.sky),
  gnd: new THREE.Color(k.gnd),
  fog: new THREE.Color(k.fog),
  glint: new THREE.Color(k.glint),
}));

const STORM_FOG = new THREE.Color('#b0703e');
const STORM_SUN = new THREE.Color('#d8905a');

const DAY_START = 5.35;
const DAY_END = 19.3;

export class Atmosphere {
  constructor(scene) {
    this.scene = scene;
    this.time = 16.9;
    this.storm = 0;

    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(4096, 4096);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0;
    this.sun.shadow.radius = 2.5;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 420;
    scene.add(this.sun);
    scene.add(this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xb4c2d6, 0xdea66e, 1.0);
    scene.add(this.hemi);

    // warm light bounced off sunlit dunes into the shadowed slip faces (no shadows)
    this.bounce = new THREE.DirectionalLight(0xd9a676, 0.4);
    scene.add(this.bounce);
    scene.add(this.bounce.target);

    this.fog = new THREE.Fog(0xe8c298, 120, 300);
    scene.fog = this.fog;
    scene.background = new THREE.Color(0xe8c298);

    this.sunDir = new THREE.Vector3(0, 1, 0); // toward the light (sun or moon)
    this.sunColor = new THREE.Color();
    this.skyColor = new THREE.Color();
    this.groundColor = new THREE.Color();
    this.fogColor = new THREE.Color();
    this.glint = new THREE.Color();
    this.exposure = 1;
    this.sunIntensity = 3;
    this.isNight = false;
    // approximate irradiance tint for unlit things (particles)
    this.litTint = new THREE.Color();
    this.ambientTint = new THREE.Color();

    this._basisR = new THREE.Vector3();
    this._basisU = new THREE.Vector3();
    this.setTime(this.time);
  }

  setTime(t) {
    this.time = ((t % 24) + 24) % 24;
    const h = this.time;
    let a = PARSED[0];
    let b = PARSED[PARSED.length - 1];
    for (let i = 0; i < PARSED.length - 1; i++) {
      if (h >= PARSED[i].t && h <= PARSED[i + 1].t) {
        a = PARSED[i];
        b = PARSED[i + 1];
        break;
      }
    }
    const f = b.t === a.t ? 0 : (h - a.t) / (b.t - a.t);
    const s = f * f * (3 - 2 * f);
    this.sunColor.copy(a.sun).lerp(b.sun, s);
    this.skyColor.copy(a.sky).lerp(b.sky, s);
    this.groundColor.copy(a.gnd).lerp(b.gnd, s);
    this.fogColor.copy(a.fog).lerp(b.fog, s);
    this.glint.copy(a.glint).lerp(b.glint, s);
    this.sunIntensity = a.si + (b.si - a.si) * s;
    this.hemiIntensity = a.hi + (b.hi - a.hi) * s;
    this.exposure = a.exp + (b.exp - a.exp) * s;

    // Direction: the sun arcs east (+x) -> north (-z, top of screen) -> west (-x).
    // Between dusk and dawn the key light is the first moon, high in the south-west.
    this.isNight = h < DAY_START || h > DAY_END;
    if (!this.isNight) {
      const phi = ((h - 6) / 12) * Math.PI;
      const elev = THREE.MathUtils.degToRad(3 + 59 * Math.max(0, Math.sin(phi)));
      const hx = Math.cos(phi);
      const hz = -Math.sin(phi) - 0.35;
      const hl = Math.hypot(hx, hz);
      this.sunDir.set((hx / hl) * Math.cos(elev), Math.sin(elev), (hz / hl) * Math.cos(elev)).normalize();
    } else {
      const n = h > DAY_END ? h - DAY_END : h + 24 - DAY_END; // hours since dusk
      const phi = (n / (24 - DAY_END + DAY_START)) * Math.PI;
      const elev = THREE.MathUtils.degToRad(12 + 40 * Math.sin(phi));
      const hx = -Math.cos(phi) * 0.8;
      const hz = -0.6;
      const hl = Math.hypot(hx, hz);
      this.sunDir.set((hx / hl) * Math.cos(elev), Math.sin(elev), (hz / hl) * Math.cos(elev)).normalize();
    }
    this.apply();
  }

  setStorm(v) {
    this.storm = v;
    this.apply();
  }

  apply() {
    const st = this.storm;
    const sunC = this.sunColor.clone().lerp(STORM_SUN, st * 0.6);
    this.sun.color.copy(sunC);
    this.sun.intensity = this.sunIntensity * (1 - st * 0.55);
    this.hemi.color.copy(this.skyColor).lerp(STORM_FOG, st * 0.5);
    this.hemi.groundColor.copy(this.groundColor);
    this.hemi.intensity = this.hemiIntensity * (1 + st * 0.35);
    this.bounce.color.copy(this.groundColor);
    this.bounce.intensity = this.sunIntensity * 0.16 * (1 - st * 0.5);

    const fogC = this.fogColor.clone().lerp(STORM_FOG.clone().multiplyScalar(this.isNight ? 0.25 : 1), st * 0.75);
    this.fog.color.copy(fogC);
    this.scene.background.copy(fogC);

    // rough "what a sunlit sand grain looks like" tint for sprites
    this.litTint
      .copy(this.sun.color)
      .multiplyScalar(this.sun.intensity * Math.max(0.15, this.sunDir.y + 0.35) * 0.32)
      .add(this.hemi.color.clone().multiplyScalar(this.hemi.intensity * 0.45));
    this.ambientTint.copy(this.hemi.color).multiplyScalar(this.hemi.intensity * 0.6);
  }

  // Fit the shadow frustum around the view and snap it to shadow texels to avoid shimmering.
  update(focus, viewRadius, cameraDistance) {
    const cam = this.sun.shadow.camera;
    const ext = Math.max(14, viewRadius + 10);
    if (cam.right !== ext) {
      cam.left = -ext;
      cam.right = ext;
      cam.top = ext;
      cam.bottom = -ext;
      cam.updateProjectionMatrix();
    }
    const L = this.sunDir;
    const fwd = L.clone().negate();
    const R = this._basisR.crossVectors(fwd, new THREE.Vector3(0, 1, 0));
    if (R.lengthSq() < 1e-4) R.set(1, 0, 0);
    R.normalize();
    const U = this._basisU.crossVectors(R, fwd).normalize();
    const texel = (2 * ext) / this.sun.shadow.mapSize.x;
    let px = focus.dot(R);
    let py = focus.dot(U);
    const pz = focus.dot(L);
    px = Math.round(px / texel) * texel;
    py = Math.round(py / texel) * texel;
    const center = new THREE.Vector3().addScaledVector(R, px).addScaledVector(U, py).addScaledVector(L, pz);
    this.sun.target.position.copy(center);
    this.sun.position.copy(center).addScaledVector(L, 200);
    this.bounce.target.position.copy(focus);
    this.bounce.position.set(focus.x - L.x * 50, focus.y + 22, focus.z - L.z * 50);
    this.fog.near = cameraDistance - 12 - this.storm * 22;
    this.fog.far = cameraDistance + 140 - this.storm * 92;
  }
}
