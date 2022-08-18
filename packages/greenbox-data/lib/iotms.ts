import iotms from "../data/iotms";

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