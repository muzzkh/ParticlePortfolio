import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { terrainHeight, groundGradient } from './noise.js';
import { PT } from './particles.js';
import { STAMP } from './trails.js';
import { Ornithopter, CargoPod } from './ornithopter.js';
import { GlbModel } from './models.js';
import { Rover, DataCore, Dish } from './props.js';
import { categoryOf } from './resume/normalize.js';
import { mulberry32 } from './rng.js';
import { TAU, ringPlan, ringSpots, padSpots } from './circle.js';

const DEG = Math.PI / 180;

// Waystones: basalt obelisks, one per chapter of the resume. They stand in a circle
// round the place the walker starts, evenly spaced and facing the middle, newest chapter
// first and the rest clockwise from it, so walking the circle reads the resume in order.
// Lines inlaid in the sand tie it together: a ring where the walker starts, a spoke out
// to every stone, and round each stone the circle you step into to read it.
// Projects are different: each sits on a stone landing pad (with its 3D model), on a
// wider ring outside the stones, in the gaps between them.

export const WAKE_RADIUS = 3.6; // walk this close and the stone speaks
export const SAFE_MARGIN = 2.0; // bedrock around a stone or pad: the worm can't follow you here

const STONE_W = 0.95;
const STONE_D = 0.58;
const STONE_H = 3.6;
const TAPER = 0.18; // how much narrower the shaft is at the top
const FOOT = 0.45; // the shaft starts this far up, inside the plinth
const CAP = 0.56; // height of the cap on top of the shaft
const PLINTH_R = 1.5;
const HUB_R = 2.4; // the ring inlaid where the walker starts
const LINE_LIFT = 0.06; // inlaid lines ride this far above the sand
// project landing pads: on their own ring, outside the stones
const PAD_R = 3.6;
const PAD_TOP = 0.42;
const PAD_WAKE = PAD_R + 2.6;
const PAD_LINE = new THREE.Color(0.14, 0.55, 0.5);

// HDR colours: the inscriptions run hot enough to catch the bloom pass.
const GLOW = {
  experience: new THREE.Color(3.4, 1.4, 0.42),
  education: new THREE.Color(0.7, 1.75, 4.0),
  project: new THREE.Color(0.9, 3.0, 1.7),
  skills: new THREE.Color(3.0, 2.3, 0.9),
};
const SHAFT = {
  experience: new THREE.Color(1.0, 0.52, 0.2),
  education: new THREE.Color(0.32, 0.62, 1.0),
  project: new THREE.Color(0.4, 1.0, 0.65),
  skills: new THREE.Color(1.0, 0.8, 0.42),
};
const HUB_COLOR = new THREE.Color('#ffe2a6');
const BED_COLOR = new THREE.Color('#3b2a20'); // the dark channel every inlaid line runs in

const BASALT_DARK = new THREE.Color('#2a201b');
const BASALT_MID = new THREE.Color('#463328');
const BASALT_LIGHT = new THREE.Color('#5c4434');
const SAND = new THREE.Color('#c99560');

function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}

// A prism run up through rectangular sections with cut corners, and closed on top.
// sections: [y, half width, half depth, how much is cut off each corner], bottom first.
function loft(sections) {
  const rings = sections.map(([y, hw, hd, cut]) => {
    const c = Math.max(0, Math.min(cut, hw, hd));
    return [
      [hw - c, y, hd],
      [hw, y, hd - c],
      [hw, y, -hd + c],
      [hw - c, y, -hd],
      [-hw + c, y, -hd],
      [-hw, y, -hd + c],
      [-hw, y, hd - c],
      [-hw + c, y, hd],
    ];
  });
  const tri = [];
  for (let k = 0; k < rings.length - 1; k++) {
    for (let i = 0; i < 8; i++) {
      const j = (i + 1) % 8;
      const a = rings[k][i];
      const b = rings[k][j];
      const c = rings[k + 1][j];
      const d = rings[k + 1][i];
      tri.push(...a, ...b, ...c, ...a, ...c, ...d);
    }
  }
  const top = rings[rings.length - 1];
  const mid = [0, sections[sections.length - 1][0], 0];
  for (let i = 0; i < 8; i++) tri.push(...top[i], ...top[(i + 1) % 8], ...mid);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(tri, 3));
  geo.computeVertexNormals();
  return geo;
}

