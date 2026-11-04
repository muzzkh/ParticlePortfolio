import { groundHeight } from './noise.js';

// The minimap: a round map in a corner that turns with the view (up on the map is up
// on the screen), and a full map it opens into. Both show the dunes, rock, the road and
// the project path, every stone and pad (filled once found), the games, where visitors
// start, what the camera sees, the worm when it hunts, and you. On the full map, tap a
// stone, a game or anywhere on the sand to go there.

const KIND = { experience: '#ffa25e', education: '#8ccfff', project: '#8fe3b5', skills: '#f3d27e' };
const GAME = '#ffc46b';
const TILE_M = 448; // the shaded terrain under the map, metres across
const TILE_PX = 128;
const RES = TILE_M / TILE_PX;
const ROWS_PER_FRAME = 16;

const $ = (id) => document.getElementById(id);

export class Minimap {
  // onPick({ type: 'stone' | 'game' | 'ground', id, x, z })
  constructor({ onPick }) {
    this.onPick = onPick;
    this.root = $('mapw');
    this.button = $('minimap');
    this.canvas = $('minimapCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.full = $('mapFull');
    this.fullCanvas = $('mapCanvas');
    this.fctx = this.fullCanvas.getContext('2d');
    this.fullRadius = 150;
    this.tile = null; // { cx, cz, canvas }
    this.pending = null; // { cx, cz, heights, row }
    this.frame = 0;
    this.hits = [];
    this.state = null;

    this.button.addEventListener('click', () => this.open());
    $('mapClose').addEventListener('click', () => this.close());
    $('mapIn').addEventListener('click', () => this.zoomFull(1 / 1.4));
    $('mapOut').addEventListener('click', () => this.zoomFull(1.4));
    this.full.addEventListener('click', (e) => {
      if (e.target === this.full) this.close();
    });
    window.addEventListener(
      'keydown',
      (e) => {
        if (!this.isOpen) return;
        if (e.code === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          this.close();
        }
      },
      true,
    );
    // a tap on the full map picks what's under it (a drag doesn't)
    let down = null;
    this.fullCanvas.addEventListener('pointerdown', (e) => {
      down = { x: e.clientX, y: e.clientY };
    });
    this.fullCanvas.addEventListener('pointerup', (e) => {
      if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 10) return void (down = null);
      down = null;
      this._tap(e);
    });
    this.fullCanvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.zoomFull(Math.exp(e.deltaY * 0.0015));
    }, { passive: false });
  }

  get isOpen() {
    return !this.full.hidden;
  }

  open() {
    // start zoomed to fit everything there is to find
    const s = this.state;
    if (s) {
      let far = 30;
      for (const st of s.stones) far = Math.max(far, Math.hypot(st.x - s.px, st.z - s.pz));
      for (const g of s.games) far = Math.max(far, Math.hypot(g.x - s.px, g.z - s.pz) + g.r);
      this.fullRadius = Math.min(260, Math.max(45, far + 14));
    }
    this.full.hidden = false;
    document.body.classList.add('mapping');
    this._fitFull();
    $('mapClose').focus();
  }

  close() {
    if (this.full.hidden) return;
    this.full.hidden = true;
    document.body.classList.remove('mapping');
    this.button.focus();
  }

  zoomFull(f) {
    this.fullRadius = Math.min(420, Math.max(45, this.fullRadius * f));
  }

  // a new world: the old shading no longer fits
  reset() {
    this.tile = null;
    this.pending = null;
  }

  _fitFull() {
    const r = this.fullCanvas.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.round(r.width * dpr);
    const h = Math.round(r.height * dpr);
    if (this.fullCanvas.width !== w || this.fullCanvas.height !== h) {
      this.fullCanvas.width = w;
      this.fullCanvas.height = h;
    }
  }

  // ---------------------------------------------------------------- terrain
  _terrain(px, pz) {
    const snap = (v) => Math.round(v / 32) * 32;
    if (!this.pending && (!this.tile || Math.hypot(px - this.tile.cx, pz - this.tile.cz) > 110)) {
      this.pending = { cx: snap(px), cz: snap(pz), heights: new Float32Array(TILE_PX * TILE_PX), row: 0 };
    }
    const p = this.pending;
    if (!p) return;
    const x0 = p.cx - TILE_M / 2;
    const z0 = p.cz - TILE_M / 2;
    const end = Math.min(TILE_PX, p.row + ROWS_PER_FRAME);
    for (let j = p.row; j < end; j++) {
      for (let i = 0; i < TILE_PX; i++) p.heights[j * TILE_PX + i] = groundHeight(x0 + (i + 0.5) * RES, z0 + (j + 0.5) * RES);
    }
    p.row = end;
    if (p.row < TILE_PX) return;
    // shade: sunlight from the north-west, a little warmer up high
    const c = document.createElement('canvas');
    c.width = c.height = TILE_PX;
    const g = c.getContext('2d');
    const img = g.createImageData(TILE_PX, TILE_PX);
    const H = p.heights;
    let lo = Infinity;
    let hi = -Infinity;
    for (const v of H) {
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
    const span = Math.max(1, hi - lo);
    const at = (i, j) => H[Math.min(TILE_PX - 1, Math.max(0, j)) * TILE_PX + Math.min(TILE_PX - 1, Math.max(0, i))];
    for (let j = 0; j < TILE_PX; j++) {
      for (let i = 0; i < TILE_PX; i++) {
        const dx = (at(i + 1, j) - at(i - 1, j)) / (2 * RES);
        const dz = (at(i, j + 1) - at(i, j - 1)) / (2 * RES);
        const light = Math.max(0, Math.min(1, 0.62 + (-dx * 0.7 - dz * 0.7) * 1.6));
        const up = (at(i, j) - lo) / span;
        const k = (j * TILE_PX + i) * 4;
        img.data[k] = 96 + light * 128 + up * 14;
        img.data[k + 1] = 60 + light * 92 + up * 8;
        img.data[k + 2] = 36 + light * 58;
        img.data[k + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
    this.tile = { cx: p.cx, cz: p.cz, canvas: c };
    this.pending = null;
  }

  // ---------------------------------------------------------------- drawing
  // state: { px, pz, yaw, camYaw, focus: {x, z}, viewW, viewD, stones, current, paths,
  //          games, rocks, worm, spawn, compactRadius }
  update(state) {
    this.state = state;
    this.frame++;
    this._terrain(state.px, state.pz);
    if (this.isOpen) {
      this._fitFull();
      this.hits = [];
      this._draw(this.fctx, this.fullCanvas.width, this.fullCanvas.height, this.fullRadius, true);
    } else if (this.frame % 3 === 0 && this.root.offsetParent !== null) {
      const r = this.canvas.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const size = Math.round(r.width * dpr);
      if (size > 0 && this.canvas.width !== size) this.canvas.width = this.canvas.height = size;
      if (size > 0) this._draw(this.ctx, size, size, state.compactRadius, false);
    }
  }

  _draw(ctx, W, H, radius, full) {
    const s = this.state;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const cx = W / 2;
    const cy = H / 2;
    const k = Math.min(W, H) / 2 / radius;
    const cos = Math.cos(s.camYaw);
    const sin = Math.sin(s.camYaw);
    const mx = (x, z) => cx + k * ((x - s.px) * cos - (z - s.pz) * sin);
    const my = (x, z) => cy + k * ((x - s.px) * sin + (z - s.pz) * cos);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    this.labelBoxes = [];
    ctx.save();
    if (!full) {
      ctx.beginPath();
      ctx.arc(cx, cy, Math.min(W, H) / 2 - 1, 0, Math.PI * 2);
      ctx.clip();
    }
    ctx.fillStyle = '#6b4329';
    ctx.fillRect(0, 0, W, H);

    // the dunes
    const t = this.tile;
    if (t) {
      const x0 = t.cx - TILE_M / 2;
      const z0 = t.cz - TILE_M / 2;
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      ctx.setTransform(k * RES * cos, k * RES * sin, -k * RES * sin, k * RES * cos, mx(x0, z0), my(x0, z0));
      ctx.drawImage(t.canvas, 0, 0);
      ctx.restore();
    }

    // rock
    ctx.fillStyle = 'rgba(58, 32, 20, 0.85)';
    for (const r of s.rocks) {
      const x = mx(r.x, r.z);
      const y = my(r.x, r.z);
      if (x < -20 || y < -20 || x > W + 20 || y > H + 20) continue;
      ctx.beginPath();
      ctx.arc(x, y, Math.max(1.5 * dpr, r.r * k), 0, Math.PI * 2);
      ctx.fill();
    }

    // the road and the project path
    ctx.lineWidth = Math.max(1, 1.4 * dpr);
    ctx.setLineDash([3 * dpr, 4 * dpr]);
    for (const path of s.paths) {
      ctx.strokeStyle = path.color;
      ctx.beginPath();
      path.points.forEach((p, i) => (i ? ctx.lineTo(mx(p.x, p.z), my(p.x, p.z)) : ctx.moveTo(mx(p.x, p.z), my(p.x, p.z))));
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // the games
    for (const g of s.games) {
      const x = mx(g.x, g.z);
      const y = my(g.x, g.z);
      ctx.strokeStyle = GAME;
      ctx.lineWidth = Math.max(1, 1.5 * dpr);
      ctx.beginPath();
      ctx.arc(x, y, Math.max(3.5 * dpr, g.r * k), 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = GAME;
      ctx.beginPath();
      ctx.arc(mx(g.sx, g.sz), my(g.sx, g.sz), 2.2 * dpr, 0, Math.PI * 2);
      ctx.fill();
      if (full) {
        this.hits.push({ x, y, r: Math.max(16 * dpr, g.r * k), pick: { type: 'game', id: g.id } });
        this._label(ctx, g.title, x, y - Math.max(6 * dpr, g.r * k) - 5 * dpr, GAME, dpr);
      }
    }

    // where visitors start
    const sx = mx(s.spawn.x, s.spawn.z);
    const sy = my(s.spawn.x, s.spawn.z);
    ctx.strokeStyle = 'rgba(110, 230, 210, 0.9)';
    ctx.lineWidth = Math.max(1, 1.2 * dpr);
    ctx.beginPath();
    ctx.arc(sx, sy, 3.5 * dpr, 0, Math.PI * 2);
    ctx.stroke();

    // stones and pads
    for (const st of s.stones) {
      const x = mx(st.x, st.z);
      const y = my(st.x, st.z);
      if (x < -30 || y < -30 || x > W + 30 || y > H + 30) continue;
      const cur = st.entry.id === s.current;
      const size = (full ? 6 : 4.2) * dpr * (cur ? 1.35 : 1);
      ctx.fillStyle = ctx.strokeStyle = KIND[st.kind] || KIND.experience;
      ctx.lineWidth = Math.max(1, 1.5 * dpr);
      if (cur) {
        ctx.save();
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 8 * dpr;
      }
      this._glyph(ctx, st.kind, x, y, size);
      if (st.found) ctx.fill();
      else ctx.stroke();
      if (cur) ctx.restore();
      if (full) {
        this.hits.push({ x, y, r: 16 * dpr, pick: { type: 'stone', id: st.entry.id } });
        this._label(ctx, st.entry.title, x, y - size - 5 * dpr, 'rgba(255, 241, 221, 0.92)', dpr);
      }
    }

    // what the camera sees
    const fx = mx(s.focus.x, s.focus.z);
    const fy = my(s.focus.x, s.focus.z);
    ctx.strokeStyle = 'rgba(255, 241, 221, 0.5)';
    ctx.lineWidth = Math.max(1, 1 * dpr);
    ctx.strokeRect(fx - (s.viewW * k) / 2, fy - (s.viewD * k) / 2, s.viewW * k, s.viewD * k);

    // the worm, when it's hunting
    if (s.worm) {
      const wx = mx(s.worm.x, s.worm.z);
      const wy = my(s.worm.x, s.worm.z);
      ctx.fillStyle = `rgba(255, 90, 54, ${0.6 + 0.4 * Math.sin(this.frame * 0.25)})`;
      ctx.beginPath();
      ctx.arc(wx, wy, 4.5 * dpr, 0, Math.PI * 2);
      ctx.fill();
    }

    // you
    const a = Math.atan2(Math.sin(s.yaw) * sin + Math.cos(s.yaw) * cos, Math.sin(s.yaw) * cos - Math.cos(s.yaw) * sin);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(a);
    const u = (full ? 7 : 5.5) * dpr;
    ctx.fillStyle = '#fff6e6';
    ctx.strokeStyle = 'rgba(40, 18, 6, 0.85)';
    ctx.lineWidth = 1.5 * dpr;
    ctx.beginPath();
    ctx.moveTo(u * 1.3, 0);
    ctx.lineTo(-u * 0.8, u * 0.75);
    ctx.lineTo(-u * 0.35, 0);
    ctx.lineTo(-u * 0.8, -u * 0.75);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    ctx.restore();

    // north, on the rim
    const nr = Math.min(W, H) / 2 - 9 * dpr;
    const nx = cx + sin * nr;
    const ny = cy - cos * nr;
    ctx.font = `600 ${9 * dpr}px Barlow, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255, 241, 221, 0.85)';
    ctx.fillText('N', nx, ny);
  }

  _glyph(ctx, kind, x, y, r) {
    ctx.beginPath();
    if (kind === 'education') ctx.arc(x, y, r * 0.85, 0, Math.PI * 2);
    else if (kind === 'project') ctx.rect(x - r * 0.8, y - r * 0.8, r * 1.6, r * 1.6);
    else if (kind === 'skills') {
      ctx.moveTo(x, y - r);
      ctx.lineTo(x + r * 0.95, y + r * 0.7);
      ctx.lineTo(x - r * 0.95, y + r * 0.7);
      ctx.closePath();
    } else {
      ctx.moveTo(x, y - r);
      ctx.lineTo(x + r, y);
      ctx.lineTo(x, y + r);
      ctx.lineTo(x - r, y);
      ctx.closePath();
    }
  }

  _label(ctx, text, x, y, color, dpr) {
    if (!text) return;
    const t = text.length > 26 ? `${text.slice(0, 25)}…` : text;
    ctx.font = `500 ${11 * dpr}px Barlow, system-ui, sans-serif`;
    // skip a label that would sit on top of one already drawn
    const w = ctx.measureText(t).width + 6 * dpr;
    const box = { l: x - w / 2, r: x + w / 2, t: y - 14 * dpr, b: y };
    if (this.labelBoxes.some((o) => box.l < o.r && box.r > o.l && box.t < o.b && box.b > o.t)) return;
    this.labelBoxes.push(box);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.lineWidth = 3 * dpr;
    ctx.strokeStyle = 'rgba(30, 14, 4, 0.75)';
    ctx.strokeText(t, x, y);
    ctx.fillStyle = color;
    ctx.fillText(t, x, y);
  }

  _tap(e) {
    const r = this.fullCanvas.getBoundingClientRect();
    const dpr = this.fullCanvas.width / r.width;
    const x = (e.clientX - r.left) * dpr;
    const y = (e.clientY - r.top) * dpr;
    let best = null;
    let bd = Infinity;
    for (const h of this.hits) {
      const d = Math.hypot(h.x - x, h.y - y);
      if (d < h.r && d < bd) {
        bd = d;
        best = h;
      }
    }
    if (best) {
      this.close();
      return this.onPick(best.pick);
    }
    // a spot on the sand
    const s = this.state;
    const W = this.fullCanvas.width;
    const H = this.fullCanvas.height;
    const k = Math.min(W, H) / 2 / this.fullRadius;
    const rr = (x - W / 2) / k;
    const vv = (y - H / 2) / k;
    const cos = Math.cos(s.camYaw);
    const sin = Math.sin(s.camYaw);
    this.close();
    this.onPick({ type: 'ground', x: s.px + rr * cos + vv * sin, z: s.pz - rr * sin + vv * cos });
  }
}
