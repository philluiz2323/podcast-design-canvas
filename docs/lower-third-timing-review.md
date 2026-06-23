# Lower-Third Timing Review

Lower-thirds should appear when they help a viewer place a speaker and clear away once that job is done, instead of staying on screen the whole episode or never showing at all.

## User Goal

A creator should be able to control when each speaker's name lower-third appears and how long it holds across a long-form episode, so viewers always know who is talking without a name bar lingering over an hour of conversation.

## Relationship To Lower-Third Style And Placement

Timing is a distinct concern from how a lower-third looks, where it sits, or what it says. Each of those stays with the spec that already owns it:

- lower-third look and brand emphasis from `docs/show-brand-kit-setup.md` Brand Inputs
- name, title, and handle content from `docs/social-context-intake.md` and `docs/guest-profile-reuse.md`
- safe placement and overlap with captions from `docs/layout-safe-areas.md` Checks
- the lower-third layer on the canvas from `docs/canvas-layer-controls.md` Core Layers
- readability of the bar itself from `docs/accessibility-readability-checks.md` Checks

This spec owns only the when and how-long: the on-screen entrance, hold, and exit of a name lower-third, tied to the speaker who owns it.

## When A Lower-Third Should Appear

Suggest a lower-third at the moments a viewer actually needs the name, drawn from speaker buckets and episode structure:

- the first time a speaker talks in the episode
- when a guest returns after a long stretch off screen or off mic
- at the start of a new segment where a viewer may have just joined
- when the layout reframes to feature a speaker who was not previously named
- a creator-pinned moment where the name should be reinforced

Avoid re-showing the same name every time a speaker takes a turn; a long conversation should not blink name bars on every exchange.

## Hold And Exit

A lower-third should stay long enough to read and then step back so it does not compete with the conversation:

- hold for a comfortable reading time, then ease out on its own
- keep it longer for an unfamiliar guest, shorter for a returning host
- let a creator pin a lower-third to stay for a full segment when the show wants persistent names
- never leave a name bar covering a speaker's face for the rest of the episode

Entrance and exit feel should follow the chosen preset rather than a separate animation editor; pacing intensity from `docs/preset-pacing-controls.md` can make appearances more or less frequent without becoming a second timing surface.

## Review States

Use simple, creator-facing states that surface as a quiet note on the affected moment, not a blocking queue:

- suggested — the product proposes a lower-third at this moment with plain-language context, such as "Guest's first time speaking"
- timed — the appearance and hold are set for this moment
- pinned for segment — the creator chose to keep the name visible for a whole segment on purpose
- held natural — the creator accepted the preset's default timing after review
- skipped — no lower-third here, kept out of export without clearing unrelated caption, framing, or metadata warnings

Each state should describe what a viewer sees on screen and when the bar clears, not only the label on the moment.

## Creator Controls

Offer simple actions:

- accept, move, or remove a suggested appearance
- lengthen or shorten how long a name holds with named steps
- pin a name to stay for a segment, or limit it to a single appearance
- preview the appearance on the real episode moment, including the seconds before and after
- save preferred timing behavior to the show template through `docs/show-template-adaptation.md`

Avoid exposing keyframe timelines, easing curves, or per-frame animation editing in the default path.

## Maintainer Acceptance Notes

Accept work that helps creators decide when speaker name bars appear and how long they hold across hour-plus episodes, as preset-aware creator choices reviewed on real moments. Close work that duplicates lower-third style, placement, or naming owned elsewhere, exposes animation internals, or leaves name bars persistently covering speakers for the whole episode.
