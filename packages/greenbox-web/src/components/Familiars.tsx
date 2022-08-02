import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { loadFamiliars, FamiliarDef } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import Familiar from "./Familiar";
import Progress from "./Progress";

type Props = {
  terrarium: number[];
  hatchlings: number[];
};

export default function Familiars({ terrarium, hatchlings }: Props) {
  const [loading, setLoading] = useState(true);
  const [familiars, setFamiliars] = useState([] as FamiliarDef[]);
  const [validFamiliarIds, setValidFamiliarIds] = useState(new Set());

  useEffect(() => {
    async function load() {
      const fams = await loadFamiliars();
      setFamiliars(fams);
      setValidFamiliarIds(new Set([...fams.map((f) => f.id)]));
      setLoading(false);
    }
    load();
  }, []);

  const ter = useMemo(
    () => terrarium.filter((id) => validFamiliarIds.has(id)),
    [terrarium, validFamiliarIds]
  );

  const hat = useMemo(
    () => hatchlings.filter((id) => validFamiliarIds.has(id)),
    [hatchlings, validFamiliarIds]
  );

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="3xl">
          <Box flex="1" textAlign="left">
            Familiars
          </Box>
          <Progress
            values={[
              {
                color: "partial",
                value: hat.length,
                name: `${hat.length} / ${familiars.length} as hatching`,
              },
              {
                color: "complete",
                value: ter.length,
                name: `${ter.length} / ${familiars.length} in terrarium`,
              },
            ]}
            max={familiars.length}
          />
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <SimpleGrid columns={6} spacing={1}>
          {familiars.map((f) => (
            <Familiar
              key={f.id}
              familiar={f}
              terrarium={ter.includes(f.id)}
              hatchling={hat.includes(f.id)}
            />
          ))}
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
}
