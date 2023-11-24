import { SimpleGrid } from "@chakra-ui/react";

import { useAppSelector } from "../hooks";
import { selectIdToPlayerItems } from "../store";

import ItemGrid from "./ItemGrid";
import Section from "./Section";
import Skill from "./Skill";
import Subsection from "./Subsection";

const SKILLS = [
  75, // Summon "Boner Battalion"
];

const THE_NECBROMANCER = [
  5337, // The Necbromancer's Hat
  5338, // The Necbromancer's Stein
  5339, // The Necbromancer's Shorts
  5340, // The Necbromancer's Wizard Staff
];

export default function HauntedSororityHouseSection() {
  const playerItems = useAppSelector(selectIdToPlayerItems);

  return (
    <Section
      title="Slime Tube"
      icon="itemimages/slimeling.gif"
      loading={false}
      values={[]}
      max={1}
    >
      <Subsection title="Skills" image="itemimages/necbronomicon.gif">
        <SimpleGrid columns={6} spacing={1}>
          {SKILLS.map((id) => (
            <Skill key={id} id={id} />
          ))}
        </SimpleGrid>
      </Subsection>
      <Subsection title="The Necbromancer" image="itemimages/blackcollar.gif">
        <ItemGrid
          items={THE_NECBROMANCER}
          playerItems={THE_NECBROMANCER.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
    </Section>
  );
}
