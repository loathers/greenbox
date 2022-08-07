import {availableAmount, Familiar, xpath, haveFamiliar, Item, Skill, visitUrl, floristAvailable} from "kolmafia";
import {  $familiar, get, $item, $items, $skill, sum, getFoldGroup, haveInCampground, have as _have } from "libram";
import { BooleanProperty } from "libram/dist/propertyTypes";

// Exporting constants for months and years. 0 is for special casing.
const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const years = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

// Exporting constants for the Eudora options
const eudorae = [
    "My Own Pen Pal kit",
    "GameInformPowerDailyPro subscription card",
    "Xi Receiver Unit",
    "New-You Club Membership Form",
    "Our Daily Candles™ order form",
  ] as string[];

// Exporting types coercing numbers within the aforementioned ranges.
type Month = typeof months[number]
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
 * @returns An [Item, IOTM] object where the hatchling keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordFamiliarIOTM(fam: Familiar): [Item, IOTM] {
    return [fam.hatchling, {
        storeItem: fam.hatchling,
        boundItem: fam,
        have: haveFamiliar(fam),
        count: availableAmount(fam.hatchling),
    }]
}

/**
 * Helper function for building MrStore() itemment records.
 * @param item The item that appeared in Mr. Store
 * @param boundItem If the bound form is distinct, populate this with the bound item.
 * @returns An [Item, IOTM] object where the Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordItemIOTM(item: Item, boundItem=$item`cob of corn`): [Item, IOTM] {
    if (boundItem === $item`cob of corn`) {
        return [item, {
            storeItem: item,
            have: availableAmount(item) > 0,
            count: availableAmount(item),
        }]
    } else {
        return [item, {
            storeItem: item,
            boundItem: boundItem,
            have: availableAmount(boundItem) > 0,
            count: availableAmount(item),
        }]
    }
}

/**
 * Helper function for building MrStore() skillbook records.
 * @param skill The skill you gain after utilizing the item.
 * @param skillBook The skillbook that appeared in Mr. Store.
 * @returns An [Item, IOTM] object where the Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordSkillIOTM(skill: Skill, skillBook: Item): [Item, IOTM] {
    return [skillBook, {
        storeItem: skillBook,
        have: _have(skill),
        count: availableAmount(skillBook),
    }]
}

/**
 * Helper function for building MrStore() records for foldable items.
 * @param foldable The foldable that actually occurred in Mr. Store
 * @returns An [Item, IOTM] object where the Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordFoldableIOTM(foldable: Item): [Item, FoldableIOTM] {
    const allFolds = getFoldGroup(foldable);

    return [foldable, {
        storeItem: foldable,
        itemOptions: allFolds,
        have: allFolds.some((item) => _have(item)), // tests all items in the folds for if you have any of them
        count: sum(allFolds, (item) => availableAmount(item)),
    }]
}

/**
 * Helper function for building MrStore() records for vip key items.
 * @param vipItem The VIP item for the respective month
 * @returns An [Item, IOTM] object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count of the VIP crate item
 */
export function recordVIPIOTM(vipItem: Item): [Item, IOTM] {
    return [vipItem, {
        storeItem: vipItem,
        have: _have($item`Clan VIP Lounge Key`),
        count: availableAmount(vipItem),
    }]
}


