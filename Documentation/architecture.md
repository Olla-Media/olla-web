# Architecture

## Overview

The product site is a **single-page application (SPA)**. React Router maps URLs to page components; shared chrome (navbar / footer) wraps all routes via a layout outlet.

```
Browser
  → index.html
    → src/main.tsx
      → App.tsx (BrowserRouter + Routes)
        → Layout (Navbar, Outlet, Footer)
          → pages/* (Home, About, FAQs, …)
```

## Directory map

```
.
├── Documentation/          # Project guides
├── public/                 # Static files (favicon, etc.)
├── src/
│   ├── assets/             # Images imported by components
│   │   ├── banners/
│   │   ├── features/
│   │   └── team/
│   ├── components/
│   │   ├── about/          # TeamMember
│   │   ├── contact/        # ContactForm
│   │   ├── home/           # Hero, FeatureCarousel, Newsletter
│   │   ├── layout/         # Navbar, Footer, Layout / AboutShell
│   │   ├── press/          # DateBadge, ArchiveItem
│   │   └── ui/             # shadcn primitives + brand Logo / Play badge
│   ├── data/               # Static copy (features, FAQs, jobs, press, team)
│   ├── lib/                # api stubs, cn() helper
│   ├── pages/              # Route-level screens
│   ├── test/               # Vitest setup + render helpers
│   ├── App.tsx
│   ├── index.css           # Tailwind + Olla theme tokens
│   └── main.tsx
├── components.json         # shadcn config
├── vercel.json             # SPA rewrites for Vercel
└── vite.config.ts          # Vite + Vitest + path alias `@/`
```

## Routing

Defined in `src/App.tsx`:

| Path | Page |
| --- | --- |
| `/` | Home (hero, feature carousel, newsletter) |
| `/about` | About / company & team |
| `/faqs` | FAQ accordion + search |
| `/press` | Featured press + archives |
| `/jobs` | Jobs board |
| `/contact` | Contact form + offices |
| `/download` | Google Play CTA |
| `/help` | Help (reuses contact form) |
| `/blog` | Blog placeholder |
| `/privacy`, `/terms` | Legal stubs |
| `*` | Redirect to `/` |

About-adjacent pages (`/about`, `/faqs`, `/press`, `/jobs`) share the left sidebar via `AboutShell` in `Layout.tsx`.

## UI stack

- **Tailwind CSS v4** — utility classes; theme in `src/index.css`
- **shadcn/ui** — `base-nova` style on Base UI; components under `src/components/ui/`
- Brand colors map onto semantic tokens (`--primary` = Olla teal, etc.) plus extras: `brand-green`, `brand-teal-deep`, `brand-purple`, `brand-link`
- Path alias `@/` → `src/` (Vite + TypeScript)

Add UI pieces with:

```bash
npx shadcn@latest add <component>
```

## Data & forms

- Marketing copy and lists live in `src/data/*.ts` (no CMS yet)
- Contact and newsletter call `src/lib/api.ts`
  - Without `VITE_API_BASE_URL`: no-op success (UI-only)
  - With the env var: `fetch` to `/contact` and `/newsletter`

Runtime images live under `src/assets/`.
