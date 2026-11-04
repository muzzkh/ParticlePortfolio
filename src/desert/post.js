import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
    uHeat: { value: 0.5 },
    uStorm: { value: 0 },
    uStormColor: { value: new THREE.Color('#c9884c') },
    uWindDir: { value: new THREE.Vector2(0.8, -0.3) },
    uVignette: { value: 0.9 },
    uFade: { value: 0 },
    uShake: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uHeat;
    uniform float uStorm;
    uniform vec3 uStormColor;
    uniform vec2 uWindDir;
    uniform float uVignette;
    uniform float uFade;
    uniform float uShake;
    varying vec2 vUv;

    float h21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float vn(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(h21(i), h21(i + vec2(1, 0)), u.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), u.x), u.y);
    }
    float fbm(vec2 p) {
      float s = 0.0, a = 0.5;
      for (int i = 0; i < 4; i++) { s += a * vn(p); p *= 2.07; a *= 0.5; }
      return s;
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uRes.x / uRes.y;
      // heat shimmer: rises from the ground, stronger towards the top (farther away)
      float hs = uHeat * (0.25 + 0.75 * smoothstep(0.1, 1.0, uv.y));
      vec2 hp = vec2(uv.x * aspect * 38.0, uv.y * 24.0 - uTime * 1.6);
      uv += vec2(vn(hp) - 0.5, vn(hp + 17.3) - 0.5) * 0.0022 * hs;
      // chromatic fringe during shakes
      float ca = 0.0008 + uShake * 0.004;
      vec2 dir = (uv - 0.5);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + dir * ca).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - dir * ca).b;

      // storm: layered, wind-driven dust sheets over the image
      if (uStorm > 0.001) {
        vec2 sp = vec2(uv.x * aspect, uv.y) * 3.0;
        vec2 flow = uWindDir * uTime;
        float d1 = fbm(sp * 1.1 - flow * 0.9);
        float d2 = fbm(sp * 2.7 - flow * 2.1 + 5.0);
        float d3 = fbm(sp * 6.0 - flow * 4.5 + 11.0);
        float dust = smoothstep(0.25, 0.95, d1 * 0.55 + d2 * 0.3 + d3 * 0.15);
        float amt = uStorm * (0.1 + 0.36 * dust);
        col = mix(col, uStormColor * (0.8 + 0.3 * d2), amt);
        // fine, fast-moving sand sheets
        vec2 wd = normalize(uWindDir * vec2(aspect, 1.0));
        vec2 sq = vec2(uv.x * aspect, uv.y);
        float along = dot(sq, wd);
        float across = dot(sq, vec2(-wd.y, wd.x));
        float st = smoothstep(0.8, 1.0, vn(vec2(along * 6.0 - uTime * 7.0, across * 140.0)))
                 * smoothstep(0.35, 0.8, vn(vec2(along * 2.0 - uTime * 3.0, across * 9.0)));
        col += uStormColor * st * uStorm * 0.12;
      }

      // vignette
      vec2 q = vUv - 0.5;
      q.x *= aspect * 0.8;
      float vig = smoothstep(0.95, 0.25, length(q));
      col *= mix(1.0, vig, uVignette * 0.55);
      // fine film grain
      float g = h21(vUv * uRes + fract(uTime * 13.7) * 100.0) - 0.5;
      col += g * 0.028;
      col = mix(col, vec3(0.0), uFade);
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

export function createPost(renderer, scene, camera) {
  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  const bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 4, size.y / 4), 0.32, 0.55, 1.35);
  // bloom only carries small highlights (glints, eyes, spice, the worm's throat): run it at quarter res
  const bloomSetSize = bloom.setSize.bind(bloom);
  bloom.setSize = (w, h) => bloomSetSize(Math.max(1, Math.round(w / 2)), Math.max(1, Math.round(h / 2)));
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);

  return {
    composer,
    bloom,
    grade,
    setSize(w, h, pr) {
      composer.setPixelRatio(pr);
      composer.setSize(w, h);
      grade.uniforms.uRes.value.set(w * pr, h * pr);
    },
    render(dt) {
      composer.render(dt);
    },
  };
}
