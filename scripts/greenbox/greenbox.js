"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
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

// ../greenbox-data/lib/familiars.ts
var FamiliarStatus = /* @__PURE__ */ function(FamiliarStatus2) {
  return FamiliarStatus2[FamiliarStatus2.NONE = 0] = "NONE", FamiliarStatus2[FamiliarStatus2.HATCHLING = 1] = "HATCHLING", FamiliarStatus2[FamiliarStatus2.TERRARIUM = 2] = "TERRARIUM", FamiliarStatus2;
}({});
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
  }
  // boxed august scepter
], iotms_default = iotms;

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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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
  3411
  // Hodgman's cane
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
}({});
var compressItems = function(items) {
  return items.filter(function(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2), q = _ref3[1];
    return q > 0;
  }).map(function(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2), id = _ref5[0], q = _ref5[1];
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
  return Thwaitgold2[Thwaitgold2.Bee = 5141] = "Bee", Thwaitgold2[Thwaitgold2.Grasshopper = 5222] = "Grasshopper", Thwaitgold2[Thwaitgold2.Butterfly = 5392] = "Butterfly", Thwaitgold2[Thwaitgold2.StagBeetle = 5572] = "StagBeetle", Thwaitgold2[Thwaitgold2.WoollyBear = 5694] = "WoollyBear", Thwaitgold2[Thwaitgold2.Maggot = 5773] = "Maggot", Thwaitgold2[Thwaitgold2.PrayingMantis = 6045] = "PrayingMantis", Thwaitgold2[Thwaitgold2.Firefly = 6298] = "Firefly", Thwaitgold2[Thwaitgold2.GoliathBeetle = 6547] = "GoliathBeetle", Thwaitgold2[Thwaitgold2.Bookworm = 6676] = "Bookworm", Thwaitgold2[Thwaitgold2.Ant = 6899] = "Ant", Thwaitgold2[Thwaitgold2.Dragonfly = 7249] = "Dragonfly", Thwaitgold2[Thwaitgold2.WheelBug = 7498] = "WheelBug", Thwaitgold2[Thwaitgold2.Spider = 7668] = "Spider", Thwaitgold2[Thwaitgold2.Nit = 7935] = "Nit", Thwaitgold2[Thwaitgold2.ScarabBeetle = 8087] = "ScarabBeetle", Thwaitgold2[Thwaitgold2.Caterpillar = 8296] = "Caterpillar", Thwaitgold2[Thwaitgold2.Termite = 8556] = "Termite", Thwaitgold2[Thwaitgold2.Scorpion = 8984] = "Scorpion", Thwaitgold2[Thwaitgold2.Moth = 9031] = "Moth", Thwaitgold2[Thwaitgold2.Cockroach = 9099] = "Cockroach", Thwaitgold2[Thwaitgold2.Amoeba = 9346] = "Amoeba", Thwaitgold2[Thwaitgold2.Bug = 9488] = "Bug", Thwaitgold2[Thwaitgold2.TimeFly = 9525] = "TimeFly", Thwaitgold2[Thwaitgold2.Metabug = 9758] = "Metabug", Thwaitgold2[Thwaitgold2.Chigger = 9917] = "Chigger", Thwaitgold2[Thwaitgold2.MaskedHunter = 9941] = "MaskedHunter", Thwaitgold2[Thwaitgold2.Mosquito = 10184] = "Mosquito", Thwaitgold2[Thwaitgold2.Nymph = 10253] = "Nymph", Thwaitgold2[Thwaitgold2.BombardierBeetle = 10319] = "BombardierBeetle", Thwaitgold2[Thwaitgold2.BuzzyBeetle = 10470] = "BuzzyBeetle", Thwaitgold2[Thwaitgold2.KeyholeSpider = 10570] = "KeyholeSpider", Thwaitgold2[Thwaitgold2.Slug = 10601] = "Slug", Thwaitgold2[Thwaitgold2.ListeningBug = 10736] = "ListeningBug", Thwaitgold2[Thwaitgold2.QuantumBug = 10757] = "QuantumBug", Thwaitgold2[Thwaitgold2.FireBeetle = 10791] = "FireBeetle", Thwaitgold2[Thwaitgold2.Protozoa = 10894] = "Protozoa", Thwaitgold2[Thwaitgold2.Harvestman = 10918] = "Harvestman", Thwaitgold2[Thwaitgold2.MosquitoInAmber = 10950] = "MosquitoInAmber", Thwaitgold2[Thwaitgold2.AntiMoth = 11166] = "AntiMoth", Thwaitgold2[Thwaitgold2.SplendorBeetle = 11255] = "SplendorBeetle", Thwaitgold2;
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
    }).join(""), [r, currentId];
  }, ["", -3])[0].replace(/0+($|,)/, "$1");
};

