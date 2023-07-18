import { Accordion } from "@chakra-ui/react";

import Familiars from "./Familiars";
import IotMs from "./IotMs";
import Paths from "./Paths";
import Skills from "./Skills";
import Tattoos from "./Tattoos";
import Trophies from "./Trophies";

export default function General() {
  return (
    <Accordion allowMultiple>
      <IotMs />
      <Skills />
      <Paths />
      <Familiars />
      <Tattoos />
      <Trophies />
    </Accordion>
  );
}
