import { arrayOf, IotYDef, IotYStatus } from "greenbox-data";
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

export type IotYOptions = Partial<{
  force: number[];
}>;

const { getBoolean } = property;

function haveBound(ioty: IotYDef, options: IotYOptions): boolean {
  if (options.force?.includes(ioty.id)) return true;

  const boxed = Item.get(ioty.id);

  switch (ioty.type) {
    case "eudora":
      return xpath(
        visitUrl("account.php?tab=correspondence"),
        `//select[@name="whichpenpal"]/option/@value`,
      ).includes(ioty.eudoraId.toString());
    case "familiar":
      return arrayOf(ioty.familiar)
        .map((f) => Familiar.get(f))
        .some((f) => haveFamiliar(f));
    case "item":
      return flat(
        arrayOf(ioty.item)
          .map((i) => Item.get(i))
          .map((i) => {
            const group = getFoldGroup(i);
            return group.length > 0 ? group : i;
          }),
      ).some((i) => haveItem(i));
    case "preference":
      return getBoolean(ioty.preference);
  }
}

export function getIotYStatus(
  iotm: IotYDef,
  options: IotYOptions = {},
): IotYStatus {
  if (haveBound(iotm, options)) return IotYStatus.BOUND;
  const boxed = Item.get(iotm.id);
  if (haveItem(boxed)) return IotYStatus.BOXED;
  return IotYStatus.NONE;
}
