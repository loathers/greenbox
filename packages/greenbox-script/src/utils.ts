import { availableAmount, displayAmount, Item } from "kolmafia";

export function haveItem(item: Item) {
  return availableAmount(item) > 0 || displayAmount(item) > 0;
}
