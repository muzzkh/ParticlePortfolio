// /management: the editor for everything on the site.
//
// Sign-in: the first visit on a device asks for a GitHub fine-grained token (Contents:
// read and write, on the site's repository only) and a password; the token is kept in
// this browser, encrypted with the password (see vault.js). Later visits ask for the
// password. Nothing here is secret: without the token, this page can't change anything.
//
// Editing works on a copy of site.json: the list on the left, the world in the middle
// (the real desert in placement mode, index.html?edit), the details on the right.
// Unpublished work is kept in this browser (drafts.js) until it's published, which
// commits site.json and any added images, models and PDFs to the repository in one
// commit; the site's workflow then rebuilds and deploys it.
//
// Where the repository isn't configured (this source repo), it runs in local mode: the
// Vite dev server writes the files into the project, or they download.

import './manage.css';
import bundledSite, { manage as manageConfig } from '../resume/content.js';
import { setAssetRoot, setAssetOverrides, assetUrl } from '../assets.js';
import { renderMarkdown } from '../richtext.js';
import { KINDS, newEntry, slug, yearSpan } from '../resume/normalize.js';
import { h, toast, dialog, confirmDialog, timeAgo } from './dom.js';
import { Store, clone } from './store.js';
import { GitHub } from './github.js';
import { vaultInfo, saveToken, openVault, forgetVault } from './vault.js';
import { saveDraft, loadDraft, clearDraft } from './drafts.js';
import { prepareImage, fileSlug, shortId, humanSize, blobToBase64, MODEL_WARN, MODEL_MAX } from './media.js';
import { renderInspector } from './inspector.js';

setAssetRoot('../');

