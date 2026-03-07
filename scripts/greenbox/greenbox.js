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

// ../../node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "../../node_modules/core-js/internals/is-callable.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _typeof6(o) {
      "@babel/helpers - typeof";
      return _typeof6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof6(o);
    }
    var documentAll = (typeof document > "u" ? "undefined" : _typeof6(document)) == "object" && document.all;
    module2.exports = typeof documentAll > "u" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// ../../node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "../../node_modules/core-js/internals/fails.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return !0;
      }
    };
  }
});

// ../../node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "../../node_modules/core-js/internals/descriptors.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1] !== 7;
    });
  }
});

// ../../node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "../../node_modules/core-js/internals/global-this.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _typeof6(o) {
      "@babel/helpers - typeof";
      return _typeof6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof6(o);
    }
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check((typeof globalThis > "u" ? "undefined" : _typeof6(globalThis)) == "object" && globalThis) || check((typeof window > "u" ? "undefined" : _typeof6(window)) == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check((typeof self > "u" ? "undefined" : _typeof6(self)) == "object" && self) || check((typeof global > "u" ? "undefined" : _typeof6(global)) == "object" && global) || check(_typeof6(exports2) == "object" && exports2) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// ../../node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "../../node_modules/core-js/internals/is-object.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _typeof6(o) {
      "@babel/helpers - typeof";
      return _typeof6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof6(o);
    }
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return _typeof6(it) == "object" ? it !== null : isCallable(it);
    };
  }
});

// ../../node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "../../node_modules/core-js/internals/document-create-element.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), isObject = require_is_object(), document2 = globalThis2.document, EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// ../../node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "../../node_modules/core-js/internals/ie8-dom-define.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails(), createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// ../../node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "../../node_modules/core-js/internals/v8-prototype-define-bug.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: !1
      }).prototype !== 42;
    });
  }
});

// ../../node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "../../node_modules/core-js/internals/an-object.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isObject = require_is_object(), $String = String, $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// ../../node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "../../node_modules/core-js/internals/function-bind-native.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// ../../node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "../../node_modules/core-js/internals/function-call.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// ../../node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "../../node_modules/core-js/internals/get-built-in.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), isCallable = require_is_callable(), aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// ../../node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "../../node_modules/core-js/internals/function-uncurry-this.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), FunctionPrototype = Function.prototype, call = FunctionPrototype.call, uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// ../../node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "../../node_modules/core-js/internals/object-is-prototype-of.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// ../../node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "../../node_modules/core-js/internals/environment-user-agent.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), navigator = globalThis2.navigator, userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// ../../node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "../../node_modules/core-js/internals/environment-v8-version.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), userAgent = require_environment_user_agent(), process = globalThis2.process, Deno2 = globalThis2.Deno, versions = process && process.versions || Deno2 && Deno2.version, v8 = versions && versions.v8, match, version;
    v8 && (match = v8.split("."), version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]));
    !version && userAgent && (match = userAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/), match && (version = +match[1])));
    module2.exports = version;
  }
});

// ../../node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "../../node_modules/core-js/internals/symbol-constructor-detection.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var V8_VERSION = require_environment_v8_version(), fails = require_fails(), globalThis2 = require_global_this(), $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = /* @__PURE__ */ Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// ../../node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "../../node_modules/core-js/internals/use-symbol-as-uid.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _typeof6(o) {
      "@babel/helpers - typeof";
      return _typeof6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof6(o);
    }
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && _typeof6(Symbol.iterator) == "symbol";
  }
});

// ../../node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "../../node_modules/core-js/internals/is-symbol.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _typeof6(o) {
      "@babel/helpers - typeof";
      return _typeof6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof6(o);
    }
    var getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), isPrototypeOf = require_object_is_prototype_of(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return _typeof6(it) == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// ../../node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "../../node_modules/core-js/internals/try-to-string.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// ../../node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "../../node_modules/core-js/internals/a-callable.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), tryToString = require_try_to_string(), $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// ../../node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "../../node_modules/core-js/internals/is-null-or-undefined.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = function(it) {
      return it == null;
    };
  }
});

// ../../node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "../../node_modules/core-js/internals/get-method.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var aCallable = require_a_callable(), isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// ../../node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "../../node_modules/core-js/internals/ordinary-to-primitive.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var call = require_function_call(), isCallable = require_is_callable(), isObject = require_is_object(), $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)) || isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)) || pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// ../../node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "../../node_modules/core-js/internals/is-pure.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = !1;
  }
});

// ../../node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "../../node_modules/core-js/internals/define-global-property.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, {
          value: value,
          configurable: !0,
          writable: !0
        });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// ../../node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "../../node_modules/core-js/internals/shared-store.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var IS_PURE = require_is_pure(), globalThis2 = require_global_this(), defineGlobalProperty = require_define_global_property(), SHARED = "__core-js_shared__", store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.48.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// ../../node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "../../node_modules/core-js/internals/shared.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// ../../node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "../../node_modules/core-js/internals/require-object-coercible.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isNullOrUndefined = require_is_null_or_undefined(), $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// ../../node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "../../node_modules/core-js/internals/to-object.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var requireObjectCoercible = require_require_object_coercible(), $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// ../../node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "../../node_modules/core-js/internals/has-own-property.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toObject = require_to_object(), hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// ../../node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "../../node_modules/core-js/internals/uid.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), id = 0, postfix = Math.random(), toString = uncurryThis(1.1.toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// ../../node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "../../node_modules/core-js/internals/well-known-symbol.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), shared = require_shared(), hasOwn = require_has_own_property(), uid = require_uid(), NATIVE_SYMBOL = require_symbol_constructor_detection(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), _Symbol = globalThis2.Symbol, WellKnownSymbolsStore = shared("wks"), createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol.for || _Symbol : _Symbol && _Symbol.withoutSetter || uid;
    module2.exports = function(name) {
      return hasOwn(WellKnownSymbolsStore, name) || (WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(_Symbol, name) ? _Symbol[name] : createWellKnownSymbol("Symbol." + name)), WellKnownSymbolsStore[name];
    };
  }
});

// ../../node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "../../node_modules/core-js/internals/to-primitive.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var call = require_function_call(), isObject = require_is_object(), isSymbol = require_is_symbol(), getMethod = require_get_method(), ordinaryToPrimitive = require_ordinary_to_primitive(), wellKnownSymbol = require_well_known_symbol(), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE), result;
      if (exoticToPrim) {
        if (pref === void 0 && (pref = "default"), result = call(exoticToPrim, input, pref), !isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      return pref === void 0 && (pref = "number"), ordinaryToPrimitive(input, pref);
    };
  }
});

// ../../node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "../../node_modules/core-js/internals/to-property-key.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toPrimitive = require_to_primitive(), isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// ../../node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "../../node_modules/core-js/internals/object-define-property.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), IE8_DOM_DEFINE = require_ie8_dom_define(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), anObject = require_an_object(), toPropertyKey = require_to_property_key(), $TypeError = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ENUMERABLE = "enumerable", CONFIGURABLE = "configurable", WRITABLE = "writable";
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), typeof O == "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        current && current[WRITABLE] && (O[P] = Attributes.value, Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: !1
        });
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      return "value" in Attributes && (O[P] = Attributes.value), O;
    };
  }
});

// ../../node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "../../node_modules/core-js/internals/function-name.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), hasOwn = require_has_own_property(), FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor, EXISTS = hasOwn(FunctionPrototype, "name"), PROPER = EXISTS && function() {
    }.name === "something", CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    };
  }
});

// ../../node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "../../node_modules/core-js/internals/inspect-source.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), isCallable = require_is_callable(), store = require_shared_store(), functionToString = uncurryThis(Function.toString);
    isCallable(store.inspectSource) || (store.inspectSource = function(it) {
      return functionToString(it);
    });
    module2.exports = store.inspectSource;
  }
});

// ../../node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "../../node_modules/core-js/internals/weak-map-basic-detection.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), isCallable = require_is_callable(), WeakMap2 = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
  }
});

// ../../node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "../../node_modules/core-js/internals/create-property-descriptor.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }
});

// ../../node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "../../node_modules/core-js/internals/create-non-enumerable-property.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      return object[key] = value, object;
    };
  }
});

// ../../node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "../../node_modules/core-js/internals/shared-key.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var shared = require_shared(), uid = require_uid(), keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// ../../node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "../../node_modules/core-js/internals/hidden-keys.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// ../../node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "../../node_modules/core-js/internals/internal-state.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection(), globalThis2 = require_global_this(), isObject = require_is_object(), createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property(), shared = require_shared_store(), sharedKey = require_shared_key(), hiddenKeys = require_hidden_keys(), OBJECT_ALREADY_INITIALIZED = "Object already initialized", TypeError2 = globalThis2.TypeError, WeakMap2 = globalThis2.WeakMap, set, get2, has, enforce = function(it) {
      return has(it) ? get2(it) : set(it, {});
    }, getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get2(it)).type !== TYPE)
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        return state;
      };
    };
    NATIVE_WEAK_MAP || shared.state ? (store = shared.state || (shared.state = new WeakMap2()), store.get = store.get, store.has = store.has, store.set = store.set, set = function(it, metadata) {
      if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, store.set(it, metadata), metadata;
    }, get2 = function(it) {
      return store.get(it) || {};
    }, has = function(it) {
      return store.has(it);
    }) : (STATE = sharedKey("state"), hiddenKeys[STATE] = !0, set = function(it, metadata) {
      if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata;
    }, get2 = function(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    }, has = function(it) {
      return hasOwn(it, STATE);
    });
    var store, STATE;
    module2.exports = {
      set: set,
      get: get2,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
  }
});

// ../../node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "../../node_modules/core-js/internals/make-built-in.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), isCallable = require_is_callable(), hasOwn = require_has_own_property(), DESCRIPTORS = require_descriptors(), CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE, inspectSource = require_inspect_source(), InternalStateModule = require_internal_state(), enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, $String = String, defineProperty = Object.defineProperty, stringSlice = uncurryThis("".slice), replace = uncurryThis("".replace), join = uncurryThis([].join), CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", {
        value: 8
      }).length !== 8;
    }), TEMPLATE = String(String).split("String"), makeBuiltIn = module2.exports = function(value, name, options) {
      stringSlice($String(name), 0, 7) === "Symbol(" && (name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), options && options.getter && (name = "get " + name), options && options.setter && (name = "set " + name), (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) && (DESCRIPTORS ? defineProperty(value, "name", {
        value: name,
        configurable: !0
      }) : value.name = name), CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity && defineProperty(value, "length", {
        value: options.arity
      });
      try {
        options && hasOwn(options, "constructor") && options.constructor ? DESCRIPTORS && defineProperty(value, "prototype", {
          writable: !1
        }) : value.prototype && (value.prototype = void 0);
      } catch (error) {
      }
      var state = enforceInternalState(value);
      return hasOwn(state, "source") || (state.source = join(TEMPLATE, typeof name == "string" ? name : "")), value;
    };
    Function.prototype.toString = makeBuiltIn(function() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// ../../node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "../../node_modules/core-js/internals/define-built-in.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), definePropertyModule = require_object_define_property(), makeBuiltIn = require_make_built_in(), defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      options || (options = {});
      var simple = options.enumerable, name = options.name !== void 0 ? options.name : key;
      if (isCallable(value) && makeBuiltIn(value, name, options), options.global)
        simple ? O[key] = value : defineGlobalProperty(key, value);
      else {
        try {
          options.unsafe ? O[key] && (simple = !0) : delete O[key];
        } catch (error) {
        }
        simple ? O[key] = value : definePropertyModule.f(O, key, {
          value: value,
          enumerable: !1,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// ../../node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "../../node_modules/core-js/internals/to-string-tag-support.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// ../../node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "../../node_modules/core-js/internals/classof-raw.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// ../../node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "../../node_modules/core-js/internals/classof.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), isCallable = require_is_callable(), classofRaw = require_classof_raw(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
      return arguments;
    })()) === "Arguments", tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// ../../node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "../../node_modules/core-js/internals/to-string.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var classof = require_classof(), $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// ../../node_modules/core-js/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "../../node_modules/core-js/internals/normalize-string-argument.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toString = require_to_string();
    module2.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
    };
  }
});

// ../../node_modules/core-js/internals/error-to-string.js
var require_error_to_string = __commonJS({
  "../../node_modules/core-js/internals/error-to-string.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails(), anObject = require_an_object(), normalizeStringArgument = require_normalize_string_argument(), nativeErrorToString = Error.prototype.toString, INCORRECT_TO_STRING = fails(function() {
      if (DESCRIPTORS) {
        var object = Object.create(Object.defineProperty({}, "name", {
          get: function() {
            return this === object;
          }
        }));
        if (nativeErrorToString.call(object) !== "true") return !0;
      }
      return nativeErrorToString.call({
        message: 1,
        name: 2
      }) !== "2: 1" || nativeErrorToString.call({}) !== "Error";
    });
    module2.exports = INCORRECT_TO_STRING ? function() {
      var O = anObject(this), name = normalizeStringArgument(O.name, "Error"), message = normalizeStringArgument(O.message);
      return name ? message ? name + ": " + message : name : message;
    } : nativeErrorToString;
  }
});

// ../../node_modules/core-js/modules/es.error.to-string.js
var require_es_error_to_string = __commonJS({
  "../../node_modules/core-js/modules/es.error.to-string.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var defineBuiltIn = require_define_built_in(), errorToString = require_error_to_string(), ErrorPrototype = Error.prototype;
    ErrorPrototype.toString !== errorToString && defineBuiltIn(ErrorPrototype, "toString", errorToString);
  }
});

// ../../node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "../../node_modules/core-js/internals/object-to-string.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), classof = require_classof();
    module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function() {
      return "[object " + classof(this) + "]";
    };
  }
});

// ../../node_modules/core-js/modules/es.object.to-string.js
var require_es_object_to_string = __commonJS({
  "../../node_modules/core-js/modules/es.object.to-string.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), defineBuiltIn = require_define_built_in(), toString = require_object_to_string();
    TO_STRING_TAG_SUPPORT || defineBuiltIn(Object.prototype, "toString", toString, {
      unsafe: !0
    });
  }
});

