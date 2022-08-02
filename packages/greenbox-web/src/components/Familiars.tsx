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
import { loadFamiliars, FamiliarDef } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import AlphaImage from "./AlphaImage";
import Familiar from "./Familiar";
import Progress from "./Progress";

type Props = {
  playerTerrarium: number[];
  playerHatchlings: number[];
  hundredPercents: number[];
};

export default function Familiars({ playerTerrarium, playerHatchlings, hundredPercents }: Props) {
  const [loading, setLoading] = useState(true);
  const [familiars, setFamiliars] = useState([] as FamiliarDef[]);
  const [validFamiliarIds, setValidFamiliarIds] = useState(new Set());

  useEffect(() => {
    async function load() {
      const results = await loadFamiliars();
      setFamiliars(results);
      setValidFamiliarIds(new Set([...results.map((r) => r.id)]));
      setLoading(false);
    }
    load();
  }, []);

  const validTerrarium = useMemo(
    () => playerTerrarium.filter((id) => validFamiliarIds.has(id)),
    [playerTerrarium, validFamiliarIds]
  );

  const validHatchlings = useMemo(
    () => playerHatchlings.filter((id) => validFamiliarIds.has(id)),
    [playerHatchlings, validFamiliarIds]
  );

  const validHundredPercents = useMemo(
    () => hundredPercents.filter((id) => validFamiliarIds.has(id)),
    [hundredPercents, validFamiliarIds]
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
                  value: validHatchlings.length,
                  name: `${validHatchlings.length} / ${familiars.length} as hatching`,
                },
                {
                  color: "complete",
                  value: validTerrarium.length,
                  name: `${validTerrarium.length} / ${familiars.length} in terrarium`,
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
              terrarium={validTerrarium.includes(f.id)}
              hatchling={validHatchlings.includes(f.id)}
              hundredPercent={validHundredPercents.includes(f.id)}
            />
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
