# Afrikatek Solutions — Website v2

A high-fidelity, cinematic marketing site for Afrikatek Solutions, rebuilt from the
static prototype as a **React + Vite** single-page app, with a **Cloudflare Turnstile**
+ **Resend** contact pipeline, ready to deploy on **Vercel**.

## Stack

- **React 18** + **react-router-dom** (SPA, 6 routes)
- **Vite 6** build tooling
- **lucide-react** icons
- **@marsidev/react-turnstile** for the contact form's bot check
- **Resend** for email delivery (via a Vercel serverless function)

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero + Africa network, marquee, services, work, process, stats, industries, tech, testimonials, insights, CTA |
| `/services` | Services overview + detailed rows + tech stack + process |
| `/work` | Featured case study (Titanium) + live-site grid + markets map |
| `/about` | Story, vision/mission, values, leadership |
| `/insights` | Blog/insights hub (featured + grid) |
| `/contact` | Contact info + form (Turnstile + Resend) |

## Project layout

```
index.html              Vite entry (fonts + root)
vercel.json             SPA rewrites (everything except /api → index.html)
api/contact.js          Serverless: verifies Turnstile, sends via Resend
public/assets/          africa-dots-dark.svg / -ink.svg (the signature dot-matrix map)
src/
  main.jsx              React root + BrowserRouter
  App.jsx               Routes, per-route title, scroll-to-top, motion wiring
  styles.css            The full design system (tokens + components) — verbatim
  hooks/usePageMotion.js  Port of the prototype motion.js (reveals, count-up, dashboard, magnetic, parallax, hero line-draw)
  components/           Nav, Footer, Brand, AfricaNetwork
  pages/                Home, Services, Work, About, Insights, Contact
```

### Motion model (important)

Content is **visible by default**. The reveal animations in `usePageMotion` are
purely *additive* — they only add `.in` / `.in-view` classes and run the count-up /
dashboard tweens. Nothing is ever hidden by JS, so the site is fully readable even if
the hook never runs (and it respects `prefers-reduced-motion`).

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
```

The contact form works without any keys in dev: Turnstile renders a placeholder and the
API skips verification when `TURNSTILE_SECRET_KEY` is unset. To exercise the full
serverless path locally, use the Vercel CLI:

```bash
npm i -g vercel
vercel dev           # runs the Vite app + the /api function together
```

## Environment variables

Copy `.env.example` → `.env` (local) and set the same keys in **Vercel → Project →
Settings → Environment Variables** (production):

| Key | Where | Purpose |
|-----|-------|---------|
| `VITE_TURNSTILE_SITE_KEY` | client | Public Turnstile site key (the widget) |
| `TURNSTILE_SECRET_KEY` | server | Turnstile secret (siteverify) |
| `RESEND_API_KEY` | server | Resend API key |
| `CONTACT_FROM` | server | Verified Resend sender, e.g. `Afrikatek Website <website@afrikatek.co.za>` |
| `CONTACT_TO` | server | Inbox for submissions (default `hello@afrikatek.co.za`) |

Cloudflare's documented **test keys** (always pass) are pre-filled in `.env.example`
so you can wire the flow before provisioning real ones.

### Setting up the services

1. **Turnstile** — Cloudflare dashboard → Turnstile → add a widget for your domain;
   copy the **site key** (→ `VITE_TURNSTILE_SITE_KEY`) and **secret key**
   (→ `TURNSTILE_SECRET_KEY`).
2. **Resend** — create an API key at <https://resend.com/api-keys>, and verify the
   sending domain (`afrikatek.co.za`) so `CONTACT_FROM` is allowed.

## Deploy to Vercel

```bash
vercel            # preview
vercel --prod     # production
```

Vercel auto-detects Vite (build `npm run build`, output `dist/`) and deploys
`api/contact.js` as a Node serverless function. `vercel.json` rewrites all non-API
routes to `index.html` so client-side routing works on hard refresh / deep links.

## Things to replace before launch

- **Photography** — the Unsplash URLs throughout are placeholders; swap for real
  Afrikatek / client imagery.
- **Testimonials** (Home) — confirm wording with each client before publishing.
- **Insights articles** — wire to your CMS of choice; cards currently link to `#`.
- **`hello@afrikatek.co.za`** is the catch-all CTA and `CONTACT_TO` default — change
  if you prefer another address.
