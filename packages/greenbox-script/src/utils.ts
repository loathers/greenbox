import {
  availableAmount,
  closetAmount,
  displayAmount,
  equippedAmount,
  equippedItem,
  Item,
  itemAmount,
  storageAmount,
} from "kolmafia";
import { $slots } from "libram";

// equippedAmount currently doesn't account for gems in the The Eternity Codpiece
function codpieceAmount(item: Item): number {
  return $slots`codpiece1, codpiece2, codpiece3, codpiece4, codpiece5`.some(
    (slot) => equippedItem(slot) === item,
  )
    ? 1
    : 0;
}

export function haveItem(item: Item) {
  return [
    availableAmount,
    closetAmount,
    displayAmount,
    equippedAmount,
    itemAmount,
    storageAmount,
    codpieceAmount,
  ].some((f) => f(item) > 0);
}
