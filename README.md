# Altafio

Website for Altafio, an independent creative technology business.

> Blue-sky ideas, made real.

Live site: [https://altafio.com](https://altafio.com)

## Technology

- Vinext + React 19 + TypeScript
- Tailwind CSS 4
- Static export → GitHub Pages (`dist/client/`)
- Local Three.js + Vanta Clouds2 sky animation
- Google Analytics (`G-RQY547RBTN`)

No database, auth, CMS, or contact form. Contact uses a button that opens the mail client (address is not printed in the HTML).

## Requirements

- Node.js 22.13+
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export to dist/client/
npm run start   # preview export with serve
npm run lint
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/projects` | Published products (Dictio) |
| `/projects/dictio` | Dictio details |
| `/about` | Company overview |
| `/contact` | Contact |

PencilMD and SmartBricks stay in the repo but are marked `archived` in `data/site.ts`, so they are hidden from the listing and return 404 until re-enabled.

## Editing content

- `data/site.ts` — services + project cards (`archived` flag)
- `app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`
- `app/projects/*/page.tsx` — project detail copy
- `app/layout.tsx` — metadata, fonts, analytics
- `components/site/` — header, footer, sky, project UI, contact button
- `app/globals.css` — visual tokens and layout

Use company language only (no founder / first-person singular) unless that direction changes.

## Assets

- `public/images/dictio-icon.png`
- `public/og.png`, `public/favicon.svg`
- `public/vendor/`, `public/gallery/noise.png`
- `public/CNAME` — `altafio.com`
- `public/.nojekyll` — required for `_next/` on GitHub Pages

## Deploy

| Remote | Repo | Role |
| --- | --- | --- |
| `origin` | [dhasut/altafio](https://github.com/dhasut/altafio) | **Public** live site (GitHub Pages) |
| `code` | [dhasut/altafio-code](https://github.com/dhasut/altafio-code) | **Private** source for Cloud Agents |

Push to `master` on **`origin`** to publish the site (GitHub Actions builds `dist/client/`).

Cloud Agent workflow:

1. Open / clone **`altafio-code`** (private)
2. Make changes and commit there
3. Publish live by pushing the same commits to the public repo, e.g. from this machine:
   ```bash
   git fetch code
   git push origin code/master:master
   ```
   Or add the public repo as a second remote inside the Cloud Agent workspace and push to it when ready.

- Custom domain: `altafio.com`
- `next.config.ts`: `output: 'export'`, `trailingSlash: false`, `images.unoptimized: true`

## Agent notes

Local Cursor handover notes live in `AGENTS.md` (gitignored). Keep that file current when durable project facts change.
