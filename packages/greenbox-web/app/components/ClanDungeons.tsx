import { Accordion } from "@chakra-ui/react";

import DreadsylvaniaSection from "./DreadsylvaniaSection.js";
import HobopoliSection from "./HobopolisSection.js";
import SlimeTubeSection from "./SlimeTubeSection.js";

export default function ClanDungeons() {
  return (
    <Accordion.Root multiple>
      <HobopoliSection />
      <SlimeTubeSection />
      <DreadsylvaniaSection />
    </Accordion.Root>
  );
}
