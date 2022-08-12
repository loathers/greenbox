import { ItemStatus } from "greenbox-data";

export function itemStatusToThingState(status: ItemStatus) {
  switch (status) {
    case ItemStatus.HAVE:
      return "complete";
    default:
      return null;
  }
}