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
import { loadTrophies, RawTrophy, TrophyDef, TrophyStatus } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import AlphaImage from "./AlphaImage";
import Progress from "./Progress";
import Trophy from "./Trophy";

type Props = {
  trophies: RawTrophy[];
};

export default function Tattoos({ trophies: playerTrophies }: Props) {
  const [loading, setLoading] = useState(true);
  const [trophies, setTrophies] = useState([] as readonly TrophyDef[]);

  useEffect(() => {
    async function load() {
      setTrophies(await loadTrophies());
      setLoading(false);
    }
    load();
  }, []);

  const numberOfTrophies = useMemo(
    () => playerTrophies.filter((t) => t[1] == TrophyStatus.HAVE).length,
    [playerTrophies]
  );
  const idToTrophy = useMemo(
    () =>
      playerTrophies.reduce((acc, t) => ({ ...acc, [t[0]]: t }), {} as { [id: number]: RawTrophy }),
    [playerTrophies]
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
                  value: numberOfTrophies,
                  name: `${numberOfTrophies} / ${trophies.length} tattoos unlocked`,
                },
              ]}
              max={trophies.length}
            />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <SimpleGrid columns={[3, null, 6]} spacing={1}>
          {trophies.map((t) => (
            <Trophy key={t.id} trophy={t} status={idToTrophy[t.id]?.[1] ?? 0} />
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
