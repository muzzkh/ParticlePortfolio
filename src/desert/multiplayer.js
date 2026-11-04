import * as THREE from 'three';
import { Fremen } from './character.js';
import { LaunchKey } from './atomics.js';

// Other visitors in the same world, as walkers you can see.
//
// Two transports feed one list of peers, keyed by a per-visit session id:
//  - over the internet, trystero: peer-to-peer WebRTC data channels, with peers finding
//    each other through public Nostr relays (no server of our own). Peers see each
//    other's IP addresses, as with any WebRTC connection.
//  - between tabs of the same browser, a BroadcastChannel (handy for testing).
// Rooms are per world seed, so only people in the same world meet.

const APP_ID = 'muzzamilkhan.com/arrakis';
const SEND_EVERY = 0.12; // s, while moving
const HEARTBEAT = 2; // s, while still
const TIMEOUT = 12; // s without word and a peer is gone
const MAX_PEERS = 12;
const NAMES = ['Wanderer', 'Nomad', 'Scout', 'Sandwalker', 'Pilgrim', 'Drifter', 'Ranger', 'Seeker', 'Traveller', 'Watcher'];

const finite = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < 1e6;

export class Multiplayer {
  // hooks: { onCount(n), onStrike(order), onFootstep(info), labelLayer }
  constructor(scene, hooks) {
    this.scene = scene;
    this.hooks = hooks;
    this.sid = Math.random().toString(36).slice(2, 10);
    this.name = `${NAMES[Math.floor(Math.random() * NAMES.length)]} ${10 + Math.floor(Math.random() * 90)}`;
    this.hue = Math.random();
    this.enabled = true;
    this.room = null;
    this.peers = new Map(); // sid -> peer
    this.rtcPeers = new Map(); // trystero peer id -> sid
    this.seen = new Set(); // strike nonces already handled
    this.sendAcc = 0;
    this.lastSent = null;
    this._v = new THREE.Vector3();
  }

  get count() {
    return this.peers.size;
  }

  setEnabled(on) {
    if (on === this.enabled) return;
    this.enabled = on;
    if (on) this.join(this.room);
    else this._leave();
  }

  join(room) {
    this._leave();
    this.room = room;
    if (!this.enabled || !room) return;
    // same-browser tabs
    if ('BroadcastChannel' in window) {
      const bc = new BroadcastChannel(`arrakis:${room}`);
      bc.onmessage = (e) => this._receive(e.data, null);
      this.bc = bc;
    }
    // everyone else; loaded on demand so the page never waits for it
    const token = (this.joinToken = {});
    import('trystero')
      .then(({ joinRoom }) => {
        if (token !== this.joinToken) return; // left or moved on meanwhile
        const rtc = joinRoom({ appId: APP_ID }, room);
        const msg = rtc.makeAction('msg');
        msg.onMessage = (data, meta) => this._receive(data, meta && meta.peerId ? meta.peerId : meta);
        rtc.onPeerJoin = () => {
          this.lastSent = null; // introduce ourselves on the next tick
        };
        rtc.onPeerLeave = (peerId) => {
          const sid = this.rtcPeers.get(peerId);
          this.rtcPeers.delete(peerId);
          if (sid) this._drop(sid);
        };
        this.rtc = rtc;
        this.rtcMsg = msg;
      })
      .catch(() => {
        /* no peer-to-peer here; same-browser tabs still work */
      });
    this.lastSent = null;
  }

  _leave() {
    this.joinToken = null;
    if (this.bc) {
      try {
        this.bc.postMessage({ sid: this.sid, kind: 'bye' });
      } catch {
        /* closing anyway */
      }
      this.bc.close();
      this.bc = null;
    }
    if (this.rtc) {
      try {
        this.rtc.leave();
      } catch {
        /* already gone */
      }
      this.rtc = null;
      this.rtcMsg = null;
    }
    for (const sid of [...this.peers.keys()]) this._drop(sid);
    this.rtcPeers.clear();
  }

  _send(packet) {
    const data = { sid: this.sid, ...packet };
    if (this.bc) this.bc.postMessage(data);
    if (this.rtcMsg) this.rtcMsg.send(data);
  }

  broadcastStrike(signed) {
    if (this.enabled) this._send({ kind: 'strike', strike: signed });
  }

