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

export const compressBindables = (bindableList: RawBindable[]): string => {
  const idToBindableStatus = new Map(bindableList.map((i) => [i[0], i[1]]));

  return iotms
    .map((bindable) => idToBindableStatus.get(bindable.id) ?? 0)
    .join("")
    .replace(/0+$/, "");
};

export const expandIotMBindables = (s = ""): RawBindable[] =>
  s.split("").map((c, i) => [iotms[i]?.id ?? null, Number(c)]);

export const expandIotYBindables = (s = ""): RawBindable[] =>
  s.split("").map((c, i) => [iotys[i]?.id ?? null, Number(c)]);
