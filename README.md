# marcandmarius

A multi-page Next.js site for showcasing marcandmarius bike adventures, curated resources, and community stories. Built with the App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   The site runs on [http://localhost:3000](http://localhost:3000) by default.

3. Create a production build:

   ```bash
   npm run build
   npm start
   ```

   Preview the production build locally with `npm start` after running `npm run build`.

## Project structure

```
.
├── app/
│   ├── community/
│   │   └── page.tsx
│   ├── live/
│   │   └── page.tsx
│   ├── resources/
│   │   └── page.tsx
│   ├── tours/
│   │   ├── [tourId]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── CustomIcons.tsx
│   ├── Footer.tsx
│   ├── NavBar.tsx
│   ├── ResourceCard.tsx
│   ├── TourCard.tsx
│   └── animations.ts
├── lib/
│   └── content.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.cjs
├── public/
│   └── README.md
├── tailwind.config.cjs
├── tsconfig.json
└── README.md
```

## Creating the GitHub repository

1. In GitHub, create a new repository (private or public) without any starter files.
2. In this project directory, initialize git and connect it to the new remote:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. Deploy with Vercel, Netlify, or another Next.js-compatible host. For static exports, add a proper data source or image assets before exporting.

## Next steps

- Replace placeholder imagery, video embeds, and downloads under `public/`.
- Configure real newsletter, analytics, and social embeds once credentials are available.
- Add integration tests or CMS connectivity as the content grows.
