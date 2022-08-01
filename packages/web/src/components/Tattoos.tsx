import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgressLabel,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { loadTattoos, TattooDef } from "data";
import { useEffect, useMemo, useState } from "react";

import { CircularMultiProgress } from "./CircularMultiProgress";
import Tattoo from "./Tattoo";

type Props = {
  playerTattoos: string[];
};

export default function Tattoos({ playerTattoos }: Props) {
  const [loading, setLoading] = useState(true);
  const [tattoos, setTattoos] = useState([] as TattooDef[]);
  const [validTattoos, setValidTattoos] = useState(new Set());

  useEffect(() => {
    async function load() {
      const tats = await loadTattoos();
      setTattoos(tats);
      setValidTattoos(new Set([...tats.map((t) => t.image)]));
      setLoading(false);
    }
    load();
  }, []);

  const tats = useMemo(
    () => playerTattoos.filter((image) => validTattoos.has(image)),
    [playerTattoos, validTattoos]
  );

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="3xl">
          <Box flex="1" textAlign="left">
            Tattoos
          </Box>
          <CircularMultiProgress
            size="1em"
            colors={["complete"]}
            values={[tats.length]}
            max={tattoos.length}
          >
            <CircularProgressLabel>
              {tats.length} / {tattoos.length}
            </CircularProgressLabel>
          </CircularMultiProgress>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <SimpleGrid columns={6} spacing={1}>
          {tattoos.map((t) => (
            <Tattoo key={t.image} tattoo={t} have={tats.includes(t.image)} />
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
