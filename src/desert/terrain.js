import * as THREE from 'three';
import { NOISE_GLSL, TERRAIN_GLSL } from './noise.js';

const SIZE = 150; // metres covered by the terrain grid
const SEGMENTS = 450; // 1/3 m vertex spacing; fine detail comes from the per-pixel shading
const SPACING = SIZE / SEGMENTS;

const SHARED_PARS = /* glsl */ `
${NOISE_GLSL}
${TERRAIN_GLSL}
uniform sampler2D uTrail;
uniform vec2 uTrailCenter;
uniform float uTrailSize;
uniform float uTrailTexel;
uniform vec4 uWorm;      // x, z, amplitude, radius
uniform vec2 uWormDir;
uniform vec3 uSunDir;
varying vec3 vTerrainWorld;
varying vec4 vDune;      // per-vertex dune fields (see terrainFields)
varying vec4 vDune2;
varying vec4 vTex;       // ripple warp (xy), ripple phase noise, spice field
varying vec2 vTex2;      // colour noise at two scales

float wormBulge(vec2 p) {
  vec2 d = p - uWorm.xy;
  float along = dot(d, uWormDir);
  float across = dot(d, vec2(-uWormDir.y, uWormDir.x));
  float a = clamp(along, -16.0, 0.0);
  float dist = length(vec2(along - a, across));
  float taper = 1.0 + a / 16.0 * 0.7;
  float r = uWorm.w * taper;
  float g = exp(-(dist * dist) / (r * r));
  // a little bow wave ahead of the head
  float bow = exp(-pow((along - 1.5) / 2.0, 2.0) - pow(across / (uWorm.w * 1.3), 2.0)) * 0.35;
  return uWorm.z * (g * taper + bow);
}

float trailOffsetAt(vec2 P) {
  vec2 uv = (P - uTrailCenter) / uTrailSize + 0.5;
  vec2 e = abs(uv - 0.5);
  float fade = 1.0 - smoothstep(0.40, 0.495, max(e.x, e.y));
  vec4 t = texture2D(uTrail, uv);
  return (-t.r + t.g * clamp(1.0 - t.r * 30.0, 0.0, 1.0)) * fade;
}

float trailOffsetSoft(vec2 P) {
  const float s = 0.2;
  return (trailOffsetAt(P) * 2.0 + trailOffsetAt(P + vec2(s, 0.0)) + trailOffsetAt(P - vec2(s, 0.0))
        + trailOffsetAt(P + vec2(0.0, s)) + trailOffsetAt(P - vec2(0.0, s))) / 6.0;
}
`;

const FRAG_PARS = /* glsl */ `
uniform float uTime;
uniform float uWindPhase;
uniform float uWind;
uniform vec3 uSandLight;
uniform vec3 uSandMid;
uniform vec3 uSandDeep;
uniform vec3 uSpice;
uniform vec3 uGlint;
uniform float uStorm;
`;

const VERTEX_HEIGHT = /* glsl */ `
  vec3 tWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 tMacro = terrainMacro(tWorld.xz);
  // Crest snapping: slide vertices that lie close to a dune crest onto it, so the razor
  // edge is carried by real geometry (its outline and shadow) instead of a grid zig-zag.
  {
    float ph = dunePhase(tMacro);
    float dph = DUNE_K - fract(ph);
    dph -= floor(dph + 0.5);
    if (abs(dph) < 0.03) {
      const float se = 0.3;
      vec4 mX = terrainMacro(tWorld.xz + vec2(se, 0.0));
      vec4 mZ = terrainMacro(tWorld.xz + vec2(0.0, se));
      vec2 g = vec2(dunePhase(mX) - ph, dunePhase(mZ) - ph) / se;
      vec2 shift = g * (dph / max(dot(g, g), 1e-6));
      if (length(shift) < ${(SPACING * 0.62).toFixed(4)}) {
        tWorld.xz += shift;
        tMacro += (mX - tMacro) * (shift.x / se) + (mZ - tMacro) * (shift.y / se);
      }
    }
  }
  vec4 tD, tD2, tInfoV;
  terrainFields(tWorld.xz, tMacro, tD, tD2);
  float tH = duneShape(tD, tD2, tInfoV);
  float tTotal = tH + (uWorm.z > 0.001 ? wormBulge(tWorld.xz) : 0.0) + trailOffsetSoft(tWorld.xz);
  vec3 transformed = vec3(tWorld.x - modelMatrix[3].x, tTotal, tWorld.z - modelMatrix[3].z);
  vTerrainWorld = vec3(tWorld.x, tTotal, tWorld.z);
`;

const VERTEX_VARYINGS = /* glsl */ `
  vDune = tD;
  vDune2 = tD2;
  vec2 tpp = tWorld.xz + uSeed;
  vTex = vec4(vnoise(tpp * 0.21), vnoise(tpp * 0.21 + 7.7), vnoise(tpp * 0.45), fbm3(tpp * 0.016 + vec2(9.0, 2.0)));
  vTex2 = vec2(vnoise(tpp * 0.045), vnoise(tpp * 0.31 + 3.1));
`;

