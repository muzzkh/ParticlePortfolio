import { WormPit } from './wormpit.js';
import { ThopterRide } from './thopter.js';
import { SandRace } from './race.js';
import { GameHud, SiteLabel, loadBest, saveBest } from './common.js';

// The games are places in the desert, off to one side of where visitors start: the
// Worm Pit, an ornithopter to fly (the Thopter Ride) and the Sand Race. Walk onto a
// site's glowing ring (or pick its label) and press Space or tap to play. Each runs in
// the world itself, with the camera, the walker and the sand; Esc (or Leave) hands the
// desert back.
//
// A site's step() returns 'crash' (the game is lost), 'finish' (it's over, and the
// site's result() says how it went) or 'done' (nothing to score: back to the desert).
// meta.ready: seconds of "get ready"; meta.noBest: no score kept; meta.lowBest: lower
// is better (a time); meta.fmt: how to show a score; meta.verb: what Space does there.

const READY = 1.6;
const NEAR = 1.7; // how close to a start ring counts as standing on it
const LOSE = { worm: 'The pit takes the worm' };

export class GameGrounds {
  // deps: { scene, particles, trails, audio, tint(), rockMaterial, player, labelLayer,
  //         teleport(x, z, yaw, fade), travel(x, z), onStart(site), onEnd(site) }
  constructor(deps) {
    this.deps = deps;
    // on a phone, the games' sounds come with a little buzz
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const BUZZ = { pickup: 12, jump: 8, clear: 18, hit: 90, die: 140 };
    const audio = {
      blip: (name) => {
        deps.audio.blip(name);
        if (this.touchMode && !calm.matches && navigator.vibrate && BUZZ[name]) {
          try {
            navigator.vibrate(BUZZ[name]);
          } catch {
            /* not allowed here */
          }
        }
      },
    };
    const ctx = { scene: deps.scene, particles: deps.particles, trails: deps.trails, audio, tint: deps.tint, rockMaterial: deps.rockMaterial };
    this.sites = [new WormPit(ctx), new ThopterRide(ctx), new SandRace(ctx)];
    this.byId = new Map(this.sites.map((s) => [s.constructor.meta.id, s]));
    this.best = loadBest();
    this.touchMode = window.matchMedia('(pointer: coarse)').matches;
    this.hud = new GameHud(
      () => this.requestLeave(),
      (id, down) => {
        if (!this.active) return;
        if (this.state === 'over' && down) return this.restart();
        this.active.touch(id, down);
      },
    );
    // a big Play button while you stand on a site's ring (easier than the label on a phone)
    this.play = document.createElement('button');
    this.play.type = 'button';
    this.play.className = 'playbtn';
    this.play.hidden = true;
    this.play.addEventListener('click', () => this.tryStart());
    document.body.append(this.play);
    this.labels = new Map();
    for (const site of this.sites) {
      const meta = site.constructor.meta;
      const label = new SiteLabel(deps.labelLayer, meta, () => this._labelClick(site));
      this.labels.set(site, label);
      this._kicker(site);
    }
    this.active = null;
    this.state = 'idle';
    this.thrum = 0;
    this.nearSite = null;
    this.hidden = new Set();
    this.lastPick = -1;
    this.api = {
      player: deps.player,
      teleport: (x, z, yaw) => deps.teleport(x, z, yaw, false),
      setScore: (value, text) => {
        this.score = value;
        this.hud.setScore(text);
      },
      addScore: (n) => {
        this.score += n;
        this.hud.setScore(`${this.score} spice`);
      },
      thrum: (v) => (this.thrum = v),
      // the big message in the middle of the screen
      say: (big, small = '') => this.hud.message(big, small),
      // which way the camera looks (for controls that follow the screen)
      camYaw: () => (deps.camYaw ? deps.camYaw() : 0),
      portrait: () => window.innerWidth / window.innerHeight < 0.85,
    };
  }

  meta(site) {
    return site.constructor.meta;
  }

  _kicker(site) {
    const meta = this.meta(site);
    const b = meta.noBest ? 0 : this.best[meta.id];
    this.labels.get(site).setKicker(b ? `${meta.kicker} · best ${this._fmt(meta, b)}` : meta.kicker);
  }

  _fmt(meta, v) {
    return meta.fmt ? meta.fmt(v) : String(v);
  }

