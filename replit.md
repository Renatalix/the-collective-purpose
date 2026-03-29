# The Collective Purpose (TCP)

## Overview
A future-facing cultural brand website built around the philosophy: **Human + Nature + Machine working together toward one future.** The site serves as a landing page and movement hub, driving traffic to a Shopify store and Instagram presence.

## Architecture
- **Frontend**: React + Vite + Tailwind CSS v4 + Framer Motion
- **Backend**: Express.js server with PostgreSQL (Drizzle ORM)
- **Routing**: wouter (frontend), Express (backend API)

## Key Pages & Sections
- **Hero**: Neon TCP logo, core tagline, CTA buttons to Shopify
- **Vision**: Cinematic video + narrative text
- **Philosophy**: Human / Nature / Machine pillars with generated imagery
- **Manifesto**: Bold typographic statement section
- **Projects**: Partner project showcase (Genesis, Aura, Abundance Lab)
- **Canvas Series**: Artwork-driven conversation starter t-shirts (Harmonious 3.0)
- **Products**: Initial collection (tee + hoodie) linking to Shopify
- **Footer**: Email subscription form (functional, saves to DB), Instagram link

## External Links
- **Shopify Store**: https://admin.shopify.com/store/the-collective-purpose/settings/domains
- **Instagram**: @collective_purpose
- **Custom Domain**: thecollectivepurpose.co

## Database
- PostgreSQL with Drizzle ORM
- `subscribers` table: id, email (unique), createdAt

## API Routes
- `POST /api/subscribe` — Email newsletter subscription

## Brand Assets (in attached_assets/)
- `TCP_logo_color_1773013893715.png` — Neon triangle logo
- `Black_Transparent_LOGO_1773013925781.png` — Black logo for navbar
- `Screenshot_2026-03-08_at_23.53.36_1773014023539.png` — Hoodie product photo
- `Harmonious_3.0_1773015586574.png` — Conversation starter artwork

## Design System
- **Fonts**: Space Grotesk (display) + Inter (body)
- **Aesthetic**: Symbolic minimalism, monochrome palette, premium feel
- **Dark hero section** with inverted colors for impact
