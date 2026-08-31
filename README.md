# Altafio

Website for Altafio, an independent creative technology business working across design, digital products and transformation.

> Blue-sky ideas, made real.

The site is intentionally concise and uses a moving blue-sky background adapted from the earlier Sky Media Lab website. Its current visual identity is provisional while the wider Altafio brand is being developed.

## Current content

- Services led by Creative Technology
- Design and technology consultancy
- UX/UI design
- Service design
- Digital transformation
- Product pages for Dictio, PencilMD and SmartBricks
- Company-focused About and Contact pages

The website uses company language throughout. It should not refer to a founder or use first-person personal language unless that direction changes later.

## Technology

- Vinext and React 19
- TypeScript
- Tailwind CSS 4
- OpenAI Sites project structure and hosting configuration
- Locally hosted Three.js and Vanta Clouds2 assets for the animated sky

No database, authentication, CMS, analytics or form backend is currently used.

## Requirements

- Node.js 22.13 or newer
- npm

## Local development

Install dependencies:

```bash
npm install
```

Start the development site:

```bash
npm run dev
```

The default local address is [http://localhost:3000](http://localhost:3000).

## Validation and production build

```bash
npm run build
```

Optional checks:

```bash
npm run lint
npm run format
```

After a successful build, the local production worker can be started with:

```bash
npm run start
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home and primary Altafio message |
| `/services` | Services overview |
| `/projects` | Product and project listing |
| `/projects/dictio` | Dictio details |
| `/projects/pencilmd` | PencilMD details |
| `/projects/smartbricks` | SmartBricks details; name remains provisional |
| `/about` | Company overview, capabilities and working approach |
| `/contact` | Contact email |

## Editing content

- `app/page.tsx` — home-page copy
- `app/about/page.tsx` — company overview
- `app/services/page.tsx` — services presentation
- `data/site.ts` — service and project summaries
- `app/projects/*/page.tsx` — individual project details
- `app/contact/page.tsx` — contact content
- `app/layout.tsx` — page metadata and social-sharing metadata
- `components/site/` — header, footer, sky and project components
- `app/globals.css` — visual tokens and responsive styling

## Assets

- `public/images/dictio-icon.png` — Dictio app icon
- `public/og.png` — default social-sharing image
- `public/favicon.svg` — temporary Altafio favicon
- `public/vendor/` and `public/gallery/noise.png` — local animated-sky dependencies

The wordmark, favicon, project icons and social card are placeholders that can be replaced when the final brand system is ready.

## Hosting

The site is built as a static export for GitHub Pages.

```bash
npm run build
```

Static files are written to `dist/client/`. GitHub Actions deploys that folder on push to `master`.

Custom domain: `altafio.com` (via `public/CNAME`).

For local preview of the static export:

```bash
npx serve dist/client
```

## Project handover

See `AGENTS.md` for implementation context and instructions intended for future AI agents.
