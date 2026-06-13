# Matthew Parker Personal Brand Website

Production-ready Next.js, TypeScript, and TailwindCSS source for Matthew Parker's personal professional brand website.

This is a personal executive brand site for Matthew Parker, not an official Hadrian company website.

## Design Plan

1. Intended visual direction: serious, technical, modern, premium, industrial, executive, and controlled.
2. Why it fits: Matthew's positioning is technical, strategic, practical, so the site uses precise hierarchy, dark industrial panels, restrained metallic accents, and direct copy instead of startup hype.
3. Layout strategy: answer who Matthew is immediately, then move through credibility, expertise, qualification depth, speaking topics, resources, advisory positioning, and contact.
4. Color strategy: dark navy, black, charcoal, white, silver, muted blue, industrial gray, and subtle metallic accents.
5. Typography strategy: strong modern sans-serif headings with compact tracking and readable body copy.
6. Photo placement strategy: no AI-generated images and no fake AM imagery. Missing assets use clearly labeled placeholders.
7. Conversion strategy: primary routes are Contact Matthew, Explore Expertise, Invite Matthew to Speak, Start a Conversation, email, LinkedIn, form, and Calendly placeholder.
8. Compliance strategy: content avoids confidential, proprietary, ITAR-controlled, CUI, export-controlled, customer-sensitive, company-sensitive, and process-parameter information.

## Site Map

- `/` Home
- `/about` About
- `/expertise` Expertise
- `/qualification-production-readiness` Qualification & Production Readiness
- `/speaking-thought-leadership` Speaking & Thought Leadership
- `/resources-insights` Resources / Insights
- `/advisory-consulting` Advisory / Consulting
- `/contact` Contact
- `/sitemap.xml`
- `/robots.txt`

## Component List

- `Header`: sticky navigation, mobile menu, LinkedIn, contact CTA, mobile CTA bar.
- `Footer`: personal-brand disclaimer, contact paths, compliance note.
- `PageHero`: reusable executive hero component.
- `SectionHeader`: consistent section hierarchy.
- `ButtonLink`: protocol-safe CTA button.
- `MediaPlaceholder`: approved-media placeholders only.
- `CredibilityBand`: current role, company context, location, brand identity.
- `ExpertiseCard`: explanation, why it matters, and practical outcome.
- `ResourceCard`: placeholder articles, technical notes, white papers, presentations, videos, insights.
- `ContactForm`: structured inquiry form that opens a prefilled email to `matthew@printaero.com`.
- `CalendlyPlaceholder`: scheduling placeholder.
- `Card`: reusable industrial panel.
- `StructuredData`: JSON-LD helper.

## Content Strategy

The site answers:

1. Who is Matthew Parker?
2. Why is he credible in additive manufacturing?
3. What makes his AM experience different?
4. What does he know about qualification and production readiness?
5. What organizations would benefit from speaking with him?
6. How can someone contact him?
7. What topics can he advise, speak, or write about?
8. How does he connect technical AM decisions to business outcomes?

The content avoids generic AM hype and focuses on production credibility: machines, materials, process control, quality systems, qualification evidence, customer requirements, autonomous factory integration, operational scaling, and executive decisions.

## Audit Score Plan

- Mobile Friendliness: responsive grids, sticky nav, mobile CTA bar, accessible content order.
- Page Speed: no heavy media, no animation libraries, no external visual dependencies.
- Design Quality: premium dark industrial visual system with strong technical hierarchy.
- CTA Strength: clear contact, advisory, speaking, LinkedIn, and email pathways.
- Photography & Visuals: approved-media placeholders only; no fake assets.
- Trust Indicators: current role, prior leadership, standards familiarity, production-readiness expertise.
- Service / Expertise Pages: full expertise, qualification, advisory, speaking, and resource pages.
- SEO: natural target-keyword usage, metadata per page, sitemap, robots, schema.
- Contact Experience: form opens a prefilled email to `matthew@printaero.com`, plus email link, LinkedIn, inquiry type dropdown, Calendly placeholder, and no public phone.
- Review / Credibility Integration: interpreted as credibility indicators for a personal expert site.

## Folder Structure

```text
outputs/matthew-parker-am-brand/
  app/
    about/page.tsx
    advisory-consulting/page.tsx
    api/contact/route.ts
    contact/page.tsx
    expertise/page.tsx
    qualification-production-readiness/page.tsx
    resources-insights/page.tsx
    speaking-thought-leadership/page.tsx
    globals.css
    layout.tsx
    not-found.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
  lib/data.ts
  public/media/
  package.json
  tailwind.config.ts
  tsconfig.json
```

