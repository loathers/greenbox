import iotms from "../data/iotms";

export enum IotmStatus {
    NONE = 0,
    BOXED = 1,
    BOUND = 2,
  }

export type IotmDef = {
  id: number;
  name: string;
  image: string;
};

export function loadClasses(lastKnownSize: number) {
  const size = JSON.stringify(iotms).length;

  if (size === lastKnownSize) return null;

  return {
    data: iotms as unknown as IotmDef[],
    size: size,
  };
}