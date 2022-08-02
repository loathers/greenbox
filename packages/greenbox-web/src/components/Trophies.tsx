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
import { loadTrophies, TrophyDef } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";
import AlphaImage from "./AlphaImage";

import Progress from "./Progress";
import Trophy from "./Trophy";

type Props = {
  playerTrophies: number[];
};

export default function Tattoos({ playerTrophies }: Props) {
  const [loading, setLoading] = useState(true);
  const [trophies, setTrophies] = useState([] as TrophyDef[]);
  const [validTrophies, setValidTrophies] = useState(new Set());

  useEffect(() => {
    async function load() {
      const results = await loadTrophies();
      setTrophies(results);
      setValidTrophies(new Set([...results.map((t) => t.id)]));
      setLoading(false);
    }
    load();
  }, []);

  const validPlayerTrophies = useMemo(
    () => playerTrophies.filter((id) => validTrophies.has(id)),
    [playerTrophies, validTrophies]
  );

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="3xl">
          <Stack direction="row" flex="1" textAlign="left">
            <AlphaImage src="itemimages/trophy.gif" />
            <Box>Trophies</Box>
          </Stack>
          <Box alignSelf="stretch" flex="1">
            <Progress
              values={[
                {
                  color: "complete",
                  value: validPlayerTrophies.length,
                  name: `${validPlayerTrophies.length} / ${trophies.length} tattoos unlocked`,
                },
              ]}
              max={trophies.length}
            />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <SimpleGrid columns={6} spacing={1}>
          {trophies.map((t) => (
            <Trophy key={t.id} trophy={t} have={validPlayerTrophies.includes(t.id)} />
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
