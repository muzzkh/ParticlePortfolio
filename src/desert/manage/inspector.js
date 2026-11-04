// The right-hand panel: everything about the selected entry, the profile, or the world.
//
// ctx: {
//   store, change(fn, key), rerender(), renderMarkdown(md),
//   uploadImage(file, folder) -> path, uploadModel(file, entryId) -> path, uploadPdf(file) -> path,
//   world: { select(id), placeOf(id), viewCenter() }, duplicate(id), remove(id), select(sel),
//   renameEntry(oldId, newId), isUnpublished(id), assetUrl(path),
// }
// Typing changes use keys starting "field:", which don't rebuild this panel (so focus
// and the caret stay put); structural changes rebuild it.

import { h, autosize, toast } from './dom.js';
import { KINDS, yearSpan, slug } from '../resume/normalize.js';
import { humanSize } from './media.js';
import { GAMES, tidyGames } from './games.js';

const KIND_OPTIONS = [
  ['experience', 'Experience (waystone)'],
  ['education', 'Education (waystone)'],
  ['skills', 'Skills (waystone)'],
  ['project', 'Project (landing pad)'],
];
const ICONS = [
  ['mail', 'Email'],
  ['linkedin', 'LinkedIn'],
  ['github', 'GitHub'],
  ['globe', 'Website'],
  ['external', 'Other link'],
];

const section = (title, ...kids) => h('section', { class: 'i-section' }, h('h3', { text: title }), ...kids);
const hint = (text) => h('p', { class: 'i-hint', text });

// ---------------------------------------------------------------------------
// building blocks
// ---------------------------------------------------------------------------
function textInput(ctx, { label, value, key, set, placeholder, multiline, hintText, type = 'text', id }) {
  const input = multiline
    ? autosize(h('textarea', { class: 'i-input', rows: 2, placeholder, id }))
    : h('input', { class: 'i-input', type, placeholder, id, spellcheck: type === 'text' ? 'true' : 'false' });
  input.value = value ?? '';
  input.addEventListener('input', () => ctx.change((site) => set(site, input.value), `field:${key}`));
  input.addEventListener('blur', () => ctx.store.seal());
  return h('label', { class: 'i-field' }, h('span', { class: 'i-label', text: label }), input, hintText ? hint(hintText) : null);
}

function numberInput(ctx, { label, value, key, set, min, max, step, unit }) {
  const input = h('input', { class: 'i-input num', type: 'number', min, max, step });
  input.value = value ?? 0;
  input.addEventListener('input', () => {
    const v = parseFloat(input.value);
    if (Number.isFinite(v)) ctx.change((site) => set(site, v), `field:${key}`);
  });
  input.addEventListener('blur', () => ctx.store.seal());
  return h('label', { class: 'i-field inline' }, h('span', { class: 'i-label', text: label }), input, unit ? h('span', { class: 'i-unit', text: unit }) : null);
}

function slider(ctx, { label, value, key, set, min, max, step, format }) {
  const out = h('output', { class: 'i-out', text: format(value) });
  const input = h('input', { type: 'range', class: 'i-range', min, max, step });
  input.value = value;
  input.addEventListener('input', () => {
    const v = parseFloat(input.value);
    out.textContent = format(v);
    ctx.change((site) => set(site, v), `field:${key}`);
  });
  input.addEventListener('change', () => ctx.store.seal());
  return h('label', { class: 'i-field slider' }, h('span', { class: 'i-label', text: label }), input, out);
}

function toggle(ctx, { label, checked, key, set, hintText }) {
  const input = h('input', { type: 'checkbox', class: 'i-check' });
  input.checked = !!checked;
  input.addEventListener('change', () => {
    ctx.change((site) => set(site, input.checked), `struct:${key}`);
    ctx.store.seal();
    ctx.rerender();
  });
  return h('label', { class: 'i-toggle' }, input, h('span', { text: label }), hintText ? hint(hintText) : null);
}

function select(ctx, { label, value, options, key, set }) {
  const sel = h(
    'select',
    { class: 'i-input' },
    options.map(([v, text]) => h('option', { value: v, text })),
  );
  sel.value = value;
  sel.addEventListener('change', () => {
    ctx.change((site) => set(site, sel.value), `struct:${key}`);
    ctx.store.seal();
    ctx.rerender();
  });
  return h('label', { class: 'i-field' }, h('span', { class: 'i-label', text: label }), sel);
}

const iconBtn = (title, text, onclick, cls = '') => h('button', { type: 'button', class: `i-icon ${cls}`, title, 'aria-label': title, onclick }, text);

