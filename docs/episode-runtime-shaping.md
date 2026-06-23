# Episode Runtime Shaping

A finished long-form episode has a runtime, and creators often want to bring a sprawling recording closer to a target length without hunting blindly through a timeline. The product should give a calm overview of where length lives.

## User Goal

A creator should be able to see how long the finished episode runs, understand which stretches contribute most to the length, and decide where to tighten, all without editing a raw timeline or losing the conversation's natural feel.

## Runtime Overview

Show runtime as a creator-facing summary, not a technical timeline:

- the current finished runtime, including intro, outro, and placed elements
- an optional target length the creator sets for the show or this episode
- length grouped by chapter or segment so long stretches are easy to spot
- a plain-language read on how far the episode is from any target

The overview is a starting point for decisions; it never trims anything on its own.

## Where Length Can Come Down

Surface honest, low-risk opportunities to shorten, always handed to the surface that owns the actual edit:

- long pauses or dead air already flagged for cleanup
- a segment running much longer than its usual length in the template
- repeated or restated points the creator may want to tighten
- an optional intro or outro that could be shortened for this episode

Each opportunity explains the viewer-facing tradeoff so the creator chooses deliberately, rather than auto-cutting to hit a number.

## Protecting The Conversation

Runtime shaping must not flatten the episode to chase a target. Teaching pauses, emotional beats, and natural back-and-forth stay unless the creator decides otherwise, and a target length is guidance, never a hard cap that blocks export.

## Review States

Runtime status should describe the episode's length picture in plain terms, surfaced as a quiet readiness signal rather than a blocking gate:

- **no target** — show the current runtime without comparing it to a goal
- **within target** — the finished runtime fits the creator's chosen length
- **over target** — the episode runs longer than the goal; show grouped opportunities to tighten without forcing any cut
- **trimming in progress** — the creator is acting on opportunities, each handled by the surface that owns that edit
- **target set aside** — the creator chose to keep the current length and stop comparing against the goal for this episode

Each state should describe what the creator sees and which editing surface a tightening action opens, never blocking export on whether a target was met.

## Creator Controls

Keep runtime shaping a single overview-and-decide step:

- set or clear a target length for this episode or the show
- see runtime grouped by chapter or segment
- open a tightening opportunity on the surface that owns it — pauses, segments, or intro and outro
- accept the current runtime and set the target aside
- save a default target length to the show template

Avoid exposing per-cut duration handles, frame-level trimming, or auto-trim-to-length as the default path.

## Connections

Runtime shaping reads structure the workspace already owns and hands every concrete change back to its owner: chapter and segment lengths come from `docs/episode-chapter-markers.md` and `docs/show-segment-system.md`; pause and dead-air trims route to `docs/pause-crosstalk-cleanup.md` (Detected Moments, Cleanup Actions); intro and outro shortening routes to `docs/intro-outro-builder.md` (Framing Approach); overall rhythm and energy stay owned by `docs/preset-pacing-controls.md`. A saved target length carries forward through `docs/show-template-adaptation.md`.

## Maintainer Acceptance Notes

Accept work that gives creators a calm read on long-form runtime and where they might tighten it. Close work that auto-cuts to hit a length, becomes a second editor for pauses or segments, duplicates pacing's energy controls, blocks export on a runtime target, or optimizes for short-clip length instead of hour-plus episodes.
