import { type BindableDef, type Bindable } from "../data/bindable.js";
import iotms from "../data/iotms.js";
import iotys from "../data/iotys.js";

export enum BindableStatus {
  NONE = 0,
  BOXED = 1,
  BOUND = 2,
}

export type { Bindable, BindableDef };
export type RawBindable = [id: number, status: BindableStatus];

export const getIotMs = (): BindableDef[] => iotms;
export const getIotYs = (): BindableDef[] => iotys;

export const compressIotMBindables = (raws: RawBindable[]): string =>
  compressBindables(iotms, raws);
export const compressIotYBindables = (raws: RawBindable[]): string =>
  compressBindables(iotys, raws);

export const expandIotMBindables = (s = ""): RawBindable[] =>
  expandBindables(iotms, s);
export const expandIotYBindables = (s = ""): RawBindable[] =>
  expandBindables(iotys, s);

const compressBindables = (
  defs: BindableDef[],
  raws: RawBindable[],
): string => {
  const idToBindableStatus = new Map(raws.map((i) => [i[0], i[1]]));

  return defs
    .map((bindable) => idToBindableStatus.get(bindable.id) ?? 0)
    .join("")
    .replace(/0+$/, "");
};

const expandBindables = (defs: BindableDef[], s = ""): RawBindable[] =>
  s.split("").map((c, i) => [defs[i]?.id ?? null, Number(c)]);
