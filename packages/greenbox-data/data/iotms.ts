import { BooleanProperty } from "libram/dist/propertyTypes";

interface BaseIotM {
  id: number;
  month: number;
  year: number;
}

interface CampgroundIotM extends BaseIotM {
  type: "campground";
  /**
   * This can cover gardens, worksheds and items that install directly to the campground.
   * If no item is supplied, the Mr Store item is checked directly.
   */
  item?: string;
}

interface CustomIotM extends BaseIotM {
  type: "custom";
}

interface EudoraIotM extends BaseIotM {
  type: "eudora";
  /**
   * The id of the correspondent
   */
  eudoraId: number;
}

interface FamiliarIotM extends BaseIotM {
  type: "familiar";
  /**
   * Familiar name to check. If an array is provided, checks for any of those familiars
   */
  familiar: string | string[];
}

interface ItemIotM extends BaseIotM {
  type: "item";
  /**
   * Item name to check. If an array is provided, checks for any of those items.
   * If the item provided is part of a fold group, any of those items will match.
   */
  item: string | string[];
}

interface PreferenceIotM extends BaseIotM {
  type: "preference";
  /**
   * Preference to check. If it contains "true" the IotM will be considered owned.
   */
  preference: BooleanProperty;
}

interface SkillIotM extends BaseIotM {
  type: "skill";
  /**
   * Skill name to check.
   */
  skill: string;
}

interface VIPIotM extends BaseIotM {
  type: "vip";
}

export type IotMDef =
  | CampgroundIotM
  | CustomIotM
  | EudoraIotM
  | FamiliarIotM
  | ItemIotM
  | PreferenceIotM
  | SkillIotM
  | VIPIotM;

