# COPILOT.md

This file provides guidance to GitHub Copilot CLI when working with code in this repository.

## Project Overview

Next.js 15 + TypeScript portfolio site with Tailwind CSS (v4), shadcn-style UI components, Jest + React Testing Library, and static export to S3/CloudFront via GitHub Actions.

## Common Commands

### Installation
```bash
# Install dependencies
npm install

# Clean install (as used in CI)
npm ci
```

### Development
```bash
# Start development server
npm run dev

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Testing
```bash
# Run all tests
npm test

# Watch mode for TDD
npm run test:watch

# Generate coverage report
npm run test:coverage

# CI-friendly test run
npm run test:ci

# Run specific test file
npm test -- components/footer/footer.test.tsx

# Run tests matching pattern
npm test -- -t "Footer Component"
```

### Building
```bash
# Build static export (output: out/)
npm run build

# Serve static build locally
npx serve out
```

## Project Architecture

### Directory Structure
- **app/** - Next.js App Router
  - `layout.tsx` - Global layout with fonts, Tailwind, Navbar, Footer, Toaster
  - `(home)/` - Homepage route group with sections: hero, about-me, my-work, contact
  - `about/`, `contact/`, `work/` - Additional pages
- **components/** - React components
  - `ui/*` - shadcn-style primitives (Button, Card, Input, etc.)
  - `navbar/*`, `footer/*` - Layout components
  - `providers/toast-provider.tsx` - Toast notifications
- **hooks/** - Custom React hooks
  - `useResumeDownload.ts` - Resume download with API integration
  - `use-mobile.tsx` - Viewport breakpoint detection
- **lib/** - Utilities and API client
  - `api/` - API client layer (config, resume, sendEmail)
  - `constants/` - Shared constants (SOCIAL_LINKS, etc.)
  - `utils.ts` - Utility functions (cn helper)
- **types/** - TypeScript type definitions
- **public/** - Static assets (images, resume.pdf)

### Key Technologies
- **Framework**: Next.js 15 (App Router, static export)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4, class-variance-authority
- **UI**: shadcn-style components
- **Testing**: Jest 30 + React Testing Library
- **Fonts**: Geist (via next/font)

### Configuration Files
- `next.config.ts` - Static export (`output: 'export'`), trailing slashes, unoptimized images
- `tsconfig.json` - Path alias `@/*` → root, moduleResolution: bundler
- `eslint.config.ts` - Flat config with Next.js, TypeScript, Prettier rules
- `jest.config.ts` - Jest with next/jest, jsdom, 70% coverage thresholds
- `postcss.config.mjs` - Tailwind CSS v4 via @tailwindcss/postcss

## Environment Variables

Create `.env.local` with:
```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api.example.com
```

This variable is used by the API client layer (`lib/api/*`) to communicate with the backend.

## CI/CD Pipeline

### GitHub Actions Workflows
1. **ci.yml** - Runs on PRs and pushes
   - Checkout → npm ci → lint → type-check → test → build
2. **cd.yml** - Deploys to production (main branch)
   - Triggers after CI passes → build → sync to S3 → CloudFront invalidation
3. **deploy-cv-to-s3.yml** - Updates resume
   - Triggers on changes to `public/resume.pdf` → uploads to S3

### Repository Variables/Secrets
- `S3_SITE` - S3 bucket for site deployment
- `S3_ASSETS` - S3 bucket for static assets (resume)
- `NEXT_PUBLIC_API_BASE_URL` - API endpoint for production

## Development Guidelines

### Import Paths
- Use the `@/*` alias for absolute imports (e.g., `@/components/ui/button`)
- Alias maps to the repository root

### Static Export Constraints
- Site uses `output: 'export'` (static site generation)
- No server-only APIs (getServerSideProps, API routes, etc.)
- All pages must be compatible with static export
- Dynamic routes require `generateStaticParams`

### Component Patterns
- UI components use class-variance-authority for variants
- Use `cn()` utility from `@/lib/utils` for className merging
- Toast notifications via `successToast()`/`errorToast()` from toast provider

### API Integration
- Client-side API calls only (static export)
- API layer in `lib/api/*` handles backend communication
- Resume downloads use signed S3 URLs from backend
- Contact form submissions via email API endpoint

### Testing Strategy
- Components in `components/` should have `.test.tsx` files
- Use React Testing Library for component tests
- Mock Next.js navigation and browser APIs (setup in `jest.setup.ts`)
- Aim for 70%+ coverage (enforced by Jest config)

## Common Tasks

### Adding a New Page
1. Create directory in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` with default export
3. Ensure compatibility with static export
4. Add tests if appropriate

### Adding a UI Component
1. Create in `components/ui/` or appropriate subdirectory
2. Use TypeScript with proper prop types
3. Apply Tailwind classes with `cn()` utility
4. Add unit tests with RTL

### Updating Styles
- Modify Tailwind classes directly in components
- Global styles in `app/globals.css`
- Use CSS variables for theme colors

### API Changes
- Update `lib/api/config.ts` for new endpoints
- Create service functions in `lib/api/`
- Update types in `types/` if needed

## Troubleshooting

### Build Fails
```bash
# Clear build cache
rm -rf .next out

# Clean install and rebuild
npm ci && npm run build
```

### Test Failures
```bash
# Run with verbose output
npm test -- --verbose

# Update snapshots if needed
npm test -- -u
```

### Type Errors
```bash
# Check types explicitly
npm run type-check

# Clear TypeScript cache
rm -rf tsconfig.tsbuildinfo
```

## Best Practices

1. **Code Quality**: Run lint and type-check before committing
2. **Testing**: Write tests for new components and utilities
3. **Commits**: Use conventional commit messages
4. **Static Export**: Verify new features work with static export
5. **Performance**: Use Next.js Image component where possible (with unoptimized flag)
6. **Accessibility**: Follow WCAG guidelines for UI components
7. **Mobile First**: Ensure responsive design using Tailwind breakpoints

## Notes for AI Agents

- This is a **static site** - no server-side rendering or API routes
- All API calls must be client-side only
- Path alias `@/*` should be used for all internal imports
- Coverage thresholds are enforced - maintain 70%+ test coverage
- The site deploys automatically to S3/CloudFront on main branch
- Backend API is separate - frontend only handles client-side logic
