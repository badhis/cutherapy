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
    Logo.tsx            # LogoMark (icon 64×64) + LogoNav (navbar 230×50) components
```

**Key pattern:** `FadeIn` accepts `delay`, `direction` (`up` | `left` | `right` | `none`) and wraps any block. Use it for every section-level element that should animate on scroll.

**Hover events on links/divs** use inline `onMouseEnter`/`onMouseLeave` (no Tailwind hover variants) to stay strictly within the brand palette. All components using event handlers must have `"use client"` at the top.

**Video cards** in `/projets` start playing on `mouseenter` and reset on `mouseleave` via a `ref` — always `muted` and `playsInline` for autoplay compatibility.

## Brand Identity

**Nom:** Cutherapy  
**Slogan:** "Votre image mérite du soin"  
**Activité:** Montage vidéo pour médecins & professionnels de santé  
**Fondateur:** Infirmier Diplômé d'État + monteur vidéo — double légitimité terrain/technique  
**Ton:** Direct, sans jargon, orienté résultat. Jamais "passion" ou "créatif".

## Hero — texte de référence (page d'accueil)

| Élément | Contenu |
|---|---|
| H1 | "Le seul monteur vidéo qui comprend ce que vous dites." |
| Tagline | "Vous soignez. Je m'occupe de votre image." |
| CTA 1 | "Voir les offres" → `/services` |
| CTA 2 | "Prendre contact" → `/contact` |

**Corps :**
> Infirmier DE certains jours et monteur vidéo le reste du temps.  
> Je transforme votre brut en contenu propre, sous-titré et prêt à publier — en 48h. Sans allers-retours inutiles.  
> Vos termes, vos enjeux de crédibilité, vos contraintes déontologiques — je les connais.

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

**Version v2.0 — "Signal vital + Play"** (charte 2026)

Structure SVG en 3 éléments : HeartPulse (ECG ambre) · Bouton play teal · Nom + tagline DM Mono.

### Règles couleur absolues
| Élément | Règle |
|---|---|
| ECG (2ᵉ path) | `stroke: #EF9F27` — toujours, sans exception |
| Bouton play (circle) | `fill: #1D9E75` — toujours, sans exception |
| Cœur (1ᵉʳ path) — fond noir | `stroke: #F1EFE8` |
| Cœur — fond sable | `stroke: #1A1A1A` |
| Cœur — fond teal `#04342C` | `stroke: #9FE1CB` |
| Flèche play — fond noir | `fill: #1A1A1A` |
| Flèche play — fond sable | `fill: #F1EFE8` |

### Composants (`src/components/Logo.tsx`)

**`LogoMark`** — icône carrée 64×64 (favicon, avatar, app icon)
- Props : `size` (défaut 64), `variant` (`"dark"` | `"teal"` | `"amber"` | `"circle"`)
- `"circle"` = rond pour Instagram/avatar (rx=32)
- Mini play badge en bas-droite (cx=49 cy=49 r=10)

**`LogoNav`** — logo horizontal navbar (viewBox 230×50)
- Props : `variant` (`"dark"` | `"sand"`), `width` (défaut 190)
- HeartPulse scale(1.7) + play r=9 + "Cutherapy" DM Serif 20px + baseline + "MONTAGE MÉDICAL" DM Mono 9px

### Structure SVG type (pleine largeur 360×68)
```svg
<g transform="translate(0,4) scale(2.2)">
  <!-- Cœur -->
  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
        stroke="[selon fond]" stroke-width="1.6"/>
  <!-- ECG — toujours ambre -->
  <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" stroke="#EF9F27" stroke-width="1.6"/>
</g>
<!-- Play — toujours teal -->
<circle cx="57" cy="30" r="12" fill="#1D9E75"/>
<polygon points="53,24.5 53,35.5 64,30" fill="[selon fond]"/>
<!-- Nom -->
<text x="77" y="36" font-family="'DM Serif Display',Georgia,serif" font-size="26" letter-spacing="-0.6">Cutherapy</text>
<line x1="77" y1="44" x2="358" y2="44" stroke="[selon fond]" stroke-width="0.5"/>
<text x="78" y="60" font-family="'DM Mono',monospace" font-size="11" fill="#1D9E75" letter-spacing="2.2">MONTAGE VIDÉO MÉDICAL</text>
```

### Usages par contexte
| Contexte | Composant | Variante |
|---|---|---|
| Navbar | `LogoNav` | `variant="dark"` |
| Footer / fond teal | SVG inline | cœur `#9FE1CB` |
| Favicon / app icon | `LogoMark` | `variant="dark"` |
| Avatar Instagram | `LogoMark` | `variant="circle"` |
| og:image / LinkedIn | SVG pleine largeur | fond `#1A1A1A` |
| Email signature | SVG + slogan italique DM Serif | fond sable |

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
