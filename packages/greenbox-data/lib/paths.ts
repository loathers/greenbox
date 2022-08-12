import paths from "../data/paths";

import { ItemStatus } from "./items";

export interface PathDef {
  id: number;
  name: string;
  image: string;
  items: number[];
  equipment: number[];
  tattoos: { name: string; image: string | string[] }[];
  points: string | string[] | null;
  maxPoints: number;
}

export function loadPaths(lastKnownSize = 0) {
  const size = JSON.stringify(paths).length;

  if (size === lastKnownSize) return null;

  return {
    data: paths as unknown as PathDef[],
    size: size,
  };
}

export type RawPath = [
  id: number,
  level: number,
  items: ItemStatus[],
  equipment: ItemStatus[],
  tattoos: number[]
];

const pointsRadix = 32;
const tattooLevelRadix = 16;

export const compressPaths = (paths: RawPath[]) =>
  paths
    .sort((a, b) => a[0] - b[0])
    .reduce(
      (acc, path) => {
        let [r, currentId] = acc;
        // Add a comma between path ids
        if (path[0] > currentId) {
          r += ",".repeat(path[0] - currentId);
          currentId = path[0];
        }

        r += path[1].toString(pointsRadix);

        // Add 1 or 0 for items
        r += path[2].join("");

        // Add 1 or 0 for equipment
        r += path[3].join("");

        // Add radix encoded number for tattoo level
        r += path[4].map((i) => i.toString(tattooLevelRadix)).join("");

        return [r, currentId] as [string, number];
      },
      ["", -2] as [string, number]
    )[0]
    .replace(/0+($|,)/, "$1");

export const expandPaths = (s: string) => {
  const parts = s.split(",");

  return paths.map((path) => {
    let part = (parts[path.id + 2] || "").padEnd(
      path.items.length + path.equipment.length + path.tattoos.length,
      "0"
    );
    const level = parseInt(part.substring(0, 1), pointsRadix);
    part = part.substring(1);
    const items = part
      .substring(0, path.items.length)
      .split("")
      .map((c) => Number(c));
    part = part.substring(path.items.length);
    const equipment = part
      .substring(0, path.equipment.length)
      .split("")
      .map((c) => Number(c));
    part = part.substring(path.equipment.length);
    const tattoos = part.split("").map((c) => parseInt(c, tattooLevelRadix));
    return [path.id, level, items, equipment, tattoos] as RawPath;
  });
};
