# Rank Lab Agent Instructions

## Boundary

This repository is experimental and non-production. Do not modify or deploy `hcihytech.com` production from this repo unless the user explicitly authorizes a production move.

## Scrollcraft attribution

Before using or adapting Scrollcraft, read:

- `NOTICE.md`
- `PROVENANCE.md`
- `docs/INTEGRITY_POLICY.md`
- `provenance/upstream-lock.json`

Nate Herk is the upstream author. Never present Scrollcraft, its named examples, or copied/adapted code as original Rank Lab work.

## Integrity gate

Run `node scripts/integrity-check.mjs` before a demo, release, Website Launches submission, or public comparison.

Any material adaptation from upstream must be added to `provenance/borrowed-elements.json`.

## Codex execution behavior

- Inspect the target framework before editing.
- Preserve the application's framework unless replacement is explicitly required.
- Prefer semantic HTML and accessible interaction states.
- Verify desktop, mobile, and reduced-motion behavior.
- Do not invent metrics, testimonials, case-study outcomes, or credentials.
