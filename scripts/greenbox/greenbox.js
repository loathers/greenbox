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
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
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

// ../../node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "../../node_modules/core-js/internals/global.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var check = function(it) {
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
        return !0;
      }
    };
  }
});

// ../../node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "../../node_modules/core-js/internals/descriptors.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: function() {
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
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
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
    var NATIVE_BIND = require_function_bind_native(), FunctionPrototype = Function.prototype, bind = FunctionPrototype.bind, call = FunctionPrototype.call, uncurryThis = NATIVE_BIND && bind.bind(call, call);
    module2.exports = NATIVE_BIND ? function(fn) {
      return fn && uncurryThis(fn);
    } : function(fn) {
      return fn && function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// ../../node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "../../node_modules/core-js/internals/classof-raw.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// ../../node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "../../node_modules/core-js/internals/indexed-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), classof = require_classof_raw(), $Object = Object, split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// ../../node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "../../node_modules/core-js/internals/require-object-coercible.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (it == null)
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// ../../node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "../../node_modules/core-js/internals/to-indexed-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var IndexedObject = require_indexed_object(), requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
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
    var global2 = require_global(), isCallable = require_is_callable(), aFunction = function(argument) {
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
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
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
    var global2 = require_global(), userAgent = require_engine_user_agent(), process = global2.process, Deno = global2.Deno, versions = process && process.versions || Deno && Deno.version, v8 = versions && versions.v8, match, version;
    v8 && (match = v8.split("."), version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]));
    !version && userAgent && (match = userAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/), match && (version = +match[1])));
    module2.exports = version;
  }
});

// ../../node_modules/core-js/internals/native-symbol.js
var require_native_symbol = __commonJS({
  "../../node_modules/core-js/internals/native-symbol.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var V8_VERSION = require_engine_v8_version(), fails = require_fails();
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
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
    var getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), isPrototypeOf = require_object_is_prototype_of(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), $Object = Object;
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
    var isCallable = require_is_callable(), tryToString = require_try_to_string(), $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a function");
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
    var call = require_function_call(), isCallable = require_is_callable(), isObject = require_is_object(), $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)) || isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)) || pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw $TypeError("Can't convert object to primitive value");
    };
  }
});

// ../../node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "../../node_modules/core-js/internals/is-pure.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    module2.exports = !1;
  }
});

// ../../node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "../../node_modules/core-js/internals/define-global-property.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, {
          value: value,
          configurable: !0,
          writable: !0
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
    var global2 = require_global(), defineGlobalProperty = require_define_global_property(), SHARED = "__core-js_shared__", store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// ../../node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "../../node_modules/core-js/internals/shared.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var IS_PURE = require_is_pure(), store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.24.1",
      mode: IS_PURE ? "pure" : "global",
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
    var requireObjectCoercible = require_require_object_coercible(), $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// ../../node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "../../node_modules/core-js/internals/has-own-property.js": function(exports2, module2) {
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
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), id = 0, postfix = Math.random(), toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// ../../node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "../../node_modules/core-js/internals/well-known-symbol.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), shared = require_shared(), hasOwn = require_has_own_property(), uid = require_uid(), NATIVE_SYMBOL = require_native_symbol(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), WellKnownSymbolsStore = shared("wks"), Symbol2 = global2.Symbol, symbolFor = Symbol2 && Symbol2.for, createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        NATIVE_SYMBOL && hasOwn(Symbol2, name) ? WellKnownSymbolsStore[name] = Symbol2[name] : USE_SYMBOL_AS_UID && symbolFor ? WellKnownSymbolsStore[name] = symbolFor(description) : WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// ../../node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "../../node_modules/core-js/internals/to-primitive.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), isObject = require_is_object(), isSymbol = require_is_symbol(), getMethod = require_get_method(), ordinaryToPrimitive = require_ordinary_to_primitive(), wellKnownSymbol = require_well_known_symbol(), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE), result;
      if (exoticToPrim) {
        if (pref === void 0 && (pref = "default"), result = call(exoticToPrim, input, pref), !isObject(result) || isSymbol(result))
          return result;
        throw $TypeError("Can't convert object to primitive value");
      }
      return pref === void 0 && (pref = "number"), ordinaryToPrimitive(input, pref);
    };
  }
});

// ../../node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "../../node_modules/core-js/internals/to-property-key.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var toPrimitive = require_to_primitive(), isSymbol = require_is_symbol();
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
    var global2 = require_global(), isObject = require_is_object(), document2 = global2.document, EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// ../../node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "../../node_modules/core-js/internals/ie8-dom-define.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails(), createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
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
    var DESCRIPTORS = require_descriptors(), call = require_function_call(), propertyIsEnumerableModule = require_object_property_is_enumerable(), createPropertyDescriptor = require_create_property_descriptor(), toIndexedObject = require_to_indexed_object(), toPropertyKey = require_to_property_key(), hasOwn = require_has_own_property(), IE8_DOM_DEFINE = require_ie8_dom_define(), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P) {
      if (O = toIndexedObject(O), P = toPropertyKey(P), IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// ../../node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "../../node_modules/core-js/internals/v8-prototype-define-bug.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: !1
      }).prototype != 42;
    });
  }
});

// ../../node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "../../node_modules/core-js/internals/an-object.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isObject = require_is_object(), $String = String, $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw $TypeError($String(argument) + " is not an object");
    };
  }
});

// ../../node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "../../node_modules/core-js/internals/object-define-property.js": function(exports2) {
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
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError("Accessors not supported");
      return "value" in Attributes && (O[P] = Attributes.value), O;
    };
  }
});

// ../../node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "../../node_modules/core-js/internals/create-non-enumerable-property.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      return object[key] = value, object;
    };
  }
});

// ../../node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "../../node_modules/core-js/internals/function-name.js": function(exports2, module2) {
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
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), isCallable = require_is_callable(), store = require_shared_store(), functionToString = uncurryThis(Function.toString);
    isCallable(store.inspectSource) || (store.inspectSource = function(it) {
      return functionToString(it);
    });
    module2.exports = store.inspectSource;
  }
});

// ../../node_modules/core-js/internals/native-weak-map.js
var require_native_weak_map = __commonJS({
  "../../node_modules/core-js/internals/native-weak-map.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), isCallable = require_is_callable(), inspectSource = require_inspect_source(), WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));
  }
});