// ../../node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "../../node_modules/core-js/internals/object-property-is-enumerable.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports2.f = NASHORN_BUG ? function(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// ../../node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "../../node_modules/core-js/internals/indexed-object.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), classof = require_classof_raw(), $Object = Object, split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// ../../node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "../../node_modules/core-js/internals/to-indexed-object.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var IndexedObject = require_indexed_object(), requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// ../../node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "../../node_modules/core-js/internals/object-get-own-property-descriptor.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), call = require_function_call(), propertyIsEnumerableModule = require_object_property_is_enumerable(), createPropertyDescriptor = require_create_property_descriptor(), toIndexedObject = require_to_indexed_object(), toPropertyKey = require_to_property_key(), hasOwn = require_has_own_property(), IE8_DOM_DEFINE = require_ie8_dom_define(), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P) {
      if (O = toIndexedObject(O), P = toPropertyKey(P), IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// ../../node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "../../node_modules/core-js/internals/math-trunc.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var ceil = Math.ceil, floor = Math.floor;
    module2.exports = Math.trunc || function(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// ../../node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "../../node_modules/core-js/internals/to-integer-or-infinity.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// ../../node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "../../node_modules/core-js/internals/to-absolute-index.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), max = Math.max, min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// ../../node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "../../node_modules/core-js/internals/to-length.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// ../../node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "../../node_modules/core-js/internals/length-of-array-like.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// ../../node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "../../node_modules/core-js/internals/array-includes.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toIndexedObject = require_to_indexed_object(), toAbsoluteIndex = require_to_absolute_index(), lengthOfArrayLike = require_length_of_array_like(), createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this), length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length), value;
        if (IS_INCLUDES && el !== el) {
          for (; length > index; )
            if (value = O[index++], value !== value) return !0;
        } else for (; length > index; index++)
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(!0),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(!1)
    };
  }
});

// ../../node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "../../node_modules/core-js/internals/object-keys-internal.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), hasOwn = require_has_own_property(), toIndexedObject = require_to_indexed_object(), indexOf = require_array_includes().indexOf, hiddenKeys = require_hidden_keys(), push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object), i = 0, result = [], key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      for (; names.length > i; ) hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
      return result;
    };
  }
});

// ../../node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "../../node_modules/core-js/internals/enum-bug-keys.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// ../../node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "../../node_modules/core-js/internals/object-get-own-property-names.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// ../../node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "../../node_modules/core-js/internals/object-get-own-property-symbols.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// ../../node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "../../node_modules/core-js/internals/own-keys.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), uncurryThis = require_function_uncurry_this(), getOwnPropertyNamesModule = require_object_get_own_property_names(), getOwnPropertySymbolsModule = require_object_get_own_property_symbols(), anObject = require_an_object(), concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it)), getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// ../../node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "../../node_modules/core-js/internals/copy-constructor-properties.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var hasOwn = require_has_own_property(), ownKeys4 = require_own_keys(), getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor(), definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      for (var keys = ownKeys4(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
        var key = keys[i];
        !hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key)) && defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
  }
});

// ../../node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "../../node_modules/core-js/internals/is-forced.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var fails = require_fails(), isCallable = require_is_callable(), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? !0 : value === NATIVE ? !1 : isCallable(detection) ? fails(detection) : !!detection;
    }, normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// ../../node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "../../node_modules/core-js/internals/export.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _typeof6(o) {
      "@babel/helpers - typeof";
      return _typeof6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof6(o);
    }
    var globalThis2 = require_global_this(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f, createNonEnumerableProperty = require_create_non_enumerable_property(), defineBuiltIn = require_define_built_in(), defineGlobalProperty = require_define_global_property(), copyConstructorProperties = require_copy_constructor_properties(), isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target, GLOBAL = options.global, STATIC = options.stat, FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL ? target = globalThis2 : STATIC ? target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {}) : target = globalThis2[TARGET] && globalThis2[TARGET].prototype, target) for (key in source) {
        if (sourceProperty = source[key], options.dontCallGetSet ? (descriptor = getOwnPropertyDescriptor(target, key), targetProperty = descriptor && descriptor.value) : targetProperty = target[key], FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced), !FORCED && targetProperty !== void 0) {
          if (_typeof6(sourceProperty) == _typeof6(targetProperty)) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        (options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// ../../node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "../../node_modules/core-js/internals/validate-arguments-length.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// ../../node_modules/core-js/internals/base64-map.js
var require_base64_map = __commonJS({
  "../../node_modules/core-js/internals/base64-map.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var commonAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", base64Alphabet = commonAlphabet + "+/", base64UrlAlphabet = commonAlphabet + "-_", inverse = function(characters) {
      for (var result = {}, index = 0; index < 64; index++) result[characters.charAt(index)] = index;
      return result;
    };
    module2.exports = {
      i2c: base64Alphabet,
      c2i: inverse(base64Alphabet),
      i2cUrl: base64UrlAlphabet,
      c2iUrl: inverse(base64UrlAlphabet)
    };
  }
});

// ../../node_modules/core-js/modules/web.atob.js
var require_web_atob = __commonJS({
  "../../node_modules/core-js/modules/web.atob.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $ = require_export(), globalThis2 = require_global_this(), getBuiltIn = require_get_built_in(), uncurryThis = require_function_uncurry_this(), call = require_function_call(), fails = require_fails(), toString = require_to_string(), validateArgumentsLength = require_validate_arguments_length(), c2i = require_base64_map().c2i, disallowed = /[^\d+/a-z]/i, whitespaces = /[\t\n\f\r ]+/g, finalEq = /[=]{1,2}$/, $atob = getBuiltIn("atob"), fromCharCode = String.fromCharCode, charAt = uncurryThis("".charAt), replace = uncurryThis("".replace), exec = uncurryThis(disallowed.exec), BASIC = !!$atob && !fails(function() {
      return $atob("aGk=") !== "hi";
    }), NO_SPACES_IGNORE = BASIC && fails(function() {
      return $atob(" ") !== "";
    }), NO_ENCODING_CHECK = BASIC && !fails(function() {
      $atob("a");
    }), NO_ARG_RECEIVING_CHECK = BASIC && !fails(function() {
      $atob();
    }), WRONG_ARITY = BASIC && $atob.length !== 1, FORCED = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;
    $({
      global: !0,
      bind: !0,
      enumerable: !0,
      forced: FORCED
    }, {
      atob: function(data) {
        if (validateArgumentsLength(arguments.length, 1), BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call($atob, globalThis2, data);
        var string = replace(toString(data), whitespaces, ""), output = "", position = 0, bc = 0, length, chr, bs;
        if (string.length % 4 === 0 && (string = replace(string, finalEq, "")), length = string.length, length % 4 === 1 || exec(disallowed, string))
          throw new (getBuiltIn("DOMException"))("The string is not correctly encoded", "InvalidCharacterError");
        for (; position < length; )
          chr = charAt(string, position++), bs = bc % 4 ? bs * 64 + c2i[chr] : c2i[chr], bc++ % 4 && (output += fromCharCode(255 & bs >> (-2 * bc & 6)));
        return output;
      }
    });
  }
});

// ../../node_modules/core-js/internals/environment.js
var require_environment = __commonJS({
  "../../node_modules/core-js/internals/environment.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    function _typeof6(o) {
      "@babel/helpers - typeof";
      return _typeof6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof6(o);
    }
    var globalThis2 = require_global_this(), userAgent = require_environment_user_agent(), classof = require_classof_raw(), userAgentStartsWith = function(string) {
      return userAgent.slice(0, string.length) === string;
    };
    module2.exports = (function() {
      return userAgentStartsWith("Bun/") ? "BUN" : userAgentStartsWith("Cloudflare-Workers") ? "CLOUDFLARE" : userAgentStartsWith("Deno/") ? "DENO" : userAgentStartsWith("Node.js/") ? "NODE" : globalThis2.Bun && typeof Bun.version == "string" ? "BUN" : globalThis2.Deno && _typeof6(Deno.version) == "object" ? "DENO" : classof(globalThis2.process) === "process" ? "NODE" : globalThis2.window && globalThis2.document ? "BROWSER" : "REST";
    })();
  }
});

// ../../node_modules/core-js/internals/environment-is-node.js
var require_environment_is_node = __commonJS({
  "../../node_modules/core-js/internals/environment-is-node.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var ENVIRONMENT = require_environment();
    module2.exports = ENVIRONMENT === "NODE";
  }
});

// ../../node_modules/core-js/internals/get-built-in-node-module.js
var require_get_built_in_node_module = __commonJS({
  "../../node_modules/core-js/internals/get-built-in-node-module.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), IS_NODE = require_environment_is_node();
    module2.exports = function(name) {
      if (IS_NODE) {
        try {
          return globalThis2.process.getBuiltinModule(name);
        } catch (error) {
        }
        try {
          return Function('return require("' + name + '")')();
        } catch (error) {
        }
      }
    };
  }
});

// ../../node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "../../node_modules/core-js/internals/object-keys.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// ../../node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "../../node_modules/core-js/internals/object-define-properties.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), definePropertyModule = require_object_define_property(), anObject = require_an_object(), toIndexedObject = require_to_indexed_object(), objectKeys = require_object_keys();
    exports2.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
      anObject(O);
      for (var props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0, key; length > index; ) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// ../../node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "../../node_modules/core-js/internals/html.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// ../../node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "../../node_modules/core-js/internals/object-create.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var anObject = require_an_object(), definePropertiesModule = require_object_define_properties(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = require_hidden_keys(), html = require_html(), documentCreateElement = require_document_create_element(), sharedKey = require_shared_key(), GT = ">", LT = "<", PROTOTYPE = "prototype", SCRIPT = "script", IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {
    }, scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    }, NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag("")), activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      return activeXDocument2 = null, temp;
    }, NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe"), JS = "java" + SCRIPT + ":", iframeDocument;
      return iframe.style.display = "none", html.appendChild(iframe), iframe.src = String(JS), iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F;
    }, activeXDocument, _NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      _NullProtoObject = typeof document < "u" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      for (var length = enumBugKeys.length; length--; ) delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = !0;
    module2.exports = Object.create || function(O, Properties) {
      var result;
      return O !== null ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor(), EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO] = O) : result = _NullProtoObject(), Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// ../../node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "../../node_modules/core-js/internals/define-built-in-accessor.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var makeBuiltIn = require_make_built_in(), defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      return descriptor.get && makeBuiltIn(descriptor.get, name, {
        getter: !0
      }), descriptor.set && makeBuiltIn(descriptor.set, name, {
        setter: !0
      }), defineProperty.f(target, name, descriptor);
    };
  }
});

// ../../node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "../../node_modules/core-js/internals/an-instance.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isPrototypeOf = require_object_is_prototype_of(), $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it)) return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// ../../node_modules/core-js/internals/dom-exception-constants.js
var require_dom_exception_constants = __commonJS({
  "../../node_modules/core-js/internals/dom-exception-constants.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = {
      IndexSizeError: {
        s: "INDEX_SIZE_ERR",
        c: 1,
        m: 1
      },
      DOMStringSizeError: {
        s: "DOMSTRING_SIZE_ERR",
        c: 2,
        m: 0
      },
      HierarchyRequestError: {
        s: "HIERARCHY_REQUEST_ERR",
        c: 3,
        m: 1
      },
      WrongDocumentError: {
        s: "WRONG_DOCUMENT_ERR",
        c: 4,
        m: 1
      },
      InvalidCharacterError: {
        s: "INVALID_CHARACTER_ERR",
        c: 5,
        m: 1
      },
      NoDataAllowedError: {
        s: "NO_DATA_ALLOWED_ERR",
        c: 6,
        m: 0
      },
      NoModificationAllowedError: {
        s: "NO_MODIFICATION_ALLOWED_ERR",
        c: 7,
        m: 1
      },
      NotFoundError: {
        s: "NOT_FOUND_ERR",
        c: 8,
        m: 1
      },
      NotSupportedError: {
        s: "NOT_SUPPORTED_ERR",
        c: 9,
        m: 1
      },
      InUseAttributeError: {
        s: "INUSE_ATTRIBUTE_ERR",
        c: 10,
        m: 1
      },
      InvalidStateError: {
        s: "INVALID_STATE_ERR",
        c: 11,
        m: 1
      },
      SyntaxError: {
        s: "SYNTAX_ERR",
        c: 12,
        m: 1
      },
      InvalidModificationError: {
        s: "INVALID_MODIFICATION_ERR",
        c: 13,
        m: 1
      },
      NamespaceError: {
        s: "NAMESPACE_ERR",
        c: 14,
        m: 1
      },
      InvalidAccessError: {
        s: "INVALID_ACCESS_ERR",
        c: 15,
        m: 1
      },
      ValidationError: {
        s: "VALIDATION_ERR",
        c: 16,
        m: 0
      },
      TypeMismatchError: {
        s: "TYPE_MISMATCH_ERR",
        c: 17,
        m: 1
      },
      SecurityError: {
        s: "SECURITY_ERR",
        c: 18,
        m: 1
      },
      NetworkError: {
        s: "NETWORK_ERR",
        c: 19,
        m: 1
      },
      AbortError: {
        s: "ABORT_ERR",
        c: 20,
        m: 1
      },
      URLMismatchError: {
        s: "URL_MISMATCH_ERR",
        c: 21,
        m: 1
      },
      QuotaExceededError: {
        s: "QUOTA_EXCEEDED_ERR",
        c: 22,
        m: 1
      },
      TimeoutError: {
        s: "TIMEOUT_ERR",
        c: 23,
        m: 1
      },
      InvalidNodeTypeError: {
        s: "INVALID_NODE_TYPE_ERR",
        c: 24,
        m: 1
      },
      DataCloneError: {
        s: "DATA_CLONE_ERR",
        c: 25,
        m: 1
      }
    };
  }
});

// ../../node_modules/core-js/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "../../node_modules/core-js/internals/error-stack-clear.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), $Error = Error, replace = uncurryThis("".replace), TEST = (function(arg) {
      return String(new $Error(arg).stack);
    })("zxcasd"), V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/, IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
    module2.exports = function(stack, dropEntries) {
      if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace)
        for (; dropEntries--; ) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
      return stack;
    };
  }
});

