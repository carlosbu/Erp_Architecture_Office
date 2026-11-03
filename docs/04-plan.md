# 04 — Delivery plan (MVP, ~12 weeks)

Status: **draft for owner review**

Each increment ends with something the owner can **use on the phone**.
Each task = one small change with tests, pushed to GitHub, deployed by Vercel.

| # | Increment | Weeks | Owner can… |
|---|---|---|---|
| 0 | Foundation | 1 | open the app URL and log in |
| 1 | Project data | 2 | see rooms, packages and MC01–MC27 |
| 2 | Quotes | 3–4 | browse the 4 loaded quotes, add new ones and versions |
| 3 | Compare & completeness | 5 | compare joinery item by item; see what is missing |
| 4 | Budget & forecast | 6–7 | see suggested budget per room and forecast vs. R$ 500k |
| 5 | Payments | 8–9 | approve a quote, see installments, record payments |
| 6 | Schedule | 10 | follow stages and progress per room |
| 7 | Reference prices | 11 | see SINAPI/CUB references and price flags |
| 8 | Polish & release | 12 | export PDF/Excel; backups; family onboarding |

## Increment 0 — Foundation
- 0.1 Owner creates Supabase and Vercel accounts (guided).
- 0.2 Scaffold Next.js + TypeScript + Tailwind + shadcn/ui; pt-BR formatting helpers (R$, dates) with tests.
- 0.3 Connect Supabase; e-mail magic-link login; invite family; owner/editor roles.
- 0.4 Vercel deploy from GitHub; preview per branch.
- 0.5 CI: lint + type check + tests on every push.

## Increment 1 — Project data (A1–A5)
- 1.1 Tables: organization, project, room (+aliases), package, category, scope_item; row-level security.
- 1.2 Seed: Apto Viveiro, R$ 500k, 18 rooms + Geral, packages, categories, MC01–MC27.
- 1.3 Screens: project home, rooms list, scope items list (filter by room/package).

## Increment 2 — Quotes (B1–B4, B3a, B8 partial)
- 2.1 Tables: supplier, quote, quote_version, quote_line, line_allocation, audit_log.
- 2.2 Seed: Noventa v1, Todeschini (ranges), M&M v1, Fazenda rev01.
- 2.3 Screens: suppliers; quote detail by version; fast line entry table (phone-friendly); attach PDF/photos.
- 2.4 New version (copy + diff); validity warning.

## Increment 3 — Compare & completeness (B5, B5a, B6)
- 3.1 Item-by-item comparison per package (MC rows × suppliers).
- 3.2 Category/room comparison for packages without codes (civil).
- 3.3 Coverage matrix room × package: covered / excluded / missing.

## Increment 4 — Budget & forecast (C1, C1a, C2, C3)
- 4.1 Budget lines per package/room/category; unallocated amount.
- 4.2 Suggested budget algorithm (quotes + typical shares) with "where to cut".
- 4.3 Dashboard: per room and per package — budget, quoted min/max, committed, paid.
- 4.4 Forecast vs. R$ 500k with scenario switch (e.g. M&M vs. Fazenda).

## Increment 5 — Payments (B8, C4–C6)
- 5.1 Approve version → commitment; generate installments from terms.
- 5.2 Record payments with receipt upload; guard against overpaying.
- 5.3 Upcoming payments (30/60/90 days).

## Increment 6 — Schedule (D1–D4)
- 6.1 Tasks per room/package with dates, status, % done.
- 6.2 Progress overall and per room (weighted by budget).
- 6.3 Phone timeline view by week.

## Increment 7 — Reference prices (B7)
- 7.1 Import SINAPI-SP and CUB-SP monthly (script + manual upload fallback).
- 7.2 Link quote lines with qty/unit to references; flag > 20% above.

## Increment 8 — Polish & release (E3, E4)
- 8.1 Export comparisons and dashboard to PDF/Excel.
- 8.2 Daily backup; keep-alive for free tier.
- 8.3 Owner + family acceptance test against the vision's success criteria.

## Definition of done (every task)
- Matches an approved requirement; tests pass; UI in pt-BR; works at phone width;
  pushed and deployed; owner sees it.