// ../../node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "../../node_modules/core-js/internals/shared-key.js": function(exports2, module2) {
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
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// ../../node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "../../node_modules/core-js/internals/internal-state.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var NATIVE_WEAK_MAP = require_native_weak_map(), global2 = require_global(), uncurryThis = require_function_uncurry_this(), isObject = require_is_object(), createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property(), shared = require_shared_store(), sharedKey = require_shared_key(), hiddenKeys = require_hidden_keys(), OBJECT_ALREADY_INITIALIZED = "Object already initialized", TypeError2 = global2.TypeError, WeakMap = global2.WeakMap, set, get, has, enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    }, getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE)
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        return state;
      };
    };
    NATIVE_WEAK_MAP || shared.state ? (store = shared.state || (shared.state = new WeakMap()), wmget = uncurryThis(store.get), wmhas = uncurryThis(store.has), wmset = uncurryThis(store.set), set = function(it, metadata) {
      if (wmhas(store, it))
        throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, wmset(store, it, metadata), metadata;
    }, get = function(it) {
      return wmget(store, it) || {};
    }, has = function(it) {
      return wmhas(store, it);
    }) : (STATE = sharedKey("state"), hiddenKeys[STATE] = !0, set = function(it, metadata) {
      if (hasOwn(it, STATE))
        throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata;
    }, get = function(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    }, has = function(it) {
      return hasOwn(it, STATE);
    });
    var store, wmget, wmhas, wmset, STATE;
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
    var fails = require_fails(), isCallable = require_is_callable(), hasOwn = require_has_own_property(), DESCRIPTORS = require_descriptors(), CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE, inspectSource = require_inspect_source(), InternalStateModule = require_internal_state(), enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, defineProperty = Object.defineProperty, CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", {
        value: 8
      }).length !== 8;
    }), TEMPLATE = String(String).split("String"), makeBuiltIn = module2.exports = function(value, name, options) {
      String(name).slice(0, 7) === "Symbol(" && (name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), options && options.getter && (name = "get " + name), options && options.setter && (name = "set " + name), (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) && (DESCRIPTORS ? defineProperty(value, "name", {
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
      return hasOwn(state, "source") || (state.source = TEMPLATE.join(typeof name == "string" ? name : "")), value;
    };
    Function.prototype.toString = makeBuiltIn(function() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// ../../node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "../../node_modules/core-js/internals/define-built-in.js": function(exports2, module2) {
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

// ../../node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "../../node_modules/core-js/internals/math-trunc.js": function(exports2, module2) {
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
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// ../../node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "../../node_modules/core-js/internals/length-of-array-like.js": function(exports2, module2) {
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
    init_kolmafia_polyfill();
    var toIndexedObject = require_to_indexed_object(), toAbsoluteIndex = require_to_absolute_index(), lengthOfArrayLike = require_length_of_array_like(), createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this), length = lengthOfArrayLike(O), index = toAbsoluteIndex(fromIndex, length), value;
        if (IS_INCLUDES && el != el) {
          for (; length > index; )
            if (value = O[index++], value != value)
              return !0;
        } else
          for (; length > index; index++)
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      includes: createMethod(!0),
      indexOf: createMethod(!1)
    };
  }
});

// ../../node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "../../node_modules/core-js/internals/object-keys-internal.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), hasOwn = require_has_own_property(), toIndexedObject = require_to_indexed_object(), indexOf = require_array_includes().indexOf, hiddenKeys = require_hidden_keys(), push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object), i = 0, result = [], key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      for (; names.length > i; )
        hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
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
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function(O) {
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
    init_kolmafia_polyfill();
    var hasOwn = require_has_own_property(), ownKeys3 = require_own_keys(), getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor(), definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      for (var keys = ownKeys3(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
        var key = keys[i];
        !hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key)) && defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
  }
});

// ../../node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "../../node_modules/core-js/internals/is-forced.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var fails = require_fails(), isCallable = require_is_callable(), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? !0 : value == NATIVE ? !1 : isCallable(detection) ? fails(detection) : !!detection;
    }, normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// ../../node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "../../node_modules/core-js/internals/export.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var global2 = require_global(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f, createNonEnumerableProperty = require_create_non_enumerable_property(), defineBuiltIn = require_define_built_in(), defineGlobalProperty = require_define_global_property(), copyConstructorProperties = require_copy_constructor_properties(), isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target, GLOBAL = options.global, STATIC = options.stat, FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL ? target = global2 : STATIC ? target = global2[TARGET] || defineGlobalProperty(TARGET, {}) : target = (global2[TARGET] || {}).prototype, target)
        for (key in source) {
          if (sourceProperty = source[key], options.dontCallGetSet ? (descriptor = getOwnPropertyDescriptor(target, key), targetProperty = descriptor && descriptor.value) : targetProperty = target[key], FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced), !FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          (options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  }
});

// ../../node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "../../node_modules/core-js/internals/object-keys.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// ../../node_modules/core-js/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "../../node_modules/core-js/internals/object-to-array.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), uncurryThis = require_function_uncurry_this(), objectKeys = require_object_keys(), toIndexedObject = require_to_indexed_object(), $propertyIsEnumerable = require_object_property_is_enumerable().f, propertyIsEnumerable = uncurryThis($propertyIsEnumerable), push = uncurryThis([].push), createMethod = function(TO_ENTRIES) {
      return function(it) {
        for (var O = toIndexedObject(it), keys = objectKeys(O), length = keys.length, i = 0, result = [], key; length > i; )
          key = keys[i++], (!DESCRIPTORS || propertyIsEnumerable(O, key)) && push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        return result;
      };
    };
    module2.exports = {
      entries: createMethod(!0),
      values: createMethod(!1)
    };
  }
});

