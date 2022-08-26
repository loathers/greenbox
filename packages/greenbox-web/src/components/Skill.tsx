import { Badge } from "@chakra-ui/react";
import { getMaxSkillLevel, SkillDef, SkillStatus } from "greenbox-data";

import { skillStatusToThingState, skillStatusToTitle } from "../utils";

import Thing from "./Thing";

type Props = {
  skill: SkillDef;
  status: SkillStatus;
  level: number;
};

export default function Skill({ skill, status, level }: Props) {
  return (
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
  );
}
