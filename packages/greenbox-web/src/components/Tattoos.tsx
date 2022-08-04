import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { loadTattoos, RawOutfitTattoo, TattooDef, TattooStatus } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import AlphaImage from "./AlphaImage";
import Progress from "./Progress";
import Tattoo from "./Tattoo";

type Props = {
  outfitTattoos: RawOutfitTattoo[];
};

export default function Tattoos({ outfitTattoos: playerOutfitTattoos }: Props) {
  const [loading, setLoading] = useState(true);
  const [tattoos, setTattoos] = useState([] as readonly TattooDef[]);

  useEffect(() => {
    async function load() {
      setTattoos(await loadTattoos());
      setLoading(false);
    }
    load();
  }, []);

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
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="3xl">
          <Stack direction="row" flex="1" textAlign="left">
            <AlphaImage src="itemimages/paintbrush.gif" />
            <Box>Tattoos</Box>
          </Stack>
          <Box alignSelf="stretch" flex="1">
            <Progress
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
            />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <SimpleGrid columns={6} spacing={1}>
          {tattoos.map((t) => (
            <Tattoo key={t.image} tattoo={t} status={idToOutfitTattoo[t.outfit]?.[1] ?? 0} />
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
