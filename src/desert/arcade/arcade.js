// The arcade: a full-screen overlay with a menu of mini games, each drawn on a 640×400
// canvas scaled to fit. While it is open the desert is paused and no key reaches it.

import { Sandworm } from './sandworm.js';
import { DuneRunner } from './runner.js';
import { CanyonFlight } from './flyer.js';

const GAMES = [Sandworm, DuneRunner, CanyonFlight];
const W = 640;
const H = 400;
const STORE = 'arrakis.arcade.best';
const KEYMAP = {
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
  ArrowUp: 'up',
  KeyW: 'up',
  ArrowDown: 'down',
  KeyS: 'down',
  Space: 'action',
  Enter: 'action',
};

const $ = (id) => document.getElementById(id);
function loadBest() {
  try {
    return JSON.parse(localStorage.getItem(STORE)) || {};
  } catch {
    return {};
  }
}
function saveBest(best) {
  try {
    localStorage.setItem(STORE, JSON.stringify(best));
  } catch {
    /* private mode: scores just aren't kept */
  }
}

export class Arcade {
  // onOpen/onClose: pause and resume the desert; sfx(name): play a sound
  constructor({ onOpen, onClose, sfx }) {
    this.onOpen = onOpen;
    this.onClose = onClose;
    this.sfx = sfx;
    this.root = $('arcade');
    this.menu = $('arcadeMenu');
    this.stage = $('arcadeStage');
    this.canvas = $('arcadeCanvas');
    this.g = this.canvas.getContext('2d');
    this.touch = $('arcadeTouch');
    this.title = $('arcadeTitle');
    this.scoreEl = $('arcadeScore');
    this.help = $('arcadeHelp');
    this.best = loadBest();
    this.game = null;
    this.Game = null;
    this.held = new Set();
    this.pressed = new Set();
    this.raf = 0;
    this.last = 0;

    $('arcadeClose').addEventListener('click', () => this.hide());
    $('arcadeBack').addEventListener('click', () => this._menu());
    $('arcadeRestart').addEventListener('click', () => this.game && this.game.reset());
    this.root.addEventListener('click', (e) => {
      if (e.target === this.root) this.hide();
    });
    // capture phase on window: runs before the desert's own key handlers, which never
    // see the event while the arcade is open
    window.addEventListener('keydown', (e) => this._key(e, true), true);
    window.addEventListener('keyup', (e) => this._key(e, false), true);
    window.addEventListener('resize', () => this.isOpen && this._fit());
    this._buildMenu();
    this._bindCanvas();
  }

  get isOpen() {
    return !this.root.hidden;
  }

  show() {
    if (this.isOpen) return;
    this.root.hidden = false;
    this.onOpen();
    this._menu();
  }

  hide() {
    if (!this.isOpen) return;
    this._stop();
    this.root.hidden = true;
    this.onClose();
  }

