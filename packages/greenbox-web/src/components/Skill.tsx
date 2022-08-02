import { Badge } from "@chakra-ui/react";
import { SkillDef } from "greenbox-data";

import Thing from "./Thing";

type Props = {
  skill: SkillDef;
  hardcore: boolean;
  softcore: boolean;
  level?: number;
};

export default function Skill({ skill, hardcore, softcore, level }: Props) {
  const state = hardcore ? "complete" : softcore ? "partial" : null;
  const title = `${skill.name} (${hardcore ? "Hardcore" : softcore ? "Softcore" : "Not"} Permed)`;
  return (
    <Thing
      name={skill.name}
      image={`itemimages/${skill.image}`}
      state={state}
      title={title}
      badges={
        level ? (
          <Badge mr={1} title={`Skill at level ${level}`}>
            {level}
          </Badge>
        ) : null
      }
    />
  );
}
