# Craytivo — Personal Portfolio (Next.js)

This repository contains the personal portfolio website for Craytivo Studio, a web development and design portfolio built with Next.js (App Router). It's intended to showcase services, portfolio pieces, pricing, notes, and a contact call-to-action.

## Contents
- `app/` — Next.js App Router pages and layout
- `components/` — Reusable React components (header, etc.)
- `public/` — Static assets (images, icons)
- `package.json` — Project scripts and dependencies

## Local development
Prerequisites: Node.js (18+ recommended) and npm installed.

Open PowerShell and run:

```powershell
cd 'c:\Users\user\Documents\craytivo-site'
npm install
npm run dev
# then open http://localhost:3000
```

The project uses the Tailwind CDN for rapid prototyping. For a production build, run:

```powershell
npm run build
npm start
```

## About this project
- Built with Next.js (App Router) for server-rendered and static pages.
- Header component is implemented at `components/Header.jsx` and is used site-wide via `app/layout.js`.
- Global styles live in `app/globals.css`; Tailwind is configured via the CDN in `app/head.js`.

## Deployment
- The repository is connected to `https://github.com/Craytivo/craytivo-site` (origin remote). To deploy, you can use Vercel (recommended for Next.js) or GitHub Pages/Netlify with an appropriate build step.

Vercel quick deploy:

1. Sign in to Vercel and import this GitHub repository.
2. Use the default build command `npm run build` and output directory (Next.js handles this automatically).

## Suggested improvements
- Replace Tailwind CDN with a local Tailwind install (recommended for production and smaller bundle sizes).
- Convert components to TypeScript for improved type safety.
- Replace anchor tags with `next/link` for client-side navigation where desired.
- Add image optimization (configure Next.js `images` if external hosting is used).

## Contributing
If you want me to make changes or add pages (Services, Portfolio, About, Notes), tell me which pages and content to add and I will scaffold them.

## License
This repository doesn't include a license file by default. Add one if you want to open-source the project.