// ../../node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "../../node_modules/core-js/internals/function-bind-context.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), aCallable = require_a_callable(), NATIVE_BIND = require_function_bind_native(), bind = uncurryThis(uncurryThis.bind);
    module2.exports = function(fn, that) {
      return aCallable(fn), that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
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

// ../../node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "../../node_modules/core-js/internals/is-array-iterator-method.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), Iterators = require_iterators(), ITERATOR = wellKnownSymbol("iterator"), ArrayPrototype = Array.prototype;
    module2.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// ../../node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "../../node_modules/core-js/internals/to-string-tag-support.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// ../../node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "../../node_modules/core-js/internals/classof.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), isCallable = require_is_callable(), classofRaw = require_classof_raw(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments", tryGet = function(it, key) {
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

// ../../node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "../../node_modules/core-js/internals/get-iterator-method.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var classof = require_classof(), getMethod = require_get_method(), Iterators = require_iterators(), wellKnownSymbol = require_well_known_symbol(), ITERATOR = wellKnownSymbol("iterator");
    module2.exports = function(it) {
      if (it != null)
        return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// ../../node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "../../node_modules/core-js/internals/get-iterator.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), aCallable = require_a_callable(), anObject = require_an_object(), tryToString = require_try_to_string(), getIteratorMethod = require_get_iterator_method(), $TypeError = TypeError;
    module2.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod))
        return anObject(call(iteratorMethod, argument));
      throw $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// ../../node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "../../node_modules/core-js/internals/iterator-close.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var call = require_function_call(), anObject = require_an_object(), getMethod = require_get_method();
    module2.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        if (innerResult = getMethod(iterator, "return"), !innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = !0, innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      return anObject(innerResult), value;
    };
  }
});

// ../../node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "../../node_modules/core-js/internals/iterate.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var bind = require_function_bind_context(), call = require_function_call(), anObject = require_an_object(), tryToString = require_try_to_string(), isArrayIteratorMethod = require_is_array_iterator_method(), lengthOfArrayLike = require_length_of_array_like(), isPrototypeOf = require_object_is_prototype_of(), getIterator = require_get_iterator(), getIteratorMethod = require_get_iterator_method(), iteratorClose = require_iterator_close(), $TypeError = TypeError, Result = function(stopped, result) {
      this.stopped = stopped, this.result = result;
    }, ResultPrototype = Result.prototype;
    module2.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that, AS_ENTRIES = !!(options && options.AS_ENTRIES), IS_RECORD = !!(options && options.IS_RECORD), IS_ITERATOR = !!(options && options.IS_ITERATOR), INTERRUPTED = !!(options && options.INTERRUPTED), fn = bind(unboundFunction, that), iterator, iterFn, index, length, result, next, step, stop = function(condition) {
        return iterator && iteratorClose(iterator, "normal", condition), new Result(!0, condition);
      }, callFn = function(value) {
        return AS_ENTRIES ? (anObject(value), INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1])) : INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD)
        iterator = iterable.iterator;
      else if (IS_ITERATOR)
        iterator = iterable;
      else {
        if (iterFn = getIteratorMethod(iterable), !iterFn)
          throw $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++)
            if (result = callFn(iterable[index]), result && isPrototypeOf(ResultPrototype, result))
              return result;
          return new Result(!1);
        }
        iterator = getIterator(iterable, iterFn);
      }
      for (next = IS_RECORD ? iterable.next : iterator.next; !(step = call(next, iterator)).done; ) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
          return result;
      }
      return new Result(!1);
    };
  }
});

// ../../node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "../../node_modules/core-js/internals/create-property.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toPropertyKey = require_to_property_key(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      propertyKey in object ? definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value)) : object[propertyKey] = value;
    };
  }
});

// ../../node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "../../node_modules/core-js/internals/is-array.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function(argument) {
      return classof(argument) == "Array";
    };
  }
});

// ../../node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "../../node_modules/core-js/internals/does-not-exceed-safe-integer.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var $TypeError = TypeError, MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// ../../node_modules/core-js/internals/flatten-into-array.js
var require_flatten_into_array = __commonJS({
  "../../node_modules/core-js/internals/flatten-into-array.js": function(exports2, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isArray = require_is_array(), lengthOfArrayLike = require_length_of_array_like(), doesNotExceedSafeInteger = require_does_not_exceed_safe_integer(), bind = require_function_bind_context(), flattenIntoArray = function flattenIntoArray2(target, original, source, sourceLen, start, depth, mapper, thisArg) {
      for (var targetIndex = start, sourceIndex = 0, mapFn = mapper ? bind(mapper, thisArg) : !1, element, elementLen; sourceIndex < sourceLen; )
        sourceIndex in source && (element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex], depth > 0 && isArray(element) ? (elementLen = lengthOfArrayLike(element), targetIndex = flattenIntoArray2(target, original, element, elementLen, targetIndex, depth - 1) - 1) : (doesNotExceedSafeInteger(targetIndex + 1), target[targetIndex] = element), targetIndex++), sourceIndex++;
      return targetIndex;
    };
    module2.exports = flattenIntoArray;
  }
});

// ../../node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "../../node_modules/core-js/internals/is-constructor.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), isCallable = require_is_callable(), classof = require_classof(), getBuiltIn = require_get_built_in(), inspectSource = require_inspect_source(), noop = function() {
    }, empty = [], construct = getBuiltIn("Reflect", "construct"), constructorRegExp = /^\s*(?:class|function)\b/, exec = uncurryThis(constructorRegExp.exec), INCORRECT_TO_STRING = !constructorRegExp.exec(noop), isConstructorModern = function(argument) {
      if (!isCallable(argument))
        return !1;
      try {
        return construct(noop, empty, argument), !0;
      } catch (error) {
        return !1;
      }
    }, isConstructorLegacy = function(argument) {
      if (!isCallable(argument))
        return !1;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return !0;
      }
    };
    isConstructorLegacy.sham = !0;
    module2.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = !0;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// ../../node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "../../node_modules/core-js/internals/array-species-constructor.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var isArray = require_is_array(), isConstructor = require_is_constructor(), isObject = require_is_object(), wellKnownSymbol = require_well_known_symbol(), SPECIES = wellKnownSymbol("species"), $Array = Array;
    module2.exports = function(originalArray) {
      var C;
      return isArray(originalArray) && (C = originalArray.constructor, isConstructor(C) && (C === $Array || isArray(C.prototype)) ? C = void 0 : isObject(C) && (C = C[SPECIES], C === null && (C = void 0))), C === void 0 ? $Array : C;
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
    var $3 = require_export(), flattenIntoArray = require_flatten_into_array(), toObject = require_to_object(), lengthOfArrayLike = require_length_of_array_like(), toIntegerOrInfinity = require_to_integer_or_infinity(), arraySpeciesCreate = require_array_species_create();
    $3({
      target: "Array",
      proto: !0
    }, {
      flat: function() {
        var depthArg = arguments.length ? arguments[0] : void 0, O = toObject(this), sourceLen = lengthOfArrayLike(O), A = arraySpeciesCreate(O, 0);
        return A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg)), A;
      }
    });
  }
});