  // Off to the right of the starting view: the pit straight out, the ornithopter's pad
  // to one side, and the race's start line on the other with its course looping out
  // beyond it, each heading away from where visitors start.
  // settings: site.json `games` ({ worm: { hidden, place: { dx, dz, rot } }, … })
  layout(sx, sz, roadHeading, settings = {}) {
    const gh = roadHeading - Math.PI / 2;
    // [direction from the start, distance, turn of the course toward the open erg]
    const auto = { worm: [gh, 28, 0], ride: [gh + 0.9, 22, -0.55], race: [gh - 0.62, 52, 0] };
    this.spawn = { x: sx, z: sz };
    this.hidden.clear();
    for (const site of this.sites) {
      const id = this.meta(site).id;
      const conf = (settings && settings[id]) || {};
      if (conf.hidden) this.hidden.add(site);
      site.group.visible = !conf.hidden;
      let x;
      let z;
      let turn;
      const p = conf.place;
      const [a, d, autoTurn] = auto[id];
      if (p && Number.isFinite(p.dx) && Number.isFinite(p.dz)) {
        x = sx + p.dx;
        z = sz + p.dz;
        turn = ((Number.isFinite(p.rot) ? p.rot : 0) * Math.PI) / 180;
      } else {
        x = sx + Math.cos(a) * d;
        z = sz + Math.sin(a) * d;
        turn = autoTurn;
      }
      // heading away from the start, turned (in degrees when placed by hand)
      const away = Math.atan2(z - sz, x - sx);
      site.place(x, z, [Math.cos(away + turn), Math.sin(away + turn)]);
      site.pos = { x, z };
      site.turnDeg = (turn * 180) / Math.PI;
    }
  }

  visible() {
    return this.sites.filter((s) => !this.hidden.has(s));
  }

  // stones and pads keep off the sites
  keepsClear(x, z, r) {
    return this.visible().some((s) => s.keepsClear(x, z, r));
  }

  // rocks keep off the sites and the lines the games run along
  corridor(x, z, r) {
    return this.visible().some((s) => (s.corridor ? s.corridor(x, z, r) : s.keepsClear(x, z, r)));
  }

  collide(pos, r, vel) {
    for (const s of this.visible()) s.collide(pos, r, vel);
  }

  // ---------------------------------------------------------------- placement mode
  // Each site as something the editor can pick, drag and turn, like a stone or a pad.
  // Its id is "game:<id>"; its turn is the course's heading relative to "away from the
  // start", in degrees.
  editSites() {
    if (!this.handles) {
      const RADIUS = { worm: 9.6, ride: 3.8, race: 5 };
      this.handles = this.sites.map((site) => {
        const id = this.meta(site).id;
        return {
          kind: 'game',
          site,
          root: site.group,
          radius: RADIUS[id],
          entry: { id: `game:${id}`, title: this.meta(site).title },
          get x() {
            return site.pos.x;
          },
          get z() {
            return site.pos.z;
          },
          get y() {
            return site.startPoint.y;
          },
        };
      });
    }
    return this.handles.filter((h) => !this.hidden.has(h.site));
  }

  editSite(id) {
    return this.editSites().find((h) => h.entry.id === id) || null;
  }

  editSiteOf(object) {
    for (let o = object; o; o = o.parent) {
      if (!o.visible) return null; // pooled pieces waiting out of sight
      const h = this.editSites().find((x) => x.root === o);
      if (h) return h;
    }
    return null;
  }

  _replace(site, x, z, turnDeg) {
    const away = Math.atan2(z - this.spawn.z, x - this.spawn.x);
    const a = away + (turnDeg * Math.PI) / 180;
    site.place(x, z, [Math.cos(a), Math.sin(a)]);
    site.pos = { x, z };
    site.turnDeg = turnDeg;
  }

  moveSite(h, x, z) {
    this._replace(h.site, x, z, h.site.turnDeg || 0);
  }

  turnSite(h, deg) {
    const d = ((((deg + 180) % 360) + 360) % 360) - 180;
    this._replace(h.site, h.site.pos.x, h.site.pos.z, d);
  }

  siteRotation(h) {
    return Math.round((h.site.turnDeg || 0) * 10) / 10;
  }

  // ---------------------------------------------------------------- playing
  start(site) {
    if (this.active || this.hidden.has(site)) return;
    this.active = site;
    const meta = this.meta(site);
    this.hud.show(meta.title);
    this.hud.setHint(this.touchMode ? meta.touchKeys : meta.keys);
    this.hud.buttons(this.touchMode ? meta.buttons : []);
    this.deps.onStart(site);
    this._ready();
  }

  _ready() {
    const meta = this.meta(this.active);
    this.state = 'ready';
    this.timer = meta.ready ?? READY;
    this.score = 0;
    this.newBest = false;
    this.hud.setScore('');
    this.hud.message(meta.title, meta.howto);
    this.active.reset(this.api);
  }

  restart() {
    if (this.state !== 'over' || this.timer > 0) return;
    this._ready();
  }

  // Esc or Leave: a site can ask for a moment first (the ornithopter lands)
  requestLeave() {
    if (!this.active) return;
    if (this.state === 'play' && this.active.leave && this.active.leave()) return;
    this.stop();
  }

  // stay: leave the walker where it is (a new world is coming anyway)
  stop(stay = false) {
    const site = this.active;
    if (!site) return;
    site.end(this.api);
    this.hud.hide();
    this.active = null;
    this.state = 'idle';
    this.thrum = 0;
    this.deps.onEnd(site);
    // back to the start ring if the game took you away from it
    // (or beside wherever you left it: the ornithopter)
    const p = this.deps.player.pos;
    const sp = site.startPoint;
    const out = site.exitPoint ? site.exitPoint() : { x: sp.x, z: sp.z, yaw: Math.atan2(site.pos.x - sp.x, site.pos.z - sp.z) };
    if (!stay && Math.hypot(p.x - out.x, p.z - out.z) > 4) this.deps.teleport(out.x, out.z, out.yaw, true);
  }