// an ordered list of strings (highlights), each a growing text box
function stringList(ctx, { items, key, get, addLabel, placeholder }) {
  const wrap = h('div', { class: 'i-list' });
  items.forEach((text, i) => {
    const ta = autosize(h('textarea', { class: 'i-input', rows: 1, placeholder, 'data-focus': i === items.length - 1 ? `${key}:last` : undefined }));
    ta.value = text;
    ta.addEventListener('input', () => ctx.change((site) => (get(site)[i] = ta.value), `field:${key}:${i}`));
    ta.addEventListener('blur', () => ctx.store.seal());
    const move = (d) => () => {
      ctx.change((site) => {
        const arr = get(site);
        const j = i + d;
        if (j < 0 || j >= arr.length) return;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }, `struct:${key}`);
      ctx.store.seal();
      ctx.rerender();
    };
    wrap.append(
      h(
        'div',
        { class: 'i-row' },
        ta,
        h(
          'div',
          { class: 'i-row-tools' },
          iconBtn('Move up', '↑', move(-1)),
          iconBtn('Move down', '↓', move(1)),
          iconBtn(
            'Remove',
            '×',
            () => {
              ctx.change((site) => get(site).splice(i, 1), `struct:${key}`);
              ctx.store.seal();
              ctx.rerender();
            },
            'danger',
          ),
        ),
      ),
    );
  });
  wrap.append(
    h(
      'button',
      {
        type: 'button',
        class: 'm-btn small',
        onclick: () => {
          ctx.change((site) => get(site).push(''), `struct:${key}`);
          ctx.store.seal();
          ctx.rerender(`${key}:last`);
        },
      },
      addLabel,
    ),
  );
  return wrap;
}

// tags as chips: type and press Enter (or comma) to add
function chips(ctx, { items, key, get, placeholder }) {
  const wrap = h('div', { class: 'i-chips' });
  items.forEach((t, i) =>
    wrap.append(
      h(
        'span',
        { class: 'i-chip' },
        t,
        h(
          'button',
          {
            type: 'button',
            'aria-label': `Remove ${t}`,
            onclick: () => {
              ctx.change((site) => get(site).splice(i, 1), `struct:${key}`);
              ctx.store.seal();
              ctx.rerender(`${key}:input`);
            },
          },
          '×',
        ),
      ),
    ),
  );
  const input = h('input', { class: 'i-chip-input', placeholder, 'data-focus': `${key}:input` });
  const add = () => {
    const parts = input.value
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);
    if (!parts.length) return;
    ctx.change((site) => get(site).push(...parts), `struct:${key}`);
    ctx.store.seal();
    ctx.rerender(`${key}:input`);
  };
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      add();
    } else if (e.key === 'Backspace' && !input.value && items.length) {
      ctx.change((site) => get(site).pop(), `struct:${key}`);
      ctx.store.seal();
      ctx.rerender(`${key}:input`);
    }
  });
  input.addEventListener('blur', add);
  wrap.append(input);
  return wrap;
}

// rows of two text fields: facts [label, value] or links { label, href }
function pairs(ctx, { items, key, get, a, b, read, write, make, addLabel }) {
  const wrap = h('div', { class: 'i-list' });
  items.forEach((item, i) => {
    const [va, vb] = read(item);
    const ia = h('input', { class: 'i-input', placeholder: a, 'data-focus': i === items.length - 1 ? `${key}:last` : undefined });
    const ib = h('input', { class: 'i-input', placeholder: b });
    ia.value = va || '';
    ib.value = vb || '';
    const upd = () => ctx.change((site) => (get(site)[i] = write(ia.value, ib.value, get(site)[i])), `field:${key}:${i}`);
    ia.addEventListener('input', upd);
    ib.addEventListener('input', upd);
    wrap.append(
      h(
        'div',
        { class: 'i-row pair' },
        ia,
        ib,
        iconBtn(
          'Remove',
          '×',
          () => {
            ctx.change((site) => get(site).splice(i, 1), `struct:${key}`);
            ctx.store.seal();
            ctx.rerender();
          },
          'danger',
        ),
      ),
    );
  });
  wrap.append(
    h(
      'button',
      {
        type: 'button',
        class: 'm-btn small',
        onclick: () => {
          ctx.change((site) => get(site).push(make()), `struct:${key}`);
          ctx.store.seal();
          ctx.rerender(`${key}:last`);
        },
      },
      addLabel,
    ),
  );
  return wrap;
}

// pick (or drop) a file
function fileButton(label, accept, onFile, cls = 'small') {
  const input = h('input', { type: 'file', accept, hidden: true });
  input.addEventListener('change', () => {
    if (input.files[0]) onFile(input.files[0]);
    input.value = '';
  });
  return h('span', {}, input, h('button', { type: 'button', class: `m-btn ${cls}`, onclick: () => input.click() }, label));
}

function dropZone(el, accept, onFile) {
  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.classList.add('drag');
  });
  el.addEventListener('dragleave', () => el.classList.remove('drag'));
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('drag');
    const f = [...(e.dataTransfer.files || [])].find((x) => accept(x));
    if (f) onFile(f);
  });
  return el;
}

