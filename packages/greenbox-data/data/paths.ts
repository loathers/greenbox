import type { PathDef } from "../lib/types.js";

enum ItemId {
  // Softcore Standard 2025
  CrepePaperSC = 11520,
  CrepePaperTT = 11521,
  CrepePaperPM = 11522,
  CrepePaperSA = 11523,
  CrepePaperDB = 11524,
  CrepePaperAT = 11525,
  // Softcore Standard 2024
  MossSC = 11504,
  MossTT = 11505,
  MossPM = 11506,
  MossSA = 11507,
  MossDB = 11508,
  MossAT = 11509,
  // Softcore Standard 2023
  ChiffonSC = 11028,
  ChiffonTT = 11029,
  ChiffonPM = 11030,
  ChiffonSA = 11031,
  ChiffonDB = 11032,
  ChiffonAT = 11033,
  // Softcore Standard 2022
  LoofahSC = 10130,
  LoofahTT = 10131,
  LoofahPM = 10132,
  LoofahSA = 10133,
  LoofahDB = 10134,
  LoofahAT = 10135,
  // Softcore Standard 2021
  VelourSC = 10114,
  VelourTT = 10115,
  VelourPM = 10116,
  VelourSA = 10117,
  VelourDB = 10118,
  VelourAT = 10119,
  // Softcore Standard 2020
  ParaffinSC = 10098,
  ParaffinTT = 10099,
  ParaffinPM = 10100,
  ParaffinSA = 10101,
  ParaffinDB = 10102,
  ParaffinAT = 10103,
  // Softcore Standard 2019
  ChalkSC = 10082,
  ChalkTT = 10083,
  ChalkPM = 10084,
  ChalkSA = 10085,
  ChalkDB = 10086,
  ChalkAT = 10087,
  // Softcore Standard 2018
  GabardineSC = 8120,
  GabardineTT = 8121,
  GabardinePM = 8122,
  GabardineSA = 8123,
  GabardineDB = 8124,
  GabardineAT = 8125,
  // Softcore Standard 2017
  AerogelSC = 8106,
  AerogelTT = 8107,
  AerogelPM = 8108,
  AerogelSA = 8109,
  AerogelDB = 8110,
  AerogelAT = 8111,
  // Softcore Standard 2016
  WickerSC = 8092,
  WickerTT = 8093,
  WickerPM = 8094,
  WickerSA = 8095,
  WickerDB = 8096,
  WickerAT = 8097,
  // Softcore Standard 2015
  PolyesterSC = 7985,
  PolyesterTT = 7986,
  PolyesterPM = 7987,
  PolyesterSA = 7988,
  PolyesterDB = 7989,
  PolyesterAT = 7990,
  // Hardcore Standard 2025
  PetrifiedWoodSC = 11528,
  PetrifiedWoodTT = 11529,
  PetrifiedWoodPM = 11530,
  PetrifiedWoodSA = 11531,
  PetrifiedWoodDB = 11532,
  PetrifiedWoodAT = 11533,
  // Hardcore Standard 2024
  AdobeSC = 11512,
  AdobeTT = 11513,
  AdobePM = 11514,
  AdobeSA = 11515,
  AdobeDB = 11516,
  AdobeAT = 11517,
  // Hardcore Standard 2023
  CeramicSC = 11020,
  CeramicTT = 11021,
  CeramicPM = 11022,
  CeramicSA = 11023,
  CeramicDB = 11024,
  CeramicAT = 11025,
  // Hardcore Standard 2022
  FlagstoneSC = 10138,
  FlagstoneTT = 10139,
  FlagstonePM = 10140,
  FlagstoneSA = 10141,
  FlagstoneDB = 10142,
  FlagstoneAT = 10143,
  // Hardcore Standard 2021
  StainedGlassSC = 10122,
  StainedGlassTT = 10123,
  StainedGlassPM = 10124,
  StainedGlassSA = 10125,
  StainedGlassDB = 10126,
  StainedGlassAT = 10127,
  // Hardcore Standard 2020
  TerraCottaSC = 10106,
  TerraCottaTT = 10107,
  TerraCottaPM = 10108,
  TerraCottaSA = 10109,
  TerraCottaDB = 10110,
  TerraCottaAT = 10111,
  // Hardcore Standard 2019
  MarbleSC = 10090,
  MarbleTT = 10091,
  MarblePM = 10092,
  MarbleSA = 10093,
  MarbleDB = 10094,
  MarbleAT = 10095,
  // Hardcore Standard 2018
  FiberglassSC = 8127,
  FiberglassTT = 8128,
  FiberglassPM = 8129,
  FiberglassSA = 8130,
  FiberglassDB = 8131,
  FiberglassAT = 8132,
  // Hardcore Standard 2017
  WroughtIronSC = 8113,
  WroughtIronTT = 8114,
  WroughtIronPM = 8115,
  WroughtIronSA = 8116,
  WroughtIronDB = 8117,
  WroughtIronAT = 8118,
  // Hardcore Standard 2016
  BakeliteSC = 8099,
  BakeliteTT = 8100,
  BakelitePM = 8101,
  BakeliteSA = 8102,
  BakeliteDB = 8103,
  BakeliteAT = 8104,
  // Hardcore Standard 2015
  PorcelainSC = 7991,
  PorcelainTT = 7992,
  PorcelainPM = 7993,
  PorcelainSA = 7994,
  PorcelainDB = 7995,
  PorcelainAT = 7996,
  // Hardcore Unrestricted
  StainlessSC = 1224,
  StainlessTT = 1225,
  StainlessPM = 1226,
  StainlessSA = 1227,
  StainlessDB = 1228,
  StainlessAT = 1229,
  // Hardcore Oxygenarian
  PlexiSC = 1230,
  PlexiTT = 1231,
  PlexiPM = 1232,
  PlexiSA = 1233,
  PlexiDB = 1234,
  PlexiAT = 1235,
  // Bad Moon
  BrimstoneSC = 2814,
  BrimstoneTT = 2815,
  BrimstonePM = 2817,
  BrimstoneSA = 2818,
  BrimstoneDB = 2816,
  BrimstoneAT = 2813,
  // OCRS Gear
  DiceRing = 8290,
  DiceBeltBuckle = 8291,
  DicePrintPajamaPants = 8292,
  DiceShapedBackpack = 8293,
  DicePrintDoRag = 8294,
  DiceSunglasses = 8295,
  // Challenge Paths
  PickyTweezers = 7936,
  AdventurerBobblehead = 9084,
  PerfectlyFairCoin = 9526,
  GarlandOfGreatness = 9910,
  Ring = 10252,
  RedPlumbersBoots = 10501,
  QuantumOfFamiliar = 10758,
  TheBigBookOfEverySkill = 10917,
  StuffedDinosaur = 10949,
}

