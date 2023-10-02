import { getMaxTattooLevel } from "greenbox-data";
import { useMemo, useState } from "react";

import { useAppSelector } from "../hooks";
import { selectPlayerPaths } from "../store";

import Path from "./Path";
import Section from "./Section";
import { SortOrderSelect, sortByKey } from "./SortOrderSelect";

export default function Paths() {
  const [sortBy, setSortBy] = useState<"name" | "id">("id");
  const playerPaths = useAppSelector(selectPlayerPaths);
  const allPaths = useAppSelector((state) => state.paths);
  const paths = useMemo(() => allPaths.toSorted(sortByKey(sortBy)), [allPaths, sortBy]);
  const loading = useAppSelector((state) => state.loading.paths || false);

  // A map of path id to array, where the index represents a tattoo for that path
  // and the value represents the maximum level for that tattoo
  const maxTattooLevel = useMemo(
    () =>
      paths.reduce(
        (acc, p) => ({
          ...acc,
          [p.id]: p.tattoos.map(getMaxTattooLevel),
        }),
        {} as { [id: number]: number[] },
      ),
    [paths],
  );

  // The total score available across all paths
  const max = useMemo(
    () =>
      playerPaths.reduce(
        (sum, p) =>
          sum +
          // Number of items and equipment (whether player has them or not)
          [...p[2], ...p[3]].length +
          // Sum of max possible tattoo level for each tattoo this path offers
          (maxTattooLevel[p[0]] ?? []).reduce((maxLevelSum, maxLevel) => maxLevelSum + maxLevel, 0),
        0,
      ),
    [playerPaths, maxTattooLevel],
  );

  // The score of "complete" achievements across all paths
  const totalComplete = useMemo(
    () =>
      playerPaths.reduce(
        (sum, p) =>
          sum +
          // Number of items and equipment that the player owns (ItemStatus.HAVE equals 1)
          [...p[2], ...p[3]].reduce((itemSum, item) => itemSum + item, 0) +
          // Sum of acquired tattoo level for each tattoo this path offers
          p[4].reduce((tattooSum, tattooLevel, i) => tattooSum + tattooLevel, 0),
        0,
      ),
    [playerPaths],
  );

  // The score of "complete" achievements across all paths (i.e. unachieved tattoo levels)
  const totalPartial = useMemo(
    () =>
      playerPaths.reduce(
        (sum, p) =>
          sum +
          p[4].reduce(
            // Total tattoo level minus current tattoo level across each tattoo this path offers
            (tattooSum, tattooLevel, i) =>
              tattooSum + Math.max(0, (maxTattooLevel[p[0]]?.[i] ?? 0) - (tattooLevel + 1)),
            0,
          ),
        0,
      ),
    [playerPaths, maxTattooLevel],
  );

  const idToPath = useMemo(
    () =>
      playerPaths.reduce(
        (acc, p) => ({ ...acc, [p[0]]: p }),
        {} as { [id: number]: (typeof playerPaths)[number] },
      ),
    [playerPaths],
  );

  return (
    <Section
      title="Paths"
      icon="itemimages/map.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalPartial,
          name: `${totalPartial} / ${max} path rewards partially earned`,
        },
        {
          color: "complete",
          value: totalComplete,
          name: `${totalComplete} / ${max} path rewards completely earned`,
        },
      ]}
      max={max}
    >
      <SortOrderSelect
        onChange={setSortBy}
        value={sortBy}
        alphabeticalKey="name"
        chronologicalKey="id"
      />
      {paths.map((p) => (
        <Path
          key={p.name}
          path={p}
          points={idToPath[p.id]?.[1] ?? 0}
          items={idToPath[p.id]?.[2] ?? []}
          equipment={idToPath[p.id]?.[3] ?? []}
          tattoos={idToPath[p.id]?.[4] ?? []}
        />
      ))}
    </Section>
  );
}
