# Speaker Shot Composition

Each speaker's own frame should stay well composed — steady headroom, centered, and at a flattering distance — so a long static-camera recording looks intentionally shot instead of like a raw webcam grid.

## User Goal

A creator should be able to give every speaker a clean, consistent shot and keep it that way as the speaker moves, leans, or shifts over an hour-plus episode, without crop-keyframing each frame by hand.

## What Composition Owns

Shot composition is about how one speaker sits inside their own tile, before any overlay or speaker-switch decision:

- how much headroom sits above the speaker
- whether the face is centered or set with intentional looking room
- how close the shot reads — close-up, medium, or wide
- whether the composition holds steady as the speaker drifts during a long take

It does not decide which speaker is featured, whether an overlay covers a face, or where layers stack — those stay with the specs in Connections.

## Composition Choices

Offer preset-aware, plain-language framing for each speaker:

- a default closeness that matches the chosen preset (tighter for punchy, looser for calm)
- headroom that keeps the face comfortably placed rather than floating or cramped
- gentle re-centering when a speaker drifts off-center for a long stretch
- a steadier hold so small movements do not make the frame feel restless
- an option to keep the original framing when the raw shot already reads well

Each choice should preview on a real moment where the speaker is actually moving, not a single still, so the creator sees how steady the composition stays.

## Drift Handling

On a static camera, a speaker rarely stays put for an hour. Composition should adapt calmly:

- when a speaker leans out of frame for a sustained stretch, ease the framing to keep them composed, then settle back
- avoid chasing every small gesture, which makes the shot feel like it is breathing
- treat a brief reach or lean as motion to ride out, not a reason to reframe
- flag a stretch where the speaker leaves the frame entirely as a source issue rather than a composition choice

Adapting should reuse the speaker's chosen closeness and headroom rather than inventing a new look mid-episode.

## Preview Contexts

A composition that looks right in one second can fail across a moving stretch, so check it the way a viewer will:

- a still where the speaker is centered and calm
- a stretch where the speaker leans, gestures, or shifts
- the shot under the chosen preset with captions and lower-thirds present
- the same speaker beside another in a shared frame, so closeness reads consistently

Keep the preset framing visible so composition is judged on the finished look, not a bare crop.

Avoid exposing crop keyframes, tracking boxes, or motion-stabilization readouts in these previews.

## Review States

Shot composition should surface as a quiet badge on a speaker's stretches, never as a blocking banner:

- **composed** — the speaker's framing matches the chosen preset for this stretch; no action needed
- **needs review** — sustained drift, heavy headroom, or an off-center hold makes the shot feel raw
- **adjusted** — the creator changed closeness, headroom, or steadiness; reopen preview at the affected stretch
- **accepted as is** — the creator kept the original framing on purpose, and the badge clears for this episode

Each state should say what happens in preview and template reuse, not only label the stretch. These states should appear in `docs/long-form-navigation.md` lanes and in `docs/export-readiness-review.md` Speaker Framing Warnings only when the composition would be noticeable in the finished episode.

## Connections

Shot composition should hand off everything it does not own:

- speaker buckets and roles come from `docs/speaker-role-mapping.md` (Core Roles)
- which speaker is featured and how the layout reframes on a speaker change stays in `docs/speaker-switch-framing.md` (Switch Styles)
- whether a caption, lower-third, or overlay covers the speaker stays in `docs/speaker-framing-safety.md` (Checks); composition sets how the speaker sits in their own frame, occlusion checks whether something hides it
- manual, fixed cropping in the editor stays in `docs/canvas-layer-controls.md` (Direct Manipulation); composition is the preset-driven, drift-aware default the canvas can still override
- color and brightness coherence stays in `docs/speaker-visual-match.md` (Match Signals)
- a speaker who leaves frame entirely routes to `docs/source-media-health.md` (Health Checks) as a source issue
- preset closeness comes from `docs/preset-style-picker.md` (Controls) and chosen composition carries forward through `docs/show-template-adaptation.md` (Template Contents) for recurring setups

## Maintainer Acceptance Notes

Accept work that gives each speaker a clean, preset-aware shot and keeps it steady through drift across long-form episodes, using plain-language closeness and headroom choices. Close work that exposes crop keyframes or tracking math to creators, chases every small movement, duplicates occlusion checks or featured-speaker reframing, or overrides confirmed manual canvas crops.
