import {
  Badge,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { getMaxSkillLevel } from "data-of-loathing";
import { SkillStatus } from "greenbox-data";

import { useAppSelector } from "../hooks.js";
import { selectIdToPlayerSkills, selectIdToSkills } from "../store/index.js";
import { skillStatusToThingState, skillStatusToTitle } from "../utils.js";

import SkillDescription from "./SkillDescription.js";
import Thing from "./Thing.js";

type Props = {
  id: number;
};

export default function Skill({ id }: Props) {
  const playerSkills = useAppSelector(selectIdToPlayerSkills);
  const skills = useAppSelector(selectIdToSkills);

  const skill = skills[id];

  const [, status, level] = playerSkills[id] || [id, SkillStatus.NONE, 0];

  const knownMaxLevel = getMaxSkillLevel(skill);

  const maxLevel = knownMaxLevel === 0 ? level : knownMaxLevel;

  return (
    <Popover trigger="hover" isLazy>
      <PopoverTrigger>
        <Thing
          type="skill"
          name={skill.name}
          image={`itemimages/${skill.image}`}
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
      </PopoverTrigger>
      <PopoverContent
        style={{ ["--popper-bg" as any]: "var(--chakra-colors-imagebg)" }}
        whiteSpace="normal"
      >
        <PopoverArrow />
        <PopoverBody>
          <SkillDescription skill={skill} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
