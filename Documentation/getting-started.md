# Getting started

## Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+ (ships with Node)

Confirm:

```bash
node -v
npm -v
```

## Install

From the project root (this repo):

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite starts a hot-reload server (default `http://localhost:5173`). Edit files under `src/` and the browser updates automatically.

## Production build

```bash
npm run build
npm run preview
```

- `build` runs TypeScript (`tsc -b`) then Vite, writing static assets to `dist/`
- `preview` serves that folder so you can smoke-test the production bundle

## Verify

```bash
npm test
npm run lint
npm run build
```

If all three succeed, the project is in good shape to commit or deploy.

This project is a **private** git repo. Adding a remote, pushing `staging` / `main`, and opening PRs is covered in [Contributing](contributing.md).

## Environment variables

Optional (forms stay UI-only until set):

| Variable | Used for |
| --- | --- |
| `VITE_API_BASE_URL` | Base URL for `POST /contact` and `POST /newsletter` |
| `VITE_SITE_URL` | Canonical site origin (default `https://olla.media`) |
| `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |

Create `.env` from the template (do not commit `.env`):

```
cp example.env .env
```

| Variable | Used for |
| --- | --- |
| `VITE_API_BASE_URL` | Base URL for `POST /contact` and `POST /newsletter` |
| `VITE_SITE_URL` | Canonical site origin (default `https://olla.media`) |
| `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |

`.env` and `.env.*` are gitignored. `example.env` is the committed template.

See [API Integration](api-integration.md) for request shapes and [SEO](seo.md) for indexing.

## Next steps

- [Architecture](architecture.md) — how the app is organized
- [Testing](testing.md) — running and extending tests
- [Deployment](deployment.md) — ship to Vercel
