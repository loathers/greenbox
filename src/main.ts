import {
  Familiar,
  getPermedSkills,
  myId,
  print,
  toFamiliar,
  toInt,
  toSkill,
  visitUrl,
} from "kolmafia";
import { $familiar, have } from "libram";

/**
 * Interface for the JSON output.
 */

export interface SnapshotOutput {
  hardcore?: number[];
  softcore?: number[];
  familiars?: number[];
  trophies?: number[];
  tattoos?: string[];
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

export enum FamiliarReport {
  NONE = 0,
  HATCHLING = 1 << 0,
  TERRARIUM = 1 << 1,
  NINETY = 1 << 2,
  ONE_HUNDRED = 1 << 3,
}

/** Generates an object with a list of familiars.
 * @returns bitwise integer for every possible familiar indicating whether you own the hatching/the familiar in your terrarium and whether you have completed 90 or 100% runs with it.
 */

export function checkFamiliars(): SnapshotOutput {
  const familiars = new Set<number>();
  const ascensionHistory =
    visitUrl(`ascensionhistory.php?back=self&who=${myId()}`, false) +
    visitUrl(`ascensionhistory.php?back=self&prens13=1&who=${myId()}`);
  const famList = Familiar.all();

  const lastFam = toInt(famList[famList.length - 1]);

  for (let i = 0; i < lastFam; i++) {
    const fam = toFamiliar(i + 1);
    if (fam === $familiar`none`) {
      familiars.add(0);
      continue;
    }
    const searchTerm = new RegExp(`alt="${fam.name} .([0-9.]+)..`);
    const matches = [...ascensionHistory.matchAll(searchTerm)];
    const maxPercentage = toInt(matches.sort(([, b], [, y]) => toInt(y) - toInt(b))[0][1]); //sorts list of fam percentages into descending order

    const familiarState =
      (have(fam.hatchling) ? FamiliarReport.HATCHLING : FamiliarReport.NONE) |
      (have(fam) ? FamiliarReport.TERRARIUM : 0) |
      (maxPercentage >= 90 ? FamiliarReport.NINETY : 0) |
      (maxPercentage >= 100 ? FamiliarReport.ONE_HUNDRED : 0);
    familiars.add(familiarState);
  }

  const famOutput = {
    familiars: Array.from(familiars),
  };

  return famOutput;
}

/** Generates an object with a list of trophy numbers.
 * @returns large numeric list of trophies by trophy number
 */

export function checkTrophies(): SnapshotOutput {
  const trophiesInCase = new Set<number>();
  const page = visitUrl("trophies.php");

  for (let x = 0; x <= 162; x++) {
    if (page.match(`"trophy${x}"`)) trophiesInCase.add(x);
  }
  const trophyOutput = {
    trophies: Array.from(trophiesInCase),
  };
  return trophyOutput;
}

export function checkTattoos(): SnapshotOutput {
  const tattoosUnlocked = new Set<string>();
  const page: string = visitUrl("account_tattoos.php");
  const tats = page.split(`Tattoo: `).slice(1); //gives an array where each item in the array starts with the tattoo name
  for (let i = 0; i < tats.length; i = i + 2) {
    //Tattoo page lists every tattoo twice, hence only doing evens
    const tattoo = tats[i].match(`[a-z0-9_]*`);
    if (tattoo !== null) {
      tattoosUnlocked.add(tattoo[0]);
    }
  }
  const tattooOutput = {
    tattoos: Array.from(tattoosUnlocked),
  };
  return tattooOutput;
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
    trophies: checkTrophies().trophies,
    tattoos: checkTattoos().tattoos,
  };

  print(JSON.stringify(greenboxOutput));
}