// ../../node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "../../node_modules/core-js/internals/object-define-properties.js": function(exports2) {
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), definePropertyModule = require_object_define_property(), anObject = require_an_object(), toIndexedObject = require_to_indexed_object(), objectKeys = require_object_keys();
    exports2.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
      anObject(O);
      for (var props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0, key; length > index; )
        definePropertyModule.f(O, key = keys[index++], props[key]);
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
      _NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      for (var length = enumBugKeys.length; length--; )
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = !0;
    module2.exports = Object.create || function(O, Properties) {
      var result;
      return O !== null ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor(), EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO] = O) : result = _NullProtoObject(), Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// ../../node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "../../node_modules/core-js/internals/add-to-unscopables.js": function(exports2, module2) {
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), create = require_object_create(), defineProperty = require_object_define_property().f, UNSCOPABLES = wellKnownSymbol("unscopables"), ArrayPrototype = Array.prototype;
    ArrayPrototype[UNSCOPABLES] == null && defineProperty(ArrayPrototype, UNSCOPABLES, {
      configurable: !0,
      value: create(null)
    });
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = !0;
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
    var global2 = require_global(), uncurryThis = require_function_uncurry_this();
    module2.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis(global2[CONSTRUCTOR].prototype[METHOD]);
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

// src/greenbox.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/index.ts
init_kolmafia_polyfill();

// ../../node_modules/jsoncrush/JSONCrush.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
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
  if (!!o) {
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
      (i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 || unescapedCharacters.includes(String.fromCharCode(i))) && characters.push(String.fromCharCode(i));
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

// ../greenbox-data/lib/familiars.ts
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
  },
  {
    id: 10951,
    month: 9,
    year: 2022,
    type: "item",
    item: "Jurassic Parka"
  }
], iotms_default = iotms;

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
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
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

