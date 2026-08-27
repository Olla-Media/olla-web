# API integration

Forms on the site are **UI-complete** today. Wiring a real backend is optional and controlled by one environment variable.

## Toggle

Set in `.env` (local) or Vercel project settings (deployed). Start from `example.env`.

```
VITE_API_BASE_URL=https://api.example.com
```

Implementation: `src/lib/api.ts`.

| `VITE_API_BASE_URL` | Behavior |
| --- | --- |
| unset | Contact / newsletter resolve successfully with no network call |
| set | `POST` JSON to `${VITE_API_BASE_URL}/contact` and `.../newsletter` |

Vite inlines `VITE_*` variables at **build** time — change the var and redeploy (or restart `npm run dev`).

## Endpoints

### `POST /contact`

**Body**

```json
{
  "firstName": "Ada",
  "lastName": "Lovelace",
  "email": "ada@example.com",
  "subject": "Support",
  "message": "I need help with…"
}
```

**Expected subjects** (from the form select): `Support`, `Press`, `Partnerships`, `Jobs`, `Other`.

**Success:** HTTP `2xx`.  
**Failure:** non-OK status → UI shows an error; client throws `Unable to send your message right now.`

### `POST /newsletter`

**Body**

```json
{
  "email": "friend@example.com"
}
```

**Success:** HTTP `2xx`.  
**Failure:** non-OK → `Unable to subscribe right now.`

## CORS

If the API is on another origin, allow the marketing site origin (`https://your-domain.com` and Vercel preview URLs as needed) for `POST` with `Content-Type: application/json`.

## Suggested next steps

1. Implement the two routes on your API (or a serverless function).
2. Add spam protection (honeypot, Turnstile / reCAPTCHA, or rate limits).
3. Set `VITE_API_BASE_URL` in Vercel for Production / Preview.
4. Keep unit tests in `src/lib/api.test.ts` green; add contract tests against a staging API if useful.
