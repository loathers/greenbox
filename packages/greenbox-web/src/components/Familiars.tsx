import { SimpleGrid } from "@chakra-ui/react";
import { isFamiliarOwnable } from "data-of-loathing";
import { FamiliarStatus } from "greenbox-data";
import { useMemo, useState } from "react";

import { useAppSelector } from "../hooks";
import { createPlayerDataSelector } from "../store";

import Familiar from "./Familiar";
import HundredPercentedUnownableFamiliars from "./HundredPercentedUnownableFamiliars";
import Section from "./Section";
import { SortOrderSelect, sortByKey } from "./SortOrderSelect";

const selectPlayerFamiliars = createPlayerDataSelector("familiars");

export default function Familiars() {
  const [sortBy, setSortBy] = useState<"name" | "id">("id");

  const playerFamiliars = useAppSelector(selectPlayerFamiliars);
  const allFamiliars = useAppSelector((state) => state.familiars);
  const familiars = useMemo(
    () =>
      allFamiliars
        .filter((s) => isFamiliarOwnable(s))
        .toSorted(sortByKey(sortBy)),
    [allFamiliars, sortBy],
  );
  const loading = useAppSelector((state) => state.loading.familiars || false);

  const totalInTerrarium = useMemo(
    () =>
      playerFamiliars.filter((f) => f[1] === FamiliarStatus.TERRARIUM).length,
    [playerFamiliars],
  );
  const totalAsHatchlings = useMemo(
    () =>
      playerFamiliars.filter((f) => f[1] === FamiliarStatus.HATCHLING).length,
    [playerFamiliars],
  );
  const idToFamiliar = useMemo(
    () =>
      playerFamiliars.reduce(
        (acc, f) => ({ ...acc, [f[0]]: f }),
        {} as Record<number, (typeof playerFamiliars)[number]>,
      ),
    [playerFamiliars],
  );

  const hundredPercentedUnownables = useMemo(
    () =>
      allFamiliars
        .filter((s) => !isFamiliarOwnable(s))
        .filter((f) => idToFamiliar[f.id]?.[2] ?? false),
    [allFamiliars],
  );

  return (
    <Section
      title="Familiars"
      wiki="Category:Familiars"
      icon="itemimages/terrarium.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalAsHatchlings,
          name: `${totalAsHatchlings} / ${familiars.length} as hatching`,
        },
        {
          color: "complete",
          value: totalInTerrarium,
          name: `${totalInTerrarium} / ${familiars.length} in terrarium`,
        },
      ]}
      max={familiars.length}
    >
      <SortOrderSelect
        onChange={setSortBy}
        value={sortBy}
        alphabeticalKey="name"
        chronologicalKey="id"
      />
      <SimpleGrid columns={6} spacing={1}>
        {familiars.map((f) => (
          <Familiar
            key={f.id}
            familiar={f}
            status={idToFamiliar[f.id]?.[1] ?? 0}
            hundredPercent={idToFamiliar[f.id]?.[2] ?? false}
          />
        ))}
      </SimpleGrid>
      <HundredPercentedUnownableFamiliars
        familiars={hundredPercentedUnownables}
      />
    </Section>
  );
}
