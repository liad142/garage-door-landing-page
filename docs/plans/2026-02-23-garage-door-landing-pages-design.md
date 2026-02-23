# Garage Door Landing Pages — Design Document

## Overview
3 distinct landing pages for garage door service brands, built in a single Next.js project with shared components and per-brand configuration.

## Brands

| Brand | Phone | Area | Colors |
|-------|-------|------|--------|
| Tom Garage Doors | (702) 330-5532 | Las Vegas / Summerlin, NV | Orange/Navy/Gold |
| Elite Garage Doors | (818) 616-8062 | Valencia, CA | Blue/Charcoal/Gold |
| EliteDMV Garage Doors | (747) 774-1074 | Silver Spring, MD | Green/Midnight/Silver |

## Tech Stack
- Next.js 14 (App Router, SSG)
- Tailwind CSS
- TypeScript
- Vercel deployment

## Page Sections (all 3 brands)
1. Navbar — logo/name, phone, "Get Free Quote" button
2. Hero — full-width image, headline, value props, CTAs
3. $69 Tune-Up Banner
4. Services Grid (4 cards with discount badges)
5. About Section (localized)
6. Reviews (4-5 authentic cards, 5 stars, avatars)
7. Simple Quote Form (name, phone, service type)
8. FAQ Accordion (5-6 questions)
9. Footer

## Services & Discounts
- Garage Door Repair — 15% off new customers
- Spring Repair/Replacement — 18% off
- Opener Repair/Installation — 15% off
- New Door Installation — 10% off
- $69 Tune-Up Special

## Routing
- `/tom` → Tom Garage Doors
- `/elite` → Elite Garage Doors
- `/dmv` → EliteDMV Garage Doors
- `/` → selector or redirect

## Domain Mapping (future)
Each purchased domain maps to its route via Vercel domain config.
