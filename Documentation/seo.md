# SEO and Google indexing

This site is a SPA. Google can render JavaScript, but crawlers still need a clean URL list, unique titles, and crawlable static files.

## What is in place

| Piece | Where | Purpose |
| --- | --- | --- |
| Unique title + description | `src/data/seo.ts` + `src/components/seo/Seo.tsx` | One snippet per route |
| Canonical, Open Graph, Twitter | `Seo` + `index.html` fallback | Avoid duplicate URLs; social previews |
| JSON-LD (`Organization`, `WebSite`, `WebPage`, `SoftwareApplication`) | `Seo` | Richer understanding in Search |
| `robots.txt` | `public/robots.txt` | Allow all crawlers; points at the sitemap |
| `sitemap.xml` | `public/sitemap.xml` | Lists indexable routes |
| `og.png` (1200×630) | `public/og.png` | Share / Search preview image |
| `index, follow` | meta robots | Ask Google to index and follow links |
| Vercel rewrite skip | `vercel.json` | Do **not** send `/robots.txt` or `/sitemap.xml` to `index.html` |

Unknown paths fall back to the home copy with `noindex` until they redirect.

## Environment

| Variable | Used for |
| --- | --- |
| `VITE_SITE_URL` | Canonical and Open Graph origin (default `https://olla.media`) |
| `VITE_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag verification |

Example `.env` (copy from `example.env`) / Vercel env:

```
VITE_SITE_URL=https://olla.media
VITE_GOOGLE_SITE_VERIFICATION=paste-token-from-search-console
```

If the live domain is not `olla.media`, set `VITE_SITE_URL` **and** update the host in `public/robots.txt` and `public/sitemap.xml` before the first production deploy.

## After go-live

1. Confirm `https://your-domain/robots.txt` and `https://your-domain/sitemap.xml` return the files (not the React app).
2. In [Google Search Console](https://search.google.com/search-console), add the domain (or URL prefix) property.
3. Paste the verification token into `VITE_GOOGLE_SITE_VERIFICATION` and redeploy, **or** verify with DNS.
4. Submit `https://your-domain/sitemap.xml`.
5. Use URL Inspection on `/`, `/download`, and `/about` to request indexing.

Search Console must be able to fetch the **public** production URL. A private GitHub repo does not hide the live website.
