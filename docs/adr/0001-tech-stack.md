# ADR-0001 — Tech stack: Next.js + Supabase + Vercel
Status: proposed · Date: 02/11/2026
## Context
First system of a non-developer owner; phone-friendly web app; 2–4 users; low cost; built with Claude.
## Decision
TypeScript, Next.js (App Router), Tailwind + shadcn/ui, Supabase (Postgres, Auth, Storage), Vercel hosting, Vitest + Playwright.
## Alternatives
- Low-code (AppSheet, Glide, Airtable): fast start but weak for versioned quotes, allocations and growth into an ERP.
- Django/Rails: solid, but two languages and less free hosting.
## Consequences
Free to start; widely documented; easy to grow. Depends on two cloud vendors (data exportable as plain Postgres).
