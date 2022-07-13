import { getPermedSkills, print, Skill } from "kolmafia";
import { have } from "libram";

/**
 * Generates a string list of all skills the user has permed.
 * @returns large string list of skills, comma delimited
 */
export function checkSkills(): string {
  const skillsPermed = new Set<Skill>();
  const permedSkills = getPermedSkills();

  // Checks list of all skills in KOLMafia against user's skills. Note that
  //   C's script has a subset of this list, as we don't want all of them.
  for (const skill of Skill.all()) {
    if (have(skill) && skill.permable && permedSkills[String(skill)]) skillsPermed.add(skill);
  }

  return Array.from(skillsPermed).join(",");
}

export function main(): void {
  print(checkSkills());
}
