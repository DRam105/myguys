# My Guys Pest Control — Website

A modern, conversion-focused marketing site for **My Guys Pest Control**, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Every screen is designed to drive one of two actions: **get a free quote** or **call now**.

---

## ⚠️ Important: Google Drive & `node_modules`

This project folder lives on **Google Drive**. Google Drive's virtual filesystem **cannot reliably host `node_modules`** — `npm install` fails there with disk I/O errors (`EBADF`), and directory junctions/symlinks are also blocked on the Drive.

**For local development, run the project from a local-disk copy** (outside Google Drive), e.g. `C:\Users\<you>\myguys-website`:

```bash
# one-time: copy the project to local disk (excluding build/deps)
robocopy "G:\...\My Guys Website" "C:\Users\<you>\myguys-website" /E /XD node_modules .next

# then work from the local copy
cd C:\Users\<you>\myguys-website
npm install
npm run dev
```

Keep your **source of truth on Google Drive** for backup/sharing, and copy changes back when done (again excluding `node_modules` and `.next`). `node_modules` is regenerable — never copy it to the Drive.

> On a normal local machine (project not on a cloud-synced folder) you can ignore all of this and just run `npm install && npm run dev`.

---

## Tech Stack

- **Next.js (App Router)** + **React** + **TypeScript** (strict)
- **Tailwind CSS v4** — brand tokens as CSS variables in `app/globals.css`
- **shadcn-style UI primitives** (hand-built, brand-styled) in `components/ui`
- **lucide-react** icons
- **motion** (Framer Motion) — scroll/hover/counter animations, respects `prefers-reduced-motion`
- **react-hook-form** + **zod** — accessible, validated forms
- **next-mdx-remote** + **gray-matter** — MDX blog
- **next/font** (Barlow Condensed + Inter), **next/image**

## Getting Started

```bash
npm install
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint
```

## Project Structure

```
app/                     Routes (App Router)
  layout.tsx             Root layout: fonts, header/footer, JSON-LD, analytics slot
  page.tsx               Home page (composed from components/home/*)
  services/              /services + /services/[slug]
  pests/                 /pests + /pests/[slug]
  plans/ service-area/ about/ reviews/ contact/ quote/ privacy/ terms/
  blog/                  /blog + /blog/[slug] (MDX)
  api/{quote,contact}/   Form route handlers (stubbed)
  sitemap.ts robots.ts   SEO
  opengraph-image.tsx    Dynamic social share image
  icon.svg               Favicon
components/
  layout/                Header, Footer, MobileCallBar
  home/                  Home page sections
  forms/                 ContactForm, multi-step QuoteForm
  shared/                Reusable pieces (Reveal, ZipChecker, PageHero, CtaBand, etc.)
  ui/                    Brand-styled primitives (Button, Input, Accordion, …)
lib/
  site-config.ts         ⭐ Brand name, phone, address, hours, nav, offer, social
  services.ts pests.ts   Content data (drives dynamic routes + SEO)
  plans.ts reviews.ts    Content data
  zips.ts                Served ZIP codes + cities (ZIP checker)
  validations.ts         zod schemas
  seo.ts                 Metadata + JSON-LD helpers
  blog.ts                MDX reading utilities
content/blog/            MDX blog posts
public/                  Logo + static assets
```

## How to Customize

### Logo
Drop your logo file in `public/` (e.g. `public/logo.png`) and set the path in
**`lib/site-config.ts`**:

```ts
logo: "/logo.png",   // currently "/logo-placeholder.svg"
```

- The logo is used in the header. The **dark footer** uses a text wordmark
  (`components/shared/wordmark.tsx`) because a white-background logo looks like a
  sticker on dark surfaces. If you have a **transparent / white-knockout** logo,
  swap it into the wordmark component.
- `next.config.ts` has `dangerouslyAllowSVG: true` so the SVG placeholder can be
  served — safe since the logo is a first-party asset you control.

### Phone, address, hours, social, offer
All in **`lib/site-config.ts`** — one place, used everywhere (header, footer,
CTAs, mobile bar, JSON-LD).

### Brand colors
Edit the CSS variables at the top of **`app/globals.css`**:

```css
--brand-red: #d81e22;
--brand-red-dark: #9e1418;
--ink: #1a1a1a;
/* … */
```

### Service area (ZIP checker + cities)
Edit **`lib/zips.ts`** — `servedZips` (the list the ZIP checker validates against)
and `servedCities`.

### Content
- **Services:** `lib/services.ts` (drives `/services/[slug]`)
- **Pests:** `lib/pests.ts` (drives `/pests/[slug]`)
- **Plans:** `lib/plans.ts`
- **Reviews:** `lib/reviews.ts`
- **Blog:** add `.mdx` files to `content/blog/` with frontmatter
  (`title`, `description`, `date`, `author`, `category`)

Anything you must replace is marked with `[bracketed placeholders]` (license #,
BBB/EPA badges, team names, map embeds, offer code, etc.).

## TODOs / Integrations

- **Forms → CRM/email:** `app/api/quote/route.ts` and `app/api/contact/route.ts`
  currently validate + `console.log` the payload. Wire up Resend / HubSpot /
  your CRM where marked `// TODO`.
- **Live chat:** `components/shared/live-chat-button.tsx` is a stub. Replace with
  a real provider (Podium, Intercom, Tidio, Drift, …).
- **Analytics:** add your Google Analytics / GTM snippet in `app/layout.tsx`
  (marked `ANALYTICS PLACEHOLDER`).
- **Maps:** embed a Google Maps iframe where you see `[Embedded Map Placeholder]`
  (contact + service-area pages).
- **Review widgets:** `/reviews` has slots for live Google/Facebook widgets.

## SEO

- Per-route metadata via the Metadata API (`lib/seo.ts`)
- JSON-LD: `LocalBusiness` (root), `Service` (service pages), `FAQPage`
  (services/plans), `Product`/`AggregateRating` (reviews)
- Generated `sitemap.xml` and `robots.txt`
- Dynamic Open Graph image (`app/opengraph-image.tsx`)

Update `siteConfig.url` in `lib/site-config.ts` to your production domain so
canonical URLs, sitemap, and structured data resolve correctly.

## Deploy to Vercel

1. Push this project to a Git repo (GitHub/GitLab/Bitbucket).
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects
   Next.js; no config needed.
3. Set the production domain, then update `siteConfig.url`.
4. Add environment variables later when you wire up the CRM/email integrations.

> Because Google Drive can't host `node_modules`, deploy from a **Git repository**
> rather than uploading the Drive folder directly.

---

Built for My Guys Pest Control.
