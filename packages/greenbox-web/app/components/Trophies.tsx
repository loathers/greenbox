import { SimpleGrid } from "@chakra-ui/react";
import { TrophyStatus } from "greenbox-data";
import { useMemo, useState } from "react";

import { useAppSelector } from "../hooks.js";
import { createPlayerDataSelector } from "../store/index.js";

import Section from "./Section.js";
import { SortOrderSelect, sortByKey } from "./SortOrderSelect.js";
import Trophy from "./Trophy.js";

const selectPlayerTrophies = createPlayerDataSelector("trophies");

export default function Tattoos() {
  const [sortBy, setSortBy] = useState<"name" | "id">("id");

  const playerTrophies = useAppSelector(selectPlayerTrophies);
  const allTrophies = useAppSelector((state) => state.trophies);
  const trophies = useMemo(
    () => allTrophies.toSorted(sortByKey(sortBy)),
    [allTrophies, sortBy],
  );
  const loading = useAppSelector((state) => state.loading.trophies || false);

  const numberOfTrophies = useMemo(
    () => playerTrophies.filter((t) => t[1] == TrophyStatus.HAVE).length,
    [playerTrophies],
  );
  const idToPlayerTrophy = useMemo(
    () => Object.fromEntries(playerTrophies.map((t) => [t[0], t])),
    [playerTrophies],
  );

  return (
    <Section
      title="Trophies"
      icon="itemimages/trophy.gif"
      loading={loading}
      values={[
        {
          color: "complete",
          value: numberOfTrophies,
          name: `${numberOfTrophies} / ${trophies.length} tattoos unlocked`,
        },
      ]}
      max={trophies.length}
    >
      <SortOrderSelect
        onChange={setSortBy}
        value={sortBy}
        alphabeticalKey="name"
        chronologicalKey="id"
      />
      <SimpleGrid columns={[3, null, 6]} gap={1}>
        {trophies.map((t) => (
          <Trophy
            key={t.id}
            trophy={t}
            status={idToPlayerTrophy[t.id]?.[1] ?? 0}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}