export default [
  {
    id: 894,
    month: 10,
    year: 2004,
    type: "familiar",
    familiar: "Jill-O-Lantern",
  }, // Dark Jill-O-Lantern
  { id: 914, month: 11, year: 2004, type: "familiar", familiar: "Hand Turkey" }, // hand turkey outline
  { id: 924, month: 12, year: 2004, type: "familiar", familiar: "Crimbo Elf" }, // crimbo elfling
  { id: 954, month: 1, year: 2005, type: "familiar", familiar: "Baby Yeti" }, // orphan baby yeti
  {
    id: 961,
    month: 2,
    year: 2005,
    type: "familiar",
    familiar: "Feather Boa Constrictor",
  }, // silk garter snake
  { id: 1040, month: 3, year: 2005, type: "item", item: "lucky Tam O'Shanter" }, // lucky Tam O'Shanter
  {
    id: 1083,
    month: 4,
    year: 2005,
    type: "familiar",
    familiar: "Personal Raincloud",
  }, // personal raindrop
  {
    id: 1152,
    month: 5,
    year: 2005,
    type: "item",
    item: "miniature gravy-covered maypole",
  }, // miniature gravy-covered maypole
  {
    id: 1242,
    month: 6,
    year: 2005,
    type: "familiar",
    familiar: "inflatable dodecapede",
  }, // deflated inflatable dodecapede
  { id: 1260, month: 7, year: 2005, type: "item", item: "wax lips" }, // wax lips
  {
    id: 1263,
    month: 8,
    year: 2005,
    type: "familiar",
    familiar: "Pygmy Bugbear Shaman",
  }, // pygmy bugbear shaman
  { id: 1291, month: 9, year: 2005, type: "item", item: "Jekyllin hide belt" }, // Jekyllin hide belt
  {
    id: 1304,
    month: 10,
    year: 2005,
    type: "familiar",
    familiar: "Doppelshifter",
  }, // doppelshifter egg
  {
    id: 1349,
    month: 11,
    year: 2005,
    type: "familiar",
    familiar: "Temporal Riftlet",
  }, // miniscule temporal rip
  {
    id: 1373,
    month: 12,
    year: 2005,
    type: "familiar",
    familiar: "Sweet Nutcracker",
  }, // sweet nutcracker
  { id: 1411, month: 1, year: 2006, type: "skill", skill: "Summon Snowcones" }, // Tome of Snowcone Summoning
  {
    id: 1423,
    month: 2,
    year: 2006,
    type: "item",
    item: ["iceberglet", "ice baby"],
  }, // iceberglet
  { id: 1488, month: 3, year: 2006, type: "familiar", familiar: "Wild Hare" }, // March hat
  {
    id: 1498,
    month: 4,
    year: 2006,
    type: "skill",
    skill: "Summon Hilarious Objects",
  }, // McPhee's Grimoire of Hilarious Object Summoning
  { id: 1536, month: 5, year: 2006, type: "familiar", familiar: "Spirit Hobo" }, // homeless hobo spirit
  {
    id: 1621,
    month: 6,
    year: 2006,
    type: "familiar",
    familiar: "Astral Badger",
  }, // astral badger
  {
    id: 1653,
    month: 7,
    year: 2006,
    type: "item",
    item: "jewel-eyed wizard hat",
  }, // jewel-eyed wizard hat
  {
    id: 1703,
    month: 8,
    year: 2006,
    type: "familiar",
    familiar: "Comma Chameleon",
  }, // Comma Chameleon egg
  { id: 1792, month: 9, year: 2006, type: "item", item: "Travoltan trousers" }, // Travoltan trousers
  {
    id: 1971,
    month: 10,
    year: 2006,
    type: "item",
    item: "plastic pumpkin bucket",
  }, // plastic pumpkin bucket
  { id: 2090, month: 11, year: 200, type: "item", item: "pilgrim shield" }, // pilgrim shield
  {
    id: 2190,
    month: 12,
    year: 2006,
    type: "familiar",
    familiar: "Ancient Yuletide Troll",
  }, // yuletide troll chrysalis
  {
    id: 2221,
    month: 1,
    year: 2007,
    type: "item",
    item: ["Great Ball of Frozen Fire", "liar's pants"],
  }, // Great Ball of Frozen Fire
  {
    id: 2303,
    month: 2,
    year: 2007,
    type: "skill",
    skill: "Summon Candy Heart",
  }, // Libram of Candy Heart Summoning
  { id: 2380, month: 3, year: 2007, type: "familiar", familiar: "Dandy Lion" }, // dandy lion cub
  {
    id: 2447,
    month: 4,
    year: 2007,
    type: "familiar",
    familiar: "Penguin Goodfella",
  }, // bad penguin egg
  { id: 2541, month: 5, year: 2007, type: "item", item: "Mayflower bouquet" }, // Mayflower bouquet
  { id: 2650, month: 6, year: 2007, type: "familiar", familiar: "Green Pixie" }, // bottled green pixie
  {
    id: 2834,
    month: 7,
    year: 2007,
    type: "item",
    item: "bottle-rocket crossbow",
  }, // bottle-rocket crossbow
  {
    id: 2836,
    month: 8,
    year: 2007,
    type: "familiar",
    familiar: "Wizard Action Figure",
  }, // wizard action figure
  {
    id: 2844,
    month: 9,
    year: 2007,
    type: "item",
    item: "navel ring of navel gazing",
  }, // navel ring of navel gazing
  {
    id: 2845,
    month: 10,
    year: 2007,
    type: "familiar",
    familiar: "Gluttonous Green Ghost",
  }, // class five ecto-larva
  { id: 2946, month: 11, year: 2007, type: "item", item: "V for Vivala Mask" }, // V for Vivala mask
  {
    id: 3042,
    month: 12,
    year: 2007,
    type: "familiar",
    familiar: "Crimbo P. R. E. S. S. I. E.",
  }, // Crimbo P. R. E. S. S. I. E.
  {
    id: 3117,
    month: 1,
    year: 2008,
    type: "skill",
    skill: "Summon Party Favor",
  }, // Libram of Divine Favors
  {
    id: 3192,
    month: 2,
    year: 2008,
    type: "item",
    item: ["naughty origami kit", "origami pasties"],
  }, // naughty origami kit
  { id: 3219, month: 3, year: 2008, type: "familiar", familiar: "Mad Hatrack" }, // sane hatrack
  {
    id: 3263,
    month: 4,
    year: 2008,
    type: "skill",
    skill: "Summon Tasteful Items",
  }, // Sp'n-Zor's Grimoire of "Tasteful" Gifts
  {
    id: 3321,
    month: 5,
    year: 2008,
    type: "item",
    item: "mayfly bait necklace",
  }, // packet of mayfly bait
  { id: 3351, month: 6, year: 2008, type: "familiar", familiar: "Llama Lama" }, // llama lama cria
  {
    id: 3421,
    month: 7,
    year: 2008,
    type: "item",
    item: "little box of fireworks",
  }, // little box of fireworks
  {
    id: 3431,
    month: 8,
    year: 2008,
    type: "familiar",
    familiar: "Cotton Candy Carnie",
  }, // cotton candy cocoon
  { id: 3466, month: 9, year: 2008, type: "item", item: "haiku katana" }, // haiku katana
  {
    id: 3434,
    month: 10,
    year: 2008,
    type: "familiar",
    familiar: "Disembodied Hand",
  }, // spooky rattling cigar box
  { id: 3507, month: 11, year: 2008, type: "skill", skill: "Summon Stickers" }, // Scratch 'n' Sniff Sticker Tome
  {
    id: 3578,
    month: 12,
    year: 2008,
    type: "familiar",
    familiar: "Sugar Fruit Fairy",
  }, // candy cornucopia
  {
    id: 3661,
    month: 1,
    year: 2009,
    type: "item",
    item: [
      "container of Spooky Putty",
      "spooky putty monster",
      "Spooky Putty sheet",
    ],
  }, // container of Spooky Putty
  { id: 3753, month: 2, year: 2009, type: "skill", skill: "Summon Love Song" }, // Libram of Love Songs
  {
    id: 3799,
    month: 3,
    year: 2009,
    type: "familiar",
    familiar: "Frumious Bandersnatch",
  }, // Apathargic Bandersnatch
  { id: 3836, month: 4, year: 2009, type: "item", item: "elvish sunglasses" }, // Elvish sunglasses
  { id: 3963, month: 5, year: 2009, type: "vip" }, // Clan pool table
  {
    id: 3999,
    month: 6,
    year: 2009,
    type: "familiar",
    familiar: "Baby Sandworm",
  }, // infant sandworm
  { id: 4136, month: 7, year: 2009, type: "item", item: "Bag o' Tricks" }, // Bag o' Tricks
  { id: 4148, month: 8, year: 2009, type: "familiar", familiar: "He-Boulder" }, // floaty stone sphere
  {
    id: 4177,
    month: 9,
    year: 2009,
    type: "skill",
    skill: "Summon Sugar Sheets",
  }, // Tome of Sugar Shummoning
  {
    id: 4223,
    month: 10,
    year: 2009,
    type: "familiar",
    familiar: "Squamous Gibberer",
  }, // squamous polyp
  { id: 4135, month: 11, year: 2009, type: "item", item: "moveable feast" }, // moveable feast
  {
    id: 4328,
    month: 12,
    year: 2009,
    type: "familiar",
    familiar: "Stocking Mimic",
  }, // suspicious stocking
  {
    id: 4398,
    month: 1,
    year: 2010,
    type: "item",
    item: ["stinky cheese ball", "stinky cheese eye"],
  }, // stinky cheese ball
  { id: 4468, month: 2, year: 2010, type: "skill", skill: "Summon BRICKOs" }, // Libram of BRICKOs
  { id: 4507, month: 3, year: 2010, type: "vip" }, // Clan looking glass
  {
    id: 4574,
    month: 4,
    year: 2010,
    type: "familiar",
    familiar: "Baby Bugged Bugbear",
  }, // panicked kernel
  { id: 4614, month: 5, year: 2010, type: "item", item: "Crown of Thrones" }, // Crown of Thrones
  {
    id: 4619,
    month: 6,
    year: 2010,
    type: "familiar",
    familiar: "Rogue Program",
  }, // glowing frisbee
  { id: 4644, month: 7, year: 2010, type: "item", item: "Juju Mojo Mask" }, // Juju Mojo Mask
  {
    id: 4648,
    month: 8,
    year: 2010,
    type: "familiar",
    familiar: "Mini-Hipster",
  }, // Schmalz's First Prize Beer
  {
    id: 4696,
    month: 9,
    year: 2010,
    type: "item",
    item: "Greatest American Pants",
  }, // Greatest American Pants
  {
    id: 4720,
    month: 10,
    year: 2010,
    type: "familiar",
    familiar: "organ grinder",
  }, // organ grinder
  {
    id: 4759,
    month: 11,
    year: 2010,
    type: "campground",
    item: "packet of pumpkin seeds",
  }, // Grumpy Bumpkin's Pumpkin Seed Catalog
  {
    id: 4827,
    month: 12,
    year: 2010,
    type: "familiar",
    familiar: "Robot Reindeer",
  }, // hibernating robot reindeer
  {
    id: 4908,
    month: 1,
    year: 2011,
    type: "item",
    item: "Loathing Legion Knife",
  }, // Loathing Legion knife
  {
    id: 4937,
    month: 2,
    year: 2011,
    type: "familiar",
    familiar: "Obtuse Angel",
  }, // a cute angel
  {
    id: 4965,
    month: 3,
    year: 2011,
    type: "skill",
    skill: "Summon Alice's Army Cards",
  }, // Sorcerers of the Shore Grimoire
  { id: 5047, month: 4, year: 2011, type: "vip" }, // Clan shower
  { id: 5112, month: 5, year: 2011, type: "eudora", eudoraId: 1 }, // My Own Pen Pal kit
  {
    id: 5164,
    month: 6,
    year: 2011,
    type: "familiar",
    familiar: "Li'l Xenomorph",
  }, // mysterious chest
  {
    id: 5190,
    month: 7,
    year: 2011,
    type: "item",
    item: "Operation Patriot Shield",
  }, // Operation Patriot Shield
  {
    id: 4536,
    month: 8,
    year: 2011,
    type: "familiar",
    familiar: "Pair of Stomping Boots",
  }, // fairy-worn boots
  { id: 5223, month: 9, year: 2011, type: "skill", skill: "Summon Clip Art" }, // Tome of Clip Art
  {
    id: 5301,
    month: 10,
    year: 2011,
    type: "item",
    item: "plastic vampire fangs",
  }, // Make-Your-Own-Vampire-Fangs kit
  {
    id: 5371,
    month: 11,
    year: 2011,
    type: "familiar",
    familiar: "Fancypants Scarecrow",
  }, // stuffed-shirt scarecrow
  {
    id: 5403,
    month: 12,
    year: 2011,
    type: "campground",
    item: "Peppermint Pip Packet",
  }, // Mint Salton Pepper's Peppermint Seed Catalog
  {
    id: 5463,
    month: 1,
    year: 2012,
    type: "skill",
    skill: "Summon Resolutions",
  }, // Libram of Resolutions
  {
    id: 5553,
    month: 2,
    year: 2012,
    type: "item",
    item: ["can of Rain-Doh", "empty Rain-Doh can"],
  }, // can of Rain-Doh
  {
    id: 5639,
    month: 3,
    year: 2012,
    type: "familiar",
    familiar: "Happy Medium",
  }, // Small Medium
  { id: 5648, month: 4, year: 2012, type: "item", item: "Boris's Helm" }, // Boris's Helm
  { id: 5662, month: 5, year: 2012, type: "vip" }, // Olympic-sized Clan crate
  {
    id: 5701,
    month: 6,
    year: 2012,
    type: "familiar",
    familiar: "Artistic Goth Kid",
  }, // Moping Artistic Goth Kid
  { id: 5738, month: 7, year: 2012, type: "item", item: "Camp Scout backpack" }, // Camp Scout backpack
  {
    id: 5767,
    month: 8,
    year: 2012,
    type: "familiar",
    familiar: "Reagnimated Gnome",
  }, // Unagnimated Gnome
  { id: 5790, month: 9, year: 2012, type: "custom" }, // box of bear arms
  {
    id: 5879,
    month: 10,
    year: 2012,
    type: "campground",
    item: "packet of dragon's teeth",
  }, // Pete & Jackie's Dragon Tooth Emporium Catalog
  { id: 5910, month: 11, year: 2012, type: "familiar", familiar: "Nanorhino" }, // deactivated nanobots
  {
    id: 6071,
    month: 12,
    year: 2012,
    type: "skill",
    skill: "Summon Geeky Gifts",
  }, // Thinknerd's Grimoire of Geeky Gifts
  { id: 6150, month: 1, year: 2013, type: "item", item: "Snow Suit" }, // Snow Suit
  { id: 4712, month: 2, year: 2013, type: "eudora", eudoraId: 2 }, // GameInformPowerDailyPro subscription card
  { id: 6305, month: 3, year: 2013, type: "item", item: "Jarlsberg's Pan" }, // Jarlsberg's pan
  { id: 6360, month: 4, year: 2013, type: "skill", skill: "Summon Taffy" }, // Libram of Pulled Taffy
  {
    id: 6413,
    month: 5,
    year: 2013,
    type: "preference",
    preference: "ownsFloristFriar",
  }, // Order of the Green Thumb Order Form
  {
    id: 6561,
    month: 6,
    year: 2013,
    type: "familiar",
    familiar: "Mini-Adventurer",
  }, // adventurer clone egg
  { id: 6582, month: 7, year: 2013, type: "vip" }, // Clan hot dog stand
  {
    id: 4930,
    month: 8,
    year: 2013,
    type: "item",
    item: "over-the-shoulder Folder Holder",
  }, // Folder Holder
  {
    id: 6411,
    month: 9,
    year: 2013,
    type: "familiar",
    familiar: "Steam-Powered Cheerleader",
  }, // KoLHS Pep Squad Box
  {
    id: 6784,
    month: 10,
    year: 2013,
    type: "familiar",
    familiar: "Reanimated Reanimator",
  }, // deanimated reanimator's coffin
  { id: 6860, month: 11, year: 2013, type: "item", item: "Pantsgiving" }, // Pantsgiving
  {
    id: 7003,
    month: 12,
    year: 2013,
    type: "skill",
    skill: "Summon Smithsness",
  }, // The Smith's Tome
  {
    id: 7069,
    month: 1,
    year: 2014,
    type: "campground",
    item: "packet of winter seeds",
  }, // Discontent™ Winter Garden Catalog
  { id: 7200, month: 2, year: 2014, type: "item", item: "Buddy Bjorn" }, // Buddy Bjorn
  {
    id: 7250,
    month: 3,
    year: 2014,
    type: "item",
    item: "Sneaky Pete's leather jacket",
  }, // Sneaky Pete's leather jacket
  {
    id: 7382,
    month: 4,
    year: 2014,
    type: "campground",
    item: "Little Geneticist DNA-Splicing Lab",
  }, // Little Geneticist DNA-Splicing Lab
  {
    id: 7466,
    month: 5,
    year: 2014,
    type: "preference",
    preference: "sleazeAirportAlways",
  }, // airplane charter: Spring Break Beach
  {
    id: 7312,
    month: 6,
    year: 2014,
    type: "familiar",
    familiar: "Galloping Grill",
  }, // still grill
  { id: 7588, month: 7, year: 2014, type: "vip" }, // Clan speakeasy
  {
    id: 7706,
    month: 8,
    year: 2014,
    type: "skill",
    skill: "Summon Confiscated Things",
  }, // The Confiscator's Grimoire
  { id: 7709, month: 9, year: 2014, type: "item", item: "Thor's Pliers" }, // Thor's Pliers
  {
    id: 7767,
    month: 10,
    year: 2014,
    type: "preference",
    preference: "spookyAirportAlways",
  }, // airplane charter: Conspiracy Island
  {
    id: 7920,
    month: 11,
    year: 2014,
    type: "familiar",
    familiar: "fist turkey",
  }, // fist turkey outline
  {
    id: 7956,
    month: 12,
    year: 2014,
    type: "familiar",
    familiar: "Crimbo Shrub",
  }, // Crimbo sapling
  {
    id: 8019,
    month: 1,
    year: 2015,
    type: "preference",
    preference: "chateauAvailable",
  }, // Chateau Mantegna room key
  {
    id: 8134,
    month: 2,
    year: 2015,
    type: "preference",
    preference: "lovebugsUnlocked",
  }, // bottle of lovebug pheromones
  {
    id: 8184,
    month: 3,
    year: 2015,
    type: "item",
    item: "The Crown of Ed the Undying",
  }, // Ed the Undying exhibit crate
  {
    id: 8203,
    month: 4,
    year: 2015,
    type: "preference",
    preference: "stenchAirportAlways",
  }, // airplane charter: Dinseylandfill
  {
    id: 8260,
    month: 5,
    year: 2015,
    type: "campground",
    item: "portable Mayo Clinic",
  }, // portable Mayo Clinic
  {
    id: 8287,
    month: 6,
    year: 2015,
    type: "familiar",
    familiar: ["Puck Man", "Ms Puck Man"],
  }, // yellow puck
  { id: 8381, month: 7, year: 2015, type: "item", item: "Deck of Every Card" }, // Pack of Every Card
  {
    id: 8487,
    month: 8,
    year: 2015,
    type: "preference",
    preference: "hotAirportAlways",
  }, // airplane charter: That 70s Volcano
  {
    id: 8564,
    month: 9,
    year: 2015,
    type: "preference",
    preference: "barrelShrineUnlocked",
  }, // shrine to the Barrel god
  { id: 8639, month: 10, year: 2015, type: "campground" }, // haunted doghouse
  {
    id: 8674,
    month: 11,
    year: 2015,
    type: "preference",
    preference: "coldAirportAlways",
  }, // airplane charter: The Glaciest
  {
    id: 8706,
    month: 12,
    year: 2015,
    type: "familiar",
    familiar: "Machine Elf",
  }, // machine elf capsule
  {
    id: 8705,
    month: 1,
    year: 2016,
    type: "preference",
    preference: "snojoAvailable",
  }, // X-32-F snowman crate
  {
    id: 8836,
    month: 2,
    year: 2016,
    type: "preference",
    preference: "telegraphOfficeAvailable",
  }, // LT&T telegraph office deed
  { id: 8989, month: 3, year: 2016, type: "campground" }, // Witchess Set
  { id: 9000, month: 4, year: 2016, type: "vip" }, // Clan Floundry
  { id: 9016, month: 5, year: 2016, type: "familiar", familiar: "intergnat" }, // disconnected intergnat
  { id: 9033, month: 6, year: 2016, type: "campground" }, // Source terminal
  {
    id: 9073,
    month: 7,
    year: 2016,
    type: "preference",
    preference: "hasDetectiveSchool",
  }, // detective school application
  {
    id: 9081,
    month: 8,
    year: 2016,
    type: "item",
    item: "protonic accelerator pack",
  }, // DIY protonic accelerator kit
  { id: 9103, month: 9, year: 2016, type: "item", item: "Time-Spinner" }, // Dear Past Self Package
  {
    id: 9136,
    month: 10,
    year: 2016,
    type: "familiar",
    familiar: "Trick-or-Treating Tot",
  }, // li'l orphan tot
  {
    id: 9189,
    month: 11,
    year: 2016,
    type: "campground",
    item: "packet of thanksgarden seeds",
  }, // Granny Tood's Thanksgarden Catalog
  {
    id: 9203,
    month: 12,
    year: 2016,
    type: "preference",
    preference: "gingerbreadCityAvailable",
  }, // Build-a-City Gingerbread kit
  {
    id: 9296,
    month: 1,
    year: 2017,
    type: "familiar",
    familiar: "Space Jellyfish",
  }, // space planula
  {
    id: 9316,
    month: 2,
    year: 2017,
    type: "preference",
    preference: "loveTunnelAvailable",
  }, // heart-shaped crate
  { id: 9401, month: 3, year: 2017, type: "familiar", familiar: "Robortender" }, // unpowered Robortender
  {
    id: 9404,
    month: 4,
    year: 2017,
    type: "preference",
    preference: "spacegateAlways",
  }, // Spacegate access badge
  { id: 9478, month: 5, year: 2017, type: "eudora", eudoraId: 4 }, // New-You Club Membership Form
  {
    id: 9492,
    month: 6,
    year: 2017,
    type: "item",
    item: "Kremlin's Greatest Briefcase",
  }, // suspicious package
  {
    id: 9507,
    month: 7,
    year: 2017,
    type: "campground",
    item: "Asdon Martin keyfob",
  }, // LI-11 Motor Pool voucher
  { id: 9511, month: 8, year: 2017, type: "skill", skill: "Meteor Lore" }, // Pocket Meteor Guide
  { id: 9528, month: 9, year: 2017, type: "item", item: "genie bottle" }, // corked genie bottle
  {
    id: 9541,
    month: 10,
    year: 2017,
    type: "familiar",
    familiar: "XO Skeleton",
  }, // xo-skeleton-in-a-box
  { id: 9572, month: 11, year: 2017, type: "item", item: "portable pantogram" }, // pantogram
  { id: 9591, month: 12, year: 2017, type: "item", item: "mumming trunk" }, // locked mumming trunk
  {
    id: 9689,
    month: 1,
    year: 2018,
    type: "item",
    item: "January's Garbage Tote",
  }, // January's Garbage Tote (unopened)
  { id: 9712, month: 2, year: 2018, type: "vip" }, // Clan Carnival Game
  {
    id: 9759,
    month: 3,
    year: 2018,
    type: "campground",
    item: "packet of tall grass seeds",
  }, // Pokéfam Guide to Capturing All of Them
  {
    id: 9835,
    month: 4,
    year: 2018,
    type: "preference",
    preference: "frAlways",
  }, // FantasyRealm membership packet
  { id: 9661, month: 5, year: 2018, type: "familiar", familiar: "God Lobster" }, // God Lobster Egg
  { id: 9920, month: 6, year: 2018, type: "item", item: "SongBoom™ BoomBox" }, // SongBoom™ BoomBox Box
  { id: 9939, month: 7, year: 2018, type: "familiar", familiar: "Cat Burglar" }, // kitten burglar
  {
    id: 9927,
    month: 8,
    year: 2018,
    type: "item",
    item: "Bastille Battalion control rig",
  }, // Bastille Battalion control rig crate
  {
    id: 9942,
    month: 9,
    year: 2018,
    type: "preference",
    preference: "neverendingPartyAlways",
  }, // Neverending Party invitation envelope
  {
    id: 9988,
    month: 10,
    year: 2018,
    type: "item",
    item: "latte lovers member's mug",
  }, // latte lovers club card
  {
    id: 9989,
    month: 11,
    year: 2018,
    type: "preference",
    preference: "voteAlways",
  }, // voter registration form
  {
    id: 10049,
    month: 12,
    year: 2018,
    type: "preference",
    preference: "daycareOpen",
  }, // Boxing Day care package
  {
    id: 10057,
    month: 1,
    year: 2019,
    type: "item",
    item: "Kramco Sausage-o-Matic™",
  }, // Kramco Industries packing carton
  { id: 10165, month: 2, year: 2019, type: "item", item: "Lil' Doctor™ bag" }, // mint condition Lil' Doctor™ bag
  { id: 10241, month: 3, year: 2019, type: "item", item: "vampyric cloake" }, // vampyric cloake pattern
  {
    id: 10187,
    month: 4,
    year: 2019,
    type: "preference",
    preference: "prAlways",
  }, // PirateRealm membership packet
  {
    id: 10250,
    month: 5,
    year: 2019,
    type: "item",
    item: "Fourth of May Cosplay Saber",
  }, // Fourth of May Cosplay Saber kit
  {
    id: 10256,
    month: 6,
    year: 2019,
    type: "item",
    item: "hewn moon-rune spoon",
  }, // rune-strewn spoon cocoon
  { id: 10257, month: 7, year: 2019, type: "item", item: "Beach Comb" }, // Beach Comb Box
  {
    id: 10292,
    month: 8,
    year: 2019,
    type: "preference",
    preference: "getawayCampsiteUnlocked",
  }, // Distant Woods Getaway Brochure
  {
    id: 10323,
    month: 9,
    year: 2019,
    type: "familiar",
    familiar: "Pocket Professor",
  }, // packaged Pocket Professor
  {
    id: 10332,
    month: 10,
    year: 2019,
    type: "item",
    item: "Eight Days a Week Pill Keeper",
  }, // Unopened Eight Days a Week Pill Keeper
  {
    id: 10334,
    month: 11,
    year: 2019,
    type: "campground",
    item: "diabolic pizza cube",
  }, // unopened diabolic pizza cube box
  {
    id: 10345,
    month: 12,
    year: 2019,
    type: "familiar",
    familiar: "Red-Nosed Snapper",
  }, // red-spotted snapper roe
  {
    id: 10433,
    month: 1,
    year: 2020,
    type: "item",
    item: "Bird-a-Day calendar",
  }, // unopened Bird-a-Day calendar
  { id: 10437, month: 2, year: 2020, type: "item", item: "Powerful Glove" }, // mint-in-box Powerful Glove
  {
    id: 10481,
    month: 3,
    year: 2020,
    type: "campground",
    item: "packet of mushroom spores",
  }, // Better Shrooms and Gardens catalog
  {
    id: 10502,
    month: 4,
    year: 2020,
    type: "familiar",
    familiar: "Left-Hand Man",
  }, // sinistral homunculus
  { id: 10532, month: 5, year: 2020, type: "item", item: "Guzzlr tablet" }, // Guzzlr application
  { id: 10573, month: 6, year: 2020, type: "item", item: "Iunion Crown" }, // bag of Iunion stones
  {
    id: 10579,
    month: 7,
    year: 2020,
    type: "familiar",
    familiar: "Melodramedary",
  }, // baby camelCalf
  { id: 10581, month: 8, year: 2020, type: "item", item: "SpinMaster™ lathe" }, // packaged SpinMaster™ lathe
  {
    id: 10635,
    month: 9,
    year: 2020,
    type: "item",
    item: "Cargo Cultist Shorts",
  }, // bagged Cargo Cultist Shorts
  {
    id: 10644,
    month: 10,
    year: 2020,
    type: "skill",
    skill: "Comprehensive Cartography",
  }, // Comprehensive Cartographic Compendium
  {
    id: 10646,
    month: 11,
    year: 2020,
    type: "item",
    item: "unwrapped knock-off retro superhero cape",
  }, // packaged knock-off retro superhero cape
  {
    id: 10648,
    month: 12,
    year: 2020,
    type: "familiar",
    familiar: [
      "Ghost of Crimbo Commerce",
      "Ghost of Crimbo Carols",
      "Ghost of Crimbo Cheer",
    ],
  }, // box o' ghosts
  {
    id: 10729,
    month: 1,
    year: 2021,
    type: "item",
    item: "miniature crystal ball",
  }, // packaged miniature crystal ball
  {
    id: 10733,
    month: 2,
    year: 2021,
    type: "skill",
    skill: "Emotionally Chipped",
  }, // emotion chip
  { id: 10737, month: 3, year: 2021, type: "item", item: "potted power plant" }, // power seed
  { id: 10748, month: 4, year: 2021, type: "item", item: "backup camera" }, // packaged backup camera
  {
    id: 10750,
    month: 5,
    year: 2021,
    type: "familiar",
    familiar: "Shorter-Order Cook",
  }, // shortest-order cook
  { id: 10760, month: 6, year: 2021, type: "item", item: "familiar scrapbook" }, // packaged familiar scrapbook
  { id: 10761, month: 7, year: 2021, type: "vip" }, // clan underground fireworks shop
  { id: 10773, month: 8, year: 2021, type: "eudora", eudoraId: 5 }, // Our Daily Candles™ order form
  {
    id: 10796,
    month: 9,
    year: 2021,
    type: "item",
    item: "industrial fire extinguisher",
  }, // packaged industrial fire extinguisher
  {
    id: 10801,
    month: 10,
    year: 2021,
    type: "familiar",
    familiar: "Vampire Vintner",
  }, // bottled Vampire Vintner
  {
    id: 10803,
    month: 11,
    year: 2021,
    type: "item",
    item: "Daylight Shavings Helmet",
  }, // packaged Daylight Shavings Helmet
  {
    id: 10814,
    month: 12,
    year: 2021,
    type: "campground",
    item: "cold medicine cabinet",
  }, // packaged cold medicine cabinet
  {
    id: 10890,
    month: 1,
    year: 2022,
    type: "preference",
    preference: "hasCosmicBowlingBall",
  }, // undrilled cosmic bowling ball
  {
    id: 10892,
    month: 2,
    year: 2022,
    type: "item",
    item: "combat lover's locket",
  }, // combat lover's locket lockbox
  { id: 10895, month: 3, year: 2022, type: "familiar", familiar: "Grey Goose" }, // grey gosling
  {
    id: 10898,
    month: 4,
    year: 2022,
    type: "item",
    item: "Unbreakable Umbrella",
  }, // undamaged Unbreakable Umbrella
  {
    id: 10900,
    month: 5,
    year: 2022,
    type: "preference",
    preference: "hasMaydayContract",
  }, // MayDay™ contract
  { id: 10919, month: 6, year: 2022, type: "item", item: "June cleaver" }, // packaged June cleaver
  {
    id: 10928,
    month: 7,
    year: 2022,
    type: "item",
    item: "designer sweatpants",
  }, // designer sweatpants (new old stock)
  { id: 10931, month: 8, year: 2022, type: "item", item: "tiny stillsuit" }, // unopened tiny stillsuit
  { id: 10951, month: 9, year: 2022, type: "item", item: "Jurassic Parka" }, // packaged Jurassic Parka
  {
    id: 10953,
    month: 10,
    year: 2022,
    type: "preference",
    preference: "hasAutumnaton",
  }, // boxed autumn-aton
  {
    id: 10966,
    month: 11,
    year: 2022,
    type: "familiar",
    familiar: "Cookbookbat",
  }, // mummified entombed cookbookbat
  {
    id: 11044,
    month: 12,
    year: 2022,
    type: "campground",
    item: "model train set",
  }, // packaged model train set
  {
    id: 11099,
    month: 1,
    year: 2023,
    type: "campground",
    item: "packet of rock seeds",
  }, // rock garden guide
  {
    id: 11115,
    month: 2,
    year: 2023,
    type: "item",
    item: "S.I.T. Course Completion Certificate",
  }, // S.I.T. Course Voucher
  {
    id: 11168,
    month: 3,
    year: 2023,
    type: "item",
    item: "closed-circuit pay phone",
  }, // closed-circuit phone system
  {
    id: 11187,
    month: 4,
    year: 2023,
    type: "item",
    item: "cursed monkey's paw",
  }, // cursed monkey glove
  { id: 11222, month: 5, year: 2023, type: "item", item: "Cincho de Mayo" }, // shrink-wrapped Cincho de Mayo
  {
    id: 11256,
    month: 6,
    year: 2023,
    type: "item",
    item: "2002 Mr. Store Catalog",
  }, // shrink-wrapped 2002 Mr. Store Catalog
  {
    id: 11300,
    month: 7,
    year: 2023,
    type: "familiar",
    familiar: "Patriotic Eagle",
  }, // sleeping patriotic eagle
  { id: 11305, month: 8, year: 2023, type: "item", item: "august scepter" }, // boxed august scepter
  {
    id: 11333,
    month: 9,
    year: 2023,
    type: "skill",
    skill: "Just the Facts",
  }, // Book of Facts
  {
    id: 11335,
    month: 10,
    year: 2023,
    type: "familiar",
    familiar: "Jill-of-All-Trades",
  }, // Dark Jill-of-All-Trades
  {
    id: 11340,
    month: 11,
    year: 2023,
    type: "campground",
  }, // A Guide to Burning Leaves
  {
    id: 11364,
    month: 12,
    year: 2023,
    type: "item",
    item: "candy cane sword cane",
  }, // wrapped candy cane sword cane
  {
    id: 11540,
    month: 1,
    year: 2024,
    type: "familiar",
    familiar: "Chest Mimic",
  }, // baby chest mimic
  {
    id: 11545,
    month: 2,
    year: 2024,
    type: "item",
    item: "spring shoes",
  }, // in-the-box spring shoes
  {
    id: 11560,
    month: 3,
    year: 2024,
    type: "item",
    item: "Everfull Dart Holster",
  }, // packaged Everfull Dart Holster
] satisfies IotMDef[];
