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
import { getMaxSkillLevel, SkillDef, SkillStatus } from "greenbox-data";

import { skillStatusToThingState, skillStatusToTitle } from "../utils";

import SkillDescription from "./SkillDescription";
import Thing from "./Thing";

type Props = {
  skill: SkillDef;
  status: SkillStatus;
  level: number;
};

export default function Skill({ skill, status, level }: Props) {
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
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <SkillDescription skill={skill} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
