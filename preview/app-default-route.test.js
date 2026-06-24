"use strict";

// Behavioral guard for the unified preview app's default route (#581 / #583).
// Runs app.html's routing script against a tiny DOM/window stub and checks where the
// iframe actually points: an empty or unknown hash must resolve to the first workflow
// screen (never a blank or arbitrary URL), and a known hash routes to that screen.
// This tests behavior, not source spelling, so reformatting app.html won't false-fail.
// Run with: `node preview/app-default-route.test.js`

const fs = require("fs");
const path = require("path");
const assert = require("assert");
const vm = require("vm");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(__dirname, "app.html"), "utf8");
const script = app.match(/<script>([\s\S]*?)<\/script>/)[1];

// Screen slugs declared in STAGES that are real prototypes (slugs are lowercase-hyphen,
// so stage titles with spaces/capitals are skipped).
const stagesBlock = app.match(/const STAGES = \[([\s\S]*?)\];/)[1];
const screens = [...new Set([...stagesBlock.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]))]
  .filter((s) => fs.existsSync(path.join(root, "prototype", s + ".html")));
assert.ok(screens.length >= 2, "app declares at least two real workflow screens");
const defaultScreen = screens[0];
const knownOther = screens[1];

function makeNode() {
  return {
    textContent: "", src: "", href: "", title: "",
    setAttribute() {}, removeAttribute() {},
    classList: { toggle() {}, add() {}, remove() {} },
    appendChild() {}, replaceChildren() {},
  };
}

// Run the app script with a stubbed DOM/window, returning the live iframe node and the
// captured hashchange handler so the test can change the hash and re-route.
function boot() {
  const nodes = {};
  const document = {
    querySelector(sel) { if (!nodes[sel]) nodes[sel] = makeNode(); return nodes[sel]; },
    createElement() { return makeNode(); },
  };
  let onHashChange = null;
  const win = {
    location: { hash: "" },
    addEventListener(type, handler) { if (type === "hashchange") onHashChange = handler; },
  };
  const store = {};
  const sessionStorage = {
    getItem(k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
    setItem(k, v) { store[k] = String(v); },
  };
  const sandbox = { document: document, window: win, sessionStorage: sessionStorage, console: { log() {} } };
  vm.createContext(sandbox);
  vm.runInContext(script, sandbox);
  return { frame: nodes["#screen"], win: win, route: onHashChange };
}

function screenFromSrc(src) {
  const m = (src || "").match(/\.\.\/prototype\/([a-z0-9-]+)\.html$/);
  return m ? m[1] : null;
}

// 1) On load with no hash, the frame opens the default (first workflow) screen.
const boot1 = boot();
assert.ok(boot1.frame, "app resolves the iframe element");
assert.strictEqual(screenFromSrc(boot1.frame.src), defaultScreen, "empty hash routes to the first workflow screen");
assert.ok(fs.existsSync(path.join(root, "prototype", defaultScreen + ".html")), "default screen is a real prototype");

// 2) A known hash routes to that exact screen.
boot1.win.location.hash = "#" + knownOther;
boot1.route();
assert.strictEqual(screenFromSrc(boot1.frame.src), knownOther, "a known hash routes to its screen");

// 3) An unknown hash falls back to the default screen — never blank or arbitrary.
boot1.win.location.hash = "#definitely-not-a-real-screen";
boot1.route();
assert.strictEqual(screenFromSrc(boot1.frame.src), defaultScreen, "unknown hash falls back to the default screen");

console.log("preview app default route: empty/unknown hash -> " + defaultScreen + ", known hash routes correctly");
