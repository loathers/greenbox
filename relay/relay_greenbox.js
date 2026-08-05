"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// src/relay.ts
var relay_exports = {};
__export(relay_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(relay_exports);

// kolmafia-polyfill.js
var kolmafia = require("kolmafia"), console = {
  log: kolmafia.print
};
var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", BASE64_MAP = {};
for (i = 0; i < BASE64_CHARS.length; i++)
  BASE64_MAP[BASE64_CHARS[i]] = i;
var i;

// src/relay.ts
var import_kolmafia = require("kolmafia");
function main() {
  var output = (0, import_kolmafia.cliExecuteOutput)("call greenbox.js"), urlPattern = /<a href="([^"]+)">([^<]+)<\/a>/, match = output.match(urlPattern);
  if (!match) {
    (0, import_kolmafia.print)("Failed to generate greenbox link. Check your greenbox script.", "red");
    return;
  }
  var greenboxUrl = match[1];
  (0, import_kolmafia.writeln)('<html><head><meta http-equiv="refresh" content="0; url='.concat(greenboxUrl, '" /></head><body><p>Redirecting to Greenbox...</p><script>window.location.href = "').concat(greenboxUrl, '";</script></body></html>'));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