## Full Source Code

The full source is in this folder. Core files:

- `app/page.tsx`
- `app/layout.tsx`
- `app/qualification-production-readiness/page.tsx`
- `app/contact/page.tsx`
- `components/*.tsx`
- `lib/data.ts`
- `app/globals.css`

## Setup Instructions

Install dependencies:

```bash
cd outputs/matthew-parker-am-brand
npm install
```

Run local development:

```bash
npm run dev
```

Build production:

```bash
npm run build
npm run start
```

Quality checks:

```bash
npm run typecheck
npm run lint
```

This Codex environment has Node.js but no `npm`, `pnpm`, `yarn`, or `bun` binary on PATH, so dependency installation and Next.js build verification must be run in a normal Node package-manager environment.

## Image and Media Placement Instructions

Use only approved images and media. Place approved assets in `public/media/`.

Recommended assets:

- Professional headshot or executive portrait.
- Approved facility-neutral photo.
- Approved AM equipment image.
- Approved speaking engagement photo.
- Approved conference or presentation media.
- Approved interview or video thumbnail.
- Approved public white paper or presentation cover.

Do not use:

- AI-generated images.
- Fake AM imagery.
- Unapproved Hadrian images, logos, facility photos, project photos, or brand assets.
- Customer logos, program imagery, restricted equipment views, or controlled technical data.
- Confidential slides, qualification documents, process parameters, or internal strategy visuals.

After assets are approved:

1. Add optimized images to `public/media/`.
2. Replace `MediaPlaceholder` components with `next/image`.
3. Use descriptive, compliance-safe alt text.
4. Keep image sizes lean for performance.

## Missing Asset Recommendations

- Approved professional headshot.
- Approved executive/facility-neutral portrait.
- Approved AM equipment image.
- Approved speaking engagement photo.
- Approved presentation or conference media.
- Approved conference video or interview thumbnail.
- Approved downloadable resources or white papers.
- Approved Calendly or scheduling link.
- Final production domain.
- Optional backend email/CRM integration if Matthew wants server-side sending later.

## SEO Metadata

Pages include metadata targeting:

- additive manufacturing qualification expert
- metal additive manufacturing consultant
- aerospace additive manufacturing qualification
- defense additive manufacturing production
- AM production readiness
- metal AM executive
- additive manufacturing quality systems
- AMS7031 powder reuse
- AMS7032 machine qualification
- AWS D20.1 additive manufacturing
- AS9100 additive manufacturing
- NADCAP additive manufacturing
- additive manufacturing factory scaling
- metal AM production strategy

Metadata is implemented in each page file and global defaults are defined in `app/layout.tsx`.

## Final Self-Audit

Estimated score: 93/100.

| Category | Score | Justification |
|---|---:|---|
| Mobile Friendliness | 10 | Responsive grids, mobile CTA bar, accessible navigation, mobile-first layout. |
| Page Speed | 10 | No real media payloads yet, no animation libraries, lightweight component structure. |
| Design Quality | 10 | Serious dark industrial visual system, premium hierarchy, restrained motion/style. |
| CTA Strength | 9 | Clear contact, advisory, speaking, LinkedIn, email, and form paths; scheduling link pending. |
| Photography & Visuals | 8 | Correctly avoids unapproved media and labels placeholders; real approved assets needed. |
| Trust Indicators | 10 | Current role, prior leadership, standards familiarity, production-readiness expertise, and technical depth integrated. |
| Service / Expertise Pages | 10 | Required expertise, qualification, speaking, resources, advisory, and contact pages included. |
| SEO | 9 | Metadata, schema, sitemap, robots, target keywords, semantic structure; final domain needed. |
| Contact Experience | 9 | Form opens a prefilled email with the visitor's details, includes inquiry dropdown, email, LinkedIn, Calendly placeholder, and no public phone. |
| Review / Credibility Integration | 8 | Personal-brand credibility indicators are strong; approved testimonials, publications, or media would improve score. |

Recommendations to reach 95-100:

- Add approved professional media and replace placeholders with optimized `next/image`.
- Add approved public speaking videos, interviews, publications, and white papers.
- Add a real Calendly or scheduling workflow if approved.
- Add an approved server-side email, CRM, or intake workflow later if Matthew wants messages sent without opening the visitor's email client.
- Replace `https://www.example.com` metadata base with the production domain.
- Add approved testimonials or third-party credibility references if available and compliant.
