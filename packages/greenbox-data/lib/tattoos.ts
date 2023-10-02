import tattoos from "../data/tattoos";

import { MiscTattooDef, OutfitTattooDef, TattooDef } from "./types";

export const enum TattooStatus {
  NONE = 0,
  HAVE_OUTFIT = 1,
  HAVE = 2,
}

export function loadTattoos(lastKnownSize = 0) {
  const size = JSON.stringify(tattoos).length;

  if (size === lastKnownSize) return null;

  return {
    data: tattoos as unknown as typeof tattoos,
    size: size,
  };
}

export function isOutfitTattoo(tattoo: TattooDef): tattoo is OutfitTattooDef {
  return "outfit" in tattoo;
}

export function isMiscTattoo(tattoo: TattooDef): tattoo is MiscTattooDef {
  return "misc" in tattoo;
}

export function getMaxTattooLevel(tattoo: TattooDef) {
  return Array.isArray(tattoo.image) ? tattoo.image.length : 1;
}

export function getOutfitTattoos(tattoos: readonly TattooDef[]) {
  return tattoos.filter(isOutfitTattoo).sort((a, b) => a.outfit - b.outfit);
}

export function getMiscTattoos(tattoos: readonly TattooDef[]) {
  return tattoos.filter((t): t is MiscTattooDef => "misc" in t).sort((a, b) => a.misc - b.misc);
}

export type RawTattoo = [id: number, status: TattooStatus];

export const compressTattoos = (tattoos: RawTattoo[]) =>
  tattoos
    .sort((a, b) => a[0] - b[0])
    .reduce((r, tattoo) => `${r}${"0".repeat(tattoo[0] - r.length - 1)}${tattoo[1]}`, "")
    .replace(/0+$/, "");

export const expandTattoos = (s = ""): RawTattoo[] => s.split("").map((c, i) => [i + 1, Number(c)]);
