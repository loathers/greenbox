import { Accordion } from "@chakra-ui/react";

import DreadsylvaniaSection from "./DreadsylvaniaSection.js";
import HobopoliSection from "./HobopolisSection.js";
import SlimeTubeSection from "./SlimeTubeSection.js";

export default function ClanDungeons() {
  return (
    <Accordion allowMultiple>
      <HobopoliSection />
      <SlimeTubeSection />
      <DreadsylvaniaSection />
    </Accordion>
  );
}
