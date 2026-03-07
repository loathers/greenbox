import {
  availableAmount,
  closetAmount,
  displayAmount,
  equippedAmount,
  Item,
  itemAmount,
  storageAmount,
} from "kolmafia";
import { EternityCodpiece } from "libram";

function codpieceAmount(item: Item): number {
  return EternityCodpiece.currentGems().includes(item) ? 1 : 0;
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
