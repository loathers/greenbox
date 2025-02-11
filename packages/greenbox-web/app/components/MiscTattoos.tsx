import { type RawTattoo, isMiscTattoo } from "greenbox-data";
import { useMemo, useState } from "react";

import { useAppSelector } from "../hooks.js";
import { selectPlayerMiscTattoos } from "../store/index.js";

import { SortOrderSelect, sortByKey } from "./SortOrderSelect.js";
import Subsection from "./Subsection.js";
import TattooGrid from "./TattooGrid.js";

export default function OutfitTattoos() {
  const allTattoos = useAppSelector((state) => state.tattoos);
  const playerTattoos = useAppSelector(selectPlayerMiscTattoos);

  const [sortBy, setSortBy] = useState<"name" | "misc">("name");

  const tattoos = useMemo(
    () => allTattoos.filter(isMiscTattoo).toSorted(sortByKey(sortBy)),
    [allTattoos, sortBy],
  );

  const idToPlayerTattoo = useMemo(
    () =>
      playerTattoos.reduce(
        (acc, t) => ({ ...acc, [t[0]]: t }),
        {} as Record<number, (typeof playerTattoos)[number]>,
      ),
    [playerTattoos],
  );

  return (
    <Subsection
      title="Miscellaneous"
      image="itemimages/bgetat.gif"
      farRight
      right={
        <SortOrderSelect
          onChange={setSortBy}
          value={sortBy}
          alphabeticalKey="name"
          chronologicalKey="misc"
        />
      }
    >
      <TattooGrid
        tattoos={tattoos}
        getLevel={(t) => idToPlayerTattoo[t.misc]?.[1] ?? 0}
      />
    </Subsection>
  );
}
