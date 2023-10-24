import { tuple } from "./utils";

export const enum FamiliarStatus {
  NONE = 0,
  HATCHLING = 1,
  TERRARIUM = 2,
}

export type RawFamiliar = [
  id: number,
  status: FamiliarStatus,
  hundredPercent: boolean,
];

export const compressFamiliars = (familiars: RawFamiliar[]) =>
  familiars
    .sort((a, b) => a[0] - b[0])
    .reduce(
      (r, familiar) =>
        `${r}${"0".repeat(familiar[0] - r.replace(/\*/g, "").length - 1)}${
          familiar[1]
        }${familiar[2] ? "*" : ""}`,
      "",
    )
    .replace(/0+$/, "");

export const expandFamiliars = (s = ""): RawFamiliar[] => {
  let id = 0;

  const result = [];

  for (const c of s) {
    if (c === "*" && result.length > 0) {
      result[result.length - 1][2] = true;
      continue;
    }

    result.push(tuple([++id, Number(c), false]));
  }

  return result;
};
