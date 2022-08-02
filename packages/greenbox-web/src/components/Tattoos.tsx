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
import { loadTattoos, TattooDef } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import AlphaImage from "./AlphaImage";
import Progress from "./Progress";
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
          <Stack direction="row" flex="1" textAlign="left">
            <AlphaImage src="itemimages/paintbrush.gif" />
            <Box>Tattoos</Box>
          </Stack>
          <Box alignSelf="stretch" flex="1">
            <Progress
              values={[
                {
                  color: "complete",
                  value: tats.length,
                  name: `${tats.length} / ${tattoos.length} tattoos unlocked`,
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
            <Tattoo key={t.image} tattoo={t} have={tats.includes(t.image)} />
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
