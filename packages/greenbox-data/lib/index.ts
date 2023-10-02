import jsoncrush from "jsoncrush";

import { compressFamiliars, expandFamiliars, RawFamiliar } from "./familiars";
import { compressIotMs, expandIotMs, RawIotM } from "./iotms";
import { compressItems, expandItems, RawItem } from "./items";
import { compressMeta, expandMeta, Meta } from "./meta";
import { compressPaths, expandPaths, RawPath } from "./paths";
import { compressSkills, expandSkills, RawSkill } from "./skills";
import { compressTattoos, expandTattoos, RawTattoo } from "./tattoos";
import { compressTrophies, expandTrophies, RawTrophy } from "./trophies";

export * from "./classes";
export * from "./effects";
export * from "./familiars";
export * from "./items";
export * from "./paths";
export * from "./skills";
export type { RawTattoo } from "./tattoos";
export {
  loadTattoos,
  getMiscTattoos,
  getOutfitTattoos,
  getMaxTattooLevel,
  isOutfitTattoo,
  isMiscTattoo,
  OutfitTattooStatus,
} from "./tattoos";
export * from "./trophies";
export * from "./iotms";

export * from "./types";

export { arrayOf } from "./utils";

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
  const decoded = jsoncrush.uncrush(decodeURIComponent(encoded.replace(/\n/g, "")));
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
