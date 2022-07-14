import { Familiar, getPermedSkills, print, toInt, toSkill } from "kolmafia";
import { have } from "libram";

/**
 * Interface for the JSON output.
 */

export interface SnapshotOutput {
  hardcore?: number[];
  softcore?: number[];
  familiars?: number[];
}

/**
 * Generates an object with a list of HC & SC skill perms.
 * @returns large numeric list of skills, comma delimited, in two sections
 */
export function checkSkills(): SnapshotOutput {
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

  // Place output in the desired interface format
  const skillOutput = {
    hardcore: Array.from(skillsHCPermed),
    softcore: Array.from(skillsSCPermed),
  };

  return skillOutput;
}

/** Generates an object with a list of familiars.
 * @returns large numeric list of familiars by fam ID
 */

export function checkFamiliars(): SnapshotOutput {
  const familiarsInTerrarium = new Set<number>();
  // const familiarHatchlings = new Set<number>();

  for (const fam of Familiar.all()) {
    if (have(fam)) familiarsInTerrarium.add(toInt(fam));
  }

  const famOutput = {
    familiars: Array.from(familiarsInTerrarium),
  };

  return famOutput;
}

export function main(): void {
  /**
   * Rev requested that the final data be staged as such:
   *
   * {
   * softcore:[skillid,skillid],
   * hardcore:[skillid,skillid],
   * familiar:[familiarid,familiarid],
   * }
   *
   */

  const greenboxOutput = {
    hardcore: checkSkills().hardcore,
    softcore: checkSkills().softcore,
    familiars: checkFamiliars().familiars,
  };

  print(JSON.stringify(greenboxOutput));
}
