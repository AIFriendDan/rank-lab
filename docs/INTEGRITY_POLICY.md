# Rank Lab Integrity Policy

Rank Lab may study and adapt open-source work, including Nate Herk's Scrollcraft, but it must preserve authorship and provenance with unusual clarity.

## Non-negotiable rules

1. Keep Nate Herk's MIT copyright and permission notice with any copied or substantial Scrollcraft portions.
2. Keep the upstream repository URL and pinned source commit visible in repository provenance.
3. Never present Scrollcraft, its engine, scripts, methodology, screenshots, named examples, or copied/adapted implementation as original Rank Lab work.
4. Orrery, PERKFORM, and Fallowbank are upstream examples and may only be cited as references.
5. Record material borrowing in `provenance/borrowed-elements.json` before demo, release, Website Launches submission, or public comparison.
6. A concept independently developed in Rank Lab may be called Rank Lab-original only until implementation borrows a specific upstream code path, choreography, wording, layout, or asset.
7. If provenance is uncertain, classify the element as borrowed or unresolved rather than original.

## Integrity gate

Run:

```text
node scripts/integrity-check.mjs
```

The gate checks required attribution, upstream lock data, license preservation, example markers, and borrowed-element records.

Passing the automated gate does not prove creative independence. It proves the repository still carries the required disclosures. Human review remains required for borderline similarities.