// ---------------------------------------------------------------------------
// formatted text
// ---------------------------------------------------------------------------
function markdownEditor(ctx, { value, key, set, folder }) {
  const ta = h('textarea', { class: 'i-input md-text', rows: 8, placeholder: 'Write here. Use the toolbar, or Markdown: **bold**, _italic_, ## heading, - list, [link](https://…), images by pasting or dropping them in.' });
  ta.value = value || '';
  const preview = h('div', { class: 'md-preview ds-rich' });
  let mode = 'write';
  const render = () => {
    preview.replaceChildren(ctx.renderMarkdown(ta.value));
    if (!ta.value.trim()) preview.append(h('p', { class: 'i-hint', text: 'Nothing to preview yet.' }));
  };
  const commit = () => ctx.change((site) => set(site, ta.value), `field:${key}`);
  ta.addEventListener('input', () => {
    commit();
    if (mode !== 'write') render();
  });
  ta.addEventListener('blur', () => ctx.store.seal());
  const wrap = (before, after = before, placeholder = 'text') => {
    const { selectionStart: s, selectionEnd: e, value: v } = ta;
    const sel = v.slice(s, e) || placeholder;
    ta.setRangeText(before + sel + after, s, e, 'end');
    ta.setSelectionRange(s + before.length, s + before.length + sel.length);
    ta.focus();
    commit();
    if (mode !== 'write') render();
  };
  const linePrefix = (prefix) => {
    const { selectionStart: s, selectionEnd: e, value: v } = ta;
    const start = v.lastIndexOf('\n', s - 1) + 1;
    const block = v.slice(start, e);
    const lines = block.split('\n').map((l, i) => (prefix === '1. ' ? `${i + 1}. ` : prefix) + l);
    ta.setRangeText(lines.join('\n'), start, e, 'end');
    ta.focus();
    commit();
    if (mode !== 'write') render();
  };
  const insert = (text) => {
    ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, 'end');
    ta.focus();
    commit();
    if (mode !== 'write') render();
  };
  const addImage = async (file) => {
    try {
      const path = await ctx.uploadImage(file, folder);
      const alt = file.name.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]+/g, ' ');
      insert(`\n![${alt}](${path})\n`);
      toast('Image added. It goes live when you publish.');
    } catch (err) {
      toast(err.message, 'error');
    }
  };
  ta.addEventListener('paste', (e) => {
    const f = [...(e.clipboardData.files || [])].find((x) => x.type.startsWith('image/'));
    if (f) {
      e.preventDefault();
      addImage(f);
    }
  });
  dropZone(ta, (f) => f.type.startsWith('image/'), addImage);
  ta.addEventListener('keydown', (e) => {
    if (!(e.metaKey || e.ctrlKey)) return;
    if (e.key === 'b') {
      e.preventDefault();
      wrap('**');
    } else if (e.key === 'i') {
      e.preventDefault();
      wrap('_');
    } else if (e.key === 'k') {
      e.preventDefault();
      wrap('[', '](https://)', 'link text');
    }
  });
  const imgInput = h('input', { type: 'file', accept: 'image/*', hidden: true });
  imgInput.addEventListener('change', () => {
    if (imgInput.files[0]) addImage(imgInput.files[0]);
    imgInput.value = '';
  });
  const tool = (label, title, fn) => h('button', { type: 'button', class: 'md-tool', title, 'aria-label': title, onclick: fn }, label);
  const tabs = h('div', { class: 'md-tabs' });
  const setMode = (m) => {
    mode = m;
    root.dataset.mode = m;
    for (const b of tabs.children) b.classList.toggle('on', b.dataset.m === m);
    if (m !== 'write') render();
  };
  for (const [m, text] of [
    ['write', 'Write'],
    ['split', 'Split'],
    ['preview', 'Preview'],
  ])
    tabs.append(h('button', { type: 'button', class: 'md-tab', 'data-m': m, onclick: () => setMode(m) }, text));
  const root = h(
    'div',
    { class: 'md', 'data-mode': 'write' },
    h(
      'div',
      { class: 'md-bar' },
      h(
        'div',
        { class: 'md-tools' },
        tool('B', 'Bold (Ctrl/Cmd+B)', () => wrap('**')),
        tool('I', 'Italic (Ctrl/Cmd+I)', () => wrap('_')),
        tool('H2', 'Heading', () => linePrefix('## ')),
        tool('H3', 'Small heading', () => linePrefix('### ')),
        tool('•', 'Bulleted list', () => linePrefix('- ')),
        tool('1.', 'Numbered list', () => linePrefix('1. ')),
        tool('❝', 'Quote', () => linePrefix('> ')),
        tool('Link', 'Link (Ctrl/Cmd+K)', () => wrap('[', '](https://)', 'link text')),
        tool('Image', 'Insert an image', () => imgInput.click()),
        tool('</>', 'Code', () => wrap('`')),
        tool('—', 'Divider', () => insert('\n\n---\n\n')),
      ),
      tabs,
    ),
    imgInput,
    h('div', { class: 'md-panes' }, ta, preview),
  );
  setMode('write');
  return root;
}

