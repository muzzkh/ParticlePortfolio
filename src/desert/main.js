import * as THREE from 'three';
import { setSeed, groundHeight, groundGradient, addCrater, updateCraters, clearCraters, vnoise, WIND } from './noise.js';
import { createTerrain } from './terrain.js';
import { TrailSystem, STAMP } from './trails.js';
import { Atmosphere } from './atmosphere.js';
import { Fremen } from './character.js';
import { Particles } from './particles.js';
import { RockField } from './rocks.js';
import { Sandworm, Thumper } from './worm.js';
import { DesertAudio } from './audio.js';
import { createPost } from './post.js';
import { UI } from './ui.js';
import { Waystones, SAFE_MARGIN } from './waystones.js';
import { Codex, contactLinks } from './codex.js';
import { prepareEntries } from './resume/normalize.js';
import initialSite from './resume/content.js';
import { setAssetOverrides } from './assets.js';
import { createEditMode } from './editmode.js';
import { GameGrounds } from './games/grounds.js';
import { Minimap } from './minimap.js';
import { Atomics, LaunchKey, strikeTargets } from './atomics.js';
import { LaunchPad } from './launchpad.js';

// ---------------------------------------------------------------------------
// Renderer & core objects
// ---------------------------------------------------------------------------
const canvas = document.getElementById('scene');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
} catch (err) {
  // No WebGL: send readers to the plain résumé if there is one, otherwise say why.
  if (initialSite.site && initialSite.site.plain) {
    window.location.replace(initialSite.site.plain);
  } else {
    const lede = document.getElementById('introLede');
    lede.textContent = 'This résumé is an interactive desert, and your browser could not start WebGL. The PDF below has everything.';
    document.querySelector('.intro-actions').remove();
    document.querySelector('.intro-keys').remove();
    document.getElementById('introLinks').append(...contactLinks({ profile: initialSite.profile, site: initialSite.site || {} }));
    document.body.classList.add('ready');
  }
  throw err;
}
const params = new URLSearchParams(window.location.search);
// ?edit: the placement editor that /management embeds (no intro, no walker, free camera)
const EDIT = params.has('edit');
let editor = null; // set at the end of boot in edit mode
const lockedPR = params.has('pr') ? THREE.MathUtils.clamp(parseFloat(params.get('pr')) || 1, 0.5, 3) : null;
const MAX_PR = Math.min(window.devicePixelRatio || 1, 1.75);
let pixelRatio = lockedPR ?? Math.min(MAX_PR, 1.5);
renderer.setPixelRatio(pixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 1, 600);

const atmos = new Atmosphere(scene);
const trails = new TrailSystem(renderer, { size: 64, res: 2048 });
const terrain = createTerrain(trails.uniforms);
scene.add(terrain.mesh);
const rocks = new RockField(scene);
const player = new Fremen();
scene.add(player.root);
const particles = new Particles(16000);
scene.add(particles.points);
const worm = new Sandworm(scene);
// ?preview: the unpublished content /management hands over (through this browser's
// storage) so it can be walked as a visitor would before publishing
function previewContent() {
  if (!params.has('preview')) return null;
  try {
    const p = JSON.parse(localStorage.getItem('arrakis.preview'));
    if (!p || !p.site || !p.site.profile || !Array.isArray(p.site.entries)) return null;
    setAssetOverrides(new Map(p.overrides || []));
    return p.site;
  } catch {
    return null;
  }
}
const previewSite = previewContent();
let site = previewSite || initialSite;
let entries = prepareEntries(site);
let waystones = new Waystones(scene, entries);
const audio = new DesertAudio();
const post = createPost(renderer, scene, camera);
post.setSize(window.innerWidth, window.innerHeight, pixelRatio);

// click-to-walk marker
const marker = new THREE.Mesh(
  new THREE.RingGeometry(0.28, 0.36, 40).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.2, 0.8), transparent: true, opacity: 0, depthWrite: false }),
);
marker.renderOrder = 5;
scene.add(marker);
let markerLife = 0;

// ---------------------------------------------------------------------------
// World seed
// ---------------------------------------------------------------------------
const REGIONS = [
  'The Deep Desert',
  'Habbanya Erg',
  'The Funeral Plain',
  'Cielago Depression',
  'The Great Flat',
  'Tanzerouft',
  'The Minor Erg',
  'Sihaya Ridge',
  'False Wall South',
  'The Broken Land',
  'Plaster Basin',
  'Red Chasm Sands',
];
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
let seedValue = 0;
function applySeed(seed) {
  seedValue = seed >>> 0;
  const rng = mulberry32(seedValue);
  const sx = Math.floor(rng() * 20000) - 10000;
  const sz = Math.floor(rng() * 20000) - 10000;
  setSeed(sx, sz);
  terrain.uniforms.uSeed.value.set(sx, sz);
  ui.setRegion(REGIONS[seedValue % REGIONS.length]);
  try {
    history.replaceState(null, '', `#seed=${seedValue}`);
  } catch {
    /* sandboxed frames may forbid this */
  }
}
function findSpawn() {
  const g = { x: 0, z: 0 };
  let best = { x: 0, z: 0, s: Infinity };
  for (let i = 0; i < 60; i++) {
    const a = i * 2.39996;
    const r = 1.5 * Math.sqrt(i);
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    groundGradient(x, z, g);
    const s = Math.hypot(g.x, g.z);
    if (s < best.s) best = { x, z, s };
    if (s < 0.12) break;
  }
  return best;
}

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------
let entered = false;
const ui = new UI({
  enter: () => enterDesert(),
  enterRead: () => {
    enterDesert();
    selectStone(entries[0].id);
  },
  time: (t) => setTimeOfDay(t),
  thumper: () => plantThumper(),
  sandwalk: () => toggleSandwalk(),
  storm: () => toggleStorm(),
  seed: () => newWorld(),
  sound: () => toggleSound(),
  arcade: () => goToGames(),
  atomics: () => launchpad.show(),
});

function enterDesert() {
  if (entered) return;
  entered = true;
  ui.enter();
  if (soundOn) {
    audio.start();
    audio.resume();
  }
  cam.heightTarget = 20;
  player.rhythm = 0;
  canvas.focus();
  setTimeout(() => {
    if (!codex.found.size) ui.toast('The waystones are glowing. Follow the light.', 4);
  }, 900);
}

// ---------------------------------------------------------------------------
// Resume: waystones in the world, codex + dossier in the HUD
// ---------------------------------------------------------------------------
const NUMBER_WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
function applyIntro() {
  const profile = site.profile || {};
  document.getElementById('introName').textContent = profile.name || '';
  document.getElementById('introTitle').textContent = profile.headline || profile.title || '';
  document.getElementById('wordmark').textContent = profile.name || '';
  const stones = entries.filter((e) => e.kind !== 'project').length;
  const pads = entries.length - stones;
  document.getElementById('introLede').textContent =
    profile.intro ||
    `${NUMBER_WORDS[stones] ?? stones} waystones stand in the deep desert, one for every chapter of the road so far.` +
      (pads ? ` The other way, ${pads > 1 ? 'landing pads hold' : 'a landing pad holds'} what I'm building now.` : '') +
      ' Walk out and read them.' +
      (['worm', 'run', 'fly'].some((id) => !(site.games && site.games[id] && site.games[id].hidden)) ? ' Off to one side, there are games to play.' : '');
  document.getElementById('introLinks').replaceChildren(...contactLinks({ profile, site: site.site || {} }));
}
applyIntro();

const codex = new Codex({
  profile: site.profile,
  site: site.site || {},
  entries,
  handlers: {
    select: (id) => selectStone(id),
    close: () => closeDossier(),
    step: (d) => stepStone(d),
  },
});

let travel = null; // the stone the walker is heading for, when sent from the codex
let suppressId = null; // closed by hand: don't reopen until the walker has left it
let nearId = null; // the stone the walker is standing at
let finaleTimer = 0;

function openStone(s, source, force = false) {
  codex.open(s.entry, source, force);
  waystones.selectedId = s.entry.id;
}

