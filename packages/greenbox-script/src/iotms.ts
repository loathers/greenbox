import { loadIotms } from "greenbox-data";
import {
  availableAmount,
  Familiar,
  xpath,
  haveFamiliar,
  Item,
  Skill,
  visitUrl,
  floristAvailable,
} from "kolmafia";
import {
  $familiar,
  get,
  $item,
  $items,
  $skill,
  sum,
  getFoldGroup,
  haveInCampground,
  have as _have,
} from "libram";
import { BooleanProperty } from "libram/dist/propertyTypes";

// Exporting constants for months and years. 0 is for special casing.
const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const years = [
  2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022,
];

// Exporting constants for the Eudora options
const eudorae = [
  "My Own Pen Pal kit",
  "GameInformPowerDailyPro subscription card",
  "Xi Receiver Unit",
  "New-You Club Membership Form",
  "Our Daily Candles™ order form",
] as string[];

// Exporting types coercing numbers within the aforementioned ranges.
type Month = typeof months[number];
type Year = typeof years[number];

/**
 * Interface for IOTM output. Contains the item, a boolean for ownership, and a counting function.
 */
export interface IOTM {
  storeItem: Item;
  boundItem?: Item | Familiar;
  have: boolean;
  count: number;
}

/**
 * FoldableIOTM extends IOTM by adding "itemOptions", an array of possible item options.
 */
export interface FoldableIOTM extends IOTM {
  itemOptions: Item[];
}

/**
 * Helper function for building MrStore() familiar records.
 * @param fam The familiar you want to create an IOTM record for.
 * @returns An IOTM object where the hatchling keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordFamiliarIOTM(fam: Familiar): IOTM {
  return {
    storeItem: fam.hatchling,
    boundItem: fam,
    have: haveFamiliar(fam),
    count: availableAmount(fam.hatchling),
  };
}

/**
 * Helper function for building MrStore() itemment records.
 * @param item The item that appeared in Mr. Store
 * @param boundItem If the bound form is distinct, populate this with the bound item.
 * @returns An IOTM object where the Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordItemIOTM(item: Item, boundItem = $item`cob of corn`): IOTM {
  if (boundItem === $item`cob of corn`) {
    return {
      storeItem: item,
      have: availableAmount(item) > 0,
      count: availableAmount(item),
    };
  } else {
    return {
      storeItem: item,
      boundItem: boundItem,
      have: availableAmount(boundItem) > 0,
      count: availableAmount(item),
    };
  }
}

/**
 * Helper function for building MrStore() skillbook records.
 * @param skill The skill you gain after utilizing the item.
 * @param skillBook The skillbook that appeared in Mr. Store.
 * @returns An IOTM object where the Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordSkillIOTM(skill: Skill, skillBook: Item): IOTM {
  return {
    storeItem: skillBook,
    have: _have(skill),
    count: availableAmount(skillBook),
  };
}

/**
 * Helper function for building MrStore() records for foldable items.
 * @param foldable The foldable that actually occurred in Mr. Store
 * @returns An IOTM object where the Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordFoldableIOTM(foldable: Item): FoldableIOTM {
  const allFolds = getFoldGroup(foldable);

  return {
    storeItem: foldable,
    itemOptions: allFolds,
    have: allFolds.some((item) => _have(item)), // tests all items in the folds for if you have any of them
    count: sum(allFolds, (item) => availableAmount(item)),
  };
}

/**
 * Helper function for building MrStore() records for vip key items.
 * @param vipItem The VIP item for the respective month
 * @returns An IOTM object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count of the VIP crate item
 */
export function recordVIPIOTM(vipItem: Item): IOTM {
  return {
    storeItem: vipItem,
    have: _have($item`Clan VIP Lounge Key`),
    count: availableAmount(vipItem),
  };
}

