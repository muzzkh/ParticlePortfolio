import * as THREE from 'three';
import { groundHeight } from '../noise.js';

// Shared pieces of the games that live in the desert: best scores, the small HUD,
// glowing start rings that hug the sand, spice orbs, and the floating site labels.

const STORE = 'arrakis.games.best';

export function loadBest() {
  try {
    return JSON.parse(localStorage.getItem(STORE)) || {};
  } catch {
    return {};
  }
}

export function saveBest(best) {
  try {
    localStorage.setItem(STORE, JSON.stringify(best));
  } catch {
    /* private mode: scores just aren't kept */
  }
}

export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const TAU = Math.PI * 2;

// the shortest way round from angle a to angle b
export function angleTo(a, b) {
  return ((((b - a + Math.PI) % TAU) + TAU) % TAU) - Math.PI;
}

// a flat ring lying on the sand, its vertices lifted to follow the dunes
export function groundRing(x, z, rIn, rOut, color, segments = 48) {
  const geo = new THREE.RingGeometry(rIn, rOut, segments, 1).rotateX(-Math.PI / 2);
  const base = groundHeight(x, z);
  const p = geo.getAttribute('position');
  for (let i = 0; i < p.count; i++) p.setY(i, groundHeight(x + p.getX(i), z + p.getZ(i)) - base + 0.05);
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, depthWrite: false, toneMapped: true }));
  mesh.position.set(x, base, z);
  mesh.renderOrder = 4;
  return mesh;
}

const ORB_GEO = new THREE.SphereGeometry(0.2, 16, 12);
const ORB_MAT = new THREE.MeshBasicMaterial({ color: new THREE.Color(3.2, 1.45, 0.35) });
export function spiceOrb() {
  const m = new THREE.Mesh(ORB_GEO, ORB_MAT);
  m.renderOrder = 3;
  return m;
}

// ---------------------------------------------------------------------------
// HUD: title, score, a big message, a hint line, a Leave button, and touch buttons
// ---------------------------------------------------------------------------
export class GameHud {
  constructor(onLeave, onTouch) {
    const el = (tag, cls, text) => {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (text) e.textContent = text;
      return e;
    };
    this.root = el('div', 'gamehud');
    this.root.hidden = true;
    this.root.setAttribute('role', 'status');
    this.root.setAttribute('aria-live', 'polite');
    const bar = el('div', 'gh-bar');
    this.title = el('div', 'gh-title');
    this.score = el('div', 'gh-score');
    this.leave = el('button', 'gh-leave', 'Leave');
    this.leave.type = 'button';
    this.leave.title = 'Leave the game (Esc)';
    this.leave.addEventListener('click', () => onLeave());
    bar.append(this.title, this.score, this.leave);
    this.center = el('div', 'gh-center');
    this.msg = el('div', 'gh-msg');
    this.sub = el('div', 'gh-sub');
    this.center.append(this.msg, this.sub);
    this.hint = el('div', 'gh-hint');
    this.pad = el('div', 'gh-pad');
    this.root.append(bar, this.center, this.hint, this.pad);
    document.body.append(this.root);
    this.onTouch = onTouch;
  }

  show(title) {
    this.title.textContent = title;
    this.root.hidden = false;
    this.setScore('');
    this.message('', '');
  }

  hide() {
    this.root.hidden = true;
    this.pad.replaceChildren();
  }

  setScore(text) {
    if (this.score.textContent !== text) this.score.textContent = text;
  }

  message(big, small = '') {
    this.msg.textContent = big;
    this.sub.textContent = small;
    this.center.classList.toggle('on', !!(big || small));
  }

  setHint(text) {
    this.hint.textContent = text;
  }

  // touch buttons: [{ id, label, cls }], held while pressed
  buttons(list) {
    this.pad.replaceChildren(
      ...list.map((b) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `gh-btn ${b.cls || ''}`;
        btn.textContent = b.label;
        btn.setAttribute('aria-label', b.aria || b.label);
        const down = (e) => {
          e.preventDefault();
          btn.classList.add('down');
          this.onTouch(b.id, true);
        };
        const up = (e) => {
          e.preventDefault();
          if (!btn.classList.contains('down')) return;
          btn.classList.remove('down');
          this.onTouch(b.id, false);
        };
        btn.addEventListener('pointerdown', down);
        btn.addEventListener('pointerup', up);
        btn.addEventListener('pointerleave', up);
        btn.addEventListener('pointercancel', up);
        btn.addEventListener('contextmenu', (e) => e.preventDefault());
        return btn;
      }),
    );
  }
}

// ---------------------------------------------------------------------------
// A floating label over a game site; it turns into a Play button when you're there
// ---------------------------------------------------------------------------
const _v = new THREE.Vector3();
export class SiteLabel {
  constructor(layer, { kicker, title }, onClick) {
    this.el = document.createElement('button');
    this.el.type = 'button';
    this.el.className = 'wl kind-game';
    this.el.tabIndex = -1;
    const top = document.createElement('span');
    top.className = 'wl-org';
    const dot = document.createElement('i');
    dot.className = 'gl-dot';
    this.kicker = document.createElement('span');
    this.kicker.textContent = kicker;
    top.append(dot, this.kicker);
    const t = document.createElement('span');
    t.className = 'wl-title';
    t.textContent = title;
    this.prompt = document.createElement('span');
    this.prompt.className = 'gl-prompt';
    this.el.append(top, t, this.prompt);
    this.el.addEventListener('click', () => onClick());
    layer.append(this.el);
    this.alpha = -1;
    this.near = null;
  }

  setKicker(text) {
    if (this.kicker.textContent !== text) this.kicker.textContent = text;
  }

  setNear(near, touch) {
    if (near === this.near) return;
    this.near = near;
    this.el.classList.toggle('near', near);
    this.prompt.textContent = near ? (touch ? 'Tap to play' : 'Press Space to play') : '';
  }

  // anchor: world position over the site; show: false hides it (while a game runs)
  update(anchor, camera, show) {
    const W = window.innerWidth;
    const H = window.innerHeight;
    _v.copy(anchor).project(camera);
    const x = (_v.x * 0.5 + 0.5) * W;
    const y = (-_v.y * 0.5 + 0.5) * H;
    const edge = Math.min(x, W - x, y - 50, H - 20 - y);
    const a = show && _v.z < 1 ? Math.min(1, Math.max(0, edge / 70)) : 0;
    if (a !== this.alpha) {
      this.alpha = a;
      this.el.style.opacity = a.toFixed(3);
      this.el.style.visibility = a > 0.01 ? 'visible' : 'hidden';
    }
    if (a > 0.01) this.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
  }

  dispose() {
    this.el.remove();
  }
}
