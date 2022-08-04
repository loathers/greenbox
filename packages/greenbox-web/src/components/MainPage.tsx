import { Accordion, Container } from "@chakra-ui/react";
import { RawSnapshotData } from "greenbox-data";
import { useState } from "react";

import DataInput from "./DataInput";
import Familiars from "./Familiars";
import Skills from "./Skills";
import Tattoos from "./Tattoos";
import Trophies from "./Trophies";

export default function MainPage() {
  const [data, setData] = useState<RawSnapshotData | null>(null);

  return (
    <Container maxWidth="1000px" width="100%">
      <Accordion allowMultiple allowToggle defaultIndex={0}>
        <DataInput value={data} onChange={setData} />
        <Skills skills={data?.skills ?? []} />
        <Familiars familiars={data?.familiars ?? []} />
        <Tattoos outfitTattoos={data?.outfitTattoos ?? []} />
        <Trophies trophies={data?.trophies ?? []} />
      </Accordion>
    </Container>
  );
}
