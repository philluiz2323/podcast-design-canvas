"use strict";

// Guards the speaker-setup -> layout-first placement entry point (#1026 / #583): the
// eye-line coherence step, where each speaker's on-screen placement is decided, offers a
// "Place videos in layout" link back to the layout-first start — like the ingest and style
// steps already do. Kept in its own file so it does not collide with the frequently-edited
// speaker-setup-nav.test.js. Run with: `node preview/speaker-setup-layout-placement.test.js`

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const navScript = fs.readFileSync(path.join(__dirname, "speaker-setup-nav.js"), "utf8");

assert.ok(
  navScript.includes('LAYOUT_FIRST_PLACEMENT_STEP = "speaker-eye-line-coherence"'),
  "the placement link is offered on the eye-line coherence step, where speaker placement is decided",
);
assert.ok(
  navScript.includes('id: "speaker-eye-line-coherence"'),
  "eye-line coherence is a real speaker-setup step",
);
assert.ok(
  navScript.includes('LAYOUT_FIRST_PLACEMENT_FILE = "layout-first.html"'),
  "the placement link targets the layout-first start",
);
assert.ok(
  navScript.includes('"Place videos in layout"'),
  "the entry point uses the same creator-facing label as the ingest and style steps",
);
assert.ok(
  navScript.includes("function layoutFirstPlacementSearch"),
  "the placement href is built with URLSearchParams so shell path context is preserved",
);
assert.ok(
  navScript.includes("shouldOfferLayoutPlacement(step)"),
  "the placement link is gated to its step, not rendered on every speaker-setup screen",
);
assert.ok(
  navScript.includes('params.set("from", "speaker-setup")'),
  "the placement link carries the speaker-setup origin",
);

assert.ok(
  fs.existsSync(path.join(__dirname, "layout-first.html")),
  "the layout-first placement screen exists as a real target",
);

// The label and gating appear together, so the link is wired through the gate (not loose copy).
const renderSlice = navScript.slice(navScript.indexOf("shouldOfferLayoutPlacement(step)"));
assert.ok(
  renderSlice.includes('"Place videos in layout"'),
  "the gated branch is what renders the placement link",
);

console.log("speaker-setup nav: eye-line coherence offers a layout-first 'Place videos in layout' entry point");
