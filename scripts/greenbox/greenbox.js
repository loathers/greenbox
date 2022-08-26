"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __commonJS = function(cb, mod) {
  return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};
var __copyProps = function(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: function(k) {
          return from[k];
        }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  );
};

// kolmafia-polyfill.js
var kolmafia, console, global;
var init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia");
    console = {
      log: kolmafia.print
    };
    global = {
      encodeURI: encodeURI,
      decodeURI: decodeURI,
      encodeURIComponent: encodeURIComponent,
      decodeURIComponent: decodeURIComponent
    };
  }
});

// ../../node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "../../node_modules/core-js/internals/global.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var check = function check2(it) {
      return it && it.Math == Math && it;
    };
    module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || function() {
      return this;
    }() || Function("return this")();
  }
});

// ../../node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "../../node_modules/core-js/internals/fails.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// ../../node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "../../node_modules/core-js/internals/descriptors.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    module2.exports = !fails2(function() {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] != 7;
    });
  }
});

// ../../node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "../../node_modules/core-js/internals/function-bind-native.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    module2.exports = !fails2(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// ../../node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "../../node_modules/core-js/internals/function-call.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native();
    var call2 = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call2.bind(call2) : function() {
      return call2.apply(call2, arguments);
    };
  }
});

// ../../node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "../../node_modules/core-js/internals/object-property-is-enumerable.js": function(exports2) {
    "use strict";
    init_kolmafia_polyfill();
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// ../../node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "../../node_modules/core-js/internals/create-property-descriptor.js": function(exports2, module2) {
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

// ../../node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "../../node_modules/core-js/internals/function-uncurry-this.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var bind = FunctionPrototype.bind;
    var call2 = FunctionPrototype.call;
    var uncurryThis2 = NATIVE_BIND && bind.bind(call2, call2);
    module2.exports = NATIVE_BIND ? function(fn) {
      return fn && uncurryThis2(fn);
    } : function(fn) {
      return fn && function() {
        return call2.apply(fn, arguments);
      };
    };
  }
});

// ../../node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "../../node_modules/core-js/internals/classof-raw.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var toString2 = uncurryThis2({}.toString);
    var stringSlice = uncurryThis2("".slice);
    module2.exports = function(it) {
      return stringSlice(toString2(it), 8, -1);
    };
  }
});

// ../../node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "../../node_modules/core-js/internals/indexed-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var fails2 = require_fails();
    var classof2 = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis2("".split);
    module2.exports = fails2(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof2(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// ../../node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "../../node_modules/core-js/internals/require-object-coercible.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var $TypeError2 = TypeError;
    module2.exports = function(it) {
      if (it == void 0)
        throw $TypeError2("Can't call method on " + it);
      return it;
    };
  }
});

// ../../node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "../../node_modules/core-js/internals/to-indexed-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible2 = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible2(it));
    };
  }
});

// ../../node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "../../node_modules/core-js/internals/is-callable.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = function(argument) {
      return typeof argument == "function";
    };
  }
});

// ../../node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "../../node_modules/core-js/internals/is-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// ../../node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "../../node_modules/core-js/internals/get-built-in.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function aFunction2(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// ../../node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "../../node_modules/core-js/internals/object-is-prototype-of.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    module2.exports = uncurryThis2({}.isPrototypeOf);
  }
});

// ../../node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "../../node_modules/core-js/internals/engine-user-agent.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// ../../node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "../../node_modules/core-js/internals/engine-v8-version.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// ../../node_modules/core-js/internals/native-symbol.js
var require_native_symbol = __commonJS({
  "../../node_modules/core-js/internals/native-symbol.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var V8_VERSION = require_engine_v8_version();
    var fails2 = require_fails();
    module2.exports = !!Object.getOwnPropertySymbols && !fails2(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// ../../node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "../../node_modules/core-js/internals/use-symbol-as-uid.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var NATIVE_SYMBOL = require_native_symbol();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// ../../node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "../../node_modules/core-js/internals/is-symbol.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// ../../node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "../../node_modules/core-js/internals/try-to-string.js": function(exports2, module2) {
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
    init_kolmafia_polyfill();
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError2 = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw $TypeError2(tryToString(argument) + " is not a function");
    };
  }
});

// ../../node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "../../node_modules/core-js/internals/get-method.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var aCallable = require_a_callable();
    module2.exports = function(V, P) {
      var func = V[P];
      return func == null ? void 0 : aCallable(func);
    };
  }
});

// ../../node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "../../node_modules/core-js/internals/ordinary-to-primitive.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call2 = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError2 = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call2(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call2(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call2(fn, input)))
        return val;
      throw $TypeError2("Can't convert object to primitive value");
    };
  }
});

// ../../node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "../../node_modules/core-js/internals/is-pure.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = false;
  }
});

// ../../node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "../../node_modules/core-js/internals/define-global-property.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, {
          value: value,
          configurable: true,
          writable: true
        });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// ../../node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "../../node_modules/core-js/internals/shared-store.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// ../../node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "../../node_modules/core-js/internals/shared.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var IS_PURE2 = require_is_pure();
    var store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.24.1",
      mode: IS_PURE2 ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.24.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// ../../node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "../../node_modules/core-js/internals/to-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var requireObjectCoercible2 = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible2(argument));
    };
  }
});

// ../../node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "../../node_modules/core-js/internals/has-own-property.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis2({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// ../../node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "../../node_modules/core-js/internals/uid.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString2 = uncurryThis2(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString2(++id + postfix, 36);
    };
  }
});

// ../../node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "../../node_modules/core-js/internals/well-known-symbol.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_native_symbol();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var WellKnownSymbolsStore = shared("wks");
    var Symbol2 = global2.Symbol;
    var symbolFor = Symbol2 && Symbol2["for"];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
          WellKnownSymbolsStore[name] = Symbol2[name];
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// ../../node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "../../node_modules/core-js/internals/to-primitive.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call2 = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod2 = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol2 = require_well_known_symbol();
    var $TypeError2 = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod2(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call2(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw $TypeError2("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// ../../node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "../../node_modules/core-js/internals/to-property-key.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// ../../node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "../../node_modules/core-js/internals/document-create-element.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// ../../node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "../../node_modules/core-js/internals/ie8-dom-define.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var fails2 = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails2(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// ../../node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "../../node_modules/core-js/internals/object-get-own-property-descriptor.js": function(exports2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var call2 = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call2(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// ../../node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "../../node_modules/core-js/internals/v8-prototype-define-bug.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var fails2 = require_fails();
    module2.exports = DESCRIPTORS && fails2(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype != 42;
    });
  }
});

// ../../node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "../../node_modules/core-js/internals/an-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isObject = require_is_object();
    var $String = String;
    var $TypeError2 = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw $TypeError2($String(argument) + " is not an object");
    };
  }
});

// ../../node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "../../node_modules/core-js/internals/object-define-property.js": function(exports2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject2 = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError2 = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports2.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject2(O);
      P = toPropertyKey(P);
      anObject2(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject2(O);
      P = toPropertyKey(P);
      anObject2(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError2("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// ../../node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "../../node_modules/core-js/internals/create-non-enumerable-property.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// ../../node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "../../node_modules/core-js/internals/function-name.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
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
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis2(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// ../../node_modules/core-js/internals/native-weak-map.js
var require_native_weak_map = __commonJS({
  "../../node_modules/core-js/internals/native-weak-map.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var isCallable = require_is_callable();
    var inspectSource = require_inspect_source();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));
  }
});

// ../../node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "../../node_modules/core-js/internals/shared-key.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// ../../node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "../../node_modules/core-js/internals/hidden-keys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// ../../node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "../../node_modules/core-js/internals/internal-state.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var NATIVE_WEAK_MAP = require_native_weak_map();
    var global2 = require_global();
    var uncurryThis2 = require_function_uncurry_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function enforce2(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function getterFor2(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      wmget = uncurryThis2(store.get);
      wmhas = uncurryThis2(store.has);
      wmset = uncurryThis2(store.set);
      set = function set2(it, metadata) {
        if (wmhas(store, it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
      };
      get = function get2(it) {
        return wmget(store, it) || {};
      };
      has = function has2(it) {
        return wmhas(store, it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function set2(it, metadata) {
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function get2(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function has2(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var wmget;
    var wmhas;
    var wmset;
    var STATE;
    module2.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
  }
});

// ../../node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "../../node_modules/core-js/internals/make-built-in.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule2 = require_internal_state();
    var enforceInternalState = InternalStateModule2.enforce;
    var getInternalState2 = InternalStateModule2.get;
    var defineProperty = Object.defineProperty;
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails2(function() {
      return defineProperty(function() {
      }, "length", {
        value: 8
      }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (String(name).slice(0, 7) === "Symbol(") {
        name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", {
            value: name,
            configurable: true
          });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", {
          value: options.arity
        });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", {
              writable: false
            });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = TEMPLATE.join(typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString2() {
      return isCallable(this) && getInternalState2(this).source || inspectSource(this);
    }, "toString");
  }
});

// ../../node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "../../node_modules/core-js/internals/define-built-in.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  }
});

// ../../node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "../../node_modules/core-js/internals/math-trunc.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// ../../node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "../../node_modules/core-js/internals/to-integer-or-infinity.js": function(exports2, module2) {
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
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// ../../node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "../../node_modules/core-js/internals/to-length.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// ../../node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "../../node_modules/core-js/internals/length-of-array-like.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toLength2 = require_to_length();
    module2.exports = function(obj) {
      return toLength2(obj.length);
    };
  }
});

// ../../node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "../../node_modules/core-js/internals/array-includes.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function createMethod2(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      includes: createMethod(true),
      indexOf: createMethod(false)
    };
  }
});

// ../../node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "../../node_modules/core-js/internals/object-keys-internal.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis2([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) {
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      }
      while (names.length > i) {
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      }
      return result;
    };
  }
});

// ../../node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "../../node_modules/core-js/internals/enum-bug-keys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// ../../node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "../../node_modules/core-js/internals/object-get-own-property-names.js": function(exports2) {
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// ../../node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "../../node_modules/core-js/internals/object-get-own-property-symbols.js": function(exports2) {
    init_kolmafia_polyfill();
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// ../../node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "../../node_modules/core-js/internals/own-keys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    var uncurryThis2 = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject2 = require_an_object();
    var concat = uncurryThis2([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys3(it) {
      var keys = getOwnPropertyNamesModule.f(anObject2(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// ../../node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "../../node_modules/core-js/internals/copy-constructor-properties.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var hasOwn = require_has_own_property();
    var ownKeys3 = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys3(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// ../../node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "../../node_modules/core-js/internals/is-forced.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function isForced2(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails2(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// ../../node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "../../node_modules/core-js/internals/export.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn2 = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = (global2[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn2(target, key, sourceProperty, options);
        }
    };
  }
});

// ../../node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "../../node_modules/core-js/internals/object-keys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// ../../node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "../../node_modules/core-js/internals/object-define-properties.js": function(exports2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject2 = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports2.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject2(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) {
        definePropertyModule.f(O, key = keys[index++], props[key]);
      }
      return O;
    };
  }
});

// ../../node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "../../node_modules/core-js/internals/html.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// ../../node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "../../node_modules/core-js/internals/object-create.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var anObject2 = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function EmptyConstructor2() {
    };
    var scriptTag = function scriptTag2(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX2(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame2() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var _NullProtoObject = function NullProtoObject() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      _NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) {
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      }
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject2(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = _NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// ../../node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "../../node_modules/core-js/internals/correct-prototype-getter.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    module2.exports = !fails2(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// ../../node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "../../node_modules/core-js/internals/object-get-prototype-of.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module2.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject(O);
      if (hasOwn(object, IE_PROTO))
        return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// ../../node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "../../node_modules/core-js/internals/iterators-core.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    var isCallable = require_is_callable();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn2 = require_define_built_in();
    var wellKnownSymbol2 = require_well_known_symbol();
    var IS_PURE2 = require_is_pure();
    var ITERATOR = wellKnownSymbol2("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator))
        BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
          IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == void 0 || fails2(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE)
      IteratorPrototype = {};
    else if (IS_PURE2)
      IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn2(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module2.exports = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };
  }
});

// ../../node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "../../node_modules/core-js/internals/set-to-string-tag.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var defineProperty = require_object_define_property().f;
    var hasOwn = require_has_own_property();
    var wellKnownSymbol2 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    module2.exports = function(target, TAG, STATIC) {
      if (target && !STATIC)
        target = target.prototype;
      if (target && !hasOwn(target, TO_STRING_TAG)) {
        defineProperty(target, TO_STRING_TAG, {
          configurable: true,
          value: TAG
        });
      }
    };
  }
});

// ../../node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "../../node_modules/core-js/internals/iterators.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// ../../node_modules/core-js/internals/create-iterator-constructor.js
var require_create_iterator_constructor = __commonJS({
  "../../node_modules/core-js/internals/create-iterator-constructor.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = function returnThis2() {
      return this;
    };
    module2.exports = function(IteratorConstructor, NAME, next2, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME + " Iterator";
      IteratorConstructor.prototype = create(IteratorPrototype, {
        next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next2)
      });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
  }
});

// ../../node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "../../node_modules/core-js/internals/to-string-tag-support.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol2 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// ../../node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "../../node_modules/core-js/internals/classof.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol2 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function tryGet2(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// ../../node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "../../node_modules/core-js/internals/to-string.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var classof2 = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof2(argument) === "Symbol")
        throw TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// ../../node_modules/core-js/internals/is-regexp.js
var require_is_regexp = __commonJS({
  "../../node_modules/core-js/internals/is-regexp.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isObject = require_is_object();
    var classof2 = require_classof_raw();
    var wellKnownSymbol2 = require_well_known_symbol();
    var MATCH = wellKnownSymbol2("match");
    module2.exports = function(it) {
      var isRegExp2;
      return isObject(it) && ((isRegExp2 = it[MATCH]) !== void 0 ? !!isRegExp2 : classof2(it) == "RegExp");
    };
  }
});

// ../../node_modules/core-js/internals/regexp-flags.js
var require_regexp_flags = __commonJS({
  "../../node_modules/core-js/internals/regexp-flags.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var anObject2 = require_an_object();
    module2.exports = function() {
      var that = anObject2(this);
      var result = "";
      if (that.hasIndices)
        result += "d";
      if (that.global)
        result += "g";
      if (that.ignoreCase)
        result += "i";
      if (that.multiline)
        result += "m";
      if (that.dotAll)
        result += "s";
      if (that.unicode)
        result += "u";
      if (that.unicodeSets)
        result += "v";
      if (that.sticky)
        result += "y";
      return result;
    };
  }
});

// ../../node_modules/core-js/internals/regexp-get-flags.js
var require_regexp_get_flags = __commonJS({
  "../../node_modules/core-js/internals/regexp-get-flags.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call2 = require_function_call();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var regExpFlags = require_regexp_flags();
    var RegExpPrototype2 = RegExp.prototype;
    module2.exports = function(R) {
      var flags = R.flags;
      return flags === void 0 && !("flags" in RegExpPrototype2) && !hasOwn(R, "flags") && isPrototypeOf(RegExpPrototype2, R) ? call2(regExpFlags, R) : flags;
    };
  }
});

// ../../node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "../../node_modules/core-js/internals/is-constructor.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var fails2 = require_fails();
    var isCallable = require_is_callable();
    var classof2 = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function noop2() {
    };
    var empty = [];
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis2(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      try {
        construct(noop, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      switch (classof2(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module2.exports = !construct || fails2(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// ../../node_modules/core-js/internals/a-constructor.js
var require_a_constructor = __commonJS({
  "../../node_modules/core-js/internals/a-constructor.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isConstructor = require_is_constructor();
    var tryToString = require_try_to_string();
    var $TypeError2 = TypeError;
    module2.exports = function(argument) {
      if (isConstructor(argument))
        return argument;
      throw $TypeError2(tryToString(argument) + " is not a constructor");
    };
  }
});

// ../../node_modules/core-js/internals/species-constructor.js
var require_species_constructor = __commonJS({
  "../../node_modules/core-js/internals/species-constructor.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var anObject2 = require_an_object();
    var aConstructor = require_a_constructor();
    var wellKnownSymbol2 = require_well_known_symbol();
    var SPECIES = wellKnownSymbol2("species");
    module2.exports = function(O, defaultConstructor) {
      var C = anObject2(O).constructor;
      var S;
      return C === void 0 || (S = anObject2(C)[SPECIES]) == void 0 ? defaultConstructor : aConstructor(S);
    };
  }
});

// ../../node_modules/core-js/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "../../node_modules/core-js/internals/string-multibyte.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var toString2 = require_to_string();
    var requireObjectCoercible2 = require_require_object_coercible();
    var charAt = uncurryThis2("".charAt);
    var charCodeAt = uncurryThis2("".charCodeAt);
    var stringSlice = uncurryThis2("".slice);
    var createMethod = function createMethod2(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString2(requireObjectCoercible2($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size)
          return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    module2.exports = {
      codeAt: createMethod(false),
      charAt: createMethod(true)
    };
  }
});

// ../../node_modules/core-js/internals/advance-string-index.js
var require_advance_string_index = __commonJS({
  "../../node_modules/core-js/internals/advance-string-index.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var charAt = require_string_multibyte().charAt;
    module2.exports = function(S, index, unicode) {
      return index + (unicode ? charAt(S, index).length : 1);
    };
  }
});

// ../../node_modules/core-js/internals/regexp-sticky-helpers.js
var require_regexp_sticky_helpers = __commonJS({
  "../../node_modules/core-js/internals/regexp-sticky-helpers.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    var global2 = require_global();
    var $RegExp = global2.RegExp;
    var UNSUPPORTED_Y = fails2(function() {
      var re = $RegExp("a", "y");
      re.lastIndex = 2;
      return re.exec("abcd") != null;
    });
    var MISSED_STICKY = UNSUPPORTED_Y || fails2(function() {
      return !$RegExp("a", "y").sticky;
    });
    var BROKEN_CARET = UNSUPPORTED_Y || fails2(function() {
      var re = $RegExp("^r", "gy");
      re.lastIndex = 2;
      return re.exec("str") != null;
    });
    module2.exports = {
      BROKEN_CARET: BROKEN_CARET,
      MISSED_STICKY: MISSED_STICKY,
      UNSUPPORTED_Y: UNSUPPORTED_Y
    };
  }
});

// ../../node_modules/core-js/internals/regexp-unsupported-dot-all.js
var require_regexp_unsupported_dot_all = __commonJS({
  "../../node_modules/core-js/internals/regexp-unsupported-dot-all.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    var global2 = require_global();
    var $RegExp = global2.RegExp;
    module2.exports = fails2(function() {
      var re = $RegExp(".", "s");
      return !(re.dotAll && re.exec("\n") && re.flags === "s");
    });
  }
});

// ../../node_modules/core-js/internals/regexp-unsupported-ncg.js
var require_regexp_unsupported_ncg = __commonJS({
  "../../node_modules/core-js/internals/regexp-unsupported-ncg.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails2 = require_fails();
    var global2 = require_global();
    var $RegExp = global2.RegExp;
    module2.exports = fails2(function() {
      var re = $RegExp("(?<a>b)", "g");
      return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
    });
  }
});

// ../../node_modules/core-js/internals/regexp-exec.js
var require_regexp_exec = __commonJS({
  "../../node_modules/core-js/internals/regexp-exec.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var call2 = require_function_call();
    var uncurryThis2 = require_function_uncurry_this();
    var toString2 = require_to_string();
    var regexpFlags = require_regexp_flags();
    var stickyHelpers = require_regexp_sticky_helpers();
    var shared = require_shared();
    var create = require_object_create();
    var getInternalState2 = require_internal_state().get;
    var UNSUPPORTED_DOT_ALL = require_regexp_unsupported_dot_all();
    var UNSUPPORTED_NCG = require_regexp_unsupported_ncg();
    var nativeReplace = shared("native-string-replace", String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt = uncurryThis2("".charAt);
    var indexOf = uncurryThis2("".indexOf);
    var replace = uncurryThis2("".replace);
    var stringSlice = uncurryThis2("".slice);
    var UPDATES_LAST_INDEX_WRONG = function() {
      var re1 = /a/;
      var re2 = /b*/g;
      call2(nativeExec, re1, "a");
      call2(nativeExec, re2, "a");
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    }();
    var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
    var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
    if (PATCH) {
      patchedExec = function exec(string) {
        var re = this;
        var state = getInternalState2(re);
        var str = toString2(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i, object, group;
        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = call2(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }
        var groups = state.groups;
        var sticky = UNSUPPORTED_Y && re.sticky;
        var flags = call2(regexpFlags, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
          flags = replace(flags, "y", "");
          if (indexOf(flags, "g") === -1) {
            flags += "g";
          }
          strCopy = stringSlice(str, re.lastIndex);
          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== "\n")) {
            source = "(?: " + source + ")";
            strCopy = " " + strCopy;
            charsAdded++;
          }
          reCopy = new RegExp("^(?:" + source + ")", flags);
        }
        if (NPCG_INCLUDED) {
          reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
        }
        if (UPDATES_LAST_INDEX_WRONG)
          lastIndex = re.lastIndex;
        match = call2(nativeExec, sticky ? reCopy : re, strCopy);
        if (sticky) {
          if (match) {
            match.input = stringSlice(match.input, charsAdded);
            match[0] = stringSlice(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else
            re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
          call2(nativeReplace, match[0], reCopy, function() {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === void 0)
                match[i] = void 0;
            }
          });
        }
        if (match && groups) {
          match.groups = object = create(null);
          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match[group[1]];
          }
        }
        return match;
      };
    }
    module2.exports = patchedExec;
  }
});

// ../../node_modules/core-js/internals/regexp-exec-abstract.js
var require_regexp_exec_abstract = __commonJS({
  "../../node_modules/core-js/internals/regexp-exec-abstract.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call2 = require_function_call();
    var anObject2 = require_an_object();
    var isCallable = require_is_callable();
    var classof2 = require_classof_raw();
    var regexpExec = require_regexp_exec();
    var $TypeError2 = TypeError;
    module2.exports = function(R, S) {
      var exec = R.exec;
      if (isCallable(exec)) {
        var result = call2(exec, R, S);
        if (result !== null)
          anObject2(result);
        return result;
      }
      if (classof2(R) === "RegExp")
        return call2(regexpExec, R, S);
      throw $TypeError2("RegExp#exec called on incompatible receiver");
    };
  }
});

