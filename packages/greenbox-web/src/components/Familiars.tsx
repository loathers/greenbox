import { SimpleGrid } from "@chakra-ui/react";
import { FamiliarStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks";
import { createPlayerDataSelector } from "../store";

import Familiar from "./Familiar";
import Section from "./Section";

const selectPlayerFamiliars = createPlayerDataSelector("familiars");

export default function Familiars() {
  const playerFamiliars = useAppSelector(selectPlayerFamiliars);
  const allFamiliars = useAppSelector((state) => state.familiars);
  const familiars = useMemo(() => allFamiliars.filter((s) => !s.pokefam), [allFamiliars]);
  const loading = useAppSelector((state) => state.loading.familiars || false);

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
        {} as { [id: number]: (typeof playerFamiliars)[number] },
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
