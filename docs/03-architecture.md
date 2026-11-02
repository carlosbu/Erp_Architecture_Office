# 03 — Architecture

Status: **draft for owner review**

## In one sentence
A web app that runs in the browser (phone or computer), stores data in a
managed database in the cloud, and costs nothing to host at this size.

## Building blocks
```
 Phone / computer browser
          │  HTTPS
          ▼
 ┌──────────────────────────┐
 │ Web app (Next.js)        │  screens in pt-BR + server logic
 │ hosted on Vercel         │
 └──────────┬───────────────┘
            │
 ┌──────────▼───────────────┐
 │ Supabase                 │
 │ • PostgreSQL database    │  projects, quotes, payments, schedule
 │ • Auth (e-mail login)    │  owner + family
 │ • Storage                │  quote PDFs, receipts
 └──────────────────────────┘
 Monthly job: import SINAPI / CUB reference prices
```

| Piece | Choice | Why (plain words) |
|---|---|---|
| Language | TypeScript | One language for screens and logic; catches mistakes early |
| Web framework | Next.js | Most common choice; Claude knows it well; phone-friendly |
| UI kit | Tailwind + shadcn/ui | Ready-made tables, forms, charts that look good on phone |
| Database | PostgreSQL (Supabase) | Reliable, relational (good for money); free tier |
| Login | Supabase Auth | E-mail magic link, no passwords to manage |
| Files | Supabase Storage | Quote PDFs and receipts next to the data |
| Hosting | Vercel | Free tier, deploys automatically from GitHub |
| Tests | Vitest + Playwright | Check calculations and key screens |

Estimated cost: R$ 0/month on free tiers (upgrade ~US$ 25/month only if needed).

## Data model (first version)
```
Organization ─┬─ User (role: owner | editor)
              └─ Project (Apto Viveiro, budget R$ 500.000)
                   ├─ Room (code, name, area m², aliases)
                   ├─ Package (Obra civil, Marcenaria, ...) ─ Category (many)
                   ├─ BudgetLine (package, room?, category?, amount, suggested?)
                   ├─ Supplier
                   ├─ Quote (package, supplier, status)
                   │    └─ QuoteVersion (v1, v2, date, terms, tax %, current?)
                   │         └─ QuoteLine (category, description, qty, unit,
                   │              unit price, value | min–max, included?,
                   │              labor-only?)
                   │              └─ LineAllocation (room, %)
                   ├─ Commitment (approved QuoteVersion, value)
                   │    ├─ Installment (due date, amount)
                   │    └─ Payment (date, amount, method, receipt file)
                   ├─ Task (room?, package?, start, end, status, % done)
                   └─ ReferencePrice (source SINAPI/CUB/manual, code,
                        description, unit, price, ref. month)
AuditLog (who, when, what changed)
```

Key rules:
- Organization/Project at the top so the same app later serves the office ERP.
- Money stored as integer cents; ranges stored as min/max.
- A quote line can be split across rooms (LineAllocation %) — e.g.
  "Banho Conjugado" = 50% Banho 2 + 50% Banho 3.
- Per-room totals = sum of allocations; per-package totals = sum of lines.
- Database row-level security: users only see their organization's data.

## Decisions recorded
- ADR-0001 Tech stack
- ADR-0002 Money and ranges
- ADR-0003 Multi-project data model from day one

## Risks
| Risk | Mitigation |
|---|---|
| First system, learning curve | Small increments; Claude explains each step |
| Free tier pauses idle DB after 7 days | Weekly automatic ping; daily backup export |
| SINAPI format changes | Import is a separate script; manual prices as fallback |
| Quote entry is tedious | MVP: fast table entry; later: AI import from PDF |
