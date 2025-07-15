import iotys, { type IotYDef } from "../data/iotys.js";

export enum IotYStatus {
  NONE = 0,
  BOXED = 1,
  BOUND = 2,
}

export type { IotYDef };

export function getIotYs() {
  return iotys;
}

export type RawIotY = [id: number, status: IotYStatus];

export const compressIotYs = (iotmList: RawIotY[]): string => {
  const idToIotMStatus = new Map(iotmList.map((i) => [i[0], i[1]]));

  return iotys
    .map((ioty) => idToIotMStatus.get(ioty.id) ?? 0)
    .join("")
    .replace(/0+$/, "");
};

export const expandIotYs = (s = ""): RawIotY[] =>
  s.split("").map((c, i) => [iotys[i]?.id ?? null, Number(c)]);