// ---------------------------------------------------------------------------
// panels
// ---------------------------------------------------------------------------
function entryPanel(ctx, id) {
  const e = ctx.store.entry(id);
  if (!e) return h('div', { class: 'i-empty' }, 'That entry no longer exists.');
  const E = (site) => site.entries.find((x) => x.id === id);
  const k = (name) => `${id}:${name}`;
  const kind = e.kind;
  const project = kind === 'project';
  const out = [];

  out.push(
    h(
      'header',
      { class: `i-head kind-${kind}` },
      h('div', { class: 'i-kicker', text: `${KINDS[kind].label}${e.hidden ? ' · hidden' : ''}` }),
      h('h2', { text: e.title || 'Untitled' }),
    ),
  );

  // --- basics
  const basics = [
    select(ctx, { label: 'Kind', value: kind, options: KIND_OPTIONS, key: k('kind'), set: (s, v) => changeKind(E(s), v) }),
    textInput(ctx, { label: 'Title', value: e.title, key: k('title'), set: (s, v) => (E(s).title = v), placeholder: project ? 'Project name' : 'Role or degree', id: 'i-title' }),
  ];
  if (kind !== 'skills') basics.push(textInput(ctx, { label: project ? 'Byline' : kind === 'education' ? 'School' : 'Organization', value: e.org, key: k('org'), set: (s, v) => (E(s).org = v), placeholder: project ? 'Project' : '', id: 'i-org' }));
  if (project) basics.push(textInput(ctx, { label: 'Status', value: e.status, key: k('status'), set: (s, v) => (E(s).status = v), placeholder: 'In progress', hintText: 'Shown on its label and card, like “In progress” or “Shipped 2026”.' }));
  else if (kind !== 'skills') {
    basics.push(
      textInput(ctx, { label: 'Dates', value: e.period, key: k('period'), set: (s, v) => (E(s).period = v), placeholder: kind === 'education' ? 'Graduation · May 2024' : 'February 2026 – Present', hintText: `The years label reads “${e.years || yearSpan(e.period) || '—'}”.` }),
      textInput(ctx, { label: 'Years label (optional)', value: e.years, key: k('years'), set: (s, v) => (E(s).years = v || undefined), placeholder: yearSpan(e.period) || '2024–Now' }),
      textInput(ctx, { label: 'Location', value: e.location, key: k('location'), set: (s, v) => (E(s).location = v), placeholder: 'College Park, MD' }),
    );
  }
  basics.push(
    idField(ctx, e, id),
    toggle(ctx, { label: 'Hidden from the site', checked: e.hidden, key: k('hidden'), set: (s, v) => (E(s).hidden = v || undefined), hintText: 'Kept here, but not shown to visitors.' }),
  );
  out.push(section('Basics', ...basics));

  // --- words
  out.push(
    section(
      'Summary',
      textInput(ctx, { label: 'Lead-in', value: e.summary, key: k('summary'), set: (s, v) => (E(s).summary = v), multiline: true, placeholder: 'A sentence or two at the top of the card.' }),
    ),
  );
  if (kind !== 'skills')
    out.push(
      section(
        'Highlights',
        hint('Bulleted points on the card.'),
        stringList(ctx, {
          items: e.bullets || [],
          key: k('bullets'),
          get: (s) => (E(s).bullets ||= []),
          addLabel: '+ Add a highlight',
          placeholder: 'Led …, shipped …, improved … by …',
        }),
      ),
    );
  out.push(
    section(
      'Details',
      hint('Formatted text with images, shown below the highlights. Paste or drop images straight in.'),
      markdownEditor(ctx, { value: e.body, key: k('body'), set: (s, v) => (E(s).body = v || undefined), folder: `media/${id}` }),
    ),
  );

  // --- cover image
  const coverBox = h('div', { class: 'i-cover' });
  const setCover = async (file) => {
    try {
      const path = await ctx.uploadImage(file, `media/${id}`);
      ctx.change((s) => (E(s).cover = path), `struct:${k('cover')}`);
      ctx.store.seal();
      ctx.rerender();
    } catch (err) {
      toast(err.message, 'error');
    }
  };
  if (e.cover) {
    coverBox.append(
      h('img', { src: ctx.assetUrl(e.cover), alt: e.coverAlt || '' }),
      textInput(ctx, { label: 'Alt text', value: e.coverAlt, key: k('coverAlt'), set: (s, v) => (E(s).coverAlt = v), placeholder: 'What the image shows' }),
      h(
        'div',
        { class: 'i-actions' },
        fileButton('Replace image', 'image/*', setCover),
        h(
          'button',
          {
            type: 'button',
            class: 'm-btn small',
            onclick: () => {
              ctx.change((s) => {
                delete E(s).cover;
                delete E(s).coverAlt;
              }, `struct:${k('cover')}`);
              ctx.store.seal();
              ctx.rerender();
            },
          },
          'Remove',
        ),
      ),
    );
  } else {
    coverBox.append(dropZone(h('div', { class: 'i-drop' }, h('span', { text: 'Drop an image here, or ' }), fileButton('choose one', 'image/*', setCover, 'link')), (f) => f.type.startsWith('image/'), setCover));
  }
  out.push(section('Cover image', hint('A picture at the top of the card.'), coverBox));

  // --- kind-specific
  if (kind === 'skills') {
    const groups = h('div', { class: 'i-groups' });
    (e.groups || []).forEach((g, gi) => {
      const name = h('input', { class: 'i-input', placeholder: 'Group name' });
      name.value = g.category;
      name.addEventListener('input', () => ctx.change((s) => (E(s).groups[gi].category = name.value), `field:${k(`g${gi}`)}`));
      groups.append(
        h(
          'div',
          { class: 'i-group' },
          h(
            'div',
            { class: 'i-row' },
            name,
            iconBtn(
              'Remove group',
              '×',
              () => {
                ctx.change((s) => E(s).groups.splice(gi, 1), `struct:${k('groups')}`);
                ctx.store.seal();
                ctx.rerender();
              },
              'danger',
            ),
          ),
          chips(ctx, { items: g.items || [], key: k(`g${gi}items`), get: (s) => (E(s).groups[gi].items ||= []), placeholder: 'Add a skill and press Enter' }),
        ),
      );
    });
    groups.append(
      h(
        'button',
        {
          type: 'button',
          class: 'm-btn small',
          onclick: () => {
            ctx.change((s) => (E(s).groups ||= []).push({ category: 'New group', items: [] }), `struct:${k('groups')}`);
            ctx.store.seal();
            ctx.rerender();
          },
        },
        '+ Add a group',
      ),
    );
    out.push(section('Skill groups', groups));
  } else {
    out.push(
      section(
        'Tags',
        textInput(ctx, { label: 'Heading', value: e.tagsLabel, key: k('tagsLabel'), set: (s, v) => (E(s).tagsLabel = v || undefined), placeholder: kind === 'education' ? 'Relevant coursework' : 'Stack' }),
        chips(ctx, { items: e.tags || [], key: k('tags'), get: (s) => (E(s).tags ||= []), placeholder: 'Add a tag and press Enter' }),
      ),
    );
  }
  if (kind === 'education' || (e.facts && e.facts.length)) {
    out.push(
      section(
        'Facts',
        hint('Short label and value pairs, like GPA 3.7.'),
        pairs(ctx, {
          items: e.facts || [],
          key: k('facts'),
          get: (s) => (E(s).facts ||= []),
          a: 'Label',
          b: 'Value',
          read: (f) => [f[0], f[1]],
          write: (a, b) => [a, b],
          make: () => ['', ''],
          addLabel: '+ Add a fact',
        }),
      ),
    );
  }
  out.push(
    section(
      'Links',
      hint('Buttons at the bottom of the card: a demo, the source, a write-up.'),
      pairs(ctx, {
        items: e.links || [],
        key: k('links'),
        get: (s) => (E(s).links ||= []),
        a: 'Label',
        b: 'https://…',
        read: (l) => [l.label, l.href],
        write: (a, b) => ({ label: a, href: b }),
        make: () => ({ label: '', href: '' }),
        addLabel: '+ Add a link',
      }),
    ),
  );

  if (project) out.push(modelSection(ctx, e, E, k));
  out.push(placementSection(ctx, e, E, k));

  out.push(
    section(
      'Entry',
      h(
        'div',
        { class: 'i-actions' },
        h('button', { type: 'button', class: 'm-btn small', onclick: () => ctx.duplicate(id) }, 'Duplicate'),
        h('button', { type: 'button', class: 'm-btn small danger', onclick: () => ctx.remove(id) }, 'Delete'),
      ),
    ),
  );
  return out;
}

