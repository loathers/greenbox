import { IotMDef, IotMStatus } from "greenbox-data";
import {
  Familiar,
  xpath,
  haveFamiliar,
  Item,
  Skill,
  visitUrl,
  floristAvailable,
  haveSkill,
} from "kolmafia";
import { get, $item, haveInCampground, have as _have, have, getFoldGroup } from "libram";

import { haveItem } from "./utils";

const arrayOf = <T>(items: T | T[]) => (Array.isArray(items) ? items : [items]);

function haveBound(iotm: IotMDef): boolean {
  const boxed = Item.get(iotm.id);

  switch (iotm.type) {
    case "campground": {
      const bound = iotm.item ? Item.get(iotm.item) : null;
      return (bound && (haveItem(bound) || haveInCampground(bound))) || haveInCampground(boxed);
    }
    case "custom": {
      switch (iotm.id) {
        case 5790: {
          return (
            haveItem(boxed) || (haveItem($item`right bear arm`) && haveItem($item`left bear arm`))
          );
        }
        case 6413: {
          return floristAvailable();
        }
      }
      return false;
    }
    case "eudora":
      return xpath(
        visitUrl("account.php?tab=correspondence"),
        `//select[@name="whichpenpal"]/option/@value`
      ).includes(iotm.eudoraId.toString());
    case "familiar":
      return arrayOf(iotm.familiar)
        .map((f) => Familiar.get(f))
        .some((f) => haveFamiliar(f));
    case "item":
      return arrayOf(iotm.item)
        .map((i) => Item.get(i))
        .map((i) => {
          const group = getFoldGroup(i);
          return group.length > 0 ? group : i;
        })
        .flat()
        .some((i) => haveItem(i));
    case "preference":
      return get(iotm.preference);
    case "skill":
      const skill = Skill.get(iotm.skill);
      return haveSkill(skill);
    case "vip":
      return haveItem($item`Clan VIP Lounge Key`);
  }
}

export function getIotMStatus(iotm: IotMDef): IotMStatus {
  if (haveBound(iotm)) return IotMStatus.BOUND;
  const boxed = Item.get(iotm.id);
  if (have(boxed)) return IotMStatus.BOXED;
  return IotMStatus.NONE;
}
