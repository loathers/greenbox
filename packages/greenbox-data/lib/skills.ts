import he from "he";

import { isPermable, loadMafiaData } from "./utils";

export type SkillDef = {
  id: number;
  name: string;
  image: string;
  permable: boolean;
};

const parseSkill = (parts: string[]): SkillDef => ({
  id: Number(parts[0]),
  name: he.decode(parts[1]),
  image: parts[2],
  permable: isPermable(Number(parts[0])),
});

export const loadSkills = async () => {
  const raw = await loadMafiaData("classskills");
  return raw.filter((p) => p.length > 2).map(parseSkill);
};
