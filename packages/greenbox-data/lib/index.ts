import jsoncrush from "jsoncrush";

import { compressFamiliars, expandFamiliars, RawFamiliar } from "./familiars";
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
export * from "./iotms"

export interface RawSnapshotData {
  skills: RawSkill[];
  familiars: RawFamiliar[];
  trophies: RawTrophy[];
  outfitTattoos: RawOutfitTattoo[];
  paths: RawPath[];
}

export type CompressedSnapshotData = { [key in keyof RawSnapshotData]: string };

export function compress(raw: RawSnapshotData): string {
  const compressed: CompressedSnapshotData = {
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    outfitTattoos: compressOutfitTattoos(raw.outfitTattoos),
    paths: compressPaths(raw.paths),
  };

  const compressedString = JSON.stringify(compressed);
  return encodeURIComponent(jsoncrush.crush(compressedString));
}

export function expand(encoded: string): RawSnapshotData {
  const decoded = jsoncrush.uncrush(decodeURIComponent(encoded.replace(/\n/g, "")));
  const compressed = JSON.parse(decoded) as CompressedSnapshotData;

  return {
    skills: expandSkills(compressed.skills),
    familiars: expandFamiliars(compressed.familiars),
    trophies: expandTrophies(compressed.trophies),
    outfitTattoos: expandOutfitTattoos(compressed.outfitTattoos),
    paths: expandPaths(compressed.paths),
  };
}