enum Thwaitgold {
  Bee = 5141,
  Grasshopper = 5222,
  Butterfly = 5392,
  StagBeetle = 5572,
  WoollyBear = 5694,
  Maggot = 5773,
  PrayingMantis = 6045,
  Firefly = 6298,
  GoliathBeetle = 6547,
  Bookworm = 6676,
  Ant = 6899,
  Dragonfly = 7249,
  WheelBug = 7498,
  Spider = 7668,
  Nit = 7935,
  ScarabBeetle = 8087,
  Caterpillar = 8296,
  Termite = 8556,
  Scorpion = 8984,
  Moth = 9031,
  Cockroach = 9099,
  Amoeba = 9346,
  Bug = 9488,
  TimeFly = 9525,
  Metabug = 9758,
  Chigger = 9917,
  MaskedHunter = 9941,
  Mosquito = 10184,
  Nymph = 10253,
  BombardierBeetle = 10319,
  BuzzyBeetle = 10470,
  KeyholeSpider = 10570,
  Slug = 10601,
  ListeningBug = 10736,
  QuantumBug = 10757,
  FireBeetle = 10791,
  Protozoa = 10894,
  Harvestman = 10918,
  MosquitoInAmber = 10950,
  AntiMoth = 11166,
  SplendorBeetle = 11255,
  Fairyfly = 11326,
  WolfSpider = 11563,
  IlliniginaIllinoiensis = 11593,
  ShieldBug = 11637,
  CordycepsAnt = 11848,
  MadHatterpillar = 11917,
}

