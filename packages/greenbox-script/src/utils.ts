import { displayAmount, Item } from "kolmafia";
import { have } from "libram";

export function haveItem(item: Item) {
  return have(item) || displayAmount(item) > 0;
}
