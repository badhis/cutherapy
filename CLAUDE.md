# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # ESLint check
```

## Stack

- **Next.js 15** — App Router, all pages in `src/app/`
- **Tailwind v4** — configured via `@theme` in `globals.css` (no `tailwind.config.js`)
- **Framer Motion 11** — scroll animations via `FadeIn` wrapper, page-level `motion.*`
- **Lucide React** — icons throughout

## Architecture

```
src/
  app/
    layout.tsx          # Root layout: Google Fonts, Navbar + Footer wrapper
    globals.css         # Tailwind v4 @theme with all brand tokens
    page.tsx            # Accueil (Hero, Stats, Services preview, CTA)
    services/page.tsx   # 3 packs tarifés + FAQ
    projets/page.tsx    # Galerie filtrée, hover-to-play video cards
    methode/page.tsx    # 5 étapes du brief à la livraison
    contact/page.tsx    # Formulaire de contact (submit simulé)
    not-found.tsx       # Page 404
  components/
    Navbar.tsx          # Sticky nav with scroll blur, mobile drawer (AnimatePresence)
    Footer.tsx          # Brand + links + copyright
    FadeIn.tsx          # Reusable scroll-triggered fade wrapper (useInView)
    Logo.tsx            # LogoMark component (size, variant, bgColor props)
```

**Key pattern:** `FadeIn` accepts `delay`, `direction` (`up` | `left` | `right` | `none`) and wraps any block. Use it for every section-level element that should animate on scroll.

**Hover events on links/divs** use inline `onMouseEnter`/`onMouseLeave` (no Tailwind hover variants) to stay strictly within the brand palette. All components using event handlers must have `"use client"` at the top.

**Video cards** in `/projets` start playing on `mouseenter` and reset on `mouseleave` via a `ref` — always `muted` and `playsInline` for autoplay compatibility.

## Brand Identity

**Name:** Cutherapy  
**Tagline:** "Votre image mérite du soin"  
**Tone:** Direct, jargon-free, results-oriented. Never use "passion" or "créatif".

## Color Palette

Use ONLY these colors — no exceptions:

| Role | Hex | Usage |
|---|---|---|
| Noir profond | `#1A1A1A` | Fond de page (thème dark) |
| Dark | `#2C2C2A` | Surfaces / cartes |
| Surface élevée | `#363633` | Cartes imbriquées, inputs |
| Teal vif | `#1D9E75` | Accent principal |
| Teal profond | `#0F6E56` | Hover buttons |
| Teal très profond | `#04342C` | Fond sections CTA |
| Teal pâle | `#E1F5EE` | Tags, badges teal |
| Ambre | `#EF9F27` | Accent secondaire, prix |
| Ambre foncé | `#633806` | Texte sur fond ambre |
| Ambre pâle | `#FAEEDA` | Badges premium |
| Sable | `#F1EFE8` | Texte principal (sur dark) |
| Gris | `#888780` | Texte secondaire |
| Gris clair | `#D3D1C7` | Bordures, séparateurs (light) |

Bordures sur dark : `rgba(255,255,255,0.07)` · Bordures teal : `rgba(29,158,117,0.25)`

## Typography

- **Titres / display:** DM Serif Display — `fontFamily: "var(--font-serif)"` · 36–68px · `letter-spacing: -0.02em`
- **Slogans italiques:** DM Serif Display italic — utilisé pour les accents de titre (`<em>`)
- **UI & corps:** Syne — `fontFamily: "var(--font-sans)"` · 600 pour les headings UI, 400 pour le corps
- **Mono / prix / labels / tags:** DM Mono — `fontFamily: "var(--font-mono)"` · `letter-spacing: 0.06–0.14em`
- **Eyebrows / labels de section:** Syne 10px · 600 · uppercase · `letter-spacing: 0.12em` · couleur `#1D9E75`

Never use Inter, Roboto, or Arial.

## Logo

Carré arrondi (`border-radius: 14px`) fond noir avec cisaillement diagonal teal :
```css
clip-path: polygon(0 0, 56% 0, 44% 100%, 0 100%);
```
Icône — SVG custom HeartPulse (stroke `#F1EFE8`, strokeWidth 2) :
```svg
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
<path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
```

**Trois variations officielles (charte v1.0) :**
| Variation | Fond mark | Shear | Nom | Slogan |
|---|---|---|---|---|
| Principale | `#1A1A1A` | `#1D9E75` | `#1A1A1A` | `#888780` |
| Dark | `#2C2C2A` | `#1D9E75` | `#F1EFE8` | `#1D9E75` |
| Accent ambre | `#1A1A1A` | `#EF9F27` | `#1A1A1A` | `#633806` |

Le composant `LogoMark` (`src/components/Logo.tsx`) accepte `size`, `variant` (`"teal"` | `"amber"`), et `bgColor`.

## Editorial Tone

| À éviter | À adopter |
|---|---|
| "passionné", "créatif", "dynamique", "compétitif" | Verbes d'action directs, bénéfices concrets |
| "Je suis passionné par la vidéo et j'adore aider…" | "Vous filmez entre deux consultations. Je monte et livre en 48h." |
| "qualité professionnelle à des prix compétitifs" | "Votre image mérite un montage à la hauteur de votre expertise médicale." |

## Absolute Rules

- Fond de page toujours `#1A1A1A` (thème dark) — jamais blanc pur.
- Prices always render in DM Mono, color `#EF9F27` (ambre).
- Ne jamais utiliser d'autres couleurs que celles listées ci-dessus.
