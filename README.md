# HCiHY Rank Lab

Experimental, non-production website laboratory for HCiHY Tech.

## Purpose

Rank Lab exists to test interaction, scrollytelling, information architecture, launch quality, and originality patterns aimed at improving HCiHY's competitiveness on Website Launches. It is intentionally isolated from the production `hcihytech.com` application.

Current experimental deployment: https://chatgpt-44j1g046.webondemand.com/

## Scrollcraft upstream

This repository may adapt concepts and code from **Scrollcraft**, created by **Nate Herk**:

- Upstream: https://github.com/nateherkai/scroll-craft
- Upstream author: Nate Herk
- License: MIT
- Pinned upstream commit: `e95798551874854cef6dd3996ec7de1364a82bbd`

Scrollcraft's methodology, engine, scripts, references, and named examples remain Nate Herk's upstream work unless a file is explicitly marked as Rank Lab-original. See `NOTICE.md`, `THIRD_PARTY_LICENSES/SCROLLCRAFT-MIT.txt`, and `PROVENANCE.md`.

## Integrity rule

We do not present upstream examples, screenshots, interactions, copy, layouts, or implementation details as original Rank Lab work. Any adapted element must be recorded in `provenance/borrowed-elements.json` with its upstream path/commit and what changed.

Run:

```text
node scripts/integrity-check.mjs
```

before any release, demo, submission, or public comparison.

## Repository layout

- `site/` — Rank Lab site source
- `.agents/skills/scrollcraft-codex/` — Codex-facing adapter/instructions
- `scrollcraft/` — Rank Lab workspace and fingerprint registry
- `provenance/` — upstream/example/borrowed-element records
- `docs/` — scope, integrity policy, architecture notes
- `scripts/` — verification gates

## Production boundary

Nothing in this repository is production-approved by default. Moving code or design decisions into `hcihytech.com` requires an explicit production decision.
