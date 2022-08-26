import { ItemDef, ItemStatus, SkillStatus } from "greenbox-data";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export function itemStatusToThingState(status: ItemStatus) {
  switch (status) {
    case ItemStatus.HAVE:
      return "complete";
    default:
      return null;
  }
}

export function skillStatusToThingState(status: SkillStatus) {
  switch (status) {
    case SkillStatus.HARDCORE:
      return "complete";
    case SkillStatus.SOFTCORE:
      return "partial";
    default:
      return null;
  }
}

export function skillStatusToTitle(status: SkillStatus) {
  switch (status) {
    case SkillStatus.HARDCORE:
      return "Hardcore permed";
    case SkillStatus.SOFTCORE:
      return "Softcore permed";
    default:
      return "Not permed";
  }
}

export function useItemMap(items: number[]) {
  return useSelector((state: RootState) =>
    state.items.length > 0
      ? items.reduce(
          (acc, id) => ({
            ...acc,
            // Because items appear in order of id with some gaps, an item of id i can be really quickly found by searching
            // backwards from position i in the array. Searching backwards is annoying in JavaScript so I just reduce right
            // and truncate the array when I find the item. This is fine because .slice() makes a copy of the state array.
            [id]: state.items
              .slice(0, id)
              .reduceRight((_1, i, _2, arr) => (i.id === id ? ((arr.length = 0), i) : i)),
          }),
          {} as { [id: number]: ItemDef }
        )
      : {}
  );
}

export const chunk = <T>(arr: T[], size: number) =>
  Array(Math.ceil(arr.length / size)).fill(0).map((_, i) =>
    arr.slice(i * size, i * size + size)
  );

  export function notNullOrUndefined<T>(value: T | null | undefined): value is T {
    return value !== null  && value !== undefined;
  }