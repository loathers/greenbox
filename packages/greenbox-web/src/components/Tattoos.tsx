import { SimpleGrid } from "@chakra-ui/react";
import { RawOutfitTattoo, TattooStatus } from "greenbox-data";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import Section from "./Section";
import Tattoo from "./Tattoo";

type Props = {
  outfitTattoos: RawOutfitTattoo[];
};

export default function Tattoos({ outfitTattoos: playerOutfitTattoos }: Props) {
  const tattoos = useSelector((state: RootState) => state.tattoos);
  const loading = useSelector((state: RootState) => state.loading.tattoos || false);

  const totalOutfitTattos = useMemo(
    () => playerOutfitTattoos.filter((s) => s[1] === TattooStatus.HAVE).length,
    [playerOutfitTattoos]
  );
  const totalOutfits = useMemo(
    () => playerOutfitTattoos.filter((s) => s[1] === TattooStatus.HAVE_OUTFIT).length,
    [playerOutfitTattoos]
  );
  const idToOutfitTattoo = useMemo(
    () =>
      playerOutfitTattoos.reduce(
        (acc, t) => ({ ...acc, [t[0]]: t }),
        {} as { [id: number]: RawOutfitTattoo }
      ),
    [playerOutfitTattoos]
  );

  return (
    <Section
      title="Tattoos"
      icon="itemimages/paintbrush.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalOutfits,
          name: `${totalOutfits} / ${tattoos.length} tattoos unlocked`,
        },
        {
          color: "complete",
          value: totalOutfitTattos,
          name: `${totalOutfitTattos} / ${tattoos.length} tattoos unlocked`,
        },
      ]}
      max={tattoos.length}
    >
      <SimpleGrid columns={[4, null, 6]} spacing={1}>
        {tattoos.map((t) => (
          <Tattoo key={t.image} tattoo={t} status={idToOutfitTattoo[t.outfit]?.[1] ?? 0} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
