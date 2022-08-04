import jsoncrush from "jsoncrush";

import { compressFamiliars, expandFamiliars, RawFamiliar } from "./familiars";
import { compressSkills, expandSkills, RawSkill } from "./skills";
import { compressOutfitTattoos, expandOutfitTattoos, RawOutfitTattoo } from "./tattoos";
import { compressTrophies, expandTrophies, RawTrophy } from "./trophies";

export * from "./skills";
export * from "./familiars";
export * from "./tattoos";
export * from "./trophies";

export interface RawSnapshotData {
  skills: RawSkill[];
  familiars: RawFamiliar[];
  trophies: RawTrophy[];
  outfitTattoos: RawOutfitTattoo[];
}

export type CompressedSnapshotData = { [key in keyof RawSnapshotData]: string };

export function compress(raw: RawSnapshotData): string {
  const compressed: CompressedSnapshotData = {
    skills: compressSkills(raw.skills),
    familiars: compressFamiliars(raw.familiars),
    trophies: compressTrophies(raw.trophies),
    outfitTattoos: compressOutfitTattoos(raw.outfitTattoos),
  };

  const compressedString = JSON.stringify(compressed);
  console.log(compressedString);
  return decodeURIComponent(jsoncrush.crush(compressedString));
}

export function expand(encoded: string): RawSnapshotData {
  const decoded = jsoncrush.uncrush(decodeURIComponent(encoded.replace(/\n/g, "")));
  const compressed = JSON.parse(decoded) as CompressedSnapshotData;

  return {
    skills: expandSkills(compressed.skills),
    familiars: expandFamiliars(compressed.familiars),
    trophies: expandTrophies(compressed.trophies),
    outfitTattoos: expandOutfitTattoos(compressed.outfitTattoos),
  };
}