// ../greenbox-data/lib/paths.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/paths.ts
init_kolmafia_polyfill();
var ItemId;
(function(ItemId2) {
  ItemId2[ItemId2.StainlessSC = 1224] = "StainlessSC", ItemId2[ItemId2.StainlessTT = 1225] = "StainlessTT", ItemId2[ItemId2.StainlessPM = 1226] = "StainlessPM", ItemId2[ItemId2.StainlessSA = 1227] = "StainlessSA", ItemId2[ItemId2.StainlessDB = 1228] = "StainlessDB", ItemId2[ItemId2.StainlessAT = 1229] = "StainlessAT", ItemId2[ItemId2.LoofahSC = 10130] = "LoofahSC", ItemId2[ItemId2.LoofahTT = 10131] = "LoofahTT", ItemId2[ItemId2.LoofahPM = 10132] = "LoofahPM", ItemId2[ItemId2.LoofahSA = 10133] = "LoofahSA", ItemId2[ItemId2.LoofahDB = 10134] = "LoofahDB", ItemId2[ItemId2.LoofahAT = 10135] = "LoofahAT", ItemId2[ItemId2.VelourSC = 10114] = "VelourSC", ItemId2[ItemId2.VelourTT = 10115] = "VelourTT", ItemId2[ItemId2.VelourPM = 10116] = "VelourPM", ItemId2[ItemId2.VelourSA = 10117] = "VelourSA", ItemId2[ItemId2.VelourDB = 10118] = "VelourDB", ItemId2[ItemId2.VelourAT = 10119] = "VelourAT", ItemId2[ItemId2.ParaffinSC = 10098] = "ParaffinSC", ItemId2[ItemId2.ParaffinTT = 10099] = "ParaffinTT", ItemId2[ItemId2.ParaffinPM = 10100] = "ParaffinPM", ItemId2[ItemId2.ParaffinSA = 10101] = "ParaffinSA", ItemId2[ItemId2.ParaffinDB = 10102] = "ParaffinDB", ItemId2[ItemId2.ParaffinAT = 10103] = "ParaffinAT", ItemId2[ItemId2.ChalkSC = 10082] = "ChalkSC", ItemId2[ItemId2.ChalkTT = 10083] = "ChalkTT", ItemId2[ItemId2.ChalkPM = 10084] = "ChalkPM", ItemId2[ItemId2.ChalkSA = 10085] = "ChalkSA", ItemId2[ItemId2.ChalkDB = 10086] = "ChalkDB", ItemId2[ItemId2.ChalkAT = 10087] = "ChalkAT", ItemId2[ItemId2.GabardineSC = 8120] = "GabardineSC", ItemId2[ItemId2.GabardineTT = 8121] = "GabardineTT", ItemId2[ItemId2.GabardinePM = 8122] = "GabardinePM", ItemId2[ItemId2.GabardineSA = 8123] = "GabardineSA", ItemId2[ItemId2.GabardineDB = 8124] = "GabardineDB", ItemId2[ItemId2.GabardineAT = 8125] = "GabardineAT", ItemId2[ItemId2.AerogelSC = 8106] = "AerogelSC", ItemId2[ItemId2.AerogelTT = 8107] = "AerogelTT", ItemId2[ItemId2.AerogelPM = 8108] = "AerogelPM", ItemId2[ItemId2.AerogelSA = 8109] = "AerogelSA", ItemId2[ItemId2.AerogelDB = 8110] = "AerogelDB", ItemId2[ItemId2.AerogelAT = 8111] = "AerogelAT", ItemId2[ItemId2.WickerSC = 8092] = "WickerSC", ItemId2[ItemId2.WickerTT = 8093] = "WickerTT", ItemId2[ItemId2.WickerPM = 8094] = "WickerPM", ItemId2[ItemId2.WickerSA = 8095] = "WickerSA", ItemId2[ItemId2.WickerDB = 8096] = "WickerDB", ItemId2[ItemId2.WickerAT = 8097] = "WickerAT", ItemId2[ItemId2.PolyesterSC = 7985] = "PolyesterSC", ItemId2[ItemId2.PolyesterTT = 7986] = "PolyesterTT", ItemId2[ItemId2.PolyesterPM = 7987] = "PolyesterPM", ItemId2[ItemId2.PolyesterSA = 7988] = "PolyesterSA", ItemId2[ItemId2.PolyesterDB = 7989] = "PolyesterDB", ItemId2[ItemId2.PolyesterAT = 7990] = "PolyesterAT", ItemId2[ItemId2.PlexiSC = 1230] = "PlexiSC", ItemId2[ItemId2.PlexiTT = 1231] = "PlexiTT", ItemId2[ItemId2.PlexiPM = 1232] = "PlexiPM", ItemId2[ItemId2.PlexiSA = 1233] = "PlexiSA", ItemId2[ItemId2.PlexiDB = 1234] = "PlexiDB", ItemId2[ItemId2.PlexiAT = 1235] = "PlexiAT", ItemId2[ItemId2.FlagstoneSC = 10138] = "FlagstoneSC", ItemId2[ItemId2.FlagstoneTT = 10139] = "FlagstoneTT", ItemId2[ItemId2.FlagstonePM = 10140] = "FlagstonePM", ItemId2[ItemId2.FlagstoneSA = 10141] = "FlagstoneSA", ItemId2[ItemId2.FlagstoneDB = 10142] = "FlagstoneDB", ItemId2[ItemId2.FlagstoneAT = 10143] = "FlagstoneAT", ItemId2[ItemId2.StainedGlassSC = 10122] = "StainedGlassSC", ItemId2[ItemId2.StainedGlassTT = 10123] = "StainedGlassTT", ItemId2[ItemId2.StainedGlassPM = 10124] = "StainedGlassPM", ItemId2[ItemId2.StainedGlassSA = 10125] = "StainedGlassSA", ItemId2[ItemId2.StainedGlassDB = 10126] = "StainedGlassDB", ItemId2[ItemId2.StainedGlassAT = 10127] = "StainedGlassAT", ItemId2[ItemId2.TerraCottaSC = 10106] = "TerraCottaSC", ItemId2[ItemId2.TerraCottaTT = 10107] = "TerraCottaTT", ItemId2[ItemId2.TerraCottaPM = 10108] = "TerraCottaPM", ItemId2[ItemId2.TerraCottaSA = 10109] = "TerraCottaSA", ItemId2[ItemId2.TerraCottaDB = 10110] = "TerraCottaDB", ItemId2[ItemId2.TerraCottaAT = 10111] = "TerraCottaAT", ItemId2[ItemId2.MarbleSC = 10090] = "MarbleSC", ItemId2[ItemId2.MarbleTT = 10091] = "MarbleTT", ItemId2[ItemId2.MarblePM = 10092] = "MarblePM", ItemId2[ItemId2.MarbleSA = 10093] = "MarbleSA", ItemId2[ItemId2.MarbleDB = 10094] = "MarbleDB", ItemId2[ItemId2.MarbleAT = 10095] = "MarbleAT", ItemId2[ItemId2.FiberglassSC = 8127] = "FiberglassSC", ItemId2[ItemId2.FiberglassTT = 8128] = "FiberglassTT", ItemId2[ItemId2.FiberglassPM = 8129] = "FiberglassPM", ItemId2[ItemId2.FiberglassSA = 8130] = "FiberglassSA", ItemId2[ItemId2.FiberglassDB = 8131] = "FiberglassDB", ItemId2[ItemId2.FiberglassAT = 8132] = "FiberglassAT", ItemId2[ItemId2.WroughtIronSC = 8113] = "WroughtIronSC", ItemId2[ItemId2.WroughtIronTT = 8114] = "WroughtIronTT", ItemId2[ItemId2.WroughtIronPM = 8115] = "WroughtIronPM", ItemId2[ItemId2.WroughtIronSA = 8116] = "WroughtIronSA", ItemId2[ItemId2.WroughtIronDB = 8117] = "WroughtIronDB", ItemId2[ItemId2.WroughtIronAT = 8118] = "WroughtIronAT", ItemId2[ItemId2.BakeliteSC = 8099] = "BakeliteSC", ItemId2[ItemId2.BakeliteTT = 8100] = "BakeliteTT", ItemId2[ItemId2.BakelitePM = 8101] = "BakelitePM", ItemId2[ItemId2.BakeliteSA = 8102] = "BakeliteSA", ItemId2[ItemId2.BakeliteDB = 8103] = "BakeliteDB", ItemId2[ItemId2.BakeliteAT = 8104] = "BakeliteAT", ItemId2[ItemId2.PorcelainSC = 7991] = "PorcelainSC", ItemId2[ItemId2.PorcelainTT = 7992] = "PorcelainTT", ItemId2[ItemId2.PorcelainPM = 7993] = "PorcelainPM", ItemId2[ItemId2.PorcelainSA = 7994] = "PorcelainSA", ItemId2[ItemId2.PorcelainDB = 7995] = "PorcelainDB", ItemId2[ItemId2.PorcelainAT = 7996] = "PorcelainAT", ItemId2[ItemId2.BrimstoneSC = 2814] = "BrimstoneSC", ItemId2[ItemId2.BrimstoneTT = 2815] = "BrimstoneTT", ItemId2[ItemId2.BrimstonePM = 2817] = "BrimstonePM", ItemId2[ItemId2.BrimstoneSA = 2818] = "BrimstoneSA", ItemId2[ItemId2.BrimstoneDB = 2816] = "BrimstoneDB", ItemId2[ItemId2.BrimstoneAT = 2813] = "BrimstoneAT", ItemId2[ItemId2.PickyTweezers = 7936] = "PickyTweezers", ItemId2[ItemId2.AdventurerBobblehead = 9084] = "AdventurerBobblehead", ItemId2[ItemId2.PerfectlyFairCoin = 9526] = "PerfectlyFairCoin", ItemId2[ItemId2.GarlandOfGreatness = 9910] = "GarlandOfGreatness", ItemId2[ItemId2.Ring = 10252] = "Ring", ItemId2[ItemId2.RedPlumbersBoots = 10501] = "RedPlumbersBoots", ItemId2[ItemId2.QuantumOfFamiliar = 10758] = "QuantumOfFamiliar", ItemId2[ItemId2.TheBigBookOfEverySkill = 10917] = "TheBigBookOfEverySkill";
})(ItemId || (ItemId = {}));
var Thwaitgold;
(function(Thwaitgold2) {
  Thwaitgold2[Thwaitgold2.Bee = 5141] = "Bee", Thwaitgold2[Thwaitgold2.Grasshopper = 5222] = "Grasshopper", Thwaitgold2[Thwaitgold2.Butterfly = 5392] = "Butterfly", Thwaitgold2[Thwaitgold2.StagBeetle = 5572] = "StagBeetle", Thwaitgold2[Thwaitgold2.WoollyBear = 5694] = "WoollyBear", Thwaitgold2[Thwaitgold2.Maggot = 5773] = "Maggot", Thwaitgold2[Thwaitgold2.PrayingMantis = 6045] = "PrayingMantis", Thwaitgold2[Thwaitgold2.Firefly = 6298] = "Firefly", Thwaitgold2[Thwaitgold2.GoliathBeetle = 6547] = "GoliathBeetle", Thwaitgold2[Thwaitgold2.Bookworm = 6676] = "Bookworm", Thwaitgold2[Thwaitgold2.Ant = 6899] = "Ant", Thwaitgold2[Thwaitgold2.Dragonfly = 7249] = "Dragonfly", Thwaitgold2[Thwaitgold2.WheelBug = 7498] = "WheelBug", Thwaitgold2[Thwaitgold2.Spider = 7668] = "Spider", Thwaitgold2[Thwaitgold2.Nit = 7935] = "Nit", Thwaitgold2[Thwaitgold2.ScarabBeetle = 8087] = "ScarabBeetle", Thwaitgold2[Thwaitgold2.Caterpillar = 8296] = "Caterpillar", Thwaitgold2[Thwaitgold2.Termite = 8556] = "Termite", Thwaitgold2[Thwaitgold2.Scorpion = 8984] = "Scorpion", Thwaitgold2[Thwaitgold2.Moth = 9031] = "Moth", Thwaitgold2[Thwaitgold2.Cockroach = 9099] = "Cockroach", Thwaitgold2[Thwaitgold2.Amoeba = 9346] = "Amoeba", Thwaitgold2[Thwaitgold2.Bug = 9488] = "Bug", Thwaitgold2[Thwaitgold2.TimeFly = 9525] = "TimeFly", Thwaitgold2[Thwaitgold2.Metabug = 9758] = "Metabug", Thwaitgold2[Thwaitgold2.Chigger = 9917] = "Chigger", Thwaitgold2[Thwaitgold2.MaskedHunter = 9941] = "MaskedHunter", Thwaitgold2[Thwaitgold2.Mosquito = 10184] = "Mosquito", Thwaitgold2[Thwaitgold2.Nymph = 10253] = "Nymph", Thwaitgold2[Thwaitgold2.BombardierBeetle = 10319] = "BombardierBeetle", Thwaitgold2[Thwaitgold2.BuzzyBeetle = 10470] = "BuzzyBeetle", Thwaitgold2[Thwaitgold2.KeyholeSpider = 10570] = "KeyholeSpider", Thwaitgold2[Thwaitgold2.Slug = 10601] = "Slug", Thwaitgold2[Thwaitgold2.ListeningBug = 10736] = "ListeningBug", Thwaitgold2[Thwaitgold2.QuantumBug = 10757] = "QuantumBug", Thwaitgold2[Thwaitgold2.FireBeetle = 10791] = "FireBeetle", Thwaitgold2[Thwaitgold2.Protozoa = 10894] = "Protozoa", Thwaitgold2[Thwaitgold2.Harvestman = 10918] = "Harvestman";
})(Thwaitgold || (Thwaitgold = {}));
var paths_default = [{
  id: -3,
  name: "Softcore",
  image: "itemimages/karma.gif",
  items: [],
  equipment: [ItemId.LoofahSC, ItemId.LoofahTT, ItemId.LoofahPM, ItemId.LoofahSA, ItemId.LoofahDB, ItemId.LoofahAT, ItemId.VelourSC, ItemId.VelourTT, ItemId.VelourPM, ItemId.VelourSA, ItemId.VelourDB, ItemId.VelourAT, ItemId.ParaffinSC, ItemId.ParaffinTT, ItemId.ParaffinPM, ItemId.ParaffinSA, ItemId.ParaffinDB, ItemId.ParaffinAT, ItemId.ChalkSC, ItemId.ChalkTT, ItemId.ChalkPM, ItemId.ChalkSA, ItemId.ChalkDB, ItemId.ChalkAT, ItemId.GabardineSC, ItemId.GabardineTT, ItemId.GabardinePM, ItemId.GabardineSA, ItemId.GabardineDB, ItemId.GabardineAT, ItemId.AerogelSC, ItemId.AerogelTT, ItemId.AerogelPM, ItemId.AerogelSA, ItemId.AerogelDB, ItemId.AerogelAT, ItemId.WickerSC, ItemId.WickerTT, ItemId.WickerPM, ItemId.WickerSA, ItemId.WickerDB, ItemId.WickerAT, ItemId.PolyesterSC, ItemId.PolyesterTT, ItemId.PolyesterPM, ItemId.PolyesterSA, ItemId.PolyesterDB, ItemId.PolyesterAT],
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
  id: -2,
  name: "Hardcore",
  image: "otherimages/sigils/staintat.gif",
  items: [],
  equipment: [ItemId.StainlessSC, ItemId.StainlessTT, ItemId.StainlessPM, ItemId.StainlessSA, ItemId.StainlessDB, ItemId.StainlessAT, ItemId.FlagstoneSC, ItemId.FlagstoneTT, ItemId.FlagstonePM, ItemId.FlagstoneSA, ItemId.FlagstoneDB, ItemId.FlagstoneAT, ItemId.StainedGlassSC, ItemId.StainedGlassTT, ItemId.StainedGlassPM, ItemId.StainedGlassSA, ItemId.StainedGlassDB, ItemId.StainedGlassAT, ItemId.TerraCottaSC, ItemId.TerraCottaTT, ItemId.TerraCottaPM, ItemId.TerraCottaSA, ItemId.TerraCottaDB, ItemId.TerraCottaAT, ItemId.MarbleSC, ItemId.MarbleTT, ItemId.MarblePM, ItemId.MarbleSA, ItemId.MarbleDB, ItemId.MarbleAT, ItemId.FiberglassSC, ItemId.FiberglassTT, ItemId.FiberglassPM, ItemId.FiberglassSA, ItemId.FiberglassDB, ItemId.FiberglassAT, ItemId.WroughtIronSC, ItemId.WroughtIronTT, ItemId.WroughtIronPM, ItemId.WroughtIronSA, ItemId.WroughtIronDB, ItemId.WroughtIronAT, ItemId.BakeliteSC, ItemId.BakeliteTT, ItemId.BakelitePM, ItemId.BakeliteSA, ItemId.BakeliteDB, ItemId.BakeliteAT, ItemId.PorcelainSC, ItemId.PorcelainTT, ItemId.PorcelainPM, ItemId.PorcelainSA, ItemId.PorcelainDB, ItemId.PorcelainAT],
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
  if (!!o) {
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
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
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
    var _acc = _slicedToArray(acc, 2), r = _acc[0], currentId = _acc[1];
    return path[0] > currentId && (r += ",".repeat(path[0] - currentId), currentId = path[0]), r += path[1].toString(pointsRadix), r += path[2].join(""), r += path[3].join(""), r += path[4].map(function(i) {
      return i.toString(tattooLevelRadix);
    }).join(""), [r, currentId];
  }, ["", -3])[0].replace(/0+($|,)/, "$1");
};

