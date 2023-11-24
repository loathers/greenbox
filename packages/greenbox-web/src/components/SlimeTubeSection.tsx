import { SimpleGrid } from "@chakra-ui/react";

import { useAppSelector } from "../hooks";
import { selectIdToPlayerItems } from "../store";

import ItemGrid from "./ItemGrid";
import Section from "./Section";
import Skill from "./Skill";
import Subsection from "./Subsection";

const SKILLS = [
  46, // Slimy Sinews
  47, // Slimy Synapses
  48, // Slimy Shoulders
];

const MOTHER_SLIME = [
  4127, // hardened slime hat
  4128, // hardened slime pants
  4129, // hardened slime belt
];

const SLIME_COVERED = [
  4021, // slime-covered shovel
  4022, // slime-covered necklace
  4023, // slime-covered speargun
  4024, // slime-covered compass
  4025, // slime-covered helmet
  4026, // slime-covered lantern
  4027, // slime-covered greaves
  4028, // slime-covered club
  5760, // slime-covered staff
];

const CAUSTIC_SLIME = [
  4075, // villainous scythe
  4076, // baneful bandolier
  4077, // diabolical crossbow
  4078, // malevolent medallion
  4079, // corrosive cowl
  4080, // grisly shield
  4081, // corroded breeches,
  4082, // pernicious cudgel
  5761, // Staff of the Scummy Sink
];

export default function SlimeTubeSection() {
  const playerItems = useAppSelector(selectIdToPlayerItems);

  return (
    <Section
      title="Slime Tube"
      icon="itemimages/slimeling.gif"
      loading={false}
      values={[]}
      max={1}
    >
      <Subsection title="Skills" image="itemimages/slimehypo.gif">
        <SimpleGrid columns={6} spacing={1}>
          {SKILLS.map((id) => (
            <Skill key={id} id={id} />
          ))}
        </SimpleGrid>
      </Subsection>
      <Subsection title="Slime-Covered" image="itemimages/slimelantern.gif">
        <ItemGrid
          items={SLIME_COVERED}
          playerItems={SLIME_COVERED.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Caustic Slime" image="itemimages/causticnodule.gif">
        <ItemGrid
          items={CAUSTIC_SLIME}
          playerItems={CAUSTIC_SLIME.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Mother Slime" image="itemimages/slimelarva.gif">
        <ItemGrid
          items={MOTHER_SLIME}
          playerItems={MOTHER_SLIME.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
    </Section>
  );
}
