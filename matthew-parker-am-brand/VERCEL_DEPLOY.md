# Vercel Deployment

This project is ready to deploy on Vercel as a standard Next.js app.

## Deploy From Git

1. Push `outputs/matthew-parker-am-brand` to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Vercel should detect Next.js automatically.
5. Use the defaults:

```text
Install Command: npm install
Build Command: npm run build
Output Directory: .next
Development Command: npm run dev
```

## Deploy With Vercel CLI

```bash
cd /Users/jonahparker/Documents/Codex/2026-06-09/you-are-an-award-winning-web-2/outputs/matthew-parker-am-brand
npm install
npm run build
npx vercel
```

## Before Launch

- Replace `https://www.example.com` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` with the production domain.
- Use only approved public images in `public/media`.
- Decide whether the contact form should stay as `mailto:` or use a server-side email/CRM integration.
