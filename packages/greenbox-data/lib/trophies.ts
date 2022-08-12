import trophies from "../data/trophies";

export enum TrophyStatus {
  NONE = 0,
  HAVE = 1,
}

export interface TrophyDef {
  id: number;
  image: string;
  name: string;
}

export function loadTrophies(lastKnownSize = 0) {
  const size = JSON.stringify(trophies).length;

  if (size === lastKnownSize) return null;

  return {
    data: trophies as unknown as TrophyDef[],
    size: size,
  };
}

export type RawTrophy = readonly [id: number, status: TrophyStatus];

export const compressTrophies = (trophies: RawTrophy[]) =>
  trophies
    .sort((a, b) => a[0] - b[0])
    .reduce((r, trophy) => `${r}${"0".repeat(trophy[0] - r.length - 1)}${trophy[1]}`, "")
    .replace(/0+$/, "");

export const expandTrophies = (s: string) =>
  s.split("").map((c, i) => [i + 1, Number(c)] as RawTrophy);
