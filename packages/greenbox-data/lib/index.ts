import jsoncrush from "jsoncrush";

import { compressFamiliars, expandFamiliars, RawFamiliar } from "./familiars";
import { compressIotMs, expandIotMs, RawIotM } from "./iotms";
import { compressMeta, expandMeta, Meta } from "./meta";
import { compressPaths, expandPaths, RawPath } from "./paths";
import { compressSkills, expandSkills, RawSkill } from "./skills";
import { compressOutfitTattoos, expandOutfitTattoos, RawOutfitTattoo } from "./tattoos";
import { compressTrophies, expandTrophies, RawTrophy } from "./trophies";

export * from "./classes";
export * from "./effects";
export * from "./familiars";
export * from "./items";
export * from "./paths";
export * from "./skills";
export * from "./tattoos";
export * from "./trophies";
export * from "./iotms";

export interface RawSnapshotData {
  meta: Meta;
  skills: RawSkill[];
  familiars: RawFamiliar[];
  trophies: RawTrophy[];
  outfitTattoos: RawOutfitTattoo[];
  paths: RawPath[];
  iotms: RawIotM[];
}

export type CompressedSnapshotData = { [key in keyof RawSnapshotData]: string };

export function compress(raw: RawSnapshotData): string {
  const compressed: CompressedSnapshotData = {
    meta: compressMeta(raw.meta),
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    outfitTattoos: compressOutfitTattoos(raw.outfitTattoos),
    paths: compressPaths(raw.paths),
    iotms: compressIotMs(raw.iotms),
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
    outfitTattoos: expandOutfitTattoos(compressed.outfitTattoos),
    paths: expandPaths(compressed.paths),
    iotms: expandIotMs(compressed.iotms),
  };
}
