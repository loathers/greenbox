import { Badge } from "@chakra-ui/react";
import { getMaxSkillLevel, SkillDef, SkillStatus } from "greenbox-data";

import Thing from "./Thing";

type Props = {
  skill: SkillDef;
  status: SkillStatus;
  level: number;
};

function skillStatusToThingState(status: SkillStatus) {
  switch (status) {
    case SkillStatus.HARDCORE:
      return "complete";
    case SkillStatus.SOFTCORE:
      return "partial";
    default:
      return null;
  }
}

function skillStatusToTitle(status: SkillStatus) {
  switch (status) {
    case SkillStatus.HARDCORE:
      return "Hardcore permed";
    case SkillStatus.SOFTCORE:
      return "Softcore permed";
    default:
      return "Not permed";
  }
}

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
