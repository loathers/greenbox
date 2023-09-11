/* eslint-disable */
const kolmafia = require("kolmafia");
export let console = { log: kolmafia.print };
export let global = {
  encodeURI: encodeURI,
  decodeURI: decodeURI,
  encodeURIComponent: encodeURIComponent,
  decodeURIComponent: decodeURIComponent,
};
