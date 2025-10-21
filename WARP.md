# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project: Next.js 15 + TypeScript portfolio site with Tailwind CSS (v4), shadcn-style UI components, Jest + React Testing Library, and static export to S3/CloudFront via GitHub Actions.

Commands

- Install dependencies

```bash path=null start=null
npm install
# or for clean installs (as used in CI)
npm ci
```

- Run the dev server

```bash path=null start=null
npm run dev
```

- Lint and type-check

```bash path=null start=null
npm run lint
npm run type-check
```

- Run tests

```bash path=null start=null
# Full test run
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage

# CI-friendly
npm run test:ci

# Run a single test file
npm test -- components/footer/footer.test.tsx

# Run tests matching a name pattern
npm test -- -t "Footer Component"
```

- Build (static export)

```bash path=null start=null
npm run build
# Output directory: out/
```

- Serve the static export (example)

```bash path=null start=null
# Any static server works; for example:
npx serve out
```

Environment

- Set NEXT_PUBLIC_API_BASE_URL to point the frontend to your API gateway (used by lib/api/*).
- Create a .env.local with at least:

```bash path=null start=null
NEXT_PUBLIC_API_BASE_URL=https://your-api.example.com
```

Architecture and structure

- App Router
  - app/layout.tsx wires global fonts, Tailwind styles, and global shell: Navbar, page content, Footer, and a Sonner ToastProvider.
  - Route group app/(home) renders the homepage via sections: hero, about-me, my-work, contact.
  - Additional pages: app/about, app/contact, app/work.
- UI and components
  - components/ui/*: shadcn-style primitives (Button, Card, Input, etc.) using class-variance-authority and a cn utility.
  - Shared layout pieces in components/navbar/* and components/footer/* (footer has RTL tests).
  - components/providers/toast-provider.tsx exposes Toaster plus successToast/errorToast helpers.
- Hooks
  - hooks/useResumeDownload.ts integrates with the API to fetch a signed S3 URL and opens it in a new tab.
  - hooks/use-mobile.tsx detects viewport breakpoint changes via matchMedia.
- Client API layer
  - lib/api/config.ts reads NEXT_PUBLIC_API_BASE_URL and defines endpoints for resume and email.
  - lib/api/resume.ts and lib/api/sendEmail.ts perform fetches to those endpoints.
- Constants and types
  - lib/constants/common.ts provides SOCIAL_LINKS.
  - types/ contains ambient typings (e.g., images.d.ts, jest.d.ts) and exports from index.ts.
- Styling
  - Tailwind CSS v4 via postcss.config.mjs with @tailwindcss/postcss; global styles in app/globals.css.
  - Fonts are loaded using next/font (Geist) and applied via CSS variables.
- Config
  - next.config.ts: output: 'export' (static site), trailingSlash enabled, images.unoptimized.
  - tsconfig.json: path alias '@/*' -> project root; moduleResolution: bundler.
  - eslint.config.ts: flat config extending next/core-web-vitals, next/typescript, prettier; ignores build/test artifacts.
- Testing
  - Jest 30 with next/jest, jsdom env, RTL setup in jest.setup.ts (mocks next/router, next/navigation, IntersectionObserver, ResizeObserver, matchMedia).
  - Coverage collection targets app/, components/, lib/ with 70% global thresholds.

CI/CD (GitHub Actions)

- .github/workflows/ci.yml: checkout → npm ci → lint → type-check → test → build.
- .github/workflows/cd.yml: on CI completion for main → npm ci → build (uses NEXT_PUBLIC_API_BASE_URL) → sync out/ to S3 (vars.S3_SITE) → CloudFront invalidation.
- .github/workflows/deploy-cv-to-s3.yml: on changes to public/resume.pdf → upload to S3 (vars.S3_ASSETS).

Notes for agents

- Because next.config.ts uses output: 'export', the site builds to a static out/ directory; ensure new pages and features remain compatible with static export (no server-only APIs in pages/components).
- The client APIs expect a working backend exposed at NEXT_PUBLIC_API_BASE_URL; for local development, point this to a dev/staging API or mock endpoints.
- Import alias '@/*' maps to the repo root; prefer it for absolute imports (e.g., '@/components/ui/button').
