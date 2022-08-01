import { SkillDef } from "../api";

import Thing from "./Thing";

type Props = {
  skill: SkillDef;
  hardcore: boolean;
  softcore: boolean;
};

export default function Skill({ skill, hardcore, softcore }: Props) {
  const state = hardcore ? "complete" : softcore ? "partial" : null;
  const title = `${skill.name} (${
    hardcore ? "Hardcore" : softcore ? "Softcore" : "Not"
  } Permed)`;
  return (
    <Thing
      name={skill.name}
      image={`itemimages/${skill.image}`}
      state={state}
      title={title}
    />
  );
}
