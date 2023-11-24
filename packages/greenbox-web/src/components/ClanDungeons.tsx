import { Accordion } from "@chakra-ui/react";

import DreadsylvaniaSection from "./DreadsylvaniaSection";
import HauntedSororityHouseSection from "./HauntedSororityHouseSection";
import HobopoliSection from "./HobopolisSection";
import SlimeTubeSection from "./SlimeTubeSection";

export default function ClanDungeons() {
  return (
    <Accordion allowMultiple>
      <HobopoliSection />
      <SlimeTubeSection />
      <HauntedSororityHouseSection />
      <DreadsylvaniaSection />
    </Accordion>
  );
}
