# On-Screen Correction Note

In a long unscripted conversation, a host or guest will sometimes state something that is wrong or unclear — a mixed-up date, a misremembered figure, a misattributed quote — that the creator cannot or does not want to re-record. An on-screen correction note lets the creator add a brief, tasteful clarification anchored to that moment, so the finished episode stays trustworthy without rewriting the conversation.

## User Goal

A creator should be able to mark a spoken moment that needs a correction or clarification, write a short plain-language note, and have it appear as a calm on-screen beat at that moment — clearly an editorial correction, not part of the conversation — without doing motion-graphics work.

## When A Correction Note Fits

A correction note is editorial, reserved for moments where the spoken content is misleading if left alone:

- a wrong date, name, figure, or statistic the speaker stated as fact
- a misattributed quote, study, or source
- an outdated claim that needs a "since recording, this changed" clarification
- a quick clarification where a re-record is not practical

It is not a structural beat: topic intros, guest names, and quotable callouts stay with title cards. It is not a spelling fix: repeated-term spellings stay with the glossary. A correction note exists because the content was wrong, and it should read as the creator speaking to the viewer, not as the show's branding.

## Writing The Note

A correction note should stay short, neutral, and accurate:

- name what was said and what the correct information is, in plain language
- keep a calm, factual tone rather than calling out the speaker
- stay anchored to the moment the misstatement occurred, with a small lead so the viewer has context
- favor brevity — a correction is a clarification, not a footnote essay

The product should suggest pulling the relevant figure or name from confirmed context where it exists, but the creator always confirms the wording before it appears.

## Creator Controls

Keep a correction note a quick mark-write-preview step:

- mark a moment as needing a correction
- write or edit the correction text
- preview it on the real episode moment as it will read to a viewer
- choose how prominent it is — subtle lower note or a held clarification beat
- keep, adjust, or remove the note for this episode

Avoid exposing keyframe editors, motion curves, or compositing tools; the correction reuses the card styling the show already has.

## Review States

Correction status should describe where an editorial note stands, surfaced as a quiet per-moment signal that does not trivially block export:

- **needed** — the creator flagged a misstatement but has not written the note yet
- **drafted** — note text exists and is previewing against the moment, not yet confirmed
- **placed** — the correction is confirmed and appears in the finished episode at that moment
- **dismissed** — the creator decided no on-screen note is needed and the moment is left as spoken

Each state should describe what the viewer would see at the moment, not just the label. A still-needed correction should stay a calm reminder in review; it should not silently disappear, but it also should not block export on its own.

## Connections

A correction note owns the editorial decision and hands rendering to the surfaces that already style the episode: the visual beat is drawn and paced through `docs/contextual-title-cards.md` (Creator Controls, Pacing Rules) using the show's existing card style, so corrections inherit consistent styling instead of a separate card editor; the moment is found and anchored through `docs/transcript-search-navigation.md` and stays scannable in `docs/long-form-navigation.md`; confirmed facts and links can come from `docs/social-context-intake.md`; and a placed correction surfaces in `docs/export-readiness-review.md` only when an unresolved needed correction would ship. Spelling normalization stays with `docs/transcript-glossary.md`, speaker attribution stays with `docs/speaker-attribution-review.md`, and off-screen description text stays with `docs/episode-metadata-publishing.md` and `docs/show-notes-assembly.md`.

## Maintainer Acceptance Notes

Accept work that lets creators add brief, tasteful on-screen corrections for misstatements in long-form episodes while keeping the conversation intact. Close work that duplicates the title-card editor, turns corrections into a heavy annotation layer, exposes motion-graphics tooling, scolds speakers rather than informing viewers, or blocks export on an unwritten correction.