const NORMAL_AND_COLOUR = /* glsl */ `
  vec2 P = vTerrainWorld.xz;
  vec4 tInfo;
  duneShape(vDune, vDune2, tInfo);

  // Slope by central differences over about one pixel's footprint: crisp crests that are
  // still anti-aliased. The interpolated fields are linear per triangle, so their screen
  // derivatives give an exact Jacobian to extrapolate each tap with; no noise per pixel.
  vec2 dPx = dFdx(P);
  vec2 dPy = dFdy(P);
  float det = dPx.x * dPy.y - dPx.y * dPy.x;
  det = abs(det) > 1e-12 ? det : 1e-12;
  vec4 aX = dFdx(vDune), aY = dFdy(vDune);
  vec4 bX = dFdx(vDune2), bY = dFdy(vDune2);
  vec4 Jx = (aX * dPy.y - aY * dPx.y) / det;
  vec4 Jz = (aY * dPx.x - aX * dPy.x) / det;
  vec4 Kx = (bX * dPy.y - bY * dPx.y) / det;
  vec4 Kz = (bY * dPx.x - bX * dPy.x) / det;
  float e = clamp(max(length(dPx), length(dPy)) * 0.6, 0.012, 0.25);
  vec4 dmy;
  float hxp = duneShape(vDune + Jx * e, vDune2 + Kx * e, dmy);
  float hxm = duneShape(vDune - Jx * e, vDune2 - Kx * e, dmy);
  float hzp = duneShape(vDune + Jz * e, vDune2 + Kz * e, dmy);
  float hzm = duneShape(vDune - Jz * e, vDune2 - Kz * e, dmy);
  vec2 grad = vec2(hxp - hxm, hzp - hzm) / (2.0 * e);
  if (uWorm.z > 0.001) {
    float wb = wormBulge(P);
    grad += vec2(wormBulge(P + vec2(0.12, 0.0)) - wb, wormBulge(P + vec2(0.0, 0.12)) - wb) / 0.12;
  }

  // footprints, craters & disturbed sand from the trail texture
  vec2 tuv = (P - uTrailCenter) / uTrailSize + 0.5;
  vec2 tEdge = abs(tuv - 0.5);
  float tFade = 1.0 - smoothstep(0.40, 0.495, max(tEdge.x, tEdge.y));
  vec4 tr = texture2D(uTrail, tuv) * tFade;
  float ts = uTrailSize * uTrailTexel * 1.25;
  float oL = trailOffsetAt(P - vec2(ts, 0.0));
  float oR = trailOffsetAt(P + vec2(ts, 0.0));
  float oD = trailOffsetAt(P - vec2(0.0, ts));
  float oU = trailOffsetAt(P + vec2(0.0, ts));
  grad += vec2(oR - oL, oU - oD) / (2.0 * ts);

  float A = tInfo.x;
  float tt = tInfo.y;
  float prof = tInfo.w;
  float slope = length(grad);
  float disturbed = clamp(tr.b * 1.4 + tr.r * 18.0, 0.0, 1.0);

  // wind ripples: asymmetric, bending around the dunes, absent on slip faces
  float stossMask = tt < DUNE_K ? smoothstep(DUNE_K, DUNE_K - 0.1, tt) : 0.12;
  vec2 rq = P + (vTex.xy - 0.5) * 2.6;
  float rph = dot(rq, WIND) / 0.66 + vTex.z * 1.1 + uTime * 0.025;
  float raa = 1.0 - smoothstep(0.18, 0.45, fwidth(rph));
  float rippleAmp = 0.015 * stossMask * (1.0 - disturbed) * smoothstep(1.3, 0.35, slope) * raa;
  float rr = 6.2831853 * rph;
  float dr = cos(rr) + 0.5 * cos(2.0 * rr + 1.3) + 0.2 * cos(3.0 * rr + 2.2);
  grad += (WIND / 0.66) * dr * 6.2831853 * rippleAmp;

  vec3 wN = normalize(vec3(-grad.x, 1.0, -grad.y));
  normal = normalize((viewMatrix * vec4(wN, 0.0)).xyz);

  // ---------- colour ----------
  float n1 = vTex2.x;
  float n2 = vTex2.y;
  float grain = vnoise(P * 11.0);
  vec3 col = mix(uSandMid, uSandLight, clamp(smoothstep(0.35, 1.0, prof * tInfo.z) * 0.65 + (n1 - 0.5) * 0.5, 0.0, 1.0));
  float onSlip = tt > DUNE_K ? 1.0 : 0.0;
  col = mix(col, uSandDeep, onSlip * 0.16);
  col = mix(col, uSandDeep, (1.0 - smoothstep(0.0, 0.3, prof)) * 0.36 * (0.4 + 0.6 * n2));
  // spice-stained pans between dunes
  float spice = smoothstep(0.6, 0.8, vTex.w);
  spice *= (1.0 - smoothstep(0.15, 0.7, prof * tInfo.z)) * (0.7 + 0.3 * n2);
  col = mix(col, uSpice, spice * 0.6);
  // ripple troughs collect coarser, darker grains
  col *= 1.0 - 0.07 * smoothstep(0.2, 1.0, -sin(rr)) * stossMask * raa * (1.0 - disturbed);
  col *= 0.93 + 0.13 * grain;
  // turned-over sand is darker and slightly redder; footprint floors are a touch shaded
  col = mix(col, col * vec3(0.86, 0.8, 0.75), clamp(tr.b, 0.0, 1.0) * 0.5);
  col *= 1.0 - clamp(tr.r * 1.2, 0.0, 0.12);

  // saltation: streaks of sand creeping downwind over exposed slopes
  vec2 wq = vec2(dot(P, WIND), dot(P, WINDP));
  float st = vnoise(vec2(wq.x * 0.22 - uWindPhase * 2.4, wq.y * 1.3)) * 0.6
           + vnoise(vec2(wq.x * 0.8 - uWindPhase * 3.6, wq.y * 3.2) + 17.0) * 0.4;
  float streak = smoothstep(0.56, 0.86, st) * (0.35 + uWind * 0.65) * (tt < DUNE_K ? 1.0 : 0.35);
  col = mix(col, col * 1.12 + vec3(0.02, 0.014, 0.006), streak * (0.45 + uStorm * 0.4));

  diffuseColor.rgb = col;
  roughnessFactor = mix(0.95, 0.82, onSlip);
`;

