import jsoncrush from "jsoncrush";

import {
  compressIotMBindables,
  compressIotYBindables,
  expandIotMBindables,
  expandIotYBindables,
  type RawBindable,
} from "./bindable.js";
import {
  compressFamiliars,
  expandFamiliars,
  type RawFamiliar,
} from "./familiars.js";
import { compressItems, expandItems, type RawItem } from "./items.js";
import { compressMeta, expandMeta, type Meta } from "./meta.js";
import { compressPaths, expandPaths, type RawPath } from "./paths.js";
import { compressSkills, expandSkills, type RawSkill } from "./skills.js";
import { compressTattoos, expandTattoos, type RawTattoo } from "./tattoos.js";
import {
  compressTrophies,
  expandTrophies,
  type RawTrophy,
} from "./trophies.js";

export * from "./familiars.js";
export * from "./items.js";
export * from "./paths.js";
export * from "./skills.js";
export type { RawTattoo } from "./tattoos.js";
export {
  getTattoos,
  getMiscTattoos,
  getOutfitTattoos,
  getMaxTattooLevel,
  isOutfitTattoo,
  isMiscTattoo,
  OutfitTattooStatus,
} from "./tattoos.js";
export * from "./trophies.js";
export * from "./bindable.js";

export * from "./types.js";

export { arrayOf, tuple } from "./utils.js";

/**
 * Major version number for the snapshot data
 * ------
 * Version 1: Initial
 * Version 2: Inverted the order of standard rewards so they are chronological
 */
export const VERSION = 2;

export interface RawSnapshotData {
  meta: Meta;
  skills: RawSkill[];
  familiars: RawFamiliar[];
  trophies: RawTrophy[];
  outfitTattoos: RawTattoo[];
  miscTattoos: RawTattoo[];
  paths: RawPath[];
  iotms: RawBindable[];
  iotys: RawBindable[];
  items: RawItem[];
}

export type CompressedSnapshotData = { [key in keyof RawSnapshotData]: string };

export function compress(raw: RawSnapshotData): string {
  const compressed: CompressedSnapshotData = {
    meta: compressMeta(raw.meta),
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    miscTattoos: compressTattoos(raw.miscTattoos),
    outfitTattoos: compressTattoos(raw.outfitTattoos),
    paths: compressPaths(raw.paths),
    iotms: compressIotMBindables(raw.iotms),
    iotys: compressIotYBindables(raw.iotys),
    items: compressItems(raw.items),
  };

  const compressedString = JSON.stringify(compressed);
  return encodeURIComponent(jsoncrush.crush(compressedString));
}

export function expand(encoded: string): RawSnapshotData {
  const decoded = jsoncrush.uncrush(
    decodeURIComponent(encoded.replace(/\n/g, "")),
  );
  const compressed = JSON.parse(decoded) as CompressedSnapshotData;

  return {
    meta: expandMeta(compressed.meta),
    skills: expandSkills(compressed.skills),
    familiars: expandFamiliars(compressed.familiars),
    trophies: expandTrophies(compressed.trophies),
    outfitTattoos: expandTattoos(compressed.outfitTattoos),
    miscTattoos: expandTattoos(compressed.miscTattoos),
    paths: expandPaths(compressed.paths),
    iotms: expandIotMBindables(compressed.iotms),
    iotys: expandIotYBindables(compressed.iotys),
    items: expandItems(compressed.items),
  };
}
