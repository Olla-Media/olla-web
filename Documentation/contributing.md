# Contributing

This is a **private** repository. Do not fork it publicly, copy source into a public gist, or share clone URLs outside the team. Access is invite-only.

## Branches

| Branch | Role |
| --- | --- |
| `main` | Production-ready history |
| `staging` | Integration branch for review and preview deploys |

Day-to-day work happens on `staging` (or a short-lived feature branch merged into `staging`). Promote to `main` when a release is ready.

The local repo was initialized without a remote. Add one when the private host exists:

```bash
git remote add origin git@github.com:<org-or-user>/<private-repo>.git
# HTTPS alternative:
# git remote add origin https://github.com/<org-or-user>/<private-repo>.git
```

Confirm:

```bash
git remote -v
```

## First push

After the empty private repo exists on GitHub (or GitLab / Bitbucket):

```bash
git push -u origin main
git push -u origin staging
```

`-u` sets upstream so later `git push` / `git pull` work without extra arguments.

If the host created a README on the empty repo, pull with rebase first:

```bash
git pull origin main --rebase
git push -u origin main
git push -u origin staging
```

## Daily workflow

1. Start from `staging` and keep it current:

   ```bash
   git checkout staging
   git pull
   ```

2. For larger changes, branch from `staging`:

   ```bash
   git checkout -b feat/short-name
   ```

3. Update `Documentation/` when behavior or setup changes.

4. Before you push:

   ```bash
   npm test
   npm run lint
   npm run build
   ```

5. Commit, then push the branch you are on:

   ```bash
   git add -A
   git commit -m "Describe why this change exists."
   git push -u origin HEAD
   ```

6. Open a pull request **into `staging`** (private repo — only collaborators can see it). Merge to `main` from `staging` when you ship.

Prefer small PRs. Match existing layout and brand tokens rather than inventing new visual systems. Do not force-push `main` or `staging`.

## Access

- Invite collaborators on the private repo; they clone with SSH or HTTPS after accepting.
- Vercel (or any CI) needs permission to the **private** GitHub org/user so it can import the repo. See [Deployment](deployment.md).
- Never commit `.env`, API keys, or tokens. Copy `example.env` to `.env` locally. `.env` and `.env.*` are gitignored; only `example.env` is tracked.

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