// ../../node_modules/core-js/modules/web.dom-exception.constructor.js
var require_web_dom_exception_constructor = __commonJS({
  "../../node_modules/core-js/modules/web.dom-exception.constructor.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $ = require_export(), getBuiltIn = require_get_built_in(), getBuiltInNodeModule = require_get_built_in_node_module(), fails = require_fails(), create = require_object_create(), createPropertyDescriptor = require_create_property_descriptor(), defineProperty = require_object_define_property().f, defineBuiltIn = require_define_built_in(), defineBuiltInAccessor = require_define_built_in_accessor(), hasOwn = require_has_own_property(), anInstance = require_an_instance(), anObject = require_an_object(), errorToString = require_error_to_string(), normalizeStringArgument = require_normalize_string_argument(), DOMExceptionConstants = require_dom_exception_constants(), clearErrorStack = require_error_stack_clear(), InternalStateModule = require_internal_state(), DESCRIPTORS = require_descriptors(), IS_PURE = require_is_pure(), DOM_EXCEPTION = "DOMException", DATA_CLONE_ERR = "DATA_CLONE_ERR", Error2 = getBuiltIn("Error"), NativeDOMException = getBuiltIn(DOM_EXCEPTION) || (function() {
      try {
        var MessageChannel = getBuiltIn("MessageChannel") || getBuiltInNodeModule("worker_threads").MessageChannel;
        new MessageChannel().port1.postMessage(/* @__PURE__ */ new WeakMap());
      } catch (error) {
        if (error.name === DATA_CLONE_ERR && error.code === 25) return error.constructor;
      }
    })(), NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype, ErrorPrototype = Error2.prototype, setInternalState = InternalStateModule.set, getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION), HAS_STACK = "stack" in new Error2(DOM_EXCEPTION), codeFor = function(name) {
      return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
    }, $DOMException = function() {
      anInstance(this, DOMExceptionPrototype);
      var argumentsLength = arguments.length, message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]), name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error"), code = codeFor(name);
      if (setInternalState(this, {
        type: DOM_EXCEPTION,
        name: name,
        message: message,
        code: code
      }), DESCRIPTORS || (this.name = name, this.message = message, this.code = code), HAS_STACK) {
        var error = new Error2(message);
        error.name = DOM_EXCEPTION, defineProperty(this, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
      }
    }, DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype), createGetterDescriptor = function(get2) {
      return {
        enumerable: !0,
        configurable: !0,
        get: get2
      };
    }, getterFor = function(key2) {
      return createGetterDescriptor(function() {
        return getInternalState(this)[key2];
      });
    };
    DESCRIPTORS && (defineBuiltInAccessor(DOMExceptionPrototype, "code", getterFor("code")), defineBuiltInAccessor(DOMExceptionPrototype, "message", getterFor("message")), defineBuiltInAccessor(DOMExceptionPrototype, "name", getterFor("name")));
    defineProperty(DOMExceptionPrototype, "constructor", createPropertyDescriptor(1, $DOMException));
    var INCORRECT_CONSTRUCTOR = fails(function() {
      return !(new NativeDOMException() instanceof Error2);
    }), INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function() {
      return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== "2: 1";
    }), INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function() {
      return new NativeDOMException(1, "DataCloneError").code !== 25;
    }), MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR || NativeDOMException[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25, FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;
    $({
      global: !0,
      constructor: !0,
      forced: FORCED_CONSTRUCTOR
    }, {
      DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
    });
    var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION), PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
    INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException) && defineBuiltIn(PolyfilledDOMExceptionPrototype, "toString", errorToString);
    INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException && defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, "code", createGetterDescriptor(function() {
      return codeFor(anObject(this).name);
    }));
    for (key in DOMExceptionConstants) hasOwn(DOMExceptionConstants, key) && (constant = DOMExceptionConstants[key], constantName = constant.s, descriptor = createPropertyDescriptor(6, constant.c), hasOwn(PolyfilledDOMException, constantName) || defineProperty(PolyfilledDOMException, constantName, descriptor), hasOwn(PolyfilledDOMExceptionPrototype, constantName) || defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor));
    var constant, constantName, descriptor, key;
  }
});

// ../../node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "../../node_modules/core-js/internals/function-uncurry-this-accessor.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), aCallable = require_a_callable();
    module2.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// ../../node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "../../node_modules/core-js/internals/is-possible-prototype.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isObject = require_is_object();
    module2.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// ../../node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "../../node_modules/core-js/internals/a-possible-prototype.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isPossiblePrototype = require_is_possible_prototype(), $String = String, $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isPossiblePrototype(argument)) return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// ../../node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "../../node_modules/core-js/internals/object-set-prototype-of.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThisAccessor = require_function_uncurry_this_accessor(), isObject = require_is_object(), requireObjectCoercible = require_require_object_coercible(), aPossiblePrototype = require_a_possible_prototype();
    module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var CORRECT_SETTER = !1, test = {}, setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set"), setter(test, []), CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function(O, proto) {
        return requireObjectCoercible(O), aPossiblePrototype(proto), isObject(O) && (CORRECT_SETTER ? setter(O, proto) : O.__proto__ = proto), O;
      };
    })() : void 0);
  }
});

// ../../node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "../../node_modules/core-js/internals/inherit-if-required.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), isObject = require_is_object(), setPrototypeOf = require_object_set_prototype_of();
    module2.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      return (
        // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype && setPrototypeOf($this, NewTargetPrototype), $this
      );
    };
  }
});

// ../../node_modules/core-js/modules/web.dom-exception.stack.js
var require_web_dom_exception_stack = __commonJS({
  "../../node_modules/core-js/modules/web.dom-exception.stack.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $ = require_export(), globalThis2 = require_global_this(), getBuiltIn = require_get_built_in(), createPropertyDescriptor = require_create_property_descriptor(), defineProperty = require_object_define_property().f, hasOwn = require_has_own_property(), anInstance = require_an_instance(), inheritIfRequired = require_inherit_if_required(), normalizeStringArgument = require_normalize_string_argument(), DOMExceptionConstants = require_dom_exception_constants(), clearErrorStack = require_error_stack_clear(), DESCRIPTORS = require_descriptors(), IS_PURE = require_is_pure(), DOM_EXCEPTION = "DOMException", Error2 = getBuiltIn("Error"), NativeDOMException = getBuiltIn(DOM_EXCEPTION), $DOMException = function() {
      anInstance(this, DOMExceptionPrototype);
      var argumentsLength = arguments.length, message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]), name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error"), that = new NativeDOMException(message, name), error = new Error2(message);
      return error.name = DOM_EXCEPTION, defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1))), inheritIfRequired(that, this, $DOMException), that;
    }, DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype, ERROR_HAS_STACK = "stack" in new Error2(DOM_EXCEPTION), DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2), descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis2, DOM_EXCEPTION), BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable), FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
    $({
      global: !0,
      constructor: !0,
      forced: IS_PURE || FORCED_CONSTRUCTOR
    }, {
      // TODO: fix export logic
      DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
    });
    var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION), PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
    if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
      IS_PURE || defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
      for (key in DOMExceptionConstants) hasOwn(DOMExceptionConstants, key) && (constant = DOMExceptionConstants[key], constantName = constant.s, hasOwn(PolyfilledDOMException, constantName) || defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c)));
    }
    var constant, constantName, key;
  }
});

// ../../node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "../../node_modules/core-js/internals/set-to-string-tag.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var defineProperty = require_object_define_property().f, hasOwn = require_has_own_property(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module2.exports = function(target, TAG, STATIC) {
      target && !STATIC && (target = target.prototype), target && !hasOwn(target, TO_STRING_TAG) && defineProperty(target, TO_STRING_TAG, {
        configurable: !0,
        value: TAG
      });
    };
  }
});

// ../../node_modules/core-js/modules/web.dom-exception.to-string-tag.js
var require_web_dom_exception_to_string_tag = __commonJS({
  "../../node_modules/core-js/modules/web.dom-exception.to-string-tag.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), setToStringTag = require_set_to_string_tag(), DOM_EXCEPTION = "DOMException";
    setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);
  }
});

// ../../node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "../../node_modules/core-js/internals/path.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this();
    module2.exports = globalThis2;
  }
});

// ../../node_modules/core-js/stable/atob.js
var require_atob = __commonJS({
  "../../node_modules/core-js/stable/atob.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    require_es_error_to_string();
    require_es_object_to_string();
    require_web_atob();
    require_web_dom_exception_constructor();
    require_web_dom_exception_stack();
    require_web_dom_exception_to_string_tag();
    var path = require_path();
    module2.exports = path.atob;
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

// ../greenbox-data/lib/index.ts
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

// ../greenbox-data/lib/bindable.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/iotms.ts
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
  },
  // new-in-box toy Cupid bow
  {
    id: 11860,
    month: 3,
    year: 2025,
    type: "item",
    item: "Leprecondo"
  },
  // assemble-it-yourself Leprecondo
  {
    id: 11883,
    month: 4,
    year: 2025,
    type: "item",
    item: "April Shower Thoughts shield"
  },
  // Packaged April Shower Thoughts Calendar
  {
    id: 11904,
    month: 5,
    year: 2025,
    type: "item",
    item: "Peridot of Peril"
  },
  // Unpeeled Peridot of Peril
  {
    id: 11918,
    month: 6,
    year: 2025,
    type: "item",
    item: "prismatic beret"
  },
  // packaged prismatic beret
  {
    id: 11922,
    month: 7,
    year: 2025,
    type: "familiar",
    familiar: "Cooler Yeti"
  },
  // yeti in a travel cooler
  {
    id: 11941,
    month: 8,
    year: 2025,
    type: "item",
    item: "M\xF6bius ring"
  },
  // Möbius ring box
  {
    id: 11974,
    month: 9,
    year: 2025,
    type: "item",
    item: "Monodent of the Sea"
  },
  // packaged Monodent of the Sea
  {
    id: 11986,
    month: 10,
    year: 2025,
    type: "item",
    item: "blood cubic zirconia"
  },
  // lab-grown blood cubic zirconia
  {
    id: 12047,
    month: 11,
    year: 2025,
    type: "preference",
    preference: "hasShrunkenHead"
  },
  // shrunken head in a duffel bag
  {
    id: 12049,
    month: 12,
    year: 2025,
    type: "familiar",
    familiar: "Skeleton of Crimbo Past"
  },
  // stocking full of bones
  {
    id: 12133,
    month: 1,
    year: 2026,
    type: "item",
    item: "legendary seal-clubbing club"
  },
  // seal-clubbing club loot box
  {
    id: 12180,
    month: 2,
    year: 2026,
    type: "item",
    item: "Heartstone"
  },
  // boxed Heartstone
  {
    id: 12185,
    month: 3,
    year: 2026,
    type: "item",
    item: "Archaeologist's Spade"
  }
  // boxed Archaeologist's Spade
], iotms_default = iotms;

// ../greenbox-data/data/iotys.ts
init_kolmafia_polyfill();
var iotys = [
  {
    id: 898,
    year: 2005,
    type: "familiar",
    familiar: "Cheshire Bat"
  },
  // Cheshire Bitten
  {
    id: 897,
    year: 2005,
    type: "familiar",
    familiar: "Coffee Pixie"
  },
  // coffee sprite
  {
    id: 1308,
    year: 2006,
    type: "familiar",
    familiar: "Cymbal-Playing Monkey"
  },
  // unwound cymbal-playing monkey
  {
    id: 1307,
    year: 2006,
    type: "familiar",
    familiar: "Attention-Deficit Demon"
  },
  // calm attention-deficit demon
  {
    id: 1970,
    year: 2007,
    type: "familiar",
    familiar: "Nervous Tick"
  },
  // nervous tick egg
  {
    id: 1967,
    year: 2007,
    type: "familiar",
    familiar: "Jitterbug"
  },
  // jitterbug larva
  {
    id: 2939,
    year: 2008,
    type: "familiar",
    familiar: "Hunchbacked Minion"
  },
  // unemployed hunchbacked minion
  {
    id: 2937,
    year: 2008,
    type: "familiar",
    familiar: "Casagnova Gnome"
  },
  // siesta-ing Casagnova gnome
  {
    id: 3481,
    year: 2009,
    type: "familiar",
    familiar: "Uniclops"
  },
  // uniclops egg
  {
    id: 3482,
    year: 2009,
    type: "familiar",
    familiar: "Psychedelic Bear"
  },
  // passed-out psychedelic bear
  {
    id: 4227,
    year: 2010,
    type: "familiar",
    familiar: "Chauvinist Pig"
  },
  // hungover chauvinist pig
  {
    id: 4228,
    year: 2010,
    type: "familiar",
    familiar: "Dancing Frog"
  },
  // perfectly ordinary frog
  {
    id: 4734,
    year: 2011,
    type: "familiar",
    familiar: "Dramatic Hedgehog"
  },
  // rehearsing dramatic hedgehog
  {
    id: 4732,
    year: 2011,
    type: "familiar",
    familiar: "Piano Cat"
  },
  // sleeping piano cat
  {
    id: 5377,
    year: 2012,
    type: "familiar",
    familiar: "Bloovian Groose"
  },
  // The Groose in the Hoose
  {
    id: 5442,
    year: 2012,
    type: "familiar",
    familiar: "Blavious Kloop"
  },
  // The Kloop in the Coop
  {
    id: 5895,
    year: 2013,
    type: "familiar",
    familiar: "Unconscious Collective"
  },
  // avatar of the Unconscious Collective
  {
    id: 5893,
    year: 2013,
    type: "familiar",
    familiar: "Angry Jung Man"
  },
  // dreaming Jung man
  {
    id: 7062,
    year: 2014,
    type: "familiar",
    familiar: "Grim Brother"
  },
  // praying Grim Brother
  {
    id: 7064,
    year: 2014,
    type: "familiar",
    familiar: "Grimstone Golem"
  },
  // hibernating Grimstone Golem
  {
    id: 8064,
    year: 2015,
    type: "familiar",
    familiar: "Golden Monkey"
  },
  // golden monkey statuette
  {
    id: 8068,
    year: 2015,
    type: "familiar",
    familiar: "Adventurous Spelunker"
  },
  // Professor of Spelunkology
  {
    id: 8831,
    year: 2016,
    type: "familiar",
    familiar: "Rockin' Robin"
  },
  // basking robin
  {
    id: 8795,
    year: 2016,
    type: "item",
    item: "replica bat-oomerang"
  },
  // Batfellow comic
  {
    id: 9303,
    year: 2017,
    type: "familiar",
    familiar: "Optimistic Candle"
  },
  // hopeful candle
  {
    id: 9679,
    year: 2018,
    type: "familiar",
    familiar: "Garbage Fire"
  },
  // kerosene-soaked skip
  {
    id: 10146,
    year: 2019,
    type: "familiar",
    familiar: "Elf Operative"
  },
  // elf sleeper agent
  {
    id: 10431,
    year: 2020,
    type: "item",
    item: "Retrospecs"
  },
  // Retrospecs try-at-home kit
  {
    id: 10731,
    year: 2021,
    type: "item",
    item: "fresh coat of paint"
  },
  // fresh can of paint
  {
    id: 10884,
    year: 2022,
    type: "item",
    item: "cursed magnifying glass"
  },
  // mint condition magnifying glass
  {
    id: 11089,
    year: 2023,
    type: "familiar",
    familiar: "Hobo in Sheep's Clothing"
  },
  // mint condition magnifying glass
  {
    id: 11471,
    year: 2024,
    type: "eudora",
    eudoraId: 6
  },
  // Black and White Apron Enrollment Form
  {
    id: 11807,
    year: 2025,
    type: "item",
    item: "server room key"
  },
  // CyberRealm keycode
  {
    id: 12067,
    year: 2026,
    type: "item",
    item: "The Eternity Codpiece"
  }
  // discreetly-wrapped Eternity Codpiece
], iotys_default = iotys;

