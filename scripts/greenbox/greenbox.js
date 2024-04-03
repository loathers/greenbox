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
var __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys2 = __getOwnPropNames(from), i = 0, n = keys2.length, key; i < n; i++)
      key = keys2[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
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
};

// kolmafia-polyfill.js
var kolmafia, console, global, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    }, global = {
      encodeURI: encodeURI,
      decodeURI: decodeURI,
      encodeURIComponent: encodeURIComponent,
      decodeURIComponent: decodeURIComponent
    };
  }
});

// ../../node_modules/chevrotain/lib/src/version.js
var require_version = __commonJS({
  "../../node_modules/chevrotain/lib/src/version.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.VERSION = "6.5.0";
  }
});

// ../../node_modules/chevrotain/lib/src/utils/utils.js
var require_utils = __commonJS({
  "../../node_modules/chevrotain/lib/src/utils/utils.js": function(exports, module) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    function isEmpty(arr) {
      return arr && arr.length === 0;
    }
    exports.isEmpty = isEmpty;
    function keys(obj) {
      return obj == null ? [] : Object.keys(obj);
    }
    exports.keys = keys;
    function values(obj) {
      for (var vals = [], keys2 = Object.keys(obj), i = 0; i < keys2.length; i++)
        vals.push(obj[keys2[i]]);
      return vals;
    }
    exports.values = values;
    function mapValues(obj, callback) {
      for (var result = [], objKeys = keys(obj), idx = 0; idx < objKeys.length; idx++) {
        var currKey = objKeys[idx];
        result.push(callback.call(null, obj[currKey], currKey));
      }
      return result;
    }
    exports.mapValues = mapValues;
    function map(arr, callback) {
      for (var result = [], idx = 0; idx < arr.length; idx++)
        result.push(callback.call(null, arr[idx], idx));
      return result;
    }
    exports.map = map;
    function flatten(arr) {
      for (var result = [], idx = 0; idx < arr.length; idx++) {
        var currItem = arr[idx];
        Array.isArray(currItem) ? result = result.concat(flatten(currItem)) : result.push(currItem);
      }
      return result;
    }
    exports.flatten = flatten;
    function first(arr) {
      return isEmpty(arr) ? void 0 : arr[0];
    }
    exports.first = first;
    function last(arr) {
      var len = arr && arr.length;
      return len ? arr[len - 1] : void 0;
    }
    exports.last = last;
    function forEach(collection, iteratorCallback) {
      if (Array.isArray(collection))
        for (var i = 0; i < collection.length; i++)
          iteratorCallback.call(null, collection[i], i);
      else if (isObject(collection))
        for (var colKeys = keys(collection), i = 0; i < colKeys.length; i++) {
          var key = colKeys[i], value = collection[key];
          iteratorCallback.call(null, value, key);
        }
      else
        throw Error("non exhaustive match");
    }
    exports.forEach = forEach;
    function isString(item) {
      return typeof item == "string";
    }
    exports.isString = isString;
    function isUndefined(item) {
      return item === void 0;
    }
    exports.isUndefined = isUndefined;
    function isFunction(item) {
      return item instanceof Function;
    }
    exports.isFunction = isFunction;
    function drop(arr, howMuch) {
      return howMuch === void 0 && (howMuch = 1), arr.slice(howMuch, arr.length);
    }
    exports.drop = drop;
    function dropRight(arr, howMuch) {
      return howMuch === void 0 && (howMuch = 1), arr.slice(0, arr.length - howMuch);
    }
    exports.dropRight = dropRight;
    function filter(arr, predicate) {
      var result = [];
      if (Array.isArray(arr))
        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          predicate.call(null, item) && result.push(item);
        }
      return result;
    }
    exports.filter = filter;
    function reject(arr, predicate) {
      return filter(arr, function(item) {
        return !predicate(item);
      });
    }
    exports.reject = reject;
    function pick(obj, predicate) {
      for (var keys2 = Object.keys(obj), result = {}, i = 0; i < keys2.length; i++) {
        var currKey = keys2[i], currItem = obj[currKey];
        predicate(currItem) && (result[currKey] = currItem);
      }
      return result;
    }
    exports.pick = pick;
    function has(obj, prop) {
      return isObject(obj) ? obj.hasOwnProperty(prop) : !1;
    }
    exports.has = has;
    function contains(arr, item) {
      return find(arr, function(currItem) {
        return currItem === item;
      }) !== void 0;
    }
    exports.contains = contains;
    function cloneArr(arr) {
      for (var newArr = [], i = 0; i < arr.length; i++)
        newArr.push(arr[i]);
      return newArr;
    }
    exports.cloneArr = cloneArr;
    function cloneObj(obj) {
      var clonedObj = {};
      for (var key in obj)
        Object.prototype.hasOwnProperty.call(obj, key) && (clonedObj[key] = obj[key]);
      return clonedObj;
    }
    exports.cloneObj = cloneObj;
    function find(arr, predicate) {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (predicate.call(null, item))
          return item;
      }
    }
    exports.find = find;
    function findAll(arr, predicate) {
      for (var found = [], i = 0; i < arr.length; i++) {
        var item = arr[i];
        predicate.call(null, item) && found.push(item);
      }
      return found;
    }
    exports.findAll = findAll;
    function reduce(arrOrObj, iterator, initial) {
      for (var isArr = Array.isArray(arrOrObj), vals = isArr ? arrOrObj : values(arrOrObj), objKeys = isArr ? [] : keys(arrOrObj), accumulator = initial, i = 0; i < vals.length; i++)
        accumulator = iterator.call(null, accumulator, vals[i], isArr ? i : objKeys[i]);
      return accumulator;
    }
    exports.reduce = reduce;
    function compact(arr) {
      return reject(arr, function(item) {
        return item == null;
      });
    }
    exports.compact = compact;
    function uniq(arr, identity) {
      identity === void 0 && (identity = function(item) {
        return item;
      });
      var identities = [];
      return reduce(arr, function(result, currItem) {
        var currIdentity = identity(currItem);
        return contains(identities, currIdentity) ? result : (identities.push(currIdentity), result.concat(currItem));
      }, []);
    }
    exports.uniq = uniq;
    function partial(func) {
      for (var restArgs = [], _i = 1; _i < arguments.length; _i++)
        restArgs[_i - 1] = arguments[_i];
      var firstArg = [null], allArgs = firstArg.concat(restArgs);
      return Function.bind.apply(func, allArgs);
    }
    exports.partial = partial;
    function isArray(obj) {
      return Array.isArray(obj);
    }
    exports.isArray = isArray;
    function isRegExp(obj) {
      return obj instanceof RegExp;
    }
    exports.isRegExp = isRegExp;
    function isObject(obj) {
      return obj instanceof Object;
    }
    exports.isObject = isObject;
    function every(arr, predicate) {
      for (var i = 0; i < arr.length; i++)
        if (!predicate(arr[i], i))
          return !1;
      return !0;
    }
    exports.every = every;
    function difference(arr, values2) {
      return reject(arr, function(item) {
        return contains(values2, item);
      });
    }
    exports.difference = difference;
    function some(arr, predicate) {
      for (var i = 0; i < arr.length; i++)
        if (predicate(arr[i]))
          return !0;
      return !1;
    }
    exports.some = some;
    function indexOf(arr, value) {
      for (var i = 0; i < arr.length; i++)
        if (arr[i] === value)
          return i;
      return -1;
    }
    exports.indexOf = indexOf;
    function sortBy(arr, orderFunc) {
      var result = cloneArr(arr);
      return result.sort(function(a, b) {
        return orderFunc(a) - orderFunc(b);
      }), result;
    }
    exports.sortBy = sortBy;
    function zipObject(keys2, values2) {
      if (keys2.length !== values2.length)
        throw Error("can't zipObject with different number of keys and values!");
      for (var result = {}, i = 0; i < keys2.length; i++)
        result[keys2[i]] = values2[i];
      return result;
    }
    exports.zipObject = zipObject;
    function assign(target) {
      for (var sources = [], _i = 1; _i < arguments.length; _i++)
        sources[_i - 1] = arguments[_i];
      for (var i = 0; i < sources.length; i++)
        for (var curSource = sources[i], currSourceKeys = keys(curSource), j = 0; j < currSourceKeys.length; j++) {
          var currKey = currSourceKeys[j];
          target[currKey] = curSource[currKey];
        }
      return target;
    }
    exports.assign = assign;
    function assignNoOverwrite(target) {
      for (var sources = [], _i = 1; _i < arguments.length; _i++)
        sources[_i - 1] = arguments[_i];
      for (var i = 0; i < sources.length; i++) {
        var curSource = sources[i];
        if (!isUndefined(curSource))
          for (var currSourceKeys = keys(curSource), j = 0; j < currSourceKeys.length; j++) {
            var currKey = currSourceKeys[j];
            has(target, currKey) || (target[currKey] = curSource[currKey]);
          }
      }
      return target;
    }
    exports.assignNoOverwrite = assignNoOverwrite;
    function defaults() {
      for (var sources = [], _i = 0; _i < arguments.length; _i++)
        sources[_i] = arguments[_i];
      return assignNoOverwrite.apply(null, [{}].concat(sources));
    }
    exports.defaults = defaults;
    function groupBy(arr, groupKeyFunc) {
      var result = {};
      return forEach(arr, function(item) {
        var currGroupKey = groupKeyFunc(item), currGroupArr = result[currGroupKey];
        currGroupArr ? currGroupArr.push(item) : result[currGroupKey] = [item];
      }), result;
    }
    exports.groupBy = groupBy;
    function merge(obj1, obj2) {
      for (var result = cloneObj(obj1), keys2 = keys(obj2), i = 0; i < keys2.length; i++) {
        var key = keys2[i], value = obj2[key];
        result[key] = value;
      }
      return result;
    }
    exports.merge = merge;
    function NOOP() {
    }
    exports.NOOP = NOOP;
    function IDENTITY(item) {
      return item;
    }
    exports.IDENTITY = IDENTITY;
    function packArray(holeyArr) {
      for (var result = [], i = 0; i < holeyArr.length; i++) {
        var orgValue = holeyArr[i];
        result.push(orgValue !== void 0 ? orgValue : void 0);
      }
      return result;
    }
    exports.packArray = packArray;
    function PRINT_ERROR(msg) {
      console && console.error && console.error("Error: " + msg);
    }
    exports.PRINT_ERROR = PRINT_ERROR;
    function PRINT_WARNING(msg) {
      console && console.warn && console.warn("Warning: " + msg);
    }
    exports.PRINT_WARNING = PRINT_WARNING;
    function isES2015MapSupported() {
      return typeof Map == "function";
    }
    exports.isES2015MapSupported = isES2015MapSupported;
    function applyMixins(derivedCtor, baseCtors) {
      baseCtors.forEach(function(baseCtor) {
        var baseProto = baseCtor.prototype;
        Object.getOwnPropertyNames(baseProto).forEach(function(propName) {
          if (propName !== "constructor") {
            var basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
            basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set) ? Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor) : derivedCtor.prototype[propName] = baseCtor.prototype[propName];
          }
        });
      });
    }
    exports.applyMixins = applyMixins;
    function toFastProperties(toBecomeFast) {
      function FakeConstructor() {
      }
      FakeConstructor.prototype = toBecomeFast;
      var fakeInstance = new FakeConstructor();
      function fakeAccess() {
        return typeof fakeInstance.bar;
      }
      return fakeAccess(), fakeAccess(), toBecomeFast;
      eval(toBecomeFast);
    }
    exports.toFastProperties = toFastProperties;
    function peek(arr) {
      return arr[arr.length - 1];
    }
    exports.peek = peek;
    function timer(func) {
      var start = (/* @__PURE__ */ new Date()).getTime(), val = func(), end = (/* @__PURE__ */ new Date()).getTime(), total = end - start;
      return {
        time: total,
        value: val
      };
    }
    exports.timer = timer;
  }
});

// ../../node_modules/regexp-to-ast/lib/regexp-to-ast.js
var require_regexp_to_ast = __commonJS({
  "../../node_modules/regexp-to-ast/lib/regexp-to-ast.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    (function(root, factory) {
      typeof define == "function" && define.amd ? define([], factory) : typeof module2 == "object" && module2.exports ? module2.exports = factory() : root.regexpToAst = factory();
    })(typeof self < "u" ? (
      // istanbul ignore next
      self
    ) : exports2, function() {
      function RegExpParser() {
      }
      RegExpParser.prototype.saveState = function() {
        return {
          idx: this.idx,
          input: this.input,
          groupIdx: this.groupIdx
        };
      }, RegExpParser.prototype.restoreState = function(newState) {
        this.idx = newState.idx, this.input = newState.input, this.groupIdx = newState.groupIdx;
      }, RegExpParser.prototype.pattern = function(input) {
        this.idx = 0, this.input = input, this.groupIdx = 0, this.consumeChar("/");
        var value = this.disjunction();
        this.consumeChar("/");
        for (var flags = {
          type: "Flags",
          global: !1,
          ignoreCase: !1,
          multiLine: !1,
          unicode: !1,
          sticky: !1
        }; this.isRegExpFlag(); )
          switch (this.popChar()) {
            case "g":
              addFlag(flags, "global");
              break;
            case "i":
              addFlag(flags, "ignoreCase");
              break;
            case "m":
              addFlag(flags, "multiLine");
              break;
            case "u":
              addFlag(flags, "unicode");
              break;
            case "y":
              addFlag(flags, "sticky");
              break;
          }
        if (this.idx !== this.input.length)
          throw Error("Redundant input: " + this.input.substring(this.idx));
        return {
          type: "Pattern",
          flags: flags,
          value: value
        };
      }, RegExpParser.prototype.disjunction = function() {
        var alts = [];
        for (alts.push(this.alternative()); this.peekChar() === "|"; )
          this.consumeChar("|"), alts.push(this.alternative());
        return {
          type: "Disjunction",
          value: alts
        };
      }, RegExpParser.prototype.alternative = function() {
        for (var terms = []; this.isTerm(); )
          terms.push(this.term());
        return {
          type: "Alternative",
          value: terms
        };
      }, RegExpParser.prototype.term = function() {
        return this.isAssertion() ? this.assertion() : this.atom();
      }, RegExpParser.prototype.assertion = function() {
        switch (this.popChar()) {
          case "^":
            return {
              type: "StartAnchor"
            };
          case "$":
            return {
              type: "EndAnchor"
            };
          case "\\":
            switch (this.popChar()) {
              case "b":
                return {
                  type: "WordBoundary"
                };
              case "B":
                return {
                  type: "NonWordBoundary"
                };
            }
            throw Error("Invalid Assertion Escape");
          case "(":
            this.consumeChar("?");
            var type;
            switch (this.popChar()) {
              case "=":
                type = "Lookahead";
                break;
              case "!":
                type = "NegativeLookahead";
                break;
            }
            ASSERT_EXISTS(type);
            var disjunction = this.disjunction();
            return this.consumeChar(")"), {
              type: type,
              value: disjunction
            };
        }
        ASSERT_NEVER_REACH_HERE();
      }, RegExpParser.prototype.quantifier = function(isBacktracking) {
        var range;
        switch (this.popChar()) {
          case "*":
            range = {
              atLeast: 0,
              atMost: 1 / 0
            };
            break;
          case "+":
            range = {
              atLeast: 1,
              atMost: 1 / 0
            };
            break;
          case "?":
            range = {
              atLeast: 0,
              atMost: 1
            };
            break;
          case "{":
            var atLeast = this.integerIncludingZero();
            switch (this.popChar()) {
              case "}":
                range = {
                  atLeast: atLeast,
                  atMost: atLeast
                };
                break;
              case ",":
                var atMost;
                this.isDigit() ? (atMost = this.integerIncludingZero(), range = {
                  atLeast: atLeast,
                  atMost: atMost
                }) : range = {
                  atLeast: atLeast,
                  atMost: 1 / 0
                }, this.consumeChar("}");
                break;
            }
            if (isBacktracking === !0 && range === void 0)
              return;
            ASSERT_EXISTS(range);
            break;
        }
        if (!(isBacktracking === !0 && range === void 0))
          return ASSERT_EXISTS(range), this.peekChar(0) === "?" ? (this.consumeChar("?"), range.greedy = !1) : range.greedy = !0, range.type = "Quantifier", range;
      }, RegExpParser.prototype.atom = function() {
        var atom;
        switch (this.peekChar()) {
          case ".":
            atom = this.dotAll();
            break;
          case "\\":
            atom = this.atomEscape();
            break;
          case "[":
            atom = this.characterClass();
            break;
          case "(":
            atom = this.group();
            break;
        }
        return atom === void 0 && this.isPatternCharacter() && (atom = this.patternCharacter()), ASSERT_EXISTS(atom), this.isQuantifier() && (atom.quantifier = this.quantifier()), atom;
      }, RegExpParser.prototype.dotAll = function() {
        return this.consumeChar("."), {
          type: "Set",
          complement: !0,
          value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
        };
      }, RegExpParser.prototype.atomEscape = function() {
        switch (this.consumeChar("\\"), this.peekChar()) {
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            return this.decimalEscapeAtom();
          case "d":
          case "D":
          case "s":
          case "S":
          case "w":
          case "W":
            return this.characterClassEscape();
          case "f":
          case "n":
          case "r":
          case "t":
          case "v":
            return this.controlEscapeAtom();
          case "c":
            return this.controlLetterEscapeAtom();
          case "0":
            return this.nulCharacterAtom();
          case "x":
            return this.hexEscapeSequenceAtom();
          case "u":
            return this.regExpUnicodeEscapeSequenceAtom();
          default:
            return this.identityEscapeAtom();
        }
      }, RegExpParser.prototype.decimalEscapeAtom = function() {
        var value = this.positiveInteger();
        return {
          type: "GroupBackReference",
          value: value
        };
      }, RegExpParser.prototype.characterClassEscape = function() {
        var set, complement = !1;
        switch (this.popChar()) {
          case "d":
            set = digitsCharCodes;
            break;
          case "D":
            set = digitsCharCodes, complement = !0;
            break;
          case "s":
            set = whitespaceCodes;
            break;
          case "S":
            set = whitespaceCodes, complement = !0;
            break;
          case "w":
            set = wordCharCodes;
            break;
          case "W":
            set = wordCharCodes, complement = !0;
            break;
        }
        return ASSERT_EXISTS(set), {
          type: "Set",
          value: set,
          complement: complement
        };
      }, RegExpParser.prototype.controlEscapeAtom = function() {
        var escapeCode;
        switch (this.popChar()) {
          case "f":
            escapeCode = cc("\f");
            break;
          case "n":
            escapeCode = cc("\n");
            break;
          case "r":
            escapeCode = cc("\r");
            break;
          case "t":
            escapeCode = cc("	");
            break;
          case "v":
            escapeCode = cc("\v");
            break;
        }
        return ASSERT_EXISTS(escapeCode), {
          type: "Character",
          value: escapeCode
        };
      }, RegExpParser.prototype.controlLetterEscapeAtom = function() {
        this.consumeChar("c");
        var letter = this.popChar();
        if (/[a-zA-Z]/.test(letter) === !1)
          throw Error("Invalid ");
        var letterCode = letter.toUpperCase().charCodeAt(0) - 64;
        return {
          type: "Character",
          value: letterCode
        };
      }, RegExpParser.prototype.nulCharacterAtom = function() {
        return this.consumeChar("0"), {
          type: "Character",
          value: cc("\0")
        };
      }, RegExpParser.prototype.hexEscapeSequenceAtom = function() {
        return this.consumeChar("x"), this.parseHexDigits(2);
      }, RegExpParser.prototype.regExpUnicodeEscapeSequenceAtom = function() {
        return this.consumeChar("u"), this.parseHexDigits(4);
      }, RegExpParser.prototype.identityEscapeAtom = function() {
        var escapedChar = this.popChar();
        return {
          type: "Character",
          value: cc(escapedChar)
        };
      }, RegExpParser.prototype.classPatternCharacterAtom = function() {
        switch (this.peekChar()) {
          case "\n":
          case "\r":
          case "\u2028":
          case "\u2029":
          case "\\":
          case "]":
            throw Error("TBD");
          default:
            var nextChar = this.popChar();
            return {
              type: "Character",
              value: cc(nextChar)
            };
        }
      }, RegExpParser.prototype.characterClass = function() {
        var set = [], complement = !1;
        for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), complement = !0); this.isClassAtom(); ) {
          var from = this.classAtom(), isFromSingleChar = from.type === "Character";
          if (isFromSingleChar && this.isRangeDash()) {
            this.consumeChar("-");
            var to = this.classAtom(), isToSingleChar = to.type === "Character";
            if (isToSingleChar) {
              if (to.value < from.value)
                throw Error("Range out of order in character class");
              set.push({
                from: from.value,
                to: to.value
              });
            } else
              insertToSet(from.value, set), set.push(cc("-")), insertToSet(to.value, set);
          } else
            insertToSet(from.value, set);
        }
        return this.consumeChar("]"), {
          type: "Set",
          complement: complement,
          value: set
        };
      }, RegExpParser.prototype.classAtom = function() {
        switch (this.peekChar()) {
          case "]":
          case "\n":
          case "\r":
          case "\u2028":
          case "\u2029":
            throw Error("TBD");
          case "\\":
            return this.classEscape();
          default:
            return this.classPatternCharacterAtom();
        }
      }, RegExpParser.prototype.classEscape = function() {
        switch (this.consumeChar("\\"), this.peekChar()) {
          case "b":
            return this.consumeChar("b"), {
              type: "Character",
              value: cc("\b")
            };
          case "d":
          case "D":
          case "s":
          case "S":
          case "w":
          case "W":
            return this.characterClassEscape();
          case "f":
          case "n":
          case "r":
          case "t":
          case "v":
            return this.controlEscapeAtom();
          case "c":
            return this.controlLetterEscapeAtom();
          case "0":
            return this.nulCharacterAtom();
          case "x":
            return this.hexEscapeSequenceAtom();
          case "u":
            return this.regExpUnicodeEscapeSequenceAtom();
          default:
            return this.identityEscapeAtom();
        }
      }, RegExpParser.prototype.group = function() {
        var capturing = !0;
        switch (this.consumeChar("("), this.peekChar(0)) {
          case "?":
            this.consumeChar("?"), this.consumeChar(":"), capturing = !1;
            break;
          default:
            this.groupIdx++;
            break;
        }
        var value = this.disjunction();
        this.consumeChar(")");
        var groupAst = {
          type: "Group",
          capturing: capturing,
          value: value
        };
        return capturing && (groupAst.idx = this.groupIdx), groupAst;
      }, RegExpParser.prototype.positiveInteger = function() {
        var number = this.popChar();
        if (decimalPatternNoZero.test(number) === !1)
          throw Error("Expecting a positive integer");
        for (; decimalPattern.test(this.peekChar(0)); )
          number += this.popChar();
        return parseInt(number, 10);
      }, RegExpParser.prototype.integerIncludingZero = function() {
        var number = this.popChar();
        if (decimalPattern.test(number) === !1)
          throw Error("Expecting an integer");
        for (; decimalPattern.test(this.peekChar(0)); )
          number += this.popChar();
        return parseInt(number, 10);
      }, RegExpParser.prototype.patternCharacter = function() {
        var nextChar = this.popChar();
        switch (nextChar) {
          case "\n":
          case "\r":
          case "\u2028":
          case "\u2029":
          case "^":
          case "$":
          case "\\":
          case ".":
          case "*":
          case "+":
          case "?":
          case "(":
          case ")":
          case "[":
          case "|":
            throw Error("TBD");
          default:
            return {
              type: "Character",
              value: cc(nextChar)
            };
        }
      }, RegExpParser.prototype.isRegExpFlag = function() {
        switch (this.peekChar(0)) {
          case "g":
          case "i":
          case "m":
          case "u":
          case "y":
            return !0;
          default:
            return !1;
        }
      }, RegExpParser.prototype.isRangeDash = function() {
        return this.peekChar() === "-" && this.isClassAtom(1);
      }, RegExpParser.prototype.isDigit = function() {
        return decimalPattern.test(this.peekChar(0));
      }, RegExpParser.prototype.isClassAtom = function(howMuch) {
        switch (howMuch === void 0 && (howMuch = 0), this.peekChar(howMuch)) {
          case "]":
          case "\n":
          case "\r":
          case "\u2028":
          case "\u2029":
            return !1;
          default:
            return !0;
        }
      }, RegExpParser.prototype.isTerm = function() {
        return this.isAtom() || this.isAssertion();
      }, RegExpParser.prototype.isAtom = function() {
        if (this.isPatternCharacter())
          return !0;
        switch (this.peekChar(0)) {
          case ".":
          case "\\":
          case "[":
          case "(":
            return !0;
          default:
            return !1;
        }
      }, RegExpParser.prototype.isAssertion = function() {
        switch (this.peekChar(0)) {
          case "^":
          case "$":
            return !0;
          case "\\":
            switch (this.peekChar(1)) {
              case "b":
              case "B":
                return !0;
              default:
                return !1;
            }
          case "(":
            return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
          default:
            return !1;
        }
      }, RegExpParser.prototype.isQuantifier = function() {
        var prevState = this.saveState();
        try {
          return this.quantifier(!0) !== void 0;
        } catch (e) {
          return !1;
        } finally {
          this.restoreState(prevState);
        }
      }, RegExpParser.prototype.isPatternCharacter = function() {
        switch (this.peekChar()) {
          case "^":
          case "$":
          case "\\":
          case ".":
          case "*":
          case "+":
          case "?":
          case "(":
          case ")":
          case "[":
          case "|":
          case "/":
          case "\n":
          case "\r":
          case "\u2028":
          case "\u2029":
            return !1;
          default:
            return !0;
        }
      }, RegExpParser.prototype.parseHexDigits = function(howMany) {
        for (var hexString = "", i2 = 0; i2 < howMany; i2++) {
          var hexChar = this.popChar();
          if (hexDigitPattern.test(hexChar) === !1)
            throw Error("Expecting a HexDecimal digits");
          hexString += hexChar;
        }
        var charCode = parseInt(hexString, 16);
        return {
          type: "Character",
          value: charCode
        };
      }, RegExpParser.prototype.peekChar = function(howMuch) {
        return howMuch === void 0 && (howMuch = 0), this.input[this.idx + howMuch];
      }, RegExpParser.prototype.popChar = function() {
        var nextChar = this.peekChar(0);
        return this.consumeChar(), nextChar;
      }, RegExpParser.prototype.consumeChar = function(char) {
        if (char !== void 0 && this.input[this.idx] !== char)
          throw Error("Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
        if (this.idx >= this.input.length)
          throw Error("Unexpected end of input");
        this.idx++;
      };
      var hexDigitPattern = /[0-9a-fA-F]/, decimalPattern = /[0-9]/, decimalPatternNoZero = /[1-9]/;
      function cc(char) {
        return char.charCodeAt(0);
      }
      function insertToSet(item, set) {
        item.length !== void 0 ? item.forEach(function(subItem) {
          set.push(subItem);
        }) : set.push(item);
      }
      function addFlag(flagObj, flagKey) {
        if (flagObj[flagKey] === !0)
          throw "duplicate flag " + flagKey;
        flagObj[flagKey] = !0;
      }
      function ASSERT_EXISTS(obj) {
        if (obj === void 0)
          throw Error("Internal Error - Should never get here!");
      }
      function ASSERT_NEVER_REACH_HERE() {
        throw Error("Internal Error - Should never get here!");
      }
      var i, digitsCharCodes = [];
      for (i = cc("0"); i <= cc("9"); i++)
        digitsCharCodes.push(i);
      var wordCharCodes = [cc("_")].concat(digitsCharCodes);
      for (i = cc("a"); i <= cc("z"); i++)
        wordCharCodes.push(i);
      for (i = cc("A"); i <= cc("Z"); i++)
        wordCharCodes.push(i);
      var whitespaceCodes = [cc(" "), cc("\f"), cc("\n"), cc("\r"), cc("	"), cc("\v"), cc("	"), cc("\xA0"), cc("\u1680"), cc("\u2000"), cc("\u2001"), cc("\u2002"), cc("\u2003"), cc("\u2004"), cc("\u2005"), cc("\u2006"), cc("\u2007"), cc("\u2008"), cc("\u2009"), cc("\u200A"), cc("\u2028"), cc("\u2029"), cc("\u202F"), cc("\u205F"), cc("\u3000"), cc("\uFEFF")];
      function BaseRegExpVisitor() {
      }
      return BaseRegExpVisitor.prototype.visitChildren = function(node) {
        for (var key in node) {
          var child = node[key];
          node.hasOwnProperty(key) && (child.type !== void 0 ? this.visit(child) : Array.isArray(child) && child.forEach(function(subChild) {
            this.visit(subChild);
          }, this));
        }
      }, BaseRegExpVisitor.prototype.visit = function(node) {
        switch (node.type) {
          case "Pattern":
            this.visitPattern(node);
            break;
          case "Flags":
            this.visitFlags(node);
            break;
          case "Disjunction":
            this.visitDisjunction(node);
            break;
          case "Alternative":
            this.visitAlternative(node);
            break;
          case "StartAnchor":
            this.visitStartAnchor(node);
            break;
          case "EndAnchor":
            this.visitEndAnchor(node);
            break;
          case "WordBoundary":
            this.visitWordBoundary(node);
            break;
          case "NonWordBoundary":
            this.visitNonWordBoundary(node);
            break;
          case "Lookahead":
            this.visitLookahead(node);
            break;
          case "NegativeLookahead":
            this.visitNegativeLookahead(node);
            break;
          case "Character":
            this.visitCharacter(node);
            break;
          case "Set":
            this.visitSet(node);
            break;
          case "Group":
            this.visitGroup(node);
            break;
          case "GroupBackReference":
            this.visitGroupBackReference(node);
            break;
          case "Quantifier":
            this.visitQuantifier(node);
            break;
        }
        this.visitChildren(node);
      }, BaseRegExpVisitor.prototype.visitPattern = function(node) {
      }, BaseRegExpVisitor.prototype.visitFlags = function(node) {
      }, BaseRegExpVisitor.prototype.visitDisjunction = function(node) {
      }, BaseRegExpVisitor.prototype.visitAlternative = function(node) {
      }, BaseRegExpVisitor.prototype.visitStartAnchor = function(node) {
      }, BaseRegExpVisitor.prototype.visitEndAnchor = function(node) {
      }, BaseRegExpVisitor.prototype.visitWordBoundary = function(node) {
      }, BaseRegExpVisitor.prototype.visitNonWordBoundary = function(node) {
      }, BaseRegExpVisitor.prototype.visitLookahead = function(node) {
      }, BaseRegExpVisitor.prototype.visitNegativeLookahead = function(node) {
      }, BaseRegExpVisitor.prototype.visitCharacter = function(node) {
      }, BaseRegExpVisitor.prototype.visitSet = function(node) {
      }, BaseRegExpVisitor.prototype.visitGroup = function(node) {
      }, BaseRegExpVisitor.prototype.visitGroupBackReference = function(node) {
      }, BaseRegExpVisitor.prototype.visitQuantifier = function(node) {
      }, {
        RegExpParser: RegExpParser,
        BaseRegExpVisitor: BaseRegExpVisitor,
        VERSION: "0.4.0"
      };
    });
  }
});

// ../../node_modules/chevrotain/lib/src/scan/reg_exp_parser.js
var require_reg_exp_parser = __commonJS({
  "../../node_modules/chevrotain/lib/src/scan/reg_exp_parser.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var regexp_to_ast_1 = require_regexp_to_ast(), regExpAstCache = {}, regExpParser = new regexp_to_ast_1.RegExpParser();
    function getRegExpAst(regExp) {
      var regExpStr = regExp.toString();
      if (regExpAstCache.hasOwnProperty(regExpStr))
        return regExpAstCache[regExpStr];
      var regExpAst = regExpParser.pattern(regExpStr);
      return regExpAstCache[regExpStr] = regExpAst, regExpAst;
    }
    exports2.getRegExpAst = getRegExpAst;
    function clearRegExpParserCache() {
      regExpAstCache = {};
    }
    exports2.clearRegExpParserCache = clearRegExpParserCache;
  }
});

// ../../node_modules/chevrotain/lib/src/scan/reg_exp.js
var require_reg_exp = __commonJS({
  "../../node_modules/chevrotain/lib/src/scan/reg_exp.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var regexp_to_ast_1 = require_regexp_to_ast(), utils_1 = require_utils(), reg_exp_parser_1 = require_reg_exp_parser(), lexer_1 = require_lexer(), complementErrorMessage = "Complement Sets are not supported for first char optimization";
    exports2.failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
    function getOptimizedStartCodesIndices(regExp, ensureOptimizations) {
      ensureOptimizations === void 0 && (ensureOptimizations = !1);
      try {
        var ast = reg_exp_parser_1.getRegExpAst(regExp), firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
        return firstChars;
      } catch (e) {
        if (e.message === complementErrorMessage)
          ensureOptimizations && utils_1.PRINT_WARNING("" + exports2.failedOptimizationPrefixMsg + ("	Unable to optimize: < " + regExp.toString() + " >\n") + "	Complement Sets cannot be automatically optimized.\n	This will disable the lexer's first char optimizations.\n	See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
        else {
          var msgSuffix = "";
          ensureOptimizations && (msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details."), utils_1.PRINT_ERROR(exports2.failedOptimizationPrefixMsg + "\n" + ("	Failed parsing: < " + regExp.toString() + " >\n") + ("	Using the regexp-to-ast library version: " + regexp_to_ast_1.VERSION + "\n") + "	Please open an issue at: https://github.com/bd82/regexp-to-ast/issues" + msgSuffix);
        }
      }
      return [];
    }
    exports2.getOptimizedStartCodesIndices = getOptimizedStartCodesIndices;
    function firstCharOptimizedIndices(ast, result, ignoreCase) {
      switch (ast.type) {
        case "Disjunction":
          for (var i = 0; i < ast.value.length; i++)
            firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
          break;
        case "Alternative":
          for (var terms = ast.value, i = 0; i < terms.length; i++) {
            var term = terms[i];
            switch (term.type) {
              case "EndAnchor":
              case "GroupBackReference":
              case "Lookahead":
              case "NegativeLookahead":
              case "StartAnchor":
              case "WordBoundary":
              case "NonWordBoundary":
                continue;
            }
            var atom = term;
            switch (atom.type) {
              case "Character":
                addOptimizedIdxToResult(atom.value, result, ignoreCase);
                break;
              case "Set":
                if (atom.complement === !0)
                  throw Error(complementErrorMessage);
                utils_1.forEach(atom.value, function(code) {
                  if (typeof code == "number")
                    addOptimizedIdxToResult(code, result, ignoreCase);
                  else {
                    var range = code;
                    if (ignoreCase === !0)
                      for (var rangeCode = range.from; rangeCode <= range.to; rangeCode++)
                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                    else {
                      for (var rangeCode = range.from; rangeCode <= range.to && rangeCode < lexer_1.minOptimizationVal; rangeCode++)
                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                      if (range.to >= lexer_1.minOptimizationVal)
                        for (var minUnOptVal = range.from >= lexer_1.minOptimizationVal ? range.from : lexer_1.minOptimizationVal, maxUnOptVal = range.to, minOptIdx = lexer_1.charCodeToOptimizedIndex(minUnOptVal), maxOptIdx = lexer_1.charCodeToOptimizedIndex(maxUnOptVal), currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++)
                          result[currOptIdx] = currOptIdx;
                    }
                  }
                });
                break;
              case "Group":
                firstCharOptimizedIndices(atom.value, result, ignoreCase);
                break;
              default:
                throw Error("Non Exhaustive Match");
            }
            var isOptionalQuantifier = atom.quantifier !== void 0 && atom.quantifier.atLeast === 0;
            if (
              // A group may be optional due to empty contents /(?:)/
              // or if everything inside it is optional /((a)?)/
              atom.type === "Group" && isWholeOptional(atom) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
              atom.type !== "Group" && isOptionalQuantifier === !1
            )
              break;
          }
          break;
        default:
          throw Error("non exhaustive match!");
      }
      return utils_1.values(result);
    }
    exports2.firstCharOptimizedIndices = firstCharOptimizedIndices;
    function addOptimizedIdxToResult(code, result, ignoreCase) {
      var optimizedCharIdx = lexer_1.charCodeToOptimizedIndex(code);
      result[optimizedCharIdx] = optimizedCharIdx, ignoreCase === !0 && handleIgnoreCase(code, result);
    }
    function handleIgnoreCase(code, result) {
      var char = String.fromCharCode(code), upperChar = char.toUpperCase();
      if (upperChar !== char) {
        var optimizedCharIdx = lexer_1.charCodeToOptimizedIndex(upperChar.charCodeAt(0));
        result[optimizedCharIdx] = optimizedCharIdx;
      } else {
        var lowerChar = char.toLowerCase();
        if (lowerChar !== char) {
          var optimizedCharIdx = lexer_1.charCodeToOptimizedIndex(lowerChar.charCodeAt(0));
          result[optimizedCharIdx] = optimizedCharIdx;
        }
      }
    }
    function findCode(setNode, targetCharCodes) {
      return utils_1.find(setNode.value, function(codeOrRange) {
        if (typeof codeOrRange == "number")
          return utils_1.contains(targetCharCodes, codeOrRange);
        var range_1 = codeOrRange;
        return utils_1.find(targetCharCodes, function(targetCode) {
          return range_1.from <= targetCode && targetCode <= range_1.to;
        }) !== void 0;
      });
    }
    function isWholeOptional(ast) {
      return ast.quantifier && ast.quantifier.atLeast === 0 ? !0 : ast.value ? utils_1.isArray(ast.value) ? utils_1.every(ast.value, isWholeOptional) : isWholeOptional(ast.value) : !1;
    }
    var CharCodeFinder = (
      /** @class */
      function(_super) {
        __extends(CharCodeFinder2, _super);
        function CharCodeFinder2(targetCharCodes) {
          var _this = _super.call(this) || this;
          return _this.targetCharCodes = targetCharCodes, _this.found = !1, _this;
        }
        return CharCodeFinder2.prototype.visitChildren = function(node) {
          if (this.found !== !0) {
            switch (node.type) {
              case "Lookahead":
                this.visitLookahead(node);
                return;
              case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                return;
            }
            _super.prototype.visitChildren.call(this, node);
          }
        }, CharCodeFinder2.prototype.visitCharacter = function(node) {
          utils_1.contains(this.targetCharCodes, node.value) && (this.found = !0);
        }, CharCodeFinder2.prototype.visitSet = function(node) {
          node.complement ? findCode(node, this.targetCharCodes) === void 0 && (this.found = !0) : findCode(node, this.targetCharCodes) !== void 0 && (this.found = !0);
        }, CharCodeFinder2;
      }(regexp_to_ast_1.BaseRegExpVisitor)
    );
    function canMatchCharCode(charCodes, pattern) {
      if (pattern instanceof RegExp) {
        var ast = reg_exp_parser_1.getRegExpAst(pattern), charCodeFinder = new CharCodeFinder(charCodes);
        return charCodeFinder.visit(ast), charCodeFinder.found;
      } else
        return utils_1.find(pattern, function(char) {
          return utils_1.contains(charCodes, char.charCodeAt(0));
        }) !== void 0;
    }
    exports2.canMatchCharCode = canMatchCharCode;
  }
});

// ../../node_modules/chevrotain/lib/src/scan/lexer.js
var require_lexer = __commonJS({
  "../../node_modules/chevrotain/lib/src/scan/lexer.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var regexp_to_ast_1 = require_regexp_to_ast(), lexer_public_1 = require_lexer_public(), utils_1 = require_utils(), reg_exp_1 = require_reg_exp(), reg_exp_parser_1 = require_reg_exp_parser(), PATTERN = "PATTERN";
    exports2.DEFAULT_MODE = "defaultMode";
    exports2.MODES = "modes";
    exports2.SUPPORT_STICKY = typeof new RegExp("(?:)").sticky == "boolean";
    function disableSticky() {
      exports2.SUPPORT_STICKY = !1;
    }
    exports2.disableSticky = disableSticky;
    function enableSticky() {
      exports2.SUPPORT_STICKY = !0;
    }
    exports2.enableSticky = enableSticky;
    function analyzeTokenTypes(tokenTypes, options) {
      options = utils_1.defaults(options, {
        useSticky: exports2.SUPPORT_STICKY,
        debug: !1,
        safeMode: !1,
        positionTracking: "full",
        lineTerminatorCharacters: ["\r", "\n"],
        tracer: function(msg, action) {
          return action();
        }
      });
      var tracer = options.tracer;
      tracer("initCharCodeToOptimizedIndexMap", function() {
        initCharCodeToOptimizedIndexMap();
      });
      var onlyRelevantTypes;
      tracer("Reject Lexer.NA", function() {
        onlyRelevantTypes = utils_1.reject(tokenTypes, function(currType) {
          return currType[PATTERN] === lexer_public_1.Lexer.NA;
        });
      });
      var hasCustom = !1, allTransformedPatterns;
      tracer("Transform Patterns", function() {
        hasCustom = !1, allTransformedPatterns = utils_1.map(onlyRelevantTypes, function(currType) {
          var currPattern = currType[PATTERN];
          if (utils_1.isRegExp(currPattern)) {
            var regExpSource = currPattern.source;
            return regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
            regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." ? regExpSource : regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
            !utils_1.contains(["d", "D", "s", "S", "t", "r", "n", "t", "0", "c", "b", "B", "f", "v", "w", "W"], regExpSource[1]) ? regExpSource[1] : options.useSticky ? addStickyFlag(currPattern) : addStartOfInput(currPattern);
          } else {
            if (utils_1.isFunction(currPattern))
              return hasCustom = !0, {
                exec: currPattern
              };
            if (utils_1.has(currPattern, "exec"))
              return hasCustom = !0, currPattern;
            if (typeof currPattern == "string") {
              if (currPattern.length === 1)
                return currPattern;
              var escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), wrappedRegExp = new RegExp(escapedRegExpString);
              return options.useSticky ? addStickyFlag(wrappedRegExp) : addStartOfInput(wrappedRegExp);
            } else
              throw Error("non exhaustive match");
          }
        });
      });
      var patternIdxToType, patternIdxToGroup, patternIdxToLongerAltIdx, patternIdxToPushMode, patternIdxToPopMode;
      tracer("misc mapping", function() {
        patternIdxToType = utils_1.map(onlyRelevantTypes, function(currType) {
          return currType.tokenTypeIdx;
        }), patternIdxToGroup = utils_1.map(onlyRelevantTypes, function(clazz) {
          var groupName = clazz.GROUP;
          if (groupName !== lexer_public_1.Lexer.SKIPPED) {
            if (utils_1.isString(groupName))
              return groupName;
            if (utils_1.isUndefined(groupName))
              return !1;
            throw Error("non exhaustive match");
          }
        }), patternIdxToLongerAltIdx = utils_1.map(onlyRelevantTypes, function(clazz) {
          var longerAltType = clazz.LONGER_ALT;
          if (longerAltType) {
            var longerAltIdx = utils_1.indexOf(onlyRelevantTypes, longerAltType);
            return longerAltIdx;
          }
        }), patternIdxToPushMode = utils_1.map(onlyRelevantTypes, function(clazz) {
          return clazz.PUSH_MODE;
        }), patternIdxToPopMode = utils_1.map(onlyRelevantTypes, function(clazz) {
          return utils_1.has(clazz, "POP_MODE");
        });
      });
      var patternIdxToCanLineTerminator;
      tracer("Line Terminator Handling", function() {
        var lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
        patternIdxToCanLineTerminator = utils_1.map(onlyRelevantTypes, function(tokType) {
          return !1;
        }), options.positionTracking !== "onlyOffset" && (patternIdxToCanLineTerminator = utils_1.map(onlyRelevantTypes, function(tokType) {
          if (utils_1.has(tokType, "LINE_BREAKS"))
            return tokType.LINE_BREAKS;
          if (checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === !1)
            return reg_exp_1.canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
        }));
      });
      var patternIdxToIsCustom, patternIdxToShort, emptyGroups, patternIdxToConfig;
      tracer("Misc Mapping #2", function() {
        patternIdxToIsCustom = utils_1.map(onlyRelevantTypes, isCustomPattern), patternIdxToShort = utils_1.map(allTransformedPatterns, isShortPattern), emptyGroups = utils_1.reduce(onlyRelevantTypes, function(acc, clazz) {
          var groupName = clazz.GROUP;
          return utils_1.isString(groupName) && groupName !== lexer_public_1.Lexer.SKIPPED && (acc[groupName] = []), acc;
        }, {}), patternIdxToConfig = utils_1.map(allTransformedPatterns, function(x, idx) {
          return {
            pattern: allTransformedPatterns[idx],
            longerAlt: patternIdxToLongerAltIdx[idx],
            canLineTerminator: patternIdxToCanLineTerminator[idx],
            isCustom: patternIdxToIsCustom[idx],
            short: patternIdxToShort[idx],
            group: patternIdxToGroup[idx],
            push: patternIdxToPushMode[idx],
            pop: patternIdxToPopMode[idx],
            tokenTypeIdx: patternIdxToType[idx],
            tokenType: onlyRelevantTypes[idx]
          };
        });
      });
      var canBeOptimized = !0, charCodeToPatternIdxToConfig = [];
      return options.safeMode || tracer("First Char Optimization", function() {
        charCodeToPatternIdxToConfig = utils_1.reduce(onlyRelevantTypes, function(result, currTokType, idx) {
          if (typeof currTokType.PATTERN == "string") {
            var charCode = currTokType.PATTERN.charCodeAt(0), optimizedIdx = charCodeToOptimizedIndex(charCode);
            addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
          } else if (utils_1.isArray(currTokType.START_CHARS_HINT)) {
            var lastOptimizedIdx_1;
            utils_1.forEach(currTokType.START_CHARS_HINT, function(charOrInt) {
              var charCode2 = typeof charOrInt == "string" ? charOrInt.charCodeAt(0) : charOrInt, currOptimizedIdx = charCodeToOptimizedIndex(charCode2);
              lastOptimizedIdx_1 !== currOptimizedIdx && (lastOptimizedIdx_1 = currOptimizedIdx, addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]));
            });
          } else if (utils_1.isRegExp(currTokType.PATTERN))
            if (currTokType.PATTERN.unicode)
              canBeOptimized = !1, options.ensureOptimizations && utils_1.PRINT_ERROR("" + reg_exp_1.failedOptimizationPrefixMsg + ("	Unable to analyze < " + currTokType.PATTERN.toString() + " > pattern.\n") + "	The regexp unicode flag is not currently supported by the regexp-to-ast library.\n	This will disable the lexer's first char optimizations.\n	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
            else {
              var optimizedCodes = reg_exp_1.getOptimizedStartCodesIndices(currTokType.PATTERN, options.ensureOptimizations);
              utils_1.isEmpty(optimizedCodes) && (canBeOptimized = !1), utils_1.forEach(optimizedCodes, function(code) {
                addToMapOfArrays(result, code, patternIdxToConfig[idx]);
              });
            }
          else
            options.ensureOptimizations && utils_1.PRINT_ERROR("" + reg_exp_1.failedOptimizationPrefixMsg + ("	TokenType: <" + currTokType.name + "> is using a custom token pattern without providing <start_chars_hint> parameter.\n") + "	This will disable the lexer's first char optimizations.\n	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE"), canBeOptimized = !1;
          return result;
        }, []);
      }), tracer("ArrayPacking", function() {
        charCodeToPatternIdxToConfig = utils_1.packArray(charCodeToPatternIdxToConfig);
      }), {
        emptyGroups: emptyGroups,
        patternIdxToConfig: patternIdxToConfig,
        charCodeToPatternIdxToConfig: charCodeToPatternIdxToConfig,
        hasCustom: hasCustom,
        canBeOptimized: canBeOptimized
      };
    }
    exports2.analyzeTokenTypes = analyzeTokenTypes;
    function validatePatterns(tokenTypes, validModesNames) {
      var errors = [], missingResult = findMissingPatterns(tokenTypes);
      errors = errors.concat(missingResult.errors);
      var invalidResult = findInvalidPatterns(missingResult.valid), validTokenTypes = invalidResult.valid;
      return errors = errors.concat(invalidResult.errors), errors = errors.concat(validateRegExpPattern(validTokenTypes)), errors = errors.concat(findInvalidGroupType(validTokenTypes)), errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames)), errors = errors.concat(findUnreachablePatterns(validTokenTypes)), errors;
    }
    exports2.validatePatterns = validatePatterns;
    function validateRegExpPattern(tokenTypes) {
      var errors = [], withRegExpPatterns = utils_1.filter(tokenTypes, function(currTokType) {
        return utils_1.isRegExp(currTokType[PATTERN]);
      });
      return errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns)), errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns)), errors = errors.concat(findUnsupportedFlags(withRegExpPatterns)), errors = errors.concat(findDuplicatePatterns(withRegExpPatterns)), errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns)), errors;
    }
    function findMissingPatterns(tokenTypes) {
      var tokenTypesWithMissingPattern = utils_1.filter(tokenTypes, function(currType) {
        return !utils_1.has(currType, PATTERN);
      }), errors = utils_1.map(tokenTypesWithMissingPattern, function(currType) {
        return {
          message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
          type: lexer_public_1.LexerDefinitionErrorType.MISSING_PATTERN,
          tokenTypes: [currType]
        };
      }), valid = utils_1.difference(tokenTypes, tokenTypesWithMissingPattern);
      return {
        errors: errors,
        valid: valid
      };
    }
    exports2.findMissingPatterns = findMissingPatterns;
    function findInvalidPatterns(tokenTypes) {
      var tokenTypesWithInvalidPattern = utils_1.filter(tokenTypes, function(currType) {
        var pattern = currType[PATTERN];
        return !utils_1.isRegExp(pattern) && !utils_1.isFunction(pattern) && !utils_1.has(pattern, "exec") && !utils_1.isString(pattern);
      }), errors = utils_1.map(tokenTypesWithInvalidPattern, function(currType) {
        return {
          message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
          type: lexer_public_1.LexerDefinitionErrorType.INVALID_PATTERN,
          tokenTypes: [currType]
        };
      }), valid = utils_1.difference(tokenTypes, tokenTypesWithInvalidPattern);
      return {
        errors: errors,
        valid: valid
      };
    }
    exports2.findInvalidPatterns = findInvalidPatterns;
    var end_of_input = /[^\\][\$]/;
    function findEndOfInputAnchor(tokenTypes) {
      var EndAnchorFinder = (
        /** @class */
        function(_super) {
          __extends(EndAnchorFinder2, _super);
          function EndAnchorFinder2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            return _this.found = !1, _this;
          }
          return EndAnchorFinder2.prototype.visitEndAnchor = function(node) {
            this.found = !0;
          }, EndAnchorFinder2;
        }(regexp_to_ast_1.BaseRegExpVisitor)
      ), invalidRegex = utils_1.filter(tokenTypes, function(currType) {
        var pattern = currType[PATTERN];
        try {
          var regexpAst = reg_exp_parser_1.getRegExpAst(pattern), endAnchorVisitor = new EndAnchorFinder();
          return endAnchorVisitor.visit(regexpAst), endAnchorVisitor.found;
        } catch (e) {
          return end_of_input.test(pattern.source);
        }
      }), errors = utils_1.map(invalidRegex, function(currType) {
        return {
          message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
          type: lexer_public_1.LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
          tokenTypes: [currType]
        };
      });
      return errors;
    }
    exports2.findEndOfInputAnchor = findEndOfInputAnchor;
    function findEmptyMatchRegExps(tokenTypes) {
      var matchesEmptyString = utils_1.filter(tokenTypes, function(currType) {
        var pattern = currType[PATTERN];
        return pattern.test("");
      }), errors = utils_1.map(matchesEmptyString, function(currType) {
        return {
          message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
          type: lexer_public_1.LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
          tokenTypes: [currType]
        };
      });
      return errors;
    }
    exports2.findEmptyMatchRegExps = findEmptyMatchRegExps;
    var start_of_input = /[^\\[][\^]|^\^/;
    function findStartOfInputAnchor(tokenTypes) {
      var StartAnchorFinder = (
        /** @class */
        function(_super) {
          __extends(StartAnchorFinder2, _super);
          function StartAnchorFinder2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            return _this.found = !1, _this;
          }
          return StartAnchorFinder2.prototype.visitStartAnchor = function(node) {
            this.found = !0;
          }, StartAnchorFinder2;
        }(regexp_to_ast_1.BaseRegExpVisitor)
      ), invalidRegex = utils_1.filter(tokenTypes, function(currType) {
        var pattern = currType[PATTERN];
        try {
          var regexpAst = reg_exp_parser_1.getRegExpAst(pattern), startAnchorVisitor = new StartAnchorFinder();
          return startAnchorVisitor.visit(regexpAst), startAnchorVisitor.found;
        } catch (e) {
          return start_of_input.test(pattern.source);
        }
      }), errors = utils_1.map(invalidRegex, function(currType) {
        return {
          message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
          type: lexer_public_1.LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
          tokenTypes: [currType]
        };
      });
      return errors;
    }
    exports2.findStartOfInputAnchor = findStartOfInputAnchor;
    function findUnsupportedFlags(tokenTypes) {
      var invalidFlags = utils_1.filter(tokenTypes, function(currType) {
        var pattern = currType[PATTERN];
        return pattern instanceof RegExp && (pattern.multiline || pattern.global);
      }), errors = utils_1.map(invalidFlags, function(currType) {
        return {
          message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
          type: lexer_public_1.LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
          tokenTypes: [currType]
        };
      });
      return errors;
    }
    exports2.findUnsupportedFlags = findUnsupportedFlags;
    function findDuplicatePatterns(tokenTypes) {
      var found = [], identicalPatterns = utils_1.map(tokenTypes, function(outerType) {
        return utils_1.reduce(tokenTypes, function(result, innerType) {
          return outerType.PATTERN.source === innerType.PATTERN.source && !utils_1.contains(found, innerType) && innerType.PATTERN !== lexer_public_1.Lexer.NA && (found.push(innerType), result.push(innerType)), result;
        }, []);
      });
      identicalPatterns = utils_1.compact(identicalPatterns);
      var duplicatePatterns = utils_1.filter(identicalPatterns, function(currIdenticalSet) {
        return currIdenticalSet.length > 1;
      }), errors = utils_1.map(duplicatePatterns, function(setOfIdentical) {
        var tokenTypeNames = utils_1.map(setOfIdentical, function(currType) {
          return currType.name;
        }), dupPatternSrc = utils_1.first(setOfIdentical).PATTERN;
        return {
          message: "The same RegExp pattern ->" + dupPatternSrc + "<-" + ("has been used in all of the following Token Types: " + tokenTypeNames.join(", ") + " <-"),
          type: lexer_public_1.LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
          tokenTypes: setOfIdentical
        };
      });
      return errors;
    }
    exports2.findDuplicatePatterns = findDuplicatePatterns;
    function findInvalidGroupType(tokenTypes) {
      var invalidTypes = utils_1.filter(tokenTypes, function(clazz) {
        if (!utils_1.has(clazz, "GROUP"))
          return !1;
        var group = clazz.GROUP;
        return group !== lexer_public_1.Lexer.SKIPPED && group !== lexer_public_1.Lexer.NA && !utils_1.isString(group);
      }), errors = utils_1.map(invalidTypes, function(currType) {
        return {
          message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
          type: lexer_public_1.LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
          tokenTypes: [currType]
        };
      });
      return errors;
    }
    exports2.findInvalidGroupType = findInvalidGroupType;
    function findModesThatDoNotExist(tokenTypes, validModes) {
      var invalidModes = utils_1.filter(tokenTypes, function(clazz) {
        return clazz.PUSH_MODE !== void 0 && !utils_1.contains(validModes, clazz.PUSH_MODE);
      }), errors = utils_1.map(invalidModes, function(tokType) {
        var msg = "Token Type: ->" + tokType.name + "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->" + tokType.PUSH_MODE + "<-which does not exist";
        return {
          message: msg,
          type: lexer_public_1.LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
          tokenTypes: [tokType]
        };
      });
      return errors;
    }
    exports2.findModesThatDoNotExist = findModesThatDoNotExist;
    function findUnreachablePatterns(tokenTypes) {
      var errors = [], canBeTested = utils_1.reduce(tokenTypes, function(result, tokType, idx) {
        var pattern = tokType.PATTERN;
        return pattern === lexer_public_1.Lexer.NA || (utils_1.isString(pattern) ? result.push({
          str: pattern,
          idx: idx,
          tokenType: tokType
        }) : utils_1.isRegExp(pattern) && noMetaChar(pattern) && result.push({
          str: pattern.source,
          idx: idx,
          tokenType: tokType
        })), result;
      }, []);
      return utils_1.forEach(tokenTypes, function(tokType, testIdx) {
        utils_1.forEach(canBeTested, function(_a) {
          var str = _a.str, idx = _a.idx, tokenType = _a.tokenType;
          if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
            var msg = "Token: ->" + tokenType.name + "<- can never be matched.\n" + ("Because it appears AFTER the Token Type ->" + tokType.name + "<-") + "in the lexer's definition.\nSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNREACHABLE";
            errors.push({
              message: msg,
              type: lexer_public_1.LexerDefinitionErrorType.UNREACHABLE_PATTERN,
              tokenTypes: [tokType, tokenType]
            });
          }
        });
      }), errors;
    }
    exports2.findUnreachablePatterns = findUnreachablePatterns;
    function testTokenType(str, pattern) {
      if (utils_1.isRegExp(pattern)) {
        var regExpArray = pattern.exec(str);
        return regExpArray !== null && regExpArray.index === 0;
      } else {
        if (utils_1.isFunction(pattern))
          return pattern(str, 0, [], {});
        if (utils_1.has(pattern, "exec"))
          return pattern.exec(str, 0, [], {});
        if (typeof pattern == "string")
          return pattern === str;
        throw Error("non exhaustive match");
      }
    }
    function noMetaChar(regExp) {
      var metaChars = [".", "\\", "[", "]", "|", "^", "$", "(", ")", "?", "*", "+", "{"];
      return utils_1.find(metaChars, function(char) {
        return regExp.source.indexOf(char) !== -1;
      }) === void 0;
    }
    function addStartOfInput(pattern) {
      var flags = pattern.ignoreCase ? "i" : "";
      return new RegExp("^(?:" + pattern.source + ")", flags);
    }
    exports2.addStartOfInput = addStartOfInput;
    function addStickyFlag(pattern) {
      var flags = pattern.ignoreCase ? "iy" : "y";
      return new RegExp("" + pattern.source, flags);
    }
    exports2.addStickyFlag = addStickyFlag;
    function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
      var errors = [];
      return utils_1.has(lexerDefinition, exports2.DEFAULT_MODE) || errors.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + exports2.DEFAULT_MODE + "> property in its definition\n",
        type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
      }), utils_1.has(lexerDefinition, exports2.MODES) || errors.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + exports2.MODES + "> property in its definition\n",
        type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
      }), utils_1.has(lexerDefinition, exports2.MODES) && utils_1.has(lexerDefinition, exports2.DEFAULT_MODE) && !utils_1.has(lexerDefinition.modes, lexerDefinition.defaultMode) && errors.push({
        message: "A MultiMode Lexer cannot be initialized with a " + exports2.DEFAULT_MODE + ": <" + lexerDefinition.defaultMode + ">which does not exist\n",
        type: lexer_public_1.LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
      }), utils_1.has(lexerDefinition, exports2.MODES) && utils_1.forEach(lexerDefinition.modes, function(currModeValue, currModeName) {
        utils_1.forEach(currModeValue, function(currTokType, currIdx) {
          utils_1.isUndefined(currTokType) && errors.push({
            message: "A Lexer cannot be initialized using an undefined Token Type. Mode:" + ("<" + currModeName + "> at index: <" + currIdx + ">\n"),
            type: lexer_public_1.LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
          });
        });
      }), errors;
    }
    exports2.performRuntimeChecks = performRuntimeChecks;
    function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
      var warnings = [], hasAnyLineBreak = !1, allTokenTypes = utils_1.compact(utils_1.flatten(utils_1.mapValues(lexerDefinition.modes, function(tokTypes) {
        return tokTypes;
      }))), concreteTokenTypes = utils_1.reject(allTokenTypes, function(currType) {
        return currType[PATTERN] === lexer_public_1.Lexer.NA;
      }), terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
      return trackLines && utils_1.forEach(concreteTokenTypes, function(tokType) {
        var currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
        if (currIssue !== !1) {
          var message = buildLineBreakIssueMessage(tokType, currIssue), warningDescriptor = {
            message: message,
            type: currIssue.issue,
            tokenType: tokType
          };
          warnings.push(warningDescriptor);
        } else
          utils_1.has(tokType, "LINE_BREAKS") ? tokType.LINE_BREAKS === !0 && (hasAnyLineBreak = !0) : reg_exp_1.canMatchCharCode(terminatorCharCodes, tokType.PATTERN) && (hasAnyLineBreak = !0);
      }), trackLines && !hasAnyLineBreak && warnings.push({
        message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
        type: lexer_public_1.LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
      }), warnings;
    }
    exports2.performWarningRuntimeChecks = performWarningRuntimeChecks;
    function cloneEmptyGroups(emptyGroups) {
      var clonedResult = {}, groupKeys = utils_1.keys(emptyGroups);
      return utils_1.forEach(groupKeys, function(currKey) {
        var currGroupValue = emptyGroups[currKey];
        if (utils_1.isArray(currGroupValue))
          clonedResult[currKey] = [];
        else
          throw Error("non exhaustive match");
      }), clonedResult;
    }
    exports2.cloneEmptyGroups = cloneEmptyGroups;
    function isCustomPattern(tokenType) {
      var pattern = tokenType.PATTERN;
      if (utils_1.isRegExp(pattern))
        return !1;
      if (utils_1.isFunction(pattern))
        return !0;
      if (utils_1.has(pattern, "exec"))
        return !0;
      if (utils_1.isString(pattern))
        return !1;
      throw Error("non exhaustive match");
    }
    exports2.isCustomPattern = isCustomPattern;
    function isShortPattern(pattern) {
      return utils_1.isString(pattern) && pattern.length === 1 ? pattern.charCodeAt(0) : !1;
    }
    exports2.isShortPattern = isShortPattern;
    exports2.LineTerminatorOptimizedTester = {
      // implements /\n|\r\n?/g.test
      test: function(text) {
        for (var len = text.length, i = this.lastIndex; i < len; i++) {
          var c = text.charCodeAt(i);
          if (c === 10)
            return this.lastIndex = i + 1, !0;
          if (c === 13)
            return text.charCodeAt(i + 1) === 10 ? this.lastIndex = i + 2 : this.lastIndex = i + 1, !0;
        }
        return !1;
      },
      lastIndex: 0
    };
    function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
      if (utils_1.has(tokType, "LINE_BREAKS"))
        return !1;
      if (utils_1.isRegExp(tokType.PATTERN)) {
        try {
          reg_exp_1.canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
        } catch (e) {
          return {
            issue: lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
            errMsg: e.message
          };
        }
        return !1;
      } else {
        if (utils_1.isString(tokType.PATTERN))
          return !1;
        if (isCustomPattern(tokType))
          return {
            issue: lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK
          };
        throw Error("non exhaustive match");
      }
    }
    function buildLineBreakIssueMessage(tokType, details) {
      if (details.issue === lexer_public_1.LexerDefinitionErrorType.IDENTIFY_TERMINATOR)
        return "Warning: unable to identify line terminator usage in pattern.\n" + ("	The problem is in the <" + tokType.name + "> Token Type\n") + ("	 Root cause: " + details.errMsg + ".\n") + "	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR";
      if (details.issue === lexer_public_1.LexerDefinitionErrorType.CUSTOM_LINE_BREAK)
        return "Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" + ("	The problem is in the <" + tokType.name + "> Token Type\n") + "	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK";
      throw Error("non exhaustive match");
    }
    exports2.buildLineBreakIssueMessage = buildLineBreakIssueMessage;
    function getCharCodes(charsOrCodes) {
      var charCodes = utils_1.map(charsOrCodes, function(numOrString) {
        return utils_1.isString(numOrString) && numOrString.length > 0 ? numOrString.charCodeAt(0) : numOrString;
      });
      return charCodes;
    }
    function addToMapOfArrays(map2, key, value) {
      map2[key] === void 0 ? map2[key] = [value] : map2[key].push(value);
    }
    exports2.minOptimizationVal = 256;
    function charCodeToOptimizedIndex(charCode) {
      return charCode < exports2.minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
    }
    exports2.charCodeToOptimizedIndex = charCodeToOptimizedIndex;
    var charCodeToOptimizedIdxMap = [];
    function initCharCodeToOptimizedIndexMap() {
      if (utils_1.isEmpty(charCodeToOptimizedIdxMap)) {
        charCodeToOptimizedIdxMap = new Array(65536);
        for (var i = 0; i < 65536; i++)
          charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
      }
    }
  }
});

// ../../node_modules/chevrotain/lib/src/scan/tokens.js
var require_tokens = __commonJS({
  "../../node_modules/chevrotain/lib/src/scan/tokens.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils();
    function tokenStructuredMatcher(tokInstance, tokConstructor) {
      var instanceType = tokInstance.tokenTypeIdx;
      return instanceType === tokConstructor.tokenTypeIdx ? !0 : tokConstructor.isParent === !0 && tokConstructor.categoryMatchesMap[instanceType] === !0;
    }
    exports2.tokenStructuredMatcher = tokenStructuredMatcher;
    function tokenStructuredMatcherNoCategories(token, tokType) {
      return token.tokenTypeIdx === tokType.tokenTypeIdx;
    }
    exports2.tokenStructuredMatcherNoCategories = tokenStructuredMatcherNoCategories;
    exports2.tokenShortNameIdx = 1;
    exports2.tokenIdxToClass = {};
    function augmentTokenTypes(tokenTypes) {
      var tokenTypesAndParents = expandCategories(tokenTypes);
      assignTokenDefaultProps(tokenTypesAndParents), assignCategoriesMapProp(tokenTypesAndParents), assignCategoriesTokensProp(tokenTypesAndParents), utils_1.forEach(tokenTypesAndParents, function(tokType) {
        tokType.isParent = tokType.categoryMatches.length > 0;
      });
    }
    exports2.augmentTokenTypes = augmentTokenTypes;
    function expandCategories(tokenTypes) {
      for (var result = utils_1.cloneArr(tokenTypes), categories = tokenTypes, searching = !0; searching; ) {
        categories = utils_1.compact(utils_1.flatten(utils_1.map(categories, function(currTokType) {
          return currTokType.CATEGORIES;
        })));
        var newCategories = utils_1.difference(categories, result);
        result = result.concat(newCategories), utils_1.isEmpty(newCategories) ? searching = !1 : categories = newCategories;
      }
      return result;
    }
    exports2.expandCategories = expandCategories;
    function assignTokenDefaultProps(tokenTypes) {
      utils_1.forEach(tokenTypes, function(currTokType) {
        hasShortKeyProperty(currTokType) || (exports2.tokenIdxToClass[exports2.tokenShortNameIdx] = currTokType, currTokType.tokenTypeIdx = exports2.tokenShortNameIdx++), hasCategoriesProperty(currTokType) && !utils_1.isArray(currTokType.CATEGORIES) && (currTokType.CATEGORIES = [currTokType.CATEGORIES]), hasCategoriesProperty(currTokType) || (currTokType.CATEGORIES = []), hasExtendingTokensTypesProperty(currTokType) || (currTokType.categoryMatches = []), hasExtendingTokensTypesMapProperty(currTokType) || (currTokType.categoryMatchesMap = {});
      });
    }
    exports2.assignTokenDefaultProps = assignTokenDefaultProps;
    function assignCategoriesTokensProp(tokenTypes) {
      utils_1.forEach(tokenTypes, function(currTokType) {
        currTokType.categoryMatches = [], utils_1.forEach(currTokType.categoryMatchesMap, function(val, key) {
          currTokType.categoryMatches.push(exports2.tokenIdxToClass[key].tokenTypeIdx);
        });
      });
    }
    exports2.assignCategoriesTokensProp = assignCategoriesTokensProp;
    function assignCategoriesMapProp(tokenTypes) {
      utils_1.forEach(tokenTypes, function(currTokType) {
        singleAssignCategoriesToksMap([], currTokType);
      });
    }
    exports2.assignCategoriesMapProp = assignCategoriesMapProp;
    function singleAssignCategoriesToksMap(path, nextNode) {
      utils_1.forEach(path, function(pathNode) {
        nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = !0;
      }), utils_1.forEach(nextNode.CATEGORIES, function(nextCategory) {
        var newPath = path.concat(nextNode);
        utils_1.contains(newPath, nextCategory) || singleAssignCategoriesToksMap(newPath, nextCategory);
      });
    }
    exports2.singleAssignCategoriesToksMap = singleAssignCategoriesToksMap;
    function hasShortKeyProperty(tokType) {
      return utils_1.has(tokType, "tokenTypeIdx");
    }
    exports2.hasShortKeyProperty = hasShortKeyProperty;
    function hasCategoriesProperty(tokType) {
      return utils_1.has(tokType, "CATEGORIES");
    }
    exports2.hasCategoriesProperty = hasCategoriesProperty;
    function hasExtendingTokensTypesProperty(tokType) {
      return utils_1.has(tokType, "categoryMatches");
    }
    exports2.hasExtendingTokensTypesProperty = hasExtendingTokensTypesProperty;
    function hasExtendingTokensTypesMapProperty(tokType) {
      return utils_1.has(tokType, "categoryMatchesMap");
    }
    exports2.hasExtendingTokensTypesMapProperty = hasExtendingTokensTypesMapProperty;
    function isTokenType(tokType) {
      return utils_1.has(tokType, "tokenTypeIdx");
    }
    exports2.isTokenType = isTokenType;
  }
});

// ../../node_modules/chevrotain/lib/src/scan/lexer_errors_public.js
var require_lexer_errors_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/scan/lexer_errors_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.defaultLexerErrorProvider = {
      buildUnableToPopLexerModeMessage: function(token) {
        return "Unable to pop Lexer Mode after encountering Token ->" + token.image + "<- The Mode Stack is empty";
      },
      buildUnexpectedCharactersMessage: function(fullText, startOffset, length, line, column) {
        return "unexpected character: ->" + fullText.charAt(startOffset) + "<- at offset: " + startOffset + "," + (" skipped " + length + " characters.");
      }
    };
  }
});

// ../../node_modules/chevrotain/lib/src/scan/lexer_public.js
var require_lexer_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/scan/lexer_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var lexer_1 = require_lexer(), utils_1 = require_utils(), tokens_1 = require_tokens(), lexer_errors_public_1 = require_lexer_errors_public(), reg_exp_parser_1 = require_reg_exp_parser(), LexerDefinitionErrorType;
    (function(LexerDefinitionErrorType2) {
      LexerDefinitionErrorType2[LexerDefinitionErrorType2.MISSING_PATTERN = 0] = "MISSING_PATTERN", LexerDefinitionErrorType2[LexerDefinitionErrorType2.INVALID_PATTERN = 1] = "INVALID_PATTERN", LexerDefinitionErrorType2[LexerDefinitionErrorType2.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", LexerDefinitionErrorType2[LexerDefinitionErrorType2.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", LexerDefinitionErrorType2[LexerDefinitionErrorType2.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", LexerDefinitionErrorType2[LexerDefinitionErrorType2.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", LexerDefinitionErrorType2[LexerDefinitionErrorType2.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", LexerDefinitionErrorType2[LexerDefinitionErrorType2.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", LexerDefinitionErrorType2[LexerDefinitionErrorType2.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", LexerDefinitionErrorType2[LexerDefinitionErrorType2.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", LexerDefinitionErrorType2[LexerDefinitionErrorType2.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", LexerDefinitionErrorType2[LexerDefinitionErrorType2.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", LexerDefinitionErrorType2[LexerDefinitionErrorType2.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", LexerDefinitionErrorType2[LexerDefinitionErrorType2.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", LexerDefinitionErrorType2[LexerDefinitionErrorType2.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", LexerDefinitionErrorType2[LexerDefinitionErrorType2.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", LexerDefinitionErrorType2[LexerDefinitionErrorType2.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK";
    })(LexerDefinitionErrorType = exports2.LexerDefinitionErrorType || (exports2.LexerDefinitionErrorType = {}));
    var DEFAULT_LEXER_CONFIG = {
      deferDefinitionErrorsHandling: !1,
      positionTracking: "full",
      lineTerminatorsPattern: /\n|\r\n?/g,
      lineTerminatorCharacters: ["\n", "\r"],
      ensureOptimizations: !1,
      safeMode: !1,
      errorMessageProvider: lexer_errors_public_1.defaultLexerErrorProvider,
      traceInitPerf: !1,
      skipValidations: !1
    };
    Object.freeze(DEFAULT_LEXER_CONFIG);
    var Lexer = (
      /** @class */
      function() {
        function Lexer2(lexerDefinition, config) {
          var _this = this;
          if (config === void 0 && (config = DEFAULT_LEXER_CONFIG), this.lexerDefinition = lexerDefinition, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.config = void 0, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, typeof config == "boolean")
            throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
          this.config = utils_1.merge(DEFAULT_LEXER_CONFIG, config);
          var traceInitVal = this.config.traceInitPerf;
          traceInitVal === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof traceInitVal == "number" && (this.traceInitMaxIdent = traceInitVal, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", function() {
            var actualDefinition, hasOnlySingleMode = !0;
            _this.TRACE_INIT("Lexer Config handling", function() {
              if (_this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern)
                _this.config.lineTerminatorsPattern = lexer_1.LineTerminatorOptimizedTester;
              else if (_this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters)
                throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
              if (config.safeMode && config.ensureOptimizations)
                throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
              _this.trackStartLines = /full|onlyStart/i.test(_this.config.positionTracking), _this.trackEndLines = /full/i.test(_this.config.positionTracking), utils_1.isArray(lexerDefinition) ? (actualDefinition = {
                modes: {}
              }, actualDefinition.modes[lexer_1.DEFAULT_MODE] = utils_1.cloneArr(lexerDefinition), actualDefinition[lexer_1.DEFAULT_MODE] = lexer_1.DEFAULT_MODE) : (hasOnlySingleMode = !1, actualDefinition = utils_1.cloneObj(lexerDefinition));
            }), _this.config.skipValidations === !1 && (_this.TRACE_INIT("performRuntimeChecks", function() {
              _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat(lexer_1.performRuntimeChecks(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
            }), _this.TRACE_INIT("performWarningRuntimeChecks", function() {
              _this.lexerDefinitionWarning = _this.lexerDefinitionWarning.concat(lexer_1.performWarningRuntimeChecks(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
            })), actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {}, utils_1.forEach(actualDefinition.modes, function(currModeValue, currModeName) {
              actualDefinition.modes[currModeName] = utils_1.reject(currModeValue, function(currTokType) {
                return utils_1.isUndefined(currTokType);
              });
            });
            var allModeNames = utils_1.keys(actualDefinition.modes);
            if (utils_1.forEach(actualDefinition.modes, function(currModDef, currModName) {
              _this.TRACE_INIT("Mode: <" + currModName + "> processing", function() {
                if (_this.modes.push(currModName), _this.config.skipValidations === !1 && _this.TRACE_INIT("validatePatterns", function() {
                  _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat(lexer_1.validatePatterns(currModDef, allModeNames));
                }), utils_1.isEmpty(_this.lexerDefinitionErrors)) {
                  tokens_1.augmentTokenTypes(currModDef);
                  var currAnalyzeResult_1;
                  _this.TRACE_INIT("analyzeTokenTypes", function() {
                    currAnalyzeResult_1 = lexer_1.analyzeTokenTypes(currModDef, {
                      lineTerminatorCharacters: _this.config.lineTerminatorCharacters,
                      positionTracking: config.positionTracking,
                      ensureOptimizations: config.ensureOptimizations,
                      safeMode: config.safeMode,
                      tracer: _this.TRACE_INIT.bind(_this)
                    });
                  }), _this.patternIdxToConfig[currModName] = currAnalyzeResult_1.patternIdxToConfig, _this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult_1.charCodeToPatternIdxToConfig, _this.emptyGroups = utils_1.merge(_this.emptyGroups, currAnalyzeResult_1.emptyGroups), _this.hasCustom = currAnalyzeResult_1.hasCustom || _this.hasCustom, _this.canModeBeOptimized[currModName] = currAnalyzeResult_1.canBeOptimized;
                }
              });
            }), _this.defaultMode = actualDefinition.defaultMode, !utils_1.isEmpty(_this.lexerDefinitionErrors) && !_this.config.deferDefinitionErrorsHandling) {
              var allErrMessages = utils_1.map(_this.lexerDefinitionErrors, function(error) {
                return error.message;
              }), allErrMessagesString = allErrMessages.join("-----------------------\n");
              throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
            }
            utils_1.forEach(_this.lexerDefinitionWarning, function(warningDescriptor) {
              utils_1.PRINT_WARNING(warningDescriptor.message);
            }), _this.TRACE_INIT("Choosing sub-methods implementations", function() {
              if (lexer_1.SUPPORT_STICKY ? (_this.chopInput = utils_1.IDENTITY, _this.match = _this.matchWithTest) : (_this.updateLastIndex = utils_1.NOOP, _this.match = _this.matchWithExec), hasOnlySingleMode && (_this.handleModes = utils_1.NOOP), _this.trackStartLines === !1 && (_this.computeNewColumn = utils_1.IDENTITY), _this.trackEndLines === !1 && (_this.updateTokenEndLineColumnLocation = utils_1.NOOP), /full/i.test(_this.config.positionTracking))
                _this.createTokenInstance = _this.createFullToken;
              else if (/onlyStart/i.test(_this.config.positionTracking))
                _this.createTokenInstance = _this.createStartOnlyToken;
              else if (/onlyOffset/i.test(_this.config.positionTracking))
                _this.createTokenInstance = _this.createOffsetOnlyToken;
              else
                throw Error('Invalid <positionTracking> config option: "' + _this.config.positionTracking + '"');
              _this.hasCustom ? (_this.addToken = _this.addTokenUsingPush, _this.handlePayload = _this.handlePayloadWithCustom) : (_this.addToken = _this.addTokenUsingMemberAccess, _this.handlePayload = _this.handlePayloadNoCustom);
            }), _this.TRACE_INIT("Failed Optimization Warnings", function() {
              var unOptimizedModes = utils_1.reduce(_this.canModeBeOptimized, function(cannotBeOptimized, canBeOptimized, modeName) {
                return canBeOptimized === !1 && cannotBeOptimized.push(modeName), cannotBeOptimized;
              }, []);
              if (config.ensureOptimizations && !utils_1.isEmpty(unOptimizedModes))
                throw Error("Lexer Modes: < " + unOptimizedModes.join(", ") + ' > cannot be optimized.\n	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n	 Or inspect the console log for details on how to resolve these issues.');
            }), _this.TRACE_INIT("clearRegExpParserCache", function() {
              reg_exp_parser_1.clearRegExpParserCache();
            }), _this.TRACE_INIT("toFastProperties", function() {
              utils_1.toFastProperties(_this);
            });
          });
        }
        return Lexer2.prototype.tokenize = function(text, initialMode) {
          if (initialMode === void 0 && (initialMode = this.defaultMode), !utils_1.isEmpty(this.lexerDefinitionErrors)) {
            var allErrMessages = utils_1.map(this.lexerDefinitionErrors, function(error) {
              return error.message;
            }), allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
          }
          var lexResult = this.tokenizeInternal(text, initialMode);
          return lexResult;
        }, Lexer2.prototype.tokenizeInternal = function(text, initialMode) {
          var _this = this, i, j, matchAltImage, longerAltIdx, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match, orgText = text, orgLength = orgText.length, offset = 0, matchedTokensIndex = 0, guessedNumberOfTokens = this.hasCustom ? 0 : Math.floor(text.length / 10), matchedTokens = new Array(guessedNumberOfTokens), errors = [], line = this.trackStartLines ? 1 : void 0, column = this.trackStartLines ? 1 : void 0, groups = lexer_1.cloneEmptyGroups(this.emptyGroups), trackLines = this.trackStartLines, lineTerminatorPattern = this.config.lineTerminatorsPattern, currModePatternsLength = 0, patternIdxToConfig = [], currCharCodeToPatternIdxToConfig = [], modeStack = [], emptyArray = [];
          Object.freeze(emptyArray);
          var getPossiblePatterns = void 0;
          function getPossiblePatternsSlow() {
            return patternIdxToConfig;
          }
          function getPossiblePatternsOptimized(charCode) {
            var optimizedCharIdx = lexer_1.charCodeToOptimizedIndex(charCode), possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
            return possiblePatterns === void 0 ? emptyArray : possiblePatterns;
          }
          var pop_mode = function(popToken) {
            if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
            // So no error should occur.
            popToken.tokenType.PUSH_MODE === void 0) {
              var msg_1 = _this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
              errors.push({
                offset: popToken.startOffset,
                line: popToken.startLine !== void 0 ? popToken.startLine : void 0,
                column: popToken.startColumn !== void 0 ? popToken.startColumn : void 0,
                length: popToken.image.length,
                message: msg_1
              });
            } else {
              modeStack.pop();
              var newMode = utils_1.last(modeStack);
              patternIdxToConfig = _this.patternIdxToConfig[newMode], currCharCodeToPatternIdxToConfig = _this.charCodeToPatternIdxToConfig[newMode], currModePatternsLength = patternIdxToConfig.length;
              var modeCanBeOptimized = _this.canModeBeOptimized[newMode] && _this.config.safeMode === !1;
              currCharCodeToPatternIdxToConfig && modeCanBeOptimized ? getPossiblePatterns = getPossiblePatternsOptimized : getPossiblePatterns = getPossiblePatternsSlow;
            }
          };
          function push_mode(newMode) {
            modeStack.push(newMode), currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode], patternIdxToConfig = this.patternIdxToConfig[newMode], currModePatternsLength = patternIdxToConfig.length, currModePatternsLength = patternIdxToConfig.length;
            var modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === !1;
            currCharCodeToPatternIdxToConfig && modeCanBeOptimized ? getPossiblePatterns = getPossiblePatternsOptimized : getPossiblePatterns = getPossiblePatternsSlow;
          }
          push_mode.call(this, initialMode);
          for (var currConfig; offset < orgLength; ) {
            matchedImage = null;
            var nextCharCode = orgText.charCodeAt(offset), chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode), chosenPatternsLength = chosenPatternIdxToConfig.length;
            for (i = 0; i < chosenPatternsLength; i++) {
              currConfig = chosenPatternIdxToConfig[i];
              var currPattern = currConfig.pattern;
              payload = null;
              var singleCharCode = currConfig.short;
              if (singleCharCode !== !1 ? nextCharCode === singleCharCode && (matchedImage = currPattern) : currConfig.isCustom === !0 ? (match = currPattern.exec(orgText, offset, matchedTokens, groups), match !== null ? (matchedImage = match[0], match.payload !== void 0 && (payload = match.payload)) : matchedImage = null) : (this.updateLastIndex(currPattern, offset), matchedImage = this.match(currPattern, text, offset)), matchedImage !== null) {
                if (longerAltIdx = currConfig.longerAlt, longerAltIdx !== void 0) {
                  var longerAltConfig = patternIdxToConfig[longerAltIdx], longerAltPattern = longerAltConfig.pattern;
                  altPayload = null, longerAltConfig.isCustom === !0 ? (match = longerAltPattern.exec(orgText, offset, matchedTokens, groups), match !== null ? (matchAltImage = match[0], match.payload !== void 0 && (altPayload = match.payload)) : matchAltImage = null) : (this.updateLastIndex(longerAltPattern, offset), matchAltImage = this.match(longerAltPattern, text, offset)), matchAltImage && matchAltImage.length > matchedImage.length && (matchedImage = matchAltImage, payload = altPayload, currConfig = longerAltConfig);
                }
                break;
              }
            }
            if (matchedImage !== null) {
              if (imageLength = matchedImage.length, group = currConfig.group, group !== void 0 && (tokType = currConfig.tokenTypeIdx, newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength), this.handlePayload(newToken, payload), group === !1 ? matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken) : groups[group].push(newToken)), text = this.chopInput(text, imageLength), offset = offset + imageLength, column = this.computeNewColumn(column, imageLength), trackLines === !0 && currConfig.canLineTerminator === !0) {
                var numOfLTsInMatch = 0, foundTerminator = void 0, lastLTEndOffset = void 0;
                lineTerminatorPattern.lastIndex = 0;
                do
                  foundTerminator = lineTerminatorPattern.test(matchedImage), foundTerminator === !0 && (lastLTEndOffset = lineTerminatorPattern.lastIndex - 1, numOfLTsInMatch++);
                while (foundTerminator === !0);
                numOfLTsInMatch !== 0 && (line = line + numOfLTsInMatch, column = imageLength - lastLTEndOffset, this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength));
              }
              this.handleModes(currConfig, pop_mode, push_mode, newToken);
            } else {
              for (var errorStartOffset = offset, errorLine = line, errorColumn = column, foundResyncPoint = !1; !foundResyncPoint && offset < orgLength; )
                for (droppedChar = orgText.charCodeAt(offset), text = this.chopInput(text, 1), offset++, j = 0; j < currModePatternsLength; j++) {
                  var currConfig_1 = patternIdxToConfig[j], currPattern = currConfig_1.pattern, singleCharCode = currConfig_1.short;
                  if (singleCharCode !== !1 ? orgText.charCodeAt(offset) === singleCharCode && (foundResyncPoint = !0) : currConfig_1.isCustom === !0 ? foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null : (this.updateLastIndex(currPattern, offset), foundResyncPoint = currPattern.exec(text) !== null), foundResyncPoint === !0)
                    break;
                }
              errLength = offset - errorStartOffset, msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn), errors.push({
                offset: errorStartOffset,
                line: errorLine,
                column: errorColumn,
                length: errLength,
                message: msg
              });
            }
          }
          return this.hasCustom || (matchedTokens.length = matchedTokensIndex), {
            tokens: matchedTokens,
            groups: groups,
            errors: errors
          };
        }, Lexer2.prototype.handleModes = function(config, pop_mode, push_mode, newToken) {
          if (config.pop === !0) {
            var pushMode = config.push;
            pop_mode(newToken), pushMode !== void 0 && push_mode.call(this, pushMode);
          } else
            config.push !== void 0 && push_mode.call(this, config.push);
        }, Lexer2.prototype.chopInput = function(text, length) {
          return text.substring(length);
        }, Lexer2.prototype.updateLastIndex = function(regExp, newLastIndex) {
          regExp.lastIndex = newLastIndex;
        }, Lexer2.prototype.updateTokenEndLineColumnLocation = function(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
          var lastCharIsLT, fixForEndingInLT;
          group !== void 0 && (lastCharIsLT = lastLTIdx === imageLength - 1, fixForEndingInLT = lastCharIsLT ? -1 : 0, numOfLTsInMatch === 1 && lastCharIsLT === !0 || (newToken.endLine = line + fixForEndingInLT, newToken.endColumn = column - 1 + -fixForEndingInLT));
        }, Lexer2.prototype.computeNewColumn = function(oldColumn, imageLength) {
          return oldColumn + imageLength;
        }, Lexer2.prototype.createTokenInstance = function() {
          for (var args = [], _i = 0; _i < arguments.length; _i++)
            args[_i] = arguments[_i];
          return null;
        }, Lexer2.prototype.createOffsetOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType) {
          return {
            image: image,
            startOffset: startOffset,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
          };
        }, Lexer2.prototype.createStartOnlyToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
          return {
            image: image,
            startOffset: startOffset,
            startLine: startLine,
            startColumn: startColumn,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
          };
        }, Lexer2.prototype.createFullToken = function(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
          return {
            image: image,
            startOffset: startOffset,
            endOffset: startOffset + imageLength - 1,
            startLine: startLine,
            endLine: startLine,
            startColumn: startColumn,
            endColumn: startColumn + imageLength - 1,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
          };
        }, Lexer2.prototype.addToken = function(tokenVector, index, tokenToAdd) {
          return 666;
        }, Lexer2.prototype.addTokenUsingPush = function(tokenVector, index, tokenToAdd) {
          return tokenVector.push(tokenToAdd), index;
        }, Lexer2.prototype.addTokenUsingMemberAccess = function(tokenVector, index, tokenToAdd) {
          return tokenVector[index] = tokenToAdd, index++, index;
        }, Lexer2.prototype.handlePayload = function(token, payload) {
        }, Lexer2.prototype.handlePayloadNoCustom = function(token, payload) {
        }, Lexer2.prototype.handlePayloadWithCustom = function(token, payload) {
          payload !== null && (token.payload = payload);
        }, Lexer2.prototype.match = function(pattern, text, offset) {
          return null;
        }, Lexer2.prototype.matchWithTest = function(pattern, text, offset) {
          var found = pattern.test(text);
          return found === !0 ? text.substring(offset, pattern.lastIndex) : null;
        }, Lexer2.prototype.matchWithExec = function(pattern, text) {
          var regExpArray = pattern.exec(text);
          return regExpArray !== null ? regExpArray[0] : regExpArray;
        }, Lexer2.prototype.TRACE_INIT = function(phaseDesc, phaseImpl) {
          if (this.traceInitPerf === !0) {
            this.traceInitIndent++;
            var indent = new Array(this.traceInitIndent + 1).join("	");
            this.traceInitIndent < this.traceInitMaxIdent && console.log(indent + "--> <" + phaseDesc + ">");
            var _a = utils_1.timer(phaseImpl), time = _a.time, value = _a.value, traceMethod = time > 10 ? console.warn : console.log;
            return this.traceInitIndent < this.traceInitMaxIdent && traceMethod(indent + "<-- <" + phaseDesc + "> time: " + time + "ms"), this.traceInitIndent--, value;
          } else
            return phaseImpl();
        }, Lexer2.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.", Lexer2.NA = /NOT_APPLICABLE/, Lexer2;
      }()
    );
    exports2.Lexer = Lexer;
  }
});

// ../../node_modules/chevrotain/lib/src/scan/tokens_public.js
var require_tokens_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/scan/tokens_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), lexer_public_1 = require_lexer_public(), tokens_1 = require_tokens();
    function tokenLabel(tokType) {
      return hasTokenLabel(tokType) ? tokType.LABEL : tokType.name;
    }
    exports2.tokenLabel = tokenLabel;
    function tokenName(tokType) {
      return tokType.name;
    }
    exports2.tokenName = tokenName;
    function hasTokenLabel(obj) {
      return utils_1.isString(obj.LABEL) && obj.LABEL !== "";
    }
    exports2.hasTokenLabel = hasTokenLabel;
    var PARENT = "parent", CATEGORIES = "categories", LABEL = "label", GROUP = "group", PUSH_MODE = "push_mode", POP_MODE = "pop_mode", LONGER_ALT = "longer_alt", LINE_BREAKS = "line_breaks", START_CHARS_HINT = "start_chars_hint";
    function createToken(config) {
      return createTokenInternal(config);
    }
    exports2.createToken = createToken;
    function createTokenInternal(config) {
      var pattern = config.pattern, tokenType = {};
      if (tokenType.name = config.name, utils_1.isUndefined(pattern) || (tokenType.PATTERN = pattern), utils_1.has(config, PARENT))
        throw "The parent property is no longer supported.\nSee: https://github.com/SAP/chevrotain/issues/564#issuecomment-349062346 for details.";
      return utils_1.has(config, CATEGORIES) && (tokenType.CATEGORIES = config[CATEGORIES]), tokens_1.augmentTokenTypes([tokenType]), utils_1.has(config, LABEL) && (tokenType.LABEL = config[LABEL]), utils_1.has(config, GROUP) && (tokenType.GROUP = config[GROUP]), utils_1.has(config, POP_MODE) && (tokenType.POP_MODE = config[POP_MODE]), utils_1.has(config, PUSH_MODE) && (tokenType.PUSH_MODE = config[PUSH_MODE]), utils_1.has(config, LONGER_ALT) && (tokenType.LONGER_ALT = config[LONGER_ALT]), utils_1.has(config, LINE_BREAKS) && (tokenType.LINE_BREAKS = config[LINE_BREAKS]), utils_1.has(config, START_CHARS_HINT) && (tokenType.START_CHARS_HINT = config[START_CHARS_HINT]), tokenType;
    }
    exports2.EOF = createToken({
      name: "EOF",
      pattern: lexer_public_1.Lexer.NA
    });
    tokens_1.augmentTokenTypes([exports2.EOF]);
    function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
      return {
        image: image,
        startOffset: startOffset,
        endOffset: endOffset,
        startLine: startLine,
        endLine: endLine,
        startColumn: startColumn,
        endColumn: endColumn,
        tokenTypeIdx: tokType.tokenTypeIdx,
        tokenType: tokType
      };
    }
    exports2.createTokenInstance = createTokenInstance;
    function tokenMatcher(token, tokType) {
      return tokens_1.tokenStructuredMatcher(token, tokType);
    }
    exports2.tokenMatcher = tokenMatcher;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js
var require_gast_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), tokens_public_1 = require_tokens_public(), AbstractProduction = (
      /** @class */
      function() {
        function AbstractProduction2(definition) {
          this.definition = definition;
        }
        return AbstractProduction2.prototype.accept = function(visitor) {
          visitor.visit(this), utils_1.forEach(this.definition, function(prod) {
            prod.accept(visitor);
          });
        }, AbstractProduction2;
      }()
    );
    exports2.AbstractProduction = AbstractProduction;
    var NonTerminal = (
      /** @class */
      function(_super) {
        __extends(NonTerminal2, _super);
        function NonTerminal2(options) {
          var _this = _super.call(this, []) || this;
          return _this.idx = 1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return Object.defineProperty(NonTerminal2.prototype, "definition", {
          get: function() {
            return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
          },
          set: function(definition) {
          },
          enumerable: !0,
          configurable: !0
        }), NonTerminal2.prototype.accept = function(visitor) {
          visitor.visit(this);
        }, NonTerminal2;
      }(AbstractProduction)
    );
    exports2.NonTerminal = NonTerminal;
    var Rule = (
      /** @class */
      function(_super) {
        __extends(Rule2, _super);
        function Rule2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.orgText = "", utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return Rule2;
      }(AbstractProduction)
    );
    exports2.Rule = Rule;
    var Flat = (
      /** @class */
      function(_super) {
        __extends(Flat2, _super);
        function Flat2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.ignoreAmbiguities = !1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return Flat2;
      }(AbstractProduction)
    );
    exports2.Flat = Flat;
    var Option = (
      /** @class */
      function(_super) {
        __extends(Option2, _super);
        function Option2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.idx = 1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return Option2;
      }(AbstractProduction)
    );
    exports2.Option = Option;
    var RepetitionMandatory = (
      /** @class */
      function(_super) {
        __extends(RepetitionMandatory2, _super);
        function RepetitionMandatory2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.idx = 1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return RepetitionMandatory2;
      }(AbstractProduction)
    );
    exports2.RepetitionMandatory = RepetitionMandatory;
    var RepetitionMandatoryWithSeparator = (
      /** @class */
      function(_super) {
        __extends(RepetitionMandatoryWithSeparator2, _super);
        function RepetitionMandatoryWithSeparator2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.idx = 1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return RepetitionMandatoryWithSeparator2;
      }(AbstractProduction)
    );
    exports2.RepetitionMandatoryWithSeparator = RepetitionMandatoryWithSeparator;
    var Repetition = (
      /** @class */
      function(_super) {
        __extends(Repetition2, _super);
        function Repetition2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.idx = 1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return Repetition2;
      }(AbstractProduction)
    );
    exports2.Repetition = Repetition;
    var RepetitionWithSeparator = (
      /** @class */
      function(_super) {
        __extends(RepetitionWithSeparator2, _super);
        function RepetitionWithSeparator2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.idx = 1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return RepetitionWithSeparator2;
      }(AbstractProduction)
    );
    exports2.RepetitionWithSeparator = RepetitionWithSeparator;
    var Alternation = (
      /** @class */
      function(_super) {
        __extends(Alternation2, _super);
        function Alternation2(options) {
          var _this = _super.call(this, options.definition) || this;
          return _this.idx = 1, _this.ignoreAmbiguities = !1, _this.hasPredicates = !1, utils_1.assign(_this, utils_1.pick(options, function(v) {
            return v !== void 0;
          })), _this;
        }
        return Alternation2;
      }(AbstractProduction)
    );
    exports2.Alternation = Alternation;
    var Terminal = (
      /** @class */
      function() {
        function Terminal2(options) {
          this.idx = 1, utils_1.assign(this, utils_1.pick(options, function(v) {
            return v !== void 0;
          }));
        }
        return Terminal2.prototype.accept = function(visitor) {
          visitor.visit(this);
        }, Terminal2;
      }()
    );
    exports2.Terminal = Terminal;
    function serializeGrammar(topRules) {
      return utils_1.map(topRules, serializeProduction);
    }
    exports2.serializeGrammar = serializeGrammar;
    function serializeProduction(node) {
      function convertDefinition(definition) {
        return utils_1.map(definition, serializeProduction);
      }
      if (node instanceof NonTerminal)
        return {
          type: "NonTerminal",
          name: node.nonTerminalName,
          idx: node.idx
        };
      if (node instanceof Flat)
        return {
          type: "Flat",
          definition: convertDefinition(node.definition)
        };
      if (node instanceof Option)
        return {
          type: "Option",
          idx: node.idx,
          definition: convertDefinition(node.definition)
        };
      if (node instanceof RepetitionMandatory)
        return {
          type: "RepetitionMandatory",
          name: node.name,
          idx: node.idx,
          definition: convertDefinition(node.definition)
        };
      if (node instanceof RepetitionMandatoryWithSeparator)
        return {
          type: "RepetitionMandatoryWithSeparator",
          name: node.name,
          idx: node.idx,
          separator: serializeProduction(new Terminal({
            terminalType: node.separator
          })),
          definition: convertDefinition(node.definition)
        };
      if (node instanceof RepetitionWithSeparator)
        return {
          type: "RepetitionWithSeparator",
          name: node.name,
          idx: node.idx,
          separator: serializeProduction(new Terminal({
            terminalType: node.separator
          })),
          definition: convertDefinition(node.definition)
        };
      if (node instanceof Repetition)
        return {
          type: "Repetition",
          name: node.name,
          idx: node.idx,
          definition: convertDefinition(node.definition)
        };
      if (node instanceof Alternation)
        return {
          type: "Alternation",
          name: node.name,
          idx: node.idx,
          definition: convertDefinition(node.definition)
        };
      if (node instanceof Terminal) {
        var serializedTerminal = {
          type: "Terminal",
          name: node.terminalType.name,
          label: tokens_public_1.tokenLabel(node.terminalType),
          idx: node.idx
        }, pattern = node.terminalType.PATTERN;
        return node.terminalType.PATTERN && (serializedTerminal.pattern = utils_1.isRegExp(pattern) ? pattern.source : pattern), serializedTerminal;
      } else {
        if (node instanceof Rule)
          return {
            type: "Rule",
            name: node.name,
            orgText: node.orgText,
            definition: convertDefinition(node.definition)
          };
        throw Error("non exhaustive match");
      }
    }
    exports2.serializeProduction = serializeProduction;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/rest.js
var require_rest = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/rest.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), gast_public_1 = require_gast_public(), RestWalker = (
      /** @class */
      function() {
        function RestWalker2() {
        }
        return RestWalker2.prototype.walk = function(prod, prevRest) {
          var _this = this;
          prevRest === void 0 && (prevRest = []), utils_1.forEach(prod.definition, function(subProd, index) {
            var currRest = utils_1.drop(prod.definition, index + 1);
            if (subProd instanceof gast_public_1.NonTerminal)
              _this.walkProdRef(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.Terminal)
              _this.walkTerminal(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.Flat)
              _this.walkFlat(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.Option)
              _this.walkOption(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.RepetitionMandatory)
              _this.walkAtLeastOne(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.RepetitionMandatoryWithSeparator)
              _this.walkAtLeastOneSep(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.RepetitionWithSeparator)
              _this.walkManySep(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.Repetition)
              _this.walkMany(subProd, currRest, prevRest);
            else if (subProd instanceof gast_public_1.Alternation)
              _this.walkOr(subProd, currRest, prevRest);
            else
              throw Error("non exhaustive match");
          });
        }, RestWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
        }, RestWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
        }, RestWalker2.prototype.walkFlat = function(flatProd, currRest, prevRest) {
          var fullOrRest = currRest.concat(prevRest);
          this.walk(flatProd, fullOrRest);
        }, RestWalker2.prototype.walkOption = function(optionProd, currRest, prevRest) {
          var fullOrRest = currRest.concat(prevRest);
          this.walk(optionProd, fullOrRest);
        }, RestWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
          var fullAtLeastOneRest = [new gast_public_1.Option({
            definition: atLeastOneProd.definition
          })].concat(currRest, prevRest);
          this.walk(atLeastOneProd, fullAtLeastOneRest);
        }, RestWalker2.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
          var fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
          this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
        }, RestWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
          var fullManyRest = [new gast_public_1.Option({
            definition: manyProd.definition
          })].concat(currRest, prevRest);
          this.walk(manyProd, fullManyRest);
        }, RestWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
          var fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
          this.walk(manySepProd, fullManySepRest);
        }, RestWalker2.prototype.walkOr = function(orProd, currRest, prevRest) {
          var _this = this, fullOrRest = currRest.concat(prevRest);
          utils_1.forEach(orProd.definition, function(alt) {
            var prodWrapper = new gast_public_1.Flat({
              definition: [alt]
            });
            _this.walk(prodWrapper, fullOrRest);
          });
        }, RestWalker2;
      }()
    );
    exports2.RestWalker = RestWalker;
    function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
      var repSepRest = [new gast_public_1.Option({
        definition: [new gast_public_1.Terminal({
          terminalType: repSepProd.separator
        })].concat(repSepProd.definition)
      })], fullRepSepRest = repSepRest.concat(currRest, prevRest);
      return fullRepSepRest;
    }
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js
var require_gast_visitor_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast_visitor_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var gast_public_1 = require_gast_public(), GAstVisitor = (
      /** @class */
      function() {
        function GAstVisitor2() {
        }
        return GAstVisitor2.prototype.visit = function(node) {
          var nodeAny = node;
          switch (nodeAny.constructor) {
            case gast_public_1.NonTerminal:
              return this.visitNonTerminal(nodeAny);
            case gast_public_1.Flat:
              return this.visitFlat(nodeAny);
            case gast_public_1.Option:
              return this.visitOption(nodeAny);
            case gast_public_1.RepetitionMandatory:
              return this.visitRepetitionMandatory(nodeAny);
            case gast_public_1.RepetitionMandatoryWithSeparator:
              return this.visitRepetitionMandatoryWithSeparator(nodeAny);
            case gast_public_1.RepetitionWithSeparator:
              return this.visitRepetitionWithSeparator(nodeAny);
            case gast_public_1.Repetition:
              return this.visitRepetition(nodeAny);
            case gast_public_1.Alternation:
              return this.visitAlternation(nodeAny);
            case gast_public_1.Terminal:
              return this.visitTerminal(nodeAny);
            case gast_public_1.Rule:
              return this.visitRule(nodeAny);
            default:
              throw Error("non exhaustive match");
          }
        }, GAstVisitor2.prototype.visitNonTerminal = function(node) {
        }, GAstVisitor2.prototype.visitFlat = function(node) {
        }, GAstVisitor2.prototype.visitOption = function(node) {
        }, GAstVisitor2.prototype.visitRepetition = function(node) {
        }, GAstVisitor2.prototype.visitRepetitionMandatory = function(node) {
        }, GAstVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
        }, GAstVisitor2.prototype.visitRepetitionWithSeparator = function(node) {
        }, GAstVisitor2.prototype.visitAlternation = function(node) {
        }, GAstVisitor2.prototype.visitTerminal = function(node) {
        }, GAstVisitor2.prototype.visitRule = function(node) {
        }, GAstVisitor2;
      }()
    );
    exports2.GAstVisitor = GAstVisitor;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js
var require_gast = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), gast_public_1 = require_gast_public(), gast_visitor_public_1 = require_gast_visitor_public();
    function isSequenceProd(prod) {
      return prod instanceof gast_public_1.Flat || prod instanceof gast_public_1.Option || prod instanceof gast_public_1.Repetition || prod instanceof gast_public_1.RepetitionMandatory || prod instanceof gast_public_1.RepetitionMandatoryWithSeparator || prod instanceof gast_public_1.RepetitionWithSeparator || prod instanceof gast_public_1.Terminal || prod instanceof gast_public_1.Rule;
    }
    exports2.isSequenceProd = isSequenceProd;
    function isOptionalProd(prod, alreadyVisited) {
      alreadyVisited === void 0 && (alreadyVisited = []);
      var isDirectlyOptional = prod instanceof gast_public_1.Option || prod instanceof gast_public_1.Repetition || prod instanceof gast_public_1.RepetitionWithSeparator;
      return isDirectlyOptional ? !0 : prod instanceof gast_public_1.Alternation ? utils_1.some(prod.definition, function(subProd) {
        return isOptionalProd(subProd, alreadyVisited);
      }) : prod instanceof gast_public_1.NonTerminal && utils_1.contains(alreadyVisited, prod) ? !1 : prod instanceof gast_public_1.AbstractProduction ? (prod instanceof gast_public_1.NonTerminal && alreadyVisited.push(prod), utils_1.every(prod.definition, function(subProd) {
        return isOptionalProd(subProd, alreadyVisited);
      })) : !1;
    }
    exports2.isOptionalProd = isOptionalProd;
    function isBranchingProd(prod) {
      return prod instanceof gast_public_1.Alternation;
    }
    exports2.isBranchingProd = isBranchingProd;
    function getProductionDslName(prod) {
      if (prod instanceof gast_public_1.NonTerminal)
        return "SUBRULE";
      if (prod instanceof gast_public_1.Option)
        return "OPTION";
      if (prod instanceof gast_public_1.Alternation)
        return "OR";
      if (prod instanceof gast_public_1.RepetitionMandatory)
        return "AT_LEAST_ONE";
      if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator)
        return "AT_LEAST_ONE_SEP";
      if (prod instanceof gast_public_1.RepetitionWithSeparator)
        return "MANY_SEP";
      if (prod instanceof gast_public_1.Repetition)
        return "MANY";
      if (prod instanceof gast_public_1.Terminal)
        return "CONSUME";
      throw Error("non exhaustive match");
    }
    exports2.getProductionDslName = getProductionDslName;
    var DslMethodsCollectorVisitor = (
      /** @class */
      function(_super) {
        __extends(DslMethodsCollectorVisitor2, _super);
        function DslMethodsCollectorVisitor2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          return _this.separator = "-", _this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
          }, _this;
        }
        return DslMethodsCollectorVisitor2.prototype.reset = function() {
          this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
          };
        }, DslMethodsCollectorVisitor2.prototype.visitTerminal = function(terminal) {
          var key = terminal.terminalType.name + this.separator + "Terminal";
          utils_1.has(this.dslMethods, key) || (this.dslMethods[key] = []), this.dslMethods[key].push(terminal);
        }, DslMethodsCollectorVisitor2.prototype.visitNonTerminal = function(subrule) {
          var key = subrule.nonTerminalName + this.separator + "Terminal";
          utils_1.has(this.dslMethods, key) || (this.dslMethods[key] = []), this.dslMethods[key].push(subrule);
        }, DslMethodsCollectorVisitor2.prototype.visitOption = function(option) {
          this.dslMethods.option.push(option);
        }, DslMethodsCollectorVisitor2.prototype.visitRepetitionWithSeparator = function(manySep) {
          this.dslMethods.repetitionWithSeparator.push(manySep);
        }, DslMethodsCollectorVisitor2.prototype.visitRepetitionMandatory = function(atLeastOne) {
          this.dslMethods.repetitionMandatory.push(atLeastOne);
        }, DslMethodsCollectorVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
          this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
        }, DslMethodsCollectorVisitor2.prototype.visitRepetition = function(many) {
          this.dslMethods.repetition.push(many);
        }, DslMethodsCollectorVisitor2.prototype.visitAlternation = function(or) {
          this.dslMethods.alternation.push(or);
        }, DslMethodsCollectorVisitor2;
      }(gast_visitor_public_1.GAstVisitor)
    );
    exports2.DslMethodsCollectorVisitor = DslMethodsCollectorVisitor;
    var collectorVisitor = new DslMethodsCollectorVisitor();
    function collectMethods(rule) {
      collectorVisitor.reset(), rule.accept(collectorVisitor);
      var dslMethods = collectorVisitor.dslMethods;
      return collectorVisitor.reset(), dslMethods;
    }
    exports2.collectMethods = collectMethods;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/first.js
var require_first = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/first.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), gast_public_1 = require_gast_public(), gast_1 = require_gast();
    function first2(prod) {
      if (prod instanceof gast_public_1.NonTerminal)
        return first2(prod.referencedRule);
      if (prod instanceof gast_public_1.Terminal)
        return firstForTerminal(prod);
      if (gast_1.isSequenceProd(prod))
        return firstForSequence(prod);
      if (gast_1.isBranchingProd(prod))
        return firstForBranching(prod);
      throw Error("non exhaustive match");
    }
    exports2.first = first2;
    function firstForSequence(prod) {
      for (var firstSet = [], seq = prod.definition, nextSubProdIdx = 0, hasInnerProdsRemaining = seq.length > nextSubProdIdx, currSubProd, isLastInnerProdOptional = !0; hasInnerProdsRemaining && isLastInnerProdOptional; )
        currSubProd = seq[nextSubProdIdx], isLastInnerProdOptional = gast_1.isOptionalProd(currSubProd), firstSet = firstSet.concat(first2(currSubProd)), nextSubProdIdx = nextSubProdIdx + 1, hasInnerProdsRemaining = seq.length > nextSubProdIdx;
      return utils_1.uniq(firstSet);
    }
    exports2.firstForSequence = firstForSequence;
    function firstForBranching(prod) {
      var allAlternativesFirsts = utils_1.map(prod.definition, function(innerProd) {
        return first2(innerProd);
      });
      return utils_1.uniq(utils_1.flatten(allAlternativesFirsts));
    }
    exports2.firstForBranching = firstForBranching;
    function firstForTerminal(terminal) {
      return [terminal.terminalType];
    }
    exports2.firstForTerminal = firstForTerminal;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/constants.js
var require_constants = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/constants.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.IN = "_~IN~_";
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/follow.js
var require_follow = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/follow.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var rest_1 = require_rest(), first_1 = require_first(), utils_1 = require_utils(), constants_1 = require_constants(), gast_public_1 = require_gast_public(), ResyncFollowsWalker = (
      /** @class */
      function(_super) {
        __extends(ResyncFollowsWalker2, _super);
        function ResyncFollowsWalker2(topProd) {
          var _this = _super.call(this) || this;
          return _this.topProd = topProd, _this.follows = {}, _this;
        }
        return ResyncFollowsWalker2.prototype.startWalking = function() {
          return this.walk(this.topProd), this.follows;
        }, ResyncFollowsWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
        }, ResyncFollowsWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
          var followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name, fullRest = currRest.concat(prevRest), restProd = new gast_public_1.Flat({
            definition: fullRest
          }), t_in_topProd_follows = first_1.first(restProd);
          this.follows[followName] = t_in_topProd_follows;
        }, ResyncFollowsWalker2;
      }(rest_1.RestWalker)
    );
    exports2.ResyncFollowsWalker = ResyncFollowsWalker;
    function computeAllProdsFollows(topProductions) {
      var reSyncFollows = {};
      return utils_1.forEach(topProductions, function(topProd) {
        var currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
        utils_1.assign(reSyncFollows, currRefsFollow);
      }), reSyncFollows;
    }
    exports2.computeAllProdsFollows = computeAllProdsFollows;
    function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
      return inner.name + occurenceInParent + constants_1.IN;
    }
    exports2.buildBetweenProdsFollowPrefix = buildBetweenProdsFollowPrefix;
    function buildInProdFollowPrefix(terminal) {
      var terminalName = terminal.terminalType.name;
      return terminalName + terminal.idx + constants_1.IN;
    }
    exports2.buildInProdFollowPrefix = buildInProdFollowPrefix;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/keys.js
var require_keys = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/keys.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.BITS_FOR_METHOD_TYPE = 4;
    exports2.BITS_FOR_OCCURRENCE_IDX = 8;
    exports2.BITS_FOR_RULE_IDX = 12;
    exports2.BITS_FOR_ALT_IDX = 8;
    exports2.OR_IDX = 1 << exports2.BITS_FOR_OCCURRENCE_IDX;
    exports2.OPTION_IDX = 2 << exports2.BITS_FOR_OCCURRENCE_IDX;
    exports2.MANY_IDX = 3 << exports2.BITS_FOR_OCCURRENCE_IDX;
    exports2.AT_LEAST_ONE_IDX = 4 << exports2.BITS_FOR_OCCURRENCE_IDX;
    exports2.MANY_SEP_IDX = 5 << exports2.BITS_FOR_OCCURRENCE_IDX;
    exports2.AT_LEAST_ONE_SEP_IDX = 6 << exports2.BITS_FOR_OCCURRENCE_IDX;
    function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
      return occurrence | dslMethodIdx | ruleIdx;
    }
    exports2.getKeyForAutomaticLookahead = getKeyForAutomaticLookahead;
    var BITS_START_FOR_ALT_IDX = 32 - exports2.BITS_FOR_ALT_IDX;
    function getKeyForAltIndex(ruleIdx, dslMethodIdx, occurrence, altIdx) {
      var altIdxBitMap = altIdx + 1 << BITS_START_FOR_ALT_IDX;
      return getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) | altIdxBitMap;
    }
    exports2.getKeyForAltIndex = getKeyForAltIndex;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/cst/cst.js
var require_cst = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/cst/cst.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), keys_1 = require_keys(), gast_public_1 = require_gast_public(), gast_visitor_public_1 = require_gast_visitor_public();
    function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
      isNaN(currNodeLocation.startOffset) === !0 ? (currNodeLocation.startOffset = newLocationInfo.startOffset, currNodeLocation.endOffset = newLocationInfo.endOffset) : currNodeLocation.endOffset < newLocationInfo.endOffset && (currNodeLocation.endOffset = newLocationInfo.endOffset);
    }
    exports2.setNodeLocationOnlyOffset = setNodeLocationOnlyOffset;
    function setNodeLocationFull(currNodeLocation, newLocationInfo) {
      isNaN(currNodeLocation.startOffset) === !0 ? (currNodeLocation.startOffset = newLocationInfo.startOffset, currNodeLocation.startColumn = newLocationInfo.startColumn, currNodeLocation.startLine = newLocationInfo.startLine, currNodeLocation.endOffset = newLocationInfo.endOffset, currNodeLocation.endColumn = newLocationInfo.endColumn, currNodeLocation.endLine = newLocationInfo.endLine) : currNodeLocation.endOffset < newLocationInfo.endOffset && (currNodeLocation.endOffset = newLocationInfo.endOffset, currNodeLocation.endColumn = newLocationInfo.endColumn, currNodeLocation.endLine = newLocationInfo.endLine);
    }
    exports2.setNodeLocationFull = setNodeLocationFull;
    function addTerminalToCst(node, token, tokenTypeName) {
      node.children[tokenTypeName] === void 0 ? node.children[tokenTypeName] = [token] : node.children[tokenTypeName].push(token);
    }
    exports2.addTerminalToCst = addTerminalToCst;
    function addNoneTerminalToCst(node, ruleName, ruleResult) {
      node.children[ruleName] === void 0 ? node.children[ruleName] = [ruleResult] : node.children[ruleName].push(ruleResult);
    }
    exports2.addNoneTerminalToCst = addNoneTerminalToCst;
    var NamedDSLMethodsCollectorVisitor = (
      /** @class */
      function(_super) {
        __extends(NamedDSLMethodsCollectorVisitor2, _super);
        function NamedDSLMethodsCollectorVisitor2(ruleIdx) {
          var _this = _super.call(this) || this;
          return _this.result = [], _this.ruleIdx = ruleIdx, _this;
        }
        return NamedDSLMethodsCollectorVisitor2.prototype.collectNamedDSLMethod = function(node, newNodeConstructor, methodIdx) {
          if (!utils_1.isUndefined(node.name)) {
            var nameLessNode = void 0;
            if (node instanceof gast_public_1.Option || node instanceof gast_public_1.Repetition || node instanceof gast_public_1.RepetitionMandatory || node instanceof gast_public_1.Alternation)
              nameLessNode = new newNodeConstructor({
                definition: node.definition,
                idx: node.idx
              });
            else if (node instanceof gast_public_1.RepetitionMandatoryWithSeparator || node instanceof gast_public_1.RepetitionWithSeparator)
              nameLessNode = new newNodeConstructor({
                definition: node.definition,
                idx: node.idx,
                separator: node.separator
              });
            else
              throw Error("non exhaustive match");
            var def = [nameLessNode], key = keys_1.getKeyForAutomaticLookahead(this.ruleIdx, methodIdx, node.idx);
            this.result.push({
              def: def,
              key: key,
              name: node.name,
              orgProd: node
            });
          }
        }, NamedDSLMethodsCollectorVisitor2.prototype.visitOption = function(node) {
          this.collectNamedDSLMethod(node, gast_public_1.Option, keys_1.OPTION_IDX);
        }, NamedDSLMethodsCollectorVisitor2.prototype.visitRepetition = function(node) {
          this.collectNamedDSLMethod(node, gast_public_1.Repetition, keys_1.MANY_IDX);
        }, NamedDSLMethodsCollectorVisitor2.prototype.visitRepetitionMandatory = function(node) {
          this.collectNamedDSLMethod(node, gast_public_1.RepetitionMandatory, keys_1.AT_LEAST_ONE_IDX);
        }, NamedDSLMethodsCollectorVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
          this.collectNamedDSLMethod(node, gast_public_1.RepetitionMandatoryWithSeparator, keys_1.AT_LEAST_ONE_SEP_IDX);
        }, NamedDSLMethodsCollectorVisitor2.prototype.visitRepetitionWithSeparator = function(node) {
          this.collectNamedDSLMethod(node, gast_public_1.RepetitionWithSeparator, keys_1.MANY_SEP_IDX);
        }, NamedDSLMethodsCollectorVisitor2.prototype.visitAlternation = function(node) {
          var _this = this;
          this.collectNamedDSLMethod(node, gast_public_1.Alternation, keys_1.OR_IDX);
          var hasMoreThanOneAlternative = node.definition.length > 1;
          utils_1.forEach(node.definition, function(currFlatAlt, altIdx) {
            if (!utils_1.isUndefined(currFlatAlt.name)) {
              var def = currFlatAlt.definition;
              hasMoreThanOneAlternative ? def = [new gast_public_1.Option({
                definition: currFlatAlt.definition
              })] : def = currFlatAlt.definition;
              var key = keys_1.getKeyForAltIndex(_this.ruleIdx, keys_1.OR_IDX, node.idx, altIdx);
              _this.result.push({
                def: def,
                key: key,
                name: currFlatAlt.name,
                orgProd: currFlatAlt
              });
            }
          });
        }, NamedDSLMethodsCollectorVisitor2;
      }(gast_visitor_public_1.GAstVisitor)
    );
    exports2.NamedDSLMethodsCollectorVisitor = NamedDSLMethodsCollectorVisitor;
    function expandAllNestedRuleNames(topRules, fullToShortName) {
      var result = {
        allRuleNames: []
      };
      return utils_1.forEach(topRules, function(currTopRule) {
        var currTopRuleShortName = fullToShortName[currTopRule.name];
        result.allRuleNames.push(currTopRule.name);
        var namedCollectorVisitor = new NamedDSLMethodsCollectorVisitor(currTopRuleShortName);
        currTopRule.accept(namedCollectorVisitor), utils_1.forEach(namedCollectorVisitor.result, function(_a) {
          var def = _a.def, key = _a.key, name = _a.name;
          result.allRuleNames.push(currTopRule.name + name);
        });
      }), result;
    }
    exports2.expandAllNestedRuleNames = expandAllNestedRuleNames;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/interpreter.js
var require_interpreter = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/interpreter.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var rest_1 = require_rest(), utils_1 = require_utils(), first_1 = require_first(), gast_public_1 = require_gast_public(), AbstractNextPossibleTokensWalker = (
      /** @class */
      function(_super) {
        __extends(AbstractNextPossibleTokensWalker2, _super);
        function AbstractNextPossibleTokensWalker2(topProd, path) {
          var _this = _super.call(this) || this;
          return _this.topProd = topProd, _this.path = path, _this.possibleTokTypes = [], _this.nextProductionName = "", _this.nextProductionOccurrence = 0, _this.found = !1, _this.isAtEndOfPath = !1, _this;
        }
        return AbstractNextPossibleTokensWalker2.prototype.startWalking = function() {
          if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
            throw Error("The path does not start with the walker's top Rule!");
          return this.ruleStack = utils_1.cloneArr(this.path.ruleStack).reverse(), this.occurrenceStack = utils_1.cloneArr(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
        }, AbstractNextPossibleTokensWalker2.prototype.walk = function(prod, prevRest) {
          prevRest === void 0 && (prevRest = []), this.found || _super.prototype.walk.call(this, prod, prevRest);
        }, AbstractNextPossibleTokensWalker2.prototype.walkProdRef = function(refProd, currRest, prevRest) {
          if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
            var fullRest = currRest.concat(prevRest);
            this.updateExpectedNext(), this.walk(refProd.referencedRule, fullRest);
          }
        }, AbstractNextPossibleTokensWalker2.prototype.updateExpectedNext = function() {
          utils_1.isEmpty(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
        }, AbstractNextPossibleTokensWalker2;
      }(rest_1.RestWalker)
    );
    exports2.AbstractNextPossibleTokensWalker = AbstractNextPossibleTokensWalker;
    var NextAfterTokenWalker = (
      /** @class */
      function(_super) {
        __extends(NextAfterTokenWalker2, _super);
        function NextAfterTokenWalker2(topProd, path) {
          var _this = _super.call(this, topProd, path) || this;
          return _this.path = path, _this.nextTerminalName = "", _this.nextTerminalOccurrence = 0, _this.nextTerminalName = _this.path.lastTok.name, _this.nextTerminalOccurrence = _this.path.lastTokOccurrence, _this;
        }
        return NextAfterTokenWalker2.prototype.walkTerminal = function(terminal, currRest, prevRest) {
          if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
            var fullRest = currRest.concat(prevRest), restProd = new gast_public_1.Flat({
              definition: fullRest
            });
            this.possibleTokTypes = first_1.first(restProd), this.found = !0;
          }
        }, NextAfterTokenWalker2;
      }(AbstractNextPossibleTokensWalker)
    );
    exports2.NextAfterTokenWalker = NextAfterTokenWalker;
    var AbstractNextTerminalAfterProductionWalker = (
      /** @class */
      function(_super) {
        __extends(AbstractNextTerminalAfterProductionWalker2, _super);
        function AbstractNextTerminalAfterProductionWalker2(topRule, occurrence) {
          var _this = _super.call(this) || this;
          return _this.topRule = topRule, _this.occurrence = occurrence, _this.result = {
            token: void 0,
            occurrence: void 0,
            isEndOfRule: void 0
          }, _this;
        }
        return AbstractNextTerminalAfterProductionWalker2.prototype.startWalking = function() {
          return this.walk(this.topRule), this.result;
        }, AbstractNextTerminalAfterProductionWalker2;
      }(rest_1.RestWalker)
    );
    exports2.AbstractNextTerminalAfterProductionWalker = AbstractNextTerminalAfterProductionWalker;
    var NextTerminalAfterManyWalker = (
      /** @class */
      function(_super) {
        __extends(NextTerminalAfterManyWalker2, _super);
        function NextTerminalAfterManyWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return NextTerminalAfterManyWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
          if (manyProd.idx === this.occurrence) {
            var firstAfterMany = utils_1.first(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterMany === void 0, firstAfterMany instanceof gast_public_1.Terminal && (this.result.token = firstAfterMany.terminalType, this.result.occurrence = firstAfterMany.idx);
          } else
            _super.prototype.walkMany.call(this, manyProd, currRest, prevRest);
        }, NextTerminalAfterManyWalker2;
      }(AbstractNextTerminalAfterProductionWalker)
    );
    exports2.NextTerminalAfterManyWalker = NextTerminalAfterManyWalker;
    var NextTerminalAfterManySepWalker = (
      /** @class */
      function(_super) {
        __extends(NextTerminalAfterManySepWalker2, _super);
        function NextTerminalAfterManySepWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return NextTerminalAfterManySepWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
          if (manySepProd.idx === this.occurrence) {
            var firstAfterManySep = utils_1.first(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterManySep === void 0, firstAfterManySep instanceof gast_public_1.Terminal && (this.result.token = firstAfterManySep.terminalType, this.result.occurrence = firstAfterManySep.idx);
          } else
            _super.prototype.walkManySep.call(this, manySepProd, currRest, prevRest);
        }, NextTerminalAfterManySepWalker2;
      }(AbstractNextTerminalAfterProductionWalker)
    );
    exports2.NextTerminalAfterManySepWalker = NextTerminalAfterManySepWalker;
    var NextTerminalAfterAtLeastOneWalker = (
      /** @class */
      function(_super) {
        __extends(NextTerminalAfterAtLeastOneWalker2, _super);
        function NextTerminalAfterAtLeastOneWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return NextTerminalAfterAtLeastOneWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
          if (atLeastOneProd.idx === this.occurrence) {
            var firstAfterAtLeastOne = utils_1.first(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterAtLeastOne === void 0, firstAfterAtLeastOne instanceof gast_public_1.Terminal && (this.result.token = firstAfterAtLeastOne.terminalType, this.result.occurrence = firstAfterAtLeastOne.idx);
          } else
            _super.prototype.walkAtLeastOne.call(this, atLeastOneProd, currRest, prevRest);
        }, NextTerminalAfterAtLeastOneWalker2;
      }(AbstractNextTerminalAfterProductionWalker)
    );
    exports2.NextTerminalAfterAtLeastOneWalker = NextTerminalAfterAtLeastOneWalker;
    var NextTerminalAfterAtLeastOneSepWalker = (
      /** @class */
      function(_super) {
        __extends(NextTerminalAfterAtLeastOneSepWalker2, _super);
        function NextTerminalAfterAtLeastOneSepWalker2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        return NextTerminalAfterAtLeastOneSepWalker2.prototype.walkAtLeastOneSep = function(atleastOneSepProd, currRest, prevRest) {
          if (atleastOneSepProd.idx === this.occurrence) {
            var firstAfterfirstAfterAtLeastOneSep = utils_1.first(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === void 0, firstAfterfirstAfterAtLeastOneSep instanceof gast_public_1.Terminal && (this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType, this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx);
          } else
            _super.prototype.walkAtLeastOneSep.call(this, atleastOneSepProd, currRest, prevRest);
        }, NextTerminalAfterAtLeastOneSepWalker2;
      }(AbstractNextTerminalAfterProductionWalker)
    );
    exports2.NextTerminalAfterAtLeastOneSepWalker = NextTerminalAfterAtLeastOneSepWalker;
    function possiblePathsFrom(targetDef, maxLength, currPath) {
      currPath === void 0 && (currPath = []), currPath = utils_1.cloneArr(currPath);
      var result = [], i = 0;
      function remainingPathWith(nextDef) {
        return nextDef.concat(utils_1.drop(targetDef, i + 1));
      }
      function getAlternativesForProd(definition) {
        var alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
        return result.concat(alternatives);
      }
      for (; currPath.length < maxLength && i < targetDef.length; ) {
        var prod = targetDef[i];
        if (prod instanceof gast_public_1.Flat)
          return getAlternativesForProd(prod.definition);
        if (prod instanceof gast_public_1.NonTerminal)
          return getAlternativesForProd(prod.definition);
        if (prod instanceof gast_public_1.Option)
          result = getAlternativesForProd(prod.definition);
        else if (prod instanceof gast_public_1.RepetitionMandatory) {
          var newDef = prod.definition.concat([new gast_public_1.Repetition({
            definition: prod.definition
          })]);
          return getAlternativesForProd(newDef);
        } else if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator) {
          var newDef = [new gast_public_1.Flat({
            definition: prod.definition
          }), new gast_public_1.Repetition({
            definition: [new gast_public_1.Terminal({
              terminalType: prod.separator
            })].concat(prod.definition)
          })];
          return getAlternativesForProd(newDef);
        } else if (prod instanceof gast_public_1.RepetitionWithSeparator) {
          var newDef = prod.definition.concat([new gast_public_1.Repetition({
            definition: [new gast_public_1.Terminal({
              terminalType: prod.separator
            })].concat(prod.definition)
          })]);
          result = getAlternativesForProd(newDef);
        } else if (prod instanceof gast_public_1.Repetition) {
          var newDef = prod.definition.concat([new gast_public_1.Repetition({
            definition: prod.definition
          })]);
          result = getAlternativesForProd(newDef);
        } else {
          if (prod instanceof gast_public_1.Alternation)
            return utils_1.forEach(prod.definition, function(currAlt) {
              result = getAlternativesForProd(currAlt.definition);
            }), result;
          if (prod instanceof gast_public_1.Terminal)
            currPath.push(prod.terminalType);
          else
            throw Error("non exhaustive match");
        }
        i++;
      }
      return result.push({
        partialPath: currPath,
        suffixDef: utils_1.drop(targetDef, i)
      }), result;
    }
    exports2.possiblePathsFrom = possiblePathsFrom;
    function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
      var EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL", EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL], EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE", foundCompletePath = !1, tokenVectorLength = tokenVector.length, minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1, result = [], possiblePaths = [];
      for (possiblePaths.push({
        idx: -1,
        def: initialDef,
        ruleStack: [],
        occurrenceStack: []
      }); !utils_1.isEmpty(possiblePaths); ) {
        var currPath = possiblePaths.pop();
        if (currPath === EXIT_ALTERNATIVE) {
          foundCompletePath && utils_1.last(possiblePaths).idx <= minimalAlternativesIndex && possiblePaths.pop();
          continue;
        }
        var currDef = currPath.def, currIdx = currPath.idx, currRuleStack = currPath.ruleStack, currOccurrenceStack = currPath.occurrenceStack;
        if (!utils_1.isEmpty(currDef)) {
          var prod = currDef[0];
          if (prod === EXIT_NON_TERMINAL) {
            var nextPath = {
              idx: currIdx,
              def: utils_1.drop(currDef),
              ruleStack: utils_1.dropRight(currRuleStack),
              occurrenceStack: utils_1.dropRight(currOccurrenceStack)
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_public_1.Terminal)
            if (currIdx < tokenVectorLength - 1) {
              var nextIdx = currIdx + 1, actualToken = tokenVector[nextIdx];
              if (tokMatcher(actualToken, prod.terminalType)) {
                var nextPath = {
                  idx: nextIdx,
                  def: utils_1.drop(currDef),
                  ruleStack: currRuleStack,
                  occurrenceStack: currOccurrenceStack
                };
                possiblePaths.push(nextPath);
              }
            } else if (currIdx === tokenVectorLength - 1)
              result.push({
                nextTokenType: prod.terminalType,
                nextTokenOccurrence: prod.idx,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
              }), foundCompletePath = !0;
            else
              throw Error("non exhaustive match");
          else if (prod instanceof gast_public_1.NonTerminal) {
            var newRuleStack = utils_1.cloneArr(currRuleStack);
            newRuleStack.push(prod.nonTerminalName);
            var newOccurrenceStack = utils_1.cloneArr(currOccurrenceStack);
            newOccurrenceStack.push(prod.idx);
            var nextPath = {
              idx: currIdx,
              def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, utils_1.drop(currDef)),
              ruleStack: newRuleStack,
              occurrenceStack: newOccurrenceStack
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_public_1.Option) {
            var nextPathWithout = {
              idx: currIdx,
              def: utils_1.drop(currDef),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout), possiblePaths.push(EXIT_ALTERNATIVE);
            var nextPathWith = {
              idx: currIdx,
              def: prod.definition.concat(utils_1.drop(currDef)),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
          } else if (prod instanceof gast_public_1.RepetitionMandatory) {
            var secondIteration = new gast_public_1.Repetition({
              definition: prod.definition,
              idx: prod.idx
            }), nextDef = prod.definition.concat([secondIteration], utils_1.drop(currDef)), nextPath = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator) {
            var separatorGast = new gast_public_1.Terminal({
              terminalType: prod.separator
            }), secondIteration = new gast_public_1.Repetition({
              definition: [separatorGast].concat(prod.definition),
              idx: prod.idx
            }), nextDef = prod.definition.concat([secondIteration], utils_1.drop(currDef)), nextPath = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
          } else if (prod instanceof gast_public_1.RepetitionWithSeparator) {
            var nextPathWithout = {
              idx: currIdx,
              def: utils_1.drop(currDef),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout), possiblePaths.push(EXIT_ALTERNATIVE);
            var separatorGast = new gast_public_1.Terminal({
              terminalType: prod.separator
            }), nthRepetition = new gast_public_1.Repetition({
              definition: [separatorGast].concat(prod.definition),
              idx: prod.idx
            }), nextDef = prod.definition.concat([nthRepetition], utils_1.drop(currDef)), nextPathWith = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
          } else if (prod instanceof gast_public_1.Repetition) {
            var nextPathWithout = {
              idx: currIdx,
              def: utils_1.drop(currDef),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout), possiblePaths.push(EXIT_ALTERNATIVE);
            var nthRepetition = new gast_public_1.Repetition({
              definition: prod.definition,
              idx: prod.idx
            }), nextDef = prod.definition.concat([nthRepetition], utils_1.drop(currDef)), nextPathWith = {
              idx: currIdx,
              def: nextDef,
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
          } else if (prod instanceof gast_public_1.Alternation)
            for (var i = prod.definition.length - 1; i >= 0; i--) {
              var currAlt = prod.definition[i], currAltPath = {
                idx: currIdx,
                def: currAlt.definition.concat(utils_1.drop(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
              };
              possiblePaths.push(currAltPath), possiblePaths.push(EXIT_ALTERNATIVE);
            }
          else if (prod instanceof gast_public_1.Flat)
            possiblePaths.push({
              idx: currIdx,
              def: prod.definition.concat(utils_1.drop(currDef)),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            });
          else if (prod instanceof gast_public_1.Rule)
            possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
          else
            throw Error("non exhaustive match");
        }
      }
      return result;
    }
    exports2.nextPossibleTokensAfter = nextPossibleTokensAfter;
    function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
      var newRuleStack = utils_1.cloneArr(currRuleStack);
      newRuleStack.push(topRule.name);
      var newCurrOccurrenceStack = utils_1.cloneArr(currOccurrenceStack);
      return newCurrOccurrenceStack.push(1), {
        idx: currIdx,
        def: topRule.definition,
        ruleStack: newRuleStack,
        occurrenceStack: newCurrOccurrenceStack
      };
    }
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/lookahead.js
var require_lookahead = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/lookahead.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), interpreter_1 = require_interpreter(), rest_1 = require_rest(), tokens_1 = require_tokens(), gast_public_1 = require_gast_public(), gast_visitor_public_1 = require_gast_visitor_public(), PROD_TYPE;
    (function(PROD_TYPE2) {
      PROD_TYPE2[PROD_TYPE2.OPTION = 0] = "OPTION", PROD_TYPE2[PROD_TYPE2.REPETITION = 1] = "REPETITION", PROD_TYPE2[PROD_TYPE2.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", PROD_TYPE2[PROD_TYPE2.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", PROD_TYPE2[PROD_TYPE2.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", PROD_TYPE2[PROD_TYPE2.ALTERNATION = 5] = "ALTERNATION";
    })(PROD_TYPE = exports2.PROD_TYPE || (exports2.PROD_TYPE = {}));
    function getProdType(prod) {
      if (prod instanceof gast_public_1.Option)
        return PROD_TYPE.OPTION;
      if (prod instanceof gast_public_1.Repetition)
        return PROD_TYPE.REPETITION;
      if (prod instanceof gast_public_1.RepetitionMandatory)
        return PROD_TYPE.REPETITION_MANDATORY;
      if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator)
        return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
      if (prod instanceof gast_public_1.RepetitionWithSeparator)
        return PROD_TYPE.REPETITION_WITH_SEPARATOR;
      if (prod instanceof gast_public_1.Alternation)
        return PROD_TYPE.ALTERNATION;
      throw Error("non exhaustive match");
    }
    exports2.getProdType = getProdType;
    function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
      var lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead), tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths) ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
      return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher, dynamicTokensEnabled);
    }
    exports2.buildLookaheadFuncForOr = buildLookaheadFuncForOr;
    function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
      var lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k), tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths) ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher;
      return lookaheadBuilder(lookAheadPaths[0], tokenMatcher, dynamicTokensEnabled);
    }
    exports2.buildLookaheadFuncForOptionalProd = buildLookaheadFuncForOptionalProd;
    function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
      var numOfAlts = alts.length, areAllOneTokenLookahead = utils_1.every(alts, function(currAlt) {
        return utils_1.every(currAlt, function(currPath) {
          return currPath.length === 1;
        });
      });
      if (hasPredicates)
        return function(orAlts) {
          for (var predicates = utils_1.map(orAlts, function(currAlt2) {
            return currAlt2.GATE;
          }), t = 0; t < numOfAlts; t++) {
            var currAlt = alts[t], currNumOfPaths = currAlt.length, currPredicate = predicates[t];
            if (!(currPredicate !== void 0 && currPredicate.call(this) === !1))
              nextPath:
                for (var j = 0; j < currNumOfPaths; j++) {
                  for (var currPath = currAlt[j], currPathLength = currPath.length, i = 0; i < currPathLength; i++) {
                    var nextToken = this.LA(i + 1);
                    if (tokenMatcher(nextToken, currPath[i]) === !1)
                      continue nextPath;
                  }
                  return t;
                }
          }
        };
      if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        var singleTokenAlts = utils_1.map(alts, function(currAlt) {
          return utils_1.flatten(currAlt);
        }), choiceToAlt_1 = utils_1.reduce(singleTokenAlts, function(result, currAlt, idx) {
          return utils_1.forEach(currAlt, function(currTokType) {
            utils_1.has(result, currTokType.tokenTypeIdx) || (result[currTokType.tokenTypeIdx] = idx), utils_1.forEach(currTokType.categoryMatches, function(currExtendingType) {
              utils_1.has(result, currExtendingType) || (result[currExtendingType] = idx);
            });
          }), result;
        }, []);
        return function() {
          var nextToken = this.LA(1);
          return choiceToAlt_1[nextToken.tokenTypeIdx];
        };
      } else
        return function() {
          for (var t = 0; t < numOfAlts; t++) {
            var currAlt = alts[t], currNumOfPaths = currAlt.length;
            nextPath:
              for (var j = 0; j < currNumOfPaths; j++) {
                for (var currPath = currAlt[j], currPathLength = currPath.length, i = 0; i < currPathLength; i++) {
                  var nextToken = this.LA(i + 1);
                  if (tokenMatcher(nextToken, currPath[i]) === !1)
                    continue nextPath;
                }
                return t;
              }
          }
        };
    }
    exports2.buildAlternativesLookAheadFunc = buildAlternativesLookAheadFunc;
    function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled) {
      var areAllOneTokenLookahead = utils_1.every(alt, function(currPath) {
        return currPath.length === 1;
      }), numOfPaths = alt.length;
      if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        var singleTokensTypes = utils_1.flatten(alt);
        if (singleTokensTypes.length === 1 && utils_1.isEmpty(singleTokensTypes[0].categoryMatches)) {
          var expectedTokenType = singleTokensTypes[0], expectedTokenUniqueKey_1 = expectedTokenType.tokenTypeIdx;
          return function() {
            return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey_1;
          };
        } else {
          var choiceToAlt_2 = utils_1.reduce(singleTokensTypes, function(result, currTokType, idx) {
            return result[currTokType.tokenTypeIdx] = !0, utils_1.forEach(currTokType.categoryMatches, function(currExtendingType) {
              result[currExtendingType] = !0;
            }), result;
          }, []);
          return function() {
            var nextToken = this.LA(1);
            return choiceToAlt_2[nextToken.tokenTypeIdx] === !0;
          };
        }
      } else
        return function() {
          nextPath:
            for (var j = 0; j < numOfPaths; j++) {
              for (var currPath = alt[j], currPathLength = currPath.length, i = 0; i < currPathLength; i++) {
                var nextToken = this.LA(i + 1);
                if (tokenMatcher(nextToken, currPath[i]) === !1)
                  continue nextPath;
              }
              return !0;
            }
          return !1;
        };
    }
    exports2.buildSingleAlternativeLookaheadFunction = buildSingleAlternativeLookaheadFunction;
    var RestDefinitionFinderWalker = (
      /** @class */
      function(_super) {
        __extends(RestDefinitionFinderWalker2, _super);
        function RestDefinitionFinderWalker2(topProd, targetOccurrence, targetProdType) {
          var _this = _super.call(this) || this;
          return _this.topProd = topProd, _this.targetOccurrence = targetOccurrence, _this.targetProdType = targetProdType, _this;
        }
        return RestDefinitionFinderWalker2.prototype.startWalking = function() {
          return this.walk(this.topProd), this.restDef;
        }, RestDefinitionFinderWalker2.prototype.checkIsTarget = function(node, expectedProdType, currRest, prevRest) {
          return node.idx === this.targetOccurrence && this.targetProdType === expectedProdType ? (this.restDef = currRest.concat(prevRest), !0) : !1;
        }, RestDefinitionFinderWalker2.prototype.walkOption = function(optionProd, currRest, prevRest) {
          this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest) || _super.prototype.walkOption.call(this, optionProd, currRest, prevRest);
        }, RestDefinitionFinderWalker2.prototype.walkAtLeastOne = function(atLeastOneProd, currRest, prevRest) {
          this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest) || _super.prototype.walkOption.call(this, atLeastOneProd, currRest, prevRest);
        }, RestDefinitionFinderWalker2.prototype.walkAtLeastOneSep = function(atLeastOneSepProd, currRest, prevRest) {
          this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest) || _super.prototype.walkOption.call(this, atLeastOneSepProd, currRest, prevRest);
        }, RestDefinitionFinderWalker2.prototype.walkMany = function(manyProd, currRest, prevRest) {
          this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest) || _super.prototype.walkOption.call(this, manyProd, currRest, prevRest);
        }, RestDefinitionFinderWalker2.prototype.walkManySep = function(manySepProd, currRest, prevRest) {
          this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest) || _super.prototype.walkOption.call(this, manySepProd, currRest, prevRest);
        }, RestDefinitionFinderWalker2;
      }(rest_1.RestWalker)
    ), InsideDefinitionFinderVisitor = (
      /** @class */
      function(_super) {
        __extends(InsideDefinitionFinderVisitor2, _super);
        function InsideDefinitionFinderVisitor2(targetOccurrence, targetProdType, targetRef) {
          var _this = _super.call(this) || this;
          return _this.targetOccurrence = targetOccurrence, _this.targetProdType = targetProdType, _this.targetRef = targetRef, _this.result = [], _this;
        }
        return InsideDefinitionFinderVisitor2.prototype.checkIsTarget = function(node, expectedProdName) {
          node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === void 0 || node === this.targetRef) && (this.result = node.definition);
        }, InsideDefinitionFinderVisitor2.prototype.visitOption = function(node) {
          this.checkIsTarget(node, PROD_TYPE.OPTION);
        }, InsideDefinitionFinderVisitor2.prototype.visitRepetition = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION);
        }, InsideDefinitionFinderVisitor2.prototype.visitRepetitionMandatory = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
        }, InsideDefinitionFinderVisitor2.prototype.visitRepetitionMandatoryWithSeparator = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
        }, InsideDefinitionFinderVisitor2.prototype.visitRepetitionWithSeparator = function(node) {
          this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
        }, InsideDefinitionFinderVisitor2.prototype.visitAlternation = function(node) {
          this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
        }, InsideDefinitionFinderVisitor2;
      }(gast_visitor_public_1.GAstVisitor)
    );
    function initializeArrayOfArrays(size) {
      for (var result = new Array(size), i = 0; i < size; i++)
        result[i] = [];
      return result;
    }
    function pathToHashKeys(path) {
      for (var keys2 = [""], i = 0; i < path.length; i++) {
        for (var tokType = path[i], longerKeys = [], j = 0; j < keys2.length; j++) {
          var currShorterKey = keys2[j];
          longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
          for (var t = 0; t < tokType.categoryMatches.length; t++) {
            var categoriesKeySuffix = "_" + tokType.categoryMatches[t];
            longerKeys.push(currShorterKey + categoriesKeySuffix);
          }
        }
        keys2 = longerKeys;
      }
      return keys2;
    }
    function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
      for (var currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++)
        if (currAltIdx !== idx)
          for (var otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx], searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
            var searchKey = searchPathKeys[searchIdx];
            if (otherAltKnownPathsKeys[searchKey] === !0)
              return !1;
          }
      return !0;
    }
    function lookAheadSequenceFromAlternatives(altsDefs, k) {
      for (var partialAlts = utils_1.map(altsDefs, function(currAlt) {
        return interpreter_1.possiblePathsFrom([currAlt], 1);
      }), finalResult = initializeArrayOfArrays(partialAlts.length), altsHashes = utils_1.map(partialAlts, function(currAltPaths) {
        var dict = {};
        return utils_1.forEach(currAltPaths, function(item) {
          var keys2 = pathToHashKeys(item.partialPath);
          utils_1.forEach(keys2, function(currKey) {
            dict[currKey] = !0;
          });
        }), dict;
      }), newData = partialAlts, pathLength = 1; pathLength <= k; pathLength++) {
        var currDataset = newData;
        newData = initializeArrayOfArrays(currDataset.length);
        for (var _loop_1 = function(altIdx2) {
          for (var currAltPathsAndSuffixes = currDataset[altIdx2], currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
            var currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath, suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef, prefixKeys = pathToHashKeys(currPathPrefix), isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx2);
            if (isUnique || utils_1.isEmpty(suffixDef) || currPathPrefix.length === k) {
              var currAltResult = finalResult[altIdx2];
              if (containsPath(currAltResult, currPathPrefix) === !1) {
                currAltResult.push(currPathPrefix);
                for (var j = 0; j < prefixKeys.length; j++) {
                  var currKey = prefixKeys[j];
                  altsHashes[altIdx2][currKey] = !0;
                }
              }
            } else {
              var newPartialPathsAndSuffixes = interpreter_1.possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
              newData[altIdx2] = newData[altIdx2].concat(newPartialPathsAndSuffixes), utils_1.forEach(newPartialPathsAndSuffixes, function(item) {
                var prefixKeys2 = pathToHashKeys(item.partialPath);
                utils_1.forEach(prefixKeys2, function(key) {
                  altsHashes[altIdx2][key] = !0;
                });
              });
            }
          }
        }, altIdx = 0; altIdx < currDataset.length; altIdx++)
          _loop_1(altIdx);
      }
      return finalResult;
    }
    exports2.lookAheadSequenceFromAlternatives = lookAheadSequenceFromAlternatives;
    function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
      var visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
      return ruleGrammar.accept(visitor), lookAheadSequenceFromAlternatives(visitor.result, k);
    }
    exports2.getLookaheadPathsForOr = getLookaheadPathsForOr;
    function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
      var insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
      ruleGrammar.accept(insideDefVisitor);
      var insideDef = insideDefVisitor.result, afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType), afterDef = afterDefWalker.startWalking(), insideFlat = new gast_public_1.Flat({
        definition: insideDef
      }), afterFlat = new gast_public_1.Flat({
        definition: afterDef
      });
      return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
    }
    exports2.getLookaheadPathsForOptionalProd = getLookaheadPathsForOptionalProd;
    function containsPath(alternative, searchPath) {
      compareOtherPath:
        for (var i = 0; i < alternative.length; i++) {
          var otherPath = alternative[i];
          if (otherPath.length === searchPath.length) {
            for (var j = 0; j < otherPath.length; j++) {
              var searchTok = searchPath[j], otherTok = otherPath[j], matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== void 0;
              if (matchingTokens === !1)
                continue compareOtherPath;
            }
            return !0;
          }
        }
      return !1;
    }
    exports2.containsPath = containsPath;
    function isStrictPrefixOfPath(prefix, other) {
      return prefix.length < other.length && utils_1.every(prefix, function(tokType, idx) {
        var otherTokType = other[idx];
        return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
      });
    }
    exports2.isStrictPrefixOfPath = isStrictPrefixOfPath;
    function areTokenCategoriesNotUsed(lookAheadPaths) {
      return utils_1.every(lookAheadPaths, function(singleAltPaths) {
        return utils_1.every(singleAltPaths, function(singlePath) {
          return utils_1.every(singlePath, function(token) {
            return utils_1.isEmpty(token.categoryMatches);
          });
        });
      });
    }
    exports2.areTokenCategoriesNotUsed = areTokenCategoriesNotUsed;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/checks.js
var require_checks = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/checks.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils = require_utils(), utils_1 = require_utils(), parser_1 = require_parser(), gast_1 = require_gast(), lookahead_1 = require_lookahead(), cst_1 = require_cst(), interpreter_1 = require_interpreter(), gast_public_1 = require_gast_public(), gast_visitor_public_1 = require_gast_visitor_public();
    function validateGrammar(topLevels, globalMaxLookahead, tokenTypes, ignoredIssues, errMsgProvider, grammarName) {
      var duplicateErrors = utils.map(topLevels, function(currTopLevel) {
        return validateDuplicateProductions(currTopLevel, errMsgProvider);
      }), leftRecursionErrors = utils.map(topLevels, function(currTopRule) {
        return validateNoLeftRecursion(currTopRule, currTopRule, errMsgProvider);
      }), emptyAltErrors = [], ambiguousAltsErrors = [], emptyRepetitionErrors = [];
      utils_1.every(leftRecursionErrors, utils_1.isEmpty) && (emptyAltErrors = utils_1.map(topLevels, function(currTopRule) {
        return validateEmptyOrAlternative(currTopRule, errMsgProvider);
      }), ambiguousAltsErrors = utils_1.map(topLevels, function(currTopRule) {
        return validateAmbiguousAlternationAlternatives(currTopRule, globalMaxLookahead, ignoredIssues, errMsgProvider);
      }), emptyRepetitionErrors = validateSomeNonEmptyLookaheadPath(topLevels, globalMaxLookahead, errMsgProvider));
      var termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider), tokenNameErrors = utils.map(tokenTypes, function(currTokType) {
        return validateTokenName(currTokType, errMsgProvider);
      }), nestedRulesNameErrors = validateNestedRulesNames(topLevels, errMsgProvider), nestedRulesDuplicateErrors = validateDuplicateNestedRules(topLevels, errMsgProvider), tooManyAltsErrors = utils_1.map(topLevels, function(curRule) {
        return validateTooManyAlts(curRule, errMsgProvider);
      }), ruleNameErrors = utils_1.map(topLevels, function(curRule) {
        return validateRuleName(curRule, errMsgProvider);
      }), duplicateRulesError = utils_1.map(topLevels, function(curRule) {
        return validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider);
      });
      return utils.flatten(duplicateErrors.concat(tokenNameErrors, nestedRulesNameErrors, nestedRulesDuplicateErrors, emptyRepetitionErrors, leftRecursionErrors, emptyAltErrors, ambiguousAltsErrors, termsNamespaceConflictErrors, tooManyAltsErrors, ruleNameErrors, duplicateRulesError));
    }
    exports2.validateGrammar = validateGrammar;
    function validateNestedRulesNames(topLevels, errMsgProvider) {
      var result = [];
      return utils_1.forEach(topLevels, function(curTopLevel) {
        var namedCollectorVisitor = new cst_1.NamedDSLMethodsCollectorVisitor("");
        curTopLevel.accept(namedCollectorVisitor);
        var nestedProds = utils_1.map(namedCollectorVisitor.result, function(currItem) {
          return currItem.orgProd;
        });
        result.push(utils_1.map(nestedProds, function(currNestedProd) {
          return validateNestedRuleName(curTopLevel, currNestedProd, errMsgProvider);
        }));
      }), utils_1.flatten(result);
    }
    function validateDuplicateProductions(topLevelRule, errMsgProvider) {
      var collectorVisitor = new OccurrenceValidationCollector();
      topLevelRule.accept(collectorVisitor);
      var allRuleProductions = collectorVisitor.allProductions, productionGroups = utils.groupBy(allRuleProductions, identifyProductionForDuplicates), duplicates = utils.pick(productionGroups, function(currGroup) {
        return currGroup.length > 1;
      }), errors = utils.map(utils.values(duplicates), function(currDuplicates) {
        var firstProd = utils.first(currDuplicates), msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates), dslName = gast_1.getProductionDslName(firstProd), defError = {
          message: msg,
          type: parser_1.ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
          ruleName: topLevelRule.name,
          dslName: dslName,
          occurrence: firstProd.idx
        }, param = getExtraProductionArgument(firstProd);
        return param && (defError.parameter = param), defError;
      });
      return errors;
    }
    function identifyProductionForDuplicates(prod) {
      return gast_1.getProductionDslName(prod) + "_#_" + prod.idx + "_#_" + getExtraProductionArgument(prod);
    }
    exports2.identifyProductionForDuplicates = identifyProductionForDuplicates;
    function getExtraProductionArgument(prod) {
      return prod instanceof gast_public_1.Terminal ? prod.terminalType.name : prod instanceof gast_public_1.NonTerminal ? prod.nonTerminalName : "";
    }
    var OccurrenceValidationCollector = (
      /** @class */
      function(_super) {
        __extends(OccurrenceValidationCollector2, _super);
        function OccurrenceValidationCollector2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          return _this.allProductions = [], _this;
        }
        return OccurrenceValidationCollector2.prototype.visitNonTerminal = function(subrule) {
          this.allProductions.push(subrule);
        }, OccurrenceValidationCollector2.prototype.visitOption = function(option) {
          this.allProductions.push(option);
        }, OccurrenceValidationCollector2.prototype.visitRepetitionWithSeparator = function(manySep) {
          this.allProductions.push(manySep);
        }, OccurrenceValidationCollector2.prototype.visitRepetitionMandatory = function(atLeastOne) {
          this.allProductions.push(atLeastOne);
        }, OccurrenceValidationCollector2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
          this.allProductions.push(atLeastOneSep);
        }, OccurrenceValidationCollector2.prototype.visitRepetition = function(many) {
          this.allProductions.push(many);
        }, OccurrenceValidationCollector2.prototype.visitAlternation = function(or) {
          this.allProductions.push(or);
        }, OccurrenceValidationCollector2.prototype.visitTerminal = function(terminal) {
          this.allProductions.push(terminal);
        }, OccurrenceValidationCollector2;
      }(gast_visitor_public_1.GAstVisitor)
    );
    exports2.OccurrenceValidationCollector = OccurrenceValidationCollector;
    exports2.validTermsPattern = /^[a-zA-Z_]\w*$/;
    exports2.validNestedRuleName = new RegExp(exports2.validTermsPattern.source.replace("^", "^\\$"));
    function validateRuleName(rule, errMsgProvider) {
      var errors = [], ruleName = rule.name;
      return ruleName.match(exports2.validTermsPattern) || errors.push({
        message: errMsgProvider.buildInvalidRuleNameError({
          topLevelRule: rule,
          expectedPattern: exports2.validTermsPattern
        }),
        type: parser_1.ParserDefinitionErrorType.INVALID_RULE_NAME,
        ruleName: ruleName
      }), errors;
    }
    exports2.validateRuleName = validateRuleName;
    function validateNestedRuleName(topLevel, nestedProd, errMsgProvider) {
      var errors = [], errMsg;
      return nestedProd.name.match(exports2.validNestedRuleName) || (errMsg = errMsgProvider.buildInvalidNestedRuleNameError(topLevel, nestedProd), errors.push({
        message: errMsg,
        type: parser_1.ParserDefinitionErrorType.INVALID_NESTED_RULE_NAME,
        ruleName: topLevel.name
      })), errors;
    }
    exports2.validateNestedRuleName = validateNestedRuleName;
    function validateTokenName(tokenType, errMsgProvider) {
      var errors = [], tokTypeName = tokenType.name;
      return tokTypeName.match(exports2.validTermsPattern) || errors.push({
        message: errMsgProvider.buildTokenNameError({
          tokenType: tokenType,
          expectedPattern: exports2.validTermsPattern
        }),
        type: parser_1.ParserDefinitionErrorType.INVALID_TOKEN_NAME
      }), errors;
    }
    exports2.validateTokenName = validateTokenName;
    function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
      var errors = [], occurrences = utils_1.reduce(allRules, function(result, curRule) {
        return curRule.name === rule.name ? result + 1 : result;
      }, 0);
      if (occurrences > 1) {
        var errMsg = errMsgProvider.buildDuplicateRuleNameError({
          topLevelRule: rule,
          grammarName: className
        });
        errors.push({
          message: errMsg,
          type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
          ruleName: rule.name
        });
      }
      return errors;
    }
    exports2.validateRuleDoesNotAlreadyExist = validateRuleDoesNotAlreadyExist;
    function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
      var errors = [], errMsg;
      return utils.contains(definedRulesNames, ruleName) || (errMsg = "Invalid rule override, rule: ->" + ruleName + "<- cannot be overridden in the grammar: ->" + className + "<-as it is not defined in any of the super grammars ", errors.push({
        message: errMsg,
        type: parser_1.ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
        ruleName: ruleName
      })), errors;
    }
    exports2.validateRuleIsOverridden = validateRuleIsOverridden;
    function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path) {
      path === void 0 && (path = []);
      var errors = [], nextNonTerminals = getFirstNoneTerminal(currRule.definition);
      if (utils.isEmpty(nextNonTerminals))
        return [];
      var ruleName = topRule.name, foundLeftRecursion = utils.contains(nextNonTerminals, topRule);
      foundLeftRecursion && errors.push({
        message: errMsgProvider.buildLeftRecursionError({
          topLevelRule: topRule,
          leftRecursionPath: path
        }),
        type: parser_1.ParserDefinitionErrorType.LEFT_RECURSION,
        ruleName: ruleName
      });
      var validNextSteps = utils.difference(nextNonTerminals, path.concat([topRule])), errorsFromNextSteps = utils.map(validNextSteps, function(currRefRule) {
        var newPath = utils.cloneArr(path);
        return newPath.push(currRefRule), validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
      });
      return errors.concat(utils.flatten(errorsFromNextSteps));
    }
    exports2.validateNoLeftRecursion = validateNoLeftRecursion;
    function getFirstNoneTerminal(definition) {
      var result = [];
      if (utils.isEmpty(definition))
        return result;
      var firstProd = utils.first(definition);
      if (firstProd instanceof gast_public_1.NonTerminal)
        result.push(firstProd.referencedRule);
      else if (firstProd instanceof gast_public_1.Flat || firstProd instanceof gast_public_1.Option || firstProd instanceof gast_public_1.RepetitionMandatory || firstProd instanceof gast_public_1.RepetitionMandatoryWithSeparator || firstProd instanceof gast_public_1.RepetitionWithSeparator || firstProd instanceof gast_public_1.Repetition)
        result = result.concat(getFirstNoneTerminal(firstProd.definition));
      else if (firstProd instanceof gast_public_1.Alternation)
        result = utils.flatten(utils.map(firstProd.definition, function(currSubDef) {
          return getFirstNoneTerminal(currSubDef.definition);
        }));
      else if (!(firstProd instanceof gast_public_1.Terminal))
        throw Error("non exhaustive match");
      var isFirstOptional = gast_1.isOptionalProd(firstProd), hasMore = definition.length > 1;
      if (isFirstOptional && hasMore) {
        var rest = utils.drop(definition);
        return result.concat(getFirstNoneTerminal(rest));
      } else
        return result;
    }
    exports2.getFirstNoneTerminal = getFirstNoneTerminal;
    var OrCollector = (
      /** @class */
      function(_super) {
        __extends(OrCollector2, _super);
        function OrCollector2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          return _this.alternations = [], _this;
        }
        return OrCollector2.prototype.visitAlternation = function(node) {
          this.alternations.push(node);
        }, OrCollector2;
      }(gast_visitor_public_1.GAstVisitor)
    );
    function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
      var orCollector = new OrCollector();
      topLevelRule.accept(orCollector);
      var ors = orCollector.alternations, errors = utils.reduce(ors, function(errors2, currOr) {
        var exceptLast = utils.dropRight(currOr.definition), currErrors = utils.map(exceptLast, function(currAlternative, currAltIdx) {
          var possibleFirstInAlt = interpreter_1.nextPossibleTokensAfter([currAlternative], [], null, 1);
          return utils.isEmpty(possibleFirstInAlt) ? {
            message: errMsgProvider.buildEmptyAlternationError({
              topLevelRule: topLevelRule,
              alternation: currOr,
              emptyChoiceIdx: currAltIdx
            }),
            type: parser_1.ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
            ruleName: topLevelRule.name,
            occurrence: currOr.idx,
            alternative: currAltIdx + 1
          } : null;
        });
        return errors2.concat(utils.compact(currErrors));
      }, []);
      return errors;
    }
    exports2.validateEmptyOrAlternative = validateEmptyOrAlternative;
    function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, ignoredIssues, errMsgProvider) {
      var orCollector = new OrCollector();
      topLevelRule.accept(orCollector);
      var ors = orCollector.alternations, ignoredIssuesForCurrentRule = ignoredIssues[topLevelRule.name];
      ignoredIssuesForCurrentRule && (ors = utils_1.reject(ors, function(currOr) {
        return ignoredIssuesForCurrentRule[gast_1.getProductionDslName(currOr) + (currOr.idx === 0 ? "" : currOr.idx)];
      })), ors = utils_1.reject(ors, function(currOr) {
        return currOr.ignoreAmbiguities === !0;
      });
      var errors = utils.reduce(ors, function(result, currOr) {
        var currOccurrence = currOr.idx, actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead, alternatives = lookahead_1.getLookaheadPathsForOr(currOccurrence, topLevelRule, actualMaxLookahead, currOr), altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider), altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        return result.concat(altsAmbiguityErrors, altsPrefixAmbiguityErrors);
      }, []);
      return errors;
    }
    exports2.validateAmbiguousAlternationAlternatives = validateAmbiguousAlternationAlternatives;
    var RepetionCollector = (
      /** @class */
      function(_super) {
        __extends(RepetionCollector2, _super);
        function RepetionCollector2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          return _this.allProductions = [], _this;
        }
        return RepetionCollector2.prototype.visitRepetitionWithSeparator = function(manySep) {
          this.allProductions.push(manySep);
        }, RepetionCollector2.prototype.visitRepetitionMandatory = function(atLeastOne) {
          this.allProductions.push(atLeastOne);
        }, RepetionCollector2.prototype.visitRepetitionMandatoryWithSeparator = function(atLeastOneSep) {
          this.allProductions.push(atLeastOneSep);
        }, RepetionCollector2.prototype.visitRepetition = function(many) {
          this.allProductions.push(many);
        }, RepetionCollector2;
      }(gast_visitor_public_1.GAstVisitor)
    );
    exports2.RepetionCollector = RepetionCollector;
    function validateTooManyAlts(topLevelRule, errMsgProvider) {
      var orCollector = new OrCollector();
      topLevelRule.accept(orCollector);
      var ors = orCollector.alternations, errors = utils.reduce(ors, function(errors2, currOr) {
        return currOr.definition.length > 255 && errors2.push({
          message: errMsgProvider.buildTooManyAlternativesError({
            topLevelRule: topLevelRule,
            alternation: currOr
          }),
          type: parser_1.ParserDefinitionErrorType.TOO_MANY_ALTS,
          ruleName: topLevelRule.name,
          occurrence: currOr.idx
        }), errors2;
      }, []);
      return errors;
    }
    exports2.validateTooManyAlts = validateTooManyAlts;
    function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
      var errors = [];
      return utils_1.forEach(topLevelRules, function(currTopRule) {
        var collectorVisitor = new RepetionCollector();
        currTopRule.accept(collectorVisitor);
        var allRuleProductions = collectorVisitor.allProductions;
        utils_1.forEach(allRuleProductions, function(currProd) {
          var prodType = lookahead_1.getProdType(currProd), actualMaxLookahead = currProd.maxLookahead || maxLookahead, currOccurrence = currProd.idx, paths = lookahead_1.getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, actualMaxLookahead), pathsInsideProduction = paths[0];
          if (utils_1.isEmpty(utils_1.flatten(pathsInsideProduction))) {
            var errMsg = errMsgProvider.buildEmptyRepetitionError({
              topLevelRule: currTopRule,
              repetition: currProd
            });
            errors.push({
              message: errMsg,
              type: parser_1.ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
              ruleName: currTopRule.name
            });
          }
        });
      }), errors;
    }
    exports2.validateSomeNonEmptyLookaheadPath = validateSomeNonEmptyLookaheadPath;
    function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
      var foundAmbiguousPaths = [], identicalAmbiguities = utils_1.reduce(alternatives, function(result, currAlt, currAltIdx) {
        return alternation.definition[currAltIdx].ignoreAmbiguities === !0 || utils_1.forEach(currAlt, function(currPath) {
          var altsCurrPathAppearsIn = [currAltIdx];
          utils_1.forEach(alternatives, function(currOtherAlt, currOtherAltIdx) {
            currAltIdx !== currOtherAltIdx && lookahead_1.containsPath(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
            alternation.definition[currOtherAltIdx].ignoreAmbiguities !== !0 && altsCurrPathAppearsIn.push(currOtherAltIdx);
          }), altsCurrPathAppearsIn.length > 1 && !lookahead_1.containsPath(foundAmbiguousPaths, currPath) && (foundAmbiguousPaths.push(currPath), result.push({
            alts: altsCurrPathAppearsIn,
            path: currPath
          }));
        }), result;
      }, []), currErrors = utils.map(identicalAmbiguities, function(currAmbDescriptor) {
        var ambgIndices = utils_1.map(currAmbDescriptor.alts, function(currAltIdx) {
          return currAltIdx + 1;
        }), currMessage = errMsgProvider.buildAlternationAmbiguityError({
          topLevelRule: rule,
          alternation: alternation,
          ambiguityIndices: ambgIndices,
          prefixPath: currAmbDescriptor.path
        });
        return {
          message: currMessage,
          type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_ALTS,
          ruleName: rule.name,
          occurrence: alternation.idx,
          alternatives: [currAmbDescriptor.alts]
        };
      });
      return currErrors;
    }
    function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
      var errors = [], pathsAndIndices = utils_1.reduce(alternatives, function(result, currAlt, idx) {
        var currPathsAndIdx = utils_1.map(currAlt, function(currPath) {
          return {
            idx: idx,
            path: currPath
          };
        });
        return result.concat(currPathsAndIdx);
      }, []);
      return utils_1.forEach(pathsAndIndices, function(currPathAndIdx) {
        var alternativeGast = alternation.definition[currPathAndIdx.idx];
        if (alternativeGast.ignoreAmbiguities !== !0) {
          var targetIdx = currPathAndIdx.idx, targetPath = currPathAndIdx.path, prefixAmbiguitiesPathsAndIndices = utils_1.findAll(pathsAndIndices, function(searchPathAndIdx) {
            return (
              // ignore (skip) ambiguities with this "other" alternative
              alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !== !0 && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
              // will be be detected using a different validation.
              lookahead_1.isStrictPrefixOfPath(searchPathAndIdx.path, targetPath)
            );
          }), currPathPrefixErrors = utils_1.map(prefixAmbiguitiesPathsAndIndices, function(currAmbPathAndIdx) {
            var ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1], occurrence = alternation.idx === 0 ? "" : alternation.idx, message = errMsgProvider.buildAlternationPrefixAmbiguityError({
              topLevelRule: rule,
              alternation: alternation,
              ambiguityIndices: ambgIndices,
              prefixPath: currAmbPathAndIdx.path
            });
            return {
              message: message,
              type: parser_1.ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
              ruleName: rule.name,
              occurrence: occurrence,
              alternatives: ambgIndices
            };
          });
          errors = errors.concat(currPathPrefixErrors);
        }
      }), errors;
    }
    exports2.checkPrefixAlternativesAmbiguities = checkPrefixAlternativesAmbiguities;
    function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
      var errors = [], tokenNames = utils_1.map(tokenTypes, function(currToken) {
        return currToken.name;
      });
      return utils_1.forEach(topLevels, function(currRule) {
        var currRuleName = currRule.name;
        if (utils_1.contains(tokenNames, currRuleName)) {
          var errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
          errors.push({
            message: errMsg,
            type: parser_1.ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
            ruleName: currRuleName
          });
        }
      }), errors;
    }
    function validateDuplicateNestedRules(topLevelRules, errMsgProvider) {
      var errors = [];
      return utils_1.forEach(topLevelRules, function(currTopRule) {
        var namedCollectorVisitor = new cst_1.NamedDSLMethodsCollectorVisitor("");
        currTopRule.accept(namedCollectorVisitor);
        var prodsByGroup = utils_1.groupBy(namedCollectorVisitor.result, function(item) {
          return item.name;
        }), duplicates = utils_1.pick(prodsByGroup, function(currGroup) {
          return currGroup.length > 1;
        });
        utils_1.forEach(utils_1.values(duplicates), function(currDupGroup) {
          var currDupProds = utils_1.map(currDupGroup, function(dupGroup) {
            return dupGroup.orgProd;
          }), errMsg = errMsgProvider.buildDuplicateNestedRuleNameError(currTopRule, currDupProds);
          errors.push({
            message: errMsg,
            type: parser_1.ParserDefinitionErrorType.DUPLICATE_NESTED_NAME,
            ruleName: currTopRule.name
          });
        });
      }), errors;
    }
  }
});

// ../../node_modules/chevrotain/lib/src/parse/errors_public.js
var require_errors_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/errors_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var tokens_public_1 = require_tokens_public(), utils = require_utils(), utils_1 = require_utils(), gast_public_1 = require_gast_public(), gast_1 = require_gast(), checks_1 = require_checks();
    exports2.defaultParserErrorProvider = {
      buildMismatchTokenMessage: function(_a) {
        var expected = _a.expected, actual = _a.actual, previous = _a.previous, ruleName = _a.ruleName, hasLabel = tokens_public_1.hasTokenLabel(expected), expectedMsg = hasLabel ? "--> " + tokens_public_1.tokenLabel(expected) + " <--" : "token of type --> " + expected.name + " <--", msg = "Expecting " + expectedMsg + " but found --> '" + actual.image + "' <--";
        return msg;
      },
      buildNotAllInputParsedMessage: function(_a) {
        var firstRedundant = _a.firstRedundant, ruleName = _a.ruleName;
        return "Redundant input, expecting EOF but found: " + firstRedundant.image;
      },
      buildNoViableAltMessage: function(_a) {
        var expectedPathsPerAlt = _a.expectedPathsPerAlt, actual = _a.actual, previous = _a.previous, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName, errPrefix = "Expecting: ", actualText = utils_1.first(actual).image, errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription)
          return errPrefix + customUserDescription + errSuffix;
        var allLookAheadPaths = utils_1.reduce(expectedPathsPerAlt, function(result, currAltPaths) {
          return result.concat(currAltPaths);
        }, []), nextValidTokenSequences = utils_1.map(allLookAheadPaths, function(currPath) {
          return "[" + utils_1.map(currPath, function(currTokenType) {
            return tokens_public_1.tokenLabel(currTokenType);
          }).join(", ") + "]";
        }), nextValidSequenceItems = utils_1.map(nextValidTokenSequences, function(itemMsg, idx) {
          return "  " + (idx + 1) + ". " + itemMsg;
        }), calculatedDescription = "one of these possible Token sequences:\n" + nextValidSequenceItems.join("\n");
        return errPrefix + calculatedDescription + errSuffix;
      },
      buildEarlyExitMessage: function(_a) {
        var expectedIterationPaths = _a.expectedIterationPaths, actual = _a.actual, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName, errPrefix = "Expecting: ", actualText = utils_1.first(actual).image, errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription)
          return errPrefix + customUserDescription + errSuffix;
        var nextValidTokenSequences = utils_1.map(expectedIterationPaths, function(currPath) {
          return "[" + utils_1.map(currPath, function(currTokenType) {
            return tokens_public_1.tokenLabel(currTokenType);
          }).join(",") + "]";
        }), calculatedDescription = "expecting at least one iteration which starts with one of these possible Token sequences::\n  " + ("<" + nextValidTokenSequences.join(" ,") + ">");
        return errPrefix + calculatedDescription + errSuffix;
      }
    };
    Object.freeze(exports2.defaultParserErrorProvider);
    exports2.defaultGrammarResolverErrorProvider = {
      buildRuleNotFoundError: function(topLevelRule, undefinedRule) {
        var msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\ninside top level rule: ->" + topLevelRule.name + "<-";
        return msg;
      }
    };
    exports2.defaultGrammarValidatorErrorProvider = {
      buildDuplicateFoundError: function(topLevelRule, duplicateProds) {
        function getExtraProductionArgument(prod) {
          return prod instanceof gast_public_1.Terminal ? prod.terminalType.name : prod instanceof gast_public_1.NonTerminal ? prod.nonTerminalName : "";
        }
        var topLevelName = topLevelRule.name, duplicateProd = utils_1.first(duplicateProds), index = duplicateProd.idx, dslName = gast_1.getProductionDslName(duplicateProd), extraArgument = getExtraProductionArgument(duplicateProd), hasExplicitIndex = index > 0, msg = "->" + dslName + (hasExplicitIndex ? index : "") + "<- " + (extraArgument ? "with argument: ->" + extraArgument + "<-" : "") + "\n                  appears more than once (" + duplicateProds.length + " times) in the top level rule: ->" + topLevelName + "<-.                  \n                  For further details see: https://sap.github.io/chevrotain/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ";
        return msg = msg.replace(/[ \t]+/g, " "), msg = msg.replace(/\s\s+/g, "\n"), msg;
      },
      buildInvalidNestedRuleNameError: function(topLevelRule, nestedProd) {
        var msg = "Invalid nested rule name: ->" + nestedProd.name + "<- inside rule: ->" + topLevelRule.name + "<-\n" + ("it must match the pattern: ->" + checks_1.validNestedRuleName.toString() + "<-.\n") + "Note that this means a nested rule name must start with the '$'(dollar) sign.";
        return msg;
      },
      buildDuplicateNestedRuleNameError: function(topLevelRule, nestedProd) {
        var duplicateName = utils_1.first(nestedProd).name, errMsg = "Duplicate nested rule name: ->" + duplicateName + "<- inside rule: ->" + topLevelRule.name + "<-\nA nested name must be unique in the scope of a top level grammar rule.";
        return errMsg;
      },
      buildNamespaceConflictError: function(rule) {
        var errMsg = "Namespace conflict found in grammar.\n" + ("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <" + rule.name + ">.\n") + "To resolve this make sure each Terminal and Non-Terminal names are unique\nThis is easy to accomplish by using the convention that Terminal names start with an uppercase letter\nand Non-Terminal names start with a lower case letter.";
        return errMsg;
      },
      buildAlternationPrefixAmbiguityError: function(options) {
        var pathMsg = utils_1.map(options.prefixPath, function(currTok) {
          return tokens_public_1.tokenLabel(currTok);
        }).join(", "), occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx, errMsg = "Ambiguous alternatives: <" + options.ambiguityIndices.join(" ,") + "> due to common lookahead prefix\n" + ("in <OR" + occurrence + "> inside <" + options.topLevelRule.name + "> Rule,\n") + ("<" + pathMsg + "> may appears as a prefix path in all these alternatives.\n") + "See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\nFor Further details.";
        return errMsg;
      },
      buildAlternationAmbiguityError: function(options) {
        var pathMsg = utils_1.map(options.prefixPath, function(currtok) {
          return tokens_public_1.tokenLabel(currtok);
        }).join(", "), occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx, currMessage = "Ambiguous Alternatives Detected: <" + options.ambiguityIndices.join(" ,") + "> in <OR" + occurrence + ">" + (" inside <" + options.topLevelRule.name + "> Rule,\n") + ("<" + pathMsg + "> may appears as a prefix path in all these alternatives.\n");
        return currMessage = currMessage + "See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.", currMessage;
      },
      buildEmptyRepetitionError: function(options) {
        var dslName = gast_1.getProductionDslName(options.repetition);
        options.repetition.idx !== 0 && (dslName += options.repetition.idx);
        var errMsg = "The repetition <" + dslName + "> within Rule <" + options.topLevelRule.name + "> can never consume any tokens.\nThis could lead to an infinite loop.";
        return errMsg;
      },
      buildTokenNameError: function(options) {
        var tokTypeName = options.tokenType.name, errMsg = "Invalid Grammar Token name: ->" + tokTypeName + "<- it must match the pattern: ->" + options.expectedPattern.toString() + "<-";
        return errMsg;
      },
      buildEmptyAlternationError: function(options) {
        var errMsg = "Ambiguous empty alternative: <" + (options.emptyChoiceIdx + 1) + ">" + (" in <OR" + options.alternation.idx + "> inside <" + options.topLevelRule.name + "> Rule.\n") + "Only the last alternative may be an empty alternative.";
        return errMsg;
      },
      buildTooManyAlternativesError: function(options) {
        var errMsg = "An Alternation cannot have more than 256 alternatives:\n" + ("<OR" + options.alternation.idx + "> inside <" + options.topLevelRule.name + "> Rule.\n has " + (options.alternation.definition.length + 1) + " alternatives.");
        return errMsg;
      },
      buildLeftRecursionError: function(options) {
        var ruleName = options.topLevelRule.name, pathNames = utils.map(options.leftRecursionPath, function(currRule) {
          return currRule.name;
        }), leftRecursivePath = ruleName + " --> " + pathNames.concat([ruleName]).join(" --> "), errMsg = "Left Recursion found in grammar.\n" + ("rule: <" + ruleName + "> can be invoked from itself (directly or indirectly)\n") + ("without consuming any Tokens. The grammar path that causes this is: \n " + leftRecursivePath + "\n") + " To fix this refactor your grammar to remove the left recursion.\nsee: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.";
        return errMsg;
      },
      buildInvalidRuleNameError: function(options) {
        var ruleName = options.topLevelRule.name, expectedPatternString = options.expectedPattern.toString(), errMsg = "Invalid grammar rule name: ->" + ruleName + "<- it must match the pattern: ->" + expectedPatternString + "<-";
        return errMsg;
      },
      buildDuplicateRuleNameError: function(options) {
        var ruleName;
        options.topLevelRule instanceof gast_public_1.Rule ? ruleName = options.topLevelRule.name : ruleName = options.topLevelRule;
        var errMsg = "Duplicate definition, rule: ->" + ruleName + "<- is already defined in the grammar: ->" + options.grammarName + "<-";
        return errMsg;
      }
    };
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/resolver.js
var require_resolver = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/resolver.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var parser_1 = require_parser(), utils_1 = require_utils(), gast_visitor_public_1 = require_gast_visitor_public();
    function resolveGrammar(topLevels, errMsgProvider) {
      var refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
      return refResolver.resolveRefs(), refResolver.errors;
    }
    exports2.resolveGrammar = resolveGrammar;
    var GastRefResolverVisitor = (
      /** @class */
      function(_super) {
        __extends(GastRefResolverVisitor2, _super);
        function GastRefResolverVisitor2(nameToTopRule, errMsgProvider) {
          var _this = _super.call(this) || this;
          return _this.nameToTopRule = nameToTopRule, _this.errMsgProvider = errMsgProvider, _this.errors = [], _this;
        }
        return GastRefResolverVisitor2.prototype.resolveRefs = function() {
          var _this = this;
          utils_1.forEach(utils_1.values(this.nameToTopRule), function(prod) {
            _this.currTopLevel = prod, prod.accept(_this);
          });
        }, GastRefResolverVisitor2.prototype.visitNonTerminal = function(node) {
          var ref = this.nameToTopRule[node.nonTerminalName];
          if (ref)
            node.referencedRule = ref;
          else {
            var msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
            this.errors.push({
              message: msg,
              type: parser_1.ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
              ruleName: this.currTopLevel.name,
              unresolvedRefName: node.nonTerminalName
            });
          }
        }, GastRefResolverVisitor2;
      }(gast_visitor_public_1.GAstVisitor)
    );
    exports2.GastRefResolverVisitor = GastRefResolverVisitor;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js
var require_gast_resolver_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), resolver_1 = require_resolver(), checks_1 = require_checks(), errors_public_1 = require_errors_public(), gast_1 = require_gast();
    function resolveGrammar(options) {
      options = utils_1.defaults(options, {
        errMsgProvider: errors_public_1.defaultGrammarResolverErrorProvider
      });
      var topRulesTable = {};
      return utils_1.forEach(options.rules, function(rule) {
        topRulesTable[rule.name] = rule;
      }), resolver_1.resolveGrammar(topRulesTable, options.errMsgProvider);
    }
    exports2.resolveGrammar = resolveGrammar;
    function validateGrammar(options) {
      return options = utils_1.defaults(options, {
        errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider,
        ignoredIssues: {}
      }), checks_1.validateGrammar(options.rules, options.maxLookahead, options.tokenTypes, options.ignoredIssues, options.errMsgProvider, options.grammarName);
    }
    exports2.validateGrammar = validateGrammar;
    function assignOccurrenceIndices(options) {
      utils_1.forEach(options.rules, function(currRule) {
        var methodsCollector = new gast_1.DslMethodsCollectorVisitor();
        currRule.accept(methodsCollector), utils_1.forEach(methodsCollector.dslMethods, function(methods) {
          utils_1.forEach(methods, function(currMethod, arrIdx) {
            currMethod.idx = arrIdx + 1;
          });
        });
      });
    }
    exports2.assignOccurrenceIndices = assignOccurrenceIndices;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/exceptions_public.js
var require_exceptions_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/exceptions_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException", NO_VIABLE_ALT_EXCEPTION = "NoViableAltException", EARLY_EXIT_EXCEPTION = "EarlyExitException", NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException", RECOGNITION_EXCEPTION_NAMES = [MISMATCHED_TOKEN_EXCEPTION, NO_VIABLE_ALT_EXCEPTION, EARLY_EXIT_EXCEPTION, NOT_ALL_INPUT_PARSED_EXCEPTION];
    Object.freeze(RECOGNITION_EXCEPTION_NAMES);
    function isRecognitionException(error) {
      return utils_1.contains(RECOGNITION_EXCEPTION_NAMES, error.name);
    }
    exports2.isRecognitionException = isRecognitionException;
    function MismatchedTokenException(message, token, previousToken) {
      this.name = MISMATCHED_TOKEN_EXCEPTION, this.message = message, this.token = token, this.previousToken = previousToken, this.resyncedTokens = [];
    }
    exports2.MismatchedTokenException = MismatchedTokenException;
    MismatchedTokenException.prototype = Error.prototype;
    function NoViableAltException(message, token, previousToken) {
      this.name = NO_VIABLE_ALT_EXCEPTION, this.message = message, this.token = token, this.previousToken = previousToken, this.resyncedTokens = [];
    }
    exports2.NoViableAltException = NoViableAltException;
    NoViableAltException.prototype = Error.prototype;
    function NotAllInputParsedException(message, token) {
      this.name = NOT_ALL_INPUT_PARSED_EXCEPTION, this.message = message, this.token = token, this.resyncedTokens = [];
    }
    exports2.NotAllInputParsedException = NotAllInputParsedException;
    NotAllInputParsedException.prototype = Error.prototype;
    function EarlyExitException(message, token, previousToken) {
      this.name = EARLY_EXIT_EXCEPTION, this.message = message, this.token = token, this.previousToken = previousToken, this.resyncedTokens = [];
    }
    exports2.EarlyExitException = EarlyExitException;
    EarlyExitException.prototype = Error.prototype;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js
var require_recoverable = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var tokens_public_1 = require_tokens_public(), utils_1 = require_utils(), exceptions_public_1 = require_exceptions_public(), constants_1 = require_constants(), parser_1 = require_parser();
    exports2.EOF_FOLLOW_KEY = {};
    exports2.IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
    function InRuleRecoveryException(message) {
      this.name = exports2.IN_RULE_RECOVERY_EXCEPTION, this.message = message;
    }
    exports2.InRuleRecoveryException = InRuleRecoveryException;
    InRuleRecoveryException.prototype = Error.prototype;
    var Recoverable = (
      /** @class */
      function() {
        function Recoverable2() {
        }
        return Recoverable2.prototype.initRecoverable = function(config) {
          this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = utils_1.has(config, "recoveryEnabled") ? config.recoveryEnabled : parser_1.DEFAULT_PARSER_CONFIG.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = attemptInRepetitionRecovery);
        }, Recoverable2.prototype.getTokenToInsert = function(tokType) {
          var tokToInsert = tokens_public_1.createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
          return tokToInsert.isInsertedInRecovery = !0, tokToInsert;
        }, Recoverable2.prototype.canTokenTypeBeInsertedInRecovery = function(tokType) {
          return !0;
        }, Recoverable2.prototype.tryInRepetitionRecovery = function(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
          for (var _this = this, reSyncTokType = this.findReSyncTokenType(), savedLexerState = this.exportLexerState(), resyncedTokens = [], passedResyncPoint = !1, nextTokenWithoutResync = this.LA(1), currToken = this.LA(1), generateErrorMessage = function() {
            var previousToken = _this.LA(0), msg = _this.errorMessageProvider.buildMismatchTokenMessage({
              expected: expectedTokType,
              actual: nextTokenWithoutResync,
              previous: previousToken,
              ruleName: _this.getCurrRuleFullName()
            }), error = new exceptions_public_1.MismatchedTokenException(msg, nextTokenWithoutResync, _this.LA(0));
            error.resyncedTokens = utils_1.dropRight(resyncedTokens), _this.SAVE_ERROR(error);
          }; !passedResyncPoint; )
            if (this.tokenMatcher(currToken, expectedTokType)) {
              generateErrorMessage();
              return;
            } else if (lookAheadFunc.call(this)) {
              generateErrorMessage(), grammarRule.apply(this, grammarRuleArgs);
              return;
            } else
              this.tokenMatcher(currToken, reSyncTokType) ? passedResyncPoint = !0 : (currToken = this.SKIP_TOKEN(), this.addToResyncTokens(currToken, resyncedTokens));
          this.importLexerState(savedLexerState);
        }, Recoverable2.prototype.shouldInRepetitionRecoveryBeTried = function(expectTokAfterLastMatch, nextTokIdx, notStuck) {
          return !(notStuck === !1 || expectTokAfterLastMatch === void 0 || nextTokIdx === void 0 || this.tokenMatcher(this.LA(1), expectTokAfterLastMatch) || this.isBackTracking() || this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx)));
        }, Recoverable2.prototype.getFollowsForInRuleRecovery = function(tokType, tokIdxInRule) {
          var grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule), follows = this.getNextPossibleTokenTypes(grammarPath);
          return follows;
        }, Recoverable2.prototype.tryInRuleRecovery = function(expectedTokType, follows) {
          if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
            var tokToInsert = this.getTokenToInsert(expectedTokType);
            return tokToInsert;
          }
          if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
            var nextTok = this.SKIP_TOKEN();
            return this.consumeToken(), nextTok;
          }
          throw new InRuleRecoveryException("sad sad panda");
        }, Recoverable2.prototype.canPerformInRuleRecovery = function(expectedToken, follows) {
          return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
        }, Recoverable2.prototype.canRecoverWithSingleTokenInsertion = function(expectedTokType, follows) {
          var _this = this;
          if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType) || utils_1.isEmpty(follows))
            return !1;
          var mismatchedTok = this.LA(1), isMisMatchedTokInFollows = utils_1.find(follows, function(possibleFollowsTokType) {
            return _this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
          }) !== void 0;
          return isMisMatchedTokInFollows;
        }, Recoverable2.prototype.canRecoverWithSingleTokenDeletion = function(expectedTokType) {
          var isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
          return isNextTokenWhatIsExpected;
        }, Recoverable2.prototype.isInCurrentRuleReSyncSet = function(tokenTypeIdx) {
          var followKey = this.getCurrFollowKey(), currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
          return utils_1.contains(currentRuleReSyncSet, tokenTypeIdx);
        }, Recoverable2.prototype.findReSyncTokenType = function() {
          for (var allPossibleReSyncTokTypes = this.flattenFollowSet(), nextToken = this.LA(1), k = 2; ; ) {
            var nextTokenType = nextToken.tokenType;
            if (utils_1.contains(allPossibleReSyncTokTypes, nextTokenType))
              return nextTokenType;
            nextToken = this.LA(k), k++;
          }
        }, Recoverable2.prototype.getCurrFollowKey = function() {
          if (this.RULE_STACK.length === 1)
            return exports2.EOF_FOLLOW_KEY;
          var currRuleShortName = this.getLastExplicitRuleShortName(), currRuleIdx = this.getLastExplicitRuleOccurrenceIndex(), prevRuleShortName = this.getPreviousExplicitRuleShortName();
          return {
            ruleName: this.shortRuleNameToFullName(currRuleShortName),
            idxInCallingRule: currRuleIdx,
            inRule: this.shortRuleNameToFullName(prevRuleShortName)
          };
        }, Recoverable2.prototype.buildFullFollowKeyStack = function() {
          var _this = this, explicitRuleStack = this.RULE_STACK, explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
          return utils_1.isEmpty(this.LAST_EXPLICIT_RULE_STACK) || (explicitRuleStack = utils_1.map(this.LAST_EXPLICIT_RULE_STACK, function(idx) {
            return _this.RULE_STACK[idx];
          }), explicitOccurrenceStack = utils_1.map(this.LAST_EXPLICIT_RULE_STACK, function(idx) {
            return _this.RULE_OCCURRENCE_STACK[idx];
          })), utils_1.map(explicitRuleStack, function(ruleName, idx) {
            return idx === 0 ? exports2.EOF_FOLLOW_KEY : {
              ruleName: _this.shortRuleNameToFullName(ruleName),
              idxInCallingRule: explicitOccurrenceStack[idx],
              inRule: _this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
            };
          });
        }, Recoverable2.prototype.flattenFollowSet = function() {
          var _this = this, followStack = utils_1.map(this.buildFullFollowKeyStack(), function(currKey) {
            return _this.getFollowSetFromFollowKey(currKey);
          });
          return utils_1.flatten(followStack);
        }, Recoverable2.prototype.getFollowSetFromFollowKey = function(followKey) {
          if (followKey === exports2.EOF_FOLLOW_KEY)
            return [tokens_public_1.EOF];
          var followName = followKey.ruleName + followKey.idxInCallingRule + constants_1.IN + followKey.inRule;
          return this.resyncFollows[followName];
        }, Recoverable2.prototype.addToResyncTokens = function(token, resyncTokens) {
          return this.tokenMatcher(token, tokens_public_1.EOF) || resyncTokens.push(token), resyncTokens;
        }, Recoverable2.prototype.reSyncTo = function(tokType) {
          for (var resyncedTokens = [], nextTok = this.LA(1); this.tokenMatcher(nextTok, tokType) === !1; )
            nextTok = this.SKIP_TOKEN(), this.addToResyncTokens(nextTok, resyncedTokens);
          return utils_1.dropRight(resyncedTokens);
        }, Recoverable2.prototype.attemptInRepetitionRecovery = function(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
        }, Recoverable2.prototype.getCurrentGrammarPath = function(tokType, tokIdxInRule) {
          var pathRuleStack = this.getHumanReadableRuleStack(), pathOccurrenceStack = utils_1.cloneArr(this.RULE_OCCURRENCE_STACK), grammarPath = {
            ruleStack: pathRuleStack,
            occurrenceStack: pathOccurrenceStack,
            lastTok: tokType,
            lastTokOccurrence: tokIdxInRule
          };
          return grammarPath;
        }, Recoverable2.prototype.getHumanReadableRuleStack = function() {
          var _this = this;
          return utils_1.isEmpty(this.LAST_EXPLICIT_RULE_STACK) ? utils_1.map(this.RULE_STACK, function(currShortName) {
            return _this.shortRuleNameToFullName(currShortName);
          }) : utils_1.map(this.LAST_EXPLICIT_RULE_STACK, function(currIdx) {
            return _this.shortRuleNameToFullName(_this.RULE_STACK[currIdx]);
          });
        }, Recoverable2;
      }()
    );
    exports2.Recoverable = Recoverable;
    function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
      var key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence), firstAfterRepInfo = this.firstAfterRepMap[key];
      if (firstAfterRepInfo === void 0) {
        var currRuleName = this.getCurrRuleFullName(), ruleGrammar = this.getGAstProductions()[currRuleName], walker = new nextToksWalker(ruleGrammar, prodOccurrence);
        firstAfterRepInfo = walker.startWalking(), this.firstAfterRepMap[key] = firstAfterRepInfo;
      }
      var expectTokAfterLastMatch = firstAfterRepInfo.token, nextTokIdx = firstAfterRepInfo.occurrence, isEndOfRule = firstAfterRepInfo.isEndOfRule;
      this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === void 0 && (expectTokAfterLastMatch = tokens_public_1.EOF, nextTokIdx = 1), this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) && this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
    }
    exports2.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js
var require_looksahead = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var lookahead_1 = require_lookahead(), utils_1 = require_utils(), parser_1 = require_parser(), keys_1 = require_keys(), gast_1 = require_gast(), LooksAhead = (
      /** @class */
      function() {
        function LooksAhead2() {
        }
        return LooksAhead2.prototype.initLooksAhead = function(config) {
          this.dynamicTokensEnabled = utils_1.has(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled : parser_1.DEFAULT_PARSER_CONFIG.dynamicTokensEnabled, this.maxLookahead = utils_1.has(config, "maxLookahead") ? config.maxLookahead : parser_1.DEFAULT_PARSER_CONFIG.maxLookahead, this.lookAheadFuncsCache = utils_1.isES2015MapSupported() ? /* @__PURE__ */ new Map() : [], utils_1.isES2015MapSupported() ? (this.getLaFuncFromCache = this.getLaFuncFromMap, this.setLaFuncCache = this.setLaFuncCacheUsingMap) : (this.getLaFuncFromCache = this.getLaFuncFromObj, this.setLaFuncCache = this.setLaFuncUsingObj);
        }, LooksAhead2.prototype.preComputeLookaheadFunctions = function(rules) {
          var _this = this;
          utils_1.forEach(rules, function(currRule) {
            _this.TRACE_INIT(currRule.name + " Rule Lookahead", function() {
              var _a = gast_1.collectMethods(currRule), alternation = _a.alternation, repetition = _a.repetition, option = _a.option, repetitionMandatory = _a.repetitionMandatory, repetitionMandatoryWithSeparator = _a.repetitionMandatoryWithSeparator, repetitionWithSeparator = _a.repetitionWithSeparator;
              utils_1.forEach(alternation, function(currProd) {
                var prodIdx = currProd.idx === 0 ? "" : currProd.idx;
                _this.TRACE_INIT("" + gast_1.getProductionDslName(currProd) + prodIdx, function() {
                  var laFunc = lookahead_1.buildLookaheadFuncForOr(currProd.idx, currRule, currProd.maxLookahead || _this.maxLookahead, currProd.hasPredicates, _this.dynamicTokensEnabled, _this.lookAheadBuilderForAlternatives), key = keys_1.getKeyForAutomaticLookahead(_this.fullRuleNameToShort[currRule.name], keys_1.OR_IDX, currProd.idx);
                  _this.setLaFuncCache(key, laFunc);
                });
              }), utils_1.forEach(repetition, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.MANY_IDX, lookahead_1.PROD_TYPE.REPETITION, currProd.maxLookahead, gast_1.getProductionDslName(currProd));
              }), utils_1.forEach(option, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.OPTION_IDX, lookahead_1.PROD_TYPE.OPTION, currProd.maxLookahead, gast_1.getProductionDslName(currProd));
              }), utils_1.forEach(repetitionMandatory, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.AT_LEAST_ONE_IDX, lookahead_1.PROD_TYPE.REPETITION_MANDATORY, currProd.maxLookahead, gast_1.getProductionDslName(currProd));
              }), utils_1.forEach(repetitionMandatoryWithSeparator, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.AT_LEAST_ONE_SEP_IDX, lookahead_1.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currProd.maxLookahead, gast_1.getProductionDslName(currProd));
              }), utils_1.forEach(repetitionWithSeparator, function(currProd) {
                _this.computeLookaheadFunc(currRule, currProd.idx, keys_1.MANY_SEP_IDX, lookahead_1.PROD_TYPE.REPETITION_WITH_SEPARATOR, currProd.maxLookahead, gast_1.getProductionDslName(currProd));
              });
            });
          });
        }, LooksAhead2.prototype.computeLookaheadFunc = function(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
          var _this = this;
          this.TRACE_INIT("" + dslMethodName + (prodOccurrence === 0 ? "" : prodOccurrence), function() {
            var laFunc = lookahead_1.buildLookaheadFuncForOptionalProd(prodOccurrence, rule, prodMaxLookahead || _this.maxLookahead, _this.dynamicTokensEnabled, prodType, _this.lookAheadBuilderForOptional), key = keys_1.getKeyForAutomaticLookahead(_this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
            _this.setLaFuncCache(key, laFunc);
          });
        }, LooksAhead2.prototype.lookAheadBuilderForOptional = function(alt, tokenMatcher, dynamicTokensEnabled) {
          return lookahead_1.buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled);
        }, LooksAhead2.prototype.lookAheadBuilderForAlternatives = function(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
          return lookahead_1.buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled);
        }, LooksAhead2.prototype.getKeyForAutomaticLookahead = function(dslMethodIdx, occurrence) {
          var currRuleShortName = this.getLastExplicitRuleShortName();
          return keys_1.getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);
        }, LooksAhead2.prototype.getLaFuncFromCache = function(key) {
        }, LooksAhead2.prototype.getLaFuncFromMap = function(key) {
          return this.lookAheadFuncsCache.get(key);
        }, LooksAhead2.prototype.getLaFuncFromObj = function(key) {
          return this.lookAheadFuncsCache[key];
        }, LooksAhead2.prototype.setLaFuncCache = function(key, value) {
        }, LooksAhead2.prototype.setLaFuncCacheUsingMap = function(key, value) {
          this.lookAheadFuncsCache.set(key, value);
        }, LooksAhead2.prototype.setLaFuncUsingObj = function(key, value) {
          this.lookAheadFuncsCache[key] = value;
        }, LooksAhead2;
      }()
    );
    exports2.LooksAhead = LooksAhead;
  }
});

// ../../node_modules/chevrotain/lib/src/lang/lang_extensions.js
var require_lang_extensions = __commonJS({
  "../../node_modules/chevrotain/lib/src/lang/lang_extensions.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils();
    function classNameFromInstance(instance) {
      return functionName(instance.constructor);
    }
    exports2.classNameFromInstance = classNameFromInstance;
    var FUNC_NAME_REGEXP = /^\s*function\s*(\S*)\s*\(/, NAME = "name";
    function functionName(func) {
      var existingNameProp = func.name;
      if (existingNameProp)
        return existingNameProp;
      var computedName = func.toString().match(FUNC_NAME_REGEXP)[1];
      return computedName;
    }
    exports2.functionName = functionName;
    function defineNameProp(obj, nameValue) {
      var namePropDescriptor = Object.getOwnPropertyDescriptor(obj, NAME);
      return utils_1.isUndefined(namePropDescriptor) || namePropDescriptor.configurable ? (Object.defineProperty(obj, NAME, {
        enumerable: !1,
        configurable: !0,
        writable: !1,
        value: nameValue
      }), !0) : !1;
    }
    exports2.defineNameProp = defineNameProp;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js
var require_cst_visitor = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), lang_extensions_1 = require_lang_extensions(), checks_1 = require_checks();
    function defaultVisit(ctx, param) {
      for (var childrenNames = utils_1.keys(ctx), childrenNamesLength = childrenNames.length, i = 0; i < childrenNamesLength; i++)
        for (var currChildName = childrenNames[i], currChildArray = ctx[currChildName], currChildArrayLength = currChildArray.length, j = 0; j < currChildArrayLength; j++) {
          var currChild = currChildArray[j];
          currChild.tokenTypeIdx === void 0 && (currChild.fullName !== void 0 ? this[currChild.fullName](currChild.children, param) : this[currChild.name](currChild.children, param));
        }
    }
    exports2.defaultVisit = defaultVisit;
    function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
      var derivedConstructor = function() {
      };
      lang_extensions_1.defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
      var semanticProto = {
        visit: function(cstNode, param) {
          if (utils_1.isArray(cstNode) && (cstNode = cstNode[0]), !utils_1.isUndefined(cstNode))
            return cstNode.fullName !== void 0 ? this[cstNode.fullName](cstNode.children, param) : this[cstNode.name](cstNode.children, param);
        },
        validateVisitor: function() {
          var semanticDefinitionErrors = _validateVisitor(this, ruleNames);
          if (!utils_1.isEmpty(semanticDefinitionErrors)) {
            var errorMessages = utils_1.map(semanticDefinitionErrors, function(currDefError) {
              return currDefError.msg;
            });
            throw Error("Errors Detected in CST Visitor <" + lang_extensions_1.functionName(this.constructor) + ">:\n	" + ("" + errorMessages.join("\n\n").replace(/\n/g, "\n	")));
          }
        }
      };
      return derivedConstructor.prototype = semanticProto, derivedConstructor.prototype.constructor = derivedConstructor, derivedConstructor._RULE_NAMES = ruleNames, derivedConstructor;
    }
    exports2.createBaseSemanticVisitorConstructor = createBaseSemanticVisitorConstructor;
    function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
      var derivedConstructor = function() {
      };
      lang_extensions_1.defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
      var withDefaultsProto = Object.create(baseConstructor.prototype);
      return utils_1.forEach(ruleNames, function(ruleName) {
        withDefaultsProto[ruleName] = defaultVisit;
      }), derivedConstructor.prototype = withDefaultsProto, derivedConstructor.prototype.constructor = derivedConstructor, derivedConstructor;
    }
    exports2.createBaseVisitorConstructorWithDefaults = createBaseVisitorConstructorWithDefaults;
    var CstVisitorDefinitionError;
    (function(CstVisitorDefinitionError2) {
      CstVisitorDefinitionError2[CstVisitorDefinitionError2.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", CstVisitorDefinitionError2[CstVisitorDefinitionError2.MISSING_METHOD = 1] = "MISSING_METHOD";
    })(CstVisitorDefinitionError = exports2.CstVisitorDefinitionError || (exports2.CstVisitorDefinitionError = {}));
    function _validateVisitor(visitorInstance, ruleNames) {
      var missingErrors = validateMissingCstMethods(visitorInstance, ruleNames), redundantErrors = validateRedundantMethods(visitorInstance, ruleNames);
      return missingErrors.concat(redundantErrors);
    }
    exports2.validateVisitor = _validateVisitor;
    function validateMissingCstMethods(visitorInstance, ruleNames) {
      var errors = utils_1.map(ruleNames, function(currRuleName) {
        if (!utils_1.isFunction(visitorInstance[currRuleName]))
          return {
            msg: "Missing visitor method: <" + currRuleName + "> on " + lang_extensions_1.functionName(visitorInstance.constructor) + " CST Visitor.",
            type: CstVisitorDefinitionError.MISSING_METHOD,
            methodName: currRuleName
          };
      });
      return utils_1.compact(errors);
    }
    exports2.validateMissingCstMethods = validateMissingCstMethods;
    var VALID_PROP_NAMES = ["constructor", "visit", "validateVisitor"];
    function validateRedundantMethods(visitorInstance, ruleNames) {
      var errors = [];
      for (var prop in visitorInstance)
        checks_1.validTermsPattern.test(prop) && utils_1.isFunction(visitorInstance[prop]) && !utils_1.contains(VALID_PROP_NAMES, prop) && !utils_1.contains(ruleNames, prop) && errors.push({
          msg: "Redundant visitor method: <" + prop + "> on " + lang_extensions_1.functionName(visitorInstance.constructor) + " CST Visitor\nThere is no Grammar Rule corresponding to this method's name.\n" + ("For utility methods on visitor classes use methods names that do not match /" + checks_1.validTermsPattern.source + "/."),
          type: CstVisitorDefinitionError.REDUNDANT_METHOD,
          methodName: prop
        });
      return errors;
    }
    exports2.validateRedundantMethods = validateRedundantMethods;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js
var require_tree_builder = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var cst_1 = require_cst(), utils_1 = require_utils(), cst_visitor_1 = require_cst_visitor(), keys_1 = require_keys(), parser_1 = require_parser(), TreeBuilder = (
      /** @class */
      function() {
        function TreeBuilder2() {
        }
        return TreeBuilder2.prototype.initTreeBuilder = function(config) {
          if (this.LAST_EXPLICIT_RULE_STACK = [], this.CST_STACK = [], this.outputCst = utils_1.has(config, "outputCst") ? config.outputCst : parser_1.DEFAULT_PARSER_CONFIG.outputCst, this.nodeLocationTracking = utils_1.has(config, "nodeLocationTracking") ? config.nodeLocationTracking : parser_1.DEFAULT_PARSER_CONFIG.nodeLocationTracking, !this.outputCst)
            this.cstInvocationStateUpdate = utils_1.NOOP, this.cstFinallyStateUpdate = utils_1.NOOP, this.cstPostTerminal = utils_1.NOOP, this.cstPostNonTerminal = utils_1.NOOP, this.cstPostRule = utils_1.NOOP, this.getLastExplicitRuleShortName = this.getLastExplicitRuleShortNameNoCst, this.getPreviousExplicitRuleShortName = this.getPreviousExplicitRuleShortNameNoCst, this.getLastExplicitRuleOccurrenceIndex = this.getLastExplicitRuleOccurrenceIndexNoCst, this.manyInternal = this.manyInternalNoCst, this.orInternal = this.orInternalNoCst, this.optionInternal = this.optionInternalNoCst, this.atLeastOneInternal = this.atLeastOneInternalNoCst, this.manySepFirstInternal = this.manySepFirstInternalNoCst, this.atLeastOneSepFirstInternal = this.atLeastOneSepFirstInternalNoCst;
          else if (/full/i.test(this.nodeLocationTracking))
            this.recoveryEnabled ? (this.setNodeLocationFromToken = cst_1.setNodeLocationFull, this.setNodeLocationFromNode = cst_1.setNodeLocationFull, this.cstPostRule = utils_1.NOOP, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = utils_1.NOOP, this.setNodeLocationFromNode = utils_1.NOOP, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
          else if (/onlyOffset/i.test(this.nodeLocationTracking))
            this.recoveryEnabled ? (this.setNodeLocationFromToken = cst_1.setNodeLocationOnlyOffset, this.setNodeLocationFromNode = cst_1.setNodeLocationOnlyOffset, this.cstPostRule = utils_1.NOOP, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = utils_1.NOOP, this.setNodeLocationFromNode = utils_1.NOOP, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
          else if (/none/i.test(this.nodeLocationTracking))
            this.setNodeLocationFromToken = utils_1.NOOP, this.setNodeLocationFromNode = utils_1.NOOP, this.cstPostRule = utils_1.NOOP, this.setInitialNodeLocation = utils_1.NOOP;
          else
            throw Error('Invalid <nodeLocationTracking> config option: "' + config.nodeLocationTracking + '"');
        }, TreeBuilder2.prototype.setInitialNodeLocationOnlyOffsetRecovery = function(cstNode) {
          cstNode.location = {
            startOffset: NaN,
            endOffset: NaN
          };
        }, TreeBuilder2.prototype.setInitialNodeLocationOnlyOffsetRegular = function(cstNode) {
          cstNode.location = {
            // without error recovery the starting Location of a new CstNode is guaranteed
            // To be the next Token's startOffset (for valid inputs).
            // For invalid inputs there won't be any CSTOutput so this potential
            // inaccuracy does not matter
            startOffset: this.LA(1).startOffset,
            endOffset: NaN
          };
        }, TreeBuilder2.prototype.setInitialNodeLocationFullRecovery = function(cstNode) {
          cstNode.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
          };
        }, TreeBuilder2.prototype.setInitialNodeLocationFullRegular = function(cstNode) {
          var nextToken = this.LA(1);
          cstNode.location = {
            startOffset: nextToken.startOffset,
            startLine: nextToken.startLine,
            startColumn: nextToken.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
          };
        }, TreeBuilder2.prototype.cstNestedInvocationStateUpdate = function(nestedName, shortName) {
          var cstNode = {
            name: nestedName,
            fullName: this.shortRuleNameToFull[this.getLastExplicitRuleShortName()] + nestedName,
            children: {}
          };
          this.setInitialNodeLocation(cstNode), this.CST_STACK.push(cstNode);
        }, TreeBuilder2.prototype.cstInvocationStateUpdate = function(fullRuleName, shortName) {
          this.LAST_EXPLICIT_RULE_STACK.push(this.RULE_STACK.length - 1);
          var cstNode = {
            name: fullRuleName,
            children: {}
          };
          this.setInitialNodeLocation(cstNode), this.CST_STACK.push(cstNode);
        }, TreeBuilder2.prototype.cstFinallyStateUpdate = function() {
          this.LAST_EXPLICIT_RULE_STACK.pop(), this.CST_STACK.pop();
        }, TreeBuilder2.prototype.cstNestedFinallyStateUpdate = function() {
          var lastCstNode = this.CST_STACK.pop();
          this.cstPostRule(lastCstNode);
        }, TreeBuilder2.prototype.cstPostRuleFull = function(ruleCstNode) {
          var prevToken = this.LA(0), loc = ruleCstNode.location;
          loc.startOffset <= prevToken.startOffset ? (loc.endOffset = prevToken.endOffset, loc.endLine = prevToken.endLine, loc.endColumn = prevToken.endColumn) : (loc.startOffset = NaN, loc.startLine = NaN, loc.startColumn = NaN);
        }, TreeBuilder2.prototype.cstPostRuleOnlyOffset = function(ruleCstNode) {
          var prevToken = this.LA(0), loc = ruleCstNode.location;
          loc.startOffset <= prevToken.startOffset ? loc.endOffset = prevToken.endOffset : loc.startOffset = NaN;
        }, TreeBuilder2.prototype.cstPostTerminal = function(key, consumedToken) {
          var rootCst = this.CST_STACK[this.CST_STACK.length - 1];
          cst_1.addTerminalToCst(rootCst, consumedToken, key), this.setNodeLocationFromToken(rootCst.location, consumedToken);
        }, TreeBuilder2.prototype.cstPostNonTerminal = function(ruleCstResult, ruleName) {
          if (this.isBackTracking() !== !0) {
            var preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
            cst_1.addNoneTerminalToCst(preCstNode, ruleName, ruleCstResult), this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
          }
        }, TreeBuilder2.prototype.getBaseCstVisitorConstructor = function() {
          if (utils_1.isUndefined(this.baseCstVisitorConstructor)) {
            var newBaseCstVisitorConstructor = cst_visitor_1.createBaseSemanticVisitorConstructor(this.className, this.allRuleNames);
            return this.baseCstVisitorConstructor = newBaseCstVisitorConstructor, newBaseCstVisitorConstructor;
          }
          return this.baseCstVisitorConstructor;
        }, TreeBuilder2.prototype.getBaseCstVisitorConstructorWithDefaults = function() {
          if (utils_1.isUndefined(this.baseCstVisitorWithDefaultsConstructor)) {
            var newConstructor = cst_visitor_1.createBaseVisitorConstructorWithDefaults(this.className, this.allRuleNames, this.getBaseCstVisitorConstructor());
            return this.baseCstVisitorWithDefaultsConstructor = newConstructor, newConstructor;
          }
          return this.baseCstVisitorWithDefaultsConstructor;
        }, TreeBuilder2.prototype.nestedRuleBeforeClause = function(methodOpts, laKey) {
          var nestedName;
          if (methodOpts.NAME !== void 0)
            return nestedName = methodOpts.NAME, this.nestedRuleInvocationStateUpdate(nestedName, laKey), nestedName;
        }, TreeBuilder2.prototype.nestedAltBeforeClause = function(methodOpts, occurrence, methodKeyIdx, altIdx) {
          var ruleIdx = this.getLastExplicitRuleShortName(), shortName = keys_1.getKeyForAltIndex(ruleIdx, methodKeyIdx, occurrence, altIdx), nestedName;
          if (methodOpts.NAME !== void 0)
            return nestedName = methodOpts.NAME, this.nestedRuleInvocationStateUpdate(nestedName, shortName), {
              shortName: shortName,
              nestedName: nestedName
            };
        }, TreeBuilder2.prototype.nestedRuleFinallyClause = function(laKey, nestedName) {
          var cstStack = this.CST_STACK, nestedRuleCst = cstStack[cstStack.length - 1];
          this.nestedRuleFinallyStateUpdate();
          var parentCstNode = cstStack[cstStack.length - 1];
          cst_1.addNoneTerminalToCst(parentCstNode, nestedName, nestedRuleCst), this.setNodeLocationFromNode(parentCstNode.location, nestedRuleCst.location);
        }, TreeBuilder2.prototype.getLastExplicitRuleShortName = function() {
          var lastExplictIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];
          return this.RULE_STACK[lastExplictIndex];
        }, TreeBuilder2.prototype.getLastExplicitRuleShortNameNoCst = function() {
          var ruleStack = this.RULE_STACK;
          return ruleStack[ruleStack.length - 1];
        }, TreeBuilder2.prototype.getPreviousExplicitRuleShortName = function() {
          var lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 2];
          return this.RULE_STACK[lastExplicitIndex];
        }, TreeBuilder2.prototype.getPreviousExplicitRuleShortNameNoCst = function() {
          var ruleStack = this.RULE_STACK;
          return ruleStack[ruleStack.length - 2];
        }, TreeBuilder2.prototype.getLastExplicitRuleOccurrenceIndex = function() {
          var lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];
          return this.RULE_OCCURRENCE_STACK[lastExplicitIndex];
        }, TreeBuilder2.prototype.getLastExplicitRuleOccurrenceIndexNoCst = function() {
          var occurrenceStack = this.RULE_OCCURRENCE_STACK;
          return occurrenceStack[occurrenceStack.length - 1];
        }, TreeBuilder2.prototype.nestedRuleInvocationStateUpdate = function(nestedRuleName, shortNameKey) {
          this.RULE_OCCURRENCE_STACK.push(1), this.RULE_STACK.push(shortNameKey), this.cstNestedInvocationStateUpdate(nestedRuleName, shortNameKey);
        }, TreeBuilder2.prototype.nestedRuleFinallyStateUpdate = function() {
          this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstNestedFinallyStateUpdate();
        }, TreeBuilder2;
      }()
    );
    exports2.TreeBuilder = TreeBuilder;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js
var require_lexer_adapter = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var parser_1 = require_parser(), LexerAdapter = (
      /** @class */
      function() {
        function LexerAdapter2() {
        }
        return LexerAdapter2.prototype.initLexerAdapter = function() {
          this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
        }, Object.defineProperty(LexerAdapter2.prototype, "input", {
          get: function() {
            return this.tokVector;
          },
          set: function(newInput) {
            if (this.selfAnalysisDone !== !0)
              throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
            this.reset(), this.tokVector = newInput, this.tokVectorLength = newInput.length;
          },
          enumerable: !0,
          configurable: !0
        }), LexerAdapter2.prototype.SKIP_TOKEN = function() {
          return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : parser_1.END_OF_FILE;
        }, LexerAdapter2.prototype.LA = function(howMuch) {
          var soughtIdx = this.currIdx + howMuch;
          return soughtIdx < 0 || this.tokVectorLength <= soughtIdx ? parser_1.END_OF_FILE : this.tokVector[soughtIdx];
        }, LexerAdapter2.prototype.consumeToken = function() {
          this.currIdx++;
        }, LexerAdapter2.prototype.exportLexerState = function() {
          return this.currIdx;
        }, LexerAdapter2.prototype.importLexerState = function(newState) {
          this.currIdx = newState;
        }, LexerAdapter2.prototype.resetLexerState = function() {
          this.currIdx = -1;
        }, LexerAdapter2.prototype.moveToTerminatedState = function() {
          this.currIdx = this.tokVector.length - 1;
        }, LexerAdapter2.prototype.getLexerPosition = function() {
          return this.exportLexerState();
        }, LexerAdapter2;
      }()
    );
    exports2.LexerAdapter = LexerAdapter;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js
var require_recognizer_api = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), exceptions_public_1 = require_exceptions_public(), parser_1 = require_parser(), errors_public_1 = require_errors_public(), checks_1 = require_checks(), gast_public_1 = require_gast_public(), RecognizerApi = (
      /** @class */
      function() {
        function RecognizerApi2() {
        }
        return RecognizerApi2.prototype.ACTION = function(impl) {
          return impl.call(this);
        }, RecognizerApi2.prototype.consume = function(idx, tokType, options) {
          return this.consumeInternal(tokType, idx, options);
        }, RecognizerApi2.prototype.subrule = function(idx, ruleToCall, options) {
          return this.subruleInternal(ruleToCall, idx, options);
        }, RecognizerApi2.prototype.option = function(idx, actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, idx);
        }, RecognizerApi2.prototype.or = function(idx, altsOrOpts) {
          return this.orInternal(altsOrOpts, idx);
        }, RecognizerApi2.prototype.many = function(idx, actionORMethodDef) {
          return this.manyInternal(idx, actionORMethodDef);
        }, RecognizerApi2.prototype.atLeastOne = function(idx, actionORMethodDef) {
          return this.atLeastOneInternal(idx, actionORMethodDef);
        }, RecognizerApi2.prototype.CONSUME = function(tokType, options) {
          return this.consumeInternal(tokType, 0, options);
        }, RecognizerApi2.prototype.CONSUME1 = function(tokType, options) {
          return this.consumeInternal(tokType, 1, options);
        }, RecognizerApi2.prototype.CONSUME2 = function(tokType, options) {
          return this.consumeInternal(tokType, 2, options);
        }, RecognizerApi2.prototype.CONSUME3 = function(tokType, options) {
          return this.consumeInternal(tokType, 3, options);
        }, RecognizerApi2.prototype.CONSUME4 = function(tokType, options) {
          return this.consumeInternal(tokType, 4, options);
        }, RecognizerApi2.prototype.CONSUME5 = function(tokType, options) {
          return this.consumeInternal(tokType, 5, options);
        }, RecognizerApi2.prototype.CONSUME6 = function(tokType, options) {
          return this.consumeInternal(tokType, 6, options);
        }, RecognizerApi2.prototype.CONSUME7 = function(tokType, options) {
          return this.consumeInternal(tokType, 7, options);
        }, RecognizerApi2.prototype.CONSUME8 = function(tokType, options) {
          return this.consumeInternal(tokType, 8, options);
        }, RecognizerApi2.prototype.CONSUME9 = function(tokType, options) {
          return this.consumeInternal(tokType, 9, options);
        }, RecognizerApi2.prototype.SUBRULE = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 0, options);
        }, RecognizerApi2.prototype.SUBRULE1 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 1, options);
        }, RecognizerApi2.prototype.SUBRULE2 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 2, options);
        }, RecognizerApi2.prototype.SUBRULE3 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 3, options);
        }, RecognizerApi2.prototype.SUBRULE4 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 4, options);
        }, RecognizerApi2.prototype.SUBRULE5 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 5, options);
        }, RecognizerApi2.prototype.SUBRULE6 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 6, options);
        }, RecognizerApi2.prototype.SUBRULE7 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 7, options);
        }, RecognizerApi2.prototype.SUBRULE8 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 8, options);
        }, RecognizerApi2.prototype.SUBRULE9 = function(ruleToCall, options) {
          return this.subruleInternal(ruleToCall, 9, options);
        }, RecognizerApi2.prototype.OPTION = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 0);
        }, RecognizerApi2.prototype.OPTION1 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 1);
        }, RecognizerApi2.prototype.OPTION2 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 2);
        }, RecognizerApi2.prototype.OPTION3 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 3);
        }, RecognizerApi2.prototype.OPTION4 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 4);
        }, RecognizerApi2.prototype.OPTION5 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 5);
        }, RecognizerApi2.prototype.OPTION6 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 6);
        }, RecognizerApi2.prototype.OPTION7 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 7);
        }, RecognizerApi2.prototype.OPTION8 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 8);
        }, RecognizerApi2.prototype.OPTION9 = function(actionORMethodDef) {
          return this.optionInternal(actionORMethodDef, 9);
        }, RecognizerApi2.prototype.OR = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 0);
        }, RecognizerApi2.prototype.OR1 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 1);
        }, RecognizerApi2.prototype.OR2 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 2);
        }, RecognizerApi2.prototype.OR3 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 3);
        }, RecognizerApi2.prototype.OR4 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 4);
        }, RecognizerApi2.prototype.OR5 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 5);
        }, RecognizerApi2.prototype.OR6 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 6);
        }, RecognizerApi2.prototype.OR7 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 7);
        }, RecognizerApi2.prototype.OR8 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 8);
        }, RecognizerApi2.prototype.OR9 = function(altsOrOpts) {
          return this.orInternal(altsOrOpts, 9);
        }, RecognizerApi2.prototype.MANY = function(actionORMethodDef) {
          this.manyInternal(0, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY1 = function(actionORMethodDef) {
          this.manyInternal(1, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY2 = function(actionORMethodDef) {
          this.manyInternal(2, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY3 = function(actionORMethodDef) {
          this.manyInternal(3, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY4 = function(actionORMethodDef) {
          this.manyInternal(4, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY5 = function(actionORMethodDef) {
          this.manyInternal(5, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY6 = function(actionORMethodDef) {
          this.manyInternal(6, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY7 = function(actionORMethodDef) {
          this.manyInternal(7, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY8 = function(actionORMethodDef) {
          this.manyInternal(8, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY9 = function(actionORMethodDef) {
          this.manyInternal(9, actionORMethodDef);
        }, RecognizerApi2.prototype.MANY_SEP = function(options) {
          this.manySepFirstInternal(0, options);
        }, RecognizerApi2.prototype.MANY_SEP1 = function(options) {
          this.manySepFirstInternal(1, options);
        }, RecognizerApi2.prototype.MANY_SEP2 = function(options) {
          this.manySepFirstInternal(2, options);
        }, RecognizerApi2.prototype.MANY_SEP3 = function(options) {
          this.manySepFirstInternal(3, options);
        }, RecognizerApi2.prototype.MANY_SEP4 = function(options) {
          this.manySepFirstInternal(4, options);
        }, RecognizerApi2.prototype.MANY_SEP5 = function(options) {
          this.manySepFirstInternal(5, options);
        }, RecognizerApi2.prototype.MANY_SEP6 = function(options) {
          this.manySepFirstInternal(6, options);
        }, RecognizerApi2.prototype.MANY_SEP7 = function(options) {
          this.manySepFirstInternal(7, options);
        }, RecognizerApi2.prototype.MANY_SEP8 = function(options) {
          this.manySepFirstInternal(8, options);
        }, RecognizerApi2.prototype.MANY_SEP9 = function(options) {
          this.manySepFirstInternal(9, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE = function(actionORMethodDef) {
          this.atLeastOneInternal(0, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE1 = function(actionORMethodDef) {
          return this.atLeastOneInternal(1, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE2 = function(actionORMethodDef) {
          this.atLeastOneInternal(2, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE3 = function(actionORMethodDef) {
          this.atLeastOneInternal(3, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE4 = function(actionORMethodDef) {
          this.atLeastOneInternal(4, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE5 = function(actionORMethodDef) {
          this.atLeastOneInternal(5, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE6 = function(actionORMethodDef) {
          this.atLeastOneInternal(6, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE7 = function(actionORMethodDef) {
          this.atLeastOneInternal(7, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE8 = function(actionORMethodDef) {
          this.atLeastOneInternal(8, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE9 = function(actionORMethodDef) {
          this.atLeastOneInternal(9, actionORMethodDef);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP = function(options) {
          this.atLeastOneSepFirstInternal(0, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP1 = function(options) {
          this.atLeastOneSepFirstInternal(1, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP2 = function(options) {
          this.atLeastOneSepFirstInternal(2, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP3 = function(options) {
          this.atLeastOneSepFirstInternal(3, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP4 = function(options) {
          this.atLeastOneSepFirstInternal(4, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP5 = function(options) {
          this.atLeastOneSepFirstInternal(5, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP6 = function(options) {
          this.atLeastOneSepFirstInternal(6, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP7 = function(options) {
          this.atLeastOneSepFirstInternal(7, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP8 = function(options) {
          this.atLeastOneSepFirstInternal(8, options);
        }, RecognizerApi2.prototype.AT_LEAST_ONE_SEP9 = function(options) {
          this.atLeastOneSepFirstInternal(9, options);
        }, RecognizerApi2.prototype.RULE = function(name, implementation, config) {
          if (config === void 0 && (config = parser_1.DEFAULT_RULE_CONFIG), utils_1.contains(this.definedRulesNames, name)) {
            var errMsg = errors_public_1.defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
              topLevelRule: name,
              grammarName: this.className
            }), error = {
              message: errMsg,
              type: parser_1.ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
              ruleName: name
            };
            this.definitionErrors.push(error);
          }
          this.definedRulesNames.push(name);
          var ruleImplementation = this.defineRule(name, implementation, config);
          return this[name] = ruleImplementation, ruleImplementation;
        }, RecognizerApi2.prototype.OVERRIDE_RULE = function(name, impl, config) {
          config === void 0 && (config = parser_1.DEFAULT_RULE_CONFIG);
          var ruleErrors = [];
          ruleErrors = ruleErrors.concat(checks_1.validateRuleIsOverridden(name, this.definedRulesNames, this.className)), this.definitionErrors.push.apply(this.definitionErrors, ruleErrors);
          var ruleImplementation = this.defineRule(name, impl, config);
          return this[name] = ruleImplementation, ruleImplementation;
        }, RecognizerApi2.prototype.BACKTRACK = function(grammarRule, args) {
          return function() {
            this.isBackTrackingStack.push(1);
            var orgState = this.saveRecogState();
            try {
              return grammarRule.apply(this, args), !0;
            } catch (e) {
              if (exceptions_public_1.isRecognitionException(e))
                return !1;
              throw e;
            } finally {
              this.reloadRecogState(orgState), this.isBackTrackingStack.pop();
            }
          };
        }, RecognizerApi2.prototype.getGAstProductions = function() {
          return this.gastProductionsCache;
        }, RecognizerApi2.prototype.getSerializedGastProductions = function() {
          return gast_public_1.serializeGrammar(utils_1.values(this.gastProductionsCache));
        }, RecognizerApi2;
      }()
    );
    exports2.RecognizerApi = RecognizerApi;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js
var require_recognizer_engine = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), keys_1 = require_keys(), exceptions_public_1 = require_exceptions_public(), lookahead_1 = require_lookahead(), interpreter_1 = require_interpreter(), parser_1 = require_parser(), recoverable_1 = require_recoverable(), tokens_public_1 = require_tokens_public(), tokens_1 = require_tokens(), lang_extensions_1 = require_lang_extensions(), RecognizerEngine = (
      /** @class */
      function() {
        function RecognizerEngine2() {
        }
        return RecognizerEngine2.prototype.initRecognizerEngine = function(tokenVocabulary, config) {
          if (this.className = lang_extensions_1.classNameFromInstance(this), this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = tokens_1.tokenStructuredMatcherNoCategories, this.definedRulesNames = [], this.tokensMap = {}, this.allRuleNames = [], this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, utils_1.has(config, "serializedGrammar"))
            throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
          if (utils_1.isArray(tokenVocabulary)) {
            if (utils_1.isEmpty(tokenVocabulary))
              throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
            if (typeof tokenVocabulary[0].startOffset == "number")
              throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
          }
          if (utils_1.isArray(tokenVocabulary))
            this.tokensMap = utils_1.reduce(tokenVocabulary, function(acc, tokType) {
              return acc[tokType.name] = tokType, acc;
            }, {});
          else if (utils_1.has(tokenVocabulary, "modes") && utils_1.every(utils_1.flatten(utils_1.values(tokenVocabulary.modes)), tokens_1.isTokenType)) {
            var allTokenTypes = utils_1.flatten(utils_1.values(tokenVocabulary.modes)), uniqueTokens = utils_1.uniq(allTokenTypes);
            this.tokensMap = utils_1.reduce(uniqueTokens, function(acc, tokType) {
              return acc[tokType.name] = tokType, acc;
            }, {});
          } else if (utils_1.isObject(tokenVocabulary))
            this.tokensMap = utils_1.cloneObj(tokenVocabulary);
          else
            throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
          this.tokensMap.EOF = tokens_public_1.EOF;
          var noTokenCategoriesUsed = utils_1.every(utils_1.values(tokenVocabulary), function(tokenConstructor) {
            return utils_1.isEmpty(tokenConstructor.categoryMatches);
          });
          this.tokenMatcher = noTokenCategoriesUsed ? tokens_1.tokenStructuredMatcherNoCategories : tokens_1.tokenStructuredMatcher, tokens_1.augmentTokenTypes(utils_1.values(this.tokensMap));
        }, RecognizerEngine2.prototype.defineRule = function(ruleName, impl, config) {
          if (this.selfAnalysisDone)
            throw Error("Grammar rule <" + ruleName + "> may not be defined after the 'performSelfAnalysis' method has been called'\nMake sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");
          var resyncEnabled = utils_1.has(config, "resyncEnabled") ? config.resyncEnabled : parser_1.DEFAULT_RULE_CONFIG.resyncEnabled, recoveryValueFunc = utils_1.has(config, "recoveryValueFunc") ? config.recoveryValueFunc : parser_1.DEFAULT_RULE_CONFIG.recoveryValueFunc, shortName = this.ruleShortNameIdx << keys_1.BITS_FOR_METHOD_TYPE + keys_1.BITS_FOR_OCCURRENCE_IDX;
          this.ruleShortNameIdx++, this.shortRuleNameToFull[shortName] = ruleName, this.fullRuleNameToShort[ruleName] = shortName;
          function invokeRuleWithTry(args) {
            try {
              if (this.outputCst === !0) {
                impl.apply(this, args);
                var cst = this.CST_STACK[this.CST_STACK.length - 1];
                return this.cstPostRule(cst), cst;
              } else
                return impl.apply(this, args);
            } catch (e) {
              return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
            } finally {
              this.ruleFinallyStateUpdate();
            }
          }
          var wrappedGrammarRule;
          wrappedGrammarRule = function(idxInCallingRule, args) {
            return idxInCallingRule === void 0 && (idxInCallingRule = 0), this.ruleInvocationStateUpdate(shortName, ruleName, idxInCallingRule), invokeRuleWithTry.call(this, args);
          };
          var ruleNamePropName = "ruleName";
          return wrappedGrammarRule[ruleNamePropName] = ruleName, wrappedGrammarRule.originalGrammarAction = impl, wrappedGrammarRule;
        }, RecognizerEngine2.prototype.invokeRuleCatch = function(e, resyncEnabledConfig, recoveryValueFunc) {
          var isFirstInvokedRule = this.RULE_STACK.length === 1, reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
          if (exceptions_public_1.isRecognitionException(e)) {
            var recogError = e;
            if (reSyncEnabled) {
              var reSyncTokType = this.findReSyncTokenType();
              if (this.isInCurrentRuleReSyncSet(reSyncTokType))
                if (recogError.resyncedTokens = this.reSyncTo(reSyncTokType), this.outputCst) {
                  var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                  return partialCstResult.recoveredNode = !0, partialCstResult;
                } else
                  return recoveryValueFunc();
              else {
                if (this.outputCst) {
                  var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                  partialCstResult.recoveredNode = !0, recogError.partialCstResult = partialCstResult;
                }
                throw recogError;
              }
            } else {
              if (isFirstInvokedRule)
                return this.moveToTerminatedState(), recoveryValueFunc();
              throw recogError;
            }
          } else
            throw e;
        }, RecognizerEngine2.prototype.optionInternal = function(actionORMethodDef, occurrence) {
          var key = this.getKeyForAutomaticLookahead(keys_1.OPTION_IDX, occurrence), nestedName = this.nestedRuleBeforeClause(actionORMethodDef, key);
          try {
            return this.optionInternalLogic(actionORMethodDef, occurrence, key);
          } finally {
            nestedName !== void 0 && this.nestedRuleFinallyClause(key, nestedName);
          }
        }, RecognizerEngine2.prototype.optionInternalNoCst = function(actionORMethodDef, occurrence) {
          var key = this.getKeyForAutomaticLookahead(keys_1.OPTION_IDX, occurrence);
          return this.optionInternalLogic(actionORMethodDef, occurrence, key);
        }, RecognizerEngine2.prototype.optionInternalLogic = function(actionORMethodDef, occurrence, key) {
          var _this = this, lookAheadFunc = this.getLaFuncFromCache(key), action, predicate;
          if (actionORMethodDef.DEF !== void 0) {
            if (action = actionORMethodDef.DEF, predicate = actionORMethodDef.GATE, predicate !== void 0) {
              var orgLookaheadFunction_1 = lookAheadFunc;
              lookAheadFunc = function() {
                return predicate.call(_this) && orgLookaheadFunction_1.call(_this);
              };
            }
          } else
            action = actionORMethodDef;
          if (lookAheadFunc.call(this) === !0)
            return action.call(this);
        }, RecognizerEngine2.prototype.atLeastOneInternal = function(prodOccurrence, actionORMethodDef) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_IDX, prodOccurrence), nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);
          try {
            return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
          } finally {
            nestedName !== void 0 && this.nestedRuleFinallyClause(laKey, nestedName);
          }
        }, RecognizerEngine2.prototype.atLeastOneInternalNoCst = function(prodOccurrence, actionORMethodDef) {
          var key = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_IDX, prodOccurrence);
          this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key);
        }, RecognizerEngine2.prototype.atLeastOneInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
          var _this = this, lookAheadFunc = this.getLaFuncFromCache(key), action, predicate;
          if (actionORMethodDef.DEF !== void 0) {
            if (action = actionORMethodDef.DEF, predicate = actionORMethodDef.GATE, predicate !== void 0) {
              var orgLookaheadFunction_2 = lookAheadFunc;
              lookAheadFunc = function() {
                return predicate.call(_this) && orgLookaheadFunction_2.call(_this);
              };
            }
          } else
            action = actionORMethodDef;
          if (lookAheadFunc.call(this) === !0)
            for (var notStuck = this.doSingleRepetition(action); lookAheadFunc.call(this) === !0 && notStuck === !0; )
              notStuck = this.doSingleRepetition(action);
          else
            throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
          this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, keys_1.AT_LEAST_ONE_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneWalker);
        }, RecognizerEngine2.prototype.atLeastOneSepFirstInternal = function(prodOccurrence, options) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence), nestedName = this.nestedRuleBeforeClause(options, laKey);
          try {
            this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
          } finally {
            nestedName !== void 0 && this.nestedRuleFinallyClause(laKey, nestedName);
          }
        }, RecognizerEngine2.prototype.atLeastOneSepFirstInternalNoCst = function(prodOccurrence, options) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence);
          this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
        }, RecognizerEngine2.prototype.atLeastOneSepFirstInternalLogic = function(prodOccurrence, options, key) {
          var _this = this, action = options.DEF, separator = options.SEP, firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
          if (firstIterationLookaheadFunc.call(this) === !0) {
            action.call(this);
            for (var separatorLookAheadFunc = function() {
              return _this.tokenMatcher(_this.LA(1), separator);
            }; this.tokenMatcher(this.LA(1), separator) === !0; )
              this.CONSUME(separator), action.call(this);
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [prodOccurrence, separator, separatorLookAheadFunc, action, interpreter_1.NextTerminalAfterAtLeastOneSepWalker], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterAtLeastOneSepWalker);
          } else
            throw this.raiseEarlyExitException(prodOccurrence, lookahead_1.PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
        }, RecognizerEngine2.prototype.manyInternal = function(prodOccurrence, actionORMethodDef) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_IDX, prodOccurrence), nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);
          try {
            return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
          } finally {
            nestedName !== void 0 && this.nestedRuleFinallyClause(laKey, nestedName);
          }
        }, RecognizerEngine2.prototype.manyInternalNoCst = function(prodOccurrence, actionORMethodDef) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_IDX, prodOccurrence);
          return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
        }, RecognizerEngine2.prototype.manyInternalLogic = function(prodOccurrence, actionORMethodDef, key) {
          var _this = this, lookaheadFunction = this.getLaFuncFromCache(key), action, predicate;
          if (actionORMethodDef.DEF !== void 0) {
            if (action = actionORMethodDef.DEF, predicate = actionORMethodDef.GATE, predicate !== void 0) {
              var orgLookaheadFunction_3 = lookaheadFunction;
              lookaheadFunction = function() {
                return predicate.call(_this) && orgLookaheadFunction_3.call(_this);
              };
            }
          } else
            action = actionORMethodDef;
          for (var notStuck = !0; lookaheadFunction.call(this) === !0 && notStuck === !0; )
            notStuck = this.doSingleRepetition(action);
          this.attemptInRepetitionRecovery(
            this.manyInternal,
            [prodOccurrence, actionORMethodDef],
            lookaheadFunction,
            keys_1.MANY_IDX,
            prodOccurrence,
            interpreter_1.NextTerminalAfterManyWalker,
            // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
            // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
            // An infinite loop cannot occur as:
            // - Either the lookahead is guaranteed to consume something (Single Token Separator)
            // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
            notStuck
          );
        }, RecognizerEngine2.prototype.manySepFirstInternal = function(prodOccurrence, options) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_SEP_IDX, prodOccurrence), nestedName = this.nestedRuleBeforeClause(options, laKey);
          try {
            this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
          } finally {
            nestedName !== void 0 && this.nestedRuleFinallyClause(laKey, nestedName);
          }
        }, RecognizerEngine2.prototype.manySepFirstInternalNoCst = function(prodOccurrence, options) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.MANY_SEP_IDX, prodOccurrence);
          this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
        }, RecognizerEngine2.prototype.manySepFirstInternalLogic = function(prodOccurrence, options, key) {
          var _this = this, action = options.DEF, separator = options.SEP, firstIterationLaFunc = this.getLaFuncFromCache(key);
          if (firstIterationLaFunc.call(this) === !0) {
            action.call(this);
            for (var separatorLookAheadFunc = function() {
              return _this.tokenMatcher(_this.LA(1), separator);
            }; this.tokenMatcher(this.LA(1), separator) === !0; )
              this.CONSUME(separator), action.call(this);
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [prodOccurrence, separator, separatorLookAheadFunc, action, interpreter_1.NextTerminalAfterManySepWalker], separatorLookAheadFunc, keys_1.MANY_SEP_IDX, prodOccurrence, interpreter_1.NextTerminalAfterManySepWalker);
          }
        }, RecognizerEngine2.prototype.repetitionSepSecondInternal = function(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
          for (; separatorLookAheadFunc(); )
            this.CONSUME(separator), action.call(this);
          this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker], separatorLookAheadFunc, keys_1.AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
        }, RecognizerEngine2.prototype.doSingleRepetition = function(action) {
          var beforeIteration = this.getLexerPosition();
          action.call(this);
          var afterIteration = this.getLexerPosition();
          return afterIteration > beforeIteration;
        }, RecognizerEngine2.prototype.orInternalNoCst = function(altsOrOpts, occurrence) {
          var alts = utils_1.isArray(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF, laKey = this.getKeyForAutomaticLookahead(keys_1.OR_IDX, occurrence), laFunc = this.getLaFuncFromCache(laKey), altIdxToTake = laFunc.call(this, alts);
          if (altIdxToTake !== void 0) {
            var chosenAlternative = alts[altIdxToTake];
            return chosenAlternative.ALT.call(this);
          }
          this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
        }, RecognizerEngine2.prototype.orInternal = function(altsOrOpts, occurrence) {
          var laKey = this.getKeyForAutomaticLookahead(keys_1.OR_IDX, occurrence), nestedName = this.nestedRuleBeforeClause(altsOrOpts, laKey);
          try {
            var alts = utils_1.isArray(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF, laFunc = this.getLaFuncFromCache(laKey), altIdxToTake = laFunc.call(this, alts);
            if (altIdxToTake !== void 0) {
              var chosenAlternative = alts[altIdxToTake], nestedAltBeforeClauseResult = this.nestedAltBeforeClause(chosenAlternative, occurrence, keys_1.OR_IDX, altIdxToTake);
              try {
                return chosenAlternative.ALT.call(this);
              } finally {
                nestedAltBeforeClauseResult !== void 0 && this.nestedRuleFinallyClause(nestedAltBeforeClauseResult.shortName, nestedAltBeforeClauseResult.nestedName);
              }
            }
            this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
          } finally {
            nestedName !== void 0 && this.nestedRuleFinallyClause(laKey, nestedName);
          }
        }, RecognizerEngine2.prototype.ruleFinallyStateUpdate = function() {
          if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
            var firstRedundantTok = this.LA(1), errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
              firstRedundant: firstRedundantTok,
              ruleName: this.getCurrRuleFullName()
            });
            this.SAVE_ERROR(new exceptions_public_1.NotAllInputParsedException(errMsg, firstRedundantTok));
          }
        }, RecognizerEngine2.prototype.subruleInternal = function(ruleToCall, idx, options) {
          var ruleResult;
          try {
            var args = options !== void 0 ? options.ARGS : void 0;
            return ruleResult = ruleToCall.call(this, idx, args), this.cstPostNonTerminal(ruleResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleToCall.ruleName), ruleResult;
          } catch (e) {
            this.subruleInternalError(e, options, ruleToCall.ruleName);
          }
        }, RecognizerEngine2.prototype.subruleInternalError = function(e, options, ruleName) {
          throw exceptions_public_1.isRecognitionException(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleName), delete e.partialCstResult), e;
        }, RecognizerEngine2.prototype.consumeInternal = function(tokType, idx, options) {
          var consumedToken;
          try {
            var nextToken = this.LA(1);
            this.tokenMatcher(nextToken, tokType) === !0 ? (this.consumeToken(), consumedToken = nextToken) : this.consumeInternalError(tokType, nextToken, options);
          } catch (eFromConsumption) {
            consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
          }
          return this.cstPostTerminal(options !== void 0 && options.LABEL !== void 0 ? options.LABEL : tokType.name, consumedToken), consumedToken;
        }, RecognizerEngine2.prototype.consumeInternalError = function(tokType, nextToken, options) {
          var msg, previousToken = this.LA(0);
          throw options !== void 0 && options.ERR_MSG ? msg = options.ERR_MSG : msg = this.errorMessageProvider.buildMismatchTokenMessage({
            expected: tokType,
            actual: nextToken,
            previous: previousToken,
            ruleName: this.getCurrRuleFullName()
          }), this.SAVE_ERROR(new exceptions_public_1.MismatchedTokenException(msg, nextToken, previousToken));
        }, RecognizerEngine2.prototype.consumeInternalRecovery = function(tokType, idx, eFromConsumption) {
          if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
          eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
            var follows = this.getFollowsForInRuleRecovery(tokType, idx);
            try {
              return this.tryInRuleRecovery(tokType, follows);
            } catch (eFromInRuleRecovery) {
              throw eFromInRuleRecovery.name === recoverable_1.IN_RULE_RECOVERY_EXCEPTION ? eFromConsumption : eFromInRuleRecovery;
            }
          } else
            throw eFromConsumption;
        }, RecognizerEngine2.prototype.saveRecogState = function() {
          var savedErrors = this.errors, savedRuleStack = utils_1.cloneArr(this.RULE_STACK);
          return {
            errors: savedErrors,
            lexerState: this.exportLexerState(),
            RULE_STACK: savedRuleStack,
            CST_STACK: this.CST_STACK,
            LAST_EXPLICIT_RULE_STACK: this.LAST_EXPLICIT_RULE_STACK
          };
        }, RecognizerEngine2.prototype.reloadRecogState = function(newState) {
          this.errors = newState.errors, this.importLexerState(newState.lexerState), this.RULE_STACK = newState.RULE_STACK;
        }, RecognizerEngine2.prototype.ruleInvocationStateUpdate = function(shortName, fullName, idxInCallingRule) {
          this.RULE_OCCURRENCE_STACK.push(idxInCallingRule), this.RULE_STACK.push(shortName), this.cstInvocationStateUpdate(fullName, shortName);
        }, RecognizerEngine2.prototype.isBackTracking = function() {
          return this.isBackTrackingStack.length !== 0;
        }, RecognizerEngine2.prototype.getCurrRuleFullName = function() {
          var shortName = this.getLastExplicitRuleShortName();
          return this.shortRuleNameToFull[shortName];
        }, RecognizerEngine2.prototype.shortRuleNameToFullName = function(shortName) {
          return this.shortRuleNameToFull[shortName];
        }, RecognizerEngine2.prototype.isAtEndOfInput = function() {
          return this.tokenMatcher(this.LA(1), tokens_public_1.EOF);
        }, RecognizerEngine2.prototype.reset = function() {
          this.resetLexerState(), this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.LAST_EXPLICIT_RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
        }, RecognizerEngine2;
      }()
    );
    exports2.RecognizerEngine = RecognizerEngine;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js
var require_error_handler = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var exceptions_public_1 = require_exceptions_public(), utils_1 = require_utils(), lookahead_1 = require_lookahead(), parser_1 = require_parser(), ErrorHandler = (
      /** @class */
      function() {
        function ErrorHandler2() {
        }
        return ErrorHandler2.prototype.initErrorHandler = function(config) {
          this._errors = [], this.errorMessageProvider = utils_1.defaults(config.errorMessageProvider, parser_1.DEFAULT_PARSER_CONFIG.errorMessageProvider);
        }, ErrorHandler2.prototype.SAVE_ERROR = function(error) {
          if (exceptions_public_1.isRecognitionException(error))
            return error.context = {
              ruleStack: this.getHumanReadableRuleStack(),
              ruleOccurrenceStack: utils_1.cloneArr(this.RULE_OCCURRENCE_STACK)
            }, this._errors.push(error), error;
          throw Error("Trying to save an Error which is not a RecognitionException");
        }, Object.defineProperty(ErrorHandler2.prototype, "errors", {
          // TODO: extract these methods to ErrorHandler Trait?
          get: function() {
            return utils_1.cloneArr(this._errors);
          },
          set: function(newErrors) {
            this._errors = newErrors;
          },
          enumerable: !0,
          configurable: !0
        }), ErrorHandler2.prototype.raiseEarlyExitException = function(occurrence, prodType, userDefinedErrMsg) {
          for (var ruleName = this.getCurrRuleFullName(), ruleGrammar = this.getGAstProductions()[ruleName], lookAheadPathsPerAlternative = lookahead_1.getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead), insideProdPaths = lookAheadPathsPerAlternative[0], actualTokens = [], i = 1; i <= this.maxLookahead; i++)
            actualTokens.push(this.LA(i));
          var msg = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: insideProdPaths,
            actual: actualTokens,
            previous: this.LA(0),
            customUserDescription: userDefinedErrMsg,
            ruleName: ruleName
          });
          throw this.SAVE_ERROR(new exceptions_public_1.EarlyExitException(msg, this.LA(1), this.LA(0)));
        }, ErrorHandler2.prototype.raiseNoAltException = function(occurrence, errMsgTypes) {
          for (var ruleName = this.getCurrRuleFullName(), ruleGrammar = this.getGAstProductions()[ruleName], lookAheadPathsPerAlternative = lookahead_1.getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead), actualTokens = [], i = 1; i <= this.maxLookahead; i++)
            actualTokens.push(this.LA(i));
          var previousToken = this.LA(0), errMsg = this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: lookAheadPathsPerAlternative,
            actual: actualTokens,
            previous: previousToken,
            customUserDescription: errMsgTypes,
            ruleName: this.getCurrRuleFullName()
          });
          throw this.SAVE_ERROR(new exceptions_public_1.NoViableAltException(errMsg, this.LA(1), previousToken));
        }, ErrorHandler2;
      }()
    );
    exports2.ErrorHandler = ErrorHandler;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js
var require_context_assist = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var interpreter_1 = require_interpreter(), utils_1 = require_utils(), ContentAssist = (
      /** @class */
      function() {
        function ContentAssist2() {
        }
        return ContentAssist2.prototype.initContentAssist = function() {
        }, ContentAssist2.prototype.computeContentAssist = function(startRuleName, precedingInput) {
          var startRuleGast = this.gastProductionsCache[startRuleName];
          if (utils_1.isUndefined(startRuleGast))
            throw Error("Rule ->" + startRuleName + "<- does not exist in this grammar.");
          return interpreter_1.nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
        }, ContentAssist2.prototype.getNextPossibleTokenTypes = function(grammarPath) {
          var topRuleName = utils_1.first(grammarPath.ruleStack), gastProductions = this.getGAstProductions(), topProduction = gastProductions[topRuleName], nextPossibleTokenTypes = new interpreter_1.NextAfterTokenWalker(topProduction, grammarPath).startWalking();
          return nextPossibleTokenTypes;
        }, ContentAssist2;
      }()
    );
    exports2.ContentAssist = ContentAssist;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js
var require_gast_recorder = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), gast_public_1 = require_gast_public(), lexer_public_1 = require_lexer_public(), tokens_1 = require_tokens(), tokens_public_1 = require_tokens_public(), parser_1 = require_parser(), keys_1 = require_keys(), RECORDING_NULL_OBJECT = {
      description: "This Object indicates the Parser is during Recording Phase"
    };
    Object.freeze(RECORDING_NULL_OBJECT);
    var HANDLE_SEPARATOR = !0, MAX_METHOD_IDX = Math.pow(2, keys_1.BITS_FOR_OCCURRENCE_IDX) - 1, RFT = tokens_public_1.createToken({
      name: "RECORDING_PHASE_TOKEN",
      pattern: lexer_public_1.Lexer.NA
    });
    tokens_1.augmentTokenTypes([RFT]);
    var RECORDING_PHASE_TOKEN = tokens_public_1.createTokenInstance(
      RFT,
      "This IToken indicates the Parser is in Recording Phase\n	See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details",
      // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
      // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
      -1,
      -1,
      -1,
      -1,
      -1,
      -1
    );
    Object.freeze(RECORDING_PHASE_TOKEN);
    var RECORDING_PHASE_CSTNODE = {
      name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details",
      children: {}
    }, GastRecorder = (
      /** @class */
      function() {
        function GastRecorder2() {
        }
        return GastRecorder2.prototype.initGastRecorder = function(config) {
          this.recordingProdStack = [], this.RECORDING_PHASE = !1;
        }, GastRecorder2.prototype.enableRecording = function() {
          var _this = this;
          this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", function() {
            for (var _loop_1 = function(i2) {
              var idx = i2 > 0 ? i2 : "";
              _this["CONSUME" + idx] = function(arg1, arg2) {
                return this.consumeInternalRecord(arg1, i2, arg2);
              }, _this["SUBRULE" + idx] = function(arg1, arg2) {
                return this.subruleInternalRecord(arg1, i2, arg2);
              }, _this["OPTION" + idx] = function(arg1) {
                return this.optionInternalRecord(arg1, i2);
              }, _this["OR" + idx] = function(arg1) {
                return this.orInternalRecord(arg1, i2);
              }, _this["MANY" + idx] = function(arg1) {
                this.manyInternalRecord(i2, arg1);
              }, _this["MANY_SEP" + idx] = function(arg1) {
                this.manySepFirstInternalRecord(i2, arg1);
              }, _this["AT_LEAST_ONE" + idx] = function(arg1) {
                this.atLeastOneInternalRecord(i2, arg1);
              }, _this["AT_LEAST_ONE_SEP" + idx] = function(arg1) {
                this.atLeastOneSepFirstInternalRecord(i2, arg1);
              };
            }, i = 0; i < 10; i++)
              _loop_1(i);
            _this.consume = function(idx, arg1, arg2) {
              return this.consumeInternalRecord(arg1, idx, arg2);
            }, _this.subrule = function(idx, arg1, arg2) {
              return this.subruleInternalRecord(arg1, idx, arg2);
            }, _this.option = function(idx, arg1) {
              return this.optionInternalRecord(arg1, idx);
            }, _this.or = function(idx, arg1) {
              return this.orInternalRecord(arg1, idx);
            }, _this.many = function(idx, arg1) {
              this.manyInternalRecord(idx, arg1);
            }, _this.atLeastOne = function(idx, arg1) {
              this.atLeastOneInternalRecord(idx, arg1);
            }, _this.ACTION = _this.ACTION_RECORD, _this.BACKTRACK = _this.BACKTRACK_RECORD, _this.LA = _this.LA_RECORD;
          });
        }, GastRecorder2.prototype.disableRecording = function() {
          var _this = this;
          this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", function() {
            for (var i = 0; i < 10; i++) {
              var idx = i > 0 ? i : "";
              delete _this["CONSUME" + idx], delete _this["SUBRULE" + idx], delete _this["OPTION" + idx], delete _this["OR" + idx], delete _this["MANY" + idx], delete _this["MANY_SEP" + idx], delete _this["AT_LEAST_ONE" + idx], delete _this["AT_LEAST_ONE_SEP" + idx];
            }
            delete _this.consume, delete _this.subrule, delete _this.option, delete _this.or, delete _this.many, delete _this.atLeastOne, delete _this.ACTION, delete _this.BACKTRACK, delete _this.LA;
          });
        }, GastRecorder2.prototype.ACTION_RECORD = function(impl) {
        }, GastRecorder2.prototype.BACKTRACK_RECORD = function(grammarRule, args) {
          return function() {
            return !0;
          };
        }, GastRecorder2.prototype.LA_RECORD = function(howMuch) {
          return parser_1.END_OF_FILE;
        }, GastRecorder2.prototype.topLevelRuleRecord = function(name, def) {
          try {
            var newTopLevelRule = new gast_public_1.Rule({
              definition: [],
              name: name
            });
            return newTopLevelRule.name = name, this.recordingProdStack.push(newTopLevelRule), def.call(this), this.recordingProdStack.pop(), newTopLevelRule;
          } catch (originalError) {
            if (originalError.KNOWN_RECORDER_ERROR !== !0)
              try {
                originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording';
              } catch (mutabilityError) {
                throw originalError;
              }
            throw originalError;
          }
        }, GastRecorder2.prototype.optionInternalRecord = function(actionORMethodDef, occurrence) {
          return recordProd.call(this, gast_public_1.Option, actionORMethodDef, occurrence);
        }, GastRecorder2.prototype.atLeastOneInternalRecord = function(occurrence, actionORMethodDef) {
          recordProd.call(this, gast_public_1.RepetitionMandatory, actionORMethodDef, occurrence);
        }, GastRecorder2.prototype.atLeastOneSepFirstInternalRecord = function(occurrence, options) {
          recordProd.call(this, gast_public_1.RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
        }, GastRecorder2.prototype.manyInternalRecord = function(occurrence, actionORMethodDef) {
          recordProd.call(this, gast_public_1.Repetition, actionORMethodDef, occurrence);
        }, GastRecorder2.prototype.manySepFirstInternalRecord = function(occurrence, options) {
          recordProd.call(this, gast_public_1.RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
        }, GastRecorder2.prototype.orInternalRecord = function(altsOrOpts, occurrence) {
          return recordOrProd.call(this, altsOrOpts, occurrence);
        }, GastRecorder2.prototype.subruleInternalRecord = function(ruleToCall, occurrence, options) {
          if (assertMethodIdxIsValid(occurrence), !ruleToCall || utils_1.has(ruleToCall, "ruleName") === !1) {
            var error = new Error("<SUBRULE" + getIdxSuffix(occurrence) + "> argument is invalid" + (" expecting a Parser method reference but got: <" + JSON.stringify(ruleToCall) + ">") + ("\n inside top level rule: <" + this.recordingProdStack[0].name + ">"));
            throw error.KNOWN_RECORDER_ERROR = !0, error;
          }
          var prevProd = utils_1.peek(this.recordingProdStack), ruleName = ruleToCall.ruleName, newNoneTerminal = new gast_public_1.NonTerminal({
            idx: occurrence,
            nonTerminalName: ruleName,
            // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
            referencedRule: void 0
          });
          return prevProd.definition.push(newNoneTerminal), this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
        }, GastRecorder2.prototype.consumeInternalRecord = function(tokType, occurrence, options) {
          if (assertMethodIdxIsValid(occurrence), !tokens_1.hasShortKeyProperty(tokType)) {
            var error = new Error("<CONSUME" + getIdxSuffix(occurrence) + "> argument is invalid" + (" expecting a TokenType reference but got: <" + JSON.stringify(tokType) + ">") + ("\n inside top level rule: <" + this.recordingProdStack[0].name + ">"));
            throw error.KNOWN_RECORDER_ERROR = !0, error;
          }
          var prevProd = utils_1.peek(this.recordingProdStack), newNoneTerminal = new gast_public_1.Terminal({
            idx: occurrence,
            terminalType: tokType
          });
          return prevProd.definition.push(newNoneTerminal), RECORDING_PHASE_TOKEN;
        }, GastRecorder2;
      }()
    );
    exports2.GastRecorder = GastRecorder;
    function recordProd(prodConstructor, mainProdArg, occurrence, handleSep) {
      handleSep === void 0 && (handleSep = !1), assertMethodIdxIsValid(occurrence);
      var prevProd = utils_1.peek(this.recordingProdStack), grammarAction = utils_1.isFunction(mainProdArg) ? mainProdArg : mainProdArg.DEF, newProd = new prodConstructor({
        definition: [],
        idx: occurrence
      });
      return utils_1.has(mainProdArg, "NAME") && (newProd.name = mainProdArg.NAME), handleSep && (newProd.separator = mainProdArg.SEP), utils_1.has(mainProdArg, "MAX_LOOKAHEAD") && (newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD), this.recordingProdStack.push(newProd), grammarAction.call(this), prevProd.definition.push(newProd), this.recordingProdStack.pop(), RECORDING_NULL_OBJECT;
    }
    function recordOrProd(mainProdArg, occurrence) {
      var _this = this;
      assertMethodIdxIsValid(occurrence);
      var prevProd = utils_1.peek(this.recordingProdStack), hasOptions = utils_1.isArray(mainProdArg) === !1, alts = hasOptions === !1 ? mainProdArg : mainProdArg.DEF, newOrProd = new gast_public_1.Alternation({
        definition: [],
        idx: occurrence,
        ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === !0
      });
      utils_1.has(mainProdArg, "NAME") && (newOrProd.name = mainProdArg.NAME), utils_1.has(mainProdArg, "MAX_LOOKAHEAD") && (newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD);
      var hasPredicates = utils_1.some(alts, function(currAlt) {
        return utils_1.isFunction(currAlt.GATE);
      });
      return newOrProd.hasPredicates = hasPredicates, prevProd.definition.push(newOrProd), utils_1.forEach(alts, function(currAlt) {
        var currAltFlat = new gast_public_1.Flat({
          definition: []
        });
        newOrProd.definition.push(currAltFlat), utils_1.has(currAlt, "NAME") && (currAltFlat.name = currAlt.NAME), utils_1.has(currAlt, "IGNORE_AMBIGUITIES") ? currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES : utils_1.has(currAlt, "GATE") && (currAltFlat.ignoreAmbiguities = !0), _this.recordingProdStack.push(currAltFlat), currAlt.ALT.call(_this), _this.recordingProdStack.pop();
      }), RECORDING_NULL_OBJECT;
    }
    function getIdxSuffix(idx) {
      return idx === 0 ? "" : "" + idx;
    }
    function assertMethodIdxIsValid(idx) {
      if (idx < 0 || idx > MAX_METHOD_IDX) {
        var error = new Error(
          // The stack trace will contain all the needed details
          "Invalid DSL Method idx value: <" + idx + ">\n	" + ("Idx value must be a none negative value smaller than " + (MAX_METHOD_IDX + 1))
        );
        throw error.KNOWN_RECORDER_ERROR = !0, error;
      }
    }
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js
var require_perf_tracer = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), parser_1 = require_parser(), PerformanceTracer = (
      /** @class */
      function() {
        function PerformanceTracer2() {
        }
        return PerformanceTracer2.prototype.initPerformanceTracer = function(config) {
          if (utils_1.has(config, "traceInitPerf")) {
            var userTraceInitPerf = config.traceInitPerf, traceIsNumber = typeof userTraceInitPerf == "number";
            this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : 1 / 0, this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf;
          } else
            this.traceInitMaxIdent = 0, this.traceInitPerf = parser_1.DEFAULT_PARSER_CONFIG.traceInitPerf;
          this.traceInitIndent = -1;
        }, PerformanceTracer2.prototype.TRACE_INIT = function(phaseDesc, phaseImpl) {
          if (this.traceInitPerf === !0) {
            this.traceInitIndent++;
            var indent = new Array(this.traceInitIndent + 1).join("	");
            this.traceInitIndent < this.traceInitMaxIdent && console.log(indent + "--> <" + phaseDesc + ">");
            var _a = utils_1.timer(phaseImpl), time = _a.time, value = _a.value, traceMethod = time > 10 ? console.warn : console.log;
            return this.traceInitIndent < this.traceInitMaxIdent && traceMethod(indent + "<-- <" + phaseDesc + "> time: " + time + "ms"), this.traceInitIndent--, value;
          } else
            return phaseImpl();
        }, PerformanceTracer2;
      }()
    );
    exports2.PerformanceTracer = PerformanceTracer;
  }
});

// ../../node_modules/chevrotain/lib/src/parse/parser/parser.js
var require_parser = __commonJS({
  "../../node_modules/chevrotain/lib/src/parse/parser/parser.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var _extendStatics = function(d, b) {
        return _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            b2.hasOwnProperty(p) && (d2[p] = b2[p]);
        }, _extendStatics(d, b);
      };
      return function(d, b) {
        _extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), follow_1 = require_follow(), tokens_public_1 = require_tokens_public(), cst_1 = require_cst(), errors_public_1 = require_errors_public(), gast_resolver_public_1 = require_gast_resolver_public(), recoverable_1 = require_recoverable(), looksahead_1 = require_looksahead(), tree_builder_1 = require_tree_builder(), lexer_adapter_1 = require_lexer_adapter(), recognizer_api_1 = require_recognizer_api(), recognizer_engine_1 = require_recognizer_engine(), error_handler_1 = require_error_handler(), context_assist_1 = require_context_assist(), gast_recorder_1 = require_gast_recorder(), perf_tracer_1 = require_perf_tracer();
    exports2.END_OF_FILE = tokens_public_1.createTokenInstance(tokens_public_1.EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
    Object.freeze(exports2.END_OF_FILE);
    exports2.DEFAULT_PARSER_CONFIG = Object.freeze({
      recoveryEnabled: !1,
      maxLookahead: 4,
      ignoredIssues: {},
      dynamicTokensEnabled: !1,
      outputCst: !0,
      errorMessageProvider: errors_public_1.defaultParserErrorProvider,
      nodeLocationTracking: "none",
      traceInitPerf: !1,
      skipValidations: !1
    });
    exports2.DEFAULT_RULE_CONFIG = Object.freeze({
      recoveryValueFunc: function() {
      },
      resyncEnabled: !0
    });
    var ParserDefinitionErrorType;
    (function(ParserDefinitionErrorType2) {
      ParserDefinitionErrorType2[ParserDefinitionErrorType2.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", ParserDefinitionErrorType2[ParserDefinitionErrorType2.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", ParserDefinitionErrorType2[ParserDefinitionErrorType2.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", ParserDefinitionErrorType2[ParserDefinitionErrorType2.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", ParserDefinitionErrorType2[ParserDefinitionErrorType2.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", ParserDefinitionErrorType2[ParserDefinitionErrorType2.LEFT_RECURSION = 5] = "LEFT_RECURSION", ParserDefinitionErrorType2[ParserDefinitionErrorType2.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", ParserDefinitionErrorType2[ParserDefinitionErrorType2.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", ParserDefinitionErrorType2[ParserDefinitionErrorType2.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", ParserDefinitionErrorType2[ParserDefinitionErrorType2.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", ParserDefinitionErrorType2[ParserDefinitionErrorType2.INVALID_NESTED_RULE_NAME = 10] = "INVALID_NESTED_RULE_NAME", ParserDefinitionErrorType2[ParserDefinitionErrorType2.DUPLICATE_NESTED_NAME = 11] = "DUPLICATE_NESTED_NAME", ParserDefinitionErrorType2[ParserDefinitionErrorType2.NO_NON_EMPTY_LOOKAHEAD = 12] = "NO_NON_EMPTY_LOOKAHEAD", ParserDefinitionErrorType2[ParserDefinitionErrorType2.AMBIGUOUS_PREFIX_ALTS = 13] = "AMBIGUOUS_PREFIX_ALTS", ParserDefinitionErrorType2[ParserDefinitionErrorType2.TOO_MANY_ALTS = 14] = "TOO_MANY_ALTS";
    })(ParserDefinitionErrorType = exports2.ParserDefinitionErrorType || (exports2.ParserDefinitionErrorType = {}));
    function EMPTY_ALT(value) {
      return value === void 0 && (value = void 0), function() {
        return value;
      };
    }
    exports2.EMPTY_ALT = EMPTY_ALT;
    var Parser = (
      /** @class */
      function() {
        function Parser2(tokenVocabulary, config) {
          config === void 0 && (config = exports2.DEFAULT_PARSER_CONFIG), this.ignoredIssues = exports2.DEFAULT_PARSER_CONFIG.ignoredIssues, this.definitionErrors = [], this.selfAnalysisDone = !1;
          var that = this;
          that.initErrorHandler(config), that.initLexerAdapter(), that.initLooksAhead(config), that.initRecognizerEngine(tokenVocabulary, config), that.initRecoverable(config), that.initTreeBuilder(config), that.initContentAssist(), that.initGastRecorder(config), that.initPerformanceTracer(config), utils_1.has(config, "ignoredIssues") && config.ignoredIssues !== exports2.DEFAULT_PARSER_CONFIG.ignoredIssues && utils_1.PRINT_WARNING("The <ignoredIssues> IParserConfig property is soft-deprecated and will be removed in future versions.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead."), this.ignoredIssues = utils_1.has(config, "ignoredIssues") ? config.ignoredIssues : exports2.DEFAULT_PARSER_CONFIG.ignoredIssues, this.skipValidations = utils_1.has(config, "skipValidations") ? config.skipValidations : exports2.DEFAULT_PARSER_CONFIG.skipValidations;
        }
        return Parser2.performSelfAnalysis = function(parserInstance) {
          parserInstance.performSelfAnalysis();
        }, Parser2.prototype.performSelfAnalysis = function() {
          var _this = this;
          this.TRACE_INIT("performSelfAnalysis", function() {
            var defErrorsMsgs;
            _this.selfAnalysisDone = !0;
            var className = _this.className;
            _this.TRACE_INIT("toFastProps", function() {
              utils_1.toFastProperties(_this);
            }), _this.TRACE_INIT("Grammar Recording", function() {
              try {
                _this.enableRecording(), utils_1.forEach(_this.definedRulesNames, function(currRuleName) {
                  var wrappedRule = _this[currRuleName], originalGrammarAction = wrappedRule.originalGrammarAction, recordedRuleGast = void 0;
                  _this.TRACE_INIT(currRuleName + " Rule", function() {
                    recordedRuleGast = _this.topLevelRuleRecord(currRuleName, originalGrammarAction);
                  }), _this.gastProductionsCache[currRuleName] = recordedRuleGast;
                });
              } finally {
                _this.disableRecording();
              }
            });
            var resolverErrors = [];
            if (_this.TRACE_INIT("Grammar Resolving", function() {
              resolverErrors = gast_resolver_public_1.resolveGrammar({
                rules: utils_1.values(_this.gastProductionsCache)
              }), _this.definitionErrors.push.apply(_this.definitionErrors, resolverErrors);
            }), _this.TRACE_INIT("Grammar Validations", function() {
              if (utils_1.isEmpty(resolverErrors) && _this.skipValidations === !1) {
                var validationErrors = gast_resolver_public_1.validateGrammar({
                  rules: utils_1.values(_this.gastProductionsCache),
                  maxLookahead: _this.maxLookahead,
                  tokenTypes: utils_1.values(_this.tokensMap),
                  ignoredIssues: _this.ignoredIssues,
                  errMsgProvider: errors_public_1.defaultGrammarValidatorErrorProvider,
                  grammarName: className
                });
                _this.definitionErrors.push.apply(_this.definitionErrors, validationErrors);
              }
            }), utils_1.isEmpty(_this.definitionErrors) && (_this.recoveryEnabled && _this.TRACE_INIT("computeAllProdsFollows", function() {
              var allFollows = follow_1.computeAllProdsFollows(utils_1.values(_this.gastProductionsCache));
              _this.resyncFollows = allFollows;
            }), _this.TRACE_INIT("ComputeLookaheadFunctions", function() {
              _this.preComputeLookaheadFunctions(utils_1.values(_this.gastProductionsCache));
            })), _this.TRACE_INIT("expandAllNestedRuleNames", function() {
              var cstAnalysisResult = cst_1.expandAllNestedRuleNames(utils_1.values(_this.gastProductionsCache), _this.fullRuleNameToShort);
              _this.allRuleNames = cstAnalysisResult.allRuleNames;
            }), !Parser2.DEFER_DEFINITION_ERRORS_HANDLING && !utils_1.isEmpty(_this.definitionErrors))
              throw defErrorsMsgs = utils_1.map(_this.definitionErrors, function(defError) {
                return defError.message;
              }), new Error("Parser Definition Errors detected:\n " + defErrorsMsgs.join("\n-------------------------------\n"));
          });
        }, Parser2.DEFER_DEFINITION_ERRORS_HANDLING = !1, Parser2;
      }()
    );
    exports2.Parser = Parser;
    utils_1.applyMixins(Parser, [recoverable_1.Recoverable, looksahead_1.LooksAhead, tree_builder_1.TreeBuilder, lexer_adapter_1.LexerAdapter, recognizer_engine_1.RecognizerEngine, recognizer_api_1.RecognizerApi, error_handler_1.ErrorHandler, context_assist_1.ContentAssist, gast_recorder_1.GastRecorder, perf_tracer_1.PerformanceTracer]);
    var CstParser = (
      /** @class */
      function(_super) {
        __extends(CstParser2, _super);
        function CstParser2(tokenVocabulary, config) {
          config === void 0 && (config = exports2.DEFAULT_PARSER_CONFIG);
          var _this = this, configClone = utils_1.cloneObj(config);
          return configClone.outputCst = !0, _this = _super.call(this, tokenVocabulary, configClone) || this, _this;
        }
        return CstParser2;
      }(Parser)
    );
    exports2.CstParser = CstParser;
    var EmbeddedActionsParser = (
      /** @class */
      function(_super) {
        __extends(EmbeddedActionsParser2, _super);
        function EmbeddedActionsParser2(tokenVocabulary, config) {
          config === void 0 && (config = exports2.DEFAULT_PARSER_CONFIG);
          var _this = this, configClone = utils_1.cloneObj(config);
          return configClone.outputCst = !1, _this = _super.call(this, tokenVocabulary, configClone) || this, _this;
        }
        return EmbeddedActionsParser2;
      }(Parser)
    );
    exports2.EmbeddedActionsParser = EmbeddedActionsParser;
  }
});

// ../../node_modules/chevrotain/lib/src/diagrams/render_public.js
var require_render_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/diagrams/render_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var version_1 = require_version();
    function createSyntaxDiagramsCode(grammar, _a) {
      var _b = _a === void 0 ? {} : _a, _c = _b.resourceBase, resourceBase = _c === void 0 ? "https://unpkg.com/chevrotain@" + version_1.VERSION + "/diagrams/" : _c, _d = _b.css, css = _d === void 0 ? "https://unpkg.com/chevrotain@" + version_1.VERSION + "/diagrams/diagrams.css" : _d, header = '\n<!-- This is a generated file -->\n<!DOCTYPE html>\n<meta charset="utf-8">\n<style>\n  body {\n    background-color: hsl(30, 20%, 95%)\n  }\n</style>\n\n', cssHtml = "\n<link rel='stylesheet' href='" + css + "'>\n", scripts = "\n<script src='" + resourceBase + "vendor/railroad-diagrams.js'></script>\n<script src='" + resourceBase + "src/diagrams_builder.js'></script>\n<script src='" + resourceBase + "src/diagrams_behavior.js'></script>\n<script src='" + resourceBase + "src/main.js'></script>\n", diagramsDiv = '\n<div id="diagrams" align="center"></div>    \n', serializedGrammar = "\n<script>\n    window.serializedGrammar = " + JSON.stringify(grammar, null, "  ") + ";\n</script>\n", initLogic = '\n<script>\n    var diagramsDiv = document.getElementById("diagrams");\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\n</script>\n';
      return header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic;
    }
    exports2.createSyntaxDiagramsCode = createSyntaxDiagramsCode;
  }
});

// ../../node_modules/chevrotain/lib/src/generate/generate.js
var require_generate = __commonJS({
  "../../node_modules/chevrotain/lib/src/generate/generate.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var utils_1 = require_utils(), gast_public_1 = require_gast_public(), NL = "\n";
    function genUmdModule(options) {
      return "\n(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD. Register as an anonymous module.\n        define(['chevrotain'], factory);\n    } else if (typeof module === 'object' && module.exports) {\n        // Node. Does not work with strict CommonJS, but\n        // only CommonJS-like environments that support module.exports,\n        // like Node.\n        module.exports = factory(require('chevrotain'));\n    } else {\n        // Browser globals (root is window)\n        root.returnExports = factory(root.b);\n    }\n}(typeof self !== 'undefined' ? self : this, function (chevrotain) {\n\n" + genClass(options) + "\n    \nreturn {\n    " + options.name + ": " + options.name + " \n}\n}));\n";
    }
    exports2.genUmdModule = genUmdModule;
    function genWrapperFunction(options) {
      return "    \n" + genClass(options) + "\nreturn new " + options.name + "(tokenVocabulary, config)    \n";
    }
    exports2.genWrapperFunction = genWrapperFunction;
    function genClass(options) {
      var result = "\nfunction " + options.name + "(tokenVocabulary, config) {\n    // invoke super constructor\n    // No support for embedded actions currently, so we can 'hardcode'\n    // The use of CstParser.\n    chevrotain.CstParser.call(this, tokenVocabulary, config)\n\n    const $ = this\n\n    " + genAllRules(options.rules) + "\n\n    // very important to call this after all the rules have been defined.\n    // otherwise the parser may not work correctly as it will lack information\n    // derived during the self analysis phase.\n    this.performSelfAnalysis(this)\n}\n\n// inheritance as implemented in javascript in the previous decade... :(\n" + options.name + ".prototype = Object.create(chevrotain.CstParser.prototype)\n" + options.name + ".prototype.constructor = " + options.name + "    \n    ";
      return result;
    }
    exports2.genClass = genClass;
    function genAllRules(rules) {
      var rulesText = utils_1.map(rules, function(currRule) {
        return genRule(currRule, 1);
      });
      return rulesText.join("\n");
    }
    exports2.genAllRules = genAllRules;
    function genRule(prod, n) {
      var result = indent(n, '$.RULE("' + prod.name + '", function() {') + NL;
      return result += genDefinition(prod.definition, n + 1), result += indent(n + 1, "})") + NL, result;
    }
    exports2.genRule = genRule;
    function genTerminal(prod, n) {
      var name = prod.terminalType.name;
      return indent(n, "$.CONSUME" + prod.idx + "(this.tokensMap." + name + ")" + NL);
    }
    exports2.genTerminal = genTerminal;
    function genNonTerminal(prod, n) {
      return indent(n, "$.SUBRULE" + prod.idx + "($." + prod.nonTerminalName + ")" + NL);
    }
    exports2.genNonTerminal = genNonTerminal;
    function genAlternation(prod, n) {
      var result = indent(n, "$.OR" + prod.idx + "([") + NL, alts = utils_1.map(prod.definition, function(altDef) {
        return genSingleAlt(altDef, n + 1);
      });
      return result += alts.join("," + NL), result += NL + indent(n, "])" + NL), result;
    }
    exports2.genAlternation = genAlternation;
    function genSingleAlt(prod, n) {
      var result = indent(n, "{") + NL;
      return prod.name && (result += indent(n + 1, 'NAME: "' + prod.name + '",') + NL), result += indent(n + 1, "ALT: function() {") + NL, result += genDefinition(prod.definition, n + 1), result += indent(n + 1, "}") + NL, result += indent(n, "}"), result;
    }
    exports2.genSingleAlt = genSingleAlt;
    function genProd(prod, n) {
      if (prod instanceof gast_public_1.NonTerminal)
        return genNonTerminal(prod, n);
      if (prod instanceof gast_public_1.Option)
        return genDSLRule("OPTION", prod, n);
      if (prod instanceof gast_public_1.RepetitionMandatory)
        return genDSLRule("AT_LEAST_ONE", prod, n);
      if (prod instanceof gast_public_1.RepetitionMandatoryWithSeparator)
        return genDSLRule("AT_LEAST_ONE_SEP", prod, n);
      if (prod instanceof gast_public_1.RepetitionWithSeparator)
        return genDSLRule("MANY_SEP", prod, n);
      if (prod instanceof gast_public_1.Repetition)
        return genDSLRule("MANY", prod, n);
      if (prod instanceof gast_public_1.Alternation)
        return genAlternation(prod, n);
      if (prod instanceof gast_public_1.Terminal)
        return genTerminal(prod, n);
      if (prod instanceof gast_public_1.Flat)
        return genDefinition(prod.definition, n);
      throw Error("non exhaustive match");
    }
    function genDSLRule(dslName, prod, n) {
      var result = indent(n, "$." + (dslName + prod.idx) + "(");
      return prod.name || prod.separator ? (result += "{" + NL, prod.name && (result += indent(n + 1, 'NAME: "' + prod.name + '"') + "," + NL), prod.separator && (result += indent(n + 1, "SEP: this.tokensMap." + prod.separator.name) + "," + NL), result += "DEF: " + genDefFunction(prod.definition, n + 2) + NL, result += indent(n, "}") + NL) : result += genDefFunction(prod.definition, n + 1), result += indent(n, ")") + NL, result;
    }
    function genDefFunction(definition, n) {
      var def = "function() {" + NL;
      return def += genDefinition(definition, n), def += indent(n, "}") + NL, def;
    }
    function genDefinition(def, n) {
      var result = "";
      return utils_1.forEach(def, function(prod) {
        result += genProd(prod, n + 1);
      }), result;
    }
    function indent(howMuch, text) {
      var spaces = Array(howMuch * 4 + 1).join(" ");
      return spaces + text;
    }
  }
});

// ../../node_modules/chevrotain/lib/src/generate/generate_public.js
var require_generate_public = __commonJS({
  "../../node_modules/chevrotain/lib/src/generate/generate_public.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var generate_1 = require_generate();
    function generateParserFactory(options) {
      var wrapperText = generate_1.genWrapperFunction({
        name: options.name,
        rules: options.rules
      }), constructorWrapper = new Function("tokenVocabulary", "config", "chevrotain", wrapperText);
      return function(config) {
        return constructorWrapper(
          options.tokenVocabulary,
          config,
          // TODO: check how the require is transpiled/webpacked
          require_api()
        );
      };
    }
    exports2.generateParserFactory = generateParserFactory;
    function generateParserModule(options) {
      return generate_1.genUmdModule({
        name: options.name,
        rules: options.rules
      });
    }
    exports2.generateParserModule = generateParserModule;
  }
});

// ../../node_modules/chevrotain/lib/src/api.js
var require_api = __commonJS({
  "../../node_modules/chevrotain/lib/src/api.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    var version_1 = require_version();
    exports2.VERSION = version_1.VERSION;
    var parser_1 = require_parser();
    exports2.Parser = parser_1.Parser;
    exports2.CstParser = parser_1.CstParser;
    exports2.EmbeddedActionsParser = parser_1.EmbeddedActionsParser;
    exports2.ParserDefinitionErrorType = parser_1.ParserDefinitionErrorType;
    exports2.EMPTY_ALT = parser_1.EMPTY_ALT;
    var lexer_public_1 = require_lexer_public();
    exports2.Lexer = lexer_public_1.Lexer;
    exports2.LexerDefinitionErrorType = lexer_public_1.LexerDefinitionErrorType;
    var tokens_public_1 = require_tokens_public();
    exports2.createToken = tokens_public_1.createToken;
    exports2.createTokenInstance = tokens_public_1.createTokenInstance;
    exports2.EOF = tokens_public_1.EOF;
    exports2.tokenLabel = tokens_public_1.tokenLabel;
    exports2.tokenMatcher = tokens_public_1.tokenMatcher;
    exports2.tokenName = tokens_public_1.tokenName;
    var errors_public_1 = require_errors_public();
    exports2.defaultGrammarResolverErrorProvider = errors_public_1.defaultGrammarResolverErrorProvider;
    exports2.defaultGrammarValidatorErrorProvider = errors_public_1.defaultGrammarValidatorErrorProvider;
    exports2.defaultParserErrorProvider = errors_public_1.defaultParserErrorProvider;
    var exceptions_public_1 = require_exceptions_public();
    exports2.EarlyExitException = exceptions_public_1.EarlyExitException;
    exports2.isRecognitionException = exceptions_public_1.isRecognitionException;
    exports2.MismatchedTokenException = exceptions_public_1.MismatchedTokenException;
    exports2.NotAllInputParsedException = exceptions_public_1.NotAllInputParsedException;
    exports2.NoViableAltException = exceptions_public_1.NoViableAltException;
    var lexer_errors_public_1 = require_lexer_errors_public();
    exports2.defaultLexerErrorProvider = lexer_errors_public_1.defaultLexerErrorProvider;
    var gast_public_1 = require_gast_public();
    exports2.Alternation = gast_public_1.Alternation;
    exports2.Flat = gast_public_1.Flat;
    exports2.NonTerminal = gast_public_1.NonTerminal;
    exports2.Option = gast_public_1.Option;
    exports2.Repetition = gast_public_1.Repetition;
    exports2.RepetitionMandatory = gast_public_1.RepetitionMandatory;
    exports2.RepetitionMandatoryWithSeparator = gast_public_1.RepetitionMandatoryWithSeparator;
    exports2.RepetitionWithSeparator = gast_public_1.RepetitionWithSeparator;
    exports2.Rule = gast_public_1.Rule;
    exports2.Terminal = gast_public_1.Terminal;
    var gast_public_2 = require_gast_public();
    exports2.serializeGrammar = gast_public_2.serializeGrammar;
    exports2.serializeProduction = gast_public_2.serializeProduction;
    var gast_visitor_public_1 = require_gast_visitor_public();
    exports2.GAstVisitor = gast_visitor_public_1.GAstVisitor;
    var gast_resolver_public_1 = require_gast_resolver_public();
    exports2.assignOccurrenceIndices = gast_resolver_public_1.assignOccurrenceIndices;
    exports2.resolveGrammar = gast_resolver_public_1.resolveGrammar;
    exports2.validateGrammar = gast_resolver_public_1.validateGrammar;
    function clearCache() {
      console.warn("The clearCache function was 'soft' removed from the Chevrotain API.\n	 It performs no action other than printing this message.\n	 Please avoid using it as it will be completely removed in the future");
    }
    exports2.clearCache = clearCache;
    var render_public_1 = require_render_public();
    exports2.createSyntaxDiagramsCode = render_public_1.createSyntaxDiagramsCode;
    var generate_public_1 = require_generate_public();
    exports2.generateParserFactory = generate_public_1.generateParserFactory;
    exports2.generateParserModule = generate_public_1.generateParserModule;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var freeGlobal = require_freeGlobal(), freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "../../node_modules/lodash/_arrayMap.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function arrayMap(array, iteratee) {
      for (var index = -1, length = array == null ? 0 : array.length, result = Array(length); ++index < length; )
        result[index] = iteratee(array[index], index, array);
      return result;
    }
    module2.exports = arrayMap;
  }
});

// ../../node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../node_modules/lodash/isArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isArray2 = Array.isArray;
    module2.exports = isArray2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = !0;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]), result;
    }
    module2.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var objectProto = Object.prototype, nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString(), nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      return value == null ? value === void 0 ? undefinedTag : nullTag : symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isObjectLike = require_isObjectLike(), symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// ../../node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../../node_modules/lodash/_baseToString.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), arrayMap = require_arrayMap(), isArray2 = require_isArray(), isSymbol = require_isSymbol(), INFINITY = 1 / 0, symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string")
        return value;
      if (isArray2(value))
        return arrayMap(value, baseToString) + "";
      if (isSymbol(value))
        return symbolToString ? symbolToString.call(value) : "";
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = baseToString;
  }
});

// ../../node_modules/lodash/toString.js
var require_toString = __commonJS({
  "../../node_modules/lodash/toString.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module2.exports = toString;
  }
});

// ../../node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "../../node_modules/lodash/_baseSlice.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      start < 0 && (start = -start > length ? 0 : length + start), end = end > length ? length : end, end < 0 && (end += length), length = start > end ? 0 : end - start >>> 0, start >>>= 0;
      for (var result = Array(length); ++index < length; )
        result[index] = array[index + start];
      return result;
    }
    module2.exports = baseSlice;
  }
});

// ../../node_modules/lodash/_castSlice.js
var require_castSlice = __commonJS({
  "../../node_modules/lodash/_castSlice.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseSlice = require_baseSlice();
    function castSlice(array, start, end) {
      var length = array.length;
      return end = end === void 0 ? length : end, !start && end >= length ? array : baseSlice(array, start, end);
    }
    module2.exports = castSlice;
  }
});

// ../../node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "../../node_modules/lodash/_hasUnicode.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f", rsZWJ = "\\u200d", reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module2.exports = hasUnicode;
  }
});

// ../../node_modules/lodash/_asciiToArray.js
var require_asciiToArray = __commonJS({
  "../../node_modules/lodash/_asciiToArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function asciiToArray(string) {
      return string.split("");
    }
    module2.exports = asciiToArray;
  }
});

// ../../node_modules/lodash/_unicodeToArray.js
var require_unicodeToArray = __commonJS({
  "../../node_modules/lodash/_unicodeToArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f", rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")", reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    module2.exports = unicodeToArray;
  }
});

// ../../node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  "../../node_modules/lodash/_stringToArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var asciiToArray = require_asciiToArray(), hasUnicode = require_hasUnicode(), unicodeToArray = require_unicodeToArray();
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module2.exports = stringToArray;
  }
});

// ../../node_modules/lodash/_createCaseFirst.js
var require_createCaseFirst = __commonJS({
  "../../node_modules/lodash/_createCaseFirst.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var castSlice = require_castSlice(), hasUnicode = require_hasUnicode(), stringToArray = require_stringToArray(), toString = require_toString();
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0, chr = strSymbols ? strSymbols[0] : string.charAt(0), trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    module2.exports = createCaseFirst;
  }
});

// ../../node_modules/lodash/upperFirst.js
var require_upperFirst = __commonJS({
  "../../node_modules/lodash/upperFirst.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var createCaseFirst = require_createCaseFirst(), upperFirst = createCaseFirst("toUpperCase");
    module2.exports = upperFirst;
  }
});

// ../../node_modules/lodash/capitalize.js
var require_capitalize = __commonJS({
  "../../node_modules/lodash/capitalize.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toString = require_toString(), upperFirst = require_upperFirst();
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    module2.exports = capitalize;
  }
});

// ../../node_modules/lodash/_arrayReduce.js
var require_arrayReduce = __commonJS({
  "../../node_modules/lodash/_arrayReduce.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      for (initAccum && length && (accumulator = array[++index]); ++index < length; )
        accumulator = iteratee(accumulator, array[index], index, array);
      return accumulator;
    }
    module2.exports = arrayReduce;
  }
});

// ../../node_modules/lodash/_basePropertyOf.js
var require_basePropertyOf = __commonJS({
  "../../node_modules/lodash/_basePropertyOf.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    module2.exports = basePropertyOf;
  }
});

// ../../node_modules/lodash/_deburrLetter.js
var require_deburrLetter = __commonJS({
  "../../node_modules/lodash/_deburrLetter.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var basePropertyOf = require_basePropertyOf(), deburredLetters = {
      // Latin-1 Supplement block.
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      // Latin Extended-A block.
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, deburrLetter = basePropertyOf(deburredLetters);
    module2.exports = deburrLetter;
  }
});

// ../../node_modules/lodash/deburr.js
var require_deburr = __commonJS({
  "../../node_modules/lodash/deburr.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var deburrLetter = require_deburrLetter(), toString = require_toString(), reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsCombo = "[" + rsComboRange + "]", reComboMark = RegExp(rsCombo, "g");
    function deburr(string) {
      return string = toString(string), string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    module2.exports = deburr;
  }
});

// ../../node_modules/lodash/_asciiWords.js
var require_asciiWords = __commonJS({
  "../../node_modules/lodash/_asciiWords.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    module2.exports = asciiWords;
  }
});

// ../../node_modules/lodash/_hasUnicodeWord.js
var require_hasUnicodeWord = __commonJS({
  "../../node_modules/lodash/_hasUnicodeWord.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    module2.exports = hasUnicodeWord;
  }
});

// ../../node_modules/lodash/_unicodeWords.js
var require_unicodeWords = __commonJS({
  "../../node_modules/lodash/_unicodeWords.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange, rsApos = "['\u2019]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d", rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    module2.exports = unicodeWords;
  }
});

// ../../node_modules/lodash/words.js
var require_words = __commonJS({
  "../../node_modules/lodash/words.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var asciiWords = require_asciiWords(), hasUnicodeWord = require_hasUnicodeWord(), toString = require_toString(), unicodeWords = require_unicodeWords();
    function words(string, pattern, guard) {
      return string = toString(string), pattern = guard ? void 0 : pattern, pattern === void 0 ? hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string) : string.match(pattern) || [];
    }
    module2.exports = words;
  }
});

// ../../node_modules/lodash/_createCompounder.js
var require_createCompounder = __commonJS({
  "../../node_modules/lodash/_createCompounder.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var arrayReduce = require_arrayReduce(), deburr = require_deburr(), words = require_words(), rsApos = "['\u2019]", reApos = RegExp(rsApos, "g");
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    module2.exports = createCompounder;
  }
});

// ../../node_modules/lodash/camelCase.js
var require_camelCase = __commonJS({
  "../../node_modules/lodash/camelCase.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var capitalize = require_capitalize(), createCompounder = require_createCompounder(), camelCase = createCompounder(function(result, word, index) {
      return word = word.toLowerCase(), result + (index ? capitalize(word) : word);
    });
    module2.exports = camelCase;
  }
});

// ../../node_modules/java-parser/src/unicodesets.js
var require_unicodesets = __commonJS({
  "../../node_modules/java-parser/src/unicodesets.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var addRanges = function(set, rangesArr) {
      for (var i = 0; i < rangesArr.length; i++)
        for (var range = rangesArr[i], start = range[0], end = range[1], codePoint = start; codePoint <= end; codePoint++)
          set.add(codePoint);
    }, fic = /* @__PURE__ */ new Set([181, 257, 259, 261, 263, 265, 267, 269, 271, 273, 275, 277, 279, 281, 283, 285, 287, 289, 291, 293, 295, 297, 299, 301, 303, 305, 307, 309, 314, 316, 318, 320, 322, 324, 326, 331, 333, 335, 337, 339, 341, 343, 345, 347, 349, 351, 353, 355, 357, 359, 361, 363, 365, 367, 369, 371, 373, 375, 378, 380, 387, 389, 392, 402, 405, 414, 417, 419, 421, 424, 429, 432, 436, 438, 454, 457, 460, 462, 464, 466, 468, 470, 472, 474, 479, 481, 483, 485, 487, 489, 491, 493, 499, 501, 505, 507, 509, 511, 513, 515, 517, 519, 521, 523, 525, 527, 529, 531, 533, 535, 537, 539, 541, 543, 545, 547, 549, 551, 553, 555, 557, 559, 561, 572, 578, 583, 585, 587, 589, 881, 883, 887, 912, 985, 987, 989, 991, 993, 995, 997, 999, 1001, 1003, 1005, 1013, 1016, 1121, 1123, 1125, 1127, 1129, 1131, 1133, 1135, 1137, 1139, 1141, 1143, 1145, 1147, 1149, 1151, 1153, 1163, 1165, 1167, 1169, 1171, 1173, 1175, 1177, 1179, 1181, 1183, 1185, 1187, 1189, 1191, 1193, 1195, 1197, 1199, 1201, 1203, 1205, 1207, 1209, 1211, 1213, 1215, 1218, 1220, 1222, 1224, 1226, 1228, 1233, 1235, 1237, 1239, 1241, 1243, 1245, 1247, 1249, 1251, 1253, 1255, 1257, 1259, 1261, 1263, 1265, 1267, 1269, 1271, 1273, 1275, 1277, 1279, 1281, 1283, 1285, 1287, 1289, 1291, 1293, 1295, 1297, 1299, 1301, 1303, 1305, 1307, 1309, 1311, 1313, 1315, 1317, 1319, 1321, 1323, 1325, 1327, 7681, 7683, 7685, 7687, 7689, 7691, 7693, 7695, 7697, 7699, 7701, 7703, 7705, 7707, 7709, 7711, 7713, 7715, 7717, 7719, 7721, 7723, 7725, 7727, 7729, 7731, 7733, 7735, 7737, 7739, 7741, 7743, 7745, 7747, 7749, 7751, 7753, 7755, 7757, 7759, 7761, 7763, 7765, 7767, 7769, 7771, 7773, 7775, 7777, 7779, 7781, 7783, 7785, 7787, 7789, 7791, 7793, 7795, 7797, 7799, 7801, 7803, 7805, 7807, 7809, 7811, 7813, 7815, 7817, 7819, 7821, 7823, 7825, 7827, 7839, 7841, 7843, 7845, 7847, 7849, 7851, 7853, 7855, 7857, 7859, 7861, 7863, 7865, 7867, 7869, 7871, 7873, 7875, 7877, 7879, 7881, 7883, 7885, 7887, 7889, 7891, 7893, 7895, 7897, 7899, 7901, 7903, 7905, 7907, 7909, 7911, 7913, 7915, 7917, 7919, 7921, 7923, 7925, 7927, 7929, 7931, 7933, 8126, 8458, 8467, 8495, 8500, 8505, 8526, 8580, 11361, 11368, 11370, 11372, 11377, 11393, 11395, 11397, 11399, 11401, 11403, 11405, 11407, 11409, 11411, 11413, 11415, 11417, 11419, 11421, 11423, 11425, 11427, 11429, 11431, 11433, 11435, 11437, 11439, 11441, 11443, 11445, 11447, 11449, 11451, 11453, 11455, 11457, 11459, 11461, 11463, 11465, 11467, 11469, 11471, 11473, 11475, 11477, 11479, 11481, 11483, 11485, 11487, 11489, 11500, 11502, 11507, 11559, 11565, 42561, 42563, 42565, 42567, 42569, 42571, 42573, 42575, 42577, 42579, 42581, 42583, 42585, 42587, 42589, 42591, 42593, 42595, 42597, 42599, 42601, 42603, 42605, 42625, 42627, 42629, 42631, 42633, 42635, 42637, 42639, 42641, 42643, 42645, 42647, 42649, 42651, 42787, 42789, 42791, 42793, 42795, 42797, 42803, 42805, 42807, 42809, 42811, 42813, 42815, 42817, 42819, 42821, 42823, 42825, 42827, 42829, 42831, 42833, 42835, 42837, 42839, 42841, 42843, 42845, 42847, 42849, 42851, 42853, 42855, 42857, 42859, 42861, 42863, 42874, 42876, 42879, 42881, 42883, 42885, 42887, 42892, 42894, 42897, 42903, 42905, 42907, 42909, 42911, 42913, 42915, 42917, 42919, 42921, 42927, 42933, 42935, 42937, 42939, 42941, 42943, 42947, 43002, 119995, 120779, 748, 750, 884, 890, 1369, 1600, 2042, 2074, 2084, 2088, 2417, 3654, 3782, 4348, 6103, 6211, 6823, 7544, 8305, 8319, 11631, 11823, 12293, 12347, 40981, 42508, 42623, 42864, 42888, 43471, 43494, 43632, 43741, 65392, 94179, 125259, 170, 186, 443, 660, 1749, 1791, 1808, 1969, 2365, 2384, 2482, 2493, 2510, 2556, 2654, 2749, 2768, 2809, 2877, 2929, 2947, 2972, 3024, 3133, 3200, 3261, 3294, 3389, 3406, 3517, 3716, 3749, 3773, 3840, 4159, 4193, 4238, 4696, 4800, 6108, 6314, 7418, 12294, 12348, 12447, 12543, 13312, 19968, 42606, 42895, 42999, 43259, 43642, 43697, 43712, 43714, 43762, 44032, 64285, 64318, 67592, 67644, 68096, 69415, 69956, 70006, 70106, 70108, 70280, 70461, 70480, 70751, 70855, 71236, 71352, 71935, 72161, 72163, 72192, 72250, 72272, 72349, 72768, 73030, 73112, 94032, 94208, 123214, 126500, 126503, 126521, 126523, 126530, 126535, 126537, 126539, 126548, 126551, 126553, 126555, 126557, 126559, 126564, 126590, 131072, 173824, 177984, 178208, 183984, 453, 456, 459, 498, 8124, 8140, 8188, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 313, 315, 317, 319, 321, 323, 325, 327, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360, 362, 364, 366, 368, 370, 372, 374, 379, 381, 388, 418, 420, 425, 428, 437, 444, 452, 455, 458, 461, 463, 465, 467, 469, 471, 473, 475, 478, 480, 482, 484, 486, 488, 490, 492, 494, 497, 500, 506, 508, 510, 512, 514, 516, 518, 520, 522, 524, 526, 528, 530, 532, 534, 536, 538, 540, 542, 544, 546, 548, 550, 552, 554, 556, 558, 560, 562, 577, 584, 586, 588, 590, 880, 882, 886, 895, 902, 908, 975, 984, 986, 988, 990, 992, 994, 996, 998, 1e3, 1002, 1004, 1006, 1012, 1015, 1120, 1122, 1124, 1126, 1128, 1130, 1132, 1134, 1136, 1138, 1140, 1142, 1144, 1146, 1148, 1150, 1152, 1162, 1164, 1166, 1168, 1170, 1172, 1174, 1176, 1178, 1180, 1182, 1184, 1186, 1188, 1190, 1192, 1194, 1196, 1198, 1200, 1202, 1204, 1206, 1208, 1210, 1212, 1214, 1219, 1221, 1223, 1225, 1227, 1229, 1232, 1234, 1236, 1238, 1240, 1242, 1244, 1246, 1248, 1250, 1252, 1254, 1256, 1258, 1260, 1262, 1264, 1266, 1268, 1270, 1272, 1274, 1276, 1278, 1280, 1282, 1284, 1286, 1288, 1290, 1292, 1294, 1296, 1298, 1300, 1302, 1304, 1306, 1308, 1310, 1312, 1314, 1316, 1318, 1320, 1322, 1324, 1326, 4295, 4301, 7680, 7682, 7684, 7686, 7688, 7690, 7692, 7694, 7696, 7698, 7700, 7702, 7704, 7706, 7708, 7710, 7712, 7714, 7716, 7718, 7720, 7722, 7724, 7726, 7728, 7730, 7732, 7734, 7736, 7738, 7740, 7742, 7744, 7746, 7748, 7750, 7752, 7754, 7756, 7758, 7760, 7762, 7764, 7766, 7768, 7770, 7772, 7774, 7776, 7778, 7780, 7782, 7784, 7786, 7788, 7790, 7792, 7794, 7796, 7798, 7800, 7802, 7804, 7806, 7808, 7810, 7812, 7814, 7816, 7818, 7820, 7822, 7824, 7826, 7828, 7838, 7840, 7842, 7844, 7846, 7848, 7850, 7852, 7854, 7856, 7858, 7860, 7862, 7864, 7866, 7868, 7870, 7872, 7874, 7876, 7878, 7880, 7882, 7884, 7886, 7888, 7890, 7892, 7894, 7896, 7898, 7900, 7902, 7904, 7906, 7908, 7910, 7912, 7914, 7916, 7918, 7920, 7922, 7924, 7926, 7928, 7930, 7932, 7934, 8025, 8027, 8029, 8031, 8450, 8455, 8469, 8484, 8486, 8488, 8517, 8579, 11360, 11367, 11369, 11371, 11378, 11381, 11394, 11396, 11398, 11400, 11402, 11404, 11406, 11408, 11410, 11412, 11414, 11416, 11418, 11420, 11422, 11424, 11426, 11428, 11430, 11432, 11434, 11436, 11438, 11440, 11442, 11444, 11446, 11448, 11450, 11452, 11454, 11456, 11458, 11460, 11462, 11464, 11466, 11468, 11470, 11472, 11474, 11476, 11478, 11480, 11482, 11484, 11486, 11488, 11490, 11499, 11501, 11506, 42560, 42562, 42564, 42566, 42568, 42570, 42572, 42574, 42576, 42578, 42580, 42582, 42584, 42586, 42588, 42590, 42592, 42594, 42596, 42598, 42600, 42602, 42604, 42624, 42626, 42628, 42630, 42632, 42634, 42636, 42638, 42640, 42642, 42644, 42646, 42648, 42650, 42786, 42788, 42790, 42792, 42794, 42796, 42798, 42802, 42804, 42806, 42808, 42810, 42812, 42814, 42816, 42818, 42820, 42822, 42824, 42826, 42828, 42830, 42832, 42834, 42836, 42838, 42840, 42842, 42844, 42846, 42848, 42850, 42852, 42854, 42856, 42858, 42860, 42862, 42873, 42875, 42880, 42882, 42884, 42886, 42891, 42893, 42896, 42898, 42902, 42904, 42906, 42908, 42910, 42912, 42914, 42916, 42918, 42920, 42934, 42936, 42938, 42940, 42942, 42946, 119964, 119970, 120134, 120778, 12295, 66369, 66378, 36, 1423, 1547, 2555, 2801, 3065, 3647, 6107, 43064, 65020, 65129, 65284, 123647, 126128, 95, 8276, 65343]), fic_a = [[97, 122], [223, 246], [248, 255], [311, 312], [328, 329], [382, 384], [396, 397], [409, 411], [426, 427], [441, 442], [445, 447], [476, 477], [495, 496], [563, 569], [575, 576], [591, 659], [661, 687], [891, 893], [940, 974], [976, 977], [981, 983], [1007, 1011], [1019, 1020], [1072, 1119], [1230, 1231], [1376, 1416], [4304, 4346], [4349, 4351], [5112, 5117], [7296, 7304], [7424, 7467], [7531, 7543], [7545, 7578], [7829, 7837], [7935, 7943], [7952, 7957], [7968, 7975], [7984, 7991], [8e3, 8005], [8016, 8023], [8032, 8039], [8048, 8061], [8064, 8071], [8080, 8087], [8096, 8103], [8112, 8116], [8118, 8119], [8130, 8132], [8134, 8135], [8144, 8147], [8150, 8151], [8160, 8167], [8178, 8180], [8182, 8183], [8462, 8463], [8508, 8509], [8518, 8521], [11312, 11358], [11365, 11366], [11379, 11380], [11382, 11387], [11491, 11492], [11520, 11557], [42799, 42801], [42865, 42872], [42899, 42901], [43824, 43866], [43872, 43879], [43888, 43967], [64256, 64262], [64275, 64279], [65345, 65370], [66600, 66639], [66776, 66811], [68800, 68850], [71872, 71903], [93792, 93823], [119834, 119859], [119886, 119892], [119894, 119911], [119938, 119963], [119990, 119993], [119997, 120003], [120005, 120015], [120042, 120067], [120094, 120119], [120146, 120171], [120198, 120223], [120250, 120275], [120302, 120327], [120354, 120379], [120406, 120431], [120458, 120485], [120514, 120538], [120540, 120545], [120572, 120596], [120598, 120603], [120630, 120654], [120656, 120661], [120688, 120712], [120714, 120719], [120746, 120770], [120772, 120777], [125218, 125251], [688, 705], [710, 721], [736, 740], [1765, 1766], [2036, 2037], [7288, 7293], [7468, 7530], [7579, 7615], [8336, 8348], [11388, 11389], [12337, 12341], [12445, 12446], [12540, 12542], [42232, 42237], [42652, 42653], [42775, 42783], [43e3, 43001], [43763, 43764], [43868, 43871], [65438, 65439], [92992, 92995], [94099, 94111], [94176, 94177], [123191, 123197], [13313, 19893], [19969, 40943], [44033, 55203], [94209, 100343], [131073, 173782], [173825, 177972], [177985, 178205], [178209, 183969], [183985, 191456], [448, 451], [1488, 1514], [1519, 1522], [1568, 1599], [1601, 1610], [1646, 1647], [1649, 1747], [1774, 1775], [1786, 1788], [1810, 1839], [1869, 1957], [1994, 2026], [2048, 2069], [2112, 2136], [2144, 2154], [2208, 2228], [2230, 2237], [2308, 2361], [2392, 2401], [2418, 2432], [2437, 2444], [2447, 2448], [2451, 2472], [2474, 2480], [2486, 2489], [2524, 2525], [2527, 2529], [2544, 2545], [2565, 2570], [2575, 2576], [2579, 2600], [2602, 2608], [2610, 2611], [2613, 2614], [2616, 2617], [2649, 2652], [2674, 2676], [2693, 2701], [2703, 2705], [2707, 2728], [2730, 2736], [2738, 2739], [2741, 2745], [2784, 2785], [2821, 2828], [2831, 2832], [2835, 2856], [2858, 2864], [2866, 2867], [2869, 2873], [2908, 2909], [2911, 2913], [2949, 2954], [2958, 2960], [2962, 2965], [2969, 2970], [2974, 2975], [2979, 2980], [2984, 2986], [2990, 3001], [3077, 3084], [3086, 3088], [3090, 3112], [3114, 3129], [3160, 3162], [3168, 3169], [3205, 3212], [3214, 3216], [3218, 3240], [3242, 3251], [3253, 3257], [3296, 3297], [3313, 3314], [3333, 3340], [3342, 3344], [3346, 3386], [3412, 3414], [3423, 3425], [3450, 3455], [3461, 3478], [3482, 3505], [3507, 3515], [3520, 3526], [3585, 3632], [3634, 3635], [3648, 3653], [3713, 3714], [3718, 3722], [3724, 3747], [3751, 3760], [3762, 3763], [3776, 3780], [3804, 3807], [3904, 3911], [3913, 3948], [3976, 3980], [4096, 4138], [4176, 4181], [4186, 4189], [4197, 4198], [4206, 4208], [4213, 4225], [4352, 4680], [4682, 4685], [4688, 4694], [4698, 4701], [4704, 4744], [4746, 4749], [4752, 4784], [4786, 4789], [4792, 4798], [4802, 4805], [4808, 4822], [4824, 4880], [4882, 4885], [4888, 4954], [4992, 5007], [5121, 5740], [5743, 5759], [5761, 5786], [5792, 5866], [5873, 5880], [5888, 5900], [5902, 5905], [5920, 5937], [5952, 5969], [5984, 5996], [5998, 6e3], [6016, 6067], [6176, 6210], [6212, 6264], [6272, 6276], [6279, 6312], [6320, 6389], [6400, 6430], [6480, 6509], [6512, 6516], [6528, 6571], [6576, 6601], [6656, 6678], [6688, 6740], [6917, 6963], [6981, 6987], [7043, 7072], [7086, 7087], [7098, 7141], [7168, 7203], [7245, 7247], [7258, 7287], [7401, 7404], [7406, 7411], [7413, 7414], [8501, 8504], [11568, 11623], [11648, 11670], [11680, 11686], [11688, 11694], [11696, 11702], [11704, 11710], [11712, 11718], [11720, 11726], [11728, 11734], [11736, 11742], [12353, 12438], [12449, 12538], [12549, 12591], [12593, 12686], [12704, 12730], [12784, 12799], [40960, 40980], [40982, 42124], [42192, 42231], [42240, 42507], [42512, 42527], [42538, 42539], [42656, 42725], [43003, 43009], [43011, 43013], [43015, 43018], [43020, 43042], [43072, 43123], [43138, 43187], [43250, 43255], [43261, 43262], [43274, 43301], [43312, 43334], [43360, 43388], [43396, 43442], [43488, 43492], [43495, 43503], [43514, 43518], [43520, 43560], [43584, 43586], [43588, 43595], [43616, 43631], [43633, 43638], [43646, 43695], [43701, 43702], [43705, 43709], [43739, 43740], [43744, 43754], [43777, 43782], [43785, 43790], [43793, 43798], [43808, 43814], [43816, 43822], [43968, 44002], [55216, 55238], [55243, 55291], [63744, 64109], [64112, 64217], [64287, 64296], [64298, 64310], [64312, 64316], [64320, 64321], [64323, 64324], [64326, 64433], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65019], [65136, 65140], [65142, 65276], [65382, 65391], [65393, 65437], [65440, 65470], [65474, 65479], [65482, 65487], [65490, 65495], [65498, 65500], [65536, 65547], [65549, 65574], [65576, 65594], [65596, 65597], [65599, 65613], [65616, 65629], [65664, 65786], [66176, 66204], [66208, 66256], [66304, 66335], [66349, 66368], [66370, 66377], [66384, 66421], [66432, 66461], [66464, 66499], [66504, 66511], [66640, 66717], [66816, 66855], [66864, 66915], [67072, 67382], [67392, 67413], [67424, 67431], [67584, 67589], [67594, 67637], [67639, 67640], [67647, 67669], [67680, 67702], [67712, 67742], [67808, 67826], [67828, 67829], [67840, 67861], [67872, 67897], [67968, 68023], [68030, 68031], [68112, 68115], [68117, 68119], [68121, 68149], [68192, 68220], [68224, 68252], [68288, 68295], [68297, 68324], [68352, 68405], [68416, 68437], [68448, 68466], [68480, 68497], [68608, 68680], [68864, 68899], [69376, 69404], [69424, 69445], [69600, 69622], [69635, 69687], [69763, 69807], [69840, 69864], [69891, 69926], [69968, 70002], [70019, 70066], [70081, 70084], [70144, 70161], [70163, 70187], [70272, 70278], [70282, 70285], [70287, 70301], [70303, 70312], [70320, 70366], [70405, 70412], [70415, 70416], [70419, 70440], [70442, 70448], [70450, 70451], [70453, 70457], [70493, 70497], [70656, 70708], [70727, 70730], [70784, 70831], [70852, 70853], [71040, 71086], [71128, 71131], [71168, 71215], [71296, 71338], [71424, 71450], [71680, 71723], [72096, 72103], [72106, 72144], [72203, 72242], [72284, 72329], [72384, 72440], [72704, 72712], [72714, 72750], [72818, 72847], [72960, 72966], [72968, 72969], [72971, 73008], [73056, 73061], [73063, 73064], [73066, 73097], [73440, 73458], [73728, 74649], [74880, 75075], [77824, 78894], [82944, 83526], [92160, 92728], [92736, 92766], [92880, 92909], [92928, 92975], [93027, 93047], [93053, 93071], [93952, 94026], [100352, 101106], [110592, 110878], [110928, 110930], [110948, 110951], [110960, 111355], [113664, 113770], [113776, 113788], [113792, 113800], [113808, 113817], [123136, 123180], [123584, 123627], [124928, 125124], [126464, 126467], [126469, 126495], [126497, 126498], [126505, 126514], [126516, 126519], [126541, 126543], [126545, 126546], [126561, 126562], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [194560, 195101], [8072, 8079], [8088, 8095], [8104, 8111], [65, 90], [192, 214], [216, 222], [376, 377], [385, 386], [390, 391], [393, 395], [398, 401], [403, 404], [406, 408], [412, 413], [415, 416], [422, 423], [430, 431], [433, 435], [439, 440], [502, 504], [570, 571], [573, 574], [579, 582], [904, 906], [910, 911], [913, 929], [931, 939], [978, 980], [1017, 1018], [1021, 1071], [1216, 1217], [1329, 1366], [4256, 4293], [5024, 5109], [7312, 7354], [7357, 7359], [7944, 7951], [7960, 7965], [7976, 7983], [7992, 7999], [8008, 8013], [8040, 8047], [8120, 8123], [8136, 8139], [8152, 8155], [8168, 8172], [8184, 8187], [8459, 8461], [8464, 8466], [8473, 8477], [8490, 8493], [8496, 8499], [8510, 8511], [11264, 11310], [11362, 11364], [11373, 11376], [11390, 11392], [42877, 42878], [42922, 42926], [42928, 42932], [42948, 42950], [65313, 65338], [66560, 66599], [66736, 66771], [68736, 68786], [71840, 71871], [93760, 93791], [119808, 119833], [119860, 119885], [119912, 119937], [119966, 119967], [119973, 119974], [119977, 119980], [119982, 119989], [120016, 120041], [120068, 120069], [120071, 120074], [120077, 120084], [120086, 120092], [120120, 120121], [120123, 120126], [120128, 120132], [120138, 120144], [120172, 120197], [120224, 120249], [120276, 120301], [120328, 120353], [120380, 120405], [120432, 120457], [120488, 120512], [120546, 120570], [120604, 120628], [120662, 120686], [120720, 120744], [125184, 125217], [5870, 5872], [8544, 8578], [8581, 8584], [12321, 12329], [12344, 12346], [42726, 42735], [65856, 65908], [66513, 66517], [74752, 74862], [162, 165], [2046, 2047], [2546, 2547], [8352, 8383], [65504, 65505], [65509, 65510], [73693, 73696], [8255, 8256], [65075, 65076], [65101, 65103]];
    addRanges(fic, fic_a);
    var ricd = /* @__PURE__ */ new Set([1471, 1479, 1648, 1809, 2045, 2362, 2364, 2381, 2433, 2492, 2509, 2558, 2620, 2641, 2677, 2748, 2765, 2817, 2876, 2879, 2893, 2902, 2946, 3008, 3021, 3072, 3076, 3201, 3260, 3263, 3270, 3405, 3530, 3542, 3633, 3761, 3893, 3895, 3897, 4038, 4226, 4237, 4253, 6086, 6109, 6313, 6450, 6683, 6742, 6752, 6754, 6783, 6964, 6972, 6978, 7142, 7149, 7405, 7412, 8417, 11647, 42607, 43010, 43014, 43019, 43263, 43443, 43493, 43587, 43596, 43644, 43696, 43713, 43766, 44005, 44008, 44013, 64286, 66045, 66272, 68159, 69633, 70003, 70196, 70206, 70367, 70464, 70726, 70750, 70842, 71229, 71339, 71341, 71351, 72160, 72263, 72767, 73018, 73031, 73109, 73111, 94031, 121461, 121476, 173, 1564, 1757, 1807, 2274, 6158, 65279, 69821, 69837, 917505]), ricd_a = [[768, 879], [1155, 1159], [1425, 1469], [1473, 1474], [1476, 1477], [1552, 1562], [1611, 1631], [1750, 1756], [1759, 1764], [1767, 1768], [1770, 1773], [1840, 1866], [1958, 1968], [2027, 2035], [2070, 2073], [2075, 2083], [2085, 2087], [2089, 2093], [2137, 2139], [2259, 2273], [2275, 2306], [2369, 2376], [2385, 2391], [2402, 2403], [2497, 2500], [2530, 2531], [2561, 2562], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2753, 2757], [2759, 2760], [2786, 2787], [2810, 2815], [2881, 2884], [2914, 2915], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3170, 3171], [3276, 3277], [3298, 3299], [3328, 3329], [3387, 3388], [3393, 3396], [3426, 3427], [3538, 3540], [3636, 3642], [3655, 3662], [3764, 3772], [3784, 3789], [3864, 3865], [3953, 3966], [3968, 3972], [3974, 3975], [3981, 3991], [3993, 4028], [4141, 4144], [4146, 4151], [4153, 4154], [4157, 4158], [4184, 4185], [4190, 4192], [4209, 4212], [4229, 4230], [4957, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6089, 6099], [6155, 6157], [6277, 6278], [6432, 6434], [6439, 6440], [6457, 6459], [6679, 6680], [6744, 6750], [6757, 6764], [6771, 6780], [6832, 6845], [6912, 6915], [6966, 6970], [7019, 7027], [7040, 7041], [7074, 7077], [7080, 7081], [7083, 7085], [7144, 7145], [7151, 7153], [7212, 7219], [7222, 7223], [7376, 7378], [7380, 7392], [7394, 7400], [7416, 7417], [7616, 7673], [7675, 7679], [8400, 8412], [8421, 8432], [11503, 11505], [11744, 11775], [12330, 12333], [12441, 12442], [42612, 42621], [42654, 42655], [42736, 42737], [43045, 43046], [43204, 43205], [43232, 43249], [43302, 43309], [43335, 43345], [43392, 43394], [43446, 43449], [43452, 43453], [43561, 43566], [43569, 43570], [43573, 43574], [43698, 43700], [43703, 43704], [43710, 43711], [43756, 43757], [65024, 65039], [65056, 65071], [66422, 66426], [68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68325, 68326], [68900, 68903], [69446, 69456], [69688, 69702], [69759, 69761], [69811, 69814], [69817, 69818], [69888, 69890], [69927, 69931], [69933, 69940], [70016, 70017], [70070, 70078], [70089, 70092], [70191, 70193], [70198, 70199], [70371, 70378], [70400, 70401], [70459, 70460], [70502, 70508], [70512, 70516], [70712, 70719], [70722, 70724], [70835, 70840], [70847, 70848], [70850, 70851], [71090, 71093], [71100, 71101], [71103, 71104], [71132, 71133], [71219, 71226], [71231, 71232], [71344, 71349], [71453, 71455], [71458, 71461], [71463, 71467], [71727, 71735], [71737, 71738], [72148, 72151], [72154, 72155], [72193, 72202], [72243, 72248], [72251, 72254], [72273, 72278], [72281, 72283], [72330, 72342], [72344, 72345], [72752, 72758], [72760, 72765], [72850, 72871], [72874, 72880], [72882, 72883], [72885, 72886], [73009, 73014], [73020, 73021], [73023, 73029], [73104, 73105], [73459, 73460], [92912, 92916], [92976, 92982], [94095, 94098], [113821, 113822], [119143, 119145], [119163, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [121344, 121398], [121403, 121452], [121499, 121503], [121505, 121519], [122880, 122886], [122888, 122904], [122907, 122913], [122915, 122916], [122918, 122922], [123184, 123190], [123628, 123631], [125136, 125142], [125252, 125258], [917760, 917999], [1536, 1541], [8203, 8207], [8234, 8238], [8288, 8292], [8294, 8303], [65529, 65531], [78896, 78904], [113824, 113827], [119155, 119162], [917536, 917631]];
    addRanges(ricd, ricd_a);
    var mac_a = [[0, 8], [14, 27], [127, 159], [768, 879], [6832, 6911], [7616, 7679], [8400, 8447], [65056, 65071], [48, 57]];
    addRanges(ricd, mac_a);
    var ric = new Set(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function(_context) {
        for (; ; )
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(fic, "t0", 1);
            case 1:
              return _context.delegateYield(ricd, "t1", 2);
            case 2:
            case "end":
              return _context.stop();
          }
      }, _callee);
    })());
    module2.exports = {
      firstIdentChar: fic,
      restIdentChar: ric
    };
  }
});

// ../../node_modules/java-parser/src/tokens.js
var require_tokens2 = __commonJS({
  "../../node_modules/java-parser/src/tokens.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), createTokenOrg = _require.createToken, Lexer = _require.Lexer, camelCase = require_camelCase(), chars, fragments = {};
    try {
      chars = require_unicodesets();
    } catch (e) {
      throw Error("unicodesets.js file could not be found. Did you try to run the command: yarn run build ?");
    }
    function inlineFragments(def) {
      var inlinedDef = def;
      return Object.keys(fragments).forEach(function(prevFragmentName) {
        var prevFragmentDef = fragments[prevFragmentName], templateRegExp = new RegExp("{{".concat(prevFragmentName, "}}"), "g");
        inlinedDef = inlinedDef.replace(templateRegExp, prevFragmentDef);
      }), inlinedDef;
    }
    function FRAGMENT(name, def) {
      fragments[name] = inlineFragments(def);
    }
    function MAKE_PATTERN(def, flags) {
      var inlinedDef = inlineFragments(def);
      return new RegExp(inlinedDef, flags);
    }
    FRAGMENT("Digits", "[0-9]([0-9_]*[0-9])?");
    FRAGMENT("ExponentPart", "[eE][+-]?{{Digits}}");
    FRAGMENT("HexDigit", "[0-9a-fA-F]");
    FRAGMENT("HexDigits", "{{HexDigit}}(({{HexDigit}}|'_')*{{HexDigit}})?");
    FRAGMENT("FloatTypeSuffix", "[fFdD]");
    FRAGMENT("LineTerminator", "(\\x0A|(\\x0D(\\x0A)?))");
    FRAGMENT("UnicodeMarker", "uu*");
    FRAGMENT("UnicodeEscape", "\\\\{{UnicodeMarker}}{{HexDigit}}{4}");
    FRAGMENT("RawInputCharacter", "\\\\{{UnicodeMarker}}[0-9a-fA-F]{4}");
    FRAGMENT("UnicodeInputCharacter", "({{UnicodeEscape}}|{{RawInputCharacter}})");
    FRAGMENT("OctalDigit", "[0-7]");
    FRAGMENT("ZeroToThree", "[0-3]");
    FRAGMENT("OctalEscape", "\\\\({{OctalDigit}}|{{ZeroToThree}}?{{OctalDigit}}{2})");
    FRAGMENT("EscapeSequence", "\\\\[bstnfr\"'\\\\]|{{OctalEscape}}");
    FRAGMENT("StringCharacter", "(?:(?:{{EscapeSequence}})|{{UnicodeInputCharacter}})");
    function matchJavaIdentifier(text, startOffset) {
      var endOffset = startOffset, charCode = text.codePointAt(endOffset);
      for (chars.firstIdentChar.has(charCode) && (endOffset++, charCode > 65535 && endOffset++, charCode = text.codePointAt(endOffset)); chars.restIdentChar.has(charCode); )
        endOffset++, charCode > 65535 && endOffset++, charCode = text.codePointAt(endOffset);
      if (endOffset === startOffset)
        return null;
      var matchedString = text.substring(startOffset, endOffset);
      return [matchedString];
    }
    var Identifier = createTokenOrg({
      name: "Identifier",
      pattern: {
        exec: matchJavaIdentifier
      },
      line_breaks: !1,
      start_chars_hint: Array.from(chars.firstIdentChar, function(x) {
        return String.fromCharCode(x);
      })
    }), allTokens = [], tokenDictionary = {};
    function createToken(options) {
      options.label || (typeof options.pattern == "string" ? options.label = "'".concat(options.pattern, "'") : options.pattern instanceof RegExp && (options.label = "'".concat(options.name, "'")));
      var newTokenType = createTokenOrg(options);
      return allTokens.push(newTokenType), tokenDictionary[options.name] = newTokenType, newTokenType;
    }
    function createKeywordLikeToken(options) {
      return options.longer_alt = Identifier, createToken(options);
    }
    var RestrictedKeyword = createToken({
      name: "RestrictedKeyword",
      pattern: Lexer.NA
    }), Keyword = createToken({
      name: "Keyword",
      pattern: Lexer.NA
    }), AssignmentOperator = createToken({
      name: "AssignmentOperator",
      pattern: Lexer.NA
    }), BinaryOperator = createToken({
      name: "BinaryOperator",
      pattern: Lexer.NA
    }), UnaryPrefixOperator = createToken({
      name: "UnaryPrefixOperator",
      pattern: Lexer.NA
    }), UnaryPrefixOperatorNotPlusMinus = createToken({
      name: "UnaryPrefixOperatorNotPlusMinus",
      pattern: Lexer.NA
    }), UnarySuffixOperator = createToken({
      name: "UnarySuffixOperator",
      pattern: Lexer.NA
    }), Separators = createToken({
      name: "Separators",
      pattern: Lexer.NA
    });
    createToken({
      name: "WhiteSpace",
      pattern: MAKE_PATTERN("[\\x09\\x20\\x0C]|{{LineTerminator}}"),
      group: Lexer.SKIPPED
    });
    createToken({
      name: "LineComment",
      pattern: /\/\/[^\n\r]*/,
      group: "comments"
    });
    createToken({
      name: "TraditionalComment",
      pattern: /\/\*([^*]|\*(?!\/))*\*\//,
      group: "comments"
    });
    createToken({
      name: "BinaryLiteral",
      pattern: /0[bB][01]([01_]*[01])?[lL]?/
    });
    createToken({
      name: "FloatLiteral",
      pattern: MAKE_PATTERN("{{Digits}}\\.({{Digits}})?({{ExponentPart}})?({{FloatTypeSuffix}})?|\\.{{Digits}}({{ExponentPart}})?({{FloatTypeSuffix}})?|{{Digits}}{{ExponentPart}}({{FloatTypeSuffix}})?|{{Digits}}({{ExponentPart}})?{{FloatTypeSuffix}}")
    });
    createToken({
      name: "OctalLiteral",
      pattern: /0_*[0-7]([0-7_]*[0-7])?[lL]?/
    });
    createToken({
      name: "HexFloatLiteral",
      pattern: MAKE_PATTERN("0[xX]({{HexDigits}}\\.?|({{HexDigits}})?\\.{{HexDigits}})[pP][+-]?{{Digits}}[fFdD]?")
    });
    createToken({
      name: "HexLiteral",
      pattern: /0[xX][0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[lL]?/
    });
    createToken({
      name: "DecimalLiteral",
      pattern: MAKE_PATTERN("(0|[1-9](_+{{Digits}}|({{Digits}})?))[lL]?")
    });
    createToken({
      name: "CharLiteral",
      // Not using SingleCharacter Terminology because ' and \ are captured in EscapeSequence
      pattern: MAKE_PATTERN("'(?:[^\\\\']|(?:(?:{{EscapeSequence}})|{{UnicodeInputCharacter}}))'")
    });
    createToken({
      name: "TextBlock",
      pattern: /"""\s*\n(\\"|\s|.)*?"""/
    });
    createToken({
      name: "StringLiteral",
      pattern: MAKE_PATTERN('"(?:[^\\\\"]|{{StringCharacter}})*"')
    });
    var restrictedKeywords = ["open", "module", "requires", "transitive", "exports", "opens", "to", "uses", "provides", "with", "sealed", "non-sealed", "permits"];
    sortDescLength(restrictedKeywords).forEach(function(word) {
      createKeywordLikeToken({
        name: word[0].toUpperCase() + camelCase(word.substr(1)),
        pattern: word,
        // restricted keywords can also be used as an Identifiers according to the spec.
        // TODO: inspect this causes no ambiguities
        categories: [Identifier, RestrictedKeyword]
      });
    });
    var keywords = [
      "abstract",
      "continue",
      "for",
      "new",
      "switch",
      "assert",
      "default",
      "if",
      "package",
      "synchronized",
      "boolean",
      "do",
      "goto",
      "private",
      "this",
      "break",
      "double",
      "implements",
      "protected",
      "throw",
      "byte",
      "else",
      "import",
      "public",
      "throws",
      "case",
      "enum",
      // "instanceof", // special handling for "instanceof" operator below
      "return",
      "transient",
      "catch",
      "extends",
      "int",
      "short",
      "try",
      "char",
      "final",
      "interface",
      "static",
      "void",
      "class",
      "finally",
      "long",
      "strictfp",
      "volatile",
      "const",
      "float",
      "native",
      "super",
      "while",
      ["_", "underscore"]
    ];
    sortDescLength(keywords).forEach(function(word) {
      var isPair = Array.isArray(word), actualName = isPair ? word[1] : word, actualPattern = isPair ? word[0] : word, options = {
        name: actualName[0].toUpperCase() + actualName.substr(1),
        pattern: actualPattern,
        categories: Keyword
      };
      isPair && (options.label = "'".concat(actualName, "'")), createKeywordLikeToken(options);
    });
    createKeywordLikeToken({
      name: "Instanceof",
      pattern: "instanceof",
      categories: [Keyword, BinaryOperator]
    });
    createKeywordLikeToken({
      name: "Var",
      pattern: "var",
      // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
      // "var is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
      categories: Identifier
    });
    createKeywordLikeToken({
      name: "Yield",
      pattern: "yield",
      // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
      // "yield is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
      categories: Identifier
    });
    createKeywordLikeToken({
      name: "Record",
      pattern: "record",
      // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
      // "record is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
      categories: Identifier
    });
    createKeywordLikeToken({
      name: "True",
      pattern: "true"
    });
    createKeywordLikeToken({
      name: "False",
      pattern: "false"
    });
    createKeywordLikeToken({
      name: "Null",
      pattern: "null"
    });
    createToken({
      name: "At",
      pattern: "@",
      categories: [Separators]
    });
    createToken({
      name: "Arrow",
      pattern: "->"
    });
    createToken({
      name: "DotDotDot",
      pattern: "...",
      categories: [Separators]
    });
    createToken({
      name: "Dot",
      pattern: ".",
      categories: [Separators]
    });
    createToken({
      name: "Comma",
      pattern: ",",
      categories: [Separators]
    });
    createToken({
      name: "Semicolon",
      pattern: ";",
      categories: [Separators]
    });
    createToken({
      name: "ColonColon",
      pattern: "::",
      categories: [Separators]
    });
    createToken({
      name: "Colon",
      pattern: ":"
    });
    createToken({
      name: "QuestionMark",
      pattern: "?"
    });
    createToken({
      name: "LBrace",
      pattern: "(",
      categories: [Separators]
    });
    createToken({
      name: "RBrace",
      pattern: ")",
      categories: [Separators]
    });
    createToken({
      name: "LCurly",
      pattern: "{",
      categories: [Separators]
    });
    createToken({
      name: "RCurly",
      pattern: "}",
      categories: [Separators]
    });
    createToken({
      name: "LSquare",
      pattern: "[",
      categories: [Separators]
    });
    createToken({
      name: "RSquare",
      pattern: "]",
      categories: [Separators]
    });
    createToken({
      name: "MinusMinus",
      pattern: "--",
      categories: [UnaryPrefixOperator, UnarySuffixOperator, UnaryPrefixOperatorNotPlusMinus]
    });
    createToken({
      name: "PlusPlus",
      pattern: "++",
      categories: [UnaryPrefixOperator, UnarySuffixOperator, UnaryPrefixOperatorNotPlusMinus]
    });
    createToken({
      name: "Complement",
      pattern: "~",
      categories: [UnaryPrefixOperator, UnaryPrefixOperatorNotPlusMinus]
    });
    createToken({
      name: "LessEquals",
      pattern: "<=",
      categories: [BinaryOperator]
    });
    createToken({
      name: "LessLessEquals",
      pattern: "<<=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Less",
      pattern: "<",
      categories: [BinaryOperator]
    });
    createToken({
      name: "GreaterEquals",
      pattern: ">=",
      categories: [BinaryOperator]
    });
    createToken({
      name: "GreaterGreaterEquals",
      pattern: ">>=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "GreaterGreaterGreaterEquals",
      pattern: ">>>=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Greater",
      pattern: ">",
      categories: [BinaryOperator]
    });
    createToken({
      name: "EqualsEquals",
      pattern: "==",
      categories: [BinaryOperator]
    });
    createToken({
      name: "Equals",
      pattern: "=",
      categories: [BinaryOperator, AssignmentOperator]
    });
    createToken({
      name: "MinusEquals",
      pattern: "-=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Minus",
      pattern: "-",
      categories: [BinaryOperator, UnaryPrefixOperator]
    });
    createToken({
      name: "PlusEquals",
      pattern: "+=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Plus",
      pattern: "+",
      categories: [BinaryOperator, UnaryPrefixOperator]
    });
    createToken({
      name: "AndAnd",
      pattern: "&&",
      categories: [BinaryOperator]
    });
    createToken({
      name: "AndEquals",
      pattern: "&=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "And",
      pattern: "&",
      categories: [BinaryOperator]
    });
    createToken({
      name: "XorEquals",
      pattern: "^=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Xor",
      pattern: "^",
      categories: [BinaryOperator]
    });
    createToken({
      name: "NotEquals",
      pattern: "!=",
      categories: [BinaryOperator]
    });
    createToken({
      name: "OrOr",
      pattern: "||",
      categories: [BinaryOperator]
    });
    createToken({
      name: "OrEquals",
      pattern: "|=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Or",
      pattern: "|",
      categories: [BinaryOperator]
    });
    createToken({
      name: "MultiplyEquals",
      pattern: "*=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Star",
      pattern: "*",
      categories: [BinaryOperator]
    });
    createToken({
      name: "DivideEquals",
      pattern: "/=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Divide",
      pattern: "/",
      categories: [BinaryOperator]
    });
    createToken({
      name: "ModuloEquals",
      pattern: "%=",
      categories: [AssignmentOperator]
    });
    createToken({
      name: "Modulo",
      pattern: "%",
      categories: [BinaryOperator]
    });
    createToken({
      name: "Not",
      pattern: "!",
      categories: [UnaryPrefixOperator, UnaryPrefixOperatorNotPlusMinus]
    });
    allTokens.push(Identifier);
    tokenDictionary.Identifier = Identifier;
    function sortDescLength(arr) {
      return arr.sort(function(a, b) {
        return b.length - a.length;
      });
    }
    module2.exports = {
      allTokens: allTokens,
      tokens: tokenDictionary
    };
  }
});

// ../../node_modules/java-parser/src/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/java-parser/src/utils.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function getSkipValidations() {
      return (typeof process < "u" && // (not every runtime has a global `process` object
      process.env && process.env["prettier-java-development-mode"] === "enabled") === !1;
    }
    module2.exports = {
      getSkipValidations: getSkipValidations
    };
  }
});

// ../../node_modules/java-parser/src/lexer.js
var require_lexer2 = __commonJS({
  "../../node_modules/java-parser/src/lexer.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var chevrotain = require_api(), _require = require_tokens2(), allTokens = _require.allTokens, _require2 = require_utils2(), getSkipValidations = _require2.getSkipValidations, Lexer = chevrotain.Lexer, JavaLexer = new Lexer(allTokens, {
      ensureOptimizations: !0,
      skipValidations: getSkipValidations()
    });
    module2.exports = JavaLexer;
  }
});

// ../../node_modules/java-parser/src/productions/lexical-structure.js
var require_lexical_structure = __commonJS({
  "../../node_modules/java-parser/src/productions/lexical-structure.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function defineRules($, t) {
      $.RULE("literal", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.integerLiteral);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.floatingPointLiteral);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.booleanLiteral);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.CharLiteral);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.TextBlock);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.StringLiteral);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Null);
          }
        }]);
      }), $.RULE("integerLiteral", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.DecimalLiteral);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.HexLiteral);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.OctalLiteral);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.BinaryLiteral);
          }
        }]);
      }), $.RULE("floatingPointLiteral", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.FloatLiteral);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.HexFloatLiteral);
          }
        }]);
      }), $.RULE("booleanLiteral", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.True);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.False);
          }
        }]);
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/types-values-and-variables.js
var require_types_values_and_variables = __commonJS({
  "../../node_modules/java-parser/src/productions/types-values-and-variables.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), tokenMatcher = _require.tokenMatcher;
    function defineRules($, t) {
      $.RULE("primitiveType", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.OR([{
          ALT: function() {
            return $.SUBRULE($.numericType);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Boolean);
          }
        }]);
      }), $.RULE("numericType", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.integralType);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.floatingPointType);
          }
        }]);
      }), $.RULE("integralType", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.Byte);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Short);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Int);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Long);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Char);
          }
        }]);
      }), $.RULE("floatingPointType", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.Float);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Double);
          }
        }]);
      }), $.RULE("referenceType", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.OR({
          DEF: [{
            ALT: function() {
              $.SUBRULE($.primitiveType), $.SUBRULE($.dims);
            }
          }, {
            // Spec Deviation: "typeVariable" alternative is missing because
            //                 it is included in "classOrInterfaceType"
            ALT: function() {
              $.SUBRULE($.classOrInterfaceType), $.OPTION(function() {
                $.SUBRULE2($.dims);
              });
            }
          }],
          IGNORE_AMBIGUITIES: !0
          // annotation prefix was extracted to remove ambiguities
        });
      }), $.RULE("classOrInterfaceType", function() {
        $.SUBRULE($.classType);
      }), $.RULE("classType", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.Identifier), $.OPTION(function() {
          $.SUBRULE($.typeArguments);
        }), $.MANY2(function() {
          $.CONSUME(t.Dot), $.MANY3(function() {
            $.SUBRULE2($.annotation);
          }), $.CONSUME2(t.Identifier), $.OPTION2({
            // To avoid confusion with "TypeArgumentsOrDiamond" rule
            // as we use the "classType" rule in the "identifyNewExpressionType"
            // optimized lookahead rule.
            GATE: function() {
              return tokenMatcher($.LA(2).tokenType, t.Greater) === !1;
            },
            DEF: function() {
              $.SUBRULE2($.typeArguments);
            }
          });
        });
      }), $.RULE("interfaceType", function() {
        $.SUBRULE($.classType);
      }), $.RULE("typeVariable", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.Identifier);
      }), $.RULE("dims", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.LSquare), $.CONSUME(t.RSquare), $.MANY2({
          GATE: function() {
            return $.BACKTRACK_LOOKAHEAD($.isDims);
          },
          DEF: function() {
            $.MANY3(function() {
              $.SUBRULE2($.annotation);
            }), $.CONSUME2(t.LSquare), $.CONSUME2(t.RSquare);
          }
        });
      }), $.RULE("typeParameter", function() {
        $.MANY(function() {
          $.SUBRULE($.typeParameterModifier);
        }), $.SUBRULE($.typeIdentifier), $.OPTION(function() {
          $.SUBRULE($.typeBound);
        });
      }), $.RULE("typeParameterModifier", function() {
        $.SUBRULE($.annotation);
      }), $.RULE("typeBound", function() {
        $.CONSUME(t.Extends), $.SUBRULE($.classOrInterfaceType), $.MANY2(function() {
          $.SUBRULE($.additionalBound);
        });
      }), $.RULE("additionalBound", function() {
        $.CONSUME(t.And), $.SUBRULE($.interfaceType);
      }), $.RULE("typeArguments", function() {
        $.CONSUME(t.Less), $.SUBRULE($.typeArgumentList), $.CONSUME(t.Greater);
      }), $.RULE("typeArgumentList", function() {
        $.SUBRULE($.typeArgument), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.typeArgument);
        });
      }), $.RULE("typeArgument", function() {
        $.OR([{
          GATE: $.BACKTRACK($.referenceType),
          ALT: function() {
            return $.SUBRULE($.referenceType);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.wildcard);
          }
        }]);
      }), $.RULE("wildcard", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.QuestionMark), $.OPTION(function() {
          $.SUBRULE($.wildcardBounds);
        });
      }), $.RULE("wildcardBounds", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.Extends);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Super);
          }
        }]), $.SUBRULE($.referenceType);
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/names.js
var require_names = __commonJS({
  "../../node_modules/java-parser/src/productions/names.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), tokenMatcher = _require.tokenMatcher;
    function defineRules($, t) {
      var _this = this;
      $.RULE("moduleName", function() {
        $.CONSUME(t.Identifier), $.MANY(function() {
          $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
        });
      }), $.RULE("packageName", function() {
        $.CONSUME(t.Identifier), $.MANY(function() {
          $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
        });
      }), $.RULE("typeName", function() {
        $.CONSUME(t.Identifier), $.MANY(function() {
          $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
        });
      }), $.RULE("expressionName", function() {
        $.CONSUME(t.Identifier), $.MANY({
          // expressionName could be called by "qualifiedExplicitConstructorInvocation"
          // in that case it may be followed by ".super" so we need to look two tokens
          // ahead.
          GATE: function() {
            return tokenMatcher(_this.LA(2).tokenType, t.Identifier);
          },
          DEF: function() {
            $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
          }
        });
      }), $.RULE("methodName", function() {
        $.CONSUME(t.Identifier);
      }), $.RULE("packageOrTypeName", function() {
        $.CONSUME(t.Identifier), $.MANY({
          // In some contexts a "Dot Star" (.*) may appear
          // after a "packageOrTypeName", by default Chevrotain will
          // only look a single token ahead (Dot) to determine if another iteration
          // exists which will cause a parsing error for inputs such as:
          // "import a.b.c.*"
          GATE: function() {
            return tokenMatcher(_this.LA(2).tokenType, t.Star) === !1;
          },
          DEF: function() {
            $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
          }
        });
      }), $.RULE("ambiguousName", function() {
        $.CONSUME(t.Identifier), $.MANY(function() {
          $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
        });
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/packages-and-modules.js
var require_packages_and_modules = __commonJS({
  "../../node_modules/java-parser/src/productions/packages-and-modules.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), isRecognitionException = _require.isRecognitionException, tokenMatcher = _require.tokenMatcher, EOF = _require.EOF;
    function defineRules($, t) {
      var _this = this;
      $.RULE("compilationUnit", function() {
        var isModule = $.BACKTRACK_LOOKAHEAD($.isModuleCompilationUnit);
        $.OR([{
          GATE: function() {
            return isModule === !1;
          },
          ALT: function() {
            return $.SUBRULE($.ordinaryCompilationUnit);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.modularCompilationUnit);
          }
        }]), $.CONSUME(EOF);
      }), $.RULE("ordinaryCompilationUnit", function() {
        $.OPTION({
          GATE: $.BACKTRACK($.packageDeclaration),
          DEF: function() {
            $.SUBRULE($.packageDeclaration);
          }
        }), $.MANY(function() {
          $.SUBRULE3($.importDeclaration);
        }), $.MANY2(function() {
          $.SUBRULE($.typeDeclaration);
        });
      }), $.RULE("modularCompilationUnit", function() {
        $.MANY(function() {
          $.SUBRULE($.importDeclaration);
        }), $.SUBRULE($.moduleDeclaration);
      }), $.RULE("packageDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.packageModifier);
        }), $.CONSUME(t.Package), $.CONSUME(t.Identifier), $.MANY2(function() {
          $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
        }), $.CONSUME2(t.Semicolon);
      }), $.RULE("packageModifier", function() {
        $.SUBRULE($.annotation);
      }), $.RULE("importDeclaration", function() {
        $.OR([
          {
            ALT: function() {
              $.CONSUME(t.Import), $.OPTION(function() {
                $.CONSUME(t.Static);
              }), $.SUBRULE($.packageOrTypeName), $.OPTION2(function() {
                $.CONSUME(t.Dot), $.CONSUME(t.Star);
              }), $.CONSUME(t.Semicolon);
            }
          },
          // Spec Deviation: The spec do not allow empty statement in between imports.
          //                 However Java compiler consider empty statements valid, we chose
          //                 to support that case, thus deviate from the spec.
          //                 See here: https://github.com/jhipster/prettier-java/pull/158
          {
            ALT: function() {
              return $.SUBRULE($.emptyStatement);
            }
          }
        ]);
      }), $.RULE("typeDeclaration", function() {
        var isClassDeclaration = _this.BACKTRACK_LOOKAHEAD($.isClassDeclaration);
        $.OR([{
          GATE: function() {
            return isClassDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.classDeclaration);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.interfaceDeclaration);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Semicolon);
          }
        }]);
      }), $.RULE("moduleDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.OPTION(function() {
          $.CONSUME(t.Open);
        }), $.CONSUME(t.Module), $.CONSUME(t.Identifier), $.MANY2(function() {
          $.CONSUME(t.Dot), $.CONSUME2(t.Identifier);
        }), $.CONSUME(t.LCurly), $.MANY3(function() {
          $.SUBRULE($.moduleDirective);
        }), $.CONSUME(t.RCurly);
      }), $.RULE("moduleDirective", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.requiresModuleDirective);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.exportsModuleDirective);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.opensModuleDirective);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.usesModuleDirective);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.providesModuleDirective);
          }
        }]);
      }), $.RULE("requiresModuleDirective", function() {
        $.CONSUME(t.Requires), $.MANY({
          GATE: function() {
            return (tokenMatcher($.LA(1).tokenType, t.Transitive) && tokenMatcher($.LA(2).tokenType, t.Separators)) === !1;
          },
          DEF: function() {
            $.SUBRULE($.requiresModifier);
          }
        }), $.SUBRULE($.moduleName), $.CONSUME(t.Semicolon);
      }), $.RULE("exportsModuleDirective", function() {
        $.CONSUME(t.Exports), $.SUBRULE($.packageName), $.OPTION(function() {
          $.CONSUME(t.To), $.SUBRULE($.moduleName), $.MANY(function() {
            $.CONSUME(t.Comma), $.SUBRULE2($.moduleName);
          });
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("opensModuleDirective", function() {
        $.CONSUME(t.Opens), $.SUBRULE($.packageName), $.OPTION(function() {
          $.CONSUME(t.To), $.SUBRULE($.moduleName), $.MANY(function() {
            $.CONSUME(t.Comma), $.SUBRULE2($.moduleName);
          });
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("usesModuleDirective", function() {
        $.CONSUME(t.Uses), $.SUBRULE($.typeName), $.CONSUME(t.Semicolon);
      }), $.RULE("providesModuleDirective", function() {
        $.CONSUME(t.Provides), $.SUBRULE($.typeName), $.CONSUME(t.With), $.SUBRULE2($.typeName), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE3($.typeName);
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("requiresModifier", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.Transitive);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Static);
          }
        }]);
      }), $.RULE("isModuleCompilationUnit", function() {
        $.OPTION(function() {
          return $.SUBRULE($.packageDeclaration), !1;
        });
        try {
          $.MANY(function() {
            $.SUBRULE2($.importDeclaration);
          }), $.MANY2({
            // To avoid ambiguity with @interface ("AnnotationTypeDeclaration" vs "Annotaion")
            GATE: function() {
              return (tokenMatcher($.LA(1).tokenType, t.At) && tokenMatcher($.LA(2).tokenType, t.Interface)) === !1;
            },
            DEF: function() {
              $.SUBRULE($.annotation);
            }
          });
        } catch (e) {
          throw isRecognitionException(e) ? "Cannot Identify if the source code is an OrdinaryCompilationUnit or  ModularCompilationUnit" : e;
        }
        var nextTokenType = _this.LA(1).tokenType;
        return tokenMatcher(nextTokenType, t.Open) || tokenMatcher(nextTokenType, t.Module);
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/classes.js
var require_classes = __commonJS({
  "../../node_modules/java-parser/src/productions/classes.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), isRecognitionException = _require.isRecognitionException, tokenMatcher = _require.tokenMatcher;
    function defineRules($, t) {
      var _this = this;
      $.RULE("classDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.classModifier);
        }), $.OR([{
          ALT: function() {
            return $.SUBRULE($.normalClassDeclaration);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.enumDeclaration);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.recordDeclaration);
          }
        }]);
      }), $.RULE("normalClassDeclaration", function() {
        $.CONSUME(t.Class), $.SUBRULE($.typeIdentifier), $.OPTION(function() {
          $.SUBRULE($.typeParameters);
        }), $.OPTION2(function() {
          $.SUBRULE($.superclass);
        }), $.OPTION3(function() {
          $.SUBRULE($.superinterfaces);
        }), $.OPTION4(function() {
          $.SUBRULE($.classPermits);
        }), $.SUBRULE($.classBody);
      }), $.RULE("classModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Protected);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Private);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Abstract);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Static);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Final);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Sealed);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.NonSealed);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Strictfp);
          }
        }]);
      }), $.RULE("typeParameters", function() {
        $.CONSUME(t.Less), $.SUBRULE($.typeParameterList), $.CONSUME(t.Greater);
      }), $.RULE("typeParameterList", function() {
        $.SUBRULE($.typeParameter), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.typeParameter);
        });
      }), $.RULE("superclass", function() {
        $.CONSUME(t.Extends), $.SUBRULE($.classType);
      }), $.RULE("superinterfaces", function() {
        $.CONSUME(t.Implements), $.SUBRULE($.interfaceTypeList);
      }), $.RULE("interfaceTypeList", function() {
        $.SUBRULE($.interfaceType), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.interfaceType);
        });
      }), $.RULE("classPermits", function() {
        $.CONSUME(t.Permits), $.SUBRULE($.typeName), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.typeName);
        });
      }), $.RULE("classBody", function() {
        $.CONSUME(t.LCurly), $.MANY(function() {
          $.SUBRULE($.classBodyDeclaration);
        }), $.CONSUME(t.RCurly);
      });
      var classBodyTypes = {
        unknown: 0,
        fieldDeclaration: 1,
        methodDeclaration: 2,
        classDeclaration: 3,
        interfaceDeclaration: 4,
        semiColon: 5,
        instanceInitializer: 6,
        staticInitializer: 7,
        constructorDeclaration: 8
      };
      $.RULE("classBodyDeclaration", function() {
        var nextRuleType = $.BACKTRACK_LOOKAHEAD($.identifyClassBodyDeclarationType);
        $.OR([
          {
            GATE: function() {
              return nextRuleType >= classBodyTypes.fieldDeclaration && nextRuleType <= classBodyTypes.semiColon;
            },
            ALT: function() {
              return $.SUBRULE($.classMemberDeclaration, {
                ARGS: [nextRuleType]
              });
            }
          },
          // no gate needed for the initializers because these are LL(1) rules.
          {
            ALT: function() {
              return $.SUBRULE($.instanceInitializer);
            }
          },
          {
            ALT: function() {
              return $.SUBRULE($.staticInitializer);
            }
          },
          {
            GATE: function() {
              return tokenMatcher(nextRuleType, classBodyTypes.constructorDeclaration);
            },
            ALT: function() {
              return $.SUBRULE($.constructorDeclaration);
            }
          }
        ]);
      }), $.RULE("classMemberDeclaration", function(nextRuleType) {
        $.OR([{
          GATE: function() {
            return nextRuleType === classBodyTypes.fieldDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.fieldDeclaration);
          }
        }, {
          GATE: function() {
            return nextRuleType === classBodyTypes.methodDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.methodDeclaration);
          }
        }, {
          GATE: function() {
            return nextRuleType === classBodyTypes.classDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.classDeclaration);
          }
        }, {
          GATE: function() {
            return nextRuleType === classBodyTypes.interfaceDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.interfaceDeclaration);
          }
        }, {
          // No GATE is needed as this is LL(1)
          ALT: function() {
            return $.CONSUME(t.Semicolon);
          }
        }]);
      }), $.RULE("fieldDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.fieldModifier);
        }), $.SUBRULE($.unannType), $.SUBRULE($.variableDeclaratorList), $.CONSUME(t.Semicolon);
      }), $.RULE("fieldModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Protected);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Private);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Static);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Final);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Transient);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Volatile);
          }
        }]);
      }), $.RULE("variableDeclaratorList", function() {
        $.SUBRULE($.variableDeclarator), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.variableDeclarator);
        });
      }), $.RULE("variableDeclarator", function() {
        $.SUBRULE($.variableDeclaratorId), $.OPTION(function() {
          $.CONSUME(t.Equals), $.SUBRULE($.variableInitializer);
        });
      }), $.RULE("variableDeclaratorId", function() {
        $.CONSUME(t.Identifier), $.OPTION(function() {
          $.SUBRULE($.dims);
        });
      }), $.RULE("variableInitializer", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.expression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.arrayInitializer);
          }
        }]);
      }), $.RULE("unannType", function() {
        $.OR([
          // Spec Deviation: The array type "dims" suffix was extracted to this rule
          // to avoid backtracking for performance reasons.
          {
            ALT: function() {
              return $.SUBRULE($.unannPrimitiveTypeWithOptionalDimsSuffix);
            }
          },
          {
            ALT: function() {
              return $.SUBRULE($.unannReferenceType);
            }
          }
        ]);
      }), $.RULE("unannPrimitiveTypeWithOptionalDimsSuffix", function() {
        $.SUBRULE($.unannPrimitiveType), $.OPTION({
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isDims);
          },
          DEF: function() {
            return $.SUBRULE2($.dims);
          }
        });
      }), $.RULE("unannPrimitiveType", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.numericType);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Boolean);
          }
        }]);
      }), $.RULE("unannReferenceType", function() {
        $.SUBRULE($.unannClassOrInterfaceType), $.OPTION({
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isDims);
          },
          DEF: function() {
            return $.SUBRULE2($.dims);
          }
        });
      }), $.RULE("unannClassOrInterfaceType", function() {
        $.SUBRULE($.unannClassType);
      }), $.RULE("unannClassType", function() {
        $.CONSUME(t.Identifier), $.OPTION(function() {
          $.SUBRULE($.typeArguments);
        }), $.MANY2(function() {
          $.CONSUME(t.Dot), $.MANY3(function() {
            $.SUBRULE2($.annotation);
          }), $.CONSUME2(t.Identifier), $.OPTION2(function() {
            $.SUBRULE2($.typeArguments);
          });
        });
      }), $.RULE("unannInterfaceType", function() {
        $.SUBRULE($.unannClassType);
      }), $.RULE("unannTypeVariable", function() {
        $.CONSUME(t.Identifier);
      }), $.RULE("methodDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.methodModifier);
        }), $.SUBRULE($.methodHeader), $.SUBRULE($.methodBody);
      }), $.RULE("methodModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Protected);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Private);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Abstract);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Static);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Final);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Synchronized);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Native);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Strictfp);
          }
        }]);
      }), $.RULE("methodHeader", function() {
        $.OPTION(function() {
          $.SUBRULE($.typeParameters), $.MANY(function() {
            $.SUBRULE($.annotation);
          });
        }), $.SUBRULE($.result), $.SUBRULE($.methodDeclarator), $.OPTION2(function() {
          $.SUBRULE($.throws);
        });
      }), $.RULE("result", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.unannType);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Void);
          }
        }]);
      }), $.RULE("methodDeclarator", function() {
        $.CONSUME(t.Identifier), $.CONSUME(t.LBrace), $.OPTION(function() {
          $.SUBRULE($.formalParameterList);
        }), $.CONSUME(t.RBrace), $.OPTION2(function() {
          $.SUBRULE($.dims);
        });
      }), $.RULE("receiverParameter", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.SUBRULE($.unannType), $.OPTION(function() {
          $.CONSUME(t.Identifier), $.CONSUME(t.Dot);
        }), $.CONSUME(t.This);
      }), $.RULE("formalParameterList", function() {
        $.SUBRULE($.formalParameter), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.formalParameter);
        });
      }), $.RULE("formalParameter", function() {
        $.OR([
          // Spec Deviation: extracted to "variableParaRegularParameter"
          {
            GATE: $.BACKTRACK($.variableParaRegularParameter),
            ALT: function() {
              return $.SUBRULE($.variableParaRegularParameter);
            }
          },
          {
            ALT: function() {
              return $.SUBRULE($.variableArityParameter);
            }
          }
        ]);
      }), $.RULE("variableParaRegularParameter", function() {
        $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.unannType), $.SUBRULE($.variableDeclaratorId);
      }), $.RULE("variableArityParameter", function() {
        $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.unannType), $.MANY2(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.DotDotDot), $.CONSUME(t.Identifier);
      }), $.RULE("variableModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Final);
          }
        }]);
      }), $.RULE("throws", function() {
        $.CONSUME(t.Throws), $.SUBRULE($.exceptionTypeList);
      }), $.RULE("exceptionTypeList", function() {
        $.SUBRULE($.exceptionType), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.exceptionType);
        });
      }), $.RULE("exceptionType", function() {
        $.SUBRULE($.classType);
      }), $.RULE("methodBody", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.block);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Semicolon);
          }
        }]);
      }), $.RULE("instanceInitializer", function() {
        $.SUBRULE($.block);
      }), $.RULE("staticInitializer", function() {
        $.CONSUME(t.Static), $.SUBRULE($.block);
      }), $.RULE("constructorDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.constructorModifier);
        }), $.SUBRULE($.constructorDeclarator), $.OPTION(function() {
          $.SUBRULE($.throws);
        }), $.SUBRULE($.constructorBody);
      }), $.RULE("constructorModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Protected);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Private);
          }
        }]);
      }), $.RULE("constructorDeclarator", function() {
        $.OPTION(function() {
          $.SUBRULE($.typeParameters);
        }), $.SUBRULE($.simpleTypeName), $.CONSUME(t.LBrace), $.OPTION2({
          // a "formalParameterList" and a "receiverParameter"
          // cannot be distinguished using fixed lookahead.
          GATE: $.BACKTRACK($.receiverParameter),
          DEF: function() {
            $.SUBRULE($.receiverParameter), $.CONSUME(t.Comma);
          }
        }), $.OPTION3(function() {
          $.SUBRULE($.formalParameterList);
        }), $.CONSUME(t.RBrace);
      }), $.RULE("simpleTypeName", function() {
        $.CONSUME(t.Identifier);
      }), $.RULE("constructorBody", function() {
        $.CONSUME(t.LCurly), $.OPTION({
          GATE: $.BACKTRACK($.explicitConstructorInvocation),
          DEF: function() {
            $.SUBRULE($.explicitConstructorInvocation);
          }
        }), $.OPTION2(function() {
          $.SUBRULE($.blockStatements);
        }), $.CONSUME(t.RCurly);
      }), $.RULE("explicitConstructorInvocation", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.unqualifiedExplicitConstructorInvocation);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.qualifiedExplicitConstructorInvocation);
          }
        }]);
      }), $.RULE("unqualifiedExplicitConstructorInvocation", function() {
        $.OPTION(function() {
          $.SUBRULE($.typeArguments);
        }), $.OR([{
          ALT: function() {
            return $.CONSUME(t.This);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Super);
          }
        }]), $.CONSUME(t.LBrace), $.OPTION2(function() {
          $.SUBRULE($.argumentList);
        }), $.CONSUME(t.RBrace), $.CONSUME(t.Semicolon);
      }), $.RULE("qualifiedExplicitConstructorInvocation", function() {
        $.SUBRULE($.expressionName), $.CONSUME(t.Dot), $.OPTION(function() {
          $.SUBRULE($.typeArguments);
        }), $.CONSUME(t.Super), $.CONSUME(t.LBrace), $.OPTION2(function() {
          $.SUBRULE($.argumentList);
        }), $.CONSUME(t.RBrace), $.CONSUME(t.Semicolon);
      }), $.RULE("enumDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.classModifier);
        }), $.CONSUME(t.Enum), $.SUBRULE($.typeIdentifier), $.OPTION(function() {
          $.SUBRULE($.superinterfaces);
        }), $.SUBRULE($.enumBody);
      }), $.RULE("enumBody", function() {
        $.CONSUME(t.LCurly), $.OPTION(function() {
          $.SUBRULE($.enumConstantList);
        }), $.OPTION2(function() {
          $.CONSUME(t.Comma);
        }), $.OPTION3(function() {
          $.SUBRULE($.enumBodyDeclarations);
        }), $.CONSUME(t.RCurly);
      }), $.RULE("enumConstantList", function() {
        $.SUBRULE($.enumConstant), $.MANY({
          GATE: function() {
            var nextToken = $.LA(2);
            return tokenMatcher(nextToken, t.Identifier) || tokenMatcher(nextToken, t.At);
          },
          DEF: function() {
            $.CONSUME(t.Comma), $.SUBRULE2($.enumConstant);
          }
        });
      }), $.RULE("enumConstant", function() {
        $.MANY(function() {
          $.SUBRULE($.enumConstantModifier);
        }), $.CONSUME(t.Identifier), $.OPTION(function() {
          $.CONSUME(t.LBrace), $.OPTION2(function() {
            $.SUBRULE($.argumentList);
          }), $.CONSUME(t.RBrace);
        }), $.OPTION3(function() {
          $.SUBRULE($.classBody);
        });
      }), $.RULE("enumConstantModifier", function() {
        $.SUBRULE($.annotation);
      }), $.RULE("enumBodyDeclarations", function() {
        $.CONSUME(t.Semicolon), $.MANY(function() {
          $.SUBRULE($.classBodyDeclaration);
        });
      }), $.RULE("recordDeclaration", function() {
        $.CONSUME(t.Record), $.SUBRULE($.typeIdentifier), $.OPTION(function() {
          $.SUBRULE($.typeParameters);
        }), $.SUBRULE($.recordHeader), $.OPTION2(function() {
          $.SUBRULE($.superinterfaces);
        }), $.SUBRULE($.recordBody);
      }), $.RULE("recordHeader", function() {
        $.CONSUME(t.LBrace), $.OPTION(function() {
          $.SUBRULE($.recordComponentList);
        }), $.CONSUME(t.RBrace);
      }), $.RULE("recordComponentList", function() {
        $.SUBRULE($.recordComponent), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.recordComponent);
        });
      }), $.RULE("recordComponent", function() {
        $.MANY(function() {
          $.SUBRULE($.recordComponentModifier);
        }), $.SUBRULE($.unannType), $.OR([{
          ALT: function() {
            return $.CONSUME(t.Identifier);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.variableArityRecordComponent);
          }
        }]);
      }), $.RULE("variableArityRecordComponent", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.DotDotDot), $.CONSUME(t.Identifier);
      }), $.RULE("recordComponentModifier", function() {
        $.SUBRULE($.annotation);
      }), $.RULE("recordBody", function() {
        $.CONSUME(t.LCurly), $.MANY(function() {
          $.SUBRULE($.recordBodyDeclaration);
        }), $.CONSUME(t.RCurly);
      }), $.RULE("recordBodyDeclaration", function() {
        $.OR([{
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isCompactConstructorDeclaration);
          },
          ALT: function() {
            return $.SUBRULE($.compactConstructorDeclaration);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.classBodyDeclaration);
          }
        }]);
      }), $.RULE("compactConstructorDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.constructorModifier);
        }), $.SUBRULE($.simpleTypeName), $.SUBRULE($.constructorBody);
      }), $.RULE("isClassDeclaration", function() {
        var isEmptyTypeDeclaration = !1;
        $.OPTION(function() {
          $.CONSUME(t.Semicolon);
        }) && (isEmptyTypeDeclaration = !0);
        try {
          $.MANY({
            GATE: function() {
              return (tokenMatcher($.LA(1).tokenType, t.At) && tokenMatcher($.LA(2).tokenType, t.Interface)) === !1;
            },
            DEF: function() {
              $.SUBRULE($.classModifier);
            }
          });
        } catch (e) {
          throw isRecognitionException(e) ? "Cannot Identify if the <TypeDeclaration> is a <ClassDeclaration> or an <InterfaceDeclaration>" : e;
        }
        if (isEmptyTypeDeclaration)
          return !1;
        var nextTokenType = _this.LA(1).tokenType;
        return tokenMatcher(nextTokenType, t.Class) || tokenMatcher(nextTokenType, t.Enum) || tokenMatcher(nextTokenType, t.Record) && tokenMatcher(_this.LA(2).tokenType, t.Identifier);
      }), $.RULE("identifyClassBodyDeclarationType", function() {
        try {
          var nextTokenType = _this.LA(1).tokenType, nextNextTokenType = _this.LA(2).tokenType;
          switch (nextTokenType) {
            case t.Semicolon:
              return classBodyTypes.semiColon;
            case t.LCurly:
              return classBodyTypes.instanceInitializer;
            case t.Static:
              switch (nextNextTokenType) {
                case t.LCurly:
                  return classBodyTypes.staticInitializer;
              }
          }
          if ($.MANY({
            GATE: function() {
              return (tokenMatcher($.LA(1).tokenType, t.At) && tokenMatcher($.LA(2).tokenType, t.Interface)) === !1;
            },
            DEF: function() {
              $.OR([{
                GATE: function() {
                  return (tokenMatcher($.LA(1).tokenType, t.At) && tokenMatcher($.LA(2).tokenType, t.Interface)) === !1;
                },
                ALT: function() {
                  return $.SUBRULE($.annotation);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Public);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Protected);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Private);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Abstract);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Static);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Final);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Transient);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Volatile);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Synchronized);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Native);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Sealed);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.NonSealed);
                }
              }, {
                ALT: function() {
                  return $.CONSUME(t.Strictfp);
                }
              }]);
            }
          }), nextTokenType = _this.LA(1).tokenType, nextNextTokenType = _this.LA(2).tokenType, tokenMatcher(nextTokenType, t.Identifier) && tokenMatcher(nextNextTokenType, t.LBrace))
            return classBodyTypes.constructorDeclaration;
          if (tokenMatcher(nextTokenType, t.Class) || tokenMatcher(nextTokenType, t.Enum) || tokenMatcher(nextTokenType, t.Record))
            return classBodyTypes.classDeclaration;
          if (tokenMatcher(nextTokenType, t.Interface) || tokenMatcher(nextTokenType, t.At))
            return classBodyTypes.interfaceDeclaration;
          if (tokenMatcher(nextTokenType, t.Void))
            return classBodyTypes.methodDeclaration;
          if (tokenMatcher(nextTokenType, t.Less)) {
            _this.SUBRULE($.typeParameters);
            var _nextTokenType = _this.LA(1).tokenType, _nextNextTokenType = _this.LA(2).tokenType;
            return tokenMatcher(_nextTokenType, t.Identifier) && tokenMatcher(_nextNextTokenType, t.LBrace) ? classBodyTypes.constructorDeclaration : classBodyTypes.methodDeclaration;
          }
          _this.SUBRULE($.unannType);
          var nextToken = _this.LA(1);
          return nextNextTokenType = _this.LA(2).tokenType, tokenMatcher(nextToken, t.Identifier) && tokenMatcher(nextNextTokenType, t.LBrace) ? classBodyTypes.methodDeclaration : tokenMatcher(nextToken, t.Identifier) ? classBodyTypes.fieldDeclaration : classBodyTypes.unknown;
        } catch (e) {
          throw Error("Cannot Identify the type of a <classBodyDeclaration>");
        }
      }), $.RULE("isDims", function() {
        return $.MANY($.annotation), tokenMatcher(_this.LA(1).tokenType, t.LSquare) && tokenMatcher(_this.LA(2).tokenType, t.RSquare);
      }), $.RULE("isCompactConstructorDeclaration", function() {
        $.MANY($.constructorModifier), $.SUBRULE($.simpleTypeName), $.CONSUME(t.LCurly);
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/interfaces.js
var require_interfaces = __commonJS({
  "../../node_modules/java-parser/src/productions/interfaces.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), tokenMatcher = _require.tokenMatcher;
    function defineRules($, t) {
      var _this = this;
      $.RULE("interfaceDeclaration", function() {
        $.MANY({
          DEF: function() {
            $.SUBRULE($.interfaceModifier);
          },
          MAX_LOOKAHEAD: 2
        }), $.OR([{
          ALT: function() {
            return $.SUBRULE($.normalInterfaceDeclaration);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.annotationTypeDeclaration);
          }
        }]);
      }), $.RULE("normalInterfaceDeclaration", function() {
        $.CONSUME(t.Interface), $.SUBRULE($.typeIdentifier), $.OPTION(function() {
          $.SUBRULE($.typeParameters);
        }), $.OPTION2(function() {
          $.SUBRULE($.extendsInterfaces);
        }), $.OPTION3(function() {
          $.SUBRULE($.interfacePermits);
        }), $.SUBRULE($.interfaceBody);
      }), $.RULE("interfaceModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Protected);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Private);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Abstract);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Static);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Sealed);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.NonSealed);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Strictfp);
          }
        }]);
      }), $.RULE("extendsInterfaces", function() {
        $.CONSUME(t.Extends), $.SUBRULE($.interfaceTypeList);
      }), $.RULE("interfacePermits", function() {
        $.CONSUME(t.Permits), $.SUBRULE($.typeName), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.typeName);
        });
      }), $.RULE("interfaceBody", function() {
        $.CONSUME(t.LCurly), $.MANY(function() {
          $.SUBRULE($.interfaceMemberDeclaration);
        }), $.CONSUME(t.RCurly);
      });
      var InterfaceBodyTypes = {
        unknown: 0,
        constantDeclaration: 1,
        interfaceMethodDeclaration: 2,
        classDeclaration: 3,
        interfaceDeclaration: 4,
        semiColon: 5
      };
      $.RULE("interfaceMemberDeclaration", function() {
        var detectedType = _this.BACKTRACK_LOOKAHEAD($.identifyInterfaceBodyDeclarationType);
        $.OR([{
          GATE: function() {
            return detectedType === InterfaceBodyTypes.constantDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.constantDeclaration);
          }
        }, {
          GATE: function() {
            return detectedType === InterfaceBodyTypes.interfaceMethodDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.interfaceMethodDeclaration);
          }
        }, {
          GATE: function() {
            return detectedType === InterfaceBodyTypes.classDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.classDeclaration);
          }
        }, {
          GATE: function() {
            return detectedType === InterfaceBodyTypes.interfaceDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.interfaceDeclaration);
          }
        }, {
          // No GATE is needed as this is LL(1)
          ALT: function() {
            return $.CONSUME(t.Semicolon);
          }
        }]);
      }), $.RULE("constantDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.constantModifier);
        }), $.SUBRULE($.unannType), $.SUBRULE($.variableDeclaratorList), $.CONSUME(t.Semicolon);
      }), $.RULE("constantModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Static);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Final);
          }
        }]);
      }), $.RULE("interfaceMethodDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.interfaceMethodModifier);
        }), $.SUBRULE($.methodHeader), $.SUBRULE($.methodBody);
      }), $.RULE("interfaceMethodModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Private);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Abstract);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Default);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Static);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Strictfp);
          }
        }]);
      }), $.RULE("annotationTypeDeclaration", function() {
        $.CONSUME(t.At), $.CONSUME(t.Interface), $.SUBRULE($.typeIdentifier), $.SUBRULE($.annotationTypeBody);
      }), $.RULE("annotationTypeBody", function() {
        $.CONSUME(t.LCurly), $.MANY(function() {
          $.SUBRULE($.annotationTypeMemberDeclaration);
        }), $.CONSUME(t.RCurly);
      });
      var AnnotationBodyTypes = {
        unknown: 0,
        annotationTypeElementDeclaration: 2,
        constantDeclaration: 1,
        classDeclaration: 3,
        interfaceDeclaration: 4,
        semiColon: 5
      };
      $.RULE("annotationTypeMemberDeclaration", function() {
        var detectedType = _this.BACKTRACK_LOOKAHEAD($.identifyAnnotationBodyDeclarationType);
        $.OR([{
          GATE: function() {
            return detectedType === AnnotationBodyTypes.annotationTypeElementDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.annotationTypeElementDeclaration);
          }
        }, {
          GATE: function() {
            return detectedType === AnnotationBodyTypes.constantDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.constantDeclaration);
          }
        }, {
          GATE: function() {
            return detectedType === AnnotationBodyTypes.classDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.classDeclaration);
          }
        }, {
          GATE: function() {
            return detectedType === AnnotationBodyTypes.interfaceDeclaration;
          },
          ALT: function() {
            return $.SUBRULE($.interfaceDeclaration);
          }
        }, {
          // No GATE is needed as this is LL(1)
          ALT: function() {
            return $.CONSUME(t.Semicolon);
          }
        }]);
      }), $.RULE("annotationTypeElementDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.annotationTypeElementModifier);
        }), $.SUBRULE($.unannType), $.CONSUME(t.Identifier), $.CONSUME(t.LBrace), $.CONSUME(t.RBrace), $.OPTION(function() {
          $.SUBRULE($.dims);
        }), $.OPTION2(function() {
          $.SUBRULE($.defaultValue);
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("annotationTypeElementModifier", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.annotation);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Public);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Abstract);
          }
        }]);
      }), $.RULE("defaultValue", function() {
        $.CONSUME(t.Default), $.SUBRULE($.elementValue);
      }), $.RULE("annotation", function() {
        $.CONSUME(t.At), $.SUBRULE($.typeName), $.OPTION(function() {
          $.CONSUME(t.LBrace), $.OR({
            DEF: [
              // normal annotation - https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-NormalAnnotation
              {
                ALT: function() {
                  return $.SUBRULE($.elementValuePairList);
                }
              },
              // Single Element Annotation - https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-SingleElementAnnotation
              {
                ALT: function() {
                  return $.SUBRULE($.elementValue);
                }
              },
              {
                ALT: function() {
                }
              }
            ],
            IGNORE_AMBIGUITIES: !0,
            MAX_LOOKAHEAD: 2
          }), $.CONSUME(t.RBrace);
        });
      }), $.RULE("elementValuePairList", function() {
        $.SUBRULE($.elementValuePair), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.elementValuePair);
        });
      }), $.RULE("elementValuePair", function() {
        $.CONSUME(t.Identifier), $.CONSUME(t.Equals), $.SUBRULE($.elementValue);
      }), $.RULE("elementValue", function() {
        var isSimpleElementValueAnnotation = _this.BACKTRACK_LOOKAHEAD($.isSimpleElementValueAnnotation);
        $.OR([
          // Spec Deviation: "conditionalExpression" replaced with "expression"
          // Because we cannot differentiate between the two using fixed lookahead.
          {
            GATE: function() {
              return isSimpleElementValueAnnotation === !1;
            },
            ALT: function() {
              return $.SUBRULE($.expression);
            }
          },
          {
            ALT: function() {
              return $.SUBRULE($.elementValueArrayInitializer);
            }
          },
          {
            GATE: function() {
              return isSimpleElementValueAnnotation === !0;
            },
            ALT: function() {
              return $.SUBRULE($.annotation);
            }
          }
        ]);
      }), $.RULE("elementValueArrayInitializer", function() {
        $.CONSUME(t.LCurly), $.OPTION(function() {
          $.SUBRULE($.elementValueList);
        }), $.OPTION2(function() {
          $.CONSUME(t.Comma);
        }), $.CONSUME(t.RCurly);
      }), $.RULE("elementValueList", function() {
        $.SUBRULE($.elementValue), $.MANY({
          GATE: function() {
            return tokenMatcher($.LA(2).tokenType, t.RCurly) === !1;
          },
          DEF: function() {
            $.CONSUME(t.Comma), $.SUBRULE2($.elementValue);
          }
        });
      }), $.RULE("identifyInterfaceBodyDeclarationType", function() {
        var nextTokenType = _this.LA(1).tokenType;
        if (tokenMatcher(nextTokenType, t.Semicolon))
          return InterfaceBodyTypes.semiColon;
        if ($.MANY({
          // To avoid ambiguity with @interface ("AnnotationTypeDeclaration" vs "Annotaion")
          GATE: function() {
            return (tokenMatcher($.LA(1).tokenType, t.At) && tokenMatcher($.LA(2).tokenType, t.Interface)) === !1;
          },
          DEF: function() {
            $.OR([{
              ALT: function() {
                return $.SUBRULE($.annotation);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Public);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Protected);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Private);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Abstract);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Static);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Sealed);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.NonSealed);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Strictfp);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Final);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Default);
              }
            }]);
          }
        }), nextTokenType = _this.LA(1).tokenType, tokenMatcher(nextTokenType, t.Class) || tokenMatcher(nextTokenType, t.Enum) || tokenMatcher(nextTokenType, t.Record))
          return InterfaceBodyTypes.classDeclaration;
        if (tokenMatcher(nextTokenType, t.Interface) || tokenMatcher(nextTokenType, t.At))
          return InterfaceBodyTypes.interfaceDeclaration;
        if (tokenMatcher(nextTokenType, t.Void) || tokenMatcher(nextTokenType, t.Less))
          return InterfaceBodyTypes.interfaceMethodDeclaration;
        _this.SUBRULE($.unannType);
        var nextToken = _this.LA(1), nextNextTokenType = _this.LA(2).tokenType;
        return tokenMatcher(nextToken, t.Identifier) && tokenMatcher(nextNextTokenType, t.LBrace) ? InterfaceBodyTypes.interfaceMethodDeclaration : tokenMatcher(nextToken, t.Identifier) ? InterfaceBodyTypes.constantDeclaration : InterfaceBodyTypes.unknown;
      }), $.RULE("identifyAnnotationBodyDeclarationType", function() {
        var nextTokenType = _this.LA(1).tokenType;
        if (tokenMatcher(nextTokenType, t.Semicolon))
          return AnnotationBodyTypes.semiColon;
        if ($.MANY({
          // To avoid ambiguity with @interface ("AnnotationTypeDeclaration" vs "Annotaion")
          GATE: function() {
            return (tokenMatcher($.LA(1).tokenType, t.At) && tokenMatcher($.LA(2).tokenType, t.Interface)) === !1;
          },
          DEF: function() {
            $.OR([{
              ALT: function() {
                return $.SUBRULE($.annotation);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Public);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Protected);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Private);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Abstract);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Static);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Final);
              }
            }, {
              ALT: function() {
                return $.CONSUME(t.Strictfp);
              }
            }]);
          }
        }), nextTokenType = _this.LA(1).tokenType, tokenMatcher(nextTokenType, t.Class) || tokenMatcher(nextTokenType, t.Enum))
          return AnnotationBodyTypes.classDeclaration;
        if (tokenMatcher(nextTokenType, t.Interface) || tokenMatcher(nextTokenType, t.At))
          return AnnotationBodyTypes.interfaceDeclaration;
        _this.SUBRULE($.unannType), nextTokenType = _this.LA(1).tokenType;
        var nextNextTokenType = _this.LA(2).tokenType;
        return tokenMatcher(nextTokenType, t.Identifier) && tokenMatcher(nextNextTokenType, t.LBrace) ? AnnotationBodyTypes.annotationTypeElementDeclaration : tokenMatcher(nextTokenType, t.Identifier) ? AnnotationBodyTypes.constantDeclaration : AnnotationBodyTypes.unknown;
      }), $.RULE("isSimpleElementValueAnnotation", function() {
        $.SUBRULE($.annotation);
        var nextTokenType = _this.LA(1).tokenType;
        switch (nextTokenType) {
          case t.Comma:
          case t.Semicolon:
          case t.RCurly:
          case t.RBrace:
            return !0;
          default:
            return !1;
        }
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/arrays.js
var require_arrays = __commonJS({
  "../../node_modules/java-parser/src/productions/arrays.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), tokenMatcher = _require.tokenMatcher;
    function defineRules($, t) {
      var _this = this;
      $.RULE("arrayInitializer", function() {
        $.CONSUME(t.LCurly), $.OPTION(function() {
          $.SUBRULE($.variableInitializerList);
        }), $.OPTION2(function() {
          $.CONSUME(t.Comma);
        }), $.CONSUME(t.RCurly);
      }), $.RULE("variableInitializerList", function() {
        $.SUBRULE($.variableInitializer), $.MANY({
          // The optional last "Comma" of an "arrayInitializer"
          GATE: function() {
            return tokenMatcher(_this.LA(2).tokenType, t.RCurly) === !1;
          },
          DEF: function() {
            $.CONSUME(t.Comma), $.SUBRULE2($.variableInitializer);
          }
        });
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/blocks-and-statements.js
var require_blocks_and_statements = __commonJS({
  "../../node_modules/java-parser/src/productions/blocks-and-statements.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), tokenMatcher = _require.tokenMatcher;
    function defineRules($, t) {
      var _this = this;
      $.RULE("block", function() {
        $.CONSUME(t.LCurly), $.OPTION(function() {
          $.SUBRULE($.blockStatements);
        }), $.CONSUME(t.RCurly);
      }), $.RULE("blockStatements", function() {
        $.SUBRULE($.blockStatement), $.MANY(function() {
          $.SUBRULE2($.blockStatement);
        });
      }), $.RULE("blockStatement", function() {
        var isLocalVariableDeclaration = _this.BACKTRACK_LOOKAHEAD($.isLocalVariableDeclaration), isClassDeclaration = _this.BACKTRACK_LOOKAHEAD($.isClassDeclaration);
        $.OR({
          DEF: [{
            GATE: function() {
              return isLocalVariableDeclaration;
            },
            ALT: function() {
              return $.SUBRULE($.localVariableDeclarationStatement);
            }
          }, {
            GATE: function() {
              return isClassDeclaration;
            },
            ALT: function() {
              return $.SUBRULE($.classDeclaration);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.interfaceDeclaration);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.statement);
            }
          }],
          IGNORE_AMBIGUITIES: !0
        });
      }), $.RULE("localVariableDeclarationStatement", function() {
        $.SUBRULE($.localVariableDeclaration), $.CONSUME(t.Semicolon);
      }), $.RULE("localVariableDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.localVariableType), $.SUBRULE($.variableDeclaratorList);
      }), $.RULE("localVariableType", function() {
        $.OR({
          DEF: [{
            ALT: function() {
              return $.SUBRULE($.unannType);
            }
          }, {
            ALT: function() {
              return $.CONSUME(t.Var);
            }
          }],
          IGNORE_AMBIGUITIES: !0
        });
      }), $.RULE("statement", function() {
        $.OR({
          DEF: [
            {
              ALT: function() {
                return $.SUBRULE($.statementWithoutTrailingSubstatement);
              }
            },
            {
              ALT: function() {
                return $.SUBRULE($.labeledStatement);
              }
            },
            // Spec deviation: combined "IfThenStatement" and "IfThenElseStatement"
            {
              ALT: function() {
                return $.SUBRULE($.ifStatement);
              }
            },
            {
              ALT: function() {
                return $.SUBRULE($.whileStatement);
              }
            },
            {
              ALT: function() {
                return $.SUBRULE($.forStatement);
              }
            }
          ],
          MAX_LOOKAHEAD: 2
        });
      }), $.RULE("statementWithoutTrailingSubstatement", function() {
        $.OR({
          DEF: [{
            ALT: function() {
              return $.SUBRULE($.block);
            }
          }, {
            GATE: function() {
              return _this.BACKTRACK_LOOKAHEAD($.yieldStatement);
            },
            ALT: function() {
              return $.SUBRULE($.yieldStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.emptyStatement);
            }
          }, {
            GATE: function() {
              return !tokenMatcher(_this.LA(1).tokenType, t.Switch);
            },
            ALT: function() {
              return $.SUBRULE($.expressionStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.assertStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.switchStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.doStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.breakStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.continueStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.returnStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.synchronizedStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.throwStatement);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.tryStatement);
            }
          }],
          IGNORE_AMBIGUITIES: !0
        });
      }), $.RULE("emptyStatement", function() {
        $.CONSUME(t.Semicolon);
      }), $.RULE("labeledStatement", function() {
        $.CONSUME(t.Identifier), $.CONSUME(t.Colon), $.SUBRULE($.statement);
      }), $.RULE("expressionStatement", function() {
        $.SUBRULE($.statementExpression), $.CONSUME(t.Semicolon);
      }), $.RULE("statementExpression", function() {
        $.SUBRULE($.expression);
      }), $.RULE("ifStatement", function() {
        $.CONSUME(t.If), $.CONSUME(t.LBrace), $.SUBRULE($.expression), $.CONSUME(t.RBrace), $.SUBRULE($.statement), $.OPTION(function() {
          $.CONSUME(t.Else), $.SUBRULE2($.statement);
        });
      }), $.RULE("assertStatement", function() {
        $.CONSUME(t.Assert), $.SUBRULE($.expression), $.OPTION(function() {
          $.CONSUME(t.Colon), $.SUBRULE2($.expression);
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("switchStatement", function() {
        $.CONSUME(t.Switch), $.CONSUME(t.LBrace), $.SUBRULE($.expression), $.CONSUME(t.RBrace), $.SUBRULE($.switchBlock);
      }), $.RULE("switchBlock", function() {
        $.CONSUME(t.LCurly), $.OR([{
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isClassicSwitchLabel);
          },
          ALT: function() {
            return $.MANY(function() {
              return $.SUBRULE($.switchBlockStatementGroup);
            });
          }
        }, {
          ALT: function() {
            return $.MANY2(function() {
              return $.SUBRULE($.switchRule);
            });
          }
        }]), $.CONSUME(t.RCurly);
      }), $.RULE("switchBlockStatementGroup", function() {
        $.SUBRULE($.switchLabel), $.CONSUME(t.Colon), $.OPTION(function() {
          $.SUBRULE($.blockStatements);
        });
      }), $.RULE("switchLabel", function() {
        $.SUBRULE($.caseOrDefaultLabel), $.MANY({
          GATE: function() {
            return tokenMatcher($.LA(1).tokenType, t.Colon) && (tokenMatcher($.LA(2).tokenType, t.Case) || tokenMatcher($.LA(2).tokenType, t.Default));
          },
          DEF: function() {
            $.CONSUME(t.Colon), $.SUBRULE2($.caseOrDefaultLabel);
          }
        });
      }), $.RULE("caseOrDefaultLabel", function() {
        $.OR([{
          ALT: function() {
            $.CONSUME(t.Case), $.SUBRULE($.caseLabelElement), $.MANY(function() {
              $.CONSUME(t.Comma), $.SUBRULE2($.caseLabelElement);
            });
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Default);
          }
        }]);
      }), $.RULE("caseLabelElement", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.Null);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Default);
          }
        }, {
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.pattern);
          },
          ALT: function() {
            return $.SUBRULE($.pattern);
          }
        }, {
          GATE: function() {
            return tokenMatcher($.LA(1).tokenType, t.Null) === !1;
          },
          ALT: function() {
            return $.SUBRULE($.caseConstant);
          }
        }]);
      }), $.RULE("switchRule", function() {
        $.SUBRULE($.switchLabel), $.CONSUME(t.Arrow), $.OR([{
          ALT: function() {
            return $.SUBRULE($.throwStatement);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.block);
          }
        }, {
          ALT: function() {
            $.SUBRULE($.expression), $.CONSUME(t.Semicolon);
          }
        }]);
      }), $.RULE("caseConstant", function() {
        $.SUBRULE($.ternaryExpression);
      }), $.RULE("whileStatement", function() {
        $.CONSUME(t.While), $.CONSUME(t.LBrace), $.SUBRULE($.expression), $.CONSUME(t.RBrace), $.SUBRULE($.statement);
      }), $.RULE("doStatement", function() {
        $.CONSUME(t.Do), $.SUBRULE($.statement), $.CONSUME(t.While), $.CONSUME(t.LBrace), $.SUBRULE($.expression), $.CONSUME(t.RBrace), $.CONSUME(t.Semicolon);
      }), $.RULE("forStatement", function() {
        $.OR([{
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isBasicForStatement);
          },
          ALT: function() {
            return $.SUBRULE($.basicForStatement);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.enhancedForStatement);
          }
        }]);
      }), $.RULE("basicForStatement", function() {
        $.CONSUME(t.For), $.CONSUME(t.LBrace), $.OPTION(function() {
          $.SUBRULE($.forInit);
        }), $.CONSUME(t.Semicolon), $.OPTION2(function() {
          $.SUBRULE($.expression);
        }), $.CONSUME2(t.Semicolon), $.OPTION3(function() {
          $.SUBRULE($.forUpdate);
        }), $.CONSUME(t.RBrace), $.SUBRULE($.statement);
      }), $.RULE("forInit", function() {
        $.OR([{
          GATE: function() {
            return $.BACKTRACK_LOOKAHEAD($.isLocalVariableDeclaration);
          },
          ALT: function() {
            return $.SUBRULE($.localVariableDeclaration);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.statementExpressionList);
          }
        }]);
      }), $.RULE("forUpdate", function() {
        $.SUBRULE($.statementExpressionList);
      }), $.RULE("statementExpressionList", function() {
        $.SUBRULE($.statementExpression), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.statementExpression);
        });
      }), $.RULE("enhancedForStatement", function() {
        $.CONSUME(t.For), $.CONSUME(t.LBrace), $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.localVariableType), $.SUBRULE($.variableDeclaratorId), $.CONSUME(t.Colon), $.SUBRULE($.expression), $.CONSUME(t.RBrace), $.SUBRULE($.statement);
      }), $.RULE("breakStatement", function() {
        $.CONSUME(t.Break), $.OPTION(function() {
          $.CONSUME(t.Identifier);
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("continueStatement", function() {
        $.CONSUME(t.Continue), $.OPTION(function() {
          $.CONSUME(t.Identifier);
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("returnStatement", function() {
        $.CONSUME(t.Return), $.OPTION(function() {
          $.SUBRULE($.expression);
        }), $.CONSUME(t.Semicolon);
      }), $.RULE("throwStatement", function() {
        $.CONSUME(t.Throw), $.SUBRULE($.expression), $.CONSUME(t.Semicolon);
      }), $.RULE("synchronizedStatement", function() {
        $.CONSUME(t.Synchronized), $.CONSUME(t.LBrace), $.SUBRULE($.expression), $.CONSUME(t.RBrace), $.SUBRULE($.block);
      }), $.RULE("tryStatement", function() {
        $.OR({
          DEF: [{
            ALT: function() {
              $.CONSUME(t.Try), $.SUBRULE($.block), $.OR2([{
                ALT: function() {
                  $.SUBRULE($.catches), $.OPTION(function() {
                    $.SUBRULE($.finally);
                  });
                }
              }, {
                ALT: function() {
                  return $.SUBRULE2($.finally);
                }
              }]);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.tryWithResourcesStatement);
            }
          }],
          MAX_LOOKAHEAD: 2
        });
      }), $.RULE("catches", function() {
        $.SUBRULE($.catchClause), $.MANY(function() {
          $.SUBRULE2($.catchClause);
        });
      }), $.RULE("catchClause", function() {
        $.CONSUME(t.Catch), $.CONSUME(t.LBrace), $.SUBRULE($.catchFormalParameter), $.CONSUME(t.RBrace), $.SUBRULE($.block);
      }), $.RULE("catchFormalParameter", function() {
        $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.catchType), $.SUBRULE($.variableDeclaratorId);
      }), $.RULE("catchType", function() {
        $.SUBRULE($.unannClassType), $.MANY(function() {
          $.CONSUME(t.Or), $.SUBRULE2($.classType);
        });
      }), $.RULE("finally", function() {
        $.CONSUME(t.Finally), $.SUBRULE($.block);
      }), $.RULE("tryWithResourcesStatement", function() {
        $.CONSUME(t.Try), $.SUBRULE($.resourceSpecification), $.SUBRULE($.block), $.OPTION(function() {
          $.SUBRULE($.catches);
        }), $.OPTION2(function() {
          $.SUBRULE($.finally);
        });
      }), $.RULE("resourceSpecification", function() {
        $.CONSUME(t.LBrace), $.SUBRULE($.resourceList), $.OPTION(function() {
          $.CONSUME(t.Semicolon);
        }), $.CONSUME(t.RBrace);
      }), $.RULE("resourceList", function() {
        $.SUBRULE($.resource), $.MANY({
          GATE: function() {
            return tokenMatcher($.LA(2).tokenType, t.RBrace) === !1;
          },
          DEF: function() {
            $.CONSUME(t.Semicolon), $.SUBRULE2($.resource);
          }
        });
      }), $.RULE("resource", function() {
        $.OR([{
          GATE: $.BACKTRACK($.resourceInit),
          // Spec Deviation: extracted this alternative to "resourceInit"
          //                 to enable backtracking.
          ALT: function() {
            return $.SUBRULE($.resourceInit);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.variableAccess);
          }
        }]);
      }), $.RULE("resourceInit", function() {
        $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.localVariableType), $.CONSUME(t.Identifier), $.CONSUME(t.Equals), $.SUBRULE($.expression);
      }), $.RULE("yieldStatement", function() {
        $.CONSUME(t.Yield), $.SUBRULE($.expression), $.CONSUME(t.Semicolon);
      }), $.RULE("variableAccess", function() {
        $.SUBRULE($.primary);
      }), $.RULE("isBasicForStatement", function() {
        return $.CONSUME(t.For), $.CONSUME(t.LBrace), $.OPTION(function() {
          $.SUBRULE($.forInit);
        }), $.CONSUME(t.Semicolon), !0;
      }), $.RULE("isLocalVariableDeclaration", function() {
        $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.localVariableType), $.SUBRULE($.variableDeclaratorId);
        var nextTokenType = _this.LA(1).tokenType;
        switch (nextTokenType) {
          case t.Semicolon:
          case t.Comma:
          case t.Equals:
            return !0;
          default:
            return !1;
        }
      }), $.RULE("isClassicSwitchLabel", function() {
        $.SUBRULE($.switchLabel), $.CONSUME(t.Colon);
      });
    }
    module2.exports = {
      defineRules: defineRules
    };
  }
});

// ../../node_modules/java-parser/src/productions/expressions.js
var require_expressions = __commonJS({
  "../../node_modules/java-parser/src/productions/expressions.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var _require = require_api(), tokenMatcher = _require.tokenMatcher;
    function defineRules($, t) {
      var _this = this;
      $.RULE("expression", function() {
        $.OR([{
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isLambdaExpression);
          },
          ALT: function() {
            return $.SUBRULE($.lambdaExpression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.ternaryExpression);
          }
        }]);
      }), $.RULE("lambdaExpression", function() {
        $.SUBRULE($.lambdaParameters), $.CONSUME(t.Arrow), $.SUBRULE($.lambdaBody);
      }), $.RULE("lambdaParameters", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.lambdaParametersWithBraces);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Identifier);
          }
        }]);
      }), $.RULE("lambdaParametersWithBraces", function() {
        $.CONSUME(t.LBrace), $.OPTION(function() {
          $.SUBRULE($.lambdaParameterList);
        }), $.CONSUME(t.RBrace);
      }), $.RULE("lambdaParameterList", function() {
        $.OR([{
          GATE: function() {
            var nextTokType = _this.LA(1).tokenType, nextNextTokType = _this.LA(2).tokenType;
            return tokenMatcher(nextTokType, t.Identifier) && (tokenMatcher(nextNextTokType, t.RBrace) || tokenMatcher(nextNextTokType, t.Comma));
          },
          ALT: function() {
            return $.SUBRULE($.inferredLambdaParameterList);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.explicitLambdaParameterList);
          }
        }]);
      }), $.RULE("inferredLambdaParameterList", function() {
        $.CONSUME(t.Identifier), $.MANY(function() {
          $.CONSUME(t.Comma), $.CONSUME2(t.Identifier);
        });
      }), $.RULE("explicitLambdaParameterList", function() {
        $.SUBRULE($.lambdaParameter), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.lambdaParameter);
        });
      }), $.RULE("lambdaParameter", function() {
        $.OR([{
          GATE: $.BACKTRACK($.regularLambdaParameter),
          ALT: function() {
            return $.SUBRULE($.regularLambdaParameter);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.variableArityParameter);
          }
        }]);
      }), $.RULE("regularLambdaParameter", function() {
        $.MANY(function() {
          $.SUBRULE($.variableModifier);
        }), $.SUBRULE($.lambdaParameterType), $.SUBRULE($.variableDeclaratorId);
      }), $.RULE("lambdaParameterType", function() {
        $.OR({
          DEF: [{
            ALT: function() {
              return $.SUBRULE($.unannType);
            }
          }, {
            ALT: function() {
              return $.CONSUME(t.Var);
            }
          }],
          IGNORE_AMBIGUITIES: !0
        });
      }), $.RULE("lambdaBody", function() {
        $.OR([{
          ALT: function() {
            return $.SUBRULE($.expression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.block);
          }
        }]);
      }), $.RULE("ternaryExpression", function() {
        $.SUBRULE($.binaryExpression), $.OPTION(function() {
          $.CONSUME(t.QuestionMark), $.SUBRULE($.expression), $.CONSUME(t.Colon), $.SUBRULE2($.expression);
        });
      }), $.RULE("binaryExpression", function() {
        $.SUBRULE($.unaryExpression), $.MANY(function() {
          $.OR({
            DEF: [
              {
                ALT: function() {
                  $.CONSUME(t.Instanceof), $.OR1([{
                    GATE: function() {
                      return _this.BACKTRACK_LOOKAHEAD($.pattern);
                    },
                    ALT: function() {
                      return $.SUBRULE($.pattern);
                    }
                  }, {
                    ALT: function() {
                      return $.SUBRULE($.referenceType);
                    }
                  }]);
                }
              },
              {
                ALT: function() {
                  $.CONSUME(t.AssignmentOperator), $.SUBRULE2($.expression);
                }
              },
              // This is an example of why Java does not have a well designed grammar
              // See: https://manas.tech/blog/2008/10/12/why-java-generics-dont-have-problems-with-right-shift-operator.html
              // TODO: ensure the LT/GT sequences have no whitespace between each other.
              {
                // TODO: this is a bug in Chevrotain lookahead calculation. the "BinaryOperator" token can match "Less" or "Greater"
                //   as well, but because it is a **token Category** Chevrotain does not understand it need to looks two tokens ahead.
                GATE: function() {
                  return tokenMatcher($.LA(2).tokenType, t.Less) || tokenMatcher($.LA(2).tokenType, t.Greater);
                },
                ALT: function() {
                  $.OR2([{
                    GATE: function() {
                      return $.LA(1).startOffset + 1 === $.LA(2).startOffset;
                    },
                    ALT: function() {
                      $.CONSUME(t.Less), $.CONSUME2(t.Less);
                    }
                  }, {
                    GATE: function() {
                      return $.LA(1).startOffset + 1 === $.LA(2).startOffset;
                    },
                    ALT: function() {
                      $.CONSUME(t.Greater), $.CONSUME2(t.Greater), $.OPTION({
                        GATE: function() {
                          return $.LA(0).startOffset + 1 === $.LA(1).startOffset;
                        },
                        DEF: function() {
                          return $.CONSUME3(t.Greater);
                        }
                      });
                    }
                  }]), $.SUBRULE2($.unaryExpression);
                }
              },
              {
                ALT: function() {
                  $.CONSUME(t.BinaryOperator), $.SUBRULE3($.unaryExpression);
                }
              }
            ],
            IGNORE_AMBIGUITIES: !0
            // the ambiguity between 1 and 4 options is resolved by the order (instanceOf is first)
          });
        });
      }), $.RULE("unaryExpression", function() {
        $.MANY(function() {
          $.CONSUME(t.UnaryPrefixOperator);
        }), $.SUBRULE($.primary), $.MANY2(function() {
          $.CONSUME(t.UnarySuffixOperator);
        });
      }), $.RULE("unaryExpressionNotPlusMinus", function() {
        $.MANY(function() {
          $.CONSUME(t.UnaryPrefixOperatorNotPlusMinus);
        }), $.SUBRULE($.primary), $.MANY2(function() {
          $.CONSUME(t.UnarySuffixOperator);
        });
      }), $.RULE("primary", function() {
        $.SUBRULE($.primaryPrefix), $.MANY(function() {
          $.SUBRULE($.primarySuffix);
        });
      }), $.RULE("primaryPrefix", function() {
        var isCastExpression = !1;
        tokenMatcher($.LA(1).tokenType, t.LBrace) && (isCastExpression = _this.BACKTRACK_LOOKAHEAD($.isCastExpression)), $.OR([{
          ALT: function() {
            return $.SUBRULE($.literal);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.This);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Void);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.unannPrimitiveTypeWithOptionalDimsSuffix);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.fqnOrRefType);
          }
        }, {
          GATE: function() {
            return isCastExpression;
          },
          ALT: function() {
            return $.SUBRULE($.castExpression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.parenthesisExpression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.newExpression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.switchStatement);
          }
        }]);
      }), $.RULE("primarySuffix", function() {
        $.OR({
          DEF: [{
            ALT: function() {
              $.CONSUME(t.Dot), $.OR2([{
                ALT: function() {
                  return $.CONSUME(t.This);
                }
              }, {
                ALT: function() {
                  return $.SUBRULE($.unqualifiedClassInstanceCreationExpression);
                }
              }, {
                ALT: function() {
                  $.OPTION(function() {
                    $.SUBRULE($.typeArguments);
                  }), $.CONSUME(t.Identifier);
                }
              }]);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.methodInvocationSuffix);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.classLiteralSuffix);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.arrayAccessSuffix);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.methodReferenceSuffix);
            }
          }],
          MAX_LOOKAHEAD: 2
        });
      }), $.RULE("fqnOrRefType", function() {
        $.SUBRULE($.fqnOrRefTypePartFirst), $.MANY2({
          // ".class" is a classLiteralSuffix
          GATE: function() {
            return (
              // avoids ambiguity with ".this" and ".new" which are parsed as a primary suffix.
              tokenMatcher(_this.LA(2).tokenType, t.Class) === !1 && tokenMatcher(_this.LA(2).tokenType, t.This) === !1 && tokenMatcher(_this.LA(2).tokenType, t.New) === !1
            );
          },
          DEF: function() {
            $.CONSUME(t.Dot), $.SUBRULE2($.fqnOrRefTypePartRest);
          }
        }), $.OPTION({
          // it is not enough to check only the opening "[", we must avoid conflict with
          // arrayAccessSuffix
          GATE: function() {
            return tokenMatcher($.LA(1).tokenType, t.At) || tokenMatcher($.LA(2).tokenType, t.RSquare);
          },
          DEF: function() {
            $.SUBRULE($.dims);
          }
        });
      }), $.RULE("fqnOrRefTypePartRest", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.OPTION(function() {
          return $.SUBRULE2($.typeArguments);
        }), $.SUBRULE($.fqnOrRefTypePartCommon);
      }), $.RULE("fqnOrRefTypePartCommon", function() {
        $.OR([{
          ALT: function() {
            return $.CONSUME(t.Identifier);
          }
        }, {
          ALT: function() {
            return $.CONSUME(t.Super);
          }
        }]);
        var isRefTypeInMethodRef = !1;
        tokenMatcher($.LA(1).tokenType, t.Less) && (isRefTypeInMethodRef = _this.BACKTRACK_LOOKAHEAD($.isRefTypeInMethodRef)), $.OPTION2({
          // unrestricted typeArguments here would create an ambiguity with "LessThan" operator
          // e.g: "var x = a < b;"
          // The "<" would be parsed as the beginning of a "typeArguments"
          // and we will get an error: "expecting '>' but found: ';'"
          GATE: function() {
            return isRefTypeInMethodRef;
          },
          DEF: function() {
            $.SUBRULE3($.typeArguments);
          }
        });
      }), $.RULE("fqnOrRefTypePartFirst", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.SUBRULE($.fqnOrRefTypePartCommon);
      }), $.RULE("parenthesisExpression", function() {
        $.CONSUME(t.LBrace), $.SUBRULE($.expression), $.CONSUME(t.RBrace);
      }), $.RULE("castExpression", function() {
        $.OR([{
          // TODO: performance: can avoid backtracking again here, parent rule could have this information
          //       when it checks isCastExpression (refactor needed)
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isPrimitiveCastExpression);
          },
          ALT: function() {
            return $.SUBRULE($.primitiveCastExpression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.referenceTypeCastExpression);
          }
        }]);
      }), $.RULE("primitiveCastExpression", function() {
        $.CONSUME(t.LBrace), $.SUBRULE($.primitiveType), $.CONSUME(t.RBrace), $.SUBRULE($.unaryExpression);
      }), $.RULE("referenceTypeCastExpression", function() {
        $.CONSUME(t.LBrace), $.SUBRULE($.referenceType), $.MANY(function() {
          $.SUBRULE($.additionalBound);
        }), $.CONSUME(t.RBrace), $.OR([{
          GATE: function() {
            return _this.BACKTRACK_LOOKAHEAD($.isLambdaExpression);
          },
          ALT: function() {
            return $.SUBRULE($.lambdaExpression);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.unaryExpressionNotPlusMinus);
          }
        }]);
      });
      var newExpressionTypes = {
        arrayCreationExpression: 1,
        unqualifiedClassInstanceCreationExpression: 2
      };
      $.RULE("newExpression", function() {
        var type = _this.BACKTRACK_LOOKAHEAD($.identifyNewExpressionType);
        $.OR([{
          GATE: function() {
            return type === newExpressionTypes.arrayCreationExpression;
          },
          ALT: function() {
            return $.SUBRULE($.arrayCreationExpression);
          }
        }, {
          GATE: function() {
            return type === newExpressionTypes.unqualifiedClassInstanceCreationExpression;
          },
          ALT: function() {
            return $.SUBRULE($.unqualifiedClassInstanceCreationExpression);
          }
        }]);
      }), $.RULE("unqualifiedClassInstanceCreationExpression", function() {
        $.CONSUME(t.New), $.OPTION(function() {
          $.SUBRULE($.typeArguments);
        }), $.SUBRULE($.classOrInterfaceTypeToInstantiate), $.CONSUME(t.LBrace), $.OPTION2(function() {
          $.SUBRULE($.argumentList);
        }), $.CONSUME(t.RBrace), $.OPTION3(function() {
          $.SUBRULE($.classBody);
        });
      }), $.RULE("classOrInterfaceTypeToInstantiate", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.Identifier), $.MANY2(function() {
          $.CONSUME(t.Dot), $.MANY3(function() {
            $.SUBRULE2($.annotation);
          }), $.CONSUME2(t.Identifier);
        }), $.OPTION(function() {
          $.SUBRULE($.typeArgumentsOrDiamond);
        });
      }), $.RULE("typeArgumentsOrDiamond", function() {
        $.OR({
          DEF: [{
            ALT: function() {
              return $.SUBRULE($.diamond);
            }
          }, {
            ALT: function() {
              return $.SUBRULE($.typeArguments);
            }
          }],
          MAX_LOOKAHEAD: 2
        });
      }), $.RULE("diamond", function() {
        $.CONSUME(t.Less), $.CONSUME(t.Greater);
      }), $.RULE("methodInvocationSuffix", function() {
        $.CONSUME(t.LBrace), $.OPTION2(function() {
          $.SUBRULE($.argumentList);
        }), $.CONSUME(t.RBrace);
      }), $.RULE("argumentList", function() {
        $.SUBRULE($.expression), $.MANY(function() {
          $.CONSUME(t.Comma), $.SUBRULE2($.expression);
        });
      }), $.RULE("arrayCreationExpression", function() {
        $.CONSUME(t.New), $.OR([{
          GATE: $.BACKTRACK($.primitiveType),
          ALT: function() {
            return $.SUBRULE($.primitiveType);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.classOrInterfaceType);
          }
        }]), $.OR2([{
          GATE: $.BACKTRACK($.arrayCreationDefaultInitSuffix),
          ALT: function() {
            return $.SUBRULE($.arrayCreationDefaultInitSuffix);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.arrayCreationExplicitInitSuffix);
          }
        }]);
      }), $.RULE("arrayCreationDefaultInitSuffix", function() {
        $.SUBRULE($.dimExprs), $.OPTION(function() {
          $.SUBRULE($.dims);
        });
      }), $.RULE("arrayCreationExplicitInitSuffix", function() {
        $.SUBRULE($.dims), $.SUBRULE($.arrayInitializer);
      }), $.RULE("dimExprs", function() {
        $.SUBRULE($.dimExpr), $.MANY({
          // The GATE is to distinguish DimExpr from Dims :
          // the only difference between these two is the presence of an expression in the DimExpr
          // Example: If the GATE is not present double[3][] won't be parsed as the parser will try to parse "[]"
          // as a dimExpr instead of a dims
          GATE: function() {
            return tokenMatcher($.LA(2).tokenType, t.RSquare) === !1;
          },
          DEF: function() {
            return $.SUBRULE2($.dimExpr);
          }
        });
      }), $.RULE("dimExpr", function() {
        $.MANY(function() {
          $.SUBRULE($.annotation);
        }), $.CONSUME(t.LSquare), $.SUBRULE($.expression), $.CONSUME(t.RSquare);
      }), $.RULE("classLiteralSuffix", function() {
        $.MANY(function() {
          $.CONSUME(t.LSquare), $.CONSUME(t.RSquare);
        }), $.CONSUME(t.Dot), $.CONSUME(t.Class);
      }), $.RULE("arrayAccessSuffix", function() {
        $.CONSUME(t.LSquare), $.SUBRULE($.expression), $.CONSUME(t.RSquare);
      }), $.RULE("methodReferenceSuffix", function() {
        $.CONSUME(t.ColonColon), $.OPTION(function() {
          $.SUBRULE($.typeArguments);
        }), $.OR([
          {
            ALT: function() {
              return $.CONSUME(t.Identifier);
            }
          },
          // TODO: a constructor method reference ("new") can only be used
          //   in specific contexts, but perhaps this verification is best left
          //   for a semantic analysis phase
          {
            ALT: function() {
              return $.CONSUME(t.New);
            }
          }
        ]);
      }), $.RULE("pattern", function() {
        $.SUBRULE($.primaryPattern), $.OPTION(function() {
          $.CONSUME(t.AndAnd), $.SUBRULE($.binaryExpression);
        });
      }), $.RULE("primaryPattern", function() {
        $.OR([{
          ALT: function() {
            $.CONSUME(t.LBrace), $.SUBRULE($.pattern), $.CONSUME(t.RBrace);
          }
        }, {
          ALT: function() {
            return $.SUBRULE($.typePattern);
          }
        }]);
      }), $.RULE("typePattern", function() {
        $.SUBRULE($.localVariableDeclaration);
      }), $.RULE("identifyNewExpressionType", function() {
        $.CONSUME(t.New);
        var firstTokenAfterNew = _this.LA(1).tokenType;
        if (tokenMatcher(firstTokenAfterNew, t.Less))
          return newExpressionTypes.unqualifiedClassInstanceCreationExpression;
        try {
          $.SUBRULE($.classOrInterfaceTypeToInstantiate);
        } catch (e) {
          return newExpressionTypes.arrayCreationExpression;
        }
        var firstTokenAfterClassType = _this.LA(1).tokenType;
        return tokenMatcher(firstTokenAfterClassType, t.LBrace) ? newExpressionTypes.unqualifiedClassInstanceCreationExpression : newExpressionTypes.arrayCreationExpression;
      }), $.RULE("isLambdaExpression", function() {
        var firstTokenType = _this.LA(1).tokenType, secondTokenType = _this.LA(2).tokenType;
        if (tokenMatcher(firstTokenType, t.Identifier) && tokenMatcher(secondTokenType, t.Arrow))
          return !0;
        if (tokenMatcher(firstTokenType, t.LBrace)) {
          $.SUBRULE($.lambdaParametersWithBraces);
          var followedByArrow = tokenMatcher(_this.LA(1).tokenType, t.Arrow);
          return followedByArrow;
        }
        return !1;
      }), $.RULE("isCastExpression", function() {
        return _this.BACKTRACK_LOOKAHEAD($.isPrimitiveCastExpression) ? !0 : _this.BACKTRACK_LOOKAHEAD($.isReferenceTypeCastExpression);
      }), $.RULE("isPrimitiveCastExpression", function() {
        return $.CONSUME(t.LBrace), $.SUBRULE($.primitiveType), $.CONSUME(t.RBrace), !0;
      }), $.RULE("isReferenceTypeCastExpression", function() {
        $.CONSUME(t.LBrace), $.SUBRULE($.referenceType), $.MANY(function() {
          $.SUBRULE($.additionalBound);
        }), $.CONSUME(t.RBrace);
        var firstTokTypeAfterRBrace = _this.LA(1).tokenType;
        return _this.firstForUnaryExpressionNotPlusMinus.find(function(tokType) {
          return tokenMatcher(firstTokTypeAfterRBrace, tokType);
        }) !== void 0;
      }), $.RULE("isRefTypeInMethodRef", function() {
        var result = void 0;
        $.SUBRULE($.typeArguments);
        var hasDims = $.OPTION(function() {
          $.SUBRULE($.dims);
        }), firstTokTypeAfterTypeArgs = _this.LA(1).tokenType;
        if (tokenMatcher(firstTokTypeAfterTypeArgs, t.ColonColon) ? result = !0 : hasDims && (result = !1), $.OPTION2(function() {
          $.CONSUME(t.Dot), $.SUBRULE($.classOrInterfaceType);
        }), result !== void 0)
          return result;
        var firstTokTypeAfterRefType = _this.LA(1).tokenType;
        return tokenMatcher(firstTokTypeAfterRefType, t.ColonColon);
      });
    }
    function computeFirstForUnaryExpressionNotPlusMinus() {
      var firstUnaryExpressionNotPlusMinus = this.computeContentAssist("unaryExpressionNotPlusMinus", []), nextTokTypes = firstUnaryExpressionNotPlusMinus.map(function(x) {
        return x.nextTokenType;
      });
      return nextTokTypes.filter(function(v, i, a) {
        return a.indexOf(v) === i;
      });
    }
    module2.exports = {
      defineRules: defineRules,
      computeFirstForUnaryExpressionNotPlusMinus: computeFirstForUnaryExpressionNotPlusMinus
    };
  }
});

// ../../node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/lodash/_listCacheClear.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function listCacheClear() {
      this.__data__ = [], this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// ../../node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/lodash/eq.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// ../../node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/lodash/_assocIndexOf.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var eq = require_eq();
    function assocIndexOf(array, key) {
      for (var length = array.length; length--; )
        if (eq(array[length][0], key))
          return length;
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// ../../node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../node_modules/lodash/_listCacheDelete.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf(), arrayProto = Array.prototype, splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0)
        return !1;
      var lastIndex = data.length - 1;
      return index == lastIndex ? data.pop() : splice.call(data, index, 1), --this.size, !0;
    }
    module2.exports = listCacheDelete;
  }
});

// ../../node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../node_modules/lodash/_listCacheGet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// ../../node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/lodash/_listCacheHas.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// ../../node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../node_modules/lodash/_listCacheSet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? (++this.size, data.push([key, value])) : data[index][1] = value, this;
    }
    module2.exports = listCacheSet;
  }
});

// ../../node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/lodash/_ListCache.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var listCacheClear = require_listCacheClear(), listCacheDelete = require_listCacheDelete(), listCacheGet = require_listCacheGet(), listCacheHas = require_listCacheHas(), listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype.delete = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// ../../node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../../node_modules/lodash/_stackClear.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache(), this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// ../../node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../../node_modules/lodash/_stackDelete.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function stackDelete(key) {
      var data = this.__data__, result = data.delete(key);
      return this.size = data.size, result;
    }
    module2.exports = stackDelete;
  }
});

// ../../node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../../node_modules/lodash/_stackGet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// ../../node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../node_modules/lodash/_stackHas.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject2;
  }
});

// ../../node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/lodash/isFunction.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isObject2 = require_isObject(), asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
    function isFunction2(value) {
      if (!isObject2(value))
        return !1;
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction2;
  }
});

// ../../node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../node_modules/lodash/_coreJsData.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// ../../node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/lodash/_isMasked.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var coreJsData = require_coreJsData(), maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// ../../node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../node_modules/lodash/_toSource.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var funcProto = Function.prototype, funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// ../../node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../node_modules/lodash/_baseIsNative.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isFunction2 = require_isFunction(), isMasked = require_isMasked(), isObject2 = require_isObject(), toSource = require_toSource(), reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto = Object.prototype, funcToString = funcProto.toString, hasOwnProperty = objectProto.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value))
        return !1;
      var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// ../../node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../node_modules/lodash/_getValue.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// ../../node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/lodash/_getNative.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseIsNative = require_baseIsNative(), getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// ../../node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/lodash/_Map.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }
});

// ../../node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/lodash/_nativeCreate.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// ../../node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/lodash/_hashClear.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {}, this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// ../../node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../node_modules/lodash/_hashDelete.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      return this.size -= result ? 1 : 0, result;
    }
    module2.exports = hashDelete;
  }
});

// ../../node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../node_modules/lodash/_hashGet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate(), HASH_UNDEFINED = "__lodash_hash_undefined__", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// ../../node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../node_modules/lodash/_hashHas.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// ../../node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../node_modules/lodash/_hashSet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var nativeCreate = require_nativeCreate(), HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value, this;
    }
    module2.exports = hashSet;
  }
});

// ../../node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../node_modules/lodash/_Hash.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var hashClear = require_hashClear(), hashDelete = require_hashDelete(), hashGet = require_hashGet(), hashHas = require_hashHas(), hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype.delete = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// ../../node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../node_modules/lodash/_mapCacheClear.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var Hash = require_Hash(), ListCache = require_ListCache(), Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0, this.__data__ = {
        hash: new Hash(),
        map: new (Map2 || ListCache)(),
        string: new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// ../../node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../node_modules/lodash/_isKeyable.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// ../../node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../node_modules/lodash/_getMapData.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isKeyable = require_isKeyable();
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// ../../node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../node_modules/lodash/_mapCacheDelete.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key).delete(key);
      return this.size -= result ? 1 : 0, result;
    }
    module2.exports = mapCacheDelete;
  }
});

// ../../node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../node_modules/lodash/_mapCacheGet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// ../../node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../node_modules/lodash/_mapCacheHas.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// ../../node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../node_modules/lodash/_mapCacheSet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      return data.set(key, value), this.size += data.size == size ? 0 : 1, this;
    }
    module2.exports = mapCacheSet;
  }
});

// ../../node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../node_modules/lodash/_MapCache.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var mapCacheClear = require_mapCacheClear(), mapCacheDelete = require_mapCacheDelete(), mapCacheGet = require_mapCacheGet(), mapCacheHas = require_mapCacheHas(), mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      for (this.clear(); ++index < length; ) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype.delete = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// ../../node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../../node_modules/lodash/_stackSet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var ListCache = require_ListCache(), Map2 = require_Map(), MapCache = require_MapCache(), LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1)
          return pairs.push([key, value]), this.size = ++data.size, this;
        data = this.__data__ = new MapCache(pairs);
      }
      return data.set(key, value), this.size = data.size, this;
    }
    module2.exports = stackSet;
  }
});

// ../../node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../../node_modules/lodash/_Stack.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var ListCache = require_ListCache(), stackClear = require_stackClear(), stackDelete = require_stackDelete(), stackGet = require_stackGet(), stackHas = require_stackHas(), stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype.delete = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// ../../node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../../node_modules/lodash/_setCacheAdd.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      return this.__data__.set(value, HASH_UNDEFINED), this;
    }
    module2.exports = setCacheAdd;
  }
});

// ../../node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "../../node_modules/lodash/_setCacheHas.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module2.exports = setCacheHas;
  }
});

// ../../node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../../node_modules/lodash/_SetCache.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var MapCache = require_MapCache(), setCacheAdd = require_setCacheAdd(), setCacheHas = require_setCacheHas();
    function SetCache(values2) {
      var index = -1, length = values2 == null ? 0 : values2.length;
      for (this.__data__ = new MapCache(); ++index < length; )
        this.add(values2[index]);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module2.exports = SetCache;
  }
});

// ../../node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "../../node_modules/lodash/_arraySome.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function arraySome(array, predicate) {
      for (var index = -1, length = array == null ? 0 : array.length; ++index < length; )
        if (predicate(array[index], index, array))
          return !0;
      return !1;
    }
    module2.exports = arraySome;
  }
});

// ../../node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "../../node_modules/lodash/_cacheHas.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module2.exports = cacheHas;
  }
});

// ../../node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../../node_modules/lodash/_equalArrays.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var SetCache = require_SetCache(), arraySome = require_arraySome(), cacheHas = require_cacheHas(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength))
        return !1;
      var arrStacked = stack.get(array), othStacked = stack.get(other);
      if (arrStacked && othStacked)
        return arrStacked == other && othStacked == array;
      var index = -1, result = !0, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      for (stack.set(array, other), stack.set(other, array); ++index < arrLength; ) {
        var arrValue = array[index], othValue = other[index];
        if (customizer)
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        if (compared !== void 0) {
          if (compared)
            continue;
          result = !1;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack)))
              return seen.push(othIndex);
          })) {
            result = !1;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = !1;
          break;
        }
      }
      return stack.delete(array), stack.delete(other), result;
    }
    module2.exports = equalArrays;
  }
});

// ../../node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../node_modules/lodash/_Uint8Array.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// ../../node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../../node_modules/lodash/_mapToArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function mapToArray(map2) {
      var index = -1, result = Array(map2.size);
      return map2.forEach(function(value, key) {
        result[++index] = [key, value];
      }), result;
    }
    module2.exports = mapToArray;
  }
});

// ../../node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../../node_modules/lodash/_setToArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      return set.forEach(function(value) {
        result[++index] = value;
      }), result;
    }
    module2.exports = setToArray;
  }
});

// ../../node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../../node_modules/lodash/_equalByTag.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var Symbol2 = require_Symbol(), Uint8Array2 = require_Uint8Array(), eq = require_eq(), equalArrays = require_equalArrays(), mapToArray = require_mapToArray(), setToArray = require_setToArray(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2, boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset)
            return !1;
          object = object.buffer, other = other.buffer;
        case arrayBufferTag:
          return !(object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other)));
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          if (convert || (convert = setToArray), object.size != other.size && !isPartial)
            return !1;
          var stacked = stack.get(object);
          if (stacked)
            return stacked == other;
          bitmask |= COMPARE_UNORDERED_FLAG, stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          return stack.delete(object), result;
        case symbolTag:
          if (symbolValueOf)
            return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
      return !1;
    }
    module2.exports = equalByTag;
  }
});

// ../../node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "../../node_modules/lodash/_arrayPush.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function arrayPush(array, values2) {
      for (var index = -1, length = values2.length, offset = array.length; ++index < length; )
        array[offset + index] = values2[index];
      return array;
    }
    module2.exports = arrayPush;
  }
});

// ../../node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../../node_modules/lodash/_baseGetAllKeys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var arrayPush = require_arrayPush(), isArray2 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module2.exports = baseGetAllKeys;
  }
});

// ../../node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "../../node_modules/lodash/_arrayFilter.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function arrayFilter(array, predicate) {
      for (var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
        var value = array[index];
        predicate(value, index, array) && (result[resIndex++] = value);
      }
      return result;
    }
    module2.exports = arrayFilter;
  }
});

// ../../node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "../../node_modules/lodash/stubArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function stubArray() {
      return [];
    }
    module2.exports = stubArray;
  }
});

// ../../node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../../node_modules/lodash/_getSymbols.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var arrayFilter = require_arrayFilter(), stubArray = require_stubArray(), objectProto = Object.prototype, propertyIsEnumerable = objectProto.propertyIsEnumerable, nativeGetSymbols = Object.getOwnPropertySymbols, getSymbols = nativeGetSymbols ? function(object) {
      return object == null ? [] : (object = Object(object), arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      }));
    } : stubArray;
    module2.exports = getSymbols;
  }
});

// ../../node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../node_modules/lodash/_baseTimes.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function baseTimes(n, iteratee) {
      for (var index = -1, result = Array(n); ++index < n; )
        result[index] = iteratee(index);
      return result;
    }
    module2.exports = baseTimes;
  }
});

// ../../node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../node_modules/lodash/_baseIsArguments.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isObjectLike = require_isObjectLike(), argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// ../../node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../../node_modules/lodash/isArguments.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseIsArguments = require_baseIsArguments(), isObjectLike = require_isObjectLike(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, propertyIsEnumerable = objectProto.propertyIsEnumerable, isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// ../../node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../node_modules/lodash/stubFalse.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function stubFalse() {
      return !1;
    }
    module2.exports = stubFalse;
  }
});

// ../../node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../node_modules/lodash/isBuffer.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var root = require_root(), stubFalse = require_stubFalse(), freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2, freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2, moduleExports = freeModule && freeModule.exports === freeExports, Buffer2 = moduleExports ? root.Buffer : void 0, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0, isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// ../../node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/lodash/_isIndex.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var MAX_SAFE_INTEGER = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      return length = length == null ? MAX_SAFE_INTEGER : length, !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    module2.exports = isIndex;
  }
});

// ../../node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/lodash/isLength.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// ../../node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../node_modules/lodash/_baseIsTypedArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseGetTag = require_baseGetTag(), isLength = require_isLength(), isObjectLike = require_isObjectLike(), argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// ../../node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../../node_modules/lodash/_baseUnary.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// ../../node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../../node_modules/lodash/_nodeUtil.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var freeGlobal = require_freeGlobal(), freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2, freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2, moduleExports = freeModule && freeModule.exports === freeExports, freeProcess = moduleExports && freeGlobal.process, nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        return types || freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// ../../node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../../node_modules/lodash/isTypedArray.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseIsTypedArray = require_baseIsTypedArray(), baseUnary = require_baseUnary(), nodeUtil = require_nodeUtil(), nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray, isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// ../../node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../node_modules/lodash/_arrayLikeKeys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseTimes = require_baseTimes(), isArguments = require_isArguments(), isArray2 = require_isArray(), isBuffer = require_isBuffer(), isIndex = require_isIndex(), isTypedArray = require_isTypedArray(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value)
        (inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length))) && result.push(key);
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// ../../node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../node_modules/lodash/_isPrototype.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// ../../node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../../node_modules/lodash/_overArg.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// ../../node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../../node_modules/lodash/_nativeKeys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var overArg = require_overArg(), nativeKeys = overArg(Object.keys, Object);
    module2.exports = nativeKeys;
  }
});

// ../../node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../../node_modules/lodash/_baseKeys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isPrototype = require_isPrototype(), nativeKeys = require_nativeKeys(), objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object))
        return nativeKeys(object);
      var result = [];
      for (var key in Object(object))
        hasOwnProperty.call(object, key) && key != "constructor" && result.push(key);
      return result;
    }
    module2.exports = baseKeys;
  }
});

// ../../node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/lodash/isArrayLike.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isFunction2 = require_isFunction(), isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction2(value);
    }
    module2.exports = isArrayLike;
  }
});

// ../../node_modules/lodash/keys.js
var require_keys2 = __commonJS({
  "../../node_modules/lodash/keys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var arrayLikeKeys = require_arrayLikeKeys(), baseKeys = require_baseKeys(), isArrayLike = require_isArrayLike();
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module2.exports = keys2;
  }
});

// ../../node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../../node_modules/lodash/_getAllKeys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseGetAllKeys = require_baseGetAllKeys(), getSymbols = require_getSymbols(), keys2 = require_keys2();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    module2.exports = getAllKeys;
  }
});

// ../../node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../../node_modules/lodash/_equalObjects.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getAllKeys = require_getAllKeys(), COMPARE_PARTIAL_FLAG = 1, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial)
        return !1;
      for (var index = objLength; index--; ) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key)))
          return !1;
      }
      var objStacked = stack.get(object), othStacked = stack.get(other);
      if (objStacked && othStacked)
        return objStacked == other && othStacked == object;
      var result = !0;
      stack.set(object, other), stack.set(other, object);
      for (var skipCtor = isPartial; ++index < objLength; ) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer)
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = !1;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor) && (result = !1);
      }
      return stack.delete(object), stack.delete(other), result;
    }
    module2.exports = equalObjects;
  }
});

// ../../node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "../../node_modules/lodash/_DataView.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), DataView = getNative(root, "DataView");
    module2.exports = DataView;
  }
});

// ../../node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../../node_modules/lodash/_Promise.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), Promise2 = getNative(root, "Promise");
    module2.exports = Promise2;
  }
});

// ../../node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../../node_modules/lodash/_Set.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), Set2 = getNative(root, "Set");
    module2.exports = Set2;
  }
});

// ../../node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../../node_modules/lodash/_WeakMap.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getNative = require_getNative(), root = require_root(), WeakMap = getNative(root, "WeakMap");
    module2.exports = WeakMap;
  }
});

// ../../node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../../node_modules/lodash/_getTag.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DataView = require_DataView(), Map2 = require_Map(), Promise2 = require_Promise(), Set2 = require_Set(), WeakMap = require_WeakMap(), baseGetTag = require_baseGetTag(), toSource = require_toSource(), mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap), getTag = baseGetTag;
    (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(value) {
      var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString)
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      return result;
    });
    module2.exports = getTag;
  }
});

// ../../node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "../../node_modules/lodash/_baseIsEqualDeep.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var Stack = require_Stack(), equalArrays = require_equalArrays(), equalByTag = require_equalByTag(), equalObjects = require_equalObjects(), getTag = require_getTag(), isArray2 = require_isArray(), isBuffer = require_isBuffer(), isTypedArray = require_isTypedArray(), COMPARE_PARTIAL_FLAG = 1, argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag, othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other))
          return !1;
        objIsArr = !0, objIsObj = !1;
      }
      if (isSameTag && !objIsObj)
        return stack || (stack = new Stack()), objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          return stack || (stack = new Stack()), equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      return isSameTag ? (stack || (stack = new Stack()), equalObjects(object, other, bitmask, customizer, equalFunc, stack)) : !1;
    }
    module2.exports = baseIsEqualDeep;
  }
});

// ../../node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "../../node_modules/lodash/_baseIsEqual.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseIsEqualDeep = require_baseIsEqualDeep(), isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      return value === other ? !0 : value == null || other == null || !isObjectLike(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module2.exports = baseIsEqual;
  }
});

// ../../node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "../../node_modules/lodash/_baseIsMatch.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var Stack = require_Stack(), baseIsEqual = require_baseIsEqual(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null)
        return !length;
      for (object = Object(object); index--; ) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object))
          return !1;
      }
      for (; ++index < length; ) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object))
            return !1;
        } else {
          var stack = new Stack();
          if (customizer)
            var result = customizer(objValue, srcValue, key, object, source, stack);
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result))
            return !1;
        }
      }
      return !0;
    }
    module2.exports = baseIsMatch;
  }
});

// ../../node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "../../node_modules/lodash/_isStrictComparable.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isObject2 = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject2(value);
    }
    module2.exports = isStrictComparable;
  }
});

// ../../node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "../../node_modules/lodash/_getMatchData.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isStrictComparable = require_isStrictComparable(), keys2 = require_keys2();
    function getMatchData(object) {
      for (var result = keys2(object), length = result.length; length--; ) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module2.exports = getMatchData;
  }
});

// ../../node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "../../node_modules/lodash/_matchesStrictComparable.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        return object == null ? !1 : object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module2.exports = matchesStrictComparable;
  }
});

// ../../node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "../../node_modules/lodash/_baseMatches.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseIsMatch = require_baseIsMatch(), getMatchData = require_getMatchData(), matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      return matchData.length == 1 && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module2.exports = baseMatches;
  }
});

// ../../node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "../../node_modules/lodash/_isKey.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isArray2 = require_isArray(), isSymbol = require_isSymbol(), reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray2(value))
        return !1;
      var type = typeof value;
      return type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value) ? !0 : reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module2.exports = isKey;
  }
});

// ../../node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "../../node_modules/lodash/memoize.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var MapCache = require_MapCache(), FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      var memoized = function memoized2() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized2.cache;
        if (cache.has(key))
          return cache.get(key);
        var result = func.apply(this, args);
        return memoized2.cache = cache.set(key, result) || cache, result;
      };
      return memoized.cache = new (memoize.Cache || MapCache)(), memoized;
    }
    memoize.Cache = MapCache;
    module2.exports = memoize;
  }
});

// ../../node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../../node_modules/lodash/_memoizeCapped.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var memoize = require_memoize(), MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        return cache.size === MAX_MEMOIZE_SIZE && cache.clear(), key;
      }), cache = result.cache;
      return result;
    }
    module2.exports = memoizeCapped;
  }
});

// ../../node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "../../node_modules/lodash/_stringToPath.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var memoizeCapped = require_memoizeCapped(), rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g, stringToPath = memoizeCapped(function(string) {
      var result = [];
      return string.charCodeAt(0) === 46 && result.push(""), string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      }), result;
    });
    module2.exports = stringToPath;
  }
});

// ../../node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "../../node_modules/lodash/_castPath.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isArray2 = require_isArray(), isKey = require_isKey(), stringToPath = require_stringToPath(), toString = require_toString();
    function castPath(value, object) {
      return isArray2(value) ? value : isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module2.exports = castPath;
  }
});

// ../../node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "../../node_modules/lodash/_toKey.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isSymbol = require_isSymbol(), INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value))
        return value;
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = toKey;
  }
});

// ../../node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "../../node_modules/lodash/_baseGet.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var castPath = require_castPath(), toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      for (var index = 0, length = path.length; object != null && index < length; )
        object = object[toKey(path[index++])];
      return index && index == length ? object : void 0;
    }
    module2.exports = baseGet;
  }
});

// ../../node_modules/lodash/get.js
var require_get = __commonJS({
  "../../node_modules/lodash/get.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module2.exports = get2;
  }
});

// ../../node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "../../node_modules/lodash/_baseHasIn.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module2.exports = baseHasIn;
  }
});

// ../../node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "../../node_modules/lodash/_hasPath.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var castPath = require_castPath(), isArguments = require_isArguments(), isArray2 = require_isArray(), isIndex = require_isIndex(), isLength = require_isLength(), toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      for (var index = -1, length = path.length, result = !1; ++index < length; ) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key)))
          break;
        object = object[key];
      }
      return result || ++index != length ? result : (length = object == null ? 0 : object.length, !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object)));
    }
    module2.exports = hasPath;
  }
});

// ../../node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "../../node_modules/lodash/hasIn.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseHasIn = require_baseHasIn(), hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module2.exports = hasIn;
  }
});

// ../../node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "../../node_modules/lodash/_baseMatchesProperty.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseIsEqual = require_baseIsEqual(), get2 = require_get(), hasIn = require_hasIn(), isKey = require_isKey(), isStrictComparable = require_isStrictComparable(), matchesStrictComparable = require_matchesStrictComparable(), toKey = require_toKey(), COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object) {
        var objValue = get2(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module2.exports = baseMatchesProperty;
  }
});

// ../../node_modules/lodash/identity.js
var require_identity = __commonJS({
  "../../node_modules/lodash/identity.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function identity(value) {
      return value;
    }
    module2.exports = identity;
  }
});

// ../../node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "../../node_modules/lodash/_baseProperty.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module2.exports = baseProperty;
  }
});

// ../../node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "../../node_modules/lodash/_basePropertyDeep.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module2.exports = basePropertyDeep;
  }
});

// ../../node_modules/lodash/property.js
var require_property = __commonJS({
  "../../node_modules/lodash/property.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseProperty = require_baseProperty(), basePropertyDeep = require_basePropertyDeep(), isKey = require_isKey(), toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module2.exports = property;
  }
});

// ../../node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "../../node_modules/lodash/_baseIteratee.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseMatches = require_baseMatches(), baseMatchesProperty = require_baseMatchesProperty(), identity = require_identity(), isArray2 = require_isArray(), property = require_property();
    function baseIteratee(value) {
      return typeof value == "function" ? value : value == null ? identity : typeof value == "object" ? isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value);
    }
    module2.exports = baseIteratee;
  }
});

// ../../node_modules/lodash/_createFind.js
var require_createFind = __commonJS({
  "../../node_modules/lodash/_createFind.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseIteratee = require_baseIteratee(), isArrayLike = require_isArrayLike(), keys2 = require_keys2();
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = baseIteratee(predicate, 3);
          collection = keys2(collection), predicate = function(key) {
            return iteratee(iterable[key], key, iterable);
          };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
      };
    }
    module2.exports = createFind;
  }
});

// ../../node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "../../node_modules/lodash/_baseFindIndex.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      for (var length = array.length, index = fromIndex + (fromRight ? 1 : -1); fromRight ? index-- : ++index < length; )
        if (predicate(array[index], index, array))
          return index;
      return -1;
    }
    module2.exports = baseFindIndex;
  }
});

// ../../node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/lodash/_trimmedEndIndex.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      for (var index = string.length; index-- && reWhitespace.test(string.charAt(index)); )
        ;
      return index;
    }
    module2.exports = trimmedEndIndex;
  }
});

// ../../node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/lodash/_baseTrim.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var trimmedEndIndex = require_trimmedEndIndex(), reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string && string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "");
    }
    module2.exports = baseTrim;
  }
});

// ../../node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/lodash/toNumber.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseTrim = require_baseTrim(), isObject2 = require_isObject(), isSymbol = require_isSymbol(), NAN = NaN, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number")
        return value;
      if (isSymbol(value))
        return NAN;
      if (isObject2(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject2(other) ? other + "" : other;
      }
      if (typeof value != "string")
        return value === 0 ? value : +value;
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = toNumber;
  }
});

// ../../node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "../../node_modules/lodash/toFinite.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toNumber = require_toNumber(), INFINITY = 1 / 0, MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value)
        return value === 0 ? value : 0;
      if (value = toNumber(value), value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module2.exports = toFinite;
  }
});

// ../../node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "../../node_modules/lodash/toInteger.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module2.exports = toInteger;
  }
});

// ../../node_modules/lodash/findLastIndex.js
var require_findLastIndex = __commonJS({
  "../../node_modules/lodash/findLastIndex.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var baseFindIndex = require_baseFindIndex(), baseIteratee = require_baseIteratee(), toInteger = require_toInteger(), nativeMax = Math.max, nativeMin = Math.min;
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length)
        return -1;
      var index = length - 1;
      return fromIndex !== void 0 && (index = toInteger(fromIndex), index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)), baseFindIndex(array, baseIteratee(predicate, 3), index, !0);
    }
    module2.exports = findLastIndex;
  }
});

// ../../node_modules/lodash/findLast.js
var require_findLast = __commonJS({
  "../../node_modules/lodash/findLast.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var createFind = require_createFind(), findLastIndex = require_findLastIndex(), findLast = createFind(findLastIndex);
    module2.exports = findLast;
  }
});

// ../../node_modules/java-parser/src/comments.js
var require_comments = __commonJS({
  "../../node_modules/java-parser/src/comments.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var findLast = require_findLast();
    function findUpperBoundToken(tokens, comment) {
      var diff, i, current, len = tokens.length;
      for (i = 0; len; )
        diff = len >>> 1, current = i + diff, tokens[current].startOffset > comment.startOffset ? len = diff : (i = current + 1, len -= diff + 1);
      return i;
    }
    function isPrettierIgnoreComment(comment) {
      return comment.image.match(/(\/\/(\s*)prettier-ignore(\s*))|(\/\*(\s*)prettier-ignore(\s*)\*\/)/gm);
    }
    function isFormatterOffOnComment(comment) {
      return comment.image.match(/(\/\/(\s*)@formatter:(off|on)(\s*))|(\/\*(\s*)@formatter:(off|on)(\s*)\*\/)/gm);
    }
    function completeMostEnclosiveCSTNodeByOffset(tokens, mostEnclosiveCstNodeByStartOffset, mostEnclosiveCstNodeByEndOffset) {
      tokens.forEach(function(token) {
        mostEnclosiveCstNodeByStartOffset[token.startOffset] === void 0 && (mostEnclosiveCstNodeByStartOffset[token.startOffset] = token), mostEnclosiveCstNodeByEndOffset[token.endOffset] === void 0 && (mostEnclosiveCstNodeByEndOffset[token.endOffset] = token);
      });
    }
    function extendRangeOffset(comments, tokens) {
      var position;
      comments.forEach(function(comment) {
        position = findUpperBoundToken(tokens, comment);
        var extendedStartOffset = position - 1 < 0 ? comment.startOffset : tokens[position - 1].endOffset, extendedEndOffset = position == tokens.length ? comment.endOffset : tokens[position].startOffset;
        comment.extendedOffset = {
          startOffset: extendedStartOffset,
          endOffset: extendedEndOffset
        };
      });
    }
    function mapCommentsByExtendedRange(comments) {
      var commentsByExtendedEndOffset = {}, commentsByExtendedStartOffset = {};
      return comments.forEach(function(comment) {
        var extendedStartOffset = comment.extendedOffset.startOffset, extendedEndOffset = comment.extendedOffset.endOffset;
        commentsByExtendedEndOffset[extendedEndOffset] === void 0 ? commentsByExtendedEndOffset[extendedEndOffset] = [comment] : commentsByExtendedEndOffset[extendedEndOffset].push(comment), commentsByExtendedStartOffset[extendedStartOffset] === void 0 ? commentsByExtendedStartOffset[extendedStartOffset] = [comment] : commentsByExtendedStartOffset[extendedStartOffset].push(comment);
      }), {
        commentsByExtendedEndOffset: commentsByExtendedEndOffset,
        commentsByExtendedStartOffset: commentsByExtendedStartOffset
      };
    }
    function shouldAttachTrailingComments(comment, node, mostEnclosiveCstNodeByStartOffset) {
      if (isPrettierIgnoreComment(comment))
        return !1;
      var nextNode = mostEnclosiveCstNodeByStartOffset[comment.extendedOffset.endOffset];
      if (nextNode === void 0)
        return !0;
      var nodeEndLine = node.location !== void 0 ? node.location.endLine : node.endLine;
      if (comment.startLine !== nodeEndLine)
        return !1;
      var nextNodeStartLine = nextNode.location !== void 0 ? nextNode.location.startLine : nextNode.startLine;
      return comment.endLine !== nextNodeStartLine;
    }
    function attachComments(tokens, comments, mostEnclosiveCstNodeByStartOffset, mostEnclosiveCstNodeByEndOffset) {
      if (tokens.length === 0) {
        mostEnclosiveCstNodeByStartOffset[NaN].leadingComments = comments;
        return;
      }
      completeMostEnclosiveCSTNodeByOffset(tokens, mostEnclosiveCstNodeByStartOffset, mostEnclosiveCstNodeByEndOffset), extendRangeOffset(comments, tokens);
      var _mapCommentsByExtende = mapCommentsByExtendedRange(comments), commentsByExtendedStartOffset = _mapCommentsByExtende.commentsByExtendedStartOffset, commentsByExtendedEndOffset = _mapCommentsByExtende.commentsByExtendedEndOffset, commentsToAttach = new Set(comments);
      Object.keys(mostEnclosiveCstNodeByEndOffset).forEach(function(endOffset) {
        if (commentsByExtendedStartOffset[endOffset] !== void 0) {
          var nodeTrailingComments = commentsByExtendedStartOffset[endOffset].filter(function(comment) {
            return shouldAttachTrailingComments(comment, mostEnclosiveCstNodeByEndOffset[endOffset], mostEnclosiveCstNodeByStartOffset) && commentsToAttach.has(comment);
          });
          nodeTrailingComments.length > 0 && (mostEnclosiveCstNodeByEndOffset[endOffset].trailingComments = nodeTrailingComments), nodeTrailingComments.forEach(function(comment) {
            commentsToAttach.delete(comment);
          });
        }
      }), Object.keys(mostEnclosiveCstNodeByStartOffset).forEach(function(startOffset) {
        if (commentsByExtendedEndOffset[startOffset] !== void 0) {
          var nodeLeadingComments = commentsByExtendedEndOffset[startOffset].filter(function(comment) {
            return commentsToAttach.has(comment);
          });
          nodeLeadingComments.length > 0 && (mostEnclosiveCstNodeByStartOffset[startOffset].leadingComments = nodeLeadingComments);
          for (var i = 0; i < nodeLeadingComments.length; i++)
            if (isPrettierIgnoreComment(nodeLeadingComments[i])) {
              mostEnclosiveCstNodeByStartOffset[startOffset].ignore = !0;
              break;
            }
        }
      });
    }
    function matchFormatterOffOnPairs(comments) {
      var onOffComments = comments.filter(function(comment) {
        return isFormatterOffOnComment(comment);
      }), isPreviousCommentOff = !1, isCurrentCommentOff = !0, pairs = [], paired = {};
      return onOffComments.forEach(function(comment) {
        isCurrentCommentOff = comment.image.slice(-3) === "off", isPreviousCommentOff ? isCurrentCommentOff || (paired.on = comment, pairs.push(paired), paired = {}) : isCurrentCommentOff && (paired.off = comment), isPreviousCommentOff = isCurrentCommentOff;
      }), onOffComments.length > 0 && isCurrentCommentOff && (paired.on = void 0, pairs.push(paired)), pairs;
    }
    function shouldNotFormat(node, commentPairs) {
      var matchingPair = findLast(commentPairs, function(comment) {
        return comment.off.endOffset < node.location.startOffset;
      });
      matchingPair !== void 0 && (matchingPair.on === void 0 || matchingPair.on.startOffset > node.location.endOffset) && (node.ignore = !0);
    }
    module2.exports = {
      matchFormatterOffOnPairs: matchFormatterOffOnPairs,
      shouldNotFormat: shouldNotFormat,
      attachComments: attachComments
    };
  }
});

// ../../node_modules/java-parser/src/parser.js
var require_parser2 = __commonJS({
  "../../node_modules/java-parser/src/parser.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _classCallCheck3(instance, Constructor) {
      if (!(instance instanceof Constructor))
        throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties3(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey5(descriptor.key), descriptor);
      }
    }
    function _createClass3(Constructor, protoProps, staticProps) {
      return protoProps && _defineProperties3(Constructor.prototype, protoProps), staticProps && _defineProperties3(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
    }
    function _toPropertyKey5(t2) {
      var i = _toPrimitive5(t2, "string");
      return typeof i == "symbol" ? i : String(i);
    }
    function _toPrimitive5(t2, r) {
      if (typeof t2 != "object" || !t2)
        return t2;
      var e = t2[Symbol.toPrimitive];
      if (e !== void 0) {
        var i = e.call(t2, r || "default");
        if (typeof i != "object")
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(t2);
    }
    function _get() {
      return typeof Reflect < "u" && Reflect.get ? _get = Reflect.get.bind() : _get = function(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (base) {
          var desc = Object.getOwnPropertyDescriptor(base, property);
          return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
        }
      }, _get.apply(this, arguments);
    }
    function _superPropBase(object, property) {
      for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf(object), object !== null); )
        ;
      return object;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass != "function" && superClass !== null)
        throw new TypeError("Super expression must either be null or a function");
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
        return o2.__proto__ = p2, o2;
      }, _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else
          result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (typeof call == "object" || typeof call == "function"))
        return call;
      if (call !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch (e) {
        return !1;
      }
    }
    function _getPrototypeOf(o) {
      return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, _getPrototypeOf(o);
    }
    var _require = require_api(), Parser = _require.Parser, isRecognitionException = _require.isRecognitionException, _require2 = require_tokens2(), allTokens = _require2.allTokens, t = _require2.tokens, lexicalStructure = require_lexical_structure(), typesValuesVariables = require_types_values_and_variables(), names = require_names(), packagesModules = require_packages_and_modules(), classes = require_classes(), interfaces = require_interfaces(), arrays = require_arrays(), blocksStatements = require_blocks_and_statements(), expressions = require_expressions(), _require3 = require_utils2(), getSkipValidations = _require3.getSkipValidations, _require4 = require_comments(), shouldNotFormat = _require4.shouldNotFormat, JavaParser = /* @__PURE__ */ function(_Parser) {
      _inherits(JavaParser2, _Parser);
      var _super = _createSuper(JavaParser2);
      function JavaParser2() {
        var _this;
        _classCallCheck3(this, JavaParser2), _this = _super.call(this, allTokens, {
          maxLookahead: 1,
          nodeLocationTracking: "full",
          // traceInitPerf: 2,
          skipValidations: getSkipValidations()
        });
        var $ = _assertThisInitialized(_this);
        return _this.mostEnclosiveCstNodeByStartOffset = {}, _this.mostEnclosiveCstNodeByEndOffset = {}, $.RULE("typeIdentifier", function() {
          $.CONSUME(t.Identifier);
        }), lexicalStructure.defineRules.call(_assertThisInitialized(_this), $, t), typesValuesVariables.defineRules.call(_assertThisInitialized(_this), $, t), names.defineRules.call(_assertThisInitialized(_this), $, t), classes.defineRules.call(_assertThisInitialized(_this), $, t), packagesModules.defineRules.call(_assertThisInitialized(_this), $, t), interfaces.defineRules.call(_assertThisInitialized(_this), $, t), arrays.defineRules.call(_assertThisInitialized(_this), $, t), blocksStatements.defineRules.call(_assertThisInitialized(_this), $, t), expressions.defineRules.call(_assertThisInitialized(_this), $, t), _this.firstForUnaryExpressionNotPlusMinus = [], _this.performSelfAnalysis(), _this.firstForUnaryExpressionNotPlusMinus = expressions.computeFirstForUnaryExpressionNotPlusMinus.call(_assertThisInitialized(_this)), _this;
      }
      return _createClass3(JavaParser2, [{
        key: "cstPostNonTerminal",
        value: function(ruleCstResult, ruleName) {
          _get(_getPrototypeOf(JavaParser2.prototype), "cstPostNonTerminal", this).call(this, ruleCstResult, ruleName), this.isBackTracking() === !1 && (this.mostEnclosiveCstNodeByStartOffset[ruleCstResult.location.startOffset] = ruleCstResult, this.mostEnclosiveCstNodeByEndOffset[ruleCstResult.location.endOffset] = ruleCstResult, shouldNotFormat(ruleCstResult, this.onOffCommentPairs));
        }
      }, {
        key: "BACKTRACK_LOOKAHEAD",
        value: function(production) {
          var _this = this;
          var errValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return this.ACTION(function() {
            _this.isBackTrackingStack.push(1);
            var orgState = _this.saveRecogState();
            try {
              return _this.outputCst = !1, production.call(_this);
            } catch (e) {
              if (isRecognitionException(e))
                return errValue;
              throw e;
            } finally {
              _this.outputCst = !0, _this.reloadRecogState(orgState), _this.isBackTrackingStack.pop();
            }
          });
        }
      }, {
        key: "setOnOffCommentPairs",
        value: function(onOffCommentPairs) {
          this.onOffCommentPairs = onOffCommentPairs;
        }
      }]), JavaParser2;
    }(Parser);
    module2.exports = JavaParser;
  }
});

// ../../node_modules/java-parser/src/index.js
var require_src = __commonJS({
  "../../node_modules/java-parser/src/index.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var JavaLexer = require_lexer2(), JavaParser = require_parser2(), _require = require_comments(), attachComments = _require.attachComments, matchFormatterOffOnPairs = _require.matchFormatterOffOnPairs, parser = new JavaParser(), BaseJavaCstVisitor = parser.getBaseCstVisitorConstructor(), BaseJavaCstVisitorWithDefaults = parser.getBaseCstVisitorConstructorWithDefaults();
    function parse(inputText) {
      var entryPoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "compilationUnit", lexResult = JavaLexer.tokenize(inputText);
      if (lexResult.errors.length > 0) {
        var firstError = lexResult.errors[0];
        throw Error("Sad sad panda, lexing errors detected in line: " + firstError.line + ", column: " + firstError.column + "!\n" + firstError.message);
      }
      parser.input = lexResult.tokens, parser.mostEnclosiveCstNodeByStartOffset = {}, parser.mostEnclosiveCstNodeByEndOffset = {}, parser.setOnOffCommentPairs(matchFormatterOffOnPairs(lexResult.groups.comments));
      var cst = parser[entryPoint]();
      if (parser.errors.length > 0) {
        var error = parser.errors[0];
        throw Error("Sad sad panda, parsing errors detected in line: " + error.token.startLine + ", column: " + error.token.startColumn + "!\n" + error.message + "!\n	->" + error.context.ruleStack.join("\n	->"));
      }
      return attachComments(lexResult.tokens, lexResult.groups.comments, parser.mostEnclosiveCstNodeByStartOffset, parser.mostEnclosiveCstNodeByEndOffset), cst;
    }
    module2.exports = {
      parse: parse,
      BaseJavaCstVisitor: BaseJavaCstVisitor,
      BaseJavaCstVisitorWithDefaults: BaseJavaCstVisitorWithDefaults
    };
  }
});

// ../../node_modules/data-of-loathing/dist/EnumCollector.js
var require_EnumCollector = __commonJS({
  "../../node_modules/data-of-loathing/dist/EnumCollector.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _toConsumableArray3(arr) {
      return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread3();
    }
    function _nonIterableSpread3() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray10(o, minLen) {
      if (o) {
        if (typeof o == "string")
          return _arrayLikeToArray10(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray10(o, minLen);
      }
    }
    function _iterableToArray3(iter) {
      if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles3(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray10(arr);
    }
    function _arrayLikeToArray10(arr, len) {
      (len == null || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _classCallCheck3(instance, Constructor) {
      if (!(instance instanceof Constructor))
        throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties3(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey5(descriptor.key), descriptor);
      }
    }
    function _createClass3(Constructor, protoProps, staticProps) {
      return protoProps && _defineProperties3(Constructor.prototype, protoProps), staticProps && _defineProperties3(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
    }
    function _toPropertyKey5(t) {
      var i = _toPrimitive5(t, "string");
      return typeof i == "symbol" ? i : String(i);
    }
    function _toPrimitive5(t, r) {
      if (typeof t != "object" || !t)
        return t;
      var e = t[Symbol.toPrimitive];
      if (e !== void 0) {
        var i = e.call(t, r || "default");
        if (typeof i != "object")
          return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(t);
    }
    function _get() {
      return typeof Reflect < "u" && Reflect.get ? _get = Reflect.get.bind() : _get = function(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (base) {
          var desc = Object.getOwnPropertyDescriptor(base, property);
          return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
        }
      }, _get.apply(this, arguments);
    }
    function _superPropBase(object, property) {
      for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf(object), object !== null); )
        ;
      return object;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass != "function" && superClass !== null)
        throw new TypeError("Super expression must either be null or a function");
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
        return o2.__proto__ = p2, o2;
      }, _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else
          result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (typeof call == "object" || typeof call == "function"))
        return call;
      if (call !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch (e) {
        return !1;
      }
    }
    function _getPrototypeOf(o) {
      return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      }, _getPrototypeOf(o);
    }
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.EnumCollector = void 0;
    var java_parser_1 = require_src(), utils_1 = require_utils3(), EnumCollector = /* @__PURE__ */ function(_java_parser_1$BaseJa) {
      _inherits(EnumCollector2, _java_parser_1$BaseJa);
      var _super = _createSuper(EnumCollector2);
      function EnumCollector2(enumName) {
        var _this;
        return _classCallCheck3(this, EnumCollector2), _this = _super.call(this), _this.parserResult = [], _this.enumName = enumName, _this.validateVisitor(), _this;
      }
      return _createClass3(EnumCollector2, [{
        key: "argumentList",
        value: function(ctx) {
          var _this = this;
          return ctx.expression.map(function(node) {
            return _this.visit(node);
          });
        }
      }, {
        key: "binaryExpression",
        value: function(ctx) {
          return this.visit(ctx.unaryExpression);
        }
      }, {
        key: "booleanLiteral",
        value: function(ctx) {
          return !!ctx.True;
        }
      }, {
        key: "classBodyDeclaration",
        value: function(ctx, partOfEnum) {
          var _a;
          return partOfEnum ? this.visit((_a = ctx.constructorDeclaration) !== null && _a !== void 0 ? _a : []) : _get(_getPrototypeOf(EnumCollector2.prototype), "classBodyDeclaration", this).call(this, ctx);
        }
      }, {
        key: "constructorDeclaration",
        value: function(ctx) {
          return this.visit(ctx.constructorDeclarator);
        }
      }, {
        key: "constructorDeclarator",
        value: function(ctx) {
          var _a;
          return this.visit((_a = ctx.formalParameterList) !== null && _a !== void 0 ? _a : []);
        }
      }, {
        key: "enumDeclaration",
        value: function(ctx) {
          var name = this.visit(ctx.typeIdentifier);
          name === this.enumName && (this.parserResult = this.visit(ctx.enumBody));
        }
      }, {
        key: "enumBody",
        value: function(ctx) {
          var _a, _b, keySets = this.visit((_a = ctx.enumBodyDeclarations) !== null && _a !== void 0 ? _a : []), members = this.visit((_b = ctx.enumConstantList) !== null && _b !== void 0 ? _b : []);
          return members.map(function(_ref) {
            var name = _ref.name, values2 = _ref.values, _a2, keys2 = (_a2 = keySets.find(function(k) {
              return k.length === values2.length;
            })) !== null && _a2 !== void 0 ? _a2 : keySets[0];
            return Object.fromEntries([["enumName", name]].concat(_toConsumableArray3((0, utils_1.zip)(keys2, values2))));
          });
        }
      }, {
        key: "enumBodyDeclarations",
        value: function(ctx) {
          var _this = this;
          var _a, _b;
          return ((_b = (_a = ctx.classBodyDeclaration) === null || _a === void 0 ? void 0 : _a.filter(function(n) {
            return n.children.constructorDeclaration;
          })) !== null && _b !== void 0 ? _b : []).map(function(node) {
            return _this.visit(node, !0);
          });
        }
      }, {
        key: "enumConstantList",
        value: function(ctx) {
          var _this = this;
          return ctx.enumConstant.map(function(node) {
            return _this.visit(node);
          });
        }
      }, {
        key: "enumConstant",
        value: function(ctx) {
          return {
            name: ctx.Identifier[0].image,
            values: ctx.argumentList ? this.visit(ctx.argumentList) : []
          };
        }
      }, {
        key: "expression",
        value: function(ctx) {
          var _a;
          return this.visit((_a = ctx.ternaryExpression) !== null && _a !== void 0 ? _a : []);
        }
      }, {
        key: "formalParameterList",
        value: function(ctx) {
          var _this = this;
          return ctx.formalParameter.map(function(node) {
            return _this.visit(node);
          });
        }
      }, {
        key: "formalParameter",
        value: function(ctx) {
          var _a;
          return this.visit((_a = ctx.variableParaRegularParameter) !== null && _a !== void 0 ? _a : []);
        }
      }, {
        key: "fqnOrRefType",
        value: function(ctx) {
          return ctx.fqnOrRefTypePartRest ? this.visit(ctx.fqnOrRefTypePartRest) : this.visit(ctx.fqnOrRefTypePartFirst);
        }
      }, {
        key: "fqnOrRefTypePartCommon",
        value: function(ctx) {
          var _a;
          return (_a = ctx.Identifier) === null || _a === void 0 ? void 0 : _a[0].image;
        }
      }, {
        key: "fqnOrRefTypePartFirst",
        value: function(ctx) {
          return this.visit(ctx.fqnOrRefTypePartCommon);
        }
      }, {
        key: "fqnOrRefTypePartRest",
        value: function(ctx) {
          return this.visit(ctx.fqnOrRefTypePartCommon);
        }
      }, {
        key: "integerLiteral",
        value: function(ctx) {
          if (ctx.BinaryLiteral)
            return parseInt(ctx.BinaryLiteral[0].image, 2);
          if (ctx.OctalLiteral)
            return parseInt(ctx.OctalLiteral[0].image, 8);
          if (ctx.DecimalLiteral)
            return parseInt(ctx.DecimalLiteral[0].image, 10);
          if (ctx.HexLiteral)
            return parseInt(ctx.HexLiteral[0].image, 16);
        }
      }, {
        key: "literal",
        value: function(ctx) {
          if (ctx.StringLiteral) {
            var quoted = ctx.StringLiteral[0].image;
            return quoted.substring(1, quoted.length - 1);
          }
          if (ctx.booleanLiteral)
            return this.visit(ctx.booleanLiteral);
          if (ctx.integerLiteral)
            return this.visit(ctx.integerLiteral);
          if (ctx.Null)
            return null;
        }
      }, {
        key: "primary",
        value: function(ctx) {
          return this.visit(ctx.primaryPrefix);
        }
      }, {
        key: "primaryPrefix",
        value: function(ctx) {
          if (ctx.literal)
            return this.visit(ctx.literal);
          if (ctx.fqnOrRefType)
            return this.visit(ctx.fqnOrRefType);
        }
      }, {
        key: "ternaryExpression",
        value: function(ctx) {
          return this.visit(ctx.binaryExpression);
        }
      }, {
        key: "typeIdentifier",
        value: function(ctx) {
          return ctx.Identifier[0].image;
        }
      }, {
        key: "unaryExpression",
        value: function(ctx) {
          var _a, negative = ((_a = ctx.UnaryPrefixOperator) === null || _a === void 0 ? void 0 : _a[0].image) === "-", value = this.visit(ctx.primary);
          return negative ? -1 * value : value;
        }
      }, {
        key: "variableParaRegularParameter",
        value: function(ctx) {
          return this.visit(ctx.variableDeclaratorId);
        }
      }, {
        key: "variableDeclaratorId",
        value: function(ctx) {
          return ctx.Identifier[0].image;
        }
      }]), EnumCollector2;
    }(java_parser_1.BaseJavaCstVisitorWithDefaults);
    exports2.EnumCollector = EnumCollector;
  }
});

// ../../node_modules/data-of-loathing/dist/utils.js
var require_utils3 = __commonJS({
  "../../node_modules/data-of-loathing/dist/utils.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _toConsumableArray3(arr) {
      return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread3();
    }
    function _nonIterableSpread3() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray10(o, minLen) {
      if (o) {
        if (typeof o == "string")
          return _arrayLikeToArray10(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray10(o, minLen);
      }
    }
    function _iterableToArray3(iter) {
      if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles3(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray10(arr);
    }
    function _arrayLikeToArray10(arr, len) {
      (len == null || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.zip = exports2.isMemberOfEnum = exports2.arrayOf = exports2.tuple = exports2.loadMafiaEnum = exports2.loadMafiaData = void 0;
    var java_parser_1 = require_src(), EnumCollector_1 = require_EnumCollector(), MAFIA_BASE = "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src";
    function noSizeChange(url, lastKnownSize) {
      var _a;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var sizeCheck, newSize;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                if (!(lastKnownSize <= 0)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", !1);
              case 2:
                return _context.next = 4, fetch(url, {
                  method: "HEAD"
                });
              case 4:
                if (sizeCheck = _context.sent, newSize = Number((_a = sizeCheck.headers.get("Content-Length")) !== null && _a !== void 0 ? _a : 1), newSize !== lastKnownSize) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", !0);
              case 8:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    function load(url, lastKnownSize, processRaw) {
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2() {
        var request, raw;
        return _regeneratorRuntime().wrap(function(_context2) {
          for (; ; )
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.next = 2, noSizeChange(url, lastKnownSize);
              case 2:
                if (!_context2.sent) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", null);
              case 4:
                return _context2.next = 6, fetch(url);
              case 6:
                return request = _context2.sent, _context2.next = 9, request.text();
              case 9:
                return raw = _context2.sent, _context2.abrupt("return", {
                  data: processRaw(raw),
                  size: Number(request.headers.get("Content-Length"))
                });
              case 11:
              case "end":
                return _context2.stop();
            }
        }, _callee2);
      }));
    }
    function loadMafiaData(fileName) {
      var lastKnownSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee3() {
        var url;
        return _regeneratorRuntime().wrap(function(_context3) {
          for (; ; )
            switch (_context3.prev = _context3.next) {
              case 0:
                return url = "".concat(MAFIA_BASE, "/data/").concat(fileName, ".txt"), _context3.next = 3, load(url, lastKnownSize, function(raw) {
                  return raw.split("\n").slice(1).filter(function(r) {
                    return r !== "" && !r.startsWith("#");
                  }).map(function(r) {
                    return r.split("	");
                  });
                });
              case 3:
                return _context3.abrupt("return", _context3.sent);
              case 4:
              case "end":
                return _context3.stop();
            }
        }, _callee3);
      }));
    }
    exports2.loadMafiaData = loadMafiaData;
    function loadMafiaEnum(module3) {
      var lastKnownSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, enumName = arguments.length > 2 ? arguments[2] : void 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee4() {
        var pieces, url;
        return _regeneratorRuntime().wrap(function(_context4) {
          for (; ; )
            switch (_context4.prev = _context4.next) {
              case 0:
                return pieces = module3.split("."), url = "".concat(MAFIA_BASE, "/").concat(pieces.join("/"), ".java"), _context4.next = 4, load(url, lastKnownSize, function(raw) {
                  var cst = (0, java_parser_1.parse)(raw), enumCollector = new EnumCollector_1.EnumCollector(enumName || pieces[pieces.length - 1]);
                  return enumCollector.visit(cst), enumCollector.parserResult;
                });
              case 4:
                return _context4.abrupt("return", _context4.sent);
              case 5:
              case "end":
                return _context4.stop();
            }
        }, _callee4);
      }));
    }
    exports2.loadMafiaEnum = loadMafiaEnum;
    var tuple2 = function(args) {
      return args;
    };
    exports2.tuple = tuple2;
    var arrayOf2 = function(items) {
      return Array.isArray(items) ? items : [items];
    };
    exports2.arrayOf = arrayOf2;
    var isMemberOfEnum = function(e) {
      return function(token) {
        return Object.values(e).includes(token);
      };
    };
    exports2.isMemberOfEnum = isMemberOfEnum;
    function zip() {
      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++)
        arrays[_key] = arguments[_key];
      var maxLength = Math.max.apply(Math, _toConsumableArray3(arrays.map(function(x) {
        return x.length;
      })));
      return Array.from({
        length: maxLength
      }).map(function(_, i) {
        return Array.from({
          length: arrays.length
        }, function(_2, k) {
          return arrays[k][i];
        });
      });
    }
    exports2.zip = zip;
  }
});

// ../../node_modules/data-of-loathing/dist/entityTypes/classes.js
var require_classes2 = __commonJS({
  "../../node_modules/data-of-loathing/dist/entityTypes/classes.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.loadClasses = void 0;
    var utils_1 = require_utils3(), defaultClass = {
      image: null,
      primeStatIndex: -1,
      path: null,
      stun: null,
      stomachCapacity: null,
      liverCapacity: null,
      spleenCapacity: null
    };
    function loadClasses() {
      var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var raw;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                return _context.next = 2, (0, utils_1.loadMafiaEnum)("net.sourceforge.kolmafia.AscensionClass", lastKnownSize);
              case 2:
                if (raw = _context.sent, raw !== null) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", null);
              case 5:
                return _context.abrupt("return", Object.assign(Object.assign({}, raw), {
                  data: raw.data.map(function(c) {
                    return Object.assign(Object.assign({}, defaultClass), c);
                  })
                }));
              case 6:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    exports2.loadClasses = loadClasses;
  }
});

// ../../node_modules/data-of-loathing/dist/entityTypes/effects.js
var require_effects = __commonJS({
  "../../node_modules/data-of-loathing/dist/entityTypes/effects.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.loadEffects = exports2.EffectQuality = void 0;
    var utils_1 = require_utils3(), EffectQuality;
    (function(EffectQuality2) {
      EffectQuality2.Good = "good", EffectQuality2.Neutral = "neutral", EffectQuality2.Bad = "bad";
    })(EffectQuality || (exports2.EffectQuality = EffectQuality = {}));
    var isValidQuality = (0, utils_1.isMemberOfEnum)(EffectQuality), parseEffect = function(parts) {
      var _a, _b, _c, _d;
      return {
        id: Number(parts[0]),
        name: parts[1],
        image: parts[2],
        descid: parts[3],
        quality: isValidQuality(parts[4]) ? parts[4] : EffectQuality.Neutral,
        attributes: (_b = (_a = parts[5]) === null || _a === void 0 ? void 0 : _a.split(",").map(function(p) {
          return p.trim();
        }).filter(function(p) {
          return p !== "none";
        })) !== null && _b !== void 0 ? _b : [],
        actions: (_d = (_c = parts[6]) === null || _c === void 0 ? void 0 : _c.split("|")) !== null && _d !== void 0 ? _d : []
      };
    };
    function loadEffects() {
      var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var raw;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                return _context.next = 2, (0, utils_1.loadMafiaData)("statuseffects", lastKnownSize);
              case 2:
                if (raw = _context.sent, raw !== null) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", null);
              case 5:
                return _context.abrupt("return", Object.assign(Object.assign({}, raw), {
                  data: raw.data.filter(function(p) {
                    return p.length > 2;
                  }).map(parseEffect)
                }));
              case 6:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    exports2.loadEffects = loadEffects;
  }
});

// ../../node_modules/data-of-loathing/dist/entityTypes/familiars.js
var require_familiars = __commonJS({
  "../../node_modules/data-of-loathing/dist/entityTypes/familiars.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.loadFamiliars = exports2.isFamiliarOwnable = exports2.FamiliarCategory = void 0;
    var utils_1 = require_utils3(), FamiliarCategory;
    (function(FamiliarCategory2) {
      FamiliarCategory2.Stat0 = "stat0", FamiliarCategory2.Stat1 = "stat1", FamiliarCategory2.Item0 = "item0", FamiliarCategory2.Item1 = "item1", FamiliarCategory2.Item2 = "item2", FamiliarCategory2.Item3 = "item3", FamiliarCategory2.Meat0 = "meat0", FamiliarCategory2.Combat0 = "combat0", FamiliarCategory2.Combat1 = "combat1", FamiliarCategory2.Drop = "drop", FamiliarCategory2.Block = "block", FamiliarCategory2.Delevel = "delevel", FamiliarCategory2.Hp0 = "hp0", FamiliarCategory2.Mp0 = "mp0", FamiliarCategory2.Meat1 = "meat1", FamiliarCategory2.Stat2 = "stat2", FamiliarCategory2.Other0 = "other0", FamiliarCategory2.Hp1 = "hp1", FamiliarCategory2.Mp1 = "mp1", FamiliarCategory2.Stat3 = "stat3", FamiliarCategory2.Other1 = "other1", FamiliarCategory2.Passive = "passive", FamiliarCategory2.Underwater = "underwater", FamiliarCategory2.Variable = "variable";
    })(FamiliarCategory || (exports2.FamiliarCategory = FamiliarCategory = {}));
    var isValidCategory = (0, utils_1.isMemberOfEnum)(FamiliarCategory), isFamiliarOwnable = function(_ref) {
      var id = _ref.id;
      return !(id >= 125 && id < 134 || id >= 215 && id < 260);
    };
    exports2.isFamiliarOwnable = isFamiliarOwnable;
    var parseFamiliar = function(parts) {
      var _a, _b;
      return {
        id: Number(parts[0]),
        name: parts[1],
        image: parts[2],
        categories: parts[3].split(",").map(function(p) {
          return p.trim();
        }).filter(isValidCategory),
        larva: parts[4],
        equipment: parts[5] || null,
        arenaStats: {
          cageMatch: Number(parts[6]),
          scavengerHunt: Number(parts[7]),
          obstacleCourse: Number(parts[8]),
          hideAndSeek: Number(parts[9])
        },
        attributes: (_b = (_a = parts[10]) === null || _a === void 0 ? void 0 : _a.split(",")) !== null && _b !== void 0 ? _b : []
      };
    };
    function loadFamiliars() {
      var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var raw;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                return _context.next = 2, (0, utils_1.loadMafiaData)("familiars", lastKnownSize);
              case 2:
                if (raw = _context.sent, raw !== null) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", null);
              case 5:
                return _context.abrupt("return", Object.assign(Object.assign({}, raw), {
                  data: raw.data.filter(function(p) {
                    return p.length > 2;
                  }).map(parseFamiliar)
                }));
              case 6:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    exports2.loadFamiliars = loadFamiliars;
  }
});

// ../../node_modules/data-of-loathing/dist/entityTypes/items.js
var require_items = __commonJS({
  "../../node_modules/data-of-loathing/dist/entityTypes/items.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.loadItems = exports2.ItemUse = void 0;
    var utils_1 = require_utils3(), ItemUse;
    (function(ItemUse2) {
      ItemUse2.Food = "food", ItemUse2.Drink = "drink", ItemUse2.Spleen = "spleen", ItemUse2.Potion = "potion", ItemUse2.Avatar = "avatar", ItemUse2.Usable = "usable", ItemUse2.Multiple = "multiple", ItemUse2.Reusable = "reusable", ItemUse2.Message = "message", ItemUse2.Grow = "grow", ItemUse2.PokePill = "pokepill", ItemUse2.Hat = "hat", ItemUse2.Weapon = "weapon", ItemUse2.Sixgun = "sixgun", ItemUse2.Offhand = "offhand", ItemUse2.Container = "container", ItemUse2.Shirt = "shirt", ItemUse2.Pants = "pants", ItemUse2.Accessory = "accessory", ItemUse2.Familiar = "familiar", ItemUse2.Sticker = "sticker", ItemUse2.Card = "card", ItemUse2.Folder = "folder", ItemUse2.Bootspur = "bootspur", ItemUse2.Bootskin = "bootskin", ItemUse2.FoodHelper = "food helper", ItemUse2.DrinkHelper = "drink helper", ItemUse2.Zap = "zap", ItemUse2.Sphere = "sphere", ItemUse2.Guardian = "guardian", ItemUse2.Combat = "combat", ItemUse2.CombatReusable = "combat reusable", ItemUse2.Single = "single", ItemUse2.Solo = "solo", ItemUse2.Curse = "curse", ItemUse2.Bounty = "bounty", ItemUse2.Package = "package", ItemUse2.Candy = "candy", ItemUse2.Candy1 = "candy1", ItemUse2.Candy2 = "candy2", ItemUse2.Chocolate = "chocolate", ItemUse2.Fancy = "fancy", ItemUse2.Paste = "paste", ItemUse2.Smith = "smith", ItemUse2.Cook = "cook", ItemUse2.Mix = "mix", ItemUse2.Matchable = "matchable";
    })(ItemUse || (exports2.ItemUse = ItemUse = {}));
    var isValidItemUse = (0, utils_1.isMemberOfEnum)(ItemUse), parseAccess = function(accessString) {
      var access = accessString.split(",").map(function(p) {
        return p.trim();
      });
      return {
        quest: access.includes("q"),
        gift: access.includes("g"),
        tradeable: access.includes("t"),
        discardable: access.includes("d")
      };
    }, parseItem = function(parts) {
      return Object.assign(Object.assign({
        id: Number(parts[0]),
        name: parts[1],
        descid: parts[2],
        image: parts[3],
        uses: parts[4].split(", ").filter(isValidItemUse)
      }, parseAccess(parts[5])), {
        autosell: Number(parts[6]),
        plural: parts[7]
      });
    };
    function loadItems() {
      var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var raw;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                return _context.next = 2, (0, utils_1.loadMafiaData)("items", lastKnownSize);
              case 2:
                if (raw = _context.sent, raw !== null) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", null);
              case 5:
                return _context.abrupt("return", Object.assign(Object.assign({}, raw), {
                  data: raw.data.filter(function(p) {
                    return p.length > 2;
                  }).map(parseItem)
                }));
              case 6:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    exports2.loadItems = loadItems;
  }
});

// ../../node_modules/data-of-loathing/dist/entityTypes/outfits.js
var require_outfits = __commonJS({
  "../../node_modules/data-of-loathing/dist/entityTypes/outfits.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.loadOutfits = void 0;
    var utils_1 = require_utils3(), parseEquipment = function() {
      var equipmentList = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return equipmentList.trim().split(", ");
    }, parseTreats = function() {
      var treatList = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return treatList.trim().split(", ").filter(function(t) {
        return t !== "none";
      }).map(function(treat) {
        var m = treat.match(/^(.*?) \((\d*\.?\d+)\)$/);
        return m ? {
          item: m[1],
          chance: Number(m[2])
        } : {
          item: treat,
          chance: 1
        };
      });
    }, parseOutfit = function(parts) {
      var _a, _b;
      return {
        id: Number(parts[0]),
        name: parts[1],
        image: parts[2],
        equipment: parseEquipment((_a = parts[3]) !== null && _a !== void 0 ? _a : ""),
        treats: parseTreats(parts[0] === "80" ? "double-ice gum" : (_b = parts[4]) !== null && _b !== void 0 ? _b : "")
      };
    };
    function loadOutfits() {
      var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var raw;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                return _context.next = 2, (0, utils_1.loadMafiaData)("outfits", lastKnownSize);
              case 2:
                if (raw = _context.sent, raw !== null) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", null);
              case 5:
                return _context.abrupt("return", Object.assign(Object.assign({}, raw), {
                  data: raw.data.filter(function(p) {
                    return p.length > 2;
                  }).map(parseOutfit)
                }));
              case 6:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    exports2.loadOutfits = loadOutfits;
  }
});

// ../../node_modules/data-of-loathing/dist/entityTypes/paths.js
var require_paths = __commonJS({
  "../../node_modules/data-of-loathing/dist/entityTypes/paths.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.loadPaths = void 0;
    var utils_1 = require_utils3(), defaultPath = {
      pointsPreference: null,
      maximumPoints: 0,
      bucket: !1,
      stomachCapacity: 15,
      liverCapacity: 14,
      spleenCapacity: 15
    };
    function loadPaths2() {
      var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var raw;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                return _context.next = 2, (0, utils_1.loadMafiaEnum)("net.sourceforge.kolmafia.AscensionPath", lastKnownSize, "Path");
              case 2:
                if (raw = _context.sent, raw !== null) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", null);
              case 5:
                return _context.abrupt("return", Object.assign(Object.assign({}, raw), {
                  data: raw.data.map(function(p) {
                    return Object.assign(Object.assign({}, defaultPath), p);
                  })
                }));
              case 6:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    exports2.loadPaths = loadPaths2;
  }
});

// ../../node_modules/data-of-loathing/dist/entityTypes/skills.js
var require_skills = __commonJS({
  "../../node_modules/data-of-loathing/dist/entityTypes/skills.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    function _regeneratorRuntime() {
      "use strict";
      _regeneratorRuntime = function() {
        return e;
      };
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define2(t2, e2, r2) {
        return Object.defineProperty(t2, e2, { value: r2, enumerable: !0, configurable: !0, writable: !0 }), t2[e2];
      }
      try {
        define2({}, "");
      } catch (t2) {
        define2 = function(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return { type: "normal", arg: t2.call(e2, r2) };
        } catch (t3) {
          return { type: "throw", arg: t3 };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define2(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values2([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define2(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if (c2.type !== "throw") {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && typeof h2 == "object" && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", { value: function(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if (i2 === "throw")
              throw a2;
            return { value: t, done: !0 };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if (n2.method === "next")
              n2.sent = n2._sent = n2.arg;
            else if (n2.method === "throw") {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              n2.method === "return" && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if (p2.type === "normal") {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return { value: p2.arg, done: n2.done };
            }
            p2.type === "throw" && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, n2 === "throw" && e2.iterator.return && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), r2.method === "throw") || n2 !== "return" && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if (i2.type === "throw")
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, r2.method !== "return" && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = { tryLoc: t2[0] };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(!0);
      }
      function values2(e2) {
        if (e2 || e2 === "") {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if (typeof e2.next == "function")
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(typeof e2 + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = typeof t2 == "function" && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || (e2.displayName || e2.name) === "GeneratorFunction");
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define2(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return { __await: t2 };
      }, defineIteratorMethods(AsyncIterator.prototype), define2(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        i2 === void 0 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define2(g, u, "Generator"), define2(g, a, function() {
        return this;
      }), define2(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = !1, next;
          }
          return next.done = !0, next;
        };
      }, e.values = values2, Context.prototype = { constructor: Context, reset: function(e2) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
          for (var r2 in this)
            r2.charAt(0) === "t" && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
      }, stop: function() {
        this.done = !0;
        var t2 = this.tryEntries[0].completion;
        if (t2.type === "throw")
          throw t2.arg;
        return this.rval;
      }, dispatchException: function(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if (i2.tryLoc === "root")
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, !0);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      }, abrupt: function(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && (t2 === "break" || t2 === "continue") && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      }, complete: function(t2, e2) {
        if (t2.type === "throw")
          throw t2.arg;
        return t2.type === "break" || t2.type === "continue" ? this.next = t2.arg : t2.type === "return" ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : t2.type === "normal" && e2 && (this.next = e2), y;
      }, finish: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      }, catch: function(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if (n2.type === "throw") {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      }, delegateYield: function(e2, r2, n2) {
        return this.delegate = { iterator: values2(e2), resultName: r2, nextLoc: n2 }, this.method === "next" && (this.arg = t), y;
      } }, e;
    }
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject2) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject2(e);
          }
        }
        function rejected(value) {
          try {
            step(generator.throw(value));
          } catch (e) {
            reject2(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    exports2.loadSkills = exports2.isSkillPermable = exports2.getMaxSkillLevel = exports2.SkillCategory = void 0;
    var utils_1 = require_utils3(), SkillCategory;
    (function(SkillCategory2) {
      SkillCategory2[SkillCategory2.Passive = 0] = "Passive", SkillCategory2[SkillCategory2.NoncombatItemSummon = 1] = "NoncombatItemSummon", SkillCategory2[SkillCategory2.NoncombatHealing = 2] = "NoncombatHealing", SkillCategory2[SkillCategory2.NoncombatNonShruggableEffect = 3] = "NoncombatNonShruggableEffect", SkillCategory2[SkillCategory2.NoncombatShruggableEffect = 4] = "NoncombatShruggableEffect", SkillCategory2[SkillCategory2.Combat = 5] = "Combat", SkillCategory2[SkillCategory2.OneAtATimeNoncombatSong = 6] = "OneAtATimeNoncombatSong", SkillCategory2[SkillCategory2.CombatNoncombatHealing = 7] = "CombatNoncombatHealing", SkillCategory2[SkillCategory2.CombatPassive = 8] = "CombatPassive", SkillCategory2[SkillCategory2.OneAtATimeNoncombatExpression = 9] = "OneAtATimeNoncombatExpression", SkillCategory2[SkillCategory2.OneAtATimeNoncombatWalk = 10] = "OneAtATimeNoncombatWalk", SkillCategory2[SkillCategory2.NoncombatHealingPassive = 11] = "NoncombatHealingPassive";
    })(SkillCategory || (exports2.SkillCategory = SkillCategory = {}));
    var isValidType = (0, utils_1.isMemberOfEnum)(SkillCategory), getMaxSkillLevel = function(_ref) {
      var id = _ref.id;
      switch (id) {
        case 46:
          return 10;
        case 47:
          return 10;
        case 48:
          return 10;
        case 107:
          return 9;
        case 117:
          return 11;
        case 188:
          return 13;
        case 118:
          return 7;
        case 121:
          return 6;
        case 128:
          return 6;
        case 134:
          return 6;
        case 135:
          return 2;
        case 144:
          return 5;
        case 180:
          return 4;
        case 7254:
          return 3;
        default:
          return 0;
      }
    };
    exports2.getMaxSkillLevel = getMaxSkillLevel;
    var isSkillPermable2 = function(_ref2) {
      var id = _ref2.id;
      if (id < 10 || id > 20 && id <= 27 || id > 63 && id <= 73 || id > 7175 && id < 7181)
        return !1;
      switch (id) {
        case 91:
        case 116:
          return !1;
        case 49:
        case 50:
        case 51:
        case 52:
        case 3024:
          return !1;
        case 6019:
          return !1;
        case 17047:
          return !0;
        case 156:
          return !1;
        case 174:
          return !1;
        case 218:
        case 219:
        case 220:
          return !1;
        case 222:
          return !1;
        case 7254:
          return !0;
      }
      switch (Math.floor(id / 1e3)) {
        case 7:
        case 8:
        case 11:
        case 12:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 27:
        case 28:
        case 29:
        case 30:
          return !1;
      }
      return !0;
    };
    exports2.isSkillPermable = isSkillPermable2;
    var parseSkill = function(parts) {
      return {
        id: Number(parts[0]),
        name: parts[1],
        image: parts[2],
        category: isValidType(Number(parts[3])) ? Number(parts[3]) : SkillCategory.Passive,
        mpCost: Number(parts[4]),
        duration: Number(parts[5]),
        level: parts[6] ? Number(parts[6]) : 0
      };
    };
    function loadSkills() {
      var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return __awaiter(this, void 0, void 0, /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var raw;
        return _regeneratorRuntime().wrap(function(_context) {
          for (; ; )
            switch (_context.prev = _context.next) {
              case 0:
                return _context.next = 2, (0, utils_1.loadMafiaData)("classskills", lastKnownSize);
              case 2:
                if (raw = _context.sent, raw !== null) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", null);
              case 5:
                return _context.abrupt("return", Object.assign(Object.assign({}, raw), {
                  data: raw.data.filter(function(p) {
                    return p.length > 2;
                  }).map(parseSkill)
                }));
              case 6:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
    }
    exports2.loadSkills = loadSkills;
  }
});

// ../../node_modules/data-of-loathing/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/data-of-loathing/dist/index.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      k2 === void 0 && (k2 = k);
      var desc = Object.getOwnPropertyDescriptor(m, k);
      (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) && (desc = {
        enumerable: !0,
        get: function() {
          return m[k];
        }
      }), Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      k2 === void 0 && (k2 = k), o[k2] = m[k];
    }), __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p) && __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", {
      value: !0
    });
    __exportStar(require_classes2(), exports2);
    __exportStar(require_effects(), exports2);
    __exportStar(require_familiars(), exports2);
    __exportStar(require_items(), exports2);
    __exportStar(require_outfits(), exports2);
    __exportStar(require_paths(), exports2);
    __exportStar(require_skills(), exports2);
  }
});

// src/greenbox.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/index.ts
init_kolmafia_polyfill();

// ../../node_modules/jsoncrush/JSONCrush.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var JSONCrush_default = {
  crush: function(string) {
    for (var maxSubstringLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50, delimiter = "", JSCrush = function(string2, replaceCharacters) {
      for (var replaceCharacterPos = replaceCharacters.length, splitString = "", ByteLength = function(string3) {
        return encodeURI(encodeURIComponent(string3)).replace(/%../g, "i").length;
      }, HasUnmatchedSurrogate = function(string3) {
        var c1 = string3.charCodeAt(0), c2 = string3.charCodeAt(string3.length - 1);
        return c1 >= 56320 && c1 <= 57343 || c2 >= 55296 && c2 <= 56319;
      }, substringCount = {}, substringLength = 2; substringLength < maxSubstringLength; substringLength++)
        for (var i2 = 0; i2 < string2.length - substringLength; ++i2) {
          var substring = string2.substr(i2, substringLength);
          if (!substringCount[substring] && !HasUnmatchedSurrogate(substring)) {
            for (var count = 1, substringPos = string2.indexOf(substring, i2 + substringLength); substringPos >= 0; ++count)
              substringPos = string2.indexOf(substring, substringPos + substringLength);
            count > 1 && (substringCount[substring] = count);
          }
        }
      for (; ; ) {
        for (; replaceCharacterPos-- && string2.includes(replaceCharacters[replaceCharacterPos]); )
          ;
        if (replaceCharacterPos < 0)
          break;
        var replaceCharacter = replaceCharacters[replaceCharacterPos], bestSubstring = void 0, bestLengthDelta = 0, replaceByteLength = ByteLength(replaceCharacter);
        for (var _substring in substringCount) {
          var _count = substringCount[_substring], lengthDelta = (_count - 1) * ByteLength(_substring) - (_count + 1) * replaceByteLength;
          splitString.length || (lengthDelta -= ByteLength(delimiter)), lengthDelta <= 0 ? delete substringCount[_substring] : lengthDelta > bestLengthDelta && (bestSubstring = _substring, bestLengthDelta = lengthDelta);
        }
        if (!bestSubstring)
          break;
        string2 = string2.split(bestSubstring).join(replaceCharacter) + replaceCharacter + bestSubstring, splitString = replaceCharacter + splitString;
        var newSubstringCount = {};
        for (var _substring2 in substringCount) {
          for (var newSubstring = _substring2.split(bestSubstring).join(replaceCharacter), _count2 = 0, _i = string2.indexOf(newSubstring); _i >= 0; ++_count2)
            _i = string2.indexOf(newSubstring, _i + newSubstring.length);
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
  if (forward)
    for (var i = 0; i < swapGroups.length; ++i)
      string = swapInternal(string, swapGroups[i]);
  else
    for (var _i3 = swapGroups.length; _i3--; )
      string = swapInternal(string, swapGroups[_i3]);
  return string;
};

// ../greenbox-data/lib/familiars.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/utils.ts
init_kolmafia_polyfill();
var tuple = function(args) {
  return args;
}, arrayOf = function(items) {
  return Array.isArray(items) ? items : [items];
};

// ../greenbox-data/lib/familiars.ts
var FamiliarStatus = /* @__PURE__ */ function(FamiliarStatus2) {
  return FamiliarStatus2[FamiliarStatus2.NONE = 0] = "NONE", FamiliarStatus2[FamiliarStatus2.HATCHLING = 1] = "HATCHLING", FamiliarStatus2[FamiliarStatus2.TERRARIUM = 2] = "TERRARIUM", FamiliarStatus2;
}({}), compressFamiliars = function(familiars) {
  return familiars.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, familiar) {
    return "".concat(r).concat("0".repeat(familiar[0] - r.replace(/\*/g, "").length - 1)).concat(familiar[1]).concat(familiar[2] ? "*" : "");
  }, "").replace(/0+$/, "");
};

// ../greenbox-data/lib/iotms.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/iotms.ts
init_kolmafia_polyfill();
var iotms_default = [
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
    year: 200,
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
    item: "Jarlsberg's Pan"
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
  }
  // boxed Apriling band helmet
];

// ../greenbox-data/lib/iotms.ts
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
function _defineProperty(obj, key, value) {
  return key = _toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return typeof i == "symbol" ? i : String(i);
}
function _toPrimitive(t, r) {
  if (typeof t != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var IotMStatus = /* @__PURE__ */ function(IotMStatus2) {
  return IotMStatus2[IotMStatus2.NONE = 0] = "NONE", IotMStatus2[IotMStatus2.BOXED = 1] = "BOXED", IotMStatus2[IotMStatus2.BOUND = 2] = "BOUND", IotMStatus2;
}({});
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

// ../greenbox-data/lib/items.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/items.ts
init_kolmafia_polyfill();
var specialItems = [
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
  3140,
  // old soft shoes
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
  3390,
  // Staff of the Deepest Freeze
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

// ../greenbox-data/lib/items.ts
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
}
function _arrayLikeToArray2(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var ItemStatus = /* @__PURE__ */ function(ItemStatus2) {
  return ItemStatus2[ItemStatus2.NONE = 0] = "NONE", ItemStatus2[ItemStatus2.HAVE = 1] = "HAVE", ItemStatus2;
}({}), compressItems = function(items) {
  return items.filter(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), q = _ref2[1];
    return q > 0;
  }).map(function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), id = _ref4[0], q = _ref4[1];
    return "".concat(id).concat(q > 1 ? ":".concat(q) : "");
  }).sort().join(",");
};

// ../greenbox-data/lib/meta.ts
init_kolmafia_polyfill();
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
}
function _arrayLikeToArray3(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit2(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
var compressMeta = function(meta) {
  return Object.entries(meta).map(function(_ref) {
    var _ref2 = _slicedToArray2(_ref, 2), k = _ref2[0], v = _ref2[1];
    return "".concat(k, ":").concat(v);
  }).join(",");
};

// ../greenbox-data/lib/paths.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/paths.ts
init_kolmafia_polyfill();
var ItemId = /* @__PURE__ */ function(ItemId2) {
  return ItemId2[ItemId2.ChiffonSC = 11028] = "ChiffonSC", ItemId2[ItemId2.ChiffonTT = 11029] = "ChiffonTT", ItemId2[ItemId2.ChiffonPM = 11030] = "ChiffonPM", ItemId2[ItemId2.ChiffonSA = 11031] = "ChiffonSA", ItemId2[ItemId2.ChiffonDB = 11032] = "ChiffonDB", ItemId2[ItemId2.ChiffonAT = 11033] = "ChiffonAT", ItemId2[ItemId2.LoofahSC = 10130] = "LoofahSC", ItemId2[ItemId2.LoofahTT = 10131] = "LoofahTT", ItemId2[ItemId2.LoofahPM = 10132] = "LoofahPM", ItemId2[ItemId2.LoofahSA = 10133] = "LoofahSA", ItemId2[ItemId2.LoofahDB = 10134] = "LoofahDB", ItemId2[ItemId2.LoofahAT = 10135] = "LoofahAT", ItemId2[ItemId2.VelourSC = 10114] = "VelourSC", ItemId2[ItemId2.VelourTT = 10115] = "VelourTT", ItemId2[ItemId2.VelourPM = 10116] = "VelourPM", ItemId2[ItemId2.VelourSA = 10117] = "VelourSA", ItemId2[ItemId2.VelourDB = 10118] = "VelourDB", ItemId2[ItemId2.VelourAT = 10119] = "VelourAT", ItemId2[ItemId2.ParaffinSC = 10098] = "ParaffinSC", ItemId2[ItemId2.ParaffinTT = 10099] = "ParaffinTT", ItemId2[ItemId2.ParaffinPM = 10100] = "ParaffinPM", ItemId2[ItemId2.ParaffinSA = 10101] = "ParaffinSA", ItemId2[ItemId2.ParaffinDB = 10102] = "ParaffinDB", ItemId2[ItemId2.ParaffinAT = 10103] = "ParaffinAT", ItemId2[ItemId2.ChalkSC = 10082] = "ChalkSC", ItemId2[ItemId2.ChalkTT = 10083] = "ChalkTT", ItemId2[ItemId2.ChalkPM = 10084] = "ChalkPM", ItemId2[ItemId2.ChalkSA = 10085] = "ChalkSA", ItemId2[ItemId2.ChalkDB = 10086] = "ChalkDB", ItemId2[ItemId2.ChalkAT = 10087] = "ChalkAT", ItemId2[ItemId2.GabardineSC = 8120] = "GabardineSC", ItemId2[ItemId2.GabardineTT = 8121] = "GabardineTT", ItemId2[ItemId2.GabardinePM = 8122] = "GabardinePM", ItemId2[ItemId2.GabardineSA = 8123] = "GabardineSA", ItemId2[ItemId2.GabardineDB = 8124] = "GabardineDB", ItemId2[ItemId2.GabardineAT = 8125] = "GabardineAT", ItemId2[ItemId2.AerogelSC = 8106] = "AerogelSC", ItemId2[ItemId2.AerogelTT = 8107] = "AerogelTT", ItemId2[ItemId2.AerogelPM = 8108] = "AerogelPM", ItemId2[ItemId2.AerogelSA = 8109] = "AerogelSA", ItemId2[ItemId2.AerogelDB = 8110] = "AerogelDB", ItemId2[ItemId2.AerogelAT = 8111] = "AerogelAT", ItemId2[ItemId2.WickerSC = 8092] = "WickerSC", ItemId2[ItemId2.WickerTT = 8093] = "WickerTT", ItemId2[ItemId2.WickerPM = 8094] = "WickerPM", ItemId2[ItemId2.WickerSA = 8095] = "WickerSA", ItemId2[ItemId2.WickerDB = 8096] = "WickerDB", ItemId2[ItemId2.WickerAT = 8097] = "WickerAT", ItemId2[ItemId2.PolyesterSC = 7985] = "PolyesterSC", ItemId2[ItemId2.PolyesterTT = 7986] = "PolyesterTT", ItemId2[ItemId2.PolyesterPM = 7987] = "PolyesterPM", ItemId2[ItemId2.PolyesterSA = 7988] = "PolyesterSA", ItemId2[ItemId2.PolyesterDB = 7989] = "PolyesterDB", ItemId2[ItemId2.PolyesterAT = 7990] = "PolyesterAT", ItemId2[ItemId2.CeramicSC = 11020] = "CeramicSC", ItemId2[ItemId2.CeramicTT = 11021] = "CeramicTT", ItemId2[ItemId2.CeramicPM = 11022] = "CeramicPM", ItemId2[ItemId2.CeramicSA = 11023] = "CeramicSA", ItemId2[ItemId2.CeramicDB = 11024] = "CeramicDB", ItemId2[ItemId2.CeramicAT = 11025] = "CeramicAT", ItemId2[ItemId2.FlagstoneSC = 10138] = "FlagstoneSC", ItemId2[ItemId2.FlagstoneTT = 10139] = "FlagstoneTT", ItemId2[ItemId2.FlagstonePM = 10140] = "FlagstonePM", ItemId2[ItemId2.FlagstoneSA = 10141] = "FlagstoneSA", ItemId2[ItemId2.FlagstoneDB = 10142] = "FlagstoneDB", ItemId2[ItemId2.FlagstoneAT = 10143] = "FlagstoneAT", ItemId2[ItemId2.StainedGlassSC = 10122] = "StainedGlassSC", ItemId2[ItemId2.StainedGlassTT = 10123] = "StainedGlassTT", ItemId2[ItemId2.StainedGlassPM = 10124] = "StainedGlassPM", ItemId2[ItemId2.StainedGlassSA = 10125] = "StainedGlassSA", ItemId2[ItemId2.StainedGlassDB = 10126] = "StainedGlassDB", ItemId2[ItemId2.StainedGlassAT = 10127] = "StainedGlassAT", ItemId2[ItemId2.TerraCottaSC = 10106] = "TerraCottaSC", ItemId2[ItemId2.TerraCottaTT = 10107] = "TerraCottaTT", ItemId2[ItemId2.TerraCottaPM = 10108] = "TerraCottaPM", ItemId2[ItemId2.TerraCottaSA = 10109] = "TerraCottaSA", ItemId2[ItemId2.TerraCottaDB = 10110] = "TerraCottaDB", ItemId2[ItemId2.TerraCottaAT = 10111] = "TerraCottaAT", ItemId2[ItemId2.MarbleSC = 10090] = "MarbleSC", ItemId2[ItemId2.MarbleTT = 10091] = "MarbleTT", ItemId2[ItemId2.MarblePM = 10092] = "MarblePM", ItemId2[ItemId2.MarbleSA = 10093] = "MarbleSA", ItemId2[ItemId2.MarbleDB = 10094] = "MarbleDB", ItemId2[ItemId2.MarbleAT = 10095] = "MarbleAT", ItemId2[ItemId2.FiberglassSC = 8127] = "FiberglassSC", ItemId2[ItemId2.FiberglassTT = 8128] = "FiberglassTT", ItemId2[ItemId2.FiberglassPM = 8129] = "FiberglassPM", ItemId2[ItemId2.FiberglassSA = 8130] = "FiberglassSA", ItemId2[ItemId2.FiberglassDB = 8131] = "FiberglassDB", ItemId2[ItemId2.FiberglassAT = 8132] = "FiberglassAT", ItemId2[ItemId2.WroughtIronSC = 8113] = "WroughtIronSC", ItemId2[ItemId2.WroughtIronTT = 8114] = "WroughtIronTT", ItemId2[ItemId2.WroughtIronPM = 8115] = "WroughtIronPM", ItemId2[ItemId2.WroughtIronSA = 8116] = "WroughtIronSA", ItemId2[ItemId2.WroughtIronDB = 8117] = "WroughtIronDB", ItemId2[ItemId2.WroughtIronAT = 8118] = "WroughtIronAT", ItemId2[ItemId2.BakeliteSC = 8099] = "BakeliteSC", ItemId2[ItemId2.BakeliteTT = 8100] = "BakeliteTT", ItemId2[ItemId2.BakelitePM = 8101] = "BakelitePM", ItemId2[ItemId2.BakeliteSA = 8102] = "BakeliteSA", ItemId2[ItemId2.BakeliteDB = 8103] = "BakeliteDB", ItemId2[ItemId2.BakeliteAT = 8104] = "BakeliteAT", ItemId2[ItemId2.PorcelainSC = 7991] = "PorcelainSC", ItemId2[ItemId2.PorcelainTT = 7992] = "PorcelainTT", ItemId2[ItemId2.PorcelainPM = 7993] = "PorcelainPM", ItemId2[ItemId2.PorcelainSA = 7994] = "PorcelainSA", ItemId2[ItemId2.PorcelainDB = 7995] = "PorcelainDB", ItemId2[ItemId2.PorcelainAT = 7996] = "PorcelainAT", ItemId2[ItemId2.StainlessSC = 1224] = "StainlessSC", ItemId2[ItemId2.StainlessTT = 1225] = "StainlessTT", ItemId2[ItemId2.StainlessPM = 1226] = "StainlessPM", ItemId2[ItemId2.StainlessSA = 1227] = "StainlessSA", ItemId2[ItemId2.StainlessDB = 1228] = "StainlessDB", ItemId2[ItemId2.StainlessAT = 1229] = "StainlessAT", ItemId2[ItemId2.PlexiSC = 1230] = "PlexiSC", ItemId2[ItemId2.PlexiTT = 1231] = "PlexiTT", ItemId2[ItemId2.PlexiPM = 1232] = "PlexiPM", ItemId2[ItemId2.PlexiSA = 1233] = "PlexiSA", ItemId2[ItemId2.PlexiDB = 1234] = "PlexiDB", ItemId2[ItemId2.PlexiAT = 1235] = "PlexiAT", ItemId2[ItemId2.BrimstoneSC = 2814] = "BrimstoneSC", ItemId2[ItemId2.BrimstoneTT = 2815] = "BrimstoneTT", ItemId2[ItemId2.BrimstonePM = 2817] = "BrimstonePM", ItemId2[ItemId2.BrimstoneSA = 2818] = "BrimstoneSA", ItemId2[ItemId2.BrimstoneDB = 2816] = "BrimstoneDB", ItemId2[ItemId2.BrimstoneAT = 2813] = "BrimstoneAT", ItemId2[ItemId2.PickyTweezers = 7936] = "PickyTweezers", ItemId2[ItemId2.AdventurerBobblehead = 9084] = "AdventurerBobblehead", ItemId2[ItemId2.PerfectlyFairCoin = 9526] = "PerfectlyFairCoin", ItemId2[ItemId2.GarlandOfGreatness = 9910] = "GarlandOfGreatness", ItemId2[ItemId2.Ring = 10252] = "Ring", ItemId2[ItemId2.RedPlumbersBoots = 10501] = "RedPlumbersBoots", ItemId2[ItemId2.QuantumOfFamiliar = 10758] = "QuantumOfFamiliar", ItemId2[ItemId2.TheBigBookOfEverySkill = 10917] = "TheBigBookOfEverySkill", ItemId2[ItemId2.StuffedDinosaur = 10949] = "StuffedDinosaur", ItemId2;
}(ItemId || {}), Thwaitgold = /* @__PURE__ */ function(Thwaitgold2) {
  return Thwaitgold2[Thwaitgold2.Bee = 5141] = "Bee", Thwaitgold2[Thwaitgold2.Grasshopper = 5222] = "Grasshopper", Thwaitgold2[Thwaitgold2.Butterfly = 5392] = "Butterfly", Thwaitgold2[Thwaitgold2.StagBeetle = 5572] = "StagBeetle", Thwaitgold2[Thwaitgold2.WoollyBear = 5694] = "WoollyBear", Thwaitgold2[Thwaitgold2.Maggot = 5773] = "Maggot", Thwaitgold2[Thwaitgold2.PrayingMantis = 6045] = "PrayingMantis", Thwaitgold2[Thwaitgold2.Firefly = 6298] = "Firefly", Thwaitgold2[Thwaitgold2.GoliathBeetle = 6547] = "GoliathBeetle", Thwaitgold2[Thwaitgold2.Bookworm = 6676] = "Bookworm", Thwaitgold2[Thwaitgold2.Ant = 6899] = "Ant", Thwaitgold2[Thwaitgold2.Dragonfly = 7249] = "Dragonfly", Thwaitgold2[Thwaitgold2.WheelBug = 7498] = "WheelBug", Thwaitgold2[Thwaitgold2.Spider = 7668] = "Spider", Thwaitgold2[Thwaitgold2.Nit = 7935] = "Nit", Thwaitgold2[Thwaitgold2.ScarabBeetle = 8087] = "ScarabBeetle", Thwaitgold2[Thwaitgold2.Caterpillar = 8296] = "Caterpillar", Thwaitgold2[Thwaitgold2.Termite = 8556] = "Termite", Thwaitgold2[Thwaitgold2.Scorpion = 8984] = "Scorpion", Thwaitgold2[Thwaitgold2.Moth = 9031] = "Moth", Thwaitgold2[Thwaitgold2.Cockroach = 9099] = "Cockroach", Thwaitgold2[Thwaitgold2.Amoeba = 9346] = "Amoeba", Thwaitgold2[Thwaitgold2.Bug = 9488] = "Bug", Thwaitgold2[Thwaitgold2.TimeFly = 9525] = "TimeFly", Thwaitgold2[Thwaitgold2.Metabug = 9758] = "Metabug", Thwaitgold2[Thwaitgold2.Chigger = 9917] = "Chigger", Thwaitgold2[Thwaitgold2.MaskedHunter = 9941] = "MaskedHunter", Thwaitgold2[Thwaitgold2.Mosquito = 10184] = "Mosquito", Thwaitgold2[Thwaitgold2.Nymph = 10253] = "Nymph", Thwaitgold2[Thwaitgold2.BombardierBeetle = 10319] = "BombardierBeetle", Thwaitgold2[Thwaitgold2.BuzzyBeetle = 10470] = "BuzzyBeetle", Thwaitgold2[Thwaitgold2.KeyholeSpider = 10570] = "KeyholeSpider", Thwaitgold2[Thwaitgold2.Slug = 10601] = "Slug", Thwaitgold2[Thwaitgold2.ListeningBug = 10736] = "ListeningBug", Thwaitgold2[Thwaitgold2.QuantumBug = 10757] = "QuantumBug", Thwaitgold2[Thwaitgold2.FireBeetle = 10791] = "FireBeetle", Thwaitgold2[Thwaitgold2.Protozoa = 10894] = "Protozoa", Thwaitgold2[Thwaitgold2.Harvestman = 10918] = "Harvestman", Thwaitgold2[Thwaitgold2.MosquitoInAmber = 10950] = "MosquitoInAmber", Thwaitgold2[Thwaitgold2.AntiMoth = 11166] = "AntiMoth", Thwaitgold2[Thwaitgold2.SplendorBeetle = 11255] = "SplendorBeetle", Thwaitgold2[Thwaitgold2.Fairyfly = 11326] = "Fairyfly", Thwaitgold2[Thwaitgold2.WolfSpider = 11563] = "WolfSpider", Thwaitgold2;
}(Thwaitgold || {}), SOFTCORE = -3, HARDCORE = -2, paths_default = [{
  id: SOFTCORE,
  name: "Softcore",
  image: "itemimages/karma.gif",
  items: [],
  equipment: [ItemId.PolyesterSC, ItemId.PolyesterTT, ItemId.PolyesterPM, ItemId.PolyesterSA, ItemId.PolyesterDB, ItemId.PolyesterAT, ItemId.WickerSC, ItemId.WickerTT, ItemId.WickerPM, ItemId.WickerSA, ItemId.WickerDB, ItemId.WickerAT, ItemId.AerogelSC, ItemId.AerogelTT, ItemId.AerogelPM, ItemId.AerogelSA, ItemId.AerogelDB, ItemId.AerogelAT, ItemId.GabardineSC, ItemId.GabardineTT, ItemId.GabardinePM, ItemId.GabardineSA, ItemId.GabardineDB, ItemId.GabardineAT, ItemId.ChalkSC, ItemId.ChalkTT, ItemId.ChalkPM, ItemId.ChalkSA, ItemId.ChalkDB, ItemId.ChalkAT, ItemId.ParaffinSC, ItemId.ParaffinTT, ItemId.ParaffinPM, ItemId.ParaffinSA, ItemId.ParaffinDB, ItemId.ParaffinAT, ItemId.VelourSC, ItemId.VelourTT, ItemId.VelourPM, ItemId.VelourSA, ItemId.VelourDB, ItemId.VelourAT, ItemId.LoofahSC, ItemId.LoofahTT, ItemId.LoofahPM, ItemId.LoofahSA, ItemId.LoofahDB, ItemId.LoofahAT, ItemId.ChiffonSC, ItemId.ChiffonTT, ItemId.ChiffonPM, ItemId.ChiffonSA, ItemId.ChiffonDB, ItemId.ChiffonAT],
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
  equipment: [ItemId.StainlessSC, ItemId.StainlessTT, ItemId.StainlessPM, ItemId.StainlessSA, ItemId.StainlessDB, ItemId.StainlessAT, ItemId.PorcelainSC, ItemId.PorcelainTT, ItemId.PorcelainPM, ItemId.PorcelainSA, ItemId.PorcelainDB, ItemId.PorcelainAT, ItemId.BakeliteSC, ItemId.BakeliteTT, ItemId.BakelitePM, ItemId.BakeliteSA, ItemId.BakeliteDB, ItemId.BakeliteAT, ItemId.WroughtIronSC, ItemId.WroughtIronTT, ItemId.WroughtIronPM, ItemId.WroughtIronSA, ItemId.WroughtIronDB, ItemId.WroughtIronAT, ItemId.FiberglassSC, ItemId.FiberglassTT, ItemId.FiberglassPM, ItemId.FiberglassSA, ItemId.FiberglassDB, ItemId.FiberglassAT, ItemId.MarbleSC, ItemId.MarbleTT, ItemId.MarblePM, ItemId.MarbleSA, ItemId.MarbleDB, ItemId.MarbleAT, ItemId.TerraCottaSC, ItemId.TerraCottaTT, ItemId.TerraCottaPM, ItemId.TerraCottaSA, ItemId.TerraCottaDB, ItemId.TerraCottaAT, ItemId.StainedGlassSC, ItemId.StainedGlassTT, ItemId.StainedGlassPM, ItemId.StainedGlassSA, ItemId.StainedGlassDB, ItemId.StainedGlassAT, ItemId.FlagstoneSC, ItemId.FlagstoneTT, ItemId.FlagstonePM, ItemId.FlagstoneSA, ItemId.FlagstoneDB, ItemId.FlagstoneAT, ItemId.CeramicSC, ItemId.CeramicTT, ItemId.CeramicPM, ItemId.CeramicSA, ItemId.CeramicDB, ItemId.CeramicAT],
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
  name: "Crazy Random Summer",
  image: "itemimages/dice.gif",
  items: [Thwaitgold.Caterpillar],
  equipment: [],
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
}];

// ../greenbox-data/lib/paths.ts
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
}
function _arrayLikeToArray4(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function loadPaths() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, size = JSON.stringify(paths_default).length;
  return size === lastKnownSize ? null : {
    data: paths_default,
    size: size
  };
}
var pointsRadix = 32, tattooLevelRadix = 16, compressPaths = function(paths) {
  return paths.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(acc, path) {
    var _acc = _slicedToArray3(acc, 2), r = _acc[0], currentId = _acc[1];
    return path[0] > currentId && (r += ",".repeat(path[0] - currentId), currentId = path[0]), r += path[1].toString(pointsRadix), r += path[2].join(""), r += path[3].join(""), r += path[4].map(function(i) {
      return i.toString(tattooLevelRadix);
    }).join(""), tuple([r, currentId]);
  }, tuple(["", -3]))[0].replace(/0+($|,)/, "$1");
};

// ../greenbox-data/lib/skills.ts
init_kolmafia_polyfill();
var SkillStatus = /* @__PURE__ */ function(SkillStatus2) {
  return SkillStatus2[SkillStatus2.NONE = 0] = "NONE", SkillStatus2[SkillStatus2.SOFTCORE = 1] = "SOFTCORE", SkillStatus2[SkillStatus2.HARDCORE = 2] = "HARDCORE", SkillStatus2;
}({});
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

// ../greenbox-data/lib/tattoos.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/tattoos.ts
init_kolmafia_polyfill();
var tattoos_default = [{
  name: "8-Bit Finery",
  image: "swordtat",
  outfit: 15
}, {
  name: "Aeroutfit",
  image: "aerotat",
  outfit: 118
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
  image: "dv_tat2",
  misc: 12
}, {
  name: "Mark of the Skeleton",
  image: "dv_tat3",
  misc: 13
}, {
  name: "Mark of the Vampire",
  image: "dv_tat4",
  misc: 14
}, {
  name: "Mark of the Werewolf",
  image: "dv_tat5",
  misc: 15
}, {
  name: "Mark of the Zombie",
  image: "dv_tat6",
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
}];

// ../greenbox-data/lib/tattoos.ts
var OutfitTattooStatus = /* @__PURE__ */ function(OutfitTattooStatus2) {
  return OutfitTattooStatus2[OutfitTattooStatus2.NONE = 0] = "NONE", OutfitTattooStatus2[OutfitTattooStatus2.HAVE_OUTFIT = 1] = "HAVE_OUTFIT", OutfitTattooStatus2[OutfitTattooStatus2.HAVE = 2] = "HAVE", OutfitTattooStatus2;
}({});
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
function getOutfitTattoos(tattoos) {
  return tattoos.filter(isOutfitTattoo).sort(function(a, b) {
    return a.outfit - b.outfit;
  });
}
function getMiscTattoos(tattoos) {
  return tattoos.filter(isMiscTattoo).sort(function(a, b) {
    return a.misc - b.misc;
  });
}
var tattooLevelRadix2 = 32, compressTattoos = function(tattoos) {
  return tattoos.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, tattoo) {
    return "".concat(r).concat("0".repeat(tattoo[0] - r.length - 1)).concat(tattoo[1].toString(tattooLevelRadix2));
  }, "").replace(/0+$/, "");
};

// ../greenbox-data/lib/trophies.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/trophies.ts
init_kolmafia_polyfill();
var trophies_default = [{
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
}];

// ../greenbox-data/lib/trophies.ts
var TrophyStatus = /* @__PURE__ */ function(TrophyStatus2) {
  return TrophyStatus2[TrophyStatus2.NONE = 0] = "NONE", TrophyStatus2[TrophyStatus2.HAVE = 1] = "HAVE", TrophyStatus2;
}({});
function loadTrophies() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, size = JSON.stringify(trophies_default).length;
  return size === lastKnownSize ? null : {
    data: trophies_default,
    size: size
  };
}
var compressTrophies = function(trophies) {
  return trophies.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, trophy) {
    return "".concat(r).concat("0".repeat(trophy[0] - r.length - 1)).concat(trophy[1]);
  }, "").replace(/0+$/, "");
};

// ../greenbox-data/lib/index.ts
var import_data_of_loathing = __toESM(require_dist());

// ../greenbox-data/lib/types.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/index.ts
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
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");

// ../../node_modules/libram/dist/propertyTyping.js
init_kolmafia_polyfill();

// ../../node_modules/libram/dist/propertyTypes.js
init_kolmafia_polyfill();
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "booPeakLit", "bootsCharged", "breakfastCompleted", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "implementGlitchItem", "intenseCurrents", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_aprilShower", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboTraining", "_crimboTree", "_cursedKegUsed", "_cursedMicrowaveUsed", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pingPongGame", "_pirateBellowUsed", "_pirateForkUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_seaJellyHarvested", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableStoreCredits", "availableSwagger", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "cocktailSummons", "commerceGhostCombats", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "daycareEquipment", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "jarlsbergPoints", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniMartinisDrunk", "moleTunnelLevel", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "pendingMapReflections", "pingpongSkill", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "poolSharkCount", "poolSkill", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seaodesFound", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_ancestralRecallCasts", "_antihangoverBonus", "_astralDrops", "_augSkillsCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_cloversPurchased", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_cookbookbatCrafting", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_dailySpecialPrice", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_edDefeats", "_edLashCount", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayflowerDrops", "_mayflySummons", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_miniMartiniDrops", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_pieDrops", "_piePartsCount", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed"], monsterProperties = ["beGregariousMonster", "cameraMonster", "chateauMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_voteMonster"], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "commerceGhostItem", "counterScript", "copperheadClubHazard", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "doctorBagQuestItem", "dolphinItem", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "extraCosmeticModifiers", "familiarScript", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestBooze", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "mayoInMouth", "mayoMinderSetting", "merkinQuestPath", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mpAutoRecoveryItems", "muffinOnOrder", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusDesiredArtifact", "rufusDesiredItems", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shenQuestItem", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trainsetConfiguration", "trapperOre", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_dailySpecial", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatStarted", "_lastPirateRealmIsland", "_locketMonstersFought", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_roboDrinks", "_roninStoragePulls", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505"], familiarProperties = ["commaFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];

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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty2(obj, key, value) {
  return key = _toPropertyKey2(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return typeof i == "symbol" ? i : String(i);
}
function _toPrimitive2(t, r) {
  if (typeof t != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
}
function _arrayLikeToArray5(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit4(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia.getProperty)(property);
    return default_ !== void 0 && value === "" ? default_ : transform(value, property);
  };
}, createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value) {
    if (value === "")
      return null;
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
      return value;
  }
  return _default instanceof import_kolmafia.Location ? getLocation(property, _default) : _default instanceof import_kolmafia.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia.Stat ? getStat(property, _default) : _default instanceof import_kolmafia.Phylum ? getPhylum(property, _default) : typeof _default == "boolean" ? value === "true" ? !0 : value === "false" ? !1 : _default : typeof _default == "number" ? value === "" ? _default : parseInt(value) : value === "" ? _default === void 0 ? "" : _default : value;
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  return (0, import_kolmafia.setProperty)(property, stringValue), value;
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray4(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
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
          value === PropertiesManager2.EMPTY_PREFERENCE ? (0, import_kolmafia.removeProperty)(property) : value ? _set(property, value) : _set(property, "");
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function() {
      setProperties(this.properties);
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
      if (max < min)
        return !1;
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
      if (thisProps.length !== otherProps.size)
        return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray4(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return !1;
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
  }]), PropertiesManager2;
}();
_defineProperty2(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

// ../../node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");

// ../../node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray6(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
}
function _arrayLikeToArray6(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function chunk(array, chunkSize) {
  for (var result = [], i = 0; i < array.length; i += chunkSize)
    result.push(array.slice(i, i + chunkSize));
  return result;
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
  var map2 = /* @__PURE__ */ new Map();
  return array.forEach(function(item) {
    map2.set(item, (map2.get(item) || 0) + 1);
  }), map2;
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
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    args[_key - 1] = arguments[_key];
  return typeof delayedObject == "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
function makeByXFunction(source) {
  return function(options) {
    var _options$val, val = undelay(source);
    return "default" in options ? (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default : options[val];
  };
}
function flat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, flatArray = [], _iterator3 = _createForOfIteratorHelper2(arr), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var item = _step3.value;
      Array.isArray(item) && depth > 0 ? flatArray = flatArray.concat(flat(item, depth - 1)) : flatArray.push(item);
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
}, createSingleConstant = function(Type) {
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
  return tagFunction.none = Type.none, tagFunction;
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
}, $bounty = createSingleConstant(import_kolmafia2.Bounty), $bounties = createPluralConstant(import_kolmafia2.Bounty), $class = createSingleConstant(import_kolmafia2.Class), $classes = createPluralConstant(import_kolmafia2.Class), $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster), $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster), $effect = createSingleConstant(import_kolmafia2.Effect), $effects = createPluralConstant(import_kolmafia2.Effect), $element = createSingleConstant(import_kolmafia2.Element), $elements = createPluralConstant(import_kolmafia2.Element), $familiar = createSingleConstant(import_kolmafia2.Familiar), $familiars = createPluralConstant(import_kolmafia2.Familiar), $item = createSingleConstant(import_kolmafia2.Item), $items = createPluralConstant(import_kolmafia2.Item), $location = createSingleConstant(import_kolmafia2.Location), $locations = createPluralConstant(import_kolmafia2.Location), $modifier = createSingleConstant(import_kolmafia2.Modifier), $modifiers = createPluralConstant(import_kolmafia2.Modifier), $monster = createSingleConstant(import_kolmafia2.Monster), $monsters = createPluralConstant(import_kolmafia2.Monster), $phylum = createSingleConstant(import_kolmafia2.Phylum), $phyla = createPluralConstant(import_kolmafia2.Phylum), $servant = createSingleConstant(import_kolmafia2.Servant), $servants = createPluralConstant(import_kolmafia2.Servant), $skill = createSingleConstant(import_kolmafia2.Skill), $skills = createPluralConstant(import_kolmafia2.Skill), $slot = createSingleConstant(import_kolmafia2.Slot), $slots = createPluralConstant(import_kolmafia2.Slot), $stat = createSingleConstant(import_kolmafia2.Stat), $stats = createPluralConstant(import_kolmafia2.Stat), $thrall = createSingleConstant(import_kolmafia2.Thrall), $thralls = createPluralConstant(import_kolmafia2.Thrall), $path = createSingleConstant(import_kolmafia2.Path), $paths = createPluralConstant(import_kolmafia2.Path);

// ../../node_modules/libram/dist/lib.js
var _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
}
function _arrayLikeToArray7(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit5(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
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
function getFoldGroup(item) {
  return Object.entries((0, import_kolmafia3.getRelated)(item, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray5(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray5(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray5(_ref5, 1), i = _ref6[0];
    return import_kolmafia3.Item.get(i);
  });
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia3.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia3.myClass)().toString();
});

// ../../node_modules/libram/dist/Kmail.js
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// ../../node_modules/libram/dist/url.js
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray8(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray8(arr);
}
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest6();
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
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray8(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
}
function _arrayLikeToArray8(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
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
  var chunks = [path], sep = path.includes("?") ? "&" : "?", _iterator = _createForOfIteratorHelper3(urlParams), _step;
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
    Array.isArray(query) ? result.push.apply(result, _toConsumableArray(query)) : result.push.apply(result, _toConsumableArray(Object.entries(query)));
  }
  return result;
}

// ../../node_modules/libram/dist/Kmail.js
function _createForOfIteratorHelper4(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray9(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray2(iter) {
  if (typeof Symbol < "u" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray9(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (o) {
    if (typeof o == "string")
      return _arrayLikeToArray9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray9(o, minLen);
  }
}
function _arrayLikeToArray9(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit7(r, l) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var e, n, i, u, a = [], f = !0, o = !1;
    try {
      if (i = (t = t.call(r)).next, l === 0) {
        if (Object(t) !== t)
          return;
        f = !1;
      } else
        for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
          ;
    } catch (r2) {
      o = !0, n = r2;
    } finally {
      try {
        if (!f && t.return != null && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties2(Constructor.prototype, protoProps), staticProps && _defineProperties2(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty3(obj, key, value) {
  return key = _toPropertyKey3(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return typeof i == "symbol" ? i : String(i);
}
function _toPrimitive3(t, r) {
  if (typeof t != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Kmail = /* @__PURE__ */ function() {
  function Kmail2(rawKmail) {
    _classCallCheck2(this, Kmail2), _defineProperty3(this, "id", void 0), _defineProperty3(this, "date", void 0), _defineProperty3(this, "type", void 0), _defineProperty3(this, "senderId", void 0), _defineProperty3(this, "senderName", void 0), _defineProperty3(this, "rawMessage", void 0);
    var date = new Date(rawKmail.localtime);
    date.setFullYear(date.getFullYear() + 100), this.id = Number(rawKmail.id), this.date = date, this.type = rawKmail.type, this.senderId = Number(rawKmail.fromid), this.senderName = rawKmail.fromname, this.rawMessage = rawKmail.message;
  }
  return _createClass2(Kmail2, [{
    key: "delete",
    value: function() {
      return Kmail2.delete([this]) === 1;
    }
    /**
     * Get message contents without any HTML from items or meat
     *
     * @returns Cleaned message contents
     */
  }, {
    key: "message",
    get: function() {
      var match = this.rawMessage.match(/^([\s\S]*?)</);
      return match ? match[1] : this.rawMessage;
    }
    /**
     * Get items attached to the kmail
     *
     * @returns Map of items attached to the kmail and their quantities
     */
  }, {
    key: "items",
    value: function() {
      return new Map(Object.entries((0, import_kolmafia5.extractItems)(this.rawMessage)).map(function(_ref) {
        var _ref2 = _slicedToArray7(_ref, 2), itemName = _ref2[0], quantity = _ref2[1];
        return [import_kolmafia5.Item.get(itemName), quantity];
      }));
    }
    /**
     * Get meat attached to the kmail
     *
     * @returns Meat attached to the kmail
     */
  }, {
    key: "meat",
    value: function() {
      return (0, import_kolmafia5.extractMeat)(this.rawMessage);
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
      var _results$match$, _results$match, results = fetchUrl("messages.php", [["the_action", "delete"], ["box", "Inbox"], ["pwd", EMPTY_VALUE]].concat(_toConsumableArray2(kmails.map(function(k) {
        return ["sel".concat(k.id), "on"];
      }))));
      return Number((_results$match$ = (_results$match = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _results$match === void 0 ? void 0 : _results$match[1]) !== null && _results$match$ !== void 0 ? _results$match$ : 0);
    }
  }, {
    key: "_genericSend",
    value: function(to, message, items, meat, chunkSize, constructUrl, successString) {
      var m = meat, sendableItems = _toConsumableArray2(arrayToCountedMap(items).entries()).filter(function(_ref3) {
        var _ref4 = _slicedToArray7(_ref3, 1), item = _ref4[0];
        return (0, import_kolmafia5.isGiftable)(item);
      }), result = !0, chunks = chunk(sendableItems, chunkSize), _iterator = _createForOfIteratorHelper4(chunks.length > 0 ? chunks : [null]), _step;
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
          if (_ret = _loop(), _ret)
            return _ret.v;
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
  }]), Kmail2;
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
function haveBound(iotm, options) {
  var _options$force;
  if ((_options$force = options.force) !== null && _options$force !== void 0 && _options$force.includes(iotm.id))
    return !0;
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
      return getBoolean(iotm.preference);
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
  if (haveBound(iotm, options))
    return IotMStatus.BOUND;
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
function _defineProperty4(obj, key, value) {
  return key = _toPropertyKey4(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return typeof i == "symbol" ? i : String(i);
}
function _toPrimitive4(t, r) {
  if (typeof t != "object" || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
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
    if ((0, import_kolmafia8.toInt)(skill) === 7254 && getNumber("skillLevel7254") > 0)
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
    return getNumber("skillLevel".concat((0, import_kolmafia8.toInt)(skill)));
  }
  return import_kolmafia8.Skill.all().filter(function(skill) {
    return (0, import_data_of_loathing.isSkillPermable)(skill);
  }).map(function(skill) {
    return [(0, import_kolmafia8.toInt)(skill), getStatus(skill), getLevel(skill)];
  });
}
function getHundredPercentFamiliars() {
  for (var history = (0, import_kolmafia8.visitUrl)("ascensionhistory.php?back=self&who=".concat((0, import_kolmafia8.myId)()), !1) + (0, import_kolmafia8.visitUrl)("ascensionhistory.php?back=self&prens13=1&who=".concat((0, import_kolmafia8.myId)()), !1), set = /* @__PURE__ */ new Set(), pattern = /alt="([^"]*?) \(100%\)/gm, m; (m = pattern.exec(history)) !== null; )
    set.add(import_kolmafia8.Familiar.get(m[1]));
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
    if (page.includes(images[i]))
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
function checkTattoos(tattoos) {
  return {
    miscTattoos: checkMiscTattoos(tattoos),
    outfitTattoos: checkOutfitTattoos(tattoos)
  };
}
function getPathLevel(path) {
  return path.points === null ? 0 : Math.min((Array.isArray(path.points) ? path.points : [path.points]).map(function(k) {
    return getNumber(k);
  }).reduce(function(sum, v) {
    return sum + v;
  }, 0), path.maxPoints);
}
function checkPaths(tattoos) {
  var _loadPaths$data, _loadPaths, getTattooLevelForPage = function(t) {
    return getTattooStatus(tattoos, t);
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
  getBoolean("kingLiberated") || (0, import_kolmafia8.printHtml)("<b><font color=red>You are still in run so your greenboxes will probably be wrong</font></b>");
  var tattoos = (0, import_kolmafia8.visitUrl)("account_tattoos.php"), code = compress(_objectSpread3(_objectSpread3({
    meta: checkMeta(),
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies()
  }, checkTattoos(tattoos)), {}, {
    paths: checkPaths(tattoos),
    iotms: checkIotMs(),
    items: checkItems()
  })), link = "https://greenbox.loathers.net/?".concat(keepPrivate ? "d=".concat(code) : "u=".concat((0, import_kolmafia8.myId)()));
  keepPrivate || Kmail.send(3501234, "GREENBOX:".concat(code)), (0, import_kolmafia8.printHtml)('All done! To see your greenboxes, visit: <a href="'.concat(link, '">').concat(link, "</a>"));
}
module.exports.main = main;
/*! Bundled license information:

java-parser/src/unicodesets.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/utils.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/entityTypes/classes.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/entityTypes/effects.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/entityTypes/familiars.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/entityTypes/items.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/entityTypes/outfits.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/entityTypes/paths.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

data-of-loathing/dist/entityTypes/skills.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
