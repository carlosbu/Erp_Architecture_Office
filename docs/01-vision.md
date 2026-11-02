# 01 — Vision

Status: **ready for owner approval**

## Context
- Whole-apartment renovation, currently in the **design/quoting phase**.
- Total budget: **R$ 500,000**.
- Today everything is tracked **on paper**.
- The owner can share the architectural project (plans) so measurements can be extracted.

## Problems (owner's words, summarized)
1. Many quotes from different suppliers are hard to manage.
2. Comparing quotes is hard (different formats, items, units).
3. Hard to judge if a quote is **complete** (missing items/services).
4. Hard to get **measurements** from the project to estimate material quantities.
5. Hard to judge if received **prices are fair**.
6. Hard to control **versions** of the same quote (revisions).
7. Hard to know the **budget per room**.

## Goal
In **3 months**, a web app (phone-friendly) where the owner and family can see:
- the **budgeted cost of each room**,
- **paid vs. budgeted** amounts,
- the **progress of the work**.

## Users (phase 1)
- Owner: registers quotes, approves, pays.
- Family/partner: follows progress, comments.

## MVP scope (must-have)
1. **Quote management** — register quotes by supplier, split into items
   assigned to rooms; keep versions; compare side by side; flag missing items
   against a reference checklist; compare unit prices against reference prices.
2. **Financial control** — budget per room and per category; approved quotes
   become commitments; record payments; paid vs. budgeted vs. committed.
3. **Work schedule** — stages/tasks per room with dates and status; overall
   and per-room progress.

## Nice-to-have (later)
- Extract measurements (areas, perimeters) from the project to compute material quantities.
- Import quotes from PDF/photo automatically.
- Photos and documents per room.
- Architecture office ERP (clients, proposals, hours, billing).

## Out of scope for MVP
Multi-company use, external user logins, invoicing, mobile native app.

## Success criteria (3 months)
- All rooms registered with a budgeted cost; total reconciles with R$ 500k.
- Every received quote is in the system, with versions, and comparable.
- Every payment recorded; dashboard shows paid vs. budgeted per room.
- Schedule shows progress per room and overall.
- Paper is no longer the source of truth.
