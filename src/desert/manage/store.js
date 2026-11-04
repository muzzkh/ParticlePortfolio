// The editor's working copy of site.json, its undo history, and files added in this
// session that haven't been published yet.

export const clone = (v) => JSON.parse(JSON.stringify(v));

export class Store {
  constructor() {
    this.site = null;
    this.baseText = '';
    this.baseSha = null;
    this.pending = new Map(); // repo-relative public path -> { blob, url, size, type, name }
    this.published = new Map(); // files published this session: keep previews until the deploy lands
    this.undoStack = [];
    this.redoStack = [];
    this.subs = new Set();
    this.lastKey = null;
    this.lastAt = 0;
  }

  subscribe(fn) {
    this.subs.add(fn);
    return () => this.subs.delete(fn);
  }

  emit(ev) {
    for (const fn of this.subs) fn(ev);
  }

  load(site, baseSha, baseText) {
    this.site = clone(site);
    this.baseText = baseText ?? JSON.stringify(site);
    this.baseSha = baseSha;
    this.undoStack = [];
    this.redoStack = [];
    this.lastKey = null;
    this.emit({ type: 'load' });
  }

  get dirty() {
    return this.pendingInUse().length > 0 || JSON.stringify(this.site) !== JSON.stringify(JSON.parse(this.baseText || 'null'));
  }

  // added files the content refers to (others were added, then replaced or removed)
  pendingInUse() {
    return [...this.pending.keys()].filter((p) => this.isReferenced(p));
  }

  removeFile(path) {
    const f = this.pending.get(path);
    if (!f) return;
    URL.revokeObjectURL(f.url);
    this.pending.delete(path);
    this.emit({ type: 'files' });
  }

  // fn mutates the site. Changes with the same key in quick succession (typing in one
  // field, dragging one stone) become a single undo step.
  change(fn, key = null) {
    const now = Date.now();
    const merge = key && key === this.lastKey && now - this.lastAt < 1200;
    if (!merge) {
      this.undoStack.push(JSON.stringify(this.site));
      if (this.undoStack.length > 400) this.undoStack.shift();
    }
    this.redoStack = [];
    this.lastKey = key;
    this.lastAt = now;
    fn(this.site);
    this.emit({ type: 'change', key });
  }

  // stop merging, so the next change starts a fresh undo step
  seal() {
    this.lastKey = null;
  }

  get canUndo() {
    return this.undoStack.length > 0;
  }

  get canRedo() {
    return this.redoStack.length > 0;
  }

  undo() {
    if (!this.undoStack.length) return;
    this.redoStack.push(JSON.stringify(this.site));
    this.site = JSON.parse(this.undoStack.pop());
    this.lastKey = null;
    this.emit({ type: 'history' });
  }

  redo() {
    if (!this.redoStack.length) return;
    this.undoStack.push(JSON.stringify(this.site));
    this.site = JSON.parse(this.redoStack.pop());
    this.lastKey = null;
    this.emit({ type: 'history' });
  }

  addFile(path, blob, name) {
    const old = this.pending.get(path);
    if (old) URL.revokeObjectURL(old.url);
    this.pending.set(path, { blob, url: URL.createObjectURL(blob), size: blob.size, type: blob.type, name: name || path.split('/').pop() });
    this.emit({ type: 'files' });
  }

  // object URLs standing in for files that aren't live yet
  overrides() {
    const m = new Map();
    for (const [p, f] of this.published) m.set(p, f.url);
    for (const [p, f] of this.pending) m.set(p, f.url);
    return m;
  }

  isReferenced(path) {
    return JSON.stringify(this.site).includes(JSON.stringify(path).slice(1, -1));
  }

  entry(id) {
    return this.site.entries.find((e) => e.id === id) || null;
  }

  // uploaded: the added files that went out with it (the rest stay pending)
  markPublished(text, sha, uploaded = [...this.pending.keys()]) {
    this.baseText = text;
    this.baseSha = sha;
    for (const p of uploaded) {
      const f = this.pending.get(p);
      if (!f) continue;
      this.published.set(p, f);
      this.pending.delete(p);
    }
    this.emit({ type: 'published' });
  }

  // swap the whole site for another (an import, an older version, discarding changes)
  replace(next, key = 'struct:replace') {
    this.change((s) => {
      for (const k of Object.keys(s)) delete s[k];
      Object.assign(s, clone(next));
    }, key);
    this.seal();
  }
}
