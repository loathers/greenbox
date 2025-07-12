import iotms, { type IotMDef } from "../data/iotms.js";

export enum IotMStatus {
  NONE = 0,
  BOXED = 1,
  BOUND = 2,
}

export type { IotMDef };

export function getIotMs() {
  return iotms;
}

export type RawIotM = [id: number, status: IotMStatus];

export const compressIotMs = (iotmList: RawIotM[]): string => {
  const idToIotMStatus = new Map(iotmList.map((i) => [i[0], i[1]]));

  return iotms
    .map((iotm) => idToIotMStatus.get(iotm.id) ?? 0)
    .join("")
    .replace(/0+$/, "");
};

export const expandIotMs = (s = ""): RawIotM[] =>
  s.split("").map((c, i) => [iotms[i]?.id ?? null, Number(c)]);