// ../greenbox-data/lib/bindable.ts
var BindableStatus = /* @__PURE__ */ (function(BindableStatus2) {
  return BindableStatus2[BindableStatus2.NONE = 0] = "NONE", BindableStatus2[BindableStatus2.BOXED = 1] = "BOXED", BindableStatus2[BindableStatus2.BOUND = 2] = "BOUND", BindableStatus2;
})({}), getIotMs = function() {
  return iotms_default;
}, getIotYs = function() {
  return iotys_default;
}, compressIotMBindables = function(raws) {
  return compressBindables(iotms_default, raws);
}, compressIotYBindables = function(raws) {
  return compressBindables(iotys_default, raws);
};
var compressBindables = function(defs, raws) {
  var idToBindableStatus = new Map(raws.map(function(i) {
    return [i[0], i[1]];
  }));
  return defs.map(function(bindable) {
    var _idToBindableStatus$g;
    return (_idToBindableStatus$g = idToBindableStatus.get(bindable.id)) !== null && _idToBindableStatus$g !== void 0 ? _idToBindableStatus$g : 0;
  }).join("").replace(/0+$/, "");
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
var FamiliarStatus = /* @__PURE__ */ (function(FamiliarStatus2) {
  return FamiliarStatus2[FamiliarStatus2.NONE = 0] = "NONE", FamiliarStatus2[FamiliarStatus2.HATCHLING = 1] = "HATCHLING", FamiliarStatus2[FamiliarStatus2.TERRARIUM = 2] = "TERRARIUM", FamiliarStatus2;
})({}), compressFamiliars = function(familiars) {
  return familiars.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, familiar) {
    return "".concat(r).concat("0".repeat(familiar[0] - r.replace(/\*/g, "").length - 1)).concat(familiar[1]).concat(familiar[2] ? "*" : "");
  }, "").replace(/0+$/, "");
};

// ../greenbox-data/lib/items.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/items.ts
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
  // The Pretty Good Escape
  4962,
  // mysterious silver lapel pin
  // Spookyraven
  7318,
  // ghost of a necklace
  7319,
  // Elizabeth's Dollie
  7321,
  // Stephen's lab coat
  //// IOTM Quest Rewards
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
  // The Sea
  //Shub-Jigguwatt
  4297,
  // Ass Stompers of Violence
  4298,
  // Brand of Violence
  4299,
  // Novelty Belt Buckle of Violence
  4300,
  // Lens of Violence
  4301,
  // Pigsticker of Violence
  4302,
  // Jodhpurs of Violence
  //Yog-Urt
  4303,
  // Cold Stone of Hatred
  4304,
  // Girdle of Hatred
  4305,
  // Staff of Simmering Hatred
  4306,
  // Pantaloons of Hatred
  4307,
  // Fuzzy Slippers of Hatred
  4308,
  // Lens of Hatred
  //Dad Sea Monkee
  6407,
  // Pocket Square of Loathing
  // Clothing of Loathing
  4309,
  // Treads of Loathing
  4310,
  // Scepter of Loathing
  4311,
  // Belt of Loathing
  4312,
  // Goggles of Loathing
  4313,
  // Stick-Knife of Loathing
  4314,
  // Jeans of Loathing
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
  // Anniversary gift box
  2074,
  // anniversary chutney sculpture
  2075,
  // spandex anniversary shorts
  2076,
  // jar of anniversary jam
  2077,
  // bucket of anniversary lard
  2078,
  // anniversary concrete fedora
  3837,
  // anniversary safety glass vest
  3838,
  // anniversary burlap belt
  3839,
  // anniversary balsa wood socks
  3840,
  // anniversary tiny latex mask
  3841,
  // anniversary pewter cape
  //// Hobopolis
  // Hobo Nickels
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

