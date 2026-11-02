# 02 — Requirements (MVP)

Status: **approved by owner (02/11/2026)**
Based on: `01-vision.md`, `reference/project-baseline.md`

## Glossary
- **Project**: one renovation/job (first: Apto Viveiro). Future ERP client job.
- **Room**: a space of the project (Cozinha, Suíte 1...). Plus "Geral".
- **Category**: type of work (Elétrica, Marcenaria...).
- **Package**: a scope bought from one supplier (Obra civil, Marcenaria,
  Ar-condicionado...). Quotes in the **same package compete**; different
  packages **add up**.
- **Supplier**: company or professional quoting/doing work.
- **Quote**: a supplier's price proposal. Has **versions** (v1, v2...).
- **Quote line**: one priced item of a quote; can be a fixed value or a min–max
  range, can be *included* or *excluded*, belongs to a category and is
  allocated to one or more rooms.
- **Budget**: planned amount per room and category; total R$ 500k.
- **Commitment**: an approved quote version (what we owe).
- **Payment**: money actually paid against a commitment.
- **Stage/Task**: schedule item with dates, status and % done.

## Epic A — Project setup
- **A1** As owner, I register the project with total budget, so everything is measured against it.
  - Given a new project "Apto Viveiro" with R$ 500.000, then dashboard shows it as the target.
- **A2** As owner, I register rooms (with optional area m²) and aliases.
  - Rooms from `project-baseline.md` are pre-loaded; I can edit/add.
  - An alias ("Banho Conjugado") maps to one or more rooms.
- **A3** Categories are pre-loaded (list in baseline) and editable.
- **A4** Packages are pre-loaded (list in baseline) and editable; each package
  groups one or more categories.

## Epic B — Quote management (Gestão de Orçamentos)
- **B1** Register a supplier (name, contact, category, notes).
- **B2** Register a quote for a **package**: supplier, date, version, validity, payment terms,
  tax rule (e.g. "+12% com NF"), execution time, attached PDF.
- **B3** Add quote lines: description, category, fixed value **or** min–max,
  included/excluded, labor-only flag, room allocation (one room, several rooms
  with % split, or Geral).
  - A line marked EXCLUDED has no value and is listed as a gap.
- **B4** New version of a quote: copy v1 to v2, edit, and see differences
  (lines added/removed/changed, total delta).
  - Only one version per quote can be "current".
- **B5** Compare competing quotes **of the same package** side by side (by category or room):
  totals, per-line values, included vs. excluded, terms, with/without tax.
- **B6** Completeness check: for each room × category in the project scope,
  show whether it is covered by a current quote, excluded, or missing.
  - Example: Ar-condicionado shows "missing" until a quote covers it.
- **B7** Price sanity: when a line has a quantity and unit (m², m, un), show the
  unit price and compare with other quotes and with a reference price.
  Reference prices come from public tables imported by the system (SINAPI
  São Paulo — Caixa/IBGE, monthly; CUB/m² — Sinduscon-SP) plus prices the
  owner enters manually; the source and date of each reference are shown.
  Flag lines > X% above the reference (X configurable, default 20%).
- **B8** Approve a quote version → it becomes a commitment (value, terms,
  rooms/categories). Rejected/declined quotes stay archived.

## Epic C — Financial control (Controle Financeiro)
- **C1** Set budget per package, room and category; totals must reconcile with
  the project budget (show unallocated amount).
- **C1a** Suggested budget: the system proposes a split of R$ 500k per package
  and room, based on received quotes, reference prices and typical shares of
  a high-end apartment renovation. The owner can accept, edit, or reset it.
  When quotes already exceed the budget, the suggestion shows where to cut.
- **C2** Dashboard per room: budgeted, quoted (min/max), committed, paid,
  remaining, and % over/under.
  - Example: Cozinha budget R$ X vs. Todeschini range R$ 150–180k.
- **C3** Overall forecast = sum over packages of (committed value, else chosen
  current quote, else manual estimate) vs. R$ 500k, with over/under indicator
  and a list of packages still without any quote.
- **C4** Payment schedule from terms (e.g. 20% + 5×), editable.
- **C5** Record payment: date, amount, commitment, method, receipt file.
  Paid cannot exceed committed without explicit confirmation.
- **C6** Upcoming payments list (next 30/60/90 days).

## Epic D — Work schedule (Cronograma da Obra)
- **D1** Create stages/tasks per room and category with planned start/end,
  responsible supplier, dependency (optional).
- **D2** Update status (not started / in progress / blocked / done) and % done.
- **D3** Progress: overall and per room, weighted by budget value.
- **D4** Timeline view (simple Gantt/list by week) readable on phone.

## Epic E — Access and usability
- **E1** Login for owner and family (2–4 users), same data. All family members
  can edit. Roles: owner (also manages users and deletes projects) and editor.
  Every change records who and when (audit trail).
- **E2** UI in pt-BR, R$ format `R$ 1.234,56`, dates DD/MM/AAAA, works on phone.
- **E3** Export dashboard and comparisons to PDF/Excel.
- **E4** Data backed up daily.

## Later (not MVP)
- Measurement take-off from plans/DWG (areas, perimeters → quantities).
- Auto-import of quotes from PDF using AI.
- Joinery schedule (MC01–MC27) linked to joinery quote lines.
- Photos per room; diary of works.
- Office ERP: clients, proposals, timesheets, billing.

## Non-functional
- Cost: free or low-cost hosting (< R$ 100/month).
- Privacy: data visible only to logged-in users.
- Every money value stored in cents (integer) to avoid rounding errors.

## Decisions (owner, 02/11/2026)
1. Pre-load the two received quotes as initial data: **yes**.
2. Family members: **can edit**.
3. Per-room budget: **system suggests** (C1a).
4. Reference prices: **system researches** (SINAPI/CUB, B7).
