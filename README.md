# Portfolio

Minimal dark portfolio. Next.js (static export) → GitHub Pages.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Edit content

All content lives in typed data files — no need to touch components:

- `src/data/about.ts` — name, role, tagline, bio, site URL
- `src/data/projects.ts` — project list (`featured: true` surfaces it on the home page)
- `src/data/links.ts` — footer/hero links

Photo lives at `public/me.png` (square). Replace that file to change it; if it's
ever missing, a monogram shows automatically.

## Deploy (GitHub Pages → edwarddjss.me)

The domain `edwarddjss.me` is already configured: `public/CNAME` holds it, DNS
points at GitHub Pages, and `SITE.url` is set. Pushing to `main` builds and
deploys via `.github/workflows/deploy.yml`.

1. Set the remote to the user-site repo and push to `main`:
   `git remote add origin git@github.com:edwarddjss/edwarddjss.github.io.git`
2. Repo → **Settings → Pages → Source: GitHub Actions** (it's currently on the
   legacy branch build — this switches it to the Actions workflow).
3. After the first deploy, enable **Enforce HTTPS** in Settings → Pages.

`output: 'export'` means no server features (API routes, SSR, on-the-fly image
optimization) — everything is pre-rendered static HTML.
