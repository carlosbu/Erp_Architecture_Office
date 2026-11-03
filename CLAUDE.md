# CLAUDE.md — Project rules

## What this is
A phone-friendly web app that starts as a **renovation manager** for the owner's
apartment (Reforma Apartamento) and later grows into an **ERP for an
architecture office**. The renovation is treated as the first "client project".

## Users
- Phase 1: the owner + family/partner (a few trusted users sharing the same data).
- Later: office staff, clients, suppliers.

## Language
- Docs, code, commits, comments: **English**.
- User interface text: **Portuguese (pt-BR)**. Currency BRL (R$), dates DD/MM/AAAA.

## How we work (spec-first AI-SDLC)
Each phase ends with a doc the owner approves before the next starts:
1. Discover → `docs/01-vision.md`
2. Specify → `docs/02-requirements.md` (user stories + acceptance criteria)
3. Design → `docs/03-architecture.md` + ADRs in `docs/adr/`
4. Plan → `docs/04-plan.md` (small ordered tasks)
5. Build & test → one task per change, with tests
6. Release → deploy, review, choose next increment

## Rules for Claude
- Stack: Next.js 16 (uses `src/proxy.ts`, not middleware), Supabase, Vercel. Read `node_modules/next/dist/docs/` before using Next APIs.
- Checks before commit: `npm run lint && npm run typecheck && npm test && npm run build`.
- Never skip a phase or build features not in an approved spec.
- Explain choices in plain language; the owner is building their first system.
- Keep changes small; run tests before committing.
- Record significant technical decisions as ADRs (`docs/adr/NNNN-title.md`).
- Design data so a renovation is one `Project` among many (future ERP).
