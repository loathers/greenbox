"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __commonJS = function(cb, mod) {
  return function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};
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
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  );
}, __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// kolmafia-polyfill.js
var kolmafia, console, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    };
  }
});

// ../../node_modules/html-entities/lib/named-references.js
var require_named_references = __commonJS({
  "../../node_modules/html-entities/lib/named-references.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.bodyRegExps = {
      xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
      html4: /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
      html5: /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g
    };
    exports2.namedReferences = {
      xml: {
        entities: {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&apos;": "'",
          "&amp;": "&"
        },
        characters: {
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
          "&": "&amp;"
        }
      },
      html4: {
        entities: {
          "&apos;": "'",
          "&nbsp": "\xA0",
          "&nbsp;": "\xA0",
          "&iexcl": "\xA1",
          "&iexcl;": "\xA1",
          "&cent": "\xA2",
          "&cent;": "\xA2",
          "&pound": "\xA3",
          "&pound;": "\xA3",
          "&curren": "\xA4",
          "&curren;": "\xA4",
          "&yen": "\xA5",
          "&yen;": "\xA5",
          "&brvbar": "\xA6",
          "&brvbar;": "\xA6",
          "&sect": "\xA7",
          "&sect;": "\xA7",
          "&uml": "\xA8",
          "&uml;": "\xA8",
          "&copy": "\xA9",
          "&copy;": "\xA9",
          "&ordf": "\xAA",
          "&ordf;": "\xAA",
          "&laquo": "\xAB",
          "&laquo;": "\xAB",
          "&not": "\xAC",
          "&not;": "\xAC",
          "&shy": "\xAD",
          "&shy;": "\xAD",
          "&reg": "\xAE",
          "&reg;": "\xAE",
          "&macr": "\xAF",
          "&macr;": "\xAF",
          "&deg": "\xB0",
          "&deg;": "\xB0",
          "&plusmn": "\xB1",
          "&plusmn;": "\xB1",
          "&sup2": "\xB2",
          "&sup2;": "\xB2",
          "&sup3": "\xB3",
          "&sup3;": "\xB3",
          "&acute": "\xB4",
          "&acute;": "\xB4",
          "&micro": "\xB5",
          "&micro;": "\xB5",
          "&para": "\xB6",
          "&para;": "\xB6",
          "&middot": "\xB7",
          "&middot;": "\xB7",
          "&cedil": "\xB8",
          "&cedil;": "\xB8",
          "&sup1": "\xB9",
          "&sup1;": "\xB9",
          "&ordm": "\xBA",
          "&ordm;": "\xBA",
          "&raquo": "\xBB",
          "&raquo;": "\xBB",
          "&frac14": "\xBC",
          "&frac14;": "\xBC",
          "&frac12": "\xBD",
          "&frac12;": "\xBD",
          "&frac34": "\xBE",
          "&frac34;": "\xBE",
          "&iquest": "\xBF",
          "&iquest;": "\xBF",
          "&Agrave": "\xC0",
          "&Agrave;": "\xC0",
          "&Aacute": "\xC1",
          "&Aacute;": "\xC1",
          "&Acirc": "\xC2",
          "&Acirc;": "\xC2",
          "&Atilde": "\xC3",
          "&Atilde;": "\xC3",
          "&Auml": "\xC4",
          "&Auml;": "\xC4",
          "&Aring": "\xC5",
          "&Aring;": "\xC5",
          "&AElig": "\xC6",
          "&AElig;": "\xC6",
          "&Ccedil": "\xC7",
          "&Ccedil;": "\xC7",
          "&Egrave": "\xC8",
          "&Egrave;": "\xC8",
          "&Eacute": "\xC9",
          "&Eacute;": "\xC9",
          "&Ecirc": "\xCA",
          "&Ecirc;": "\xCA",
          "&Euml": "\xCB",
          "&Euml;": "\xCB",
          "&Igrave": "\xCC",
          "&Igrave;": "\xCC",
          "&Iacute": "\xCD",
          "&Iacute;": "\xCD",
          "&Icirc": "\xCE",
          "&Icirc;": "\xCE",
          "&Iuml": "\xCF",
          "&Iuml;": "\xCF",
          "&ETH": "\xD0",
          "&ETH;": "\xD0",
          "&Ntilde": "\xD1",
          "&Ntilde;": "\xD1",
          "&Ograve": "\xD2",
          "&Ograve;": "\xD2",
          "&Oacute": "\xD3",
          "&Oacute;": "\xD3",
          "&Ocirc": "\xD4",
          "&Ocirc;": "\xD4",
          "&Otilde": "\xD5",
          "&Otilde;": "\xD5",
          "&Ouml": "\xD6",
          "&Ouml;": "\xD6",
          "&times": "\xD7",
          "&times;": "\xD7",
          "&Oslash": "\xD8",
          "&Oslash;": "\xD8",
          "&Ugrave": "\xD9",
          "&Ugrave;": "\xD9",
          "&Uacute": "\xDA",
          "&Uacute;": "\xDA",
          "&Ucirc": "\xDB",
          "&Ucirc;": "\xDB",
          "&Uuml": "\xDC",
          "&Uuml;": "\xDC",
          "&Yacute": "\xDD",
          "&Yacute;": "\xDD",
          "&THORN": "\xDE",
          "&THORN;": "\xDE",
          "&szlig": "\xDF",
          "&szlig;": "\xDF",
          "&agrave": "\xE0",
          "&agrave;": "\xE0",
          "&aacute": "\xE1",
          "&aacute;": "\xE1",
          "&acirc": "\xE2",
          "&acirc;": "\xE2",
          "&atilde": "\xE3",
          "&atilde;": "\xE3",
          "&auml": "\xE4",
          "&auml;": "\xE4",
          "&aring": "\xE5",
          "&aring;": "\xE5",
          "&aelig": "\xE6",
          "&aelig;": "\xE6",
          "&ccedil": "\xE7",
          "&ccedil;": "\xE7",
          "&egrave": "\xE8",
          "&egrave;": "\xE8",
          "&eacute": "\xE9",
          "&eacute;": "\xE9",
          "&ecirc": "\xEA",
          "&ecirc;": "\xEA",
          "&euml": "\xEB",
          "&euml;": "\xEB",
          "&igrave": "\xEC",
          "&igrave;": "\xEC",
          "&iacute": "\xED",
          "&iacute;": "\xED",
          "&icirc": "\xEE",
          "&icirc;": "\xEE",
          "&iuml": "\xEF",
          "&iuml;": "\xEF",
          "&eth": "\xF0",
          "&eth;": "\xF0",
          "&ntilde": "\xF1",
          "&ntilde;": "\xF1",
          "&ograve": "\xF2",
          "&ograve;": "\xF2",
          "&oacute": "\xF3",
          "&oacute;": "\xF3",
          "&ocirc": "\xF4",
          "&ocirc;": "\xF4",
          "&otilde": "\xF5",
          "&otilde;": "\xF5",
          "&ouml": "\xF6",
          "&ouml;": "\xF6",
          "&divide": "\xF7",
          "&divide;": "\xF7",
          "&oslash": "\xF8",
          "&oslash;": "\xF8",
          "&ugrave": "\xF9",
          "&ugrave;": "\xF9",
          "&uacute": "\xFA",
          "&uacute;": "\xFA",
          "&ucirc": "\xFB",
          "&ucirc;": "\xFB",
          "&uuml": "\xFC",
          "&uuml;": "\xFC",
          "&yacute": "\xFD",
          "&yacute;": "\xFD",
          "&thorn": "\xFE",
          "&thorn;": "\xFE",
          "&yuml": "\xFF",
          "&yuml;": "\xFF",
          "&quot": '"',
          "&quot;": '"',
          "&amp": "&",
          "&amp;": "&",
          "&lt": "<",
          "&lt;": "<",
          "&gt": ">",
          "&gt;": ">",
          "&OElig;": "\u0152",
          "&oelig;": "\u0153",
          "&Scaron;": "\u0160",
          "&scaron;": "\u0161",
          "&Yuml;": "\u0178",
          "&circ;": "\u02C6",
          "&tilde;": "\u02DC",
          "&ensp;": "\u2002",
          "&emsp;": "\u2003",
          "&thinsp;": "\u2009",
          "&zwnj;": "\u200C",
          "&zwj;": "\u200D",
          "&lrm;": "\u200E",
          "&rlm;": "\u200F",
          "&ndash;": "\u2013",
          "&mdash;": "\u2014",
          "&lsquo;": "\u2018",
          "&rsquo;": "\u2019",
          "&sbquo;": "\u201A",
          "&ldquo;": "\u201C",
          "&rdquo;": "\u201D",
          "&bdquo;": "\u201E",
          "&dagger;": "\u2020",
          "&Dagger;": "\u2021",
          "&permil;": "\u2030",
          "&lsaquo;": "\u2039",
          "&rsaquo;": "\u203A",
          "&euro;": "\u20AC",
          "&fnof;": "\u0192",
          "&Alpha;": "\u0391",
          "&Beta;": "\u0392",
          "&Gamma;": "\u0393",
          "&Delta;": "\u0394",
          "&Epsilon;": "\u0395",
          "&Zeta;": "\u0396",
          "&Eta;": "\u0397",
          "&Theta;": "\u0398",
          "&Iota;": "\u0399",
          "&Kappa;": "\u039A",
          "&Lambda;": "\u039B",
          "&Mu;": "\u039C",
          "&Nu;": "\u039D",
          "&Xi;": "\u039E",
          "&Omicron;": "\u039F",
          "&Pi;": "\u03A0",
          "&Rho;": "\u03A1",
          "&Sigma;": "\u03A3",
          "&Tau;": "\u03A4",
          "&Upsilon;": "\u03A5",
          "&Phi;": "\u03A6",
          "&Chi;": "\u03A7",
          "&Psi;": "\u03A8",
          "&Omega;": "\u03A9",
          "&alpha;": "\u03B1",
          "&beta;": "\u03B2",
          "&gamma;": "\u03B3",
          "&delta;": "\u03B4",
          "&epsilon;": "\u03B5",
          "&zeta;": "\u03B6",
          "&eta;": "\u03B7",
          "&theta;": "\u03B8",
          "&iota;": "\u03B9",
          "&kappa;": "\u03BA",
          "&lambda;": "\u03BB",
          "&mu;": "\u03BC",
          "&nu;": "\u03BD",
          "&xi;": "\u03BE",
          "&omicron;": "\u03BF",
          "&pi;": "\u03C0",
          "&rho;": "\u03C1",
          "&sigmaf;": "\u03C2",
          "&sigma;": "\u03C3",
          "&tau;": "\u03C4",
          "&upsilon;": "\u03C5",
          "&phi;": "\u03C6",
          "&chi;": "\u03C7",
          "&psi;": "\u03C8",
          "&omega;": "\u03C9",
          "&thetasym;": "\u03D1",
          "&upsih;": "\u03D2",
          "&piv;": "\u03D6",
          "&bull;": "\u2022",
          "&hellip;": "\u2026",
          "&prime;": "\u2032",
          "&Prime;": "\u2033",
          "&oline;": "\u203E",
          "&frasl;": "\u2044",
          "&weierp;": "\u2118",
          "&image;": "\u2111",
          "&real;": "\u211C",
          "&trade;": "\u2122",
          "&alefsym;": "\u2135",
          "&larr;": "\u2190",
          "&uarr;": "\u2191",
          "&rarr;": "\u2192",
          "&darr;": "\u2193",
          "&harr;": "\u2194",
          "&crarr;": "\u21B5",
          "&lArr;": "\u21D0",
          "&uArr;": "\u21D1",
          "&rArr;": "\u21D2",
          "&dArr;": "\u21D3",
          "&hArr;": "\u21D4",
          "&forall;": "\u2200",
          "&part;": "\u2202",
          "&exist;": "\u2203",
          "&empty;": "\u2205",
          "&nabla;": "\u2207",
          "&isin;": "\u2208",
          "&notin;": "\u2209",
          "&ni;": "\u220B",
          "&prod;": "\u220F",
          "&sum;": "\u2211",
          "&minus;": "\u2212",
          "&lowast;": "\u2217",
          "&radic;": "\u221A",
          "&prop;": "\u221D",
          "&infin;": "\u221E",
          "&ang;": "\u2220",
          "&and;": "\u2227",
          "&or;": "\u2228",
          "&cap;": "\u2229",
          "&cup;": "\u222A",
          "&int;": "\u222B",
          "&there4;": "\u2234",
          "&sim;": "\u223C",
          "&cong;": "\u2245",
          "&asymp;": "\u2248",
          "&ne;": "\u2260",
          "&equiv;": "\u2261",
          "&le;": "\u2264",
          "&ge;": "\u2265",
          "&sub;": "\u2282",
          "&sup;": "\u2283",
          "&nsub;": "\u2284",
          "&sube;": "\u2286",
          "&supe;": "\u2287",
          "&oplus;": "\u2295",
          "&otimes;": "\u2297",
          "&perp;": "\u22A5",
          "&sdot;": "\u22C5",
          "&lceil;": "\u2308",
          "&rceil;": "\u2309",
          "&lfloor;": "\u230A",
          "&rfloor;": "\u230B",
          "&lang;": "\u2329",
          "&rang;": "\u232A",
          "&loz;": "\u25CA",
          "&spades;": "\u2660",
          "&clubs;": "\u2663",
          "&hearts;": "\u2665",
          "&diams;": "\u2666"
        },
        characters: {
          "'": "&apos;",
          "\xA0": "&nbsp;",
          "\xA1": "&iexcl;",
          "\xA2": "&cent;",
          "\xA3": "&pound;",
          "\xA4": "&curren;",
          "\xA5": "&yen;",
          "\xA6": "&brvbar;",
          "\xA7": "&sect;",
          "\xA8": "&uml;",
          "\xA9": "&copy;",
          \u00AA: "&ordf;",
          "\xAB": "&laquo;",
          "\xAC": "&not;",
          "\xAD": "&shy;",
          "\xAE": "&reg;",
          "\xAF": "&macr;",
          "\xB0": "&deg;",
          "\xB1": "&plusmn;",
          "\xB2": "&sup2;",
          "\xB3": "&sup3;",
          "\xB4": "&acute;",
          \u00B5: "&micro;",
          "\xB6": "&para;",
          "\xB7": "&middot;",
          "\xB8": "&cedil;",
          "\xB9": "&sup1;",
          \u00BA: "&ordm;",
          "\xBB": "&raquo;",
          "\xBC": "&frac14;",
          "\xBD": "&frac12;",
          "\xBE": "&frac34;",
          "\xBF": "&iquest;",
          \u00C0: "&Agrave;",
          \u00C1: "&Aacute;",
          \u00C2: "&Acirc;",
          \u00C3: "&Atilde;",
          \u00C4: "&Auml;",
          \u00C5: "&Aring;",
          \u00C6: "&AElig;",
          \u00C7: "&Ccedil;",
          \u00C8: "&Egrave;",
          \u00C9: "&Eacute;",
          \u00CA: "&Ecirc;",
          \u00CB: "&Euml;",
          \u00CC: "&Igrave;",
          \u00CD: "&Iacute;",
          \u00CE: "&Icirc;",
          \u00CF: "&Iuml;",
          \u00D0: "&ETH;",
          \u00D1: "&Ntilde;",
          \u00D2: "&Ograve;",
          \u00D3: "&Oacute;",
          \u00D4: "&Ocirc;",
          \u00D5: "&Otilde;",
          \u00D6: "&Ouml;",
          "\xD7": "&times;",
          \u00D8: "&Oslash;",
          \u00D9: "&Ugrave;",
          \u00DA: "&Uacute;",
          \u00DB: "&Ucirc;",
          \u00DC: "&Uuml;",
          \u00DD: "&Yacute;",
          \u00DE: "&THORN;",
          \u00DF: "&szlig;",
          \u00E0: "&agrave;",
          \u00E1: "&aacute;",
          \u00E2: "&acirc;",
          \u00E3: "&atilde;",
          \u00E4: "&auml;",
          \u00E5: "&aring;",
          \u00E6: "&aelig;",
          \u00E7: "&ccedil;",
          \u00E8: "&egrave;",
          \u00E9: "&eacute;",
          \u00EA: "&ecirc;",
          \u00EB: "&euml;",
          \u00EC: "&igrave;",
          \u00ED: "&iacute;",
          \u00EE: "&icirc;",
          \u00EF: "&iuml;",
          \u00F0: "&eth;",
          \u00F1: "&ntilde;",
          \u00F2: "&ograve;",
          \u00F3: "&oacute;",
          \u00F4: "&ocirc;",
          \u00F5: "&otilde;",
          \u00F6: "&ouml;",
          "\xF7": "&divide;",
          \u00F8: "&oslash;",
          \u00F9: "&ugrave;",
          \u00FA: "&uacute;",
          \u00FB: "&ucirc;",
          \u00FC: "&uuml;",
          \u00FD: "&yacute;",
          \u00FE: "&thorn;",
          \u00FF: "&yuml;",
          '"': "&quot;",
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          \u0152: "&OElig;",
          \u0153: "&oelig;",
          \u0160: "&Scaron;",
          \u0161: "&scaron;",
          \u0178: "&Yuml;",
          "\u02C6": "&circ;",
          "\u02DC": "&tilde;",
          "\u2002": "&ensp;",
          "\u2003": "&emsp;",
          "\u2009": "&thinsp;",
          "\u200C": "&zwnj;",
          "\u200D": "&zwj;",
          "\u200E": "&lrm;",
          "\u200F": "&rlm;",
          "\u2013": "&ndash;",
          "\u2014": "&mdash;",
          "\u2018": "&lsquo;",
          "\u2019": "&rsquo;",
          "\u201A": "&sbquo;",
          "\u201C": "&ldquo;",
          "\u201D": "&rdquo;",
          "\u201E": "&bdquo;",
          "\u2020": "&dagger;",
          "\u2021": "&Dagger;",
          "\u2030": "&permil;",
          "\u2039": "&lsaquo;",
          "\u203A": "&rsaquo;",
          "\u20AC": "&euro;",
          \u0192: "&fnof;",
          \u0391: "&Alpha;",
          \u0392: "&Beta;",
          \u0393: "&Gamma;",
          \u0394: "&Delta;",
          \u0395: "&Epsilon;",
          \u0396: "&Zeta;",
          \u0397: "&Eta;",
          \u0398: "&Theta;",
          \u0399: "&Iota;",
          \u039A: "&Kappa;",
          \u039B: "&Lambda;",
          \u039C: "&Mu;",
          \u039D: "&Nu;",
          \u039E: "&Xi;",
          \u039F: "&Omicron;",
          \u03A0: "&Pi;",
          \u03A1: "&Rho;",
          \u03A3: "&Sigma;",
          \u03A4: "&Tau;",
          \u03A5: "&Upsilon;",
          \u03A6: "&Phi;",
          \u03A7: "&Chi;",
          \u03A8: "&Psi;",
          \u03A9: "&Omega;",
          \u03B1: "&alpha;",
          \u03B2: "&beta;",
          \u03B3: "&gamma;",
          \u03B4: "&delta;",
          \u03B5: "&epsilon;",
          \u03B6: "&zeta;",
          \u03B7: "&eta;",
          \u03B8: "&theta;",
          \u03B9: "&iota;",
          \u03BA: "&kappa;",
          \u03BB: "&lambda;",
          \u03BC: "&mu;",
          \u03BD: "&nu;",
          \u03BE: "&xi;",
          \u03BF: "&omicron;",
          \u03C0: "&pi;",
          \u03C1: "&rho;",
          \u03C2: "&sigmaf;",
          \u03C3: "&sigma;",
          \u03C4: "&tau;",
          \u03C5: "&upsilon;",
          \u03C6: "&phi;",
          \u03C7: "&chi;",
          \u03C8: "&psi;",
          \u03C9: "&omega;",
          \u03D1: "&thetasym;",
          \u03D2: "&upsih;",
          \u03D6: "&piv;",
          "\u2022": "&bull;",
          "\u2026": "&hellip;",
          "\u2032": "&prime;",
          "\u2033": "&Prime;",
          "\u203E": "&oline;",
          "\u2044": "&frasl;",
          "\u2118": "&weierp;",
          \u2111: "&image;",
          \u211C: "&real;",
          "\u2122": "&trade;",
          \u2135: "&alefsym;",
          "\u2190": "&larr;",
          "\u2191": "&uarr;",
          "\u2192": "&rarr;",
          "\u2193": "&darr;",
          "\u2194": "&harr;",
          "\u21B5": "&crarr;",
          "\u21D0": "&lArr;",
          "\u21D1": "&uArr;",
          "\u21D2": "&rArr;",
          "\u21D3": "&dArr;",
          "\u21D4": "&hArr;",
          "\u2200": "&forall;",
          "\u2202": "&part;",
          "\u2203": "&exist;",
          "\u2205": "&empty;",
          "\u2207": "&nabla;",
          "\u2208": "&isin;",
          "\u2209": "&notin;",
          "\u220B": "&ni;",
          "\u220F": "&prod;",
          "\u2211": "&sum;",
          "\u2212": "&minus;",
          "\u2217": "&lowast;",
          "\u221A": "&radic;",
          "\u221D": "&prop;",
          "\u221E": "&infin;",
          "\u2220": "&ang;",
          "\u2227": "&and;",
          "\u2228": "&or;",
          "\u2229": "&cap;",
          "\u222A": "&cup;",
          "\u222B": "&int;",
          "\u2234": "&there4;",
          "\u223C": "&sim;",
          "\u2245": "&cong;",
          "\u2248": "&asymp;",
          "\u2260": "&ne;",
          "\u2261": "&equiv;",
          "\u2264": "&le;",
          "\u2265": "&ge;",
          "\u2282": "&sub;",
          "\u2283": "&sup;",
          "\u2284": "&nsub;",
          "\u2286": "&sube;",
          "\u2287": "&supe;",
          "\u2295": "&oplus;",
          "\u2297": "&otimes;",
          "\u22A5": "&perp;",
          "\u22C5": "&sdot;",
          "\u2308": "&lceil;",
          "\u2309": "&rceil;",
          "\u230A": "&lfloor;",
          "\u230B": "&rfloor;",
          "\u2329": "&lang;",
          "\u232A": "&rang;",
          "\u25CA": "&loz;",
          "\u2660": "&spades;",
          "\u2663": "&clubs;",
          "\u2665": "&hearts;",
          "\u2666": "&diams;"
        }
      },
      html5: {
        entities: {
          "&AElig": "\xC6",
          "&AElig;": "\xC6",
          "&AMP": "&",
          "&AMP;": "&",
          "&Aacute": "\xC1",
          "&Aacute;": "\xC1",
          "&Abreve;": "\u0102",
          "&Acirc": "\xC2",
          "&Acirc;": "\xC2",
          "&Acy;": "\u0410",
          "&Afr;": "\uD835\uDD04",
          "&Agrave": "\xC0",
          "&Agrave;": "\xC0",
          "&Alpha;": "\u0391",
          "&Amacr;": "\u0100",
          "&And;": "\u2A53",
          "&Aogon;": "\u0104",
          "&Aopf;": "\uD835\uDD38",
          "&ApplyFunction;": "\u2061",
          "&Aring": "\xC5",
          "&Aring;": "\xC5",
          "&Ascr;": "\uD835\uDC9C",
          "&Assign;": "\u2254",
          "&Atilde": "\xC3",
          "&Atilde;": "\xC3",
          "&Auml": "\xC4",
          "&Auml;": "\xC4",
          "&Backslash;": "\u2216",
          "&Barv;": "\u2AE7",
          "&Barwed;": "\u2306",
          "&Bcy;": "\u0411",
          "&Because;": "\u2235",
          "&Bernoullis;": "\u212C",
          "&Beta;": "\u0392",
          "&Bfr;": "\uD835\uDD05",
          "&Bopf;": "\uD835\uDD39",
          "&Breve;": "\u02D8",
          "&Bscr;": "\u212C",
          "&Bumpeq;": "\u224E",
          "&CHcy;": "\u0427",
          "&COPY": "\xA9",
          "&COPY;": "\xA9",
          "&Cacute;": "\u0106",
          "&Cap;": "\u22D2",
          "&CapitalDifferentialD;": "\u2145",
          "&Cayleys;": "\u212D",
          "&Ccaron;": "\u010C",
          "&Ccedil": "\xC7",
          "&Ccedil;": "\xC7",
          "&Ccirc;": "\u0108",
          "&Cconint;": "\u2230",
          "&Cdot;": "\u010A",
          "&Cedilla;": "\xB8",
          "&CenterDot;": "\xB7",
          "&Cfr;": "\u212D",
          "&Chi;": "\u03A7",
          "&CircleDot;": "\u2299",
          "&CircleMinus;": "\u2296",
          "&CirclePlus;": "\u2295",
          "&CircleTimes;": "\u2297",
          "&ClockwiseContourIntegral;": "\u2232",
          "&CloseCurlyDoubleQuote;": "\u201D",
          "&CloseCurlyQuote;": "\u2019",
          "&Colon;": "\u2237",
          "&Colone;": "\u2A74",
          "&Congruent;": "\u2261",
          "&Conint;": "\u222F",
          "&ContourIntegral;": "\u222E",
          "&Copf;": "\u2102",
          "&Coproduct;": "\u2210",
          "&CounterClockwiseContourIntegral;": "\u2233",
          "&Cross;": "\u2A2F",
          "&Cscr;": "\uD835\uDC9E",
          "&Cup;": "\u22D3",
          "&CupCap;": "\u224D",
          "&DD;": "\u2145",
          "&DDotrahd;": "\u2911",
          "&DJcy;": "\u0402",
          "&DScy;": "\u0405",
          "&DZcy;": "\u040F",
          "&Dagger;": "\u2021",
          "&Darr;": "\u21A1",
          "&Dashv;": "\u2AE4",
          "&Dcaron;": "\u010E",
          "&Dcy;": "\u0414",
          "&Del;": "\u2207",
          "&Delta;": "\u0394",
          "&Dfr;": "\uD835\uDD07",
          "&DiacriticalAcute;": "\xB4",
          "&DiacriticalDot;": "\u02D9",
          "&DiacriticalDoubleAcute;": "\u02DD",
          "&DiacriticalGrave;": "`",
          "&DiacriticalTilde;": "\u02DC",
          "&Diamond;": "\u22C4",
          "&DifferentialD;": "\u2146",
          "&Dopf;": "\uD835\uDD3B",
          "&Dot;": "\xA8",
          "&DotDot;": "\u20DC",
          "&DotEqual;": "\u2250",
          "&DoubleContourIntegral;": "\u222F",
          "&DoubleDot;": "\xA8",
          "&DoubleDownArrow;": "\u21D3",
          "&DoubleLeftArrow;": "\u21D0",
          "&DoubleLeftRightArrow;": "\u21D4",
          "&DoubleLeftTee;": "\u2AE4",
          "&DoubleLongLeftArrow;": "\u27F8",
          "&DoubleLongLeftRightArrow;": "\u27FA",
          "&DoubleLongRightArrow;": "\u27F9",
          "&DoubleRightArrow;": "\u21D2",
          "&DoubleRightTee;": "\u22A8",
          "&DoubleUpArrow;": "\u21D1",
          "&DoubleUpDownArrow;": "\u21D5",
          "&DoubleVerticalBar;": "\u2225",
          "&DownArrow;": "\u2193",
          "&DownArrowBar;": "\u2913",
          "&DownArrowUpArrow;": "\u21F5",
          "&DownBreve;": "\u0311",
          "&DownLeftRightVector;": "\u2950",
          "&DownLeftTeeVector;": "\u295E",
          "&DownLeftVector;": "\u21BD",
          "&DownLeftVectorBar;": "\u2956",
          "&DownRightTeeVector;": "\u295F",
          "&DownRightVector;": "\u21C1",
          "&DownRightVectorBar;": "\u2957",
          "&DownTee;": "\u22A4",
          "&DownTeeArrow;": "\u21A7",
          "&Downarrow;": "\u21D3",
          "&Dscr;": "\uD835\uDC9F",
          "&Dstrok;": "\u0110",
          "&ENG;": "\u014A",
          "&ETH": "\xD0",
          "&ETH;": "\xD0",
          "&Eacute": "\xC9",
          "&Eacute;": "\xC9",
          "&Ecaron;": "\u011A",
          "&Ecirc": "\xCA",
          "&Ecirc;": "\xCA",
          "&Ecy;": "\u042D",
          "&Edot;": "\u0116",
          "&Efr;": "\uD835\uDD08",
          "&Egrave": "\xC8",
          "&Egrave;": "\xC8",
          "&Element;": "\u2208",
          "&Emacr;": "\u0112",
          "&EmptySmallSquare;": "\u25FB",
          "&EmptyVerySmallSquare;": "\u25AB",
          "&Eogon;": "\u0118",
          "&Eopf;": "\uD835\uDD3C",
          "&Epsilon;": "\u0395",
          "&Equal;": "\u2A75",
          "&EqualTilde;": "\u2242",
          "&Equilibrium;": "\u21CC",
          "&Escr;": "\u2130",
          "&Esim;": "\u2A73",
          "&Eta;": "\u0397",
          "&Euml": "\xCB",
          "&Euml;": "\xCB",
          "&Exists;": "\u2203",
          "&ExponentialE;": "\u2147",
          "&Fcy;": "\u0424",
          "&Ffr;": "\uD835\uDD09",
          "&FilledSmallSquare;": "\u25FC",
          "&FilledVerySmallSquare;": "\u25AA",
          "&Fopf;": "\uD835\uDD3D",
          "&ForAll;": "\u2200",
          "&Fouriertrf;": "\u2131",
          "&Fscr;": "\u2131",
          "&GJcy;": "\u0403",
          "&GT": ">",
          "&GT;": ">",
          "&Gamma;": "\u0393",
          "&Gammad;": "\u03DC",
          "&Gbreve;": "\u011E",
          "&Gcedil;": "\u0122",
          "&Gcirc;": "\u011C",
          "&Gcy;": "\u0413",
          "&Gdot;": "\u0120",
          "&Gfr;": "\uD835\uDD0A",
          "&Gg;": "\u22D9",
          "&Gopf;": "\uD835\uDD3E",
          "&GreaterEqual;": "\u2265",
          "&GreaterEqualLess;": "\u22DB",
          "&GreaterFullEqual;": "\u2267",
          "&GreaterGreater;": "\u2AA2",
          "&GreaterLess;": "\u2277",
          "&GreaterSlantEqual;": "\u2A7E",
          "&GreaterTilde;": "\u2273",
          "&Gscr;": "\uD835\uDCA2",
          "&Gt;": "\u226B",
          "&HARDcy;": "\u042A",
          "&Hacek;": "\u02C7",
          "&Hat;": "^",
          "&Hcirc;": "\u0124",
          "&Hfr;": "\u210C",
          "&HilbertSpace;": "\u210B",
          "&Hopf;": "\u210D",
          "&HorizontalLine;": "\u2500",
          "&Hscr;": "\u210B",
          "&Hstrok;": "\u0126",
          "&HumpDownHump;": "\u224E",
          "&HumpEqual;": "\u224F",
          "&IEcy;": "\u0415",
          "&IJlig;": "\u0132",
          "&IOcy;": "\u0401",
          "&Iacute": "\xCD",
          "&Iacute;": "\xCD",
          "&Icirc": "\xCE",
          "&Icirc;": "\xCE",
          "&Icy;": "\u0418",
          "&Idot;": "\u0130",
          "&Ifr;": "\u2111",
          "&Igrave": "\xCC",
          "&Igrave;": "\xCC",
          "&Im;": "\u2111",
          "&Imacr;": "\u012A",
          "&ImaginaryI;": "\u2148",
          "&Implies;": "\u21D2",
          "&Int;": "\u222C",
          "&Integral;": "\u222B",
          "&Intersection;": "\u22C2",
          "&InvisibleComma;": "\u2063",
          "&InvisibleTimes;": "\u2062",
          "&Iogon;": "\u012E",
          "&Iopf;": "\uD835\uDD40",
          "&Iota;": "\u0399",
          "&Iscr;": "\u2110",
          "&Itilde;": "\u0128",
          "&Iukcy;": "\u0406",
          "&Iuml": "\xCF",
          "&Iuml;": "\xCF",
          "&Jcirc;": "\u0134",
          "&Jcy;": "\u0419",
          "&Jfr;": "\uD835\uDD0D",
          "&Jopf;": "\uD835\uDD41",
          "&Jscr;": "\uD835\uDCA5",
          "&Jsercy;": "\u0408",
          "&Jukcy;": "\u0404",
          "&KHcy;": "\u0425",
          "&KJcy;": "\u040C",
          "&Kappa;": "\u039A",
          "&Kcedil;": "\u0136",
          "&Kcy;": "\u041A",
          "&Kfr;": "\uD835\uDD0E",
          "&Kopf;": "\uD835\uDD42",
          "&Kscr;": "\uD835\uDCA6",
          "&LJcy;": "\u0409",
          "&LT": "<",
          "&LT;": "<",
          "&Lacute;": "\u0139",
          "&Lambda;": "\u039B",
          "&Lang;": "\u27EA",
          "&Laplacetrf;": "\u2112",
          "&Larr;": "\u219E",
          "&Lcaron;": "\u013D",
          "&Lcedil;": "\u013B",
          "&Lcy;": "\u041B",
          "&LeftAngleBracket;": "\u27E8",
          "&LeftArrow;": "\u2190",
          "&LeftArrowBar;": "\u21E4",
          "&LeftArrowRightArrow;": "\u21C6",
          "&LeftCeiling;": "\u2308",
          "&LeftDoubleBracket;": "\u27E6",
          "&LeftDownTeeVector;": "\u2961",
          "&LeftDownVector;": "\u21C3",
          "&LeftDownVectorBar;": "\u2959",
          "&LeftFloor;": "\u230A",
          "&LeftRightArrow;": "\u2194",
          "&LeftRightVector;": "\u294E",
          "&LeftTee;": "\u22A3",
          "&LeftTeeArrow;": "\u21A4",
          "&LeftTeeVector;": "\u295A",
          "&LeftTriangle;": "\u22B2",
          "&LeftTriangleBar;": "\u29CF",
          "&LeftTriangleEqual;": "\u22B4",
          "&LeftUpDownVector;": "\u2951",
          "&LeftUpTeeVector;": "\u2960",
          "&LeftUpVector;": "\u21BF",
          "&LeftUpVectorBar;": "\u2958",
          "&LeftVector;": "\u21BC",
          "&LeftVectorBar;": "\u2952",
          "&Leftarrow;": "\u21D0",
          "&Leftrightarrow;": "\u21D4",
          "&LessEqualGreater;": "\u22DA",
          "&LessFullEqual;": "\u2266",
          "&LessGreater;": "\u2276",
          "&LessLess;": "\u2AA1",
          "&LessSlantEqual;": "\u2A7D",
          "&LessTilde;": "\u2272",
          "&Lfr;": "\uD835\uDD0F",
          "&Ll;": "\u22D8",
          "&Lleftarrow;": "\u21DA",
          "&Lmidot;": "\u013F",
          "&LongLeftArrow;": "\u27F5",
          "&LongLeftRightArrow;": "\u27F7",
          "&LongRightArrow;": "\u27F6",
          "&Longleftarrow;": "\u27F8",
          "&Longleftrightarrow;": "\u27FA",
          "&Longrightarrow;": "\u27F9",
          "&Lopf;": "\uD835\uDD43",
          "&LowerLeftArrow;": "\u2199",
          "&LowerRightArrow;": "\u2198",
          "&Lscr;": "\u2112",
          "&Lsh;": "\u21B0",
          "&Lstrok;": "\u0141",
          "&Lt;": "\u226A",
          "&Map;": "\u2905",
          "&Mcy;": "\u041C",
          "&MediumSpace;": "\u205F",
          "&Mellintrf;": "\u2133",
          "&Mfr;": "\uD835\uDD10",
          "&MinusPlus;": "\u2213",
          "&Mopf;": "\uD835\uDD44",
          "&Mscr;": "\u2133",
          "&Mu;": "\u039C",
          "&NJcy;": "\u040A",
          "&Nacute;": "\u0143",
          "&Ncaron;": "\u0147",
          "&Ncedil;": "\u0145",
          "&Ncy;": "\u041D",
          "&NegativeMediumSpace;": "\u200B",
          "&NegativeThickSpace;": "\u200B",
          "&NegativeThinSpace;": "\u200B",
          "&NegativeVeryThinSpace;": "\u200B",
          "&NestedGreaterGreater;": "\u226B",
          "&NestedLessLess;": "\u226A",
          "&NewLine;": "\n",
          "&Nfr;": "\uD835\uDD11",
          "&NoBreak;": "\u2060",
          "&NonBreakingSpace;": "\xA0",
          "&Nopf;": "\u2115",
          "&Not;": "\u2AEC",
          "&NotCongruent;": "\u2262",
          "&NotCupCap;": "\u226D",
          "&NotDoubleVerticalBar;": "\u2226",
          "&NotElement;": "\u2209",
          "&NotEqual;": "\u2260",
          "&NotEqualTilde;": "\u2242\u0338",
          "&NotExists;": "\u2204",
          "&NotGreater;": "\u226F",
          "&NotGreaterEqual;": "\u2271",
          "&NotGreaterFullEqual;": "\u2267\u0338",
          "&NotGreaterGreater;": "\u226B\u0338",
          "&NotGreaterLess;": "\u2279",
          "&NotGreaterSlantEqual;": "\u2A7E\u0338",
          "&NotGreaterTilde;": "\u2275",
          "&NotHumpDownHump;": "\u224E\u0338",
          "&NotHumpEqual;": "\u224F\u0338",
          "&NotLeftTriangle;": "\u22EA",
          "&NotLeftTriangleBar;": "\u29CF\u0338",
          "&NotLeftTriangleEqual;": "\u22EC",
          "&NotLess;": "\u226E",
          "&NotLessEqual;": "\u2270",
          "&NotLessGreater;": "\u2278",
          "&NotLessLess;": "\u226A\u0338",
          "&NotLessSlantEqual;": "\u2A7D\u0338",
          "&NotLessTilde;": "\u2274",
          "&NotNestedGreaterGreater;": "\u2AA2\u0338",
          "&NotNestedLessLess;": "\u2AA1\u0338",
          "&NotPrecedes;": "\u2280",
          "&NotPrecedesEqual;": "\u2AAF\u0338",
          "&NotPrecedesSlantEqual;": "\u22E0",
          "&NotReverseElement;": "\u220C",
          "&NotRightTriangle;": "\u22EB",
          "&NotRightTriangleBar;": "\u29D0\u0338",
          "&NotRightTriangleEqual;": "\u22ED",
          "&NotSquareSubset;": "\u228F\u0338",
          "&NotSquareSubsetEqual;": "\u22E2",
          "&NotSquareSuperset;": "\u2290\u0338",
          "&NotSquareSupersetEqual;": "\u22E3",
          "&NotSubset;": "\u2282\u20D2",
          "&NotSubsetEqual;": "\u2288",
          "&NotSucceeds;": "\u2281",
          "&NotSucceedsEqual;": "\u2AB0\u0338",
          "&NotSucceedsSlantEqual;": "\u22E1",
          "&NotSucceedsTilde;": "\u227F\u0338",
          "&NotSuperset;": "\u2283\u20D2",
          "&NotSupersetEqual;": "\u2289",
          "&NotTilde;": "\u2241",
          "&NotTildeEqual;": "\u2244",
          "&NotTildeFullEqual;": "\u2247",
          "&NotTildeTilde;": "\u2249",
          "&NotVerticalBar;": "\u2224",
          "&Nscr;": "\uD835\uDCA9",
          "&Ntilde": "\xD1",
          "&Ntilde;": "\xD1",
          "&Nu;": "\u039D",
          "&OElig;": "\u0152",
          "&Oacute": "\xD3",
          "&Oacute;": "\xD3",
          "&Ocirc": "\xD4",
          "&Ocirc;": "\xD4",
          "&Ocy;": "\u041E",
          "&Odblac;": "\u0150",
          "&Ofr;": "\uD835\uDD12",
          "&Ograve": "\xD2",
          "&Ograve;": "\xD2",
          "&Omacr;": "\u014C",
          "&Omega;": "\u03A9",
          "&Omicron;": "\u039F",
          "&Oopf;": "\uD835\uDD46",
          "&OpenCurlyDoubleQuote;": "\u201C",
          "&OpenCurlyQuote;": "\u2018",
          "&Or;": "\u2A54",
          "&Oscr;": "\uD835\uDCAA",
          "&Oslash": "\xD8",
          "&Oslash;": "\xD8",
          "&Otilde": "\xD5",
          "&Otilde;": "\xD5",
          "&Otimes;": "\u2A37",
          "&Ouml": "\xD6",
          "&Ouml;": "\xD6",
          "&OverBar;": "\u203E",
          "&OverBrace;": "\u23DE",
          "&OverBracket;": "\u23B4",
          "&OverParenthesis;": "\u23DC",
          "&PartialD;": "\u2202",
          "&Pcy;": "\u041F",
          "&Pfr;": "\uD835\uDD13",
          "&Phi;": "\u03A6",
          "&Pi;": "\u03A0",
          "&PlusMinus;": "\xB1",
          "&Poincareplane;": "\u210C",
          "&Popf;": "\u2119",
          "&Pr;": "\u2ABB",
          "&Precedes;": "\u227A",
          "&PrecedesEqual;": "\u2AAF",
          "&PrecedesSlantEqual;": "\u227C",
          "&PrecedesTilde;": "\u227E",
          "&Prime;": "\u2033",
          "&Product;": "\u220F",
          "&Proportion;": "\u2237",
          "&Proportional;": "\u221D",
          "&Pscr;": "\uD835\uDCAB",
          "&Psi;": "\u03A8",
          "&QUOT": '"',
          "&QUOT;": '"',
          "&Qfr;": "\uD835\uDD14",
          "&Qopf;": "\u211A",
          "&Qscr;": "\uD835\uDCAC",
          "&RBarr;": "\u2910",
          "&REG": "\xAE",
          "&REG;": "\xAE",
          "&Racute;": "\u0154",
          "&Rang;": "\u27EB",
          "&Rarr;": "\u21A0",
          "&Rarrtl;": "\u2916",
          "&Rcaron;": "\u0158",
          "&Rcedil;": "\u0156",
          "&Rcy;": "\u0420",
          "&Re;": "\u211C",
          "&ReverseElement;": "\u220B",
          "&ReverseEquilibrium;": "\u21CB",
          "&ReverseUpEquilibrium;": "\u296F",
          "&Rfr;": "\u211C",
          "&Rho;": "\u03A1",
          "&RightAngleBracket;": "\u27E9",
          "&RightArrow;": "\u2192",
          "&RightArrowBar;": "\u21E5",
          "&RightArrowLeftArrow;": "\u21C4",
          "&RightCeiling;": "\u2309",
          "&RightDoubleBracket;": "\u27E7",
          "&RightDownTeeVector;": "\u295D",
          "&RightDownVector;": "\u21C2",
          "&RightDownVectorBar;": "\u2955",
          "&RightFloor;": "\u230B",
          "&RightTee;": "\u22A2",
          "&RightTeeArrow;": "\u21A6",
          "&RightTeeVector;": "\u295B",
          "&RightTriangle;": "\u22B3",
          "&RightTriangleBar;": "\u29D0",
          "&RightTriangleEqual;": "\u22B5",
          "&RightUpDownVector;": "\u294F",
          "&RightUpTeeVector;": "\u295C",
          "&RightUpVector;": "\u21BE",
          "&RightUpVectorBar;": "\u2954",
          "&RightVector;": "\u21C0",
          "&RightVectorBar;": "\u2953",
          "&Rightarrow;": "\u21D2",
          "&Ropf;": "\u211D",
          "&RoundImplies;": "\u2970",
          "&Rrightarrow;": "\u21DB",
          "&Rscr;": "\u211B",
          "&Rsh;": "\u21B1",
          "&RuleDelayed;": "\u29F4",
          "&SHCHcy;": "\u0429",
          "&SHcy;": "\u0428",
          "&SOFTcy;": "\u042C",
          "&Sacute;": "\u015A",
          "&Sc;": "\u2ABC",
          "&Scaron;": "\u0160",
          "&Scedil;": "\u015E",
          "&Scirc;": "\u015C",
          "&Scy;": "\u0421",
          "&Sfr;": "\uD835\uDD16",
          "&ShortDownArrow;": "\u2193",
          "&ShortLeftArrow;": "\u2190",
          "&ShortRightArrow;": "\u2192",
          "&ShortUpArrow;": "\u2191",
          "&Sigma;": "\u03A3",
          "&SmallCircle;": "\u2218",
          "&Sopf;": "\uD835\uDD4A",
          "&Sqrt;": "\u221A",
          "&Square;": "\u25A1",
          "&SquareIntersection;": "\u2293",
          "&SquareSubset;": "\u228F",
          "&SquareSubsetEqual;": "\u2291",
          "&SquareSuperset;": "\u2290",
          "&SquareSupersetEqual;": "\u2292",
          "&SquareUnion;": "\u2294",
          "&Sscr;": "\uD835\uDCAE",
          "&Star;": "\u22C6",
          "&Sub;": "\u22D0",
          "&Subset;": "\u22D0",
          "&SubsetEqual;": "\u2286",
          "&Succeeds;": "\u227B",
          "&SucceedsEqual;": "\u2AB0",
          "&SucceedsSlantEqual;": "\u227D",
          "&SucceedsTilde;": "\u227F",
          "&SuchThat;": "\u220B",
          "&Sum;": "\u2211",
          "&Sup;": "\u22D1",
          "&Superset;": "\u2283",
          "&SupersetEqual;": "\u2287",
          "&Supset;": "\u22D1",
          "&THORN": "\xDE",
          "&THORN;": "\xDE",
          "&TRADE;": "\u2122",
          "&TSHcy;": "\u040B",
          "&TScy;": "\u0426",
          "&Tab;": "	",
          "&Tau;": "\u03A4",
          "&Tcaron;": "\u0164",
          "&Tcedil;": "\u0162",
          "&Tcy;": "\u0422",
          "&Tfr;": "\uD835\uDD17",
          "&Therefore;": "\u2234",
          "&Theta;": "\u0398",
          "&ThickSpace;": "\u205F\u200A",
          "&ThinSpace;": "\u2009",
          "&Tilde;": "\u223C",
          "&TildeEqual;": "\u2243",
          "&TildeFullEqual;": "\u2245",
          "&TildeTilde;": "\u2248",
          "&Topf;": "\uD835\uDD4B",
          "&TripleDot;": "\u20DB",
          "&Tscr;": "\uD835\uDCAF",
          "&Tstrok;": "\u0166",
          "&Uacute": "\xDA",
          "&Uacute;": "\xDA",
          "&Uarr;": "\u219F",
          "&Uarrocir;": "\u2949",
          "&Ubrcy;": "\u040E",
          "&Ubreve;": "\u016C",
          "&Ucirc": "\xDB",
          "&Ucirc;": "\xDB",
          "&Ucy;": "\u0423",
          "&Udblac;": "\u0170",
          "&Ufr;": "\uD835\uDD18",
          "&Ugrave": "\xD9",
          "&Ugrave;": "\xD9",
          "&Umacr;": "\u016A",
          "&UnderBar;": "_",
          "&UnderBrace;": "\u23DF",
          "&UnderBracket;": "\u23B5",
          "&UnderParenthesis;": "\u23DD",
          "&Union;": "\u22C3",
          "&UnionPlus;": "\u228E",
          "&Uogon;": "\u0172",
          "&Uopf;": "\uD835\uDD4C",
          "&UpArrow;": "\u2191",
          "&UpArrowBar;": "\u2912",
          "&UpArrowDownArrow;": "\u21C5",
          "&UpDownArrow;": "\u2195",
          "&UpEquilibrium;": "\u296E",
          "&UpTee;": "\u22A5",
          "&UpTeeArrow;": "\u21A5",
          "&Uparrow;": "\u21D1",
          "&Updownarrow;": "\u21D5",
          "&UpperLeftArrow;": "\u2196",
          "&UpperRightArrow;": "\u2197",
          "&Upsi;": "\u03D2",
          "&Upsilon;": "\u03A5",
          "&Uring;": "\u016E",
          "&Uscr;": "\uD835\uDCB0",
          "&Utilde;": "\u0168",
          "&Uuml": "\xDC",
          "&Uuml;": "\xDC",
          "&VDash;": "\u22AB",
          "&Vbar;": "\u2AEB",
          "&Vcy;": "\u0412",
          "&Vdash;": "\u22A9",
          "&Vdashl;": "\u2AE6",
          "&Vee;": "\u22C1",
          "&Verbar;": "\u2016",
          "&Vert;": "\u2016",
          "&VerticalBar;": "\u2223",
          "&VerticalLine;": "|",
          "&VerticalSeparator;": "\u2758",
          "&VerticalTilde;": "\u2240",
          "&VeryThinSpace;": "\u200A",
          "&Vfr;": "\uD835\uDD19",
          "&Vopf;": "\uD835\uDD4D",
          "&Vscr;": "\uD835\uDCB1",
          "&Vvdash;": "\u22AA",
          "&Wcirc;": "\u0174",
          "&Wedge;": "\u22C0",
          "&Wfr;": "\uD835\uDD1A",
          "&Wopf;": "\uD835\uDD4E",
          "&Wscr;": "\uD835\uDCB2",
          "&Xfr;": "\uD835\uDD1B",
          "&Xi;": "\u039E",
          "&Xopf;": "\uD835\uDD4F",
          "&Xscr;": "\uD835\uDCB3",
          "&YAcy;": "\u042F",
          "&YIcy;": "\u0407",
          "&YUcy;": "\u042E",
          "&Yacute": "\xDD",
          "&Yacute;": "\xDD",
          "&Ycirc;": "\u0176",
          "&Ycy;": "\u042B",
          "&Yfr;": "\uD835\uDD1C",
          "&Yopf;": "\uD835\uDD50",
          "&Yscr;": "\uD835\uDCB4",
          "&Yuml;": "\u0178",
          "&ZHcy;": "\u0416",
          "&Zacute;": "\u0179",
          "&Zcaron;": "\u017D",
          "&Zcy;": "\u0417",
          "&Zdot;": "\u017B",
          "&ZeroWidthSpace;": "\u200B",
          "&Zeta;": "\u0396",
          "&Zfr;": "\u2128",
          "&Zopf;": "\u2124",
          "&Zscr;": "\uD835\uDCB5",
          "&aacute": "\xE1",
          "&aacute;": "\xE1",
          "&abreve;": "\u0103",
          "&ac;": "\u223E",
          "&acE;": "\u223E\u0333",
          "&acd;": "\u223F",
          "&acirc": "\xE2",
          "&acirc;": "\xE2",
          "&acute": "\xB4",
          "&acute;": "\xB4",
          "&acy;": "\u0430",
          "&aelig": "\xE6",
          "&aelig;": "\xE6",
          "&af;": "\u2061",
          "&afr;": "\uD835\uDD1E",
          "&agrave": "\xE0",
          "&agrave;": "\xE0",
          "&alefsym;": "\u2135",
          "&aleph;": "\u2135",
          "&alpha;": "\u03B1",
          "&amacr;": "\u0101",
          "&amalg;": "\u2A3F",
          "&amp": "&",
          "&amp;": "&",
          "&and;": "\u2227",
          "&andand;": "\u2A55",
          "&andd;": "\u2A5C",
          "&andslope;": "\u2A58",
          "&andv;": "\u2A5A",
          "&ang;": "\u2220",
          "&ange;": "\u29A4",
          "&angle;": "\u2220",
          "&angmsd;": "\u2221",
          "&angmsdaa;": "\u29A8",
          "&angmsdab;": "\u29A9",
          "&angmsdac;": "\u29AA",
          "&angmsdad;": "\u29AB",
          "&angmsdae;": "\u29AC",
          "&angmsdaf;": "\u29AD",
          "&angmsdag;": "\u29AE",
          "&angmsdah;": "\u29AF",
          "&angrt;": "\u221F",
          "&angrtvb;": "\u22BE",
          "&angrtvbd;": "\u299D",
          "&angsph;": "\u2222",
          "&angst;": "\xC5",
          "&angzarr;": "\u237C",
          "&aogon;": "\u0105",
          "&aopf;": "\uD835\uDD52",
          "&ap;": "\u2248",
          "&apE;": "\u2A70",
          "&apacir;": "\u2A6F",
          "&ape;": "\u224A",
          "&apid;": "\u224B",
          "&apos;": "'",
          "&approx;": "\u2248",
          "&approxeq;": "\u224A",
          "&aring": "\xE5",
          "&aring;": "\xE5",
          "&ascr;": "\uD835\uDCB6",
          "&ast;": "*",
          "&asymp;": "\u2248",
          "&asympeq;": "\u224D",
          "&atilde": "\xE3",
          "&atilde;": "\xE3",
          "&auml": "\xE4",
          "&auml;": "\xE4",
          "&awconint;": "\u2233",
          "&awint;": "\u2A11",
          "&bNot;": "\u2AED",
          "&backcong;": "\u224C",
          "&backepsilon;": "\u03F6",
          "&backprime;": "\u2035",
          "&backsim;": "\u223D",
          "&backsimeq;": "\u22CD",
          "&barvee;": "\u22BD",
          "&barwed;": "\u2305",
          "&barwedge;": "\u2305",
          "&bbrk;": "\u23B5",
          "&bbrktbrk;": "\u23B6",
          "&bcong;": "\u224C",
          "&bcy;": "\u0431",
          "&bdquo;": "\u201E",
          "&becaus;": "\u2235",
          "&because;": "\u2235",
          "&bemptyv;": "\u29B0",
          "&bepsi;": "\u03F6",
          "&bernou;": "\u212C",
          "&beta;": "\u03B2",
          "&beth;": "\u2136",
          "&between;": "\u226C",
          "&bfr;": "\uD835\uDD1F",
          "&bigcap;": "\u22C2",
          "&bigcirc;": "\u25EF",
          "&bigcup;": "\u22C3",
          "&bigodot;": "\u2A00",
          "&bigoplus;": "\u2A01",
          "&bigotimes;": "\u2A02",
          "&bigsqcup;": "\u2A06",
          "&bigstar;": "\u2605",
          "&bigtriangledown;": "\u25BD",
          "&bigtriangleup;": "\u25B3",
          "&biguplus;": "\u2A04",
          "&bigvee;": "\u22C1",
          "&bigwedge;": "\u22C0",
          "&bkarow;": "\u290D",
          "&blacklozenge;": "\u29EB",
          "&blacksquare;": "\u25AA",
          "&blacktriangle;": "\u25B4",
          "&blacktriangledown;": "\u25BE",
          "&blacktriangleleft;": "\u25C2",
          "&blacktriangleright;": "\u25B8",
          "&blank;": "\u2423",
          "&blk12;": "\u2592",
          "&blk14;": "\u2591",
          "&blk34;": "\u2593",
          "&block;": "\u2588",
          "&bne;": "=\u20E5",
          "&bnequiv;": "\u2261\u20E5",
          "&bnot;": "\u2310",
          "&bopf;": "\uD835\uDD53",
          "&bot;": "\u22A5",
          "&bottom;": "\u22A5",
          "&bowtie;": "\u22C8",
          "&boxDL;": "\u2557",
          "&boxDR;": "\u2554",
          "&boxDl;": "\u2556",
          "&boxDr;": "\u2553",
          "&boxH;": "\u2550",
          "&boxHD;": "\u2566",
          "&boxHU;": "\u2569",
          "&boxHd;": "\u2564",
          "&boxHu;": "\u2567",
          "&boxUL;": "\u255D",
          "&boxUR;": "\u255A",
          "&boxUl;": "\u255C",
          "&boxUr;": "\u2559",
          "&boxV;": "\u2551",
          "&boxVH;": "\u256C",
          "&boxVL;": "\u2563",
          "&boxVR;": "\u2560",
          "&boxVh;": "\u256B",
          "&boxVl;": "\u2562",
          "&boxVr;": "\u255F",
          "&boxbox;": "\u29C9",
          "&boxdL;": "\u2555",
          "&boxdR;": "\u2552",
          "&boxdl;": "\u2510",
          "&boxdr;": "\u250C",
          "&boxh;": "\u2500",
          "&boxhD;": "\u2565",
          "&boxhU;": "\u2568",
          "&boxhd;": "\u252C",
          "&boxhu;": "\u2534",
          "&boxminus;": "\u229F",
          "&boxplus;": "\u229E",
          "&boxtimes;": "\u22A0",
          "&boxuL;": "\u255B",
          "&boxuR;": "\u2558",
          "&boxul;": "\u2518",
          "&boxur;": "\u2514",
          "&boxv;": "\u2502",
          "&boxvH;": "\u256A",
          "&boxvL;": "\u2561",
          "&boxvR;": "\u255E",
          "&boxvh;": "\u253C",
          "&boxvl;": "\u2524",
          "&boxvr;": "\u251C",
          "&bprime;": "\u2035",
          "&breve;": "\u02D8",
          "&brvbar": "\xA6",
          "&brvbar;": "\xA6",
          "&bscr;": "\uD835\uDCB7",
          "&bsemi;": "\u204F",
          "&bsim;": "\u223D",
          "&bsime;": "\u22CD",
          "&bsol;": "\\",
          "&bsolb;": "\u29C5",
          "&bsolhsub;": "\u27C8",
          "&bull;": "\u2022",
          "&bullet;": "\u2022",
          "&bump;": "\u224E",
          "&bumpE;": "\u2AAE",
          "&bumpe;": "\u224F",
          "&bumpeq;": "\u224F",
          "&cacute;": "\u0107",
          "&cap;": "\u2229",
          "&capand;": "\u2A44",
          "&capbrcup;": "\u2A49",
          "&capcap;": "\u2A4B",
          "&capcup;": "\u2A47",
          "&capdot;": "\u2A40",
          "&caps;": "\u2229\uFE00",
          "&caret;": "\u2041",
          "&caron;": "\u02C7",
          "&ccaps;": "\u2A4D",
          "&ccaron;": "\u010D",
          "&ccedil": "\xE7",
          "&ccedil;": "\xE7",
          "&ccirc;": "\u0109",
          "&ccups;": "\u2A4C",
          "&ccupssm;": "\u2A50",
          "&cdot;": "\u010B",
          "&cedil": "\xB8",
          "&cedil;": "\xB8",
          "&cemptyv;": "\u29B2",
          "&cent": "\xA2",
          "&cent;": "\xA2",
          "&centerdot;": "\xB7",
          "&cfr;": "\uD835\uDD20",
          "&chcy;": "\u0447",
          "&check;": "\u2713",
          "&checkmark;": "\u2713",
          "&chi;": "\u03C7",
          "&cir;": "\u25CB",
          "&cirE;": "\u29C3",
          "&circ;": "\u02C6",
          "&circeq;": "\u2257",
          "&circlearrowleft;": "\u21BA",
          "&circlearrowright;": "\u21BB",
          "&circledR;": "\xAE",
          "&circledS;": "\u24C8",
          "&circledast;": "\u229B",
          "&circledcirc;": "\u229A",
          "&circleddash;": "\u229D",
          "&cire;": "\u2257",
          "&cirfnint;": "\u2A10",
          "&cirmid;": "\u2AEF",
          "&cirscir;": "\u29C2",
          "&clubs;": "\u2663",
          "&clubsuit;": "\u2663",
          "&colon;": ":",
          "&colone;": "\u2254",
          "&coloneq;": "\u2254",
          "&comma;": ",",
          "&commat;": "@",
          "&comp;": "\u2201",
          "&compfn;": "\u2218",
          "&complement;": "\u2201",
          "&complexes;": "\u2102",
          "&cong;": "\u2245",
          "&congdot;": "\u2A6D",
          "&conint;": "\u222E",
          "&copf;": "\uD835\uDD54",
          "&coprod;": "\u2210",
          "&copy": "\xA9",
          "&copy;": "\xA9",
          "&copysr;": "\u2117",
          "&crarr;": "\u21B5",
          "&cross;": "\u2717",
          "&cscr;": "\uD835\uDCB8",
          "&csub;": "\u2ACF",
          "&csube;": "\u2AD1",
          "&csup;": "\u2AD0",
          "&csupe;": "\u2AD2",
          "&ctdot;": "\u22EF",
          "&cudarrl;": "\u2938",
          "&cudarrr;": "\u2935",
          "&cuepr;": "\u22DE",
          "&cuesc;": "\u22DF",
          "&cularr;": "\u21B6",
          "&cularrp;": "\u293D",
          "&cup;": "\u222A",
          "&cupbrcap;": "\u2A48",
          "&cupcap;": "\u2A46",
          "&cupcup;": "\u2A4A",
          "&cupdot;": "\u228D",
          "&cupor;": "\u2A45",
          "&cups;": "\u222A\uFE00",
          "&curarr;": "\u21B7",
          "&curarrm;": "\u293C",
          "&curlyeqprec;": "\u22DE",
          "&curlyeqsucc;": "\u22DF",
          "&curlyvee;": "\u22CE",
          "&curlywedge;": "\u22CF",
          "&curren": "\xA4",
          "&curren;": "\xA4",
          "&curvearrowleft;": "\u21B6",
          "&curvearrowright;": "\u21B7",
          "&cuvee;": "\u22CE",
          "&cuwed;": "\u22CF",
          "&cwconint;": "\u2232",
          "&cwint;": "\u2231",
          "&cylcty;": "\u232D",
          "&dArr;": "\u21D3",
          "&dHar;": "\u2965",
          "&dagger;": "\u2020",
          "&daleth;": "\u2138",
          "&darr;": "\u2193",
          "&dash;": "\u2010",
          "&dashv;": "\u22A3",
          "&dbkarow;": "\u290F",
          "&dblac;": "\u02DD",
          "&dcaron;": "\u010F",
          "&dcy;": "\u0434",
          "&dd;": "\u2146",
          "&ddagger;": "\u2021",
          "&ddarr;": "\u21CA",
          "&ddotseq;": "\u2A77",
          "&deg": "\xB0",
          "&deg;": "\xB0",
          "&delta;": "\u03B4",
          "&demptyv;": "\u29B1",
          "&dfisht;": "\u297F",
          "&dfr;": "\uD835\uDD21",
          "&dharl;": "\u21C3",
          "&dharr;": "\u21C2",
          "&diam;": "\u22C4",
          "&diamond;": "\u22C4",
          "&diamondsuit;": "\u2666",
          "&diams;": "\u2666",
          "&die;": "\xA8",
          "&digamma;": "\u03DD",
          "&disin;": "\u22F2",
          "&div;": "\xF7",
          "&divide": "\xF7",
          "&divide;": "\xF7",
          "&divideontimes;": "\u22C7",
          "&divonx;": "\u22C7",
          "&djcy;": "\u0452",
          "&dlcorn;": "\u231E",
          "&dlcrop;": "\u230D",
          "&dollar;": "$",
          "&dopf;": "\uD835\uDD55",
          "&dot;": "\u02D9",
          "&doteq;": "\u2250",
          "&doteqdot;": "\u2251",
          "&dotminus;": "\u2238",
          "&dotplus;": "\u2214",
          "&dotsquare;": "\u22A1",
          "&doublebarwedge;": "\u2306",
          "&downarrow;": "\u2193",
          "&downdownarrows;": "\u21CA",
          "&downharpoonleft;": "\u21C3",
          "&downharpoonright;": "\u21C2",
          "&drbkarow;": "\u2910",
          "&drcorn;": "\u231F",
          "&drcrop;": "\u230C",
          "&dscr;": "\uD835\uDCB9",
          "&dscy;": "\u0455",
          "&dsol;": "\u29F6",
          "&dstrok;": "\u0111",
          "&dtdot;": "\u22F1",
          "&dtri;": "\u25BF",
          "&dtrif;": "\u25BE",
          "&duarr;": "\u21F5",
          "&duhar;": "\u296F",
          "&dwangle;": "\u29A6",
          "&dzcy;": "\u045F",
          "&dzigrarr;": "\u27FF",
          "&eDDot;": "\u2A77",
          "&eDot;": "\u2251",
          "&eacute": "\xE9",
          "&eacute;": "\xE9",
          "&easter;": "\u2A6E",
          "&ecaron;": "\u011B",
          "&ecir;": "\u2256",
          "&ecirc": "\xEA",
          "&ecirc;": "\xEA",
          "&ecolon;": "\u2255",
          "&ecy;": "\u044D",
          "&edot;": "\u0117",
          "&ee;": "\u2147",
          "&efDot;": "\u2252",
          "&efr;": "\uD835\uDD22",
          "&eg;": "\u2A9A",
          "&egrave": "\xE8",
          "&egrave;": "\xE8",
          "&egs;": "\u2A96",
          "&egsdot;": "\u2A98",
          "&el;": "\u2A99",
          "&elinters;": "\u23E7",
          "&ell;": "\u2113",
          "&els;": "\u2A95",
          "&elsdot;": "\u2A97",
          "&emacr;": "\u0113",
          "&empty;": "\u2205",
          "&emptyset;": "\u2205",
          "&emptyv;": "\u2205",
          "&emsp13;": "\u2004",
          "&emsp14;": "\u2005",
          "&emsp;": "\u2003",
          "&eng;": "\u014B",
          "&ensp;": "\u2002",
          "&eogon;": "\u0119",
          "&eopf;": "\uD835\uDD56",
          "&epar;": "\u22D5",
          "&eparsl;": "\u29E3",
          "&eplus;": "\u2A71",
          "&epsi;": "\u03B5",
          "&epsilon;": "\u03B5",
          "&epsiv;": "\u03F5",
          "&eqcirc;": "\u2256",
          "&eqcolon;": "\u2255",
          "&eqsim;": "\u2242",
          "&eqslantgtr;": "\u2A96",
          "&eqslantless;": "\u2A95",
          "&equals;": "=",
          "&equest;": "\u225F",
          "&equiv;": "\u2261",
          "&equivDD;": "\u2A78",
          "&eqvparsl;": "\u29E5",
          "&erDot;": "\u2253",
          "&erarr;": "\u2971",
          "&escr;": "\u212F",
          "&esdot;": "\u2250",
          "&esim;": "\u2242",
          "&eta;": "\u03B7",
          "&eth": "\xF0",
          "&eth;": "\xF0",
          "&euml": "\xEB",
          "&euml;": "\xEB",
          "&euro;": "\u20AC",
          "&excl;": "!",
          "&exist;": "\u2203",
          "&expectation;": "\u2130",
          "&exponentiale;": "\u2147",
          "&fallingdotseq;": "\u2252",
          "&fcy;": "\u0444",
          "&female;": "\u2640",
          "&ffilig;": "\uFB03",
          "&fflig;": "\uFB00",
          "&ffllig;": "\uFB04",
          "&ffr;": "\uD835\uDD23",
          "&filig;": "\uFB01",
          "&fjlig;": "fj",
          "&flat;": "\u266D",
          "&fllig;": "\uFB02",
          "&fltns;": "\u25B1",
          "&fnof;": "\u0192",
          "&fopf;": "\uD835\uDD57",
          "&forall;": "\u2200",
          "&fork;": "\u22D4",
          "&forkv;": "\u2AD9",
          "&fpartint;": "\u2A0D",
          "&frac12": "\xBD",
          "&frac12;": "\xBD",
          "&frac13;": "\u2153",
          "&frac14": "\xBC",
          "&frac14;": "\xBC",
          "&frac15;": "\u2155",
          "&frac16;": "\u2159",
          "&frac18;": "\u215B",
          "&frac23;": "\u2154",
          "&frac25;": "\u2156",
          "&frac34": "\xBE",
          "&frac34;": "\xBE",
          "&frac35;": "\u2157",
          "&frac38;": "\u215C",
          "&frac45;": "\u2158",
          "&frac56;": "\u215A",
          "&frac58;": "\u215D",
          "&frac78;": "\u215E",
          "&frasl;": "\u2044",
          "&frown;": "\u2322",
          "&fscr;": "\uD835\uDCBB",
          "&gE;": "\u2267",
          "&gEl;": "\u2A8C",
          "&gacute;": "\u01F5",
          "&gamma;": "\u03B3",
          "&gammad;": "\u03DD",
          "&gap;": "\u2A86",
          "&gbreve;": "\u011F",
          "&gcirc;": "\u011D",
          "&gcy;": "\u0433",
          "&gdot;": "\u0121",
          "&ge;": "\u2265",
          "&gel;": "\u22DB",
          "&geq;": "\u2265",
          "&geqq;": "\u2267",
          "&geqslant;": "\u2A7E",
          "&ges;": "\u2A7E",
          "&gescc;": "\u2AA9",
          "&gesdot;": "\u2A80",
          "&gesdoto;": "\u2A82",
          "&gesdotol;": "\u2A84",
          "&gesl;": "\u22DB\uFE00",
          "&gesles;": "\u2A94",
          "&gfr;": "\uD835\uDD24",
          "&gg;": "\u226B",
          "&ggg;": "\u22D9",
          "&gimel;": "\u2137",
          "&gjcy;": "\u0453",
          "&gl;": "\u2277",
          "&glE;": "\u2A92",
          "&gla;": "\u2AA5",
          "&glj;": "\u2AA4",
          "&gnE;": "\u2269",
          "&gnap;": "\u2A8A",
          "&gnapprox;": "\u2A8A",
          "&gne;": "\u2A88",
          "&gneq;": "\u2A88",
          "&gneqq;": "\u2269",
          "&gnsim;": "\u22E7",
          "&gopf;": "\uD835\uDD58",
          "&grave;": "`",
          "&gscr;": "\u210A",
          "&gsim;": "\u2273",
          "&gsime;": "\u2A8E",
          "&gsiml;": "\u2A90",
          "&gt": ">",
          "&gt;": ">",
          "&gtcc;": "\u2AA7",
          "&gtcir;": "\u2A7A",
          "&gtdot;": "\u22D7",
          "&gtlPar;": "\u2995",
          "&gtquest;": "\u2A7C",
          "&gtrapprox;": "\u2A86",
          "&gtrarr;": "\u2978",
          "&gtrdot;": "\u22D7",
          "&gtreqless;": "\u22DB",
          "&gtreqqless;": "\u2A8C",
          "&gtrless;": "\u2277",
          "&gtrsim;": "\u2273",
          "&gvertneqq;": "\u2269\uFE00",
          "&gvnE;": "\u2269\uFE00",
          "&hArr;": "\u21D4",
          "&hairsp;": "\u200A",
          "&half;": "\xBD",
          "&hamilt;": "\u210B",
          "&hardcy;": "\u044A",
          "&harr;": "\u2194",
          "&harrcir;": "\u2948",
          "&harrw;": "\u21AD",
          "&hbar;": "\u210F",
          "&hcirc;": "\u0125",
          "&hearts;": "\u2665",
          "&heartsuit;": "\u2665",
          "&hellip;": "\u2026",
          "&hercon;": "\u22B9",
          "&hfr;": "\uD835\uDD25",
          "&hksearow;": "\u2925",
          "&hkswarow;": "\u2926",
          "&hoarr;": "\u21FF",
          "&homtht;": "\u223B",
          "&hookleftarrow;": "\u21A9",
          "&hookrightarrow;": "\u21AA",
          "&hopf;": "\uD835\uDD59",
          "&horbar;": "\u2015",
          "&hscr;": "\uD835\uDCBD",
          "&hslash;": "\u210F",
          "&hstrok;": "\u0127",
          "&hybull;": "\u2043",
          "&hyphen;": "\u2010",
          "&iacute": "\xED",
          "&iacute;": "\xED",
          "&ic;": "\u2063",
          "&icirc": "\xEE",
          "&icirc;": "\xEE",
          "&icy;": "\u0438",
          "&iecy;": "\u0435",
          "&iexcl": "\xA1",
          "&iexcl;": "\xA1",
          "&iff;": "\u21D4",
          "&ifr;": "\uD835\uDD26",
          "&igrave": "\xEC",
          "&igrave;": "\xEC",
          "&ii;": "\u2148",
          "&iiiint;": "\u2A0C",
          "&iiint;": "\u222D",
          "&iinfin;": "\u29DC",
          "&iiota;": "\u2129",
          "&ijlig;": "\u0133",
          "&imacr;": "\u012B",
          "&image;": "\u2111",
          "&imagline;": "\u2110",
          "&imagpart;": "\u2111",
          "&imath;": "\u0131",
          "&imof;": "\u22B7",
          "&imped;": "\u01B5",
          "&in;": "\u2208",
          "&incare;": "\u2105",
          "&infin;": "\u221E",
          "&infintie;": "\u29DD",
          "&inodot;": "\u0131",
          "&int;": "\u222B",
          "&intcal;": "\u22BA",
          "&integers;": "\u2124",
          "&intercal;": "\u22BA",
          "&intlarhk;": "\u2A17",
          "&intprod;": "\u2A3C",
          "&iocy;": "\u0451",
          "&iogon;": "\u012F",
          "&iopf;": "\uD835\uDD5A",
          "&iota;": "\u03B9",
          "&iprod;": "\u2A3C",
          "&iquest": "\xBF",
          "&iquest;": "\xBF",
          "&iscr;": "\uD835\uDCBE",
          "&isin;": "\u2208",
          "&isinE;": "\u22F9",
          "&isindot;": "\u22F5",
          "&isins;": "\u22F4",
          "&isinsv;": "\u22F3",
          "&isinv;": "\u2208",
          "&it;": "\u2062",
          "&itilde;": "\u0129",
          "&iukcy;": "\u0456",
          "&iuml": "\xEF",
          "&iuml;": "\xEF",
          "&jcirc;": "\u0135",
          "&jcy;": "\u0439",
          "&jfr;": "\uD835\uDD27",
          "&jmath;": "\u0237",
          "&jopf;": "\uD835\uDD5B",
          "&jscr;": "\uD835\uDCBF",
          "&jsercy;": "\u0458",
          "&jukcy;": "\u0454",
          "&kappa;": "\u03BA",
          "&kappav;": "\u03F0",
          "&kcedil;": "\u0137",
          "&kcy;": "\u043A",
          "&kfr;": "\uD835\uDD28",
          "&kgreen;": "\u0138",
          "&khcy;": "\u0445",
          "&kjcy;": "\u045C",
          "&kopf;": "\uD835\uDD5C",
          "&kscr;": "\uD835\uDCC0",
          "&lAarr;": "\u21DA",
          "&lArr;": "\u21D0",
          "&lAtail;": "\u291B",
          "&lBarr;": "\u290E",
          "&lE;": "\u2266",
          "&lEg;": "\u2A8B",
          "&lHar;": "\u2962",
          "&lacute;": "\u013A",
          "&laemptyv;": "\u29B4",
          "&lagran;": "\u2112",
          "&lambda;": "\u03BB",
          "&lang;": "\u27E8",
          "&langd;": "\u2991",
          "&langle;": "\u27E8",
          "&lap;": "\u2A85",
          "&laquo": "\xAB",
          "&laquo;": "\xAB",
          "&larr;": "\u2190",
          "&larrb;": "\u21E4",
          "&larrbfs;": "\u291F",
          "&larrfs;": "\u291D",
          "&larrhk;": "\u21A9",
          "&larrlp;": "\u21AB",
          "&larrpl;": "\u2939",
          "&larrsim;": "\u2973",
          "&larrtl;": "\u21A2",
          "&lat;": "\u2AAB",
          "&latail;": "\u2919",
          "&late;": "\u2AAD",
          "&lates;": "\u2AAD\uFE00",
          "&lbarr;": "\u290C",
          "&lbbrk;": "\u2772",
          "&lbrace;": "{",
          "&lbrack;": "[",
          "&lbrke;": "\u298B",
          "&lbrksld;": "\u298F",
          "&lbrkslu;": "\u298D",
          "&lcaron;": "\u013E",
          "&lcedil;": "\u013C",
          "&lceil;": "\u2308",
          "&lcub;": "{",
          "&lcy;": "\u043B",
          "&ldca;": "\u2936",
          "&ldquo;": "\u201C",
          "&ldquor;": "\u201E",
          "&ldrdhar;": "\u2967",
          "&ldrushar;": "\u294B",
          "&ldsh;": "\u21B2",
          "&le;": "\u2264",
          "&leftarrow;": "\u2190",
          "&leftarrowtail;": "\u21A2",
          "&leftharpoondown;": "\u21BD",
          "&leftharpoonup;": "\u21BC",
          "&leftleftarrows;": "\u21C7",
          "&leftrightarrow;": "\u2194",
          "&leftrightarrows;": "\u21C6",
          "&leftrightharpoons;": "\u21CB",
          "&leftrightsquigarrow;": "\u21AD",
          "&leftthreetimes;": "\u22CB",
          "&leg;": "\u22DA",
          "&leq;": "\u2264",
          "&leqq;": "\u2266",
          "&leqslant;": "\u2A7D",
          "&les;": "\u2A7D",
          "&lescc;": "\u2AA8",
          "&lesdot;": "\u2A7F",
          "&lesdoto;": "\u2A81",
          "&lesdotor;": "\u2A83",
          "&lesg;": "\u22DA\uFE00",
          "&lesges;": "\u2A93",
          "&lessapprox;": "\u2A85",
          "&lessdot;": "\u22D6",
          "&lesseqgtr;": "\u22DA",
          "&lesseqqgtr;": "\u2A8B",
          "&lessgtr;": "\u2276",
          "&lesssim;": "\u2272",
          "&lfisht;": "\u297C",
          "&lfloor;": "\u230A",
          "&lfr;": "\uD835\uDD29",
          "&lg;": "\u2276",
          "&lgE;": "\u2A91",
          "&lhard;": "\u21BD",
          "&lharu;": "\u21BC",
          "&lharul;": "\u296A",
          "&lhblk;": "\u2584",
          "&ljcy;": "\u0459",
          "&ll;": "\u226A",
          "&llarr;": "\u21C7",
          "&llcorner;": "\u231E",
          "&llhard;": "\u296B",
          "&lltri;": "\u25FA",
          "&lmidot;": "\u0140",
          "&lmoust;": "\u23B0",
          "&lmoustache;": "\u23B0",
          "&lnE;": "\u2268",
          "&lnap;": "\u2A89",
          "&lnapprox;": "\u2A89",
          "&lne;": "\u2A87",
          "&lneq;": "\u2A87",
          "&lneqq;": "\u2268",
          "&lnsim;": "\u22E6",
          "&loang;": "\u27EC",
          "&loarr;": "\u21FD",
          "&lobrk;": "\u27E6",
          "&longleftarrow;": "\u27F5",
          "&longleftrightarrow;": "\u27F7",
          "&longmapsto;": "\u27FC",
          "&longrightarrow;": "\u27F6",
          "&looparrowleft;": "\u21AB",
          "&looparrowright;": "\u21AC",
          "&lopar;": "\u2985",
          "&lopf;": "\uD835\uDD5D",
          "&loplus;": "\u2A2D",
          "&lotimes;": "\u2A34",
          "&lowast;": "\u2217",
          "&lowbar;": "_",
          "&loz;": "\u25CA",
          "&lozenge;": "\u25CA",
          "&lozf;": "\u29EB",
          "&lpar;": "(",
          "&lparlt;": "\u2993",
          "&lrarr;": "\u21C6",
          "&lrcorner;": "\u231F",
          "&lrhar;": "\u21CB",
          "&lrhard;": "\u296D",
          "&lrm;": "\u200E",
          "&lrtri;": "\u22BF",
          "&lsaquo;": "\u2039",
          "&lscr;": "\uD835\uDCC1",
          "&lsh;": "\u21B0",
          "&lsim;": "\u2272",
          "&lsime;": "\u2A8D",
          "&lsimg;": "\u2A8F",
          "&lsqb;": "[",
          "&lsquo;": "\u2018",
          "&lsquor;": "\u201A",
          "&lstrok;": "\u0142",
          "&lt": "<",
          "&lt;": "<",
          "&ltcc;": "\u2AA6",
          "&ltcir;": "\u2A79",
          "&ltdot;": "\u22D6",
          "&lthree;": "\u22CB",
          "&ltimes;": "\u22C9",
          "&ltlarr;": "\u2976",
          "&ltquest;": "\u2A7B",
          "&ltrPar;": "\u2996",
          "&ltri;": "\u25C3",
          "&ltrie;": "\u22B4",
          "&ltrif;": "\u25C2",
          "&lurdshar;": "\u294A",
          "&luruhar;": "\u2966",
          "&lvertneqq;": "\u2268\uFE00",
          "&lvnE;": "\u2268\uFE00",
          "&mDDot;": "\u223A",
          "&macr": "\xAF",
          "&macr;": "\xAF",
          "&male;": "\u2642",
          "&malt;": "\u2720",
          "&maltese;": "\u2720",
          "&map;": "\u21A6",
          "&mapsto;": "\u21A6",
          "&mapstodown;": "\u21A7",
          "&mapstoleft;": "\u21A4",
          "&mapstoup;": "\u21A5",
          "&marker;": "\u25AE",
          "&mcomma;": "\u2A29",
          "&mcy;": "\u043C",
          "&mdash;": "\u2014",
          "&measuredangle;": "\u2221",
          "&mfr;": "\uD835\uDD2A",
          "&mho;": "\u2127",
          "&micro": "\xB5",
          "&micro;": "\xB5",
          "&mid;": "\u2223",
          "&midast;": "*",
          "&midcir;": "\u2AF0",
          "&middot": "\xB7",
          "&middot;": "\xB7",
          "&minus;": "\u2212",
          "&minusb;": "\u229F",
          "&minusd;": "\u2238",
          "&minusdu;": "\u2A2A",
          "&mlcp;": "\u2ADB",
          "&mldr;": "\u2026",
          "&mnplus;": "\u2213",
          "&models;": "\u22A7",
          "&mopf;": "\uD835\uDD5E",
          "&mp;": "\u2213",
          "&mscr;": "\uD835\uDCC2",
          "&mstpos;": "\u223E",
          "&mu;": "\u03BC",
          "&multimap;": "\u22B8",
          "&mumap;": "\u22B8",
          "&nGg;": "\u22D9\u0338",
          "&nGt;": "\u226B\u20D2",
          "&nGtv;": "\u226B\u0338",
          "&nLeftarrow;": "\u21CD",
          "&nLeftrightarrow;": "\u21CE",
          "&nLl;": "\u22D8\u0338",
          "&nLt;": "\u226A\u20D2",
          "&nLtv;": "\u226A\u0338",
          "&nRightarrow;": "\u21CF",
          "&nVDash;": "\u22AF",
          "&nVdash;": "\u22AE",
          "&nabla;": "\u2207",
          "&nacute;": "\u0144",
          "&nang;": "\u2220\u20D2",
          "&nap;": "\u2249",
          "&napE;": "\u2A70\u0338",
          "&napid;": "\u224B\u0338",
          "&napos;": "\u0149",
          "&napprox;": "\u2249",
          "&natur;": "\u266E",
          "&natural;": "\u266E",
          "&naturals;": "\u2115",
          "&nbsp": "\xA0",
          "&nbsp;": "\xA0",
          "&nbump;": "\u224E\u0338",
          "&nbumpe;": "\u224F\u0338",
          "&ncap;": "\u2A43",
          "&ncaron;": "\u0148",
          "&ncedil;": "\u0146",
          "&ncong;": "\u2247",
          "&ncongdot;": "\u2A6D\u0338",
          "&ncup;": "\u2A42",
          "&ncy;": "\u043D",
          "&ndash;": "\u2013",
          "&ne;": "\u2260",
          "&neArr;": "\u21D7",
          "&nearhk;": "\u2924",
          "&nearr;": "\u2197",
          "&nearrow;": "\u2197",
          "&nedot;": "\u2250\u0338",
          "&nequiv;": "\u2262",
          "&nesear;": "\u2928",
          "&nesim;": "\u2242\u0338",
          "&nexist;": "\u2204",
          "&nexists;": "\u2204",
          "&nfr;": "\uD835\uDD2B",
          "&ngE;": "\u2267\u0338",
          "&nge;": "\u2271",
          "&ngeq;": "\u2271",
          "&ngeqq;": "\u2267\u0338",
          "&ngeqslant;": "\u2A7E\u0338",
          "&nges;": "\u2A7E\u0338",
          "&ngsim;": "\u2275",
          "&ngt;": "\u226F",
          "&ngtr;": "\u226F",
          "&nhArr;": "\u21CE",
          "&nharr;": "\u21AE",
          "&nhpar;": "\u2AF2",
          "&ni;": "\u220B",
          "&nis;": "\u22FC",
          "&nisd;": "\u22FA",
          "&niv;": "\u220B",
          "&njcy;": "\u045A",
          "&nlArr;": "\u21CD",
          "&nlE;": "\u2266\u0338",
          "&nlarr;": "\u219A",
          "&nldr;": "\u2025",
          "&nle;": "\u2270",
          "&nleftarrow;": "\u219A",
          "&nleftrightarrow;": "\u21AE",
          "&nleq;": "\u2270",
          "&nleqq;": "\u2266\u0338",
          "&nleqslant;": "\u2A7D\u0338",
          "&nles;": "\u2A7D\u0338",
          "&nless;": "\u226E",
          "&nlsim;": "\u2274",
          "&nlt;": "\u226E",
          "&nltri;": "\u22EA",
          "&nltrie;": "\u22EC",
          "&nmid;": "\u2224",
          "&nopf;": "\uD835\uDD5F",
          "&not": "\xAC",
          "&not;": "\xAC",
          "&notin;": "\u2209",
          "&notinE;": "\u22F9\u0338",
          "&notindot;": "\u22F5\u0338",
          "&notinva;": "\u2209",
          "&notinvb;": "\u22F7",
          "&notinvc;": "\u22F6",
          "&notni;": "\u220C",
          "&notniva;": "\u220C",
          "&notnivb;": "\u22FE",
          "&notnivc;": "\u22FD",
          "&npar;": "\u2226",
          "&nparallel;": "\u2226",
          "&nparsl;": "\u2AFD\u20E5",
          "&npart;": "\u2202\u0338",
          "&npolint;": "\u2A14",
          "&npr;": "\u2280",
          "&nprcue;": "\u22E0",
          "&npre;": "\u2AAF\u0338",
          "&nprec;": "\u2280",
          "&npreceq;": "\u2AAF\u0338",
          "&nrArr;": "\u21CF",
          "&nrarr;": "\u219B",
          "&nrarrc;": "\u2933\u0338",
          "&nrarrw;": "\u219D\u0338",
          "&nrightarrow;": "\u219B",
          "&nrtri;": "\u22EB",
          "&nrtrie;": "\u22ED",
          "&nsc;": "\u2281",
          "&nsccue;": "\u22E1",
          "&nsce;": "\u2AB0\u0338",
          "&nscr;": "\uD835\uDCC3",
          "&nshortmid;": "\u2224",
          "&nshortparallel;": "\u2226",
          "&nsim;": "\u2241",
          "&nsime;": "\u2244",
          "&nsimeq;": "\u2244",
          "&nsmid;": "\u2224",
          "&nspar;": "\u2226",
          "&nsqsube;": "\u22E2",
          "&nsqsupe;": "\u22E3",
          "&nsub;": "\u2284",
          "&nsubE;": "\u2AC5\u0338",
          "&nsube;": "\u2288",
          "&nsubset;": "\u2282\u20D2",
          "&nsubseteq;": "\u2288",
          "&nsubseteqq;": "\u2AC5\u0338",
          "&nsucc;": "\u2281",
          "&nsucceq;": "\u2AB0\u0338",
          "&nsup;": "\u2285",
          "&nsupE;": "\u2AC6\u0338",
          "&nsupe;": "\u2289",
          "&nsupset;": "\u2283\u20D2",
          "&nsupseteq;": "\u2289",
          "&nsupseteqq;": "\u2AC6\u0338",
          "&ntgl;": "\u2279",
          "&ntilde": "\xF1",
          "&ntilde;": "\xF1",
          "&ntlg;": "\u2278",
          "&ntriangleleft;": "\u22EA",
          "&ntrianglelefteq;": "\u22EC",
          "&ntriangleright;": "\u22EB",
          "&ntrianglerighteq;": "\u22ED",
          "&nu;": "\u03BD",
          "&num;": "#",
          "&numero;": "\u2116",
          "&numsp;": "\u2007",
          "&nvDash;": "\u22AD",
          "&nvHarr;": "\u2904",
          "&nvap;": "\u224D\u20D2",
          "&nvdash;": "\u22AC",
          "&nvge;": "\u2265\u20D2",
          "&nvgt;": ">\u20D2",
          "&nvinfin;": "\u29DE",
          "&nvlArr;": "\u2902",
          "&nvle;": "\u2264\u20D2",
          "&nvlt;": "<\u20D2",
          "&nvltrie;": "\u22B4\u20D2",
          "&nvrArr;": "\u2903",
          "&nvrtrie;": "\u22B5\u20D2",
          "&nvsim;": "\u223C\u20D2",
          "&nwArr;": "\u21D6",
          "&nwarhk;": "\u2923",
          "&nwarr;": "\u2196",
          "&nwarrow;": "\u2196",
          "&nwnear;": "\u2927",
          "&oS;": "\u24C8",
          "&oacute": "\xF3",
          "&oacute;": "\xF3",
          "&oast;": "\u229B",
          "&ocir;": "\u229A",
          "&ocirc": "\xF4",
          "&ocirc;": "\xF4",
          "&ocy;": "\u043E",
          "&odash;": "\u229D",
          "&odblac;": "\u0151",
          "&odiv;": "\u2A38",
          "&odot;": "\u2299",
          "&odsold;": "\u29BC",
          "&oelig;": "\u0153",
          "&ofcir;": "\u29BF",
          "&ofr;": "\uD835\uDD2C",
          "&ogon;": "\u02DB",
          "&ograve": "\xF2",
          "&ograve;": "\xF2",
          "&ogt;": "\u29C1",
          "&ohbar;": "\u29B5",
          "&ohm;": "\u03A9",
          "&oint;": "\u222E",
          "&olarr;": "\u21BA",
          "&olcir;": "\u29BE",
          "&olcross;": "\u29BB",
          "&oline;": "\u203E",
          "&olt;": "\u29C0",
          "&omacr;": "\u014D",
          "&omega;": "\u03C9",
          "&omicron;": "\u03BF",
          "&omid;": "\u29B6",
          "&ominus;": "\u2296",
          "&oopf;": "\uD835\uDD60",
          "&opar;": "\u29B7",
          "&operp;": "\u29B9",
          "&oplus;": "\u2295",
          "&or;": "\u2228",
          "&orarr;": "\u21BB",
          "&ord;": "\u2A5D",
          "&order;": "\u2134",
          "&orderof;": "\u2134",
          "&ordf": "\xAA",
          "&ordf;": "\xAA",
          "&ordm": "\xBA",
          "&ordm;": "\xBA",
          "&origof;": "\u22B6",
          "&oror;": "\u2A56",
          "&orslope;": "\u2A57",
          "&orv;": "\u2A5B",
          "&oscr;": "\u2134",
          "&oslash": "\xF8",
          "&oslash;": "\xF8",
          "&osol;": "\u2298",
          "&otilde": "\xF5",
          "&otilde;": "\xF5",
          "&otimes;": "\u2297",
          "&otimesas;": "\u2A36",
          "&ouml": "\xF6",
          "&ouml;": "\xF6",
          "&ovbar;": "\u233D",
          "&par;": "\u2225",
          "&para": "\xB6",
          "&para;": "\xB6",
          "&parallel;": "\u2225",
          "&parsim;": "\u2AF3",
          "&parsl;": "\u2AFD",
          "&part;": "\u2202",
          "&pcy;": "\u043F",
          "&percnt;": "%",
          "&period;": ".",
          "&permil;": "\u2030",
          "&perp;": "\u22A5",
          "&pertenk;": "\u2031",
          "&pfr;": "\uD835\uDD2D",
          "&phi;": "\u03C6",
          "&phiv;": "\u03D5",
          "&phmmat;": "\u2133",
          "&phone;": "\u260E",
          "&pi;": "\u03C0",
          "&pitchfork;": "\u22D4",
          "&piv;": "\u03D6",
          "&planck;": "\u210F",
          "&planckh;": "\u210E",
          "&plankv;": "\u210F",
          "&plus;": "+",
          "&plusacir;": "\u2A23",
          "&plusb;": "\u229E",
          "&pluscir;": "\u2A22",
          "&plusdo;": "\u2214",
          "&plusdu;": "\u2A25",
          "&pluse;": "\u2A72",
          "&plusmn": "\xB1",
          "&plusmn;": "\xB1",
          "&plussim;": "\u2A26",
          "&plustwo;": "\u2A27",
          "&pm;": "\xB1",
          "&pointint;": "\u2A15",
          "&popf;": "\uD835\uDD61",
          "&pound": "\xA3",
          "&pound;": "\xA3",
          "&pr;": "\u227A",
          "&prE;": "\u2AB3",
          "&prap;": "\u2AB7",
          "&prcue;": "\u227C",
          "&pre;": "\u2AAF",
          "&prec;": "\u227A",
          "&precapprox;": "\u2AB7",
          "&preccurlyeq;": "\u227C",
          "&preceq;": "\u2AAF",
          "&precnapprox;": "\u2AB9",
          "&precneqq;": "\u2AB5",
          "&precnsim;": "\u22E8",
          "&precsim;": "\u227E",
          "&prime;": "\u2032",
          "&primes;": "\u2119",
          "&prnE;": "\u2AB5",
          "&prnap;": "\u2AB9",
          "&prnsim;": "\u22E8",
          "&prod;": "\u220F",
          "&profalar;": "\u232E",
          "&profline;": "\u2312",
          "&profsurf;": "\u2313",
          "&prop;": "\u221D",
          "&propto;": "\u221D",
          "&prsim;": "\u227E",
          "&prurel;": "\u22B0",
          "&pscr;": "\uD835\uDCC5",
          "&psi;": "\u03C8",
          "&puncsp;": "\u2008",
          "&qfr;": "\uD835\uDD2E",
          "&qint;": "\u2A0C",
          "&qopf;": "\uD835\uDD62",
          "&qprime;": "\u2057",
          "&qscr;": "\uD835\uDCC6",
          "&quaternions;": "\u210D",
          "&quatint;": "\u2A16",
          "&quest;": "?",
          "&questeq;": "\u225F",
          "&quot": '"',
          "&quot;": '"',
          "&rAarr;": "\u21DB",
          "&rArr;": "\u21D2",
          "&rAtail;": "\u291C",
          "&rBarr;": "\u290F",
          "&rHar;": "\u2964",
          "&race;": "\u223D\u0331",
          "&racute;": "\u0155",
          "&radic;": "\u221A",
          "&raemptyv;": "\u29B3",
          "&rang;": "\u27E9",
          "&rangd;": "\u2992",
          "&range;": "\u29A5",
          "&rangle;": "\u27E9",
          "&raquo": "\xBB",
          "&raquo;": "\xBB",
          "&rarr;": "\u2192",
          "&rarrap;": "\u2975",
          "&rarrb;": "\u21E5",
          "&rarrbfs;": "\u2920",
          "&rarrc;": "\u2933",
          "&rarrfs;": "\u291E",
          "&rarrhk;": "\u21AA",
          "&rarrlp;": "\u21AC",
          "&rarrpl;": "\u2945",
          "&rarrsim;": "\u2974",
          "&rarrtl;": "\u21A3",
          "&rarrw;": "\u219D",
          "&ratail;": "\u291A",
          "&ratio;": "\u2236",
          "&rationals;": "\u211A",
          "&rbarr;": "\u290D",
          "&rbbrk;": "\u2773",
          "&rbrace;": "}",
          "&rbrack;": "]",
          "&rbrke;": "\u298C",
          "&rbrksld;": "\u298E",
          "&rbrkslu;": "\u2990",
          "&rcaron;": "\u0159",
          "&rcedil;": "\u0157",
          "&rceil;": "\u2309",
          "&rcub;": "}",
          "&rcy;": "\u0440",
          "&rdca;": "\u2937",
          "&rdldhar;": "\u2969",
          "&rdquo;": "\u201D",
          "&rdquor;": "\u201D",
          "&rdsh;": "\u21B3",
          "&real;": "\u211C",
          "&realine;": "\u211B",
          "&realpart;": "\u211C",
          "&reals;": "\u211D",
          "&rect;": "\u25AD",
          "&reg": "\xAE",
          "&reg;": "\xAE",
          "&rfisht;": "\u297D",
          "&rfloor;": "\u230B",
          "&rfr;": "\uD835\uDD2F",
          "&rhard;": "\u21C1",
          "&rharu;": "\u21C0",
          "&rharul;": "\u296C",
          "&rho;": "\u03C1",
          "&rhov;": "\u03F1",
          "&rightarrow;": "\u2192",
          "&rightarrowtail;": "\u21A3",
          "&rightharpoondown;": "\u21C1",
          "&rightharpoonup;": "\u21C0",
          "&rightleftarrows;": "\u21C4",
          "&rightleftharpoons;": "\u21CC",
          "&rightrightarrows;": "\u21C9",
          "&rightsquigarrow;": "\u219D",
          "&rightthreetimes;": "\u22CC",
          "&ring;": "\u02DA",
          "&risingdotseq;": "\u2253",
          "&rlarr;": "\u21C4",
          "&rlhar;": "\u21CC",
          "&rlm;": "\u200F",
          "&rmoust;": "\u23B1",
          "&rmoustache;": "\u23B1",
          "&rnmid;": "\u2AEE",
          "&roang;": "\u27ED",
          "&roarr;": "\u21FE",
          "&robrk;": "\u27E7",
          "&ropar;": "\u2986",
          "&ropf;": "\uD835\uDD63",
          "&roplus;": "\u2A2E",
          "&rotimes;": "\u2A35",
          "&rpar;": ")",
          "&rpargt;": "\u2994",
          "&rppolint;": "\u2A12",
          "&rrarr;": "\u21C9",
          "&rsaquo;": "\u203A",
          "&rscr;": "\uD835\uDCC7",
          "&rsh;": "\u21B1",
          "&rsqb;": "]",
          "&rsquo;": "\u2019",
          "&rsquor;": "\u2019",
          "&rthree;": "\u22CC",
          "&rtimes;": "\u22CA",
          "&rtri;": "\u25B9",
          "&rtrie;": "\u22B5",
          "&rtrif;": "\u25B8",
          "&rtriltri;": "\u29CE",
          "&ruluhar;": "\u2968",
          "&rx;": "\u211E",
          "&sacute;": "\u015B",
          "&sbquo;": "\u201A",
          "&sc;": "\u227B",
          "&scE;": "\u2AB4",
          "&scap;": "\u2AB8",
          "&scaron;": "\u0161",
          "&sccue;": "\u227D",
          "&sce;": "\u2AB0",
          "&scedil;": "\u015F",
          "&scirc;": "\u015D",
          "&scnE;": "\u2AB6",
          "&scnap;": "\u2ABA",
          "&scnsim;": "\u22E9",
          "&scpolint;": "\u2A13",
          "&scsim;": "\u227F",
          "&scy;": "\u0441",
          "&sdot;": "\u22C5",
          "&sdotb;": "\u22A1",
          "&sdote;": "\u2A66",
          "&seArr;": "\u21D8",
          "&searhk;": "\u2925",
          "&searr;": "\u2198",
          "&searrow;": "\u2198",
          "&sect": "\xA7",
          "&sect;": "\xA7",
          "&semi;": ";",
          "&seswar;": "\u2929",
          "&setminus;": "\u2216",
          "&setmn;": "\u2216",
          "&sext;": "\u2736",
          "&sfr;": "\uD835\uDD30",
          "&sfrown;": "\u2322",
          "&sharp;": "\u266F",
          "&shchcy;": "\u0449",
          "&shcy;": "\u0448",
          "&shortmid;": "\u2223",
          "&shortparallel;": "\u2225",
          "&shy": "\xAD",
          "&shy;": "\xAD",
          "&sigma;": "\u03C3",
          "&sigmaf;": "\u03C2",
          "&sigmav;": "\u03C2",
          "&sim;": "\u223C",
          "&simdot;": "\u2A6A",
          "&sime;": "\u2243",
          "&simeq;": "\u2243",
          "&simg;": "\u2A9E",
          "&simgE;": "\u2AA0",
          "&siml;": "\u2A9D",
          "&simlE;": "\u2A9F",
          "&simne;": "\u2246",
          "&simplus;": "\u2A24",
          "&simrarr;": "\u2972",
          "&slarr;": "\u2190",
          "&smallsetminus;": "\u2216",
          "&smashp;": "\u2A33",
          "&smeparsl;": "\u29E4",
          "&smid;": "\u2223",
          "&smile;": "\u2323",
          "&smt;": "\u2AAA",
          "&smte;": "\u2AAC",
          "&smtes;": "\u2AAC\uFE00",
          "&softcy;": "\u044C",
          "&sol;": "/",
          "&solb;": "\u29C4",
          "&solbar;": "\u233F",
          "&sopf;": "\uD835\uDD64",
          "&spades;": "\u2660",
          "&spadesuit;": "\u2660",
          "&spar;": "\u2225",
          "&sqcap;": "\u2293",
          "&sqcaps;": "\u2293\uFE00",
          "&sqcup;": "\u2294",
          "&sqcups;": "\u2294\uFE00",
          "&sqsub;": "\u228F",
          "&sqsube;": "\u2291",
          "&sqsubset;": "\u228F",
          "&sqsubseteq;": "\u2291",
          "&sqsup;": "\u2290",
          "&sqsupe;": "\u2292",
          "&sqsupset;": "\u2290",
          "&sqsupseteq;": "\u2292",
          "&squ;": "\u25A1",
          "&square;": "\u25A1",
          "&squarf;": "\u25AA",
          "&squf;": "\u25AA",
          "&srarr;": "\u2192",
          "&sscr;": "\uD835\uDCC8",
          "&ssetmn;": "\u2216",
          "&ssmile;": "\u2323",
          "&sstarf;": "\u22C6",
          "&star;": "\u2606",
          "&starf;": "\u2605",
          "&straightepsilon;": "\u03F5",
          "&straightphi;": "\u03D5",
          "&strns;": "\xAF",
          "&sub;": "\u2282",
          "&subE;": "\u2AC5",
          "&subdot;": "\u2ABD",
          "&sube;": "\u2286",
          "&subedot;": "\u2AC3",
          "&submult;": "\u2AC1",
          "&subnE;": "\u2ACB",
          "&subne;": "\u228A",
          "&subplus;": "\u2ABF",
          "&subrarr;": "\u2979",
          "&subset;": "\u2282",
          "&subseteq;": "\u2286",
          "&subseteqq;": "\u2AC5",
          "&subsetneq;": "\u228A",
          "&subsetneqq;": "\u2ACB",
          "&subsim;": "\u2AC7",
          "&subsub;": "\u2AD5",
          "&subsup;": "\u2AD3",
          "&succ;": "\u227B",
          "&succapprox;": "\u2AB8",
          "&succcurlyeq;": "\u227D",
          "&succeq;": "\u2AB0",
          "&succnapprox;": "\u2ABA",
          "&succneqq;": "\u2AB6",
          "&succnsim;": "\u22E9",
          "&succsim;": "\u227F",
          "&sum;": "\u2211",
          "&sung;": "\u266A",
          "&sup1": "\xB9",
          "&sup1;": "\xB9",
          "&sup2": "\xB2",
          "&sup2;": "\xB2",
          "&sup3": "\xB3",
          "&sup3;": "\xB3",
          "&sup;": "\u2283",
          "&supE;": "\u2AC6",
          "&supdot;": "\u2ABE",
          "&supdsub;": "\u2AD8",
          "&supe;": "\u2287",
          "&supedot;": "\u2AC4",
          "&suphsol;": "\u27C9",
          "&suphsub;": "\u2AD7",
          "&suplarr;": "\u297B",
          "&supmult;": "\u2AC2",
          "&supnE;": "\u2ACC",
          "&supne;": "\u228B",
          "&supplus;": "\u2AC0",
          "&supset;": "\u2283",
          "&supseteq;": "\u2287",
          "&supseteqq;": "\u2AC6",
          "&supsetneq;": "\u228B",
          "&supsetneqq;": "\u2ACC",
          "&supsim;": "\u2AC8",
          "&supsub;": "\u2AD4",
          "&supsup;": "\u2AD6",
          "&swArr;": "\u21D9",
          "&swarhk;": "\u2926",
          "&swarr;": "\u2199",
          "&swarrow;": "\u2199",
          "&swnwar;": "\u292A",
          "&szlig": "\xDF",
          "&szlig;": "\xDF",
          "&target;": "\u2316",
          "&tau;": "\u03C4",
          "&tbrk;": "\u23B4",
          "&tcaron;": "\u0165",
          "&tcedil;": "\u0163",
          "&tcy;": "\u0442",
          "&tdot;": "\u20DB",
          "&telrec;": "\u2315",
          "&tfr;": "\uD835\uDD31",
          "&there4;": "\u2234",
          "&therefore;": "\u2234",
          "&theta;": "\u03B8",
          "&thetasym;": "\u03D1",
          "&thetav;": "\u03D1",
          "&thickapprox;": "\u2248",
          "&thicksim;": "\u223C",
          "&thinsp;": "\u2009",
          "&thkap;": "\u2248",
          "&thksim;": "\u223C",
          "&thorn": "\xFE",
          "&thorn;": "\xFE",
          "&tilde;": "\u02DC",
          "&times": "\xD7",
          "&times;": "\xD7",
          "&timesb;": "\u22A0",
          "&timesbar;": "\u2A31",
          "&timesd;": "\u2A30",
          "&tint;": "\u222D",
          "&toea;": "\u2928",
          "&top;": "\u22A4",
          "&topbot;": "\u2336",
          "&topcir;": "\u2AF1",
          "&topf;": "\uD835\uDD65",
          "&topfork;": "\u2ADA",
          "&tosa;": "\u2929",
          "&tprime;": "\u2034",
          "&trade;": "\u2122",
          "&triangle;": "\u25B5",
          "&triangledown;": "\u25BF",
          "&triangleleft;": "\u25C3",
          "&trianglelefteq;": "\u22B4",
          "&triangleq;": "\u225C",
          "&triangleright;": "\u25B9",
          "&trianglerighteq;": "\u22B5",
          "&tridot;": "\u25EC",
          "&trie;": "\u225C",
          "&triminus;": "\u2A3A",
          "&triplus;": "\u2A39",
          "&trisb;": "\u29CD",
          "&tritime;": "\u2A3B",
          "&trpezium;": "\u23E2",
          "&tscr;": "\uD835\uDCC9",
          "&tscy;": "\u0446",
          "&tshcy;": "\u045B",
          "&tstrok;": "\u0167",
          "&twixt;": "\u226C",
          "&twoheadleftarrow;": "\u219E",
          "&twoheadrightarrow;": "\u21A0",
          "&uArr;": "\u21D1",
          "&uHar;": "\u2963",
          "&uacute": "\xFA",
          "&uacute;": "\xFA",
          "&uarr;": "\u2191",
          "&ubrcy;": "\u045E",
          "&ubreve;": "\u016D",
          "&ucirc": "\xFB",
          "&ucirc;": "\xFB",
          "&ucy;": "\u0443",
          "&udarr;": "\u21C5",
          "&udblac;": "\u0171",
          "&udhar;": "\u296E",
          "&ufisht;": "\u297E",
          "&ufr;": "\uD835\uDD32",
          "&ugrave": "\xF9",
          "&ugrave;": "\xF9",
          "&uharl;": "\u21BF",
          "&uharr;": "\u21BE",
          "&uhblk;": "\u2580",
          "&ulcorn;": "\u231C",
          "&ulcorner;": "\u231C",
          "&ulcrop;": "\u230F",
          "&ultri;": "\u25F8",
          "&umacr;": "\u016B",
          "&uml": "\xA8",
          "&uml;": "\xA8",
          "&uogon;": "\u0173",
          "&uopf;": "\uD835\uDD66",
          "&uparrow;": "\u2191",
          "&updownarrow;": "\u2195",
          "&upharpoonleft;": "\u21BF",
          "&upharpoonright;": "\u21BE",
          "&uplus;": "\u228E",
          "&upsi;": "\u03C5",
          "&upsih;": "\u03D2",
          "&upsilon;": "\u03C5",
          "&upuparrows;": "\u21C8",
          "&urcorn;": "\u231D",
          "&urcorner;": "\u231D",
          "&urcrop;": "\u230E",
          "&uring;": "\u016F",
          "&urtri;": "\u25F9",
          "&uscr;": "\uD835\uDCCA",
          "&utdot;": "\u22F0",
          "&utilde;": "\u0169",
          "&utri;": "\u25B5",
          "&utrif;": "\u25B4",
          "&uuarr;": "\u21C8",
          "&uuml": "\xFC",
          "&uuml;": "\xFC",
          "&uwangle;": "\u29A7",
          "&vArr;": "\u21D5",
          "&vBar;": "\u2AE8",
          "&vBarv;": "\u2AE9",
          "&vDash;": "\u22A8",
          "&vangrt;": "\u299C",
          "&varepsilon;": "\u03F5",
          "&varkappa;": "\u03F0",
          "&varnothing;": "\u2205",
          "&varphi;": "\u03D5",
          "&varpi;": "\u03D6",
          "&varpropto;": "\u221D",
          "&varr;": "\u2195",
          "&varrho;": "\u03F1",
          "&varsigma;": "\u03C2",
          "&varsubsetneq;": "\u228A\uFE00",
          "&varsubsetneqq;": "\u2ACB\uFE00",
          "&varsupsetneq;": "\u228B\uFE00",
          "&varsupsetneqq;": "\u2ACC\uFE00",
          "&vartheta;": "\u03D1",
          "&vartriangleleft;": "\u22B2",
          "&vartriangleright;": "\u22B3",
          "&vcy;": "\u0432",
          "&vdash;": "\u22A2",
          "&vee;": "\u2228",
          "&veebar;": "\u22BB",
          "&veeeq;": "\u225A",
          "&vellip;": "\u22EE",
          "&verbar;": "|",
          "&vert;": "|",
          "&vfr;": "\uD835\uDD33",
          "&vltri;": "\u22B2",
          "&vnsub;": "\u2282\u20D2",
          "&vnsup;": "\u2283\u20D2",
          "&vopf;": "\uD835\uDD67",
          "&vprop;": "\u221D",
          "&vrtri;": "\u22B3",
          "&vscr;": "\uD835\uDCCB",
          "&vsubnE;": "\u2ACB\uFE00",
          "&vsubne;": "\u228A\uFE00",
          "&vsupnE;": "\u2ACC\uFE00",
          "&vsupne;": "\u228B\uFE00",
          "&vzigzag;": "\u299A",
          "&wcirc;": "\u0175",
          "&wedbar;": "\u2A5F",
          "&wedge;": "\u2227",
          "&wedgeq;": "\u2259",
          "&weierp;": "\u2118",
          "&wfr;": "\uD835\uDD34",
          "&wopf;": "\uD835\uDD68",
          "&wp;": "\u2118",
          "&wr;": "\u2240",
          "&wreath;": "\u2240",
          "&wscr;": "\uD835\uDCCC",
          "&xcap;": "\u22C2",
          "&xcirc;": "\u25EF",
          "&xcup;": "\u22C3",
          "&xdtri;": "\u25BD",
          "&xfr;": "\uD835\uDD35",
          "&xhArr;": "\u27FA",
          "&xharr;": "\u27F7",
          "&xi;": "\u03BE",
          "&xlArr;": "\u27F8",
          "&xlarr;": "\u27F5",
          "&xmap;": "\u27FC",
          "&xnis;": "\u22FB",
          "&xodot;": "\u2A00",
          "&xopf;": "\uD835\uDD69",
          "&xoplus;": "\u2A01",
          "&xotime;": "\u2A02",
          "&xrArr;": "\u27F9",
          "&xrarr;": "\u27F6",
          "&xscr;": "\uD835\uDCCD",
          "&xsqcup;": "\u2A06",
          "&xuplus;": "\u2A04",
          "&xutri;": "\u25B3",
          "&xvee;": "\u22C1",
          "&xwedge;": "\u22C0",
          "&yacute": "\xFD",
          "&yacute;": "\xFD",
          "&yacy;": "\u044F",
          "&ycirc;": "\u0177",
          "&ycy;": "\u044B",
          "&yen": "\xA5",
          "&yen;": "\xA5",
          "&yfr;": "\uD835\uDD36",
          "&yicy;": "\u0457",
          "&yopf;": "\uD835\uDD6A",
          "&yscr;": "\uD835\uDCCE",
          "&yucy;": "\u044E",
          "&yuml": "\xFF",
          "&yuml;": "\xFF",
          "&zacute;": "\u017A",
          "&zcaron;": "\u017E",
          "&zcy;": "\u0437",
          "&zdot;": "\u017C",
          "&zeetrf;": "\u2128",
          "&zeta;": "\u03B6",
          "&zfr;": "\uD835\uDD37",
          "&zhcy;": "\u0436",
          "&zigrarr;": "\u21DD",
          "&zopf;": "\uD835\uDD6B",
          "&zscr;": "\uD835\uDCCF",
          "&zwj;": "\u200D",
          "&zwnj;": "\u200C"
        },
        characters: {
          \u00C6: "&AElig;",
          "&": "&amp;",
          \u00C1: "&Aacute;",
          \u0102: "&Abreve;",
          \u00C2: "&Acirc;",
          \u0410: "&Acy;",
          "\uD835\uDD04": "&Afr;",
          \u00C0: "&Agrave;",
          \u0391: "&Alpha;",
          \u0100: "&Amacr;",
          "\u2A53": "&And;",
          \u0104: "&Aogon;",
          "\uD835\uDD38": "&Aopf;",
          "\u2061": "&af;",
          \u00C5: "&angst;",
          "\uD835\uDC9C": "&Ascr;",
          "\u2254": "&coloneq;",
          \u00C3: "&Atilde;",
          \u00C4: "&Auml;",
          "\u2216": "&ssetmn;",
          "\u2AE7": "&Barv;",
          "\u2306": "&doublebarwedge;",
          \u0411: "&Bcy;",
          "\u2235": "&because;",
          \u212C: "&bernou;",
          \u0392: "&Beta;",
          "\uD835\uDD05": "&Bfr;",
          "\uD835\uDD39": "&Bopf;",
          "\u02D8": "&breve;",
          "\u224E": "&bump;",
          \u0427: "&CHcy;",
          "\xA9": "&copy;",
          \u0106: "&Cacute;",
          "\u22D2": "&Cap;",
          "\u2145": "&DD;",
          \u212D: "&Cfr;",
          \u010C: "&Ccaron;",
          \u00C7: "&Ccedil;",
          \u0108: "&Ccirc;",
          "\u2230": "&Cconint;",
          \u010A: "&Cdot;",
          "\xB8": "&cedil;",
          "\xB7": "&middot;",
          \u03A7: "&Chi;",
          "\u2299": "&odot;",
          "\u2296": "&ominus;",
          "\u2295": "&oplus;",
          "\u2297": "&otimes;",
          "\u2232": "&cwconint;",
          "\u201D": "&rdquor;",
          "\u2019": "&rsquor;",
          "\u2237": "&Proportion;",
          "\u2A74": "&Colone;",
          "\u2261": "&equiv;",
          "\u222F": "&DoubleContourIntegral;",
          "\u222E": "&oint;",
          \u2102: "&complexes;",
          "\u2210": "&coprod;",
          "\u2233": "&awconint;",
          "\u2A2F": "&Cross;",
          "\uD835\uDC9E": "&Cscr;",
          "\u22D3": "&Cup;",
          "\u224D": "&asympeq;",
          "\u2911": "&DDotrahd;",
          \u0402: "&DJcy;",
          \u0405: "&DScy;",
          \u040F: "&DZcy;",
          "\u2021": "&ddagger;",
          "\u21A1": "&Darr;",
          "\u2AE4": "&DoubleLeftTee;",
          \u010E: "&Dcaron;",
          \u0414: "&Dcy;",
          "\u2207": "&nabla;",
          \u0394: "&Delta;",
          "\uD835\uDD07": "&Dfr;",
          "\xB4": "&acute;",
          "\u02D9": "&dot;",
          "\u02DD": "&dblac;",
          "`": "&grave;",
          "\u02DC": "&tilde;",
          "\u22C4": "&diamond;",
          "\u2146": "&dd;",
          "\uD835\uDD3B": "&Dopf;",
          "\xA8": "&uml;",
          "\u20DC": "&DotDot;",
          "\u2250": "&esdot;",
          "\u21D3": "&dArr;",
          "\u21D0": "&lArr;",
          "\u21D4": "&iff;",
          "\u27F8": "&xlArr;",
          "\u27FA": "&xhArr;",
          "\u27F9": "&xrArr;",
          "\u21D2": "&rArr;",
          "\u22A8": "&vDash;",
          "\u21D1": "&uArr;",
          "\u21D5": "&vArr;",
          "\u2225": "&spar;",
          "\u2193": "&downarrow;",
          "\u2913": "&DownArrowBar;",
          "\u21F5": "&duarr;",
          "\u0311": "&DownBreve;",
          "\u2950": "&DownLeftRightVector;",
          "\u295E": "&DownLeftTeeVector;",
          "\u21BD": "&lhard;",
          "\u2956": "&DownLeftVectorBar;",
          "\u295F": "&DownRightTeeVector;",
          "\u21C1": "&rightharpoondown;",
          "\u2957": "&DownRightVectorBar;",
          "\u22A4": "&top;",
          "\u21A7": "&mapstodown;",
          "\uD835\uDC9F": "&Dscr;",
          \u0110: "&Dstrok;",
          \u014A: "&ENG;",
          \u00D0: "&ETH;",
          \u00C9: "&Eacute;",
          \u011A: "&Ecaron;",
          \u00CA: "&Ecirc;",
          \u042D: "&Ecy;",
          \u0116: "&Edot;",
          "\uD835\uDD08": "&Efr;",
          \u00C8: "&Egrave;",
          "\u2208": "&isinv;",
          \u0112: "&Emacr;",
          "\u25FB": "&EmptySmallSquare;",
          "\u25AB": "&EmptyVerySmallSquare;",
          \u0118: "&Eogon;",
          "\uD835\uDD3C": "&Eopf;",
          \u0395: "&Epsilon;",
          "\u2A75": "&Equal;",
          "\u2242": "&esim;",
          "\u21CC": "&rlhar;",
          \u2130: "&expectation;",
          "\u2A73": "&Esim;",
          \u0397: "&Eta;",
          \u00CB: "&Euml;",
          "\u2203": "&exist;",
          "\u2147": "&exponentiale;",
          \u0424: "&Fcy;",
          "\uD835\uDD09": "&Ffr;",
          "\u25FC": "&FilledSmallSquare;",
          "\u25AA": "&squf;",
          "\uD835\uDD3D": "&Fopf;",
          "\u2200": "&forall;",
          \u2131: "&Fscr;",
          \u0403: "&GJcy;",
          ">": "&gt;",
          \u0393: "&Gamma;",
          \u03DC: "&Gammad;",
          \u011E: "&Gbreve;",
          \u0122: "&Gcedil;",
          \u011C: "&Gcirc;",
          \u0413: "&Gcy;",
          \u0120: "&Gdot;",
          "\uD835\uDD0A": "&Gfr;",
          "\u22D9": "&ggg;",
          "\uD835\uDD3E": "&Gopf;",
          "\u2265": "&geq;",
          "\u22DB": "&gtreqless;",
          "\u2267": "&geqq;",
          "\u2AA2": "&GreaterGreater;",
          "\u2277": "&gtrless;",
          "\u2A7E": "&ges;",
          "\u2273": "&gtrsim;",
          "\uD835\uDCA2": "&Gscr;",
          "\u226B": "&gg;",
          \u042A: "&HARDcy;",
          "\u02C7": "&caron;",
          "^": "&Hat;",
          \u0124: "&Hcirc;",
          \u210C: "&Poincareplane;",
          \u210B: "&hamilt;",
          \u210D: "&quaternions;",
          "\u2500": "&boxh;",
          \u0126: "&Hstrok;",
          "\u224F": "&bumpeq;",
          \u0415: "&IEcy;",
          \u0132: "&IJlig;",
          \u0401: "&IOcy;",
          \u00CD: "&Iacute;",
          \u00CE: "&Icirc;",
          \u0418: "&Icy;",
          \u0130: "&Idot;",
          \u2111: "&imagpart;",
          \u00CC: "&Igrave;",
          \u012A: "&Imacr;",
          "\u2148": "&ii;",
          "\u222C": "&Int;",
          "\u222B": "&int;",
          "\u22C2": "&xcap;",
          "\u2063": "&ic;",
          "\u2062": "&it;",
          \u012E: "&Iogon;",
          "\uD835\uDD40": "&Iopf;",
          \u0399: "&Iota;",
          \u2110: "&imagline;",
          \u0128: "&Itilde;",
          \u0406: "&Iukcy;",
          \u00CF: "&Iuml;",
          \u0134: "&Jcirc;",
          \u0419: "&Jcy;",
          "\uD835\uDD0D": "&Jfr;",
          "\uD835\uDD41": "&Jopf;",
          "\uD835\uDCA5": "&Jscr;",
          \u0408: "&Jsercy;",
          \u0404: "&Jukcy;",
          \u0425: "&KHcy;",
          \u040C: "&KJcy;",
          \u039A: "&Kappa;",
          \u0136: "&Kcedil;",
          \u041A: "&Kcy;",
          "\uD835\uDD0E": "&Kfr;",
          "\uD835\uDD42": "&Kopf;",
          "\uD835\uDCA6": "&Kscr;",
          \u0409: "&LJcy;",
          "<": "&lt;",
          \u0139: "&Lacute;",
          \u039B: "&Lambda;",
          "\u27EA": "&Lang;",
          \u2112: "&lagran;",
          "\u219E": "&twoheadleftarrow;",
          \u013D: "&Lcaron;",
          \u013B: "&Lcedil;",
          \u041B: "&Lcy;",
          "\u27E8": "&langle;",
          "\u2190": "&slarr;",
          "\u21E4": "&larrb;",
          "\u21C6": "&lrarr;",
          "\u2308": "&lceil;",
          "\u27E6": "&lobrk;",
          "\u2961": "&LeftDownTeeVector;",
          "\u21C3": "&downharpoonleft;",
          "\u2959": "&LeftDownVectorBar;",
          "\u230A": "&lfloor;",
          "\u2194": "&leftrightarrow;",
          "\u294E": "&LeftRightVector;",
          "\u22A3": "&dashv;",
          "\u21A4": "&mapstoleft;",
          "\u295A": "&LeftTeeVector;",
          "\u22B2": "&vltri;",
          "\u29CF": "&LeftTriangleBar;",
          "\u22B4": "&trianglelefteq;",
          "\u2951": "&LeftUpDownVector;",
          "\u2960": "&LeftUpTeeVector;",
          "\u21BF": "&upharpoonleft;",
          "\u2958": "&LeftUpVectorBar;",
          "\u21BC": "&lharu;",
          "\u2952": "&LeftVectorBar;",
          "\u22DA": "&lesseqgtr;",
          "\u2266": "&leqq;",
          "\u2276": "&lg;",
          "\u2AA1": "&LessLess;",
          "\u2A7D": "&les;",
          "\u2272": "&lsim;",
          "\uD835\uDD0F": "&Lfr;",
          "\u22D8": "&Ll;",
          "\u21DA": "&lAarr;",
          \u013F: "&Lmidot;",
          "\u27F5": "&xlarr;",
          "\u27F7": "&xharr;",
          "\u27F6": "&xrarr;",
          "\uD835\uDD43": "&Lopf;",
          "\u2199": "&swarrow;",
          "\u2198": "&searrow;",
          "\u21B0": "&lsh;",
          \u0141: "&Lstrok;",
          "\u226A": "&ll;",
          "\u2905": "&Map;",
          \u041C: "&Mcy;",
          "\u205F": "&MediumSpace;",
          \u2133: "&phmmat;",
          "\uD835\uDD10": "&Mfr;",
          "\u2213": "&mp;",
          "\uD835\uDD44": "&Mopf;",
          \u039C: "&Mu;",
          \u040A: "&NJcy;",
          \u0143: "&Nacute;",
          \u0147: "&Ncaron;",
          \u0145: "&Ncedil;",
          \u041D: "&Ncy;",
          "\u200B": "&ZeroWidthSpace;",
          "\n": "&NewLine;",
          "\uD835\uDD11": "&Nfr;",
          "\u2060": "&NoBreak;",
          "\xA0": "&nbsp;",
          \u2115: "&naturals;",
          "\u2AEC": "&Not;",
          "\u2262": "&nequiv;",
          "\u226D": "&NotCupCap;",
          "\u2226": "&nspar;",
          "\u2209": "&notinva;",
          "\u2260": "&ne;",
          "\u2242\u0338": "&nesim;",
          "\u2204": "&nexists;",
          "\u226F": "&ngtr;",
          "\u2271": "&ngeq;",
          "\u2267\u0338": "&ngeqq;",
          "\u226B\u0338": "&nGtv;",
          "\u2279": "&ntgl;",
          "\u2A7E\u0338": "&nges;",
          "\u2275": "&ngsim;",
          "\u224E\u0338": "&nbump;",
          "\u224F\u0338": "&nbumpe;",
          "\u22EA": "&ntriangleleft;",
          "\u29CF\u0338": "&NotLeftTriangleBar;",
          "\u22EC": "&ntrianglelefteq;",
          "\u226E": "&nlt;",
          "\u2270": "&nleq;",
          "\u2278": "&ntlg;",
          "\u226A\u0338": "&nLtv;",
          "\u2A7D\u0338": "&nles;",
          "\u2274": "&nlsim;",
          "\u2AA2\u0338": "&NotNestedGreaterGreater;",
          "\u2AA1\u0338": "&NotNestedLessLess;",
          "\u2280": "&nprec;",
          "\u2AAF\u0338": "&npreceq;",
          "\u22E0": "&nprcue;",
          "\u220C": "&notniva;",
          "\u22EB": "&ntriangleright;",
          "\u29D0\u0338": "&NotRightTriangleBar;",
          "\u22ED": "&ntrianglerighteq;",
          "\u228F\u0338": "&NotSquareSubset;",
          "\u22E2": "&nsqsube;",
          "\u2290\u0338": "&NotSquareSuperset;",
          "\u22E3": "&nsqsupe;",
          "\u2282\u20D2": "&vnsub;",
          "\u2288": "&nsubseteq;",
          "\u2281": "&nsucc;",
          "\u2AB0\u0338": "&nsucceq;",
          "\u22E1": "&nsccue;",
          "\u227F\u0338": "&NotSucceedsTilde;",
          "\u2283\u20D2": "&vnsup;",
          "\u2289": "&nsupseteq;",
          "\u2241": "&nsim;",
          "\u2244": "&nsimeq;",
          "\u2247": "&ncong;",
          "\u2249": "&napprox;",
          "\u2224": "&nsmid;",
          "\uD835\uDCA9": "&Nscr;",
          \u00D1: "&Ntilde;",
          \u039D: "&Nu;",
          \u0152: "&OElig;",
          \u00D3: "&Oacute;",
          \u00D4: "&Ocirc;",
          \u041E: "&Ocy;",
          \u0150: "&Odblac;",
          "\uD835\uDD12": "&Ofr;",
          \u00D2: "&Ograve;",
          \u014C: "&Omacr;",
          \u03A9: "&ohm;",
          \u039F: "&Omicron;",
          "\uD835\uDD46": "&Oopf;",
          "\u201C": "&ldquo;",
          "\u2018": "&lsquo;",
          "\u2A54": "&Or;",
          "\uD835\uDCAA": "&Oscr;",
          \u00D8: "&Oslash;",
          \u00D5: "&Otilde;",
          "\u2A37": "&Otimes;",
          \u00D6: "&Ouml;",
          "\u203E": "&oline;",
          "\u23DE": "&OverBrace;",
          "\u23B4": "&tbrk;",
          "\u23DC": "&OverParenthesis;",
          "\u2202": "&part;",
          \u041F: "&Pcy;",
          "\uD835\uDD13": "&Pfr;",
          \u03A6: "&Phi;",
          \u03A0: "&Pi;",
          "\xB1": "&pm;",
          \u2119: "&primes;",
          "\u2ABB": "&Pr;",
          "\u227A": "&prec;",
          "\u2AAF": "&preceq;",
          "\u227C": "&preccurlyeq;",
          "\u227E": "&prsim;",
          "\u2033": "&Prime;",
          "\u220F": "&prod;",
          "\u221D": "&vprop;",
          "\uD835\uDCAB": "&Pscr;",
          \u03A8: "&Psi;",
          '"': "&quot;",
          "\uD835\uDD14": "&Qfr;",
          \u211A: "&rationals;",
          "\uD835\uDCAC": "&Qscr;",
          "\u2910": "&drbkarow;",
          "\xAE": "&reg;",
          \u0154: "&Racute;",
          "\u27EB": "&Rang;",
          "\u21A0": "&twoheadrightarrow;",
          "\u2916": "&Rarrtl;",
          \u0158: "&Rcaron;",
          \u0156: "&Rcedil;",
          \u0420: "&Rcy;",
          \u211C: "&realpart;",
          "\u220B": "&niv;",
          "\u21CB": "&lrhar;",
          "\u296F": "&duhar;",
          \u03A1: "&Rho;",
          "\u27E9": "&rangle;",
          "\u2192": "&srarr;",
          "\u21E5": "&rarrb;",
          "\u21C4": "&rlarr;",
          "\u2309": "&rceil;",
          "\u27E7": "&robrk;",
          "\u295D": "&RightDownTeeVector;",
          "\u21C2": "&downharpoonright;",
          "\u2955": "&RightDownVectorBar;",
          "\u230B": "&rfloor;",
          "\u22A2": "&vdash;",
          "\u21A6": "&mapsto;",
          "\u295B": "&RightTeeVector;",
          "\u22B3": "&vrtri;",
          "\u29D0": "&RightTriangleBar;",
          "\u22B5": "&trianglerighteq;",
          "\u294F": "&RightUpDownVector;",
          "\u295C": "&RightUpTeeVector;",
          "\u21BE": "&upharpoonright;",
          "\u2954": "&RightUpVectorBar;",
          "\u21C0": "&rightharpoonup;",
          "\u2953": "&RightVectorBar;",
          \u211D: "&reals;",
          "\u2970": "&RoundImplies;",
          "\u21DB": "&rAarr;",
          \u211B: "&realine;",
          "\u21B1": "&rsh;",
          "\u29F4": "&RuleDelayed;",
          \u0429: "&SHCHcy;",
          \u0428: "&SHcy;",
          \u042C: "&SOFTcy;",
          \u015A: "&Sacute;",
          "\u2ABC": "&Sc;",
          \u0160: "&Scaron;",
          \u015E: "&Scedil;",
          \u015C: "&Scirc;",
          \u0421: "&Scy;",
          "\uD835\uDD16": "&Sfr;",
          "\u2191": "&uparrow;",
          \u03A3: "&Sigma;",
          "\u2218": "&compfn;",
          "\uD835\uDD4A": "&Sopf;",
          "\u221A": "&radic;",
          "\u25A1": "&square;",
          "\u2293": "&sqcap;",
          "\u228F": "&sqsubset;",
          "\u2291": "&sqsubseteq;",
          "\u2290": "&sqsupset;",
          "\u2292": "&sqsupseteq;",
          "\u2294": "&sqcup;",
          "\uD835\uDCAE": "&Sscr;",
          "\u22C6": "&sstarf;",
          "\u22D0": "&Subset;",
          "\u2286": "&subseteq;",
          "\u227B": "&succ;",
          "\u2AB0": "&succeq;",
          "\u227D": "&succcurlyeq;",
          "\u227F": "&succsim;",
          "\u2211": "&sum;",
          "\u22D1": "&Supset;",
          "\u2283": "&supset;",
          "\u2287": "&supseteq;",
          \u00DE: "&THORN;",
          "\u2122": "&trade;",
          \u040B: "&TSHcy;",
          \u0426: "&TScy;",
          "	": "&Tab;",
          \u03A4: "&Tau;",
          \u0164: "&Tcaron;",
          \u0162: "&Tcedil;",
          \u0422: "&Tcy;",
          "\uD835\uDD17": "&Tfr;",
          "\u2234": "&therefore;",
          \u0398: "&Theta;",
          "\u205F\u200A": "&ThickSpace;",
          "\u2009": "&thinsp;",
          "\u223C": "&thksim;",
          "\u2243": "&simeq;",
          "\u2245": "&cong;",
          "\u2248": "&thkap;",
          "\uD835\uDD4B": "&Topf;",
          "\u20DB": "&tdot;",
          "\uD835\uDCAF": "&Tscr;",
          \u0166: "&Tstrok;",
          \u00DA: "&Uacute;",
          "\u219F": "&Uarr;",
          "\u2949": "&Uarrocir;",
          \u040E: "&Ubrcy;",
          \u016C: "&Ubreve;",
          \u00DB: "&Ucirc;",
          \u0423: "&Ucy;",
          \u0170: "&Udblac;",
          "\uD835\uDD18": "&Ufr;",
          \u00D9: "&Ugrave;",
          \u016A: "&Umacr;",
          _: "&lowbar;",
          "\u23DF": "&UnderBrace;",
          "\u23B5": "&bbrk;",
          "\u23DD": "&UnderParenthesis;",
          "\u22C3": "&xcup;",
          "\u228E": "&uplus;",
          \u0172: "&Uogon;",
          "\uD835\uDD4C": "&Uopf;",
          "\u2912": "&UpArrowBar;",
          "\u21C5": "&udarr;",
          "\u2195": "&varr;",
          "\u296E": "&udhar;",
          "\u22A5": "&perp;",
          "\u21A5": "&mapstoup;",
          "\u2196": "&nwarrow;",
          "\u2197": "&nearrow;",
          \u03D2: "&upsih;",
          \u03A5: "&Upsilon;",
          \u016E: "&Uring;",
          "\uD835\uDCB0": "&Uscr;",
          \u0168: "&Utilde;",
          \u00DC: "&Uuml;",
          "\u22AB": "&VDash;",
          "\u2AEB": "&Vbar;",
          \u0412: "&Vcy;",
          "\u22A9": "&Vdash;",
          "\u2AE6": "&Vdashl;",
          "\u22C1": "&xvee;",
          "\u2016": "&Vert;",
          "\u2223": "&smid;",
          "|": "&vert;",
          "\u2758": "&VerticalSeparator;",
          "\u2240": "&wreath;",
          "\u200A": "&hairsp;",
          "\uD835\uDD19": "&Vfr;",
          "\uD835\uDD4D": "&Vopf;",
          "\uD835\uDCB1": "&Vscr;",
          "\u22AA": "&Vvdash;",
          \u0174: "&Wcirc;",
          "\u22C0": "&xwedge;",
          "\uD835\uDD1A": "&Wfr;",
          "\uD835\uDD4E": "&Wopf;",
          "\uD835\uDCB2": "&Wscr;",
          "\uD835\uDD1B": "&Xfr;",
          \u039E: "&Xi;",
          "\uD835\uDD4F": "&Xopf;",
          "\uD835\uDCB3": "&Xscr;",
          \u042F: "&YAcy;",
          \u0407: "&YIcy;",
          \u042E: "&YUcy;",
          \u00DD: "&Yacute;",
          \u0176: "&Ycirc;",
          \u042B: "&Ycy;",
          "\uD835\uDD1C": "&Yfr;",
          "\uD835\uDD50": "&Yopf;",
          "\uD835\uDCB4": "&Yscr;",
          \u0178: "&Yuml;",
          \u0416: "&ZHcy;",
          \u0179: "&Zacute;",
          \u017D: "&Zcaron;",
          \u0417: "&Zcy;",
          \u017B: "&Zdot;",
          \u0396: "&Zeta;",
          \u2128: "&zeetrf;",
          \u2124: "&integers;",
          "\uD835\uDCB5": "&Zscr;",
          \u00E1: "&aacute;",
          \u0103: "&abreve;",
          "\u223E": "&mstpos;",
          "\u223E\u0333": "&acE;",
          "\u223F": "&acd;",
          \u00E2: "&acirc;",
          \u0430: "&acy;",
          \u00E6: "&aelig;",
          "\uD835\uDD1E": "&afr;",
          \u00E0: "&agrave;",
          \u2135: "&aleph;",
          \u03B1: "&alpha;",
          \u0101: "&amacr;",
          "\u2A3F": "&amalg;",
          "\u2227": "&wedge;",
          "\u2A55": "&andand;",
          "\u2A5C": "&andd;",
          "\u2A58": "&andslope;",
          "\u2A5A": "&andv;",
          "\u2220": "&angle;",
          "\u29A4": "&ange;",
          "\u2221": "&measuredangle;",
          "\u29A8": "&angmsdaa;",
          "\u29A9": "&angmsdab;",
          "\u29AA": "&angmsdac;",
          "\u29AB": "&angmsdad;",
          "\u29AC": "&angmsdae;",
          "\u29AD": "&angmsdaf;",
          "\u29AE": "&angmsdag;",
          "\u29AF": "&angmsdah;",
          "\u221F": "&angrt;",
          "\u22BE": "&angrtvb;",
          "\u299D": "&angrtvbd;",
          "\u2222": "&angsph;",
          "\u237C": "&angzarr;",
          \u0105: "&aogon;",
          "\uD835\uDD52": "&aopf;",
          "\u2A70": "&apE;",
          "\u2A6F": "&apacir;",
          "\u224A": "&approxeq;",
          "\u224B": "&apid;",
          "'": "&apos;",
          \u00E5: "&aring;",
          "\uD835\uDCB6": "&ascr;",
          "*": "&midast;",
          \u00E3: "&atilde;",
          \u00E4: "&auml;",
          "\u2A11": "&awint;",
          "\u2AED": "&bNot;",
          "\u224C": "&bcong;",
          "\u03F6": "&bepsi;",
          "\u2035": "&bprime;",
          "\u223D": "&bsim;",
          "\u22CD": "&bsime;",
          "\u22BD": "&barvee;",
          "\u2305": "&barwedge;",
          "\u23B6": "&bbrktbrk;",
          \u0431: "&bcy;",
          "\u201E": "&ldquor;",
          "\u29B0": "&bemptyv;",
          \u03B2: "&beta;",
          \u2136: "&beth;",
          "\u226C": "&twixt;",
          "\uD835\uDD1F": "&bfr;",
          "\u25EF": "&xcirc;",
          "\u2A00": "&xodot;",
          "\u2A01": "&xoplus;",
          "\u2A02": "&xotime;",
          "\u2A06": "&xsqcup;",
          "\u2605": "&starf;",
          "\u25BD": "&xdtri;",
          "\u25B3": "&xutri;",
          "\u2A04": "&xuplus;",
          "\u290D": "&rbarr;",
          "\u29EB": "&lozf;",
          "\u25B4": "&utrif;",
          "\u25BE": "&dtrif;",
          "\u25C2": "&ltrif;",
          "\u25B8": "&rtrif;",
          "\u2423": "&blank;",
          "\u2592": "&blk12;",
          "\u2591": "&blk14;",
          "\u2593": "&blk34;",
          "\u2588": "&block;",
          "=\u20E5": "&bne;",
          "\u2261\u20E5": "&bnequiv;",
          "\u2310": "&bnot;",
          "\uD835\uDD53": "&bopf;",
          "\u22C8": "&bowtie;",
          "\u2557": "&boxDL;",
          "\u2554": "&boxDR;",
          "\u2556": "&boxDl;",
          "\u2553": "&boxDr;",
          "\u2550": "&boxH;",
          "\u2566": "&boxHD;",
          "\u2569": "&boxHU;",
          "\u2564": "&boxHd;",
          "\u2567": "&boxHu;",
          "\u255D": "&boxUL;",
          "\u255A": "&boxUR;",
          "\u255C": "&boxUl;",
          "\u2559": "&boxUr;",
          "\u2551": "&boxV;",
          "\u256C": "&boxVH;",
          "\u2563": "&boxVL;",
          "\u2560": "&boxVR;",
          "\u256B": "&boxVh;",
          "\u2562": "&boxVl;",
          "\u255F": "&boxVr;",
          "\u29C9": "&boxbox;",
          "\u2555": "&boxdL;",
          "\u2552": "&boxdR;",
          "\u2510": "&boxdl;",
          "\u250C": "&boxdr;",
          "\u2565": "&boxhD;",
          "\u2568": "&boxhU;",
          "\u252C": "&boxhd;",
          "\u2534": "&boxhu;",
          "\u229F": "&minusb;",
          "\u229E": "&plusb;",
          "\u22A0": "&timesb;",
          "\u255B": "&boxuL;",
          "\u2558": "&boxuR;",
          "\u2518": "&boxul;",
          "\u2514": "&boxur;",
          "\u2502": "&boxv;",
          "\u256A": "&boxvH;",
          "\u2561": "&boxvL;",
          "\u255E": "&boxvR;",
          "\u253C": "&boxvh;",
          "\u2524": "&boxvl;",
          "\u251C": "&boxvr;",
          "\xA6": "&brvbar;",
          "\uD835\uDCB7": "&bscr;",
          "\u204F": "&bsemi;",
          "\\": "&bsol;",
          "\u29C5": "&bsolb;",
          "\u27C8": "&bsolhsub;",
          "\u2022": "&bullet;",
          "\u2AAE": "&bumpE;",
          \u0107: "&cacute;",
          "\u2229": "&cap;",
          "\u2A44": "&capand;",
          "\u2A49": "&capbrcup;",
          "\u2A4B": "&capcap;",
          "\u2A47": "&capcup;",
          "\u2A40": "&capdot;",
          "\u2229\uFE00": "&caps;",
          "\u2041": "&caret;",
          "\u2A4D": "&ccaps;",
          \u010D: "&ccaron;",
          \u00E7: "&ccedil;",
          \u0109: "&ccirc;",
          "\u2A4C": "&ccups;",
          "\u2A50": "&ccupssm;",
          \u010B: "&cdot;",
          "\u29B2": "&cemptyv;",
          "\xA2": "&cent;",
          "\uD835\uDD20": "&cfr;",
          \u0447: "&chcy;",
          "\u2713": "&checkmark;",
          \u03C7: "&chi;",
          "\u25CB": "&cir;",
          "\u29C3": "&cirE;",
          "\u02C6": "&circ;",
          "\u2257": "&cire;",
          "\u21BA": "&olarr;",
          "\u21BB": "&orarr;",
          "\u24C8": "&oS;",
          "\u229B": "&oast;",
          "\u229A": "&ocir;",
          "\u229D": "&odash;",
          "\u2A10": "&cirfnint;",
          "\u2AEF": "&cirmid;",
          "\u29C2": "&cirscir;",
          "\u2663": "&clubsuit;",
          ":": "&colon;",
          ",": "&comma;",
          "@": "&commat;",
          "\u2201": "&complement;",
          "\u2A6D": "&congdot;",
          "\uD835\uDD54": "&copf;",
          "\u2117": "&copysr;",
          "\u21B5": "&crarr;",
          "\u2717": "&cross;",
          "\uD835\uDCB8": "&cscr;",
          "\u2ACF": "&csub;",
          "\u2AD1": "&csube;",
          "\u2AD0": "&csup;",
          "\u2AD2": "&csupe;",
          "\u22EF": "&ctdot;",
          "\u2938": "&cudarrl;",
          "\u2935": "&cudarrr;",
          "\u22DE": "&curlyeqprec;",
          "\u22DF": "&curlyeqsucc;",
          "\u21B6": "&curvearrowleft;",
          "\u293D": "&cularrp;",
          "\u222A": "&cup;",
          "\u2A48": "&cupbrcap;",
          "\u2A46": "&cupcap;",
          "\u2A4A": "&cupcup;",
          "\u228D": "&cupdot;",
          "\u2A45": "&cupor;",
          "\u222A\uFE00": "&cups;",
          "\u21B7": "&curvearrowright;",
          "\u293C": "&curarrm;",
          "\u22CE": "&cuvee;",
          "\u22CF": "&cuwed;",
          "\xA4": "&curren;",
          "\u2231": "&cwint;",
          "\u232D": "&cylcty;",
          "\u2965": "&dHar;",
          "\u2020": "&dagger;",
          \u2138: "&daleth;",
          "\u2010": "&hyphen;",
          "\u290F": "&rBarr;",
          \u010F: "&dcaron;",
          \u0434: "&dcy;",
          "\u21CA": "&downdownarrows;",
          "\u2A77": "&eDDot;",
          "\xB0": "&deg;",
          \u03B4: "&delta;",
          "\u29B1": "&demptyv;",
          "\u297F": "&dfisht;",
          "\uD835\uDD21": "&dfr;",
          "\u2666": "&diams;",
          \u03DD: "&gammad;",
          "\u22F2": "&disin;",
          "\xF7": "&divide;",
          "\u22C7": "&divonx;",
          \u0452: "&djcy;",
          "\u231E": "&llcorner;",
          "\u230D": "&dlcrop;",
          $: "&dollar;",
          "\uD835\uDD55": "&dopf;",
          "\u2251": "&eDot;",
          "\u2238": "&minusd;",
          "\u2214": "&plusdo;",
          "\u22A1": "&sdotb;",
          "\u231F": "&lrcorner;",
          "\u230C": "&drcrop;",
          "\uD835\uDCB9": "&dscr;",
          \u0455: "&dscy;",
          "\u29F6": "&dsol;",
          \u0111: "&dstrok;",
          "\u22F1": "&dtdot;",
          "\u25BF": "&triangledown;",
          "\u29A6": "&dwangle;",
          \u045F: "&dzcy;",
          "\u27FF": "&dzigrarr;",
          \u00E9: "&eacute;",
          "\u2A6E": "&easter;",
          \u011B: "&ecaron;",
          "\u2256": "&eqcirc;",
          \u00EA: "&ecirc;",
          "\u2255": "&eqcolon;",
          \u044D: "&ecy;",
          \u0117: "&edot;",
          "\u2252": "&fallingdotseq;",
          "\uD835\uDD22": "&efr;",
          "\u2A9A": "&eg;",
          \u00E8: "&egrave;",
          "\u2A96": "&eqslantgtr;",
          "\u2A98": "&egsdot;",
          "\u2A99": "&el;",
          "\u23E7": "&elinters;",
          \u2113: "&ell;",
          "\u2A95": "&eqslantless;",
          "\u2A97": "&elsdot;",
          \u0113: "&emacr;",
          "\u2205": "&varnothing;",
          "\u2004": "&emsp13;",
          "\u2005": "&emsp14;",
          "\u2003": "&emsp;",
          \u014B: "&eng;",
          "\u2002": "&ensp;",
          \u0119: "&eogon;",
          "\uD835\uDD56": "&eopf;",
          "\u22D5": "&epar;",
          "\u29E3": "&eparsl;",
          "\u2A71": "&eplus;",
          \u03B5: "&epsilon;",
          "\u03F5": "&varepsilon;",
          "=": "&equals;",
          "\u225F": "&questeq;",
          "\u2A78": "&equivDD;",
          "\u29E5": "&eqvparsl;",
          "\u2253": "&risingdotseq;",
          "\u2971": "&erarr;",
          \u212F: "&escr;",
          \u03B7: "&eta;",
          \u00F0: "&eth;",
          \u00EB: "&euml;",
          "\u20AC": "&euro;",
          "!": "&excl;",
          \u0444: "&fcy;",
          "\u2640": "&female;",
          \uFB03: "&ffilig;",
          \uFB00: "&fflig;",
          \uFB04: "&ffllig;",
          "\uD835\uDD23": "&ffr;",
          \uFB01: "&filig;",
          fj: "&fjlig;",
          "\u266D": "&flat;",
          \uFB02: "&fllig;",
          "\u25B1": "&fltns;",
          \u0192: "&fnof;",
          "\uD835\uDD57": "&fopf;",
          "\u22D4": "&pitchfork;",
          "\u2AD9": "&forkv;",
          "\u2A0D": "&fpartint;",
          "\xBD": "&half;",
          "\u2153": "&frac13;",
          "\xBC": "&frac14;",
          "\u2155": "&frac15;",
          "\u2159": "&frac16;",
          "\u215B": "&frac18;",
          "\u2154": "&frac23;",
          "\u2156": "&frac25;",
          "\xBE": "&frac34;",
          "\u2157": "&frac35;",
          "\u215C": "&frac38;",
          "\u2158": "&frac45;",
          "\u215A": "&frac56;",
          "\u215D": "&frac58;",
          "\u215E": "&frac78;",
          "\u2044": "&frasl;",
          "\u2322": "&sfrown;",
          "\uD835\uDCBB": "&fscr;",
          "\u2A8C": "&gtreqqless;",
          \u01F5: "&gacute;",
          \u03B3: "&gamma;",
          "\u2A86": "&gtrapprox;",
          \u011F: "&gbreve;",
          \u011D: "&gcirc;",
          \u0433: "&gcy;",
          \u0121: "&gdot;",
          "\u2AA9": "&gescc;",
          "\u2A80": "&gesdot;",
          "\u2A82": "&gesdoto;",
          "\u2A84": "&gesdotol;",
          "\u22DB\uFE00": "&gesl;",
          "\u2A94": "&gesles;",
          "\uD835\uDD24": "&gfr;",
          \u2137: "&gimel;",
          \u0453: "&gjcy;",
          "\u2A92": "&glE;",
          "\u2AA5": "&gla;",
          "\u2AA4": "&glj;",
          "\u2269": "&gneqq;",
          "\u2A8A": "&gnapprox;",
          "\u2A88": "&gneq;",
          "\u22E7": "&gnsim;",
          "\uD835\uDD58": "&gopf;",
          \u210A: "&gscr;",
          "\u2A8E": "&gsime;",
          "\u2A90": "&gsiml;",
          "\u2AA7": "&gtcc;",
          "\u2A7A": "&gtcir;",
          "\u22D7": "&gtrdot;",
          "\u2995": "&gtlPar;",
          "\u2A7C": "&gtquest;",
          "\u2978": "&gtrarr;",
          "\u2269\uFE00": "&gvnE;",
          \u044A: "&hardcy;",
          "\u2948": "&harrcir;",
          "\u21AD": "&leftrightsquigarrow;",
          \u210F: "&plankv;",
          \u0125: "&hcirc;",
          "\u2665": "&heartsuit;",
          "\u2026": "&mldr;",
          "\u22B9": "&hercon;",
          "\uD835\uDD25": "&hfr;",
          "\u2925": "&searhk;",
          "\u2926": "&swarhk;",
          "\u21FF": "&hoarr;",
          "\u223B": "&homtht;",
          "\u21A9": "&larrhk;",
          "\u21AA": "&rarrhk;",
          "\uD835\uDD59": "&hopf;",
          "\u2015": "&horbar;",
          "\uD835\uDCBD": "&hscr;",
          \u0127: "&hstrok;",
          "\u2043": "&hybull;",
          \u00ED: "&iacute;",
          \u00EE: "&icirc;",
          \u0438: "&icy;",
          \u0435: "&iecy;",
          "\xA1": "&iexcl;",
          "\uD835\uDD26": "&ifr;",
          \u00EC: "&igrave;",
          "\u2A0C": "&qint;",
          "\u222D": "&tint;",
          "\u29DC": "&iinfin;",
          "\u2129": "&iiota;",
          \u0133: "&ijlig;",
          \u012B: "&imacr;",
          \u0131: "&inodot;",
          "\u22B7": "&imof;",
          \u01B5: "&imped;",
          "\u2105": "&incare;",
          "\u221E": "&infin;",
          "\u29DD": "&infintie;",
          "\u22BA": "&intercal;",
          "\u2A17": "&intlarhk;",
          "\u2A3C": "&iprod;",
          \u0451: "&iocy;",
          \u012F: "&iogon;",
          "\uD835\uDD5A": "&iopf;",
          \u03B9: "&iota;",
          "\xBF": "&iquest;",
          "\uD835\uDCBE": "&iscr;",
          "\u22F9": "&isinE;",
          "\u22F5": "&isindot;",
          "\u22F4": "&isins;",
          "\u22F3": "&isinsv;",
          \u0129: "&itilde;",
          \u0456: "&iukcy;",
          \u00EF: "&iuml;",
          \u0135: "&jcirc;",
          \u0439: "&jcy;",
          "\uD835\uDD27": "&jfr;",
          "\u0237": "&jmath;",
          "\uD835\uDD5B": "&jopf;",
          "\uD835\uDCBF": "&jscr;",
          \u0458: "&jsercy;",
          \u0454: "&jukcy;",
          \u03BA: "&kappa;",
          \u03F0: "&varkappa;",
          \u0137: "&kcedil;",
          \u043A: "&kcy;",
          "\uD835\uDD28": "&kfr;",
          \u0138: "&kgreen;",
          \u0445: "&khcy;",
          \u045C: "&kjcy;",
          "\uD835\uDD5C": "&kopf;",
          "\uD835\uDCC0": "&kscr;",
          "\u291B": "&lAtail;",
          "\u290E": "&lBarr;",
          "\u2A8B": "&lesseqqgtr;",
          "\u2962": "&lHar;",
          \u013A: "&lacute;",
          "\u29B4": "&laemptyv;",
          \u03BB: "&lambda;",
          "\u2991": "&langd;",
          "\u2A85": "&lessapprox;",
          "\xAB": "&laquo;",
          "\u291F": "&larrbfs;",
          "\u291D": "&larrfs;",
          "\u21AB": "&looparrowleft;",
          "\u2939": "&larrpl;",
          "\u2973": "&larrsim;",
          "\u21A2": "&leftarrowtail;",
          "\u2AAB": "&lat;",
          "\u2919": "&latail;",
          "\u2AAD": "&late;",
          "\u2AAD\uFE00": "&lates;",
          "\u290C": "&lbarr;",
          "\u2772": "&lbbrk;",
          "{": "&lcub;",
          "[": "&lsqb;",
          "\u298B": "&lbrke;",
          "\u298F": "&lbrksld;",
          "\u298D": "&lbrkslu;",
          \u013E: "&lcaron;",
          \u013C: "&lcedil;",
          \u043B: "&lcy;",
          "\u2936": "&ldca;",
          "\u2967": "&ldrdhar;",
          "\u294B": "&ldrushar;",
          "\u21B2": "&ldsh;",
          "\u2264": "&leq;",
          "\u21C7": "&llarr;",
          "\u22CB": "&lthree;",
          "\u2AA8": "&lescc;",
          "\u2A7F": "&lesdot;",
          "\u2A81": "&lesdoto;",
          "\u2A83": "&lesdotor;",
          "\u22DA\uFE00": "&lesg;",
          "\u2A93": "&lesges;",
          "\u22D6": "&ltdot;",
          "\u297C": "&lfisht;",
          "\uD835\uDD29": "&lfr;",
          "\u2A91": "&lgE;",
          "\u296A": "&lharul;",
          "\u2584": "&lhblk;",
          \u0459: "&ljcy;",
          "\u296B": "&llhard;",
          "\u25FA": "&lltri;",
          \u0140: "&lmidot;",
          "\u23B0": "&lmoustache;",
          "\u2268": "&lneqq;",
          "\u2A89": "&lnapprox;",
          "\u2A87": "&lneq;",
          "\u22E6": "&lnsim;",
          "\u27EC": "&loang;",
          "\u21FD": "&loarr;",
          "\u27FC": "&xmap;",
          "\u21AC": "&rarrlp;",
          "\u2985": "&lopar;",
          "\uD835\uDD5D": "&lopf;",
          "\u2A2D": "&loplus;",
          "\u2A34": "&lotimes;",
          "\u2217": "&lowast;",
          "\u25CA": "&lozenge;",
          "(": "&lpar;",
          "\u2993": "&lparlt;",
          "\u296D": "&lrhard;",
          "\u200E": "&lrm;",
          "\u22BF": "&lrtri;",
          "\u2039": "&lsaquo;",
          "\uD835\uDCC1": "&lscr;",
          "\u2A8D": "&lsime;",
          "\u2A8F": "&lsimg;",
          "\u201A": "&sbquo;",
          \u0142: "&lstrok;",
          "\u2AA6": "&ltcc;",
          "\u2A79": "&ltcir;",
          "\u22C9": "&ltimes;",
          "\u2976": "&ltlarr;",
          "\u2A7B": "&ltquest;",
          "\u2996": "&ltrPar;",
          "\u25C3": "&triangleleft;",
          "\u294A": "&lurdshar;",
          "\u2966": "&luruhar;",
          "\u2268\uFE00": "&lvnE;",
          "\u223A": "&mDDot;",
          "\xAF": "&strns;",
          "\u2642": "&male;",
          "\u2720": "&maltese;",
          "\u25AE": "&marker;",
          "\u2A29": "&mcomma;",
          \u043C: "&mcy;",
          "\u2014": "&mdash;",
          "\uD835\uDD2A": "&mfr;",
          "\u2127": "&mho;",
          \u00B5: "&micro;",
          "\u2AF0": "&midcir;",
          "\u2212": "&minus;",
          "\u2A2A": "&minusdu;",
          "\u2ADB": "&mlcp;",
          "\u22A7": "&models;",
          "\uD835\uDD5E": "&mopf;",
          "\uD835\uDCC2": "&mscr;",
          \u03BC: "&mu;",
          "\u22B8": "&mumap;",
          "\u22D9\u0338": "&nGg;",
          "\u226B\u20D2": "&nGt;",
          "\u21CD": "&nlArr;",
          "\u21CE": "&nhArr;",
          "\u22D8\u0338": "&nLl;",
          "\u226A\u20D2": "&nLt;",
          "\u21CF": "&nrArr;",
          "\u22AF": "&nVDash;",
          "\u22AE": "&nVdash;",
          \u0144: "&nacute;",
          "\u2220\u20D2": "&nang;",
          "\u2A70\u0338": "&napE;",
          "\u224B\u0338": "&napid;",
          \u0149: "&napos;",
          "\u266E": "&natural;",
          "\u2A43": "&ncap;",
          \u0148: "&ncaron;",
          \u0146: "&ncedil;",
          "\u2A6D\u0338": "&ncongdot;",
          "\u2A42": "&ncup;",
          \u043D: "&ncy;",
          "\u2013": "&ndash;",
          "\u21D7": "&neArr;",
          "\u2924": "&nearhk;",
          "\u2250\u0338": "&nedot;",
          "\u2928": "&toea;",
          "\uD835\uDD2B": "&nfr;",
          "\u21AE": "&nleftrightarrow;",
          "\u2AF2": "&nhpar;",
          "\u22FC": "&nis;",
          "\u22FA": "&nisd;",
          \u045A: "&njcy;",
          "\u2266\u0338": "&nleqq;",
          "\u219A": "&nleftarrow;",
          "\u2025": "&nldr;",
          "\uD835\uDD5F": "&nopf;",
          "\xAC": "&not;",
          "\u22F9\u0338": "&notinE;",
          "\u22F5\u0338": "&notindot;",
          "\u22F7": "&notinvb;",
          "\u22F6": "&notinvc;",
          "\u22FE": "&notnivb;",
          "\u22FD": "&notnivc;",
          "\u2AFD\u20E5": "&nparsl;",
          "\u2202\u0338": "&npart;",
          "\u2A14": "&npolint;",
          "\u219B": "&nrightarrow;",
          "\u2933\u0338": "&nrarrc;",
          "\u219D\u0338": "&nrarrw;",
          "\uD835\uDCC3": "&nscr;",
          "\u2284": "&nsub;",
          "\u2AC5\u0338": "&nsubseteqq;",
          "\u2285": "&nsup;",
          "\u2AC6\u0338": "&nsupseteqq;",
          \u00F1: "&ntilde;",
          \u03BD: "&nu;",
          "#": "&num;",
          "\u2116": "&numero;",
          "\u2007": "&numsp;",
          "\u22AD": "&nvDash;",
          "\u2904": "&nvHarr;",
          "\u224D\u20D2": "&nvap;",
          "\u22AC": "&nvdash;",
          "\u2265\u20D2": "&nvge;",
          ">\u20D2": "&nvgt;",
          "\u29DE": "&nvinfin;",
          "\u2902": "&nvlArr;",
          "\u2264\u20D2": "&nvle;",
          "<\u20D2": "&nvlt;",
          "\u22B4\u20D2": "&nvltrie;",
          "\u2903": "&nvrArr;",
          "\u22B5\u20D2": "&nvrtrie;",
          "\u223C\u20D2": "&nvsim;",
          "\u21D6": "&nwArr;",
          "\u2923": "&nwarhk;",
          "\u2927": "&nwnear;",
          \u00F3: "&oacute;",
          \u00F4: "&ocirc;",
          \u043E: "&ocy;",
          \u0151: "&odblac;",
          "\u2A38": "&odiv;",
          "\u29BC": "&odsold;",
          \u0153: "&oelig;",
          "\u29BF": "&ofcir;",
          "\uD835\uDD2C": "&ofr;",
          "\u02DB": "&ogon;",
          \u00F2: "&ograve;",
          "\u29C1": "&ogt;",
          "\u29B5": "&ohbar;",
          "\u29BE": "&olcir;",
          "\u29BB": "&olcross;",
          "\u29C0": "&olt;",
          \u014D: "&omacr;",
          \u03C9: "&omega;",
          \u03BF: "&omicron;",
          "\u29B6": "&omid;",
          "\uD835\uDD60": "&oopf;",
          "\u29B7": "&opar;",
          "\u29B9": "&operp;",
          "\u2228": "&vee;",
          "\u2A5D": "&ord;",
          \u2134: "&oscr;",
          \u00AA: "&ordf;",
          \u00BA: "&ordm;",
          "\u22B6": "&origof;",
          "\u2A56": "&oror;",
          "\u2A57": "&orslope;",
          "\u2A5B": "&orv;",
          \u00F8: "&oslash;",
          "\u2298": "&osol;",
          \u00F5: "&otilde;",
          "\u2A36": "&otimesas;",
          \u00F6: "&ouml;",
          "\u233D": "&ovbar;",
          "\xB6": "&para;",
          "\u2AF3": "&parsim;",
          "\u2AFD": "&parsl;",
          \u043F: "&pcy;",
          "%": "&percnt;",
          ".": "&period;",
          "\u2030": "&permil;",
          "\u2031": "&pertenk;",
          "\uD835\uDD2D": "&pfr;",
          \u03C6: "&phi;",
          \u03D5: "&varphi;",
          "\u260E": "&phone;",
          \u03C0: "&pi;",
          \u03D6: "&varpi;",
          \u210E: "&planckh;",
          "+": "&plus;",
          "\u2A23": "&plusacir;",
          "\u2A22": "&pluscir;",
          "\u2A25": "&plusdu;",
          "\u2A72": "&pluse;",
          "\u2A26": "&plussim;",
          "\u2A27": "&plustwo;",
          "\u2A15": "&pointint;",
          "\uD835\uDD61": "&popf;",
          "\xA3": "&pound;",
          "\u2AB3": "&prE;",
          "\u2AB7": "&precapprox;",
          "\u2AB9": "&prnap;",
          "\u2AB5": "&prnE;",
          "\u22E8": "&prnsim;",
          "\u2032": "&prime;",
          "\u232E": "&profalar;",
          "\u2312": "&profline;",
          "\u2313": "&profsurf;",
          "\u22B0": "&prurel;",
          "\uD835\uDCC5": "&pscr;",
          \u03C8: "&psi;",
          "\u2008": "&puncsp;",
          "\uD835\uDD2E": "&qfr;",
          "\uD835\uDD62": "&qopf;",
          "\u2057": "&qprime;",
          "\uD835\uDCC6": "&qscr;",
          "\u2A16": "&quatint;",
          "?": "&quest;",
          "\u291C": "&rAtail;",
          "\u2964": "&rHar;",
          "\u223D\u0331": "&race;",
          \u0155: "&racute;",
          "\u29B3": "&raemptyv;",
          "\u2992": "&rangd;",
          "\u29A5": "&range;",
          "\xBB": "&raquo;",
          "\u2975": "&rarrap;",
          "\u2920": "&rarrbfs;",
          "\u2933": "&rarrc;",
          "\u291E": "&rarrfs;",
          "\u2945": "&rarrpl;",
          "\u2974": "&rarrsim;",
          "\u21A3": "&rightarrowtail;",
          "\u219D": "&rightsquigarrow;",
          "\u291A": "&ratail;",
          "\u2236": "&ratio;",
          "\u2773": "&rbbrk;",
          "}": "&rcub;",
          "]": "&rsqb;",
          "\u298C": "&rbrke;",
          "\u298E": "&rbrksld;",
          "\u2990": "&rbrkslu;",
          \u0159: "&rcaron;",
          \u0157: "&rcedil;",
          \u0440: "&rcy;",
          "\u2937": "&rdca;",
          "\u2969": "&rdldhar;",
          "\u21B3": "&rdsh;",
          "\u25AD": "&rect;",
          "\u297D": "&rfisht;",
          "\uD835\uDD2F": "&rfr;",
          "\u296C": "&rharul;",
          \u03C1: "&rho;",
          \u03F1: "&varrho;",
          "\u21C9": "&rrarr;",
          "\u22CC": "&rthree;",
          "\u02DA": "&ring;",
          "\u200F": "&rlm;",
          "\u23B1": "&rmoustache;",
          "\u2AEE": "&rnmid;",
          "\u27ED": "&roang;",
          "\u21FE": "&roarr;",
          "\u2986": "&ropar;",
          "\uD835\uDD63": "&ropf;",
          "\u2A2E": "&roplus;",
          "\u2A35": "&rotimes;",
          ")": "&rpar;",
          "\u2994": "&rpargt;",
          "\u2A12": "&rppolint;",
          "\u203A": "&rsaquo;",
          "\uD835\uDCC7": "&rscr;",
          "\u22CA": "&rtimes;",
          "\u25B9": "&triangleright;",
          "\u29CE": "&rtriltri;",
          "\u2968": "&ruluhar;",
          "\u211E": "&rx;",
          \u015B: "&sacute;",
          "\u2AB4": "&scE;",
          "\u2AB8": "&succapprox;",
          \u0161: "&scaron;",
          \u015F: "&scedil;",
          \u015D: "&scirc;",
          "\u2AB6": "&succneqq;",
          "\u2ABA": "&succnapprox;",
          "\u22E9": "&succnsim;",
          "\u2A13": "&scpolint;",
          \u0441: "&scy;",
          "\u22C5": "&sdot;",
          "\u2A66": "&sdote;",
          "\u21D8": "&seArr;",
          "\xA7": "&sect;",
          ";": "&semi;",
          "\u2929": "&tosa;",
          "\u2736": "&sext;",
          "\uD835\uDD30": "&sfr;",
          "\u266F": "&sharp;",
          \u0449: "&shchcy;",
          \u0448: "&shcy;",
          "\xAD": "&shy;",
          \u03C3: "&sigma;",
          \u03C2: "&varsigma;",
          "\u2A6A": "&simdot;",
          "\u2A9E": "&simg;",
          "\u2AA0": "&simgE;",
          "\u2A9D": "&siml;",
          "\u2A9F": "&simlE;",
          "\u2246": "&simne;",
          "\u2A24": "&simplus;",
          "\u2972": "&simrarr;",
          "\u2A33": "&smashp;",
          "\u29E4": "&smeparsl;",
          "\u2323": "&ssmile;",
          "\u2AAA": "&smt;",
          "\u2AAC": "&smte;",
          "\u2AAC\uFE00": "&smtes;",
          \u044C: "&softcy;",
          "/": "&sol;",
          "\u29C4": "&solb;",
          "\u233F": "&solbar;",
          "\uD835\uDD64": "&sopf;",
          "\u2660": "&spadesuit;",
          "\u2293\uFE00": "&sqcaps;",
          "\u2294\uFE00": "&sqcups;",
          "\uD835\uDCC8": "&sscr;",
          "\u2606": "&star;",
          "\u2282": "&subset;",
          "\u2AC5": "&subseteqq;",
          "\u2ABD": "&subdot;",
          "\u2AC3": "&subedot;",
          "\u2AC1": "&submult;",
          "\u2ACB": "&subsetneqq;",
          "\u228A": "&subsetneq;",
          "\u2ABF": "&subplus;",
          "\u2979": "&subrarr;",
          "\u2AC7": "&subsim;",
          "\u2AD5": "&subsub;",
          "\u2AD3": "&subsup;",
          "\u266A": "&sung;",
          "\xB9": "&sup1;",
          "\xB2": "&sup2;",
          "\xB3": "&sup3;",
          "\u2AC6": "&supseteqq;",
          "\u2ABE": "&supdot;",
          "\u2AD8": "&supdsub;",
          "\u2AC4": "&supedot;",
          "\u27C9": "&suphsol;",
          "\u2AD7": "&suphsub;",
          "\u297B": "&suplarr;",
          "\u2AC2": "&supmult;",
          "\u2ACC": "&supsetneqq;",
          "\u228B": "&supsetneq;",
          "\u2AC0": "&supplus;",
          "\u2AC8": "&supsim;",
          "\u2AD4": "&supsub;",
          "\u2AD6": "&supsup;",
          "\u21D9": "&swArr;",
          "\u292A": "&swnwar;",
          \u00DF: "&szlig;",
          "\u2316": "&target;",
          \u03C4: "&tau;",
          \u0165: "&tcaron;",
          \u0163: "&tcedil;",
          \u0442: "&tcy;",
          "\u2315": "&telrec;",
          "\uD835\uDD31": "&tfr;",
          \u03B8: "&theta;",
          \u03D1: "&vartheta;",
          \u00FE: "&thorn;",
          "\xD7": "&times;",
          "\u2A31": "&timesbar;",
          "\u2A30": "&timesd;",
          "\u2336": "&topbot;",
          "\u2AF1": "&topcir;",
          "\uD835\uDD65": "&topf;",
          "\u2ADA": "&topfork;",
          "\u2034": "&tprime;",
          "\u25B5": "&utri;",
          "\u225C": "&trie;",
          "\u25EC": "&tridot;",
          "\u2A3A": "&triminus;",
          "\u2A39": "&triplus;",
          "\u29CD": "&trisb;",
          "\u2A3B": "&tritime;",
          "\u23E2": "&trpezium;",
          "\uD835\uDCC9": "&tscr;",
          \u0446: "&tscy;",
          \u045B: "&tshcy;",
          \u0167: "&tstrok;",
          "\u2963": "&uHar;",
          \u00FA: "&uacute;",
          \u045E: "&ubrcy;",
          \u016D: "&ubreve;",
          \u00FB: "&ucirc;",
          \u0443: "&ucy;",
          \u0171: "&udblac;",
          "\u297E": "&ufisht;",
          "\uD835\uDD32": "&ufr;",
          \u00F9: "&ugrave;",
          "\u2580": "&uhblk;",
          "\u231C": "&ulcorner;",
          "\u230F": "&ulcrop;",
          "\u25F8": "&ultri;",
          \u016B: "&umacr;",
          \u0173: "&uogon;",
          "\uD835\uDD66": "&uopf;",
          \u03C5: "&upsilon;",
          "\u21C8": "&uuarr;",
          "\u231D": "&urcorner;",
          "\u230E": "&urcrop;",
          \u016F: "&uring;",
          "\u25F9": "&urtri;",
          "\uD835\uDCCA": "&uscr;",
          "\u22F0": "&utdot;",
          \u0169: "&utilde;",
          \u00FC: "&uuml;",
          "\u29A7": "&uwangle;",
          "\u2AE8": "&vBar;",
          "\u2AE9": "&vBarv;",
          "\u299C": "&vangrt;",
          "\u228A\uFE00": "&vsubne;",
          "\u2ACB\uFE00": "&vsubnE;",
          "\u228B\uFE00": "&vsupne;",
          "\u2ACC\uFE00": "&vsupnE;",
          \u0432: "&vcy;",
          "\u22BB": "&veebar;",
          "\u225A": "&veeeq;",
          "\u22EE": "&vellip;",
          "\uD835\uDD33": "&vfr;",
          "\uD835\uDD67": "&vopf;",
          "\uD835\uDCCB": "&vscr;",
          "\u299A": "&vzigzag;",
          \u0175: "&wcirc;",
          "\u2A5F": "&wedbar;",
          "\u2259": "&wedgeq;",
          "\u2118": "&wp;",
          "\uD835\uDD34": "&wfr;",
          "\uD835\uDD68": "&wopf;",
          "\uD835\uDCCC": "&wscr;",
          "\uD835\uDD35": "&xfr;",
          \u03BE: "&xi;",
          "\u22FB": "&xnis;",
          "\uD835\uDD69": "&xopf;",
          "\uD835\uDCCD": "&xscr;",
          \u00FD: "&yacute;",
          \u044F: "&yacy;",
          \u0177: "&ycirc;",
          \u044B: "&ycy;",
          "\xA5": "&yen;",
          "\uD835\uDD36": "&yfr;",
          \u0457: "&yicy;",
          "\uD835\uDD6A": "&yopf;",
          "\uD835\uDCCE": "&yscr;",
          \u044E: "&yucy;",
          \u00FF: "&yuml;",
          \u017A: "&zacute;",
          \u017E: "&zcaron;",
          \u0437: "&zcy;",
          \u017C: "&zdot;",
          \u03B6: "&zeta;",
          "\uD835\uDD37": "&zfr;",
          \u0436: "&zhcy;",
          "\u21DD": "&zigrarr;",
          "\uD835\uDD6B": "&zopf;",
          "\uD835\uDCCF": "&zscr;",
          "\u200D": "&zwj;",
          "\u200C": "&zwnj;"
        }
      }
    };
  }
});

// ../../node_modules/html-entities/lib/numeric-unicode-map.js
var require_numeric_unicode_map = __commonJS({
  "../../node_modules/html-entities/lib/numeric-unicode-map.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.numericUnicodeMap = {
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
  }
});

// ../../node_modules/html-entities/lib/surrogate-pairs.js
var require_surrogate_pairs = __commonJS({
  "../../node_modules/html-entities/lib/surrogate-pairs.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.fromCodePoint = String.fromCodePoint || function(astralCodePoint) {
      return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);
    };
    exports2.getCodePoint = String.prototype.codePointAt ? function(input, position) {
      return input.codePointAt(position);
    } : function(input, position) {
      return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;
    };
    exports2.highSurrogateFrom = 55296;
    exports2.highSurrogateTo = 56319;
  }
});

// ../../node_modules/html-entities/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/html-entities/lib/index.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __assign = exports2 && exports2.__assign || function() {
      return __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
        }
        return t;
      }, __assign.apply(this, arguments);
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var named_references_1 = require_named_references(), numeric_unicode_map_1 = require_numeric_unicode_map(), surrogate_pairs_1 = require_surrogate_pairs(), allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {
      all: named_references_1.namedReferences.html5
    });
    function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
      macroRegExp.lastIndex = 0;
      var replaceMatch = macroRegExp.exec(macroText), replaceResult;
      if (replaceMatch) {
        replaceResult = "";
        var replaceLastIndex = 0;
        do {
          replaceLastIndex !== replaceMatch.index && (replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index));
          var replaceInput = replaceMatch[0];
          replaceResult += macroReplacer(replaceInput), replaceLastIndex = replaceMatch.index + replaceInput.length;
        } while (replaceMatch = macroRegExp.exec(macroText));
        replaceLastIndex !== macroText.length && (replaceResult += macroText.substring(replaceLastIndex));
      } else
        replaceResult = macroText;
      return replaceResult;
    }
    var encodeRegExps = {
      specialChars: /[<>'"&]/g,
      nonAscii: /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      nonAsciiPrintable: /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      nonAsciiPrintableOnly: /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
      extensive: /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g
    }, defaultEncodeOptions = {
      mode: "specialChars",
      level: "all",
      numeric: "decimal"
    };
    function encode(text, _a) {
      var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? "specialChars" : _c, _d = _b.numeric, numeric = _d === void 0 ? "decimal" : _d, _e = _b.level, level = _e === void 0 ? "all" : _e;
      if (!text)
        return "";
      var encodeRegExp = encodeRegExps[mode], references = allNamedReferences[level].characters, isHex = numeric === "hexadecimal";
      return replaceUsingRegExp(text, encodeRegExp, function(input) {
        var result = references[input];
        if (!result) {
          var code = input.length > 1 ? surrogate_pairs_1.getCodePoint(input, 0) : input.charCodeAt(0);
          result = (isHex ? "&#x" + code.toString(16) : "&#" + code) + ";";
        }
        return result;
      });
    }
    exports2.encode = encode;
    var defaultDecodeOptions = {
      scope: "body",
      level: "all"
    }, strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g, attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g, baseDecodeRegExps = {
      xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
      },
      html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
      },
      html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
      }
    }, decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {
      all: baseDecodeRegExps.html5
    }), fromCharCode = String.fromCharCode, outOfBoundsChar = fromCharCode(65533), defaultDecodeEntityOptions = {
      level: "all"
    };
    function getDecodedEntity(entity, references, isAttribute, isStrict) {
      var decodeResult = entity, decodeEntityLastChar = entity[entity.length - 1];
      if (isAttribute && decodeEntityLastChar === "=")
        decodeResult = entity;
      else if (isStrict && decodeEntityLastChar !== ";")
        decodeResult = entity;
      else {
        var decodeResultByReference = references[entity];
        if (decodeResultByReference)
          decodeResult = decodeResultByReference;
        else if (entity[0] === "&" && entity[1] === "#") {
          var decodeSecondChar = entity[2], decodeCode = decodeSecondChar == "x" || decodeSecondChar == "X" ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));
          decodeResult = decodeCode >= 1114111 ? outOfBoundsChar : decodeCode > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode] || decodeCode);
        }
      }
      return decodeResult;
    }
    function decodeEntity(entity, _a) {
      var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? "all" : _b;
      return entity ? getDecodedEntity(entity, allNamedReferences[level].entities, !1, !1) : "";
    }
    exports2.decodeEntity = decodeEntity;
    function decode(text, _a) {
      var _b = _a === void 0 ? defaultDecodeOptions : _a, _c = _b.level, level = _c === void 0 ? "all" : _c, _d = _b.scope, scope = _d === void 0 ? level === "xml" ? "strict" : "body" : _d;
      if (!text)
        return "";
      var decodeRegExp = decodeRegExps[level][scope], references = allNamedReferences[level].entities, isAttribute = scope === "attribute", isStrict = scope === "strict";
      return replaceUsingRegExp(text, decodeRegExp, function(entity) {
        return getDecodedEntity(entity, references, isAttribute, isStrict);
      });
    }
    exports2.decode = decode;
  }
});

// src/greenbox.ts
var greenbox_exports = {};
__export(greenbox_exports, {
  checkTattoos: function() {
    return checkTattoos;
  },
  getTattooStatus: function() {
    return getTattooStatus;
  },
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(greenbox_exports);
init_kolmafia_polyfill();

// ../greenbox-data/dist/lib/index.js
init_kolmafia_polyfill();

// ../../node_modules/jsoncrush/JSONCrush.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var JSONCrush_default = {
  crush: function(string) {
    for (var maxSubstringLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50, delimiter = "", JSCrush = function(string2, replaceCharacters) {
      for (var replaceCharacterPos = replaceCharacters.length, splitString = "", ByteLength = function(string3) {
        return encodeURI(encodeURIComponent(string3)).replace(/%../g, "i").length;
      }, HasUnmatchedSurrogate = function(string3) {
        var c1 = string3.charCodeAt(0), c2 = string3.charCodeAt(string3.length - 1);
        return c1 >= 56320 && c1 <= 57343 || c2 >= 55296 && c2 <= 56319;
      }, substringCount = {}, substringLength = 2; substringLength < maxSubstringLength; substringLength++) for (var i2 = 0; i2 < string2.length - substringLength; ++i2) {
        var substring = string2.substr(i2, substringLength);
        if (!substringCount[substring] && !HasUnmatchedSurrogate(substring)) {
          for (var count = 1, substringPos = string2.indexOf(substring, i2 + substringLength); substringPos >= 0; ++count) substringPos = string2.indexOf(substring, substringPos + substringLength);
          count > 1 && (substringCount[substring] = count);
        }
      }
      for (; ; ) {
        for (; replaceCharacterPos-- && string2.includes(replaceCharacters[replaceCharacterPos]); )
          ;
        if (replaceCharacterPos < 0) break;
        var replaceCharacter = replaceCharacters[replaceCharacterPos], bestSubstring = void 0, bestLengthDelta = 0, replaceByteLength = ByteLength(replaceCharacter);
        for (var _substring in substringCount) {
          var _count = substringCount[_substring], lengthDelta = (_count - 1) * ByteLength(_substring) - (_count + 1) * replaceByteLength;
          splitString.length || (lengthDelta -= ByteLength(delimiter)), lengthDelta <= 0 ? delete substringCount[_substring] : lengthDelta > bestLengthDelta && (bestSubstring = _substring, bestLengthDelta = lengthDelta);
        }
        if (!bestSubstring) break;
        string2 = string2.split(bestSubstring).join(replaceCharacter) + replaceCharacter + bestSubstring, splitString = replaceCharacter + splitString;
        var newSubstringCount = {};
        for (var _substring2 in substringCount) {
          for (var newSubstring = _substring2.split(bestSubstring).join(replaceCharacter), _count2 = 0, _i = string2.indexOf(newSubstring); _i >= 0; ++_count2) _i = string2.indexOf(newSubstring, _i + newSubstring.length);
          _count2 > 1 && (newSubstringCount[newSubstring] = _count2);
        }
        substringCount = newSubstringCount;
      }
      return {
        a: string2,
        b: splitString
      };
    }, characters = [], unescapedCharacters = "-_.!~*'()", i = 127; --i; )
      (i >= 48 && i <= 57 || // 0-9
      i >= 65 && i <= 90 || // A-Z
      i >= 97 && i <= 122 || // a-z
      unescapedCharacters.includes(String.fromCharCode(i))) && characters.push(String.fromCharCode(i));
    for (var _i2 = 32; _i2 < 255; ++_i2) {
      var c = String.fromCharCode(_i2);
      c != "\\" && !characters.includes(c) && characters.unshift(c);
    }
    string = string.replace(new RegExp(delimiter, "g"), ""), string = JSONCrushSwap(string);
    var crushed = JSCrush(string, characters), crushedString = crushed.a;
    return crushed.b.length && (crushedString += delimiter + crushed.b), crushedString += "_", crushedString;
  },
  uncrush: function(string) {
    string = string.substring(0, string.length - 1);
    var stringParts = string.split(""), uncrushedString = stringParts[0];
    if (stringParts.length > 1) {
      var splitString = stringParts[1], _iterator = _createForOfIteratorHelper(splitString), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var character = _step.value, splitArray = uncrushedString.split(character);
          uncrushedString = splitArray.join(splitArray.pop());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return JSONCrushSwap(uncrushedString, 0);
  }
}, JSONCrushSwap = function(string) {
  var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, swapGroups = [['"', "'"], ["':", "!"], [",'", "~"], ["}", ")", "\\", "\\"], ["{", "(", "\\", "\\"]], swapInternal = function(string2, g) {
    var regex = new RegExp("".concat((g[2] ? g[2] : "") + g[0], "|").concat((g[3] ? g[3] : "") + g[1]), "g");
    return string2.replace(regex, function($1) {
      return $1 === g[0] ? g[1] : g[0];
    });
  };
  if (forward) for (var i = 0; i < swapGroups.length; ++i) string = swapInternal(string, swapGroups[i]);
  else for (var _i3 = swapGroups.length; _i3--; ) string = swapInternal(string, swapGroups[_i3]);
  return string;
};

// ../greenbox-data/dist/lib/familiars.js
init_kolmafia_polyfill();

// ../greenbox-data/dist/lib/utils.js
init_kolmafia_polyfill();
var tuple = function(args) {
  return args;
}, arrayOf = function(items) {
  return Array.isArray(items) ? items : [items];
};

// ../greenbox-data/dist/lib/familiars.js
var FamiliarStatus;
(function(FamiliarStatus2) {
  FamiliarStatus2[FamiliarStatus2.NONE = 0] = "NONE", FamiliarStatus2[FamiliarStatus2.HATCHLING = 1] = "HATCHLING", FamiliarStatus2[FamiliarStatus2.TERRARIUM = 2] = "TERRARIUM";
})(FamiliarStatus || (FamiliarStatus = {}));
var compressFamiliars = function(familiars) {
  return familiars.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, familiar) {
    return "".concat(r).concat("0".repeat(familiar[0] - r.replace(/\*/g, "").length - 1)).concat(familiar[1]).concat(familiar[2] ? "*" : "");
  }, "").replace(/0+$/, "");
};

// ../greenbox-data/dist/lib/iotms.js
init_kolmafia_polyfill();

// ../greenbox-data/dist/data/iotms.js
init_kolmafia_polyfill();
var iotms = [
  {
    id: 894,
    month: 10,
    year: 2004,
    type: "familiar",
    familiar: "Jill-O-Lantern"
  },
  // Dark Jill-O-Lantern
  {
    id: 914,
    month: 11,
    year: 2004,
    type: "familiar",
    familiar: "Hand Turkey"
  },
  // hand turkey outline
  {
    id: 924,
    month: 12,
    year: 2004,
    type: "familiar",
    familiar: "Crimbo Elf"
  },
  // crimbo elfling
  {
    id: 954,
    month: 1,
    year: 2005,
    type: "familiar",
    familiar: "Baby Yeti"
  },
  // orphan baby yeti
  {
    id: 961,
    month: 2,
    year: 2005,
    type: "familiar",
    familiar: "Feather Boa Constrictor"
  },
  // silk garter snake
  {
    id: 1040,
    month: 3,
    year: 2005,
    type: "item",
    item: "lucky Tam O'Shanter"
  },
  // lucky Tam O'Shanter
  {
    id: 1083,
    month: 4,
    year: 2005,
    type: "familiar",
    familiar: "Personal Raincloud"
  },
  // personal raindrop
  {
    id: 1152,
    month: 5,
    year: 2005,
    type: "item",
    item: "miniature gravy-covered maypole"
  },
  // miniature gravy-covered maypole
  {
    id: 1242,
    month: 6,
    year: 2005,
    type: "familiar",
    familiar: "inflatable dodecapede"
  },
  // deflated inflatable dodecapede
  {
    id: 1260,
    month: 7,
    year: 2005,
    type: "item",
    item: "wax lips"
  },
  // wax lips
  {
    id: 1263,
    month: 8,
    year: 2005,
    type: "familiar",
    familiar: "Pygmy Bugbear Shaman"
  },
  // pygmy bugbear shaman
  {
    id: 1291,
    month: 9,
    year: 2005,
    type: "item",
    item: "Jekyllin hide belt"
  },
  // Jekyllin hide belt
  {
    id: 1304,
    month: 10,
    year: 2005,
    type: "familiar",
    familiar: "Doppelshifter"
  },
  // doppelshifter egg
  {
    id: 1349,
    month: 11,
    year: 2005,
    type: "familiar",
    familiar: "Temporal Riftlet"
  },
  // miniscule temporal rip
  {
    id: 1373,
    month: 12,
    year: 2005,
    type: "familiar",
    familiar: "Sweet Nutcracker"
  },
  // sweet nutcracker
  {
    id: 1411,
    month: 1,
    year: 2006,
    type: "skill",
    skill: "Summon Snowcones"
  },
  // Tome of Snowcone Summoning
  {
    id: 1423,
    month: 2,
    year: 2006,
    type: "item",
    item: ["iceberglet", "ice baby"]
  },
  // iceberglet
  {
    id: 1488,
    month: 3,
    year: 2006,
    type: "familiar",
    familiar: "Wild Hare"
  },
  // March hat
  {
    id: 1498,
    month: 4,
    year: 2006,
    type: "skill",
    skill: "Summon Hilarious Objects"
  },
  // McPhee's Grimoire of Hilarious Object Summoning
  {
    id: 1536,
    month: 5,
    year: 2006,
    type: "familiar",
    familiar: "Spirit Hobo"
  },
  // homeless hobo spirit
  {
    id: 1621,
    month: 6,
    year: 2006,
    type: "familiar",
    familiar: "Astral Badger"
  },
  // astral badger
  {
    id: 1653,
    month: 7,
    year: 2006,
    type: "item",
    item: "jewel-eyed wizard hat"
  },
  // jewel-eyed wizard hat
  {
    id: 1703,
    month: 8,
    year: 2006,
    type: "familiar",
    familiar: "Comma Chameleon"
  },
  // Comma Chameleon egg
  {
    id: 1792,
    month: 9,
    year: 2006,
    type: "item",
    item: "Travoltan trousers"
  },
  // Travoltan trousers
  {
    id: 1971,
    month: 10,
    year: 2006,
    type: "item",
    item: "plastic pumpkin bucket"
  },
  // plastic pumpkin bucket
  {
    id: 2090,
    month: 11,
    year: 2006,
    type: "item",
    item: "pilgrim shield"
  },
  // pilgrim shield
  {
    id: 2190,
    month: 12,
    year: 2006,
    type: "familiar",
    familiar: "Ancient Yuletide Troll"
  },
  // yuletide troll chrysalis
  {
    id: 2221,
    month: 1,
    year: 2007,
    type: "item",
    item: ["Great Ball of Frozen Fire", "liar's pants"]
  },
  // Great Ball of Frozen Fire
  {
    id: 2303,
    month: 2,
    year: 2007,
    type: "skill",
    skill: "Summon Candy Heart"
  },
  // Libram of Candy Heart Summoning
  {
    id: 2380,
    month: 3,
    year: 2007,
    type: "familiar",
    familiar: "Dandy Lion"
  },
  // dandy lion cub
  {
    id: 2447,
    month: 4,
    year: 2007,
    type: "familiar",
    familiar: "Penguin Goodfella"
  },
  // bad penguin egg
  {
    id: 2541,
    month: 5,
    year: 2007,
    type: "item",
    item: "Mayflower bouquet"
  },
  // Mayflower bouquet
  {
    id: 2650,
    month: 6,
    year: 2007,
    type: "familiar",
    familiar: "Green Pixie"
  },
  // bottled green pixie
  {
    id: 2834,
    month: 7,
    year: 2007,
    type: "item",
    item: "bottle-rocket crossbow"
  },
  // bottle-rocket crossbow
  {
    id: 2836,
    month: 8,
    year: 2007,
    type: "familiar",
    familiar: "Wizard Action Figure"
  },
  // wizard action figure
  {
    id: 2844,
    month: 9,
    year: 2007,
    type: "item",
    item: "navel ring of navel gazing"
  },
  // navel ring of navel gazing
  {
    id: 2845,
    month: 10,
    year: 2007,
    type: "familiar",
    familiar: "Gluttonous Green Ghost"
  },
  // class five ecto-larva
  {
    id: 2946,
    month: 11,
    year: 2007,
    type: "item",
    item: "V for Vivala Mask"
  },
  // V for Vivala mask
  {
    id: 3042,
    month: 12,
    year: 2007,
    type: "familiar",
    familiar: "Crimbo P. R. E. S. S. I. E."
  },
  // Crimbo P. R. E. S. S. I. E.
  {
    id: 3117,
    month: 1,
    year: 2008,
    type: "skill",
    skill: "Summon Party Favor"
  },
  // Libram of Divine Favors
  {
    id: 3192,
    month: 2,
    year: 2008,
    type: "item",
    item: ["naughty origami kit", "origami pasties"]
  },
  // naughty origami kit
  {
    id: 3219,
    month: 3,
    year: 2008,
    type: "familiar",
    familiar: "Mad Hatrack"
  },
  // sane hatrack
  {
    id: 3263,
    month: 4,
    year: 2008,
    type: "skill",
    skill: "Summon Tasteful Items"
  },
  // Sp'n-Zor's Grimoire of "Tasteful" Gifts
  {
    id: 3321,
    month: 5,
    year: 2008,
    type: "item",
    item: "mayfly bait necklace"
  },
  // packet of mayfly bait
  {
    id: 3351,
    month: 6,
    year: 2008,
    type: "familiar",
    familiar: "Llama Lama"
  },
  // llama lama cria
  {
    id: 3421,
    month: 7,
    year: 2008,
    type: "item",
    item: "little box of fireworks"
  },
  // little box of fireworks
  {
    id: 3431,
    month: 8,
    year: 2008,
    type: "familiar",
    familiar: "Cotton Candy Carnie"
  },
  // cotton candy cocoon
  {
    id: 3466,
    month: 9,
    year: 2008,
    type: "item",
    item: "haiku katana"
  },
  // haiku katana
  {
    id: 3434,
    month: 10,
    year: 2008,
    type: "familiar",
    familiar: "Disembodied Hand"
  },
  // spooky rattling cigar box
  {
    id: 3507,
    month: 11,
    year: 2008,
    type: "skill",
    skill: "Summon Stickers"
  },
  // Scratch 'n' Sniff Sticker Tome
  {
    id: 3578,
    month: 12,
    year: 2008,
    type: "familiar",
    familiar: "Sugar Fruit Fairy"
  },
  // candy cornucopia
  {
    id: 3661,
    month: 1,
    year: 2009,
    type: "item",
    item: ["container of Spooky Putty", "spooky putty monster", "Spooky Putty sheet"]
  },
  // container of Spooky Putty
  {
    id: 3753,
    month: 2,
    year: 2009,
    type: "skill",
    skill: "Summon Love Song"
  },
  // Libram of Love Songs
  {
    id: 3799,
    month: 3,
    year: 2009,
    type: "familiar",
    familiar: "Frumious Bandersnatch"
  },
  // Apathargic Bandersnatch
  {
    id: 3836,
    month: 4,
    year: 2009,
    type: "item",
    item: "elvish sunglasses"
  },
  // Elvish sunglasses
  {
    id: 3963,
    month: 5,
    year: 2009,
    type: "vip"
  },
  // Clan pool table
  {
    id: 3999,
    month: 6,
    year: 2009,
    type: "familiar",
    familiar: "Baby Sandworm"
  },
  // infant sandworm
  {
    id: 4136,
    month: 7,
    year: 2009,
    type: "item",
    item: "Bag o' Tricks"
  },
  // Bag o' Tricks
  {
    id: 4148,
    month: 8,
    year: 2009,
    type: "familiar",
    familiar: "He-Boulder"
  },
  // floaty stone sphere
  {
    id: 4177,
    month: 9,
    year: 2009,
    type: "skill",
    skill: "Summon Sugar Sheets"
  },
  // Tome of Sugar Shummoning
  {
    id: 4223,
    month: 10,
    year: 2009,
    type: "familiar",
    familiar: "Squamous Gibberer"
  },
  // squamous polyp
  {
    id: 4135,
    month: 11,
    year: 2009,
    type: "item",
    item: "moveable feast"
  },
  // moveable feast
  {
    id: 4328,
    month: 12,
    year: 2009,
    type: "familiar",
    familiar: "Stocking Mimic"
  },
  // suspicious stocking
  {
    id: 4398,
    month: 1,
    year: 2010,
    type: "item",
    item: ["stinky cheese ball", "stinky cheese eye"]
  },
  // stinky cheese ball
  {
    id: 4468,
    month: 2,
    year: 2010,
    type: "skill",
    skill: "Summon BRICKOs"
  },
  // Libram of BRICKOs
  {
    id: 4507,
    month: 3,
    year: 2010,
    type: "vip"
  },
  // Clan looking glass
  {
    id: 4574,
    month: 4,
    year: 2010,
    type: "familiar",
    familiar: "Baby Bugged Bugbear"
  },
  // panicked kernel
  {
    id: 4614,
    month: 5,
    year: 2010,
    type: "item",
    item: "Crown of Thrones"
  },
  // Crown of Thrones
  {
    id: 4619,
    month: 6,
    year: 2010,
    type: "familiar",
    familiar: "Rogue Program"
  },
  // glowing frisbee
  {
    id: 4644,
    month: 7,
    year: 2010,
    type: "item",
    item: "Juju Mojo Mask"
  },
  // Juju Mojo Mask
  {
    id: 4648,
    month: 8,
    year: 2010,
    type: "familiar",
    familiar: "Mini-Hipster"
  },
  // Schmalz's First Prize Beer
  {
    id: 4696,
    month: 9,
    year: 2010,
    type: "item",
    item: "Greatest American Pants"
  },
  // Greatest American Pants
  {
    id: 4720,
    month: 10,
    year: 2010,
    type: "familiar",
    familiar: "organ grinder"
  },
  // organ grinder
  {
    id: 4759,
    month: 11,
    year: 2010,
    type: "campground",
    item: "packet of pumpkin seeds"
  },
  // Grumpy Bumpkin's Pumpkin Seed Catalog
  {
    id: 4827,
    month: 12,
    year: 2010,
    type: "familiar",
    familiar: "Robot Reindeer"
  },
  // hibernating robot reindeer
  {
    id: 4908,
    month: 1,
    year: 2011,
    type: "item",
    item: "Loathing Legion Knife"
  },
  // Loathing Legion knife
  {
    id: 4937,
    month: 2,
    year: 2011,
    type: "familiar",
    familiar: "Obtuse Angel"
  },
  // a cute angel
  {
    id: 4965,
    month: 3,
    year: 2011,
    type: "skill",
    skill: "Summon Alice's Army Cards"
  },
  // Sorcerers of the Shore Grimoire
  {
    id: 5047,
    month: 4,
    year: 2011,
    type: "vip"
  },
  // Clan shower
  {
    id: 5112,
    month: 5,
    year: 2011,
    type: "eudora",
    eudoraId: 1
  },
  // My Own Pen Pal kit
  {
    id: 5164,
    month: 6,
    year: 2011,
    type: "familiar",
    familiar: "Li'l Xenomorph"
  },
  // mysterious chest
  {
    id: 5190,
    month: 7,
    year: 2011,
    type: "item",
    item: "Operation Patriot Shield"
  },
  // Operation Patriot Shield
  {
    id: 4536,
    month: 8,
    year: 2011,
    type: "familiar",
    familiar: "Pair of Stomping Boots"
  },
  // fairy-worn boots
  {
    id: 5223,
    month: 9,
    year: 2011,
    type: "skill",
    skill: "Summon Clip Art"
  },
  // Tome of Clip Art
  {
    id: 5301,
    month: 10,
    year: 2011,
    type: "item",
    item: "plastic vampire fangs"
  },
  // Make-Your-Own-Vampire-Fangs kit
  {
    id: 5371,
    month: 11,
    year: 2011,
    type: "familiar",
    familiar: "Fancypants Scarecrow"
  },
  // stuffed-shirt scarecrow
  {
    id: 5403,
    month: 12,
    year: 2011,
    type: "campground",
    item: "Peppermint Pip Packet"
  },
  // Mint Salton Pepper's Peppermint Seed Catalog
  {
    id: 5463,
    month: 1,
    year: 2012,
    type: "skill",
    skill: "Summon Resolutions"
  },
  // Libram of Resolutions
  {
    id: 5553,
    month: 2,
    year: 2012,
    type: "item",
    item: ["can of Rain-Doh", "empty Rain-Doh can"]
  },
  // can of Rain-Doh
  {
    id: 5639,
    month: 3,
    year: 2012,
    type: "familiar",
    familiar: "Happy Medium"
  },
  // Small Medium
  {
    id: 5648,
    month: 4,
    year: 2012,
    type: "item",
    item: "Boris's Helm"
  },
  // Boris's Helm
  {
    id: 5662,
    month: 5,
    year: 2012,
    type: "vip"
  },
  // Olympic-sized Clan crate
  {
    id: 5701,
    month: 6,
    year: 2012,
    type: "familiar",
    familiar: "Artistic Goth Kid"
  },
  // Moping Artistic Goth Kid
  {
    id: 5738,
    month: 7,
    year: 2012,
    type: "item",
    item: "Camp Scout backpack"
  },
  // Camp Scout backpack
  {
    id: 5767,
    month: 8,
    year: 2012,
    type: "familiar",
    familiar: "Reagnimated Gnome"
  },
  // Unagnimated Gnome
  {
    id: 5790,
    month: 9,
    year: 2012,
    type: "custom"
  },
  // box of bear arms
  {
    id: 5879,
    month: 10,
    year: 2012,
    type: "campground",
    item: "packet of dragon's teeth"
  },
  // Pete & Jackie's Dragon Tooth Emporium Catalog
  {
    id: 5910,
    month: 11,
    year: 2012,
    type: "familiar",
    familiar: "Nanorhino"
  },
  // deactivated nanobots
  {
    id: 6071,
    month: 12,
    year: 2012,
    type: "skill",
    skill: "Summon Geeky Gifts"
  },
  // Thinknerd's Grimoire of Geeky Gifts
  {
    id: 6150,
    month: 1,
    year: 2013,
    type: "item",
    item: "Snow Suit"
  },
  // Snow Suit
  {
    id: 4712,
    month: 2,
    year: 2013,
    type: "eudora",
    eudoraId: 2
  },
  // GameInformPowerDailyPro subscription card
  {
    id: 6305,
    month: 3,
    year: 2013,
    type: "item",
    item: ["Jarlsberg's Pan", "Jarlsberg's pan (Cosmic portal mode)"]
  },
  // Jarlsberg's pan
  {
    id: 6360,
    month: 4,
    year: 2013,
    type: "skill",
    skill: "Summon Taffy"
  },
  // Libram of Pulled Taffy
  {
    id: 6413,
    month: 5,
    year: 2013,
    type: "preference",
    preference: "ownsFloristFriar"
  },
  // Order of the Green Thumb Order Form
  {
    id: 6561,
    month: 6,
    year: 2013,
    type: "familiar",
    familiar: "Mini-Adventurer"
  },
  // adventurer clone egg
  {
    id: 6582,
    month: 7,
    year: 2013,
    type: "vip"
  },
  // Clan hot dog stand
  {
    id: 4930,
    month: 8,
    year: 2013,
    type: "item",
    item: "over-the-shoulder Folder Holder"
  },
  // Folder Holder
  {
    id: 6411,
    month: 9,
    year: 2013,
    type: "familiar",
    familiar: "Steam-Powered Cheerleader"
  },
  // KoLHS Pep Squad Box
  {
    id: 6784,
    month: 10,
    year: 2013,
    type: "familiar",
    familiar: "Reanimated Reanimator"
  },
  // deanimated reanimator's coffin
  {
    id: 6860,
    month: 11,
    year: 2013,
    type: "item",
    item: "Pantsgiving"
  },
  // Pantsgiving
  {
    id: 7003,
    month: 12,
    year: 2013,
    type: "skill",
    skill: "Summon Smithsness"
  },
  // The Smith's Tome
  {
    id: 7069,
    month: 1,
    year: 2014,
    type: "campground",
    item: "packet of winter seeds"
  },
  // Discontent™ Winter Garden Catalog
  {
    id: 7200,
    month: 2,
    year: 2014,
    type: "item",
    item: "Buddy Bjorn"
  },
  // Buddy Bjorn
  {
    id: 7250,
    month: 3,
    year: 2014,
    type: "item",
    item: "Sneaky Pete's leather jacket"
  },
  // Sneaky Pete's leather jacket
  {
    id: 7382,
    month: 4,
    year: 2014,
    type: "campground",
    item: "Little Geneticist DNA-Splicing Lab"
  },
  // Little Geneticist DNA-Splicing Lab
  {
    id: 7466,
    month: 5,
    year: 2014,
    type: "preference",
    preference: "sleazeAirportAlways"
  },
  // airplane charter: Spring Break Beach
  {
    id: 7312,
    month: 6,
    year: 2014,
    type: "familiar",
    familiar: "Galloping Grill"
  },
  // still grill
  {
    id: 7588,
    month: 7,
    year: 2014,
    type: "vip"
  },
  // Clan speakeasy
  {
    id: 7706,
    month: 8,
    year: 2014,
    type: "skill",
    skill: "Summon Confiscated Things"
  },
  // The Confiscator's Grimoire
  {
    id: 7709,
    month: 9,
    year: 2014,
    type: "item",
    item: "Thor's Pliers"
  },
  // Thor's Pliers
  {
    id: 7767,
    month: 10,
    year: 2014,
    type: "preference",
    preference: "spookyAirportAlways"
  },
  // airplane charter: Conspiracy Island
  {
    id: 7920,
    month: 11,
    year: 2014,
    type: "familiar",
    familiar: "fist turkey"
  },
  // fist turkey outline
  {
    id: 7956,
    month: 12,
    year: 2014,
    type: "familiar",
    familiar: "Crimbo Shrub"
  },
  // Crimbo sapling
  {
    id: 8019,
    month: 1,
    year: 2015,
    type: "preference",
    preference: "chateauAvailable"
  },
  // Chateau Mantegna room key
  {
    id: 8134,
    month: 2,
    year: 2015,
    type: "preference",
    preference: "lovebugsUnlocked"
  },
  // bottle of lovebug pheromones
  {
    id: 8184,
    month: 3,
    year: 2015,
    type: "item",
    item: "The Crown of Ed the Undying"
  },
  // Ed the Undying exhibit crate
  {
    id: 8203,
    month: 4,
    year: 2015,
    type: "preference",
    preference: "stenchAirportAlways"
  },
  // airplane charter: Dinseylandfill
  {
    id: 8260,
    month: 5,
    year: 2015,
    type: "campground",
    item: "portable Mayo Clinic"
  },
  // portable Mayo Clinic
  {
    id: 8287,
    month: 6,
    year: 2015,
    type: "familiar",
    familiar: ["Puck Man", "Ms Puck Man"]
  },
  // yellow puck
  {
    id: 8381,
    month: 7,
    year: 2015,
    type: "item",
    item: "Deck of Every Card"
  },
  // Pack of Every Card
  {
    id: 8487,
    month: 8,
    year: 2015,
    type: "preference",
    preference: "hotAirportAlways"
  },
  // airplane charter: That 70s Volcano
  {
    id: 8564,
    month: 9,
    year: 2015,
    type: "preference",
    preference: "barrelShrineUnlocked"
  },
  // shrine to the Barrel god
  {
    id: 8639,
    month: 10,
    year: 2015,
    type: "campground"
  },
  // haunted doghouse
  {
    id: 8674,
    month: 11,
    year: 2015,
    type: "preference",
    preference: "coldAirportAlways"
  },
  // airplane charter: The Glaciest
  {
    id: 8706,
    month: 12,
    year: 2015,
    type: "familiar",
    familiar: "Machine Elf"
  },
  // machine elf capsule
  {
    id: 8705,
    month: 1,
    year: 2016,
    type: "preference",
    preference: "snojoAvailable"
  },
  // X-32-F snowman crate
  {
    id: 8836,
    month: 2,
    year: 2016,
    type: "preference",
    preference: "telegraphOfficeAvailable"
  },
  // LT&T telegraph office deed
  {
    id: 8989,
    month: 3,
    year: 2016,
    type: "campground"
  },
  // Witchess Set
  {
    id: 9e3,
    month: 4,
    year: 2016,
    type: "vip"
  },
  // Clan Floundry
  {
    id: 9016,
    month: 5,
    year: 2016,
    type: "familiar",
    familiar: "intergnat"
  },
  // disconnected intergnat
  {
    id: 9033,
    month: 6,
    year: 2016,
    type: "campground"
  },
  // Source terminal
  {
    id: 9073,
    month: 7,
    year: 2016,
    type: "preference",
    preference: "hasDetectiveSchool"
  },
  // detective school application
  {
    id: 9081,
    month: 8,
    year: 2016,
    type: "item",
    item: "protonic accelerator pack"
  },
  // DIY protonic accelerator kit
  {
    id: 9103,
    month: 9,
    year: 2016,
    type: "item",
    item: "Time-Spinner"
  },
  // Dear Past Self Package
  {
    id: 9136,
    month: 10,
    year: 2016,
    type: "familiar",
    familiar: "Trick-or-Treating Tot"
  },
  // li'l orphan tot
  {
    id: 9189,
    month: 11,
    year: 2016,
    type: "campground",
    item: "packet of thanksgarden seeds"
  },
  // Granny Tood's Thanksgarden Catalog
  {
    id: 9203,
    month: 12,
    year: 2016,
    type: "preference",
    preference: "gingerbreadCityAvailable"
  },
  // Build-a-City Gingerbread kit
  {
    id: 9296,
    month: 1,
    year: 2017,
    type: "familiar",
    familiar: "Space Jellyfish"
  },
  // space planula
  {
    id: 9316,
    month: 2,
    year: 2017,
    type: "preference",
    preference: "loveTunnelAvailable"
  },
  // heart-shaped crate
  {
    id: 9401,
    month: 3,
    year: 2017,
    type: "familiar",
    familiar: "Robortender"
  },
  // unpowered Robortender
  {
    id: 9404,
    month: 4,
    year: 2017,
    type: "preference",
    preference: "spacegateAlways"
  },
  // Spacegate access badge
  {
    id: 9478,
    month: 5,
    year: 2017,
    type: "eudora",
    eudoraId: 4
  },
  // New-You Club Membership Form
  {
    id: 9492,
    month: 6,
    year: 2017,
    type: "item",
    item: "Kremlin's Greatest Briefcase"
  },
  // suspicious package
  {
    id: 9507,
    month: 7,
    year: 2017,
    type: "campground",
    item: "Asdon Martin keyfob"
  },
  // LI-11 Motor Pool voucher
  {
    id: 9511,
    month: 8,
    year: 2017,
    type: "skill",
    skill: "Meteor Lore"
  },
  // Pocket Meteor Guide
  {
    id: 9528,
    month: 9,
    year: 2017,
    type: "item",
    item: "genie bottle"
  },
  // corked genie bottle
  {
    id: 9541,
    month: 10,
    year: 2017,
    type: "familiar",
    familiar: "XO Skeleton"
  },
  // xo-skeleton-in-a-box
  {
    id: 9572,
    month: 11,
    year: 2017,
    type: "item",
    item: "portable pantogram"
  },
  // pantogram
  {
    id: 9591,
    month: 12,
    year: 2017,
    type: "item",
    item: "mumming trunk"
  },
  // locked mumming trunk
  {
    id: 9689,
    month: 1,
    year: 2018,
    type: "item",
    item: "January's Garbage Tote"
  },
  // January's Garbage Tote (unopened)
  {
    id: 9712,
    month: 2,
    year: 2018,
    type: "vip"
  },
  // Clan Carnival Game
  {
    id: 9759,
    month: 3,
    year: 2018,
    type: "campground",
    item: "packet of tall grass seeds"
  },
  // Pokéfam Guide to Capturing All of Them
  {
    id: 9835,
    month: 4,
    year: 2018,
    type: "preference",
    preference: "frAlways"
  },
  // FantasyRealm membership packet
  {
    id: 9661,
    month: 5,
    year: 2018,
    type: "familiar",
    familiar: "God Lobster"
  },
  // God Lobster Egg
  {
    id: 9920,
    month: 6,
    year: 2018,
    type: "item",
    item: "SongBoom\u2122 BoomBox"
  },
  // SongBoom™ BoomBox Box
  {
    id: 9939,
    month: 7,
    year: 2018,
    type: "familiar",
    familiar: "Cat Burglar"
  },
  // kitten burglar
  {
    id: 9927,
    month: 8,
    year: 2018,
    type: "item",
    item: "Bastille Battalion control rig"
  },
  // Bastille Battalion control rig crate
  {
    id: 9942,
    month: 9,
    year: 2018,
    type: "preference",
    preference: "neverendingPartyAlways"
  },
  // Neverending Party invitation envelope
  {
    id: 9988,
    month: 10,
    year: 2018,
    type: "item",
    item: "latte lovers member's mug"
  },
  // latte lovers club card
  {
    id: 9989,
    month: 11,
    year: 2018,
    type: "preference",
    preference: "voteAlways"
  },
  // voter registration form
  {
    id: 10049,
    month: 12,
    year: 2018,
    type: "preference",
    preference: "daycareOpen"
  },
  // Boxing Day care package
  {
    id: 10057,
    month: 1,
    year: 2019,
    type: "item",
    item: "Kramco Sausage-o-Matic\u2122"
  },
  // Kramco Industries packing carton
  {
    id: 10165,
    month: 2,
    year: 2019,
    type: "item",
    item: "Lil' Doctor\u2122 bag"
  },
  // mint condition Lil' Doctor™ bag
  {
    id: 10241,
    month: 3,
    year: 2019,
    type: "item",
    item: "vampyric cloake"
  },
  // vampyric cloake pattern
  {
    id: 10187,
    month: 4,
    year: 2019,
    type: "preference",
    preference: "prAlways"
  },
  // PirateRealm membership packet
  {
    id: 10250,
    month: 5,
    year: 2019,
    type: "item",
    item: "Fourth of May Cosplay Saber"
  },
  // Fourth of May Cosplay Saber kit
  {
    id: 10256,
    month: 6,
    year: 2019,
    type: "item",
    item: "hewn moon-rune spoon"
  },
  // rune-strewn spoon cocoon
  {
    id: 10257,
    month: 7,
    year: 2019,
    type: "item",
    item: "Beach Comb"
  },
  // Beach Comb Box
  {
    id: 10292,
    month: 8,
    year: 2019,
    type: "preference",
    preference: "getawayCampsiteUnlocked"
  },
  // Distant Woods Getaway Brochure
  {
    id: 10323,
    month: 9,
    year: 2019,
    type: "familiar",
    familiar: "Pocket Professor"
  },
  // packaged Pocket Professor
  {
    id: 10332,
    month: 10,
    year: 2019,
    type: "item",
    item: "Eight Days a Week Pill Keeper"
  },
  // Unopened Eight Days a Week Pill Keeper
  {
    id: 10334,
    month: 11,
    year: 2019,
    type: "campground",
    item: "diabolic pizza cube"
  },
  // unopened diabolic pizza cube box
  {
    id: 10345,
    month: 12,
    year: 2019,
    type: "familiar",
    familiar: "Red-Nosed Snapper"
  },
  // red-spotted snapper roe
  {
    id: 10433,
    month: 1,
    year: 2020,
    type: "item",
    item: "Bird-a-Day calendar"
  },
  // unopened Bird-a-Day calendar
  {
    id: 10437,
    month: 2,
    year: 2020,
    type: "item",
    item: "Powerful Glove"
  },
  // mint-in-box Powerful Glove
  {
    id: 10481,
    month: 3,
    year: 2020,
    type: "campground",
    item: "packet of mushroom spores"
  },
  // Better Shrooms and Gardens catalog
  {
    id: 10502,
    month: 4,
    year: 2020,
    type: "familiar",
    familiar: "Left-Hand Man"
  },
  // sinistral homunculus
  {
    id: 10532,
    month: 5,
    year: 2020,
    type: "item",
    item: "Guzzlr tablet"
  },
  // Guzzlr application
  {
    id: 10573,
    month: 6,
    year: 2020,
    type: "item",
    item: "Iunion Crown"
  },
  // bag of Iunion stones
  {
    id: 10579,
    month: 7,
    year: 2020,
    type: "familiar",
    familiar: "Melodramedary"
  },
  // baby camelCalf
  {
    id: 10581,
    month: 8,
    year: 2020,
    type: "item",
    item: "SpinMaster\u2122 lathe"
  },
  // packaged SpinMaster™ lathe
  {
    id: 10635,
    month: 9,
    year: 2020,
    type: "item",
    item: "Cargo Cultist Shorts"
  },
  // bagged Cargo Cultist Shorts
  {
    id: 10644,
    month: 10,
    year: 2020,
    type: "skill",
    skill: "Comprehensive Cartography"
  },
  // Comprehensive Cartographic Compendium
  {
    id: 10646,
    month: 11,
    year: 2020,
    type: "item",
    item: "unwrapped knock-off retro superhero cape"
  },
  // packaged knock-off retro superhero cape
  {
    id: 10648,
    month: 12,
    year: 2020,
    type: "familiar",
    familiar: ["Ghost of Crimbo Commerce", "Ghost of Crimbo Carols", "Ghost of Crimbo Cheer"]
  },
  // box o' ghosts
  {
    id: 10729,
    month: 1,
    year: 2021,
    type: "item",
    item: "miniature crystal ball"
  },
  // packaged miniature crystal ball
  {
    id: 10733,
    month: 2,
    year: 2021,
    type: "skill",
    skill: "Emotionally Chipped"
  },
  // emotion chip
  {
    id: 10737,
    month: 3,
    year: 2021,
    type: "item",
    item: "potted power plant"
  },
  // power seed
  {
    id: 10748,
    month: 4,
    year: 2021,
    type: "item",
    item: "backup camera"
  },
  // packaged backup camera
  {
    id: 10750,
    month: 5,
    year: 2021,
    type: "familiar",
    familiar: "Shorter-Order Cook"
  },
  // shortest-order cook
  {
    id: 10760,
    month: 6,
    year: 2021,
    type: "item",
    item: "familiar scrapbook"
  },
  // packaged familiar scrapbook
  {
    id: 10761,
    month: 7,
    year: 2021,
    type: "vip"
  },
  // clan underground fireworks shop
  {
    id: 10773,
    month: 8,
    year: 2021,
    type: "eudora",
    eudoraId: 5
  },
  // Our Daily Candles™ order form
  {
    id: 10796,
    month: 9,
    year: 2021,
    type: "item",
    item: "industrial fire extinguisher"
  },
  // packaged industrial fire extinguisher
  {
    id: 10801,
    month: 10,
    year: 2021,
    type: "familiar",
    familiar: "Vampire Vintner"
  },
  // bottled Vampire Vintner
  {
    id: 10803,
    month: 11,
    year: 2021,
    type: "item",
    item: "Daylight Shavings Helmet"
  },
  // packaged Daylight Shavings Helmet
  {
    id: 10814,
    month: 12,
    year: 2021,
    type: "campground",
    item: "cold medicine cabinet"
  },
  // packaged cold medicine cabinet
  {
    id: 10890,
    month: 1,
    year: 2022,
    type: "preference",
    preference: "hasCosmicBowlingBall"
  },
  // undrilled cosmic bowling ball
  {
    id: 10892,
    month: 2,
    year: 2022,
    type: "item",
    item: "combat lover's locket"
  },
  // combat lover's locket lockbox
  {
    id: 10895,
    month: 3,
    year: 2022,
    type: "familiar",
    familiar: "Grey Goose"
  },
  // grey gosling
  {
    id: 10898,
    month: 4,
    year: 2022,
    type: "item",
    item: "Unbreakable Umbrella"
  },
  // undamaged Unbreakable Umbrella
  {
    id: 10900,
    month: 5,
    year: 2022,
    type: "preference",
    preference: "hasMaydayContract"
  },
  // MayDay™ contract
  {
    id: 10919,
    month: 6,
    year: 2022,
    type: "item",
    item: "June cleaver"
  },
  // packaged June cleaver
  {
    id: 10928,
    month: 7,
    year: 2022,
    type: "item",
    item: "designer sweatpants"
  },
  // designer sweatpants (new old stock)
  {
    id: 10931,
    month: 8,
    year: 2022,
    type: "item",
    item: "tiny stillsuit"
  },
  // unopened tiny stillsuit
  {
    id: 10951,
    month: 9,
    year: 2022,
    type: "item",
    item: "Jurassic Parka"
  },
  // packaged Jurassic Parka
  {
    id: 10953,
    month: 10,
    year: 2022,
    type: "preference",
    preference: "hasAutumnaton"
  },
  // boxed autumn-aton
  {
    id: 10966,
    month: 11,
    year: 2022,
    type: "familiar",
    familiar: "Cookbookbat"
  },
  // mummified entombed cookbookbat
  {
    id: 11044,
    month: 12,
    year: 2022,
    type: "campground",
    item: "model train set"
  },
  // packaged model train set
  {
    id: 11099,
    month: 1,
    year: 2023,
    type: "campground",
    item: "packet of rock seeds"
  },
  // rock garden guide
  {
    id: 11115,
    month: 2,
    year: 2023,
    type: "item",
    item: "S.I.T. Course Completion Certificate"
  },
  // S.I.T. Course Voucher
  {
    id: 11168,
    month: 3,
    year: 2023,
    type: "item",
    item: "closed-circuit pay phone"
  },
  // closed-circuit phone system
  {
    id: 11187,
    month: 4,
    year: 2023,
    type: "item",
    item: "cursed monkey's paw"
  },
  // cursed monkey glove
  {
    id: 11222,
    month: 5,
    year: 2023,
    type: "item",
    item: "Cincho de Mayo"
  },
  // shrink-wrapped Cincho de Mayo
  {
    id: 11256,
    month: 6,
    year: 2023,
    type: "item",
    item: "2002 Mr. Store Catalog"
  },
  // shrink-wrapped 2002 Mr. Store Catalog
  {
    id: 11300,
    month: 7,
    year: 2023,
    type: "familiar",
    familiar: "Patriotic Eagle"
  },
  // sleeping patriotic eagle
  {
    id: 11305,
    month: 8,
    year: 2023,
    type: "item",
    item: "august scepter"
  },
  // boxed august scepter
  {
    id: 11333,
    month: 9,
    year: 2023,
    type: "skill",
    skill: "Just the Facts"
  },
  // Book of Facts
  {
    id: 11335,
    month: 10,
    year: 2023,
    type: "familiar",
    familiar: "Jill-of-All-Trades"
  },
  // Dark Jill-of-All-Trades
  {
    id: 11340,
    month: 11,
    year: 2023,
    type: "campground"
  },
  // A Guide to Burning Leaves
  {
    id: 11364,
    month: 12,
    year: 2023,
    type: "item",
    item: "candy cane sword cane"
  },
  // wrapped candy cane sword cane
  {
    id: 11540,
    month: 1,
    year: 2024,
    type: "familiar",
    familiar: "Chest Mimic"
  },
  // baby chest mimic
  {
    id: 11545,
    month: 2,
    year: 2024,
    type: "item",
    item: "spring shoes"
  },
  // in-the-box spring shoes
  {
    id: 11560,
    month: 3,
    year: 2024,
    type: "item",
    item: "Everfull Dart Holster"
  },
  // packaged Everfull Dart Holster
  {
    id: 11564,
    month: 4,
    year: 2024,
    type: "item",
    item: "Apriling band helmet"
  },
  // boxed Apriling band helmet
  {
    id: 11571,
    month: 5,
    year: 2024,
    type: "item",
    item: "Mayam Calendar"
  },
  // boxed Mayam Calendar
  {
    id: 11591,
    month: 6,
    year: 2024,
    type: "familiar",
    familiar: "Mini Kiwi"
  },
  // mini kiwi egg
  {
    id: 11608,
    month: 7,
    year: 2024,
    type: "item",
    item: "Roman Candelabra"
  },
  // packaged Roman Candelabra
  {
    id: 11629,
    month: 8,
    year: 2024,
    type: "item",
    item: "tearaway pants"
  },
  // untorn tearaway pants package
  {
    id: 11641,
    month: 9,
    year: 2024,
    type: "item",
    item: "Sept-Ember Censer"
  },
  // boxed Sept-Ember Censer
  {
    id: 11657,
    month: 10,
    year: 2024,
    type: "item",
    item: "bat wings"
  },
  // boxed bat wings
  {
    id: 11672,
    month: 11,
    year: 2024,
    type: "familiar",
    familiar: "Peace Turkey"
  },
  // peace turkey outline
  {
    id: 11686,
    month: 12,
    year: 2024,
    type: "campground",
    item: "TakerSpace letter of Marque"
  },
  // Sealed TakerSpace letter of Marque
  {
    id: 11782,
    month: 1,
    year: 2025,
    type: "item",
    item: "McHugeLarge duffel bag"
  },
  // McHugeLarge deluxe ski set
  {
    id: 11836,
    month: 2,
    year: 2025,
    type: "item",
    item: "toy Cupid bow"
  }
  // new-in-box toy Cupid bow
], iotms_default = iotms;

// ../greenbox-data/dist/lib/iotms.js
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var IotMStatus;
(function(IotMStatus2) {
  IotMStatus2[IotMStatus2.NONE = 0] = "NONE", IotMStatus2[IotMStatus2.BOXED = 1] = "BOXED", IotMStatus2[IotMStatus2.BOUND = 2] = "BOUND";
})(IotMStatus || (IotMStatus = {}));
function loadIotMs() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, iotmCount = JSON.stringify(iotms_default).length;
  return iotmCount === lastKnownSize ? null : {
    data: iotms_default,
    size: iotmCount
  };
}
var compressIotMs = function(iotmList) {
  var idToIotM = iotmList.reduce(function(acc, i) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, i[0], i));
  }, {});
  return iotms_default.map(function(iotm) {
    var _idToIotM$iotm$id$, _idToIotM$iotm$id;
    return (_idToIotM$iotm$id$ = (_idToIotM$iotm$id = idToIotM[iotm.id]) === null || _idToIotM$iotm$id === void 0 ? void 0 : _idToIotM$iotm$id[1]) !== null && _idToIotM$iotm$id$ !== void 0 ? _idToIotM$iotm$id$ : 0;
  }).join("").replace(/0+$/, "");
};

// ../greenbox-data/dist/lib/items.js
init_kolmafia_polyfill();

// ../greenbox-data/dist/data/items.js
init_kolmafia_polyfill();
var specialItems = [
  //// Quest Rewards
  // Marty's Quest
  2719,
  // hand-carved bokken
  2720,
  // hand-carved bow
  2721,
  // hand-carved staff
  // Hyboria? I don't even...
  4041,
  // pig-iron helm
  4042,
  // pig-iron shinguards
  4043,
  // pig-iron bracers
  // Future
  4108,
  // monstrous monocle
  4109,
  // musty moccasins
  4110,
  // molten medallion
  4111,
  // brazen bracelet
  4112,
  // bitter bowtie
  4113,
  // bewitching boots
  // A Moment of Reflection
  4510,
  // walrus ice cream
  4511,
  // beautiful soup
  4512,
  // eggman noodles
  4513,
  // Vial of jus de larmes
  4515,
  // Lobster qua Grill
  4516,
  // missing wine
  4519,
  // ittah bittah hookah
  // Psychoanalytic Jar
  6057,
  // Meatcleaver
  6067,
  // Truthsayer
  6108,
  // Ginsu™
  6133,
  // White Dragon Fang
  6146,
  // Sword of Procedural Generation
  6157,
  // Byte
  6168,
  // Bloodbath
  // We All Wear Masks
  7131,
  // silver cow creamer
  7134,
  // wolf whistle
  7137,
  // witch's bra
  7140,
  // spinning wheel
  7143,
  // hare pin
  //// Other Items
  // Chefstaves
  2578,
  // Staff of the Short Order Cook
  2601,
  // Staff of the Midnight Snack
  2602,
  // Staff of Blood and Pudding
  2722,
  // Staff of the Greasefire
  2723,
  // Staff of the Grand Flambé
  2740,
  // Staff of the Walk-In Freezer
  2749,
  // Staff of the Grease Trap
  2826,
  // Staff of the Kitchen Floor
  3390,
  // Staff of the Deepest Freeze
  3436,
  // Staff of the Teapot Tempest
  3437,
  // Staff of the Black Kettle
  3438,
  // Staff of the Well-Tempered Cauldron
  4165,
  // Staff of the Soupbone
  5758,
  // Staff of Holiday Sensations
  5761,
  // Staff of the Scummy Sink
  6482,
  // Staff of the Roaring Hearth
  7351,
  // Staff of the Electric Range
  9894,
  // Staff of Kitchen Royalty
  10035,
  // Staff of Frozen Lard
  10424,
  // Staff of the Peppermint Twist
  // Jack's Swagger Shack
  5656,
  // Huggler Radio
  5659,
  // insulting hat
  5660,
  // offensive moustache
  5661,
  // hairshirt
  5663,
  // cursed microwave
  5664,
  // cursed pony keg
  5668,
  // bagged stuffed "L"
  5669,
  // stuffed club
  5674,
  // stuffed "L"
  8283,
  // The Cocktail Shaker
  9123,
  // School of Hard Knocks Diploma
  10207,
  // [glitch season reward name]
  10325,
  // Law of Averages
  10640,
  // Universal Seasoning
  // Ultra rares
  875,
  // crazy bastard sword
  876,
  // incredibly dense meat gem
  877,
  // Talisman of Baio
  878,
  // hypnodisk
  1236,
  // hockey stick of furious angry rage
  1519,
  // Talisman of Bakula
  1687,
  // Platinum Yendorian Express Card
  1795,
  // Counterclockwise Watch
  2097,
  // 17-ball
  2847,
  // Dallas Dynasty Falcon Crest shield
  6592,
  // optimal spreadsheet
  7201,
  // The Nuge's favorite crossbow
  9117,
  // repaid diaper
  //// Hobopolis
  // Hobo Nickles
  3220,
  // hobo code binder
  3328,
  // crumpled felt fedora
  3329,
  // battered old top-hat
  3330,
  // shapeless wide-brimmed hat
  3331,
  // mostly rat-hide leggings
  3332,
  // hobo dungarees
  3333,
  // old patched suit-pants
  3140,
  // old soft shoes
  3334,
  // hobo stogie
  3335,
  // rope with some soap on it
  3404,
  // deck of lewd playing cards
  // Hobo Instruments
  3310,
  // sealskin drum
  3311,
  // washboard shield
  3312,
  // spaghetti-box banjo
  3313,
  // marinara jug
  3314,
  // makeshift castanets
  3315,
  // left-handed melodica
  // Bosses
  3138,
  // Hodgman's whackin' stick
  3139,
  // Hodgman's imaginary hamster
  3143,
  // Hodgman's disgusting technicolor overcoat
  3246,
  // Ol' Scratch's ol' britches
  3247,
  // Ol' Scratch's stovepipe hat
  3248,
  // Ol' Scratch's ash can
  3251,
  // Frosty's old silk hat
  3252,
  // Frosty's carrot
  3253,
  // Frosty's nailbat
  3254,
  // Oscus's pelt
  3255,
  // Wand of Oscus
  3256,
  // Oscus's dumpster waders
  3257,
  // Zombo's skullcap
  3258,
  // Zombo's shield
  3259,
  // Zombo's grievous greaves
  3260,
  // Chester's moustache
  3261,
  // Chester's bag of candy
  3262,
  // Chester's cutoffs
  3286,
  // Frosty's snowball sack
  3310,
  // sealskin drum
  3311,
  // washboard shield
  3312,
  // spaghetti-box banjo
  3313,
  // marinara jug
  3314,
  // makeshift castanets
  3315,
  // left-handed melodica
  3328,
  // crumpled felt fedora
  3329,
  // battered old top-hat
  3330,
  // shapeless wide-brimmed hat
  3331,
  // mostly rat-hide
  3332,
  // hobo dungarees
  3333,
  // old patched suit-pants
  3334,
  // hobo stogie
  3335,
  // rope with some soap on it
  3380,
  // Ol' Scratch's infernal pitchfork
  3381,
  // Ol' Scratch's stove door
  3382,
  // Ol' Scratch's manacles
  3383,
  // Chester's sunglasses
  3384,
  // Chester's muscle shirt
  3385,
  // Chester's Aquarius medallion
  3386,
  // Zombo's shoulder blade
  3387,
  // Zombo's skull ring
  3388,
  // Zombo's empty eye
  3389,
  // Frosty's arm
  3391,
  // Frosty's iceball
  3392,
  // Oscus's garbage can lid
  3393,
  // Oscus's neverending soda
  3394,
  // Oscus's flypaper pants
  3395,
  // Hodgman's porkpie hat
  3396,
  // Hodgman's lobsterskin pants
  3397,
  // Hodgman's bow tie
  3405,
  // Hodgman's lucky sock
  3406,
  // Hodgman's varcolac paw
  3407,
  // Hodgman's almanac
  3408,
  // Hodgman's harmonica
  3409,
  // Hodgman's garbage sticker
  3410,
  // Hodgman's metal detector
  3411,
  // Hodgman's cane
  //// Slime Tube
  // slime-covered
  4021,
  // slime-covered shovel
  4022,
  // slime-covered necklace
  4023,
  // slime-covered speargun
  4024,
  // slime-covered compass
  4025,
  // slime-covered helmet
  4026,
  // slime-covered lantern
  4027,
  // slime-covered greaves
  4028,
  // slime-covered club
  5760,
  // slime-covered staff
  // caustic slime nodule
  4075,
  // villainous scythe
  4076,
  // baneful bandolier
  4077,
  // diabolical crossbow
  4078,
  // malevolent medallion
  4079,
  // corrosive cowl
  4080,
  // grisly shield
  4081,
  // corroded breeches,
  4082,
  // pernicious cudgel
  5761,
  // Staff of the Scummy Sink
  // Mother Slime
  4127,
  // hardened slime hat
  4128,
  // hardened slime pants
  4129,
  // hardened slime belt
  //// Dreadsylvania
  // The Terrified Eagle Inn
  6423,
  // Tales of Dread
  6428,
  // brass Dreadsylvanian flask
  6429,
  // silver Dreadsylvanian flask
  6430,
  // dreadful fedora
  6431,
  // dreadful sweater
  6432,
  // dreadful glove
  // Other Untradables
  6495,
  // Dreadsylvania Auditor's badge
  6501,
  // moon-amber necklace
  6504,
  // hangman's hood
  6505,
  // cursed ring finger ring
  6508,
  // cool iron helmet
  6509,
  // cool iron breastplate
  6510,
  // cool iron greaves
  6511,
  // ghost shawl
  6545,
  // weedy skirt
  // Falls-From-Sky
  6440,
  // Covers-Your-Head
  6441,
  // Drapes-You-Regally
  6442,
  // Warms-Your-Tush
  6443,
  // Helps-You-Sleep
  6444,
  // Quiets-Your-Steps
  6445,
  // Protects-Your-Junk
  // Great Wolf of the Air
  6447,
  // Great Wolf's headband
  6448,
  // Great Wolf's left paw
  6449,
  // Great Wolf's right paw
  6450,
  // Great Wolf's rocket launcher
  6451,
  // Great Wolf's beastly trousers
  6452,
  // Great Wolf's lice
  // Zombie Homeowners' Association
  6454,
  // zombie mariachi hat
  6455,
  // zombie accordion
  6456,
  // zombie mariachi pants
  6457,
  // HOA regulation book
  6458,
  // HOA zombie eyes
  6459,
  // HOA citation pad
  // Mayor Ghost
  6462,
  // Mayor Ghost's toupee
  6463,
  // Mayor Ghost's cloak
  6464,
  // Mayor Ghost's khakis
  6465,
  // Mayor Ghost's gavel
  6466,
  // Mayor Ghost's sash
  6467,
  // Mayor Ghost's scissors
  // Count Drunkula
  6469,
  // Thunkula's drinking cap
  6470,
  // Drunkula's cape
  6471,
  // Drunkula's silky pants
  6472,
  // Drunkula's bell
  6473,
  // Drunkula's ring of haze
  6474,
  // Drunkula's wineglass
  // The Unkillable Skeleton
  6476,
  // Unkillable Skeleton's skullcap
  6477,
  // Unkillable Skeleton's breastplate
  6478,
  // Unkillable Skeleton's shinguards
  6479,
  // Unkillable Skeleton's sawsword
  6480,
  // Unkillable Skeleton's shield
  6481
  // Unkillable Skeleton's restless leg
];

// ../greenbox-data/dist/lib/items.js
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray2(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
  }
}
function _arrayLikeToArray2(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var ItemStatus;
(function(ItemStatus2) {
  ItemStatus2[ItemStatus2.NONE = 0] = "NONE", ItemStatus2[ItemStatus2.HAVE = 1] = "HAVE";
})(ItemStatus || (ItemStatus = {}));
var compressItems = function(items) {
  return items.filter(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), q = _ref2[1];
    return q > 0;
  }).map(function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], q = _ref4[1];
    return "".concat(id).concat(q > 1 ? ":".concat(q) : "");
  }).sort().join(",");
};

// ../greenbox-data/dist/lib/meta.js
init_kolmafia_polyfill();
function _slicedToArray2(r, e) {
  return _arrayWithHoles2(r) || _iterableToArrayLimit2(r, e) || _unsupportedIterableToArray3(r, e) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray3(r, a) : void 0;
  }
}
function _arrayLikeToArray3(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit2(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(r) {
  if (Array.isArray(r)) return r;
}
var compressMeta = function(meta) {
  return Object.entries(meta).map(function(_ref) {
    var _ref2 = _slicedToArray2(_ref, 2), k = _ref2[0], v = _ref2[1];
    return "".concat(k, ":").concat(v);
  }).join(",");
};

// ../greenbox-data/dist/lib/paths.js
init_kolmafia_polyfill();

// ../greenbox-data/dist/data/paths.js
init_kolmafia_polyfill();
var ItemId;
(function(ItemId2) {
  ItemId2[ItemId2.CrepePaperSC = 11520] = "CrepePaperSC", ItemId2[ItemId2.CrepePaperTT = 11521] = "CrepePaperTT", ItemId2[ItemId2.CrepePaperPM = 11522] = "CrepePaperPM", ItemId2[ItemId2.CrepePaperSA = 11523] = "CrepePaperSA", ItemId2[ItemId2.CrepePaperDB = 11524] = "CrepePaperDB", ItemId2[ItemId2.CrepePaperAT = 11525] = "CrepePaperAT", ItemId2[ItemId2.MossSC = 11504] = "MossSC", ItemId2[ItemId2.MossTT = 11505] = "MossTT", ItemId2[ItemId2.MossPM = 11506] = "MossPM", ItemId2[ItemId2.MossSA = 11507] = "MossSA", ItemId2[ItemId2.MossDB = 11508] = "MossDB", ItemId2[ItemId2.MossAT = 11509] = "MossAT", ItemId2[ItemId2.ChiffonSC = 11028] = "ChiffonSC", ItemId2[ItemId2.ChiffonTT = 11029] = "ChiffonTT", ItemId2[ItemId2.ChiffonPM = 11030] = "ChiffonPM", ItemId2[ItemId2.ChiffonSA = 11031] = "ChiffonSA", ItemId2[ItemId2.ChiffonDB = 11032] = "ChiffonDB", ItemId2[ItemId2.ChiffonAT = 11033] = "ChiffonAT", ItemId2[ItemId2.LoofahSC = 10130] = "LoofahSC", ItemId2[ItemId2.LoofahTT = 10131] = "LoofahTT", ItemId2[ItemId2.LoofahPM = 10132] = "LoofahPM", ItemId2[ItemId2.LoofahSA = 10133] = "LoofahSA", ItemId2[ItemId2.LoofahDB = 10134] = "LoofahDB", ItemId2[ItemId2.LoofahAT = 10135] = "LoofahAT", ItemId2[ItemId2.VelourSC = 10114] = "VelourSC", ItemId2[ItemId2.VelourTT = 10115] = "VelourTT", ItemId2[ItemId2.VelourPM = 10116] = "VelourPM", ItemId2[ItemId2.VelourSA = 10117] = "VelourSA", ItemId2[ItemId2.VelourDB = 10118] = "VelourDB", ItemId2[ItemId2.VelourAT = 10119] = "VelourAT", ItemId2[ItemId2.ParaffinSC = 10098] = "ParaffinSC", ItemId2[ItemId2.ParaffinTT = 10099] = "ParaffinTT", ItemId2[ItemId2.ParaffinPM = 10100] = "ParaffinPM", ItemId2[ItemId2.ParaffinSA = 10101] = "ParaffinSA", ItemId2[ItemId2.ParaffinDB = 10102] = "ParaffinDB", ItemId2[ItemId2.ParaffinAT = 10103] = "ParaffinAT", ItemId2[ItemId2.ChalkSC = 10082] = "ChalkSC", ItemId2[ItemId2.ChalkTT = 10083] = "ChalkTT", ItemId2[ItemId2.ChalkPM = 10084] = "ChalkPM", ItemId2[ItemId2.ChalkSA = 10085] = "ChalkSA", ItemId2[ItemId2.ChalkDB = 10086] = "ChalkDB", ItemId2[ItemId2.ChalkAT = 10087] = "ChalkAT", ItemId2[ItemId2.GabardineSC = 8120] = "GabardineSC", ItemId2[ItemId2.GabardineTT = 8121] = "GabardineTT", ItemId2[ItemId2.GabardinePM = 8122] = "GabardinePM", ItemId2[ItemId2.GabardineSA = 8123] = "GabardineSA", ItemId2[ItemId2.GabardineDB = 8124] = "GabardineDB", ItemId2[ItemId2.GabardineAT = 8125] = "GabardineAT", ItemId2[ItemId2.AerogelSC = 8106] = "AerogelSC", ItemId2[ItemId2.AerogelTT = 8107] = "AerogelTT", ItemId2[ItemId2.AerogelPM = 8108] = "AerogelPM", ItemId2[ItemId2.AerogelSA = 8109] = "AerogelSA", ItemId2[ItemId2.AerogelDB = 8110] = "AerogelDB", ItemId2[ItemId2.AerogelAT = 8111] = "AerogelAT", ItemId2[ItemId2.WickerSC = 8092] = "WickerSC", ItemId2[ItemId2.WickerTT = 8093] = "WickerTT", ItemId2[ItemId2.WickerPM = 8094] = "WickerPM", ItemId2[ItemId2.WickerSA = 8095] = "WickerSA", ItemId2[ItemId2.WickerDB = 8096] = "WickerDB", ItemId2[ItemId2.WickerAT = 8097] = "WickerAT", ItemId2[ItemId2.PolyesterSC = 7985] = "PolyesterSC", ItemId2[ItemId2.PolyesterTT = 7986] = "PolyesterTT", ItemId2[ItemId2.PolyesterPM = 7987] = "PolyesterPM", ItemId2[ItemId2.PolyesterSA = 7988] = "PolyesterSA", ItemId2[ItemId2.PolyesterDB = 7989] = "PolyesterDB", ItemId2[ItemId2.PolyesterAT = 7990] = "PolyesterAT", ItemId2[ItemId2.PetrifiedWoodSC = 11528] = "PetrifiedWoodSC", ItemId2[ItemId2.PetrifiedWoodTT = 11529] = "PetrifiedWoodTT", ItemId2[ItemId2.PetrifiedWoodPM = 11530] = "PetrifiedWoodPM", ItemId2[ItemId2.PetrifiedWoodSA = 11531] = "PetrifiedWoodSA", ItemId2[ItemId2.PetrifiedWoodDB = 11532] = "PetrifiedWoodDB", ItemId2[ItemId2.PetrifiedWoodAT = 11533] = "PetrifiedWoodAT", ItemId2[ItemId2.AdobeSC = 11512] = "AdobeSC", ItemId2[ItemId2.AdobeTT = 11513] = "AdobeTT", ItemId2[ItemId2.AdobePM = 11514] = "AdobePM", ItemId2[ItemId2.AdobeSA = 11515] = "AdobeSA", ItemId2[ItemId2.AdobeDB = 11516] = "AdobeDB", ItemId2[ItemId2.AdobeAT = 11517] = "AdobeAT", ItemId2[ItemId2.CeramicSC = 11020] = "CeramicSC", ItemId2[ItemId2.CeramicTT = 11021] = "CeramicTT", ItemId2[ItemId2.CeramicPM = 11022] = "CeramicPM", ItemId2[ItemId2.CeramicSA = 11023] = "CeramicSA", ItemId2[ItemId2.CeramicDB = 11024] = "CeramicDB", ItemId2[ItemId2.CeramicAT = 11025] = "CeramicAT", ItemId2[ItemId2.FlagstoneSC = 10138] = "FlagstoneSC", ItemId2[ItemId2.FlagstoneTT = 10139] = "FlagstoneTT", ItemId2[ItemId2.FlagstonePM = 10140] = "FlagstonePM", ItemId2[ItemId2.FlagstoneSA = 10141] = "FlagstoneSA", ItemId2[ItemId2.FlagstoneDB = 10142] = "FlagstoneDB", ItemId2[ItemId2.FlagstoneAT = 10143] = "FlagstoneAT", ItemId2[ItemId2.StainedGlassSC = 10122] = "StainedGlassSC", ItemId2[ItemId2.StainedGlassTT = 10123] = "StainedGlassTT", ItemId2[ItemId2.StainedGlassPM = 10124] = "StainedGlassPM", ItemId2[ItemId2.StainedGlassSA = 10125] = "StainedGlassSA", ItemId2[ItemId2.StainedGlassDB = 10126] = "StainedGlassDB", ItemId2[ItemId2.StainedGlassAT = 10127] = "StainedGlassAT", ItemId2[ItemId2.TerraCottaSC = 10106] = "TerraCottaSC", ItemId2[ItemId2.TerraCottaTT = 10107] = "TerraCottaTT", ItemId2[ItemId2.TerraCottaPM = 10108] = "TerraCottaPM", ItemId2[ItemId2.TerraCottaSA = 10109] = "TerraCottaSA", ItemId2[ItemId2.TerraCottaDB = 10110] = "TerraCottaDB", ItemId2[ItemId2.TerraCottaAT = 10111] = "TerraCottaAT", ItemId2[ItemId2.MarbleSC = 10090] = "MarbleSC", ItemId2[ItemId2.MarbleTT = 10091] = "MarbleTT", ItemId2[ItemId2.MarblePM = 10092] = "MarblePM", ItemId2[ItemId2.MarbleSA = 10093] = "MarbleSA", ItemId2[ItemId2.MarbleDB = 10094] = "MarbleDB", ItemId2[ItemId2.MarbleAT = 10095] = "MarbleAT", ItemId2[ItemId2.FiberglassSC = 8127] = "FiberglassSC", ItemId2[ItemId2.FiberglassTT = 8128] = "FiberglassTT", ItemId2[ItemId2.FiberglassPM = 8129] = "FiberglassPM", ItemId2[ItemId2.FiberglassSA = 8130] = "FiberglassSA", ItemId2[ItemId2.FiberglassDB = 8131] = "FiberglassDB", ItemId2[ItemId2.FiberglassAT = 8132] = "FiberglassAT", ItemId2[ItemId2.WroughtIronSC = 8113] = "WroughtIronSC", ItemId2[ItemId2.WroughtIronTT = 8114] = "WroughtIronTT", ItemId2[ItemId2.WroughtIronPM = 8115] = "WroughtIronPM", ItemId2[ItemId2.WroughtIronSA = 8116] = "WroughtIronSA", ItemId2[ItemId2.WroughtIronDB = 8117] = "WroughtIronDB", ItemId2[ItemId2.WroughtIronAT = 8118] = "WroughtIronAT", ItemId2[ItemId2.BakeliteSC = 8099] = "BakeliteSC", ItemId2[ItemId2.BakeliteTT = 8100] = "BakeliteTT", ItemId2[ItemId2.BakelitePM = 8101] = "BakelitePM", ItemId2[ItemId2.BakeliteSA = 8102] = "BakeliteSA", ItemId2[ItemId2.BakeliteDB = 8103] = "BakeliteDB", ItemId2[ItemId2.BakeliteAT = 8104] = "BakeliteAT", ItemId2[ItemId2.PorcelainSC = 7991] = "PorcelainSC", ItemId2[ItemId2.PorcelainTT = 7992] = "PorcelainTT", ItemId2[ItemId2.PorcelainPM = 7993] = "PorcelainPM", ItemId2[ItemId2.PorcelainSA = 7994] = "PorcelainSA", ItemId2[ItemId2.PorcelainDB = 7995] = "PorcelainDB", ItemId2[ItemId2.PorcelainAT = 7996] = "PorcelainAT", ItemId2[ItemId2.StainlessSC = 1224] = "StainlessSC", ItemId2[ItemId2.StainlessTT = 1225] = "StainlessTT", ItemId2[ItemId2.StainlessPM = 1226] = "StainlessPM", ItemId2[ItemId2.StainlessSA = 1227] = "StainlessSA", ItemId2[ItemId2.StainlessDB = 1228] = "StainlessDB", ItemId2[ItemId2.StainlessAT = 1229] = "StainlessAT", ItemId2[ItemId2.PlexiSC = 1230] = "PlexiSC", ItemId2[ItemId2.PlexiTT = 1231] = "PlexiTT", ItemId2[ItemId2.PlexiPM = 1232] = "PlexiPM", ItemId2[ItemId2.PlexiSA = 1233] = "PlexiSA", ItemId2[ItemId2.PlexiDB = 1234] = "PlexiDB", ItemId2[ItemId2.PlexiAT = 1235] = "PlexiAT", ItemId2[ItemId2.BrimstoneSC = 2814] = "BrimstoneSC", ItemId2[ItemId2.BrimstoneTT = 2815] = "BrimstoneTT", ItemId2[ItemId2.BrimstonePM = 2817] = "BrimstonePM", ItemId2[ItemId2.BrimstoneSA = 2818] = "BrimstoneSA", ItemId2[ItemId2.BrimstoneDB = 2816] = "BrimstoneDB", ItemId2[ItemId2.BrimstoneAT = 2813] = "BrimstoneAT", ItemId2[ItemId2.DiceRing = 8290] = "DiceRing", ItemId2[ItemId2.DiceBeltBuckle = 8291] = "DiceBeltBuckle", ItemId2[ItemId2.DicePrintPajamaPants = 8292] = "DicePrintPajamaPants", ItemId2[ItemId2.DiceShapedBackpack = 8293] = "DiceShapedBackpack", ItemId2[ItemId2.DicePrintDoRag = 8294] = "DicePrintDoRag", ItemId2[ItemId2.DiceSunglasses = 8295] = "DiceSunglasses", ItemId2[ItemId2.PickyTweezers = 7936] = "PickyTweezers", ItemId2[ItemId2.AdventurerBobblehead = 9084] = "AdventurerBobblehead", ItemId2[ItemId2.PerfectlyFairCoin = 9526] = "PerfectlyFairCoin", ItemId2[ItemId2.GarlandOfGreatness = 9910] = "GarlandOfGreatness", ItemId2[ItemId2.Ring = 10252] = "Ring", ItemId2[ItemId2.RedPlumbersBoots = 10501] = "RedPlumbersBoots", ItemId2[ItemId2.QuantumOfFamiliar = 10758] = "QuantumOfFamiliar", ItemId2[ItemId2.TheBigBookOfEverySkill = 10917] = "TheBigBookOfEverySkill", ItemId2[ItemId2.StuffedDinosaur = 10949] = "StuffedDinosaur";
})(ItemId || (ItemId = {}));
var Thwaitgold;
(function(Thwaitgold2) {
  Thwaitgold2[Thwaitgold2.Bee = 5141] = "Bee", Thwaitgold2[Thwaitgold2.Grasshopper = 5222] = "Grasshopper", Thwaitgold2[Thwaitgold2.Butterfly = 5392] = "Butterfly", Thwaitgold2[Thwaitgold2.StagBeetle = 5572] = "StagBeetle", Thwaitgold2[Thwaitgold2.WoollyBear = 5694] = "WoollyBear", Thwaitgold2[Thwaitgold2.Maggot = 5773] = "Maggot", Thwaitgold2[Thwaitgold2.PrayingMantis = 6045] = "PrayingMantis", Thwaitgold2[Thwaitgold2.Firefly = 6298] = "Firefly", Thwaitgold2[Thwaitgold2.GoliathBeetle = 6547] = "GoliathBeetle", Thwaitgold2[Thwaitgold2.Bookworm = 6676] = "Bookworm", Thwaitgold2[Thwaitgold2.Ant = 6899] = "Ant", Thwaitgold2[Thwaitgold2.Dragonfly = 7249] = "Dragonfly", Thwaitgold2[Thwaitgold2.WheelBug = 7498] = "WheelBug", Thwaitgold2[Thwaitgold2.Spider = 7668] = "Spider", Thwaitgold2[Thwaitgold2.Nit = 7935] = "Nit", Thwaitgold2[Thwaitgold2.ScarabBeetle = 8087] = "ScarabBeetle", Thwaitgold2[Thwaitgold2.Caterpillar = 8296] = "Caterpillar", Thwaitgold2[Thwaitgold2.Termite = 8556] = "Termite", Thwaitgold2[Thwaitgold2.Scorpion = 8984] = "Scorpion", Thwaitgold2[Thwaitgold2.Moth = 9031] = "Moth", Thwaitgold2[Thwaitgold2.Cockroach = 9099] = "Cockroach", Thwaitgold2[Thwaitgold2.Amoeba = 9346] = "Amoeba", Thwaitgold2[Thwaitgold2.Bug = 9488] = "Bug", Thwaitgold2[Thwaitgold2.TimeFly = 9525] = "TimeFly", Thwaitgold2[Thwaitgold2.Metabug = 9758] = "Metabug", Thwaitgold2[Thwaitgold2.Chigger = 9917] = "Chigger", Thwaitgold2[Thwaitgold2.MaskedHunter = 9941] = "MaskedHunter", Thwaitgold2[Thwaitgold2.Mosquito = 10184] = "Mosquito", Thwaitgold2[Thwaitgold2.Nymph = 10253] = "Nymph", Thwaitgold2[Thwaitgold2.BombardierBeetle = 10319] = "BombardierBeetle", Thwaitgold2[Thwaitgold2.BuzzyBeetle = 10470] = "BuzzyBeetle", Thwaitgold2[Thwaitgold2.KeyholeSpider = 10570] = "KeyholeSpider", Thwaitgold2[Thwaitgold2.Slug = 10601] = "Slug", Thwaitgold2[Thwaitgold2.ListeningBug = 10736] = "ListeningBug", Thwaitgold2[Thwaitgold2.QuantumBug = 10757] = "QuantumBug", Thwaitgold2[Thwaitgold2.FireBeetle = 10791] = "FireBeetle", Thwaitgold2[Thwaitgold2.Protozoa = 10894] = "Protozoa", Thwaitgold2[Thwaitgold2.Harvestman = 10918] = "Harvestman", Thwaitgold2[Thwaitgold2.MosquitoInAmber = 10950] = "MosquitoInAmber", Thwaitgold2[Thwaitgold2.AntiMoth = 11166] = "AntiMoth", Thwaitgold2[Thwaitgold2.SplendorBeetle = 11255] = "SplendorBeetle", Thwaitgold2[Thwaitgold2.Fairyfly = 11326] = "Fairyfly", Thwaitgold2[Thwaitgold2.WolfSpider = 11563] = "WolfSpider", Thwaitgold2[Thwaitgold2.IlliniginaIllinoiensis = 11593] = "IlliniginaIllinoiensis", Thwaitgold2[Thwaitgold2.ShieldBug = 11637] = "ShieldBug", Thwaitgold2[Thwaitgold2.CordycepsAnt = 11848] = "CordycepsAnt";
})(Thwaitgold || (Thwaitgold = {}));
var Familiar;
(function(Familiar7) {
  Familiar7[Familiar7.ReconstitutedCrow = 147] = "ReconstitutedCrow", Familiar7[Familiar7.HoveringSkull = 163] = "HoveringSkull", Familiar7[Familiar7.QuantumEntangler = 307] = "QuantumEntangler", Familiar7[Familiar7.HeatWave = 312] = "HeatWave", Familiar7[Familiar7.ColdCut = 313] = "ColdCut", Familiar7[Familiar7.ShameSpiral = 314] = "ShameSpiral", Familiar7[Familiar7.PhantomLimb = 315] = "PhantomLimb", Familiar7[Familiar7.FoulBall = 316] = "FoulBall", Familiar7[Familiar7.DireCassava = 317] = "DireCassava", Familiar7[Familiar7.Observer = 318] = "Observer", Familiar7[Familiar7.CoolCucumber = 319] = "CoolCucumber", Familiar7[Familiar7.DefectiveChildrensStapler = 320] = "DefectiveChildrensStapler", Familiar7[Familiar7.Glover = 321] = "Glover", Familiar7[Familiar7.ZapperBug = 322] = "ZapperBug";
})(Familiar || (Familiar = {}));
var SOFTCORE = -3, HARDCORE = -2, paths = [{
  id: SOFTCORE,
  name: "Softcore",
  image: "itemimages/karma.gif",
  items: [],
  equipment: [ItemId.PolyesterSC, ItemId.PolyesterTT, ItemId.PolyesterPM, ItemId.PolyesterSA, ItemId.PolyesterDB, ItemId.PolyesterAT, ItemId.WickerSC, ItemId.WickerTT, ItemId.WickerPM, ItemId.WickerSA, ItemId.WickerDB, ItemId.WickerAT, ItemId.AerogelSC, ItemId.AerogelTT, ItemId.AerogelPM, ItemId.AerogelSA, ItemId.AerogelDB, ItemId.AerogelAT, ItemId.GabardineSC, ItemId.GabardineTT, ItemId.GabardinePM, ItemId.GabardineSA, ItemId.GabardineDB, ItemId.GabardineAT, ItemId.ChalkSC, ItemId.ChalkTT, ItemId.ChalkPM, ItemId.ChalkSA, ItemId.ChalkDB, ItemId.ChalkAT, ItemId.ParaffinSC, ItemId.ParaffinTT, ItemId.ParaffinPM, ItemId.ParaffinSA, ItemId.ParaffinDB, ItemId.ParaffinAT, ItemId.VelourSC, ItemId.VelourTT, ItemId.VelourPM, ItemId.VelourSA, ItemId.VelourDB, ItemId.VelourAT, ItemId.LoofahSC, ItemId.LoofahTT, ItemId.LoofahPM, ItemId.LoofahSA, ItemId.LoofahDB, ItemId.LoofahAT, ItemId.ChiffonSC, ItemId.ChiffonTT, ItemId.ChiffonPM, ItemId.ChiffonSA, ItemId.ChiffonDB, ItemId.ChiffonAT, ItemId.MossSC, ItemId.MossTT, ItemId.MossPM, ItemId.MossSA, ItemId.MossDB, ItemId.MossAT, ItemId.CrepePaperSC, ItemId.CrepePaperTT, ItemId.CrepePaperPM, ItemId.CrepePaperSA, ItemId.CrepePaperDB, ItemId.CrepePaperAT],
  tattoos: [{
    name: "Seal Clubber",
    image: "class1"
  }, {
    name: "Turtle Tamer",
    image: "class2"
  }, {
    name: "Pastamancer",
    image: "class3"
  }, {
    name: "Sauceror",
    image: "class4"
  }, {
    name: "Disco Bandit",
    image: "class5"
  }, {
    name: "Accordion Thief",
    image: "class6"
  }, {
    name: "Normal Ascensions",
    image: ["asc01", "asc02", "asc03", "asc04", "asc05", "asc06", "asc07", "asc08", "asc09", "asc10", "asc11", "asc12"]
  }],
  points: null,
  maxPoints: 0
}, {
  id: HARDCORE,
  name: "Hardcore",
  image: "otherimages/sigils/staintat.gif",
  items: [],
  equipment: [ItemId.StainlessSC, ItemId.StainlessTT, ItemId.StainlessPM, ItemId.StainlessSA, ItemId.StainlessDB, ItemId.StainlessAT, ItemId.PorcelainSC, ItemId.PorcelainTT, ItemId.PorcelainPM, ItemId.PorcelainSA, ItemId.PorcelainDB, ItemId.PorcelainAT, ItemId.BakeliteSC, ItemId.BakeliteTT, ItemId.BakelitePM, ItemId.BakeliteSA, ItemId.BakeliteDB, ItemId.BakeliteAT, ItemId.WroughtIronSC, ItemId.WroughtIronTT, ItemId.WroughtIronPM, ItemId.WroughtIronSA, ItemId.WroughtIronDB, ItemId.WroughtIronAT, ItemId.FiberglassSC, ItemId.FiberglassTT, ItemId.FiberglassPM, ItemId.FiberglassSA, ItemId.FiberglassDB, ItemId.FiberglassAT, ItemId.MarbleSC, ItemId.MarbleTT, ItemId.MarblePM, ItemId.MarbleSA, ItemId.MarbleDB, ItemId.MarbleAT, ItemId.TerraCottaSC, ItemId.TerraCottaTT, ItemId.TerraCottaPM, ItemId.TerraCottaSA, ItemId.TerraCottaDB, ItemId.TerraCottaAT, ItemId.StainedGlassSC, ItemId.StainedGlassTT, ItemId.StainedGlassPM, ItemId.StainedGlassSA, ItemId.StainedGlassDB, ItemId.StainedGlassAT, ItemId.FlagstoneSC, ItemId.FlagstoneTT, ItemId.FlagstonePM, ItemId.FlagstoneSA, ItemId.FlagstoneDB, ItemId.FlagstoneAT, ItemId.CeramicSC, ItemId.CeramicTT, ItemId.CeramicPM, ItemId.CeramicSA, ItemId.CeramicDB, ItemId.CeramicAT, ItemId.AdobeSC, ItemId.AdobeTT, ItemId.AdobePM, ItemId.AdobeSA, ItemId.AdobeDB, ItemId.AdobeAT, ItemId.PetrifiedWoodSC, ItemId.PetrifiedWoodTT, ItemId.PetrifiedWoodPM, ItemId.PetrifiedWoodSA, ItemId.PetrifiedWoodDB, ItemId.PetrifiedWoodAT],
  tattoos: [{
    name: "Seal Clubber",
    image: "class1hc"
  }, {
    name: "Turtle Tamer",
    image: "class2hc"
  }, {
    name: "Pastamancer",
    image: "class3hc"
  }, {
    name: "Sauceror",
    image: "class4hc"
  }, {
    name: "Disco Bandit",
    image: "class5hc"
  }, {
    name: "Accordion Thief",
    image: "class6hc"
  }, {
    name: "Hardcore Ascensions",
    image: ["hasc01", "hasc02", "hasc03", "hasc04", "hasc05", "hasc06", "hasc07", "hasc08", "hasc09", "hasc10", "hasc11", "hasc12"]
  }],
  points: null,
  maxPoints: 0
}, {
  id: -1,
  name: "Bad Moon",
  image: "otherimages/sigils/brimtat.gif",
  items: [],
  equipment: [ItemId.BrimstoneSC, ItemId.BrimstoneTT, ItemId.BrimstonePM, ItemId.BrimstoneSA, ItemId.BrimstoneDB, ItemId.BrimstoneAT],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 1,
  name: "Boozetafarian",
  image: "itemimages/martini.gif",
  items: [],
  equipment: [],
  tattoos: [{
    name: "Hardcore Boozetafarian",
    image: "nofood"
  }],
  points: null,
  maxPoints: 0
}, {
  id: 2,
  name: "Teetotaler",
  image: "itemimages/bowl.gif",
  items: [],
  equipment: [],
  tattoos: [{
    name: "Hardcore Teetotaler",
    image: "nobeer"
  }],
  points: null,
  maxPoints: 0
}, {
  id: 3,
  name: "Oxygenarian",
  image: "itemimages/smalloxy.gif",
  items: [],
  equipment: [ItemId.PlexiSC, ItemId.PlexiTT, ItemId.PlexiPM, ItemId.PlexiSA, ItemId.PlexiDB, ItemId.PlexiAT],
  tattoos: [{
    name: "Hardcore Oxygenarian",
    image: "oxy"
  }],
  points: null,
  maxPoints: 0
}, {
  id: 4,
  name: "Bees Hate You",
  image: "itemimages/beeicon.gif",
  items: [Thwaitgold.Bee],
  equipment: [],
  tattoos: [],
  familiars: [Familiar.ReconstitutedCrow],
  points: null,
  maxPoints: 0
}, {
  id: 6,
  name: "Way of the Surprising Fist",
  image: "itemimages/wosp_fist.gif",
  items: [Thwaitgold.Grasshopper],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 7,
  name: "Trendy",
  image: "itemimages/trendyicon.gif",
  items: [Thwaitgold.Butterfly],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 8,
  name: "Avatar of Boris",
  image: "itemimages/trusty.gif",
  items: [Thwaitgold.StagBeetle],
  equipment: [],
  tattoos: [{
    name: "Boris",
    image: "class11"
  }, {
    name: "Hardcore Boris",
    image: "class11hc"
  }],
  points: "borisPoints",
  maxPoints: 29
}, {
  id: 9,
  name: "Bugbear Invasion",
  image: "itemimages/familiar39.gif",
  items: [Thwaitgold.WoollyBear],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 10,
  name: "Zombie Slayer",
  image: "itemimages/tombstone.gif",
  items: [Thwaitgold.Maggot],
  equipment: [],
  tattoos: [{
    name: "Zombie Slayer",
    image: "class12"
  }, {
    name: "Hardcore Zombie Slayer",
    image: "class12hc"
  }],
  familiars: [Familiar.HoveringSkull],
  points: "zombiePoints",
  maxPoints: 30
}, {
  id: 11,
  name: "Class Act",
  image: "itemimages/motorboat.gif",
  items: [Thwaitgold.PrayingMantis],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 12,
  name: "Avatar of Jarlsberg",
  image: "itemimages/jarlhat.gif",
  items: [Thwaitgold.Firefly],
  equipment: [],
  tattoos: [{
    name: "Jarlsberg",
    image: "class14"
  }, {
    name: "Hardcore Jarlsberg",
    image: "class14hc"
  }],
  points: "jarlsbergPoints",
  maxPoints: 30
}, {
  id: 14,
  name: "BIG!",
  image: "itemimages/bigicon.gif",
  items: [Thwaitgold.GoliathBeetle],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 15,
  name: "KOLHS",
  image: "itemimages/kolhsicon.gif",
  items: [Thwaitgold.Bookworm],
  equipment: [],
  tattoos: [],
  points: "yearbookCameraAscensions",
  maxPoints: 20
}, {
  id: 16,
  name: "Class Act II: A Class For Pigs",
  image: "itemimages/motorboat2.gif",
  items: [Thwaitgold.Ant],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 17,
  name: "Avatar of Sneaky Pete",
  image: "itemimages/bigglasses.gif",
  items: [Thwaitgold.Dragonfly],
  equipment: [],
  tattoos: [{
    name: "Sneaky Pete",
    image: "class15"
  }, {
    name: "Hardcore Sneaky Pete",
    image: "class15hc"
  }],
  points: "sneakyPetePoints",
  maxPoints: 30
}, {
  id: 18,
  name: "Slow and Steady",
  image: "itemimages/sas.gif",
  items: [Thwaitgold.WheelBug],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 19,
  name: "Heavy Rains",
  image: "itemimages/familiar31.gif",
  items: [Thwaitgold.Spider],
  equipment: [],
  tattoos: [],
  points: ["heavyRainsStartingLightning", "heavyRainsStartingThunder", "heavyRainsStartingRain"],
  maxPoints: 9
}, {
  id: 21,
  name: "Picky",
  image: "itemimages/pickypath.gif",
  items: [Thwaitgold.Nit, ItemId.PickyTweezers],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 22,
  name: "Standard",
  image: "itemimages/standardicon.gif",
  items: [],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 23,
  name: "Actually Ed the Undying",
  image: "itemimages/scarab.gif",
  items: [Thwaitgold.ScarabBeetle],
  equipment: [],
  tattoos: [{
    name: "Ed the Undying",
    image: "class17"
  }, {
    name: "Hardcore Ed the Undying",
    image: "class17hc"
  }],
  points: "edPoints",
  maxPoints: 20
}, {
  id: 24,
  name: "One Crazy Random Summer",
  image: "itemimages/dice.gif",
  items: [Thwaitgold.Caterpillar],
  equipment: [ItemId.DiceRing, ItemId.DiceBeltBuckle, ItemId.DicePrintPajamaPants, ItemId.DiceShapedBackpack, ItemId.DicePrintDoRag, ItemId.DiceSunglasses],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 25,
  name: "Community Service",
  image: "itemimages/csplaquesmall.gif",
  items: [Thwaitgold.Termite],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 26,
  name: "Avatar of West of Loathing",
  image: "itemimages/badge.gif",
  items: [Thwaitgold.Scorpion],
  equipment: [],
  tattoos: [{
    name: "Cow Puncher",
    image: "class18"
  }, {
    name: "Hardcore Cow Puncher",
    image: "class18hc"
  }, {
    name: "Beanslinger",
    image: "class19"
  }, {
    name: "Hardcore Beanslinger",
    image: "class19hc"
  }, {
    name: "Snake Oiler",
    image: "class20"
  }, {
    name: "Hardcore Snake Oiler",
    image: "class20hc"
  }],
  points: ["awolPointsCowpuncher", "awolPointsBeanslinger", "awolPointsSnakeoiler"],
  maxPoints: 30
}, {
  id: 27,
  name: "The Source",
  image: "itemimages/ss_datasiphon.gif",
  items: [Thwaitgold.Moth],
  equipment: [],
  tattoos: [],
  points: "sourcePoints",
  maxPoints: 12
}, {
  id: 28,
  name: "Nuclear Autumn",
  image: "itemimages/radiation.gif",
  items: [Thwaitgold.Cockroach, ItemId.AdventurerBobblehead],
  equipment: [],
  tattoos: [],
  points: "nuclearAutumnPoints",
  maxPoints: 23
}, {
  id: 29,
  name: "Gelatinous Noob",
  image: "itemimages/gcube.gif",
  items: [Thwaitgold.Amoeba],
  equipment: [],
  tattoos: [{
    name: "Gelatinous Noob",
    image: "class23"
  }, {
    name: "Hardcore Gelatinous Noob",
    image: "class23hc"
  }],
  points: "noobPoints",
  maxPoints: 20
}, {
  id: 30,
  name: "License to Adventure",
  image: "itemimages/briefcase.gif",
  items: [Thwaitgold.Bug],
  equipment: [],
  tattoos: [],
  points: "bondPoints",
  maxPoints: 23
}, {
  id: 31,
  name: "Live. Ascend. Repeat.",
  image: "itemimages/watch.gif",
  items: [Thwaitgold.TimeFly, ItemId.PerfectlyFairCoin],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 32,
  name: "Pocket Familiars",
  image: "itemimages/spiritorb.gif",
  items: [Thwaitgold.Metabug],
  equipment: [],
  tattoos: [],
  points: "todo: make a pref that tracks starting pokedollars",
  maxPoints: 10
}, {
  id: 33,
  name: "G-Lover",
  image: "itemimages/g-loveheart.gif",
  items: [Thwaitgold.Chigger, ItemId.GarlandOfGreatness],
  equipment: [],
  tattoos: [{
    name: "Gattoo",
    image: "gtat"
  }],
  points: "gloverPoints",
  maxPoints: 10
}, {
  id: 34,
  name: "Disguises Delimit",
  image: "itemimages/dd_icon.gif",
  items: [Thwaitgold.MaskedHunter],
  equipment: [],
  tattoos: [],
  points: "masksUnlocked",
  maxPoints: 25
}, {
  id: 35,
  name: "Dark Gyffte",
  image: "itemimages/darkgift.gif",
  items: [Thwaitgold.Mosquito],
  equipment: [],
  tattoos: [{
    name: "Vampyre",
    image: "class24"
  }, {
    name: "Hardcore Vampyre",
    image: "class24hc"
  }],
  points: "darkGyfftePoints",
  maxPoints: 23
}, {
  id: 36,
  name: "Two Crazy Random Summer",
  image: "itemimages/twocrazydice.gif",
  items: [Thwaitgold.Nymph, ItemId.Ring],
  equipment: [],
  tattoos: [],
  points: "twoCRSPoints",
  maxPoints: 37
}, {
  id: 37,
  name: "Kingdom of Exploathing",
  image: "itemimages/puff.gif",
  items: [Thwaitgold.BombardierBeetle],
  equipment: [],
  tattoos: [],
  points: "skillLevel188",
  maxPoints: 13
}, {
  id: 38,
  name: "Path of the Plumber",
  image: "itemimages/mario_mushroom1.gif",
  items: [Thwaitgold.BuzzyBeetle, ItemId.RedPlumbersBoots],
  equipment: [],
  tattoos: [{
    name: "Plumber",
    image: "class25"
  }, {
    name: "Hardcore Plumber",
    image: "class25hc"
  }],
  points: "plumberPoints",
  maxPoints: 11
}, {
  id: 39,
  name: "Low Key Summer",
  image: "itemimages/littlelock.gif",
  items: [Thwaitgold.KeyholeSpider],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 40,
  name: "Grey Goo",
  image: "itemimages/greygooball.gif",
  items: [Thwaitgold.Slug],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 41,
  name: "You, Robot",
  image: "itemimages/robobattery.gif",
  items: [Thwaitgold.ListeningBug],
  equipment: [],
  tattoos: [],
  points: "youRobotPoints",
  maxPoints: 12
}, {
  id: 42,
  name: "Quantum Terrarium",
  image: "itemimages/quantum.gif",
  items: [Thwaitgold.QuantumBug, ItemId.QuantumOfFamiliar],
  equipment: [],
  tattoos: [],
  familiars: [Familiar.QuantumEntangler],
  points: "quantumPoints",
  maxPoints: 11
}, {
  id: 43,
  name: "Wildfire",
  image: "itemimages/fire.gif",
  items: [Thwaitgold.FireBeetle],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 44,
  name: "Grey You",
  image: "itemimages/greygooring.gif",
  items: [Thwaitgold.Protozoa],
  equipment: [],
  tattoos: [{
    name: "Grey Goo",
    image: "class27"
  }, {
    name: "Hardcore Grey Goo",
    image: "class27hc"
  }],
  points: "greyYouPoints",
  maxPoints: 11
}, {
  id: 45,
  name: "Journeyman",
  image: "itemimages/map.gif",
  items: [Thwaitgold.Harvestman, ItemId.TheBigBookOfEverySkill],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 46,
  name: "Fall of the Dinosaurs",
  image: "itemimages/dinostuffy.gif",
  items: [Thwaitgold.MosquitoInAmber, ItemId.StuffedDinosaur],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 47,
  name: "Avatar of Shadows Over Loathing",
  image: "itemimages/aosol.gif",
  items: [Thwaitgold.AntiMoth],
  equipment: [],
  tattoos: [{
    name: "Pig Skinner",
    image: "class28"
  }, {
    name: "Hardcore Pig Skinner",
    image: "class28hc"
  }, {
    name: "Cheese Wizard",
    image: "class29"
  }, {
    name: "Hardcore Cheese Wizard",
    image: "class29hc"
  }, {
    name: "Jazz Agent",
    image: "class30"
  }, {
    name: "Hardcore Jazz Agent",
    image: "class30hc"
  }],
  points: ["asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent"],
  maxPoints: 11
}, {
  id: 48,
  name: "Legacy of Loathing",
  image: "itemimages/xx.gif",
  items: [Thwaitgold.SplendorBeetle],
  equipment: [],
  tattoos: [],
  points: "legacyPoints",
  maxPoints: 19
}, {
  id: 49,
  name: "A Shrunken Adventurer am I",
  image: "itemimages/kiloskull.gif",
  items: [Thwaitgold.Fairyfly],
  equipment: [],
  tattoos: [],
  points: "skillLevel227",
  maxPoints: 11
}, {
  id: 50,
  name: "WereProfessor",
  image: "itemimages/intrinsic_beast.gif",
  items: [Thwaitgold.WolfSpider],
  equipment: [],
  tattoos: [{
    name: "WereProfessor",
    image: "class31"
  }, {
    name: "Hardcore WereProfessor",
    image: "class31hc"
  }],
  points: "wereProfessorPoints",
  maxPoints: 23
}, {
  id: 51,
  name: "11 Things I Hate About U",
  image: "itemimages/ihatesu.gif",
  items: [Thwaitgold.IlliniginaIllinoiensis],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}, {
  id: 52,
  name: "Avant Guard",
  image: "itemimages/radshield.gif",
  items: [Thwaitgold.ShieldBug],
  equipment: [],
  tattoos: [],
  points: "avantGuardPoints",
  maxPoints: 11
}, {
  id: 53,
  name: "Z is for Zootomist",
  image: "itemimages/zootomistitem.gif",
  items: [Thwaitgold.CordycepsAnt],
  equipment: [],
  tattoos: [{
    name: "Zootomist",
    image: "class32"
  }, {
    name: "Hardcore Zootomist",
    image: "class32hc"
  }],
  familiars: [Familiar.HeatWave, Familiar.ColdCut, Familiar.ShameSpiral, Familiar.PhantomLimb, Familiar.FoulBall, Familiar.DireCassava, Familiar.Observer, Familiar.CoolCucumber, Familiar.DefectiveChildrensStapler, Familiar.Glover, Familiar.ZapperBug],
  points: "zootomistPoints",
  maxPoints: 11
}], paths_default = paths;

// ../greenbox-data/dist/lib/paths.js
function _slicedToArray3(r, e) {
  return _arrayWithHoles3(r) || _iterableToArrayLimit3(r, e) || _unsupportedIterableToArray4(r, e) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray4(r, a) : void 0;
  }
}
function _arrayLikeToArray4(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit3(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles3(r) {
  if (Array.isArray(r)) return r;
}
function loadPaths() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, size = JSON.stringify(paths_default).length;
  return size === lastKnownSize ? null : {
    data: paths_default,
    size: size
  };
}
var pointsRadix = 32, tattooLevelRadix = 16, compressPaths = function(paths2) {
  return paths2.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(acc, path) {
    var _acc = _slicedToArray3(acc, 2), r = _acc[0], currentId = _acc[1];
    return path[0] > currentId && (r += ",".repeat(path[0] - currentId), currentId = path[0]), r += path[1].toString(pointsRadix), r += path[2].join(""), r += path[3].join(""), r += path[4].map(function(i) {
      return i.toString(tattooLevelRadix);
    }).join(""), tuple([r, currentId]);
  }, tuple(["", -3]))[0].replace(/0+($|,)/, "$1");
};

// ../greenbox-data/dist/lib/skills.js
init_kolmafia_polyfill();
var SkillStatus;
(function(SkillStatus2) {
  SkillStatus2[SkillStatus2.NONE = 0] = "NONE", SkillStatus2[SkillStatus2.SOFTCORE = 1] = "SOFTCORE", SkillStatus2[SkillStatus2.HARDCORE = 2] = "HARDCORE";
})(SkillStatus || (SkillStatus = {}));
var compressSkills = function(skills) {
  return skills.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(acc, skill) {
    var r = acc[0], currentBlock = acc[1], block = Math.floor(skill[0] / 1e3);
    block > currentBlock && (r += ",".repeat(block - currentBlock), currentBlock = block);
    var blockContents = r.substring(r.lastIndexOf(",") + 1), zeros = "0".repeat(Math.max(0, skill[0] - block * 1e3 - blockContents.replace(/\(\d+\)/g, "").length - (block === 0 ? 1 : 0)));
    return r += zeros, r += skill[1], skill[2] > 0 && (r += "(".concat(skill[2], ")")), tuple([r, currentBlock]);
  }, tuple(["", 0]))[0].replace(/0+($|,)/, "$1");
};

// ../greenbox-data/dist/lib/tattoos.js
init_kolmafia_polyfill();

// ../greenbox-data/dist/data/tattoos.js
init_kolmafia_polyfill();
var tattoos = [{
  name: "8-Bit Finery",
  image: "swordtat",
  outfit: 15
}, {
  name: "Aeroutfit",
  image: "aerotat",
  outfit: 118
}, {
  name: "Adobe Armor",
  image: "adobetat",
  outfit: 169
}, {
  name: "Animelf Apparel",
  image: "animelftat",
  outfit: 89
}, {
  name: "Antique Arms And Armor",
  image: "armortat",
  outfit: 29
}, {
  name: "Antique Nutcracker Outfit",
  image: "nutctat",
  outfit: 157
}, {
  name: "Arboreal Raiment",
  image: "wreathtat",
  outfit: 25
}, {
  name: "Arrrbor Day Apparrrrrel",
  image: "arbortat",
  outfit: 48
}, {
  name: "Bakelite Brigandine",
  image: "baketat",
  outfit: 117
}, {
  name: "Bauxite Baubles",
  image: "bauxtat",
  outfit: 144
}, {
  name: "Bits o' Honey",
  image: "honeytat",
  outfit: 81
}, {
  name: "Black Armaments",
  image: "blacktat",
  outfit: 35
}, {
  name: "Blasphemous Bedizenment",
  image: "brimtat",
  outfit: 75
}, {
  name: "Bounty-Hunting Rig",
  image: "meattat",
  outfit: 34
}, {
  name: "Bow Tux",
  image: "bowtat",
  outfit: 19
}, {
  name: "BRICKOfig Outfit",
  image: "minifigtat",
  outfit: 70
}, {
  name: "Brogre Brouture",
  image: "brogretat",
  outfit: 106
}, {
  name: "Bugbear Costume",
  image: "bugbear",
  outfit: 1
}, {
  name: "Ceramic Clothing",
  image: "ceramtat",
  outfit: 162
}, {
  name: "Ceramic Suit",
  image: "porctat",
  outfit: 114
}, {
  name: "Chalk Chostume",
  image: "chalktat",
  outfit: 145
}, {
  name: "Cheerful Reindeer Suit",
  image: "reintat",
  outfit: 132
}, {
  name: "Chiffon Chiffinery",
  image: "chiffontat",
  outfit: 163
}, {
  name: "Cloaca-Cola Uniform",
  image: "cola1tat",
  outfit: 23
}, {
  name: "Clockwork Apparatus",
  image: "clocktat",
  outfit: 20
}, {
  name: "Clothing of Loathing",
  image: "loathetat",
  outfit: 94
}, {
  name: "Cold Comforts",
  image: "doubicetat",
  outfit: 80
}, {
  name: "Cool Irons",
  image: "dvotat8",
  outfit: 102
}, {
  name: "Cooper's Couture",
  image: "barreltat",
  outfit: 126
}, {
  name: "Crappy Mer-kin Disguise",
  image: "merkintat",
  outfit: 59
}, {
  name: "Crepe Paper Participant's Clothes",
  image: "crepetat",
  outfit: 170
}, {
  name: "Crimbo Duds",
  image: "pressietat",
  outfit: 11
}, {
  name: "Crimborg Assault Armor",
  image: "halotat",
  outfit: 40
}, {
  name: "Crimbot Crimboutfit",
  image: "zaptat",
  outfit: 111
}, {
  name: "Crimbuccaneer rigging",
  image: "crimbuctat1",
  outfit: 167
}, {
  name: "Cursed Skeleton Pirate Costume",
  image: "skelepiratetat",
  outfit: 155
}, {
  name: "Cursed Zombie Pirate Costume",
  image: "zompirtat",
  outfit: 39
}, {
  name: "Dark Bro's Vestments",
  image: "necbrotat",
  outfit: 83
}, {
  name: "Dental Drip",
  image: "dentaltat",
  outfit: 165
}, {
  name: "Dinsey's Exoskeleton",
  image: "wdbraintat",
  outfit: 123
}, {
  name: "Dire Drifter Duds",
  image: "spohobotat",
  outfit: 45
}, {
  name: "Dreadful Bugbear Suit",
  image: "dvotat2",
  outfit: 96
}, {
  name: "Dreadful Ghost Suit",
  image: "dvotat5",
  outfit: 99
}, {
  name: "Dreadful Pajamas",
  image: "dvotat1",
  outfit: 95
}, {
  name: "Dreadful Skeleton Suit",
  image: "dvotat6",
  outfit: 101
}, {
  name: "Dreadful Vampire Suit",
  image: "dvotat7",
  outfit: 100
}, {
  name: "Dreadful Werewolf Suit",
  image: "dvotat3",
  outfit: 97
}, {
  name: "Dreadful Zombie Suit",
  image: "dvotat4",
  outfit: 98
}, {
  name: "Dwarvish War Uniform",
  image: "dwarvish",
  outfit: 50
}, {
  name: "Dyspepsi-Cola Uniform",
  image: "cola2tat",
  outfit: 24
}, {
  name: "El Vibrato Relics",
  image: "elvtat",
  outfit: 41
}, {
  name: "Eldritch Equipage",
  image: "elditchtat",
  outfit: 128
}, {
  name: "Elf Guard Fatigues",
  image: "elfguardtat1",
  outfit: 166
}, {
  name: "Encephalic Ensemble",
  image: "jfishtat",
  outfit: 27
}, {
  name: "eXtreme Cold-Weather Gear",
  image: "coldgear",
  outfit: 7
}, {
  name: "Fancy Tux",
  image: "blacktie",
  outfit: 72
}, {
  name: "FantasyRealm Thief's Outfit",
  image: "frtat3",
  outfit: 139
}, {
  name: "FantasyRealm Warrior's Outfit",
  image: "frtat1",
  outfit: 137
}, {
  name: "FantasyRealm Wizard's Outfit",
  image: "frtat2",
  outfit: 138
}, {
  name: "Fiberglass Finery",
  image: "fibertat",
  outfit: 121
}, {
  name: "Filthy Hippy Disguise",
  image: "hippy",
  outfit: 2
}, {
  name: "Flagstone Finery",
  image: "flagstonetat",
  outfit: 152
}, {
  name: "Floaty Fatigues",
  image: "rock_tat",
  outfit: 56
}, {
  name: "Frat Boy Ensemble",
  image: "fratboy",
  outfit: 3
}, {
  name: "Frat Warrior Fatigues",
  image: "warfrattat",
  outfit: 33
}, {
  name: "Frigid Northlands Garb",
  image: "nosealtat",
  outfit: 63
}, {
  name: "Furry Suit",
  image: "losertat",
  outfit: 14
}, {
  name: "Gabardine Guise",
  image: "gabtat",
  outfit: 120
}, {
  name: "Genie Garments",
  image: "genietat",
  outfit: 135
}, {
  name: "Ghast Iron Gear",
  image: "hotghosttat",
  outfit: 105
}, {
  name: "Gingerbread Best",
  image: "gingertat",
  outfit: 129
}, {
  name: "Glad Bag Glad Rags",
  image: "recyctat",
  outfit: 28
}, {
  name: "Gladiatorial Glad Rags",
  image: "spqktat",
  outfit: 108
}, {
  name: "Gnauga Hides",
  image: "gnaugatat",
  outfit: 21
}, {
  name: "Government-Issued Garb",
  image: "vwgovttat",
  outfit: 143
}, {
  name: "Governor's Daughter's Fancy Finery",
  image: "govtat",
  outfit: 172
}, {
  name: "Grass Guise",
  image: "eggtat",
  outfit: 26
}, {
  name: "Grimy Reaper's Vestments",
  image: "reapertat",
  outfit: 53
}, {
  name: "Guzzlr Uniform",
  image: "guzzlrtat",
  outfit: 159
}, {
  name: "Hateful Habiliment",
  image: "yogtat",
  outfit: 93
}, {
  name: "High-Radiation Mining Gear",
  image: "radminetat",
  outfit: 110
}, {
  name: "Hodgman's Regal Frippery",
  image: "hodgmantat",
  outfit: 47
}, {
  name: "Hot and Cold Running Ninja Suit",
  image: "ninja",
  outfit: 6
}, {
  name: "Hot Daub Ensemble",
  image: "claytat",
  outfit: 86
}, {
  name: "Hyperborean Hobo Habiliments",
  image: "colhobotat",
  outfit: 43
}, {
  name: "Knight's Armor",
  image: "bknight",
  outfit: 71
}, {
  name: "Knob Goblin Elite Guard Uniform",
  image: "eliteguard",
  outfit: 5
}, {
  name: "Knob Goblin Harem Girl Disguise",
  image: "haremgirl",
  outfit: 4
}, {
  name: "Lathed Livery",
  image: "lathetat",
  outfit: 160
}, {
  name: "Legendary Regalia of the Chelonian Overlord",
  image: "revclass2",
  outfit: 65
}, {
  name: "Legendary Regalia of the Groovelord",
  image: "revclass5",
  outfit: 68
}, {
  name: "Legendary Regalia of the Master Squeezeboxer",
  image: "revclass6",
  outfit: 69
}, {
  name: "Legendary Regalia of the Pasta Master",
  image: "revclass3",
  outfit: 66
}, {
  name: "Legendary Regalia of the Saucemaestro",
  image: "revclass4",
  outfit: 67
}, {
  name: "Legendary Regalia of the Seal Crusher",
  image: "revclass1",
  outfit: 64
}, {
  name: "Loofah Loungewear ",
  image: "loofahtat",
  outfit: 151
}, {
  name: "Luniform",
  image: "lunartat",
  outfit: 82
}, {
  name: "Marble Materials",
  image: "marbletat",
  outfit: 146
}, {
  name: "Mer-kin Gladiatorial Gear",
  image: "merkgtat",
  outfit: 60
}, {
  name: "Mer-kin Scholar's Vestments",
  image: "merkstat",
  outfit: 61
}, {
  name: "Meteor Masquerade",
  image: "meteortat",
  outfit: 131
}, {
  name: "Miming Paraphernalia",
  image: "mimetat",
  outfit: 133
}, {
  name: "Mining Gear",
  image: "miner",
  outfit: 8
}, {
  name: "Moss Mufti",
  image: "mosstat",
  outfit: 168
}, {
  name: "Mushroom Masquerade",
  image: "mushtat",
  outfit: 158
}, {
  name: "Mutant Couture",
  image: "dnatat",
  outfit: 49
}, {
  name: "Mutant Parts Apparel",
  image: "vwmuttat",
  outfit: 142
}, {
  name: "Oil Rig",
  image: "oiltat",
  outfit: 88
}, {
  name: "OK Lumberjack Outfit",
  image: "canadiatat",
  outfit: 17
}, {
  name: "Palmist Paraphernalia",
  image: "palmtat",
  outfit: 36
}, {
  name: "Paperclippery",
  image: "cliptat",
  outfit: 79
}, {
  name: "Paraffinalia",
  image: "para_tat",
  outfit: 147
}, {
  name: "Petrified Wood Professional Wardrobe",
  image: "pwoodtat",
  outfit: 171
}, {
  name: "Pinata Provisions",
  image: "rad_tat",
  outfit: 87
}, {
  name: "PirateRealm Assortment",
  image: "prealmtat",
  outfit: 153
}, {
  name: "Pork Elf Prizes",
  image: "pigirontat",
  outfit: 52
}, {
  name: "Primitive Radio Duds",
  image: "vol_tat",
  outfit: 55
}, {
  name: "Psychic Enpsemble",
  image: "psychictat",
  outfit: 136
}, {
  name: "Pyretic Panhandler Paraphernalia",
  image: "hothobotat",
  outfit: 42
}, {
  name: "Pyrotechnic Paper Paraphernalia",
  image: "fpmtat",
  outfit: 134
}, {
  name: "Radio Free Regalia",
  image: "radiotat",
  outfit: 18
}, {
  name: "Raiments of the Final Boss",
  image: "bosstat",
  outfit: 91
}, {
  name: "Roy Orbison Disguise",
  image: "orbisontat",
  outfit: 38
}, {
  name: "Seafaring Suit",
  image: "sailortat",
  outfit: 90
}, {
  name: "Shadow Shuit",
  image: "shadouttat",
  outfit: 164
}, {
  name: "Shallow Sea Fishing Outfit",
  image: "fishingtat",
  outfit: 154
}, {
  name: "Slime Enslamble",
  image: "vwslimetat",
  outfit: 141
}, {
  name: "Slimesuit",
  image: "slimetat",
  outfit: 54
}, {
  name: "Smoked Pottery",
  image: "potterytat",
  outfit: 76
}, {
  name: "SMOOCH Army Uniform",
  image: "smoochtat",
  outfit: 125
}, {
  name: "Snakeskin Suit",
  image: "vwsnaketat",
  outfit: 140
}, {
  name: "Snowman Suit",
  image: "snowmantat",
  outfit: 62
}, {
  name: "Space Beast Furs",
  image: "sbeasttat",
  outfit: 107
}, {
  name: "Spant Armor",
  image: "spantat",
  outfit: 130
}, {
  name: "Spelunker's Gear",
  image: "spelunktat",
  outfit: 115
}, {
  name: "Stained Glass Suit",
  image: "stainedtat",
  outfit: 150
}, {
  name: "Star Garb",
  image: "startat",
  outfit: 12
}, {
  name: "Sucker Samurai Suit",
  image: "lollitat",
  outfit: 84
}, {
  name: "Swashbuckling Getup",
  image: "pirate",
  outfit: 9
}, {
  name: "Synthetic Suit",
  image: "polytat",
  outfit: 113
}, {
  name: "Tapered Threads",
  image: "ducttat",
  outfit: 37
}, {
  name: "Tawdry Tramp Togs",
  image: "slehobotat",
  outfit: 46
}, {
  name: "Terra Cotta Tackle",
  image: "tc_tat",
  outfit: 148
}, {
  name: "Terrifying Clown Suit",
  image: "clown",
  outfit: 10
}, {
  name: "Terrycloth Tackle",
  image: "toweltat",
  outfit: 30
}, {
  name: "The Emperor's New Clothes",
  image: "emperortat",
  outfit: 124
}, {
  name: "The Jokester's Costume",
  image: "jokestertat",
  outfit: 127
}, {
  name: "Thousandth Birthday Suit",
  image: "skeletat",
  outfit: 77
}, {
  name: "Time Trappings",
  image: "hourtat",
  outfit: 22
}, {
  name: "Topiaria",
  image: "topitat",
  outfit: 112
}, {
  name: "Toxic Togs",
  image: "toxictat",
  outfit: 122
}, {
  name: "Trainbot Trappings",
  image: "tbottat",
  outfit: 161
}, {
  name: "Transparent Trappings",
  image: "plexitat",
  outfit: 73
}, {
  name: "Tropical Crimbo Duds",
  image: "tropictat",
  outfit: 31
}, {
  name: "Unblemished Uniform",
  image: "staintat",
  outfit: 74
}, {
  name: "Uncle Hobo's Rags",
  image: "crimbeard",
  outfit: 78
}, {
  name: "Velour Vestments",
  image: "velourtat",
  outfit: 149
}, {
  name: "Vestments of the Treeslayer",
  image: "arborween",
  outfit: 58
}, {
  name: "Vile Vagrant Vestments",
  image: "stehobotat",
  outfit: 44
}, {
  name: "Violent Vestments",
  image: "shubtat",
  outfit: 92
}, {
  name: "War Hippy Fatigues",
  image: "warhiptat",
  outfit: 32
}, {
  name: "Warbear Dress Armor",
  image: "bearclawta",
  outfit: 103
}, {
  name: "Wax Wardrobe",
  image: "crayontat",
  outfit: 85
}, {
  name: "Whittled Wearables",
  image: "whittletat",
  outfit: 156
}, {
  name: "Wicker Wear",
  image: "wickertat",
  outfit: 116
}, {
  name: "Workoutfit",
  image: "workouttat",
  outfit: 104
}, {
  name: "Wrought Wrappings",
  image: "wroughttat",
  outfit: 119
}, {
  name: "Wumpus-Hair Wardrobe",
  image: "wumpustat",
  outfit: 51
}, {
  name: "Xiblaxian Stealth Suit",
  image: "xiblaxtat",
  outfit: 109
}, {
  name: "Yendorian Finery",
  image: "elbereth",
  outfit: 16
}, {
  name: "Palette",
  image: "palette",
  misc: 1
}, {
  name: "Martini",
  image: "martini",
  misc: 2
}, {
  name: "Salad",
  image: "saladtat",
  misc: 3
}, {
  name: "Hobo",
  image: Array(19).fill(0).map(function(_, i) {
    return "hobotat".concat(i + 1);
  }),
  misc: 4
}, {
  name: "St. Sneaky Pete's Day",
  image: ["sspdtat1", "sspdpook2", "sspdfipp3", "sspd4plunk", "sspdfi5if"],
  misc: 5
}, {
  name: "Demon",
  image: "demontat",
  misc: 6
}, {
  name: "Best Game Ever",
  image: "margaraxe",
  misc: 7
}, {
  name: "Loathing Legion",
  image: "lltat",
  misc: 8
}, {
  name: "Alice's Army Foil",
  image: "foilheart",
  misc: 9
}, {
  name: "Corrupted Data",
  image: "datatat",
  misc: 10
}, {
  name: "Mark of the Bugbear",
  image: "dv_tat1",
  misc: 11
}, {
  name: "Mark of the Ghost",
  image: "dv_tat4",
  misc: 12
}, {
  name: "Mark of the Skeleton",
  image: "dv_tat6",
  misc: 13
}, {
  name: "Mark of the Vampire",
  image: "dv_tat5",
  misc: 14
}, {
  name: "Mark of the Werewolf",
  image: "dv_tat2",
  misc: 15
}, {
  name: "Mark of the Zombie",
  image: "dv_tat3",
  misc: 16
}, {
  name: "Official Seal of Dreadsylvania",
  image: "dvinntat",
  misc: 17
}, {
  name: "Spring Break",
  image: "sbreaktat",
  misc: 18
}, {
  name: "Merc Core",
  image: "merctat",
  misc: 19
}, {
  name: "Dinsey",
  image: "dinseytat",
  misc: 20
}, {
  name: "DEBBIE",
  image: "debbietat",
  misc: 21
}, {
  name: "Wal-Mart",
  image: "walmarttat",
  misc: 22
}, {
  name: "LT&T",
  image: "ltttat",
  misc: 23
}, {
  name: "Airplane",
  image: "planetat",
  misc: 24
}, {
  name: "White Rabbit",
  image: "sourcetat",
  misc: 25
}, {
  name: "Detective Badge",
  image: "detbadge",
  misc: 26
}, {
  name: "Proton",
  image: "protontat",
  misc: 27
}, {
  name: "Twitch Television",
  image: "twitchtat",
  misc: 28
}, {
  name: "Eternal Knot",
  image: "eternaltat",
  misc: 29
}, {
  name: "Spacegate Initiative",
  image: "sgtat",
  misc: 30
}, {
  name: "New You",
  image: "newyou",
  misc: 31
}, {
  name: "Battoo",
  image: "batmantat",
  misc: 32
}, {
  name: "I \u2764\uFE0F Gingerbread City",
  image: "gingercitytat",
  misc: 33
}, {
  name: "KGB",
  image: "kgbtat",
  misc: 34
}, {
  name: "FantasyRealm",
  image: "frtat",
  misc: 35
}, {
  name: "Bastille Battalion",
  image: "bbatttat",
  misc: 36
}, {
  name: "Gattoo",
  image: "gtat",
  misc: 37
}, {
  name: "Party Tattoo\u2122",
  image: "partytat",
  misc: 38
}, {
  name: "Crimbo 2018",
  image: "c18tat",
  misc: 39
}, {
  name: "Red Roger",
  image: "redrogertat",
  misc: 40
}, {
  name: "Guzzlr",
  image: "guzzlrtat2",
  misc: 41
}, {
  name: "Yeg",
  image: "yegtat",
  misc: 42
}, {
  name: "Crimbo Cheer",
  image: "c20cheer",
  misc: 43
}, {
  name: "Crimbo Carol",
  image: "c20carols",
  misc: 44
}, {
  name: "Crimbo Commerce",
  image: "c20commerce",
  misc: 45
}, {
  name: "Shadow",
  image: "shadowtat",
  misc: 46
}, {
  name: "Super-Heated Leaf",
  image: "al_tat",
  misc: 47
}, {
  name: "Tattoo Gun",
  image: "2024raffle",
  misc: 48
}], tattoos_default = tattoos;

// ../greenbox-data/dist/lib/tattoos.js
var OutfitTattooStatus;
(function(OutfitTattooStatus2) {
  OutfitTattooStatus2[OutfitTattooStatus2.NONE = 0] = "NONE", OutfitTattooStatus2[OutfitTattooStatus2.HAVE_OUTFIT = 1] = "HAVE_OUTFIT", OutfitTattooStatus2[OutfitTattooStatus2.HAVE = 2] = "HAVE";
})(OutfitTattooStatus || (OutfitTattooStatus = {}));
function loadTattoos() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, size = JSON.stringify(tattoos_default).length;
  return size === lastKnownSize ? null : {
    data: tattoos_default,
    size: size
  };
}
function isOutfitTattoo(tattoo) {
  return "outfit" in tattoo;
}
function isMiscTattoo(tattoo) {
  return "misc" in tattoo;
}
function getOutfitTattoos(tattoos2) {
  return tattoos2.filter(isOutfitTattoo).sort(function(a, b) {
    return a.outfit - b.outfit;
  });
}
function getMiscTattoos(tattoos2) {
  return tattoos2.filter(isMiscTattoo).sort(function(a, b) {
    return a.misc - b.misc;
  });
}
var tattooLevelRadix2 = 32, compressTattoos = function(tattoos2) {
  return tattoos2.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, tattoo) {
    return "".concat(r).concat("0".repeat(tattoo[0] - r.length - 1)).concat(tattoo[1].toString(tattooLevelRadix2));
  }, "").replace(/0+$/, "");
};

// ../greenbox-data/dist/lib/trophies.js
init_kolmafia_polyfill();

// ../greenbox-data/dist/data/trophies.js
init_kolmafia_polyfill();
var trophies = [{
  id: 1,
  name: "Little Boat",
  image: "gonna_need_a_smaller_boat"
}, {
  id: 2,
  name: "Big Boat",
  image: "party_on_the_big_boat"
}, {
  id: 3,
  name: "I Heart Canadia",
  image: "get_oot_eh"
}, {
  id: 4,
  name: "100 Pound Load",
  image: "heavy_lourde"
}, {
  id: 5,
  name: "300 Pound Load",
  image: "crushed_under_pets"
}, {
  id: 6,
  name: "Silver Yeti",
  image: "awwwwww"
}, {
  id: 7,
  name: "Golden Yeti",
  image: "yeti_pants_now"
}, {
  id: 8,
  name: "Palindrophy",
  image: "a_dog_a_plan"
}, {
  id: 9,
  name: "Platinum Skull",
  image: "big_head_todd"
}, {
  id: 10,
  name: "Disgusting Cocktail",
  image: "the_nastiest_cocktail"
}, {
  id: 11,
  name: "The Ghuol Cup",
  image: "ghuolishly_good"
}, {
  id: 12,
  name: "Der Toastdieb",
  image: "you_done_took_my_toast"
}, {
  id: 14,
  name: "Easy Come Easy Go",
  image: "van_went"
}, {
  id: 15,
  name: "Bouquet of Hippies",
  image: "dirt_and_dirty"
}, {
  id: 16,
  name: "Weeping Pizza",
  image: "angst_with_extra_cheese"
}, {
  id: 17,
  name: "Black Hole Terrarium",
  image: "he_aint_heavy_hes_my_familiar"
}, {
  id: 18,
  name: "Failure To Communicate",
  image: "shakin_the_bush_here_boss"
}, {
  id: 19,
  name: "Tiny Plastic Trophy",
  image: "nice_trophy_pablo_honey"
}, {
  id: 20,
  name: "99 Red Balloons",
  image: "in_a_little_toy_shop"
}, {
  id: 21,
  name: "Gadget Inspector",
  image: "go_go_gadget_trophy"
}, {
  id: 22,
  name: "Boss Boss",
  image: "dancing_in_the_dark"
}, {
  id: 23,
  name: "Jack of Several Trades",
  image: "master_of_nuns"
}, {
  id: 24,
  name: "Gourdcore",
  image: "gored_to_the_core"
}, {
  id: 25,
  name: "Let My Bugbears Go!",
  image: "you_damned_dirty_human"
}, {
  id: 26,
  name: "Trivially Skilled",
  image: "look_what_i_can_do"
}, {
  id: 27,
  name: "This Lousy Trophy",
  image: "not_worth_the_wait"
}, {
  id: 28,
  name: "Three-Tiered Trophy",
  image: "no_less_than_three"
}, {
  id: 29,
  name: "Friend of Elves",
  image: "thats_too_friendly_pippin"
}, {
  id: 30,
  name: "Reindeer Hunter",
  image: "run_over_by_grandma"
}, {
  id: 31,
  name: "Brass Bowling Trophy Trophy",
  image: "the_dude_abides"
}, {
  id: 32,
  name: "Look, Ma! No Pants!",
  image: "not_wearing_any_pants"
}, {
  id: 33,
  name: "Slice and Dice",
  image: "with_friends_like_these"
}, {
  id: 34,
  name: "Gender Bender",
  image: "ladies_and_gentlemen"
}, {
  id: 35,
  name: "Golden Meat Stack",
  image: "hood_ornament"
}, {
  id: 36,
  name: "Your Log Saw Something That Night",
  image: "better_than_bad_its_good"
}, {
  id: 37,
  name: "Little Chickadee",
  image: "no_well_ten_beers"
}, {
  id: 38,
  name: "The Three Amigos",
  image: "you_shot_the_invisible_swordsman"
}, {
  id: 39,
  name: "Festive Dismemberment",
  image: "in_deep_end_ents"
}, {
  id: 40,
  name: "Best Meal of My Life",
  image: "also_ate_zarathustra"
}, {
  id: 41,
  name: "Scourge of Seals",
  image: "undercover_clubber"
}, {
  id: 42,
  name: "Tzar of Turtles",
  image: "tortoise_reform"
}, {
  id: 43,
  name: "Potentate of Pasta",
  image: "stop_noodling_around"
}, {
  id: 44,
  name: "Sauciest Saucier",
  image: "lost_in_the_sauce_once_again"
}, {
  id: 45,
  name: "Duke of Disco",
  image: "saturday_night_inferno"
}, {
  id: 46,
  name: "Maestro of Mariachi",
  image: "dance_round_the_room_to_accordion_keys"
}, {
  id: 47,
  name: "The Butler Did It",
  image: "your_mom_knows_the_butler"
}, {
  id: 48,
  name: "Slapstick",
  image: "whoops_whoops_whoops"
}, {
  id: 49,
  name: "Moderation In All Things",
  image: "eliza_knew_best"
}, {
  id: 50,
  name: "The Right Tool For The Job",
  image: "and_a_filthy_job_it_is"
}, {
  id: 51,
  name: "Hothouse Hero",
  image: "gonna_go_fondle_my_sweaters"
}, {
  id: 52,
  name: "Cool Customer",
  image: "like_a_cucumber_on_pluto"
}, {
  id: 53,
  name: "Dreadful, Just Dreadful",
  image: "horror_has_a_new_name"
}, {
  id: 54,
  name: "Malodorous",
  image: "melodious_and_mellifluous"
}, {
  id: 55,
  name: "Wink Wink, Nudge Nudge",
  image: "this_parrot_is_nude"
}, {
  id: 56,
  name: "Crossroads",
  image: "my_shrimps_was_dead_and_gone"
}, {
  id: 57,
  name: "Friend of the Devils",
  image: "jeremiah_was_a_bullfrog"
}, {
  id: 58,
  name: "Bringer of Storms",
  image: "jeff_was_right"
}, {
  id: 59,
  name: "Eerily Skilled",
  image: "howd_you_do_that_man_thats_creepy"
}, {
  id: 60,
  name: "I Love A Parade",
  image: "but_it_doesnt_love_me_back"
}, {
  id: 61,
  name: "Awwww, Yeah",
  image: "dont_worry_your_pretty_little_head"
}, {
  id: 62,
  name: "Phileas Foggy",
  image: "just_like_tara_reid"
}, {
  id: 63,
  name: "Extinctionist",
  image: "you_were_devoutly_aligned"
}, {
  id: 64,
  name: "Dirty Laundry",
  image: "kick_em_when_theyre_up"
}, {
  id: 65,
  name: "Amateur Tour Guide",
  image: "this_boat_sucks"
}, {
  id: 66,
  name: "Professional Tour Guide",
  image: "now_ive_seen_it_all"
}, {
  id: 67,
  name: "Brave Sir Robin",
  image: "in_soviet_russia_minstrels_eat_you"
}, {
  id: 68,
  name: "Desert Wind",
  image: "what_the_hell_are_colitas_anyway"
}, {
  id: 69,
  name: "Two-Tiered Tiny Plastic Trophy",
  image: "just_like_grandmas_dentures"
}, {
  id: 70,
  name: "Master Paster",
  image: "who_runs_bartertown"
}, {
  id: 71,
  name: "Golden Spatula",
  image: "and_thats_all"
}, {
  id: 72,
  name: "Melon Baller, Shot Caller",
  image: "i_hardly_know_her"
}, {
  id: 73,
  name: "BAM!",
  image: "what_do_you_want_on_your_tombstone"
}, {
  id: 74,
  name: "Speakeasy Savant",
  image: "ill_make_a_note_of_it"
}, {
  id: 75,
  name: "Honky Tonk Hero",
  image: "hippy_hippy_shake"
}, {
  id: 76,
  name: "Cantina Commander",
  image: "on_channel_z"
}, {
  id: 77,
  name: "Apprentice Meatsmacker",
  image: "tong_tong_tong_tong_ta_tong_tong"
}, {
  id: 78,
  name: "Journeyman Meatsmacker",
  image: "now_all_you_need_is_a_sickle"
}, {
  id: 79,
  name: "Master Meatsmacker",
  image: "two_tickets_to_anville"
}, {
  id: 80,
  name: "Preciousss",
  image: "hey_vern_its_jewels"
}, {
  id: 81,
  name: "The One That Didn't Get Away",
  image: "visitors_stink_earlier"
}, {
  id: 82,
  name: "Losing Your Marbles",
  image: "garble_varble_zous"
}, {
  id: 83,
  name: "Hunter In Darkness",
  image: "dodecahardon"
}, {
  id: 84,
  name: "Evil's Okay in My Book",
  image: "im_a_little_bit_country"
}, {
  id: 85,
  name: "A Little Help From My Friends",
  image: "oh_i_get_by"
}, {
  id: 86,
  name: "Dancing With the Stars",
  image: "every_which_way_but_footloose"
}, {
  id: 87,
  name: "Every Part of the Seal",
  image: "especially_those_face_scars"
}, {
  id: 88,
  name: "Spaghettihose",
  image: "screw_you_atkins"
}, {
  id: 89,
  name: "Color Wheel of Yuck",
  image: "please_dont_taste_the_rainbow"
}, {
  id: 90,
  name: "Septuple Platinum",
  image: "steal_this_music"
}, {
  id: 91,
  name: "Professional Photographer",
  image: "raggedy_annie_leibovitz"
}, {
  id: 92,
  name: "General Assembler",
  image: "thats_numberwang"
}, {
  id: 93,
  name: "Penultimate Fantasy VII",
  image: "aeris_kills_dumbledore"
}, {
  id: 94,
  name: "The Wrong Place at the Right Time",
  image: "ocd_genocide"
}, {
  id: 95,
  name: "Who Hustles The Hustlers?",
  image: "giant_blue_pool_cue"
}, {
  id: 96,
  name: "A Screw Ain't One",
  image: "in_a_fruit_fight"
}, {
  id: 97,
  name: "Had to Have Caught Them All",
  image: "ocd_i_choose_you"
}, {
  id: 98,
  name: "Buzzkill",
  image: "ow_my_everything"
}, {
  id: 99,
  name: "Elf Barker",
  image: "spay_or_neuter_your_pets"
}, {
  id: 100,
  name: "Mixed Martial Arts",
  image: "sweat_grope_punch_repeat"
}, {
  id: 101,
  name: "Hadouken!",
  image: "tatsumaki_senpuu_kyaku"
}, {
  id: 102,
  name: "Good Will Punching",
  image: "fisting_for_dollars"
}, {
  id: 103,
  name: "Moving Target",
  image: "wal_mart_is_stationary"
}, {
  id: 104,
  name: "Grand Slammer",
  image: "gonna_need_a_bigger_plaque"
}, {
  id: 105,
  name: "And My Axe",
  image: "look_out_death_adder"
}, {
  id: 106,
  name: "Spirited Drinker",
  image: "never_sicker"
}, {
  id: 107,
  name: "Papier Than Thou",
  image: "papier_i_hardly_know_her"
}, {
  id: 108,
  name: "Fantastic Voyager",
  image: "for_your_weiner_am_i_right_ha_ha_ha"
}, {
  id: 109,
  name: "Haggis Haggis Haggis Haggis Haggis",
  image: "haggis_is_as_haggis_does"
}, {
  id: 110,
  name: "Now You've Tasted Everything",
  image: "i_can_taste_the_cosmos"
}, {
  id: 111,
  name: "The Old College Try",
  image: "natures_harmonic"
}, {
  id: 112,
  name: "Great Responsibility",
  image: "time_to_get_a_dog_i_guess"
}, {
  id: 113,
  name: "Three-Tiered Tiny Plastic Trophy",
  image: "little_asian_different"
}, {
  id: 114,
  name: "Cosmic Thing",
  image: "fruity_egocentric_magician"
}, {
  id: 115,
  name: "Right Outfit, Wrong Place",
  image: "more_or_less_right_time"
}, {
  id: 116,
  name: "Dreadful Rainbow",
  image: "taste_the_pain"
}, {
  id: 117,
  name: "Horror Enthusiast",
  image: "ermagerd_berks"
}, {
  id: 118,
  name: "Full Heart",
  image: "clear_eyes_dumb_shirt"
}, {
  id: 119,
  name: "Extended Capacity",
  image: "warranty_sold_separately"
}, {
  id: 120,
  name: "Kissing Maniac",
  image: "bastard_son_thereof"
}, {
  id: 121,
  name: "Cruising For Six Bruisings",
  image: "dont_bleed_it_all_in_one_place"
}, {
  id: 122,
  name: "Eleven Down, None to Go",
  image: "this_is_getting_ridiculous"
}, {
  id: 123,
  name: "Purity of Essence",
  image: "could_you_describe_the_ruckus"
}, {
  id: 124,
  name: "Ansel Adams Jr.",
  image: "who_here_knows_quark_express"
}, {
  id: 125,
  name: "No Particular Reason",
  image: "take_a_chanceacus"
}, {
  id: 126,
  name: "Bronzed Tin Can",
  image: "put_gilded_lilies_in_it"
}, {
  id: 127,
  name: "True Believer",
  image: "wheel_of_space"
}, {
  id: 128,
  name: "EEZY PEEZY",
  image: "pez_porridge_hot"
}, {
  id: 129,
  name: "Very Like a Whale",
  image: "oh_no_not_again"
}, {
  id: 130,
  name: "Gyro Hero",
  image: "hero_dreams_of_gyros"
}, {
  id: 131,
  name: "Alia Iacta Est",
  image: "d_c_cab_squared"
}, {
  id: 132,
  name: "Always Cloaca Cola",
  image: "the_choice_of_an_old_generation"
}, {
  id: 133,
  name: "Thar She Blows!",
  image: "barfily_ever_after"
}, {
  id: 134,
  name: "Partners in Crime",
  image: "criminal_conspiracy"
}, {
  id: 135,
  name: "Party Killer",
  image: "you_ruin_everything"
}, {
  id: 136,
  name: "Master Craftsman",
  image: "the_harder_side_of_sears"
}, {
  id: 137,
  name: "Cool Guy",
  image: "cool_gold_jeff_game_cool"
}, {
  id: 138,
  name: "Option Paralysis",
  image: "shirto_redbetter"
}, {
  id: 139,
  name: "Omni-Cosplay",
  image: "may_the_force_boldy_go_a_wizard"
}, {
  id: 140,
  name: "11 Martini Breakfast",
  image: "she_told_me_to_pick_up_olives"
}, {
  id: 141,
  name: "Golden Pickaxe",
  image: "baloneysaurux_text"
}, {
  id: 142,
  name: "Golden Idol",
  image: "bananarama_crux"
}, {
  id: 143,
  name: "Golden Moustache",
  image: "badonkadonkus_flex"
}, {
  id: 144,
  name: "Golden Burglar",
  image: "banangrama_xer"
}, {
  id: 146,
  name: "Some Assembly Required",
  image: "college_kids_and_divorced_men"
}, {
  id: 147,
  name: "Bucket List",
  image: "anger_management_about_schmidt"
}, {
  id: 148,
  name: "Gotpork Connoisseur",
  image: "this_town_needs_an_enema"
}, {
  id: 149,
  name: "A Gallon of Milk Keeps the Doctor Away",
  image: "this_this_lemonade"
}, {
  id: 150,
  name: "Prime Directive Director",
  image: "ilovewesley"
}, {
  id: 151,
  name: "Tentacle Tickler",
  image: "oh_the_horror"
}, {
  id: 152,
  name: "LOVE, LOVE, LOVE",
  image: "all_you_need_is_it"
}, {
  id: 153,
  name: "Gelatinous Hubris",
  image: "i_had_to_drink_from_the_liquid_cup"
}, {
  id: 154,
  name: "Salads of Many Worlds",
  image: "in_space_noone_can_hear_you_laugh"
}, {
  id: 155,
  name: "Ultimate Cosmic Power",
  image: "eleven_inch_flautist"
}, {
  id: 156,
  name: "Commemorative Replica Blob",
  image: "cross_about_naught"
}, {
  id: 157,
  name: "You Do It To Yourself",
  image: "working_class_republican"
}, {
  id: 158,
  name: "Traditional Crimbo",
  image: "yule_be_happy"
}, {
  id: 159,
  name: "Steak and a Beer, Eh?",
  image: "we_found_a_dead_mouse"
}, {
  id: 160,
  name: "Talking Heads",
  image: "twenty_two_eyes"
}, {
  id: 161,
  name: "Yule Have a Headache Tomorrow",
  image: "cuppa_cuppa_burning_goo"
}, {
  id: 162,
  name: "Dreaming of a Bland Crimbo",
  image: "every_christmas_is_like_sunday"
}, {
  id: 163,
  name: "HIGH SCORE",
  image: "no_religion_too"
}, {
  id: 164,
  name: "Ultimate Tosser",
  image: "skysubmarine"
}, {
  id: 165,
  name: "Zoo Graft-on",
  image: "godricks_got_nothing_on_you"
}], trophies_default = trophies;

// ../greenbox-data/dist/lib/trophies.js
var TrophyStatus;
(function(TrophyStatus2) {
  TrophyStatus2[TrophyStatus2.NONE = 0] = "NONE", TrophyStatus2[TrophyStatus2.HAVE = 1] = "HAVE";
})(TrophyStatus || (TrophyStatus = {}));
function loadTrophies() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, size = JSON.stringify(trophies_default).length;
  return size === lastKnownSize ? null : {
    data: trophies_default,
    size: size
  };
}
var compressTrophies = function(trophies2) {
  return trophies2.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, trophy) {
    return "".concat(r).concat("0".repeat(trophy[0] - r.length - 1)).concat(trophy[1]);
  }, "").replace(/0+$/, "");
};

// ../greenbox-data/dist/lib/types.js
init_kolmafia_polyfill();

// ../greenbox-data/dist/lib/index.js
var VERSION = 2;
function compress(raw) {
  var compressed = {
    meta: compressMeta(raw.meta),
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    miscTattoos: compressTattoos(raw.miscTattoos),
    outfitTattoos: compressTattoos(raw.outfitTattoos),
    paths: compressPaths(raw.paths),
    iotms: compressIotMs(raw.iotms),
    items: compressItems(raw.items)
  }, compressedString = JSON.stringify(compressed);
  return encodeURIComponent(JSONCrush_default.crush(compressedString));
}

// src/greenbox.ts
var import_kolmafia8 = require("kolmafia");

// ../../node_modules/libram/dist/index.js
init_kolmafia_polyfill();

// ../../node_modules/libram/dist/lib.js
init_kolmafia_polyfill();
var import_kolmafia3 = require("kolmafia");

// ../../node_modules/libram/dist/property.js
var property_exports = {};
__export(property_exports, {
  PropertiesManager: function() {
    return PropertiesManager;
  },
  decrement: function() {
    return decrement;
  },
  get: function() {
    return get;
  },
  getBoolean: function() {
    return getBoolean;
  },
  getBounty: function() {
    return getBounty;
  },
  getClass: function() {
    return getClass;
  },
  getCoinmaster: function() {
    return getCoinmaster;
  },
  getCommaSeparated: function() {
    return getCommaSeparated;
  },
  getEffect: function() {
    return getEffect;
  },
  getElement: function() {
    return getElement;
  },
  getFamiliar: function() {
    return getFamiliar;
  },
  getItem: function() {
    return getItem;
  },
  getLocation: function() {
    return getLocation;
  },
  getMonster: function() {
    return getMonster;
  },
  getNumber: function() {
    return getNumber;
  },
  getPhylum: function() {
    return getPhylum;
  },
  getServant: function() {
    return getServant;
  },
  getSkill: function() {
    return getSkill;
  },
  getSlot: function() {
    return getSlot;
  },
  getStat: function() {
    return getStat;
  },
  getString: function() {
    return getString;
  },
  getThrall: function() {
    return getThrall;
  },
  increment: function() {
    return increment;
  },
  set: function() {
    return _set;
  },
  setProperties: function() {
    return setProperties;
  },
  withChoice: function() {
    return withChoice;
  },
  withChoices: function() {
    return withChoices;
  },
  withProperties: function() {
    return withProperties;
  },
  withProperty: function() {
    return withProperty;
  }
});
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");

// ../../node_modules/libram/dist/propertyTyping.js
init_kolmafia_polyfill();

// ../../node_modules/libram/dist/propertyTypes.js
init_kolmafia_polyfill();
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat405", "lastNoncombat406", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"], monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_cookbookbatQuestMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cookbookbatQuestIngredient", "_currentDartboard", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmCurio", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542"], familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];

// ../../node_modules/libram/dist/propertyTyping.js
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}

// ../../node_modules/libram/dist/property.js
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), !0).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray5(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray5(r);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive2(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _slicedToArray4(r, e) {
  return _arrayWithHoles4(r) || _iterableToArrayLimit4(r, e) || _unsupportedIterableToArray5(r, e) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray5(r, a) : void 0;
  }
}
function _arrayLikeToArray5(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit4(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles4(r) {
  if (Array.isArray(r)) return r;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia.getProperty)(property);
    return default_ !== void 0 && value === "" ? default_ : transform(value, property);
  };
}, createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value) {
    if (value === "") return null;
    var v = toType(value);
    return v === Type.none ? null : v;
  });
}, getString = createPropertyGetter(function(value) {
  return value;
}), getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value) {
  return value === "true";
}), getNumber = createPropertyGetter(function(value) {
  return Number(value);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia.Bounty, import_kolmafia.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia.Class, import_kolmafia.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia.Effect, import_kolmafia.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia.Element, import_kolmafia.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia.Familiar, import_kolmafia.toFamiliar), getItem = createMafiaClassPropertyGetter(import_kolmafia.Item, import_kolmafia.toItem), getLocation = createMafiaClassPropertyGetter(import_kolmafia.Location, import_kolmafia.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia.Monster, import_kolmafia.toMonster), getPhylum = createMafiaClassPropertyGetter(import_kolmafia.Phylum, import_kolmafia.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia.Servant, import_kolmafia.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia.Skill, import_kolmafia.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia.Slot, import_kolmafia.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia.Stat, import_kolmafia.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia.Thrall, import_kolmafia.toThrall);
function get(property, _default) {
  var value = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : !1;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else {
    if (isNumericOrStringProperty(property))
      return value.match(/^\d+$/) ? parseInt(value) : value;
    if (isLocationProperty(property))
      return getLocation(property, _default);
    if (isMonsterProperty(property))
      return getMonster(property, _default);
    if (isFamiliarProperty(property))
      return getFamiliar(property, _default);
    if (isStatProperty(property))
      return getStat(property, _default);
    if (isPhylumProperty(property))
      return getPhylum(property, _default);
    if (isStringProperty(property))
      return value === "" && _default !== void 0 ? _default : value;
  }
  return _default instanceof import_kolmafia.Location ? getLocation(property, _default) : _default instanceof import_kolmafia.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia.Stat ? getStat(property, _default) : _default instanceof import_kolmafia.Phylum ? getPhylum(property, _default) : typeof _default == "boolean" ? value === "true" ? !0 : value === "false" ? !1 : _default : typeof _default == "number" ? value === "" ? _default : parseInt(value) : value === "" ? _default === void 0 ? "" : _default : value;
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  return (0, import_kolmafia.setProperty)(property, stringValue), value;
}
function increment(property) {
  var delta = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1 / 0, value = get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.min(max, value + delta);
  return _set(property, nextValue);
}
function decrement(property) {
  var delta = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, min = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1 / 0, value = get(property);
  if (!isNumericProperty(property)) return value;
  var nextValue = Math.max(min, value - delta);
  return _set(property, nextValue);
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray4(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(function(_ref) {
    var _ref2 = _slicedToArray4(_ref, 1), prop = _ref2[0];
    return [prop, get(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
function withProperty(property, value, callback) {
  return withProperties(_defineProperty2({}, property, value), callback);
}
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(function(_ref3) {
    var _ref4 = _slicedToArray4(_ref3, 2), choice = _ref4[0], option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  return withChoices(_defineProperty2({}, choice, value), callback);
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck(this, PropertiesManager2), _defineProperty2(this, "properties", {});
  }
  return _createClass(PropertiesManager2, [{
    key: "storedValues",
    get: function() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray4(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        propertyName in this.properties || (this.properties[propertyName] = (0, import_kolmafia.propertyExists)(propertyName) ? get(propertyName) : PropertiesManager2.EMPTY_PREFERENCE), _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray4(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function(choiceToSet, value) {
      this.setChoices(_defineProperty2({}, choiceToSet, value));
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++)
        properties[_key] = arguments[_key];
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (property in this.properties) {
          var value = this.properties[property];
          value === PropertiesManager2.EMPTY_PREFERENCE ? (0, import_kolmafia.removeProperty)(property) : _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function() {
      this.reset.apply(this, _toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        properties[_key2] = arguments[_key2];
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        this.properties[property] && delete this.properties[property];
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function(property, value) {
      return get(property, 0) < value ? (this.set(_defineProperty2({}, property, value)), !0) : !1;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function(property, value) {
      return get(property, 0) > value ? (this.set(_defineProperty2({}, property, value)), !0) : !1;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function() {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = this.storedValues, newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function(property, min, max) {
      if (max < min) return !1;
      var start = get(property);
      return this.setMinimumValue(property, min), this.setMaximumValue(property, max), start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function(other) {
      var thisProps = Object.entries(this.storedValues), otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray4(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return !1;
      }
      return !0;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function(other) {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties), newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        mergees[_key3] = arguments[_key3];
      return mergees.length === 0 ? new PropertiesManager2() : mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]);
}();
_defineProperty2(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

// ../../node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");

// ../../node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray6(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray6(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray6(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray6(r, a) : void 0;
  }
}
function _arrayLikeToArray6(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function chunk(array, chunkSize) {
  for (var result = [], i = 0; i < array.length; i += chunkSize)
    result.push(array.slice(i, i + chunkSize));
  return result;
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = /* @__PURE__ */ new Map();
  return array.forEach(function(item) {
    map.set(item, (map.get(item) || 0) + 1);
  }), map;
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper2(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
    args[_key2 - 1] = arguments[_key2];
  return typeof delayedObject == "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
function makeByXFunction(source) {
  return function(options, alternateSource) {
    var _options$val, val = undelay(alternateSource != null ? alternateSource : source);
    return "default" in options ? (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default : options[val];
  };
}
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, flatArray = [], _iterator3 = _createForOfIteratorHelper2(arr), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var item = _step3.value;
      if (Array.isArray(item) && depth > 0) {
        var child = flat(item, depth - 1);
        flatArray = flatArray.concat(child);
      } else
        flatArray.push(item);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return flatArray;
}

// ../../node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, handleTypeGetError = function(Type, error) {
  var message = "".concat(error), match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  match ? (0, import_kolmafia2.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red") : (0, import_kolmafia2.print)(message);
}, createSingleConstant = function(Type, converter) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia2.abort)();
  };
  return tagFunction.cls = Type, tagFunction.none = Type.none, tagFunction.get = function(name) {
    var value = converter(name);
    return value === Type.none ? null : value;
  }, tagFunction;
}, createPluralConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "")
      return Type.all();
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia2.abort)();
  };
  return tagFunction.all = function() {
    return Type.all();
  }, tagFunction;
}, $bounty = createSingleConstant(import_kolmafia2.Bounty, import_kolmafia2.toBounty), $bounties = createPluralConstant(import_kolmafia2.Bounty), $class = createSingleConstant(import_kolmafia2.Class, import_kolmafia2.toClass), $classes = createPluralConstant(import_kolmafia2.Class), $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster, import_kolmafia2.toCoinmaster), $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster), $effect = createSingleConstant(import_kolmafia2.Effect, import_kolmafia2.toEffect), $effects = createPluralConstant(import_kolmafia2.Effect), $element = createSingleConstant(import_kolmafia2.Element, import_kolmafia2.toElement), $elements = createPluralConstant(import_kolmafia2.Element), $familiar = createSingleConstant(import_kolmafia2.Familiar, import_kolmafia2.toFamiliar), $familiars = createPluralConstant(import_kolmafia2.Familiar), $item = createSingleConstant(import_kolmafia2.Item, import_kolmafia2.toItem), $items = createPluralConstant(import_kolmafia2.Item), $location = createSingleConstant(import_kolmafia2.Location, import_kolmafia2.toLocation), $locations = createPluralConstant(import_kolmafia2.Location), $modifier = createSingleConstant(import_kolmafia2.Modifier, import_kolmafia2.toModifier), $modifiers = createPluralConstant(import_kolmafia2.Modifier), $monster = createSingleConstant(import_kolmafia2.Monster, import_kolmafia2.toMonster), $monsters = createPluralConstant(import_kolmafia2.Monster), $path = createSingleConstant(import_kolmafia2.Path, import_kolmafia2.toPath), $paths = createPluralConstant(import_kolmafia2.Path), $phylum = createSingleConstant(import_kolmafia2.Phylum, import_kolmafia2.toPhylum), $phyla = createPluralConstant(import_kolmafia2.Phylum), $servant = createSingleConstant(import_kolmafia2.Servant, import_kolmafia2.toServant), $servants = createPluralConstant(import_kolmafia2.Servant), $skill = createSingleConstant(import_kolmafia2.Skill, import_kolmafia2.toSkill), $skills = createPluralConstant(import_kolmafia2.Skill), $slot = createSingleConstant(import_kolmafia2.Slot, import_kolmafia2.toSlot), $slots = createPluralConstant(import_kolmafia2.Slot), $stat = createSingleConstant(import_kolmafia2.Stat, import_kolmafia2.toStat), $stats = createPluralConstant(import_kolmafia2.Stat), $thrall = createSingleConstant(import_kolmafia2.Thrall, import_kolmafia2.toThrall), $thralls = createPluralConstant(import_kolmafia2.Thrall);

// ../../node_modules/libram/dist/lib.js
var _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36;
function _createForOfIteratorHelper3(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray7(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _slicedToArray5(r, e) {
  return _arrayWithHoles5(r) || _iterableToArrayLimit5(r, e) || _unsupportedIterableToArray7(r, e) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray7(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray7(r, a) : void 0;
  }
}
function _arrayLikeToArray7(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit5(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles5(r) {
  if (Array.isArray(r)) return r;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function haveInCampground(item) {
  return Object.keys((0, import_kolmafia3.getCampground)()).map(function(i) {
    return import_kolmafia3.Item.get(i);
  }).includes(item);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
var foldGroupCache = /* @__PURE__ */ new Map();
function getFoldGroup(item) {
  var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (cache) {
    var cached = foldGroupCache.get(item);
    if (cached !== void 0) return cached;
  }
  var result = Object.entries((0, import_kolmafia3.getRelated)(item, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray5(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray5(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray5(_ref5, 1), i = _ref6[0];
    return import_kolmafia3.Item.get(i);
  }), _iterator = _createForOfIteratorHelper3(result), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var fold = _step.value;
      foldGroupCache.set(fold, result);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia3.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia3.myClass)().toString();
});
function extractItems(text) {
  return new Map(Object.entries((0, import_kolmafia3.extractItems)(text)).map(function(_ref15) {
    var _ref16 = _slicedToArray5(_ref15, 2), itemName = _ref16[0], quantity = _ref16[1];
    return [import_kolmafia3.Item.get(itemName), quantity];
  }));
}
function makeScalerCalcFunction(cache, pattern) {
  return function(monster) {
    var _pattern$exec$, _pattern$exec, current = cache.get(monster);
    if (current !== void 0) return (0, import_kolmafia3.monsterEval)(current);
    var result = (_pattern$exec$ = (_pattern$exec = pattern.exec(monster.attributes)) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec[1]) !== null && _pattern$exec$ !== void 0 ? _pattern$exec$ : "0";
    return cache.set(monster, result), (0, import_kolmafia3.monsterEval)(result);
  };
}
var scalerRates = /* @__PURE__ */ new Map(), scalerCaps = /* @__PURE__ */ new Map(), SCALE_RATE_PATTERN = /Scale: (?:\[([^\]]*)\]|(\d*))/, SCALE_CAP_PATTERN = /Cap: (?:\[([^\]]*)\]|(\d*))/, getScalingRate = makeScalerCalcFunction(scalerRates, SCALE_RATE_PATTERN), getScalingCap = makeScalerCalcFunction(scalerCaps, SCALE_CAP_PATTERN);
var makeBulkFunction = function(action) {
  return function(items) {
    (0, import_kolmafia3.batchOpen)();
    var _iterator2 = _createForOfIteratorHelper3(items.entries()), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray5(_step2.value, 2), item = _step2$value[0], quantity = _step2$value[1];
        action(quantity, item);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return (0, import_kolmafia3.batchClose)();
  };
}, bulkAutosell = makeBulkFunction(import_kolmafia3.autosell), bulkPutCloset = makeBulkFunction(import_kolmafia3.putCloset), bulkPutDisplay = makeBulkFunction(import_kolmafia3.putDisplay), bulkPutStash = makeBulkFunction(import_kolmafia3.putStash), bulkTakeCloset = makeBulkFunction(import_kolmafia3.takeCloset), bulkTakeDisplay = makeBulkFunction(import_kolmafia3.takeDisplay), bulkTakeShop = makeBulkFunction(import_kolmafia3.takeShop), bulkTakeStash = makeBulkFunction(import_kolmafia3.takeStash), bulkTakeStorage = makeBulkFunction(import_kolmafia3.takeStorage);
var familiarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "pokefam", "hasshell", "hasstinger"]);

// ../../node_modules/libram/dist/Kmail.js
init_kolmafia_polyfill();
var import_html_entities = __toESM(require_lib(), 1), import_kolmafia5 = require("kolmafia");

// ../../node_modules/libram/dist/url.js
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");
function _toConsumableArray2(r) {
  return _arrayWithoutHoles2(r) || _iterableToArray2(r) || _unsupportedIterableToArray8(r) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray2(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray8(r);
}
function _slicedToArray6(r, e) {
  return _arrayWithHoles6(r) || _iterableToArrayLimit6(r, e) || _unsupportedIterableToArray8(r, e) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit6(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles6(r) {
  if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper4(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray8(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray8(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray8(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray8(r, a) : void 0;
  }
}
function _arrayLikeToArray8(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var EMPTY_VALUE = Symbol("empty");
function fetchUrl(path) {
  var query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _options$method = options.method, method = _options$method === void 0 ? "POST" : _options$method, url = buildUrl(path, query);
  return (0, import_kolmafia4.visitUrl)(url, method === "POST", !0);
}
function buildUrl(path) {
  var query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], urlParams = Array.isArray(query) ? query : Object.entries(query);
  if (urlParams.length === 0)
    return path;
  var chunks = [path], sep = path.includes("?") ? "&" : "?", _iterator = _createForOfIteratorHelper4(urlParams), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var param = _step.value;
      if (param.length !== 2)
        throw new Error("Query parameter array may only contain pair elements");
      var _param = _slicedToArray6(param, 2), key = _param[0], value = _param[1];
      chunks.push(sep), sep = "&", chunks.push(encodeURIComponent(key)), value !== EMPTY_VALUE && (chunks.push("="), chunks.push(encodeURIComponent(value)));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return chunks.join("");
}
function combineQuery() {
  for (var _len = arguments.length, queries = new Array(_len), _key = 0; _key < _len; _key++)
    queries[_key] = arguments[_key];
  if (queries.length === 1)
    return queries[0];
  for (var result = [], _i = 0, _queries = queries; _i < _queries.length; _i++) {
    var query = _queries[_i];
    Array.isArray(query) ? result.push.apply(result, _toConsumableArray2(query)) : result.push.apply(result, _toConsumableArray2(Object.entries(query)));
  }
  return result;
}

// ../../node_modules/libram/dist/Kmail.js
function _createForOfIteratorHelper5(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray9(r)) || e && r && typeof r.length == "number") {
      t && (r = t);
      var _n = 0, F = function() {
      };
      return { s: F, n: function() {
        return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = !0, u = !1;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = !0, o = r2;
  }, f: function() {
    try {
      a || t.return == null || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray3(r) {
  return _arrayWithoutHoles3(r) || _iterableToArray3(r) || _unsupportedIterableToArray9(r) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray3(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles3(r) {
  if (Array.isArray(r)) return _arrayLikeToArray9(r);
}
function _slicedToArray7(r, e) {
  return _arrayWithHoles7(r) || _iterableToArrayLimit7(r, e) || _unsupportedIterableToArray9(r, e) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray9(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray9(r, a) : void 0;
  }
}
function _arrayLikeToArray9(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit7(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles7(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck2(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey3(o.key), o);
  }
}
function _createClass2(e, r, t) {
  return r && _defineProperties2(e.prototype, r), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty3(e, r, t) {
  return (r = _toPropertyKey3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive3(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Kmail = /* @__PURE__ */ function() {
  function Kmail2(rawKmail) {
    _classCallCheck2(this, Kmail2), _defineProperty3(this, "id", void 0), _defineProperty3(this, "date", void 0), _defineProperty3(this, "type", void 0), _defineProperty3(this, "senderId", void 0), _defineProperty3(this, "senderName", void 0), _defineProperty3(this, "rawMessage", void 0), _defineProperty3(this, "_parsedMessageParts", void 0), this.id = Number(rawKmail.id), this.date = new Date(Number(rawKmail.azunixtime) * 1e3), this.type = rawKmail.type, this.senderId = Number(rawKmail.fromid), this.senderName = rawKmail.fromname, this.rawMessage = rawKmail.message;
  }
  return _createClass2(Kmail2, [{
    key: "delete",
    value: function() {
      return Kmail2.delete([this]) === 1;
    }
  }, {
    key: "_messageParts",
    get: function() {
      var _this$_parsedMessageP;
      return (_this$_parsedMessageP = this._parsedMessageParts) !== null && _this$_parsedMessageP !== void 0 ? _this$_parsedMessageP : this._parsedMessageParts = this._parseMessageParts();
    }
  }, {
    key: "_parseMessageParts",
    value: function() {
      var text = this.rawMessage, insideText;
      if (this.type === "normal") {
        if (text.startsWith("<center>")) {
          var endIdx = text.indexOf("</center>");
          text = text.slice(endIdx + 9);
        }
      } else if (this.type === "giftshop") {
        var _text$split = text.split("<p>Inside Note:<p>"), _text$split2 = _slicedToArray7(_text$split, 2);
        text = _text$split2[0], insideText = _text$split2[1];
      }
      var split = function(s) {
        var idx = s.indexOf("<");
        return idx === -1 ? [s] : [s.slice(0, idx), s.slice(idx)];
      }, _split = split(text), _split2 = _slicedToArray7(_split, 2), outsideNote = _split2[0], _split2$ = _split2[1], outsideAttachments = _split2$ === void 0 ? null : _split2$, _ref = insideText !== void 0 ? split(insideText) : [], _ref2 = _slicedToArray7(_ref, 2), _ref2$ = _ref2[0], insideNote = _ref2$ === void 0 ? null : _ref2$, _ref2$2 = _ref2[1], insideAttachments = _ref2$2 === void 0 ? null : _ref2$2;
      return {
        outsideNote: (0, import_html_entities.decode)(outsideNote),
        outsideAttachments: outsideAttachments,
        insideNote: insideNote && (0, import_html_entities.decode)(insideNote),
        insideAttachments: insideAttachments
      };
    }
    /**
     * Get message contents without any HTML from items or meat
     *
     * @returns Cleaned message contents
     */
  }, {
    key: "message",
    get: function() {
      var _this$_messageParts = this._messageParts, outsideNote = _this$_messageParts.outsideNote, insideNote = _this$_messageParts.insideNote;
      return insideNote !== null ? "".concat(outsideNote, "\n\nInside Note:\n").concat(insideNote) : outsideNote;
    }
    /**
     * Get the note on the outside of the gift. If the kmail is not a gift,
     * this will be the entire message.
     *
     * @returns Note on the outside of the gift, or the entire message for non-gifts
     */
  }, {
    key: "outsideNote",
    get: function() {
      return this._messageParts.outsideNote;
    }
    /**
     * Get the note on the inside of the gift
     *
     * @returns Note on the inside of the gift
     */
  }, {
    key: "insideNote",
    get: function() {
      return this._messageParts.insideNote;
    }
    /**
     * Get items attached to the kmail
     *
     * @returns Map of items attached to the kmail and their quantities
     */
  }, {
    key: "items",
    value: function() {
      var _this$_messageParts2 = this._messageParts, outsideAttachments = _this$_messageParts2.outsideAttachments, insideAttachments = _this$_messageParts2.insideAttachments;
      return extractItems("".concat(outsideAttachments).concat(insideAttachments));
    }
    /**
     * Get items attached to the outside of the gift, which should be
     * just the gift wrapper for giftshop items, and all items for normal kmails
     *
     * @returns Map of items attached to the kmail and their quantities
     */
  }, {
    key: "outsideItems",
    value: function() {
      var outsideAttachments = this._messageParts.outsideAttachments;
      return outsideAttachments ? extractItems(outsideAttachments) : /* @__PURE__ */ new Map();
    }
    /**
     * Get items attached to the inside of the gift
     *
     * @returns Map of items attached to the kmail and their quantities
     */
  }, {
    key: "insideItems",
    value: function() {
      var insideAttachments = this._messageParts.insideAttachments;
      return insideAttachments ? extractItems(insideAttachments) : /* @__PURE__ */ new Map();
    }
    /**
     * Get meat attached to the kmail
     *
     * @returns Meat attached to the kmail
     */
  }, {
    key: "meat",
    value: function() {
      var _this$_messageParts3 = this._messageParts, outsideAttachments = _this$_messageParts3.outsideAttachments, insideAttachments = _this$_messageParts3.insideAttachments;
      return !outsideAttachments && !insideAttachments ? 0 : (0, import_kolmafia5.extractMeat)("".concat(outsideAttachments).concat(insideAttachments));
    }
    /**
     * Reply to kmail
     *
     * @param message Message with which to reply
     * @param items Items to send
     * @param meat Meat to send
     * @see Kmail.send
     * @returns True if the kmail was successfully sent
     */
  }, {
    key: "reply",
    value: function() {
      var message = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", items = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], meat = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      return Kmail2.send(this.senderId, message, items, meat);
    }
  }], [{
    key: "parse",
    value: (
      /**
       * Parses a kmail from KoL's native format
       *
       * @param rawKmail Kmail in the format supplies by api.php
       * @returns Parsed kmail
       */
      function(rawKmail) {
        return new Kmail2(rawKmail);
      }
    )
    /**
     * Returns all of the player's kmails
     *
     * @param count Number of kmails to fetch
     * @returns Parsed kmails
     */
  }, {
    key: "inbox",
    value: function() {
      var count = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
      return JSON.parse((0, import_kolmafia5.visitUrl)("api.php?what=kmail&for=libram&count=".concat(count))).map(Kmail2.parse);
    }
    /**
     * Bulk delete kmails
     *
     * @param kmails Kmails to delete
     * @returns Number of kmails deleted
     */
  }, {
    key: "delete",
    value: function(kmails) {
      var _results$match$, _results$match, results = fetchUrl("messages.php", [["the_action", "delete"], ["box", "Inbox"], ["pwd", EMPTY_VALUE]].concat(_toConsumableArray3(kmails.map(function(k) {
        return ["sel".concat(k.id), "on"];
      }))));
      return Number((_results$match$ = (_results$match = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _results$match === void 0 ? void 0 : _results$match[1]) !== null && _results$match$ !== void 0 ? _results$match$ : 0);
    }
  }, {
    key: "_genericSend",
    value: function(to, message, items, meat, chunkSize, constructUrl, successString) {
      var m = meat, sendableItems = _toConsumableArray3(arrayToCountedMap(items).entries()).filter(function(_ref3) {
        var _ref4 = _slicedToArray7(_ref3, 1), item = _ref4[0];
        return (0, import_kolmafia5.isGiftable)(item);
      }), result = !0, chunks = chunk(sendableItems, chunkSize), _iterator = _createForOfIteratorHelper5(chunks.length > 0 ? chunks : [null]), _step;
      try {
        var _loop = function() {
          var _c$length, c = _step.value, itemsQuery = {};
          c !== null && c.forEach(function(_ref5, i) {
            var _ref6 = _slicedToArray7(_ref5, 2), item = _ref6[0], quantity = _ref6[1];
            itemsQuery["whichitem".concat(i + 1)] = item.id, itemsQuery["howmany".concat(i + 1)] = quantity;
          });
          var _constructUrl = constructUrl({
            meat: m,
            chunkSize: (_c$length = c == null ? void 0 : c.length) !== null && _c$length !== void 0 ? _c$length : 0
          }), path = _constructUrl.path, query = _constructUrl.query, r = fetchUrl(path, combineQuery(query, itemsQuery));
          if (r.includes("That player cannot receive Meat or items"))
            return {
              v: Kmail2.gift(to, message, items, meat)
            };
          m = 0, result && (result = r.includes(successString));
        }, _ret;
        for (_iterator.s(); !(_step = _iterator.n()).done; )
          if (_ret = _loop(), _ret) return _ret.v;
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
    /**
     * Sends a kmail to a player
     *
     * Sends multiple kmails if more than 11 unique item types are attached.
     * Ignores any ungiftable items.
     * Sends a gift package to players in run
     *
     * @param to The player name or id to receive the kmail
     * @param message The text contents of the message
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @returns True if the kmail was successfully sent
     */
  }, {
    key: "send",
    value: function(to) {
      var message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", items = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], meat = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      return Kmail2._genericSend(to, message, items, meat, 11, function(_ref7) {
        var meat2 = _ref7.meat;
        return {
          path: "sendmessage.php",
          query: {
            action: "send",
            pwd: EMPTY_VALUE,
            towho: to,
            message: message,
            sendmeat: meat2
          }
        };
      }, ">Message sent.</");
    }
    /**
     * Sends a gift to a player
     *
     * Sends multiple kmails if more than 3 unique item types are attached.
     * Ignores any ungiftable items.
     *
     * @param to The player name or id to receive the gift
     * @param message Message to send
     * @param items The items to be attached
     * @param meat The quantity of meat to be attached
     * @param insideNote The note on the inside of the gift
     * @returns True if the gift was successfully sent
     */
  }, {
    key: "gift",
    value: function(to) {
      var message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", items = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], meat = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, insideNote = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "";
      return Kmail2._genericSend(to, message, items, meat, 3, function(_ref8) {
        var meat2 = _ref8.meat, chunkSize = _ref8.chunkSize;
        return {
          path: "town_sendgift.php",
          query: {
            action: "Yep.",
            pwd: EMPTY_VALUE,
            fromwhere: 0,
            note: message,
            insidenote: insideNote,
            towho: to,
            whichpackage: chunkSize,
            sendmeat: meat2
          }
        };
      }, ">Package sent.</");
    }
  }]);
}();

// src/iotms.ts
init_kolmafia_polyfill();
var import_kolmafia7 = require("kolmafia");

// src/utils.ts
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");
function haveItem(item) {
  return [import_kolmafia6.availableAmount, import_kolmafia6.closetAmount, import_kolmafia6.displayAmount, import_kolmafia6.equippedAmount, import_kolmafia6.itemAmount, import_kolmafia6.storageAmount].map(function(f) {
    return f(item);
  }).some(function(q) {
    return q > 0;
  });
}

// src/iotms.ts
var getBoolean2 = property_exports.getBoolean;
function haveBound(iotm, options) {
  var _options$force;
  if ((_options$force = options.force) !== null && _options$force !== void 0 && _options$force.includes(iotm.id)) return !0;
  var boxed = import_kolmafia7.Item.get(iotm.id);
  switch (iotm.type) {
    case "campground": {
      var bound = iotm.item ? import_kolmafia7.Item.get(iotm.item) : null;
      return bound && (haveItem(bound) || haveInCampground(bound)) || haveInCampground(boxed);
    }
    case "custom": {
      switch (iotm.id) {
        case 5790:
          return haveItem(boxed) || haveItem(import_kolmafia7.Item.get("right bear arm")) && haveItem(import_kolmafia7.Item.get("left bear arm"));
      }
      return !1;
    }
    case "eudora":
      return (0, import_kolmafia7.xpath)((0, import_kolmafia7.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(iotm.eudoraId.toString());
    case "familiar":
      return arrayOf(iotm.familiar).map(function(f) {
        return import_kolmafia7.Familiar.get(f);
      }).some(function(f) {
        return (0, import_kolmafia7.haveFamiliar)(f);
      });
    case "item":
      return flat(arrayOf(iotm.item).map(function(i) {
        return import_kolmafia7.Item.get(i);
      }).map(function(i) {
        var group = getFoldGroup(i);
        return group.length > 0 ? group : i;
      })).some(function(i) {
        return haveItem(i);
      });
    case "preference":
      return getBoolean2(iotm.preference);
    case "skill": {
      var skill = import_kolmafia7.Skill.get(iotm.skill);
      return (0, import_kolmafia7.haveSkill)(skill);
    }
    case "vip":
      return haveItem(import_kolmafia7.Item.get("Clan VIP Lounge Key"));
  }
}
function getIotMStatus(iotm) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (haveBound(iotm, options)) return IotMStatus.BOUND;
  var boxed = import_kolmafia7.Item.get(iotm.id);
  return haveItem(boxed) ? IotMStatus.BOXED : IotMStatus.NONE;
}

// src/greenbox.ts
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), !0).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty4(e, r, t) {
  return (r = _toPropertyKey4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return typeof i == "symbol" ? i : i + "";
}
function _toPrimitive4(t, r) {
  if (typeof t != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var getBoolean3 = property_exports.getBoolean, getNumber2 = property_exports.getNumber;
function checkIotMs() {
  var _loadIotMs$data, _loadIotMs, options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return ((_loadIotMs$data = (_loadIotMs = loadIotMs()) === null || _loadIotMs === void 0 ? void 0 : _loadIotMs.data) !== null && _loadIotMs$data !== void 0 ? _loadIotMs$data : []).map(function(iotm) {
    return [iotm.id, getIotMStatus(iotm, options)];
  });
}
function checkItems() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return specialItems.map(function(id) {
    var _options$force;
    return [id, (_options$force = options.force) !== null && _options$force !== void 0 && _options$force.includes(id) || haveItem(import_kolmafia8.Item.get(id)) ? ItemStatus.HAVE : ItemStatus.NONE];
  });
}
function checkSkills() {
  var permedSkills = (0, import_kolmafia8.getPermedSkills)();
  function getStatus(skill) {
    if ((0, import_kolmafia8.toInt)(skill) === 7254 && getNumber2("skillLevel7254") > 0)
      return SkillStatus.HARDCORE;
    switch (permedSkills[skill.toString()]) {
      case !0:
        return SkillStatus.HARDCORE;
      case !1:
        return SkillStatus.SOFTCORE;
      default:
        return SkillStatus.NONE;
    }
  }
  function getLevel(skill) {
    return getNumber2("skillLevel".concat((0, import_kolmafia8.toInt)(skill)));
  }
  return import_kolmafia8.Skill.all().filter(function(skill) {
    return skill.permable || (0, import_kolmafia8.toInt)(skill) === 7254;
  }).map(function(skill) {
    return [(0, import_kolmafia8.toInt)(skill), getStatus(skill), getLevel(skill)];
  });
}
function getHundredPercentFamiliars() {
  for (var history = (0, import_kolmafia8.visitUrl)("ascensionhistory.php?back=self&who=".concat((0, import_kolmafia8.myId)()), !1) + (0, import_kolmafia8.visitUrl)("ascensionhistory.php?back=self&prens13=1&who=".concat((0, import_kolmafia8.myId)()), !1), set = /* @__PURE__ */ new Set(), pattern = /alt="([^"]*?) \(100%\)/gm, m; (m = pattern.exec(history)) !== null; ) set.add(import_kolmafia8.Familiar.get(m[1]));
  return set;
}
function checkFamiliars() {
  var hundredPercentFamiliars = getHundredPercentFamiliars();
  function getStatus(familiar) {
    return (0, import_kolmafia8.haveFamiliar)(familiar) ? FamiliarStatus.TERRARIUM : familiar.hatchling !== import_kolmafia8.Item.none && haveItem(familiar.hatchling) ? FamiliarStatus.HATCHLING : FamiliarStatus.NONE;
  }
  function getHundredPercent(familiar) {
    return hundredPercentFamiliars.has(familiar);
  }
  return import_kolmafia8.Familiar.all().map(function(familiar) {
    return [(0, import_kolmafia8.toInt)(familiar), getStatus(familiar), getHundredPercent(familiar)];
  });
}
function checkTrophies() {
  var _loadTrophies$data, _loadTrophies, page = (0, import_kolmafia8.visitUrl)("trophies.php");
  function getStatus(trophy) {
    return page.includes('"trophy'.concat(trophy.id, '"')) ? TrophyStatus.HAVE : TrophyStatus.NONE;
  }
  return ((_loadTrophies$data = (_loadTrophies = loadTrophies()) === null || _loadTrophies === void 0 ? void 0 : _loadTrophies.data) !== null && _loadTrophies$data !== void 0 ? _loadTrophies$data : []).map(function(trophy) {
    return [trophy.id, getStatus(trophy)];
  });
}
function haveOutfitPieces(outfit) {
  return (0, import_kolmafia8.outfitPieces)(outfit).every(function(piece) {
    return haveItem(piece);
  });
}
function getTattooStatus(page, tattoo) {
  for (var outfit = isOutfitTattoo(tattoo), images = arrayOf(tattoo.image), i = images.length - 1; i >= 0; i--)
    if (page.includes("/".concat(images[i])))
      return outfit && i === images.length - 1 ? OutfitTattooStatus.HAVE : i + 1;
  return outfit && haveOutfitPieces(tattoo.name) ? OutfitTattooStatus.HAVE_OUTFIT : OutfitTattooStatus.NONE;
}
function checkOutfitTattoos(page) {
  var _loadTattoos$data, _loadTattoos;
  return getOutfitTattoos((_loadTattoos$data = (_loadTattoos = loadTattoos()) === null || _loadTattoos === void 0 ? void 0 : _loadTattoos.data) !== null && _loadTattoos$data !== void 0 ? _loadTattoos$data : []).map(function(tattoo) {
    return [tattoo.outfit, getTattooStatus(page, tattoo)];
  });
}
function checkMiscTattoos(page) {
  var _loadTattoos$data2, _loadTattoos2;
  return getMiscTattoos((_loadTattoos$data2 = (_loadTattoos2 = loadTattoos()) === null || _loadTattoos2 === void 0 ? void 0 : _loadTattoos2.data) !== null && _loadTattoos$data2 !== void 0 ? _loadTattoos$data2 : []).map(function(tattoo) {
    return [tattoo.misc, getTattooStatus(page, tattoo)];
  });
}
function checkTattoos(tattoos2) {
  return {
    miscTattoos: checkMiscTattoos(tattoos2),
    outfitTattoos: checkOutfitTattoos(tattoos2)
  };
}
function getPathLevel(path) {
  return path.points === null ? 0 : Math.min((Array.isArray(path.points) ? path.points : [path.points]).map(function(k) {
    return getNumber2(k);
  }).reduce(function(sum, v) {
    return sum + v;
  }, 0), path.maxPoints);
}
function checkPaths(tattoos2) {
  var _loadPaths$data, _loadPaths, getTattooLevelForPage = function(t) {
    return getTattooStatus(tattoos2, t);
  };
  return ((_loadPaths$data = (_loadPaths = loadPaths()) === null || _loadPaths === void 0 ? void 0 : _loadPaths.data) !== null && _loadPaths$data !== void 0 ? _loadPaths$data : []).map(function(path) {
    var level = getPathLevel(path), items = path.items.map(function(i) {
      return haveItem(import_kolmafia8.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    }), equipment = path.equipment.map(function(i) {
      return haveItem(import_kolmafia8.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    }), tats = path.tattoos.map(getTattooLevelForPage);
    return [path.id, level, items, equipment, tats];
  });
}
function checkMeta() {
  return {
    name: (0, import_kolmafia8.myName)(),
    id: (0, import_kolmafia8.myId)(),
    timestamp: (/* @__PURE__ */ new Date()).getTime(),
    revision: (0, import_kolmafia8.getRevision)(),
    version: VERSION
  };
}
var hasFlag = function(args) {
  for (var _len = arguments.length, flags = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    flags[_key - 1] = arguments[_key];
  return flags.some(function(f) {
    return args.includes(f);
  });
};
function main() {
  var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (hasFlag(args, "--help", "-h")) {
    (0, import_kolmafia8.printHtml)("\n      Usage:\n      <table border=0>\n      <tr><td>greenbox [...options]</td></tr>\n      </table>\n      Options:\n      <table border=0>\n      <tr><td>--help -h</td><td>See this message</td></tr>\n      <tr><td>--wipe -w</td><td>Wipe your public profile</td></tr>\n      <tr><td>--private -w</td><td>Generate a link without updating your public profile</td></tr>\n      </table>\n    ");
    return;
  }
  if (hasFlag(args, "--wipe", "-w")) {
    Kmail.send(3501234, "GREENBOX:WIPE"), (0, import_kolmafia8.printHtml)("Your request to wipe your public profile has been sent, you'll receive a Kmail confirming success soon!");
    return;
  }
  var keepPrivate = hasFlag(args, "--private", "-p");
  if ((0, import_kolmafia8.printHtml)("Deciding your fate..."), (0, import_kolmafia8.inMultiFight)() || (0, import_kolmafia8.handlingChoice)() || (0, import_kolmafia8.currentRound)() !== 0) {
    (0, import_kolmafia8.printHtml)("<b><font color=red>You are in a combat or a choice adventure so your greenboxes will fail. Exiting...</font></b>");
    return;
  }
  getBoolean3("kingLiberated") || (0, import_kolmafia8.printHtml)("<b><font color=red>You are still in run so your greenboxes will probably be wrong</font></b>");
  var tattoos2 = (0, import_kolmafia8.visitUrl)("account_tattoos.php"), code = compress(_objectSpread3(_objectSpread3({
    meta: checkMeta(),
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies()
  }, checkTattoos(tattoos2)), {}, {
    paths: checkPaths(tattoos2),
    iotms: checkIotMs(),
    items: checkItems()
  })), link = "https://greenbox.loathers.net/?".concat(keepPrivate ? "d=".concat(code) : "u=".concat((0, import_kolmafia8.myId)()));
  keepPrivate || Kmail.send(3501234, "GREENBOX:".concat(code)), (0, import_kolmafia8.printHtml)('All done! To see your greenboxes, visit: <a href="'.concat(link, '">').concat(link, "</a>"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkTattoos,
  getTattooStatus,
  main
});
