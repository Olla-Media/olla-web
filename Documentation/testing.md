# Testing

## Tooling

| Tool | Role |
| --- | --- |
| **Vitest** | Test runner (Vite-native) |
| **jsdom** | Browser-like environment |
| **Testing Library** | Component queries & user events |
| **@testing-library/jest-dom** | DOM matchers (`toBeInTheDocument`, …) |

Config lives in `vite.config.ts` under `test`. Setup (matchers, `matchMedia`, observers, cleanup) is in `src/test/setup.ts`. Shared render helpers: `src/test/test-utils.tsx`.

## Commands

```bash
npm test              # single run (CI-friendly)
npm run test:watch    # watch mode while developing
```

## What’s covered

| Area | File(s) | Checks |
| --- | --- | --- |
| Utils | `src/lib/utils.test.ts` | `cn()` merge / conflict resolution |
| API stubs | `src/lib/api.test.ts` | No-op without base URL; `fetch` + errors with base URL |
| Site data | `src/data/site.test.ts` | Nav, features, FAQs, jobs, team shape |
| Footer | `src/components/layout/Footer.test.tsx` | Links + **dynamic copyright year** |
| Navbar | `src/components/layout/Navbar.test.tsx` | Primary links + mobile menu trigger |
| Newsletter | `src/components/home/Newsletter.test.tsx` | Subscribe success path |
| Contact form | `src/components/contact/ContactForm.test.tsx` | Fields + subject validation |
| FAQs | `src/pages/FaqsPage.test.tsx` | List, search filter, empty state |
| Pages / routing | `src/App.test.tsx` | Home, About, Jobs, Press, Contact + unknown → `/` |

## Writing a new test

1. Colocate as `Something.test.tsx` next to the module (or under `src/pages/`).
2. Prefer `renderWithRouter` / `renderPage` from `@/test/test-utils`.
3. Query by role / label (accessible names), not CSS classes.
4. Mock `@/lib/api` when testing UI success/error without real network.

Example:

```tsx
import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { DownloadPage } from '@/pages/DownloadPage'
import { renderPage } from '@/test/test-utils'

describe('DownloadPage', () => {
  it('shows the Play badge', () => {
    renderPage(<DownloadPage />, { route: '/download' })
    expect(
      screen.getByRole('link', { name: /Get it on Google Play/i }),
    ).toBeInTheDocument()
  })
})
```

## CI suggestion

Run on every PR:

```bash
npm ci && npm test && npm run build
```

## Current status

As of the last local run: **29 tests passing**, production build succeeds.
