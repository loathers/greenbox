import { Accordion } from "@chakra-ui/react";

import DreadsylvaniaSection from "./DreadsylvaniaSection";
import HobopoliSection from "./HobopolisSection";
import SlimeTubeSection from "./SlimeTubeSection";

/* Enable if Haunted Sorority House is available again
import HauntedSororityHouseSection from "./HauntedSororityHouseSection";
<HauntedSororityHouseSection />
*/

export default function ClanDungeons() {
  return (
    <Accordion allowMultiple>
      <HobopoliSection />
      <SlimeTubeSection />
      <DreadsylvaniaSection />
    </Accordion>
  );
}
