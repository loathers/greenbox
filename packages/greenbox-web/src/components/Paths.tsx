import { Stack } from "@chakra-ui/react";
import { RawPath } from "greenbox-data";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import Path from "./Path";
import Section from "./Section";

type Props = {
  paths: RawPath[];
};

export default function Paths({ paths: playerPaths }: Props) {
  const paths = useSelector((state: RootState) => state.paths);
  const loading = useSelector((state: RootState) => state.loading.paths || false);

  const maxTattooLevel = useMemo(
    () =>
      paths.reduce(
        (acc, p) => ({
          ...acc,
          [p.id]: p.tattoos.map((t) => (Array.isArray(t.image) ? t.image.length : 1)),
        }),
        {} as { [id: number]: number[] },
      ),
    [paths],
  );

  const max = useMemo(
    () =>
      playerPaths.reduce(
        (sum, p) =>
          sum +
          [...p[2], ...p[3]].length +
          (maxTattooLevel?.[p[0]] ?? []).reduce(
            (maxLevelSum, maxLevel) => maxLevelSum + maxLevel,
            0,
          ),
        0,
      ),
    [playerPaths, maxTattooLevel],
  );

  const totalComplete = useMemo(
    () =>
      playerPaths.reduce(
        (sum, p) =>
          sum +
          [...p[2], ...p[3]].reduce((itemSum, item) => itemSum + item, 0) +
          p[3].reduce((tattooSum, tattooLevel, i) => tattooSum + tattooLevel, 0),
        0,
      ),
    [playerPaths],
  );

  const totalPartial = useMemo(
    () =>
      playerPaths.reduce(
        (sum, p) =>
          sum +
          p[3].reduce(
            (tattooSum, tattooLevel, i) =>
              tattooSum + ((maxTattooLevel?.[p[0]]?.[i] ?? 0) - (tattooLevel + 1)),
            0,
          ),
        0,
      ),
    [playerPaths, maxTattooLevel],
  );

  const idToPath = useMemo(
    () => playerPaths.reduce((acc, p) => ({ ...acc, [p[0]]: p }), {} as { [id: number]: RawPath }),
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
      <Stack>
        {paths.map((p) => (
          <Path
            key={p.name}
            path={p}
            points={idToPath[p.id]?.[1] ?? 0}
            items={idToPath[p.id]?.[2] ?? []}
            equipment={idToPath[p.id]?.[3] ?? []}
            tattoos={idToPath[p.id]?.[4] ?? []}
            maxTattooLevel={maxTattooLevel?.[p.id] ?? []}
          />
        ))}
      </Stack>
    </Section>
  );
}
