# ADR-0003 — Organization → Project model from day one
Status: accepted (03/11/2026) · Date: 02/11/2026
## Context
Renovation now; architecture office ERP later.
## Decision
Every record belongs to a Project, and every Project to an Organization. Access is enforced per Organization with database row-level security.
## Consequences
Slightly more setup now; no rewrite when clients and new projects arrive.
