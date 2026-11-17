# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Homeowners in the Washington DC / Maryland / Virginia (DMV) area who need a home-service trade to come to their house. They arrive from a search or an ad, usually on a phone, often with a specific problem, and want to reach a person quickly.

## Product Purpose

A multi-brand set of lead-generation landing pages in one Next.js repo. Each brand has its own page and (eventually) its own domain. Success is a phone call or a submitted quote request.

Brands:

- Tom Garage Doors (Las Vegas & Summerlin, NV), `/tom`
- Elite Garage Doors (Valencia & Santa Clarita, CA), `/elite`
- EliteDMV Garage Doors (Silver Spring & greater DMV, MD), `/dmv`
- DMV Chimney & Airduct (DC / Maryland / Virginia), `/chimney`

## Capabilities and Constraints

- Next.js 16 App Router, React 19, Tailwind 4, deployed on Vercel. Pushing `master` deploys production.
- Garage brands share one config-driven template (`src/data/brands.ts`, `src/components/BrandPage.tsx`). DMV Chimney & Airduct has its own design and components and must not change the garage pages.
- Quote form posts from the browser to FormSubmit; all brands currently share one lead inbox.

### DMV Chimney & Airduct

- Services (confirmed by owner, 2026-11-18): chimney sweep and inspection, chimney repair, air duct cleaning, dryer vent cleaning.
- Primary action: phone call. Secondary: quote form. No promotional price.
- Phone number: **undecided**. A placeholder `(202) 555-0142` is in use until the owner supplies the real one.
- Domain: undecided.
- Exact service towns/counties: undecided beyond "DC, Maryland, Virginia".

## Brand Commitments

- Name is written "DMV Chimney & Airduct".

## Evidence on Hand

DMV Chimney & Airduct:

- Confirmed claims: licensed and insured; same-day appointments, seven days a week; free estimates.
- No logo, no photographs, no customer reviews, no job counts, no years-in-business figure, no prices. Future work must not fabricate any of these. Photographs on the page are licensed stand-ins until the owner supplies real ones.

## Product Principles

1. The phone number is the product: it is reachable from every screen.
2. Print only what the owner confirmed. An empty slot beats an invented review.
3. Say what is done to the house in plain trade words; the visitor is not shopping for a brand, they are fixing a problem.
4. Each brand stands alone: a visitor never sees another brand.
