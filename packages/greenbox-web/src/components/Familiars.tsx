import { SimpleGrid } from "@chakra-ui/react";
import { RawFamiliar, FamiliarStatus } from "greenbox-data";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import Familiar from "./Familiar";
import Section from "./Section";

type Props = {
  familiars: RawFamiliar[];
};

export default function Familiars({ familiars: playerFamiliars }: Props) {
  const familiars = useSelector((state: RootState) => state.familiars.filter((s) => !s.pokefam));
  const loading = useSelector((state: RootState) => state.loading.familiars || false);

  const totalInTerrarium = useMemo(
    () => playerFamiliars.filter((f) => f[1] === FamiliarStatus.TERRARIUM).length,
    [playerFamiliars],
  );
  const totalAsHatchlings = useMemo(
    () => playerFamiliars.filter((f) => f[1] === FamiliarStatus.HATCHLING).length,
    [playerFamiliars],
  );
  const idToFamiliar = useMemo(
    () =>
      playerFamiliars.reduce(
        (acc, f) => ({ ...acc, [f[0]]: f }),
        {} as { [id: number]: RawFamiliar },
      ),
    [playerFamiliars],
  );

  return (
    <Section
      title="Familiars"
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
      <SimpleGrid columns={6} spacing={1}>
        {familiars.map((f) => (
          <Familiar
            key={f.id}
            familiar={f}
            status={idToFamiliar[f.id]?.[1] ?? 0}
            hundredPercent={idToFamiliar[f.id]?.[2] ?? 0}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}
