# TechAndDev — company website

Marketing site for **TechAndDev LLC**. Built with [Astro](https://astro.build) +
[Tailwind CSS v4](https://tailwindcss.com). Fully static — no server, no database,
no third-party scripts.

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # preview the production build
```

Requires Node 20 or newer.

---

## Where to edit things

| What                                 | File                                          |
| ------------------------------------ | --------------------------------------------- |
| Company name, email, address, domain | `src/consts.ts`                               |
| Product cards (home + products list) | `PRODUCTS` in `src/consts.ts`                 |
| Navigation links                     | `NAV` in `src/consts.ts`                      |
| Colors, fonts, theme                 | `src/styles/global.css` (`@theme` block)      |
| Header / footer                      | `src/components/Header.astro`, `Footer.astro` |
| Pages                                | `src/pages/*.astro`                           |

**Every `TODO` in the codebase marks a placeholder you need to replace.**
Search for `TODO` before going live.

### Adding a product

1. Add an entry to `PRODUCTS` in `src/consts.ts` (the `slug` becomes the URL).
2. Create `src/pages/products/<slug>.astro` — copy `vpn-list.astro` as a starting point.

That's it: the home page, products index and footer pick it up automatically.

---

## Before you submit the site to Apple

Apple rejects organization enrollments whose website has "minimal content".
Check all of these first:

- [ ] Domain registered and pointing at the site (`techanddev.com` or similar —
      it must be recognisably related to _TechAndDev LLC_).
- [ ] `site:` updated in `astro.config.mjs` and in `public/robots.txt`.
- [ ] A real mailbox on the company domain (`support@yourdomain`), set in
      `src/consts.ts`. Apple asks for a work email on your domain during enrollment.
- [ ] The VPN List product page filled in: real feature list, at least one
      screenshot in `public/screenshots/`, system requirements.
- [ ] Privacy Policy and Terms reviewed by a lawyer. **The versions in this repo
      are templates, not legal advice.**
- [ ] VPN apps specifically: App Store Review Guideline 5.4 requires the app to be
      submitted from an _organization_ account (you have the LLC, so this is fine)
      and requires a privacy policy that states exactly what data the app collects
      and confirms you do not sell or share it.

---

## Deploying

### Cloudflare Pages (recommended — free, fast, free SSL)

1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**, pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Then **Custom domains** → add your domain. If the domain is registered
   with Cloudflare, DNS and SSL are configured automatically.

### Vercel

Import the repo at [vercel.com/new](https://vercel.com/new). Vercel detects Astro
automatically — no settings to change. Add the domain under
**Settings → Domains**.

### Anywhere else

`npm run build` produces a plain static site in `dist/`. Upload that folder to any
static host (Netlify, GitHub Pages, S3, nginx).

---

## Notes

- The Inter font is bundled with the site (`@fontsource-variable/inter`) rather
  than loaded from Google Fonts — no external requests, which keeps the privacy
  claims on the site truthful.
- No cookies, no analytics, no tracking scripts. If you later add analytics, pick
  something cookieless (Plausible, Fathom) and update `src/pages/privacy.astro`
  accordingly.
- `sitemap-index.xml` is generated automatically on build.
