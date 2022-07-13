import { getPermedSkills, print, toInt, toSkill } from "kolmafia";

/**
 * Generates a string list of all skills the user has permed.
 * @returns large string list of skills, comma delimited
 */
export function checkSkills(): string {
  const skillsHCPermed = new Set<number>();
  const skillsSCPermed = new Set<number>();

  // Within getPermedSkills, the attached boolean represents HC/SC status.
  //   If the boolean is true, it's HC permed. False, SC permed.
  const permedSkills = getPermedSkills();

  // Checks permedSkills for HC/SC status and populates the two perm lists.
  for (const skillName in permedSkills) {
    permedSkills[skillName]
      ? skillsHCPermed.add(toInt(toSkill(skillName)))
      : skillsSCPermed.add(toInt(toSkill(skillName)));
  }

  return Array.from(skillsHCPermed).join(",");
}

export function main(): void {
  print(checkSkills());
}
