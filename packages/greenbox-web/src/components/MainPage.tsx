import { Accordion, Container } from "@chakra-ui/react";
import { SnapshotData } from "greenbox-data";
import { useState } from "react";

import DataInput from "./DataInput";
import Familiars from "./Familiars";
import Skills from "./Skills";
import Tattoos from "./Tattoos";
import Trophies from "./Trophies";

export default function MainPage() {
  const [data, setData] = useState<SnapshotData | null>(null);

  return (
    <Container maxWidth="1000px" width="100%">
      <Accordion allowMultiple allowToggle defaultIndex={0}>
        <DataInput value={data} onChange={setData} />
        <Skills hardcore={data?.hardcore ?? []} softcore={data?.softcore ?? []} />
        <Familiars
          playerTerrarium={data?.familiars ?? []}
          playerHatchlings={data?.hatchlings ?? []}
          hundredPercents={data?.hundredPercents ?? []}
        />
        <Tattoos playerTattoos={data?.tattoos ?? []} />
        <Trophies playerTrophies={data?.trophies ?? []} />
      </Accordion>
    </Container>
  );
}
