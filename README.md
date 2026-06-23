# NKHANDBAG

Showcase website for NKHANDBAG — bespoke handbags from Mumbai, India.

Built with Next.js 15 + Tailwind CSS + GSAP, on the **Warm Studio** design system.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in values (optional for first run)
cp .env.example .env.local

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
NKHANDBAG/
├── app/
│   ├── layout.tsx          → Root layout, fonts, metadata
│   ├── page.tsx            → Home page (hero + featured products)
│   ├── globals.css         → Tailwind + token imports
│   ├── products/
│   │   ├── page.tsx        → Product listing grid
│   │   └── [slug]/page.tsx → Individual product detail
│   ├── reviews/page.tsx    → Reviews / testimonials
│   └── contact/page.tsx    → Contact form + WhatsApp
├── components/             → Reusable UI (Header, Footer, sections)
├── data/
│   ├── products.ts         → ⭐ Edit this to add/remove products
│   └── reviews.ts          → ⭐ Edit this to add/remove reviews
├── lib/design/
│   ├── tokens.css          → Color, spacing, motion CSS variables
│   └── motion.ts           → GSAP motion presets
└── public/
    └── products/           → Drop product images here
```

---

## Design System — Warm Studio

**Typography** (loaded via `next/font/google`)

| Use | Font | Tailwind class |
|---|---|---|
| Body + UI | Outfit | `font-sans` (default) |
| Editorial / quotes | Instrument Serif | `font-serif` |
| Labels / eyebrows / mono | JetBrains Mono | `font-mono` |
| Heavy condensed display | Anton | `font-display` |

**Colors** — defined as CSS variables in `lib/design/tokens.css` and exposed as Tailwind utilities:

```
bg, bg-elev-1, bg-elev-2     surfaces
fg, fg-muted, fg-subtle      text
accent, accent-warm          highlights
border, border-strong        dividers
```

**Spacing** — 4pt scale (Tailwind default 0.25rem step).

**Motion** — use presets from `lib/design/motion.ts`:

```tsx
import { fadeUp, staggerReveal, easing, duration } from '@/lib/design/motion';
```

---

## Adding Products

1. **Drop product images** into `public/products/`. Use kebab-case filenames (e.g. `midnight-tote-1.jpg`). Keep images optimized — aim for under 500KB each.

2. **Add an entry** to `data/products.ts`:

```ts
{
  slug: 'midnight-tote',          // URL: /products/midnight-tote
  name: 'Midnight Tote',
  category: 'Tote',
  description: 'A structured everyday tote, hand-finished in Mumbai.',
  howItsMade: 'Cut from full-grain leather, hand-stitched over four days...',
  materials: ['Full-grain leather', 'Brass hardware', 'Cotton lining'],
  images: ['/products/midnight-tote-1.jpg', '/products/midnight-tote-2.jpg'],
  featured: true,                 // Optional — shows on home page
}
```

3. **Commit and push** to GitHub. Vercel will auto-deploy in ~30 seconds.

To remove a product: delete its entry from the array. To edit: update the fields.

---

## Adding Reviews

Same flow — edit `data/reviews.ts`:

```ts
{
  id: 'r-001',
  name: 'Priya S.',
  location: 'Mumbai',
  rating: 5,
  text: 'The craftsmanship is unmatched.',
  date: '2025-03-14',
}
```

---

## Contact Form Setup (Web3Forms)

The contact form uses [Web3Forms](https://web3forms.com) — free, no signup required.

1. Go to [web3forms.com](https://web3forms.com) and enter the client's email
2. They'll send an access key to that email
3. Add it to `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
```

4. Add the same env var in Vercel project settings → Environment Variables

Form submissions arrive directly in the client's inbox. No backend needed.

---

## WhatsApp Button

Set the client's WhatsApp number in `.env.local` (country code, no `+` or spaces):

```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

---

## Deployment to Vercel

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com), click "New Project", import the repo
3. Add env vars from `.env.example` (with real values)
4. Click "Deploy" — done in ~60 seconds

### Custom domain

1. Buy the domain from Namecheap / BigRock / GoDaddy (register it in the **client's** name and email)
2. In Vercel → Project → Settings → Domains → add the domain
3. At your registrar, point the DNS to Vercel (Vercel shows the exact records to add)
4. SSL is auto-provisioned

---

## Available Scripts

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # ESLint
```

---

## Notes

- **No database.** Products and reviews live in TypeScript files committed to the repo. Updates = git commit + push = auto-deploy.
- **Free hosting.** Vercel free tier handles this site comfortably.
- **No analytics by default.** Add Vercel Analytics or Plausible later if needed.