/**
 * Helper function for building MrStore() records for garden items.
 * @param catalog The $item record of the unbound version of the garden that appeared in Mr. Store
 * @param seeds The $item record of the seeds for the garden in question
 * @returns An IOTM object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordGardenIOTM(catalog: Item, seeds: Item): IOTM {
  return {
    storeItem: catalog,
    boundItem: seeds,
    have: _have(seeds) || haveInCampground(seeds),
    count: availableAmount(catalog),
  };
}

/**
 * Helper function for building MrStore() records for Eudora items.
 * @param eudoraItem The $item record of the item that spawns the eudora
 * @returns An IOTM object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordEudoraIOTM(eudora: Item): IOTM {
  const eudoraNumber = 1 + eudorae.indexOf(eudora.name);
  const eudoraList = xpath(
    visitUrl("account.php?tab=correspondence"),
    `//select[@name="whichpenpal"]/option/@value`
  );
  let haveEudora: boolean;

  // Return as false if passed a non-eudora
  if (eudoraNumber == 0) haveEudora = false;
  else haveEudora = eudoraList.includes(eudoraNumber.toFixed(0));

  return {
    storeItem: eudora,
    have: haveEudora,
    count: availableAmount(eudora),
  };
}

/**
 * Helper function for building MrStore() records for workshed items.
 * @param voucher The $item record of the unbound version of the workshed that appeared in Mr. Store
 * @param workshedItem The $item record of the specific item used to place the thing in your workshed. Optional; if it is equivalent to the unbound version, leave this blank.
 * @returns An IOTM object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordWorkshedIOTM(voucher: Item, workshedItem?: Item): IOTM {
  // For DNA/Mayo, the workshed item -is- the voucher.
  workshedItem ??= voucher;

  return {
    storeItem: voucher,
    boundItem: workshedItem,
    have: _have(voucher) || _have(workshedItem) || haveInCampground(workshedItem),
    count: availableAmount(voucher),
  };
}

/**
 * Helper function for building MrStore() records for charters, realms, and other pref-tracked IOTMs.
 * @param accessUnlocker The $item record of the unbound version of the infinite access unlocker
 * @param mafiaPref The mafia preference associated with eternal access to the particular realm
 * @returns An IOTM object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordPreferenceIOTM(accessUnlocker: Item, mafiaPref: BooleanProperty): IOTM {
  return {
    storeItem: accessUnlocker,
    have: get(mafiaPref),
    count: availableAmount(accessUnlocker),
  };
}
const iotmList = [
  recordFamiliarIOTM($familiar`Jill-O-Lantern`),
  recordFamiliarIOTM($familiar`Jill-O-Lantern`),
  recordFamiliarIOTM($familiar`Hand Turkey`),
  recordFamiliarIOTM($familiar`Crimbo Elf`),

  recordFamiliarIOTM($familiar`Baby Yeti`),
  recordFamiliarIOTM($familiar`Feather Boa Constrictor`),
  recordItemIOTM($item`lucky Tam O'Shanter`),
  recordFamiliarIOTM($familiar`Personal Raincloud`),
  recordItemIOTM($item`miniature gravy-covered maypole`),
  recordFamiliarIOTM($familiar`Inflatable Dodecapede`),
  recordItemIOTM($item`wax lips`),
  recordFamiliarIOTM($familiar`Pygmy Bugbear Shaman`),
  recordItemIOTM($item`Jekyllin hide belt`),
  recordFamiliarIOTM($familiar`Doppelshifter`),
  recordFamiliarIOTM($familiar`Temporal Riftlet`),
  recordFamiliarIOTM($familiar`Sweet Nutcracker`),

  recordSkillIOTM($skill`Summon Snowcones`, $item`Tome of Snowcone Summoning`),
  recordFoldableIOTM($item`iceberglet`),
  recordFamiliarIOTM($familiar`Wild Hare`),
  recordSkillIOTM(
    $skill`Summon Hilarious Objects`,
    $item`McPhee's Grimoire of Hilarious Object Summoning`
  ),
  recordFamiliarIOTM($familiar`Spirit Hobo`),
  recordFamiliarIOTM($familiar`Astral Badger`),
  recordItemIOTM($item`jewel-eyed wizard hat`),
  recordFamiliarIOTM($familiar`Comma Chameleon`),
  recordItemIOTM($item`Travoltan trousers`),
  recordItemIOTM($item`plastic pumpkin bucket`),
  recordItemIOTM($item`pilgrim shield`),
  recordFamiliarIOTM($familiar`Ancient Yuletide Troll`),

  recordFoldableIOTM($item`Great Ball of Frozen Fire`),
  recordSkillIOTM($skill`Summon Candy Heart`, $item`Libram of Candy Heart Summoning`),
  recordFamiliarIOTM($familiar`Dandy Lion`),
  recordFamiliarIOTM($familiar`Penguin Goodfella`),
  recordItemIOTM($item`Mayflower bouquet`),
  recordFamiliarIOTM($familiar`Green Pixie`),
  recordItemIOTM($item`bottle-rocket crossbow`),
  recordFamiliarIOTM($familiar`Wizard Action Figure`),
  recordItemIOTM($item`navel ring of navel gazing`),
  recordFamiliarIOTM($familiar`Gluttonous Green Ghost`),
  recordItemIOTM($item`V for Vivala mask`),
  recordFamiliarIOTM($familiar`Crimbo P. R. E. S. S. I. E.`),

  recordSkillIOTM($skill`Summon Party Favor`, $item`Libram of Divine Favors`),
  recordFoldableIOTM($item`naughty origami kit`),
  recordFamiliarIOTM($familiar`Mad Hatrack`),
  recordSkillIOTM($skill`Summon Tasteful Items`, $item`Sp'n-Zor's Grimoire of "Tasteful" Gifts`),
  recordItemIOTM($item`packet of mayfly bait`, $item`mayfly bait necklace`),
  recordFamiliarIOTM($familiar`Llama Lama`),
  recordItemIOTM($item`little box of fireworks`),
  recordFamiliarIOTM($familiar`Cotton Candy Carnie`),
  recordItemIOTM($item`haiku katana`),
  recordFamiliarIOTM($familiar`Disembodied Hand`),
  recordSkillIOTM($skill`Summon Stickers`, $item`Scratch 'n' Sniff Sticker Tome`),
  recordFamiliarIOTM($familiar`Sugar Fruit Fairy`),

  // The foldable condition does not include the spooky putty monster, so this needs special casing.
  {
    storeItem: $item`container of Spooky Putty`,
    itemOptions: getFoldGroup($item`container of Spooky Putty`),
    have:
      getFoldGroup($item`container of Spooky Putty`).some((item) => _have(item)) ||
      availableAmount($item`spooky putty monster`) > 1,
    count: sum(getFoldGroup($item`container of Spooky Putty`), (item) => availableAmount(item)),
  } as FoldableIOTM,
  recordSkillIOTM($skill`Summon Love Song`, $item`Libram of Love Songs`),
  recordFamiliarIOTM($familiar`Frumious Bandersnatch`),
  recordItemIOTM($item`elvish sunglasses`),
  recordVIPIOTM($item`Clan pool table`),
  recordFamiliarIOTM($familiar`Baby Sandworm`),
  recordItemIOTM($item`Bag o' Tricks`),
  recordFamiliarIOTM($familiar`He-Boulder`),
  recordSkillIOTM($skill`Summon Sugar Sheets`, $item`Tome of Sugar Shummoning`),
  recordFamiliarIOTM($familiar`Squamous Gibberer`),
  recordItemIOTM($item`moveable feast`),
  recordFamiliarIOTM($familiar`Stocking Mimic`),

  recordFoldableIOTM($item`stinky cheese ball`),
  recordSkillIOTM($skill`Summon BRICKOs`, $item`Libram of BRICKOs`),
  recordVIPIOTM($item`Clan looking glass`),
  recordFamiliarIOTM($familiar`Baby Bugged Bugbear`),
  recordItemIOTM($item`Crown of Thrones`),
  recordFamiliarIOTM($familiar`Rogue Program`),
  recordItemIOTM($item`Juju Mojo Mask`),
  recordFamiliarIOTM($familiar`Mini-Hipster`),
  recordItemIOTM($item`Greatest American Pants`),
  recordFamiliarIOTM($familiar`Knob Goblin Organ Grinder`),
  recordGardenIOTM($item`Grumpy Bumpkin's Pumpkin Seed Catalog`, $item`packet of pumpkin seeds`),
  recordFamiliarIOTM($familiar`Robot Reindeer`),

  recordFoldableIOTM($item`Loathing Legion Knife`),
  recordFamiliarIOTM($familiar`Obtuse Angel`),
  recordSkillIOTM($skill`Summon Alice's Army Cards`, $item`Sorcerers of the Shore Grimoire`),
  recordVIPIOTM($item`Clan shower`),
  recordEudoraIOTM($item`My Own Pen Pal kit`),
  recordFamiliarIOTM($familiar`Li'l Xenomorph`),
  recordItemIOTM($item`Operation Patriot Shield`),
  recordFamiliarIOTM($familiar`Pair of Stomping Boots`),
  recordSkillIOTM($skill`Summon Clip Art`, $item`Tome of Clip Art`),
  recordItemIOTM($item`Make-Your-Own-Vampire-Fangs kit`, $item`plastic vampire fangs`),
  recordFamiliarIOTM($familiar`Fancypants Scarecrow`),
  recordGardenIOTM(
    $item`Mint Salton Pepper's Peppermint Seed Catalog`,
    $item`Peppermint Pip Packet`
  ),

  recordSkillIOTM($skill`Summon Resolutions`, $item`Libram of Resolutions`),
  recordFoldableIOTM($item`can of Rain-Doh`),
  recordFamiliarIOTM($familiar`Happy Medium`),
  recordFoldableIOTM($item`Boris's Helm`),
  recordVIPIOTM($item`Olympic-sized Clan crate`),
  recordFamiliarIOTM($familiar`Artistic Goth Kid`),
  recordItemIOTM($item`Camp Scout backpack`),
  recordFamiliarIOTM($familiar`Reagnimated Gnome`),
  // Special casing required because of how bear arms can re-package themselves or be separated.
  {
    storeItem: $item`box of bear arms`,
    have:
      _have($item`box of bear arms`) ||
      (_have($item`right bear arm`) && _have($item`left bear arm`)),
    count: sum($items`box of bear arms, right bear arm, left bear arm`, availableAmount),
  },
  recordGardenIOTM(
    $item`Pete & Jackie's Dragon Tooth Emporium Catalog`,
    $item`packet of dragon's teeth`
  ),
  recordFamiliarIOTM($familiar`Nanorhino`),
  recordSkillIOTM($skill`Summon Geeky Gifts`, $item`Thinknerd's Grimoire of Geeky Gifts`),

  recordItemIOTM($item`Snow Suit`),
  recordEudoraIOTM($item`GameInformPowerDailyPro subscription card`),
  recordFoldableIOTM($item`Jarlsberg's Pan`),
  recordSkillIOTM($skill`Summon Taffy`, $item`Libram of Pulled Taffy`),
  // Florist Friars is a living disaster and requires special casing because of this.
  {
    storeItem: $item`Order of the Green Thumb Order Form`,
    have: floristAvailable(),
    count: availableAmount($item`Order of the Green Thumb Order Form`),
  },
  recordFamiliarIOTM($familiar`Mini-Adventurer`),
  recordVIPIOTM($item`Clan hot dog stand`),
  recordItemIOTM($item`Folder Holder`, $item`over-the-shoulder Folder Holder`),
  recordFamiliarIOTM($familiar`Steam-Powered Cheerleader`),
  recordFamiliarIOTM($familiar`Reanimated Reanimator`),
  recordItemIOTM($item`Pantsgiving`),
  recordSkillIOTM($skill`Summon Smithsness`, $item`The Smith's Tome`),

  recordGardenIOTM($item`Discontent™ Winter Garden Catalog`, $item`packet of winter seeds`),
  recordItemIOTM($item`Buddy Bjorn`),
  recordFoldableIOTM($item`Sneaky Pete's leather jacket`),
  recordWorkshedIOTM($item`Little Geneticist DNA-Splicing Lab`),
  recordPreferenceIOTM($item`airplane charter: Spring Break Beach`, "sleazeAirportAlways"),
  recordFamiliarIOTM($familiar`Galloping Grill`),
  recordVIPIOTM($item`Clan speakeasy`),
  recordSkillIOTM($skill`Summon Confiscated Things`, $item`The Confiscator's Grimoire`),
  recordItemIOTM($item`Thor's Pliers`),
  recordPreferenceIOTM($item`airplane charter: Conspiracy Island`, "spookyAirportAlways"),
  recordFamiliarIOTM($familiar`Fist Turkey`),
  recordFamiliarIOTM($familiar`Crimbo Shrub`),

  recordPreferenceIOTM($item`Chateau Mantegna room key`, "chateauAvailable"),
  recordPreferenceIOTM($item`bottle of lovebug pheromones`, "lovebugsUnlocked"),
  recordItemIOTM($item`Ed the Undying Exhibit Crate`, $item`The Crown of Ed the Undying`),
  recordPreferenceIOTM($item`airplane charter: Dinseylandfill`, "stenchAirportAlways"),
  recordWorkshedIOTM($item`portable Mayo Clinic`),
  recordFamiliarIOTM($familiar`Puck Man`),
  recordItemIOTM($item`Pack of Every Card`, $item`Deck of Every Card`),
  recordPreferenceIOTM($item`airplane charter: That 70s Volcano`, "hotAirportAlways"),
  recordPreferenceIOTM($item`shrine to the Barrel god`, "barrelShrineUnlocked"),
  // The doghouse record technically shows as green if they have the doghouse but have not used it. I don't care though!,
  recordWorkshedIOTM($item`haunted doghouse`),
  recordPreferenceIOTM($item`airplane charter: The Glaciest`, "coldAirportAlways"),
  recordFamiliarIOTM($familiar`Machine Elf`),

  recordPreferenceIOTM($item`X-32-F snowman crate`, "snojoAvailable"),
  // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
  recordPreferenceIOTM($item`LT&T telegraph office deed`, "telegraphOfficeAvailable"),
  recordWorkshedIOTM($item`Witchess Set`),
  recordVIPIOTM($item`Clan Floundry`),
  recordFamiliarIOTM($familiar`intergnat`),
  recordWorkshedIOTM($item`Source Terminal`),
  recordPreferenceIOTM($item`detective school application`, "hasDetectiveSchool"),
  recordItemIOTM($item`DIY protonic accelerator kit`, $item`protonic accelerator pack`),
  recordItemIOTM($item`Dear Past Self Package`, $item`Time-Spinner`),
  recordFamiliarIOTM($familiar`Trick-or-Treating Tot`),
  recordGardenIOTM($item`Granny Tood's Thanksgarden Catalog`, $item`packet of thanksgarden seeds`),
  // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
  recordPreferenceIOTM($item`Build-a-City Gingerbread kit`, "gingerbreadCityAvailable"),

  recordFamiliarIOTM($familiar`Space Jellyfish`),
  // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
  recordPreferenceIOTM($item`heart-shaped crate`, "loveTunnelAvailable"),
  recordFamiliarIOTM($familiar`Robortender`),
  recordPreferenceIOTM($item`Spacegate access badge`, "spacegateAlways"),
  recordEudoraIOTM($item`New-You Club Membership Form`),
  recordItemIOTM($item`suspicious package`, $item`Kremlin's Greatest Briefcase`),
  recordWorkshedIOTM($item`LI-11 Motor Pool voucher`, $item`Asdon Martin keyfob`),
  recordSkillIOTM($skill`Meteor Lore`, $item`Pocket Meteor Guide`),
  recordItemIOTM($item`corked genie bottle`, $item`genie bottle`),
  recordFamiliarIOTM($familiar`XO Skeleton`),
  recordItemIOTM($item`pantogram`, $item`portable pantogram`),
  recordItemIOTM($item`locked mumming trunk`, $item`mumming trunk`),

  recordItemIOTM($item`January's Garbage Tote (unopened)`, $item`January's Garbage Tote`),
  recordVIPIOTM($item`Clan Carnival Game`),
  recordGardenIOTM(
    $item`Pokéfam Guide to Capturing All of Them`,
    $item`packet of tall grass seeds`
  ),
  recordPreferenceIOTM($item`FantasyRealm membership packet`, "frAlways"),
  recordFamiliarIOTM($familiar`God Lobster`),
  recordItemIOTM($item`SongBoom™ BoomBox Box`, $item`SongBoom™ BoomBox`),
  recordFamiliarIOTM($familiar`Cat Burglar`),
  recordItemIOTM(
    $item`Bastille Battalion control rig crate`,
    $item`Bastille Battalion control rig`
  ),
  recordPreferenceIOTM($item`Neverending Party invitation envelope`, "neverendingPartyAlways"),
  recordItemIOTM($item`latte lovers club card`, $item`latte lovers member's mug`),
  recordPreferenceIOTM($item`voter registration form`, "voteAlways"),
  // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
  recordPreferenceIOTM($item`Boxing Day care package`, "daycareOpen"),

  recordItemIOTM($item`Kramco Industries packing carton`, $item`Kramco Sausage-o-Matic™`),
  recordItemIOTM($item`mint condition Lil' Doctor™ bag`, $item`Lil' Doctor™ bag`),
  recordItemIOTM($item`vampyric cloake pattern`, $item`vampyric cloake`),
  recordPreferenceIOTM($item`PirateRealm membership packet`, "prAlways"),
  recordItemIOTM($item`Fourth of May Cosplay Saber kit`, $item`Fourth of May Cosplay Saber`),
  recordItemIOTM($item`rune-strewn spoon cocoon`, $item`hewn moon-rune spoon`),
  recordItemIOTM($item`Beach Comb Box`, $item`Beach Comb`),
  recordPreferenceIOTM($item`Distant Woods Getaway Brochure`, "getawayCampsiteUnlocked"),
  recordFamiliarIOTM($familiar`Pocket Professor`),
  recordItemIOTM(
    $item`Unopened Eight Days a Week Pill Keeper`,
    $item`Eight Days a Week Pill Keeper`
  ),
  recordWorkshedIOTM($item`unopened diabolic pizza cube box`, $item`diabolic pizza cube`),
  recordFamiliarIOTM($familiar`Red-Nosed Snapper`),

  recordItemIOTM($item`unopened Bird-a-Day calendar`, $item`Bird-a-Day calendar`),
  recordItemIOTM($item`mint-in-box Powerful Glove`, $item`Powerful Glove`),
  recordGardenIOTM($item`Better Shrooms and Gardens catalog`, $item`packet of mushroom spores`),
  recordFamiliarIOTM($familiar`Left-Hand Man`),
  recordItemIOTM($item`Guzzlr application`, $item`Guzzlr tablet`),
  recordItemIOTM($item`bag of Iunion stones`, $item`Iunion Crown`),
  recordFamiliarIOTM($familiar`Melodramedary`),
  recordItemIOTM($item`packaged SpinMaster™ lathe`, $item`SpinMaster™ lathe`),
  recordItemIOTM($item`Bagged Cargo Cultist Shorts`, $item`Cargo Cultist Shorts`),
  recordSkillIOTM($skill`Comprehensive Cartography`, $item`Comprehensive Cartographic Compendium`),
  recordItemIOTM(
    $item`packaged knock-off retro superhero cape`,
    $item`unwrapped knock-off retro superhero cape`
  ),
  // While cute, the ghosts need weird casing because it's 3-in-1.
  {
    storeItem: $item`box o' ghosts`,
    have:
      _have($familiar`Ghost of Crimbo Commerce`) ||
      _have($familiar`Ghost of Crimbo Carols`) ||
      _have($familiar`Ghost of Crimbo Cheer`),
    count: availableAmount($item`box o' ghosts`),
  },

  recordItemIOTM($item`packaged miniature crystal ball`, $item`miniature crystal ball`),
  recordSkillIOTM($skill`Emotionally Chipped`, $item`emotion chip`),
  recordItemIOTM($item`power seed`, $item`potted power plant`),
  recordItemIOTM($item`packaged backup camera`, $item`backup camera`),
  recordFamiliarIOTM($familiar`Shorter-Order Cook`),
  recordItemIOTM($item`packaged familiar scrapbook`, $item`familiar scrapbook`),
  recordVIPIOTM($item`clan underground fireworks shop`),
  recordEudoraIOTM($item`Our Daily Candles™ order form`),
  recordItemIOTM($item`packaged industrial fire extinguisher`, $item`industrial fire extinguisher`),
  recordFamiliarIOTM($familiar`Vampire Vintner`),
  recordItemIOTM($item`packaged Daylight Shavings Helmet`, $item`Daylight Shavings Helmet`),
  recordWorkshedIOTM($item`packaged cold medicine cabinet`, $item`cold medicine cabinet`),

  recordPreferenceIOTM($item`undrilled cosmic bowling ball`, "hasCosmicBowlingBall"),
  recordItemIOTM($item`combat lover's locket lockbox`, $item`combat lover's locket`),
  recordFamiliarIOTM($familiar`Grey Goose`),
  recordItemIOTM($item`undamaged Unbreakable Umbrella`, $item`Unbreakable Umbrella`),
  recordPreferenceIOTM($item`MayDay™ contract`, "hasMaydayContract"),
  recordItemIOTM($item`packaged June cleaver`, $item`June cleaver`),
  recordItemIOTM($item`designer sweatpants (new old stock)`, $item`designer sweatpants`),
  recordItemIOTM($item`unopened tiny stillsuit`, $item`tiny stillsuit`),
];

/**
 * A large JSON style array, keyed by an item ID string and using IOTM interface 
 * for each IOTM that ever existed.
 */
export const MrStoreMonthly: { [item: string]: IOTM } = {};

// Iterate through iotmList and populate MrStoreMonthly
for (const iotm of iotmList) {
  const iotmID = String(Number(iotm.storeItem));
  MrStoreMonthly[iotmID] = iotm;
}