// The ID is how everything else finds the entry, so it changes when the field is left
// (or Enter is pressed), not on every keystroke.
function idField(ctx, e, id) {
  const input = h('input', { class: 'i-input', spellcheck: 'false', autocomplete: 'off' });
  input.value = e.id;
  const commit = () => {
    const clean = slug(input.value);
    if (clean === id) {
      input.value = id;
      return;
    }
    if (!clean) {
      toast('The ID needs at least one letter or digit.', 'error');
      input.value = id;
      return;
    }
    if (ctx.store.site.entries.some((x) => x.id === clean)) {
      toast(`Another entry already uses the ID “${clean}”.`, 'error');
      input.value = id;
      return;
    }
    ctx.renameEntry(id, clean);
  };
  input.addEventListener('change', commit);
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      input.blur();
    } else if (ev.key === 'Escape') {
      input.value = id;
      input.blur();
    }
  });
  const auto = ctx.isUnpublished(id) ? ' Until it’s first published, it follows the title.' : '';
  return h('label', { class: 'i-field' }, h('span', { class: 'i-label', text: 'ID' }), input, hint(`Used in links to this entry (…/#${id}). Lowercase letters, digits and dashes; changes when you leave the field.${auto}`));
}

function changeKind(e, kind) {
  e.kind = kind;
  if (kind === 'project') {
    e.org = e.org || 'Project';
    e.model = e.model || { type: 'pod', src: '', scale: 1, yaw: 0, y: 0, lift: true };
  }
  if (kind === 'skills') e.groups = e.groups || [{ category: 'Languages', items: [] }];
}

