import { type Bindable, BindableStatus } from "greenbox-data";

import type { ItemType } from "../store/index.js";

import Thing from "./Thing.js";

type Props = {
  item: ItemType;
  bindable: Bindable;
  status: BindableStatus;
};

function bindableStatusToThingStatus(status: BindableStatus) {
  switch (status) {
    case BindableStatus.BOUND:
      return "complete";
    case BindableStatus.BOXED:
      return "partial";
    default:
      return null;
  }
}

function bindableStatusToTitle(iotm: Bindable, status: BindableStatus) {
  switch (status) {
    case BindableStatus.BOUND:
      return iotm.type !== "vip" ? "Have" : "Have access if your clan owns one";
    case BindableStatus.BOXED:
      return "Have store item";
    default:
      return "Do not have";
  }
}

export default function Bindable({ item, status, bindable }: Props) {
  if (!item) return null;
  return (
    <Thing
      type="item"
      name={item.name}
      image={`itemimages/${item.image}`}
      state={bindableStatusToThingStatus(status)}
      title={bindableStatusToTitle(bindable, status)}
    />
  );
}