// ../greenbox-data/lib/items.ts
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
var ItemStatus = /* @__PURE__ */ (function(ItemStatus2) {
  return ItemStatus2[ItemStatus2.NONE = 0] = "NONE", ItemStatus2[ItemStatus2.HAVE = 1] = "HAVE", ItemStatus2;
})({}), compressItems = function(items) {
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

// ../greenbox-data/lib/paths.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/paths.ts
init_kolmafia_polyfill();
var ItemId = /* @__PURE__ */ (function(ItemId2) {
  return ItemId2[ItemId2.AngelboneSC = 12068] = "AngelboneSC", ItemId2[ItemId2.AngelboneTT = 12069] = "AngelboneTT", ItemId2[ItemId2.AngelbonePM = 12070] = "AngelbonePM", ItemId2[ItemId2.AngelboneSA = 12071] = "AngelboneSA", ItemId2[ItemId2.AngelboneDB = 12072] = "AngelboneDB", ItemId2[ItemId2.AngelboneAT = 12073] = "AngelboneAT", ItemId2[ItemId2.CrepePaperSC = 11520] = "CrepePaperSC", ItemId2[ItemId2.CrepePaperTT = 11521] = "CrepePaperTT", ItemId2[ItemId2.CrepePaperPM = 11522] = "CrepePaperPM", ItemId2[ItemId2.CrepePaperSA = 11523] = "CrepePaperSA", ItemId2[ItemId2.CrepePaperDB = 11524] = "CrepePaperDB", ItemId2[ItemId2.CrepePaperAT = 11525] = "CrepePaperAT", ItemId2[ItemId2.MossSC = 11504] = "MossSC", ItemId2[ItemId2.MossTT = 11505] = "MossTT", ItemId2[ItemId2.MossPM = 11506] = "MossPM", ItemId2[ItemId2.MossSA = 11507] = "MossSA", ItemId2[ItemId2.MossDB = 11508] = "MossDB", ItemId2[ItemId2.MossAT = 11509] = "MossAT", ItemId2[ItemId2.ChiffonSC = 11028] = "ChiffonSC", ItemId2[ItemId2.ChiffonTT = 11029] = "ChiffonTT", ItemId2[ItemId2.ChiffonPM = 11030] = "ChiffonPM", ItemId2[ItemId2.ChiffonSA = 11031] = "ChiffonSA", ItemId2[ItemId2.ChiffonDB = 11032] = "ChiffonDB", ItemId2[ItemId2.ChiffonAT = 11033] = "ChiffonAT", ItemId2[ItemId2.LoofahSC = 10130] = "LoofahSC", ItemId2[ItemId2.LoofahTT = 10131] = "LoofahTT", ItemId2[ItemId2.LoofahPM = 10132] = "LoofahPM", ItemId2[ItemId2.LoofahSA = 10133] = "LoofahSA", ItemId2[ItemId2.LoofahDB = 10134] = "LoofahDB", ItemId2[ItemId2.LoofahAT = 10135] = "LoofahAT", ItemId2[ItemId2.VelourSC = 10114] = "VelourSC", ItemId2[ItemId2.VelourTT = 10115] = "VelourTT", ItemId2[ItemId2.VelourPM = 10116] = "VelourPM", ItemId2[ItemId2.VelourSA = 10117] = "VelourSA", ItemId2[ItemId2.VelourDB = 10118] = "VelourDB", ItemId2[ItemId2.VelourAT = 10119] = "VelourAT", ItemId2[ItemId2.ParaffinSC = 10098] = "ParaffinSC", ItemId2[ItemId2.ParaffinTT = 10099] = "ParaffinTT", ItemId2[ItemId2.ParaffinPM = 10100] = "ParaffinPM", ItemId2[ItemId2.ParaffinSA = 10101] = "ParaffinSA", ItemId2[ItemId2.ParaffinDB = 10102] = "ParaffinDB", ItemId2[ItemId2.ParaffinAT = 10103] = "ParaffinAT", ItemId2[ItemId2.ChalkSC = 10082] = "ChalkSC", ItemId2[ItemId2.ChalkTT = 10083] = "ChalkTT", ItemId2[ItemId2.ChalkPM = 10084] = "ChalkPM", ItemId2[ItemId2.ChalkSA = 10085] = "ChalkSA", ItemId2[ItemId2.ChalkDB = 10086] = "ChalkDB", ItemId2[ItemId2.ChalkAT = 10087] = "ChalkAT", ItemId2[ItemId2.GabardineSC = 8120] = "GabardineSC", ItemId2[ItemId2.GabardineTT = 8121] = "GabardineTT", ItemId2[ItemId2.GabardinePM = 8122] = "GabardinePM", ItemId2[ItemId2.GabardineSA = 8123] = "GabardineSA", ItemId2[ItemId2.GabardineDB = 8124] = "GabardineDB", ItemId2[ItemId2.GabardineAT = 8125] = "GabardineAT", ItemId2[ItemId2.AerogelSC = 8106] = "AerogelSC", ItemId2[ItemId2.AerogelTT = 8107] = "AerogelTT", ItemId2[ItemId2.AerogelPM = 8108] = "AerogelPM", ItemId2[ItemId2.AerogelSA = 8109] = "AerogelSA", ItemId2[ItemId2.AerogelDB = 8110] = "AerogelDB", ItemId2[ItemId2.AerogelAT = 8111] = "AerogelAT", ItemId2[ItemId2.WickerSC = 8092] = "WickerSC", ItemId2[ItemId2.WickerTT = 8093] = "WickerTT", ItemId2[ItemId2.WickerPM = 8094] = "WickerPM", ItemId2[ItemId2.WickerSA = 8095] = "WickerSA", ItemId2[ItemId2.WickerDB = 8096] = "WickerDB", ItemId2[ItemId2.WickerAT = 8097] = "WickerAT", ItemId2[ItemId2.PolyesterSC = 7985] = "PolyesterSC", ItemId2[ItemId2.PolyesterTT = 7986] = "PolyesterTT", ItemId2[ItemId2.PolyesterPM = 7987] = "PolyesterPM", ItemId2[ItemId2.PolyesterSA = 7988] = "PolyesterSA", ItemId2[ItemId2.PolyesterDB = 7989] = "PolyesterDB", ItemId2[ItemId2.PolyesterAT = 7990] = "PolyesterAT", ItemId2[ItemId2.DevilboneSC = 12076] = "DevilboneSC", ItemId2[ItemId2.DevilboneTT = 12077] = "DevilboneTT", ItemId2[ItemId2.DevilbonePM = 12078] = "DevilbonePM", ItemId2[ItemId2.DevilboneSA = 12079] = "DevilboneSA", ItemId2[ItemId2.DevilboneDB = 12080] = "DevilboneDB", ItemId2[ItemId2.DevilboneAT = 12081] = "DevilboneAT", ItemId2[ItemId2.PetrifiedWoodSC = 11528] = "PetrifiedWoodSC", ItemId2[ItemId2.PetrifiedWoodTT = 11529] = "PetrifiedWoodTT", ItemId2[ItemId2.PetrifiedWoodPM = 11530] = "PetrifiedWoodPM", ItemId2[ItemId2.PetrifiedWoodSA = 11531] = "PetrifiedWoodSA", ItemId2[ItemId2.PetrifiedWoodDB = 11532] = "PetrifiedWoodDB", ItemId2[ItemId2.PetrifiedWoodAT = 11533] = "PetrifiedWoodAT", ItemId2[ItemId2.AdobeSC = 11512] = "AdobeSC", ItemId2[ItemId2.AdobeTT = 11513] = "AdobeTT", ItemId2[ItemId2.AdobePM = 11514] = "AdobePM", ItemId2[ItemId2.AdobeSA = 11515] = "AdobeSA", ItemId2[ItemId2.AdobeDB = 11516] = "AdobeDB", ItemId2[ItemId2.AdobeAT = 11517] = "AdobeAT", ItemId2[ItemId2.CeramicSC = 11020] = "CeramicSC", ItemId2[ItemId2.CeramicTT = 11021] = "CeramicTT", ItemId2[ItemId2.CeramicPM = 11022] = "CeramicPM", ItemId2[ItemId2.CeramicSA = 11023] = "CeramicSA", ItemId2[ItemId2.CeramicDB = 11024] = "CeramicDB", ItemId2[ItemId2.CeramicAT = 11025] = "CeramicAT", ItemId2[ItemId2.FlagstoneSC = 10138] = "FlagstoneSC", ItemId2[ItemId2.FlagstoneTT = 10139] = "FlagstoneTT", ItemId2[ItemId2.FlagstonePM = 10140] = "FlagstonePM", ItemId2[ItemId2.FlagstoneSA = 10141] = "FlagstoneSA", ItemId2[ItemId2.FlagstoneDB = 10142] = "FlagstoneDB", ItemId2[ItemId2.FlagstoneAT = 10143] = "FlagstoneAT", ItemId2[ItemId2.StainedGlassSC = 10122] = "StainedGlassSC", ItemId2[ItemId2.StainedGlassTT = 10123] = "StainedGlassTT", ItemId2[ItemId2.StainedGlassPM = 10124] = "StainedGlassPM", ItemId2[ItemId2.StainedGlassSA = 10125] = "StainedGlassSA", ItemId2[ItemId2.StainedGlassDB = 10126] = "StainedGlassDB", ItemId2[ItemId2.StainedGlassAT = 10127] = "StainedGlassAT", ItemId2[ItemId2.TerraCottaSC = 10106] = "TerraCottaSC", ItemId2[ItemId2.TerraCottaTT = 10107] = "TerraCottaTT", ItemId2[ItemId2.TerraCottaPM = 10108] = "TerraCottaPM", ItemId2[ItemId2.TerraCottaSA = 10109] = "TerraCottaSA", ItemId2[ItemId2.TerraCottaDB = 10110] = "TerraCottaDB", ItemId2[ItemId2.TerraCottaAT = 10111] = "TerraCottaAT", ItemId2[ItemId2.MarbleSC = 10090] = "MarbleSC", ItemId2[ItemId2.MarbleTT = 10091] = "MarbleTT", ItemId2[ItemId2.MarblePM = 10092] = "MarblePM", ItemId2[ItemId2.MarbleSA = 10093] = "MarbleSA", ItemId2[ItemId2.MarbleDB = 10094] = "MarbleDB", ItemId2[ItemId2.MarbleAT = 10095] = "MarbleAT", ItemId2[ItemId2.FiberglassSC = 8127] = "FiberglassSC", ItemId2[ItemId2.FiberglassTT = 8128] = "FiberglassTT", ItemId2[ItemId2.FiberglassPM = 8129] = "FiberglassPM", ItemId2[ItemId2.FiberglassSA = 8130] = "FiberglassSA", ItemId2[ItemId2.FiberglassDB = 8131] = "FiberglassDB", ItemId2[ItemId2.FiberglassAT = 8132] = "FiberglassAT", ItemId2[ItemId2.WroughtIronSC = 8113] = "WroughtIronSC", ItemId2[ItemId2.WroughtIronTT = 8114] = "WroughtIronTT", ItemId2[ItemId2.WroughtIronPM = 8115] = "WroughtIronPM", ItemId2[ItemId2.WroughtIronSA = 8116] = "WroughtIronSA", ItemId2[ItemId2.WroughtIronDB = 8117] = "WroughtIronDB", ItemId2[ItemId2.WroughtIronAT = 8118] = "WroughtIronAT", ItemId2[ItemId2.BakeliteSC = 8099] = "BakeliteSC", ItemId2[ItemId2.BakeliteTT = 8100] = "BakeliteTT", ItemId2[ItemId2.BakelitePM = 8101] = "BakelitePM", ItemId2[ItemId2.BakeliteSA = 8102] = "BakeliteSA", ItemId2[ItemId2.BakeliteDB = 8103] = "BakeliteDB", ItemId2[ItemId2.BakeliteAT = 8104] = "BakeliteAT", ItemId2[ItemId2.PorcelainSC = 7991] = "PorcelainSC", ItemId2[ItemId2.PorcelainTT = 7992] = "PorcelainTT", ItemId2[ItemId2.PorcelainPM = 7993] = "PorcelainPM", ItemId2[ItemId2.PorcelainSA = 7994] = "PorcelainSA", ItemId2[ItemId2.PorcelainDB = 7995] = "PorcelainDB", ItemId2[ItemId2.PorcelainAT = 7996] = "PorcelainAT", ItemId2[ItemId2.StainlessSC = 1224] = "StainlessSC", ItemId2[ItemId2.StainlessTT = 1225] = "StainlessTT", ItemId2[ItemId2.StainlessPM = 1226] = "StainlessPM", ItemId2[ItemId2.StainlessSA = 1227] = "StainlessSA", ItemId2[ItemId2.StainlessDB = 1228] = "StainlessDB", ItemId2[ItemId2.StainlessAT = 1229] = "StainlessAT", ItemId2[ItemId2.PlexiSC = 1230] = "PlexiSC", ItemId2[ItemId2.PlexiTT = 1231] = "PlexiTT", ItemId2[ItemId2.PlexiPM = 1232] = "PlexiPM", ItemId2[ItemId2.PlexiSA = 1233] = "PlexiSA", ItemId2[ItemId2.PlexiDB = 1234] = "PlexiDB", ItemId2[ItemId2.PlexiAT = 1235] = "PlexiAT", ItemId2[ItemId2.BrimstoneSC = 2814] = "BrimstoneSC", ItemId2[ItemId2.BrimstoneTT = 2815] = "BrimstoneTT", ItemId2[ItemId2.BrimstonePM = 2817] = "BrimstonePM", ItemId2[ItemId2.BrimstoneSA = 2818] = "BrimstoneSA", ItemId2[ItemId2.BrimstoneDB = 2816] = "BrimstoneDB", ItemId2[ItemId2.BrimstoneAT = 2813] = "BrimstoneAT", ItemId2[ItemId2.DiceRing = 8290] = "DiceRing", ItemId2[ItemId2.DiceBeltBuckle = 8291] = "DiceBeltBuckle", ItemId2[ItemId2.DicePrintPajamaPants = 8292] = "DicePrintPajamaPants", ItemId2[ItemId2.DiceShapedBackpack = 8293] = "DiceShapedBackpack", ItemId2[ItemId2.DicePrintDoRag = 8294] = "DicePrintDoRag", ItemId2[ItemId2.DiceSunglasses = 8295] = "DiceSunglasses", ItemId2[ItemId2.PickyTweezers = 7936] = "PickyTweezers", ItemId2[ItemId2.AdventurerBobblehead = 9084] = "AdventurerBobblehead", ItemId2[ItemId2.PerfectlyFairCoin = 9526] = "PerfectlyFairCoin", ItemId2[ItemId2.GarlandOfGreatness = 9910] = "GarlandOfGreatness", ItemId2[ItemId2.Ring = 10252] = "Ring", ItemId2[ItemId2.RedPlumbersBoots = 10501] = "RedPlumbersBoots", ItemId2[ItemId2.QuantumOfFamiliar = 10758] = "QuantumOfFamiliar", ItemId2[ItemId2.TheBigBookOfEverySkill = 10917] = "TheBigBookOfEverySkill", ItemId2[ItemId2.StuffedDinosaur = 10949] = "StuffedDinosaur", ItemId2;
})(ItemId || {}), Thwaitgold = /* @__PURE__ */ (function(Thwaitgold2) {
  return Thwaitgold2[Thwaitgold2.Bee = 5141] = "Bee", Thwaitgold2[Thwaitgold2.Grasshopper = 5222] = "Grasshopper", Thwaitgold2[Thwaitgold2.Butterfly = 5392] = "Butterfly", Thwaitgold2[Thwaitgold2.StagBeetle = 5572] = "StagBeetle", Thwaitgold2[Thwaitgold2.WoollyBear = 5694] = "WoollyBear", Thwaitgold2[Thwaitgold2.Maggot = 5773] = "Maggot", Thwaitgold2[Thwaitgold2.PrayingMantis = 6045] = "PrayingMantis", Thwaitgold2[Thwaitgold2.Firefly = 6298] = "Firefly", Thwaitgold2[Thwaitgold2.GoliathBeetle = 6547] = "GoliathBeetle", Thwaitgold2[Thwaitgold2.Bookworm = 6676] = "Bookworm", Thwaitgold2[Thwaitgold2.Ant = 6899] = "Ant", Thwaitgold2[Thwaitgold2.Dragonfly = 7249] = "Dragonfly", Thwaitgold2[Thwaitgold2.WheelBug = 7498] = "WheelBug", Thwaitgold2[Thwaitgold2.Spider = 7668] = "Spider", Thwaitgold2[Thwaitgold2.Nit = 7935] = "Nit", Thwaitgold2[Thwaitgold2.ScarabBeetle = 8087] = "ScarabBeetle", Thwaitgold2[Thwaitgold2.Caterpillar = 8296] = "Caterpillar", Thwaitgold2[Thwaitgold2.Termite = 8556] = "Termite", Thwaitgold2[Thwaitgold2.Scorpion = 8984] = "Scorpion", Thwaitgold2[Thwaitgold2.Moth = 9031] = "Moth", Thwaitgold2[Thwaitgold2.Cockroach = 9099] = "Cockroach", Thwaitgold2[Thwaitgold2.Amoeba = 9346] = "Amoeba", Thwaitgold2[Thwaitgold2.Bug = 9488] = "Bug", Thwaitgold2[Thwaitgold2.TimeFly = 9525] = "TimeFly", Thwaitgold2[Thwaitgold2.Metabug = 9758] = "Metabug", Thwaitgold2[Thwaitgold2.Chigger = 9917] = "Chigger", Thwaitgold2[Thwaitgold2.MaskedHunter = 9941] = "MaskedHunter", Thwaitgold2[Thwaitgold2.Mosquito = 10184] = "Mosquito", Thwaitgold2[Thwaitgold2.Nymph = 10253] = "Nymph", Thwaitgold2[Thwaitgold2.BombardierBeetle = 10319] = "BombardierBeetle", Thwaitgold2[Thwaitgold2.BuzzyBeetle = 10470] = "BuzzyBeetle", Thwaitgold2[Thwaitgold2.KeyholeSpider = 10570] = "KeyholeSpider", Thwaitgold2[Thwaitgold2.Slug = 10601] = "Slug", Thwaitgold2[Thwaitgold2.ListeningBug = 10736] = "ListeningBug", Thwaitgold2[Thwaitgold2.QuantumBug = 10757] = "QuantumBug", Thwaitgold2[Thwaitgold2.FireBeetle = 10791] = "FireBeetle", Thwaitgold2[Thwaitgold2.Protozoa = 10894] = "Protozoa", Thwaitgold2[Thwaitgold2.Harvestman = 10918] = "Harvestman", Thwaitgold2[Thwaitgold2.MosquitoInAmber = 10950] = "MosquitoInAmber", Thwaitgold2[Thwaitgold2.AntiMoth = 11166] = "AntiMoth", Thwaitgold2[Thwaitgold2.SplendorBeetle = 11255] = "SplendorBeetle", Thwaitgold2[Thwaitgold2.Fairyfly = 11326] = "Fairyfly", Thwaitgold2[Thwaitgold2.WolfSpider = 11563] = "WolfSpider", Thwaitgold2[Thwaitgold2.IlliniginaIllinoiensis = 11593] = "IlliniginaIllinoiensis", Thwaitgold2[Thwaitgold2.ShieldBug = 11637] = "ShieldBug", Thwaitgold2[Thwaitgold2.CordycepsAnt = 11848] = "CordycepsAnt", Thwaitgold2[Thwaitgold2.MadHatterpillar = 11917] = "MadHatterpillar", Thwaitgold2;
})(Thwaitgold || {}), FamiliarId = /* @__PURE__ */ (function(FamiliarId2) {
  return FamiliarId2[FamiliarId2.ReconstitutedCrow = 147] = "ReconstitutedCrow", FamiliarId2[FamiliarId2.HoveringSkull = 163] = "HoveringSkull", FamiliarId2[FamiliarId2.QuantumEntangler = 307] = "QuantumEntangler", FamiliarId2[FamiliarId2.HeatWave = 312] = "HeatWave", FamiliarId2[FamiliarId2.ColdCut = 313] = "ColdCut", FamiliarId2[FamiliarId2.ShameSpiral = 314] = "ShameSpiral", FamiliarId2[FamiliarId2.PhantomLimb = 315] = "PhantomLimb", FamiliarId2[FamiliarId2.FoulBall = 316] = "FoulBall", FamiliarId2[FamiliarId2.DireCassava = 317] = "DireCassava", FamiliarId2[FamiliarId2.Observer = 318] = "Observer", FamiliarId2[FamiliarId2.CoolCucumber = 319] = "CoolCucumber", FamiliarId2[FamiliarId2.DefectiveChildrensStapler = 320] = "DefectiveChildrensStapler", FamiliarId2[FamiliarId2.Glover = 321] = "Glover", FamiliarId2[FamiliarId2.ZapperBug = 322] = "ZapperBug", FamiliarId2;
})(FamiliarId || {}), SOFTCORE = -3, HARDCORE = -2, paths = [{
  id: SOFTCORE,
  name: "Softcore",
  image: "itemimages/karma.gif",
  items: [],
  equipment: [ItemId.PolyesterSC, ItemId.PolyesterTT, ItemId.PolyesterPM, ItemId.PolyesterSA, ItemId.PolyesterDB, ItemId.PolyesterAT, ItemId.WickerSC, ItemId.WickerTT, ItemId.WickerPM, ItemId.WickerSA, ItemId.WickerDB, ItemId.WickerAT, ItemId.AerogelSC, ItemId.AerogelTT, ItemId.AerogelPM, ItemId.AerogelSA, ItemId.AerogelDB, ItemId.AerogelAT, ItemId.GabardineSC, ItemId.GabardineTT, ItemId.GabardinePM, ItemId.GabardineSA, ItemId.GabardineDB, ItemId.GabardineAT, ItemId.ChalkSC, ItemId.ChalkTT, ItemId.ChalkPM, ItemId.ChalkSA, ItemId.ChalkDB, ItemId.ChalkAT, ItemId.ParaffinSC, ItemId.ParaffinTT, ItemId.ParaffinPM, ItemId.ParaffinSA, ItemId.ParaffinDB, ItemId.ParaffinAT, ItemId.VelourSC, ItemId.VelourTT, ItemId.VelourPM, ItemId.VelourSA, ItemId.VelourDB, ItemId.VelourAT, ItemId.LoofahSC, ItemId.LoofahTT, ItemId.LoofahPM, ItemId.LoofahSA, ItemId.LoofahDB, ItemId.LoofahAT, ItemId.ChiffonSC, ItemId.ChiffonTT, ItemId.ChiffonPM, ItemId.ChiffonSA, ItemId.ChiffonDB, ItemId.ChiffonAT, ItemId.MossSC, ItemId.MossTT, ItemId.MossPM, ItemId.MossSA, ItemId.MossDB, ItemId.MossAT, ItemId.CrepePaperSC, ItemId.CrepePaperTT, ItemId.CrepePaperPM, ItemId.CrepePaperSA, ItemId.CrepePaperDB, ItemId.CrepePaperAT, ItemId.AngelboneSC, ItemId.AngelboneTT, ItemId.AngelbonePM, ItemId.AngelboneSA, ItemId.AngelboneDB, ItemId.AngelboneAT],
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
  equipment: [ItemId.StainlessSC, ItemId.StainlessTT, ItemId.StainlessPM, ItemId.StainlessSA, ItemId.StainlessDB, ItemId.StainlessAT, ItemId.PorcelainSC, ItemId.PorcelainTT, ItemId.PorcelainPM, ItemId.PorcelainSA, ItemId.PorcelainDB, ItemId.PorcelainAT, ItemId.BakeliteSC, ItemId.BakeliteTT, ItemId.BakelitePM, ItemId.BakeliteSA, ItemId.BakeliteDB, ItemId.BakeliteAT, ItemId.WroughtIronSC, ItemId.WroughtIronTT, ItemId.WroughtIronPM, ItemId.WroughtIronSA, ItemId.WroughtIronDB, ItemId.WroughtIronAT, ItemId.FiberglassSC, ItemId.FiberglassTT, ItemId.FiberglassPM, ItemId.FiberglassSA, ItemId.FiberglassDB, ItemId.FiberglassAT, ItemId.MarbleSC, ItemId.MarbleTT, ItemId.MarblePM, ItemId.MarbleSA, ItemId.MarbleDB, ItemId.MarbleAT, ItemId.TerraCottaSC, ItemId.TerraCottaTT, ItemId.TerraCottaPM, ItemId.TerraCottaSA, ItemId.TerraCottaDB, ItemId.TerraCottaAT, ItemId.StainedGlassSC, ItemId.StainedGlassTT, ItemId.StainedGlassPM, ItemId.StainedGlassSA, ItemId.StainedGlassDB, ItemId.StainedGlassAT, ItemId.FlagstoneSC, ItemId.FlagstoneTT, ItemId.FlagstonePM, ItemId.FlagstoneSA, ItemId.FlagstoneDB, ItemId.FlagstoneAT, ItemId.CeramicSC, ItemId.CeramicTT, ItemId.CeramicPM, ItemId.CeramicSA, ItemId.CeramicDB, ItemId.CeramicAT, ItemId.AdobeSC, ItemId.AdobeTT, ItemId.AdobePM, ItemId.AdobeSA, ItemId.AdobeDB, ItemId.AdobeAT, ItemId.PetrifiedWoodSC, ItemId.PetrifiedWoodTT, ItemId.PetrifiedWoodPM, ItemId.PetrifiedWoodSA, ItemId.PetrifiedWoodDB, ItemId.PetrifiedWoodAT, ItemId.DevilboneSC, ItemId.DevilboneTT, ItemId.DevilbonePM, ItemId.DevilboneSA, ItemId.DevilboneDB, ItemId.DevilboneAT],
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
  familiars: [FamiliarId.ReconstitutedCrow],
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
  familiars: [FamiliarId.HoveringSkull],
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
  points: "pokefamPoints",
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
  familiars: [FamiliarId.QuantumEntangler],
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
  image: "itemimages/zootomist.gif",
  items: [Thwaitgold.CordycepsAnt],
  equipment: [],
  tattoos: [{
    name: "Zootomist",
    image: "class32"
  }, {
    name: "Hardcore Zootomist",
    image: "class32hc"
  }],
  familiars: [FamiliarId.HeatWave, FamiliarId.ColdCut, FamiliarId.ShameSpiral, FamiliarId.PhantomLimb, FamiliarId.FoulBall, FamiliarId.DireCassava, FamiliarId.Observer, FamiliarId.CoolCucumber, FamiliarId.DefectiveChildrensStapler, FamiliarId.Glover, FamiliarId.ZapperBug],
  points: "zootomistPoints",
  maxPoints: 10
}, {
  id: 54,
  name: "Hat Trick",
  image: "itemimages/hat_bycocket.gif",
  items: [Thwaitgold.MadHatterpillar],
  equipment: [],
  tattoos: [],
  points: null,
  maxPoints: 0
}], paths_default = paths;

// ../greenbox-data/lib/paths.ts
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
function getPaths() {
  return paths_default;
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

// ../greenbox-data/lib/skills.ts
init_kolmafia_polyfill();
var SkillStatus = /* @__PURE__ */ (function(SkillStatus2) {
  return SkillStatus2[SkillStatus2.NONE = 0] = "NONE", SkillStatus2[SkillStatus2.SOFTCORE = 1] = "SOFTCORE", SkillStatus2[SkillStatus2.HARDCORE = 2] = "HARDCORE", SkillStatus2;
})({});
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
  name: "Angelbone Vestments",
  image: "abonetat",
  outfit: 181
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
  name: "Axis Uniform",
  image: "axistat",
  outfit: 174
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
  name: "Devilbone Prison",
  image: "dbonetat",
  outfit: 182
}, {
  name: "Dino Drip",
  image: "dinotat",
  outfit: 189
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
  name: "Scorched Skeleton Suit",
  image: "sskeltat",
  outfit: 187
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
  name: "Wet Wear",
  image: "wetoutfittat",
  outfit: 173
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
  name: "Crimbuccaneer",
  image: "crimbopirate",
  misc: 48
}, {
  name: "Elf Guard",
  image: "elfguardtat",
  misc: 49
}, {
  name: "Jolly Roger",
  image: "tstat",
  misc: 50
}, {
  name: "Tattoo Gun",
  image: "2024raffle",
  misc: 51
}, {
  name: "Two Turkeys",
  image: "twoturkeys",
  misc: 52
}, {
  name: "Virtual cybertattoo",
  image: "cybertat",
  misc: 53
}, {
  name: "Allied Tattoo",
  image: "allytat",
  misc: 54
}, {
  name: "Wet Shower",
  image: "wetpapertat",
  misc: 55
}, {
  name: "Crymbocurrency",
  image: "cryptotat",
  misc: 56
}], tattoos_default = tattoos;

