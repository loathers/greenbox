import tattoos from "../data/tattoos";

export enum TattooStatus {
  NONE = 0,
  HAVE_OUTFIT = 1,
  HAVE = 2,
}

export interface TattooDef {
  name: string;
  image: string;
  outfit: number;
}

export function loadTattoos(): TattooDef[] {
  return tattoos as unknown as TattooDef[];
}

export function getOutfitTattoos(tattoos: readonly TattooDef[]) {
  return tattoos.filter((t) => t.outfit !== undefined).sort((a, b) => a.outfit - b.outfit);
}

export type RawOutfitTattoo = readonly [id: number, status: TattooStatus];

export const compressOutfitTattoos = (tattoos: RawOutfitTattoo[]) =>
  tattoos
    .sort((a, b) => a[0] - b[0])
    .reduce((r, tattoo) => `${r}${"0".repeat(tattoo[0] - r.length - 1)}${tattoo[1]}`, "")
    .replace(/0+$/, "");

export const expandOutfitTattoos = (s: string) =>
  s.split("").map((c, i) => [i + 1, Number(c)] as RawOutfitTattoo);
