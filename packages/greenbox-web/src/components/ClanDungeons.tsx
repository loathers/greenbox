import { Accordion } from "@chakra-ui/react";

import DreadsylvaniaSection from "./DreadsylvaniaSection";
import HobopoliSection from "./HobopolisSection";
import SlimeTubeSection from "./SlimeTubeSection";

export default function ClanDungeons() {
  return (
    <Accordion allowMultiple>
      <HobopoliSection />
      <SlimeTubeSection />
      <DreadsylvaniaSection />
    </Accordion>
  );
}