// Colour each face: bands of basalt, sand dusted on what faces up and banked at the foot.
function paint(geo, footTop) {
  const pos = geo.getAttribute('position');
  const nor = geo.getAttribute('normal');
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 3) {
    const ny = nor.getY(i);
    const cy = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    c.copy(BASALT_DARK).lerp(BASALT_MID, 0.5 + 0.5 * Math.sin(cy * 2.6 + 0.8)).lerp(BASALT_LIGHT, Math.max(0, Math.sin(cy * 6.1)) * 0.25);
    if (ny > 0.55) c.lerp(SAND, Math.min(1, (ny - 0.55) * 3) * 0.8);
    c.lerp(SAND, (1 - smoothstep(0, footTop, cy)) * 0.55);
    for (let j = 0; j < 3; j++) {
      colors[(i + j) * 3] = c.r;
      colors[(i + j) * 3 + 1] = c.g;
      colors[(i + j) * 3 + 2] = c.b;
    }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

// The stone: a tapering shaft with cut corners, a band cut in above the plinth and
// another under the cap, and a cap that tells what kind of chapter it is: a point for
// work, steps for study, a ridge for the toolkit.
function obeliskGeometry(kind, h) {
  const hw = STONE_W / 2;
  const hd = STONE_D / 2;
  const cut = 0.075;
  const top = h - CAP;
  const at = (y, inset = 0) => {
    const k = 1 - TAPER * (y / h);
    return [y, hw * k - inset, hd * k - inset, cut];
  };
  const band = (y, tall) => [at(y), at(y, 0.035), at(y + tall, 0.035), at(y + tall)];
  const sections = [at(FOOT), ...band(FOOT + 0.16, 0.09), ...band(top - 0.16, 0.06), at(top)];
  const k = 1 - TAPER * (top / h);
  if (kind === 'education') {
    sections.push([top, hw * k * 0.76, hd * k * 0.76, cut * 0.8], [top + CAP * 0.5, hw * k * 0.76, hd * k * 0.76, cut * 0.8]);
    sections.push([top + CAP * 0.5, hw * k * 0.5, hd * k * 0.5, cut * 0.6], [h, hw * k * 0.5, hd * k * 0.5, cut * 0.6]);
  } else if (kind === 'skills') {
    sections.push([h, hw * k, 0.012, 0]);
  } else {
    sections.push([h, 0.012, 0.012, 0]);
  }
  return paint(loft(sections), 1.1);
}

// What every stone stands on: two eight-sided steps.
function plinthGeometry() {
  const lower = new THREE.CylinderGeometry(PLINTH_R - 0.08, PLINTH_R + 0.06, 0.34, 8).translate(0, 0.17, 0);
  const upper = new THREE.CylinderGeometry(1.0, 1.06, 0.2, 8).translate(0, 0.44, 0);
  const geo = mergeGeometries([lower, upper]).toNonIndexed();
  lower.dispose();
  upper.dispose();
  geo.rotateY(Math.PI / 8); // a flat side to the front
  geo.deleteAttribute('uv');
  geo.computeVertexNormals();
  return paint(geo, 0.3);
}

// The small solid that hangs over each stone: the same sign its kind has in the index.
function gemGeometry(kind) {
  if (kind === 'education') return new THREE.IcosahedronGeometry(0.15, 1);
  if (kind === 'skills') return new THREE.TetrahedronGeometry(0.2);
  return new THREE.OctahedronGeometry(0.17).scale(1, 1.35, 1);
}

// A strip lying on the sand along a line of points [x, z], lifted to follow the dunes.
function groundRibbon(pts, width, closed) {
  const n = pts.length;
  const pos = new Float32Array(n * 6);
  for (let i = 0; i < n; i++) {
    const a = pts[closed ? (i + n - 1) % n : Math.max(0, i - 1)];
    const b = pts[closed ? (i + 1) % n : Math.min(n - 1, i + 1)];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const l = Math.hypot(dx, dz) || 1;
    const nx = ((-dz / l) * width) / 2;
    const nz = ((dx / l) * width) / 2;
    for (let side = 0; side < 2; side++) {
      const x = pts[i][0] + (side ? nx : -nx);
      const z = pts[i][1] + (side ? nz : -nz);
      pos.set([x, terrainHeight(x, z) + LINE_LIFT, z], (i * 2 + side) * 3);
    }
  }
  const index = [];
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const a = i * 2;
    const c = ((i + 1) % n) * 2;
    index.push(a, c, a + 1, a + 1, c, c + 1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setIndex(index);
  return geo;
}

function circlePoints(x, z, r) {
  const n = Math.max(24, Math.round((TAU * r) / 0.3));
  return Array.from({ length: n }, (_, i) => [x + Math.cos((i / n) * TAU) * r, z + Math.sin((i / n) * TAU) * r]);
}

function linePoints(x0, z0, x1, z1) {
  const n = Math.max(2, Math.round(Math.hypot(x1 - x0, z1 - z0) / 0.3) + 1);
  return Array.from({ length: n }, (_, i) => [x0 + ((x1 - x0) * i) / (n - 1), z0 + ((z1 - z0) * i) / (n - 1)]);
}

function lineMaterial(color, opacity) {
  return new THREE.MeshBasicMaterial({ color: color.clone(), transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide });
}

// An inlaid line: a dark channel cut in the sand, and a thread of light laid along it.
function inlaidLine(pts, width, closed, bedMat, glowMat) {
  const g = new THREE.Group();
  const bed = new THREE.Mesh(groundRibbon(pts, width * 2.6, closed), bedMat);
  bed.renderOrder = 1;
  const glow = new THREE.Mesh(groundRibbon(pts, width, closed), glowMat);
  glow.position.y = 0.012;
  glow.renderOrder = 2;
  g.add(bed, glow);
  return g;
}

function disposeLine(g) {
  g.traverse((o) => o.geometry && o.geometry.dispose());
}

function drawSymbol(g, kind, x, y, r) {
  g.beginPath();
  if (kind === 'education') {
    g.arc(x, y, r * 0.85, 0, Math.PI * 2);
  } else if (kind === 'skills') {
    g.moveTo(x, y - r);
    g.lineTo(x + r * 0.95, y + r * 0.7);
    g.lineTo(x - r * 0.95, y + r * 0.7);
    g.closePath();
  } else if (kind === 'project') {
    g.rect(x - r * 0.75, y - r * 0.75, r * 1.5, r * 1.5);
  } else {
    g.moveTo(x, y - r);
    g.lineTo(x + r * 0.8, y);
    g.lineTo(x, y + r);
    g.lineTo(x - r * 0.8, y);
    g.closePath();
  }
  g.stroke();
}

// A column of invented script: a spine, a sigil for the stone's kind, and rows of marks.
function glyphTexture(rng, kind) {
  const W = 64;
  const H = 384;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext('2d');
  g.strokeStyle = '#fff';
  g.fillStyle = '#fff';
  g.lineCap = 'round';
  g.lineJoin = 'round';
  const cx = W / 2;
  g.lineWidth = 3.5;
  drawSymbol(g, kind, cx, 30, 14);
  g.globalAlpha = 0.4;
  g.lineWidth = 1.6;
  g.beginPath();
  g.moveTo(cx, 58);
  g.lineTo(cx, H - 16);
  g.stroke();
  g.globalAlpha = 1;
  let y = 74;
  while (y < H - 26) {
    const r = rng();
    g.lineWidth = 2.4 + rng() * 1.2;
    g.beginPath();
    if (r < 0.28) {
      const w = 7 + rng() * 15;
      g.moveTo(cx - w, y);
      g.lineTo(cx + w, y);
      g.stroke();
    } else if (r < 0.46) {
      const dx = 7 + rng() * 8;
      g.arc(cx - dx, y, 2.6, 0, Math.PI * 2);
      g.moveTo(cx + dx + 2.6, y);
      g.arc(cx + dx, y, 2.6, 0, Math.PI * 2);
      g.fill();
    } else if (r < 0.64) {
      const w = 9 + rng() * 8;
      const up = rng() < 0.5 ? -1 : 1;
      g.moveTo(cx - w, y - up * 5);
      g.lineTo(cx, y + up * 4);
      g.lineTo(cx + w, y - up * 5);
      g.stroke();
    } else if (r < 0.82) {
      const side = rng() < 0.5 ? -1 : 1;
      const w = 10 + rng() * 10;
      g.moveTo(cx, y);
      g.lineTo(cx + side * w, y);
      g.lineTo(cx + side * w, y + 6);
      g.stroke();
    } else {
      g.arc(cx, y, 4 + rng() * 2, 0, Math.PI * 2);
      g.stroke();
    }
    y += 17 + rng() * 12;
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

const SHAFT_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const SHAFT_FRAG = /* glsl */ `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uTime;
uniform float uSeed;
varying vec2 vUv;
void main() {
  // Clamp the uvs: the scene is multisampled, so pixels on the column's edges are shaded
  // at their centres, just outside the quad, where the uvs run past 0..1. pow() of the
  // negative base there is NaN, and the bloom pass smears one NaN over the whole frame:
  // the screen flashed black.
  float x = min(abs(vUv.x * 2.0 - 1.0), 1.0);
  float core = pow(1.0 - x, 3.5);
  float y = clamp(vUv.y, 0.0, 1.0);
  float fade = smoothstep(0.0, 0.08, y) * pow(1.0 - y, 1.6);
  // slow bands of brighter light drifting up the column
  float drift = 0.78 + 0.22 * sin(y * 11.0 - uTime * 1.7 + uSeed * 6.0) * sin(y * 4.0 - uTime * 0.6 + uSeed);
  gl_FragColor = vec4(uColor, core * fade * drift * uOpacity);
}
`;

export class Waystones {
  constructor(scene, entries) {
    this.scene = scene;
    this.entries = entries;
    this.group = new THREE.Group();
    this.group.name = 'waystones';
    scene.add(this.group);
    this.stoneMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.78, metalness: 0.05 });
    this.plinthMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.92, metalness: 0 });
    this.plinthGeo = plinthGeometry();
    this.padMat = new THREE.MeshStandardMaterial({ color: '#5d4b3c', flatShading: true, roughness: 0.88, metalness: 0.05 });
    this.postMat = new THREE.MeshStandardMaterial({ color: '#2f2924', roughness: 0.6, metalness: 0.5 });
    this.hub = null; // the rings inlaid where the walker starts
    this.bedMat = lineMaterial(BED_COLOR, 0.5);
    this.reach = 0; // how far out the outermost ring of stones is
    this.night = 0;
    this.selectedId = null;
    this.thrum = 0; // how loud the nearest hovering craft is, 0..1
    this._c = new THREE.Color();

    const rng = mulberry32(0x5eed);
    this.stones = entries.map((entry, i) => (entry.kind === 'project' ? this._buildPad(entry, i, rng) : this._build(entry, i, rng)));
  }

  _build(entry, index, rng) {
    const kind = GLOW[entry.kind] ? entry.kind : 'experience';
    const root = new THREE.Group();
    const scale = entry.scale || 1;
    root.scale.setScalar(scale);
    // the first stone, the chapter being written now, stands a little taller than the rest
    const h = STONE_H * (index === 0 ? 1.1 : 1);
    const body = new THREE.Mesh(obeliskGeometry(kind, h), this.stoneMat);
    body.castShadow = true;
    body.receiveShadow = true;
    const plinth = new THREE.Mesh(this.plinthGeo, this.plinthMat);
    plinth.castShadow = true;
    plinth.receiveShadow = true;
    root.add(plinth, body);

    // the inscription, on both broad faces, between the two bands
    const glyphMat = new THREE.MeshBasicMaterial({
      map: glyphTexture(rng, kind),
      color: GLOW[kind].clone(),
      transparent: true,
      depthWrite: false,
    });
    const lo = FOOT + 0.4;
    const hi = h - CAP - 0.3;
    const mid = (lo + hi) / 2;
    const glyphGeo = new THREE.PlaneGeometry((hi - lo) / 6, hi - lo);
    const zFace = (STONE_D / 2) * (1 - TAPER * (mid / h)) + 0.015;
    const tilt = Math.atan2((STONE_D / 2) * TAPER, h);
    for (const side of [1, -1]) {
      const glyph = new THREE.Mesh(glyphGeo, glyphMat);
      glyph.position.set(0, mid, zFace * side);
      glyph.rotation.set(-tilt * side, side > 0 ? 0 : Math.PI, 0);
      glyph.renderOrder = 2;
      root.add(glyph);
    }

    const gemMat = new THREE.MeshBasicMaterial({ color: GLOW[kind].clone() });
    const gem = new THREE.Mesh(gemGeometry(kind), gemMat);
    const gemY = h + 0.36;
    gem.position.y = gemY;
    root.add(gem);

    const shaftMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: SHAFT[kind].clone() },
        uOpacity: { value: 0 },
        uTime: { value: 0 },
        uSeed: { value: rng() * 10 },
      },
      vertexShader: SHAFT_VERT,
      fragmentShader: SHAFT_FRAG,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const shaft = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 24).translate(0, 12, 0), shaftMat);
    shaft.renderOrder = 6;
    shaft.frustumCulled = false;

    this.group.add(root, shaft);
    return {
      entry,
      index,
      kind,
      h,
      root,
      shaft,
      shaftMat,
      glyphMat,
      gem,
      gemMat,
      gemY,
      inlay: null, // the circle round the stone and the spoke out to it, laid when it's placed
      spokeGlow: 0,
      ring: -1, // which ring of the circle it stands on (-1: placed by hand)
      scale,
      radius: PLINTH_R * scale, // solid: the walker can't pass inside this
      wake: WAKE_RADIUS + (scale - 1) * 1.5, // within this the stone opens its dossier
      x: 0,
      z: 0,
      y: 0,
      found: false,
      glow: 1,
      pulse: 0,
      moteAcc: 0,
    };
  }

  // A project: an octagonal stone landing pad, an inlaid ring and chevrons, beacon posts
  // around the rim, and the project's model parked in the middle.
  _buildPad(entry, index, rng) {
    const root = new THREE.Group();
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(PAD_R, PAD_R + 0.3, 0.6, 8), this.padMat);
    pad.position.y = PAD_TOP - 0.3;
    pad.castShadow = true;
    pad.receiveShadow = true;
    // the pad's lines and lights take the colour of the project's category
    const lineColor = entry.category ? new THREE.Color(categoryOf(entry.category).color).multiplyScalar(0.62) : PAD_LINE.clone();
    const lineMat = new THREE.MeshBasicMaterial({ color: lineColor.clone() });
    const ring = new THREE.Mesh(new THREE.RingGeometry(PAD_R * 0.73, PAD_R * 0.76, 48).rotateX(-Math.PI / 2), lineMat);
    ring.position.y = PAD_TOP + 0.012;
    root.add(pad, ring);
    const chevron = new THREE.Shape();
    chevron.moveTo(-0.32, 0);
    chevron.lineTo(0, -0.34);
    chevron.lineTo(0.32, 0);
    chevron.lineTo(0.22, 0.02);
    chevron.lineTo(0, -0.2);
    chevron.lineTo(-0.22, 0.02);
    chevron.closePath();
    const chevGeo = new THREE.ShapeGeometry(chevron).rotateX(-Math.PI / 2);
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
      const c = new THREE.Mesh(chevGeo, lineMat);
      c.position.set(Math.cos(a) * PAD_R * 0.88, PAD_TOP + 0.012, Math.sin(a) * PAD_R * 0.88);
      c.rotation.y = -a - Math.PI / 2; // point at the centre
      root.add(c);
    }
    const bulbs = [];
    const bulbGeo = new THREE.SphereGeometry(0.09, 10, 8);
    const postGeo = new THREE.CylinderGeometry(0.05, 0.07, 0.5, 8);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
      const post = new THREE.Mesh(postGeo, this.postMat);
      post.position.set(Math.cos(a) * (PAD_R + 0.05), PAD_TOP + 0.25, Math.sin(a) * (PAD_R + 0.05));
      post.castShadow = true;
      const mat = new THREE.MeshBasicMaterial({ color: lineColor.clone() });
      const bulb = new THREE.Mesh(bulbGeo, mat);
      bulb.position.set(post.position.x, PAD_TOP + 0.55, post.position.z);
      root.add(post, bulb);
      bulbs.push(mat);
    }
    const m = entry.model || { type: 'pod', scale: 1, yaw: 0, y: 0, lift: true };
    const BUILT_IN = { ornithopter: Ornithopter, rover: Rover, core: DataCore, dish: Dish };
    const model = BUILT_IN[m.type] ? new BUILT_IN[m.type]() : m.type === 'glb' && m.src ? new GlbModel(m.src, { lift: m.lift }) : new CargoPod();
    model.root.scale.setScalar(m.scale);
    model.root.position.y = PAD_TOP + m.y;
    model.yaw = m.yaw * DEG;
    model.root.rotation.y = model.yaw;
    root.add(model.root);
    this.group.add(root);
    return {
      entry,
      index,
      kind: 'project',
      h: model.height,
      root,
      model,
      modelScale: m.scale,
      canLift: m.lift,
      flies: model instanceof Ornithopter || model instanceof GlbModel, // raises dust and a wingbeat
      lineColor,
      lineMat,
      bulbs,
      lift: 0,
      scale: 1,
      autoRot: 0,
      radius: PAD_R + 0.15,
      wake: PAD_R + 2.6,
      x: 0,
      z: 0,
      y: 0,
      found: false,
      glow: 1,
      pulse: 0,
      moteAcc: 0,
      dustAcc: 0,
      inlay: null, // the spoke out to the pad, laid when it's placed
      spokeGlow: 0,
      ring: -1,
    };
  }

  byId(id) {
    return this.stones.find((s) => s.entry.id === id) || null;
  }

  // Lay the circle out round (sx, sz). The first stone stands toward `heading` (radians,
  // world x/z plane) and the rest follow clockwise, each facing the middle; the pads stand
  // on a ring outside them, the first on the far side from `heading`.
  // `blocked(x, z, margin)` reports ground that is taken (the games' sites).
  layout(sx, sz, heading, blocked) {
    this.spawn = { x: sx, z: sz };
    const placed = []; // { x, z, keep }: offsets from the middle, and how far a pad must keep off
    const put = (s, x, z, face) => {
      placed.push({ x: x - sx, z: z - sz, keep: s.wake + PAD_WAKE + 0.3 });
      if (s.kind === 'project') this._placePad(s, x, z);
      else this._place(s, x, z, face);
    };
    // sites placed by hand go exactly where they were put; the circle is made of the rest
    for (const s of this.stones) {
      s.ring = -1;
      if (s.entry.place) put(s, sx + s.entry.place.dx, sz + s.entry.place.dz);
    }
    const ring = this.stones.filter((s) => s.kind !== 'project' && !s.entry.place);
    const pads = this.stones.filter((s) => s.kind === 'project' && !s.entry.place);

    // turn the whole circle a little either way, to stand its stones on the calmest sand
    const g = { x: 0, z: 0 };
    const plan = ringPlan(ring.length);
    const step = plan.length ? TAU / plan[0].count : TAU;
    let turn = 0;
    let best = Infinity;
    for (let k = -2; k <= 2; k++) {
      const t = k * 0.2 * step;
      let score = Math.abs(k) * 0.02;
      for (const p of ringSpots(ring.length, heading, t)) {
        groundGradient(sx + p.x, sz + p.z, g, 0.6);
        score += g.x * g.x + g.z * g.z;
        if (blocked && blocked(sx + p.x, sz + p.z, 3.2)) score += 100;
      }
      if (score < best) {
        best = score;
        turn = t;
      }
    }
    const spots = ringSpots(ring.length, heading, turn);
    ring.forEach((s, i) => {
      s.ring = spots[i].ring;
      put(s, sx + spots[i].x, sz + spots[i].z, Math.atan2(-spots[i].x, -spots[i].z));
    });
    this.reach = plan.length ? plan[plan.length - 1].r : 0;

    // the pads: in the gaps between the stones, one ring further out; when that ring is
    // full (or the games are in the way), the next ring out again
    const padSites = padSpots(pads.length, ring.length, heading, turn, {
      apart: WAKE_RADIUS + PAD_WAKE + 0.4,
      room: 2 * PAD_WAKE + 0.6,
      prefer: heading + Math.PI,
      taken: placed,
      free: blocked ? (x, z) => !blocked(sx + x, sz + z, PAD_R + 2) : null,
    });
    pads.forEach((s, i) => this._placePad(s, sx + padSites[i].x, sz + padSites[i].z));
    this._hub();
  }

  // face: which way the stone looks (radians); left out, it keeps the turn it has
  _place(s, x, z, face) {
    let minH = terrainHeight(x, z);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * TAU;
      minH = Math.min(minH, terrainHeight(x + Math.cos(a) * PLINTH_R * s.scale, z + Math.sin(a) * PLINTH_R * s.scale));
    }
    s.x = x;
    s.z = z;
    s.y = minH;
    // the lower step of the plinth sits in the sand at its lowest corner
    s.root.position.set(x, minH - 0.14 * s.scale, z);
    if (face !== undefined) s.root.rotation.y = face;
    else if (s.entry.place) s.root.rotation.y = s.entry.place.rot * DEG;
    s.shaft.position.set(x, minH + s.h * 0.55 * s.scale, z);
    this._inlay(s);
  }

  // The lines in the sand that belong to a site: round a stone, the circle you step into
  // to read it; and to every site, a spoke from the ring where the walker starts.
  _inlay(s) {
    if (!this.spawn) return;
    const tint = s.kind === 'project' ? s.lineColor : SHAFT[s.kind];
    if (!s.inlay) s.inlay = { ring: null, spoke: null, ringMat: lineMaterial(tint, 0.8), spokeMat: lineMaterial(tint, 0.1) };
    for (const key of ['ring', 'spoke']) {
      if (!s.inlay[key]) continue;
      this.group.remove(s.inlay[key]);
      disposeLine(s.inlay[key]);
      s.inlay[key] = null;
    }
    const edge = s.kind === 'project' ? PAD_R + 0.5 : s.wake;
    if (s.kind !== 'project') {
      s.inlay.ring = inlaidLine(circlePoints(s.x, s.z, s.wake), 0.07, true, this.bedMat, s.inlay.ringMat);
      this.group.add(s.inlay.ring);
    }
    const dx = s.x - this.spawn.x;
    const dz = s.z - this.spawn.z;
    const d = Math.hypot(dx, dz);
    if (d > HUB_R + edge + 0.6) {
      const ux = dx / d;
      const uz = dz / d;
      const pts = linePoints(this.spawn.x + ux * HUB_R, this.spawn.z + uz * HUB_R, s.x - ux * edge, s.z - uz * edge);
      s.inlay.spoke = inlaidLine(pts, 0.06, false, this.bedMat, s.inlay.spokeMat);
      this.group.add(s.inlay.spoke);
    }
  }

  // two rings inlaid in the sand where the walker starts: the middle of the circle
  _hub() {
    if (this.hub) {
      this.group.remove(this.hub);
      disposeLine(this.hub);
    } else {
      this.hubMat = lineMaterial(HUB_COLOR, 0.85);
    }
    this.hub = new THREE.Group();
    const { x, z } = this.spawn;
    this.hub.add(inlaidLine(circlePoints(x, z, HUB_R), 0.08, true, this.bedMat, this.hubMat));
    this.hub.add(inlaidLine(circlePoints(x, z, HUB_R - 0.36), 0.04, true, this.bedMat, this.hubMat));
    this.group.add(this.hub);
  }

  _placePad(s, x, z) {
    // sit the pad on the high side so it never floats; the sand drifts up its low side
    let sum = 0;
    let maxH = -Infinity;
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const h = terrainHeight(x + Math.cos(a) * PAD_R, z + Math.sin(a) * PAD_R);
      sum += h;
      maxH = Math.max(maxH, h);
    }
    const base = Math.min(maxH - 0.15, sum / 12 + 0.25);
    s.x = x;
    s.z = z;
    s.y = base;
    s.root.position.set(x, base, z);
    s.root.rotation.y = s.entry.place ? s.entry.place.rot * DEG : 0;
    this._inlay(s);
  }

  // ---- editing: move and turn sites live, find the one under the pointer ----
  moveSite(s, x, z) {
    if (s.kind === 'project') this._placePad(s, x, z);
    else this._place(s, x, z);
  }

  turnSite(s, deg) {
    s.root.rotation.y = deg * DEG;
  }

  siteRotation(s) {
    return Math.round(((s.root.rotation.y / DEG) % 360) * 10) / 10;
  }

  siteOf(object) {
    for (let o = object; o; o = o.parent) {
      const s = this.stones.find((st) => st.root === o);
      if (s) return s;
    }
    return null;
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
      for (const m of mats) {
        if (m.map) m.map.dispose();
        m.dispose();
      }
    });
    for (const s of this.stones) if (s.model && s.model.dispose) s.model.dispose();
  }

  // world-space point just above the stone (or the craft on its pad), for HUD labels
  anchor(s, out) {
    if (s.kind === 'project') return out.set(s.x, s.y + PAD_TOP + s.model.height * s.modelScale + 0.5, s.z);
    return out.set(s.x, s.y + s.h * s.scale + 1.15, s.z);
  }

  // where to stand to read the stone, coming from (fx, fz)
  approachPoint(s, fx, fz) {
    const dx = fx - s.x;
    const dz = fz - s.z;
    const d = Math.hypot(dx, dz) || 1;
    const r = s.radius + 1.0;
    return { x: s.x + (dx / d) * r, z: s.z + (dz / d) * r };
  }

  collide(pos, r, vel) {
    for (const s of this.stones) {
      const dx = pos.x - s.x;
      const dz = pos.z - s.z;
      const d = Math.hypot(dx, dz);
      const min = s.radius + r;
      if (d < min && d > 1e-4) {
        const nx = dx / d;
        const nz = dz / d;
        pos.x = s.x + nx * min;
        pos.z = s.z + nz * min;
        if (vel) {
          const vn = vel.x * nx + vel.z * nz;
          if (vn < 0) {
            vel.x -= vn * nx;
            vel.z -= vn * nz;
          }
        }
      }
    }
  }

  // within `margin` of a stone's or pad's edge
  nearStone(x, z, margin = SAFE_MARGIN) {
    for (const s of this.stones) if (Math.hypot(x - s.x, z - s.z) < s.radius + margin) return true;
    return false;
  }

  // The circle stands on bedrock, out to well past its stones: far enough that a worm
  // rising at the edge of it comes up clear of them.
  get safeRadius() {
    return this.reach ? this.reach + 13 : 0;
  }

  onCourt(x, z, margin = 0) {
    return !!this.spawn && Math.hypot(x - this.spawn.x, z - this.spawn.z) < this.safeRadius + margin;
  }

  // ground the circle and its pads stand on: no rock crops out here
  keepsClear(x, z, r) {
    if (this.spawn && this.reach && Math.hypot(x - this.spawn.x, z - this.spawn.z) < this.reach + WAKE_RADIUS + 1 + r) return true;
    for (const s of this.stones) if (Math.hypot(x - s.x, z - s.z) < s.wake + 1 + r) return true;
    return false;
  }

  // For the map: each ring of the circle as a closed line through its stones, and a
  // spoke from the start to every pad and to every stone placed by hand.
  mapLines() {
    const rings = [];
    const spokes = [];
    for (const s of this.stones) {
      if (s.kind !== 'project' && s.ring >= 0) (rings[s.ring] ||= []).push({ x: s.x, z: s.z });
      else spokes.push({ project: s.kind === 'project', points: [this.spawn, { x: s.x, z: s.z }] });
    }
    return { rings: rings.filter(Boolean).map((pts) => (pts.length > 2 ? [...pts, pts[0]] : pts)), spokes };
  }

  // The moment a stone is first reached: dust, a ring in the sand, a swirl of spice.
  awaken(s, particles, trails, tint) {
    s.pulse = 1;
    const r0 = s.kind === 'project' ? PAD_R : 1.4;
    particles.burst(s.x, s.y + 0.3, s.z, 70, 2.4, tint, { radius: r0, dust: 0.6, puff: 0.9, grow: 1.3 });
    trails.stamp(STAMP.RING, s.x, s.z, 0, r0 * 4.6, r0 * 4.6, 0, 0.035, 0.9);
    const glow = this._c.copy(GLOW[s.kind]).multiplyScalar(0.7);
    for (let i = 0; i < 70; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = r0 * 0.6 + Math.random() * 2.2;
      particles.spawn(
        PT.SPICE,
        s.x + Math.cos(a) * r,
        s.y + 0.2 + Math.random() * (s.h + 1.5),
        s.z + Math.sin(a) * r,
        -Math.sin(a) * 1.2,
        0,
        Math.cos(a) * 1.2,
        0.04 + Math.random() * 0.05,
        2.5 + Math.random() * 3,
        glow,
        0.95,
        { drag: 0.6 },
      );
    }
  }

  // Returns the site nearest to the walker relative to its wake radius:
  // { stone, dist, rel } where rel < 0 means the walker is inside its wake.
  update(dt, t, ctx) {
    const { px, pz, camYaw, focusX, focusZ, viewR, night, particles, tint } = ctx;
    this.night += ((night ? 1 : 0) - this.night) * (1 - Math.exp(-dt * 0.8));
    let nearest = null;
    let nd = Infinity;
    let nr = Infinity;
    let thrum = 0;
    for (const s of this.stones) {
      const d = Math.hypot(px - s.x, pz - s.z);
      if (d - s.wake < nr) {
        nr = d - s.wake;
        nd = d;
        nearest = s;
      }
      const selected = this.selectedId === s.entry.id ? 1 : 0;
      s.pulse = Math.max(0, s.pulse - dt * 0.45);
      const inView = Math.hypot(s.x - focusX, s.z - focusZ) < viewR + 8;
      if (s.kind === 'project') {
        thrum = Math.max(thrum, this._updatePad(s, dt, t, d, selected, inView, px, pz, particles, tint));
        continue;
      }
      const near = 1 - smoothstep(2.5, 10, d);
      const target = (s.found ? 0.8 : 1) + near * 0.45 + selected * 0.35 + s.pulse * 2.2;
      s.glow += (target - s.glow) * (1 - Math.exp(-dt * 4));
      const flicker = 0.93 + 0.07 * Math.sin(t * 2.1 + s.index * 1.7) * Math.sin(t * 0.77 + s.index);
      s.glyphMat.color.copy(GLOW[s.kind]).multiplyScalar(s.glow * flicker);
      s.gemMat.color.copy(GLOW[s.kind]).multiplyScalar(0.5 * s.glow * flicker);
      s.gem.rotation.y = t * 0.5 + s.index * 1.3;
      s.gem.position.y = s.gemY + Math.sin(t * 1.1 + s.index * 2.1) * 0.035;
      // its circle on the sand is bright while the stone waits and an ember once it's
      // read; the spoke out to it lights when it has been
      s.spokeGlow += ((s.found ? 1 : 0) - s.spokeGlow) * (1 - Math.exp(-dt * 1.5));
      if (s.inlay) {
        s.inlay.ringMat.opacity = Math.min(1, (s.found ? 0.3 : 0.8) + near * 0.1 + selected * 0.2 + s.pulse * 0.5);
        s.inlay.spokeMat.opacity = Math.min(1, 0.1 + 0.75 * s.spokeGlow + s.pulse * 0.4);
      }

      // light column: a beacon until found, an ember after
      s.shaft.rotation.y = camYaw;
      const u = s.shaftMat.uniforms;
      u.uTime.value = t;
      const base = s.found ? 0.2 : 0.5;
      u.uOpacity.value = (base + selected * 0.25 + s.pulse * 0.9) * (1 + this.night * 0.7);

      // drifting spice motes around stones in view
      if (inView && particles) {
        s.moteAcc += dt * (s.found ? 2.5 : 6) * (1 + selected);
        const glow = this._c.copy(GLOW[s.kind]).multiplyScalar(0.55);
        while (s.moteAcc >= 1) {
          s.moteAcc -= 1;
          const a = Math.random() * Math.PI * 2;
          const r = 0.7 + Math.random() * 1.6;
          particles.spawn(
            PT.SPICE,
            s.x + Math.cos(a) * r,
            s.y + 0.3 + Math.random() * s.h,
            s.z + Math.sin(a) * r,
            0,
            0,
            0,
            0.035 + Math.random() * 0.035,
            2.5 + Math.random() * 2.5,
            glow,
            0.8,
            { drag: 0.5 },
          );
        }
      } else {
        s.moteAcc = 0;
      }
    }
    this.thrum = thrum;
    return { stone: nearest, dist: nd, rel: nr };
  }

  // The craft lifts off as the walker comes near, hovers facing them, and settles back
  // when they leave. Beacons breathe around the rim (smoothly: nothing blinks).
  _updatePad(s, dt, t, d, selected, inView, px, pz, particles, tint) {
    const want = s.canLift && d < 11 ? 1 : 0;
    s.lift += (want - s.lift) * (1 - Math.exp(-dt * (want > s.lift ? 0.8 : 0.5)));
    if (s.lift < 1e-3) s.lift = 0;
    s.model.update(dt, t, s.lift, Math.atan2(px - s.x, pz - s.z));
    s.h = s.model.height;
    const near = 1 - smoothstep(3, 14, d);
    const k = 0.75 + near * 0.35 + selected * 0.25 + s.pulse * 0.8;
    s.lineMat.color.copy(s.lineColor).multiplyScalar(k);
    s.spokeGlow += ((s.found ? 1 : 0) - s.spokeGlow) * (1 - Math.exp(-dt * 1.5));
    if (s.inlay) s.inlay.spokeMat.opacity = Math.min(1, 0.1 + 0.75 * s.spokeGlow + s.pulse * 0.4);
    for (let i = 0; i < s.bulbs.length; i++) {
      const b = 0.5 + 0.5 * Math.sin(t * 1.4 - i * 0.785);
      s.bulbs[i].color.copy(s.lineColor).multiplyScalar(0.45 + 0.75 * b * k);
    }
    // downwash: sand blown out from under the craft
    if (s.flies && inView && particles && tint && s.lift > 0.15) {
      s.dustAcc += dt * 26 * s.lift;
      const c = this._c.copy(particles.dustColor).multiply(tint);
      while (s.dustAcc >= 1) {
        s.dustAcc -= 1;
        const a = Math.random() * Math.PI * 2;
        const r = PAD_R + 0.2 + Math.random() * 0.8;
        const v = 2 + Math.random() * 2.5 * s.lift;
        particles.spawn(PT.DUST, s.x + Math.cos(a) * r, s.y + 0.15, s.z + Math.sin(a) * r, Math.cos(a) * v, 0.25, Math.sin(a) * v, 0.35 + Math.random() * 0.4, 1.6 + Math.random(), c, 0.22, { grow: 0.9, drag: 0.7 });
      }
    } else {
      s.dustAcc = 0;
    }
    return s.flies ? s.lift * Math.max(0, 1 - d / 40) : 0;
  }
}