// ../../node_modules/he/he.js
var require_he = __commonJS({
  "../../node_modules/he/he.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    (function(root) {
      var freeExports = typeof exports2 == "object" && exports2;
      var freeModule = typeof module2 == "object" && module2 && module2.exports == freeExports && module2;
      var freeGlobal = typeof global == "object" && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
      }
      var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      var regexAsciiWhitelist = /[\x01-\x7F]/g;
      var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
      var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
      var encodeMap = {
        "\xAD": "shy",
        "\u200C": "zwnj",
        "\u200D": "zwj",
        "\u200E": "lrm",
        "\u2063": "ic",
        "\u2062": "it",
        "\u2061": "af",
        "\u200F": "rlm",
        "\u200B": "ZeroWidthSpace",
        "\u2060": "NoBreak",
        "\u0311": "DownBreve",
        "\u20DB": "tdot",
        "\u20DC": "DotDot",
        "	": "Tab",
        "\n": "NewLine",
        "\u2008": "puncsp",
        "\u205F": "MediumSpace",
        "\u2009": "thinsp",
        "\u200A": "hairsp",
        "\u2004": "emsp13",
        "\u2002": "ensp",
        "\u2005": "emsp14",
        "\u2003": "emsp",
        "\u2007": "numsp",
        "\xA0": "nbsp",
        "\u205F\u200A": "ThickSpace",
        "\u203E": "oline",
        "_": "lowbar",
        "\u2010": "dash",
        "\u2013": "ndash",
        "\u2014": "mdash",
        "\u2015": "horbar",
        ",": "comma",
        ";": "semi",
        "\u204F": "bsemi",
        ":": "colon",
        "\u2A74": "Colone",
        "!": "excl",
        "\xA1": "iexcl",
        "?": "quest",
        "\xBF": "iquest",
        ".": "period",
        "\u2025": "nldr",
        "\u2026": "mldr",
        "\xB7": "middot",
        "'": "apos",
        "\u2018": "lsquo",
        "\u2019": "rsquo",
        "\u201A": "sbquo",
        "\u2039": "lsaquo",
        "\u203A": "rsaquo",
        '"': "quot",
        "\u201C": "ldquo",
        "\u201D": "rdquo",
        "\u201E": "bdquo",
        "\xAB": "laquo",
        "\xBB": "raquo",
        "(": "lpar",
        ")": "rpar",
        "[": "lsqb",
        "]": "rsqb",
        "{": "lcub",
        "}": "rcub",
        "\u2308": "lceil",
        "\u2309": "rceil",
        "\u230A": "lfloor",
        "\u230B": "rfloor",
        "\u2985": "lopar",
        "\u2986": "ropar",
        "\u298B": "lbrke",
        "\u298C": "rbrke",
        "\u298D": "lbrkslu",
        "\u298E": "rbrksld",
        "\u298F": "lbrksld",
        "\u2990": "rbrkslu",
        "\u2991": "langd",
        "\u2992": "rangd",
        "\u2993": "lparlt",
        "\u2994": "rpargt",
        "\u2995": "gtlPar",
        "\u2996": "ltrPar",
        "\u27E6": "lobrk",
        "\u27E7": "robrk",
        "\u27E8": "lang",
        "\u27E9": "rang",
        "\u27EA": "Lang",
        "\u27EB": "Rang",
        "\u27EC": "loang",
        "\u27ED": "roang",
        "\u2772": "lbbrk",
        "\u2773": "rbbrk",
        "\u2016": "Vert",
        "\xA7": "sect",
        "\xB6": "para",
        "@": "commat",
        "*": "ast",
        "/": "sol",
        "undefined": null,
        "&": "amp",
        "#": "num",
        "%": "percnt",
        "\u2030": "permil",
        "\u2031": "pertenk",
        "\u2020": "dagger",
        "\u2021": "Dagger",
        "\u2022": "bull",
        "\u2043": "hybull",
        "\u2032": "prime",
        "\u2033": "Prime",
        "\u2034": "tprime",
        "\u2057": "qprime",
        "\u2035": "bprime",
        "\u2041": "caret",
        "`": "grave",
        "\xB4": "acute",
        "\u02DC": "tilde",
        "^": "Hat",
        "\xAF": "macr",
        "\u02D8": "breve",
        "\u02D9": "dot",
        "\xA8": "die",
        "\u02DA": "ring",
        "\u02DD": "dblac",
        "\xB8": "cedil",
        "\u02DB": "ogon",
        "\u02C6": "circ",
        "\u02C7": "caron",
        "\xB0": "deg",
        "\xA9": "copy",
        "\xAE": "reg",
        "\u2117": "copysr",
        "\u2118": "wp",
        "\u211E": "rx",
        "\u2127": "mho",
        "\u2129": "iiota",
        "\u2190": "larr",
        "\u219A": "nlarr",
        "\u2192": "rarr",
        "\u219B": "nrarr",
        "\u2191": "uarr",
        "\u2193": "darr",
        "\u2194": "harr",
        "\u21AE": "nharr",
        "\u2195": "varr",
        "\u2196": "nwarr",
        "\u2197": "nearr",
        "\u2198": "searr",
        "\u2199": "swarr",
        "\u219D": "rarrw",
        "\u219D\u0338": "nrarrw",
        "\u219E": "Larr",
        "\u219F": "Uarr",
        "\u21A0": "Rarr",
        "\u21A1": "Darr",
        "\u21A2": "larrtl",
        "\u21A3": "rarrtl",
        "\u21A4": "mapstoleft",
        "\u21A5": "mapstoup",
        "\u21A6": "map",
        "\u21A7": "mapstodown",
        "\u21A9": "larrhk",
        "\u21AA": "rarrhk",
        "\u21AB": "larrlp",
        "\u21AC": "rarrlp",
        "\u21AD": "harrw",
        "\u21B0": "lsh",
        "\u21B1": "rsh",
        "\u21B2": "ldsh",
        "\u21B3": "rdsh",
        "\u21B5": "crarr",
        "\u21B6": "cularr",
        "\u21B7": "curarr",
        "\u21BA": "olarr",
        "\u21BB": "orarr",
        "\u21BC": "lharu",
        "\u21BD": "lhard",
        "\u21BE": "uharr",
        "\u21BF": "uharl",
        "\u21C0": "rharu",
        "\u21C1": "rhard",
        "\u21C2": "dharr",
        "\u21C3": "dharl",
        "\u21C4": "rlarr",
        "\u21C5": "udarr",
        "\u21C6": "lrarr",
        "\u21C7": "llarr",
        "\u21C8": "uuarr",
        "\u21C9": "rrarr",
        "\u21CA": "ddarr",
        "\u21CB": "lrhar",
        "\u21CC": "rlhar",
        "\u21D0": "lArr",
        "\u21CD": "nlArr",
        "\u21D1": "uArr",
        "\u21D2": "rArr",
        "\u21CF": "nrArr",
        "\u21D3": "dArr",
        "\u21D4": "iff",
        "\u21CE": "nhArr",
        "\u21D5": "vArr",
        "\u21D6": "nwArr",
        "\u21D7": "neArr",
        "\u21D8": "seArr",
        "\u21D9": "swArr",
        "\u21DA": "lAarr",
        "\u21DB": "rAarr",
        "\u21DD": "zigrarr",
        "\u21E4": "larrb",
        "\u21E5": "rarrb",
        "\u21F5": "duarr",
        "\u21FD": "loarr",
        "\u21FE": "roarr",
        "\u21FF": "hoarr",
        "\u2200": "forall",
        "\u2201": "comp",
        "\u2202": "part",
        "\u2202\u0338": "npart",
        "\u2203": "exist",
        "\u2204": "nexist",
        "\u2205": "empty",
        "\u2207": "Del",
        "\u2208": "in",
        "\u2209": "notin",
        "\u220B": "ni",
        "\u220C": "notni",
        "\u03F6": "bepsi",
        "\u220F": "prod",
        "\u2210": "coprod",
        "\u2211": "sum",
        "+": "plus",
        "\xB1": "pm",
        "\xF7": "div",
        "\xD7": "times",
        "<": "lt",
        "\u226E": "nlt",
        "<\u20D2": "nvlt",
        "=": "equals",
        "\u2260": "ne",
        "=\u20E5": "bne",
        "\u2A75": "Equal",
        ">": "gt",
        "\u226F": "ngt",
        ">\u20D2": "nvgt",
        "\xAC": "not",
        "|": "vert",
        "\xA6": "brvbar",
        "\u2212": "minus",
        "\u2213": "mp",
        "\u2214": "plusdo",
        "\u2044": "frasl",
        "\u2216": "setmn",
        "\u2217": "lowast",
        "\u2218": "compfn",
        "\u221A": "Sqrt",
        "\u221D": "prop",
        "\u221E": "infin",
        "\u221F": "angrt",
        "\u2220": "ang",
        "\u2220\u20D2": "nang",
        "\u2221": "angmsd",
        "\u2222": "angsph",
        "\u2223": "mid",
        "\u2224": "nmid",
        "\u2225": "par",
        "\u2226": "npar",
        "\u2227": "and",
        "\u2228": "or",
        "\u2229": "cap",
        "\u2229\uFE00": "caps",
        "\u222A": "cup",
        "\u222A\uFE00": "cups",
        "\u222B": "int",
        "\u222C": "Int",
        "\u222D": "tint",
        "\u2A0C": "qint",
        "\u222E": "oint",
        "\u222F": "Conint",
        "\u2230": "Cconint",
        "\u2231": "cwint",
        "\u2232": "cwconint",
        "\u2233": "awconint",
        "\u2234": "there4",
        "\u2235": "becaus",
        "\u2236": "ratio",
        "\u2237": "Colon",
        "\u2238": "minusd",
        "\u223A": "mDDot",
        "\u223B": "homtht",
        "\u223C": "sim",
        "\u2241": "nsim",
        "\u223C\u20D2": "nvsim",
        "\u223D": "bsim",
        "\u223D\u0331": "race",
        "\u223E": "ac",
        "\u223E\u0333": "acE",
        "\u223F": "acd",
        "\u2240": "wr",
        "\u2242": "esim",
        "\u2242\u0338": "nesim",
        "\u2243": "sime",
        "\u2244": "nsime",
        "\u2245": "cong",
        "\u2247": "ncong",
        "\u2246": "simne",
        "\u2248": "ap",
        "\u2249": "nap",
        "\u224A": "ape",
        "\u224B": "apid",
        "\u224B\u0338": "napid",
        "\u224C": "bcong",
        "\u224D": "CupCap",
        "\u226D": "NotCupCap",
        "\u224D\u20D2": "nvap",
        "\u224E": "bump",
        "\u224E\u0338": "nbump",
        "\u224F": "bumpe",
        "\u224F\u0338": "nbumpe",
        "\u2250": "doteq",
        "\u2250\u0338": "nedot",
        "\u2251": "eDot",
        "\u2252": "efDot",
        "\u2253": "erDot",
        "\u2254": "colone",
        "\u2255": "ecolon",
        "\u2256": "ecir",
        "\u2257": "cire",
        "\u2259": "wedgeq",
        "\u225A": "veeeq",
        "\u225C": "trie",
        "\u225F": "equest",
        "\u2261": "equiv",
        "\u2262": "nequiv",
        "\u2261\u20E5": "bnequiv",
        "\u2264": "le",
        "\u2270": "nle",
        "\u2264\u20D2": "nvle",
        "\u2265": "ge",
        "\u2271": "nge",
        "\u2265\u20D2": "nvge",
        "\u2266": "lE",
        "\u2266\u0338": "nlE",
        "\u2267": "gE",
        "\u2267\u0338": "ngE",
        "\u2268\uFE00": "lvnE",
        "\u2268": "lnE",
        "\u2269": "gnE",
        "\u2269\uFE00": "gvnE",
        "\u226A": "ll",
        "\u226A\u0338": "nLtv",
        "\u226A\u20D2": "nLt",
        "\u226B": "gg",
        "\u226B\u0338": "nGtv",
        "\u226B\u20D2": "nGt",
        "\u226C": "twixt",
        "\u2272": "lsim",
        "\u2274": "nlsim",
        "\u2273": "gsim",
        "\u2275": "ngsim",
        "\u2276": "lg",
        "\u2278": "ntlg",
        "\u2277": "gl",
        "\u2279": "ntgl",
        "\u227A": "pr",
        "\u2280": "npr",
        "\u227B": "sc",
        "\u2281": "nsc",
        "\u227C": "prcue",
        "\u22E0": "nprcue",
        "\u227D": "sccue",
        "\u22E1": "nsccue",
        "\u227E": "prsim",
        "\u227F": "scsim",
        "\u227F\u0338": "NotSucceedsTilde",
        "\u2282": "sub",
        "\u2284": "nsub",
        "\u2282\u20D2": "vnsub",
        "\u2283": "sup",
        "\u2285": "nsup",
        "\u2283\u20D2": "vnsup",
        "\u2286": "sube",
        "\u2288": "nsube",
        "\u2287": "supe",
        "\u2289": "nsupe",
        "\u228A\uFE00": "vsubne",
        "\u228A": "subne",
        "\u228B\uFE00": "vsupne",
        "\u228B": "supne",
        "\u228D": "cupdot",
        "\u228E": "uplus",
        "\u228F": "sqsub",
        "\u228F\u0338": "NotSquareSubset",
        "\u2290": "sqsup",
        "\u2290\u0338": "NotSquareSuperset",
        "\u2291": "sqsube",
        "\u22E2": "nsqsube",
        "\u2292": "sqsupe",
        "\u22E3": "nsqsupe",
        "\u2293": "sqcap",
        "\u2293\uFE00": "sqcaps",
        "\u2294": "sqcup",
        "\u2294\uFE00": "sqcups",
        "\u2295": "oplus",
        "\u2296": "ominus",
        "\u2297": "otimes",
        "\u2298": "osol",
        "\u2299": "odot",
        "\u229A": "ocir",
        "\u229B": "oast",
        "\u229D": "odash",
        "\u229E": "plusb",
        "\u229F": "minusb",
        "\u22A0": "timesb",
        "\u22A1": "sdotb",
        "\u22A2": "vdash",
        "\u22AC": "nvdash",
        "\u22A3": "dashv",
        "\u22A4": "top",
        "\u22A5": "bot",
        "\u22A7": "models",
        "\u22A8": "vDash",
        "\u22AD": "nvDash",
        "\u22A9": "Vdash",
        "\u22AE": "nVdash",
        "\u22AA": "Vvdash",
        "\u22AB": "VDash",
        "\u22AF": "nVDash",
        "\u22B0": "prurel",
        "\u22B2": "vltri",
        "\u22EA": "nltri",
        "\u22B3": "vrtri",
        "\u22EB": "nrtri",
        "\u22B4": "ltrie",
        "\u22EC": "nltrie",
        "\u22B4\u20D2": "nvltrie",
        "\u22B5": "rtrie",
        "\u22ED": "nrtrie",
        "\u22B5\u20D2": "nvrtrie",
        "\u22B6": "origof",
        "\u22B7": "imof",
        "\u22B8": "mumap",
        "\u22B9": "hercon",
        "\u22BA": "intcal",
        "\u22BB": "veebar",
        "\u22BD": "barvee",
        "\u22BE": "angrtvb",
        "\u22BF": "lrtri",
        "\u22C0": "Wedge",
        "\u22C1": "Vee",
        "\u22C2": "xcap",
        "\u22C3": "xcup",
        "\u22C4": "diam",
        "\u22C5": "sdot",
        "\u22C6": "Star",
        "\u22C7": "divonx",
        "\u22C8": "bowtie",
        "\u22C9": "ltimes",
        "\u22CA": "rtimes",
        "\u22CB": "lthree",
        "\u22CC": "rthree",
        "\u22CD": "bsime",
        "\u22CE": "cuvee",
        "\u22CF": "cuwed",
        "\u22D0": "Sub",
        "\u22D1": "Sup",
        "\u22D2": "Cap",
        "\u22D3": "Cup",
        "\u22D4": "fork",
        "\u22D5": "epar",
        "\u22D6": "ltdot",
        "\u22D7": "gtdot",
        "\u22D8": "Ll",
        "\u22D8\u0338": "nLl",
        "\u22D9": "Gg",
        "\u22D9\u0338": "nGg",
        "\u22DA\uFE00": "lesg",
        "\u22DA": "leg",
        "\u22DB": "gel",
        "\u22DB\uFE00": "gesl",
        "\u22DE": "cuepr",
        "\u22DF": "cuesc",
        "\u22E6": "lnsim",
        "\u22E7": "gnsim",
        "\u22E8": "prnsim",
        "\u22E9": "scnsim",
        "\u22EE": "vellip",
        "\u22EF": "ctdot",
        "\u22F0": "utdot",
        "\u22F1": "dtdot",
        "\u22F2": "disin",
        "\u22F3": "isinsv",
        "\u22F4": "isins",
        "\u22F5": "isindot",
        "\u22F5\u0338": "notindot",
        "\u22F6": "notinvc",
        "\u22F7": "notinvb",
        "\u22F9": "isinE",
        "\u22F9\u0338": "notinE",
        "\u22FA": "nisd",
        "\u22FB": "xnis",
        "\u22FC": "nis",
        "\u22FD": "notnivc",
        "\u22FE": "notnivb",
        "\u2305": "barwed",
        "\u2306": "Barwed",
        "\u230C": "drcrop",
        "\u230D": "dlcrop",
        "\u230E": "urcrop",
        "\u230F": "ulcrop",
        "\u2310": "bnot",
        "\u2312": "profline",
        "\u2313": "profsurf",
        "\u2315": "telrec",
        "\u2316": "target",
        "\u231C": "ulcorn",
        "\u231D": "urcorn",
        "\u231E": "dlcorn",
        "\u231F": "drcorn",
        "\u2322": "frown",
        "\u2323": "smile",
        "\u232D": "cylcty",
        "\u232E": "profalar",
        "\u2336": "topbot",
        "\u233D": "ovbar",
        "\u233F": "solbar",
        "\u237C": "angzarr",
        "\u23B0": "lmoust",
        "\u23B1": "rmoust",
        "\u23B4": "tbrk",
        "\u23B5": "bbrk",
        "\u23B6": "bbrktbrk",
        "\u23DC": "OverParenthesis",
        "\u23DD": "UnderParenthesis",
        "\u23DE": "OverBrace",
        "\u23DF": "UnderBrace",
        "\u23E2": "trpezium",
        "\u23E7": "elinters",
        "\u2423": "blank",
        "\u2500": "boxh",
        "\u2502": "boxv",
        "\u250C": "boxdr",
        "\u2510": "boxdl",
        "\u2514": "boxur",
        "\u2518": "boxul",
        "\u251C": "boxvr",
        "\u2524": "boxvl",
        "\u252C": "boxhd",
        "\u2534": "boxhu",
        "\u253C": "boxvh",
        "\u2550": "boxH",
        "\u2551": "boxV",
        "\u2552": "boxdR",
        "\u2553": "boxDr",
        "\u2554": "boxDR",
        "\u2555": "boxdL",
        "\u2556": "boxDl",
        "\u2557": "boxDL",
        "\u2558": "boxuR",
        "\u2559": "boxUr",
        "\u255A": "boxUR",
        "\u255B": "boxuL",
        "\u255C": "boxUl",
        "\u255D": "boxUL",
        "\u255E": "boxvR",
        "\u255F": "boxVr",
        "\u2560": "boxVR",
        "\u2561": "boxvL",
        "\u2562": "boxVl",
        "\u2563": "boxVL",
        "\u2564": "boxHd",
        "\u2565": "boxhD",
        "\u2566": "boxHD",
        "\u2567": "boxHu",
        "\u2568": "boxhU",
        "\u2569": "boxHU",
        "\u256A": "boxvH",
        "\u256B": "boxVh",
        "\u256C": "boxVH",
        "\u2580": "uhblk",
        "\u2584": "lhblk",
        "\u2588": "block",
        "\u2591": "blk14",
        "\u2592": "blk12",
        "\u2593": "blk34",
        "\u25A1": "squ",
        "\u25AA": "squf",
        "\u25AB": "EmptyVerySmallSquare",
        "\u25AD": "rect",
        "\u25AE": "marker",
        "\u25B1": "fltns",
        "\u25B3": "xutri",
        "\u25B4": "utrif",
        "\u25B5": "utri",
        "\u25B8": "rtrif",
        "\u25B9": "rtri",
        "\u25BD": "xdtri",
        "\u25BE": "dtrif",
        "\u25BF": "dtri",
        "\u25C2": "ltrif",
        "\u25C3": "ltri",
        "\u25CA": "loz",
        "\u25CB": "cir",
        "\u25EC": "tridot",
        "\u25EF": "xcirc",
        "\u25F8": "ultri",
        "\u25F9": "urtri",
        "\u25FA": "lltri",
        "\u25FB": "EmptySmallSquare",
        "\u25FC": "FilledSmallSquare",
        "\u2605": "starf",
        "\u2606": "star",
        "\u260E": "phone",
        "\u2640": "female",
        "\u2642": "male",
        "\u2660": "spades",
        "\u2663": "clubs",
        "\u2665": "hearts",
        "\u2666": "diams",
        "\u266A": "sung",
        "\u2713": "check",
        "\u2717": "cross",
        "\u2720": "malt",
        "\u2736": "sext",
        "\u2758": "VerticalSeparator",
        "\u27C8": "bsolhsub",
        "\u27C9": "suphsol",
        "\u27F5": "xlarr",
        "\u27F6": "xrarr",
        "\u27F7": "xharr",
        "\u27F8": "xlArr",
        "\u27F9": "xrArr",
        "\u27FA": "xhArr",
        "\u27FC": "xmap",
        "\u27FF": "dzigrarr",
        "\u2902": "nvlArr",
        "\u2903": "nvrArr",
        "\u2904": "nvHarr",
        "\u2905": "Map",
        "\u290C": "lbarr",
        "\u290D": "rbarr",
        "\u290E": "lBarr",
        "\u290F": "rBarr",
        "\u2910": "RBarr",
        "\u2911": "DDotrahd",
        "\u2912": "UpArrowBar",
        "\u2913": "DownArrowBar",
        "\u2916": "Rarrtl",
        "\u2919": "latail",
        "\u291A": "ratail",
        "\u291B": "lAtail",
        "\u291C": "rAtail",
        "\u291D": "larrfs",
        "\u291E": "rarrfs",
        "\u291F": "larrbfs",
        "\u2920": "rarrbfs",
        "\u2923": "nwarhk",
        "\u2924": "nearhk",
        "\u2925": "searhk",
        "\u2926": "swarhk",
        "\u2927": "nwnear",
        "\u2928": "toea",
        "\u2929": "tosa",
        "\u292A": "swnwar",
        "\u2933": "rarrc",
        "\u2933\u0338": "nrarrc",
        "\u2935": "cudarrr",
        "\u2936": "ldca",
        "\u2937": "rdca",
        "\u2938": "cudarrl",
        "\u2939": "larrpl",
        "\u293C": "curarrm",
        "\u293D": "cularrp",
        "\u2945": "rarrpl",
        "\u2948": "harrcir",
        "\u2949": "Uarrocir",
        "\u294A": "lurdshar",
        "\u294B": "ldrushar",
        "\u294E": "LeftRightVector",
        "\u294F": "RightUpDownVector",
        "\u2950": "DownLeftRightVector",
        "\u2951": "LeftUpDownVector",
        "\u2952": "LeftVectorBar",
        "\u2953": "RightVectorBar",
        "\u2954": "RightUpVectorBar",
        "\u2955": "RightDownVectorBar",
        "\u2956": "DownLeftVectorBar",
        "\u2957": "DownRightVectorBar",
        "\u2958": "LeftUpVectorBar",
        "\u2959": "LeftDownVectorBar",
        "\u295A": "LeftTeeVector",
        "\u295B": "RightTeeVector",
        "\u295C": "RightUpTeeVector",
        "\u295D": "RightDownTeeVector",
        "\u295E": "DownLeftTeeVector",
        "\u295F": "DownRightTeeVector",
        "\u2960": "LeftUpTeeVector",
        "\u2961": "LeftDownTeeVector",
        "\u2962": "lHar",
        "\u2963": "uHar",
        "\u2964": "rHar",
        "\u2965": "dHar",
        "\u2966": "luruhar",
        "\u2967": "ldrdhar",
        "\u2968": "ruluhar",
        "\u2969": "rdldhar",
        "\u296A": "lharul",
        "\u296B": "llhard",
        "\u296C": "rharul",
        "\u296D": "lrhard",
        "\u296E": "udhar",
        "\u296F": "duhar",
        "\u2970": "RoundImplies",
        "\u2971": "erarr",
        "\u2972": "simrarr",
        "\u2973": "larrsim",
        "\u2974": "rarrsim",
        "\u2975": "rarrap",
        "\u2976": "ltlarr",
        "\u2978": "gtrarr",
        "\u2979": "subrarr",
        "\u297B": "suplarr",
        "\u297C": "lfisht",
        "\u297D": "rfisht",
        "\u297E": "ufisht",
        "\u297F": "dfisht",
        "\u299A": "vzigzag",
        "\u299C": "vangrt",
        "\u299D": "angrtvbd",
        "\u29A4": "ange",
        "\u29A5": "range",
        "\u29A6": "dwangle",
        "\u29A7": "uwangle",
        "\u29A8": "angmsdaa",
        "\u29A9": "angmsdab",
        "\u29AA": "angmsdac",
        "\u29AB": "angmsdad",
        "\u29AC": "angmsdae",
        "\u29AD": "angmsdaf",
        "\u29AE": "angmsdag",
        "\u29AF": "angmsdah",
        "\u29B0": "bemptyv",
        "\u29B1": "demptyv",
        "\u29B2": "cemptyv",
        "\u29B3": "raemptyv",
        "\u29B4": "laemptyv",
        "\u29B5": "ohbar",
        "\u29B6": "omid",
        "\u29B7": "opar",
        "\u29B9": "operp",
        "\u29BB": "olcross",
        "\u29BC": "odsold",
        "\u29BE": "olcir",
        "\u29BF": "ofcir",
        "\u29C0": "olt",
        "\u29C1": "ogt",
        "\u29C2": "cirscir",
        "\u29C3": "cirE",
        "\u29C4": "solb",
        "\u29C5": "bsolb",
        "\u29C9": "boxbox",
        "\u29CD": "trisb",
        "\u29CE": "rtriltri",
        "\u29CF": "LeftTriangleBar",
        "\u29CF\u0338": "NotLeftTriangleBar",
        "\u29D0": "RightTriangleBar",
        "\u29D0\u0338": "NotRightTriangleBar",
        "\u29DC": "iinfin",
        "\u29DD": "infintie",
        "\u29DE": "nvinfin",
        "\u29E3": "eparsl",
        "\u29E4": "smeparsl",
        "\u29E5": "eqvparsl",
        "\u29EB": "lozf",
        "\u29F4": "RuleDelayed",
        "\u29F6": "dsol",
        "\u2A00": "xodot",
        "\u2A01": "xoplus",
        "\u2A02": "xotime",
        "\u2A04": "xuplus",
        "\u2A06": "xsqcup",
        "\u2A0D": "fpartint",
        "\u2A10": "cirfnint",
        "\u2A11": "awint",
        "\u2A12": "rppolint",
        "\u2A13": "scpolint",
        "\u2A14": "npolint",
        "\u2A15": "pointint",
        "\u2A16": "quatint",
        "\u2A17": "intlarhk",
        "\u2A22": "pluscir",
        "\u2A23": "plusacir",
        "\u2A24": "simplus",
        "\u2A25": "plusdu",
        "\u2A26": "plussim",
        "\u2A27": "plustwo",
        "\u2A29": "mcomma",
        "\u2A2A": "minusdu",
        "\u2A2D": "loplus",
        "\u2A2E": "roplus",
        "\u2A2F": "Cross",
        "\u2A30": "timesd",
        "\u2A31": "timesbar",
        "\u2A33": "smashp",
        "\u2A34": "lotimes",
        "\u2A35": "rotimes",
        "\u2A36": "otimesas",
        "\u2A37": "Otimes",
        "\u2A38": "odiv",
        "\u2A39": "triplus",
        "\u2A3A": "triminus",
        "\u2A3B": "tritime",
        "\u2A3C": "iprod",
        "\u2A3F": "amalg",
        "\u2A40": "capdot",
        "\u2A42": "ncup",
        "\u2A43": "ncap",
        "\u2A44": "capand",
        "\u2A45": "cupor",
        "\u2A46": "cupcap",
        "\u2A47": "capcup",
        "\u2A48": "cupbrcap",
        "\u2A49": "capbrcup",
        "\u2A4A": "cupcup",
        "\u2A4B": "capcap",
        "\u2A4C": "ccups",
        "\u2A4D": "ccaps",
        "\u2A50": "ccupssm",
        "\u2A53": "And",
        "\u2A54": "Or",
        "\u2A55": "andand",
        "\u2A56": "oror",
        "\u2A57": "orslope",
        "\u2A58": "andslope",
        "\u2A5A": "andv",
        "\u2A5B": "orv",
        "\u2A5C": "andd",
        "\u2A5D": "ord",
        "\u2A5F": "wedbar",
        "\u2A66": "sdote",
        "\u2A6A": "simdot",
        "\u2A6D": "congdot",
        "\u2A6D\u0338": "ncongdot",
        "\u2A6E": "easter",
        "\u2A6F": "apacir",
        "\u2A70": "apE",
        "\u2A70\u0338": "napE",
        "\u2A71": "eplus",
        "\u2A72": "pluse",
        "\u2A73": "Esim",
        "\u2A77": "eDDot",
        "\u2A78": "equivDD",
        "\u2A79": "ltcir",
        "\u2A7A": "gtcir",
        "\u2A7B": "ltquest",
        "\u2A7C": "gtquest",
        "\u2A7D": "les",
        "\u2A7D\u0338": "nles",
        "\u2A7E": "ges",
        "\u2A7E\u0338": "nges",
        "\u2A7F": "lesdot",
        "\u2A80": "gesdot",
        "\u2A81": "lesdoto",
        "\u2A82": "gesdoto",
        "\u2A83": "lesdotor",
        "\u2A84": "gesdotol",
        "\u2A85": "lap",
        "\u2A86": "gap",
        "\u2A87": "lne",
        "\u2A88": "gne",
        "\u2A89": "lnap",
        "\u2A8A": "gnap",
        "\u2A8B": "lEg",
        "\u2A8C": "gEl",
        "\u2A8D": "lsime",
        "\u2A8E": "gsime",
        "\u2A8F": "lsimg",
        "\u2A90": "gsiml",
        "\u2A91": "lgE",
        "\u2A92": "glE",
        "\u2A93": "lesges",
        "\u2A94": "gesles",
        "\u2A95": "els",
        "\u2A96": "egs",
        "\u2A97": "elsdot",
        "\u2A98": "egsdot",
        "\u2A99": "el",
        "\u2A9A": "eg",
        "\u2A9D": "siml",
        "\u2A9E": "simg",
        "\u2A9F": "simlE",
        "\u2AA0": "simgE",
        "\u2AA1": "LessLess",
        "\u2AA1\u0338": "NotNestedLessLess",
        "\u2AA2": "GreaterGreater",
        "\u2AA2\u0338": "NotNestedGreaterGreater",
        "\u2AA4": "glj",
        "\u2AA5": "gla",
        "\u2AA6": "ltcc",
        "\u2AA7": "gtcc",
        "\u2AA8": "lescc",
        "\u2AA9": "gescc",
        "\u2AAA": "smt",
        "\u2AAB": "lat",
        "\u2AAC": "smte",
        "\u2AAC\uFE00": "smtes",
        "\u2AAD": "late",
        "\u2AAD\uFE00": "lates",
        "\u2AAE": "bumpE",
        "\u2AAF": "pre",
        "\u2AAF\u0338": "npre",
        "\u2AB0": "sce",
        "\u2AB0\u0338": "nsce",
        "\u2AB3": "prE",
        "\u2AB4": "scE",
        "\u2AB5": "prnE",
        "\u2AB6": "scnE",
        "\u2AB7": "prap",
        "\u2AB8": "scap",
        "\u2AB9": "prnap",
        "\u2ABA": "scnap",
        "\u2ABB": "Pr",
        "\u2ABC": "Sc",
        "\u2ABD": "subdot",
        "\u2ABE": "supdot",
        "\u2ABF": "subplus",
        "\u2AC0": "supplus",
        "\u2AC1": "submult",
        "\u2AC2": "supmult",
        "\u2AC3": "subedot",
        "\u2AC4": "supedot",
        "\u2AC5": "subE",
        "\u2AC5\u0338": "nsubE",
        "\u2AC6": "supE",
        "\u2AC6\u0338": "nsupE",
        "\u2AC7": "subsim",
        "\u2AC8": "supsim",
        "\u2ACB\uFE00": "vsubnE",
        "\u2ACB": "subnE",
        "\u2ACC\uFE00": "vsupnE",
        "\u2ACC": "supnE",
        "\u2ACF": "csub",
        "\u2AD0": "csup",
        "\u2AD1": "csube",
        "\u2AD2": "csupe",
        "\u2AD3": "subsup",
        "\u2AD4": "supsub",
        "\u2AD5": "subsub",
        "\u2AD6": "supsup",
        "\u2AD7": "suphsub",
        "\u2AD8": "supdsub",
        "\u2AD9": "forkv",
        "\u2ADA": "topfork",
        "\u2ADB": "mlcp",
        "\u2AE4": "Dashv",
        "\u2AE6": "Vdashl",
        "\u2AE7": "Barv",
        "\u2AE8": "vBar",
        "\u2AE9": "vBarv",
        "\u2AEB": "Vbar",
        "\u2AEC": "Not",
        "\u2AED": "bNot",
        "\u2AEE": "rnmid",
        "\u2AEF": "cirmid",
        "\u2AF0": "midcir",
        "\u2AF1": "topcir",
        "\u2AF2": "nhpar",
        "\u2AF3": "parsim",
        "\u2AFD": "parsl",
        "\u2AFD\u20E5": "nparsl",
        "\u266D": "flat",
        "\u266E": "natur",
        "\u266F": "sharp",
        "\xA4": "curren",
        "\xA2": "cent",
        "$": "dollar",
        "\xA3": "pound",
        "\xA5": "yen",
        "\u20AC": "euro",
        "\xB9": "sup1",
        "\xBD": "half",
        "\u2153": "frac13",
        "\xBC": "frac14",
        "\u2155": "frac15",
        "\u2159": "frac16",
        "\u215B": "frac18",
        "\xB2": "sup2",
        "\u2154": "frac23",
        "\u2156": "frac25",
        "\xB3": "sup3",
        "\xBE": "frac34",
        "\u2157": "frac35",
        "\u215C": "frac38",
        "\u2158": "frac45",
        "\u215A": "frac56",
        "\u215D": "frac58",
        "\u215E": "frac78",
        "\uD835\uDCB6": "ascr",
        "\uD835\uDD52": "aopf",
        "\uD835\uDD1E": "afr",
        "\uD835\uDD38": "Aopf",
        "\uD835\uDD04": "Afr",
        "\uD835\uDC9C": "Ascr",
        "\xAA": "ordf",
        "\xE1": "aacute",
        "\xC1": "Aacute",
        "\xE0": "agrave",
        "\xC0": "Agrave",
        "\u0103": "abreve",
        "\u0102": "Abreve",
        "\xE2": "acirc",
        "\xC2": "Acirc",
        "\xE5": "aring",
        "\xC5": "angst",
        "\xE4": "auml",
        "\xC4": "Auml",
        "\xE3": "atilde",
        "\xC3": "Atilde",
        "\u0105": "aogon",
        "\u0104": "Aogon",
        "\u0101": "amacr",
        "\u0100": "Amacr",
        "\xE6": "aelig",
        "\xC6": "AElig",
        "\uD835\uDCB7": "bscr",
        "\uD835\uDD53": "bopf",
        "\uD835\uDD1F": "bfr",
        "\uD835\uDD39": "Bopf",
        "\u212C": "Bscr",
        "\uD835\uDD05": "Bfr",
        "\uD835\uDD20": "cfr",
        "\uD835\uDCB8": "cscr",
        "\uD835\uDD54": "copf",
        "\u212D": "Cfr",
        "\uD835\uDC9E": "Cscr",
        "\u2102": "Copf",
        "\u0107": "cacute",
        "\u0106": "Cacute",
        "\u0109": "ccirc",
        "\u0108": "Ccirc",
        "\u010D": "ccaron",
        "\u010C": "Ccaron",
        "\u010B": "cdot",
        "\u010A": "Cdot",
        "\xE7": "ccedil",
        "\xC7": "Ccedil",
        "\u2105": "incare",
        "\uD835\uDD21": "dfr",
        "\u2146": "dd",
        "\uD835\uDD55": "dopf",
        "\uD835\uDCB9": "dscr",
        "\uD835\uDC9F": "Dscr",
        "\uD835\uDD07": "Dfr",
        "\u2145": "DD",
        "\uD835\uDD3B": "Dopf",
        "\u010F": "dcaron",
        "\u010E": "Dcaron",
        "\u0111": "dstrok",
        "\u0110": "Dstrok",
        "\xF0": "eth",
        "\xD0": "ETH",
        "\u2147": "ee",
        "\u212F": "escr",
        "\uD835\uDD22": "efr",
        "\uD835\uDD56": "eopf",
        "\u2130": "Escr",
        "\uD835\uDD08": "Efr",
        "\uD835\uDD3C": "Eopf",
        "\xE9": "eacute",
        "\xC9": "Eacute",
        "\xE8": "egrave",
        "\xC8": "Egrave",
        "\xEA": "ecirc",
        "\xCA": "Ecirc",
        "\u011B": "ecaron",
        "\u011A": "Ecaron",
        "\xEB": "euml",
        "\xCB": "Euml",
        "\u0117": "edot",
        "\u0116": "Edot",
        "\u0119": "eogon",
        "\u0118": "Eogon",
        "\u0113": "emacr",
        "\u0112": "Emacr",
        "\uD835\uDD23": "ffr",
        "\uD835\uDD57": "fopf",
        "\uD835\uDCBB": "fscr",
        "\uD835\uDD09": "Ffr",
        "\uD835\uDD3D": "Fopf",
        "\u2131": "Fscr",
        "\uFB00": "fflig",
        "\uFB03": "ffilig",
        "\uFB04": "ffllig",
        "\uFB01": "filig",
        "fj": "fjlig",
        "\uFB02": "fllig",
        "\u0192": "fnof",
        "\u210A": "gscr",
        "\uD835\uDD58": "gopf",
        "\uD835\uDD24": "gfr",
        "\uD835\uDCA2": "Gscr",
        "\uD835\uDD3E": "Gopf",
        "\uD835\uDD0A": "Gfr",
        "\u01F5": "gacute",
        "\u011F": "gbreve",
        "\u011E": "Gbreve",
        "\u011D": "gcirc",
        "\u011C": "Gcirc",
        "\u0121": "gdot",
        "\u0120": "Gdot",
        "\u0122": "Gcedil",
        "\uD835\uDD25": "hfr",
        "\u210E": "planckh",
        "\uD835\uDCBD": "hscr",
        "\uD835\uDD59": "hopf",
        "\u210B": "Hscr",
        "\u210C": "Hfr",
        "\u210D": "Hopf",
        "\u0125": "hcirc",
        "\u0124": "Hcirc",
        "\u210F": "hbar",
        "\u0127": "hstrok",
        "\u0126": "Hstrok",
        "\uD835\uDD5A": "iopf",
        "\uD835\uDD26": "ifr",
        "\uD835\uDCBE": "iscr",
        "\u2148": "ii",
        "\uD835\uDD40": "Iopf",
        "\u2110": "Iscr",
        "\u2111": "Im",
        "\xED": "iacute",
        "\xCD": "Iacute",
        "\xEC": "igrave",
        "\xCC": "Igrave",
        "\xEE": "icirc",
        "\xCE": "Icirc",
        "\xEF": "iuml",
        "\xCF": "Iuml",
        "\u0129": "itilde",
        "\u0128": "Itilde",
        "\u0130": "Idot",
        "\u012F": "iogon",
        "\u012E": "Iogon",
        "\u012B": "imacr",
        "\u012A": "Imacr",
        "\u0133": "ijlig",
        "\u0132": "IJlig",
        "\u0131": "imath",
        "\uD835\uDCBF": "jscr",
        "\uD835\uDD5B": "jopf",
        "\uD835\uDD27": "jfr",
        "\uD835\uDCA5": "Jscr",
        "\uD835\uDD0D": "Jfr",
        "\uD835\uDD41": "Jopf",
        "\u0135": "jcirc",
        "\u0134": "Jcirc",
        "\u0237": "jmath",
        "\uD835\uDD5C": "kopf",
        "\uD835\uDCC0": "kscr",
        "\uD835\uDD28": "kfr",
        "\uD835\uDCA6": "Kscr",
        "\uD835\uDD42": "Kopf",
        "\uD835\uDD0E": "Kfr",
        "\u0137": "kcedil",
        "\u0136": "Kcedil",
        "\uD835\uDD29": "lfr",
        "\uD835\uDCC1": "lscr",
        "\u2113": "ell",
        "\uD835\uDD5D": "lopf",
        "\u2112": "Lscr",
        "\uD835\uDD0F": "Lfr",
        "\uD835\uDD43": "Lopf",
        "\u013A": "lacute",
        "\u0139": "Lacute",
        "\u013E": "lcaron",
        "\u013D": "Lcaron",
        "\u013C": "lcedil",
        "\u013B": "Lcedil",
        "\u0142": "lstrok",
        "\u0141": "Lstrok",
        "\u0140": "lmidot",
        "\u013F": "Lmidot",
        "\uD835\uDD2A": "mfr",
        "\uD835\uDD5E": "mopf",
        "\uD835\uDCC2": "mscr",
        "\uD835\uDD10": "Mfr",
        "\uD835\uDD44": "Mopf",
        "\u2133": "Mscr",
        "\uD835\uDD2B": "nfr",
        "\uD835\uDD5F": "nopf",
        "\uD835\uDCC3": "nscr",
        "\u2115": "Nopf",
        "\uD835\uDCA9": "Nscr",
        "\uD835\uDD11": "Nfr",
        "\u0144": "nacute",
        "\u0143": "Nacute",
        "\u0148": "ncaron",
        "\u0147": "Ncaron",
        "\xF1": "ntilde",
        "\xD1": "Ntilde",
        "\u0146": "ncedil",
        "\u0145": "Ncedil",
        "\u2116": "numero",
        "\u014B": "eng",
        "\u014A": "ENG",
        "\uD835\uDD60": "oopf",
        "\uD835\uDD2C": "ofr",
        "\u2134": "oscr",
        "\uD835\uDCAA": "Oscr",
        "\uD835\uDD12": "Ofr",
        "\uD835\uDD46": "Oopf",
        "\xBA": "ordm",
        "\xF3": "oacute",
        "\xD3": "Oacute",
        "\xF2": "ograve",
        "\xD2": "Ograve",
        "\xF4": "ocirc",
        "\xD4": "Ocirc",
        "\xF6": "ouml",
        "\xD6": "Ouml",
        "\u0151": "odblac",
        "\u0150": "Odblac",
        "\xF5": "otilde",
        "\xD5": "Otilde",
        "\xF8": "oslash",
        "\xD8": "Oslash",
        "\u014D": "omacr",
        "\u014C": "Omacr",
        "\u0153": "oelig",
        "\u0152": "OElig",
        "\uD835\uDD2D": "pfr",
        "\uD835\uDCC5": "pscr",
        "\uD835\uDD61": "popf",
        "\u2119": "Popf",
        "\uD835\uDD13": "Pfr",
        "\uD835\uDCAB": "Pscr",
        "\uD835\uDD62": "qopf",
        "\uD835\uDD2E": "qfr",
        "\uD835\uDCC6": "qscr",
        "\uD835\uDCAC": "Qscr",
        "\uD835\uDD14": "Qfr",
        "\u211A": "Qopf",
        "\u0138": "kgreen",
        "\uD835\uDD2F": "rfr",
        "\uD835\uDD63": "ropf",
        "\uD835\uDCC7": "rscr",
        "\u211B": "Rscr",
        "\u211C": "Re",
        "\u211D": "Ropf",
        "\u0155": "racute",
        "\u0154": "Racute",
        "\u0159": "rcaron",
        "\u0158": "Rcaron",
        "\u0157": "rcedil",
        "\u0156": "Rcedil",
        "\uD835\uDD64": "sopf",
        "\uD835\uDCC8": "sscr",
        "\uD835\uDD30": "sfr",
        "\uD835\uDD4A": "Sopf",
        "\uD835\uDD16": "Sfr",
        "\uD835\uDCAE": "Sscr",
        "\u24C8": "oS",
        "\u015B": "sacute",
        "\u015A": "Sacute",
        "\u015D": "scirc",
        "\u015C": "Scirc",
        "\u0161": "scaron",
        "\u0160": "Scaron",
        "\u015F": "scedil",
        "\u015E": "Scedil",
        "\xDF": "szlig",
        "\uD835\uDD31": "tfr",
        "\uD835\uDCC9": "tscr",
        "\uD835\uDD65": "topf",
        "\uD835\uDCAF": "Tscr",
        "\uD835\uDD17": "Tfr",
        "\uD835\uDD4B": "Topf",
        "\u0165": "tcaron",
        "\u0164": "Tcaron",
        "\u0163": "tcedil",
        "\u0162": "Tcedil",
        "\u2122": "trade",
        "\u0167": "tstrok",
        "\u0166": "Tstrok",
        "\uD835\uDCCA": "uscr",
        "\uD835\uDD66": "uopf",
        "\uD835\uDD32": "ufr",
        "\uD835\uDD4C": "Uopf",
        "\uD835\uDD18": "Ufr",
        "\uD835\uDCB0": "Uscr",
        "\xFA": "uacute",
        "\xDA": "Uacute",
        "\xF9": "ugrave",
        "\xD9": "Ugrave",
        "\u016D": "ubreve",
        "\u016C": "Ubreve",
        "\xFB": "ucirc",
        "\xDB": "Ucirc",
        "\u016F": "uring",
        "\u016E": "Uring",
        "\xFC": "uuml",
        "\xDC": "Uuml",
        "\u0171": "udblac",
        "\u0170": "Udblac",
        "\u0169": "utilde",
        "\u0168": "Utilde",
        "\u0173": "uogon",
        "\u0172": "Uogon",
        "\u016B": "umacr",
        "\u016A": "Umacr",
        "\uD835\uDD33": "vfr",
        "\uD835\uDD67": "vopf",
        "\uD835\uDCCB": "vscr",
        "\uD835\uDD19": "Vfr",
        "\uD835\uDD4D": "Vopf",
        "\uD835\uDCB1": "Vscr",
        "\uD835\uDD68": "wopf",
        "\uD835\uDCCC": "wscr",
        "\uD835\uDD34": "wfr",
        "\uD835\uDCB2": "Wscr",
        "\uD835\uDD4E": "Wopf",
        "\uD835\uDD1A": "Wfr",
        "\u0175": "wcirc",
        "\u0174": "Wcirc",
        "\uD835\uDD35": "xfr",
        "\uD835\uDCCD": "xscr",
        "\uD835\uDD69": "xopf",
        "\uD835\uDD4F": "Xopf",
        "\uD835\uDD1B": "Xfr",
        "\uD835\uDCB3": "Xscr",
        "\uD835\uDD36": "yfr",
        "\uD835\uDCCE": "yscr",
        "\uD835\uDD6A": "yopf",
        "\uD835\uDCB4": "Yscr",
        "\uD835\uDD1C": "Yfr",
        "\uD835\uDD50": "Yopf",
        "\xFD": "yacute",
        "\xDD": "Yacute",
        "\u0177": "ycirc",
        "\u0176": "Ycirc",
        "\xFF": "yuml",
        "\u0178": "Yuml",
        "\uD835\uDCCF": "zscr",
        "\uD835\uDD37": "zfr",
        "\uD835\uDD6B": "zopf",
        "\u2128": "Zfr",
        "\u2124": "Zopf",
        "\uD835\uDCB5": "Zscr",
        "\u017A": "zacute",
        "\u0179": "Zacute",
        "\u017E": "zcaron",
        "\u017D": "Zcaron",
        "\u017C": "zdot",
        "\u017B": "Zdot",
        "\u01B5": "imped",
        "\xFE": "thorn",
        "\xDE": "THORN",
        "\u0149": "napos",
        "\u03B1": "alpha",
        "\u0391": "Alpha",
        "\u03B2": "beta",
        "\u0392": "Beta",
        "\u03B3": "gamma",
        "\u0393": "Gamma",
        "\u03B4": "delta",
        "\u0394": "Delta",
        "\u03B5": "epsi",
        "\u03F5": "epsiv",
        "\u0395": "Epsilon",
        "\u03DD": "gammad",
        "\u03DC": "Gammad",
        "\u03B6": "zeta",
        "\u0396": "Zeta",
        "\u03B7": "eta",
        "\u0397": "Eta",
        "\u03B8": "theta",
        "\u03D1": "thetav",
        "\u0398": "Theta",
        "\u03B9": "iota",
        "\u0399": "Iota",
        "\u03BA": "kappa",
        "\u03F0": "kappav",
        "\u039A": "Kappa",
        "\u03BB": "lambda",
        "\u039B": "Lambda",
        "\u03BC": "mu",
        "\xB5": "micro",
        "\u039C": "Mu",
        "\u03BD": "nu",
        "\u039D": "Nu",
        "\u03BE": "xi",
        "\u039E": "Xi",
        "\u03BF": "omicron",
        "\u039F": "Omicron",
        "\u03C0": "pi",
        "\u03D6": "piv",
        "\u03A0": "Pi",
        "\u03C1": "rho",
        "\u03F1": "rhov",
        "\u03A1": "Rho",
        "\u03C3": "sigma",
        "\u03A3": "Sigma",
        "\u03C2": "sigmaf",
        "\u03C4": "tau",
        "\u03A4": "Tau",
        "\u03C5": "upsi",
        "\u03A5": "Upsilon",
        "\u03D2": "Upsi",
        "\u03C6": "phi",
        "\u03D5": "phiv",
        "\u03A6": "Phi",
        "\u03C7": "chi",
        "\u03A7": "Chi",
        "\u03C8": "psi",
        "\u03A8": "Psi",
        "\u03C9": "omega",
        "\u03A9": "ohm",
        "\u0430": "acy",
        "\u0410": "Acy",
        "\u0431": "bcy",
        "\u0411": "Bcy",
        "\u0432": "vcy",
        "\u0412": "Vcy",
        "\u0433": "gcy",
        "\u0413": "Gcy",
        "\u0453": "gjcy",
        "\u0403": "GJcy",
        "\u0434": "dcy",
        "\u0414": "Dcy",
        "\u0452": "djcy",
        "\u0402": "DJcy",
        "\u0435": "iecy",
        "\u0415": "IEcy",
        "\u0451": "iocy",
        "\u0401": "IOcy",
        "\u0454": "jukcy",
        "\u0404": "Jukcy",
        "\u0436": "zhcy",
        "\u0416": "ZHcy",
        "\u0437": "zcy",
        "\u0417": "Zcy",
        "\u0455": "dscy",
        "\u0405": "DScy",
        "\u0438": "icy",
        "\u0418": "Icy",
        "\u0456": "iukcy",
        "\u0406": "Iukcy",
        "\u0457": "yicy",
        "\u0407": "YIcy",
        "\u0439": "jcy",
        "\u0419": "Jcy",
        "\u0458": "jsercy",
        "\u0408": "Jsercy",
        "\u043A": "kcy",
        "\u041A": "Kcy",
        "\u045C": "kjcy",
        "\u040C": "KJcy",
        "\u043B": "lcy",
        "\u041B": "Lcy",
        "\u0459": "ljcy",
        "\u0409": "LJcy",
        "\u043C": "mcy",
        "\u041C": "Mcy",
        "\u043D": "ncy",
        "\u041D": "Ncy",
        "\u045A": "njcy",
        "\u040A": "NJcy",
        "\u043E": "ocy",
        "\u041E": "Ocy",
        "\u043F": "pcy",
        "\u041F": "Pcy",
        "\u0440": "rcy",
        "\u0420": "Rcy",
        "\u0441": "scy",
        "\u0421": "Scy",
        "\u0442": "tcy",
        "\u0422": "Tcy",
        "\u045B": "tshcy",
        "\u040B": "TSHcy",
        "\u0443": "ucy",
        "\u0423": "Ucy",
        "\u045E": "ubrcy",
        "\u040E": "Ubrcy",
        "\u0444": "fcy",
        "\u0424": "Fcy",
        "\u0445": "khcy",
        "\u0425": "KHcy",
        "\u0446": "tscy",
        "\u0426": "TScy",
        "\u0447": "chcy",
        "\u0427": "CHcy",
        "\u045F": "dzcy",
        "\u040F": "DZcy",
        "\u0448": "shcy",
        "\u0428": "SHcy",
        "\u0449": "shchcy",
        "\u0429": "SHCHcy",
        "\u044A": "hardcy",
        "\u042A": "HARDcy",
        "\u044B": "ycy",
        "\u042B": "Ycy",
        "\u044C": "softcy",
        "\u042C": "SOFTcy",
        "\u044D": "ecy",
        "\u042D": "Ecy",
        "\u044E": "yucy",
        "\u042E": "YUcy",
        "\u044F": "yacy",
        "\u042F": "YAcy",
        "\u2135": "aleph",
        "\u2136": "beth",
        "\u2137": "gimel",
        "\u2138": "daleth"
      };
      var regexEscape = /["&'<>`]/g;
      var escapeMap = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#x27;",
        "<": "&lt;",
        ">": "&gt;",
        "`": "&#x60;"
      };
      var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
      var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
      var decodeMap = {
        "aacute": "\xE1",
        "Aacute": "\xC1",
        "abreve": "\u0103",
        "Abreve": "\u0102",
        "ac": "\u223E",
        "acd": "\u223F",
        "acE": "\u223E\u0333",
        "acirc": "\xE2",
        "Acirc": "\xC2",
        "acute": "\xB4",
        "acy": "\u0430",
        "Acy": "\u0410",
        "aelig": "\xE6",
        "AElig": "\xC6",
        "af": "\u2061",
        "afr": "\uD835\uDD1E",
        "Afr": "\uD835\uDD04",
        "agrave": "\xE0",
        "Agrave": "\xC0",
        "alefsym": "\u2135",
        "aleph": "\u2135",
        "alpha": "\u03B1",
        "Alpha": "\u0391",
        "amacr": "\u0101",
        "Amacr": "\u0100",
        "amalg": "\u2A3F",
        "amp": "&",
        "AMP": "&",
        "and": "\u2227",
        "And": "\u2A53",
        "andand": "\u2A55",
        "andd": "\u2A5C",
        "andslope": "\u2A58",
        "andv": "\u2A5A",
        "ang": "\u2220",
        "ange": "\u29A4",
        "angle": "\u2220",
        "angmsd": "\u2221",
        "angmsdaa": "\u29A8",
        "angmsdab": "\u29A9",
        "angmsdac": "\u29AA",
        "angmsdad": "\u29AB",
        "angmsdae": "\u29AC",
        "angmsdaf": "\u29AD",
        "angmsdag": "\u29AE",
        "angmsdah": "\u29AF",
        "angrt": "\u221F",
        "angrtvb": "\u22BE",
        "angrtvbd": "\u299D",
        "angsph": "\u2222",
        "angst": "\xC5",
        "angzarr": "\u237C",
        "aogon": "\u0105",
        "Aogon": "\u0104",
        "aopf": "\uD835\uDD52",
        "Aopf": "\uD835\uDD38",
        "ap": "\u2248",
        "apacir": "\u2A6F",
        "ape": "\u224A",
        "apE": "\u2A70",
        "apid": "\u224B",
        "apos": "'",
        "ApplyFunction": "\u2061",
        "approx": "\u2248",
        "approxeq": "\u224A",
        "aring": "\xE5",
        "Aring": "\xC5",
        "ascr": "\uD835\uDCB6",
        "Ascr": "\uD835\uDC9C",
        "Assign": "\u2254",
        "ast": "*",
        "asymp": "\u2248",
        "asympeq": "\u224D",
        "atilde": "\xE3",
        "Atilde": "\xC3",
        "auml": "\xE4",
        "Auml": "\xC4",
        "awconint": "\u2233",
        "awint": "\u2A11",
        "backcong": "\u224C",
        "backepsilon": "\u03F6",
        "backprime": "\u2035",
        "backsim": "\u223D",
        "backsimeq": "\u22CD",
        "Backslash": "\u2216",
        "Barv": "\u2AE7",
        "barvee": "\u22BD",
        "barwed": "\u2305",
        "Barwed": "\u2306",
        "barwedge": "\u2305",
        "bbrk": "\u23B5",
        "bbrktbrk": "\u23B6",
        "bcong": "\u224C",
        "bcy": "\u0431",
        "Bcy": "\u0411",
        "bdquo": "\u201E",
        "becaus": "\u2235",
        "because": "\u2235",
        "Because": "\u2235",
        "bemptyv": "\u29B0",
        "bepsi": "\u03F6",
        "bernou": "\u212C",
        "Bernoullis": "\u212C",
        "beta": "\u03B2",
        "Beta": "\u0392",
        "beth": "\u2136",
        "between": "\u226C",
        "bfr": "\uD835\uDD1F",
        "Bfr": "\uD835\uDD05",
        "bigcap": "\u22C2",
        "bigcirc": "\u25EF",
        "bigcup": "\u22C3",
        "bigodot": "\u2A00",
        "bigoplus": "\u2A01",
        "bigotimes": "\u2A02",
        "bigsqcup": "\u2A06",
        "bigstar": "\u2605",
        "bigtriangledown": "\u25BD",
        "bigtriangleup": "\u25B3",
        "biguplus": "\u2A04",
        "bigvee": "\u22C1",
        "bigwedge": "\u22C0",
        "bkarow": "\u290D",
        "blacklozenge": "\u29EB",
        "blacksquare": "\u25AA",
        "blacktriangle": "\u25B4",
        "blacktriangledown": "\u25BE",
        "blacktriangleleft": "\u25C2",
        "blacktriangleright": "\u25B8",
        "blank": "\u2423",
        "blk12": "\u2592",
        "blk14": "\u2591",
        "blk34": "\u2593",
        "block": "\u2588",
        "bne": "=\u20E5",
        "bnequiv": "\u2261\u20E5",
        "bnot": "\u2310",
        "bNot": "\u2AED",
        "bopf": "\uD835\uDD53",
        "Bopf": "\uD835\uDD39",
        "bot": "\u22A5",
        "bottom": "\u22A5",
        "bowtie": "\u22C8",
        "boxbox": "\u29C9",
        "boxdl": "\u2510",
        "boxdL": "\u2555",
        "boxDl": "\u2556",
        "boxDL": "\u2557",
        "boxdr": "\u250C",
        "boxdR": "\u2552",
        "boxDr": "\u2553",
        "boxDR": "\u2554",
        "boxh": "\u2500",
        "boxH": "\u2550",
        "boxhd": "\u252C",
        "boxhD": "\u2565",
        "boxHd": "\u2564",
        "boxHD": "\u2566",
        "boxhu": "\u2534",
        "boxhU": "\u2568",
        "boxHu": "\u2567",
        "boxHU": "\u2569",
        "boxminus": "\u229F",
        "boxplus": "\u229E",
        "boxtimes": "\u22A0",
        "boxul": "\u2518",
        "boxuL": "\u255B",
        "boxUl": "\u255C",
        "boxUL": "\u255D",
        "boxur": "\u2514",
        "boxuR": "\u2558",
        "boxUr": "\u2559",
        "boxUR": "\u255A",
        "boxv": "\u2502",
        "boxV": "\u2551",
        "boxvh": "\u253C",
        "boxvH": "\u256A",
        "boxVh": "\u256B",
        "boxVH": "\u256C",
        "boxvl": "\u2524",
        "boxvL": "\u2561",
        "boxVl": "\u2562",
        "boxVL": "\u2563",
        "boxvr": "\u251C",
        "boxvR": "\u255E",
        "boxVr": "\u255F",
        "boxVR": "\u2560",
        "bprime": "\u2035",
        "breve": "\u02D8",
        "Breve": "\u02D8",
        "brvbar": "\xA6",
        "bscr": "\uD835\uDCB7",
        "Bscr": "\u212C",
        "bsemi": "\u204F",
        "bsim": "\u223D",
        "bsime": "\u22CD",
        "bsol": "\\",
        "bsolb": "\u29C5",
        "bsolhsub": "\u27C8",
        "bull": "\u2022",
        "bullet": "\u2022",
        "bump": "\u224E",
        "bumpe": "\u224F",
        "bumpE": "\u2AAE",
        "bumpeq": "\u224F",
        "Bumpeq": "\u224E",
        "cacute": "\u0107",
        "Cacute": "\u0106",
        "cap": "\u2229",
        "Cap": "\u22D2",
        "capand": "\u2A44",
        "capbrcup": "\u2A49",
        "capcap": "\u2A4B",
        "capcup": "\u2A47",
        "capdot": "\u2A40",
        "CapitalDifferentialD": "\u2145",
        "caps": "\u2229\uFE00",
        "caret": "\u2041",
        "caron": "\u02C7",
        "Cayleys": "\u212D",
        "ccaps": "\u2A4D",
        "ccaron": "\u010D",
        "Ccaron": "\u010C",
        "ccedil": "\xE7",
        "Ccedil": "\xC7",
        "ccirc": "\u0109",
        "Ccirc": "\u0108",
        "Cconint": "\u2230",
        "ccups": "\u2A4C",
        "ccupssm": "\u2A50",
        "cdot": "\u010B",
        "Cdot": "\u010A",
        "cedil": "\xB8",
        "Cedilla": "\xB8",
        "cemptyv": "\u29B2",
        "cent": "\xA2",
        "centerdot": "\xB7",
        "CenterDot": "\xB7",
        "cfr": "\uD835\uDD20",
        "Cfr": "\u212D",
        "chcy": "\u0447",
        "CHcy": "\u0427",
        "check": "\u2713",
        "checkmark": "\u2713",
        "chi": "\u03C7",
        "Chi": "\u03A7",
        "cir": "\u25CB",
        "circ": "\u02C6",
        "circeq": "\u2257",
        "circlearrowleft": "\u21BA",
        "circlearrowright": "\u21BB",
        "circledast": "\u229B",
        "circledcirc": "\u229A",
        "circleddash": "\u229D",
        "CircleDot": "\u2299",
        "circledR": "\xAE",
        "circledS": "\u24C8",
        "CircleMinus": "\u2296",
        "CirclePlus": "\u2295",
        "CircleTimes": "\u2297",
        "cire": "\u2257",
        "cirE": "\u29C3",
        "cirfnint": "\u2A10",
        "cirmid": "\u2AEF",
        "cirscir": "\u29C2",
        "ClockwiseContourIntegral": "\u2232",
        "CloseCurlyDoubleQuote": "\u201D",
        "CloseCurlyQuote": "\u2019",
        "clubs": "\u2663",
        "clubsuit": "\u2663",
        "colon": ":",
        "Colon": "\u2237",
        "colone": "\u2254",
        "Colone": "\u2A74",
        "coloneq": "\u2254",
        "comma": ",",
        "commat": "@",
        "comp": "\u2201",
        "compfn": "\u2218",
        "complement": "\u2201",
        "complexes": "\u2102",
        "cong": "\u2245",
        "congdot": "\u2A6D",
        "Congruent": "\u2261",
        "conint": "\u222E",
        "Conint": "\u222F",
        "ContourIntegral": "\u222E",
        "copf": "\uD835\uDD54",
        "Copf": "\u2102",
        "coprod": "\u2210",
        "Coproduct": "\u2210",
        "copy": "\xA9",
        "COPY": "\xA9",
        "copysr": "\u2117",
        "CounterClockwiseContourIntegral": "\u2233",
        "crarr": "\u21B5",
        "cross": "\u2717",
        "Cross": "\u2A2F",
        "cscr": "\uD835\uDCB8",
        "Cscr": "\uD835\uDC9E",
        "csub": "\u2ACF",
        "csube": "\u2AD1",
        "csup": "\u2AD0",
        "csupe": "\u2AD2",
        "ctdot": "\u22EF",
        "cudarrl": "\u2938",
        "cudarrr": "\u2935",
        "cuepr": "\u22DE",
        "cuesc": "\u22DF",
        "cularr": "\u21B6",
        "cularrp": "\u293D",
        "cup": "\u222A",
        "Cup": "\u22D3",
        "cupbrcap": "\u2A48",
        "cupcap": "\u2A46",
        "CupCap": "\u224D",
        "cupcup": "\u2A4A",
        "cupdot": "\u228D",
        "cupor": "\u2A45",
        "cups": "\u222A\uFE00",
        "curarr": "\u21B7",
        "curarrm": "\u293C",
        "curlyeqprec": "\u22DE",
        "curlyeqsucc": "\u22DF",
        "curlyvee": "\u22CE",
        "curlywedge": "\u22CF",
        "curren": "\xA4",
        "curvearrowleft": "\u21B6",
        "curvearrowright": "\u21B7",
        "cuvee": "\u22CE",
        "cuwed": "\u22CF",
        "cwconint": "\u2232",
        "cwint": "\u2231",
        "cylcty": "\u232D",
        "dagger": "\u2020",
        "Dagger": "\u2021",
        "daleth": "\u2138",
        "darr": "\u2193",
        "dArr": "\u21D3",
        "Darr": "\u21A1",
        "dash": "\u2010",
        "dashv": "\u22A3",
        "Dashv": "\u2AE4",
        "dbkarow": "\u290F",
        "dblac": "\u02DD",
        "dcaron": "\u010F",
        "Dcaron": "\u010E",
        "dcy": "\u0434",
        "Dcy": "\u0414",
        "dd": "\u2146",
        "DD": "\u2145",
        "ddagger": "\u2021",
        "ddarr": "\u21CA",
        "DDotrahd": "\u2911",
        "ddotseq": "\u2A77",
        "deg": "\xB0",
        "Del": "\u2207",
        "delta": "\u03B4",
        "Delta": "\u0394",
        "demptyv": "\u29B1",
        "dfisht": "\u297F",
        "dfr": "\uD835\uDD21",
        "Dfr": "\uD835\uDD07",
        "dHar": "\u2965",
        "dharl": "\u21C3",
        "dharr": "\u21C2",
        "DiacriticalAcute": "\xB4",
        "DiacriticalDot": "\u02D9",
        "DiacriticalDoubleAcute": "\u02DD",
        "DiacriticalGrave": "`",
        "DiacriticalTilde": "\u02DC",
        "diam": "\u22C4",
        "diamond": "\u22C4",
        "Diamond": "\u22C4",
        "diamondsuit": "\u2666",
        "diams": "\u2666",
        "die": "\xA8",
        "DifferentialD": "\u2146",
        "digamma": "\u03DD",
        "disin": "\u22F2",
        "div": "\xF7",
        "divide": "\xF7",
        "divideontimes": "\u22C7",
        "divonx": "\u22C7",
        "djcy": "\u0452",
        "DJcy": "\u0402",
        "dlcorn": "\u231E",
        "dlcrop": "\u230D",
        "dollar": "$",
        "dopf": "\uD835\uDD55",
        "Dopf": "\uD835\uDD3B",
        "dot": "\u02D9",
        "Dot": "\xA8",
        "DotDot": "\u20DC",
        "doteq": "\u2250",
        "doteqdot": "\u2251",
        "DotEqual": "\u2250",
        "dotminus": "\u2238",
        "dotplus": "\u2214",
        "dotsquare": "\u22A1",
        "doublebarwedge": "\u2306",
        "DoubleContourIntegral": "\u222F",
        "DoubleDot": "\xA8",
        "DoubleDownArrow": "\u21D3",
        "DoubleLeftArrow": "\u21D0",
        "DoubleLeftRightArrow": "\u21D4",
        "DoubleLeftTee": "\u2AE4",
        "DoubleLongLeftArrow": "\u27F8",
        "DoubleLongLeftRightArrow": "\u27FA",
        "DoubleLongRightArrow": "\u27F9",
        "DoubleRightArrow": "\u21D2",
        "DoubleRightTee": "\u22A8",
        "DoubleUpArrow": "\u21D1",
        "DoubleUpDownArrow": "\u21D5",
        "DoubleVerticalBar": "\u2225",
        "downarrow": "\u2193",
        "Downarrow": "\u21D3",
        "DownArrow": "\u2193",
        "DownArrowBar": "\u2913",
        "DownArrowUpArrow": "\u21F5",
        "DownBreve": "\u0311",
        "downdownarrows": "\u21CA",
        "downharpoonleft": "\u21C3",
        "downharpoonright": "\u21C2",
        "DownLeftRightVector": "\u2950",
        "DownLeftTeeVector": "\u295E",
        "DownLeftVector": "\u21BD",
        "DownLeftVectorBar": "\u2956",
        "DownRightTeeVector": "\u295F",
        "DownRightVector": "\u21C1",
        "DownRightVectorBar": "\u2957",
        "DownTee": "\u22A4",
        "DownTeeArrow": "\u21A7",
        "drbkarow": "\u2910",
        "drcorn": "\u231F",
        "drcrop": "\u230C",
        "dscr": "\uD835\uDCB9",
        "Dscr": "\uD835\uDC9F",
        "dscy": "\u0455",
        "DScy": "\u0405",
        "dsol": "\u29F6",
        "dstrok": "\u0111",
        "Dstrok": "\u0110",
        "dtdot": "\u22F1",
        "dtri": "\u25BF",
        "dtrif": "\u25BE",
        "duarr": "\u21F5",
        "duhar": "\u296F",
        "dwangle": "\u29A6",
        "dzcy": "\u045F",
        "DZcy": "\u040F",
        "dzigrarr": "\u27FF",
        "eacute": "\xE9",
        "Eacute": "\xC9",
        "easter": "\u2A6E",
        "ecaron": "\u011B",
        "Ecaron": "\u011A",
        "ecir": "\u2256",
        "ecirc": "\xEA",
        "Ecirc": "\xCA",
        "ecolon": "\u2255",
        "ecy": "\u044D",
        "Ecy": "\u042D",
        "eDDot": "\u2A77",
        "edot": "\u0117",
        "eDot": "\u2251",
        "Edot": "\u0116",
        "ee": "\u2147",
        "efDot": "\u2252",
        "efr": "\uD835\uDD22",
        "Efr": "\uD835\uDD08",
        "eg": "\u2A9A",
        "egrave": "\xE8",
        "Egrave": "\xC8",
        "egs": "\u2A96",
        "egsdot": "\u2A98",
        "el": "\u2A99",
        "Element": "\u2208",
        "elinters": "\u23E7",
        "ell": "\u2113",
        "els": "\u2A95",
        "elsdot": "\u2A97",
        "emacr": "\u0113",
        "Emacr": "\u0112",
        "empty": "\u2205",
        "emptyset": "\u2205",
        "EmptySmallSquare": "\u25FB",
        "emptyv": "\u2205",
        "EmptyVerySmallSquare": "\u25AB",
        "emsp": "\u2003",
        "emsp13": "\u2004",
        "emsp14": "\u2005",
        "eng": "\u014B",
        "ENG": "\u014A",
        "ensp": "\u2002",
        "eogon": "\u0119",
        "Eogon": "\u0118",
        "eopf": "\uD835\uDD56",
        "Eopf": "\uD835\uDD3C",
        "epar": "\u22D5",
        "eparsl": "\u29E3",
        "eplus": "\u2A71",
        "epsi": "\u03B5",
        "epsilon": "\u03B5",
        "Epsilon": "\u0395",
        "epsiv": "\u03F5",
        "eqcirc": "\u2256",
        "eqcolon": "\u2255",
        "eqsim": "\u2242",
        "eqslantgtr": "\u2A96",
        "eqslantless": "\u2A95",
        "Equal": "\u2A75",
        "equals": "=",
        "EqualTilde": "\u2242",
        "equest": "\u225F",
        "Equilibrium": "\u21CC",
        "equiv": "\u2261",
        "equivDD": "\u2A78",
        "eqvparsl": "\u29E5",
        "erarr": "\u2971",
        "erDot": "\u2253",
        "escr": "\u212F",
        "Escr": "\u2130",
        "esdot": "\u2250",
        "esim": "\u2242",
        "Esim": "\u2A73",
        "eta": "\u03B7",
        "Eta": "\u0397",
        "eth": "\xF0",
        "ETH": "\xD0",
        "euml": "\xEB",
        "Euml": "\xCB",
        "euro": "\u20AC",
        "excl": "!",
        "exist": "\u2203",
        "Exists": "\u2203",
        "expectation": "\u2130",
        "exponentiale": "\u2147",
        "ExponentialE": "\u2147",
        "fallingdotseq": "\u2252",
        "fcy": "\u0444",
        "Fcy": "\u0424",
        "female": "\u2640",
        "ffilig": "\uFB03",
        "fflig": "\uFB00",
        "ffllig": "\uFB04",
        "ffr": "\uD835\uDD23",
        "Ffr": "\uD835\uDD09",
        "filig": "\uFB01",
        "FilledSmallSquare": "\u25FC",
        "FilledVerySmallSquare": "\u25AA",
        "fjlig": "fj",
        "flat": "\u266D",
        "fllig": "\uFB02",
        "fltns": "\u25B1",
        "fnof": "\u0192",
        "fopf": "\uD835\uDD57",
        "Fopf": "\uD835\uDD3D",
        "forall": "\u2200",
        "ForAll": "\u2200",
        "fork": "\u22D4",
        "forkv": "\u2AD9",
        "Fouriertrf": "\u2131",
        "fpartint": "\u2A0D",
        "frac12": "\xBD",
        "frac13": "\u2153",
        "frac14": "\xBC",
        "frac15": "\u2155",
        "frac16": "\u2159",
        "frac18": "\u215B",
        "frac23": "\u2154",
        "frac25": "\u2156",
        "frac34": "\xBE",
        "frac35": "\u2157",
        "frac38": "\u215C",
        "frac45": "\u2158",
        "frac56": "\u215A",
        "frac58": "\u215D",
        "frac78": "\u215E",
        "frasl": "\u2044",
        "frown": "\u2322",
        "fscr": "\uD835\uDCBB",
        "Fscr": "\u2131",
        "gacute": "\u01F5",
        "gamma": "\u03B3",
        "Gamma": "\u0393",
        "gammad": "\u03DD",
        "Gammad": "\u03DC",
        "gap": "\u2A86",
        "gbreve": "\u011F",
        "Gbreve": "\u011E",
        "Gcedil": "\u0122",
        "gcirc": "\u011D",
        "Gcirc": "\u011C",
        "gcy": "\u0433",
        "Gcy": "\u0413",
        "gdot": "\u0121",
        "Gdot": "\u0120",
        "ge": "\u2265",
        "gE": "\u2267",
        "gel": "\u22DB",
        "gEl": "\u2A8C",
        "geq": "\u2265",
        "geqq": "\u2267",
        "geqslant": "\u2A7E",
        "ges": "\u2A7E",
        "gescc": "\u2AA9",
        "gesdot": "\u2A80",
        "gesdoto": "\u2A82",
        "gesdotol": "\u2A84",
        "gesl": "\u22DB\uFE00",
        "gesles": "\u2A94",
        "gfr": "\uD835\uDD24",
        "Gfr": "\uD835\uDD0A",
        "gg": "\u226B",
        "Gg": "\u22D9",
        "ggg": "\u22D9",
        "gimel": "\u2137",
        "gjcy": "\u0453",
        "GJcy": "\u0403",
        "gl": "\u2277",
        "gla": "\u2AA5",
        "glE": "\u2A92",
        "glj": "\u2AA4",
        "gnap": "\u2A8A",
        "gnapprox": "\u2A8A",
        "gne": "\u2A88",
        "gnE": "\u2269",
        "gneq": "\u2A88",
        "gneqq": "\u2269",
        "gnsim": "\u22E7",
        "gopf": "\uD835\uDD58",
        "Gopf": "\uD835\uDD3E",
        "grave": "`",
        "GreaterEqual": "\u2265",
        "GreaterEqualLess": "\u22DB",
        "GreaterFullEqual": "\u2267",
        "GreaterGreater": "\u2AA2",
        "GreaterLess": "\u2277",
        "GreaterSlantEqual": "\u2A7E",
        "GreaterTilde": "\u2273",
        "gscr": "\u210A",
        "Gscr": "\uD835\uDCA2",
        "gsim": "\u2273",
        "gsime": "\u2A8E",
        "gsiml": "\u2A90",
        "gt": ">",
        "Gt": "\u226B",
        "GT": ">",
        "gtcc": "\u2AA7",
        "gtcir": "\u2A7A",
        "gtdot": "\u22D7",
        "gtlPar": "\u2995",
        "gtquest": "\u2A7C",
        "gtrapprox": "\u2A86",
        "gtrarr": "\u2978",
        "gtrdot": "\u22D7",
        "gtreqless": "\u22DB",
        "gtreqqless": "\u2A8C",
        "gtrless": "\u2277",
        "gtrsim": "\u2273",
        "gvertneqq": "\u2269\uFE00",
        "gvnE": "\u2269\uFE00",
        "Hacek": "\u02C7",
        "hairsp": "\u200A",
        "half": "\xBD",
        "hamilt": "\u210B",
        "hardcy": "\u044A",
        "HARDcy": "\u042A",
        "harr": "\u2194",
        "hArr": "\u21D4",
        "harrcir": "\u2948",
        "harrw": "\u21AD",
        "Hat": "^",
        "hbar": "\u210F",
        "hcirc": "\u0125",
        "Hcirc": "\u0124",
        "hearts": "\u2665",
        "heartsuit": "\u2665",
        "hellip": "\u2026",
        "hercon": "\u22B9",
        "hfr": "\uD835\uDD25",
        "Hfr": "\u210C",
        "HilbertSpace": "\u210B",
        "hksearow": "\u2925",
        "hkswarow": "\u2926",
        "hoarr": "\u21FF",
        "homtht": "\u223B",
        "hookleftarrow": "\u21A9",
        "hookrightarrow": "\u21AA",
        "hopf": "\uD835\uDD59",
        "Hopf": "\u210D",
        "horbar": "\u2015",
        "HorizontalLine": "\u2500",
        "hscr": "\uD835\uDCBD",
        "Hscr": "\u210B",
        "hslash": "\u210F",
        "hstrok": "\u0127",
        "Hstrok": "\u0126",
        "HumpDownHump": "\u224E",
        "HumpEqual": "\u224F",
        "hybull": "\u2043",
        "hyphen": "\u2010",
        "iacute": "\xED",
        "Iacute": "\xCD",
        "ic": "\u2063",
        "icirc": "\xEE",
        "Icirc": "\xCE",
        "icy": "\u0438",
        "Icy": "\u0418",
        "Idot": "\u0130",
        "iecy": "\u0435",
        "IEcy": "\u0415",
        "iexcl": "\xA1",
        "iff": "\u21D4",
        "ifr": "\uD835\uDD26",
        "Ifr": "\u2111",
        "igrave": "\xEC",
        "Igrave": "\xCC",
        "ii": "\u2148",
        "iiiint": "\u2A0C",
        "iiint": "\u222D",
        "iinfin": "\u29DC",
        "iiota": "\u2129",
        "ijlig": "\u0133",
        "IJlig": "\u0132",
        "Im": "\u2111",
        "imacr": "\u012B",
        "Imacr": "\u012A",
        "image": "\u2111",
        "ImaginaryI": "\u2148",
        "imagline": "\u2110",
        "imagpart": "\u2111",
        "imath": "\u0131",
        "imof": "\u22B7",
        "imped": "\u01B5",
        "Implies": "\u21D2",
        "in": "\u2208",
        "incare": "\u2105",
        "infin": "\u221E",
        "infintie": "\u29DD",
        "inodot": "\u0131",
        "int": "\u222B",
        "Int": "\u222C",
        "intcal": "\u22BA",
        "integers": "\u2124",
        "Integral": "\u222B",
        "intercal": "\u22BA",
        "Intersection": "\u22C2",
        "intlarhk": "\u2A17",
        "intprod": "\u2A3C",
        "InvisibleComma": "\u2063",
        "InvisibleTimes": "\u2062",
        "iocy": "\u0451",
        "IOcy": "\u0401",
        "iogon": "\u012F",
        "Iogon": "\u012E",
        "iopf": "\uD835\uDD5A",
        "Iopf": "\uD835\uDD40",
        "iota": "\u03B9",
        "Iota": "\u0399",
        "iprod": "\u2A3C",
        "iquest": "\xBF",
        "iscr": "\uD835\uDCBE",
        "Iscr": "\u2110",
        "isin": "\u2208",
        "isindot": "\u22F5",
        "isinE": "\u22F9",
        "isins": "\u22F4",
        "isinsv": "\u22F3",
        "isinv": "\u2208",
        "it": "\u2062",
        "itilde": "\u0129",
        "Itilde": "\u0128",
        "iukcy": "\u0456",
        "Iukcy": "\u0406",
        "iuml": "\xEF",
        "Iuml": "\xCF",
        "jcirc": "\u0135",
        "Jcirc": "\u0134",
        "jcy": "\u0439",
        "Jcy": "\u0419",
        "jfr": "\uD835\uDD27",
        "Jfr": "\uD835\uDD0D",
        "jmath": "\u0237",
        "jopf": "\uD835\uDD5B",
        "Jopf": "\uD835\uDD41",
        "jscr": "\uD835\uDCBF",
        "Jscr": "\uD835\uDCA5",
        "jsercy": "\u0458",
        "Jsercy": "\u0408",
        "jukcy": "\u0454",
        "Jukcy": "\u0404",
        "kappa": "\u03BA",
        "Kappa": "\u039A",
        "kappav": "\u03F0",
        "kcedil": "\u0137",
        "Kcedil": "\u0136",
        "kcy": "\u043A",
        "Kcy": "\u041A",
        "kfr": "\uD835\uDD28",
        "Kfr": "\uD835\uDD0E",
        "kgreen": "\u0138",
        "khcy": "\u0445",
        "KHcy": "\u0425",
        "kjcy": "\u045C",
        "KJcy": "\u040C",
        "kopf": "\uD835\uDD5C",
        "Kopf": "\uD835\uDD42",
        "kscr": "\uD835\uDCC0",
        "Kscr": "\uD835\uDCA6",
        "lAarr": "\u21DA",
        "lacute": "\u013A",
        "Lacute": "\u0139",
        "laemptyv": "\u29B4",
        "lagran": "\u2112",
        "lambda": "\u03BB",
        "Lambda": "\u039B",
        "lang": "\u27E8",
        "Lang": "\u27EA",
        "langd": "\u2991",
        "langle": "\u27E8",
        "lap": "\u2A85",
        "Laplacetrf": "\u2112",
        "laquo": "\xAB",
        "larr": "\u2190",
        "lArr": "\u21D0",
        "Larr": "\u219E",
        "larrb": "\u21E4",
        "larrbfs": "\u291F",
        "larrfs": "\u291D",
        "larrhk": "\u21A9",
        "larrlp": "\u21AB",
        "larrpl": "\u2939",
        "larrsim": "\u2973",
        "larrtl": "\u21A2",
        "lat": "\u2AAB",
        "latail": "\u2919",
        "lAtail": "\u291B",
        "late": "\u2AAD",
        "lates": "\u2AAD\uFE00",
        "lbarr": "\u290C",
        "lBarr": "\u290E",
        "lbbrk": "\u2772",
        "lbrace": "{",
        "lbrack": "[",
        "lbrke": "\u298B",
        "lbrksld": "\u298F",
        "lbrkslu": "\u298D",
        "lcaron": "\u013E",
        "Lcaron": "\u013D",
        "lcedil": "\u013C",
        "Lcedil": "\u013B",
        "lceil": "\u2308",
        "lcub": "{",
        "lcy": "\u043B",
        "Lcy": "\u041B",
        "ldca": "\u2936",
        "ldquo": "\u201C",
        "ldquor": "\u201E",
        "ldrdhar": "\u2967",
        "ldrushar": "\u294B",
        "ldsh": "\u21B2",
        "le": "\u2264",
        "lE": "\u2266",
        "LeftAngleBracket": "\u27E8",
        "leftarrow": "\u2190",
        "Leftarrow": "\u21D0",
        "LeftArrow": "\u2190",
        "LeftArrowBar": "\u21E4",
        "LeftArrowRightArrow": "\u21C6",
        "leftarrowtail": "\u21A2",
        "LeftCeiling": "\u2308",
        "LeftDoubleBracket": "\u27E6",
        "LeftDownTeeVector": "\u2961",
        "LeftDownVector": "\u21C3",
        "LeftDownVectorBar": "\u2959",
        "LeftFloor": "\u230A",
        "leftharpoondown": "\u21BD",
        "leftharpoonup": "\u21BC",
        "leftleftarrows": "\u21C7",
        "leftrightarrow": "\u2194",
        "Leftrightarrow": "\u21D4",
        "LeftRightArrow": "\u2194",
        "leftrightarrows": "\u21C6",
        "leftrightharpoons": "\u21CB",
        "leftrightsquigarrow": "\u21AD",
        "LeftRightVector": "\u294E",
        "LeftTee": "\u22A3",
        "LeftTeeArrow": "\u21A4",
        "LeftTeeVector": "\u295A",
        "leftthreetimes": "\u22CB",
        "LeftTriangle": "\u22B2",
        "LeftTriangleBar": "\u29CF",
        "LeftTriangleEqual": "\u22B4",
        "LeftUpDownVector": "\u2951",
        "LeftUpTeeVector": "\u2960",
        "LeftUpVector": "\u21BF",
        "LeftUpVectorBar": "\u2958",
        "LeftVector": "\u21BC",
        "LeftVectorBar": "\u2952",
        "leg": "\u22DA",
        "lEg": "\u2A8B",
        "leq": "\u2264",
        "leqq": "\u2266",
        "leqslant": "\u2A7D",
        "les": "\u2A7D",
        "lescc": "\u2AA8",
        "lesdot": "\u2A7F",
        "lesdoto": "\u2A81",
        "lesdotor": "\u2A83",
        "lesg": "\u22DA\uFE00",
        "lesges": "\u2A93",
        "lessapprox": "\u2A85",
        "lessdot": "\u22D6",
        "lesseqgtr": "\u22DA",
        "lesseqqgtr": "\u2A8B",
        "LessEqualGreater": "\u22DA",
        "LessFullEqual": "\u2266",
        "LessGreater": "\u2276",
        "lessgtr": "\u2276",
        "LessLess": "\u2AA1",
        "lesssim": "\u2272",
        "LessSlantEqual": "\u2A7D",
        "LessTilde": "\u2272",
        "lfisht": "\u297C",
        "lfloor": "\u230A",
        "lfr": "\uD835\uDD29",
        "Lfr": "\uD835\uDD0F",
        "lg": "\u2276",
        "lgE": "\u2A91",
        "lHar": "\u2962",
        "lhard": "\u21BD",
        "lharu": "\u21BC",
        "lharul": "\u296A",
        "lhblk": "\u2584",
        "ljcy": "\u0459",
        "LJcy": "\u0409",
        "ll": "\u226A",
        "Ll": "\u22D8",
        "llarr": "\u21C7",
        "llcorner": "\u231E",
        "Lleftarrow": "\u21DA",
        "llhard": "\u296B",
        "lltri": "\u25FA",
        "lmidot": "\u0140",
        "Lmidot": "\u013F",
        "lmoust": "\u23B0",
        "lmoustache": "\u23B0",
        "lnap": "\u2A89",
        "lnapprox": "\u2A89",
        "lne": "\u2A87",
        "lnE": "\u2268",
        "lneq": "\u2A87",
        "lneqq": "\u2268",
        "lnsim": "\u22E6",
        "loang": "\u27EC",
        "loarr": "\u21FD",
        "lobrk": "\u27E6",
        "longleftarrow": "\u27F5",
        "Longleftarrow": "\u27F8",
        "LongLeftArrow": "\u27F5",
        "longleftrightarrow": "\u27F7",
        "Longleftrightarrow": "\u27FA",
        "LongLeftRightArrow": "\u27F7",
        "longmapsto": "\u27FC",
        "longrightarrow": "\u27F6",
        "Longrightarrow": "\u27F9",
        "LongRightArrow": "\u27F6",
        "looparrowleft": "\u21AB",
        "looparrowright": "\u21AC",
        "lopar": "\u2985",
        "lopf": "\uD835\uDD5D",
        "Lopf": "\uD835\uDD43",
        "loplus": "\u2A2D",
        "lotimes": "\u2A34",
        "lowast": "\u2217",
        "lowbar": "_",
        "LowerLeftArrow": "\u2199",
        "LowerRightArrow": "\u2198",
        "loz": "\u25CA",
        "lozenge": "\u25CA",
        "lozf": "\u29EB",
        "lpar": "(",
        "lparlt": "\u2993",
        "lrarr": "\u21C6",
        "lrcorner": "\u231F",
        "lrhar": "\u21CB",
        "lrhard": "\u296D",
        "lrm": "\u200E",
        "lrtri": "\u22BF",
        "lsaquo": "\u2039",
        "lscr": "\uD835\uDCC1",
        "Lscr": "\u2112",
        "lsh": "\u21B0",
        "Lsh": "\u21B0",
        "lsim": "\u2272",
        "lsime": "\u2A8D",
        "lsimg": "\u2A8F",
        "lsqb": "[",
        "lsquo": "\u2018",
        "lsquor": "\u201A",
        "lstrok": "\u0142",
        "Lstrok": "\u0141",
        "lt": "<",
        "Lt": "\u226A",
        "LT": "<",
        "ltcc": "\u2AA6",
        "ltcir": "\u2A79",
        "ltdot": "\u22D6",
        "lthree": "\u22CB",
        "ltimes": "\u22C9",
        "ltlarr": "\u2976",
        "ltquest": "\u2A7B",
        "ltri": "\u25C3",
        "ltrie": "\u22B4",
        "ltrif": "\u25C2",
        "ltrPar": "\u2996",
        "lurdshar": "\u294A",
        "luruhar": "\u2966",
        "lvertneqq": "\u2268\uFE00",
        "lvnE": "\u2268\uFE00",
        "macr": "\xAF",
        "male": "\u2642",
        "malt": "\u2720",
        "maltese": "\u2720",
        "map": "\u21A6",
        "Map": "\u2905",
        "mapsto": "\u21A6",
        "mapstodown": "\u21A7",
        "mapstoleft": "\u21A4",
        "mapstoup": "\u21A5",
        "marker": "\u25AE",
        "mcomma": "\u2A29",
        "mcy": "\u043C",
        "Mcy": "\u041C",
        "mdash": "\u2014",
        "mDDot": "\u223A",
        "measuredangle": "\u2221",
        "MediumSpace": "\u205F",
        "Mellintrf": "\u2133",
        "mfr": "\uD835\uDD2A",
        "Mfr": "\uD835\uDD10",
        "mho": "\u2127",
        "micro": "\xB5",
        "mid": "\u2223",
        "midast": "*",
        "midcir": "\u2AF0",
        "middot": "\xB7",
        "minus": "\u2212",
        "minusb": "\u229F",
        "minusd": "\u2238",
        "minusdu": "\u2A2A",
        "MinusPlus": "\u2213",
        "mlcp": "\u2ADB",
        "mldr": "\u2026",
        "mnplus": "\u2213",
        "models": "\u22A7",
        "mopf": "\uD835\uDD5E",
        "Mopf": "\uD835\uDD44",
        "mp": "\u2213",
        "mscr": "\uD835\uDCC2",
        "Mscr": "\u2133",
        "mstpos": "\u223E",
        "mu": "\u03BC",
        "Mu": "\u039C",
        "multimap": "\u22B8",
        "mumap": "\u22B8",
        "nabla": "\u2207",
        "nacute": "\u0144",
        "Nacute": "\u0143",
        "nang": "\u2220\u20D2",
        "nap": "\u2249",
        "napE": "\u2A70\u0338",
        "napid": "\u224B\u0338",
        "napos": "\u0149",
        "napprox": "\u2249",
        "natur": "\u266E",
        "natural": "\u266E",
        "naturals": "\u2115",
        "nbsp": "\xA0",
        "nbump": "\u224E\u0338",
        "nbumpe": "\u224F\u0338",
        "ncap": "\u2A43",
        "ncaron": "\u0148",
        "Ncaron": "\u0147",
        "ncedil": "\u0146",
        "Ncedil": "\u0145",
        "ncong": "\u2247",
        "ncongdot": "\u2A6D\u0338",
        "ncup": "\u2A42",
        "ncy": "\u043D",
        "Ncy": "\u041D",
        "ndash": "\u2013",
        "ne": "\u2260",
        "nearhk": "\u2924",
        "nearr": "\u2197",
        "neArr": "\u21D7",
        "nearrow": "\u2197",
        "nedot": "\u2250\u0338",
        "NegativeMediumSpace": "\u200B",
        "NegativeThickSpace": "\u200B",
        "NegativeThinSpace": "\u200B",
        "NegativeVeryThinSpace": "\u200B",
        "nequiv": "\u2262",
        "nesear": "\u2928",
        "nesim": "\u2242\u0338",
        "NestedGreaterGreater": "\u226B",
        "NestedLessLess": "\u226A",
        "NewLine": "\n",
        "nexist": "\u2204",
        "nexists": "\u2204",
        "nfr": "\uD835\uDD2B",
        "Nfr": "\uD835\uDD11",
        "nge": "\u2271",
        "ngE": "\u2267\u0338",
        "ngeq": "\u2271",
        "ngeqq": "\u2267\u0338",
        "ngeqslant": "\u2A7E\u0338",
        "nges": "\u2A7E\u0338",
        "nGg": "\u22D9\u0338",
        "ngsim": "\u2275",
        "ngt": "\u226F",
        "nGt": "\u226B\u20D2",
        "ngtr": "\u226F",
        "nGtv": "\u226B\u0338",
        "nharr": "\u21AE",
        "nhArr": "\u21CE",
        "nhpar": "\u2AF2",
        "ni": "\u220B",
        "nis": "\u22FC",
        "nisd": "\u22FA",
        "niv": "\u220B",
        "njcy": "\u045A",
        "NJcy": "\u040A",
        "nlarr": "\u219A",
        "nlArr": "\u21CD",
        "nldr": "\u2025",
        "nle": "\u2270",
        "nlE": "\u2266\u0338",
        "nleftarrow": "\u219A",
        "nLeftarrow": "\u21CD",
        "nleftrightarrow": "\u21AE",
        "nLeftrightarrow": "\u21CE",
        "nleq": "\u2270",
        "nleqq": "\u2266\u0338",
        "nleqslant": "\u2A7D\u0338",
        "nles": "\u2A7D\u0338",
        "nless": "\u226E",
        "nLl": "\u22D8\u0338",
        "nlsim": "\u2274",
        "nlt": "\u226E",
        "nLt": "\u226A\u20D2",
        "nltri": "\u22EA",
        "nltrie": "\u22EC",
        "nLtv": "\u226A\u0338",
        "nmid": "\u2224",
        "NoBreak": "\u2060",
        "NonBreakingSpace": "\xA0",
        "nopf": "\uD835\uDD5F",
        "Nopf": "\u2115",
        "not": "\xAC",
        "Not": "\u2AEC",
        "NotCongruent": "\u2262",
        "NotCupCap": "\u226D",
        "NotDoubleVerticalBar": "\u2226",
        "NotElement": "\u2209",
        "NotEqual": "\u2260",
        "NotEqualTilde": "\u2242\u0338",
        "NotExists": "\u2204",
        "NotGreater": "\u226F",
        "NotGreaterEqual": "\u2271",
        "NotGreaterFullEqual": "\u2267\u0338",
        "NotGreaterGreater": "\u226B\u0338",
        "NotGreaterLess": "\u2279",
        "NotGreaterSlantEqual": "\u2A7E\u0338",
        "NotGreaterTilde": "\u2275",
        "NotHumpDownHump": "\u224E\u0338",
        "NotHumpEqual": "\u224F\u0338",
        "notin": "\u2209",
        "notindot": "\u22F5\u0338",
        "notinE": "\u22F9\u0338",
        "notinva": "\u2209",
        "notinvb": "\u22F7",
        "notinvc": "\u22F6",
        "NotLeftTriangle": "\u22EA",
        "NotLeftTriangleBar": "\u29CF\u0338",
        "NotLeftTriangleEqual": "\u22EC",
        "NotLess": "\u226E",
        "NotLessEqual": "\u2270",
        "NotLessGreater": "\u2278",
        "NotLessLess": "\u226A\u0338",
        "NotLessSlantEqual": "\u2A7D\u0338",
        "NotLessTilde": "\u2274",
        "NotNestedGreaterGreater": "\u2AA2\u0338",
        "NotNestedLessLess": "\u2AA1\u0338",
        "notni": "\u220C",
        "notniva": "\u220C",
        "notnivb": "\u22FE",
        "notnivc": "\u22FD",
        "NotPrecedes": "\u2280",
        "NotPrecedesEqual": "\u2AAF\u0338",
        "NotPrecedesSlantEqual": "\u22E0",
        "NotReverseElement": "\u220C",
        "NotRightTriangle": "\u22EB",
        "NotRightTriangleBar": "\u29D0\u0338",
        "NotRightTriangleEqual": "\u22ED",
        "NotSquareSubset": "\u228F\u0338",
        "NotSquareSubsetEqual": "\u22E2",
        "NotSquareSuperset": "\u2290\u0338",
        "NotSquareSupersetEqual": "\u22E3",
        "NotSubset": "\u2282\u20D2",
        "NotSubsetEqual": "\u2288",
        "NotSucceeds": "\u2281",
        "NotSucceedsEqual": "\u2AB0\u0338",
        "NotSucceedsSlantEqual": "\u22E1",
        "NotSucceedsTilde": "\u227F\u0338",
        "NotSuperset": "\u2283\u20D2",
        "NotSupersetEqual": "\u2289",
        "NotTilde": "\u2241",
        "NotTildeEqual": "\u2244",
        "NotTildeFullEqual": "\u2247",
        "NotTildeTilde": "\u2249",
        "NotVerticalBar": "\u2224",
        "npar": "\u2226",
        "nparallel": "\u2226",
        "nparsl": "\u2AFD\u20E5",
        "npart": "\u2202\u0338",
        "npolint": "\u2A14",
        "npr": "\u2280",
        "nprcue": "\u22E0",
        "npre": "\u2AAF\u0338",
        "nprec": "\u2280",
        "npreceq": "\u2AAF\u0338",
        "nrarr": "\u219B",
        "nrArr": "\u21CF",
        "nrarrc": "\u2933\u0338",
        "nrarrw": "\u219D\u0338",
        "nrightarrow": "\u219B",
        "nRightarrow": "\u21CF",
        "nrtri": "\u22EB",
        "nrtrie": "\u22ED",
        "nsc": "\u2281",
        "nsccue": "\u22E1",
        "nsce": "\u2AB0\u0338",
        "nscr": "\uD835\uDCC3",
        "Nscr": "\uD835\uDCA9",
        "nshortmid": "\u2224",
        "nshortparallel": "\u2226",
        "nsim": "\u2241",
        "nsime": "\u2244",
        "nsimeq": "\u2244",
        "nsmid": "\u2224",
        "nspar": "\u2226",
        "nsqsube": "\u22E2",
        "nsqsupe": "\u22E3",
        "nsub": "\u2284",
        "nsube": "\u2288",
        "nsubE": "\u2AC5\u0338",
        "nsubset": "\u2282\u20D2",
        "nsubseteq": "\u2288",
        "nsubseteqq": "\u2AC5\u0338",
        "nsucc": "\u2281",
        "nsucceq": "\u2AB0\u0338",
        "nsup": "\u2285",
        "nsupe": "\u2289",
        "nsupE": "\u2AC6\u0338",
        "nsupset": "\u2283\u20D2",
        "nsupseteq": "\u2289",
        "nsupseteqq": "\u2AC6\u0338",
        "ntgl": "\u2279",
        "ntilde": "\xF1",
        "Ntilde": "\xD1",
        "ntlg": "\u2278",
        "ntriangleleft": "\u22EA",
        "ntrianglelefteq": "\u22EC",
        "ntriangleright": "\u22EB",
        "ntrianglerighteq": "\u22ED",
        "nu": "\u03BD",
        "Nu": "\u039D",
        "num": "#",
        "numero": "\u2116",
        "numsp": "\u2007",
        "nvap": "\u224D\u20D2",
        "nvdash": "\u22AC",
        "nvDash": "\u22AD",
        "nVdash": "\u22AE",
        "nVDash": "\u22AF",
        "nvge": "\u2265\u20D2",
        "nvgt": ">\u20D2",
        "nvHarr": "\u2904",
        "nvinfin": "\u29DE",
        "nvlArr": "\u2902",
        "nvle": "\u2264\u20D2",
        "nvlt": "<\u20D2",
        "nvltrie": "\u22B4\u20D2",
        "nvrArr": "\u2903",
        "nvrtrie": "\u22B5\u20D2",
        "nvsim": "\u223C\u20D2",
        "nwarhk": "\u2923",
        "nwarr": "\u2196",
        "nwArr": "\u21D6",
        "nwarrow": "\u2196",
        "nwnear": "\u2927",
        "oacute": "\xF3",
        "Oacute": "\xD3",
        "oast": "\u229B",
        "ocir": "\u229A",
        "ocirc": "\xF4",
        "Ocirc": "\xD4",
        "ocy": "\u043E",
        "Ocy": "\u041E",
        "odash": "\u229D",
        "odblac": "\u0151",
        "Odblac": "\u0150",
        "odiv": "\u2A38",
        "odot": "\u2299",
        "odsold": "\u29BC",
        "oelig": "\u0153",
        "OElig": "\u0152",
        "ofcir": "\u29BF",
        "ofr": "\uD835\uDD2C",
        "Ofr": "\uD835\uDD12",
        "ogon": "\u02DB",
        "ograve": "\xF2",
        "Ograve": "\xD2",
        "ogt": "\u29C1",
        "ohbar": "\u29B5",
        "ohm": "\u03A9",
        "oint": "\u222E",
        "olarr": "\u21BA",
        "olcir": "\u29BE",
        "olcross": "\u29BB",
        "oline": "\u203E",
        "olt": "\u29C0",
        "omacr": "\u014D",
        "Omacr": "\u014C",
        "omega": "\u03C9",
        "Omega": "\u03A9",
        "omicron": "\u03BF",
        "Omicron": "\u039F",
        "omid": "\u29B6",
        "ominus": "\u2296",
        "oopf": "\uD835\uDD60",
        "Oopf": "\uD835\uDD46",
        "opar": "\u29B7",
        "OpenCurlyDoubleQuote": "\u201C",
        "OpenCurlyQuote": "\u2018",
        "operp": "\u29B9",
        "oplus": "\u2295",
        "or": "\u2228",
        "Or": "\u2A54",
        "orarr": "\u21BB",
        "ord": "\u2A5D",
        "order": "\u2134",
        "orderof": "\u2134",
        "ordf": "\xAA",
        "ordm": "\xBA",
        "origof": "\u22B6",
        "oror": "\u2A56",
        "orslope": "\u2A57",
        "orv": "\u2A5B",
        "oS": "\u24C8",
        "oscr": "\u2134",
        "Oscr": "\uD835\uDCAA",
        "oslash": "\xF8",
        "Oslash": "\xD8",
        "osol": "\u2298",
        "otilde": "\xF5",
        "Otilde": "\xD5",
        "otimes": "\u2297",
        "Otimes": "\u2A37",
        "otimesas": "\u2A36",
        "ouml": "\xF6",
        "Ouml": "\xD6",
        "ovbar": "\u233D",
        "OverBar": "\u203E",
        "OverBrace": "\u23DE",
        "OverBracket": "\u23B4",
        "OverParenthesis": "\u23DC",
        "par": "\u2225",
        "para": "\xB6",
        "parallel": "\u2225",
        "parsim": "\u2AF3",
        "parsl": "\u2AFD",
        "part": "\u2202",
        "PartialD": "\u2202",
        "pcy": "\u043F",
        "Pcy": "\u041F",
        "percnt": "%",
        "period": ".",
        "permil": "\u2030",
        "perp": "\u22A5",
        "pertenk": "\u2031",
        "pfr": "\uD835\uDD2D",
        "Pfr": "\uD835\uDD13",
        "phi": "\u03C6",
        "Phi": "\u03A6",
        "phiv": "\u03D5",
        "phmmat": "\u2133",
        "phone": "\u260E",
        "pi": "\u03C0",
        "Pi": "\u03A0",
        "pitchfork": "\u22D4",
        "piv": "\u03D6",
        "planck": "\u210F",
        "planckh": "\u210E",
        "plankv": "\u210F",
        "plus": "+",
        "plusacir": "\u2A23",
        "plusb": "\u229E",
        "pluscir": "\u2A22",
        "plusdo": "\u2214",
        "plusdu": "\u2A25",
        "pluse": "\u2A72",
        "PlusMinus": "\xB1",
        "plusmn": "\xB1",
        "plussim": "\u2A26",
        "plustwo": "\u2A27",
        "pm": "\xB1",
        "Poincareplane": "\u210C",
        "pointint": "\u2A15",
        "popf": "\uD835\uDD61",
        "Popf": "\u2119",
        "pound": "\xA3",
        "pr": "\u227A",
        "Pr": "\u2ABB",
        "prap": "\u2AB7",
        "prcue": "\u227C",
        "pre": "\u2AAF",
        "prE": "\u2AB3",
        "prec": "\u227A",
        "precapprox": "\u2AB7",
        "preccurlyeq": "\u227C",
        "Precedes": "\u227A",
        "PrecedesEqual": "\u2AAF",
        "PrecedesSlantEqual": "\u227C",
        "PrecedesTilde": "\u227E",
        "preceq": "\u2AAF",
        "precnapprox": "\u2AB9",
        "precneqq": "\u2AB5",
        "precnsim": "\u22E8",
        "precsim": "\u227E",
        "prime": "\u2032",
        "Prime": "\u2033",
        "primes": "\u2119",
        "prnap": "\u2AB9",
        "prnE": "\u2AB5",
        "prnsim": "\u22E8",
        "prod": "\u220F",
        "Product": "\u220F",
        "profalar": "\u232E",
        "profline": "\u2312",
        "profsurf": "\u2313",
        "prop": "\u221D",
        "Proportion": "\u2237",
        "Proportional": "\u221D",
        "propto": "\u221D",
        "prsim": "\u227E",
        "prurel": "\u22B0",
        "pscr": "\uD835\uDCC5",
        "Pscr": "\uD835\uDCAB",
        "psi": "\u03C8",
        "Psi": "\u03A8",
        "puncsp": "\u2008",
        "qfr": "\uD835\uDD2E",
        "Qfr": "\uD835\uDD14",
        "qint": "\u2A0C",
        "qopf": "\uD835\uDD62",
        "Qopf": "\u211A",
        "qprime": "\u2057",
        "qscr": "\uD835\uDCC6",
        "Qscr": "\uD835\uDCAC",
        "quaternions": "\u210D",
        "quatint": "\u2A16",
        "quest": "?",
        "questeq": "\u225F",
        "quot": '"',
        "QUOT": '"',
        "rAarr": "\u21DB",
        "race": "\u223D\u0331",
        "racute": "\u0155",
        "Racute": "\u0154",
        "radic": "\u221A",
        "raemptyv": "\u29B3",
        "rang": "\u27E9",
        "Rang": "\u27EB",
        "rangd": "\u2992",
        "range": "\u29A5",
        "rangle": "\u27E9",
        "raquo": "\xBB",
        "rarr": "\u2192",
        "rArr": "\u21D2",
        "Rarr": "\u21A0",
        "rarrap": "\u2975",
        "rarrb": "\u21E5",
        "rarrbfs": "\u2920",
        "rarrc": "\u2933",
        "rarrfs": "\u291E",
        "rarrhk": "\u21AA",
        "rarrlp": "\u21AC",
        "rarrpl": "\u2945",
        "rarrsim": "\u2974",
        "rarrtl": "\u21A3",
        "Rarrtl": "\u2916",
        "rarrw": "\u219D",
        "ratail": "\u291A",
        "rAtail": "\u291C",
        "ratio": "\u2236",
        "rationals": "\u211A",
        "rbarr": "\u290D",
        "rBarr": "\u290F",
        "RBarr": "\u2910",
        "rbbrk": "\u2773",
        "rbrace": "}",
        "rbrack": "]",
        "rbrke": "\u298C",
        "rbrksld": "\u298E",
        "rbrkslu": "\u2990",
        "rcaron": "\u0159",
        "Rcaron": "\u0158",
        "rcedil": "\u0157",
        "Rcedil": "\u0156",
        "rceil": "\u2309",
        "rcub": "}",
        "rcy": "\u0440",
        "Rcy": "\u0420",
        "rdca": "\u2937",
        "rdldhar": "\u2969",
        "rdquo": "\u201D",
        "rdquor": "\u201D",
        "rdsh": "\u21B3",
        "Re": "\u211C",
        "real": "\u211C",
        "realine": "\u211B",
        "realpart": "\u211C",
        "reals": "\u211D",
        "rect": "\u25AD",
        "reg": "\xAE",
        "REG": "\xAE",
        "ReverseElement": "\u220B",
        "ReverseEquilibrium": "\u21CB",
        "ReverseUpEquilibrium": "\u296F",
        "rfisht": "\u297D",
        "rfloor": "\u230B",
        "rfr": "\uD835\uDD2F",
        "Rfr": "\u211C",
        "rHar": "\u2964",
        "rhard": "\u21C1",
        "rharu": "\u21C0",
        "rharul": "\u296C",
        "rho": "\u03C1",
        "Rho": "\u03A1",
        "rhov": "\u03F1",
        "RightAngleBracket": "\u27E9",
        "rightarrow": "\u2192",
        "Rightarrow": "\u21D2",
        "RightArrow": "\u2192",
        "RightArrowBar": "\u21E5",
        "RightArrowLeftArrow": "\u21C4",
        "rightarrowtail": "\u21A3",
        "RightCeiling": "\u2309",
        "RightDoubleBracket": "\u27E7",
        "RightDownTeeVector": "\u295D",
        "RightDownVector": "\u21C2",
        "RightDownVectorBar": "\u2955",
        "RightFloor": "\u230B",
        "rightharpoondown": "\u21C1",
        "rightharpoonup": "\u21C0",
        "rightleftarrows": "\u21C4",
        "rightleftharpoons": "\u21CC",
        "rightrightarrows": "\u21C9",
        "rightsquigarrow": "\u219D",
        "RightTee": "\u22A2",
        "RightTeeArrow": "\u21A6",
        "RightTeeVector": "\u295B",
        "rightthreetimes": "\u22CC",
        "RightTriangle": "\u22B3",
        "RightTriangleBar": "\u29D0",
        "RightTriangleEqual": "\u22B5",
        "RightUpDownVector": "\u294F",
        "RightUpTeeVector": "\u295C",
        "RightUpVector": "\u21BE",
        "RightUpVectorBar": "\u2954",
        "RightVector": "\u21C0",
        "RightVectorBar": "\u2953",
        "ring": "\u02DA",
        "risingdotseq": "\u2253",
        "rlarr": "\u21C4",
        "rlhar": "\u21CC",
        "rlm": "\u200F",
        "rmoust": "\u23B1",
        "rmoustache": "\u23B1",
        "rnmid": "\u2AEE",
        "roang": "\u27ED",
        "roarr": "\u21FE",
        "robrk": "\u27E7",
        "ropar": "\u2986",
        "ropf": "\uD835\uDD63",
        "Ropf": "\u211D",
        "roplus": "\u2A2E",
        "rotimes": "\u2A35",
        "RoundImplies": "\u2970",
        "rpar": ")",
        "rpargt": "\u2994",
        "rppolint": "\u2A12",
        "rrarr": "\u21C9",
        "Rrightarrow": "\u21DB",
        "rsaquo": "\u203A",
        "rscr": "\uD835\uDCC7",
        "Rscr": "\u211B",
        "rsh": "\u21B1",
        "Rsh": "\u21B1",
        "rsqb": "]",
        "rsquo": "\u2019",
        "rsquor": "\u2019",
        "rthree": "\u22CC",
        "rtimes": "\u22CA",
        "rtri": "\u25B9",
        "rtrie": "\u22B5",
        "rtrif": "\u25B8",
        "rtriltri": "\u29CE",
        "RuleDelayed": "\u29F4",
        "ruluhar": "\u2968",
        "rx": "\u211E",
        "sacute": "\u015B",
        "Sacute": "\u015A",
        "sbquo": "\u201A",
        "sc": "\u227B",
        "Sc": "\u2ABC",
        "scap": "\u2AB8",
        "scaron": "\u0161",
        "Scaron": "\u0160",
        "sccue": "\u227D",
        "sce": "\u2AB0",
        "scE": "\u2AB4",
        "scedil": "\u015F",
        "Scedil": "\u015E",
        "scirc": "\u015D",
        "Scirc": "\u015C",
        "scnap": "\u2ABA",
        "scnE": "\u2AB6",
        "scnsim": "\u22E9",
        "scpolint": "\u2A13",
        "scsim": "\u227F",
        "scy": "\u0441",
        "Scy": "\u0421",
        "sdot": "\u22C5",
        "sdotb": "\u22A1",
        "sdote": "\u2A66",
        "searhk": "\u2925",
        "searr": "\u2198",
        "seArr": "\u21D8",
        "searrow": "\u2198",
        "sect": "\xA7",
        "semi": ";",
        "seswar": "\u2929",
        "setminus": "\u2216",
        "setmn": "\u2216",
        "sext": "\u2736",
        "sfr": "\uD835\uDD30",
        "Sfr": "\uD835\uDD16",
        "sfrown": "\u2322",
        "sharp": "\u266F",
        "shchcy": "\u0449",
        "SHCHcy": "\u0429",
        "shcy": "\u0448",
        "SHcy": "\u0428",
        "ShortDownArrow": "\u2193",
        "ShortLeftArrow": "\u2190",
        "shortmid": "\u2223",
        "shortparallel": "\u2225",
        "ShortRightArrow": "\u2192",
        "ShortUpArrow": "\u2191",
        "shy": "\xAD",
        "sigma": "\u03C3",
        "Sigma": "\u03A3",
        "sigmaf": "\u03C2",
        "sigmav": "\u03C2",
        "sim": "\u223C",
        "simdot": "\u2A6A",
        "sime": "\u2243",
        "simeq": "\u2243",
        "simg": "\u2A9E",
        "simgE": "\u2AA0",
        "siml": "\u2A9D",
        "simlE": "\u2A9F",
        "simne": "\u2246",
        "simplus": "\u2A24",
        "simrarr": "\u2972",
        "slarr": "\u2190",
        "SmallCircle": "\u2218",
        "smallsetminus": "\u2216",
        "smashp": "\u2A33",
        "smeparsl": "\u29E4",
        "smid": "\u2223",
        "smile": "\u2323",
        "smt": "\u2AAA",
        "smte": "\u2AAC",
        "smtes": "\u2AAC\uFE00",
        "softcy": "\u044C",
        "SOFTcy": "\u042C",
        "sol": "/",
        "solb": "\u29C4",
        "solbar": "\u233F",
        "sopf": "\uD835\uDD64",
        "Sopf": "\uD835\uDD4A",
        "spades": "\u2660",
        "spadesuit": "\u2660",
        "spar": "\u2225",
        "sqcap": "\u2293",
        "sqcaps": "\u2293\uFE00",
        "sqcup": "\u2294",
        "sqcups": "\u2294\uFE00",
        "Sqrt": "\u221A",
        "sqsub": "\u228F",
        "sqsube": "\u2291",
        "sqsubset": "\u228F",
        "sqsubseteq": "\u2291",
        "sqsup": "\u2290",
        "sqsupe": "\u2292",
        "sqsupset": "\u2290",
        "sqsupseteq": "\u2292",
        "squ": "\u25A1",
        "square": "\u25A1",
        "Square": "\u25A1",
        "SquareIntersection": "\u2293",
        "SquareSubset": "\u228F",
        "SquareSubsetEqual": "\u2291",
        "SquareSuperset": "\u2290",
        "SquareSupersetEqual": "\u2292",
        "SquareUnion": "\u2294",
        "squarf": "\u25AA",
        "squf": "\u25AA",
        "srarr": "\u2192",
        "sscr": "\uD835\uDCC8",
        "Sscr": "\uD835\uDCAE",
        "ssetmn": "\u2216",
        "ssmile": "\u2323",
        "sstarf": "\u22C6",
        "star": "\u2606",
        "Star": "\u22C6",
        "starf": "\u2605",
        "straightepsilon": "\u03F5",
        "straightphi": "\u03D5",
        "strns": "\xAF",
        "sub": "\u2282",
        "Sub": "\u22D0",
        "subdot": "\u2ABD",
        "sube": "\u2286",
        "subE": "\u2AC5",
        "subedot": "\u2AC3",
        "submult": "\u2AC1",
        "subne": "\u228A",
        "subnE": "\u2ACB",
        "subplus": "\u2ABF",
        "subrarr": "\u2979",
        "subset": "\u2282",
        "Subset": "\u22D0",
        "subseteq": "\u2286",
        "subseteqq": "\u2AC5",
        "SubsetEqual": "\u2286",
        "subsetneq": "\u228A",
        "subsetneqq": "\u2ACB",
        "subsim": "\u2AC7",
        "subsub": "\u2AD5",
        "subsup": "\u2AD3",
        "succ": "\u227B",
        "succapprox": "\u2AB8",
        "succcurlyeq": "\u227D",
        "Succeeds": "\u227B",
        "SucceedsEqual": "\u2AB0",
        "SucceedsSlantEqual": "\u227D",
        "SucceedsTilde": "\u227F",
        "succeq": "\u2AB0",
        "succnapprox": "\u2ABA",
        "succneqq": "\u2AB6",
        "succnsim": "\u22E9",
        "succsim": "\u227F",
        "SuchThat": "\u220B",
        "sum": "\u2211",
        "Sum": "\u2211",
        "sung": "\u266A",
        "sup": "\u2283",
        "Sup": "\u22D1",
        "sup1": "\xB9",
        "sup2": "\xB2",
        "sup3": "\xB3",
        "supdot": "\u2ABE",
        "supdsub": "\u2AD8",
        "supe": "\u2287",
        "supE": "\u2AC6",
        "supedot": "\u2AC4",
        "Superset": "\u2283",
        "SupersetEqual": "\u2287",
        "suphsol": "\u27C9",
        "suphsub": "\u2AD7",
        "suplarr": "\u297B",
        "supmult": "\u2AC2",
        "supne": "\u228B",
        "supnE": "\u2ACC",
        "supplus": "\u2AC0",
        "supset": "\u2283",
        "Supset": "\u22D1",
        "supseteq": "\u2287",
        "supseteqq": "\u2AC6",
        "supsetneq": "\u228B",
        "supsetneqq": "\u2ACC",
        "supsim": "\u2AC8",
        "supsub": "\u2AD4",
        "supsup": "\u2AD6",
        "swarhk": "\u2926",
        "swarr": "\u2199",
        "swArr": "\u21D9",
        "swarrow": "\u2199",
        "swnwar": "\u292A",
        "szlig": "\xDF",
        "Tab": "	",
        "target": "\u2316",
        "tau": "\u03C4",
        "Tau": "\u03A4",
        "tbrk": "\u23B4",
        "tcaron": "\u0165",
        "Tcaron": "\u0164",
        "tcedil": "\u0163",
        "Tcedil": "\u0162",
        "tcy": "\u0442",
        "Tcy": "\u0422",
        "tdot": "\u20DB",
        "telrec": "\u2315",
        "tfr": "\uD835\uDD31",
        "Tfr": "\uD835\uDD17",
        "there4": "\u2234",
        "therefore": "\u2234",
        "Therefore": "\u2234",
        "theta": "\u03B8",
        "Theta": "\u0398",
        "thetasym": "\u03D1",
        "thetav": "\u03D1",
        "thickapprox": "\u2248",
        "thicksim": "\u223C",
        "ThickSpace": "\u205F\u200A",
        "thinsp": "\u2009",
        "ThinSpace": "\u2009",
        "thkap": "\u2248",
        "thksim": "\u223C",
        "thorn": "\xFE",
        "THORN": "\xDE",
        "tilde": "\u02DC",
        "Tilde": "\u223C",
        "TildeEqual": "\u2243",
        "TildeFullEqual": "\u2245",
        "TildeTilde": "\u2248",
        "times": "\xD7",
        "timesb": "\u22A0",
        "timesbar": "\u2A31",
        "timesd": "\u2A30",
        "tint": "\u222D",
        "toea": "\u2928",
        "top": "\u22A4",
        "topbot": "\u2336",
        "topcir": "\u2AF1",
        "topf": "\uD835\uDD65",
        "Topf": "\uD835\uDD4B",
        "topfork": "\u2ADA",
        "tosa": "\u2929",
        "tprime": "\u2034",
        "trade": "\u2122",
        "TRADE": "\u2122",
        "triangle": "\u25B5",
        "triangledown": "\u25BF",
        "triangleleft": "\u25C3",
        "trianglelefteq": "\u22B4",
        "triangleq": "\u225C",
        "triangleright": "\u25B9",
        "trianglerighteq": "\u22B5",
        "tridot": "\u25EC",
        "trie": "\u225C",
        "triminus": "\u2A3A",
        "TripleDot": "\u20DB",
        "triplus": "\u2A39",
        "trisb": "\u29CD",
        "tritime": "\u2A3B",
        "trpezium": "\u23E2",
        "tscr": "\uD835\uDCC9",
        "Tscr": "\uD835\uDCAF",
        "tscy": "\u0446",
        "TScy": "\u0426",
        "tshcy": "\u045B",
        "TSHcy": "\u040B",
        "tstrok": "\u0167",
        "Tstrok": "\u0166",
        "twixt": "\u226C",
        "twoheadleftarrow": "\u219E",
        "twoheadrightarrow": "\u21A0",
        "uacute": "\xFA",
        "Uacute": "\xDA",
        "uarr": "\u2191",
        "uArr": "\u21D1",
        "Uarr": "\u219F",
        "Uarrocir": "\u2949",
        "ubrcy": "\u045E",
        "Ubrcy": "\u040E",
        "ubreve": "\u016D",
        "Ubreve": "\u016C",
        "ucirc": "\xFB",
        "Ucirc": "\xDB",
        "ucy": "\u0443",
        "Ucy": "\u0423",
        "udarr": "\u21C5",
        "udblac": "\u0171",
        "Udblac": "\u0170",
        "udhar": "\u296E",
        "ufisht": "\u297E",
        "ufr": "\uD835\uDD32",
        "Ufr": "\uD835\uDD18",
        "ugrave": "\xF9",
        "Ugrave": "\xD9",
        "uHar": "\u2963",
        "uharl": "\u21BF",
        "uharr": "\u21BE",
        "uhblk": "\u2580",
        "ulcorn": "\u231C",
        "ulcorner": "\u231C",
        "ulcrop": "\u230F",
        "ultri": "\u25F8",
        "umacr": "\u016B",
        "Umacr": "\u016A",
        "uml": "\xA8",
        "UnderBar": "_",
        "UnderBrace": "\u23DF",
        "UnderBracket": "\u23B5",
        "UnderParenthesis": "\u23DD",
        "Union": "\u22C3",
        "UnionPlus": "\u228E",
        "uogon": "\u0173",
        "Uogon": "\u0172",
        "uopf": "\uD835\uDD66",
        "Uopf": "\uD835\uDD4C",
        "uparrow": "\u2191",
        "Uparrow": "\u21D1",
        "UpArrow": "\u2191",
        "UpArrowBar": "\u2912",
        "UpArrowDownArrow": "\u21C5",
        "updownarrow": "\u2195",
        "Updownarrow": "\u21D5",
        "UpDownArrow": "\u2195",
        "UpEquilibrium": "\u296E",
        "upharpoonleft": "\u21BF",
        "upharpoonright": "\u21BE",
        "uplus": "\u228E",
        "UpperLeftArrow": "\u2196",
        "UpperRightArrow": "\u2197",
        "upsi": "\u03C5",
        "Upsi": "\u03D2",
        "upsih": "\u03D2",
        "upsilon": "\u03C5",
        "Upsilon": "\u03A5",
        "UpTee": "\u22A5",
        "UpTeeArrow": "\u21A5",
        "upuparrows": "\u21C8",
        "urcorn": "\u231D",
        "urcorner": "\u231D",
        "urcrop": "\u230E",
        "uring": "\u016F",
        "Uring": "\u016E",
        "urtri": "\u25F9",
        "uscr": "\uD835\uDCCA",
        "Uscr": "\uD835\uDCB0",
        "utdot": "\u22F0",
        "utilde": "\u0169",
        "Utilde": "\u0168",
        "utri": "\u25B5",
        "utrif": "\u25B4",
        "uuarr": "\u21C8",
        "uuml": "\xFC",
        "Uuml": "\xDC",
        "uwangle": "\u29A7",
        "vangrt": "\u299C",
        "varepsilon": "\u03F5",
        "varkappa": "\u03F0",
        "varnothing": "\u2205",
        "varphi": "\u03D5",
        "varpi": "\u03D6",
        "varpropto": "\u221D",
        "varr": "\u2195",
        "vArr": "\u21D5",
        "varrho": "\u03F1",
        "varsigma": "\u03C2",
        "varsubsetneq": "\u228A\uFE00",
        "varsubsetneqq": "\u2ACB\uFE00",
        "varsupsetneq": "\u228B\uFE00",
        "varsupsetneqq": "\u2ACC\uFE00",
        "vartheta": "\u03D1",
        "vartriangleleft": "\u22B2",
        "vartriangleright": "\u22B3",
        "vBar": "\u2AE8",
        "Vbar": "\u2AEB",
        "vBarv": "\u2AE9",
        "vcy": "\u0432",
        "Vcy": "\u0412",
        "vdash": "\u22A2",
        "vDash": "\u22A8",
        "Vdash": "\u22A9",
        "VDash": "\u22AB",
        "Vdashl": "\u2AE6",
        "vee": "\u2228",
        "Vee": "\u22C1",
        "veebar": "\u22BB",
        "veeeq": "\u225A",
        "vellip": "\u22EE",
        "verbar": "|",
        "Verbar": "\u2016",
        "vert": "|",
        "Vert": "\u2016",
        "VerticalBar": "\u2223",
        "VerticalLine": "|",
        "VerticalSeparator": "\u2758",
        "VerticalTilde": "\u2240",
        "VeryThinSpace": "\u200A",
        "vfr": "\uD835\uDD33",
        "Vfr": "\uD835\uDD19",
        "vltri": "\u22B2",
        "vnsub": "\u2282\u20D2",
        "vnsup": "\u2283\u20D2",
        "vopf": "\uD835\uDD67",
        "Vopf": "\uD835\uDD4D",
        "vprop": "\u221D",
        "vrtri": "\u22B3",
        "vscr": "\uD835\uDCCB",
        "Vscr": "\uD835\uDCB1",
        "vsubne": "\u228A\uFE00",
        "vsubnE": "\u2ACB\uFE00",
        "vsupne": "\u228B\uFE00",
        "vsupnE": "\u2ACC\uFE00",
        "Vvdash": "\u22AA",
        "vzigzag": "\u299A",
        "wcirc": "\u0175",
        "Wcirc": "\u0174",
        "wedbar": "\u2A5F",
        "wedge": "\u2227",
        "Wedge": "\u22C0",
        "wedgeq": "\u2259",
        "weierp": "\u2118",
        "wfr": "\uD835\uDD34",
        "Wfr": "\uD835\uDD1A",
        "wopf": "\uD835\uDD68",
        "Wopf": "\uD835\uDD4E",
        "wp": "\u2118",
        "wr": "\u2240",
        "wreath": "\u2240",
        "wscr": "\uD835\uDCCC",
        "Wscr": "\uD835\uDCB2",
        "xcap": "\u22C2",
        "xcirc": "\u25EF",
        "xcup": "\u22C3",
        "xdtri": "\u25BD",
        "xfr": "\uD835\uDD35",
        "Xfr": "\uD835\uDD1B",
        "xharr": "\u27F7",
        "xhArr": "\u27FA",
        "xi": "\u03BE",
        "Xi": "\u039E",
        "xlarr": "\u27F5",
        "xlArr": "\u27F8",
        "xmap": "\u27FC",
        "xnis": "\u22FB",
        "xodot": "\u2A00",
        "xopf": "\uD835\uDD69",
        "Xopf": "\uD835\uDD4F",
        "xoplus": "\u2A01",
        "xotime": "\u2A02",
        "xrarr": "\u27F6",
        "xrArr": "\u27F9",
        "xscr": "\uD835\uDCCD",
        "Xscr": "\uD835\uDCB3",
        "xsqcup": "\u2A06",
        "xuplus": "\u2A04",
        "xutri": "\u25B3",
        "xvee": "\u22C1",
        "xwedge": "\u22C0",
        "yacute": "\xFD",
        "Yacute": "\xDD",
        "yacy": "\u044F",
        "YAcy": "\u042F",
        "ycirc": "\u0177",
        "Ycirc": "\u0176",
        "ycy": "\u044B",
        "Ycy": "\u042B",
        "yen": "\xA5",
        "yfr": "\uD835\uDD36",
        "Yfr": "\uD835\uDD1C",
        "yicy": "\u0457",
        "YIcy": "\u0407",
        "yopf": "\uD835\uDD6A",
        "Yopf": "\uD835\uDD50",
        "yscr": "\uD835\uDCCE",
        "Yscr": "\uD835\uDCB4",
        "yucy": "\u044E",
        "YUcy": "\u042E",
        "yuml": "\xFF",
        "Yuml": "\u0178",
        "zacute": "\u017A",
        "Zacute": "\u0179",
        "zcaron": "\u017E",
        "Zcaron": "\u017D",
        "zcy": "\u0437",
        "Zcy": "\u0417",
        "zdot": "\u017C",
        "Zdot": "\u017B",
        "zeetrf": "\u2128",
        "ZeroWidthSpace": "\u200B",
        "zeta": "\u03B6",
        "Zeta": "\u0396",
        "zfr": "\uD835\uDD37",
        "Zfr": "\u2128",
        "zhcy": "\u0436",
        "ZHcy": "\u0416",
        "zigrarr": "\u21DD",
        "zopf": "\uD835\uDD6B",
        "Zopf": "\u2124",
        "zscr": "\uD835\uDCCF",
        "Zscr": "\uD835\uDCB5",
        "zwj": "\u200D",
        "zwnj": "\u200C"
      };
      var decodeMapLegacy = {
        "aacute": "\xE1",
        "Aacute": "\xC1",
        "acirc": "\xE2",
        "Acirc": "\xC2",
        "acute": "\xB4",
        "aelig": "\xE6",
        "AElig": "\xC6",
        "agrave": "\xE0",
        "Agrave": "\xC0",
        "amp": "&",
        "AMP": "&",
        "aring": "\xE5",
        "Aring": "\xC5",
        "atilde": "\xE3",
        "Atilde": "\xC3",
        "auml": "\xE4",
        "Auml": "\xC4",
        "brvbar": "\xA6",
        "ccedil": "\xE7",
        "Ccedil": "\xC7",
        "cedil": "\xB8",
        "cent": "\xA2",
        "copy": "\xA9",
        "COPY": "\xA9",
        "curren": "\xA4",
        "deg": "\xB0",
        "divide": "\xF7",
        "eacute": "\xE9",
        "Eacute": "\xC9",
        "ecirc": "\xEA",
        "Ecirc": "\xCA",
        "egrave": "\xE8",
        "Egrave": "\xC8",
        "eth": "\xF0",
        "ETH": "\xD0",
        "euml": "\xEB",
        "Euml": "\xCB",
        "frac12": "\xBD",
        "frac14": "\xBC",
        "frac34": "\xBE",
        "gt": ">",
        "GT": ">",
        "iacute": "\xED",
        "Iacute": "\xCD",
        "icirc": "\xEE",
        "Icirc": "\xCE",
        "iexcl": "\xA1",
        "igrave": "\xEC",
        "Igrave": "\xCC",
        "iquest": "\xBF",
        "iuml": "\xEF",
        "Iuml": "\xCF",
        "laquo": "\xAB",
        "lt": "<",
        "LT": "<",
        "macr": "\xAF",
        "micro": "\xB5",
        "middot": "\xB7",
        "nbsp": "\xA0",
        "not": "\xAC",
        "ntilde": "\xF1",
        "Ntilde": "\xD1",
        "oacute": "\xF3",
        "Oacute": "\xD3",
        "ocirc": "\xF4",
        "Ocirc": "\xD4",
        "ograve": "\xF2",
        "Ograve": "\xD2",
        "ordf": "\xAA",
        "ordm": "\xBA",
        "oslash": "\xF8",
        "Oslash": "\xD8",
        "otilde": "\xF5",
        "Otilde": "\xD5",
        "ouml": "\xF6",
        "Ouml": "\xD6",
        "para": "\xB6",
        "plusmn": "\xB1",
        "pound": "\xA3",
        "quot": '"',
        "QUOT": '"',
        "raquo": "\xBB",
        "reg": "\xAE",
        "REG": "\xAE",
        "sect": "\xA7",
        "shy": "\xAD",
        "sup1": "\xB9",
        "sup2": "\xB2",
        "sup3": "\xB3",
        "szlig": "\xDF",
        "thorn": "\xFE",
        "THORN": "\xDE",
        "times": "\xD7",
        "uacute": "\xFA",
        "Uacute": "\xDA",
        "ucirc": "\xFB",
        "Ucirc": "\xDB",
        "ugrave": "\xF9",
        "Ugrave": "\xD9",
        "uml": "\xA8",
        "uuml": "\xFC",
        "Uuml": "\xDC",
        "yacute": "\xFD",
        "Yacute": "\xDD",
        "yen": "\xA5",
        "yuml": "\xFF"
      };
      var decodeMapNumeric = {
        "0": "\uFFFD",
        "128": "\u20AC",
        "130": "\u201A",
        "131": "\u0192",
        "132": "\u201E",
        "133": "\u2026",
        "134": "\u2020",
        "135": "\u2021",
        "136": "\u02C6",
        "137": "\u2030",
        "138": "\u0160",
        "139": "\u2039",
        "140": "\u0152",
        "142": "\u017D",
        "145": "\u2018",
        "146": "\u2019",
        "147": "\u201C",
        "148": "\u201D",
        "149": "\u2022",
        "150": "\u2013",
        "151": "\u2014",
        "152": "\u02DC",
        "153": "\u2122",
        "154": "\u0161",
        "155": "\u203A",
        "156": "\u0153",
        "158": "\u017E",
        "159": "\u0178"
      };
      var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
      var stringFromCharCode = String.fromCharCode;
      var object = {};
      var hasOwnProperty = object.hasOwnProperty;
      var has = function has2(object2, propertyName) {
        return hasOwnProperty.call(object2, propertyName);
      };
      var contains = function contains2(array, value) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
          if (array[index] == value) {
            return true;
          }
        }
        return false;
      };
      var merge = function merge2(options, defaults) {
        if (!options) {
          return defaults;
        }
        var result = {};
        var key2;
        for (key2 in defaults) {
          result[key2] = has(options, key2) ? options[key2] : defaults[key2];
        }
        return result;
      };
      var codePointToSymbol = function codePointToSymbol2(codePoint, strict) {
        var output = "";
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          if (strict) {
            parseError("character reference outside the permissible Unicode range");
          }
          return "\uFFFD";
        }
        if (has(decodeMapNumeric, codePoint)) {
          if (strict) {
            parseError("disallowed character reference");
          }
          return decodeMapNumeric[codePoint];
        }
        if (strict && contains(invalidReferenceCodePoints, codePoint)) {
          parseError("disallowed character reference");
        }
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += stringFromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += stringFromCharCode(codePoint);
        return output;
      };
      var hexEscape = function hexEscape2(codePoint) {
        return "&#x" + codePoint.toString(16).toUpperCase() + ";";
      };
      var decEscape = function decEscape2(codePoint) {
        return "&#" + codePoint + ";";
      };
      var parseError = function parseError2(message) {
        throw Error("Parse error: " + message);
      };
      var encode = function encode2(string, options) {
        options = merge(options, encode2.options);
        var strict = options.strict;
        if (strict && regexInvalidRawCodePoint.test(string)) {
          parseError("forbidden code point");
        }
        var encodeEverything = options.encodeEverything;
        var useNamedReferences = options.useNamedReferences;
        var allowUnsafeSymbols = options.allowUnsafeSymbols;
        var escapeCodePoint = options.decimal ? decEscape : hexEscape;
        var escapeBmpSymbol = function escapeBmpSymbol2(symbol) {
          return escapeCodePoint(symbol.charCodeAt(0));
        };
        if (encodeEverything) {
          string = string.replace(regexAsciiWhitelist, function(symbol) {
            if (useNamedReferences && has(encodeMap, symbol)) {
              return "&" + encodeMap[symbol] + ";";
            }
            return escapeBmpSymbol(symbol);
          });
          if (useNamedReferences) {
            string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;");
          }
          if (useNamedReferences) {
            string = string.replace(regexEncodeNonAscii, function(string2) {
              return "&" + encodeMap[string2] + ";";
            });
          }
        } else if (useNamedReferences) {
          if (!allowUnsafeSymbols) {
            string = string.replace(regexEscape, function(string2) {
              return "&" + encodeMap[string2] + ";";
            });
          }
          string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;");
          string = string.replace(regexEncodeNonAscii, function(string2) {
            return "&" + encodeMap[string2] + ";";
          });
        } else if (!allowUnsafeSymbols) {
          string = string.replace(regexEscape, escapeBmpSymbol);
        }
        return string.replace(regexAstralSymbols, function($0) {
          var high = $0.charCodeAt(0);
          var low = $0.charCodeAt(1);
          var codePoint = (high - 55296) * 1024 + low - 56320 + 65536;
          return escapeCodePoint(codePoint);
        }).replace(regexBmpWhitelist, escapeBmpSymbol);
      };
      encode.options = {
        "allowUnsafeSymbols": false,
        "encodeEverything": false,
        "strict": false,
        "useNamedReferences": false,
        "decimal": false
      };
      var decode = function decode2(html, options) {
        options = merge(options, decode2.options);
        var strict = options.strict;
        if (strict && regexInvalidEntity.test(html)) {
          parseError("malformed character reference");
        }
        return html.replace(regexDecode, function($0, $1, $22, $32, $4, $5, $6, $7, $8) {
          var codePoint;
          var semicolon;
          var decDigits;
          var hexDigits;
          var reference;
          var next2;
          if ($1) {
            reference = $1;
            return decodeMap[reference];
          }
          if ($22) {
            reference = $22;
            next2 = $32;
            if (next2 && options.isAttributeValue) {
              if (strict && next2 == "=") {
                parseError("`&` did not start a character reference");
              }
              return $0;
            } else {
              if (strict) {
                parseError("named character reference was not terminated by a semicolon");
              }
              return decodeMapLegacy[reference] + (next2 || "");
            }
          }
          if ($4) {
            decDigits = $4;
            semicolon = $5;
            if (strict && !semicolon) {
              parseError("character reference was not terminated by a semicolon");
            }
            codePoint = parseInt(decDigits, 10);
            return codePointToSymbol(codePoint, strict);
          }
          if ($6) {
            hexDigits = $6;
            semicolon = $7;
            if (strict && !semicolon) {
              parseError("character reference was not terminated by a semicolon");
            }
            codePoint = parseInt(hexDigits, 16);
            return codePointToSymbol(codePoint, strict);
          }
          if (strict) {
            parseError("named character reference was not terminated by a semicolon");
          }
          return $0;
        });
      };
      decode.options = {
        "isAttributeValue": false,
        "strict": false
      };
      var escape = function escape2(string) {
        return string.replace(regexEscape, function($0) {
          return escapeMap[$0];
        });
      };
      var he5 = {
        "version": "1.2.0",
        "encode": encode,
        "decode": decode,
        "escape": escape,
        "unescape": decode
      };
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define(function() {
          return he5;
        });
      } else if (freeExports && !freeExports.nodeType) {
        if (freeModule) {
          freeModule.exports = he5;
        } else {
          for (var key in he5) {
            has(he5, key) && (freeExports[key] = he5[key]);
          }
        }
      } else {
        root.he = he5;
      }
    })(exports2);
  }
});

