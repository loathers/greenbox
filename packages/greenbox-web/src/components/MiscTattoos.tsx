import { RawTattoo, isMiscTattoo } from "greenbox-data";
import { useMemo, useState } from "react";

import { useAppSelector } from "../hooks";
import { selectPlayerMiscTattoos } from "../store";

import { SortOrderSelect, sortByKey } from "./SortOrderSelect";
import Subsection from "./Subsection";
import TattooGrid from "./TattooGrid";

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
        {} as { [id: number]: (typeof playerTattoos)[number] },
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
