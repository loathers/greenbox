import { type ItemType } from "data-of-loathing";
import { type IotMDef, IotMStatus } from "greenbox-data";

import Thing from "./Thing.js";

type Props = {
  item: ItemType;
  iotm: IotMDef;
  status: IotMStatus;
};

function iotmStatusToThingStatus(status: IotMStatus) {
  switch (status) {
    case IotMStatus.BOUND:
      return "complete";
    case IotMStatus.BOXED:
      return "partial";
    default:
      return null;
  }
}

function iotmStatusToTitle(iotm: IotMDef, status: IotMStatus) {
  switch (status) {
    case IotMStatus.BOUND:
      return iotm.type !== "vip" ? "Have" : "Have access if your clan owns one";
    case IotMStatus.BOXED:
      return "Have store item";
    default:
      return "Do not have";
  }
}

export default function IotM({ item, status, iotm }: Props) {
  if (!item) return null;
  return (
    <Thing
      type="item"
      name={item.name}
      image={`itemimages/${item.image}`}
      state={iotmStatusToThingStatus(status)}
      title={iotmStatusToTitle(iotm, status)}
    />
  );
}