// ../../node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "../../node_modules/core-js/internals/object-to-array.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors();
    var uncurryThis2 = require_function_uncurry_this();
    var objectKeys = require_object_keys();
    var toIndexedObject = require_to_indexed_object();
    var $propertyIsEnumerable = require_object_property_is_enumerable().f;
    var propertyIsEnumerable = uncurryThis2($propertyIsEnumerable);
    var push = uncurryThis2([].push);
    var createMethod = function createMethod2(TO_ENTRIES) {
      return function(it) {
        var O = toIndexedObject(it);
        var keys = objectKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
          key = keys[i++];
          if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
            push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
          }
        }
        return result;
      };
    };
    module2.exports = {
      entries: createMethod(true),
      values: createMethod(false)
    };
  }
});

// ../../node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "../../node_modules/core-js/internals/is-array.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var classof2 = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof2(argument) == "Array";
    };
  }
});

// ../../node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "../../node_modules/core-js/internals/does-not-exceed-safe-integer.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var $TypeError2 = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError2("Maximum allowed index exceeded");
      return it;
    };
  }
});

// ../../node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "../../node_modules/core-js/internals/function-bind-context.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis2 = require_function_uncurry_this();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis2(uncurryThis2.bind);
    module2.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// ../../node_modules/core-js/internals/flatten-into-array.js