// ../greenbox-data/lib/skills.ts
init_kolmafia_polyfill();
var SkillStatus = /* @__PURE__ */ function(SkillStatus2) {
  return SkillStatus2[SkillStatus2.NONE = 0] = "NONE", SkillStatus2[SkillStatus2.SOFTCORE = 1] = "SOFTCORE", SkillStatus2[SkillStatus2.HARDCORE = 2] = "HARDCORE", SkillStatus2;
}({});
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
}];

// ../greenbox-data/lib/tattoos.ts
var TattooStatus = /* @__PURE__ */ function(TattooStatus2) {
  return TattooStatus2[TattooStatus2.NONE = 0] = "NONE", TattooStatus2[TattooStatus2.HAVE_OUTFIT = 1] = "HAVE_OUTFIT", TattooStatus2[TattooStatus2.HAVE = 2] = "HAVE", TattooStatus2;
}({});
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

// ../greenbox-data/lib/classes.ts
init_kolmafia_polyfill();

// ../greenbox-data/data/classes.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/effects.ts
init_kolmafia_polyfill();

// ../greenbox-data/lib/index.ts
var VERSION = 2;
function compress(raw) {
  var compressed = {
    meta: compressMeta(raw.meta),
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    outfitTattoos: compressOutfitTattoos(raw.outfitTattoos),
    paths: compressPaths(raw.paths),
    iotms: compressIotMs(raw.iotms),
    items: compressItems(raw.items)
  }, compressedString = JSON.stringify(compressed);
  return encodeURIComponent(JSONCrush_default.crush(compressedString));
}

// src/greenbox.ts
var import_kolmafia7 = require("kolmafia");

// ../../node_modules/libram/dist/index.js
init_kolmafia_polyfill();

// ../../node_modules/libram/dist/lib.js
init_kolmafia_polyfill();
var import_kolmafia3 = require("kolmafia");

// ../../node_modules/libram/dist/property.js
init_kolmafia_polyfill();
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

// ../../node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");

