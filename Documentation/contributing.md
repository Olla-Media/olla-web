# Contributing

## Workflow

1. Branch from `main` with a short, descriptive name (`fix/footer-year`, `feat/blog-index`).
2. Update `Documentation/` when behavior or setup changes.
3. Before opening a PR:

   ```bash
   npm test
   npm run lint
   npm run build
   ```

4. Prefer small PRs. Match existing layout and brand tokens rather than inventing new visual systems.

## Code conventions

- **TypeScript** — keep props and data typed; prefer types next to usage in `src/data/`.
- **Imports** — use `@/` for anything under `src/`.
- **Styling** — Tailwind utilities + shadcn components. Prefer semantic tokens (`bg-primary`, `text-muted-foreground`) over one-off hex when a token exists. Brand-only accents: `brand-green`, `brand-teal-deep`, `brand-link`, etc.
- **Spacing** — prefer `flex` + `gap-*` over `space-y-*` / `space-x-*` (shadcn project rule).
- **Forms** — use `Field` / `FieldGroup` / `FieldLabel` from shadcn, not ad-hoc label markup.
- **Scope** — don’t expand into unrelated refactors or drive-by file churn.

## Design fidelity

Match the established Olla layout and brand (teal → purple nav, lime headings, sidebar about pages). Desktop and mobile both matter; check hamburger nav and stacked layouts around ~390px width.

## Docs

- Project overview: [`../README.md`](../README.md)
- Deep dives: this `Documentation/` folder

Update docs in the same PR when you change scripts, routes, env vars, or deploy steps.