enum FamiliarId {
  ReconstitutedCrow = 147,
  HoveringSkull = 163,
  QuantumEntangler = 307,
  HeatWave = 312,
  ColdCut = 313,
  ShameSpiral = 314,
  PhantomLimb = 315,
  FoulBall = 316,
  DireCassava = 317,
  Observer = 318,
  CoolCucumber = 319,
  DefectiveChildrensStapler = 320,
  Glover = 321,
  ZapperBug = 322,
}

export const SOFTCORE = -3;
export const HARDCORE = -2;

const paths: PathDef[] = [
  {
    id: SOFTCORE,
    name: "Softcore",
    image: "itemimages/karma.gif",
    items: [],
    equipment: [
      ItemId.PolyesterSC,
      ItemId.PolyesterTT,
      ItemId.PolyesterPM,
      ItemId.PolyesterSA,
      ItemId.PolyesterDB,
      ItemId.PolyesterAT,
      ItemId.WickerSC,
      ItemId.WickerTT,
      ItemId.WickerPM,
      ItemId.WickerSA,
      ItemId.WickerDB,
      ItemId.WickerAT,
      ItemId.AerogelSC,
      ItemId.AerogelTT,
      ItemId.AerogelPM,
      ItemId.AerogelSA,
      ItemId.AerogelDB,
      ItemId.AerogelAT,
      ItemId.GabardineSC,
      ItemId.GabardineTT,
      ItemId.GabardinePM,
      ItemId.GabardineSA,
      ItemId.GabardineDB,
      ItemId.GabardineAT,
      ItemId.ChalkSC,
      ItemId.ChalkTT,
      ItemId.ChalkPM,
      ItemId.ChalkSA,
      ItemId.ChalkDB,
      ItemId.ChalkAT,
      ItemId.ParaffinSC,
      ItemId.ParaffinTT,
      ItemId.ParaffinPM,
      ItemId.ParaffinSA,
      ItemId.ParaffinDB,
      ItemId.ParaffinAT,
      ItemId.VelourSC,
      ItemId.VelourTT,
      ItemId.VelourPM,
      ItemId.VelourSA,
      ItemId.VelourDB,
      ItemId.VelourAT,
      ItemId.LoofahSC,
      ItemId.LoofahTT,
      ItemId.LoofahPM,
      ItemId.LoofahSA,
      ItemId.LoofahDB,
      ItemId.LoofahAT,
      ItemId.ChiffonSC,
      ItemId.ChiffonTT,
      ItemId.ChiffonPM,
      ItemId.ChiffonSA,
      ItemId.ChiffonDB,
      ItemId.ChiffonAT,
      ItemId.MossSC,
      ItemId.MossTT,
      ItemId.MossPM,
      ItemId.MossSA,
      ItemId.MossDB,
      ItemId.MossAT,
      ItemId.CrepePaperSC,
      ItemId.CrepePaperTT,
      ItemId.CrepePaperPM,
      ItemId.CrepePaperSA,
      ItemId.CrepePaperDB,
      ItemId.CrepePaperAT,
    ],
    tattoos: [
      { name: "Seal Clubber", image: "class1" },
      { name: "Turtle Tamer", image: "class2" },
      { name: "Pastamancer", image: "class3" },
      { name: "Sauceror", image: "class4" },
      { name: "Disco Bandit", image: "class5" },
      { name: "Accordion Thief", image: "class6" },
      {
        name: "Normal Ascensions",
        image: [
          "asc01",
          "asc02",
          "asc03",
          "asc04",
          "asc05",
          "asc06",
          "asc07",
          "asc08",
          "asc09",
          "asc10",
          "asc11",
          "asc12",
        ],
      },
    ],
    points: null,
    maxPoints: 0,
  },
  {
    id: HARDCORE,
    name: "Hardcore",
    image: "otherimages/sigils/staintat.gif",
    items: [],
    equipment: [
      ItemId.StainlessSC,
      ItemId.StainlessTT,
      ItemId.StainlessPM,
      ItemId.StainlessSA,
      ItemId.StainlessDB,
      ItemId.StainlessAT,
      ItemId.PorcelainSC,
      ItemId.PorcelainTT,
      ItemId.PorcelainPM,
      ItemId.PorcelainSA,
      ItemId.PorcelainDB,
      ItemId.PorcelainAT,
      ItemId.BakeliteSC,
      ItemId.BakeliteTT,
      ItemId.BakelitePM,
      ItemId.BakeliteSA,
      ItemId.BakeliteDB,
      ItemId.BakeliteAT,
      ItemId.WroughtIronSC,
      ItemId.WroughtIronTT,
      ItemId.WroughtIronPM,
      ItemId.WroughtIronSA,
      ItemId.WroughtIronDB,
      ItemId.WroughtIronAT,
      ItemId.FiberglassSC,
      ItemId.FiberglassTT,
      ItemId.FiberglassPM,
      ItemId.FiberglassSA,
      ItemId.FiberglassDB,
      ItemId.FiberglassAT,
      ItemId.MarbleSC,
      ItemId.MarbleTT,
      ItemId.MarblePM,
      ItemId.MarbleSA,
      ItemId.MarbleDB,
      ItemId.MarbleAT,
      ItemId.TerraCottaSC,
      ItemId.TerraCottaTT,
      ItemId.TerraCottaPM,
      ItemId.TerraCottaSA,
      ItemId.TerraCottaDB,
      ItemId.TerraCottaAT,
      ItemId.StainedGlassSC,
      ItemId.StainedGlassTT,
      ItemId.StainedGlassPM,
      ItemId.StainedGlassSA,
      ItemId.StainedGlassDB,
      ItemId.StainedGlassAT,
      ItemId.FlagstoneSC,
      ItemId.FlagstoneTT,
      ItemId.FlagstonePM,
      ItemId.FlagstoneSA,
      ItemId.FlagstoneDB,
      ItemId.FlagstoneAT,
      ItemId.CeramicSC,
      ItemId.CeramicTT,
      ItemId.CeramicPM,
      ItemId.CeramicSA,
      ItemId.CeramicDB,
      ItemId.CeramicAT,
      ItemId.AdobeSC,
      ItemId.AdobeTT,
      ItemId.AdobePM,
      ItemId.AdobeSA,
      ItemId.AdobeDB,
      ItemId.AdobeAT,
      ItemId.PetrifiedWoodSC,
      ItemId.PetrifiedWoodTT,
      ItemId.PetrifiedWoodPM,
      ItemId.PetrifiedWoodSA,
      ItemId.PetrifiedWoodDB,
      ItemId.PetrifiedWoodAT,
    ],
    tattoos: [
      { name: "Seal Clubber", image: "class1hc" },
      { name: "Turtle Tamer", image: "class2hc" },
      { name: "Pastamancer", image: "class3hc" },
      { name: "Sauceror", image: "class4hc" },
      { name: "Disco Bandit", image: "class5hc" },
      { name: "Accordion Thief", image: "class6hc" },
      {
        name: "Hardcore Ascensions",
        image: [
          "hasc01",
          "hasc02",
          "hasc03",
          "hasc04",
          "hasc05",
          "hasc06",
          "hasc07",
          "hasc08",
          "hasc09",
          "hasc10",
          "hasc11",
          "hasc12",
        ],
      },
    ],
    points: null,
    maxPoints: 0,
  },
  {
    id: -1,
    name: "Bad Moon",
    image: "otherimages/sigils/brimtat.gif",
    items: [],
    equipment: [
      ItemId.BrimstoneSC,
      ItemId.BrimstoneTT,
      ItemId.BrimstonePM,
      ItemId.BrimstoneSA,
      ItemId.BrimstoneDB,
      ItemId.BrimstoneAT,
    ],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 1,
    name: "Boozetafarian",
    image: "itemimages/martini.gif",
    items: [],
    equipment: [],
    tattoos: [{ name: "Hardcore Boozetafarian", image: "nofood" }],
    points: null,
    maxPoints: 0,
  },
  {
    id: 2,
    name: "Teetotaler",
    image: "itemimages/bowl.gif",
    items: [],
    equipment: [],
    tattoos: [{ name: "Hardcore Teetotaler", image: "nobeer" }],
    points: null,
    maxPoints: 0,
  },
  {
    id: 3,
    name: "Oxygenarian",
    image: "itemimages/smalloxy.gif",
    items: [],
    equipment: [
      ItemId.PlexiSC,
      ItemId.PlexiTT,
      ItemId.PlexiPM,
      ItemId.PlexiSA,
      ItemId.PlexiDB,
      ItemId.PlexiAT,
    ],
    tattoos: [{ name: "Hardcore Oxygenarian", image: "oxy" }],
    points: null,
    maxPoints: 0,
  },
  {
    id: 4,
    name: "Bees Hate You",
    image: "itemimages/beeicon.gif",
    items: [Thwaitgold.Bee],
    equipment: [],
    tattoos: [],
    familiars: [FamiliarId.ReconstitutedCrow],
    points: null,
    maxPoints: 0,
  },
  {
    id: 6,
    name: "Way of the Surprising Fist",
    image: "itemimages/wosp_fist.gif",
    items: [Thwaitgold.Grasshopper],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 7,
    name: "Trendy",
    image: "itemimages/trendyicon.gif",
    items: [Thwaitgold.Butterfly],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 8,
    name: "Avatar of Boris",
    image: "itemimages/trusty.gif",
    items: [Thwaitgold.StagBeetle],
    equipment: [],
    tattoos: [
      { name: "Boris", image: "class11" },
      { name: "Hardcore Boris", image: "class11hc" },
    ],
    points: "borisPoints",
    maxPoints: 29,
  },
  {
    id: 9,
    name: "Bugbear Invasion",
    image: "itemimages/familiar39.gif",
    items: [Thwaitgold.WoollyBear],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 10,
    name: "Zombie Slayer",
    image: "itemimages/tombstone.gif",
    items: [Thwaitgold.Maggot],
    equipment: [],
    tattoos: [
      { name: "Zombie Slayer", image: "class12" },
      { name: "Hardcore Zombie Slayer", image: "class12hc" },
    ],
    familiars: [FamiliarId.HoveringSkull],
    points: "zombiePoints",
    maxPoints: 30,
  },
  {
    id: 11,
    name: "Class Act",
    image: "itemimages/motorboat.gif",
    items: [Thwaitgold.PrayingMantis],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 12,
    name: "Avatar of Jarlsberg",
    image: "itemimages/jarlhat.gif",
    items: [Thwaitgold.Firefly],
    equipment: [],
    tattoos: [
      { name: "Jarlsberg", image: "class14" },
      { name: "Hardcore Jarlsberg", image: "class14hc" },
    ],
    points: "jarlsbergPoints",
    maxPoints: 30,
  },
  {
    id: 14,
    name: "BIG!",
    image: "itemimages/bigicon.gif",
    items: [Thwaitgold.GoliathBeetle],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 15,
    name: "KOLHS",
    image: "itemimages/kolhsicon.gif",
    items: [Thwaitgold.Bookworm],
    equipment: [],
    tattoos: [],
    points: "yearbookCameraAscensions",
    maxPoints: 20,
  },
  {
    id: 16,
    name: "Class Act II: A Class For Pigs",
    image: "itemimages/motorboat2.gif",
    items: [Thwaitgold.Ant],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 17,
    name: "Avatar of Sneaky Pete",
    image: "itemimages/bigglasses.gif",
    items: [Thwaitgold.Dragonfly],
    equipment: [],
    tattoos: [
      { name: "Sneaky Pete", image: "class15" },
      { name: "Hardcore Sneaky Pete", image: "class15hc" },
    ],
    points: "sneakyPetePoints",
    maxPoints: 30,
  },
  {
    id: 18,
    name: "Slow and Steady",
    image: "itemimages/sas.gif",
    items: [Thwaitgold.WheelBug],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 19,
    name: "Heavy Rains",
    image: "itemimages/familiar31.gif",
    items: [Thwaitgold.Spider],
    equipment: [],
    tattoos: [],
    points: [
      "heavyRainsStartingLightning",
      "heavyRainsStartingThunder",
      "heavyRainsStartingRain",
    ],
    maxPoints: 9,
  },
  {
    id: 21,
    name: "Picky",
    image: "itemimages/pickypath.gif",
    items: [Thwaitgold.Nit, ItemId.PickyTweezers],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 22,
    name: "Standard",
    image: "itemimages/standardicon.gif",
    items: [],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 23,
    name: "Actually Ed the Undying",
    image: "itemimages/scarab.gif",
    items: [Thwaitgold.ScarabBeetle],
    equipment: [],
    tattoos: [
      { name: "Ed the Undying", image: "class17" },
      { name: "Hardcore Ed the Undying", image: "class17hc" },
    ],
    points: "edPoints",
    maxPoints: 20,
  },
  {
    id: 24,
    name: "One Crazy Random Summer",
    image: "itemimages/dice.gif",
    items: [Thwaitgold.Caterpillar],
    equipment: [
      ItemId.DiceRing,
      ItemId.DiceBeltBuckle,
      ItemId.DicePrintPajamaPants,
      ItemId.DiceShapedBackpack,
      ItemId.DicePrintDoRag,
      ItemId.DiceSunglasses,
    ],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 25,
    name: "Community Service",
    image: "itemimages/csplaquesmall.gif",
    items: [Thwaitgold.Termite],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 26,
    name: "Avatar of West of Loathing",
    image: "itemimages/badge.gif",
    items: [Thwaitgold.Scorpion],
    equipment: [],
    tattoos: [
      { name: "Cow Puncher", image: "class18" },
      { name: "Hardcore Cow Puncher", image: "class18hc" },
      { name: "Beanslinger", image: "class19" },
      { name: "Hardcore Beanslinger", image: "class19hc" },
      { name: "Snake Oiler", image: "class20" },
      { name: "Hardcore Snake Oiler", image: "class20hc" },
    ],
    points: [
      "awolPointsCowpuncher",
      "awolPointsBeanslinger",
      "awolPointsSnakeoiler",
    ],
    maxPoints: 30,
  },
  {
    id: 27,
    name: "The Source",
    image: "itemimages/ss_datasiphon.gif",
    items: [Thwaitgold.Moth],
    equipment: [],
    tattoos: [],
    points: "sourcePoints",
    maxPoints: 12,
  },
  {
    id: 28,
    name: "Nuclear Autumn",
    image: "itemimages/radiation.gif",
    items: [Thwaitgold.Cockroach, ItemId.AdventurerBobblehead],
    equipment: [],
    tattoos: [],
    points: "nuclearAutumnPoints",
    maxPoints: 23,
  },
  {
    id: 29,
    name: "Gelatinous Noob",
    image: "itemimages/gcube.gif",
    items: [Thwaitgold.Amoeba],
    equipment: [],
    tattoos: [
      { name: "Gelatinous Noob", image: "class23" },
      { name: "Hardcore Gelatinous Noob", image: "class23hc" },
    ],
    points: "noobPoints",
    maxPoints: 20,
  },
  {
    id: 30,
    name: "License to Adventure",
    image: "itemimages/briefcase.gif",
    items: [Thwaitgold.Bug],
    equipment: [],
    tattoos: [],
    points: "bondPoints",
    maxPoints: 23,
  },
  {
    id: 31,
    name: "Live. Ascend. Repeat.",
    image: "itemimages/watch.gif",
    items: [Thwaitgold.TimeFly, ItemId.PerfectlyFairCoin],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 32,
    name: "Pocket Familiars",
    image: "itemimages/spiritorb.gif",
    items: [Thwaitgold.Metabug],
    equipment: [],
    tattoos: [],
    points: "pokefamPoints",
    maxPoints: 10,
  },
  {
    id: 33,
    name: "G-Lover",
    image: "itemimages/g-loveheart.gif",
    items: [Thwaitgold.Chigger, ItemId.GarlandOfGreatness],
    equipment: [],
    tattoos: [{ name: "Gattoo", image: "gtat" }],
    points: "gloverPoints",
    maxPoints: 10,
  },
  {
    id: 34,
    name: "Disguises Delimit",
    image: "itemimages/dd_icon.gif",
    items: [Thwaitgold.MaskedHunter],
    equipment: [],
    tattoos: [],
    points: "masksUnlocked",
    maxPoints: 25,
  },
  {
    id: 35,
    name: "Dark Gyffte",
    image: "itemimages/darkgift.gif",
    items: [Thwaitgold.Mosquito],
    equipment: [],
    tattoos: [
      { name: "Vampyre", image: "class24" },
      { name: "Hardcore Vampyre", image: "class24hc" },
    ],
    points: "darkGyfftePoints",
    maxPoints: 23,
  },
  {
    id: 36,
    name: "Two Crazy Random Summer",
    image: "itemimages/twocrazydice.gif",
    items: [Thwaitgold.Nymph, ItemId.Ring],
    equipment: [],
    tattoos: [],
    points: "twoCRSPoints",
    maxPoints: 37,
  },
  {
    id: 37,
    name: "Kingdom of Exploathing",
    image: "itemimages/puff.gif",
    items: [Thwaitgold.BombardierBeetle],
    equipment: [],
    tattoos: [],
    points: "skillLevel188",
    maxPoints: 13,
  },
  {
    id: 38,
    name: "Path of the Plumber",
    image: "itemimages/mario_mushroom1.gif",
    items: [Thwaitgold.BuzzyBeetle, ItemId.RedPlumbersBoots],
    equipment: [],
    tattoos: [
      { name: "Plumber", image: "class25" },
      { name: "Hardcore Plumber", image: "class25hc" },
    ],
    points: "plumberPoints",
    maxPoints: 11,
  },
  {
    id: 39,
    name: "Low Key Summer",
    image: "itemimages/littlelock.gif",
    items: [Thwaitgold.KeyholeSpider],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 40,
    name: "Grey Goo",
    image: "itemimages/greygooball.gif",
    items: [Thwaitgold.Slug],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 41,
    name: "You, Robot",
    image: "itemimages/robobattery.gif",
    items: [Thwaitgold.ListeningBug],
    equipment: [],
    tattoos: [],
    points: "youRobotPoints",
    maxPoints: 12,
  },
  {
    id: 42,
    name: "Quantum Terrarium",
    image: "itemimages/quantum.gif",
    items: [Thwaitgold.QuantumBug, ItemId.QuantumOfFamiliar],
    equipment: [],
    tattoos: [],
    familiars: [FamiliarId.QuantumEntangler],
    points: "quantumPoints",
    maxPoints: 11,
  },
  {
    id: 43,
    name: "Wildfire",
    image: "itemimages/fire.gif",
    items: [Thwaitgold.FireBeetle],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 44,
    name: "Grey You",
    image: "itemimages/greygooring.gif",
    items: [Thwaitgold.Protozoa],
    equipment: [],
    tattoos: [
      { name: "Grey Goo", image: "class27" },
      { name: "Hardcore Grey Goo", image: "class27hc" },
    ],
    points: "greyYouPoints",
    maxPoints: 11,
  },
  {
    id: 45,
    name: "Journeyman",
    image: "itemimages/map.gif",
    items: [Thwaitgold.Harvestman, ItemId.TheBigBookOfEverySkill],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 46,
    name: "Fall of the Dinosaurs",
    image: "itemimages/dinostuffy.gif",
    items: [Thwaitgold.MosquitoInAmber, ItemId.StuffedDinosaur],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 47,
    name: "Avatar of Shadows Over Loathing",
    image: "itemimages/aosol.gif",
    items: [Thwaitgold.AntiMoth],
    equipment: [],
    tattoos: [
      { name: "Pig Skinner", image: "class28" },
      { name: "Hardcore Pig Skinner", image: "class28hc" },
      { name: "Cheese Wizard", image: "class29" },
      { name: "Hardcore Cheese Wizard", image: "class29hc" },
      { name: "Jazz Agent", image: "class30" },
      { name: "Hardcore Jazz Agent", image: "class30hc" },
    ],
    points: [
      "asolPointsPigSkinner",
      "asolPointsCheeseWizard",
      "asolPointsJazzAgent",
    ],
    maxPoints: 11,
  },
  {
    id: 48,
    name: "Legacy of Loathing",
    image: "itemimages/xx.gif",
    items: [Thwaitgold.SplendorBeetle],
    equipment: [],
    tattoos: [],
    points: "legacyPoints",
    maxPoints: 19,
  },
  {
    id: 49,
    name: "A Shrunken Adventurer am I",
    image: "itemimages/kiloskull.gif",
    items: [Thwaitgold.Fairyfly],
    equipment: [],
    tattoos: [],
    points: "skillLevel227",
    maxPoints: 11,
  },
  {
    id: 50,
    name: "WereProfessor",
    image: "itemimages/intrinsic_beast.gif",
    items: [Thwaitgold.WolfSpider],
    equipment: [],
    tattoos: [
      { name: "WereProfessor", image: "class31" },
      { name: "Hardcore WereProfessor", image: "class31hc" },
    ],
    points: "wereProfessorPoints",
    maxPoints: 23,
  },
  {
    id: 51,
    name: "11 Things I Hate About U",
    image: "itemimages/ihatesu.gif",
    items: [Thwaitgold.IlliniginaIllinoiensis],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
  {
    id: 52,
    name: "Avant Guard",
    image: "itemimages/radshield.gif",
    items: [Thwaitgold.ShieldBug],
    equipment: [],
    tattoos: [],
    points: "avantGuardPoints",
    maxPoints: 11,
  },
  {
    id: 53,
    name: "Z is for Zootomist",
    image: "itemimages/zootomist.gif",
    items: [Thwaitgold.CordycepsAnt],
    equipment: [],
    tattoos: [
      { name: "Zootomist", image: "class32" },
      { name: "Hardcore Zootomist", image: "class32hc" },
    ],
    familiars: [
      FamiliarId.HeatWave,
      FamiliarId.ColdCut,
      FamiliarId.ShameSpiral,
      FamiliarId.PhantomLimb,
      FamiliarId.FoulBall,
      FamiliarId.DireCassava,
      FamiliarId.Observer,
      FamiliarId.CoolCucumber,
      FamiliarId.DefectiveChildrensStapler,
      FamiliarId.Glover,
      FamiliarId.ZapperBug,
    ],
    points: "zootomistPoints",
    maxPoints: 10,
  },
  {
    id: 54,
    name: "Hat Trick",
    image: "itemimages/hat_bycocket.gif",
    items: [Thwaitgold.MadHatterpillar],
    equipment: [],
    tattoos: [],
    points: null,
    maxPoints: 0,
  },
];

export default paths;
