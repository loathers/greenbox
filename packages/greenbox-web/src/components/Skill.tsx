import {
  Badge,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { SkillStatus, getMaxSkillLevel } from "greenbox-data";

import { useAppSelector } from "../hooks";
import { selectIdToPlayerSkills, selectIdToSkills } from "../store";
import { skillStatusToThingState, skillStatusToTitle } from "../utils";

import SkillDescription from "./SkillDescription";
import Thing from "./Thing";

type Props = {
  id: number;
};

export default function Skill({ id }: Props) {
  const playerSkills = useAppSelector(selectIdToPlayerSkills);
  const skills = useAppSelector(selectIdToSkills);

  const skill = skills[id];

  const [, status, level] = playerSkills[id] || [id, SkillStatus.NONE, 0];

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
                {level} / {getMaxSkillLevel(skill.id)}
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
