# Particle Portfolio

A clean, modern resume site for **Muzzamil Khan** with an interactive particle
field that drifts behind the resume card and physically deflects off it as you
move around the page.

Built with React + TypeScript + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.tsx                  # Top-level layout, tab state, particle obstacle
  App.css                  # Layout + section styles
  index.css                # Theme tokens, fonts, page background
  main.tsx                 # React entry point

  data/
    resume.ts              # All resume content lives here
    tabs.ts                # Tab order + which component renders each tab

  components/
    Header.tsx             # Name, title, contact links
    TabNav.tsx             # Accessible tab buttons
    ParticleField.tsx      # The interactive particle canvas

    sections/
      About.tsx
      Experience.tsx
      Education.tsx
      Projects.tsx
      Skills.tsx
```

## Adding new content

The site is intentionally data-driven so day-to-day updates don't require
touching component code.

### Add a new tab

1. Create a new component in `src/components/sections/` that returns a `<div className="section">…</div>`.
2. Register it in `src/data/tabs.ts`:

   ```ts
   import Awards from '../components/sections/Awards'

   export const tabs: Tab[] = [
     // …existing tabs
     { id: 'awards', label: 'Awards', Component: Awards },
   ]
   ```

That's it — the tab nav, panel routing, animations, and persisted "last
selected tab" state all pick it up automatically.

### Add a new project

Open `src/data/resume.ts` and append to `projects`:

```ts
export const projects: ProjectItem[] = [
  {
    name: 'My new project',
    description: 'One-sentence summary of what it is and the impact.',
    href: 'https://example.com',
    repo: 'https://github.com/your/repo',
    stack: ['React', 'TypeScript'],
    highlight: true,
  },
]
```

The Projects tab will render it in the grid automatically — no JSX changes
needed. The empty-state message disappears as soon as the array is non-empty.

### Add or change a contact link

Edit the `profile.links` array in `src/data/resume.ts`. Supported icons:
`mail`, `linkedin`, `github`, `globe`, `external`.

## How the particle interaction works

`ParticleField.tsx` renders a fixed full-viewport `<canvas>` and runs a small
physics loop on `requestAnimationFrame`:

- Particles drift slowly with a damped velocity cap.
- They're gently repelled by the cursor within `mouseRadius` px.
- They deflect off the bounding rectangle of the resume card (passed in via
  `obstacleRef`) so the card looks like a physical object the particles flow
  around.
- Nearby particles draw faint connecting lines for a constellation effect.

The card's bounding rect is updated on resize, scroll, and via a
`ResizeObserver`, so the obstacle stays in sync as content (and tabs) change.
