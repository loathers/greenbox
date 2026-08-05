/* eslint-disable */
const kolmafia = require("kolmafia");
export let console = { log: kolmafia.print };
export let global = {
  encodeURI: encodeURI,
  decodeURI: decodeURI,
  encodeURIComponent: encodeURIComponent,
  decodeURIComponent: decodeURIComponent,
};

// Polyfill Buffer for Kolmafia/Rhino environment
// Required by 'entities' package which uses Buffer.from for base64 decoding
// Rhino doesn't have atob, so we implement base64 decoding manually
const BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const BASE64_MAP = {};
for (let i = 0; i < BASE64_CHARS.length; i++) {
  BASE64_MAP[BASE64_CHARS[i]] = i;
}

function base64ToBinary(input) {
  let padding = 0;
  if (input.endsWith("==")) padding = 2;
  else if (input.endsWith("=")) padding = 1;
  const len = input.length - padding;
  const result = new Array(len / 4 * 3 - padding);
  let idx = 0;
  for (let i = 0; i < len; i += 4) {
    const a = BASE64_MAP[input[i]];
    const b = BASE64_MAP[input[i + 1]];
    const c = BASE64_MAP[input[i + 2]];
    const d = BASE64_MAP[input[i + 3]];
    const d1 = (a << 18) | (b << 12);
    const d2 = (c << 6) | d;
    result[idx++] = (d1 >> 16) & 0xff;
    result[idx++] = (d1 >> 8) & 0xff;
    result[idx++] = d2 & 0xff;
  }
  return result.map((c) => String.fromCharCode(c)).join("");
}

export const Buffer = {
  from(input, encoding) {
    if (encoding === "base64") {
      const binary = base64ToBinary(input);
      return {
        toString() {
          return binary;
        },
      };
    }
    throw new Error("Buffer.from not fully implemented");
  },
};
