# Olla Website

Marketing site for **Olla** — the all-in-one messaging app for fast chats, HepaSnap, Moments, and anonymous conversations.

Built with React + Vite + Tailwind CSS v4 + shadcn/ui. Forms are UI-only until an API is connected.

## Project layout

```
.
├── README.md                 ← you are here
├── Documentation/            ← setup, architecture, deploy, testing, API
├── public/                   ← favicon and static files
├── src/
│   ├── assets/               ← images (hero, features, team, banners)
│   ├── components/           ← layout, home, about, press, contact, ui
│   ├── data/                 ← static copy (FAQs, jobs, press, team, …)
│   ├── lib/                  ← api stubs, cn()
│   ├── pages/                ← route screens
│   ├── test/                 ← Vitest setup + helpers
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components.json           ← shadcn config
├── index.html
├── package.json
├── vercel.json               ← SPA rewrites
└── vite.config.ts            ← Vite + Vitest + `@/` alias
```

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Re-run tests on file changes |
| `npm run lint` | Lint with oxlint |

## Documentation

| Guide | Description |
| --- | --- |
| [Getting Started](Documentation/getting-started.md) | Install, run, and verify the app |
| [Architecture](Documentation/architecture.md) | App structure, routing, UI stack |
| [Deployment](Documentation/deployment.md) | Vercel (primary) and DigitalOcean notes |
| [Testing](Documentation/testing.md) | How tests are organized and how to run them |
| [API Integration](Documentation/api-integration.md) | Wiring contact & newsletter forms later |
| [Contributing](Documentation/contributing.md) | Private repo, `staging` / `main`, push, PRs |

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** + **shadcn/ui** (`base-nova`, Base UI primitives)
- **React Router** for client-side pages
- **Vitest** + Testing Library for unit / component tests

## Hosting

Primary target is **Vercel**. Import this repo as-is (no special Root Directory). See [Deployment](Documentation/deployment.md).

## Forms

Stubs in `src/lib/api.ts`. Optional env:

```
VITE_API_BASE_URL=https://api.example.com
```

- `POST /contact` — `{ firstName, lastName, email, subject, message }`
- `POST /newsletter` — `{ email }`

Details: [API Integration](Documentation/api-integration.md).

## License / brand

© Olla Media Ltd. Site content is proprietary to Olla.
