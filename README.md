# Aaron Alonzo · Portfolio

Personal portfolio and resume site built with Next.js 15, React 19 and Tailwind CSS 4. Deployed on Vercel.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

Almost everything lives in **`lib/data.ts`**: profile, stats, projects, experience and skills.

| What | Where |
| --- | --- |
| Text, links, projects, experience, skills | `lib/data.ts` |
| LinkedIn / GitHub links | `linkedin` and `github` in `lib/data.ts` (they appear once filled in) |
| Project images (1800 x 1200, .webp or .jpg) | `public/projects/` |
| Headshot | `public/aaron-alonzo.jpg` |
| Resume PDF | `public/Aaron-Alonzo-Resume.pdf` |
| Colours and fonts | `app/globals.css` |

To add a project, copy one object in the `projects` array, give it a unique `slug`, and drop its image into `public/projects/`. A case study page is generated automatically at `/work/<slug>`.

## Deploy

Full step by step guide with checks: see **DEPLOY.md**.


Push to GitHub, then import the repo at https://vercel.com/new. Vercel detects Next.js automatically, no settings needed. Optionally set `NEXT_PUBLIC_SITE_URL` to your custom domain so the sitemap and share previews use it.
