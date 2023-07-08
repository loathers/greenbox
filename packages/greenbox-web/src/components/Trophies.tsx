import { SimpleGrid } from "@chakra-ui/react";
import { RawTrophy, TrophyStatus } from "greenbox-data";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import Section from "./Section";
import Trophy from "./Trophy";

type Props = {
  trophies: RawTrophy[];
};

export default function Tattoos({ trophies: playerTrophies }: Props) {
  const trophies = useSelector((state: RootState) => state.trophies);
  const loading = useSelector((state: RootState) => state.loading.trophies || false);

  const numberOfTrophies = useMemo(
    () => playerTrophies.filter((t) => t[1] == TrophyStatus.HAVE).length,
    [playerTrophies],
  );
  const idToTrophy = useMemo(
    () =>
      playerTrophies.reduce((acc, t) => ({ ...acc, [t[0]]: t }), {} as { [id: number]: RawTrophy }),
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
      <SimpleGrid columns={[3, null, 6]} spacing={1}>
        {trophies.map((t) => (
          <Trophy key={t.id} trophy={t} status={idToTrophy[t.id]?.[1] ?? 0} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
