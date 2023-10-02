import { MiscTattooDef, OutfitTattooDef, TattooStatus } from "greenbox-data";
import { useMemo, useState } from "react";

import { useAppSelector } from "../hooks";
import { createPlayerDataSelector } from "../store";

import Section from "./Section";
import { SortOrderSelect, sortByKey } from "./SortOrderSelect";
import Subsection from "./Subsection";
import TattooGrid from "./TattooGrid";

const selectPlayerOutfitTattoos = createPlayerDataSelector("outfitTattoos");
const selectPlayerMiscTattoos = createPlayerDataSelector("miscTattoos");

export default function Tattoos() {
  const [outfitSortBy, setOutfitSortBy] = useState<"name" | "outfit">("name");
  const [miscSortBy, setMiscSortBy] = useState<"name" | "misc">("name");

  const playerOutfitTattoos = useAppSelector(selectPlayerOutfitTattoos);
  const playerMiscTattoos = useAppSelector(selectPlayerMiscTattoos);
  const tattoos = useAppSelector((state) => state.tattoos);
  const outfitTattoos = useMemo(
    () =>
      tattoos.filter((t): t is OutfitTattooDef => "outfit" in t).toSorted(sortByKey(outfitSortBy)),
    [tattoos, outfitSortBy],
  );
  const miscTattoos = useMemo(
    () => tattoos.filter((t): t is MiscTattooDef => "misc" in t).toSorted(sortByKey(miscSortBy)),
    [tattoos, miscSortBy],
  );
  const loading = useAppSelector((state) => state.loading.tattoos || false);

  const totalOutfitTattos = useMemo(
    () => playerOutfitTattoos.filter((s) => s[1] === TattooStatus.HAVE).length,
    [playerOutfitTattoos],
  );
  const totalOutfits = useMemo(
    () => playerOutfitTattoos.filter((s) => s[1] === TattooStatus.HAVE_OUTFIT).length,
    [playerOutfitTattoos],
  );
  const idToOutfitTattoo = useMemo(
    () =>
      playerOutfitTattoos.reduce(
        (acc, t) => ({ ...acc, [t[0]]: t }),
        {} as { [id: number]: (typeof playerOutfitTattoos)[number] },
      ),
    [playerOutfitTattoos],
  );
  const idToMiscTattoo = useMemo(
    () =>
      playerMiscTattoos.reduce(
        (acc, t) => ({ ...acc, [t[0]]: t }),
        {} as { [id: number]: (typeof playerMiscTattoos)[number] },
      ),
    [playerMiscTattoos],
  );

  return (
    <Section
      title="Tattoos"
      icon="otherimages/sigils/margaraxe.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalOutfits,
          name: `${totalOutfits} / ${outfitTattoos.length} tattoos unlocked`,
        },
        {
          color: "complete",
          value: totalOutfitTattos,
          name: `${totalOutfitTattos} / ${outfitTattoos.length} tattoos unlocked`,
        },
      ]}
      max={outfitTattoos.length}
    >
      <Subsection title="Outfits" image="itemimages/palette.gif">
        <SortOrderSelect
          onChange={setOutfitSortBy}
          value={outfitSortBy}
          alphabeticalKey="name"
          chronologicalKey="outfit"
        />
        <TattooGrid
          tattoos={outfitTattoos}
          getLevel={(t) => idToOutfitTattoo[t.outfit]?.[1] ?? 0}
        />
      </Subsection>
      <Subsection title="Miscellaneous" image="itemimages/bgetat.gif">
        <SortOrderSelect
          onChange={setMiscSortBy}
          value={miscSortBy}
          alphabeticalKey="name"
          chronologicalKey="misc"
        />
        <TattooGrid tattoos={miscTattoos} getLevel={(t) => idToMiscTattoo[t.misc]?.[1] ?? 0} />
      </Subsection>
    </Section>
  );
}
