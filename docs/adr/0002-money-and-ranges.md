# ADR-0002 — Money stored as integer cents; estimates as min/max
Status: accepted (03/11/2026) · Date: 02/11/2026
## Context
Quotes have exact values and ranges (Todeschini R$ 150–180k); taxes like +12% NF.
## Decision
All amounts are integers in cents (BRL). Each value has `min_cents` and `max_cents` (equal when exact). Taxes are stored as a rate on the quote version and applied in calculations, never baked into line values.
## Consequences
No rounding errors; dashboards can show best/worst case.