// ../greenbox-data/lib/skills.ts
init_kolmafia_polyfill();
var SkillStatus;
(function(SkillStatus2) {
  SkillStatus2[SkillStatus2.NONE = 0] = "NONE", SkillStatus2[SkillStatus2.SOFTCORE = 1] = "SOFTCORE", SkillStatus2[SkillStatus2.HARDCORE = 2] = "HARDCORE";
})(SkillStatus || (SkillStatus = {}));
var isPermable = function(id) {
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
      return !1;
  }
  return !0;
};
var compressSkills = function(skills) {
  return skills.sort(function(a, b) {
    return a[0] - b[0];
  }).reduce(function(acc, skill) {
    var r = acc[0], currentBlock = acc[1], block = Math.floor(skill[0] / 1e3);
    block > currentBlock && (r += ",".repeat(block - currentBlock), currentBlock = block);
    var blockContents = r.substring(r.lastIndexOf(",") + 1), zeros = "0".repeat(Math.max(0, skill[0] - block * 1e3 - blockContents.replace(/\(\d+\)/g, "").length - (block === 0 ? 1 : 0)));
    return r += zeros, r += skill[1], skill[2] > 0 && (r += "(".concat(skill[2], ")")), [r, currentBlock];
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
  TattooStatus2[TattooStatus2.NONE = 0] = "NONE", TattooStatus2[TattooStatus2.HAVE_OUTFIT = 1] = "HAVE_OUTFIT", TattooStatus2[TattooStatus2.HAVE = 2] = "HAVE";
})(TattooStatus || (TattooStatus = {}));
function loadTattoos() {
  var lastKnownSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, size = JSON.stringify(tattoos_default).length;
  return size === lastKnownSize ? null : {
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
  TrophyStatus2[TrophyStatus2.NONE = 0] = "NONE", TrophyStatus2[TrophyStatus2.HAVE = 1] = "HAVE";
})(TrophyStatus || (TrophyStatus = {}));
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

// ../greenbox-data/lib/classes.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/classes.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/effects.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/items.ts
init_kolmafia_polyfill();
var ItemStatus;
(function(ItemStatus2) {
  ItemStatus2[ItemStatus2.NONE = 0] = "NONE", ItemStatus2[ItemStatus2.HAVE = 1] = "HAVE";
})(ItemStatus || (ItemStatus = {}));

// ../greenbox-data/lib/index.ts
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!!o) {
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
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function compress(raw) {
  var compressed = {
    meta: Object.entries(raw.meta).map(function(_ref) {
      var _ref2 = _slicedToArray2(_ref, 2), k = _ref2[0], v = _ref2[1];
      return "".concat(k, ":").concat(v);
    }).join(","),
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    outfitTattoos: compressOutfitTattoos(raw.outfitTattoos),
    paths: compressPaths(raw.paths),
    iotms: compressIotMs(raw.iotms)
  }, compressedString = JSON.stringify(compressed);
  return encodeURIComponent(JSONCrush_default.crush(compressedString));
}

// src/greenbox.ts
var import_kolmafia6 = require("kolmafia");

// ../../node_modules/libram/dist/property.js
init_kolmafia_polyfill();

// ../../node_modules/core-js/modules/es.object.entries.js
init_kolmafia_polyfill();
var $ = require_export(), $entries = require_object_to_array().entries;
$({
  target: "Object",
  stat: !0
}, {
  entries: function(O) {
    return $entries(O);
  }
});

// ../../node_modules/core-js/modules/es.object.from-entries.js
init_kolmafia_polyfill();
var $2 = require_export(), iterate = require_iterate(), createProperty = require_create_property();
$2({
  target: "Object",
  stat: !0
}, {
  fromEntries: function(iterable) {
    var obj = {};
    return iterate(iterable, function(k, v) {
      createProperty(obj, k, v);
    }, {
      AS_ENTRIES: !0
    }), obj;
  }
});

// ../../node_modules/libram/dist/property.js
var import_kolmafia = require("kolmafia");
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
    return v === Type.get("none") ? null : v;
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

// src/iotms.ts
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// ../../node_modules/libram/dist/lib.js
init_kolmafia_polyfill();
var import_flat = __toESM(require_flat5()), import_kolmafia3 = require("kolmafia");

// ../../node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");

// ../../node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
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
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!!o) {
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

// ../../node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, createSingleConstant = function(Type) {
  return function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };
}, createPluralConstant = function(Type) {
  return function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return input === "" ? Type.all() : Type.get(splitByCommasWithEscapes(input));
  };
}, $bounty = createSingleConstant(import_kolmafia2.Bounty), $bounties = createPluralConstant(import_kolmafia2.Bounty), $class = createSingleConstant(import_kolmafia2.Class), $classes = createPluralConstant(import_kolmafia2.Class), $coinmaster = createSingleConstant(import_kolmafia2.Coinmaster), $coinmasters = createPluralConstant(import_kolmafia2.Coinmaster), $effect = createSingleConstant(import_kolmafia2.Effect), $effects = createPluralConstant(import_kolmafia2.Effect), $element = createSingleConstant(import_kolmafia2.Element), $elements = createPluralConstant(import_kolmafia2.Element), $familiar = createSingleConstant(import_kolmafia2.Familiar), $familiars = createPluralConstant(import_kolmafia2.Familiar), $item = createSingleConstant(import_kolmafia2.Item), $items = createPluralConstant(import_kolmafia2.Item), $location = createSingleConstant(import_kolmafia2.Location), $locations = createPluralConstant(import_kolmafia2.Location), $monster = createSingleConstant(import_kolmafia2.Monster), $monsters = createPluralConstant(import_kolmafia2.Monster), $phylum = createSingleConstant(import_kolmafia2.Phylum), $phyla = createPluralConstant(import_kolmafia2.Phylum), $servant = createSingleConstant(import_kolmafia2.Servant), $servants = createPluralConstant(import_kolmafia2.Servant), $skill = createSingleConstant(import_kolmafia2.Skill), $skills = createPluralConstant(import_kolmafia2.Skill), $slot = createSingleConstant(import_kolmafia2.Slot), $slots = createPluralConstant(import_kolmafia2.Slot), $stat = createSingleConstant(import_kolmafia2.Stat), $stats = createPluralConstant(import_kolmafia2.Stat), $thrall = createSingleConstant(import_kolmafia2.Thrall), $thralls = createPluralConstant(import_kolmafia2.Thrall);