var require_flatten_into_array = __commonJS({
  "../../node_modules/core-js/internals/flatten-into-array.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isArray = require_is_array();
    var lengthOfArrayLike = require_length_of_array_like();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var bind = require_function_bind_context();
    var flattenIntoArray = function flattenIntoArray2(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      var targetIndex = start;
      var sourceIndex = 0;
      var mapFn = mapper ? bind(mapper, thisArg) : false;
      var element, elementLen;
      while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
          element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
          if (depth > 0 && isArray(element)) {
            elementLen = lengthOfArrayLike(element);
            targetIndex = flattenIntoArray2(target, original, element, elementLen, targetIndex, depth - 1) - 1;
          } else {
            doesNotExceedSafeInteger(targetIndex + 1);
            target[targetIndex] = element;
          }
          targetIndex++;
        }
        sourceIndex++;
      }
      return targetIndex;
    };
    module2.exports = flattenIntoArray;
  }
});

// ../../node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "../../node_modules/core-js/internals/array-species-constructor.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isArray = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject = require_is_object();
    var wellKnownSymbol2 = require_well_known_symbol();
    var SPECIES = wellKnownSymbol2("species");
    var $Array = Array;
    module2.exports = function(originalArray) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === $Array || isArray(C.prototype)))
          C = void 0;
        else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? $Array : C;
    };
  }
});