function modelSection(ctx, e, E, k) {
  const m = e.model || { type: 'pod', scale: 1, yaw: 0, y: 0, lift: true };
  const M = (s) => (E(s).model ||= { type: 'pod', src: '', scale: 1, yaw: 0, y: 0, lift: true });
  const kids = [hint('What stands on the landing pad.')];
  const choices = h('div', { class: 'i-choices' });
  for (const [type, title, desc] of [
    ['ornithopter', 'Ornithopter', 'The built-in flapping-wing craft'],
    ['pod', 'Cargo pod', 'A simple sealed pod'],
    ['glb', 'Your model', 'Upload a .glb file'],
  ]) {
    choices.append(
      h(
        'button',
        {
          type: 'button',
          class: `i-choice${m.type === type ? ' on' : ''}`,
          'aria-pressed': String(m.type === type),
          onclick: () => {
            ctx.change((s) => (M(s).type = type), `struct:${k('modelType')}`);
            ctx.store.seal();
            ctx.rerender();
          },
        },
        h('b', { text: title }),
        h('span', { text: desc }),
      ),
    );
  }
  kids.push(choices);
  if (m.type === 'glb') {
    const pending = m.src ? ctx.store.pending.get(m.src) : null;
    const status = m.src ? h('div', { class: 'i-file' }, h('b', { text: m.src.split('/').pop() }), h('span', { text: pending ? `${humanSize(pending.size)} · not published yet` : 'published' })) : h('p', { class: 'i-hint warn', text: 'No model chosen yet. Until you add one, the pad shows a placeholder.' });
    const onModel = async (file) => {
      try {
        const path = await ctx.uploadModel(file, e.id);
        if (!path) return;
        ctx.change((s) => (M(s).src = path), `struct:${k('modelSrc')}`);
        ctx.store.seal();
        ctx.rerender();
      } catch (err) {
        toast(err.message, 'error');
      }
    };
    kids.push(
      status,
      dropZone(h('div', { class: 'i-drop' }, h('span', { text: m.src ? 'Drop a new .glb here, or ' : 'Drop a .glb here, or ' }), fileButton('choose a file', '.glb,model/gltf-binary', onModel, 'link')), (f) => /\.glb$/i.test(f.name), onModel),
      hint('Binary glTF (.glb) with textures embedded; Draco and Meshopt compression are fine. It is scaled to fit the pad, then by Size below. Animations in the file play on a loop.'),
    );
  }
  kids.push(
    slider(ctx, { label: 'Size', value: m.scale ?? 1, min: 0.2, max: 3, step: 0.05, key: k('mScale'), set: (s, v) => (M(s).scale = v), format: (v) => `${v.toFixed(2)}×` }),
    slider(ctx, { label: 'Turn', value: m.yaw ?? 0, min: 0, max: 359, step: 1, key: k('mYaw'), set: (s, v) => (M(s).yaw = v), format: (v) => `${Math.round(v)}°` }),
    slider(ctx, { label: 'Height', value: m.y ?? 0, min: -2, max: 4, step: 0.05, key: k('mY'), set: (s, v) => (M(s).y = v), format: (v) => `${v.toFixed(2)} m` }),
    toggle(ctx, { label: 'Lifts off and hovers when someone walks up', checked: m.lift !== false, key: k('mLift'), set: (s, v) => (M(s).lift = v) }),
  );
  return section('3D model', ...kids);
}

// drop it in the middle of what the world view shows
function moveHere(ctx, e, E, k) {
  return h(
    'button',
    {
      type: 'button',
      class: 'm-btn small',
      title: 'Place it in the middle of the world view',
      onclick: () => {
        const c = ctx.world.viewCenter();
        if (!c) return toast('The world view isn’t ready yet.', 'error');
        ctx.change((s) => (E(s).place = { dx: c.dx, dz: c.dz, rot: (E(s).place && E(s).place.rot) || 0 }), `struct:${k('place')}`);
        ctx.store.seal();
        ctx.rerender();
        ctx.world.select(e.id);
      },
    },
    'Move to the view’s center',
  );
}

function placementSection(ctx, e, E, k) {
  const kids = [];
  const project = e.kind === 'project';
  if (e.place) {
    kids.push(
      h('p', { class: 'i-hint', text: 'Placed by hand. Distances are in metres from where visitors start (x to the east, z to the south).' }),
      h(
        'div',
        { class: 'i-grid3' },
        numberInput(ctx, { label: 'x', value: e.place.dx, step: 0.5, key: k('px'), set: (s, v) => (E(s).place.dx = v), unit: 'm' }),
        numberInput(ctx, { label: 'z', value: e.place.dz, step: 0.5, key: k('pz'), set: (s, v) => (E(s).place.dz = v), unit: 'm' }),
        numberInput(ctx, { label: 'Turn', value: e.place.rot ?? 0, step: 5, key: k('pr'), set: (s, v) => (E(s).place.rot = v), unit: '°' }),
      ),
      h(
        'div',
        { class: 'i-actions' },
        h(
          'button',
          {
            type: 'button',
            class: 'm-btn small',
            onclick: () => {
              ctx.change((s) => delete E(s).place, `struct:${k('place')}`);
              ctx.store.seal();
              ctx.rerender();
            },
          },
          project ? 'Back on the project path' : 'Back on the road',
        ),
        moveHere(ctx, e, E, k),
        h('button', { type: 'button', class: 'm-btn small', onclick: () => ctx.world.select(e.id) }, 'Show in world'),
      ),
    );
  } else {
    kids.push(
      h('p', { class: 'i-hint', text: project ? 'Automatic: on the project path, in list order. Drag it in the world view to place it by hand.' : 'Automatic: on the road, in list order. Drag it in the world view to place it by hand.' }),
      h(
        'div',
        { class: 'i-actions' },
        h(
          'button',
          {
            type: 'button',
            class: 'm-btn small',
            onclick: () => {
              const p = ctx.world.placeOf(e.id);
              if (!p) return toast('The world view isn’t ready yet.', 'error');
              ctx.change((s) => (E(s).place = p), `struct:${k('place')}`);
              ctx.store.seal();
              ctx.rerender();
            },
          },
          'Pin where it is now',
        ),
        moveHere(ctx, e, E, k),
        h('button', { type: 'button', class: 'm-btn small', onclick: () => ctx.world.select(e.id) }, 'Show in world'),
      ),
    );
  }
  if (!project) kids.push(slider(ctx, { label: 'Stone size', value: e.scale ?? 1, min: 0.5, max: 2, step: 0.05, key: k('scale'), set: (s, v) => (E(s).scale = v === 1 ? undefined : v), format: (v) => `${v.toFixed(2)}×` }));
  return section('Placement', ...kids);
}

