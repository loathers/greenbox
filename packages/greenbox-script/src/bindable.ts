import { arrayOf, BindableDef, BindableStatus } from "greenbox-data";
import {
  Familiar,
  haveFamiliar,
  haveSkill,
  Item,
  Skill,
  visitUrl,
  xpath,
} from "kolmafia";
import { flat, getFoldGroup, haveInCampground, property } from "libram";

import { haveItem } from "./utils.js";

export type BindableOptions = Partial<{
  force: number[];
}>;

const { getBoolean } = property;

function haveBound(bindable: BindableDef, options: BindableOptions): boolean {
  if (options.force?.includes(bindable.id)) return true;

  const boxed = Item.get(bindable.id);

  switch (bindable.type) {
    case "campground": {
      const bound = bindable.item ? Item.get(bindable.item) : null;
      return (
        (bound && (haveItem(bound) || haveInCampground(bound))) ||
        haveInCampground(boxed)
      );
    }
    case "custom": {
      switch (bindable.id) {
        case 5790: {
          return (
            haveItem(boxed) ||
            (haveItem(Item.get("right bear arm")) &&
              haveItem(Item.get("left bear arm")))
          );
        }
      }
      return false;
    }
    case "eudora":
      return xpath(
        visitUrl("account.php?tab=correspondence"),
        `//select[@name="whichpenpal"]/option/@value`,
      ).includes(bindable.eudoraId.toString());
    case "familiar":
      return arrayOf(bindable.familiar)
        .map((f) => Familiar.get(f))
        .some((f) => haveFamiliar(f));
    case "item":
      return flat(
        arrayOf(bindable.item)
          .map((i) => Item.get(i))
          .map((i) => {
            const group = getFoldGroup(i);
            return group.length > 0 ? group : i;
          }),
      ).some((i) => haveItem(i));
    case "preference":
      return getBoolean(bindable.preference);
    case "skill": {
      const skill = Skill.get(bindable.skill);
      return haveSkill(skill);
    }
    case "vip":
      return haveItem(Item.get("Clan VIP Lounge Key"));
  }
}

export function getBindableStatus(
  bindable: BindableDef,
  options: BindableOptions = {},
): BindableStatus {
  if (haveBound(bindable, options)) return BindableStatus.BOUND;
  const boxed = Item.get(bindable.id);
  if (haveItem(boxed)) return BindableStatus.BOXED;
  return BindableStatus.NONE;
}
