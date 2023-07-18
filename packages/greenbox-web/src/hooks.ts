import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import type { RootState, AppDispatch } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useItemMap(items: number[]) {
  const all = useAppSelector((state) => state.items);

  return useMemo(
    () =>
      items.reduce(
        (acc, id) => ({
          ...acc,
          // Because items appear in order of id with some gaps, an item of id i can be really quickly found by searching
          // backwards from position i in the array. Searching backwards is annoying in JavaScript so I just reduce right
          // and truncate the array when I find the item. This is fine because .slice() makes a copy of the state array.
          [id]: all
            .slice(0, id)
            .reduceRight((_1, i, _2, arr) => (i.id === id ? ((arr.length = 0), i) : i)),
        }),
        {} as { [id: number]: (typeof all)[number] },
      ),
    [items, all],
  );
}
