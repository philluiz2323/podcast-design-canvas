# Preset Comparison Preview

Preset selection should help creators compare polished episode directions before they commit to a design path.

## User Goal

A creator should be able to preview multiple presets against the same real episode moment and choose the one that best fits the show.

## Comparison Mode

Comparison should support:

- two to four presets side by side
- the same timestamp across all previews
- current speaker names and roles
- current brand kit where available
- caption and lower-third examples
- b-roll or title moment examples when relevant

The product should not compare presets with generic placeholder content once real episode media exists.

## Decision Signals

Each preset should communicate:

- best-fit show format
- pacing feel
- speaker count support
- caption style
- branding strength
- b-roll intensity
- template reuse fit

This should help creators make a taste decision quickly without opening a blank canvas.

## Preview Controls

Creators should be able to:

- switch the preview moment
- compare calm and energetic pacing
- toggle brand kit preview
- inspect mobile or wide layout framing
- apply a preset to the full episode
- save a preset plus adjustments as a template

## Signal Source Mapping

Each decision signal should be drawn from the spec that already owns that part of the episode, so comparison stays grounded in the current episode rather than becoming a separate settings table. The preview surfaces these signals; it does not redefine them.

| Decision signal | Spec that owns the signal | Relevant section |
| --- | --- | --- |
| best-fit show format | `docs/preset-style-picker.md` | Preset Cards |
| pacing feel | `docs/preset-pacing-controls.md` | Pacing Options, Effects |
| speaker count support | `docs/speaker-role-mapping.md` | Core Roles, Layout Effects |
| caption style | `docs/audio-caption-quality-review.md` | Caption Style Presets |
| branding strength | `docs/show-brand-kit-setup.md` | Brand Inputs, Guardrails |
| b-roll intensity | `docs/contextual-broll-moments.md` | Visual Types, Quality Rules |
| template reuse fit | `docs/show-template-adaptation.md` | Template Contents, Adaptation Flow |

Signals should reflect the real episode's speakers, brand kit, and media wherever available. Comparison should never fall back to generic placeholder values for these signals once episode media exists.

## Maintainer Acceptance Notes

Accept work that makes preset choice visual, comparative, and grounded in the current episode. Close work that turns preset selection into a settings table or uses generic mock previews after episode media is available.