// ../../node_modules/libram/dist/lib.js
var _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38;
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!!o) {
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
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _arr = [], _n = !0, _d = !1, _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0)
        ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        !_n && _i.return != null && _i.return();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
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
    var _ref3 = _slicedToArray3(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 1), i = _ref6[0];
    return import_kolmafia3.Item.get(i);
  });
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["cold"])))]]);

// src/utils.ts
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");
function haveItem(item) {
  return [import_kolmafia4.availableAmount, import_kolmafia4.closetAmount, import_kolmafia4.displayAmount, import_kolmafia4.equippedAmount, import_kolmafia4.itemAmount, import_kolmafia4.storageAmount].map(function(f) {
    return f(item);
  }).some(function(q) {
    return q > 0;
  });
}

// src/iotms.ts
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
        case 5790:
          return haveItem(boxed) || haveItem(import_kolmafia5.Item.get("right bear arm")) && haveItem(import_kolmafia5.Item.get("left bear arm"));
        case 6413:
          return (0, import_kolmafia5.floristAvailable)();
      }
      return !1;
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
      return haveItem(import_kolmafia5.Item.get("Clan VIP Lounge Key"));
  }
}
function getIotMStatus(iotm) {
  if (haveBound(iotm))
    return IotMStatus.BOUND;
  var boxed = import_kolmafia5.Item.get(iotm.id);
  return haveItem(boxed) ? IotMStatus.BOXED : IotMStatus.NONE;
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
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), !0).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
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
    if ((0, import_kolmafia6.toInt)(skill) == 7254 && getNumber("skillLevel7254") > 0)
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
    return getNumber("skillLevel".concat((0, import_kolmafia6.toInt)(skill)));
  }
  return import_kolmafia6.Skill.all().filter(function(skill) {
    return isPermable((0, import_kolmafia6.toInt)(skill));
  }).map(function(skill) {
    return [(0, import_kolmafia6.toInt)(skill), getStatus(skill), getLevel(skill)];
  });
}
function getHundredPercentFamiliars() {
  for (var history = (0, import_kolmafia6.visitUrl)("ascensionhistory.php?back=self&who=".concat((0, import_kolmafia6.myId)()), !1) + (0, import_kolmafia6.visitUrl)("ascensionhistory.php?back=self&prens13=1&who=".concat((0, import_kolmafia6.myId)()), !1), set = /* @__PURE__ */ new Set(), pattern = /alt="([^"]*?) \(100%\)/gm, m; (m = pattern.exec(history)) !== null; )
    set.add(import_kolmafia6.Familiar.get(m[1]));
  return set;
}
function checkFamiliars() {
  var hundredPercentFamiliars = getHundredPercentFamiliars();
  function getStatus(familiar) {
    return (0, import_kolmafia6.haveFamiliar)(familiar) ? FamiliarStatus.TERRARIUM : haveItem(familiar.hatchling) ? FamiliarStatus.HATCHLING : FamiliarStatus.NONE;
  }
  function getHundredPercent(familiar) {
    return hundredPercentFamiliars.has(familiar);
  }
  return import_kolmafia6.Familiar.all().map(function(familiar) {
    return [(0, import_kolmafia6.toInt)(familiar), getStatus(familiar), getHundredPercent(familiar)];
  });
}
function checkTrophies() {
  var _loadTrophies$data, _loadTrophies, page = (0, import_kolmafia6.visitUrl)("trophies.php");
  function getStatus(trophy) {
    return page.includes('"trophy'.concat(trophy.id, '"')) ? TrophyStatus.HAVE : TrophyStatus.NONE;
  }
  return ((_loadTrophies$data = (_loadTrophies = loadTrophies()) === null || _loadTrophies === void 0 ? void 0 : _loadTrophies.data) !== null && _loadTrophies$data !== void 0 ? _loadTrophies$data : []).map(function(trophy) {
    return [trophy.id, getStatus(trophy)];
  });
}
function haveOutfitPieces(outfit) {
  return (0, import_kolmafia6.outfitPieces)(outfit).every(function(piece) {
    return haveItem(piece);
  });
}
function checkOutfitTattoos(page) {
  var _loadTattoos;
  function getStatus(tattoo) {
    return Array.isArray(tattoo.image) ? TattooStatus.NONE : page.includes(tattoo.image) ? TattooStatus.HAVE : haveOutfitPieces(tattoo.name) ? TattooStatus.HAVE_OUTFIT : TattooStatus.NONE;
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
  return path.points === null ? 0 : Math.min((Array.isArray(path.points) ? path.points : [path.points]).map(function(k) {
    return getNumber(k);
  }).reduce(function(sum, v) {
    return sum + v;
  }, 0), path.maxPoints);
}
function checkPaths(tattoos) {
  var _loadPaths$data, _loadPaths;
  return ((_loadPaths$data = (_loadPaths = loadPaths()) === null || _loadPaths === void 0 ? void 0 : _loadPaths.data) !== null && _loadPaths$data !== void 0 ? _loadPaths$data : []).map(function(path) {
    var level = getPathLevel(path), items = path.items.map(function(i) {
      return haveItem(import_kolmafia6.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    }), equipment = path.equipment.map(function(i) {
      return haveItem(import_kolmafia6.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    }), tats = path.tattoos.map(function(tattoo) {
      if (Array.isArray(tattoo.image)) {
        for (var i = tattoo.image.length - 1; i >= 0; i--)
          if (tattoos.includes(tattoo.image[i]))
            return i + 1;
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
    timestamp: new Date().getTime(),
    revision: (0, import_kolmafia6.getRevision)()
  };
}
function main() {
  (0, import_kolmafia6.printHtml)("Deciding your fate..."), getBoolean("kingLiberated") || (0, import_kolmafia6.printHtml)("<b><font color=red>You are still in run so your greenboxes will probably be wrong</font></b>");
  var tattoos = (0, import_kolmafia6.visitUrl)("account_tattoos.php"), code = compress(_objectSpread2(_objectSpread2({
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