  // the game is over: lost (no result), or finished with a result from the site
  // ({ score, big, line })
  _over(result = null) {
    const site = this.active;
    const meta = this.meta(site);
    this.state = 'over';
    this.timer = 0.7;
    if (result) this.score = result.score;
    const best = this.best[meta.id];
    const better = !meta.noBest && (best === undefined || best === null || (meta.lowBest ? this.score < best : this.score > best));
    if (better && (meta.lowBest || this.score > 0)) {
      this.best[meta.id] = this.score;
      saveBest(this.best);
      this.newBest = true;
      this._kicker(site);
    }
    const again = this.touchMode ? 'Tap to go again' : 'Space to go again · Esc to leave';
    const bestText = this.newBest && result ? 'a new best!' : `best ${this._fmt(meta, this.best[meta.id] || 0)}`;
    if (result) this.hud.message(result.big, `${result.line} · ${bestText} · ${again}`);
    else this.hud.message(this.newBest ? 'New best!' : LOSE[meta.id] || 'Game over', `${this.hud.score.textContent || this.score} · ${bestText} · ${again}`);
  }

  // a key while a game runs: true when the game used it
  key(e, down) {
    if (!this.active) return false;
    if (e.code === 'Escape') {
      if (down && !e.repeat) this.requestLeave();
      return true;
    }
    if (this.state === 'over') {
      if (down && (e.code === 'Space' || e.code === 'Enter')) this.restart();
      return ['Space', 'Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code);
    }
    return this.active.key(e.code, down);
  }

  pointer(type, e, ground) {
    if (!this.active) return false;
    if (this.state === 'over') {
      if (type === 'down') this.restart();
      return true;
    }
    this.active.pointer(type, ground, e);
    return true;
  }

  // Space on a start ring
  tryStart() {
    if (this.active || !this.nearSite) return false;
    this.start(this.nearSite);
    return true;
  }

  _labelClick(site) {
    if (this.active) return;
    if (this.nearSite === site) this.start(site);
    else this.deps.travel(site.startPoint.x, site.startPoint.z);
  }

  // the next site to head for (the P key and the Games button)
  next(px, pz) {
    const list = this.visible();
    if (!list.length) return null;
    // start with the nearest; after that, take them in turn
    let i;
    if (this.lastPick < 0) {
      i = 0;
      let best = Infinity;
      list.forEach((s, k) => {
        const d = Math.hypot(s.startPoint.x - px, s.startPoint.z - pz);
        if (d < best) {
          best = d;
          i = k;
        }
      });
    } else i = (this.lastPick + 1) % list.length;
    this.lastPick = i;
    return list[i];
  }

  // what the walker does this frame: { input } to drive it, { hold } to keep it still,
  // and { hidden } while aboard something; null when no game is running
  walker() {
    if (!this.active) return null;
    return this.active.walker(this.state, this.deps.player);
  }

  // true while the game running leaves the camera's turn to the visitor
  freeView() {
    return !!this.active && this.active.view.yaw === null;
  }

  view(aspect) {
    if (!this.active) return null;
    this.active.updateView(aspect, this.deps.player);
    return this.active.view;
  }

  update(dt, t, { px, pz, entered, camera }) {
    if (this.active) {
      if (this.state === 'ready') {
        this.timer -= dt;
        if (this.timer <= 0) {
          this.state = 'play';
          this.hud.message('');
        }
      } else if (this.state === 'over') {
        this.timer -= dt;
      }
      const r = this.active.step(dt, t, this.state, this.api);
      if (r === 'crash' && this.state === 'play') this._over();
      else if (r === 'finish' && this.state === 'play') this._over(this.active.result());
      else if (r === 'done') this.stop();
    } else {
      this.thrum += (0 - this.thrum) * (1 - Math.exp(-dt * 3));
    }
    // who's standing on a start ring
    let near = null;
    if (entered && !this.active) {
      for (const s of this.visible()) {
        if (Math.hypot(px - s.startPoint.x, pz - s.startPoint.z) < NEAR) near = s;
      }
    }
    if (near !== this.nearSite) {
      this.play.hidden = !near;
      if (near) {
        const m = this.meta(near);
        this.play.replaceChildren(document.createTextNode(m.action || `Play ${m.title}`));
        if (!this.touchMode) {
          const k = document.createElement('kbd');
          k.textContent = 'Space';
          this.play.append(k);
        }
      }
    }
    this.nearSite = near;
    for (const site of this.sites) {
      if (site !== this.active) site.idle(dt, t, site === near);
      const label = this.labels.get(site);
      label.setNear(site === near, this.touchMode);
      label.update(site.anchor, camera, entered && !this.active && !this.hidden.has(site));
    }
  }
}
