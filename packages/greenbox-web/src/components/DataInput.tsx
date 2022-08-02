import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { loadTattoos, loadTrophies, SnapshotData } from "greenbox-data";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

async function generateRandom(chance: number) {
  const hardcore = Array(30000)
    .fill(1)
    .map((_, i) => i)
    .filter((_) => Math.random() < chance / 2);
  const softcore = Array(30000)
    .fill(1)
    .map((_, i) => i)
    .filter((i) => !hardcore.includes(i) && Math.random() < chance);
  const familiars = Array(500)
    .fill(1)
    .map((_, i) => i)
    .filter((_) => Math.random() < chance);
  const hatchlings = Array(500)
    .fill(1)
    .map((_, i) => i)
    .filter((i) => !familiars.includes(i) && Math.random() < chance / 4);
  const tattoos = (await loadTattoos()).map((t) => t.image).filter((_) => Math.random() < chance);
  const trophies = (await loadTrophies()).map((i) => i.id).filter((_) => Math.random() < chance);
  const hundredPercents = familiars.filter((_) => Math.random() < chance ** 1.5);

  return {
    hardcore,
    softcore,
    familiars,
    hatchlings,
    trophies,
    tattoos,
    hundredPercents,
    levels: {},
  };
}

type Props = {
  value: SnapshotData | null;
  onChange: (data: SnapshotData | null) => any;
};

export default function DataInput({ value, onChange }: Props) {
  const [rawValue, setRawValue] = useState(value == null ? "" : JSON.stringify(value));
  const [invalid, setInvalid] = useState(false);

  const handleRandom = useCallback((chance: number) => {
    async function load() {
      onChange(await generateRandom(chance));
    }
    load();
  }, []);

  useEffect(() => {
    setRawValue((v) => (v === "" && value !== null ? JSON.stringify(value) : v));
  }, [value]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.currentTarget.value;

      setRawValue(value);

      try {
        onChange(JSON.parse(value));
        setInvalid(false);
      } catch (e) {
        if (!(e instanceof SyntaxError)) throw e;
        setInvalid(true);
      }
    },
    [onChange]
  );

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="4xl">
          <Box flex="1" textAlign="left">
            Greenbox
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <Stack>
          <Textarea isInvalid={invalid} value={rawValue} onChange={handleChange} />
          <Stack direction="row">
            <Button onClick={() => handleRandom(50)}>Everything</Button>
            <Button onClick={() => handleRandom(0.6)}>Randomise high</Button>
            <Button onClick={() => handleRandom(0.2)}>Randomise low</Button>
            <Button onClick={() => handleRandom(0)}>Nothing</Button>
          </Stack>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