const SPARKLE = /* glsl */ `
  {
    // sparkle only where the sun itself reaches (not bounce or sky light)
    float sunLit = 0.0;
    #if NUM_DIR_LIGHTS > 0
      float ndl = max(dot(normal, directionalLights[0].direction), 0.0);
      float shd = 1.0;
      #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
        shd = getShadow(directionalShadowMap[0], directionalLightShadows[0].shadowMapSize, directionalLightShadows[0].shadowIntensity,
                        directionalLightShadows[0].shadowBias, directionalLightShadows[0].shadowRadius, vDirectionalShadowCoord[0]);
      #endif
      sunLit = ndl * shd * length(directionalLights[0].color) * 0.577;
    #endif
    float cellSz = max(0.045, fwidth(P.x) * 1.5);
    vec2 gp = P / cellSz;
    ivec2 gc = ivec2(floor(gp));
    float hA = hash2i(gc);
    float hB = hash2i(gc + ivec2(71, 13));
    float tw = pow(0.5 + 0.5 * sin(uTime * (1.2 + hB * 3.5) + hA * 60.0), 10.0);
    vec2 f = fract(gp) - 0.5;
    float sparkle = step(0.9935, hA) * tw * smoothstep(0.5, 0.05, length(f));
    outgoingLight += uGlint * sparkle * sunLit * 1.6 * (1.0 - disturbed * 0.7);
  }
`;

export function createTerrain(extraUniforms) {
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEGMENTS, SEGMENTS);
  geo.rotateX(-Math.PI / 2);
  geo.deleteAttribute('uv');

  const uniforms = {
    uSeed: { value: new THREE.Vector2() },
    uTime: { value: 0 },
    uWindPhase: { value: 0 },
    uWind: { value: 0.5 },
    uStorm: { value: 0 },
    uWorm: { value: new THREE.Vector4(0, 0, 0, 3) },
    uWormDir: { value: new THREE.Vector2(1, 0) },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSandLight: { value: new THREE.Color('#efcf9f') },
    uSandMid: { value: new THREE.Color('#dcac76') },
    uSandDeep: { value: new THREE.Color('#b27c50') },
    uSpice: { value: new THREE.Color('#c0643a') },
    uGlint: { value: new THREE.Color('#fff2d8') },
    ...extraUniforms,
  };

  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.93, metalness: 0 });
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${SHARED_PARS}`)
      .replace('#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0.0, 1.0, 0.0);')
      .replace('#include <begin_vertex>', `${VERTEX_HEIGHT}\n${VERTEX_VARYINGS}`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${SHARED_PARS}\n${FRAG_PARS}`)
      .replace('#include <normal_fragment_begin>', `#include <normal_fragment_begin>\n${NORMAL_AND_COLOUR}`)
      .replace('#include <opaque_fragment>', `${SPARKLE}\n#include <opaque_fragment>`);
  };
  material.customProgramCacheKey = () => 'arrakis-terrain-6';

  const depthMaterial = new THREE.MeshDepthMaterial();
  depthMaterial.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${SHARED_PARS}`)
      // terrain-only shadow bias: push the caster away from the sun so the coarse mesh crest
      // never shadows the finer per-pixel surface; character & rock shadows stay tight
      .replace('#include <begin_vertex>', `${VERTEX_HEIGHT}\n  transformed -= uSunDir * 0.35;`);
  };
  depthMaterial.customProgramCacheKey = () => 'arrakis-terrain-depth-5';

  const mesh = new THREE.Mesh(geo, material);
  mesh.customDepthMaterial = depthMaterial;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  mesh.name = 'terrain';

  return {
    mesh,
    uniforms,
    size: SIZE,
    follow(x, z) {
      mesh.position.set(Math.round(x / SPACING) * SPACING, 0, Math.round(z / SPACING) * SPACING);
    },
  };
}
