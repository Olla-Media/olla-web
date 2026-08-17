# Deployment

## Vercel (recommended)

The app is a static Vite SPA. Vercel handles builds, CDN, HTTPS, and preview URLs for pull requests.

### Setup

1. Push **this** repository to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com/new), **Import** the repo.
3. Configure the project:
   - **Root Directory:** leave default (`.`) — this repo *is* the app
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy. Production branch is typically `main`.

`vercel.json` already rewrites all paths to `index.html` so client-side routes (`/about`, `/faqs`, …) work on refresh.

### Environment variables

In the Vercel project → **Settings → Environment Variables**:

| Name | Example | When |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `https://api.olla.media` | After the backend exists |

Redeploy after changing env vars so Vite can inline them at build time.

### Custom domain

Add the domain in the Vercel project, then point DNS as Vercel instructs (usually a CNAME to `cname.vercel-dns.com`).

## DigitalOcean Droplet (optional)

Use a Droplet when you want full VPS control (Nginx + HTTPS) instead of a managed static host.

High-level steps:

1. Create an Ubuntu Droplet and SSH in.
2. Install Node.js 20+, Nginx, and Certbot.
3. On the server (or in CI):

   ```bash
   git clone <repo>
   cd <repo>
   npm ci
   npm run build
   ```

4. Point Nginx `root` at the `dist` folder and enable SPA fallback:

   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

5. Issue a certificate with Certbot (`certbot --nginx`).

6. Redeploy by pulling, rebuilding, and reloading Nginx (or sync `dist/` from CI).

Vercel remains the simpler default for this marketing site; the Droplet path is documented for teams that already operate on DigitalOcean.

## Pre-deploy checklist

```bash
npm test
npm run build
```

Confirm preview locally with `npm run preview` before promoting to production.