// ../../node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "../../node_modules/core-js/internals/array-species-create.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var arraySpeciesConstructor = require_array_species_constructor();
    module2.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// ../../node_modules/core-js/modules/es.array.flat.js
var require_es_array_flat = __commonJS({
  "../../node_modules/core-js/modules/es.array.flat.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $4 = require_export();
    var flattenIntoArray = require_flatten_into_array();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var arraySpeciesCreate = require_array_species_create();
    $4({
      target: "Array",
      proto: true
    }, {
      flat: function flat() {
        var depthArg = arguments.length ? arguments[0] : void 0;
        var O = toObject(this);
        var sourceLen = lengthOfArrayLike(O);
        var A = arraySpeciesCreate(O, 0);
        A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg));
        return A;
      }
    });
  }
});

// ../../node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "../../node_modules/core-js/internals/add-to-unscopables.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol2 = require_well_known_symbol();
    var create = require_object_create();
    var defineProperty = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol2("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] == void 0) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    }
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// ../../node_modules/core-js/modules/es.array.unscopables.flat.js
var require_es_array_unscopables_flat = __commonJS({
  "../../node_modules/core-js/modules/es.array.unscopables.flat.js": function() {
    init_kolmafia_polyfill();
    var addToUnscopables = require_add_to_unscopables();
    addToUnscopables("flat");
  }
});

// ../../node_modules/core-js/internals/entry-unbind.js
var require_entry_unbind = __commonJS({
  "../../node_modules/core-js/internals/entry-unbind.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global();
    var uncurryThis2 = require_function_uncurry_this();
    module2.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis2(global2[CONSTRUCTOR].prototype[METHOD]);
    };
  }
});

