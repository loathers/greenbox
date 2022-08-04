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
import { loadFamiliars, FamiliarDef, RawFamiliar, FamiliarStatus } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import AlphaImage from "./AlphaImage";
import Familiar from "./Familiar";
import Progress from "./Progress";

type Props = {
  familiars: RawFamiliar[];
};

export default function Familiars({ familiars: playerFamiliars }: Props) {
  const [loading, setLoading] = useState(true);
  const [familiars, setFamiliars] = useState([] as FamiliarDef[]);

  useEffect(() => {
    async function load() {
      setFamiliars((await loadFamiliars()).filter((f) => !f.pokefam));
      setLoading(false);
    }
    load();
  }, []);

  const totalInTerrarium = useMemo(
    () => playerFamiliars.filter((f) => f[1] === FamiliarStatus.TERRARIUM).length,
    [playerFamiliars]
  );
  const totalAsHatchlings = useMemo(
    () => playerFamiliars.filter((f) => f[1] === FamiliarStatus.HATCHLING).length,
    [playerFamiliars]
  );
  const idToFamiliar = useMemo(
    () =>
      playerFamiliars.reduce(
        (acc, f) => ({ ...acc, [f[0]]: f }),
        {} as { [id: number]: RawFamiliar }
      ),
    [playerFamiliars]
  );

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="3xl">
          <Stack direction="row" flex="1" textAlign="left">
            <AlphaImage src="itemimages/terrarium.gif" />
            <Box>Familiars</Box>
          </Stack>
          <Box alignSelf="stretch" flex="1">
            <Progress
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
            />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
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
      </AccordionPanel>
    </AccordionItem>
  );
}