// Swap in new content (the management editor does this live): rebuild the stones and pads,
// the index, labels and intro, and lay the world out again. Found stones stay found.
function applyContent(next) {
  site = next;
  entries = prepareEntries(site);
  const found = new Set(waystones.stones.filter((s) => s.found).map((s) => s.entry.id));
  const selected = waystones.selectedId;
  waystones.dispose();
  waystones = new Waystones(scene, entries);
  for (const s of waystones.stones) if (found.has(s.entry.id)) s.found = true;
  waystones.selectedId = selected && waystones.byId(selected) ? selected : null;
  travel = null;
  nearId = null;
  const seed = site.world && Number.isFinite(site.world.seed) ? site.world.seed >>> 0 : DEFAULT_SEED;
  if (EDIT && seed !== seedValue) newWorld(seed);
  else layoutRoad(spawnPoint.x, spawnPoint.z);
  if (EDIT && site.world && Number.isFinite(site.world.time)) setTimeOfDay(site.world.time);
  codex.setContent({ profile: site.profile, site: site.site || {}, entries });
  applyIntro();
}

// Pick a stone from the codex, a label or prev/next: read it now, and walk over to it.
function selectStone(id) {
  const s = waystones.byId(id);
  if (!s) return;
  suppressId = null;
  openStone(s, 'codex');
  if (window.innerWidth <= 760) codex.toggleCollapsed(true);
  const d = Math.hypot(s.x - player.pos.x, s.z - player.pos.z);
  if (d > s.wake) {
    const p = waystones.approachPoint(s, player.pos.x, player.pos.z);
    walkTo(p.x, p.z, d > 9);
    travel = s;
  }
}

function closeDossier() {
  if (!codex.isOpen) return;
  suppressId = codex.currentId;
  // closing the stone you were walking to calls off the walk
  if (travel && travel.entry.id === codex.currentId) {
    travel = null;
    clickTarget = null;
  }
  codex.close();
  waystones.selectedId = null;
}

function stepStone(dir) {
  const i = entries.findIndex((e) => e.id === codex.currentId);
  const n = entries.length;
  selectStone(entries[i < 0 ? (dir > 0 ? 0 : n - 1) : (i + dir + n) % n].id);
}

function discover(s) {
  s.found = true;
  codex.setFound(s.entry.id);
  waystones.awaken(s, particles, trails, atmos.litTint);
  audio.chime(s.kind);
  const n = codex.found.size;
  if (n === entries.length) {
    ui.toast('Every waystone found. The desert stirs…', 4);
    finaleTimer = 3.5;
  } else {
    ui.toast(n === 1 ? 'A waystone wakes as you near it.' : `${n} of ${entries.length} waystones found.`, 3);
  }
}

function arriveAt(s) {
  if (travel === s) travel = null;
  if (!s.found) discover(s);
  // passing another stone on the way to the one you picked: don't swap what you're reading
  if (codex.isOpen && codex.source === 'codex' && travel && travel !== s) return;
  if (s.entry.id === suppressId) return;
  openStone(s, 'proximity');
}

function updateWaystones(dt, t, vr) {
  const near = waystones.update(dt, t, {
    px: editor ? editor.focus.x : player.pos.x,
    pz: editor ? editor.focus.z : player.pos.z,
    camYaw: cam.yaw,
    focusX: cam.focus.x,
    focusZ: cam.focus.z,
    viewR: vr,
    night: atmos.isNight,
    particles,
    tint: atmos.litTint,
  });
  audio.thopter(Math.max(waystones.thrum, games.thrum));
  const s = near.stone;
  const id = entered && s && near.rel < 0 ? s.entry.id : null;
  if (id !== nearId) {
    if (nearId && suppressId === nearId) suppressId = null;
    nearId = id;
    if (id) arriveAt(s);
  }
  // walking away from a stone that opened itself lets it fall quiet
  if (codex.isOpen && codex.source === 'proximity') {
    const cur = waystones.byId(codex.currentId);
    if (cur && Math.hypot(cur.x - player.pos.x, cur.z - player.pos.z) > cur.wake + 4.5) {
      codex.close();
      waystones.selectedId = null;
    }
  }
  if (finaleTimer > 0) {
    finaleTimer -= dt;
    if (finaleTimer <= 0) finale();
  }
}

// Every stone read: a worm breaches in salute, up-screen where it can be seen.
function finale() {
  if (worm.active) return;
  const ux = -Math.sin(cam.yaw);
  const uz = -Math.cos(cam.yaw);
  const x = player.pos.x + ux * 20;
  const z = player.pos.z + uz * 20;
  worm.summon({ kind: 'finale', x, z }, Math.atan2(uz, ux) + (Math.random() - 0.5) * 0.8, 90);
}

// The layout must come out the same for everyone in a given world (they can see each
// other), so it depends only on the seed, never on the screen or the current view.
// The road sets off toward the lower right of the starting view, which keeps the first
// stone on screen on wide and tall screens alike; the project pads go the other way.
const START_YAW = THREE.MathUtils.degToRad(12);
let spawnPoint = { x: 0, z: 0 };
function layoutRoad(x, z) {
  spawnPoint = { x, z };
  // screen right = (cos yaw, -sin yaw), screen up = (-sin yaw, -cos yaw) on the ground
  const r = 0.45;
  const u = -0.89;
  const ux = Math.cos(START_YAW) * r - Math.sin(START_YAW) * u;
  const uz = -Math.sin(START_YAW) * r - Math.cos(START_YAW) * u;
  const heading = Math.atan2(uz, ux);
  // the games go off to the right; no rocks on their tracks, no stones on their sites
  games.layout(x, z, heading, site.games);
  const key = JSON.stringify([x, z, heading, site.games || null, seedValue]);
  if (key !== gamesLayoutKey) {
    gamesLayoutKey = key;
    rocks.setExclusion((px, pz, rr) => games.corridor(px, pz, rr));
  }
  waystones.layout(x, z, heading, (px, pz, m) => rocks.nearRock(px, pz, m) || games.keepsClear(px, pz, m));
}
let gamesLayoutKey = '';

const _anchor = new THREE.Vector3();
const _base = new THREE.Vector3();
const _me = new THREE.Vector3();
const labelViews = new Map();
function updateLabels() {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const aspect = W / H;
  _me.copy(player.pos).project(camera);
  for (const s of waystones.stones) {
    waystones.anchor(s, _anchor).project(camera);
    _base.set(s.x, s.y, s.z).project(camera);
    const sx = (_anchor.x * 0.5 + 0.5) * W;
    const sy = (-_anchor.y * 0.5 + 0.5) * H;
    // labels are clamped inside the screen sideways, so only fade once the stone itself leaves
    const edge = Math.min(sx * 1.75, (W - sx) * 1.75, sy - 56, H - 20 - sy);
    const dist = Math.hypot(s.x - player.pos.x, s.z - player.pos.z);
    let v = labelViews.get(s.entry.id);
    if (!v) labelViews.set(s.entry.id, (v = {}));
    v.sx = sx;
    v.sy = sy;
    v.alpha = Math.min(1, Math.max(0, edge / 70));
    v.dist = dist;
    v.here = dist < s.wake;
    v.angle = Math.atan2(-(_base.y - _me.y), (_base.x - _me.x) * aspect);
  }
  codex.update(labelViews);
}

function setTimeOfDay(t) {
  atmos.setTime(t);
  ui.setTime(atmos.time);
}

let sandwalkOn = false;
function toggleSandwalk() {
  sandwalkOn = !sandwalkOn;
  player.sandwalk = sandwalkOn;
  ui.setToggle('sandwalk', sandwalkOn);
  ui.toast(sandwalkOn ? 'Sandwalk — a broken gait, like sand settling.' : 'You walk with an even stride.', 3);
}

let stormTarget = 0;
let storm = 0;
function toggleStorm() {
  stormTarget = stormTarget > 0.5 ? 0 : 1;
  ui.setToggle('storm', stormTarget > 0.5);
  ui.toast(stormTarget > 0.5 ? 'A Coriolis storm rolls in over the erg.' : 'The storm passes.', 3.5);
}