// ../../node_modules/core-js/es/array/flat.js
var require_flat = __commonJS({
  "../../node_modules/core-js/es/array/flat.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    require_es_array_flat();
    require_es_array_unscopables_flat();
    var entryUnbind = require_entry_unbind();
    module2.exports = entryUnbind("Array", "flat");
  }
});

// ../../node_modules/core-js/stable/array/flat.js
var require_flat2 = __commonJS({
  "../../node_modules/core-js/stable/array/flat.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat();
    module2.exports = parent;
  }
});

// ../../node_modules/core-js/actual/array/flat.js
var require_flat3 = __commonJS({
  "../../node_modules/core-js/actual/array/flat.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat2();
    module2.exports = parent;
  }
});

// ../../node_modules/core-js/full/array/flat.js
var require_flat4 = __commonJS({
  "../../node_modules/core-js/full/array/flat.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var parent = require_flat3();
    module2.exports = parent;
  }
});

// ../../node_modules/core-js/features/array/flat.js
var require_flat5 = __commonJS({
  "../../node_modules/core-js/features/array/flat.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = require_flat4();
  }
});

// ../../node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "../../node_modules/core-js/internals/is-array-iterator-method.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol2 = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol2("iterator");
    var ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// ../../node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "../../node_modules/core-js/internals/get-iterator-method.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var classof2 = require_classof();
    var getMethod2 = require_get_method();
    var Iterators = require_iterators();
    var wellKnownSymbol2 = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol2("iterator");
    module2.exports = function(it) {
      if (it != void 0)
        return getMethod2(it, ITERATOR) || getMethod2(it, "@@iterator") || Iterators[classof2(it)];
    };
  }
});

// ../../node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "../../node_modules/core-js/internals/get-iterator.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call2 = require_function_call();
    var aCallable = require_a_callable();
    var anObject2 = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError2 = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod))
        return anObject2(call2(iteratorMethod, argument));
      throw $TypeError2(tryToString(argument) + " is not iterable");
    };
  }
});

// ../../node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "../../node_modules/core-js/internals/iterator-close.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call2 = require_function_call();
    var anObject2 = require_an_object();
    var getMethod2 = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject2(iterator);
      try {
        innerResult = getMethod2(iterator, "return");
        if (!innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call2(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject2(innerResult);
      return value;
    };
  }
});

// ../../node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "../../node_modules/core-js/internals/iterate.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var bind = require_function_bind_context();
    var call2 = require_function_call();
    var anObject2 = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError2 = TypeError;
    var Result = function Result2(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next2, step;
      var stop = function stop2(condition) {
        if (iterator)
          iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function callFn2(value) {
        if (AS_ENTRIES) {
          anObject2(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn)
          throw $TypeError2(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next2 = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call2(next2, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    };
  }
});

// ../../node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "../../node_modules/core-js/internals/create-property.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toPropertyKey = require_to_property_key();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object)
        definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
      else
        object[propertyKey] = value;
    };
  }
});

// src/greenbox.ts
init_kolmafia_polyfill();

// ../../node_modules/core-js/modules/es.string.match-all.js
init_kolmafia_polyfill();
var $ = require_export();
var call = require_function_call();
var uncurryThis = require_function_uncurry_this();
var createIteratorConstructor = require_create_iterator_constructor();
var requireObjectCoercible = require_require_object_coercible();
var toLength = require_to_length();
var toString = require_to_string();
var anObject = require_an_object();
var classof = require_classof_raw();
var isRegExp = require_is_regexp();
var getRegExpFlags = require_regexp_get_flags();
var getMethod = require_get_method();
var defineBuiltIn = require_define_built_in();
var fails = require_fails();
var wellKnownSymbol = require_well_known_symbol();
var speciesConstructor = require_species_constructor();
var advanceStringIndex = require_advance_string_index();
var regExpExec = require_regexp_exec_abstract();
var InternalStateModule = require_internal_state();
var IS_PURE = require_is_pure();
var MATCH_ALL = wellKnownSymbol("matchAll");
var REGEXP_STRING = "RegExp String";
var REGEXP_STRING_ITERATOR = REGEXP_STRING + " Iterator";
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;
var stringIndexOf = uncurryThis("".indexOf);
var un$MatchAll = uncurryThis("".matchAll);
var WORKS_WITH_NON_GLOBAL_REGEX = !!un$MatchAll && !fails(function() {
  un$MatchAll("a", /./);
});
var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
  setInternalState(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: $global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState(this);
  if (state.done)
    return {
      value: void 0,
      done: true
    };
  var R = state.regexp;
  var S = state.string;
  var match = regExpExec(R, S);
  if (match === null)
    return {
      value: void 0,
      done: state.done = true
    };
  if (state.global) {
    if (toString(match[0]) === "")
      R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
    return {
      value: match,
      done: false
    };
  }
  state.done = true;
  return {
    value: match,
    done: false
  };
});
var $matchAll = function $matchAll2(string) {
  var R = anObject(this);
  var S = toString(string);
  var C = speciesConstructor(R, RegExp);
  var flags = toString(getRegExpFlags(R));
  var matcher, $global, fullUnicode;
  matcher = new C(C === RegExp ? R.source : R, flags);
  $global = !!~stringIndexOf(flags, "g");
  fullUnicode = !!~stringIndexOf(flags, "u");
  matcher.lastIndex = toLength(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
};
$({
  target: "String",
  proto: true,
  forced: WORKS_WITH_NON_GLOBAL_REGEX
}, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible(this);
    var flags, S, matcher, rx;
    if (regexp != null) {
      if (isRegExp(regexp)) {
        flags = toString(requireObjectCoercible(getRegExpFlags(regexp)));
        if (!~stringIndexOf(flags, "g"))
          throw $TypeError("`.matchAll` does not allow non-global regexes");
      }
      if (WORKS_WITH_NON_GLOBAL_REGEX)
        return un$MatchAll(O, regexp);
      matcher = getMethod(regexp, MATCH_ALL);
      if (matcher === void 0 && IS_PURE && classof(regexp) == "RegExp")
        matcher = $matchAll;
      if (matcher)
        return call(matcher, regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX)
      return un$MatchAll(O, regexp);
    S = toString(O);
    rx = new RegExp(regexp, "g");
    return IS_PURE ? call($matchAll, rx, S) : rx[MATCH_ALL](S);
  }
});
IS_PURE || MATCH_ALL in RegExpPrototype || defineBuiltIn(RegExpPrototype, MATCH_ALL, $matchAll);

// ../greenbox-data/lib/index.ts
init_kolmafia_polyfill();