const cfg = { branch: 'main', contentPath: 'src/resume/site.json', publicDir: 'public', ...(manageConfig || {}) };
const REMOTE = !!(cfg.owner && cfg.repo);
const REPO_KEY = REMOTE ? `${cfg.owner}/${cfg.repo}@${cfg.branch}` : 'local';
const IDLE_LOCK = 30 * 60 * 1000;
const IMAGE_MAX_IN = 30 * 1024 * 1024;
const PDF_MAX = 25 * 1024 * 1024;
const SAFE_HREF = /^(https?:\/\/|mailto:|tel:|\/|\.\.?\/|#)|^[\w.-]+\.(pdf|html?)$/i;

const root = document.getElementById('app');
const store = new Store();
let token = null; // the GitHub token, in memory while unlocked
let gh = null;
let sel = { type: 'none' };
let world = null; // the edit-mode API inside the world view
let ui = null; // the editor's elements, once it's up
let devSave = false; // the Vite dev server can write files (local mode)
let liveFingerprint = null; // which build the live site is serving
let deployState = null; // null | 'deploying' | 'live' | 'sent'
let draftTimer = 0;
let draftUnsaved = false;
let lastActive = Date.now();

const titleOf = (e) => (e && e.title) || 'Untitled';
const isStone = (e) => e.kind !== 'project';
const entryById = (id) => store.site.entries.find((e) => e.id === id) || null;
const pretty = (site) => `${JSON.stringify(site, null, 2)}\n`;
const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

function isTextField(el) {
  if (!el) return false;
  if (el.isContentEditable || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') return true;
  return el.tagName === 'INPUT' && !['checkbox', 'radio', 'range', 'button', 'submit', 'file', 'color'].includes(el.type);
}

function checkShape(site) {
  if (!site || typeof site !== 'object' || !site.profile || !Array.isArray(site.entries)) {
    throw new Error('That isn’t a site.json this editor understands (it needs a profile and a list of entries).');
  }
  return site;
}

let baseCache = { text: null, site: null };
function baseSite() {
  if (baseCache.text !== store.baseText) {
    let s = null;
    try {
      s = store.baseText ? JSON.parse(store.baseText) : null;
    } catch {
      s = null;
    }
    baseCache = { text: store.baseText, site: s };
  }
  return baseCache.site;
}

// ---------------------------------------------------------------------------
// what changed since the last publish
// ---------------------------------------------------------------------------
const FIELD_NAMES = {
  kind: 'kind',
  title: 'title',
  org: 'organization',
  status: 'status',
  period: 'dates',
  years: 'years label',
  location: 'location',
  summary: 'lead-in',
  bullets: 'highlights',
  body: 'details',
  cover: 'cover image',
  coverAlt: 'alt text',
  tags: 'tags',
  tagsLabel: 'tags heading',
  facts: 'facts',
  links: 'links',
  groups: 'skill groups',
  model: '3D model',
  place: 'placement',
  scale: 'size',
  hidden: 'visibility',
};
const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

function diffSites(a, b) {
  const out = [];
  a = a || { profile: {}, site: {}, world: {}, entries: [] };
  if (!same(a.profile, b.profile)) out.push({ area: 'profile', text: 'Profile and intro', short: 'edit profile', revert: (s) => (s.profile = clone(a.profile || {})) });
  if (!same(a.site, b.site)) out.push({ area: 'site', text: 'Site settings (résumé PDF)', short: 'update site settings', revert: (s) => (s.site = clone(a.site || {})) });
  if (!same(a.world, b.world)) out.push({ area: 'world', text: 'World (seed and time of day)', short: 'update world', revert: (s) => (s.world = clone(a.world || {})) });
  const am = new Map(a.entries.map((e, i) => [e.id, { e, i }]));
  const bm = new Map(b.entries.map((e) => [e.id, e]));
  for (const e of b.entries) {
    const o = am.get(e.id);
    if (!o) {
      out.push({ area: 'entry', op: 'added', id: e.id, text: `Added “${titleOf(e)}”`, short: `add “${titleOf(e)}”`, revert: (s) => (s.entries = s.entries.filter((x) => x.id !== e.id)) });
    } else if (!same(o.e, e)) {
      const keys = [...new Set([...Object.keys(o.e), ...Object.keys(e)])].filter((k) => k !== 'id' && !same(o.e[k], e[k]));
      const what = keys.map((k) => FIELD_NAMES[k] || k);
      out.push({
        area: 'entry',
        op: 'edited',
        id: e.id,
        text: `Edited “${titleOf(e)}”`,
        detail: what.join(', '),
        short: keys.length === 1 && keys[0] === 'place' ? `move “${titleOf(e)}”` : `edit “${titleOf(e)}”`,
        revert: (s) => {
          const i = s.entries.findIndex((x) => x.id === e.id);
          if (i >= 0) s.entries[i] = clone(o.e);
        },
      });
    }
  }
  for (const [id, o] of am) {
    if (!bm.has(id)) {
      out.push({
        area: 'entry',
        op: 'removed',
        id,
        text: `Removed “${titleOf(o.e)}”`,
        short: `remove “${titleOf(o.e)}”`,
        revert: (s) => {
          if (s.entries.some((x) => x.id === id)) return;
          s.entries.splice(Math.min(o.i, s.entries.length), 0, clone(o.e));
        },
      });
    }
  }
  const order = (s) =>
    s.entries
      .filter((e) => am.has(e.id) && bm.has(e.id))
      .map((e) => e.id)
      .join('\n');
  if (order(a) !== order(b)) out.push({ area: 'order', text: 'Order of entries', short: 'reorder entries' });
  return out;
}

function changeList() {
  return diffSites(baseSite(), store.site);
}

function changedIds() {
  return new Set(changeList().filter((c) => c.id && c.op !== 'removed').map((c) => c.id));
}

function commitMessage(changes, files) {
  const parts = changes.map((c) => c.short);
  if (!parts.length && files.length) parts.push(`update ${plural(files.length, 'file')}`);
  let msg = '';
  for (let i = 0; i < parts.length; i++) {
    const next = `${msg ? `${msg}, ` : ''}${parts[i]}`;
    if (next.length > 64 && msg) {
      msg += ` and ${parts.length - i} more`;
      break;
    }
    msg = next;
  }
  msg = msg.charAt(0).toUpperCase() + msg.slice(1);
  return `Site: ${msg}`;
}

// ---------------------------------------------------------------------------
// tidy and check before publishing
// ---------------------------------------------------------------------------
function cleanSite(src) {
  const s = clone(src);
  const text = (v) => typeof v === 'string' && v.trim() !== '';
  for (const e of s.entries) {
    if (Array.isArray(e.bullets)) e.bullets = e.bullets.filter(text);
    if (Array.isArray(e.tags)) e.tags = e.tags.filter(text);
    if (Array.isArray(e.links)) e.links = e.links.filter((l) => l && text(l.href));
    if (Array.isArray(e.facts)) e.facts = e.facts.filter((f) => Array.isArray(f) && text(f[0]));
    if (Array.isArray(e.groups)) for (const g of e.groups) g.items = (g.items || []).filter(text);
  }
  if (s.profile && Array.isArray(s.profile.links)) s.profile.links = s.profile.links.filter((l) => l && text(l.href));
  return s;
}

function validate(site) {
  const errors = [];
  const warnings = [];
  if (!(site.profile && String(site.profile.name || '').trim())) errors.push({ text: 'The profile has no name.', sel: { type: 'profile' } });
  const seen = new Set();
  for (const e of site.entries) {
    const at = { type: 'entry', id: e.id };
    if (!e.id) errors.push({ text: `“${titleOf(e)}” has no ID.`, sel: at });
    else if (seen.has(e.id)) errors.push({ text: `Two entries share the ID “${e.id}”.`, sel: at });
    seen.add(e.id);
    if (!String(e.title || '').trim()) errors.push({ text: 'An entry has no title.', sel: at });
    if (e.kind === 'project' && e.model && e.model.type === 'glb' && !e.model.src) warnings.push({ text: `“${titleOf(e)}” is set to use your own model, but none is chosen; its pad shows a placeholder.`, sel: at });
    if (e.cover && !String(e.coverAlt || '').trim()) warnings.push({ text: `The cover image on “${titleOf(e)}” has no alt text.`, sel: at });
    for (const l of e.links || []) {
      if (!SAFE_HREF.test(String(l.href).trim())) warnings.push({ text: `“${titleOf(e)}” links to “${l.href}”, which doesn’t look like a web address.`, sel: at });
      if (!String(l.label || '').trim()) warnings.push({ text: `A link on “${titleOf(e)}” has no label.`, sel: at });
    }
  }
  for (const l of site.profile.links || []) if (!SAFE_HREF.test(String(l.href).trim())) warnings.push({ text: `The contact link “${l.label || l.href}” doesn’t look like a web or mail address.`, sel: { type: 'profile' } });
  if (!site.entries.some((e) => !e.hidden)) warnings.push({ text: 'Every entry is hidden, so the desert will be empty.' });
  return { errors, warnings };
}

// ---------------------------------------------------------------------------
// sign in
// ---------------------------------------------------------------------------
const glyph = () => h('span', { class: 'm-glyph', 'aria-hidden': 'true' });
let authOverlay = null;

function screen(el, overlay = false) {
  if (overlay && ui) {
    if (authOverlay) authOverlay.remove();
    authOverlay = h('div', { class: 'm-lock' }, el);
    document.body.append(authOverlay);
  } else {
    root.replaceChildren(el);
  }
  const first = el.querySelector('input:not([hidden])');
  if (first) first.focus();
}

function authCard(...kids) {
  return h(
    'div',
    { class: 'm-auth' },
    h('div', { class: 'm-auth-card' }, h('div', { class: 'm-auth-brand' }, glyph(), h('b', { text: 'Management' }), h('span', { text: location.host || 'local' })), ...kids),
  );
}

function busy(btn, text) {
  btn.dataset.label = btn.textContent;
  btn.textContent = text;
  btn.disabled = true;
}
function unbusy(btn) {
  btn.textContent = btn.dataset.label || btn.textContent;
  btn.disabled = false;
}

const field = (label, input, hintText) => h('label', { class: 'm-field' }, h('span', { text: label }), input, hintText ? h('small', { text: hintText }) : null);

function showSetup(message = '', overlay = false) {
  const tokenIn = h('input', { class: 'm-input', type: 'password', autocomplete: 'off', spellcheck: 'false', placeholder: 'github_pat_…', name: 'token' });
  const pw1 = h('input', { class: 'm-input', type: 'password', autocomplete: 'new-password', name: 'new-password' });
  const pw2 = h('input', { class: 'm-input', type: 'password', autocomplete: 'new-password', name: 'confirm-password' });
  const err = h('p', { class: 'm-auth-error', role: 'alert', text: message });
  const btn = h('button', { type: 'submit', class: 'm-btn primary wide' }, 'Set up this device');
  const repo = `${cfg.owner}/${cfg.repo}`;
  const form = h(
    'form',
    {
      class: 'm-auth-form',
      onsubmit: async (e) => {
        e.preventDefault();
        err.textContent = '';
        const t = tokenIn.value.trim();
        if (!t) return (err.textContent = 'Paste the token from GitHub.');
        if (pw1.value.length < 8) return (err.textContent = 'Use a password of at least 8 characters.');
        if (pw1.value !== pw2.value) return (err.textContent = 'The two passwords don’t match.');
        busy(btn, 'Checking the token with GitHub…');
        try {
          const client = new GitHub(t, cfg);
          const info = await client.check();
          if (info.canPush === false) throw new Error(`That token can read ${info.fullName} but can’t change it. Give it “Contents: Read and write”.`);
          await saveToken(t, pw1.value, REPO_KEY);
          await startSession(t, client);
        } catch (ex) {
          err.textContent = ex.message;
          unbusy(btn);
        }
      },
    },
    h('input', { type: 'text', name: 'username', autocomplete: 'username', value: `management@${location.host || 'local'}`, hidden: true }),
    field('GitHub token', tokenIn),
    field('Choose a password', pw1, 'You’ll type this to sign in on this device. It never leaves the browser.'),
    field('Type it again', pw2),
    err,
    btn,
  );
  const vault = vaultInfo();
  screen(
    authCard(
      h('h1', { text: vault ? 'Set up a new token' : 'Set up management' }),
      h('p', { class: 'm-auth-lede', text: `Publishing goes through GitHub, so this device needs a token that can change ${repo}. It’s stored here, encrypted with your password.` }),
      h(
        'ol',
        { class: 'm-steps' },
        h('li', {}, 'On GitHub, open ', h('a', { href: 'https://github.com/settings/personal-access-tokens/new', target: '_blank', rel: 'noopener' }, 'Settings → Developer settings → Fine-grained tokens → Generate new token'), '.'),
        h('li', {}, 'Repository access: ', h('b', { text: 'Only select repositories' }), ' → ', h('b', { text: repo }), '.'),
        h('li', {}, 'Permissions → Repository permissions → ', h('b', { text: 'Contents: Read and write' }), '. Nothing else is needed.'),
        h('li', {}, 'Generate it, copy it, and paste it below.'),
      ),
      form,
      vault ? h('p', { class: 'm-auth-alt' }, h('button', { type: 'button', class: 'm-link', onclick: () => showUnlock('', overlay) }, 'Back to sign in')) : null,
    ),
    overlay,
  );
}

function showUnlock(message = '', overlay = false) {
  const pw = h('input', { class: 'm-input', type: 'password', autocomplete: 'current-password', name: 'password' });
  const err = h('p', { class: 'm-auth-error', role: 'alert', text: message });
  const btn = h('button', { type: 'submit', class: 'm-btn primary wide' }, 'Sign in');
  const info = vaultInfo();
  const form = h(
    'form',
    {
      class: 'm-auth-form',
      onsubmit: async (e) => {
        e.preventDefault();
        err.textContent = '';
        if (!pw.value) return (err.textContent = 'Type your password.');
        busy(btn, 'Signing in…');
        const t = await openVault(pw.value).catch(() => null);
        if (!t) {
          await new Promise((r) => setTimeout(r, 600));
          unbusy(btn);
          pw.select();
          err.textContent = 'That password doesn’t match the one set on this device.';
          return;
        }
        try {
          await startSession(t);
        } catch (ex) {
          err.textContent = ex.message;
          unbusy(btn);
        }
      },
    },
    h('input', { type: 'text', name: 'username', autocomplete: 'username', value: `management@${location.host || 'local'}`, hidden: true }),
    field('Password', pw),
    err,
    btn,
  );
  screen(
    authCard(
      h('h1', { text: overlay ? 'Locked' : 'Sign in' }),
      h('p', { class: 'm-auth-lede', text: overlay ? 'Your work is kept. Sign in again to carry on.' : `Edit and publish ${location.host || 'the site'}.` }),
      form,
      h(
        'p',
        { class: 'm-auth-alt' },
        h('button', { type: 'button', class: 'm-link', onclick: () => showSetup('', overlay) }, 'Use a different token'),
        ' · ',
        h(
          'button',
          {
            type: 'button',
            class: 'm-link',
            onclick: async () => {
              if (!(await confirmDialog('Forget this device?', 'This removes the saved token from this browser. You’ll need a token from GitHub to set it up again. Unpublished drafts are kept.', 'Forget it', true))) return;
              forgetVault();
              showSetup('', overlay);
            },
          },
          'Forget this device',
        ),
      ),
      info && info.savedAt ? h('p', { class: 'm-auth-meta', text: `Set up ${timeAgo(info.savedAt)}.` }) : null,
    ),
    overlay,
  );
}

function showLoading(text) {
  root.replaceChildren(h('div', { class: 'm-auth' }, h('div', { class: 'm-loading' }, h('span', { class: 'm-spinner' }), h('span', { text }))));
}

function showLoadError(err) {
  screen(
    authCard(
      h('h1', { text: 'Couldn’t load the site' }),
      h('p', { class: 'm-auth-error', text: err.message }),
      h('div', { class: 'm-auth-row' }, h('button', { type: 'button', class: 'm-btn primary', onclick: () => location.reload() }, 'Try again'), h('button', { type: 'button', class: 'm-btn', onclick: () => showSetup() }, 'Use a different token')),
    ),
  );
}

async function startSession(t, client = null) {
  const next = client || new GitHub(t, cfg);
  if (!client) {
    try {
      await next.check();
    } catch (ex) {
      if (ex.status === 401) throw new Error('GitHub no longer accepts the saved token (it may have expired). Choose “Use a different token” to set up a new one.');
      throw ex;
    }
  }
  token = t;
  gh = next;
  lastActive = Date.now();
  if (ui) {
    // unlocked again after an idle lock
    if (authOverlay) authOverlay.remove();
    authOverlay = null;
    updateStatus();
    return;
  }
  showLoading('Loading the site…');
  let site;
  let sha = null;
  let text = '';
  try {
    const f = await gh.readText(cfg.contentPath);
    site = checkShape(JSON.parse(f.text));
    sha = f.sha;
    text = f.text;
  } catch (ex) {
    if (ex.status !== 404) return showLoadError(ex);
    site = clone(bundledSite);
    toast(`${cfg.contentPath} isn’t in the repository yet; publishing creates it.`);
  }
  await openEditor(site, sha, text);
}

// ---------------------------------------------------------------------------
// the editor
// ---------------------------------------------------------------------------
async function openEditor(site, sha, text) {
  store.load(site, sha, text);
  const d = await loadDraft();
  if (d && d.repo === REPO_KEY && d.site) {
    const ch = diffSites(site, d.site);
    const files = (d.files || []).filter((f) => JSON.stringify(d.site).includes(f.path));
    if (ch.length || files.length) {
      const moved = (d.baseSha || null) !== (sha || null);
      const choice = await dialog({
        title: 'Pick up where you left off?',
        dismissable: false,
        body: [
          h('p', { text: `You have changes from ${timeAgo(d.savedAt)} that haven’t been published.` }),
          h(
            'ul',
            { class: 'm-changes compact' },
            ch.slice(0, 8).map((c) => h('li', { text: c.text })),
            ch.length > 8 ? h('li', { text: `and ${ch.length - 8} more` }) : null,
            files.length ? h('li', { text: `${plural(files.length, 'added file')}` }) : null,
          ),
          moved ? h('p', { class: 'm-warn', text: 'The site has been published from somewhere else since then. If you keep these changes and publish, your version replaces that one.' }) : null,
        ],
        buttons: [
          { label: 'Discard them', value: 'discard' },
          { label: 'Keep working on them', value: 'keep', kind: 'primary' },
        ],
      });
      if (choice === 'keep') {
        store.site = clone(d.site);
        for (const f of d.files || []) store.addFile(f.path, f.blob, f.name);
      } else {
        await clearDraft();
      }
    }
  }
  setAssetOverrides(store.overrides());
  mountShell();
  fingerprint().then((fp) => (liveFingerprint = fp));
}

function mountShell() {
  const status = h('button', { type: 'button', class: 'm-status', title: 'See what’s changed', onclick: showChanges });
  const undoBtn = h('button', { type: 'button', class: 'm-btn icon', title: 'Undo (Ctrl/Cmd+Z)', 'aria-label': 'Undo', onclick: () => store.undo() }, '↶');
  const redoBtn = h('button', { type: 'button', class: 'm-btn icon', title: 'Redo (Ctrl/Cmd+Shift+Z)', 'aria-label': 'Redo', onclick: () => store.redo() }, '↷');
  const publishBtn = h('button', { type: 'button', class: 'm-btn primary', title: REMOTE ? 'Publish to the live site (Ctrl/Cmd+Enter)' : 'Save into the project (Ctrl/Cmd+Enter)', onclick: () => publish() }, REMOTE ? 'Publish' : 'Save');
  const menuBtn = h('button', { type: 'button', class: 'm-btn icon', title: 'More', 'aria-label': 'More', 'aria-haspopup': 'menu', onclick: (e) => openMenu(e.currentTarget, menuItems()) }, '⋯');
  const tabs = h(
    'nav',
    { class: 'm-tabs', 'aria-label': 'Panes' },
    [
      ['list', 'Entries'],
      ['world', 'World'],
      ['edit', 'Details'],
    ].map(([p, label]) => h('button', { type: 'button', 'data-p': p, onclick: () => showPane(p) }, label)),
  );
  const top = h(
    'header',
    { class: 'm-top' },
    h('a', { class: 'm-brand', href: '../', target: '_blank', rel: 'noopener', title: 'Open the live site' }, glyph(), h('b', { text: 'Management' })),
    status,
    tabs,
    h(
      'div',
      { class: 'm-top-actions' },
      undoBtn,
      redoBtn,
      h('span', { class: 'm-sep' }),
      h('button', { type: 'button', class: 'm-btn hide-narrow', title: 'Walk the unpublished site in a new tab, as a visitor would', onclick: previewAsVisitor }, 'Preview'),
      h('a', { class: 'm-btn hide-narrow', href: '../', target: '_blank', rel: 'noopener', title: 'The site as visitors see it now' }, 'Live site ↗'),
      publishBtn,
      menuBtn,
    ),
  );

  const search = h('input', { class: 'm-input s-search', type: 'search', placeholder: 'Find an entry  ( / )', 'aria-label': 'Find an entry', oninput: () => renderSide() });
  const lists = h('div', { class: 's-lists' });
  const side = h('aside', { class: 'm-side', 'aria-label': 'Entries' }, h('div', { class: 's-nav' }), search, lists);

  const frame = h('iframe', { class: 'm-frame', src: '../?edit', title: 'World view. Drag stones and pads to place them.' });
  const worldLoading = h('div', { class: 'm-world-loading' }, h('span', { class: 'm-spinner' }), h('span', { text: 'Loading the desert…' }));
  const cardBtn = h('button', { type: 'button', class: 'w-btn on', 'aria-pressed': 'true', title: 'Show the selected entry’s card (C)', onclick: () => world && setCard(!world.cardShown()) }, 'Card');
  const tools = h(
    'div',
    { class: 'm-wtools' },
    h('button', { type: 'button', class: 'w-btn', title: 'Go to where visitors start', onclick: () => world && world.focusStart() }, 'Start'),
    cardBtn,
    h('button', { type: 'button', class: 'w-btn', title: 'Zoom out', 'aria-label': 'Zoom out', onclick: () => world && world.zoomBy(1.3) }, '−'),
    h('button', { type: 'button', class: 'w-btn', title: 'Zoom in', 'aria-label': 'Zoom in', onclick: () => world && world.zoomBy(1 / 1.3) }, '+'),
    h('button', { type: 'button', class: 'w-btn', title: 'Controls', 'aria-label': 'World view controls', onclick: showHelp }, '?'),
  );
  const whint = h('div', { class: 'm-whint', text: 'Drag a stone or pad to place it · drag the sand to pan · right-drag to turn · scroll to zoom' });
  const worldPane = h('main', { class: 'm-world' }, frame, worldLoading, tools, whint);
  const insp = h('section', { class: 'm-insp', 'aria-label': 'Details' });
  const banner = REMOTE
    ? null
    : h(
        'div',
        { class: 'm-banner' },
        h('b', { text: 'Local mode. ' }),
        'This copy isn’t connected to a repository, so Save writes the files into the project when the dev server is running, or downloads them.',
      );
  const shell = h('div', { class: 'm-app', 'data-pane': 'list' }, top, banner, side, worldPane, insp);
  root.replaceChildren(shell);
  ui = { shell, status, undoBtn, redoBtn, publishBtn, side, search, lists, frame, worldLoading, insp, tabs, cardBtn, whint };
  setTimeout(() => whint.classList.add('fade'), 9000);

  frame.addEventListener('load', () => waitForWorld(frame));
  setTimeout(() => {
    if (!world) ui.worldLoading.replaceChildren(h('span', { text: 'The world view didn’t start (this browser may not support WebGL). Everything else still works.' }));
  }, 30000);

  renderSide();
  renderInspectorNow();
  updateStatus();
  showPane(window.innerWidth <= 900 ? 'list' : 'world');
  if (!REMOTE) probeDevSave();
}

function showPane(p) {
  if (!ui) return;
  ui.shell.dataset.pane = p;
  for (const b of ui.tabs.children) b.classList.toggle('on', b.dataset.p === p);
}
const narrow = () => window.innerWidth <= 900;

// ---------------------------------------------------------------------------
// the world view (index.html?edit in a frame)
// ---------------------------------------------------------------------------
function waitForWorld(frame) {
  const t0 = Date.now();
  const tick = () => {
    let api = null;
    try {
      api = frame.contentWindow && frame.contentWindow.arrakisEditor;
    } catch {
      api = null;
    }
    if (api) return attachWorld(api, frame.contentWindow);
    if (Date.now() - t0 < 30000) setTimeout(tick, 150);
  };
  tick();
}

function attachWorld(api, win) {
  world = api;
  for (const ev of ['pointerdown', 'keydown', 'wheel']) win.addEventListener(ev, touch, { capture: true, passive: true });
  api.on('select', (id) => {
    if (id) setSel({ type: 'entry', id }, { fromWorld: true });
    else if (sel.type === 'entry') setSel({ type: 'none' }, { fromWorld: true });
  });
  api.on('place', (id, p) => {
    store.change((s) => {
      const e = s.entries.find((x) => x.id === id);
      if (e) e.place = p;
    }, `place:${id}`);
  });
  api.on('scale', (id, f) => {
    store.change((s) => {
      const e = s.entries.find((x) => x.id === id);
      if (!e) return;
      if (e.kind === 'project') {
        e.model ||= { type: 'pod', src: '', scale: 1, yaw: 0, y: 0, lift: true };
        e.model.scale = Math.round(Math.min(3, Math.max(0.2, (e.model.scale ?? 1) * f)) * 100) / 100;
      } else {
        const v = Math.round(Math.min(2, Math.max(0.5, (e.scale ?? 1) * f)) * 100) / 100;
        e.scale = v === 1 ? undefined : v;
      }
    }, `scale:${id}`);
  });
  api.on('delete', (id) => removeEntry(id));
  api.on('card', (on) => syncCard(on));
  api.on('shortcut', (cmd) => runShortcut(cmd));
  pushWorldNow();
  if (sel.type === 'entry') world.select(sel.id);
  ui.worldLoading.remove();
}

let pushTimer = 0;
function pushWorld() {
  clearTimeout(pushTimer);
  pushTimer = setTimeout(pushWorldNow, 180);
}
function pushWorldNow() {
  clearTimeout(pushTimer);
  if (!world) return;
  try {
    world.setContent(clone(store.site), store.overrides());
  } catch (err) {
    console.error(err);
    toast(`The world view couldn’t show that change: ${err.message}`, 'error');
  }
}

function setCard(on) {
  world.showCard(on);
  syncCard(on);
}
function syncCard(on) {
  ui.cardBtn.classList.toggle('on', on);
  ui.cardBtn.setAttribute('aria-pressed', String(on));
}

// ---------------------------------------------------------------------------
// selection, the list and the details
// ---------------------------------------------------------------------------
function setSel(next, { fromWorld = false } = {}) {
  sel = next;
  renderInspectorNow();
  renderSide();
  if (!fromWorld && world) {
    pushWorldNow();
    world.select(next.type === 'entry' ? next.id : null);
  }
  if (!fromWorld && narrow() && next.type !== 'none') showPane('edit');
}

function focusTitle() {
  const t = ui.insp.querySelector('#i-title');
  if (t) {
    t.focus();
    t.select();
  }
}

const ctx = {
  store,
  change: (fn, key) => store.change(fn, key),
  rerender: (focusKey) => {
    renderInspectorNow();
    if (focusKey) {
      const el = ui.insp.querySelector(`[data-focus="${CSS.escape(focusKey)}"]`);
      if (el) el.focus();
    }
  },
  renderMarkdown,
  assetUrl,
  uploadImage,
  uploadModel,
  uploadPdf,
  world: {
    select: (id) => {
      if (!world) return toast('The world view is still loading.');
      pushWorldNow();
      world.select(id);
      if (narrow()) showPane('world');
    },
    placeOf: (id) => (world ? world.placeOf(id) : null),
    viewCenter: () => (world ? world.viewCenter() : null),
  },
  duplicate: (id) => duplicateEntry(id),
  remove: (id) => removeEntry(id),
  select: (s) => setSel(s),
  isUnpublished: (id) => isUnpublished(id),
  renameEntry: (oldId, newId) => renameEntry(oldId, newId),
};

const TYPED = 'input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), textarea';
function renderInspectorNow() {
  if (!ui) return;
  if (sel.type === 'entry' && !entryById(sel.id)) sel = { type: 'none' };
  // keep the caret where it was when the panel is rebuilt under it
  const active = document.activeElement;
  const before = [...ui.insp.querySelectorAll(TYPED)];
  const at = before.indexOf(active);
  const range = at >= 0 && typeof active.selectionStart === 'number' ? [active.selectionStart, active.selectionEnd] : null;
  renderInspector(ui.insp, sel, ctx);
  if (at >= 0) {
    const next = ui.insp.querySelectorAll(TYPED)[at];
    if (next && next.tagName === active.tagName) {
      next.focus({ preventScroll: true });
      if (range && next.setSelectionRange) {
        try {
          next.setSelectionRange(...range);
        } catch {
          /* not a text field */
        }
      }
    }
  }
  if (sel.type === 'none') ui.insp.append(startPanel());
  if (sel.type === 'entry') {
    const id = sel.id;
    for (const f of ui.insp.querySelectorAll('#i-title, #i-org')) f.addEventListener('change', () => setTimeout(() => followTitle(id))); // after focus has moved on
  }
}

// An entry that has never been published takes its ID from its title (and
// organization), the way the first entries were named, until it goes live.
const isUnpublished = (id) => !(baseSite()?.entries || []).some((e) => e.id === id);
function idFor(e) {
  if (e.kind === 'project') return slug(`project-${e.title || 'project'}`);
  if (e.kind === 'skills') return 'skills';
  return slug([e.org, e.title].filter(Boolean).join(' ')) || slug(e.kind);
}
function followTitle(id) {
  const e = entryById(id);
  if (!e || !isUnpublished(id) || !String(e.title || '').trim()) return;
  let want = idFor(e);
  const taken = new Set(store.site.entries.filter((x) => x !== e).map((x) => x.id));
  for (let i = 2; taken.has(want); i++) want = `${idFor(e)}-${i}`;
  if (want && want !== id) renameEntry(id, want);
}

function renameEntry(oldId, newId) {
  const selected = sel.type === 'entry' && sel.id === oldId;
  // follow it before the change re-renders, or the panel finds nothing under the old ID
  if (selected) sel = { type: 'entry', id: newId };
  store.change((s) => {
    const e = s.entries.find((x) => x.id === oldId);
    if (e) e.id = newId;
  }, `struct:${oldId}:id`);
  store.seal();
  if (selected && world) {
    pushWorldNow();
    world.select(newId);
  }
}

function startPanel() {
  const n = store.site.entries.length;
  return h(
    'div',
    { class: 'i-start' },
    h('h2', { text: 'Plan the desert' }),
    h('p', { text: `${plural(n, 'entry', 'entries')}: waystones along the road for experience, education and skills, and landing pads on the project path.` }),
    h(
      'ul',
      {},
      h('li', {}, h('b', { text: 'Add' }), ' a waystone or a project from the list on the left.'),
      h('li', {}, h('b', { text: 'Place' }), ' anything by dragging it in the world. Arrow keys nudge it, [ and ] turn it, − and = resize it.'),
      h('li', {}, h('b', { text: 'Write' }), ' the card on the right: highlights, formatted details with images, links, a 3D model for projects.'),
      h('li', {}, h('b', { text: 'Preview' }), ' walks the unpublished site as a visitor; ', h('b', { text: REMOTE ? 'Publish' : 'Save' }), REMOTE ? ' puts it live.' : ' writes it into the project.'),
    ),
    h('p', { class: 'i-hint', text: 'Work is saved in this browser as you go, so you can close the tab and come back.' }),
  );
}

function entrySub(e) {
  if (e.kind === 'project') return e.status || 'Project';
  if (e.kind === 'skills') return 'Toolkit';
  return [e.org, e.years || yearSpan(e.period)].filter(Boolean).join(' · ');
}

let dragId = null;
function renderSide() {
  if (!ui) return;
  const nav = ui.side.querySelector('.s-nav');
  const navBtn = (type, label, desc) =>
    h(
      'button',
      { type: 'button', class: `s-navbtn${sel.type === type ? ' on' : ''}`, onclick: () => setSel({ type }) },
      h('b', { text: label }),
      h('small', { text: desc }),
    );
  nav.replaceChildren(navBtn('profile', 'Profile and intro', store.site.profile.name || ''), navBtn('world', 'World', `Seed ${store.site.world?.seed ?? 12345}`));

  const q = ui.search.value.trim().toLowerCase();
  const changed = changedIds();
  const match = (e) => !q || [e.title, e.org, e.id, e.status, ...(e.tags || [])].some((v) => v && String(v).toLowerCase().includes(q));
  const item = (e) => {
    const li = h(
      'li',
      { class: `s-item${sel.type === 'entry' && sel.id === e.id ? ' on' : ''}${e.hidden ? ' is-hidden' : ''}`, draggable: q ? 'false' : 'true', dataset: { id: e.id } },
      h('span', { class: 's-grip', 'aria-hidden': 'true', title: 'Drag to reorder' }, '⋮⋮'),
      h(
        'button',
        {
          type: 'button',
          class: 's-pick',
          title: 'Alt+↑ / Alt+↓ to reorder',
          onclick: () => setSel({ type: 'entry', id: e.id }),
          onkeydown: (ev) => {
            if (ev.altKey && (ev.key === 'ArrowUp' || ev.key === 'ArrowDown')) {
              ev.preventDefault();
              moveEntry(e.id, ev.key === 'ArrowUp' ? -1 : 1);
              const b = ui.lists.querySelector(`[data-id="${CSS.escape(e.id)}"] .s-pick`);
              if (b) b.focus();
            }
          },
        },
        h('span', { class: `s-glyph g-${KINDS[e.kind]?.glyph || 'diamond'}`, 'aria-hidden': 'true' }),
        h('span', { class: 's-text' }, h('b', { text: titleOf(e) }), h('small', { text: entrySub(e) })),
        h(
          'span',
          { class: 's-badges' },
          e.place ? h('span', { class: 's-badge', title: 'Placed by hand', text: '⌖' }) : null,
          e.hidden ? h('span', { class: 's-badge', title: 'Hidden from visitors', text: 'hidden' }) : null,
          changed.has(e.id) ? h('span', { class: 's-dot', title: 'Unpublished changes' }) : null,
        ),
      ),
      h(
        'span',
        { class: 's-move' },
        h('button', { type: 'button', class: 'i-icon', title: 'Move up', 'aria-label': `Move ${titleOf(e)} up`, onclick: () => moveEntry(e.id, -1) }, '↑'),
        h('button', { type: 'button', class: 'i-icon', title: 'Move down', 'aria-label': `Move ${titleOf(e)} down`, onclick: () => moveEntry(e.id, 1) }, '↓'),
      ),
    );
    li.addEventListener('dragstart', (ev) => {
      dragId = e.id;
      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setData('text/plain', e.id);
      li.classList.add('dragging');
    });
    li.addEventListener('dragend', () => {
      dragId = null;
      li.classList.remove('dragging');
      for (const x of ui.lists.querySelectorAll('.drop-before, .drop-after')) x.classList.remove('drop-before', 'drop-after');
    });
    li.addEventListener('dragover', (ev) => {
      const from = dragId && entryById(dragId);
      if (!from || from.id === e.id || isStone(from) !== isStone(e)) return;
      ev.preventDefault();
      const r = li.getBoundingClientRect();
      const after = ev.clientY > r.top + r.height / 2;
      li.classList.toggle('drop-after', after);
      li.classList.toggle('drop-before', !after);
    });
    li.addEventListener('dragleave', () => li.classList.remove('drop-before', 'drop-after'));
    li.addEventListener('drop', (ev) => {
      ev.preventDefault();
      const after = li.classList.contains('drop-after');
      li.classList.remove('drop-before', 'drop-after');
      if (dragId) dropEntry(dragId, e.id, after);
    });
    return li;
  };
  const stones = store.site.entries.filter((e) => isStone(e) && match(e));
  const pads = store.site.entries.filter((e) => !isStone(e) && match(e));
  const addStone = h(
    'button',
    {
      type: 'button',
      class: 'm-btn small',
      'aria-haspopup': 'menu',
      onclick: (ev) =>
        openMenu(ev.currentTarget, [
          { label: 'Experience', desc: 'A role: dates, highlights, stack', run: () => addEntry('experience') },
          { label: 'Education', desc: 'A degree: dates, GPA, coursework', run: () => addEntry('education') },
          { label: 'Skills', desc: 'Groups of skills', run: () => addEntry('skills') },
        ]),
    },
    '+ Waystone',
  );
  const addPad = h('button', { type: 'button', class: 'm-btn small', onclick: () => addEntry('project') }, '+ Project');
  const group = (title, sub, list, add, empty) =>
    h(
      'section',
      { class: 's-group' },
      h('header', {}, h('div', {}, h('h2', { text: title }), h('small', { text: sub })), add),
      list.length ? h('ol', { class: 's-list' }, list.map(item)) : h('p', { class: 's-empty', text: q ? 'Nothing matches.' : empty }),
    );
  ui.lists.replaceChildren(
    group('Waystones', 'Along the road, first to last', stones, addStone, 'No waystones yet.'),
    group('Projects', 'On the project path, first to last', pads, addPad, 'No projects yet.'),
  );
}

// ---------------------------------------------------------------------------
// adding, moving, removing entries
// ---------------------------------------------------------------------------
function addEntry(kind) {
  const ids = new Set(store.site.entries.map((e) => e.id));
  const e = newEntry(kind, ids);
  store.change((s) => {
    const list = s.entries;
    let at = list.findIndex((x) => x.kind === kind); // newest first in its kind
    if (kind === 'skills') at = list.length;
    if (at < 0) {
      if (kind === 'experience') at = 0;
      else if (kind === 'education') {
        const lastExp = list.map((x) => x.kind).lastIndexOf('experience');
        at = lastExp + 1;
      } else at = list.length;
    }
    list.splice(at, 0, e);
  }, 'struct:add');
  store.seal();
  ui.search.value = '';
  setSel({ type: 'entry', id: e.id });
  focusTitle();
  toast(kind === 'project' ? 'Project added to the project path. Drag it in the world to place it anywhere.' : 'Waystone added to the road. Drag it in the world to place it anywhere.');
}

function moveEntry(id, d) {
  store.change((s) => {
    const list = s.entries;
    const i = list.findIndex((e) => e.id === id);
    if (i < 0) return;
    const stone = isStone(list[i]);
    let j = i + d;
    while (j >= 0 && j < list.length && isStone(list[j]) !== stone) j += d;
    if (j < 0 || j >= list.length) return;
    [list[i], list[j]] = [list[j], list[i]];
  }, 'struct:order');
  store.seal();
}

function dropEntry(id, targetId, after) {
  if (id === targetId) return;
  store.change((s) => {
    const list = s.entries;
    const from = list.findIndex((e) => e.id === id);
    if (from < 0) return;
    const [e] = list.splice(from, 1);
    let to = list.findIndex((x) => x.id === targetId);
    if (to < 0) to = list.length;
    else if (after) to += 1;
    list.splice(to, 0, e);
  }, 'struct:order');
  store.seal();
}

function duplicateEntry(id) {
  const src = entryById(id);
  if (!src) return;
  const ids = new Set(store.site.entries.map((e) => e.id));
  let nid = `${id}-copy`;
  for (let i = 2; ids.has(nid); i++) nid = `${id}-copy-${i}`;
  const copy = clone(src);
  copy.id = nid;
  copy.title = `${titleOf(src)} (copy)`;
  if (copy.place) copy.place = { ...copy.place, dx: Math.round((copy.place.dx + 6) * 100) / 100 };
  store.change((s) => {
    const i = s.entries.findIndex((e) => e.id === id);
    s.entries.splice(i + 1, 0, copy);
  }, 'struct:duplicate');
  store.seal();
  setSel({ type: 'entry', id: nid });
  focusTitle();
}

async function removeEntry(id) {
  const e = entryById(id);
  if (!e) return;
  const ok = await confirmDialog(`Delete “${titleOf(e)}”?`, `It ${REMOTE ? 'leaves the site when you next publish' : 'goes when you next save'}. Undo (Ctrl/Cmd+Z) brings it back.`, 'Delete', true);
  if (!ok) return;
  store.change((s) => (s.entries = s.entries.filter((x) => x.id !== id)), 'struct:remove');
  store.seal();
  if (sel.type === 'entry' && sel.id === id) setSel({ type: 'none' });
  toast(`Deleted “${titleOf(e)}”.`);
}

// ---------------------------------------------------------------------------
// files
// ---------------------------------------------------------------------------
async function uploadImage(file, folder) {
  if (!file.type.startsWith('image/')) throw new Error('Choose an image (JPEG, PNG, WebP, GIF or SVG).');
  if (file.size > IMAGE_MAX_IN) throw new Error(`That image is ${humanSize(file.size)}. Pick one under ${humanSize(IMAGE_MAX_IN)}.`);
  toast('Preparing the image…');
  const { blob, ext } = await prepareImage(file);
  const path = `${folder}/${fileSlug(file.name)}-${shortId()}.${ext}`;
  store.addFile(path, blob, file.name);
  return path;
}

async function uploadModel(file, id) {
  if (!/\.glb$/i.test(file.name)) throw new Error('Choose a .glb file (binary glTF). Blender exports one with File → Export → glTF 2.0, format “glTF Binary”.');
  if (file.size > MODEL_MAX) throw new Error(`That model is ${humanSize(file.size)}; the limit is ${humanSize(MODEL_MAX)}. Compressing it (gltf.report, with Draco or Meshopt) usually makes it many times smaller.`);
  const head = new DataView(await file.slice(0, 12).arrayBuffer());
  if (head.byteLength < 12 || head.getUint32(0, true) !== 0x46546c67) throw new Error('That file isn’t a binary glTF (.glb).');
  if (head.getUint32(4, true) !== 2) throw new Error('Only glTF 2.0 models are supported.');
  if (file.size > MODEL_WARN) {
    const ok = await confirmDialog('That’s a big model', `It’s ${humanSize(file.size)}. Visitors download it when they reach the pad, which is slow on phones. Compressing it first (gltf.report, with Draco or Meshopt) usually makes it many times smaller.`, 'Use it anyway');
    if (!ok) return null;
  }
  const path = `models/${slug(id) || 'model'}-${shortId()}.glb`;
  store.addFile(path, file, file.name);
  toast(`Model added (${humanSize(file.size)}). It goes live when you ${REMOTE ? 'publish' : 'save'}.`);
  return path;
}

async function uploadPdf(file) {
  if (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name)) throw new Error('Choose a PDF.');
  if (file.size > PDF_MAX) throw new Error(`That PDF is ${humanSize(file.size)}. Keep it under ${humanSize(PDF_MAX)}.`);
  if ((await file.slice(0, 5).text()) !== '%PDF-') throw new Error('That file isn’t a PDF.');
  const cur = store.site.site && store.site.site.pdf;
  // replacing keeps the same address, so links people already have keep working
  const path = cur && !/^(https?:|data:|blob:)/i.test(cur) ? cur.replace(/^\/+/, '') : `${fileSlug(file.name)}.pdf`;
  store.addFile(path, file, file.name);
  return path;
}

// ---------------------------------------------------------------------------
// status, drafts, idle lock
// ---------------------------------------------------------------------------
function updateStatus() {
  if (!ui) return;
  const files = store.pendingInUse().length;
  const edits = changeList().length;
  const count = edits + (files && !edits ? files : 0);
  let text;
  let cls = 'clean';
  if (count) {
    text = `${plural(count, 'unpublished change')}${files ? ` · ${plural(files, 'file')}` : ''}`;
    cls = 'dirty';
  } else if (deployState === 'deploying') {
    text = 'Published · going live…';
    cls = 'busy';
  } else if (deployState === 'live') {
    text = 'Published · live';
  } else if (deployState === 'sent') {
    text = 'Published · live in a minute or two';
  } else {
    text = REMOTE ? 'Everything is published' : 'Everything is saved';
  }
  if (!REMOTE && count) text = text.replace('unpublished', 'unsaved');
  ui.status.replaceChildren(h('span', { class: 'm-status-dot' }), h('span', { text }));
  ui.status.className = `m-status ${cls}`;
  ui.undoBtn.disabled = !store.canUndo;
  ui.redoBtn.disabled = !store.canRedo;
}

function scheduleDraft() {
  draftUnsaved = true;
  clearTimeout(draftTimer);
  draftTimer = setTimeout(writeDraft, 600);
}

async function writeDraft() {
  clearTimeout(draftTimer);
  draftTimer = 0;
  if (!store.site) return;
  if (!store.dirty) {
    await clearDraft();
    draftUnsaved = false;
    return;
  }
  const files = [...store.pending].map(([path, f]) => ({ path, blob: f.blob, name: f.name }));
  const ok = await saveDraft({ repo: REPO_KEY, site: clone(store.site), baseSha: store.baseSha, files });
  draftUnsaved = !ok;
  if (!ok) toast('Couldn’t keep a draft in this browser (storage may be full or blocked). Publish, or download site.json from the ⋯ menu, to keep your work.', 'error');
}

store.subscribe((ev) => {
  if (!ui) return;
  if (ev.type === 'change') {
    if (!(ev.key && ev.key.startsWith('field:'))) renderInspectorNow();
    renderSide();
    pushWorld();
  } else if (ev.type === 'history' || ev.type === 'load') {
    renderInspectorNow();
    renderSide();
    pushWorld();
  } else if (ev.type === 'files') {
    setAssetOverrides(store.overrides());
  } else if (ev.type === 'published') {
    setAssetOverrides(store.overrides());
    renderSide();
  }
  updateStatus();
  scheduleDraft();
});

function touch() {
  lastActive = Date.now();
}
for (const ev of ['pointerdown', 'keydown', 'wheel']) window.addEventListener(ev, touch, { capture: true, passive: true });
setInterval(() => {
  if (REMOTE && token && Date.now() - lastActive > IDLE_LOCK) lockNow('Locked after 30 minutes without activity.');
}, 20000);

function lockNow(message = '') {
  token = null;
  gh = null;
  writeDraft();
  showUnlock(message, true);
}

window.addEventListener('beforeunload', (e) => {
  if (store.site && store.dirty && (draftUnsaved || draftTimer)) {
    writeDraft();
    e.preventDefault();
    e.returnValue = '';
  }
});

// ---------------------------------------------------------------------------
// shortcuts and the ⋯ menu
// ---------------------------------------------------------------------------
function runShortcut(cmd) {
  if (document.querySelector('.m-backdrop') || authOverlay) return;
  if (cmd === 'undo') store.undo();
  else if (cmd === 'redo') store.redo();
  else if (cmd === 'save') writeDraft().then(() => toast(store.dirty ? `Saved on this device. ${REMOTE ? 'Publish' : 'Save'} to put it ${REMOTE ? 'live' : 'into the project'}.` : 'Nothing unsaved.'));
  else if (cmd === 'publish') publish();
}

window.addEventListener('keydown', (e) => {
  if (!ui || authOverlay || document.querySelector('.m-backdrop')) return;
  const mod = e.metaKey || e.ctrlKey;
  const k = e.key.toLowerCase();
  if (mod && k === 's') {
    e.preventDefault();
    runShortcut('save');
  } else if (mod && k === 'enter') {
    e.preventDefault();
    runShortcut('publish');
  } else if (isTextField(e.target)) {
    // text fields keep their own undo
  } else if (mod && k === 'z') {
    e.preventDefault();
    runShortcut(e.shiftKey ? 'redo' : 'undo');
  } else if (mod && k === 'y') {
    e.preventDefault();
    runShortcut('redo');
  } else if (!mod && e.key === '/') {
    e.preventDefault();
    if (narrow()) showPane('list');
    ui.search.focus();
  }
});

let menuEl = null;
function closeMenu() {
  if (menuEl) menuEl.remove();
  menuEl = null;
  document.removeEventListener('pointerdown', onMenuOutside, true);
  document.removeEventListener('keydown', onMenuKey, true);
}
function onMenuOutside(e) {
  if (menuEl && !menuEl.contains(e.target)) closeMenu();
}
function onMenuKey(e) {
  if (e.key === 'Escape') {
    e.stopPropagation();
    closeMenu();
  }
}
function openMenu(anchor, items) {
  closeMenu();
  menuEl = h(
    'div',
    { class: 'm-menu', role: 'menu' },
    items.map((it) =>
      it === '-'
        ? h('hr')
        : h(
            'button',
            {
              type: 'button',
              role: 'menuitem',
              class: it.danger ? 'danger' : '',
              onclick: () => {
                closeMenu();
                it.run();
              },
            },
            h('b', { text: it.label }),
            it.desc ? h('small', { text: it.desc }) : null,
          ),
    ),
  );
  document.body.append(menuEl);
  const r = anchor.getBoundingClientRect();
  const w = menuEl.offsetWidth;
  menuEl.style.top = `${Math.round(r.bottom + 6)}px`;
  menuEl.style.left = `${Math.round(Math.max(8, Math.min(window.innerWidth - w - 8, r.left)))}px`;
  const first = menuEl.querySelector('button');
  if (first) first.focus();
  setTimeout(() => {
    document.addEventListener('pointerdown', onMenuOutside, true);
    document.addEventListener('keydown', onMenuKey, true);
  });
}

function menuItems() {
  const items = [
    { label: 'Changes', desc: 'What’s different from the live site', run: showChanges },
    { label: 'Preview as a visitor', desc: 'Walk the unpublished site in a new tab', run: previewAsVisitor },
  ];
  if (REMOTE) items.push({ label: 'Published versions', desc: 'Look back, or restore an older one', run: showHistory });
  items.push(
    '-',
    { label: 'Download site.json', desc: 'A backup of what you’re editing', run: downloadSiteJson },
    { label: 'Import site.json…', desc: 'Replace everything with a file', run: importSiteJson },
    { label: 'Discard all changes…', desc: REMOTE ? 'Back to what’s published' : 'Back to what’s saved', run: discardAll, danger: true },
    '-',
    { label: 'Controls and shortcuts', run: showHelp },
  );
  if (REMOTE)
    items.push(
      '-',
      { label: 'Change password', run: changePassword },
      { label: 'Lock', desc: 'Sign out on this device', run: () => lockNow() },
    );
  return items;
}

// ---------------------------------------------------------------------------
// dialogs
// ---------------------------------------------------------------------------
function changeRows(changes, close) {
  return h(
    'ul',
    { class: 'm-changes' },
    changes.map((c) =>
      h(
        'li',
        {},
        h('span', { class: `m-op ${c.op || c.area}` }),
        h('span', { class: 'm-change-text' }, h('b', { text: c.text }), c.detail ? h('small', { text: c.detail }) : null),
        c.id && c.op !== 'removed'
          ? h(
              'button',
              {
                type: 'button',
                class: 'm-btn small',
                onclick: () => {
                  close && close();
                  setSel({ type: 'entry', id: c.id });
                },
              },
              'Show',
            )
          : null,
        c.revert
          ? h(
              'button',
              {
                type: 'button',
                class: 'm-btn small',
                title: 'Put this back the way it is on the site',
                onclick: () => {
                  store.change(c.revert, 'struct:revert');
                  store.seal();
                  close && close();
                  showChanges();
                },
              },
              'Revert',
            )
          : null,
      ),
    ),
  );
}

function showChanges() {
  const changes = changeList();
  const files = store.pendingInUse();
  const unused = [...store.pending.keys()].filter((p) => !files.includes(p));
  const el = h('div');
  dialog({
    title: REMOTE ? 'Unpublished changes' : 'Unsaved changes',
    wide: true,
    body: el,
    buttons: [{ label: 'Close', value: null }, ...(changes.length || files.length ? [{ label: REMOTE ? 'Publish…' : 'Save…', value: 'publish', kind: 'primary' }] : [])],
    onMount: (close) => {
      if (!changes.length && !files.length) el.append(h('p', { text: REMOTE ? 'Nothing to publish: the site already shows everything here.' : 'Nothing to save.' }));
      if (changes.length) el.append(changeRows(changes, close));
      if (files.length) el.append(h('h3', { text: 'Added files' }), fileRows(files));
      if (unused.length)
        el.append(
          h('h3', { text: 'Added, but no longer used' }),
          h('p', { class: 'i-hint', text: 'These were replaced or removed, so they won’t be published.' }),
          h(
            'ul',
            { class: 'm-files' },
            unused.map((p) =>
              h(
                'li',
                {},
                h('code', { text: p }),
                h('small', { text: humanSize(store.pending.get(p).size) }),
                h(
                  'button',
                  {
                    type: 'button',
                    class: 'm-btn small',
                    onclick: (ev) => {
                      store.removeFile(p);
                      ev.currentTarget.closest('li').remove();
                    },
                  },
                  'Forget',
                ),
              ),
            ),
          ),
        );
    },
  }).then((v) => {
    if (v === 'publish') publish();
  });
}

function fileRows(paths) {
  return h(
    'ul',
    { class: 'm-files' },
    paths.map((p) => {
      const f = store.pending.get(p);
      return h('li', {}, h('code', { text: `${cfg.publicDir}/${p}` }), h('small', { text: `${humanSize(f.size)}${f.name && f.name !== p.split('/').pop() ? ` · from ${f.name}` : ''}` }));
    }),
  );
}

function showHelp() {
  const row = (k, v) => h('tr', {}, h('th', {}, k), h('td', { text: v }));
  dialog({
    title: 'Controls and shortcuts',
    wide: true,
    body: [
      h('h3', { text: 'World view' }),
      h(
        'table',
        { class: 'm-keys' },
        row('Click', 'Select a stone or pad (its card opens; C hides it)'),
        row('Drag a stone or pad', 'Move it over the dunes; it stays where you drop it'),
        row('Drag the sand', 'Pan'),
        row('Right-drag, Shift-drag', 'Turn the view'),
        row('Scroll', 'Zoom'),
        row('Arrow keys', 'Nudge the selection (Shift: further)'),
        row('[  ]', 'Turn the selection (Shift: finer)'),
        row('−  =', 'Make the selection smaller or bigger'),
        row('F', 'Frame the selection'),
        row('Q  E', 'Turn the view by 45°'),
        row('Delete', 'Delete the selection (asks first)'),
        row('Esc', 'Deselect'),
      ),
      h('p', { class: 'i-hint', text: 'The teal ring is where visitors start; the dashed frames show what they first see on a computer and on a phone.' }),
      h('h3', { text: 'Everywhere' }),
      h(
        'table',
        { class: 'm-keys' },
        row('Ctrl/Cmd+Z', 'Undo (inside a text box, undoes typing there)'),
        row('Ctrl/Cmd+Shift+Z, Ctrl+Y', 'Redo'),
        row('Ctrl/Cmd+S', 'Save a draft on this device now (it also saves as you go)'),
        row('Ctrl/Cmd+Enter', REMOTE ? 'Publish' : 'Save into the project'),
        row('/', 'Find an entry'),
        row('Alt+↑  Alt+↓', 'Reorder the entry focused in the list'),
        row('Ctrl/Cmd+B, I, K', 'Bold, italic, link in the Details editor'),
      ),
    ],
  });
}

function previewAsVisitor() {
  try {
    localStorage.setItem('arrakis.preview', JSON.stringify({ site: store.site, overrides: [...store.overrides()], at: Date.now() }));
  } catch {
    toast('Couldn’t hand the preview over (browser storage is full or blocked).', 'error');
    return;
  }
  window.open('../?preview', '_blank', 'noopener');
}

function download(name, blob) {
  const a = h('a', { href: URL.createObjectURL(blob), download: name });
  document.body.append(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 1000);
}

function downloadSiteJson() {
  download('site.json', new Blob([pretty(cleanSite(store.site))], { type: 'application/json' }));
}

function importSiteJson() {
  const input = h('input', { type: 'file', accept: '.json,application/json' });
  input.addEventListener('change', async () => {
    const f = input.files[0];
    if (!f) return;
    try {
      const next = checkShape(JSON.parse(await f.text()));
      if (!(await confirmDialog('Replace everything?', `Everything in the editor is replaced with ${f.name}. Undo brings it back.`, 'Replace'))) return;
      store.replace(next, 'struct:import');
      setSel({ type: 'none' });
      toast(`Imported ${f.name}.`);
    } catch (err) {
      toast(err instanceof SyntaxError ? 'That file isn’t valid JSON.' : err.message, 'error');
    }
  });
  input.click();
}

async function discardAll() {
  const base = baseSite();
  if (!base) return toast('There’s no published version to go back to yet.', 'error');
  if (!store.dirty) return toast('Nothing to discard.');
  if (!(await confirmDialog('Discard all changes?', `Everything goes back to what’s ${REMOTE ? 'published' : 'saved'}. Undo brings your changes back, until you reload.`, 'Discard', true))) return;
  store.replace(base, 'struct:discard');
  setSel({ type: 'none' });
}

async function showHistory() {
  if (!gh) return lockNow();
  const body = h('div', { class: 'm-history' }, h('p', { class: 'm-loading' }, h('span', { class: 'm-spinner' }), 'Asking GitHub…'));
  let closeIt = null;
  dialog({ title: 'Published versions', wide: true, body, buttons: [{ label: 'Close', value: null }], onMount: (c) => (closeIt = c) });
  try {
    const list = await gh.history(cfg.contentPath, 20);
    if (!list.length) return body.replaceChildren(h('p', { text: 'Nothing has been published yet.' }));
    body.replaceChildren(
      h(
        'ul',
        { class: 'm-versions' },
        list.map((c, i) =>
          h(
            'li',
            {},
            h('span', { class: 'm-change-text' }, h('b', { text: c.message.split('\n')[0] }), h('small', { text: `${c.date ? timeAgo(c.date) : ''}${c.author ? ` · ${c.author}` : ''}${i === 0 ? ' · live now' : ''}` })),
            h('a', { class: 'm-btn small', href: c.url, target: '_blank', rel: 'noopener' }, 'On GitHub ↗'),
            i === 0
              ? null
              : h(
                  'button',
                  {
                    type: 'button',
                    class: 'm-btn small',
                    onclick: async (ev) => {
                      const b = ev.currentTarget;
                      busy(b, 'Loading…');
                      try {
                        const f = await gh.readText(cfg.contentPath, c.sha);
                        const next = checkShape(JSON.parse(f.text));
                        store.replace(next, 'struct:restore');
                        setSel({ type: 'none' });
                        closeIt && closeIt(null);
                        toast(`Restored the version from ${c.date ? timeAgo(c.date) : 'then'}. Publish to put it live again; Undo goes back.`);
                      } catch (err) {
                        unbusy(b);
                        toast(err.message, 'error');
                      }
                    },
                  },
                  'Restore',
                ),
          ),
        ),
      ),
      h('p', { class: 'i-hint', text: 'Restoring loads that version into the editor as unpublished changes; nothing goes live until you publish.' }),
    );
  } catch (err) {
    body.replaceChildren(h('p', { class: 'm-auth-error', text: err.message }));
  }
}

async function changePassword() {
  if (!token) return lockNow();
  const a = h('input', { class: 'm-input', type: 'password', autocomplete: 'new-password' });
  const b = h('input', { class: 'm-input', type: 'password', autocomplete: 'new-password' });
  const err = h('p', { class: 'm-auth-error', role: 'alert' });
  for (;;) {
    const ok = await dialog({
      title: 'Change password',
      body: [field('New password', a, 'At least 8 characters.'), field('Type it again', b), err],
      buttons: [
        { label: 'Cancel', value: false },
        { label: 'Change it', value: true, kind: 'primary' },
      ],
    });
    if (!ok) return;
    if (a.value.length < 8) err.textContent = 'Use at least 8 characters.';
    else if (a.value !== b.value) err.textContent = 'The two passwords don’t match.';
    else break;
  }
  await saveToken(token, a.value, REPO_KEY);
  toast('Password changed for this device.');
}

function progress(title) {
  const step = h('p', { class: 'm-progress-step', text: 'Starting…' });
  const back = h('div', { class: 'm-backdrop' }, h('div', { class: 'm-dialog', role: 'alertdialog', 'aria-busy': 'true', 'aria-label': title }, h('h2', { text: title }), h('div', { class: 'm-progress' }, h('span', { class: 'm-spinner' }), step)));
  document.body.append(back);
  return { step: (t) => (step.textContent = t), close: () => back.remove() };
}

// ---------------------------------------------------------------------------
// publish
// ---------------------------------------------------------------------------
async function prepareRelease() {
  // tidy up first (empty highlights, links without an address), as its own undo step
  const cleaned = cleanSite(store.site);
  if (!same(cleaned, store.site)) store.replace(cleaned, 'struct:tidy');
  const site = store.site;
  const changes = changeList();
  const files = store.pendingInUse();
  if (!changes.length && !files.length) {
    toast(REMOTE ? 'Nothing to publish: the site already shows everything here.' : 'Nothing to save.');
    return null;
  }
  const { errors, warnings } = validate(site);
  const issue = (x, close) =>
    h(
      'li',
      {},
      h('span', { text: x.text }),
      x.sel
        ? h(
            'button',
            {
              type: 'button',
              class: 'm-btn small',
              onclick: () => {
                close();
                setSel(x.sel);
              },
            },
            'Show',
          )
        : null,
    );
  if (errors.length) {
    const body = h('div');
    await dialog({
      title: `Fix ${errors.length === 1 ? 'this' : 'these'} first`,
      body,
      buttons: [{ label: 'OK', value: true, kind: 'primary' }],
      onMount: (close) => body.append(h('ul', { class: 'm-issues error' }, errors.map((x) => issue(x, close)))),
    });
    return null;
  }
  const msg = h('input', { class: 'm-input', value: commitMessage(changes, files), 'aria-label': 'Commit message' });
  const body = h('div');
  const go = await dialog({
    title: REMOTE ? 'Publish to the live site' : 'Save into the project',
    wide: true,
    body,
    buttons: [
      { label: 'Cancel', value: false },
      { label: REMOTE ? 'Publish' : 'Save', value: true, kind: 'primary' },
    ],
    onMount: (close) => {
      body.append(
        REMOTE ? h('p', {}, 'This makes one commit to ', h('b', { text: `${cfg.owner}/${cfg.repo}` }), ` on ${cfg.branch}. The site then rebuilds and is usually live within two minutes.`) : null,
        changes.length ? changeRows(changes.map((c) => ({ ...c, revert: null })), close) : null,
        files.length ? h('h3', { text: `${plural(files.length, 'file')} to upload` }) : null,
        files.length ? fileRows(files) : null,
        warnings.length ? h('h3', { text: 'Worth a look (you can publish anyway)' }) : null,
        warnings.length ? h('ul', { class: 'm-issues' }, warnings.map((x) => issue(x, close))) : null,
        REMOTE ? field('Commit message', msg) : null,
      );
      if (REMOTE) setTimeout(() => msg.focus(), 0);
    },
  });
  if (!go) return null;
  return { site, text: pretty(site), files, message: msg.value.trim() || commitMessage(changes, files) };
}

async function publish() {
  if (!store.site) return;
  if (!REMOTE) return saveLocal();
  if (!gh) return lockNow('Sign in again to publish.');
  const rel = await prepareRelease();
  if (!rel) return;
  let prog = progress('Publishing');
  try {
    prog.step('Checking whether the site changed elsewhere…');
    const head = await gh.shaOf(cfg.contentPath);
    if ((head || null) !== (store.baseSha || null)) {
      prog.close();
      const c = await dialog({
        title: 'The site changed since you started',
        body: h('p', { text: 'It has been published from somewhere else (another device or a commit) since this editor loaded it. Publishing now replaces that version with yours.' }),
        buttons: [
          { label: 'Cancel', value: null },
          { label: 'Load that version instead', value: 'load' },
          { label: 'Publish mine anyway', value: 'mine', kind: 'danger' },
        ],
      });
      if (c === 'load') return reloadFromGitHub();
      if (c !== 'mine') return;
      prog = progress('Publishing');
    }
    const files = [{ path: cfg.contentPath, text: rel.text }];
    for (const p of rel.files) {
      prog.step(`Preparing ${p.split('/').pop()}…`);
      files.push({ path: `${cfg.publicDir}/${p}`, base64: await blobToBase64(store.pending.get(p).blob) });
    }
    const res = await gh.commit(files, rel.message, (t) => prog.step(t));
    prog.step('Confirming…');
    const sha = await gh.shaOf(cfg.contentPath);
    store.markPublished(rel.text, sha, rel.files);
    await writeDraft();
    prog.close();
    watchDeploy();
    dialog({
      title: 'Published',
      body: [
        h('p', { text: 'The site is rebuilding now. It’s usually live within two minutes; the status at the top says when.' }),
        h('p', {}, h('a', { href: res.url, target: '_blank', rel: 'noopener' }, 'See the commit on GitHub ↗')),
      ],
      buttons: [{ label: 'OK', value: true, kind: 'primary' }],
    });
  } catch (err) {
    prog.close();
    if (err.status === 401) {
      await dialog({ title: 'Signed out by GitHub', body: h('p', { text: `${err.message} Your changes are kept on this device; set up a new token to publish them.` }) });
      token = null;
      gh = null;
      return showSetup('', true);
    }
    dialog({ title: 'Publishing didn’t finish', body: [h('p', { text: err.message }), h('p', { class: 'i-hint', text: 'The live site hasn’t changed. Your work is kept on this device; try again when you’re ready.' })] });
  }
}

async function reloadFromGitHub() {
  if (!(await confirmDialog('Load the published version?', 'Your unpublished changes are replaced with what’s on the site now. Undo brings them back until you reload. Added files are kept.', 'Load it', true))) return;
  const prog = progress('Loading');
  try {
    const f = await gh.readText(cfg.contentPath);
    const next = checkShape(JSON.parse(f.text));
    store.baseText = f.text;
    store.baseSha = f.sha;
    store.replace(next, 'struct:reload');
    setSel({ type: 'none' });
  } catch (err) {
    toast(err.message, 'error');
  } finally {
    prog.close();
  }
}

// which build the live site serves, from the script names in its page
async function fingerprint() {
  try {
    const r = await fetch('../', { cache: 'no-store' });
    if (!r.ok) return null;
    const m = (await r.text()).match(/assets\/[\w.-]+\.js/g);
    return m ? m.join('|') : null;
  } catch {
    return null;
  }
}

function watchDeploy() {
  const prev = liveFingerprint;
  if (!prev) {
    deployState = 'sent';
    updateStatus();
    return;
  }
  deployState = 'deploying';
  updateStatus();
  const t0 = Date.now();
  const tick = async () => {
    if (deployState !== 'deploying') return;
    const fp = await fingerprint();
    if (fp && fp !== prev) {
      liveFingerprint = fp;
      deployState = 'live';
      updateStatus();
      toast('Your changes are live on the site.');
      return;
    }
    if (Date.now() - t0 > 12 * 60 * 1000) {
      deployState = 'sent';
      updateStatus();
      return;
    }
    setTimeout(tick, 10000);
  };
  setTimeout(tick, 25000);
}

// ---------------------------------------------------------------------------
// local mode: the dev server writes the files, or they download
// ---------------------------------------------------------------------------
async function probeDevSave() {
  try {
    const r = await fetch('../__manage/ping', { cache: 'no-store' });
    devSave = r.ok && (await r.text()) === 'arrakis-manage';
  } catch {
    devSave = false;
  }
}

async function saveLocal() {
  const rel = await prepareRelease();
  if (!rel) return;
  if (devSave) {
    const prog = progress('Saving');
    try {
      const files = [{ path: cfg.contentPath, text: rel.text }];
      for (const p of rel.files) files.push({ path: `${cfg.publicDir}/${p}`, base64: await blobToBase64(store.pending.get(p).blob) });
      prog.step(`Writing ${plural(files.length, 'file')}…`);
      // the dev server reloads this page when site.json changes; nothing is lost
      await clearDraft();
      const r = await fetch('../__manage/save', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Arrakis-Manage': '1' }, body: JSON.stringify({ files }) });
      if (!r.ok) throw new Error((await r.text()) || `The dev server said ${r.status}.`);
      store.markPublished(rel.text, null, rel.files);
      prog.close();
      toast(`Saved ${plural(files.length, 'file')} into the project.`);
    } catch (err) {
      prog.close();
      await writeDraft();
      toast(`Couldn’t save: ${err.message}`, 'error');
    }
    return;
  }
  // no dev server: hand the files over
  const list = h(
    'ul',
    { class: 'm-files' },
    h('li', {}, h('code', { text: cfg.contentPath }), h('button', { type: 'button', class: 'm-btn small', onclick: () => download('site.json', new Blob([rel.text], { type: 'application/json' })) }, 'Download')),
    rel.files.map((p) => h('li', {}, h('code', { text: `${cfg.publicDir}/${p}` }), h('button', { type: 'button', class: 'm-btn small', onclick: () => download(p.split('/').pop(), store.pending.get(p).blob) }, 'Download'))),
  );
  const done = await dialog({
    title: 'Save these files into the project',
    wide: true,
    body: [h('p', { text: 'This page isn’t running on the dev server, so it can’t write files itself. Download each one and put it at the path shown (folders included), then commit.' }), list],
    buttons: [
      { label: 'Close', value: false },
      { label: 'I’ve put them in place', value: true, kind: 'primary' },
    ],
  });
  if (done) store.markPublished(rel.text, null, rel.files);
}

// ---------------------------------------------------------------------------
// start
// ---------------------------------------------------------------------------
if (!REMOTE) {
  openEditor(clone(bundledSite), null, JSON.stringify(bundledSite));
} else if (vaultInfo()) {
  showUnlock();
} else {
  showSetup();
}
