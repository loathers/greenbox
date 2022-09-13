import {
  closetAmount,
  displayAmount,
  equippedAmount,
  Item,
  itemAmount,
  storageAmount,
} from "kolmafia";

export function haveItem(item: Item) {
  return [closetAmount, displayAmount, equippedAmount, itemAmount, storageAmount]
    .map((f) => f(item))
    .some((q) => q > 0);
}
