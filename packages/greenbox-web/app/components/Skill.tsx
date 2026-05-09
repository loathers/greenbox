import { Badge, HoverCard, Portal } from "@chakra-ui/react";
import { SkillStatus } from "greenbox-data";

import { useAppSelector, useSkillsById } from "../hooks.js";
import { selectIdToPlayerSkills } from "../store/index.js";
import { skillStatusToThingState, skillStatusToTitle } from "../utils.js";

import SkillDescription from "./SkillDescription.js";
import Thing from "./Thing.js";

type Props = {
  id: number;
};

export default function Skill({ id }: Props) {
  const playerSkills = useAppSelector(selectIdToPlayerSkills);
  const skills = useSkillsById();

  const skill = skills[id];

  const [, status, level] = playerSkills[id] || [id, SkillStatus.NONE, 0];

  const maxLevel = skill.maxLevel ?? level;

  return (
    <HoverCard.Root lazyMount>
      <HoverCard.Trigger asChild>
        <Thing
          type="skill"
          name={skill.name}
          image={`itemimages/${skill.image}`}
          link={`Skill:${skill.id}`}
          state={skillStatusToThingState(status)}
          title={skillStatusToTitle(status)}
          badges={
            level ? (
              <Badge mr={1} title={`Skill at level ${level}`}>
                {level} / {maxLevel}
              </Badge>
            ) : null
          }
        />
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content
            style={{ ["--popper-bg" as any]: "var(--chakra-colors-imagebg)" }}
            whiteSpace="normal"
          >
            <HoverCard.Arrow />
            <SkillDescription skill={skill} />
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
}
