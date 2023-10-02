import { RawTattoo, isOutfitTattoo } from "greenbox-data";
import { useMemo, useState } from "react";

import { useAppSelector } from "../hooks";

import { SortOrderSelect, sortByKey } from "./SortOrderSelect";
import Subsection from "./Subsection";
import TattooGrid from "./TattooGrid";

type Props = {
  playerTattoos: RawTattoo[];
};

export default function OutfitTattoos({ playerTattoos }: Props) {
  const allTattoos = useAppSelector((state) => state.tattoos);

  const [outfitSortBy, setOutfitSortBy] = useState<"name" | "outfit">("name");

  const tattoos = useMemo(
    () => allTattoos.filter(isOutfitTattoo).toSorted(sortByKey(outfitSortBy)),
    [allTattoos, outfitSortBy],
  );

  const idToPlayerTattoo = useMemo(
    () =>
      playerTattoos.reduce(
        (acc, t) => ({ ...acc, [t[0]]: t }),
        {} as { [id: number]: (typeof playerTattoos)[number] },
      ),
    [playerTattoos],
  );

  return (
    <Subsection
      title="Outfits"
      image="itemimages/palette.gif"
      farRight
      right={
        <SortOrderSelect
          onChange={setOutfitSortBy}
          value={outfitSortBy}
          alphabeticalKey="name"
          chronologicalKey="outfit"
        />
      }
    >
      <TattooGrid tattoos={tattoos} getLevel={(t) => idToPlayerTattoo[t.outfit]?.[1] ?? 0} />
    </Subsection>
  );
}
