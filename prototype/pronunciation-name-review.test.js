"use strict";

// Dependency-free verification for the pronunciation and name review prototype.
// Run with: `node prototype/pronunciation-name-review.test.js` (Node built-ins only).
//
// The page script guards its DOM work behind `typeof document !== "undefined"`, so the
// test loads it with no document and exercises the exported pure logic: which spoken
// names still need a pronunciation pass, that the summary counts honestly, and that
// "ready for publish" only turns true once the flagged spoken names are confirmed.

const fs = require("fs");
const vm = require("vm");
const path = require("path");
const assert = require("assert");

function load() {
  const html = fs.readFileSync(path.join(__dirname, "pronunciation-name-review.html"), "utf8");
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const sandbox = { module: { exports: {} } };
  vm.createContext(sandbox);
  vm.runInContext(script, sandbox);
  return sandbox.module.exports;
}

const {
  episode,
  INITIAL_ENTRIES,
  statusLabel,
  needsPronunciationReview,
  entrySummary,
  isReadyForPublish,
  updateEntryStatus,
  updateEntryGuide,
} = load();

// The sample episode is grounded in a real show, host, and guests.
assert.equal(episode.host, "Maya", "sample episode names its host");
assert.ok(episode.guests.length >= 2, "sample episode has multiple guests to pronounce");

// Every status from the spec maps to a readable label, and unknown values pass through.
for (const status of ["confirmed", "suggested", "needs-review", "guest-preferred", "not-spoken"]) {
  assert.equal(typeof statusLabel(status), "string", `label for ${status}`);
  assert.notEqual(statusLabel(status), "", `non-empty label for ${status}`);
}
assert.equal(statusLabel("made-up"), "made-up", "unknown status falls back to its raw value");

// A spoken name only needs review while it is suggested or needs-review; confirmed,
// guest-preferred, and not-spoken names are settled.
const byId = (id) => INITIAL_ENTRIES.find((entry) => entry.id === id);
assert.ok(needsPronunciationReview(byId("dev-anand")), "a spoken suggested name needs review");
assert.ok(needsPronunciationReview(byId("turborepo")), "a spoken needs-review term needs review");
assert.ok(!needsPronunciationReview(byId("priya-chakraborty")), "a guest-preferred name is settled");
assert.ok(!needsPronunciationReview(byId("vercel")), "a confirmed name is settled");
assert.ok(!needsPronunciationReview(byId("supabase")), "a name not spoken in the episode needs no spoken review");

// The summary counts confirmed (confirmed + guest-preferred), open reviews, and total honestly.
const summary = entrySummary(INITIAL_ENTRIES);
assert.equal(summary.total, INITIAL_ENTRIES.length, "summary totals every entry");
assert.equal(summary.confirmed, 2, "confirmed counts confirmed and guest-preferred names");
assert.equal(summary.needsReview, 2, "two spoken names still need a pronunciation pass");

// Publish readiness is honest: not ready while spoken names remain suggested or needs-review.
assert.ok(!isReadyForPublish(INITIAL_ENTRIES), "not ready while spoken names are unconfirmed");

// Confirming the two flagged spoken names clears the pass without touching settled names.
let entries = updateEntryStatus(INITIAL_ENTRIES, "dev-anand", "confirmed");
entries = updateEntryStatus(entries, "turborepo", "guest-preferred");
assert.ok(isReadyForPublish(entries), "ready once the flagged spoken names are confirmed");
assert.equal(entrySummary(entries).needsReview, 0, "no open reviews after confirming the flagged names");

// updateEntryStatus is a pure, targeted update and leaves the original list unchanged.
assert.equal(byId("dev-anand").status, "suggested", "the original entries are not mutated");
assert.equal(entries.find((entry) => entry.id === "vercel").status, "confirmed", "untouched names keep their status");

// updateEntryGuide trims a new guide and keeps the existing one when the input is blank.
const reGuided = updateEntryGuide(INITIAL_ENTRIES, "turborepo", "  TUR-bo-REP-oh-stack  ");
assert.equal(reGuided.find((entry) => entry.id === "turborepo").guide, "TUR-bo-REP-oh-stack", "a new guide is trimmed");
const blankGuide = updateEntryGuide(INITIAL_ENTRIES, "turborepo", "   ");
assert.equal(blankGuide.find((entry) => entry.id === "turborepo").guide, byId("turborepo").guide, "a blank guide keeps the existing one");

// Every name that is spoken in the episode is anchored to a real timestamped moment.
assert.ok(
  INITIAL_ENTRIES.filter((entry) => entry.spokenInEpisode).every((entry) => /\d/.test(entry.context)),
  "every spoken name is grounded at a real episode moment",
);

console.log("pronunciation and name review: spoken names resolve honestly before publish");
