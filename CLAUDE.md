# CLAUDE.md — bestspacesim.com

## Project Overview
Comparison and recommendation site targeting people searching "best space sim"
or "best space simulation game." Reviews multiple space sims objectively but
naturally positions Star Citizen as the top pick for players wanting a living
universe. Funnels to dayonecitizen.com and referral signup.

## Quick Reference
```
Referral code:  STAR-GCQJ-N6NC
Enlist URL:     https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
Hub:            https://dayonecitizen.com
Conventions:    E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md
```

## Agentic Build Instructions
Incremental agents. Confirm each before proceeding.

### Agent 1 — Scaffold
- Next.js 14, TypeScript, Tailwind CSS
- Color palette:
    deepGreen: '#0d1f16'
    greenMid: '#142b1e'
    purple: '#9b59ff'
    purpleDark: '#7b39df'
    offwhite: '#eef2ee'
    muted: '#7a8f7d'
- Hero placeholders (12 images)
- Confirm dev server

### Agent 2 — Components
- HeroCarousel.tsx (12 slides)
- GameComparisonCard.tsx: game title, thumbnail placeholder, pros, cons,
  best for, score badge
- ComparisonTable.tsx: side-by-side feature comparison table
- CTAButton.tsx: "Try Star Citizen Free During Free Fly"
  → https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
- SecondaryButton.tsx: "Star Citizen Beginner's Guide" → https://dayonecitizen.com
- Footer.tsx: standard footer
- NavBar.tsx: links: Home, Comparison, Star Citizen, Free Fly Events,
  Beginner's Guide

### Agent 3 — Homepage (/)
  - SEO: title="Best Space Sim Games 2026 — Top Picks for New & Veteran Players"
    description="Looking for the best space simulation game? We rank the top
    space sims of 2026 including Star Citizen, Elite Dangerous, No Man's Sky,
    and more."
  - H1: "The Best Space Sim Games in 2026"
  - HeroCarousel
  - "Our Top Pick" hero card: Star Citizen — with referral CTA
  - GameComparisonCard grid (5-6 games):
    Star Citizen, Elite Dangerous, No Man's Sky, EVE Online, X4 Foundations,
    Starfield
  - ComparisonTable: feature matrix across all games
  - "Why Star Citizen Stands Alone" section
  - "Try It Free — No Purchase Required During Free Fly" CTA block
  - CTAButton + SecondaryButton
  - Footer
  Confirm renders correctly.

### Agent 4 — Star Citizen Page (/star-citizen)
  - SEO: title="Star Citizen Review 2026 — Is It Worth It?"
  - Deep dive review
  - "New Player?" CTA → dayonecitizen.com
  - Referral code CTA

### Agent 5 — Comparison Page (/comparison)
  - Full ComparisonTable with all games
  - Filter by: multiplayer, singleplayer, free-to-try, price

### Agent 6 — SEO & Build
  - Sitemap, robots, OG meta
  - ItemList schema for game rankings
  - npm run build must pass

## Color Palette
  --deep-green: #0d1f16
  --green-mid: #142b1e
  --purple: #9b59ff
  --purple-dark: #7b39df
  --offwhite: #eef2ee
  --muted: #7a8f7d

## Network Conventions
See `E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md` for footer spec,
tone rules, commit convention, tech stack, and agentic build pattern.

## Click Tracking

Added 2026-05-17. Every referral CTA click fires a background POST to `/api/log` which writes a row to the shared Google Sheet and posts an embed to the #referral-clicks Discord channel.

**Env vars required** (Vercel project settings + `.env.local`):
- `CLICK_TRACKER_SHEET_URL` — Google Apps Script web app deploy URL
- `DISCORD_CLICK_WEBHOOK_URL` — Discord channel webhook URL

**Key files:**
- `src/app/api/log/route.ts` — server-side handler (parallel Sheet + Discord calls)
- `src/components/CTAButton.tsx` — `handleClick` fires the fetch on CTA click

> **Note:** Endpoint was renamed from `/api/track-click` → `/api/log` because adblocker filter lists (EasyPrivacy, uBlock Origin) blocked the original URL pattern client-side.

### TODO: Verify end-to-end on this site
- [ ] Click CTA **with** adblocker enabled → Sheet row appears within 5s
- [ ] Click CTA **with** adblocker enabled → Discord embed appears in #referral-clicks
- [ ] Click CTA **without** adblocker → same as above