/**
 * Helper function for building MrStore() records for garden items.
 * @param catalog The $item record of the unbound version of the garden that appeared in Mr. Store
 * @param seeds The $item record of the seeds for the garden in question
 * @returns An [Item, IOTM] object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
 export function recordGardenIOTM(catalog: Item, seeds: Item): [Item, IOTM] {
    return [catalog, {
        storeItem: catalog,
        boundItem: seeds,
        have: _have(seeds) || haveInCampground(seeds),
        count: availableAmount(catalog),
    }]
}

/** 
 * Helper function for building MrStore() records for Eudora items.
 * @param eudoraItem The $item record of the item that spawns the eudora
 * @returns An [Item, IOTM] object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordEudoraIOTM(eudora: Item): [Item, IOTM] {
    const eudoraNumber = 1 + eudorae.indexOf(eudora.name);
    const eudoraList = xpath(visitUrl("account.php?tab=correspondence"),`//select[@name="whichpenpal"]/option/@value`);
    let haveEudora: boolean;

    // Return as false if passed a non-eudora
    if (eudoraNumber == 0) haveEudora = false; 
    else haveEudora = eudoraList.includes(eudoraNumber.toFixed(0));

    return [eudora, {
        storeItem: eudora,
        have: haveEudora,
        count: availableAmount(eudora)
    }]
}

/**
 * Helper function for building MrStore() records for workshed items.
 * @param voucher The $item record of the unbound version of the workshed that appeared in Mr. Store
 * @param workshedItem The $item record of the specific item used to place the thing in your workshed. Optional; if it is equivalent to the unbound version, leave this blank.
 * @returns An [Item, IOTM] object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
 export function recordWorkshedIOTM(voucher: Item, workshedItem?: Item): [Item, IOTM] {
    // For DNA/Mayo, the workshed item -is- the voucher.
    workshedItem ??= voucher;

    return [voucher, {
        storeItem: voucher,
        boundItem: workshedItem,
        have: _have(voucher) || _have(workshedItem) || haveInCampground(workshedItem),
        count: availableAmount(voucher),
    }]
}

/**
 * Helper function for building MrStore() records for charters, realms, and other pref-tracked IOTMs.
 * @param accessUnlocker The $item record of the unbound version of the infinite access unlocker
 * @param mafiaPref The mafia preference associated with eternal access to the particular realm
 * @returns An [Item, IOTM] object Mr. Store item keys an IOTM statement expressing IOTM ownership & unbound count
 */
export function recordPreferenceIOTM(accessUnlocker: Item, mafiaPref: BooleanProperty): [Item, IOTM] {
    return [accessUnlocker, {
        storeItem: accessUnlocker,
        have: get(mafiaPref),
        count: availableAmount(accessUnlocker),
    }]
}

/**
 * A large JSON style array, keyed by year and month and using IOTM interface for each IOTM that ever existed. A 
 * "partial" typing is required here or else you will need to populate each month for each year, which is not 
 * possible for the incomplete current year or the always-incomplete 2004, which only had three IOTMs. 
 */
