import jsoncrush from "jsoncrush";

import { compressFamiliars, expandFamiliars, RawFamiliar } from "./familiars.js";
import { compressIotMs, expandIotMs, RawIotM } from "./iotms.js";
import { compressItems, expandItems, RawItem } from "./items.js";
import { compressMeta, expandMeta, Meta } from "./meta.js";
import { compressPaths, expandPaths, RawPath } from "./paths.js";
import { compressSkills, expandSkills, RawSkill } from "./skills.js";
import { compressTattoos, expandTattoos, RawTattoo } from "./tattoos.js";
import { compressTrophies, expandTrophies, RawTrophy } from "./trophies.js";

export { isSkillPermable } from "data-of-loathing";
export * from "./familiars.js";
export * from "./items.js";
export * from "./paths.js";
export * from "./skills.js";
export type { RawTattoo } from "./tattoos.js";
export {
  loadTattoos,
  getMiscTattoos,
  getOutfitTattoos,
  getMaxTattooLevel,
  isOutfitTattoo,
  isMiscTattoo,
  OutfitTattooStatus,
} from "./tattoos.js";
export * from "./trophies.js";
export * from "./iotms.js";

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
  iotms: RawIotM[];
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
    iotms: compressIotMs(raw.iotms),
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
    iotms: expandIotMs(compressed.iotms),
    items: expandItems(compressed.items),
  };
}
