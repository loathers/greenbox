import { type IotYDef, IotYStatus } from "greenbox-data";

import type { ItemType } from "../store/index.js";

import Thing from "./Thing.js";

type Props = {
  item: ItemType;
  ioty: IotYDef;
  status: IotYStatus;
};

function iotyStatusToThingStatus(status: IotYStatus) {
  switch (status) {
    case IotYStatus.BOUND:
      return "complete";
    case IotYStatus.BOXED:
      return "partial";
    default:
      return null;
  }
}

function iotyStatusToTitle(ioty: IotYDef, status: IotYStatus) {
  switch (status) {
    case IotYStatus.BOUND:
      return "Have";
    case IotYStatus.BOXED:
      return "Have store item";
    default:
      return "Do not have";
  }
}

export default function IotY({ item, status, ioty }: Props) {
  if (!item) return null;
  return (
    <Thing
      type="item"
      name={item.name}
      image={`itemimages/${item.image}`}
      state={iotyStatusToThingStatus(status)}
      title={iotyStatusToTitle(ioty, status)}
    />
  );
}
