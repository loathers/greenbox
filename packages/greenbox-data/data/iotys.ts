import type { KnownProperty } from "libram";

interface BaseIotY {
  id: number;
  year: number;
}

interface EudoraIotY extends BaseIotY {
  type: "eudora";
  /**
   * The id of the correspondent
   */
  eudoraId: number;
}

interface FamiliarIotY extends BaseIotY {
  type: "familiar";
  /**
   * Familiar name to check. If an array is provided, checks for any of those familiars
   */
  familiar: string | string[];
}

interface ItemIotY extends BaseIotY {
  type: "item";
  /**
   * Item name to check. If an array is provided, checks for any of those items.
   * If the item provided is part of a fold group, any of those items will match.
   */
  item: string | string[];
}

interface PreferenceIotY extends BaseIotY {
  type: "preference";
  /**
   * Preference to check. If it contains "true" the IotY will be considered owned.
   */
  preference: KnownProperty;
}

export type IotYDef = EudoraIotY | FamiliarIotY | ItemIotY | PreferenceIotY;

const iotys: IotYDef[] = [
  {
    id: 898,
    year: 2005,
    type: "familiar",
    familiar: "Cheshire Bat",
  }, // Cheshire Bitten
  {
    id: 897,
    year: 2005,
    type: "familiar",
    familiar: "Coffee Pixie",
  }, // coffee sprite
  {
    id: 1308,
    year: 2006,
    type: "familiar",
    familiar: "Cymbal-Playing Monkey",
  }, // unwound cymbal-playing monkey
  {
    id: 1307,
    year: 2006,
    type: "familiar",
    familiar: "Attention-Deficit Demon",
  }, // calm attention-deficit demon
  {
    id: 1970,
    year: 2007,
    type: "familiar",
    familiar: "Nervous Tick",
  }, // nervous tick egg
  {
    id: 1967,
    year: 2007,
    type: "familiar",
    familiar: "Jitterbug",
  }, // jitterbug larva
  {
    id: 2939,
    year: 2008,
    type: "familiar",
    familiar: "Hunchbacked Minion",
  }, // unemployed hunchbacked minion
  {
    id: 2937,
    year: 2008,
    type: "familiar",
    familiar: "Casagnova Gnome",
  }, // siesta-ing Casagnova gnome
  {
    id: 3481,
    year: 2009,
    type: "familiar",
    familiar: "Uniclops",
  }, // uniclops egg
  {
    id: 3482,
    year: 2009,
    type: "familiar",
    familiar: "Psychedelic Bear",
  }, // passed-out psychedelic bear
  {
    id: 4227,
    year: 2010,
    type: "familiar",
    familiar: "Chauvinist Pig",
  }, // hungover chauvinist pig
  {
    id: 4228,
    year: 2010,
    type: "familiar",
    familiar: "Dancing Frog",
  }, // perfectly ordinary frog
  {
    id: 4734,
    year: 2011,
    type: "familiar",
    familiar: "Dramatic Hedgehog",
  }, // rehearsing dramatic hedgehog
  {
    id: 4732,
    year: 2011,
    type: "familiar",
    familiar: "Piano Cat",
  }, // sleeping piano cat
  {
    id: 5377,
    year: 2012,
    type: "familiar",
    familiar: "Bloovian Groose",
  }, // The Groose in the Hoose
  {
    id: 5442,
    year: 2012,
    type: "familiar",
    familiar: "Blavious Kloop",
  }, // The Kloop in the Coop
  {
    id: 5895,
    year: 2013,
    type: "familiar",
    familiar: "Unconscious Collective",
  }, // avatar of the Unconscious Collective
  {
    id: 5893,
    year: 2013,
    type: "familiar",
    familiar: "Angry Jung Man",
  }, // dreaming Jung man
  {
    id: 7062,
    year: 2014,
    type: "familiar",
    familiar: "Grim Brother",
  }, // praying Grim Brother
  {
    id: 7064,
    year: 2014,
    type: "familiar",
    familiar: "Grimstone Golem",
  }, // hibernating Grimstone Golem
  {
    id: 8064,
    year: 2015,
    type: "familiar",
    familiar: "Golden Monkey",
  }, // golden monkey statuette
  {
    id: 8068,
    year: 2015,
    type: "familiar",
    familiar: "Adventurous Spelunker",
  }, // Professor of Spelunkology
  {
    id: 8831,
    year: 2016,
    type: "familiar",
    familiar: "Rockin' Robin",
  }, // basking robin
  {
    id: 8795,
    year: 2016,
    type: "item",
    item: "replica bat-oomerang",
  }, // Batfellow comic
  {
    id: 9303,
    year: 2017,
    type: "familiar",
    familiar: "Optimistic Candle",
  }, // hopeful candle
  {
    id: 9679,
    year: 2018,
    type: "familiar",
    familiar: "Garbage Fire",
  }, // kerosene-soaked skip
  {
    id: 10146,
    year: 2019,
    type: "familiar",
    familiar: "Elf Operative",
  }, // elf sleeper agent
  {
    id: 10431,
    year: 2020,
    type: "item",
    item: "Retrospecs",
  }, // Retrospecs try-at-home kit
  {
    id: 10731,
    year: 2021,
    type: "item",
    item: "fresh coat of paint",
  }, // fresh can of paint
  {
    id: 10884,
    year: 2022,
    type: "item",
    item: "cursed magnifying glass",
  }, // mint condition magnifying glass
  {
    id: 11089,
    year: 2023,
    type: "familiar",
    familiar: "Hobo in Sheep's Clothing",
  }, // mint condition magnifying glass
  {
    id: 11471,
    year: 2024,
    type: "eudora",
    eudoraId: 6,
  }, // Black and White Apron Enrollment Form
  {
    id: 11807,
    year: 2025,
    type: "item",
    item: "server room key",
  }, // CyberRealm keycode
];

export default iotys;
