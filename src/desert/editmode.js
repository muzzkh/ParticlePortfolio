import * as THREE from 'three';
import { groundHeight } from './noise.js';
import { setAssetOverrides } from './assets.js';

// Placement and modifier mode (index.html?edit), embedded by /management.
//
// Mouse: click a stone or pad to select it; drag it to move it over the dunes; drag
// empty sand to pan; right-drag (or Shift-drag) to turn the view; scroll to zoom.
// Keys: arrows nudge the selection, [ ] turn it, - = resize it, F frames it,
// C shows/hides its card, Delete asks to remove it, Esc deselects, Q/E turn the view.
//
// Everything the editor changes is reported to the page that owns the content
// (`place`, `scale`, `delete`, `select` events); that page decides, keeps the undo
// history, and sends content back with setContent().

const DEG = Math.PI / 180;
const ACCENT = new THREE.Color(1.5, 0.8, 0.32);
const START = new THREE.Color(0.35, 1.1, 0.95);

export function createEditMode(engine) {
  const { canvas, camera, scene, cam, pickGround } = engine;
  const listeners = new Map();
  const emit = (ev, ...args) => (listeners.get(ev) || []).forEach((fn) => fn(...args));
  const focus = new THREE.Vector3();
  const sp = engine.getSpawn();
  focus.set(sp.x, groundHeight(sp.x, sp.z), sp.z);
  cam.heightTarget = 36;
  let selectedId = null;
  let hoverId = null;
  let cardOn = true;
  let drag = null;
  let glide = null; // animated reframing

  // ---- selection and hover rings ----
  const ringGeo = new THREE.RingGeometry(1, 1.1, 72).rotateX(-Math.PI / 2);
  const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false }));
  const hover = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthWrite: false, depthTest: false }));
  ring.renderOrder = hover.renderOrder = 20;
  ring.visible = hover.visible = false;
  scene.add(ring, hover);

  // ---- where visitors start, and what they first see ----
  const startMark = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.05, 48).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: START, transparent: true, opacity: 0.9, depthWrite: false, depthTest: false }));
  startMark.renderOrder = 19;
  scene.add(startMark);
  const frames = new THREE.Group();
  scene.add(frames);
  const labelLayer = document.getElementById('labels');
  const mkLabel = (text, cls) => {
    const d = document.createElement('div');
    d.className = `edit-label ${cls}`;
    d.textContent = text;
    labelLayer.append(d);
    return d;
  };
  const startLabel = mkLabel('Visitors start here', 'start');
  const deskLabel = mkLabel('First view · desktop', 'frame');
  const phoneLabel = mkLabel('First view · phone', 'frame');

  // The ground footprint of the camera when a visitor first enters (height 20), for a
  // 16:10 desktop window and a phone held upright.
  function buildFrames() {
    frames.clear();
    const s = engine.getSpawn();
    const yaw = engine.startYaw;
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
    const up = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
    const depth = 10 / Math.sin(cam.pitch);
    const corners = [];
    for (const [aspect, color] of [
      [1.6, 0xffd8a8],
      [0.46, 0x9fe8dc],
    ]) {
      const hw = (20 * aspect) / 2;
      const pts = [];
      const c = [
        [-hw, -depth],
        [hw, -depth],
        [hw, depth],
        [-hw, depth],
        [-hw, -depth],
      ];
      for (let k = 0; k < 4; k++) {
        const [a0, b0] = c[k];
        const [a1, b1] = c[k + 1];
        for (let i = 0; i <= 24; i++) {
          const f = i / 24;
          const a = a0 + (a1 - a0) * f;
          const b = b0 + (b1 - b0) * f;
          const x = s.x + right.x * a + up.x * b;
          const z = s.z + right.z * a + up.z * b;
          pts.push(new THREE.Vector3(x, groundHeight(x, z) + 0.15, z));
        }
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(geo, new THREE.LineDashedMaterial({ color, dashSize: 0.8, gapSize: 0.5, transparent: true, opacity: 0.75, depthTest: false }));
      line.computeLineDistances();
      line.renderOrder = 18;
      frames.add(line);
      const x = s.x + right.x * -hw + up.x * depth;
      const z = s.z + right.z * -hw + up.z * depth;
      corners.push(new THREE.Vector3(x, groundHeight(x, z), z));
    }
    frames.userData.corners = corners;
  }
  buildFrames();

  // ---- picking ----
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function siteAt(e) {
    const ws = engine.getWaystones();
    ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects(
      ws.stones.map((s) => s.root),
      true,
    );
    for (const h of hits) {
      const s = ws.siteOf(h.object);
      if (s) return s;
    }
    const g = pickGround(e.clientX, e.clientY);
    if (!g) return null;
    let best = null;
    let bd = Infinity;
    for (const s of ws.stones) {
      const d = Math.hypot(g.x - s.x, g.z - s.z);
      if (d < s.radius + 0.8 && d < bd) {
        bd = d;
        best = s;
      }
    }
    return best;
  }
  const site = (id) => (id ? engine.getWaystones().byId(id) : null);
  function placeOf(s) {
    const spn = engine.getSpawn();
    return { dx: Math.round((s.x - spn.x) * 100) / 100, dz: Math.round((s.z - spn.z) * 100) / 100, rot: engine.getWaystones().siteRotation(s) };
  }

  // ---- pointer ----
  canvas.style.cursor = 'default';
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('pointerdown', (e) => {
    canvas.focus();
    canvas.setPointerCapture(e.pointerId);
    glide = null;
    const s = e.button === 0 && !e.shiftKey ? siteAt(e) : null;
    if (s) {
      setSelected(s.entry.id, true);
      const g = pickGround(e.clientX, e.clientY);
      drag = { mode: 'move', id: s.entry.id, ox: g ? s.x - g.x : 0, oz: g ? s.z - g.z : 0, sx: e.clientX, sy: e.clientY, moved: false };
    } else {
      drag = { mode: e.button === 2 || e.shiftKey ? 'orbit' : 'pan', lx: e.clientX, ly: e.clientY, sx: e.clientX, sy: e.clientY, moved: false };
    }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!drag) {
      const s = siteAt(e);
      hoverId = s ? s.entry.id : null;
      canvas.style.cursor = s ? 'grab' : 'default';
      return;
    }
    if (!drag.moved && Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) < 4) return;
    drag.moved = true;
    if (drag.mode === 'move') {
      const s = site(drag.id);
      const g = pickGround(e.clientX, e.clientY);
      if (s && g) engine.getWaystones().moveSite(s, g.x + drag.ox, g.z + drag.oz);
      canvas.style.cursor = 'grabbing';
      return;
    }
    const dx = e.clientX - drag.lx;
    const dy = e.clientY - drag.ly;
    drag.lx = e.clientX;
    drag.ly = e.clientY;
    if (drag.mode === 'orbit') {
      cam.yawTarget -= dx * 0.006;
      cam.yaw = cam.yawTarget;
      return;
    }
    // the sand follows the pointer
    const upp = cam.height / window.innerHeight;
    const yaw = cam.yaw;
    focus.x -= Math.cos(yaw) * dx * upp - (Math.sin(yaw) * dy * upp) / Math.sin(cam.pitch);
    focus.z -= -Math.sin(yaw) * dx * upp - (Math.cos(yaw) * dy * upp) / Math.sin(cam.pitch);
    focus.y = groundHeight(focus.x, focus.z);
    canvas.style.cursor = 'move';
  });
  const end = () => {
    if (!drag) return;
    if (drag.mode === 'move' && drag.moved) {
      const s = site(drag.id);
      if (s) emit('place', drag.id, placeOf(s));
    } else if (drag.mode === 'pan' && !drag.moved) {
      setSelected(null, true);
    }
    drag = null;
    canvas.style.cursor = 'default';
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      cam.heightTarget = THREE.MathUtils.clamp(cam.heightTarget * Math.exp(e.deltaY * 0.0012), 8, 90);
    },
    { passive: false },
  );

  // ---- keys ----
  window.addEventListener('keydown', (e) => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    // the editor's own shortcuts work while the world has focus too
    if (e.metaKey || e.ctrlKey) {
      const k = e.key.toLowerCase();
      const cmd = k === 'z' ? (e.shiftKey ? 'redo' : 'undo') : k === 'y' ? 'redo' : k === 's' ? 'save' : k === 'enter' ? 'publish' : null;
      if (cmd) {
        e.preventDefault();
        emit('shortcut', cmd);
      }
      return;
    }
    const s = site(selectedId);
    const ws = engine.getWaystones();
    const step = e.shiftKey ? 2 : 0.5;
    switch (e.code) {
      case 'KeyQ':
        cam.yawTarget -= Math.PI / 4;
        break;
      case 'KeyE':
        cam.yawTarget += Math.PI / 4;
        break;
      case 'Escape':
        setSelected(null, true);
        break;
      case 'KeyF':
        if (s) api.focusOn(s.entry.id);
        break;
      case 'KeyC':
        api.showCard(!cardOn);
        emit('card', cardOn);
        break;
      case 'BracketLeft':
      case 'BracketRight':
        if (!s) break;
        ws.turnSite(s, ws.siteRotation(s) + (e.code === 'BracketLeft' ? -1 : 1) * (e.shiftKey ? 5 : 15));
        emit('place', s.entry.id, placeOf(s));
        break;
      case 'Minus':
      case 'Equal':
        if (!s) break;
        emit('scale', s.entry.id, e.code === 'Minus' ? 1 / 1.1 : 1.1);
        break;
      case 'Delete':
      case 'Backspace':
        if (s) emit('delete', s.entry.id);
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown': {
        if (!s) break;
        e.preventDefault();
        const yaw = cam.yaw;
        const r = e.code === 'ArrowRight' ? 1 : e.code === 'ArrowLeft' ? -1 : 0;
        const u = e.code === 'ArrowUp' ? 1 : e.code === 'ArrowDown' ? -1 : 0;
        ws.moveSite(s, s.x + (Math.cos(yaw) * r - Math.sin(yaw) * u) * step, s.z + (-Math.sin(yaw) * r - Math.cos(yaw) * u) * step);
        emit('place', s.entry.id, placeOf(s));
        break;
      }
      default:
        return;
    }
  });

  function setSelected(id, fromWorld) {
    const changed = id !== selectedId;
    selectedId = id;
    const s = site(id);
    if (s && cardOn) engine.openCard(id);
    else engine.closeCard();
    if (fromWorld && changed) emit('select', id);
  }

  // ---- per frame ----
  const v = new THREE.Vector3();
  const place = (el, p) => {
    v.copy(p).project(camera);
    const x = (v.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -140%)`;
  };
  function update(dt, t) {
    if (glide) {
      const k = 1 - Math.exp(-dt * 5);
      focus.lerp(glide, k);
      if (focus.distanceTo(glide) < 0.05) glide = null;
    }
    const s = site(selectedId);
    ring.visible = !!s;
    if (s) {
      const r = s.radius + 0.7;
      ring.scale.set(r, 1, r);
      ring.position.set(s.x, s.y + 0.2, s.z);
      ring.material.opacity = 0.75 + 0.15 * Math.sin(t * 2.4);
    }
    const h = site(hoverId);
    hover.visible = !!h && hoverId !== selectedId && !drag;
    if (hover.visible) {
      const r = h.radius + 0.55;
      hover.scale.set(r, 1, r);
      hover.position.set(h.x, h.y + 0.2, h.z);
    }
    const spn = engine.getSpawn();
    startMark.position.set(spn.x, groundHeight(spn.x, spn.z) + 0.12, spn.z);
    place(startLabel, startMark.position);
    const c = frames.userData.corners;
    if (c) {
      place(deskLabel, c[0]);
      place(phoneLabel, c[1]);
    }
  }

  const api = {
    // the whole site content, plus object URLs for files not yet published
    setContent(next, overrides) {
      setAssetOverrides(overrides);
      engine.applyContent(next);
      buildFrames();
      if (selectedId && !site(selectedId)) setSelected(null, false);
      else if (selectedId && cardOn) engine.openCard(selectedId);
    },
    select(id) {
      setSelected(id, false);
      if (id) api.focusOn(id);
    },
    focusOn(id) {
      const s = site(id);
      if (s) glide = new THREE.Vector3(s.x, s.y, s.z);
    },
    focusStart() {
      const spn = engine.getSpawn();
      glide = new THREE.Vector3(spn.x, groundHeight(spn.x, spn.z), spn.z);
      cam.heightTarget = 24;
    },
    // where an entry stands now, relative to where visitors start (null if not shown)
    placeOf(id) {
      const s = site(id);
      return s ? placeOf(s) : null;
    },
    selected() {
      return selectedId;
    },
    // where the middle of the view is, relative to where visitors start
    viewCenter() {
      const spn = engine.getSpawn();
      return { dx: Math.round((focus.x - spn.x) * 100) / 100, dz: Math.round((focus.z - spn.z) * 100) / 100 };
    },
    showCard(on) {
      cardOn = !!on;
      if (cardOn && site(selectedId)) engine.openCard(selectedId);
      else engine.closeCard();
    },
    setTime(h) {
      engine.setTimeOfDay(h);
    },
    zoom(height) {
      cam.heightTarget = THREE.MathUtils.clamp(height, 8, 90);
    },
    zoomBy(f) {
      cam.heightTarget = THREE.MathUtils.clamp(cam.heightTarget * f, 8, 90);
    },
    cardShown() {
      return cardOn;
    },
    on(ev, fn) {
      if (!listeners.has(ev)) listeners.set(ev, []);
      listeners.get(ev).push(fn);
    },
  };

  return { api, focus, update };
}
