import { Accordion } from "@chakra-ui/react";

import Familiars from "./Familiars.js";
import IotMs from "./IotMs.js";
import IotYs from "./IotYs.js";
import Paths from "./Paths.js";
import Skills from "./Skills.js";
import Tattoos from "./Tattoos.js";
import Trophies from "./Trophies.js";

export default function General() {
  return (
    <Accordion.Root multiple>
      <IotMs />
      <IotYs />
      <Skills />
      <Paths />
      <Familiars />
      <Tattoos />
      <Trophies />
    </Accordion.Root>
  );
}