// ../greenbox-data/lib/tattoos.ts
var OutfitTattooStatus = /* @__PURE__ */ (function(OutfitTattooStatus2) {
  return OutfitTattooStatus2[OutfitTattooStatus2.NONE = 0] = "NONE", OutfitTattooStatus2[OutfitTattooStatus2.HAVE_OUTFIT = 1] = "HAVE_OUTFIT", OutfitTattooStatus2[OutfitTattooStatus2.HAVE = 2] = "HAVE", OutfitTattooStatus2;
})({});
function getTattoos() {
  return tattoos_default;
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

// ../greenbox-data/lib/trophies.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/trophies.ts
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
}, {
  id: 166,
  name: "Mad Hattest",
  image: "the_third_time_is_the_chapeau"
}], trophies_default = trophies;

// ../greenbox-data/lib/trophies.ts
var TrophyStatus = /* @__PURE__ */ (function(TrophyStatus2) {
  return TrophyStatus2[TrophyStatus2.NONE = 0] = "NONE", TrophyStatus2[TrophyStatus2.HAVE = 1] = "HAVE", TrophyStatus2;
})({});
function getTrophies() {
  return trophies_default;
}
var compressTrophies = function(trophies2) {
  return trophies2.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, trophy) {
    return "".concat(r).concat("0".repeat(trophy[0] - r.length - 1)).concat(trophy[1]);
  }, "").replace(/0+$/, "");
};

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
    iotms: compressIotMBindables(raw.iotms),
    iotys: compressIotYBindables(raw.iotys),
    items: compressItems(raw.items)
  }, compressedString = JSON.stringify(compressed);
  return encodeURIComponent(JSONCrush_default.crush(compressedString));
}

// src/greenbox.ts
var import_kolmafia10 = require("kolmafia");

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

// ../../node_modules/libram/dist/propertyTypes.js
init_kolmafia_polyfill();
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasShrunkenHead", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "heartstoneBanishUnlocked", "heartstoneBuffUnlocked", "heartstoneKillUnlocked", "heartstoneLuckUnlocked", "heartstonePalsUnlocked", "heartstoneStunUnlocked", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboPastDailySpecial", "_crimboPastMedicalGruel", "_crimboPastPrizeTurkey", "_crimboPastSmokingPope", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_flagellateFlagonUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_heartstoneLuckUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_miniKiwiTipiDrop", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_mobiusRingPrimed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "clubEmNextWeekMonsterTurn", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastKOLHSArtClassUnlockAdventure", "lastKOLHSChemClassUnlockAdventure", "lastKOLHSShopClassUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "tryToRememberCharges", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_clubEmBattlefieldUsed", "_clubEmNextWeekUsed", "_clubEmTimeUsed", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_crimboPastDailySpecialPrice", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_heartstoneBanishUsed", "_heartstoneBuffUsed", "_heartstoneKillUsed", "_heartstonePalsUsed", "_heartstoneStunUsed", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_knuckleboneDrops", "_knuckleboneRests", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_meatCuteUsed", "_meatLoafUsed", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusRingPrimedTurn", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smolderingSkeletonsDefeated", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_wandOfPigificationUsed", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"], monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clubEmNextWeekMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"], monsterNumericProperties = [], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "flagellateFlagonsActive", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "heartstoneAttunementMods", "heartstoneAttunementWord", "heartstoneLetters", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_seadentWaveZone", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550", "choiceAdventure1591"], familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"], familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"], itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "eweItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "walfordBucketItem", "_cookbookbatQuestIngredient", "_crimboPastDailySpecialItem", "_dailySpecial", "_pirateRealmCurio"], itemNumericProperties = ["daycareInstructorItem", "_crimboPastDailySpecialItem"];

// ../../node_modules/libram/dist/propertyTyping.js
init_kolmafia_polyfill();
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties), itemPropertiesSet = new Set(itemProperties);
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
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}

