import iotms, { IotMDef } from "../data/iotms";

export enum IotMStatus {
  NONE = 0,
  BOXED = 1,
  BOUND = 2,
}

export type { IotMDef };

export function loadIotms(lastKnownSize = 0) {
  const iotmCount = JSON.stringify(iotms).length;

  if (iotmCount === lastKnownSize) return null;

  return {
    data: iotms,
    size: iotmCount,
  };
}

export type RawIotM = readonly [id: number, status: IotMStatus];

export const compressIotMs = (iotmList: RawIotM[]) =>
  iotmList
    .sort((a, b) => a[0] - b[0]) //sorts by itemID?
    .reduce((r, iotm) => `${r}${iotm[1]}`, "") // concats owned status to the resulting object
    .replace(/0+$/, ""); // removes trailing zeroes to lower string size

export const expandIotMs = (s = "") =>
  s.split("").map((c, i) => [iotms[i].id, Number(c)] as RawIotM);
