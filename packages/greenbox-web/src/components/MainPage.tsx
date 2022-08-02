import { Accordion, Container } from "@chakra-ui/react";
import { loadTattoos } from "greenbox-data";
import { useEffect, useState } from "react";

import DataInput from "./DataInput";
import Familiars from "./Familiars";
import Skills from "./Skills";
import Tattoos from "./Tattoos";

export interface PlayerData {
  hardcore: number[];
  softcore: number[];
  familiars: number[];
  hatchlings: number[];
  trophies: string[];
  tattoos: string[];
}

async function generateRandom() {
  const hardcore = Array(30000)
    .fill(1)
    .map((_, i) => i)
    .filter((_) => Math.random() > 2 / 3);
  const softcore = Array(30000)
    .fill(1)
    .map((_, i) => i)
    .filter((i) => !hardcore.includes(i) && Math.random() > 1 / 2);
  const familiars = Array(500)
    .fill(1)
    .map((_, i) => i)
    .filter((_) => Math.random() > 2 / 3);
  const hatchlings = Array(500)
    .fill(1)
    .map((_, i) => i)
    .filter((i) => !familiars.includes(i) && Math.random() > 1 / 2);
  const tattoos = (await loadTattoos()).map((t) => t.image).filter((_) => Math.random() < 0.3);

  return {
    hardcore,
    softcore,
    familiars,
    hatchlings,
    trophies: [],
    tattoos,
  };
}

export default function MainPage() {
  const [data, setData] = useState<PlayerData | null>(null);
  useEffect(() => {
    async function load() {
      setData(await generateRandom());
    }
    load();
  }, []);

  return (
    <Container maxWidth="1000px" width="100%">
      <Accordion allowMultiple allowToggle defaultIndex={0}>
        <DataInput value={data} onChange={setData} />
        <Skills hardcore={data?.hardcore ?? []} softcore={data?.softcore ?? []} />
        <Familiars terrarium={data?.familiars ?? []} hatchlings={data?.hatchlings ?? []} />
        <Tattoos playerTattoos={data?.tattoos ?? []} />
      </Accordion>
    </Container>
  );
}