// muted until the visitor turns it on (the Sound button or M)
let soundOn = false;
function toggleSound() {
  soundOn = !soundOn;
  audio.setEnabled(soundOn);
  if (soundOn) {
    audio.start();
    audio.resume();
  }
  ui.setToggle('sound', soundOn);
}

let thumper = null;
function plantThumper() {
  if (!entered) return;
  const fx = Math.sin(player.yaw);
  const fz = Math.cos(player.yaw);
  const x = player.pos.x + fx * 1.2;
  const z = player.pos.z + fz * 1.2;
  if (rocks.nearRock(x, z, 0.8) || waystones.nearStone(x, z, 0.8)) {
    ui.toast('A thumper needs open sand.', 2.5);
    return;
  }
  if (thumper && thumper.alive) thumper.remove();
  thumper = new Thumper(scene, x, z);
  particles.burst(x, groundHeight(x, z), z, 40, 2.2, atmos.litTint, { radius: 0.2, dust: 0.3, puff: 0.2, grow: 0.6 });
  ui.toast('The thumper drums. Get clear of it.', 3.5);
}

let transitioning = false;
function newWorld(seed) {
  if (transitioning) return;
  transitioning = true;
  if (games.active) games.stop(true);
  ui.fade(true);
  setTimeout(() => {
    applySeed(seed ?? Math.floor(Math.random() * 0xffffffff));
    rocks.reset();
    trails.clear();
    particles.clear();
    clearCraters();
    if (thumper && thumper.alive) thumper.remove();
    thumper = null;
    if (worm.active) {
      worm.active = false;
      worm.state = 'idle';
      worm.mesh.visible = false;
      worm.headGroup.visible = false;
    }
    const s = findSpawn();
    player.spawn(s.x, s.z, player.yaw);
    rocks.update(s.x, s.z);
    layoutRoad(s.x, s.z);
    minimap.reset();
    cam.focus.set(s.x, player.pos.y + 0.9, s.z);
    clickTarget = null;
    travel = null;
    nearId = null;
    suppressId = null;
    setTimeout(() => {
      ui.fade(false);
      transitioning = false;
      ui.toast(ui.region.textContent, 3);
    }, 250);
  }, 900);
}

// ---------------------------------------------------------------------------
// Camera rig: diagonal orthographic view that follows the walker
// ---------------------------------------------------------------------------
const PITCH = THREE.MathUtils.degToRad(37);
const cam = {
  yaw: START_YAW,
  yawTarget: START_YAW,
  pitch: PITCH,
  pitchTarget: PITCH, // the games tilt the view
  height: 30,
  heightTarget: 30,
  focus: new THREE.Vector3(),
  dist: 180,
  shake: 0,
  cine: 0,
  strike: 0,
};
const camDir = new THREE.Vector3();
const camRight = new THREE.Vector3();
const camUp = new THREE.Vector3();
let sheetShift = 0; // px the view is lifted by while a card covers the bottom of a phone
let sheetShiftX = 0; // px the walker is moved left by while a card covers the middle
const _focusTarget = new THREE.Vector3();

function viewRadius(h) {
  const aspect = window.innerWidth / window.innerHeight;
  return Math.hypot((h * aspect) / 2, h / 2 / Math.sin(cam.pitch));
}

