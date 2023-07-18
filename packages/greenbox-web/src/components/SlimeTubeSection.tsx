import { SimpleGrid } from "@chakra-ui/react";

import Section from "./Section";
import Skill from "./Skill";
import Subsection from "./Subsection";

const SKILLS = [
  46, // Slimy Sinews
  47, // Slimy Synapses
  48, // Slimy Shoulders
];

export default function SlimeTubeSection() {
  return (
    <Section title="Slime Tube" icon="itemimages/slimeling.gif" loading={false} values={[]} max={1}>
      <Subsection title="Skills" image="itemimages/slimehypo.gif">
        <SimpleGrid columns={6} spacing={1}>
          {SKILLS.map((id) => (
            <Skill key={id} id={id} />
          ))}
        </SimpleGrid>
      </Subsection>
    </Section>
  );
}