function profilePanel(ctx) {
  const p = ctx.store.site.profile;
  const P = (s) => s.profile;
  const out = [h('header', { class: 'i-head' }, h('div', { class: 'i-kicker', text: 'Site' }), h('h2', { text: 'Profile and intro' }))];
  out.push(
    section(
      'You',
      textInput(ctx, { label: 'Name', value: p.name, key: 'p:name', set: (s, v) => (P(s).name = v) }),
      textInput(ctx, { label: 'Headline', value: p.headline, key: 'p:headline', set: (s, v) => (P(s).headline = v), hintText: 'The line above your name on the intro screen.' }),
      textInput(ctx, { label: 'Job title', value: p.title, key: 'p:title', set: (s, v) => (P(s).title = v), hintText: 'Used where there’s no headline.' }),
      textInput(ctx, { label: 'Tagline', value: p.tagline, key: 'p:tagline', set: (s, v) => (P(s).tagline = v) }),
      textInput(ctx, {
        label: 'Intro text (optional)',
        value: p.intro,
        key: 'p:intro',
        set: (s, v) => (P(s).intro = v || undefined),
        multiline: true,
        hintText: 'Leave empty to describe the stones and pads automatically.',
      }),
    ),
  );
  const links = h('div', { class: 'i-list' });
  (p.links || []).forEach((l, i) => {
    const lab = h('input', { class: 'i-input', placeholder: 'Label' });
    const href = h('input', { class: 'i-input', placeholder: 'https://… or mailto:…' });
    lab.value = l.label || '';
    href.value = l.href || '';
    const ic = h(
      'select',
      { class: 'i-input' },
      ICONS.map(([v, t]) => h('option', { value: v, text: t })),
    );
    ic.value = l.icon || 'external';
    const upd = () => ctx.change((s) => (P(s).links[i] = { label: lab.value, href: href.value, icon: ic.value }), `field:p:link${i}`);
    lab.addEventListener('input', upd);
    href.addEventListener('input', upd);
    ic.addEventListener('change', upd);
    links.append(
      h(
        'div',
        { class: 'i-row link3' },
        ic,
        lab,
        href,
        iconBtn(
          'Remove',
          '×',
          () => {
            ctx.change((s) => P(s).links.splice(i, 1), 'struct:p:links');
            ctx.store.seal();
            ctx.rerender();
          },
          'danger',
        ),
      ),
    );
  });
  links.append(
    h(
      'button',
      {
        type: 'button',
        class: 'm-btn small',
        onclick: () => {
          ctx.change((s) => (P(s).links ||= []).push({ label: '', href: '', icon: 'external' }), 'struct:p:links');
          ctx.store.seal();
          ctx.rerender();
        },
      },
      '+ Add a link',
    ),
  );
  out.push(section('Contact links', hint('Shown on the intro screen and at the top of the résumé index.'), links));
  const pdf = ctx.store.site.site?.pdf || '';
  const pending = pdf ? ctx.store.pending.get(pdf) : null;
  out.push(
    section(
      'Résumé PDF',
      pdf ? h('div', { class: 'i-file' }, h('b', { text: pdf }), h('span', { text: pending ? `${humanSize(pending.size)} · not published yet` : 'published' })) : hint('No PDF yet.'),
      h(
        'div',
        { class: 'i-actions' },
        fileButton(pdf ? 'Replace the PDF' : 'Add a PDF', 'application/pdf', async (file) => {
          try {
            const path = await ctx.uploadPdf(file);
            ctx.change((s) => ((s.site ||= {}).pdf = path), 'struct:p:pdf');
            ctx.store.seal();
            ctx.rerender();
          } catch (err) {
            toast(err.message, 'error');
          }
        }),
        pdf ? h('a', { class: 'm-btn small', href: ctx.assetUrl(pdf), target: '_blank', rel: 'noopener' }, 'Open') : null,
      ),
    ),
  );
  return out;
}