function updateCamera(dt, t) {
  // a game in progress frames its own view
  const gv = games.view(window.innerWidth / window.innerHeight);
  if (gv) {
    if (gv.yaw !== null && gv.yaw !== undefined) {
      const d = ((((gv.yaw - cam.yaw + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
      cam.yawTarget = cam.yaw + d;
    }
    cam.pitchTarget = gv.pitch;
  }
  cam.pitch += (cam.pitchTarget - cam.pitch) * (1 - Math.exp(-dt * 3));
  let dy = cam.yawTarget - cam.yaw;
  cam.yaw += dy * (1 - Math.exp(-dt * (gv ? 3 : 5)));

  // cinematic framing when the worm is near
  let wantCine = 0;
  let wx = 0;
  let wz = 0;
  let wy = 0;
  if (worm.active && worm.state !== 'leave' && !gv) {
    if (worm.state === 'breach' && worm.breachPoint) {
      wx = worm.breachPoint.x + worm.breachDir.x * 7;
      wz = worm.breachPoint.z + worm.breachDir.z * 7;
      wy = worm.breachPoint.y + 9;
      wantCine = 1;
    } else {
      wx = worm.head.x;
      wz = worm.head.z;
      wy = groundHeight(wx, wz);
      const d = Math.hypot(wx - player.pos.x, wz - player.pos.z);
      wantCine = d < 55 ? 0.6 : 0;
    }
  }
  cam.cine += (wantCine - cam.cine) * (1 - Math.exp(-dt * (wantCine > cam.cine ? 2.5 : 0.8)));

  const lead = 0.45;
  if (editor) _focusTarget.copy(editor.focus);
  else if (gv) _focusTarget.copy(gv.focus);
  else _focusTarget.set(player.pos.x + player.vel.x * lead, player.bodyY + 0.2, player.pos.z + player.vel.z * lead);
  // keep the walker clear of an open card: above it when it's a sheet along the bottom
  // (phones), beside it when it's a panel that reaches the middle (narrow or sideways screens)
  let wantY = 0;
  let wantX = 0;
  const card = !editor && !gv ? codex.sheetRect() : null;
  if (card) {
    const W = window.innerWidth;
    const H = window.innerHeight;
    if (card.width > W * 0.9) {
      const above = (Math.min(H * 0.22, 130) + card.top) / 2; // middle of the open sky above the card
      wantY = Math.max(0, H / 2 - above);
    } else if (card.left < W / 2 + 40) {
      const index = codex.root.getBoundingClientRect();
      const from = !codex.root.classList.contains('collapsed') && index.right < card.left - 120 ? index.right : 0;
      wantX = Math.max(0, W / 2 - (from + card.left) / 2);
    }
  }
  sheetShift += (wantY - sheetShift) * (1 - Math.exp(-dt * 4));
  sheetShiftX += (wantX - sheetShiftX) * (1 - Math.exp(-dt * 4));
  if (sheetShift > 0.5) _focusTarget.addScaledVector(camUp, (-sheetShift * cam.height) / window.innerHeight);
  if (sheetShiftX > 0.5) _focusTarget.addScaledVector(camRight, (sheetShiftX * cam.height) / window.innerHeight);
  let h = gv ? gv.height : cam.heightTarget;
  if (cam.cine > 0.001) {
    const k = 0.5 * cam.cine;
    _focusTarget.x += (wx - _focusTarget.x) * k;
    _focusTarget.y += (wy - _focusTarget.y) * k;
    _focusTarget.z += (wz - _focusTarget.z) * k;
    const d = Math.hypot(wx - player.pos.x, wz - player.pos.z);
    const need = Math.min(46, Math.max(36, d * 1.3 + 24));
    h = cam.heightTarget + Math.max(0, need - cam.heightTarget) * cam.cine;
  }
  // pull back to the widest view while atomics are falling, so the strike is seen
  cam.strike += ((atomics.active ? 1 : 0) - cam.strike) * (1 - Math.exp(-dt * (atomics.active ? 1.5 : 0.6)));
  if (cam.strike > 0.001) h = Math.max(h, cam.heightTarget + (46 - cam.heightTarget) * cam.strike);
  if (editor) cam.focus.copy(_focusTarget);
  else cam.focus.lerp(_focusTarget, 1 - Math.exp(-dt * 4));
  cam.height += (h - cam.height) * (1 - Math.exp(-dt * 3));

  camDir.set(Math.sin(cam.yaw) * Math.cos(cam.pitch), Math.sin(cam.pitch), Math.cos(cam.yaw) * Math.cos(cam.pitch));
  camRight.set(Math.cos(cam.yaw), 0, -Math.sin(cam.yaw));
  camUp.crossVectors(camDir, camRight);

  cam.shake *= Math.exp(-dt * 2.2);
  const sh = cam.shake * 0.45 + storm * 0.02;
  const sx = (vnoise(t * 17.0, 1.3) - 0.5) * 2 * sh;
  const sy = (vnoise(t * 19.0, 7.9) - 0.5) * 2 * sh;

  camera.position.copy(cam.focus).addScaledVector(camDir, cam.dist);
  camera.position.addScaledVector(camRight, sx).addScaledVector(camUp, sy);
  camera.up.set(0, 1, 0);
  camera.lookAt(camera.position.x - camDir.x, camera.position.y - camDir.y, camera.position.z - camDir.z);

  const aspect = window.innerWidth / window.innerHeight;
  camera.top = cam.height / 2;
  camera.bottom = -cam.height / 2;
  camera.left = (-cam.height * aspect) / 2;
  camera.right = (cam.height * aspect) / 2;
  camera.near = 1;
  camera.far = cam.dist + 260;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------
const keys = new Set();
let clickTarget = null;
let clickRun = false;
let pointerHeld = false;
let lastClick = 0;

function isTyping(e) {
  const t = e.target;
  return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA') && t.type !== 'range';
}

window.addEventListener('keydown', (e) => {
  if (EDIT || isTyping(e)) return;
  if (e.target && e.target.type === 'range' && e.code.startsWith('Arrow')) return;
  if (!entered && (e.code === 'Enter' || e.code === 'Space')) {
    e.preventDefault();
    enterDesert();
    return;
  }
  // a game in progress takes the keys (sound and hide-the-interface still work)
  if (games.active) {
    if (games.key(e, true)) e.preventDefault();
    else if (!e.repeat && e.code === 'KeyM') toggleSound();
    else if (!e.repeat && e.code === 'KeyH') ui.toggleHidden();
    return;
  }
  if ((e.code === 'Space' || e.code === 'Enter') && !e.repeat && games.tryStart()) {
    e.preventDefault();
    return;
  }
  keys.add(e.code);
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
  if (e.repeat || !entered) return;
  switch (e.code) {
    case 'KeyT':
      plantThumper();
      break;
    case 'KeyC':
      toggleSandwalk();
      break;
    case 'KeyG':
      toggleStorm();
      break;
    case 'KeyN':
      newWorld();
      break;
    case 'KeyP':
      goToGames();
      break;
    case 'KeyM':
      toggleSound();
      break;
    case 'KeyH':
      ui.toggleHidden();
      break;
    case 'KeyR':
      codex.toggleCollapsed();
      break;
    case 'Escape':
      closeDossier();
      break;
    case 'Comma':
      stepStone(-1);
      break;
    case 'Period':
      stepStone(1);
      break;
    case 'KeyQ':
      cam.yawTarget -= Math.PI / 4;
      break;
    case 'KeyE':
      cam.yawTarget += Math.PI / 4;
      break;
    case 'Minus':
    case 'NumpadSubtract':
      zoomBy(1.35);
      break;
    case 'Equal':
    case 'NumpadAdd':
      zoomBy(1 / 1.35);
      break;
    case 'BracketLeft':
      setTimeOfDay(atmos.time - 0.25);
      break;
    case 'BracketRight':
      setTimeOfDay(atmos.time + 0.25);
      break;
    default:
      break;
  }
});
window.addEventListener('keyup', (e) => {
  keys.delete(e.code);
  if (games.active) games.key(e, false);
});
window.addEventListener('blur', () => {
  keys.clear();
  pointerHeld = false;
});

const raycaster = new THREE.Raycaster();
const _ndc = new THREE.Vector2();
function pickGround(clientX, clientY) {
  _ndc.set((clientX / window.innerWidth) * 2 - 1, -(clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(_ndc, camera);
  const o = raycaster.ray.origin;
  const d = raycaster.ray.direction;
  let t = cam.dist - 60;
  let prev = t;
  const p = new THREE.Vector3();
  let hit = false;
  for (let i = 0; i < 400; i++) {
    p.copy(o).addScaledVector(d, t);
    if (p.y < groundHeight(p.x, p.z)) {
      hit = true;
      break;
    }
    prev = t;
    t += 0.4;
  }
  if (!hit) return null;
  let a = prev;
  let b = t;
  for (let i = 0; i < 12; i++) {
    const m = (a + b) / 2;
    p.copy(o).addScaledVector(d, m);
    if (p.y < groundHeight(p.x, p.z)) b = m;
    else a = m;
  }
  p.copy(o).addScaledVector(d, (a + b) / 2);
  return p;
}
function setClickTarget(e) {
  const p = pickGround(e.clientX, e.clientY);
  if (!p) return;
  travel = null;
  clickTarget = p;
  marker.position.set(p.x, p.y + 0.06, p.z);
  markerLife = 1;
}
function walkTo(x, z, run) {
  const y = groundHeight(x, z);
  clickTarget = new THREE.Vector3(x, y, z);
  clickRun = run;
  marker.position.set(x, y + 0.06, z);
  markerLife = 1;
}
canvas.addEventListener('pointerdown', (e) => {
  if (!entered) return;
  if (e.button !== 0) return;
  audio.resume();
  try {
    canvas.setPointerCapture(e.pointerId);
  } catch {
    /* the pointer is already gone */
  }
  if (games.active) {
    games.pointer('down', e, pickGround(e.clientX, e.clientY));
    return;
  }
  if (pinch || (e.pointerType === 'touch' && touches.size > 1)) return;
  pointerHeld = true;
  const now = performance.now();
  clickRun = now - lastClick < 320;
  lastClick = now;
  setClickTarget(e);
});
canvas.addEventListener('pointermove', (e) => {
  if (games.active) {
    if (e.buttons) games.pointer('move', e, pickGround(e.clientX, e.clientY));
    return;
  }
  if (pointerHeld && !pinch) setClickTarget(e);
});
const endPointer = (e) => {
  pointerHeld = false;
  if (games.active) games.pointer('up', e, null);
};
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);
canvas.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault();
    if (EDIT || games.active) return; // the editor zooms further out; games set their own view
    zoomBy(Math.exp(e.deltaY * 0.0012));
  },
  { passive: false },
);
canvas.addEventListener('contextmenu', (e) => e.preventDefault());

const input = { x: 0, z: 0, run: false };
const HOLD = { x: 0, z: 0, run: false };

// ---- zoom: the wheel, − and =, the buttons by the minimap, and pinching on a phone ----
const ZOOM_MIN = 9;
const ZOOM_MAX = 80;
function zoomBy(f) {
  if (EDIT || games.active) return;
  cam.heightTarget = THREE.MathUtils.clamp(cam.heightTarget * f, ZOOM_MIN, ZOOM_MAX);
}
document.getElementById('zoomIn').addEventListener('click', () => zoomBy(1 / 1.35));
document.getElementById('zoomOut').addEventListener('click', () => zoomBy(1.35));
const touches = new Map();
let pinch = null;
canvas.addEventListener('pointerdown', (e) => {
  if (e.pointerType !== 'touch') return;
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (touches.size === 2 && !games.active) {
    const [a, b] = [...touches.values()];
    pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, h: cam.heightTarget };
    // two fingers mean zoom, not walk
    clickTarget = null;
    travel = null;
    markerLife = 0;
    pointerHeld = false;
  }
});
canvas.addEventListener('pointermove', (e) => {
  if (!touches.has(e.pointerId)) return;
  touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pinch && touches.size === 2) {
    const [a, b] = [...touches.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
    cam.heightTarget = THREE.MathUtils.clamp((pinch.h * pinch.d) / d, ZOOM_MIN, ZOOM_MAX);
  }
});
const endTouch = (e) => {
  touches.delete(e.pointerId);
  if (touches.size < 2) pinch = null;
};
canvas.addEventListener('pointerup', endTouch);
canvas.addEventListener('pointercancel', endTouch);
function readInput(t) {
  let sx = 0;
  let sy = 0;
  if (keys.has('KeyW') || keys.has('ArrowUp')) sy += 1;
  if (keys.has('KeyS') || keys.has('ArrowDown')) sy -= 1;
  if (keys.has('KeyD') || keys.has('ArrowRight')) sx += 1;
  if (keys.has('KeyA') || keys.has('ArrowLeft')) sx -= 1;
  const shift = keys.has('ShiftLeft') || keys.has('ShiftRight');
  input.run = shift;
  if (!entered) {
    // attract mode: an unhurried wander while the title is up
    const a = t * 0.07 + 0.6;
    input.x = Math.cos(a) * 0.55;
    input.z = Math.sin(a) * 0.55;
    input.run = false;
    return input;
  }
  if (sx !== 0 || sy !== 0) {
    clickTarget = null;
    travel = null;
    const l = Math.hypot(sx, sy);
    sx /= l;
    sy /= l;
    // screen right = (cos yaw, 0, -sin yaw); screen up = (-sin yaw, 0, -cos yaw)
    input.x = Math.cos(cam.yaw) * sx - Math.sin(cam.yaw) * sy;
    input.z = -Math.sin(cam.yaw) * sx - Math.cos(cam.yaw) * sy;
    return input;
  }
  if (clickTarget) {
    const dx = clickTarget.x - player.pos.x;
    const dz = clickTarget.z - player.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.35) {
      clickTarget = null;
      input.x = 0;
      input.z = 0;
      return input;
    }
    const m = Math.min(1, d / 1.2);
    input.x = (dx / d) * m;
    input.z = (dz / d) * m;
    input.run = shift || clickRun;
    return input;
  }
  input.x = 0;
  input.z = 0;
  return input;
}

// ---------------------------------------------------------------------------
// Sand interaction
// ---------------------------------------------------------------------------
player.onFootstep = (s) => {
  const rot = Math.atan2(Math.cos(s.yaw), Math.sin(s.yaw));
  const depth = 0.06 + 0.035 * s.run + 0.03 * s.sliding;
  const rim = 0.03 + 0.02 * s.run;
  trails.stamp(STAMP.FOOT, s.x, s.z, rot, 0.74, 0.42, depth, rim, 0.85);
  particles.footstep(s.x, s.y, s.z, s.dirX, s.dirZ, s.speed, s.run, atmos.litTint, s.sliding);
  if (entered) {
    audio.footstep(0.65 + 0.55 * s.run + s.sliding * 0.4);
    ui.step(player.time, Math.min(1, 0.4 + s.run * 0.6));
  }
};
player.onLift = (s) => {
  if (s.run > 0.5) particles.kick(s.x, s.y, s.z, s.dirX, s.dirZ, s.speed, atmos.litTint);
};

// ---------------------------------------------------------------------------
// Arcade and atomics
// ---------------------------------------------------------------------------
// The games are places in the desert (src/games/): walk onto a site's ring and play.
const games = new GameGrounds({
  scene,
  particles,
  trails,
  audio,
  tint: () => atmos.litTint,
  rockMaterial: rocks.material,
  player,
  labelLayer: document.getElementById('labels'),
  teleport: (x, z, yaw, fade) => {
    const go = () => {
      player.spawn(x, z, yaw);
      clickTarget = null;
      travel = null;
      cam.focus.set(x, player.pos.y + 0.9, z);
    };
    if (!fade) return go();
    ui.fade(true);
    setTimeout(() => {
      go();
      setTimeout(() => ui.fade(false), 120);
    }, 500);
  },
  travel: (x, z) => {
    walkTo(x, z, Math.hypot(x - player.pos.x, z - player.pos.z) > 9);
  },
  onStart: () => {
    closeDossier();
    clickTarget = null;
    travel = null;
    keys.clear();
    pointerHeld = false;
    gameCam = { yaw: cam.yawTarget, height: cam.heightTarget };
    document.body.classList.add('gaming');
  },
  onEnd: () => {
    document.body.classList.remove('gaming');
    player.root.visible = true;
    player.speedMul = 1;
    cam.pitchTarget = PITCH;
    if (gameCam) {
      cam.yawTarget = gameCam.yaw;
      cam.heightTarget = gameCam.height;
    }
    gameCam = null;
    canvas.focus();
  },
});
let gameCam = null;

// ---------------------------------------------------------------------------
// Minimap and full map
// ---------------------------------------------------------------------------
const minimap = new Minimap({
  onPick: (p) => {
    if (!entered) enterDesert();
    if (games.active) return;
    if (p.type === 'stone') selectStone(p.id);
    else if (p.type === 'game') {
      const s = games.byId.get(p.id);
      if (s) walkTo(s.startPoint.x, s.startPoint.z, Math.hypot(s.startPoint.x - player.pos.x, s.startPoint.z - player.pos.z) > 9);
    } else {
      travel = null;
      walkTo(p.x, p.z, Math.hypot(p.x - player.pos.x, p.z - player.pos.z) > 9);
    }
  },
});
let mapPathsFor = null;
let mapPaths = [];
const mapState = {
  px: 0,
  pz: 0,
  yaw: 0,
  camYaw: 0,
  focus: { x: 0, z: 0 },
  viewW: 0,
  viewD: 0,
  stones: [],
  current: null,
  paths: [],
  games: [],
  rocks: [],
  worm: null,
  spawn: { x: 0, z: 0 },
  compactRadius: 60,
};
function updateMinimap() {
  const m = mapState;
  m.px = player.pos.x;
  m.pz = player.pos.z;
  m.yaw = player.yaw;
  m.camYaw = cam.yaw;
  m.focus.x = cam.focus.x;
  m.focus.z = cam.focus.z;
  const aspect = window.innerWidth / window.innerHeight;
  m.viewW = cam.height * aspect;
  m.viewD = cam.height / Math.sin(cam.pitch);
  m.stones = waystones.stones;
  m.current = codex.currentId;
  // the road and the project path, from the start through each stone or pad in turn
  const key = `${spawnPoint.x},${spawnPoint.z}`;
  if (mapPathsFor !== waystones || mapPaths.key !== key) {
    mapPathsFor = waystones;
    const road = [spawnPoint, ...waystones.stones.filter((st) => st.kind !== 'project').map((st) => ({ x: st.x, z: st.z }))];
    const pads = [spawnPoint, ...waystones.stones.filter((st) => st.kind === 'project').map((st) => ({ x: st.x, z: st.z }))];
    mapPaths = [
      { color: 'rgba(255, 196, 140, 0.55)', points: road },
      { color: 'rgba(143, 227, 181, 0.55)', points: pads },
    ].filter((p) => p.points.length > 1);
    mapPaths.key = key;
  }
  m.paths = mapPaths;
  m.games = games.visible().map((g) => ({
    id: games.meta(g).id,
    title: games.meta(g).title,
    x: g.pos.x,
    z: g.pos.z,
    sx: g.startPoint.x,
    sz: g.startPoint.z,
    r: games.meta(g).id === 'worm' ? 9.4 : 3.4,
  }));
  m.rocks = rocks.colliders;
  m.worm = worm.active && worm.state === 'approach' ? { x: worm.head.x, z: worm.head.z } : null;
  m.spawn = spawnPoint;
  m.compactRadius = window.innerWidth <= 760 ? 48 : 62;
  minimap.update(m);
}

// P and the Games button: head for the games, one site after another
function goToGames() {
  if (!entered) enterDesert();
  if (games.active) return;
  const s = games.next(player.pos.x, player.pos.z);
  if (!s) return;
  const meta = games.meta(s);
  const d = Math.hypot(s.startPoint.x - player.pos.x, s.startPoint.z - player.pos.z);
  if (d < 1.2) return void games.start(s);
  walkTo(s.startPoint.x, s.startPoint.z, d > 9);
  ui.toast(`Heading for the ${meta.title}. Step onto the ring and press Space${games.touchMode ? ' (or tap the label)' : ''}.`, 4);
}

const launchKey = new LaunchKey();
let lastFlash = -10;
const flashEl = document.getElementById('nukeflash');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const atomics = new Atomics(scene, {
  particles,
  trails,
  hooks: {
    shake: (x, z) => {
      const d = Math.hypot(x - player.pos.x, z - player.pos.z);
      cam.shake = Math.max(cam.shake, 3 * Math.max(0.2, 1 - d / 90));
    },
    knock: (x, z) => {
      const d = Math.hypot(player.pos.x - x, player.pos.z - z);
      if (d > 40) return;
      const k = 1 - d / 40;
      player.applyImpulse(((player.pos.x - x) / (d || 1)) * 14 * k, ((player.pos.z - z) / (d || 1)) * 14 * k, 0.5 + k);
    },
    sound: (kind) => (kind === 'boom' ? audio.eruption(1.6) : audio.whistle()),
    // One full flash for a strike, faint ones for the bombs that follow it, none at all
    // with reduced motion: several bright flashes in a row would strobe.
    flash: () => {
      if (reduceMotion.matches) return;
      const now = performance.now() / 1000;
      const strong = now - lastFlash > 4;
      lastFlash = now;
      flashEl.style.setProperty('--peak', strong ? '0.85' : '0.2');
      flashEl.classList.remove('on');
      void flashEl.offsetWidth;
      flashEl.classList.add('on');
    },
  },
});

// Only the code holder can launch. The strike happens on this screen alone: nothing
// is sent anywhere.
function launch() {
  atomics.drop(strikeTargets(player.pos.x, player.pos.z));
  ui.toast('Atomics away.', 3);
}
const launchpad = new LaunchPad({ key: launchKey, onLaunch: launch, onOpen: () => keys.clear(), onClose: () => canvas.focus() });

function slideEffects(dt) {
  if (player.sliding <= 0.05 || player.speed < 0.3) return;
  const g = groundGradient(player.pos.x, player.pos.z, { x: 0, z: 0 });
  const l = Math.hypot(g.x, g.z) || 1;
  const dx = -g.x / l;
  const dz = -g.z / l;
  const amount = Math.ceil(dt * 120 * player.sliding);
  particles.cascade(player.pos.x + dx * 0.4, player.pos.y, player.pos.z + dz * 0.4, dx * 2.2, dz * 2.2, amount, atmos.litTint);
  const vr = Math.atan2(player.vel.z, player.vel.x);
  trails.stamp(STAMP.FURROW, player.pos.x, player.pos.z, vr, 0.9, 0.55, 0.035 * player.sliding, 0.02, 0.8);
  // the disturbed sheet runs on downhill
  trails.stamp(STAMP.DISTURB, player.pos.x + dx * 1.4, player.pos.z + dz * 1.4, 0, 1.6, 1.6, 0.0, 0, 0.5 * player.sliding);
}

// ---------------------------------------------------------------------------
// Worm & thumper orchestration
// ---------------------------------------------------------------------------
let wormCooldown = 12;
const mound = { x: 0, z: 0, amp: 0, dx: 1, dz: 0, r: 3.6 };
let breachAge = 99;
let onRock = false;

function handleWormEvents() {
  for (const ev of worm.events) {
    switch (ev.type) {
      case 'summoned': {
        const kind = worm.target.kind;
        ui.toast(
          kind === 'finale'
            ? 'Wormsign. Shai-Hulud rises to honour the road.'
            : kind === 'thumper'
              ? 'Wormsign. It answers the thumper.'
              : 'Wormsign! Something heard your rhythm.',
          4,
        );
        break;
      }
      case 'breach': {
        breachAge = 0;
        const R = 7;
        trails.stamp(STAMP.CRATER, ev.x, ev.z, 0, R * 3.2, R * 3.2, 1.7, 0.55, 1.0);
        addCrater(ev.x, ev.z, R, 1.7, trails.halfLife.x);
        particles.burst(ev.x, ev.y, ev.z, 1500, 16, atmos.litTint, { radius: 3.5, dust: 0.12, puff: 1.5, grow: 1.9, chunk: 2.2, dustAlpha: 0.17 });
        cam.shake = Math.max(cam.shake, 1.6);
        audio.eruption(1);
        const d = Math.hypot(player.pos.x - ev.x, player.pos.z - ev.z);
        if (d < 24) {
          const k = 1 - d / 24;
          const ax = (player.pos.x - ev.x) / (d || 1);
          const az = (player.pos.z - ev.z) / (d || 1);
          player.applyImpulse(ax * 10 * k, az * 10 * k, 0.4 + 0.8 * k);
        }
        break;
      }
      case 'swallow':
        if (worm.target.kind === 'thumper' && thumper && thumper.alive) {
          thumper.remove();
          thumper = null;
        }
        break;
      case 'dive': {
        trails.stamp(STAMP.CRATER, ev.x, ev.z, 0, 5 * 3.2, 5 * 3.2, 1.0, 0.4, 1.0);
        addCrater(ev.x, ev.z, 5, 1.0, trails.halfLife.x);
        particles.burst(ev.x, ev.y, ev.z, 700, 11, atmos.litTint, { radius: 3, dust: 0.15, puff: 1.3, grow: 1.7, chunk: 1.6, dustAlpha: 0.17 });
        cam.shake = Math.max(cam.shake, 0.9);
        audio.eruption(0.7);
        break;
      }
      case 'lost':
        ui.toast(ev.reason === 'rock' ? 'Rock beneath your feet. The worm turns away.' : 'The worm has lost your rhythm.', 3.5);
        break;
      case 'gone':
        wormCooldown = 30;
        break;
      default:
        break;
    }
  }
  worm.events.length = 0;
}

function updateWorm(dt, t) {
  wormCooldown -= dt;
  // rhythmic walking on open sand calls a worm
  if (entered && !worm.active && wormCooldown <= 0 && player.rhythm >= 0.999 && !onRock) {
    worm.summon({ kind: 'player', x: player.pos.x, z: player.pos.z }, Math.random() * Math.PI * 2, 95);
  }
  if (worm.active && worm.state === 'approach' && worm.target.kind === 'player') {
    if (onRock) worm.dismiss('rock');
    else if (player.rhythm < 0.72) worm.dismiss('rhythm');
  }

  worm.update(dt, { playerPos: player.pos });
  handleWormEvents();

  // sand heave over the worm while it runs shallow
  breachAge += dt;
  let ampTarget = 0;
  if (worm.active) {
    if (worm.state === 'approach') {
      mound.x = worm.head.x;
      mound.z = worm.head.z;
      mound.dx = worm.dir.x;
      mound.dz = worm.dir.z;
      const l = Math.hypot(mound.dx, mound.dz) || 1;
      mound.dx /= l;
      mound.dz /= l;
      ampTarget = 1.25;
    } else if (worm.state === 'breach' && !worm.breached) {
      mound.x = worm.head.x;
      mound.z = worm.head.z;
      ampTarget = 2.1;
    } else if (worm.state === 'breach') {
      mound.x = worm.breachPoint.x;
      mound.z = worm.breachPoint.z;
      ampTarget = Math.max(0, 1.6 - breachAge * 0.6);
    }
  }
  mound.amp += (ampTarget - mound.amp) * (1 - Math.exp(-dt * 2.5));
  terrain.uniforms.uWorm.value.set(mound.x, mound.z, mound.amp, mound.r);
  terrain.uniforms.uWormDir.value.set(mound.dx, mound.dz);

  if (worm.active) {
    const tint = atmos.litTint;
    if (worm.state === 'approach' || (worm.state === 'breach' && !worm.breached)) {
      // spray + a churned track behind the mound
      const n = Math.ceil(dt * 160);
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 1.5 + Math.random() * 2.5;
        const x = mound.x + Math.cos(a) * r;
        const z = mound.z + Math.sin(a) * r;
        const y = groundHeight(x, z) + mound.amp * 0.6;
        particles.spawn(0, x, y, z, Math.cos(a) * 2.2, 1.5 + Math.random() * 2.5, Math.sin(a) * 2.2, 0.03 + Math.random() * 0.04, 2, particles.sandColor.clone().multiply(tint), 0.9, { stretch: 0.04, grav: 9.8, drag: 0.3 });
      }
      if (Math.random() < dt * 10) {
        particles.burst(mound.x, groundHeight(mound.x, mound.z) + 0.5, mound.z, 6, 2.5, tint, { radius: 2.5, dust: 1.2, puff: 1.2, grow: 1.4 });
      }
      trails.stamp(STAMP.DISTURB, mound.x - mound.dx * 2, mound.z - mound.dz * 2, 0, 8, 8, 0.12, 0, 1);
      const d = Math.hypot(mound.x - player.pos.x, mound.z - player.pos.z);
      cam.shake = Math.max(cam.shake, Math.max(0, 1 - d / 40) * 0.5);
    }
    // where the body pierces the sand
    for (const c of worm.crossings) {
      const y = groundHeight(c.x, c.z);
      const n = Math.ceil(dt * 90);
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 2.5 + Math.random() * 1.8;
        particles.spawn(0, c.x + Math.cos(a) * r, y + 0.2, c.z + Math.sin(a) * r, Math.cos(a) * 3, 2 + Math.random() * 4, Math.sin(a) * 3, 0.03 + Math.random() * 0.05, 2.5, particles.sandColor.clone().multiply(tint), 0.9, { stretch: 0.05, grav: 9.8, drag: 0.3 });
      }
      if (Math.random() < dt * 6) particles.burst(c.x, y + 0.5, c.z, 4, 3, tint, { radius: 3, dust: 1.5, puff: 1.5, grow: 1.5 });
      trails.stamp(STAMP.DISTURB, c.x, c.z, 0, 10, 10, 0.25, 0, 1);
    }
  }
}

