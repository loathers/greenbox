import iotms, { IotMDef } from "../data/iotms.js";

export const enum IotMStatus {
  NONE = 0,
  BOXED = 1,
  BOUND = 2,
}

export type { IotMDef };

export function loadIotMs(
  lastKnownSize = 0,
): { data: typeof iotms; size: number } | null {
  const iotmCount = JSON.stringify(iotms).length;

  if (iotmCount === lastKnownSize) return null;

  return {
    data: iotms,
    size: iotmCount,
  };
}

export type RawIotM = [id: number, status: IotMStatus];

export const compressIotMs = (iotmList: RawIotM[]): string => {
  const idToIotM = iotmList.reduce(
    (acc, i) => ({ ...acc, [i[0]]: i }),
    {} as Record<number, RawIotM>,
  );

  return iotms
    .map((iotm) => idToIotM[iotm.id]?.[1] ?? 0)
    .join("")
    .replace(/0+$/, "");
};

export const expandIotMs = (s = ""): RawIotM[] =>
  s.split("").map((c, i) => [iotms[i]?.id ?? null, Number(c)]);
