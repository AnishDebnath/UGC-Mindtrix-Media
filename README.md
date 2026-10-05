# Mindtrix Media

Showcase site for Mindtrix Media — creative UGC ads, reels, and product showcases. React 19 + Vite 8 + TypeScript + Tailwind CSS 4.

## Requirements

- Node.js >= 20
- npm >= 10

## Setup

```bash
npm install
cp .env.example .env   # optional
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Typecheck + production build to `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run typecheck` | Check app + Vite config (also aliased as `npm run lint`) |
| `npm run clean` | Remove `dist/` |

## Environment

See `.env.example`.

- `DISABLE_HMR` — set `true` to disable HMR and file watching (prevents flicker during agent edits).

## Project structure

```
src/
  main.tsx                 # Entry point
  App.tsx                  # Root component (Navbar + HomePage + Footer)
  index.css                # Tailwind + global styles
  types.ts                 # Shared types
  data/mockData.ts         # Static content data
  utils/                   # Shared helpers (scrollToId)
  pages/home/              # Home page: one file per section + index.tsx composition
  assets/images/           # Images referenced by the app
  components/
    layout/                # Navbar, Footer
    ui/                    # Reusable UI (Toast)
```

`src/pages/home/index.tsx` wires every section of the home page; add new sections there.

Path alias `@/` maps to `src/` (configured in `tsconfig.json` and `vite.config.ts`).

## Quality gates

- TypeScript strict mode, `noUnusedLocals`, `noUnusedParameters`.
- `npm run typecheck` runs two configs: `tsconfig.json` (app) and `tsconfig.node.json` (Vite config).

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs `npm ci`, typecheck, and build on pushes to `main` and on pull requests.

## Deployment

Static site. Build with `npm run build`, serve `dist/` from any static host (nginx, Netlify, Vercel, GitHub Pages).