// ../../node_modules/jsoncrush/JSONCrush.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var JSONCrush_default = {
  crush: function crush(string) {
    var maxSubstringLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;
    var delimiter = "";
    var JSCrush = function(string2, replaceCharacters) {
      var replaceCharacterPos = replaceCharacters.length;
      var splitString = "";
      var ByteLength = function(string3) {
        return encodeURI(encodeURIComponent(string3)).replace(/%../g, "i").length;
      };
      var HasUnmatchedSurrogate = function(string3) {
        var c1 = string3.charCodeAt(0);
        var c2 = string3.charCodeAt(string3.length - 1);
        return c1 >= 56320 && c1 <= 57343 || c2 >= 55296 && c2 <= 56319;
      };
      var substringCount = {};
      for (var substringLength = 2; substringLength < maxSubstringLength; substringLength++) {
        for (var i2 = 0; i2 < string2.length - substringLength; ++i2) {
          var substring = string2.substr(i2, substringLength);
          if (substringCount[substring])
            continue;
          if (HasUnmatchedSurrogate(substring))
            continue;
          var count = 1;
          for (var substringPos = string2.indexOf(substring, i2 + substringLength); substringPos >= 0; ++count) {
            substringPos = string2.indexOf(substring, substringPos + substringLength);
          }
          if (count > 1)
            substringCount[substring] = count;
        }
      }
      while (true) {
        for (; replaceCharacterPos-- && string2.includes(replaceCharacters[replaceCharacterPos]); ) {
        }
        if (replaceCharacterPos < 0)
          break;
        var replaceCharacter = replaceCharacters[replaceCharacterPos];
        var bestSubstring = void 0;
        var bestLengthDelta = 0;
        var replaceByteLength = ByteLength(replaceCharacter);
        for (var _substring in substringCount) {
          var _count = substringCount[_substring];
          var lengthDelta = (_count - 1) * ByteLength(_substring) - (_count + 1) * replaceByteLength;
          if (!splitString.length)
            lengthDelta -= ByteLength(delimiter);
          if (lengthDelta <= 0)
            delete substringCount[_substring];
          else if (lengthDelta > bestLengthDelta) {
            bestSubstring = _substring;
            bestLengthDelta = lengthDelta;
          }
        }
        if (!bestSubstring)
          break;
        string2 = string2.split(bestSubstring).join(replaceCharacter) + replaceCharacter + bestSubstring;
        splitString = replaceCharacter + splitString;
        var newSubstringCount = {};
        for (var _substring2 in substringCount) {
          var newSubstring = _substring2.split(bestSubstring).join(replaceCharacter);
          var _count2 = 0;
          for (var _i = string2.indexOf(newSubstring); _i >= 0; ++_count2) {
            _i = string2.indexOf(newSubstring, _i + newSubstring.length);
          }
          if (_count2 > 1)
            newSubstringCount[newSubstring] = _count2;
        }
        substringCount = newSubstringCount;
      }
      return {
        a: string2,
        b: splitString
      };
    };
    var characters = [];
    var unescapedCharacters = "-_.!~*'()";
    for (var i = 127; --i; ) {
      if (i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 || unescapedCharacters.includes(String.fromCharCode(i)))
        characters.push(String.fromCharCode(i));
    }
    for (var _i2 = 32; _i2 < 255; ++_i2) {
      var c = String.fromCharCode(_i2);
      if (c != "\\" && !characters.includes(c))
        characters.unshift(c);
    }
    string = string.replace(new RegExp(delimiter, "g"), "");
    string = JSONCrushSwap(string);
    var crushed = JSCrush(string, characters);
    var crushedString = crushed.a;
    if (crushed.b.length)
      crushedString += delimiter + crushed.b;
    crushedString += "_";
    return crushedString;
  },
  uncrush: function(string) {
    string = string.substring(0, string.length - 1);
    var stringParts = string.split("");
    var uncrushedString = stringParts[0];
    if (stringParts.length > 1) {
      var splitString = stringParts[1];
      var _iterator = _createForOfIteratorHelper(splitString), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var character = _step.value;
          var splitArray = uncrushedString.split(character);
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
};
var JSONCrushSwap = function JSONCrushSwap2(string) {
  var forward = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var swapGroups = [['"', "'"], ["':", "!"], [",'", "~"], ["}", ")", "\\", "\\"], ["{", "(", "\\", "\\"]];
  var swapInternal = function(string2, g) {
    var regex = new RegExp("".concat((g[2] ? g[2] : "") + g[0], "|").concat((g[3] ? g[3] : "") + g[1]), "g");
    return string2.replace(regex, function($1) {
      return $1 === g[0] ? g[1] : g[0];
    });
  };
  if (forward)
    for (var i = 0; i < swapGroups.length; ++i) {
      string = swapInternal(string, swapGroups[i]);
    }
  else
    for (var _i3 = swapGroups.length; _i3--; ) {
      string = swapInternal(string, swapGroups[_i3]);
    }
  return string;
};

// ../greenbox-data/lib/familiars.ts
init_kolmafia_polyfill();
var import_he = __toESM(require_he());

// ../greenbox-data/lib/utils.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/familiars.ts
var FamiliarStatus;
(function(FamiliarStatus2) {
  FamiliarStatus2[FamiliarStatus2["NONE"] = 0] = "NONE";
  FamiliarStatus2[FamiliarStatus2["HATCHLING"] = 1] = "HATCHLING";
  FamiliarStatus2[FamiliarStatus2["TERRARIUM"] = 2] = "TERRARIUM";
})(FamiliarStatus || (FamiliarStatus = {}));
var compressFamiliars = function(familiars) {
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
var iotms = [
  {
    id: 894,
    month: 10,
    year: 2004,
    type: "familiar",
    familiar: "Jill-O-Lantern"
  },
  {
    id: 914,
    month: 11,
    year: 2004,
    type: "familiar",
    familiar: "Hand Turkey"
  },
  {
    id: 924,
    month: 12,
    year: 2004,
    type: "familiar",
    familiar: "Crimbo Elf"
  },
  {
    id: 954,
    month: 1,
    year: 2005,
    type: "familiar",
    familiar: "Baby Yeti"
  },
  {
    id: 961,
    month: 2,
    year: 2005,
    type: "familiar",
    familiar: "Feather Boa Constrictor"
  },
  {
    id: 1040,
    month: 3,
    year: 2005,
    type: "item",
    item: "lucky Tam O'Shanter"
  },
  {
    id: 1083,
    month: 4,
    year: 2005,
    type: "familiar",
    familiar: "Personal Raincloud"
  },
  {
    id: 1152,
    month: 5,
    year: 2005,
    type: "item",
    item: "miniature gravy-covered maypole"
  },
  {
    id: 1242,
    month: 6,
    year: 2005,
    type: "familiar",
    familiar: "inflatable dodecapede"
  },
  {
    id: 1260,
    month: 7,
    year: 2005,
    type: "item",
    item: "wax lips"
  },
  {
    id: 1263,
    month: 8,
    year: 2005,
    type: "familiar",
    familiar: "Pygmy Bugbear Shaman"
  },
  {
    id: 1291,
    month: 9,
    year: 2005,
    type: "item",
    item: "Jekyllin hide belt"
  },
  {
    id: 1304,
    month: 10,
    year: 2005,
    type: "familiar",
    familiar: "Doppelshifter"
  },
  {
    id: 1349,
    month: 11,
    year: 2005,
    type: "familiar",
    familiar: "Temporal Riftlet"
  },
  {
    id: 1373,
    month: 12,
    year: 2005,
    type: "familiar",
    familiar: "Sweet Nutcracker"
  },
  {
    id: 1411,
    month: 1,
    year: 2006,
    type: "skill",
    skill: "Summon Snowcones"
  },
  {
    id: 1423,
    month: 2,
    year: 2006,
    type: "item",
    item: ["iceberglet", "ice baby"]
  },
  {
    id: 1488,
    month: 3,
    year: 2006,
    type: "familiar",
    familiar: "Wild Hare"
  },
  {
    id: 1498,
    month: 4,
    year: 2006,
    type: "skill",
    skill: "Summon Hilarious Objects"
  },
  {
    id: 1536,
    month: 5,
    year: 2006,
    type: "familiar",
    familiar: "Spirit Hobo"
  },
  {
    id: 1621,
    month: 6,
    year: 2006,
    type: "familiar",
    familiar: "Astral Badger"
  },
  {
    id: 1653,
    month: 7,
    year: 2006,
    type: "item",
    item: "jewel-eyed wizard hat"
  },
  {
    id: 1703,
    month: 8,
    year: 2006,
    type: "familiar",
    familiar: "Comma Chameleon"
  },
  {
    id: 1792,
    month: 9,
    year: 2006,
    type: "item",
    item: "Travoltan trousers"
  },
  {
    id: 1971,
    month: 10,
    year: 2006,
    type: "item",
    item: "plastic pumpkin bucket"
  },
  {
    id: 2090,
    month: 11,
    year: 200,
    type: "item",
    item: "pilgrim shield"
  },
  {
    id: 2190,
    month: 12,
    year: 2006,
    type: "familiar",
    familiar: "Ancient Yuletide Troll"
  },
  {
    id: 2221,
    month: 1,
    year: 2007,
    type: "item",
    item: ["Great Ball of Frozen Fire", "liar's pants"]
  },
  {
    id: 2303,
    month: 2,
    year: 2007,
    type: "skill",
    skill: "Summon Candy Heart"
  },
  {
    id: 2380,
    month: 3,
    year: 2007,
    type: "familiar",
    familiar: "Dandy Lion"
  },
  {
    id: 2447,
    month: 4,
    year: 2007,
    type: "familiar",
    familiar: "Penguin Goodfella"
  },
  {
    id: 2541,
    month: 5,
    year: 2007,
    type: "item",
    item: "Mayflower bouquet"
  },
  {
    id: 2650,
    month: 6,
    year: 2007,
    type: "familiar",
    familiar: "Green Pixie"
  },
  {
    id: 2834,
    month: 7,
    year: 2007,
    type: "item",
    item: "bottle-rocket crossbow"
  },
  {
    id: 2836,
    month: 8,
    year: 2007,
    type: "familiar",
    familiar: "Wizard Action Figure"
  },
  {
    id: 2844,
    month: 9,
    year: 2007,
    type: "item",
    item: "navel ring of navel gazing"
  },
  {
    id: 2845,
    month: 10,
    year: 2007,
    type: "familiar",
    familiar: "Gluttonous Green Ghost"
  },
  {
    id: 2946,
    month: 11,
    year: 2007,
    type: "item",
    item: "V for Vivala Mask"
  },
  {
    id: 3042,
    month: 12,
    year: 2007,
    type: "familiar",
    familiar: "Crimbo P. R. E. S. S. I. E."
  },
  {
    id: 3117,
    month: 1,
    year: 2008,
    type: "skill",
    skill: "Summon Party Favor"
  },
  {
    id: 3192,
    month: 2,
    year: 2008,
    type: "item",
    item: ["naughty origami kit", "origami pasties"]
  },
  {
    id: 3219,
    month: 3,
    year: 2008,
    type: "familiar",
    familiar: "Mad Hatrack"
  },
  {
    id: 3263,
    month: 4,
    year: 2008,
    type: "skill",
    skill: "Summon Tasteful Items"
  },
  {
    id: 3321,
    month: 5,
    year: 2008,
    type: "item",
    item: "mayfly bait necklace"
  },
  {
    id: 3351,
    month: 6,
    year: 2008,
    type: "familiar",
    familiar: "Llama Lama"
  },
  {
    id: 3421,
    month: 7,
    year: 2008,
    type: "item",
    item: "little box of fireworks"
  },
  {
    id: 3431,
    month: 8,
    year: 2008,
    type: "familiar",
    familiar: "Cotton Candy Carnie"
  },
  {
    id: 3466,
    month: 9,
    year: 2008,
    type: "item",
    item: "haiku katana"
  },
  {
    id: 3434,
    month: 10,
    year: 2008,
    type: "familiar",
    familiar: "Disembodied Hand"
  },
  {
    id: 3507,
    month: 11,
    year: 2008,
    type: "skill",
    skill: "Summon Stickers"
  },
  {
    id: 3578,
    month: 12,
    year: 2008,
    type: "familiar",
    familiar: "Sugar Fruit Fairy"
  },
  {
    id: 3661,
    month: 1,
    year: 2009,
    type: "item",
    item: ["container of Spooky Putty", "spooky putty monster", "Spooky Putty sheet"]
  },
  {
    id: 3753,
    month: 2,
    year: 2009,
    type: "skill",
    skill: "Summon Love Song"
  },
  {
    id: 3799,
    month: 3,
    year: 2009,
    type: "familiar",
    familiar: "Frumious Bandersnatch"
  },
  {
    id: 3836,
    month: 4,
    year: 2009,
    type: "item",
    item: "elvish sunglasses"
  },
  {
    id: 3963,
    month: 5,
    year: 2009,
    type: "vip"
  },
  {
    id: 3999,
    month: 6,
    year: 2009,
    type: "familiar",
    familiar: "Baby Sandworm"
  },
  {
    id: 4136,
    month: 7,
    year: 2009,
    type: "item",
    item: "Bag o' Tricks"
  },
  {
    id: 4148,
    month: 8,
    year: 2009,
    type: "familiar",
    familiar: "He-Boulder"
  },
  {
    id: 4177,
    month: 9,
    year: 2009,
    type: "skill",
    skill: "Summon Sugar Sheets"
  },
  {
    id: 4223,
    month: 10,
    year: 2009,
    type: "familiar",
    familiar: "Squamous Gibberer"
  },
  {
    id: 4135,
    month: 11,
    year: 2009,
    type: "item",
    item: "moveable feast"
  },
  {
    id: 4328,
    month: 12,
    year: 2009,
    type: "familiar",
    familiar: "Stocking Mimic"
  },
  {
    id: 4398,
    month: 1,
    year: 2010,
    type: "item",
    item: ["stinky cheese ball", "stinky cheese eye"]
  },
  {
    id: 4468,
    month: 2,
    year: 2010,
    type: "skill",
    skill: "Summon BRICKOs"
  },
  {
    id: 4507,
    month: 3,
    year: 2010,
    type: "vip"
  },
  {
    id: 4574,
    month: 4,
    year: 2010,
    type: "familiar",
    familiar: "Baby Bugged Bugbear"
  },
  {
    id: 4614,
    month: 5,
    year: 2010,
    type: "item",
    item: "Crown of Thrones"
  },
  {
    id: 4619,
    month: 6,
    year: 2010,
    type: "familiar",
    familiar: "Rogue Program"
  },
  {
    id: 4644,
    month: 7,
    year: 2010,
    type: "item",
    item: "Juju Mojo Mask"
  },
  {
    id: 4648,
    month: 8,
    year: 2010,
    type: "familiar",
    familiar: "Mini-Hipster"
  },
  {
    id: 4696,
    month: 9,
    year: 2010,
    type: "item",
    item: "Greatest American Pants"
  },
  {
    id: 4720,
    month: 10,
    year: 2010,
    type: "familiar",
    familiar: "organ grinder"
  },
  {
    id: 4759,
    month: 11,
    year: 2010,
    type: "campground",
    item: "packet of pumpkin seeds"
  },
  {
    id: 4827,
    month: 12,
    year: 2010,
    type: "familiar",
    familiar: "Robot Reindeer"
  },
  {
    id: 4908,
    month: 1,
    year: 2011,
    type: "item",
    item: "Loathing Legion Knife"
  },
  {
    id: 4937,
    month: 2,
    year: 2011,
    type: "familiar",
    familiar: "Obtuse Angel"
  },
  {
    id: 4965,
    month: 3,
    year: 2011,
    type: "skill",
    skill: "Summon Alice's Army Cards"
  },
  {
    id: 5047,
    month: 4,
    year: 2011,
    type: "vip"
  },
  {
    id: 5112,
    month: 5,
    year: 2011,
    type: "eudora",
    eudoraId: 1
  },
  {
    id: 5164,
    month: 6,
    year: 2011,
    type: "familiar",
    familiar: "Li'l Xenomorph"
  },
  {
    id: 5190,
    month: 7,
    year: 2011,
    type: "item",
    item: "Operation Patriot Shield"
  },
  {
    id: 4536,
    month: 8,
    year: 2011,
    type: "familiar",
    familiar: "Pair of Stomping Boots"
  },
  {
    id: 5223,
    month: 9,
    year: 2011,
    type: "skill",
    skill: "Summon Clip Art"
  },
  {
    id: 5301,
    month: 10,
    year: 2011,
    type: "item",
    item: "plastic vampire fangs"
  },
  {
    id: 5371,
    month: 11,
    year: 2011,
    type: "familiar",
    familiar: "Fancypants Scarecrow"
  },
  {
    id: 5403,
    month: 12,
    year: 2011,
    type: "campground",
    item: "Peppermint Pip Packet"
  },
  {
    id: 5463,
    month: 1,
    year: 2012,
    type: "skill",
    skill: "Summon Resolutions"
  },
  {
    id: 5553,
    month: 2,
    year: 2012,
    type: "item",
    item: ["can of Rain-Doh", "empty Rain-Doh can"]
  },
  {
    id: 5639,
    month: 3,
    year: 2012,
    type: "familiar",
    familiar: "Happy Medium"
  },
  {
    id: 5648,
    month: 4,
    year: 2012,
    type: "item",
    item: "Boris's Helm"
  },
  {
    id: 5662,
    month: 5,
    year: 2012,
    type: "vip"
  },
  {
    id: 5701,
    month: 6,
    year: 2012,
    type: "familiar",
    familiar: "Artistic Goth Kid"
  },
  {
    id: 5738,
    month: 7,
    year: 2012,
    type: "item",
    item: "Camp Scout backpack"
  },
  {
    id: 5767,
    month: 8,
    year: 2012,
    type: "familiar",
    familiar: "Reagnimated Gnome"
  },
  {
    id: 5790,
    month: 9,
    year: 2012,
    type: "custom"
  },
  {
    id: 5879,
    month: 10,
    year: 2012,
    type: "campground",
    item: "packet of dragon's teeth"
  },
  {
    id: 5910,
    month: 11,
    year: 2012,
    type: "familiar",
    familiar: "Nanorhino"
  },
  {
    id: 6071,
    month: 12,
    year: 2012,
    type: "skill",
    skill: "Summon Geeky Gifts"
  },
  {
    id: 6150,
    month: 1,
    year: 2013,
    type: "item",
    item: "Snow Suit"
  },
  {
    id: 4712,
    month: 2,
    year: 2013,
    type: "eudora",
    eudoraId: 2
  },
  {
    id: 6305,
    month: 3,
    year: 2013,
    type: "item",
    item: "Jarlsberg's Pan"
  },
  {
    id: 6360,
    month: 4,
    year: 2013,
    type: "skill",
    skill: "Summon Taffy"
  },
  {
    id: 6413,
    month: 5,
    year: 2013,
    type: "custom"
  },
  {
    id: 6561,
    month: 6,
    year: 2013,
    type: "familiar",
    familiar: "Mini-Adventurer"
  },
  {
    id: 6582,
    month: 7,
    year: 2013,
    type: "vip"
  },
  {
    id: 4930,
    month: 8,
    year: 2013,
    type: "item",
    item: "over-the-shoulder Folder Holder"
  },
  {
    id: 6411,
    month: 9,
    year: 2013,
    type: "familiar",
    familiar: "Steam-Powered Cheerleader"
  },
  {
    id: 6784,
    month: 10,
    year: 2013,
    type: "familiar",
    familiar: "Reanimated Reanimator"
  },
  {
    id: 6860,
    month: 11,
    year: 2013,
    type: "item",
    item: "Pantsgiving"
  },
  {
    id: 7003,
    month: 12,
    year: 2013,
    type: "skill",
    skill: "Summon Smithsness"
  },
  {
    id: 7069,
    month: 1,
    year: 2014,
    type: "campground",
    item: "packet of winter seeds"
  },
  {
    id: 7200,
    month: 2,
    year: 2014,
    type: "item",
    item: "Buddy Bjorn"
  },
  {
    id: 7250,
    month: 3,
    year: 2014,
    type: "item",
    item: "Sneaky Pete's leather jacket"
  },
  {
    id: 7382,
    month: 4,
    year: 2014,
    type: "campground",
    item: "Little Geneticist DNA-Splicing Lab"
  },
  {
    id: 7466,
    month: 5,
    year: 2014,
    type: "preference",
    preference: "sleazeAirportAlways"
  },
  {
    id: 7312,
    month: 6,
    year: 2014,
    type: "familiar",
    familiar: "Galloping Grill"
  },
  {
    id: 7588,
    month: 7,
    year: 2014,
    type: "vip"
  },
  {
    id: 7706,
    month: 8,
    year: 2014,
    type: "skill",
    skill: "Summon Confiscated Things"
  },
  {
    id: 7709,
    month: 9,
    year: 2014,
    type: "item",
    item: "Thor's Pliers"
  },
  {
    id: 7767,
    month: 10,
    year: 2014,
    type: "preference",
    preference: "spookyAirportAlways"
  },
  {
    id: 7920,
    month: 11,
    year: 2014,
    type: "familiar",
    familiar: "fist turkey"
  },
  {
    id: 7956,
    month: 12,
    year: 2014,
    type: "familiar",
    familiar: "Crimbo Shrub"
  },
  {
    id: 8019,
    month: 1,
    year: 2015,
    type: "preference",
    preference: "chateauAvailable"
  },
  {
    id: 8134,
    month: 2,
    year: 2015,
    type: "preference",
    preference: "lovebugsUnlocked"
  },
  {
    id: 8184,
    month: 3,
    year: 2015,
    type: "item",
    item: "The Crown of Ed the Undying"
  },
  {
    id: 8203,
    month: 4,
    year: 2015,
    type: "preference",
    preference: "stenchAirportAlways"
  },
  {
    id: 8260,
    month: 5,
    year: 2015,
    type: "item",
    item: "portable Mayo Clinic"
  },
  {
    id: 8287,
    month: 6,
    year: 2015,
    type: "familiar",
    familiar: ["Puck Man", "Ms Puck Man"]
  },
  {
    id: 8381,
    month: 7,
    year: 2015,
    type: "item",
    item: "Deck of Every Card"
  },
  {
    id: 8487,
    month: 8,
    year: 2015,
    type: "preference",
    preference: "hotAirportAlways"
  },
  {
    id: 8564,
    month: 9,
    year: 2015,
    type: "preference",
    preference: "barrelShrineUnlocked"
  },
  {
    id: 8639,
    month: 10,
    year: 2015,
    type: "campground"
  },
  {
    id: 8674,
    month: 11,
    year: 2015,
    type: "preference",
    preference: "coldAirportAlways"
  },
  {
    id: 8706,
    month: 12,
    year: 2015,
    type: "familiar",
    familiar: "Machine Elf"
  },
  {
    id: 8705,
    month: 1,
    year: 2016,
    type: "preference",
    preference: "snojoAvailable"
  },
  {
    id: 8836,
    month: 2,
    year: 2016,
    type: "preference",
    preference: "telegraphOfficeAvailable"
  },
  {
    id: 8989,
    month: 3,
    year: 2016,
    type: "campground"
  },
  {
    id: 9e3,
    month: 4,
    year: 2016,
    type: "vip"
  },
  {
    id: 9016,
    month: 5,
    year: 2016,
    type: "familiar",
    familiar: "intergnat"
  },
  {
    id: 9033,
    month: 6,
    year: 2016,
    type: "campground"
  },
  {
    id: 9073,
    month: 7,
    year: 2016,
    type: "preference",
    preference: "hasDetectiveSchool"
  },
  {
    id: 9081,
    month: 8,
    year: 2016,
    type: "item",
    item: "protonic accelerator pack"
  },
  {
    id: 9103,
    month: 9,
    year: 2016,
    type: "item",
    item: "Time-Spinner"
  },
  {
    id: 9136,
    month: 10,
    year: 2016,
    type: "familiar",
    familiar: "Trick-or-Treating Tot"
  },
  {
    id: 9189,
    month: 11,
    year: 2016,
    type: "campground",
    item: "packet of thanksgarden seeds"
  },
  {
    id: 9203,
    month: 12,
    year: 2016,
    type: "preference",
    preference: "gingerbreadCityAvailable"
  },
  {
    id: 9296,
    month: 1,
    year: 2017,
    type: "familiar",
    familiar: "Space Jellyfish"
  },
  {
    id: 9316,
    month: 2,
    year: 2017,
    type: "preference",
    preference: "loveTunnelAvailable"
  },
  {
    id: 9401,
    month: 3,
    year: 2017,
    type: "familiar",
    familiar: "Robortender"
  },
  {
    id: 9404,
    month: 4,
    year: 2017,
    type: "preference",
    preference: "spacegateAlways"
  },
  {
    id: 9478,
    month: 5,
    year: 2017,
    type: "eudora",
    eudoraId: 4
  },
  {
    id: 9492,
    month: 6,
    year: 2017,
    type: "item",
    item: "Kremlin's Greatest Briefcase"
  },
  {
    id: 9507,
    month: 7,
    year: 2017,
    type: "campground",
    item: "Asdon Martin keyfob"
  },
  {
    id: 9511,
    month: 8,
    year: 2017,
    type: "skill",
    skill: "Meteor Lore"
  },
  {
    id: 9528,
    month: 9,
    year: 2017,
    type: "item",
    item: "genie bottle"
  },
  {
    id: 9541,
    month: 10,
    year: 2017,
    type: "familiar",
    familiar: "XO Skeleton"
  },
  {
    id: 9572,
    month: 11,
    year: 2017,
    type: "item",
    item: "portable pantogram"
  },
  {
    id: 9591,
    month: 12,
    year: 2017,
    type: "item",
    item: "mumming trunk"
  },
  {
    id: 9689,
    month: 1,
    year: 2018,
    type: "item",
    item: "January's Garbage Tote"
  },
  {
    id: 9712,
    month: 2,
    year: 2018,
    type: "vip"
  },
  {
    id: 9759,
    month: 3,
    year: 2018,
    type: "campground",
    item: "packet of tall grass seeds"
  },
  {
    id: 9835,
    month: 4,
    year: 2018,
    type: "preference",
    preference: "frAlways"
  },
  {
    id: 9661,
    month: 5,
    year: 2018,
    type: "familiar",
    familiar: "God Lobster"
  },
  {
    id: 9920,
    month: 6,
    year: 2018,
    type: "item",
    item: "SongBoom\u2122 BoomBox"
  },
  {
    id: 9939,
    month: 7,
    year: 2018,
    type: "familiar",
    familiar: "Cat Burglar"
  },
  {
    id: 9927,
    month: 8,
    year: 2018,
    type: "item",
    item: "Bastille Battalion control rig"
  },
  {
    id: 9942,
    month: 9,
    year: 2018,
    type: "preference",
    preference: "neverendingPartyAlways"
  },
  {
    id: 9988,
    month: 10,
    year: 2018,
    type: "item",
    item: "latte lovers member's mug"
  },
  {
    id: 9989,
    month: 11,
    year: 2018,
    type: "preference",
    preference: "voteAlways"
  },
  {
    id: 10049,
    month: 12,
    year: 2018,
    type: "preference",
    preference: "daycareOpen"
  },
  {
    id: 10057,
    month: 1,
    year: 2019,
    type: "item",
    item: "Kramco Sausage-o-Matic\u2122"
  },
  {
    id: 10165,
    month: 2,
    year: 2019,
    type: "item",
    item: "Lil' Doctor\u2122 bag"
  },
  {
    id: 10241,
    month: 3,
    year: 2019,
    type: "item",
    item: "vampyric cloake"
  },
  {
    id: 10187,
    month: 4,
    year: 2019,
    type: "preference",
    preference: "prAlways"
  },
  {
    id: 10250,
    month: 5,
    year: 2019,
    type: "item",
    item: "Fourth of May Cosplay Saber"
  },
  {
    id: 10256,
    month: 6,
    year: 2019,
    type: "item",
    item: "hewn moon-rune spoon"
  },
  {
    id: 10257,
    month: 7,
    year: 2019,
    type: "item",
    item: "Beach Comb"
  },
  {
    id: 10292,
    month: 8,
    year: 2019,
    type: "preference",
    preference: "getawayCampsiteUnlocked"
  },
  {
    id: 10323,
    month: 9,
    year: 2019,
    type: "familiar",
    familiar: "Pocket Professor"
  },
  {
    id: 10332,
    month: 10,
    year: 2019,
    type: "item",
    item: "Eight Days a Week Pill Keeper"
  },
  {
    id: 10334,
    month: 11,
    year: 2019,
    type: "campground",
    item: "diabolic pizza cube"
  },
  {
    id: 10345,
    month: 12,
    year: 2019,
    type: "familiar",
    familiar: "Red-Nosed Snapper"
  },
  {
    id: 10433,
    month: 1,
    year: 2020,
    type: "item",
    item: "Bird-a-Day calendar"
  },
  {
    id: 10437,
    month: 2,
    year: 2020,
    type: "item",
    item: "Powerful Glove"
  },
  {
    id: 10481,
    month: 3,
    year: 2020,
    type: "campground",
    item: "packet of mushroom spores"
  },
  {
    id: 10502,
    month: 4,
    year: 2020,
    type: "familiar",
    familiar: "Left-Hand Man"
  },
  {
    id: 10532,
    month: 5,
    year: 2020,
    type: "item",
    item: "Guzzlr tablet"
  },
  {
    id: 10573,
    month: 6,
    year: 2020,
    type: "item",
    item: "Iunion Crown"
  },
  {
    id: 10579,
    month: 7,
    year: 2020,
    type: "familiar",
    familiar: "Melodramedary"
  },
  {
    id: 10581,
    month: 8,
    year: 2020,
    type: "item",
    item: "SpinMaster\u2122 lathe"
  },
  {
    id: 10635,
    month: 9,
    year: 2020,
    type: "item",
    item: "Cargo Cultist Shorts"
  },
  {
    id: 10644,
    month: 10,
    year: 2020,
    type: "skill",
    skill: "Comprehensive Cartography"
  },
  {
    id: 10646,
    month: 11,
    year: 2020,
    type: "item",
    item: "unwrapped knock-off retro superhero cape"
  },
  {
    id: 10648,
    month: 12,
    year: 2020,
    type: "familiar",
    familiar: ["Ghost of Crimbo Commerce", "Ghost of Crimbo Carols", "Ghost of Crimbo Cheer"]
  },
  {
    id: 10729,
    month: 1,
    year: 2021,
    type: "item",
    item: "miniature crystal ball"
  },
  {
    id: 10733,
    month: 2,
    year: 2021,
    type: "skill",
    skill: "Emotionally Chipped"
  },
  {
    id: 10737,
    month: 3,
    year: 2021,
    type: "item",
    item: "potted power plant"
  },
  {
    id: 10748,
    month: 4,
    year: 2021,
    type: "item",
    item: "backup camera"
  },
  {
    id: 10750,
    month: 5,
    year: 2021,
    type: "familiar",
    familiar: "Shorter-Order Cook"
  },
  {
    id: 10760,
    month: 6,
    year: 2021,
    type: "item",
    item: "familiar scrapbook"
  },
  {
    id: 10761,
    month: 7,
    year: 2021,
    type: "vip"
  },
  {
    id: 10773,
    month: 8,
    year: 2021,
    type: "eudora",
    eudoraId: 5
  },
  {
    id: 10796,
    month: 9,
    year: 2021,
    type: "item",
    item: "industrial fire extinguisher"
  },
  {
    id: 10801,
    month: 10,
    year: 2021,
    type: "familiar",
    familiar: "Vampire Vintner"
  },
  {
    id: 10803,
    month: 11,
    year: 2021,
    type: "item",
    item: "Daylight Shavings Helmet"
  },
  {
    id: 10814,
    month: 12,
    year: 2021,
    type: "campground",
    item: "cold medicine cabinet"
  },
  {
    id: 10890,
    month: 1,
    year: 2022,
    type: "preference",
    preference: "hasCosmicBowlingBall"
  },
  {
    id: 10892,
    month: 2,
    year: 2022,
    type: "item",
    item: "combat lover's locket"
  },
  {
    id: 10895,
    month: 3,
    year: 2022,
    type: "familiar",
    familiar: "Grey Goose"
  },
  {
    id: 10898,
    month: 4,
    year: 2022,
    type: "item",
    item: "Unbreakable Umbrella"
  },
  {
    id: 10900,
    month: 5,
    year: 2022,
    type: "preference",
    preference: "hasMaydayContract"
  },
  {
    id: 10919,
    month: 6,
    year: 2022,
    type: "item",
    item: "June cleaver"
  },
  {
    id: 10928,
    month: 7,
    year: 2022,
    type: "item",
    item: "designer sweatpants"
  },
  {
    id: 10931,
    month: 8,
    year: 2022,
    type: "item",
    item: "tiny stillsuit"
  }
];
var iotms_default = iotms;

// ../greenbox-data/lib/iotms.ts
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var IotMStatus;
(function(IotMStatus2) {
  IotMStatus2[IotMStatus2["NONE"] = 0] = "NONE";
  IotMStatus2[IotMStatus2["BOXED"] = 1] = "BOXED";
  IotMStatus2[IotMStatus2["BOUND"] = 2] = "BOUND";
})(IotMStatus || (IotMStatus = {}));
function loadIotMs() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var iotmCount = JSON.stringify(iotms_default).length;
  if (iotmCount === lastKnownSize)
    return null;
  return {
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

// ../greenbox-data/lib/paths.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/paths.ts
init_kolmafia_polyfill();
var ItemId;
(function(ItemId2) {
  ItemId2[ItemId2["StainlessSC"] = 1224] = "StainlessSC";
  ItemId2[ItemId2["StainlessTT"] = 1225] = "StainlessTT";
  ItemId2[ItemId2["StainlessPM"] = 1226] = "StainlessPM";
  ItemId2[ItemId2["StainlessSA"] = 1227] = "StainlessSA";
  ItemId2[ItemId2["StainlessDB"] = 1228] = "StainlessDB";
  ItemId2[ItemId2["StainlessAT"] = 1229] = "StainlessAT";
  ItemId2[ItemId2["PlexiSC"] = 1230] = "PlexiSC";
  ItemId2[ItemId2["PlexiTT"] = 1231] = "PlexiTT";
  ItemId2[ItemId2["PlexiPM"] = 1232] = "PlexiPM";
  ItemId2[ItemId2["PlexiSA"] = 1233] = "PlexiSA";
  ItemId2[ItemId2["PlexiDB"] = 1234] = "PlexiDB";
  ItemId2[ItemId2["PlexiAT"] = 1235] = "PlexiAT";
  ItemId2[ItemId2["PickyTweezers"] = 7936] = "PickyTweezers";
  ItemId2[ItemId2["AdventurerBobblehead"] = 9084] = "AdventurerBobblehead";
  ItemId2[ItemId2["PerfectlyFairCoin"] = 9526] = "PerfectlyFairCoin";
  ItemId2[ItemId2["GarlandOfGreatness"] = 9910] = "GarlandOfGreatness";
  ItemId2[ItemId2["Ring"] = 10252] = "Ring";
  ItemId2[ItemId2["RedPlumbersBoots"] = 10501] = "RedPlumbersBoots";
  ItemId2[ItemId2["QuantumOfFamiliar"] = 10758] = "QuantumOfFamiliar";
  ItemId2[ItemId2["TheBigBookOfEverySkill"] = 10917] = "TheBigBookOfEverySkill";
})(ItemId || (ItemId = {}));
var Thwaitgold;
(function(Thwaitgold2) {
  Thwaitgold2[Thwaitgold2["Bee"] = 5141] = "Bee";
  Thwaitgold2[Thwaitgold2["Grasshopper"] = 5222] = "Grasshopper";
  Thwaitgold2[Thwaitgold2["Butterfly"] = 5392] = "Butterfly";
  Thwaitgold2[Thwaitgold2["StagBeetle"] = 5572] = "StagBeetle";
  Thwaitgold2[Thwaitgold2["WoollyBear"] = 5694] = "WoollyBear";
  Thwaitgold2[Thwaitgold2["Maggot"] = 5773] = "Maggot";
  Thwaitgold2[Thwaitgold2["PrayingMantis"] = 6045] = "PrayingMantis";
  Thwaitgold2[Thwaitgold2["Firefly"] = 6298] = "Firefly";
  Thwaitgold2[Thwaitgold2["GoliathBeetle"] = 6547] = "GoliathBeetle";
  Thwaitgold2[Thwaitgold2["Bookworm"] = 6676] = "Bookworm";
  Thwaitgold2[Thwaitgold2["Ant"] = 6899] = "Ant";
  Thwaitgold2[Thwaitgold2["Dragonfly"] = 7249] = "Dragonfly";
  Thwaitgold2[Thwaitgold2["WheelBug"] = 7498] = "WheelBug";
  Thwaitgold2[Thwaitgold2["Spider"] = 7668] = "Spider";
  Thwaitgold2[Thwaitgold2["Nit"] = 7935] = "Nit";
  Thwaitgold2[Thwaitgold2["ScarabBeetle"] = 8087] = "ScarabBeetle";
  Thwaitgold2[Thwaitgold2["Caterpillar"] = 8296] = "Caterpillar";
  Thwaitgold2[Thwaitgold2["Termite"] = 8556] = "Termite";
  Thwaitgold2[Thwaitgold2["Scorpion"] = 8984] = "Scorpion";
  Thwaitgold2[Thwaitgold2["Moth"] = 9031] = "Moth";
  Thwaitgold2[Thwaitgold2["Cockroach"] = 9099] = "Cockroach";
  Thwaitgold2[Thwaitgold2["Amoeba"] = 9346] = "Amoeba";
  Thwaitgold2[Thwaitgold2["Bug"] = 9488] = "Bug";
  Thwaitgold2[Thwaitgold2["TimeFly"] = 9525] = "TimeFly";
  Thwaitgold2[Thwaitgold2["Metabug"] = 9758] = "Metabug";
  Thwaitgold2[Thwaitgold2["Chigger"] = 9917] = "Chigger";
  Thwaitgold2[Thwaitgold2["MaskedHunter"] = 9941] = "MaskedHunter";
  Thwaitgold2[Thwaitgold2["Mosquito"] = 10184] = "Mosquito";
  Thwaitgold2[Thwaitgold2["Nymph"] = 10253] = "Nymph";
  Thwaitgold2[Thwaitgold2["BombardierBeetle"] = 10319] = "BombardierBeetle";
  Thwaitgold2[Thwaitgold2["BuzzyBeetle"] = 10470] = "BuzzyBeetle";
  Thwaitgold2[Thwaitgold2["KeyholeSpider"] = 10570] = "KeyholeSpider";
  Thwaitgold2[Thwaitgold2["Slug"] = 10601] = "Slug";
  Thwaitgold2[Thwaitgold2["ListeningBug"] = 10736] = "ListeningBug";
  Thwaitgold2[Thwaitgold2["QuantumBug"] = 10757] = "QuantumBug";
  Thwaitgold2[Thwaitgold2["FireBeetle"] = 10791] = "FireBeetle";
  Thwaitgold2[Thwaitgold2["Protozoa"] = 10894] = "Protozoa";
  Thwaitgold2[Thwaitgold2["Harvestman"] = 10918] = "Harvestman";
})(Thwaitgold || (Thwaitgold = {}));
var paths_default = [{
  id: -2,
  name: "Softcore",
  image: "itemimages/karma.gif",
  items: [],
  equipment: [],
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
  id: -1,
  name: "Hardcore",
  image: "otherimages/sigils/staintat.gif",
  items: [],
  equipment: [ItemId.StainlessSC, ItemId.StainlessTT, ItemId.StainlessPM, ItemId.StainlessSA, ItemId.StainlessDB, ItemId.StainlessAT],
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
    name: "Hardocre Oxygenarian",
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
}];

// ../greenbox-data/lib/paths.ts
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function loadPaths() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var size = JSON.stringify(paths_default).length;
  if (size === lastKnownSize)
    return null;
  return {
    data: paths_default,
    size: size
  };
}
var pointsRadix = 32;
var tattooLevelRadix = 16;
var compressPaths = function(paths) {
  return paths.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(acc, path) {
    var _acc = _slicedToArray(acc, 2), r = _acc[0], currentId = _acc[1];
    if (path[0] > currentId) {
      r += ",".repeat(path[0] - currentId);
      currentId = path[0];
    }
    r += path[1].toString(pointsRadix);
    r += path[2].join("");
    r += path[3].join("");
    r += path[4].map(function(i) {
      return i.toString(tattooLevelRadix);
    }).join("");
    return [r, currentId];
  }, ["", -2])[0].replace(/0+($|,)/, "$1");
};

// ../greenbox-data/lib/skills.ts
init_kolmafia_polyfill();
var import_he2 = __toESM(require_he());
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
var SkillStatus;
(function(SkillStatus2) {
  SkillStatus2[SkillStatus2["NONE"] = 0] = "NONE";
  SkillStatus2[SkillStatus2["SOFTCORE"] = 1] = "SOFTCORE";
  SkillStatus2[SkillStatus2["HARDCORE"] = 2] = "HARDCORE";
})(SkillStatus || (SkillStatus = {}));
var isPermable = function(id) {
  if (id < 10)
    return false;
  if (id > 20 && id <= 27)
    return false;
  if (id > 63 && id <= 73)
    return false;
  if (id > 7175 && id < 7181)
    return false;
  switch (id) {
    case 91:
    case 116:
      return false;
    case 49:
    case 50:
    case 51:
    case 52:
    case 3024:
      return false;
    case 6019:
      return false;
    case 17047:
      return true;
    case 156:
      return false;
    case 174:
      return false;
    case 7254:
      return true;
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
      return false;
  }
  return true;
};
var compressSkills = function(skills) {
  return skills.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(acc, skill) {
    var _acc = _slicedToArray2(acc, 2), r = _acc[0], currentBlock = _acc[1];
    var block = Math.floor(skill[0] / 1e3);
    if (block > currentBlock) {
      r += ",".repeat(block - currentBlock);
      currentBlock = block;
    }
    var blockContents = r.substring(r.lastIndexOf(",") + 1);
    var zeros = "0".repeat(Math.max(0, skill[0] - block * 1e3 - blockContents.replace(/\(\d+\)/g, "").length - (block === 0 ? 1 : 0)));
    r += zeros;
    r += skill[1];
    if (skill[2] > 0) {
      r += "(".concat(skill[2], ")");
    }
    return [r, currentBlock];
  }, ["", 0])[0].replace(/0+($|,)/, "$1");
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
}];

