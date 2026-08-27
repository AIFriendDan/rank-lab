---
name: scrollcraft-codex
description: >
  Codex-facing adaptation layer for designing, building, and verifying premium
  scroll-driven interactive websites using the methodology and optional engine
  from Nate Herk's MIT-licensed Scrollcraft project. Use for scrollytelling,
  scroll-scrub video, pinned scenes, interactive landing pages, and distinctive
  web experiences that must avoid template-like repetition.
license: MIT (upstream Scrollcraft portions); Rank Lab additions remain project work.
compatibility: Requires Node 18+. Full ffmpeg, Chrome/Chromium, and playwright-core are required for the complete verification pipeline. Optional asset generation may require third-party credentials.
metadata:
  upstream-author: Nate Herk
  upstream-repository: https://github.com/nateherkai/scroll-craft
  upstream-commit: e95798551874854cef6dd3996ec7de1364a82bbd
---

# Scrollcraft for Codex

This skill is an adaptation layer, not a claim of authorship over Scrollcraft.
Read `NOTICE.md`, `PROVENANCE.md`, `docs/INTEGRITY_POLICY.md`, and
`provenance/upstream-lock.json` before using upstream materials.

## Core method to preserve

1. Interview the human before generating or implementing unless the run is explicitly autonomous.
2. Write the journey and feeling curve before selecting interaction devices.
3. Pick a page grammar deliberately rather than defaulting to the prior build's structure.
4. Create one bespoke signature move for the specific site.
5. Use multiple device families; do not repeat the same device family back-to-back.
6. Engineer one peak, with quieter setup immediately before it.
7. Use semantic HTML, real text, real links, and accessible reading order.
8. Verify across scroll positions, desktop, mobile, and reduced motion.
9. Run `node scripts/integrity-check.mjs` before public release or comparison.

## Codex execution contract

- Inspect the existing target framework and build commands before editing.
- Preserve the application's framework unless replacement is explicitly required.
- Do not convert React/Next.js to static HTML merely because upstream examples use HTML.
- Keep any upstream engine mechanism separate from project-specific composition and bespoke behavior.
- Prefer cross-platform Node scripts over Bash-only wrappers when adapting tooling.
- Run existing tests before and after integration where available.
- Use Playwright verification against the actual application rather than an isolated mock.
- Do not deploy without explicit authorization.
- Do not invent metrics, testimonials, outcomes, awards, or credentials.

## Interview behavior

Ask directly in the conversation. Do not assume Claude-specific tools such as `AskUserQuestion` exist.
Capture the user's answers in a project brief before act planning.

If the human is genuinely unavailable and the run is autonomous, clearly mark the brief as self-authored.

## Attribution and provenance

Any material use of upstream code, wording, layout, interaction choreography, reference asset, or example-derived implementation must be entered in `provenance/borrowed-elements.json` with:

- upstream path or example name
- pinned upstream commit
- what was borrowed
- what Rank Lab changed
- affected local files

Named upstream examples such as Orrery, PERKFORM, and Fallowbank remain upstream examples and must never be presented as Rank Lab-original work.

## Rank Lab experiment direction

The current original concept is **Bring Me the Mess**: a business/technology problem decomposes through scroll from symptom → friction → root cause → system → outcome.

The intended tell-someone sentence is:

> It's the site where the tech mess untangles itself while you scroll.

Treat that concept as Rank Lab direction. If implementation later borrows a specific Scrollcraft device or code path, record that borrowing before release.