  _receive(data, rtcPeer) {
    if (!data || typeof data !== 'object' || typeof data.sid !== 'string' || data.sid === this.sid || data.sid.length > 16) return;
    if (rtcPeer) this.rtcPeers.set(rtcPeer, data.sid);
    if (data.kind === 'bye') return this._drop(data.sid);
    if (data.kind === 'strike') {
      const order = LaunchKey.verify(data.strike);
      if (!order || order.room !== this.room || this.seen.has(order.nonce)) return;
      if (Math.abs(Date.now() - order.ts) > 120000 || !Array.isArray(order.targets) || order.targets.length > 12) return;
      if (!order.targets.every((t) => Array.isArray(t) && finite(t[0]) && finite(t[1]))) return;
      this.seen.add(order.nonce);
      this.hooks.onStrike(order);
      return;
    }
    if (data.kind !== 'pose' || !finite(data.x) || !finite(data.z)) return;
    let peer = this.peers.get(data.sid);
    if (!peer) {
      if (this.peers.size >= MAX_PEERS) return;
      peer = this._add(data);
    }
    peer.target.x = data.x;
    peer.target.z = data.z;
    peer.target.run = !!data.r;
    peer.target.moving = !!data.m;
    peer.seen = performance.now();
    if (typeof data.n === 'string' && data.n !== peer.name) {
      peer.name = data.n.slice(0, 24);
      peer.label.textContent = peer.name;
    }
  }

  _add(data) {
    const avatar = new Fremen();
    const hue = finite(data.h) ? ((data.h % 1) + 1) % 1 : Math.random();
    avatar.materials.cloth.color.setHSL(hue, 0.32, 0.4);
    avatar.spawn(data.x, data.z, 0);
    avatar.onFootstep = (s) => this.hooks.onFootstep(s);
    this.scene.add(avatar.root);
    const label = document.createElement('div');
    label.className = 'peer-label';
    label.textContent = typeof data.n === 'string' ? data.n.slice(0, 24) : 'Wanderer';
    this.hooks.labelLayer.append(label);
    const peer = { sid: data.sid, name: label.textContent, avatar, label, target: { x: data.x, z: data.z, run: false, moving: false }, seen: performance.now() };
    this.peers.set(data.sid, peer);
    this.hooks.onCount(this.peers.size);
    return peer;
  }

  _drop(sid) {
    const p = this.peers.get(sid);
    if (!p) return;
    this.scene.remove(p.avatar.root);
    p.avatar.root.traverse((o) => {
      if (o.isMesh) o.geometry.dispose();
    });
    p.label.remove();
    this.peers.delete(sid);
    this.hooks.onCount(this.peers.size);
  }

  // me: { x, z, run, moving, active } — active is false until the visitor has entered
  update(dt, me, env) {
    if (!this.enabled || !this.room) return;
    // tell the others where we are: often while moving, now and then while still
    if (me.active) {
      this.sendAcc += dt;
      const moved = !this.lastSent || Math.hypot(me.x - this.lastSent.x, me.z - this.lastSent.z) > 0.05;
      if ((moved && this.sendAcc >= SEND_EVERY) || this.sendAcc >= HEARTBEAT || !this.lastSent) {
        this.sendAcc = 0;
        this.lastSent = { x: me.x, z: me.z };
        this._send({ kind: 'pose', x: Math.round(me.x * 100) / 100, z: Math.round(me.z * 100) / 100, r: me.run ? 1 : 0, m: me.moving ? 1 : 0, n: this.name, h: Math.round(this.hue * 1000) / 1000 });
      }
    }
    // walk each visitor toward where they last said they were
    const now = performance.now();
    for (const p of this.peers.values()) {
      if (now - p.seen > TIMEOUT * 1000) {
        this._drop(p.sid);
        continue;
      }
      const a = p.avatar;
      const dx = p.target.x - a.pos.x;
      const dz = p.target.z - a.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 16) a.spawn(p.target.x, p.target.z, a.yaw);
      const input = { x: 0, z: 0, run: false };
      if (d > 0.2) {
        const m = Math.min(1, d / 1.2);
        input.x = (dx / d) * m;
        input.z = (dz / d) * m;
        input.run = p.target.run || d > 3;
      }
      a.update(dt, input, { wind: env.wind, onRock: true, collide: env.collide });
    }
  }

  // name tags over the other walkers
  updateLabels(camera, W, H) {
    for (const p of this.peers.values()) {
      this._v.set(p.avatar.pos.x, p.avatar.pos.y + 2.3, p.avatar.pos.z).project(camera);
      const x = (this._v.x * 0.5 + 0.5) * W;
      const y = (-this._v.y * 0.5 + 0.5) * H;
      const on = x > -40 && x < W + 40 && y > -20 && y < H + 20;
      p.label.style.visibility = on ? 'visible' : 'hidden';
      if (on) p.label.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
    }
  }
}
