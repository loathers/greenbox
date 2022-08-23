import iotms, { IotMDef } from "../data/iotms";

export enum IotMStatus {
  NONE = 0,
  BOXED = 1,
  BOUND = 2,
}

export type { IotMDef };

export function loadIotMs(lastKnownSize = 0) {
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
    .map((iotm) => iotm[1])
    .join("")
    .replace(/0+$/, "");

export const expandIotMs = (s = "") =>
  s.split("").map((c, i) => [iotms[i].id, Number(c)] as RawIotM);
