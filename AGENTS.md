<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# turjo

A fresh Next.js 16 App Router project bootstrapped with `create-next-app`. It currently contains only the starter landing page — there is no product code, backend, database, auth, or test suite yet.

## Commands

```bash
npm run dev     # start dev server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (flat config, eslint-config-next + TypeScript rules)
```

There is no test runner configured. TypeScript checking happens during `next build`; there is no standalone `typecheck` script.

## Stack

- **Next.js 16.4.6** (App Router, React Server Components) with **React 19.3**
- **TypeScript** in strict mode
- **Tailwind CSS v4** via `@tailwindcss/turbopack` (no `tailwind.config`; theme lives in CSS)
- **React Compiler** enabled (`reactCompiler: true`)
- **ESLint 9** flat config

## Layout

```
src/app/
  layout.tsx    # root layout, Geist fonts, metadata, <html>/<body>
  page.tsx      # starter landing page (route "/")
  globals.css   # Tailwind import, CSS variables, theme mapping, dark mode
public/         # static SVG assets (next, vercel, file, globe, window)
next.config.ts  # cacheComponents, partialPrefetching, React Compiler, Turbopack CSS loader
eslint.config.mjs
tsconfig.json   # path alias @/* -> ./src/*
```

- Imports use the `@/*` alias for `src/*`.
- Routes are file-based under `src/app`; add new routes as `src/app/<segment>/page.tsx`.
- `next.config.ts` opts into `cacheComponents` and `partialPrefetching` — check the bundled docs before adding data fetching or caching behavior.

## Conventions

- Default to Server Components. Add `"use client"` only when a file needs state, effects, event handlers, or browser APIs.
- Use `next/image` for images and `next/font` for fonts, matching the starter.
- Style with Tailwind utility classes; extend design tokens through `@theme` in `globals.css` rather than adding a JS config.
- Define route `params`/`searchParams` and layout props with the generated helpers (e.g. `LayoutProps<"/">`), not hand-written shapes.
- The metadata in `layout.tsx` is still the create-next-app default; update it when building real pages.
- Keep the Next.js block above intact — `next dev` regenerates it, and deleting it just creates a dirty diff.

## Things to know

- Before writing Next.js code, read the relevant guide under `node_modules/next/dist/docs/` — this version has breaking changes from older Next.js releases.
- No environment variables are used yet. `.env*` files are gitignored; add a committed example file if you introduce required variables.
- No CI, formatter (Prettier), or lockfile-specific workflow beyond `package-lock.json` (npm).
