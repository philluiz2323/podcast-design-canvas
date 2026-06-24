"use strict";

// Guards the unified preview app's default route (#581 / #583): an empty or unknown
// URL hash falls back to the first workflow screen, so the shell never opens a blank
// or arbitrary frame. Complements app.test.js (routing/coverage/stepping) by pinning
// the fallback behavior. Run with: `node preview/app-default-route.test.js`

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(__dirname, "app.html"), "utf8");

// An unknown or empty hash resolves to the default screen, never an arbitrary URL.
assert.ok(
  app.includes("KNOWN.has(hash) ? hash : firstScreen"),
  "unknown/empty hash falls back to the default screen instead of an arbitrary URL",
);
// The default is defined as the first screen of the first workflow stage.
assert.ok(
  app.includes("const firstScreen = STAGES[0][1][0]"),
  "the default screen is the first screen of the first workflow stage",
);

// That default screen is a real prototype the frame can actually load.
const block = app.match(/const STAGES = \[([\s\S]*?)\];/);
assert.ok(block, "app declares its workflow stages");
const firstScreen = (block[1].match(/"([a-z0-9-]+)"/) || [])[1];
assert.ok(firstScreen, "the first workflow screen is named");
assert.ok(
  fs.existsSync(path.join(root, "prototype", firstScreen + ".html")),
  "default screen " + firstScreen + ".html exists as a prototype",
);

console.log("preview app default route: empty/unknown hash falls back to " + firstScreen);
