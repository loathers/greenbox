import { Accordion } from "@chakra-ui/react";

import DreadsylvaniaSection from "./DreadsylvaniaSection";
import HobopoliSection from "./HobopolisSection";
import SlimeTubeSection from "./SlimeTubeSection";

export default function ClanDungeons() {
  return (
    <Accordion>
      <HobopoliSection />
      <DreadsylvaniaSection />
      <SlimeTubeSection />
    </Accordion>
  );
}