// ../../node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length == "number") {
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
function chunk(array, chunkSize) {
  for (var result = [], i = 0; i < array.length; i += chunkSize)
    result.push(array.slice(i, i + chunkSize));
  return result;
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
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
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    var _ref3 = _slicedToArray4(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray4(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray4(_ref5, 1), i = _ref6[0];
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
var import_kolmafia4 = require("kolmafia");
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length == "number") {
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray7(arr) || _nonIterableSpread();
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
    return _arrayLikeToArray7(arr);
}
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
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive2(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Kmail = /* @__PURE__ */ function() {
  function Kmail2(rawKmail) {
    _classCallCheck(this, Kmail2), _defineProperty2(this, "id", void 0), _defineProperty2(this, "date", void 0), _defineProperty2(this, "type", void 0), _defineProperty2(this, "senderId", void 0), _defineProperty2(this, "senderName", void 0), _defineProperty2(this, "rawMessage", void 0);
    var date = new Date(rawKmail.localtime);
    date.setFullYear(date.getFullYear() + 100), this.id = Number(rawKmail.id), this.date = date, this.type = rawKmail.type, this.senderId = Number(rawKmail.fromid), this.senderName = rawKmail.fromname, this.rawMessage = rawKmail.message;
  }
  return _createClass(Kmail2, [{
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
      return new Map(Object.entries((0, import_kolmafia4.extractItems)(this.rawMessage)).map(function(_ref) {
        var _ref2 = _slicedToArray5(_ref, 2), itemName = _ref2[0], quantity = _ref2[1];
        return [import_kolmafia4.Item.get(itemName), quantity];
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
      return (0, import_kolmafia4.extractMeat)(this.rawMessage);
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
      return JSON.parse((0, import_kolmafia4.visitUrl)("api.php?what=kmail&for=libram&count=".concat(count))).map(Kmail2.parse);
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
      var _results$match$, _results$match, results = (0, import_kolmafia4.visitUrl)("messages.php?the_action=delete&box=Inbox&pwd&".concat(kmails.map(function(k) {
        return "sel".concat(k.id, "=on");
      }).join("&")));
      return Number((_results$match$ = (_results$match = results.match(/<td>(\d) messages? deleted.<\/td>/)) === null || _results$match === void 0 ? void 0 : _results$match[1]) !== null && _results$match$ !== void 0 ? _results$match$ : 0);
    }
  }, {
    key: "_genericSend",
    value: function(to, message, items, meat, chunkSize, constructUrl, successString) {
      var m = meat, sendableItems = _toConsumableArray(arrayToCountedMap(items).entries()).filter(function(_ref3) {
        var _ref4 = _slicedToArray5(_ref3, 1), item = _ref4[0];
        return (0, import_kolmafia4.isGiftable)(item);
      }), result = !0, chunks = chunk(sendableItems, chunkSize), _iterator = _createForOfIteratorHelper3(chunks.length > 0 ? chunks : [null]), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var c = _step.value, itemsQuery = c === null ? [] : c.map(function(_ref5, index) {
            var _ref6 = _slicedToArray5(_ref5, 2), item = _ref6[0], quantity = _ref6[1];
            return "whichitem".concat(index + 1, "=").concat(item.id, "&howmany").concat(index + 1, "=").concat(quantity);
          }), r = (0, import_kolmafia4.visitUrl)(constructUrl(m, itemsQuery.join("&"), itemsQuery.length));
          if (r.includes("That player cannot receive Meat or items"))
            return Kmail2.gift(to, message, items, meat);
          m = 0, result && (result = r.includes(successString));
        }
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
      return Kmail2._genericSend(to, message, items, meat, 11, function(meat2, itemsQuery) {
        return "sendmessage.php?action=send&pwd&towho=".concat(to, "&message=").concat(message).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(meat2);
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
      var message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", items = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], meat = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, insideNote = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "", baseUrl = "town_sendgift.php?action=Yep.&pwd&fromwhere=0&note=".concat(message, "&insidenote=").concat(insideNote, "&towho=").concat(to);
      return Kmail2._genericSend(to, message, items, meat, 3, function(m, itemsQuery, chunkSize) {
        return "".concat(baseUrl, "&whichpackage=").concat(chunkSize).concat(itemsQuery ? "&".concat(itemsQuery) : "", "&sendmeat=").concat(m);
      }, ">Package sent.</");
    }
  }]), Kmail2;
}();

// src/iotms.ts
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");

// src/utils.ts
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");
function haveItem(item) {
  return [import_kolmafia5.availableAmount, import_kolmafia5.closetAmount, import_kolmafia5.displayAmount, import_kolmafia5.equippedAmount, import_kolmafia5.itemAmount, import_kolmafia5.storageAmount].map(function(f) {
    return f(item);
  }).some(function(q) {
    return q > 0;
  });
}

// src/iotms.ts
var arrayOf = function(items) {
  return Array.isArray(items) ? items : [items];
};
function haveBound(iotm, options) {
  var _options$force;
  if ((_options$force = options.force) !== null && _options$force !== void 0 && _options$force.includes(iotm.id))
    return !0;
  var boxed = import_kolmafia6.Item.get(iotm.id);
  switch (iotm.type) {
    case "campground": {
      var bound = iotm.item ? import_kolmafia6.Item.get(iotm.item) : null;
      return bound && (haveItem(bound) || haveInCampground(bound)) || haveInCampground(boxed);
    }
    case "custom": {
      switch (iotm.id) {
        case 5790:
          return haveItem(boxed) || haveItem(import_kolmafia6.Item.get("right bear arm")) && haveItem(import_kolmafia6.Item.get("left bear arm"));
      }
      return !1;
    }
    case "eudora":
      return (0, import_kolmafia6.xpath)((0, import_kolmafia6.visitUrl)("account.php?tab=correspondence"), '//select[@name="whichpenpal"]/option/@value').includes(iotm.eudoraId.toString());
    case "familiar":
      return arrayOf(iotm.familiar).map(function(f) {
        return import_kolmafia6.Familiar.get(f);
      }).some(function(f) {
        return (0, import_kolmafia6.haveFamiliar)(f);
      });
    case "item":
      return flat(arrayOf(iotm.item).map(function(i) {
        return import_kolmafia6.Item.get(i);
      }).map(function(i) {
        var group = getFoldGroup(i);
        return group.length > 0 ? group : i;
      })).some(function(i) {
        return haveItem(i);
      });
    case "preference":
      return getBoolean(iotm.preference);
    case "skill": {
      var skill = import_kolmafia6.Skill.get(iotm.skill);
      return (0, import_kolmafia6.haveSkill)(skill);
    }
    case "vip":
      return haveItem(import_kolmafia6.Item.get("Clan VIP Lounge Key"));
  }
}
function getIotMStatus(iotm) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (haveBound(iotm, options))
    return IotMStatus.BOUND;
  var boxed = import_kolmafia6.Item.get(iotm.id);
  return haveItem(boxed) ? IotMStatus.BOXED : IotMStatus.NONE;
}

// src/greenbox.ts
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
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty3(obj, key, value) {
  return key = _toPropertyKey3(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive3(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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
    return [id, (_options$force = options.force) !== null && _options$force !== void 0 && _options$force.includes(id) || haveItem(import_kolmafia7.Item.get(id)) ? ItemStatus.HAVE : ItemStatus.NONE];
  });
}
function checkSkills() {
  var permedSkills = (0, import_kolmafia7.getPermedSkills)();
  function getStatus(skill) {
    if ((0, import_kolmafia7.toInt)(skill) === 7254 && getNumber("skillLevel7254") > 0)
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
    return getNumber("skillLevel".concat((0, import_kolmafia7.toInt)(skill)));
  }
  return import_kolmafia7.Skill.all().filter(function(skill) {
    return isPermable((0, import_kolmafia7.toInt)(skill));
  }).map(function(skill) {
    return [(0, import_kolmafia7.toInt)(skill), getStatus(skill), getLevel(skill)];
  });
}
function getHundredPercentFamiliars() {
  for (var history = (0, import_kolmafia7.visitUrl)("ascensionhistory.php?back=self&who=".concat((0, import_kolmafia7.myId)()), !1) + (0, import_kolmafia7.visitUrl)("ascensionhistory.php?back=self&prens13=1&who=".concat((0, import_kolmafia7.myId)()), !1), set = /* @__PURE__ */ new Set(), pattern = /alt="([^"]*?) \(100%\)/gm, m; (m = pattern.exec(history)) !== null; )
    set.add(import_kolmafia7.Familiar.get(m[1]));
  return set;
}
function checkFamiliars() {
  var hundredPercentFamiliars = getHundredPercentFamiliars();
  function getStatus(familiar) {
    return (0, import_kolmafia7.haveFamiliar)(familiar) ? FamiliarStatus.TERRARIUM : familiar.hatchling !== import_kolmafia7.Item.none && haveItem(familiar.hatchling) ? FamiliarStatus.HATCHLING : FamiliarStatus.NONE;
  }
  function getHundredPercent(familiar) {
    return hundredPercentFamiliars.has(familiar);
  }
  return import_kolmafia7.Familiar.all().map(function(familiar) {
    return [(0, import_kolmafia7.toInt)(familiar), getStatus(familiar), getHundredPercent(familiar)];
  });
}
function checkTrophies() {
  var _loadTrophies$data, _loadTrophies, page = (0, import_kolmafia7.visitUrl)("trophies.php");
  function getStatus(trophy) {
    return page.includes('"trophy'.concat(trophy.id, '"')) ? TrophyStatus.HAVE : TrophyStatus.NONE;
  }
  return ((_loadTrophies$data = (_loadTrophies = loadTrophies()) === null || _loadTrophies === void 0 ? void 0 : _loadTrophies.data) !== null && _loadTrophies$data !== void 0 ? _loadTrophies$data : []).map(function(trophy) {
    return [trophy.id, getStatus(trophy)];
  });
}
function haveOutfitPieces(outfit) {
  return (0, import_kolmafia7.outfitPieces)(outfit).every(function(piece) {
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
      return haveItem(import_kolmafia7.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
    }), equipment = path.equipment.map(function(i) {
      return haveItem(import_kolmafia7.Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE;
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
    name: (0, import_kolmafia7.myName)(),
    id: (0, import_kolmafia7.myId)(),
    timestamp: (/* @__PURE__ */ new Date()).getTime(),
    revision: (0, import_kolmafia7.getRevision)(),
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
    (0, import_kolmafia7.printHtml)("\n      Usage:\n      <table border=0>\n      <tr><td>greenbox [...options]</td></tr>\n      </table>\n      Options:\n      <table border=0>\n      <tr><td>--help -h</td><td>See this message</td></tr>\n      <tr><td>--wipe -w</td><td>Wipe your public profile</td></tr>\n      <tr><td>--private -w</td><td>Generate a link without updating your public profile</td></tr>\n      </table>\n    ");
    return;
  }
  if (hasFlag(args, "--wipe", "-w")) {
    Kmail.send(3501234, "GREENBOX:WIPE"), (0, import_kolmafia7.printHtml)("Your request to wipe your public profile has been sent, you'll receive a Kmail confirming success soon!");
    return;
  }
  var keepPrivate = hasFlag(args, "--private", "-p");
  if ((0, import_kolmafia7.printHtml)("Deciding your fate..."), (0, import_kolmafia7.inMultiFight)() || (0, import_kolmafia7.handlingChoice)() || (0, import_kolmafia7.currentRound)() !== 0) {
    (0, import_kolmafia7.printHtml)("<b><font color=red>You are in a combat or a choice adventure so your greenboxes will fail. Exiting...</font></b>");
    return;
  }
  getBoolean("kingLiberated") || (0, import_kolmafia7.printHtml)("<b><font color=red>You are still in run so your greenboxes will probably be wrong</font></b>");
  var tattoos = (0, import_kolmafia7.visitUrl)("account_tattoos.php"), code = compress(_objectSpread2(_objectSpread2({
    meta: checkMeta(),
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies()
  }, checkTattoos(tattoos)), {}, {
    paths: checkPaths(tattoos),
    iotms: checkIotMs(),
    items: checkItems()
  })), link = "https://greenbox.loathers.net/?".concat(keepPrivate ? "d=".concat(code) : "u=".concat((0, import_kolmafia7.myId)()));
  keepPrivate || Kmail.send(3501234, "GREENBOX:".concat(code)), (0, import_kolmafia7.printHtml)('All done! To see your greenboxes, visit: <a href="'.concat(link, '">').concat(link, "</a>"));
}
module.exports.main = main;
