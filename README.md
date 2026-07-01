# Mika — Portfolio

Personal portfolio site for **Micaela Ganas**, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview production build
```

## Project structure

```
Portfolio/
├── public/                  # Static assets served as-is
│   ├── images/              # Project screenshots & profile photo
│   ├── resume.pdf             # Downloadable CV (served at /resume.pdf)
│   └── favicon.svg
├── documents/               # Source documents (CV originals, etc.)
├── src/
│   ├── components/
│   │   ├── effects/         # Global overlays (grain, tech readouts)
│   │   ├── graphics/        # Animated SVG artwork
│   │   ├── layout/          # Header, footer, scroll progress, banners
│   │   ├── sections/        # Page sections (hero, about, projects, contact)
│   │   └── ui/              # Reusable UI (cards, section headers)
│   ├── data/                # Portfolio content & configuration
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript interfaces
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html               # Vite entry point
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Editing content

All portfolio text, links, and project data live in **`src/data/portfolio.ts`**.  
Card color/graphic pairings for projects are in **`src/data/projectVariants.ts`**.

To add a new project image, place it in `public/images/` and reference it as `/images/your-file.png`.

## Tech stack

- [Vite](https://vitejs.dev/) — build tool
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animations

## Deployment

Build the site with `npm run build`, then deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

For GitHub Pages, set the base path in `vite.config.ts` if deploying to a project subdirectory:

```ts
export default defineConfig({
  base: '/Portfolio/',
  // ...
})
```