function wormLevel() {
  if (!worm.active) return 0;
  const d = Math.hypot(worm.head.x - player.pos.x, worm.head.z - player.pos.z);
  const base = worm.state === 'leave' ? 0.35 : worm.state === 'breach' ? 1 : 0.75;
  return Math.max(0, 1 - d / 120) * base;
}

function updateThumper(dt) {
  if (!thumper || !thumper.alive) return;
  if (thumper.update(dt)) {
    const d = Math.hypot(thumper.x - player.pos.x, thumper.z - player.pos.z);
    const y = groundHeight(thumper.x, thumper.z);
    particles.ring(thumper.x, y, thumper.z, 0.35, 18, atmos.litTint);
    trails.stamp(STAMP.RING, thumper.x, thumper.z, 0, 2.6, 2.6, 0, 0.02, 0.6);
    audio.thump(d);
    cam.shake = Math.max(cam.shake, Math.max(0, 1 - d / 20) * 0.12);
    if (thumper.beats >= 4) {
      if (!worm.active) {
        worm.summon({ kind: 'thumper', x: thumper.x, z: thumper.z }, Math.random() * Math.PI * 2, 85);
      } else if (worm.state === 'approach' && worm.target.kind === 'player') {
        worm.target = { kind: 'thumper', x: thumper.x, z: thumper.z };
        ui.toast('The worm turns toward the thumper.', 3);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Wind
// ---------------------------------------------------------------------------
const wind = { strength: 0.5, gust: 0, vel: new THREE.Vector3(), phase: 0 };
function updateWind(dt, t) {
  const g = vnoise(t * 0.32, 3.1);
  wind.gust = THREE.MathUtils.smoothstep(g, 0.55, 0.85);
  wind.strength = 0.3 + 0.35 * vnoise(t * 0.045, 7.7) + wind.gust * 0.45 + storm * 1.3;
  const speed = 1.8 + wind.strength * 4.5;
  wind.vel.set(WIND.x * speed, 0, WIND.z * speed);
  wind.phase += dt * (0.35 + wind.strength * 0.9);
}

// ---------------------------------------------------------------------------
// Resize & adaptive resolution
// ---------------------------------------------------------------------------
// Resizing the canvas wipes it. Done after a frame has been drawn, the browser shows
// that empty canvas for a frame: a black flash. So size changes only ever happen at
// the start of a frame, just before it is drawn.
let resizePending = false;
function onResize() {
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  post.setSize(window.innerWidth, window.innerHeight, pixelRatio);
}
window.addEventListener('resize', () => {
  resizePending = true;
});

// Startup: the scene first renders hidden behind the loading screen (faded to the
// page colour in the grade pass). Those frames settle the resolution, so the sharpness
// never visibly steps once people can see the page; then the page is revealed.
const startup = { frames: 0, elapsed: 0, acc: 0, n: 0, revealed: false, fadeFrom: -1 };
post.grade.uniforms.uFadeColor.value.setRGB(0x1a / 255, 0x0f / 255, 0x08 / 255); // the page background
function settleResolution(realDt) {
  if (startup.revealed) return;
  startup.frames++;
  startup.elapsed += realDt;
  // the first few frames compile shaders and say nothing about speed
  if (startup.frames > 4 && !lockedPR) {
    startup.acc += realDt;
    startup.n++;
    if (startup.acc >= 0.3 && startup.n >= 5) {
      const avg = startup.acc / startup.n;
      startup.acc = 0;
      startup.n = 0;
      let next = pixelRatio;
      if (avg > 0.024 && pixelRatio > 0.75) next = Math.max(0.75, pixelRatio - 0.25);
      else if (avg < 0.0125 && pixelRatio < MAX_PR) next = Math.min(MAX_PR, pixelRatio + 0.25);
      if (next !== pixelRatio) {
        pixelRatio = next;
        resizePending = true;
      } else {
        reveal(); // a full window at this resolution with nothing to change
        return;
      }
    }
  }
  if (startup.elapsed > 3 || (lockedPR && startup.frames > 4)) reveal();
}
function reveal() {
  if (startup.revealed) return;
  startup.revealed = true;
  // Wait for the web fonts so text doesn't visibly swap, but never more than 2 s: the
  // font stylesheet loads without blocking the page and may be slow or blocked.
  Promise.race([fontsLoaded(), new Promise((r) => setTimeout(r, 2000))]).then(() => {
    document.body.classList.add('ready');
  });
}
function fontsLoaded() {
  const link = document.getElementById('fonts');
  const sheet =
    !link || link.media === 'all'
      ? Promise.resolve()
      : new Promise((r) => {
          link.addEventListener('load', r, { once: true });
          link.addEventListener('error', r, { once: true });
        });
  return sheet.then(() =>
    document.fonts
      ? Promise.all(['700 20px Syncopate', '500 16px Barlow', 'italic 400 20px "Cormorant Garamond"'].map((f) => document.fonts.load(f).catch(() => null)))
      : null,
  );
}
// Fade the scene up from the page colour once the page is revealed (body.ready, which
// the inline fallback timer in index.html can also set).
function updateFade(now) {
  const fade = post.grade.uniforms.uFade;
  if (startup.fadeFrom < 0) {
    if (!document.body.classList.contains('ready')) {
      fade.value = 1;
      return;
    }
    startup.fadeFrom = now;
  }
  const k = Math.min(1, (now - startup.fadeFrom) / 1400);
  fade.value = 1 - k * k * (3 - 2 * k);
}

// Once the page is showing, only step the resolution down, and only when the device is
// clearly struggling: every change is visible.
const perf = { acc: 0, frames: 0, sinceChange: 0 };
function adaptResolution(realDt) {
  if (lockedPR || !startup.revealed) return;
  perf.acc += realDt;
  perf.frames++;
  perf.sinceChange += realDt;
  if (perf.frames < 120) return;
  const avg = perf.acc / perf.frames;
  perf.acc = 0;
  perf.frames = 0;
  if (avg > 0.03 && pixelRatio > 0.75 && perf.sinceChange > 6) {
    pixelRatio = Math.max(0.75, pixelRatio - 0.25);
    perf.sinceChange = 0;
    resizePending = true;
  }
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
// Everyone who arrives without a #seed lands in the same, tested world;
// "New erg" (or a #seed link) leads to other worlds.
const DEFAULT_SEED = 12345;
const hashSeed = /seed=(\d+)/.exec(window.location.hash);
applySeed(hashSeed ? parseInt(hashSeed[1], 10) : site.world && Number.isFinite(site.world.seed) ? site.world.seed >>> 0 : DEFAULT_SEED);
{
  const s = findSpawn();
  player.spawn(s.x, s.z, 0.6);
  rocks.update(s.x, s.z);
  layoutRoad(s.x, s.z);
  cam.focus.set(s.x, player.pos.y + 0.9, s.z);
}
setTimeOfDay(site.world && Number.isFinite(site.world.time) ? site.world.time : 16.9);

let last = performance.now();
let simTime = 0;
const _proj = new THREE.Vector3();
const _proj2 = new THREE.Vector3();

function frame(now) {
  requestAnimationFrame(frame);
  if (resizePending) {
    resizePending = false;
    onResize();
  }
  const realDt = Math.min(0.25, Math.max(0.0005, (now - last) / 1000));
  const dt = Math.min(0.05, realDt);
  last = now;
  simTime += dt;
  const t = simTime;

  // storm easing
  const sPrev = storm;
  storm += (stormTarget - storm) * (1 - Math.exp(-dt * 0.45));
  if (Math.abs(storm - sPrev) > 1e-5) atmos.setStorm(storm);

  updateWind(dt, t);

  // ---- walker ----
  let inp = readInput(t);
  const gw = games.walker();
  if (gw) {
    // a game drives the walker (the run), holds it still, or has it aboard (the flight)
    inp = gw.input || HOLD;
    player.root.visible = !gw.hidden;
    player.rhythm = 0; // no worms while you play
  }
  if (!EDIT)
    player.update(dt, inp, {
      wind: wind.vel,
      onRock,
      collide: (pos, r, vel) => {
        rocks.collide(pos, r, vel);
        waystones.collide(pos, r, vel);
        games.collide(pos, r, vel);
      },
    });
  // waystones stand on bedrock: as safe from the worm as any rock
  onRock = rocks.nearRock(player.pos.x, player.pos.z, 1.2) || waystones.nearStone(player.pos.x, player.pos.z, SAFE_MARGIN);
  if (!entered) player.rhythm = 0;
  rocks.update(player.pos.x, player.pos.z);
  slideEffects(dt);

  // ---- world events ----
  updateThumper(dt);
  atomics.update(dt, atmos.litTint);
  updateWorm(dt, t);
  updateCraters(dt);

  // ---- camera & light ----
  updateCamera(dt, t);
  const vr = viewRadius(cam.height);
  atmos.update(cam.focus, vr, cam.dist);
  renderer.toneMappingExposure = atmos.exposure * (1 - storm * 0.08);

  // ---- waystones and games ----
  updateWaystones(dt, t, vr);
  games.update(dt, t, { px: player.pos.x, pz: player.pos.z, entered, camera });


  // ---- particles ----
  particles.ambient(dt, cam.focus.x, cam.focus.z, vr * 0.95, wind.vel, Math.min(1.2, wind.strength), storm, atmos.litTint);
  const pxPerUnit = renderer.getDrawingBufferSize(_proj).y / cam.height;
  particles.update(dt, wind.vel, camera, atmos.fog, pxPerUnit);

  // ---- terrain ----
  terrain.follow(cam.focus.x, cam.focus.z);
  const u = terrain.uniforms;
  u.uTime.value = t;
  u.uWindPhase.value = wind.phase;
  u.uWind.value = Math.min(1.3, wind.strength);
  u.uStorm.value = storm;
  u.uGlint.value.copy(atmos.glint);
  u.uSunDir.value.copy(atmos.sunDir);

  // marker
  if (markerLife > 0) {
    markerLife -= dt * 0.9;
    marker.material.opacity = Math.max(0, markerLife) * 0.8;
    marker.scale.setScalar(1 + (1 - markerLife) * 0.6);
  }

  // ---- sand memory ----
  trails.update(dt, player.pos.x, player.pos.z);

  // ---- post ----
  const g = post.grade.uniforms;
  g.uTime.value = t;
  g.uStorm.value = storm;
  g.uStormColor.value.copy(atmos.fog.color).multiplyScalar(1.05);
  g.uHeat.value = atmos.isNight ? 0 : THREE.MathUtils.clamp(0.25 + (atmos.sunDir.y - 0.3) * 1.6, 0, 1) * (1 - storm);
  g.uShake.value = Math.min(1, cam.shake);
  _proj.set(WIND.x, 0, WIND.z).add(cam.focus).project(camera);
  _proj2.copy(cam.focus).project(camera);
  g.uWindDir.value.set(_proj.x - _proj2.x, _proj.y - _proj2.y).normalize();
  updateFade(now);
  post.render(dt);

  // ---- audio & HUD ----
  const wl = wormLevel();
  audio.update(wind.strength, wind.gust, storm, wl);
  let wormInfo = null;
  if (worm.active && worm.state === 'approach') {
    _proj.copy(worm.head).project(camera);
    _proj2.copy(player.pos).project(camera);
    const aspect = window.innerWidth / window.innerHeight;
    wormInfo = {
      visible: true,
      distance: Math.hypot(worm.head.x - player.pos.x, worm.head.z - player.pos.z),
      screenAngle: Math.atan2(-(_proj.y - _proj2.y), (_proj.x - _proj2.x) * aspect),
    };
  }
  ui.update(dt, player.time, player.rhythm, player.regularity, player.sandwalk, wormInfo);
  ui.setTime(atmos.time);
  updateLabels();
  if (!EDIT && entered) updateMinimap();
  if (editor) editor.update(dt, t);
  settleResolution(realDt);
  adaptResolution(realDt);
}
requestAnimationFrame(frame);

// ---------------------------------------------------------------------------
// Edit mode: the placement editor that /management embeds
// ---------------------------------------------------------------------------
const editSites = {
  get stones() {
    return [...waystones.stones, ...games.editSites()];
  },
  byId: (id) => (String(id).startsWith('game:') ? games.editSite(id) : waystones.byId(id)),
  siteOf: (o) => waystones.siteOf(o) || games.editSiteOf(o),
  moveSite: (s, x, z) => (s.kind === 'game' ? games.moveSite(s, x, z) : waystones.moveSite(s, x, z)),
  turnSite: (s, deg) => (s.kind === 'game' ? games.turnSite(s, deg) : waystones.turnSite(s, deg)),
  siteRotation: (s) => (s.kind === 'game' ? games.siteRotation(s) : waystones.siteRotation(s)),
};
if (EDIT) {
  document.body.classList.add('editing');
  ui.enter(); // shows the world and labels; `entered` stays false, so no worms and no walker
  player.root.visible = false;
  editor = createEditMode({
    canvas,
    camera,
    scene,
    cam,
    pickGround,
    startYaw: START_YAW,
    // stones, pads and the game sites, all placed the same way
    getWaystones: () => editSites,
    getSpawn: () => spawnPoint,
    applyContent,
    setTimeOfDay,
    openCard: (id) => {
      const s = waystones.byId(id);
      if (s) openStone(s, 'codex', true);
    },
    closeCard: () => {
      codex.close();
      waystones.selectedId = null;
    },
  });
  window.arrakisEditor = editor.api;
  window.dispatchEvent(new Event('arrakis-editor-ready'));
}

if (previewSite) {
  const chip = document.createElement('div');
  chip.className = 'preview-chip';
  chip.textContent = 'Preview · not published';
  chip.title = 'You are looking at unpublished changes from /management. Visitors still see the live site.';
  document.body.append(chip);
}

// expose for debugging in the console
window.arrakis = {
  get cardShift() {
    return { y: sheetShift, x: sheetShiftX };
  },
  scene,
  camera,
  renderer,
  player,
  worm,
  atmos,
  trails,
  terrain,
  particles,
  cam,
  post,
  rocks,
  get waystones() {
    return waystones;
  },
  codex,
  newWorld,
  setTimeOfDay,
  selectStone,
  games,
  minimap,
  atomics,
  launchpad,
  setPixelRatio: (pr) => {
    pixelRatio = pr;
    resizePending = true;
  },
};