// ../greenbox-data/lib/tattoos.ts
var TattooStatus;
(function(TattooStatus2) {
  TattooStatus2[TattooStatus2["NONE"] = 0] = "NONE";
  TattooStatus2[TattooStatus2["HAVE_OUTFIT"] = 1] = "HAVE_OUTFIT";
  TattooStatus2[TattooStatus2["HAVE"] = 2] = "HAVE";
})(TattooStatus || (TattooStatus = {}));
function loadTattoos() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var size = JSON.stringify(tattoos_default).length;
  if (size === lastKnownSize)
    return null;
  return {
    data: tattoos_default,
    size: size
  };
}
function getOutfitTattoos(tattoos) {
  return tattoos.filter(function(t) {
    return t.outfit !== void 0;
  }).sort(function(a, b) {
    return a.outfit - b.outfit;
  });
}
var compressOutfitTattoos = function(tattoos) {
  return tattoos.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(r, tattoo) {
    return "".concat(r).concat("0".repeat(tattoo[0] - r.length - 1)).concat(tattoo[1]);
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
}];

// ../greenbox-data/lib/trophies.ts
var TrophyStatus;
(function(TrophyStatus2) {
  TrophyStatus2[TrophyStatus2["NONE"] = 0] = "NONE";
  TrophyStatus2[TrophyStatus2["HAVE"] = 1] = "HAVE";
})(TrophyStatus || (TrophyStatus = {}));
function loadTrophies() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var size = JSON.stringify(trophies_default).length;
  if (size === lastKnownSize)
    return null;
  return {
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

// ../greenbox-data/lib/classes.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/classes.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/effects.ts
init_kolmafia_polyfill();
var import_he3 = __toESM(require_he());

// ../greenbox-data/lib/items.ts
init_kolmafia_polyfill();
var import_he4 = __toESM(require_he());
var ItemStatus;
(function(ItemStatus2) {
  ItemStatus2[ItemStatus2["NONE"] = 0] = "NONE";
  ItemStatus2[ItemStatus2["HAVE"] = 1] = "HAVE";
})(ItemStatus || (ItemStatus = {}));

// ../greenbox-data/lib/index.ts
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function compress(raw) {
  var compressed = {
    meta: Object.entries(raw.meta).map(function(_ref) {
      var _ref2 = _slicedToArray3(_ref, 2), k = _ref2[0], v = _ref2[1];
      return "".concat(k, ":").concat(v);
    }).join(","),
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    outfitTattoos: compressOutfitTattoos(raw.outfitTattoos),
    paths: compressPaths(raw.paths),
    iotms: compressIotMs(raw.iotms)
  };
  var compressedString = JSON.stringify(compressed);
  return encodeURIComponent(JSONCrush_default.crush(compressedString));
}

// src/greenbox.ts
var import_kolmafia6 = require("kolmafia");

// ../../node_modules/libram/dist/lib.js
init_kolmafia_polyfill();

// ../../node_modules/core-js/modules/es.object.entries.js
init_kolmafia_polyfill();
var $2 = require_export();
var $entries = require_object_to_array().entries;
$2({
  target: "Object",
  stat: true
}, {
  entries: function entries(O) {
    return $entries(O);
  }
});

// ../../node_modules/libram/dist/lib.js
var import_flat = __toESM(require_flat5());
var import_kolmafia3 = require("kolmafia");

// ../../node_modules/libram/dist/property.js
init_kolmafia_polyfill();

// ../../node_modules/core-js/modules/es.object.from-entries.js
init_kolmafia_polyfill();
var $3 = require_export();
var iterate = require_iterate();
var createProperty = require_create_property();
$3({
  target: "Object",
  stat: true
}, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function(k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: true
    });
    return obj;
  }
});

// ../../node_modules/libram/dist/property.js
var import_kolmafia = require("kolmafia");
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia.getProperty)(property);
    if (default_ !== void 0 && value === "") {
      return default_;
    }
    return transform(value, property);
  };
};
var createMafiaClassPropertyGetter = function(Type, toType) {
  return createPropertyGetter(function(value) {
    if (value === "")
      return null;
    var v = toType(value);
    return v === Type.get("none") ? null : v;
  });
};
var getString = createPropertyGetter(function(value) {
  return value;
});
var getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
});
var getBoolean = createPropertyGetter(function(value) {
  return value === "true";
});
var getNumber = createPropertyGetter(function(value) {
  return Number(value);
});
var getBounty = createMafiaClassPropertyGetter(import_kolmafia.Bounty, import_kolmafia.toBounty);
var getClass = createMafiaClassPropertyGetter(import_kolmafia.Class, import_kolmafia.toClass);
var getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia.Coinmaster, import_kolmafia.toCoinmaster);
var getEffect = createMafiaClassPropertyGetter(import_kolmafia.Effect, import_kolmafia.toEffect);
var getElement = createMafiaClassPropertyGetter(import_kolmafia.Element, import_kolmafia.toElement);
var getFamiliar = createMafiaClassPropertyGetter(import_kolmafia.Familiar, import_kolmafia.toFamiliar);
var getItem = createMafiaClassPropertyGetter(import_kolmafia.Item, import_kolmafia.toItem);
var getLocation = createMafiaClassPropertyGetter(import_kolmafia.Location, import_kolmafia.toLocation);
var getMonster = createMafiaClassPropertyGetter(import_kolmafia.Monster, import_kolmafia.toMonster);
var getPhylum = createMafiaClassPropertyGetter(import_kolmafia.Phylum, import_kolmafia.toPhylum);
var getServant = createMafiaClassPropertyGetter(import_kolmafia.Servant, import_kolmafia.toServant);
var getSkill = createMafiaClassPropertyGetter(import_kolmafia.Skill, import_kolmafia.toSkill);
var getSlot = createMafiaClassPropertyGetter(import_kolmafia.Slot, import_kolmafia.toSlot);
var getStat = createMafiaClassPropertyGetter(import_kolmafia.Stat, import_kolmafia.toStat);
var getThrall = createMafiaClassPropertyGetter(import_kolmafia.Thrall, import_kolmafia.toThrall);

// ../../node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");

// ../../node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e3) {
    didErr = true;
    err = _e3;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper2(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}

// ../../node_modules/libram/dist/template-string.js
var concatTemplateString = function concatTemplateString2(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
};
var createSingleConstant = function(Type) {
  return function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };
};
var createPluralConstant = function(Type) {
  return function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    return Type.get(splitByCommasWithEscapes(input));
  };
};
var $bounty = createSingleConstant(import_kolmafia2.Bounty);
var $bounties = createPluralConstant(import_kolmafia2.Bounty);
var $class = createSingleConstant(import_kolmafia2.Class);
var $classes = createPluralConstant(import_kolmafia2.Class);
var $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster);
var $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster);
var $effect = createSingleConstant(import_kolmafia2.Effect);
var $effects = createPluralConstant(import_kolmafia2.Effect);
var $element = createSingleConstant(import_kolmafia2.Element);
var $elements = createPluralConstant(import_kolmafia2.Element);
var $familiar = createSingleConstant(import_kolmafia2.Familiar);
var $familiars = createPluralConstant(import_kolmafia2.Familiar);
var $item = createSingleConstant(import_kolmafia2.Item);
var $items = createPluralConstant(import_kolmafia2.Item);
var $location = createSingleConstant(import_kolmafia2.Location);
var $locations = createPluralConstant(import_kolmafia2.Location);
var $monster = createSingleConstant(import_kolmafia2.Monster);
var $monsters = createPluralConstant(import_kolmafia2.Monster);
var $phylum = createSingleConstant(import_kolmafia2.Phylum);
var $phyla = createPluralConstant(import_kolmafia2.Phylum);
var $servant = createSingleConstant(import_kolmafia2.Servant);
var $servants = createPluralConstant(import_kolmafia2.Servant);
var $skill = createSingleConstant(import_kolmafia2.Skill);
var $skills = createPluralConstant(import_kolmafia2.Skill);
var $slot = createSingleConstant(import_kolmafia2.Slot);
var $slots = createPluralConstant(import_kolmafia2.Slot);
var $stat = createSingleConstant(import_kolmafia2.Stat);
var $stats = createPluralConstant(import_kolmafia2.Stat);
var $thrall = createSingleConstant(import_kolmafia2.Thrall);
var $thralls = createPluralConstant(import_kolmafia2.Thrall);

// ../../node_modules/libram/dist/lib.js
var _templateObject13;
var _templateObject14;
var _templateObject15;
var _templateObject16;
var _templateObject17;
var _templateObject18;
var _templateObject19;
var _templateObject20;
var _templateObject21;
var _templateObject22;
var _templateObject23;
var _templateObject24;
var _templateObject25;
var _templateObject26;
var _templateObject27;
var _templateObject28;
var _templateObject29;
var _templateObject30;
var _templateObject31;
var _templateObject32;
var _templateObject33;
var _templateObject34;
var _templateObject35;
var _templateObject36;
var _templateObject37;
var _templateObject38;
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia3.Effect) {
    return (0, import_kolmafia3.haveEffect)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia3.Familiar) {
    return (0, import_kolmafia3.haveFamiliar)(thing);
  }
  if (thing instanceof import_kolmafia3.Item) {
    return (0, import_kolmafia3.availableAmount)(thing) >= quantity;
  }
  if (thing instanceof import_kolmafia3.Servant) {
    return (0, import_kolmafia3.haveServant)(thing);
  }
  if (thing instanceof import_kolmafia3.Skill) {
    return (0, import_kolmafia3.haveSkill)(thing);
  }
  if (thing instanceof import_kolmafia3.Thrall) {
    var thrall = (0, import_kolmafia3.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
function haveInCampground(item) {
  return Object.keys((0, import_kolmafia3.getCampground)()).map(function(i) {
    return import_kolmafia3.Item.get(i);
  }).includes(item);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2["Digitize"] = "Digitize Monster";
  Wanderer2["Enamorang"] = "Enamorang Monster";
  Wanderer2["Familiar"] = "Familiar";
  Wanderer2["Holiday"] = "Holiday Monster";
  Wanderer2["Kramco"] = "Kramco";
  Wanderer2["Nemesis"] = "Nemesis Assassin";
  Wanderer2["Portscan"] = "portscan.edu";
  Wanderer2["Romantic"] = "Romantic Monster";
  Wanderer2["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function getFoldGroup(item) {
  return Object.entries((0, import_kolmafia3.getRelated)(item, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray4(_ref, 2), a = _ref3[1];
    var _ref4 = _slicedToArray4(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray4(_ref5, 1), i = _ref6[0];
    return import_kolmafia3.Item.get(i);
  });
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Moxie"])))]]);
var telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["cold"])))]]);
var hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["cold"])))]]);

// src/iotms.ts
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// src/utils.ts
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");
function haveItem(item) {
  return have(item) || (0, import_kolmafia4.displayAmount)(item) > 0;
}

// src/iotms.ts
var _templateObject;
var _templateObject2;
var _templateObject3;
function _taggedTemplateLiteral2(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var arrayOf = function(items) {
  return Array.isArray(items) ? items : [items];
};
function haveBound(iotm) {
  var boxed = import_kolmafia5.Item.get(iotm.id);
  switch (iotm.type) {
    case "campground": {
      var bound = iotm.item ? import_kolmafia5.Item.get(iotm.item) : null;
      return bound && (haveItem(bound) || haveInCampground(bound)) || haveInCampground(boxed);
    }
    case "custom": {
      switch (iotm.id) {
        case 5790: {
          return haveItem(boxed) || haveItem($item(_templateObject || (_templateObject = _taggedTemplateLiteral2(["right bear arm"])))) && haveItem($item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["left bear arm"]))));
        }
        case 6413: {
          return (0, import_kolmafia5.floristAvailable)();
        }
      }
      return false;
    }
    case "eudora":
      return (0, import_kolmafia5.xpath)((0, import_kolmafia5.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(iotm.eudoraId.toString());
    case "familiar":
      return arrayOf(iotm.familiar).map(function(f) {
        return import_kolmafia5.Familiar.get(f);
      }).some(function(f) {
        return (0, import_kolmafia5.haveFamiliar)(f);
      });
    case "item":
      return arrayOf(iotm.item).map(function(i) {
        return import_kolmafia5.Item.get(i);
      }).map(function(i) {
        var group = getFoldGroup(i);
        return group.length > 0 ? group : i;
      }).flat().some(function(i) {
        return haveItem(i);
      });
    case "preference":
      return getBoolean(iotm.preference);
    case "skill":
      var skill = import_kolmafia5.Skill.get(iotm.skill);
      return (0, import_kolmafia5.haveSkill)(skill);
    case "vip":
      return haveItem($item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["Clan VIP Lounge Key"]))));
  }
}
function getIotMStatus(iotm) {
  if (haveBound(iotm))
    return IotMStatus.BOUND;
  var boxed = import_kolmafia5.Item.get(iotm.id);
  if (have(boxed))
    return IotMStatus.BOXED;
  return IotMStatus.NONE;
}

// src/greenbox.ts
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray7(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray7(arr);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function checkIotMs() {
  var _loadIotMs$data, _loadIotMs;
  return ((_loadIotMs$data = (_loadIotMs = loadIotMs()) === null || _loadIotMs === void 0 ? void 0 : _loadIotMs.data) !== null && _loadIotMs$data !== void 0 ? _loadIotMs$data : []).map(function(iotm) {
    return [iotm.id, getIotMStatus(iotm)];
  });
}
function checkSkills() {
  var permedSkills = (0, import_kolmafia6.getPermedSkills)();
  function getStatus(skill) {
    if ((0, import_kolmafia6.toInt)(skill) == 7254 && getNumber("skillLevel7254") > 0) {
      return SkillStatus.HARDCORE;
    }
    switch (permedSkills[skill.toString()]) {
      case true:
        return SkillStatus.HARDCORE;
      case false:
        return SkillStatus.SOFTCORE;
      default:
        return SkillStatus.NONE;
    }
  }
  function getLevel(skill) {
    return getNumber("skillLevel".concat((0, import_kolmafia6.toInt)(skill)));
  }
  return import_kolmafia6.Skill.all().filter(function(skill) {
    return isPermable((0, import_kolmafia6.toInt)(skill));
  }).map(function(skill) {
    return [(0, import_kolmafia6.toInt)(skill), getStatus(skill), getLevel(skill)];
  });
}
function getHundredPercentFamiliars() {
  var history = (0, import_kolmafia6.visitUrl)("ascensionhistory.php?back=self&who=".concat((0, import_kolmafia6.myId)()), false) + (0, import_kolmafia6.visitUrl)("ascensionhistory.php?back=self&prens13=1&who=".concat((0, import_kolmafia6.myId)()), false);
  return new Set(_toConsumableArray(history.matchAll(/alt="([^"]*?) \(100%\)/gm)).map(function(m) {
    return (0, import_kolmafia6.toFamiliar)(m[1]);
  }));
}
function checkFamiliars() {
  var hundredPercentFamiliars = getHundredPercentFamiliars();
  function getStatus(familiar) {
    if (have(familiar))
      return FamiliarStatus.TERRARIUM;
    if (haveItem(familiar.hatchling))
      return FamiliarStatus.HATCHLING;
    return FamiliarStatus.NONE;
  }
  function getHundredPercent(familiar) {
    return hundredPercentFamiliars.has(familiar);
  }
  return import_kolmafia6.Familiar.all().map(function(familiar) {
    return [(0, import_kolmafia6.toInt)(familiar), getStatus(familiar), getHundredPercent(familiar)];
  });
}
function checkTrophies() {
  var _loadTrophies$data, _loadTrophies;
  var page = (0, import_kolmafia6.visitUrl)("trophies.php");
  function getStatus(trophy) {
    return page.includes('"trophy'.concat(trophy.id, '"')) ? TrophyStatus.HAVE : TrophyStatus.NONE;
  }
  return ((_loadTrophies$data = (_loadTrophies = loadTrophies()) === null || _loadTrophies === void 0 ? void 0 : _loadTrophies.data) !== null && _loadTrophies$data !== void 0 ? _loadTrophies$data : []).map(function(trophy) {
    return [trophy.id, getStatus(trophy)];
  });
}
function haveOutfitPieces(outfit) {
  return (0, import_kolmafia6.outfitPieces)(outfit).every(function(piece) {
    return have(piece);
  });
}
function checkOutfitTattoos(page) {
  var _loadTattoos;
  function getStatus(tattoo) {
    if (Array.isArray(tattoo.image))
      return TattooStatus.NONE;
    if (page.includes(tattoo.image))
      return TattooStatus.HAVE;
    if (haveOutfitPieces(tattoo.name))
      return TattooStatus.HAVE_OUTFIT;
    return TattooStatus.NONE;
  }
  return getOutfitTattoos(((_loadTattoos = loadTattoos()) === null || _loadTattoos === void 0 ? void 0 : _loadTattoos.data) || []).map(function(tattoo) {
    return [tattoo.outfit, getStatus(tattoo)];
  });
}
function checkTattoos(tattoos) {
  return {
    outfitTattoos: checkOutfitTattoos(tattoos)
  };
}
function getPathLevel(path) {
  if (path.points === null)
    return 0;
  return Math.min((Array.isArray(path.points) ? path.points : [path.points]).map(function(k) {
    return getNumber(k);
  }).reduce(function(sum, v) {
    return sum + v;
  }, 0), path.maxPoints);
}
function checkPaths(tattoos) {
  var _loadPaths$data, _loadPaths;
  return ((_loadPaths$data = (_loadPaths = loadPaths()) === null || _loadPaths === void 0 ? void 0 : _loadPaths.data) !== null && _loadPaths$data !== void 0 ? _loadPaths$data : []).map(function(path) {
    var level = getPathLevel(path);
    var items = path.items.map(function(i) {
      return haveItem(import_kolmafia6.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    });
    var equipment = path.equipment.map(function(i) {
      return haveItem(import_kolmafia6.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    });
    var tats = path.tattoos.map(function(tattoo) {
      if (Array.isArray(tattoo.image)) {
        for (var i = tattoo.image.length - 1; i >= 0; i--) {
          if (tattoos.includes(tattoo.image[i])) {
            return i + 1;
          }
        }
        return 0;
      }
      return tattoos.includes(tattoo.image) ? 1 : 0;
    });
    return [path.id, level, items, equipment, tats];
  });
}
function checkMeta() {
  return {
    name: (0, import_kolmafia6.myName)(),
    id: (0, import_kolmafia6.myId)(),
    timestamp: new Date().toISOString(),
    revision: (0, import_kolmafia6.getRevision)()
  };
}
function main() {
  (0, import_kolmafia6.printHtml)("Deciding your fate...");
  var tattoos = (0, import_kolmafia6.visitUrl)("account_tattoos.php");
  var code = compress(_objectSpread2(_objectSpread2({
    meta: checkMeta(),
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies()
  }, checkTattoos(tattoos)), {}, {
    paths: checkPaths(tattoos),
    iotms: checkIotMs()
  }));
  (0, import_kolmafia6.printHtml)('All done! To see your greenboxes, visit: <a href="https://greenbox.loathers.net/?d='.concat(code, '">https://greenbox.loathers.net/?d=').concat(code, "</a>"));
}
module.exports.main = main;
/*! https://mths.be/he v1.2.0 by @mathias | MIT license */