export const MrStoreMonthly: {[x in Year]: Partial<{[y in Month]: [Item, IOTM]}>} = {
    2004: {
        10: recordFamiliarIOTM($familiar`Jill-O-Lantern`),
        11: recordFamiliarIOTM($familiar`Hand Turkey`),
        12: recordFamiliarIOTM($familiar`Crimbo Elf`),
    },
    2005: {
        1: recordFamiliarIOTM($familiar`Baby Yeti`),
        2: recordFamiliarIOTM($familiar`Feather Boa Constrictor`),
        3: recordItemIOTM($item`lucky Tam O'Shanter`),
        4: recordFamiliarIOTM($familiar`Personal Raincloud`),
        5: recordItemIOTM($item`miniature gravy-covered maypole`),
        6: recordFamiliarIOTM($familiar`Inflatable Dodecapede`),
        7: recordItemIOTM($item`wax lips`),
        8: recordFamiliarIOTM($familiar`Pygmy Bugbear Shaman`),
        9: recordItemIOTM($item`Jekyllin hide belt`),
        10: recordFamiliarIOTM($familiar`Doppelshifter`),
        11: recordFamiliarIOTM($familiar`Temporal Riftlet`),
        12: recordFamiliarIOTM($familiar`Sweet Nutcracker`),
    },
    2006: {
        1: recordSkillIOTM($skill`Summon Snowcones`, $item`Tome of Snowcone Summoning`),
        2: recordFoldableIOTM($item`iceberglet`),
        3: recordFamiliarIOTM($familiar`Wild Hare`),
        4: recordSkillIOTM($skill`Summon Hilarious Objects`,$item`McPhee's Grimoire of Hilarious Object Summoning`),
        5: recordFamiliarIOTM($familiar`Spirit Hobo`),
        6: recordFamiliarIOTM($familiar`Astral Badger`),
        7: recordItemIOTM($item`jewel-eyed wizard hat`),
        8: recordFamiliarIOTM($familiar`Comma Chameleon`),
        9: recordItemIOTM($item`Travoltan trousers`),
        10: recordItemIOTM($item`plastic pumpkin bucket`),
        11: recordItemIOTM($item`pilgrim shield`),
        12: recordFamiliarIOTM($familiar`Ancient Yuletide Troll`)
    },
    2007: {
        1: recordFoldableIOTM($item`Great Ball of Frozen Fire`),
        2: recordSkillIOTM($skill`Summon Candy Heart`, $item`Libram of Candy Heart Summoning`),
        3: recordFamiliarIOTM($familiar`Dandy Lion`),
        4: recordFamiliarIOTM($familiar`Penguin Goodfella`),
        5: recordItemIOTM($item`Mayflower bouquet`),
        6: recordFamiliarIOTM($familiar`Green Pixie`),
        7: recordItemIOTM($item`bottle-rocket crossbow`),
        8: recordFamiliarIOTM($familiar`Wizard Action Figure`),
        9: recordItemIOTM($item`navel ring of navel gazing`),
        10: recordFamiliarIOTM($familiar`Gluttonous Green Ghost`),
        11: recordItemIOTM($item`V for Vivala mask`),
        12: recordFamiliarIOTM($familiar`Crimbo P. R. E. S. S. I. E.`),
    },
    2008: {
        1: recordSkillIOTM($skill`Summon Party Favor`, $item`Libram of Divine Favors`),
        2: recordFoldableIOTM($item`naughty origami kit`),
        3: recordFamiliarIOTM($familiar`Mad Hatrack`),
        4: recordSkillIOTM($skill`Summon Tasteful Items`, $item`Sp'n-Zor's Grimoire of "Tasteful" Gifts`),
        5: recordItemIOTM($item`packet of mayfly bait`, $item`mayfly bait necklace`),
        6: recordFamiliarIOTM($familiar`Llama Lama`),
        7: recordItemIOTM($item`little box of fireworks`),
        8: recordFamiliarIOTM($familiar`Cotton Candy Carnie`),
        9: recordItemIOTM($item`haiku katana`),
        10: recordFamiliarIOTM($familiar`Disembodied Hand`),
        11: recordSkillIOTM($skill`Summon Stickers`,$item`Scratch 'n' Sniff Sticker Tome`),
        12: recordFamiliarIOTM($familiar`Sugar Fruit Fairy`),
    },
    2009: {
        // The foldable condition does not include the spooky putty monster, so this needs special casing.
        1: [$item`container of Spooky Putty`, {
            storeItem: $item`container of Spooky Putty`,
            itemOptions: getFoldGroup($item`container of Spooky Putty`),
            have: getFoldGroup($item`container of Spooky Putty`).some((item) => _have(item)) || availableAmount($item`spooky putty monster`) > 1, 
            count: sum(getFoldGroup($item`container of Spooky Putty`), (item) => availableAmount(item)),
            } as FoldableIOTM],
        2: recordSkillIOTM($skill`Summon Love Song`, $item`Libram of Love Songs`),
        3: recordFamiliarIOTM($familiar`Frumious Bandersnatch`),
        4: recordItemIOTM($item`elvish sunglasses`),
        5: recordVIPIOTM($item`Clan pool table`),
        6: recordFamiliarIOTM($familiar`Baby Sandworm`),
        7: recordItemIOTM($item`Bag o' Tricks`),
        8: recordFamiliarIOTM($familiar`He-Boulder`),
        9: recordSkillIOTM($skill`Summon Sugar Sheets`, $item`Tome of Sugar Shummoning`),
        10: recordFamiliarIOTM($familiar`Squamous Gibberer`),
        11: recordItemIOTM($item`moveable feast`),
        12: recordFamiliarIOTM($familiar`Stocking Mimic`),
    },
    2010: {
        1: recordFoldableIOTM($item`stinky cheese ball`),
        2: recordSkillIOTM($skill`Summon BRICKOs`, $item`Libram of BRICKOs`),
        3: recordVIPIOTM($item`Clan looking glass`),
        4: recordFamiliarIOTM($familiar`Baby Bugged Bugbear`),
        5: recordItemIOTM($item`Crown of Thrones`),
        6: recordFamiliarIOTM($familiar`Rogue Program`),
        7: recordItemIOTM($item`Juju Mojo Mask`),
        8: recordFamiliarIOTM($familiar`Mini-Hipster`),
        9: recordItemIOTM($item`Greatest American Pants`),
        10: recordFamiliarIOTM($familiar`Knob Goblin Organ Grinder`),
        11: recordGardenIOTM($item`Grumpy Bumpkin's Pumpkin Seed Catalog`, $item`packet of pumpkin seeds`),
        12: recordFamiliarIOTM($familiar`Robot Reindeer`),
    },
    2011: {
        1: recordFoldableIOTM($item`Loathing Legion Knife`),
        2: recordFamiliarIOTM($familiar`Obtuse Angel`),
        3: recordSkillIOTM($skill`Summon Alice's Army Cards`, $item`Sorcerers of the Shore Grimoire`),
        4: recordVIPIOTM($item`Clan shower`),
        5: recordEudoraIOTM($item`My Own Pen Pal kit`),
        6: recordFamiliarIOTM($familiar`Li'l Xenomorph`),
        7: recordItemIOTM($item`Operation Patriot Shield`),
        8: recordFamiliarIOTM($familiar`Pair of Stomping Boots`),
        9: recordSkillIOTM($skill`Summon Clip Art`, $item`Tome of Clip Art`),
        10: recordItemIOTM($item`Make-Your-Own-Vampire-Fangs kit`, $item`plastic vampire fangs`),
        11: recordFamiliarIOTM($familiar`Fancypants Scarecrow`),
        12: recordGardenIOTM($item`Mint Salton Pepper's Peppermint Seed Catalog`, $item`Peppermint Pip Packet`),
    },
    2012: {
        1: recordSkillIOTM($skill`Summon Resolutions`, $item`Libram of Resolutions`),
        2: recordFoldableIOTM($item`can of Rain-Doh`),
        3: recordFamiliarIOTM($familiar`Happy Medium`),
        4: recordFoldableIOTM($item`Boris's Helm`),
        5: recordVIPIOTM($item`Olympic-sized Clan crate`),
        6: recordFamiliarIOTM($familiar`Artistic Goth Kid`),
        7: recordItemIOTM($item`Camp Scout backpack`),
        8: recordFamiliarIOTM($familiar`Reagnimated Gnome`),
        // Special casing required because of how bear arms can re-package themselves or be separated.
        9: [$item`box of bear arms`, {
            storeItem: $item`box of bear arms`,
            have: _have($item`box of bear arms`) || (_have($item`right bear arm`) && _have($item`left bear arm`)),
            count: sum($items`box of bear arms, right bear arm, left bear arm`, availableAmount),
        }],
        10: recordGardenIOTM($item`Pete & Jackie's Dragon Tooth Emporium Catalog`, $item`packet of dragon's teeth`),
        11: recordFamiliarIOTM($familiar`Nanorhino`),
        12: recordSkillIOTM($skill`Summon Geeky Gifts`, $item`Thinknerd's Grimoire of Geeky Gifts`),
    },
    2013: {
        1: recordItemIOTM($item`Snow Suit`),
        2: recordEudoraIOTM($item`GameInformPowerDailyPro subscription card`),
        3: recordFoldableIOTM($item`Jarlsberg's Pan`),
        4: recordSkillIOTM($skill`Summon Taffy`, $item`Libram of Pulled Taffy`),
        // Florist Friars is a living disaster and requires special casing because of this.
        5: [$item`Order of the Green Thumb Order Form`, {
            storeItem: $item`Order of the Green Thumb Order Form`,
            have: floristAvailable(),
            count: availableAmount($item`Order of the Green Thumb Order Form`),
        }],
        6: recordFamiliarIOTM($familiar`Mini-Adventurer`),
        7: recordVIPIOTM($item`Clan hot dog stand`),
        8: recordItemIOTM($item`Folder Holder`, $item`over-the-shoulder Folder Holder`),
        9: recordFamiliarIOTM($familiar`Steam-Powered Cheerleader`),
        10: recordFamiliarIOTM($familiar`Reanimated Reanimator`),
        11: recordItemIOTM($item`Pantsgiving`),
        12: recordSkillIOTM($skill`Summon Smithsness`, $item`The Smith's Tome`),
    },
    2014: {
        1: recordGardenIOTM($item`Discontent™ Winter Garden Catalog`, $item`packet of winter seeds`),
        2: recordItemIOTM($item`Buddy Bjorn`),
        3: recordFoldableIOTM($item`Sneaky Pete's leather jacket`),
        4: recordWorkshedIOTM($item`Little Geneticist DNA-Splicing Lab`),
        5: recordPreferenceIOTM($item`airplane charter: Spring Break Beach`, "sleazeAirportAlways"),
        6: recordFamiliarIOTM($familiar`Galloping Grill`),
        7: recordVIPIOTM($item`Clan speakeasy`),
        8: recordSkillIOTM($skill`Summon Confiscated Things`, $item`The Confiscator's Grimoire`),
        9: recordItemIOTM($item`Thor's Pliers`),
        10: recordPreferenceIOTM($item`airplane charter: Conspiracy Island`, "spookyAirportAlways"),
        11: recordFamiliarIOTM($familiar`Fist Turkey`),
        12: recordFamiliarIOTM($familiar`Crimbo Shrub`),
    },
    2015: {
        1: recordPreferenceIOTM($item`Chateau Mantegna room key`, "chateauAvailable"),
        2: recordPreferenceIOTM($item`bottle of lovebug pheromones`, "lovebugsUnlocked"),
        3: recordItemIOTM($item`Ed the Undying Exhibit Crate`, $item`The Crown of Ed the Undying`),
        4: recordPreferenceIOTM($item`airplane charter: Dinseylandfill`, "stenchAirportAlways"),
        5: recordWorkshedIOTM($item`portable Mayo Clinic`),
        6: recordFamiliarIOTM($familiar`Puck Man`),
        7: recordItemIOTM($item`Pack of Every Card`, $item`Deck of Every Card`),
        8: recordPreferenceIOTM($item`airplane charter: That 70s Volcano`, "hotAirportAlways"),
        9: recordPreferenceIOTM($item`shrine to the Barrel god`, "barrelShrineUnlocked"),
        // The doghouse record technically shows as green if they have the doghouse but have not used it. I don't care though!,
        10: recordWorkshedIOTM($item`haunted doghouse`), 
        11: recordPreferenceIOTM($item`airplane charter: The Glaciest`, "coldAirportAlways"),
        12: recordFamiliarIOTM($familiar`Machine Elf`),
    },
    2016: {
        1: recordPreferenceIOTM($item`X-32-F snowman crate`, "snojoAvailable"),
        // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
        2: recordPreferenceIOTM($item`LT&T telegraph office deed`, "telegraphOfficeAvailable"),
        3: recordWorkshedIOTM($item`Witchess Set`),
        4: recordVIPIOTM($item`Clan Floundry`),
        5: recordFamiliarIOTM($familiar`intergnat`),
        6: recordWorkshedIOTM($item`Source Terminal`),
        7: recordPreferenceIOTM($item`detective school application`, "hasDetectiveSchool"),
        8: recordItemIOTM($item`DIY protonic accelerator kit`, $item`protonic accelerator pack`),
        9: recordItemIOTM($item`Dear Past Self Package`, $item`Time-Spinner`),
        10: recordFamiliarIOTM($familiar`Trick-or-Treating Tot`),
        11: recordGardenIOTM($item`Granny Tood's Thanksgarden Catalog`, $item`packet of thanksgarden seeds`),
        // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
        12: recordPreferenceIOTM($item`Build-a-City Gingerbread kit`, "gingerbreadCityAvailable"),
    },
    2017: {
        1: recordFamiliarIOTM($familiar`Space Jellyfish`),
        // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
        2: recordPreferenceIOTM($item`heart-shaped crate`, "loveTunnelAvailable"),
        3: recordFamiliarIOTM($familiar`Robortender`),
        4: recordPreferenceIOTM($item`Spacegate access badge`, "spacegateAlways"),
        5: recordEudoraIOTM($item`New-You Club Membership Form`),
        6: recordItemIOTM($item`suspicious package`, $item`Kremlin's Greatest Briefcase`),
        7: recordWorkshedIOTM($item`LI-11 Motor Pool voucher`, $item`Asdon Martin keyfob`),
        8: recordSkillIOTM($skill`Meteor Lore`, $item`Pocket Meteor Guide`),
        9: recordItemIOTM($item`corked genie bottle`, $item`genie bottle`),
        10: recordFamiliarIOTM($familiar`XO Skeleton`),
        11: recordItemIOTM($item`pantogram`, $item`portable pantogram`),
        12: recordItemIOTM($item`locked mumming trunk`, $item`mumming trunk`),
    },
    2018: {
        1: recordItemIOTM($item`January's Garbage Tote (unopened)`, $item`January's Garbage Tote`),
        2: recordVIPIOTM($item`Clan Carnival Game`),
        3: recordGardenIOTM($item`Pokéfam Guide to Capturing All of Them`, $item`packet of tall grass seeds`),
        4: recordPreferenceIOTM($item`FantasyRealm membership packet`, "frAlways"),
        5: recordFamiliarIOTM($familiar`God Lobster`),
        6: recordItemIOTM($item`SongBoom™ BoomBox Box`, $item`SongBoom™ BoomBox`),
        7: recordFamiliarIOTM($familiar`Cat Burglar`),
        8: recordItemIOTM($item`Bastille Battalion control rig crate`, $item`Bastille Battalion control rig`),
        9: recordPreferenceIOTM($item`Neverending Party invitation envelope`, "neverendingPartyAlways"),
        10: recordItemIOTM($item`latte lovers club card`, $item`latte lovers member's mug`),
        11: recordPreferenceIOTM($item`voter registration form`, "voteAlways"),
        // This record technically could show green if they use the temp pass, but I didn't want to make a bespoke one. Fix it if you want!
        12: recordPreferenceIOTM($item`Boxing Day care package`, "daycareOpen")
    },
    2019: {
        1: recordItemIOTM($item`Kramco Industries packing carton`, $item`Kramco Sausage-o-Matic™`),
        2: recordItemIOTM($item`mint condition Lil' Doctor™ bag`, $item`Lil' Doctor™ bag`),
        3: recordItemIOTM($item`vampyric cloake pattern`, $item`vampyric cloake`),
        4: recordPreferenceIOTM($item`PirateRealm membership packet`, "prAlways"),
        5: recordItemIOTM($item`Fourth of May Cosplay Saber kit`, $item`Fourth of May Cosplay Saber`),
        6: recordItemIOTM($item`rune-strewn spoon cocoon`, $item`hewn moon-rune spoon`),
        7: recordItemIOTM($item`Beach Comb Box`, $item`Beach Comb`),
        8: recordPreferenceIOTM($item`Distant Woods Getaway Brochure`, "getawayCampsiteUnlocked"),
        9: recordFamiliarIOTM($familiar`Pocket Professor`),
        10: recordItemIOTM($item`Unopened Eight Days a Week Pill Keeper`, $item`Eight Days a Week Pill Keeper`),
        11: recordWorkshedIOTM($item`unopened diabolic pizza cube box`, $item`diabolic pizza cube`),
        12: recordFamiliarIOTM($familiar`Red-Nosed Snapper`),
    },
    2020: {
        1: recordItemIOTM($item`unopened Bird-a-Day calendar`, $item`Bird-a-Day calendar`),
        2: recordItemIOTM($item`mint-in-box Powerful Glove`, $item`Powerful Glove`),
        3: recordGardenIOTM($item`Better Shrooms and Gardens catalog`, $item`packet of mushroom spores`),
        4: recordFamiliarIOTM($familiar`Left-Hand Man`),
        5: recordItemIOTM($item`Guzzlr application`, $item`Guzzlr tablet`),
        6: recordItemIOTM($item`bag of Iunion stones`, $item`Iunion Crown`),
        7: recordFamiliarIOTM($familiar`Melodramedary`),
        8: recordItemIOTM($item`packaged SpinMaster™ lathe`, $item`SpinMaster™ lathe`),
        9: recordItemIOTM($item`Bagged Cargo Cultist Shorts`, $item`Cargo Cultist Shorts`),
        10: recordSkillIOTM($skill`Comprehensive Cartography`, $item`Comprehensive Cartographic Compendium`),
        11: recordItemIOTM($item`packaged knock-off retro superhero cape`, $item`unwrapped knock-off retro superhero cape`),
        // While cute, the ghosts need weird casing because it's 3-in-1.
        12: [$item`box o' ghosts`, {
            storeItem: $item`box o' ghosts`,
            have: _have($familiar`Ghost of Crimbo Commerce`) || _have($familiar`Ghost of Crimbo Carols`) || _have($familiar`Ghost of Crimbo Cheer`),
            count: availableAmount($item`box o' ghosts`),
        }],
    },
    2021: {
        1: recordItemIOTM($item`packaged miniature crystal ball`, $item`miniature crystal ball`),
        2: recordSkillIOTM($skill`Emotionally Chipped`, $item`emotion chip`),
        3: recordItemIOTM($item`power seed`, $item`potted power plant`),
        4: recordItemIOTM($item`packaged backup camera`, $item`backup camera`),
        5: recordFamiliarIOTM($familiar`Shorter-Order Cook`),
        6: recordItemIOTM($item`packaged familiar scrapbook`, $item`familiar scrapbook`),
        7: recordVIPIOTM($item`clan underground fireworks shop`),
        8: recordEudoraIOTM($item`Our Daily Candles™ order form`),
        9: recordItemIOTM($item`packaged industrial fire extinguisher`, $item`industrial fire extinguisher`),
        10: recordFamiliarIOTM($familiar`Vampire Vintner`),
        11: recordItemIOTM($item`packaged Daylight Shavings Helmet`, $item`Daylight Shavings Helmet`),
        12: recordWorkshedIOTM($item`packaged cold medicine cabinet`, $item`cold medicine cabinet`),
    },
    2022: {
        1: recordPreferenceIOTM($item`undrilled cosmic bowling ball`,"hasCosmicBowlingBall"),
        2: recordItemIOTM($item`combat lover's locket lockbox`, $item`combat lover's locket`),
        3: recordFamiliarIOTM($familiar`Grey Goose`),
        // I am not sure this will work for the umbrella honestly.
        4: recordFoldableIOTM($item`undamaged Unbreakable Umbrella`),
        5: recordPreferenceIOTM($item`MayDay™ contract`, "hasMaydayContract"),
        6: recordItemIOTM($item`packaged June cleaver`, $item`June cleaver`),
        7: recordItemIOTM($item`designer sweatpants (new old stock)`, $item`designer sweatpants`),
        8: recordItemIOTM($item`unopened tiny stillsuit`, $item`tiny stillsuit`),
    }
}