  _buildMenu() {
    this.cards = [];
    for (const G of GAMES) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'arcade-card';
      const name = document.createElement('span');
      name.className = 'ac-name';
      name.textContent = G.title;
      const blurb = document.createElement('span');
      blurb.className = 'ac-blurb';
      blurb.textContent = G.blurb;
      const best = document.createElement('span');
      best.className = 'ac-best';
      b.append(name, blurb, best);
      b.addEventListener('click', () => this._start(G));
      this.menu.append(b);
      this.cards.push({ G, best });
    }
  }

  _menu() {
    this._stop();
    this.menu.hidden = false;
    this.stage.hidden = true;
    this.title.textContent = 'Arcade';
    this.scoreEl.textContent = '';
    this.help.textContent = 'Pick a game. Esc closes the arcade.';
    $('arcadeBack').hidden = true;
    $('arcadeRestart').hidden = true;
    for (const c of this.cards) c.best.textContent = this.best[c.G.id] ? `Best ${this.best[c.G.id]}` : 'No score yet';
    this.cards[0].best.parentElement.focus({ preventScroll: true });
  }

  _start(G) {
    this.Game = G;
    this.menu.hidden = true;
    this.stage.hidden = false;
    this.title.textContent = G.title;
    this.help.textContent = `${G.help} · Esc for the menu`;
    $('arcadeBack').hidden = false;
    $('arcadeRestart').hidden = false;
    this._buildTouch(G.touch);
    this.held.clear();
    this.pressed.clear();
    this.game = new G({
      score: (n) => {
        const best = this.best[G.id] || 0;
        this.scoreEl.textContent = `Score ${n} · Best ${Math.max(best, n)}`;
      },
      over: (n) => {
        if (n > (this.best[G.id] || 0)) {
          this.best[G.id] = n;
          saveBest(this.best);
        }
      },
      sfx: (name) => this.sfx(name),
    });
    this._fit();
    this.last = performance.now();
    cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame((t) => this._loop(t));
    this.canvas.focus({ preventScroll: true });
  }

  _stop() {
    cancelAnimationFrame(this.raf);
    this.game = null;
    this.held.clear();
    this.pressed.clear();
  }

  _loop(now) {
    if (!this.game) return;
    this.raf = requestAnimationFrame((t) => this._loop(t));
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.game.update(dt, { held: this.held, pressed: this.pressed });
    this.pressed.clear();
    this.g.save();
    this.g.setTransform(this.scale, 0, 0, this.scale, 0, 0);
    this.game.draw(this.g, W, H);
    this.g.restore();
  }

  // size the canvas buffer to its displayed size, so it stays crisp
  _fit() {
    const r = this.canvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    this.scale = (Math.max(1, r.width) / W) * dpr;
    this.canvas.width = Math.round(W * this.scale);
    this.canvas.height = Math.round(H * this.scale);
  }

  _key(e, down) {
    if (!this.isOpen) return;
    e.stopImmediatePropagation();
    if (down && e.code === 'Escape') {
      e.preventDefault();
      if (this.game) this._menu();
      else this.hide();
      return;
    }
    if (!this.game) return; // menu: let Tab, Enter and Space work on the buttons
    const k = KEYMAP[e.code];
    if (!k) return;
    e.preventDefault();
    if (down) {
      if (!e.repeat) this.pressed.add(k);
      this.held.add(k);
    } else this.held.delete(k);
  }

  // tap = action, hold = action held, swipe = a direction
  _bindCanvas() {
    let start = null;
    this.canvas.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      start = { x: e.clientX, y: e.clientY };
      this.canvas.setPointerCapture(e.pointerId);
      this.held.add('action');
      this.pressed.add('action');
    });
    const end = (e) => {
      this.held.delete('action');
      if (!start) return;
      const dx = e.clientX - start.x;
      const dy = e.clientY - start.y;
      if (Math.hypot(dx, dy) > 28) this.pressed.add(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : dy > 0 ? 'down' : 'up');
      start = null;
    };
    this.canvas.addEventListener('pointerup', end);
    this.canvas.addEventListener('pointercancel', end);
  }

  _buildTouch(kind) {
    this.touch.replaceChildren();
    this.touch.className = `arcade-touch ${kind}`;
    const layouts = {
      dpad: [
        ['up', '▲'],
        ['left', '◀'],
        ['down', '▼'],
        ['right', '▶'],
      ],
      runner: [
        ['left', '◀'],
        ['right', '▶'],
        ['action', 'Jump'],
      ],
      hold: [['action', 'Hold to fly']],
    };
    for (const [key, label] of layouts[kind] || []) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `pad pad-${key}`;
      b.textContent = label;
      b.setAttribute('aria-label', key);
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        b.setPointerCapture(e.pointerId);
        this.held.add(key);
        this.pressed.add(key);
      });
      const up = () => this.held.delete(key);
      b.addEventListener('pointerup', up);
      b.addEventListener('pointercancel', up);
      this.touch.append(b);
    }
  }
}
