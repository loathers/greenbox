import { Accordion } from "@chakra-ui/react";

import Familiars from "./Familiars.js";
import IotMs from "./IotMs.js";
import Paths from "./Paths.js";
import Skills from "./Skills.js";
import Tattoos from "./Tattoos.js";
import Trophies from "./Trophies.js";

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