// ../../node_modules/libram/dist/property.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
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
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return _typeof(i) == "symbol" ? i : i + "";
}
function _toPrimitive(t, r) {
  if (_typeof(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (_typeof(i) != "object") return i;
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
};
function createMafiaClassPropertyGetter(Type, toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  return createPropertyGetter(function(value, property) {
    if (value === "") return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(function(value) {
  return value;
}), getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value) {
  return value === "true";
}), getNumber = createPropertyGetter(function(value) {
  return Number(value);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia.Bounty, import_kolmafia.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia.Class, import_kolmafia.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia.Effect, import_kolmafia.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia.Element, import_kolmafia.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia.Familiar, import_kolmafia.toFamiliar, familiarNumericProperties), getItem = createMafiaClassPropertyGetter(import_kolmafia.Item, import_kolmafia.toItem, itemNumericProperties), getLocation = createMafiaClassPropertyGetter(import_kolmafia.Location, import_kolmafia.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia.Monster, import_kolmafia.toMonster, monsterNumericProperties), getPhylum = createMafiaClassPropertyGetter(import_kolmafia.Phylum, import_kolmafia.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia.Servant, import_kolmafia.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia.Skill, import_kolmafia.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia.Slot, import_kolmafia.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia.Stat, import_kolmafia.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia.Thrall, import_kolmafia.toThrall);
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
    if (isItemProperty(property))
      return getItem(property, _default);
    if (isStringProperty(property))
      return value === "" && _default !== void 0 ? _default : value;
  }
  return _default instanceof import_kolmafia.Location ? getLocation(property, _default) : _default instanceof import_kolmafia.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia.Stat ? getStat(property, _default) : _default instanceof import_kolmafia.Phylum ? getPhylum(property, _default) : _default instanceof import_kolmafia.Item ? getItem(property, _default) : typeof _default == "boolean" ? value === "true" ? !0 : value === "false" ? !1 : _default : typeof _default == "number" ? value === "" ? _default : parseInt(value) : value === "" ? _default === void 0 ? "" : _default : value;
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
  return withProperties(_defineProperty({}, property, value), callback);
}
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(function(_ref3) {
    var _ref4 = _slicedToArray4(_ref3, 2), choice = _ref4[0], option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  return withChoices(_defineProperty({}, choice, value), callback);
}
var PropertiesManager = /* @__PURE__ */ (function() {
  function PropertiesManager2() {
    _classCallCheck(this, PropertiesManager2), _defineProperty(this, "properties", {});
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
      this.setChoices(_defineProperty({}, choiceToSet, value));
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
      return get(property, 0) < value ? (this.set(_defineProperty({}, property, value)), !0) : !1;
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
      return get(property, 0) > value ? (this.set(_defineProperty({}, property, value)), !0) : !1;
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
      return newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties), newGuy;
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
})();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", /* @__PURE__ */ Symbol("empty preference"));

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
var _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35;
var _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53;
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
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia3.Effect)
    return (0, import_kolmafia3.haveEffect)(thing) >= quantity;
  if (thing instanceof import_kolmafia3.Familiar)
    return (0, import_kolmafia3.haveFamiliar)(thing);
  if (thing instanceof import_kolmafia3.Item)
    return (0, import_kolmafia3.availableAmount)(thing) >= quantity;
  if (thing instanceof import_kolmafia3.Servant)
    return (0, import_kolmafia3.haveServant)(thing);
  if (thing instanceof import_kolmafia3.Skill)
    return (0, import_kolmafia3.haveSkill)(thing);
  if (thing instanceof import_kolmafia3.Thrall) {
    var thrall = (0, import_kolmafia3.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return !1;
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
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["cold"])))]]);
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia3.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia3.myClass)().toString();
});
function extractItems(text) {
  return new Map(Object.entries((0, import_kolmafia3.extractItems)(text)).map(function(_ref13) {
    var _ref14 = _slicedToArray5(_ref13, 2), itemName = _ref14[0], quantity = _ref14[1];
    return [import_kolmafia3.Item.get(itemName), quantity];
  }));
}
function makeScalerCalcFunction(cache, pattern) {
  return function(monster) {
    var _find, _pattern$exec$slice, _pattern$exec, current = cache.get(monster);
    if (current !== void 0) return (0, import_kolmafia3.monsterEval)(current);
    var result = (_find = ((_pattern$exec$slice = (_pattern$exec = pattern.exec(monster.attributes)) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec.slice(1)) !== null && _pattern$exec$slice !== void 0 ? _pattern$exec$slice : []).find(function(m) {
      return m !== void 0;
    })) !== null && _find !== void 0 ? _find : "0";
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
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]), regularFamiliarTagSet = new Set(regularFamiliarTags), pokefamUltTags = Object.freeze(["ult_bearhug", "ult_sticktreats", "ult_owlstare", "ult_bloodbath", "ult_pepperscorn", "ult_rainbowstorm"]), SPECIAL_ULTS = /* @__PURE__ */ new Map([[$familiar(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [$familiar(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [$familiar(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [$familiar(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [$familiar(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [$familiar(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);

// ../../node_modules/libram/dist/resources/index.js
init_kolmafia_polyfill();

// ../../node_modules/libram/dist/modifier.js
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");

// ../../node_modules/libram/dist/modifierTypes.js
init_kolmafia_polyfill();
var stringModifiers = ["Class", "Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Avatar", "Skill", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie", "Plumber Stat", "Recipe", "Evaluated Modifiers", "Last Available"], stringModifiersSet = new Set(stringModifiers), booleanModifiers = ["Softcore Only", "Single Equip", "Always Fumble", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Randomly", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Alters Page Text", "Attacks Can't Miss", "Pirate", "Blind", "Breakable", "Drops Items", "Drops Meat", "Volleyball or Sombrero", "Extra Pickpocket", "Negative Status Resist"], booleanModifiersSet = new Set(booleanModifiers), numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water", "Spleen Drop", "Potion Drop", "Sauce Spell Damage", "Monster Level Percent", "Food Fairy", "Booze Fairy", "Candy Fairy", "Food Fairy Effectiveness", "Booze Fairy Effectiveness", "Candy Fairy Effectiveness", "Damage Aura", "Sporadic Damage Aura", "Thorns", "Sporadic Thorns", "Stomach Capacity", "Liver Capacity", "Spleen Capacity", "Free Rests", "Leaves", "Elf Warfare Effectiveness", "Pirate Warfare Effectiveness", "MPC Drop", "Piece of Twelve Drop", "Combat Item Damage Percent", "Avoid Attack", "Damage vs. Bugbears", "Damage vs. Werewolves", "Damage vs. Zombies", "Damage vs. Ghosts", "Damage vs. Vampires", "Damage vs. Skeletons", "Damage vs. Undead", "RAM", "Lantern", "Raw Combat Rate"], numericModifiersSet = new Set(numericModifiers), multiStringModifiers = ["Effect", "Rollover Effect", "Conditional Skill (Equipped)", "Conditional Skill (Inventory)", "Lantern Element"], multiStringModifiersSet = new Set(multiStringModifiers);

// ../../node_modules/libram/dist/modifier.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
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
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return _typeof2(i) == "symbol" ? i : i + "";
}
function _toPrimitive2(t, r) {
  if (_typeof2(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (_typeof2(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function isBooleanModifier(modifier) {
  return booleanModifiersSet.has(modifier);
}
function isNumericModifier(modifier) {
  return numericModifiersSet.has(modifier);
}
function isMultiStringModifier(modifier) {
  return multiStringModifiersSet.has(modifier);
}
function parseModifierString(modifiers2) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$numeric = _ref.numeric, numeric = _ref$numeric === void 0 ? Number : _ref$numeric, _ref$str = _ref.str, str = _ref$str === void 0 ? String : _ref$str, _ref$bool = _ref.bool, bool = _ref$bool === void 0 ? function(val) {
    return val === "true";
  } : _ref$bool, _ref$multiString = _ref.multiString, multiString = _ref$multiString === void 0 ? function(val) {
    return val.split(",");
  } : _ref$multiString;
  return Object.entries((0, import_kolmafia4.splitModifiers)(modifiers2)).reduce(function(acc, _ref2) {
    var _ref3 = _slicedToArray6(_ref2, 2), key = _ref3[0], value = _ref3[1];
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty2({}, key, isBooleanModifier(key) ? bool(value) : isNumericModifier(key) ? numeric(value) : isMultiStringModifier(key) ? multiString(value) : str(value)));
  }, {});
}

// ../../node_modules/libram/dist/resources/2026/EternityCodpiece.js
var EternityCodpiece_exports = {};
__export(EternityCodpiece_exports, {
  SLOTS: function() {
    return SLOTS;
  },
  currentGems: function() {
    return currentGems;
  },
  equippable: function() {
    return equippable;
  },
  have: function() {
    return have2;
  },
  modifiers: function() {
    return modifiers;
  }
});
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");
var _templateObject, _templateObject2;
function _taggedTemplateLiteral2(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
function have2() {
  return have($item(_templateObject || (_templateObject = _taggedTemplateLiteral2(["The Eternity Codpiece"]))));
}
var SLOTS = Object.freeze($slots(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["codpiece1, codpiece2, codpiece3, codpiece4, codpiece5"]))));
function currentGems() {
  return SLOTS.map(function(slot) {
    return (0, import_kolmafia5.equippedItem)(slot);
  });
}
function equippable(item) {
  return (0, import_kolmafia5.stringModifier)("EternityCodpiece:".concat(item), "Modifiers").length > 0;
}
function modifiers(item) {
  return parseModifierString((0, import_kolmafia5.stringModifier)("EternityCodpiece:".concat(item, ', "Modifiers')));
}

// ../../node_modules/entities/dist/esm/index.js
init_kolmafia_polyfill();

// ../../node_modules/entities/dist/esm/decode.js
init_kolmafia_polyfill();

// ../../node_modules/entities/dist/esm/decode-codepoint.js
init_kolmafia_polyfill();
var _a, decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), fromCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    var output = "";
    return codePoint > 65535 && (codePoint -= 65536, output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | codePoint & 1023), output += String.fromCharCode(codePoint), output;
  }
);
function replaceCodePoint(codePoint) {
  var _a2;
  return codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111 ? 65533 : (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
}

// ../../node_modules/entities/dist/esm/generated/decode-data-html.js
init_kolmafia_polyfill();

// ../../node_modules/entities/dist/esm/internal/decode-shared.js
init_kolmafia_polyfill();
function decodeBase64(input) {
  for (var binary = (
    // eslint-disable-next-line n/no-unsupported-features/node-builtins
    typeof atob == "function" ? (
      // Browser (and Node >=16)
      // eslint-disable-next-line n/no-unsupported-features/node-builtins
      atob(input)
    ) : (
      // Older Node versions (<16)
      // eslint-disable-next-line n/no-unsupported-features/node-builtins
      typeof Buffer.from == "function" ? (
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        Buffer.from(input, "base64").toString("binary")
      ) : (
        // eslint-disable-next-line unicorn/no-new-buffer, n/no-deprecated-api
        new Buffer(input, "base64").toString("binary")
      )
    )
  ), evenLength = binary.length & -2, out = new Uint16Array(evenLength / 2), index = 0, outIndex = 0; index < evenLength; index += 2) {
    var lo = binary.charCodeAt(index), hi = binary.charCodeAt(index + 1);
    out[outIndex++] = lo | hi << 8;
  }
  return out;
}

// ../../node_modules/entities/dist/esm/generated/decode-data-html.js
var htmlDecodeTree = /* @__PURE__ */ decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWls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ZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

// ../../node_modules/entities/dist/esm/generated/decode-data-xml.js
init_kolmafia_polyfill();

// ../../node_modules/entities/dist/esm/internal/bin-trie-flags.js
init_kolmafia_polyfill();
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2.VALUE_LENGTH = 49152] = "VALUE_LENGTH", BinTrieFlags2[BinTrieFlags2.FLAG13 = 8192] = "FLAG13", BinTrieFlags2[BinTrieFlags2.BRANCH_LENGTH = 8064] = "BRANCH_LENGTH", BinTrieFlags2[BinTrieFlags2.JUMP_TABLE = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));

// ../../node_modules/entities/dist/esm/decode.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
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
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return _typeof3(i) == "symbol" ? i : i + "";
}
function _toPrimitive3(t, r) {
  if (_typeof3(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (_typeof3(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2.NUM = 35] = "NUM", CharCodes2[CharCodes2.SEMI = 59] = "SEMI", CharCodes2[CharCodes2.EQUALS = 61] = "EQUALS", CharCodes2[CharCodes2.ZERO = 48] = "ZERO", CharCodes2[CharCodes2.NINE = 57] = "NINE", CharCodes2[CharCodes2.LOWER_A = 97] = "LOWER_A", CharCodes2[CharCodes2.LOWER_F = 102] = "LOWER_F", CharCodes2[CharCodes2.LOWER_X = 120] = "LOWER_X", CharCodes2[CharCodes2.LOWER_Z = 122] = "LOWER_Z", CharCodes2[CharCodes2.UPPER_A = 65] = "UPPER_A", CharCodes2[CharCodes2.UPPER_F = 70] = "UPPER_F", CharCodes2[CharCodes2.UPPER_Z = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
var TO_LOWER_BIT = 32;
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2.EntityStart = 0] = "EntityStart", EntityDecoderState2[EntityDecoderState2.NumericStart = 1] = "NumericStart", EntityDecoderState2[EntityDecoderState2.NumericDecimal = 2] = "NumericDecimal", EntityDecoderState2[EntityDecoderState2.NumericHex = 3] = "NumericHex", EntityDecoderState2[EntityDecoderState2.NamedEntity = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2.Legacy = 0] = "Legacy", DecodingMode2[DecodingMode2.Strict = 1] = "Strict", DecodingMode2[DecodingMode2.Attribute = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
var EntityDecoder = /* @__PURE__ */ (function() {
  function EntityDecoder2(decodeTree, emitCodePoint, errors) {
    _classCallCheck2(this, EntityDecoder2), this.decodeTree = decodeTree, this.emitCodePoint = emitCodePoint, this.errors = errors, this.state = EntityDecoderState.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = DecodingMode.Strict;
  }
  return _createClass2(EntityDecoder2, [{
    key: "startEntity",
    value: function(decodeMode) {
      this.decodeMode = decodeMode, this.state = EntityDecoderState.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "write",
    value: function(input, offset) {
      switch (this.state) {
        case EntityDecoderState.EntityStart:
          return input.charCodeAt(offset) === CharCodes.NUM ? (this.state = EntityDecoderState.NumericStart, this.consumed += 1, this.stateNumericStart(input, offset + 1)) : (this.state = EntityDecoderState.NamedEntity, this.stateNamedEntity(input, offset));
        case EntityDecoderState.NumericStart:
          return this.stateNumericStart(input, offset);
        case EntityDecoderState.NumericDecimal:
          return this.stateNumericDecimal(input, offset);
        case EntityDecoderState.NumericHex:
          return this.stateNumericHex(input, offset);
        case EntityDecoderState.NamedEntity:
          return this.stateNamedEntity(input, offset);
      }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericStart",
    value: function(input, offset) {
      return offset >= input.length ? -1 : (input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X ? (this.state = EntityDecoderState.NumericHex, this.consumed += 1, this.stateNumericHex(input, offset + 1)) : (this.state = EntityDecoderState.NumericDecimal, this.stateNumericDecimal(input, offset));
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericHex",
    value: function(input, offset) {
      for (; offset < input.length; ) {
        var char = input.charCodeAt(offset);
        if (isNumber(char) || isHexadecimalCharacter(char)) {
          var digit = char <= CharCodes.NINE ? char - CharCodes.ZERO : (char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10;
          this.result = this.result * 16 + digit, this.consumed++, offset++;
        } else
          return this.emitNumericEntity(char, 3);
      }
      return -1;
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericDecimal",
    value: function(input, offset) {
      for (; offset < input.length; ) {
        var char = input.charCodeAt(offset);
        if (isNumber(char))
          this.result = this.result * 10 + (char - CharCodes.ZERO), this.consumed++, offset++;
        else
          return this.emitNumericEntity(char, 2);
      }
      return -1;
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
  }, {
    key: "emitNumericEntity",
    value: function(lastCp, expectedLength) {
      var _a2;
      if (this.consumed <= expectedLength)
        return (_a2 = this.errors) === null || _a2 === void 0 || _a2.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      if (lastCp === CharCodes.SEMI)
        this.consumed += 1;
      else if (this.decodeMode === DecodingMode.Strict)
        return 0;
      return this.emitCodePoint(replaceCodePoint(this.result), this.consumed), this.errors && (lastCp !== CharCodes.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNamedEntity",
    value: function(input, offset) {
      for (var decodeTree = this.decodeTree, current = decodeTree[this.treeIndex], valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14; offset < input.length; ) {
        if (valueLength === 0 && (current & BinTrieFlags.FLAG13) !== 0) {
          var runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7, firstChar = current & BinTrieFlags.JUMP_TABLE;
          if (offset + runLength > input.length) return -1;
          if (input.charCodeAt(offset) !== firstChar)
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          offset++, this.excess++;
          for (var remaining = runLength - 1, runPos = 1; runPos < runLength; runPos += 2) {
            var packedWord = decodeTree[this.treeIndex + 1 + (runPos - 1 >> 1)], low = packedWord & 255;
            if (input.charCodeAt(offset) !== low)
              return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
            offset++, this.excess++;
            var high = packedWord >> 8 & 255;
            if (runPos + 1 < runLength) {
              if (input.charCodeAt(offset) !== high)
                return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
              offset++, this.excess++;
            }
          }
          this.treeIndex += 1 + (remaining + 1 >> 1), current = decodeTree[this.treeIndex], valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        }
        if (offset >= input.length) break;
        var char = input.charCodeAt(offset);
        if (char === CharCodes.SEMI && valueLength !== 0 && (current & BinTrieFlags.FLAG13) !== 0)
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        if (this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char), this.treeIndex < 0)
          return this.result === 0 || // If we are parsing an attribute
          this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
          (valueLength === 0 || // And there should be no invalid characters.
          isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (current = decodeTree[this.treeIndex], valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14, valueLength !== 0) {
          if (char === CharCodes.SEMI)
            return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
          this.decodeMode !== DecodingMode.Strict && (current & BinTrieFlags.FLAG13) === 0 && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
        offset++, this.excess++;
      }
      return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNotTerminatedNamedEntity",
    value: function() {
      var _a2, result = this.result, decodeTree = this.decodeTree, valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
      return this.emitNamedEntityData(result, valueLength, this.consumed), (_a2 = this.errors) === null || _a2 === void 0 || _a2.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNamedEntityData",
    value: function(result, valueLength, consumed) {
      var decodeTree = this.decodeTree;
      return this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13) : decodeTree[result + 1], consumed), valueLength === 3 && this.emitCodePoint(decodeTree[result + 2], consumed), consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "end",
    value: function() {
      var _a2;
      switch (this.state) {
        case EntityDecoderState.NamedEntity:
          return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        // Otherwise, emit a numeric entity if we have one.
        case EntityDecoderState.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case EntityDecoderState.NumericHex:
          return this.emitNumericEntity(0, 3);
        case EntityDecoderState.NumericStart:
          return (_a2 = this.errors) === null || _a2 === void 0 || _a2.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case EntityDecoderState.EntityStart:
          return 0;
      }
    }
  }]);
})();
function getDecoder(decodeTree) {
  var returnValue = "", decoder = new EntityDecoder(decodeTree, function(data) {
    return returnValue += fromCodePoint(data);
  });
  return function(input, decodeMode) {
    for (var lastIndex = 0, offset = 0; (offset = input.indexOf("&", offset)) >= 0; ) {
      returnValue += input.slice(lastIndex, offset), decoder.startEntity(decodeMode);
      var length = decoder.write(
        input,
        // Skip the "&"
        offset + 1
      );
      if (length < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + length, offset = length === 0 ? lastIndex + 1 : lastIndex;
    }
    var result = returnValue + input.slice(lastIndex);
    return returnValue = "", result;
  };
}
function determineBranch(decodeTree, current, nodeIndex, char) {
  var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7, jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0)
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  if (jumpOffset) {
    var value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  for (var packedKeySlots = branchCount + 1 >> 1, lo = 0, hi = branchCount - 1; lo <= hi; ) {
    var mid = lo + hi >>> 1, slot = mid >> 1, packed = decodeTree[nodeIndex + slot], midKey = packed >> (mid & 1) * 8 & 255;
    if (midKey < char)
      lo = mid + 1;
    else if (midKey > char)
      hi = mid - 1;
    else
      return decodeTree[nodeIndex + packedKeySlots + mid];
  }
  return -1;
}
var htmlDecoder = /* @__PURE__ */ getDecoder(htmlDecodeTree);
function decodeHTML(htmlString) {
  var mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DecodingMode.Legacy;
  return htmlDecoder(htmlString, mode);
}

// ../../node_modules/entities/dist/esm/encode.js
init_kolmafia_polyfill();

// ../../node_modules/entities/dist/esm/escape.js
init_kolmafia_polyfill();
var getCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt == null ? function(c, index) {
    return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(input, index) {
      return input.codePointAt(index);
    }
  )
);

// ../../node_modules/entities/dist/esm/generated/encode-html.js
init_kolmafia_polyfill();

// ../../node_modules/entities/dist/esm/internal/encode-shared.js
init_kolmafia_polyfill();

// ../../node_modules/entities/dist/esm/index.js
var EntityLevel;
(function(EntityLevel2) {
  EntityLevel2[EntityLevel2.XML = 0] = "XML", EntityLevel2[EntityLevel2.HTML = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode2) {
  EncodingMode2[EncodingMode2.UTF8 = 0] = "UTF8", EncodingMode2[EncodingMode2.ASCII = 1] = "ASCII", EncodingMode2[EncodingMode2.Extensive = 2] = "Extensive", EncodingMode2[EncodingMode2.Attribute = 3] = "Attribute", EncodingMode2[EncodingMode2.Text = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));

// ../../node_modules/libram/dist/Kmail.js
init_kolmafia_polyfill();
var import_atob = __toESM(require_atob(), 1);
var import_kolmafia7 = require("kolmafia");

// ../../node_modules/libram/dist/url.js
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");
function _toConsumableArray2(r) {
  return _arrayWithoutHoles2(r) || _iterableToArray2(r) || _unsupportedIterableToArray9(r) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray2(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles2(r) {
  if (Array.isArray(r)) return _arrayLikeToArray9(r);
}
function _slicedToArray7(r, e) {
  return _arrayWithHoles7(r) || _iterableToArrayLimit7(r, e) || _unsupportedIterableToArray9(r, e) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _createForOfIteratorHelper4(r, e) {
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
var EMPTY_VALUE = /* @__PURE__ */ Symbol("empty");
function fetchUrl(path) {
  var query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _options$method = options.method, method = _options$method === void 0 ? "POST" : _options$method, url = buildUrl(path, query);
  return (0, import_kolmafia6.visitUrl)(url, method === "POST", !0);
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
      var _param = _slicedToArray7(param, 2), key = _param[0], value = _param[1];
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
function _typeof4(o) {
  "@babel/helpers - typeof";
  return _typeof4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof4(o);
}
function _createForOfIteratorHelper5(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray10(r)) || e && r && typeof r.length == "number") {
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
  return _arrayWithoutHoles3(r) || _iterableToArray3(r) || _unsupportedIterableToArray10(r) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray3(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function _arrayWithoutHoles3(r) {
  if (Array.isArray(r)) return _arrayLikeToArray10(r);
}
function _slicedToArray8(r, e) {
  return _arrayWithHoles8(r) || _iterableToArrayLimit8(r, e) || _unsupportedIterableToArray10(r, e) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(r, a) {
  if (r) {
    if (typeof r == "string") return _arrayLikeToArray10(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray10(r, a) : void 0;
  }
}
function _arrayLikeToArray10(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit8(r, l) {
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
function _arrayWithHoles8(r) {
  if (Array.isArray(r)) return r;
}
function _classCallCheck3(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey4(o.key), o);
  }
}
function _createClass3(e, r, t) {
  return r && _defineProperties3(e.prototype, r), t && _defineProperties3(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _defineProperty3(e, r, t) {
  return (r = _toPropertyKey4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return _typeof4(i) == "symbol" ? i : i + "";
}
function _toPrimitive4(t, r) {
  if (_typeof4(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (_typeof4(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var Kmail = /* @__PURE__ */ (function() {
  function Kmail2(rawKmail) {
    _classCallCheck3(this, Kmail2), _defineProperty3(this, "id", void 0), _defineProperty3(this, "date", void 0), _defineProperty3(this, "type", void 0), _defineProperty3(this, "senderId", void 0), _defineProperty3(this, "senderName", void 0), _defineProperty3(this, "rawMessage", void 0), _defineProperty3(this, "_parsedMessageParts", void 0), this.id = Number(rawKmail.id), this.date = new Date(Number(rawKmail.azunixtime) * 1e3), this.type = rawKmail.type, this.senderId = Number(rawKmail.fromid), this.senderName = rawKmail.fromname, this.rawMessage = rawKmail.message;
  }
  return _createClass3(Kmail2, [{
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
        if (text.startsWith("<center><table>")) {
          var endIdx = text.indexOf("</center>");
          text = text.slice(endIdx + 9);
        }
      } else if (this.type === "giftshop") {
        var _text$split = text.split("<p>Inside Note:<p>"), _text$split2 = _slicedToArray8(_text$split, 2);
        text = _text$split2[0], insideText = _text$split2[1];
      }
      var split = function(s) {
        var idx = s.indexOf("<");
        return idx === -1 ? [s] : [s.slice(0, idx), s.slice(idx)];
      }, _split = split(text), _split2 = _slicedToArray8(_split, 2), outsideNote = _split2[0], _split2$ = _split2[1], outsideAttachments = _split2$ === void 0 ? null : _split2$, _ref = insideText !== void 0 ? split(insideText) : [], _ref2 = _slicedToArray8(_ref, 2), _ref2$ = _ref2[0], insideNote = _ref2$ === void 0 ? null : _ref2$, _ref2$2 = _ref2[1], insideAttachments = _ref2$2 === void 0 ? null : _ref2$2;
      return {
        outsideNote: decodeHTML(outsideNote),
        outsideAttachments: outsideAttachments,
        insideNote: insideNote && decodeHTML(insideNote),
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
      return !outsideAttachments && !insideAttachments ? 0 : (0, import_kolmafia7.extractMeat)("".concat(outsideAttachments).concat(insideAttachments));
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
      return JSON.parse((0, import_kolmafia7.visitUrl)("api.php?what=kmail&for=libram&count=".concat(count))).map(Kmail2.parse);
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
        var _ref4 = _slicedToArray8(_ref3, 1), item = _ref4[0];
        return (0, import_kolmafia7.isGiftable)(item);
      }), result = !0, chunks = chunk(sendableItems, chunkSize), _iterator = _createForOfIteratorHelper5(chunks.length > 0 ? chunks : [null]), _step;
      try {
        var _loop = function() {
          var _c$length, c = _step.value, itemsQuery = {};
          c !== null && c.forEach(function(_ref5, i) {
            var _ref6 = _slicedToArray8(_ref5, 2), item = _ref6[0], quantity = _ref6[1];
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
})();

// src/bindable.ts
init_kolmafia_polyfill();
var import_kolmafia9 = require("kolmafia");

// src/utils.ts
init_kolmafia_polyfill();
var import_kolmafia8 = require("kolmafia");
function codpieceAmount(item) {
  return EternityCodpiece_exports.currentGems().includes(item) ? 1 : 0;
}
function haveItem(item) {
  return [import_kolmafia8.availableAmount, import_kolmafia8.closetAmount, import_kolmafia8.displayAmount, import_kolmafia8.equippedAmount, import_kolmafia8.itemAmount, import_kolmafia8.storageAmount, codpieceAmount].some(function(f) {
    return f(item) > 0;
  });
}

// src/bindable.ts
var getBoolean2 = property_exports.getBoolean;
function haveBound(bindable, options) {
  var _options$force;
  if ((_options$force = options.force) !== null && _options$force !== void 0 && _options$force.includes(bindable.id)) return !0;
  var boxed = import_kolmafia9.Item.get(bindable.id);
  switch (bindable.type) {
    case "campground": {
      var bound = bindable.item ? import_kolmafia9.Item.get(bindable.item) : null;
      return bound && (haveItem(bound) || haveInCampground(bound)) || haveInCampground(boxed);
    }
    case "custom":
      return bindable.id === 5790 ? haveItem(boxed) || haveItem(import_kolmafia9.Item.get("right bear arm")) && haveItem(import_kolmafia9.Item.get("left bear arm")) : !1;
    case "eudora":
      return (0, import_kolmafia9.xpath)((0, import_kolmafia9.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(bindable.eudoraId.toString());
    case "familiar":
      return arrayOf(bindable.familiar).map(function(f) {
        return import_kolmafia9.Familiar.get(f);
      }).some(function(f) {
        return (0, import_kolmafia9.haveFamiliar)(f);
      });
    case "item":
      return flat(arrayOf(bindable.item).map(function(i) {
        return import_kolmafia9.Item.get(i);
      }).map(function(i) {
        var group = getFoldGroup(i);
        return group.length > 0 ? group : i;
      })).some(function(i) {
        return haveItem(i);
      });
    case "preference":
      return getBoolean2(bindable.preference);
    case "skill": {
      var skill = import_kolmafia9.Skill.get(bindable.skill);
      return (0, import_kolmafia9.haveSkill)(skill);
    }
    case "vip":
      return haveItem(import_kolmafia9.Item.get("Clan VIP Lounge Key"));
  }
}
function getBindableStatus(bindable) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (haveBound(bindable, options)) return BindableStatus.BOUND;
  var boxed = import_kolmafia9.Item.get(bindable.id);
  return haveItem(boxed) ? BindableStatus.BOXED : BindableStatus.NONE;
}

// src/greenbox.ts
function _typeof5(o) {
  "@babel/helpers - typeof";
  return _typeof5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof5(o);
}
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
  return (r = _toPropertyKey5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return _typeof5(i) == "symbol" ? i : i + "";
}
function _toPrimitive5(t, r) {
  if (_typeof5(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var i = e.call(t, r || "default");
    if (_typeof5(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
var getBoolean3 = property_exports.getBoolean, getNumber2 = property_exports.getNumber;
function checkIotMs() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return getIotMs().map(function(iotm) {
    return [iotm.id, getBindableStatus(iotm, options)];
  });
}
function checkIotYs() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return getIotYs().map(function(ioty) {
    return [ioty.id, getBindableStatus(ioty, options)];
  });
}
function checkItems() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return specialItems.map(function(id) {
    var _options$force;
    return [id, (_options$force = options.force) !== null && _options$force !== void 0 && _options$force.includes(id) || haveItem(import_kolmafia10.Item.get(id)) ? ItemStatus.HAVE : ItemStatus.NONE];
  });
}
function checkSkills() {
  var permedSkills = (0, import_kolmafia10.getPermedSkills)();
  function getStatus(skill) {
    if ((0, import_kolmafia10.toInt)(skill) === 7254 && getNumber2("skillLevel7254") > 0)
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
    return getNumber2("skillLevel".concat((0, import_kolmafia10.toInt)(skill)));
  }
  return import_kolmafia10.Skill.all().filter(function(skill) {
    return skill.permable || (0, import_kolmafia10.toInt)(skill) === 7254;
  }).map(function(skill) {
    return [(0, import_kolmafia10.toInt)(skill), getStatus(skill), getLevel(skill)];
  });
}
function getHundredPercentFamiliars() {
  for (var history = (0, import_kolmafia10.visitUrl)("ascensionhistory.php?back=self&who=".concat((0, import_kolmafia10.myId)()), !1) + (0, import_kolmafia10.visitUrl)("ascensionhistory.php?back=self&prens13=1&who=".concat((0, import_kolmafia10.myId)()), !1), set = /* @__PURE__ */ new Set(), pattern = /alt="([^"]*?) \(100%\)/gm, m; (m = pattern.exec(history)) !== null; ) set.add(import_kolmafia10.Familiar.get(m[1]));
  return set;
}
function checkFamiliars() {
  var hundredPercentFamiliars = getHundredPercentFamiliars();
  function getStatus(familiar) {
    return (0, import_kolmafia10.haveFamiliar)(familiar) ? FamiliarStatus.TERRARIUM : familiar.hatchling !== import_kolmafia10.Item.none && haveItem(familiar.hatchling) ? FamiliarStatus.HATCHLING : FamiliarStatus.NONE;
  }
  function getHundredPercent(familiar) {
    return hundredPercentFamiliars.has(familiar);
  }
  return import_kolmafia10.Familiar.all().map(function(familiar) {
    return [(0, import_kolmafia10.toInt)(familiar), getStatus(familiar), getHundredPercent(familiar)];
  });
}
function checkTrophies() {
  var page = (0, import_kolmafia10.visitUrl)("trophies.php");
  function getStatus(trophy) {
    return page.includes('"trophy'.concat(trophy.id, '"')) ? TrophyStatus.HAVE : TrophyStatus.NONE;
  }
  return getTrophies().map(function(trophy) {
    return [trophy.id, getStatus(trophy)];
  });
}
function haveOutfitPieces(outfit) {
  return (0, import_kolmafia10.outfitPieces)(outfit).every(function(piece) {
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
  return getOutfitTattoos(getTattoos()).map(function(tattoo) {
    return [tattoo.outfit, getTattooStatus(page, tattoo)];
  });
}
function checkMiscTattoos(page) {
  return getMiscTattoos(getTattoos()).map(function(tattoo) {
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
  var getTattooLevelForPage = function(t) {
    return getTattooStatus(tattoos2, t);
  };
  return getPaths().map(function(path) {
    var level = getPathLevel(path), items = path.items.map(function(i) {
      return haveItem(import_kolmafia10.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    }), equipment = path.equipment.map(function(i) {
      return haveItem(import_kolmafia10.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    }), tats = path.tattoos.map(getTattooLevelForPage);
    return [path.id, level, items, equipment, tats];
  });
}
function checkMeta() {
  return {
    name: (0, import_kolmafia10.myName)(),
    id: (0, import_kolmafia10.myId)(),
    timestamp: (/* @__PURE__ */ new Date()).getTime(),
    revision: (0, import_kolmafia10.getRevision)(),
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
    (0, import_kolmafia10.printHtml)("\n      Usage:\n      <table border=0>\n      <tr><td>greenbox [...options]</td></tr>\n      </table>\n      Options:\n      <table border=0>\n      <tr><td>--help -h</td><td>See this message</td></tr>\n      <tr><td>--wipe -w</td><td>Wipe your public profile</td></tr>\n      <tr><td>--private -w</td><td>Generate a link without updating your public profile</td></tr>\n      </table>\n    ");
    return;
  }
  if (hasFlag(args, "--wipe", "-w")) {
    Kmail.send(3501234, "GREENBOX:WIPE"), (0, import_kolmafia10.printHtml)("Your request to wipe your public profile has been sent, you'll receive a Kmail confirming success soon!");
    return;
  }
  var keepPrivate = hasFlag(args, "--private", "-p");
  if ((0, import_kolmafia10.printHtml)("Deciding your fate..."), (0, import_kolmafia10.inMultiFight)() || (0, import_kolmafia10.handlingChoice)() || (0, import_kolmafia10.currentRound)() !== 0) {
    (0, import_kolmafia10.printHtml)("<b><font color=red>You are in a combat or a choice adventure so your greenboxes will fail. Exiting...</font></b>");
    return;
  }
  getBoolean3("kingLiberated") || (0, import_kolmafia10.printHtml)("<b><font color=red>You are still in run so your greenboxes will probably be wrong</font></b>");
  var tattoos2 = (0, import_kolmafia10.visitUrl)("account_tattoos.php"), code = compress(_objectSpread3(_objectSpread3({
    meta: checkMeta(),
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies()
  }, checkTattoos(tattoos2)), {}, {
    paths: checkPaths(tattoos2),
    iotms: checkIotMs(),
    iotys: checkIotYs(),
    items: checkItems()
  })), link = "https://greenbox.loathers.net/?".concat(keepPrivate ? "d=".concat(code) : "u=".concat((0, import_kolmafia10.myId)()));
  keepPrivate || Kmail.send(3501234, "GREENBOX:".concat(code)), (0, import_kolmafia10.printHtml)('All done! To see your greenboxes, visit: <a href="'.concat(link, '">').concat(link, "</a>"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkTattoos,
  getTattooStatus,
  main
});