function worldPanel(ctx) {
  const w = ctx.store.site.world || {};
  const W = (s) => (s.world ||= {});
  const fmt = (v) => `${String(Math.floor(v) % 24).padStart(2, '0')}:${String(Math.floor((v % 1) * 60)).padStart(2, '0')}`;
  return [
    h('header', { class: 'i-head' }, h('div', { class: 'i-kicker', text: 'Site' }), h('h2', { text: 'World' })),
    section(
      'Desert',
      hint('Every visitor arrives in this world. Changing the seed reshapes the dunes and moves the start point; stones and pads placed by hand keep their distance from the start.'),
      h(
        'div',
        { class: 'i-row' },
        numberInput(ctx, { label: 'Seed', value: w.seed ?? 12345, step: 1, min: 0, key: 'w:seed', set: (s, v) => (W(s).seed = Math.max(0, Math.round(v))) }),
        h(
          'button',
          {
            type: 'button',
            class: 'm-btn small',
            onclick: () => {
              ctx.change((s) => (W(s).seed = Math.floor(Math.random() * 1e6)), 'struct:w:seed');
              ctx.store.seal();
              ctx.rerender();
            },
          },
          'Try another',
        ),
      ),
      slider(ctx, { label: 'Time of day', value: w.time ?? 16.9, min: 0, max: 24, step: 0.05, key: 'w:time', set: (s, v) => (W(s).time = v), format: fmt }),
    ),
  ];
}

// a game's details: whether visitors see it, and where it stands
function gamePanel(ctx, id) {
  const g = GAMES.find((x) => x.id === id);
  if (!g) return [h('div', { class: 'i-empty' }, 'No such game.')];
  const conf = (ctx.store.site.games || {})[id] || {};
  const G = (s) => ((s.games ||= {})[id] ||= {});
  const k = (name) => `game:${id}:${name}`;
  const struct = (fn, key) => {
    ctx.change((s) => {
      fn(s);
      tidyGames(s);
    }, `struct:${k(key)}`);
    ctx.store.seal();
    ctx.rerender();
  };
  const show = h('button', { type: 'button', class: 'm-btn small', onclick: () => ctx.world.select(`game:${id}`) }, 'Show in world');
  const here = h(
    'button',
    {
      type: 'button',
      class: 'm-btn small',
      title: 'Place it in the middle of the world view',
      onclick: () => {
        const c = ctx.world.viewCenter();
        if (!c) return toast('The world view isn’t ready yet.', 'error');
        struct((s) => (G(s).place = { dx: c.dx, dz: c.dz, rot: (G(s).place && G(s).place.rot) || 0 }), 'place');
        ctx.world.select(`game:${id}`);
      },
    },
    'Move to the view’s center',
  );
  const place = [];
  if (conf.place) {
    place.push(
      hint('Placed by hand. Distances are in metres from where visitors start (x to the east, z to the south). Turn sets which way its course runs, in degrees from straight away from the start.'),
      h(
        'div',
        { class: 'i-grid3' },
        numberInput(ctx, { label: 'x', value: conf.place.dx, step: 0.5, key: k('px'), set: (s, v) => (G(s).place.dx = v), unit: 'm' }),
        numberInput(ctx, { label: 'z', value: conf.place.dz, step: 0.5, key: k('pz'), set: (s, v) => (G(s).place.dz = v), unit: 'm' }),
        numberInput(ctx, { label: 'Turn', value: conf.place.rot ?? 0, step: 5, key: k('pr'), set: (s, v) => (G(s).place.rot = v), unit: '°' }),
      ),
      h('div', { class: 'i-actions' }, h('button', { type: 'button', class: 'm-btn small', onclick: () => struct((s) => delete G(s).place, 'place') }, 'Back to its usual spot'), here, show),
    );
  } else {
    place.push(
      hint('Automatic: with the other games, off to the right of where visitors start. Drag it in the world view to place it by hand; [ and ] turn its course.'),
      h(
        'div',
        { class: 'i-actions' },
        h(
          'button',
          {
            type: 'button',
            class: 'm-btn small',
            onclick: () => {
              const p = ctx.world.placeOf(`game:${id}`);
              if (!p) return toast(conf.hidden ? 'Show it first, then pin it.' : 'The world view isn’t ready yet.', 'error');
              struct((s) => (G(s).place = p), 'place');
            },
          },
          'Pin where it is now',
        ),
        here,
        show,
      ),
    );
  }
  return [
    h('header', { class: 'i-head kind-game' }, h('div', { class: 'i-kicker', text: `Game · ${g.kind}${conf.hidden ? ' · hidden' : ''}` }), h('h2', { text: g.title })),
    section('About', hint(g.blurb), hint('Visitors walk onto its glowing ring and press Space (or tap its label) to play, right there in the desert. P and the Games button lead them to it. Best scores stay in their own browser.')),
    section('On the site', toggle(ctx, { label: 'Show it to visitors', checked: !conf.hidden, key: k('hidden'), set: (s, v) => ((G(s).hidden = v ? undefined : true), tidyGames(s)) })),
    section('Placement', ...place),
  ];
}

export function renderInspector(root, sel, ctx) {
  const scrollTop = root.scrollTop;
  let kids;
  if (sel.type === 'profile') kids = profilePanel(ctx);
  else if (sel.type === 'world') kids = worldPanel(ctx);
  else if (sel.type === 'game') kids = gamePanel(ctx, sel.id);
  else if (sel.type === 'entry') kids = entryPanel(ctx, sel.id);
  else kids = [h('div', { class: 'i-empty' }, h('p', { text: 'Pick an entry on the left, or click a stone or pad in the world.' }))];
  root.replaceChildren(...kids);
  root.scrollTop = scrollTop;
}
