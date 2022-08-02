import "core-js/modules/es.string.match-all";
import { loadTrophies, SnapshotData } from "greenbox-data";
import {
  Familiar,
  getPermedSkills,
  myId,
  print,
  propertyExists,
  toFamiliar,
  toInt,
  toSkill,
  visitUrl,
} from "kolmafia";
import { get, have, property } from "libram";

/**
 * Generates an object with a list of HC & SC skill perms.
 * @returns large numeric list of skills, comma delimited, in two sections
 */
function checkSkills() {
  const skillsHCPermed = new Set<number>();
  const skillsSCPermed = new Set<number>();
  const levels = {} as { [id: number]: number };

  // Within getPermedSkills, the attached boolean represents HC/SC status.
  //   If the boolean is true, it's HC permed. False, SC permed.
  const permedSkills = getPermedSkills();

  // Checks permedSkills for HC/SC status and populates the two perm lists.
  for (const skillName in permedSkills) {
    const id = toInt(toSkill(skillName));
    (permedSkills[skillName] ? skillsHCPermed : skillsSCPermed).add(id);

    if (propertyExists(`skillLevel${id}`)) {
      levels[id] = property.getNumber(`skillLevel${id}`);
    }
  }

  // Place output in the desired interface format
  const skillOutput = {
    hardcore: Array.from(skillsHCPermed),
    softcore: Array.from(skillsSCPermed),
    levels,
  };

  return skillOutput;
}

/**
 * Generates a list of familiars with 100% runs
 */
function hundredPercentFamiliars() {
  const history =
    visitUrl(`ascensionhistory.php?back=self&who=${myId()}`, false) +
    visitUrl(`ascensionhistory.php?back=self&prens13=1&who=${myId()}`, false);
  return new Set([...history.matchAll(/alt="([^"]*?) \(100%\)/gm)].map((m) => toFamiliar(m[1])));
}

/**
 * Generates an object with a list of familiars.
 * @returns large numeric list of familiars by fam ID
 */
function checkFamiliars() {
  const familiarsInTerrarium = new Set<number>();
  const familiarHatchlings = new Set<number>();

  for (const fam of Familiar.all()) {
    if (have(fam)) {
      familiarsInTerrarium.add(toInt(fam));
    } else if (have(fam.hatchling)) {
      familiarHatchlings.add(toInt(fam));
    }
  }

  const famOutput = {
    familiars: Array.from(familiarsInTerrarium),
    hatchlings: Array.from(familiarHatchlings),
    hundredPercents: Array.from(hundredPercentFamiliars()).map((f) => toInt(f)),
  };

  return famOutput;
}

/**
 * Generates an object with a list of trophy numbers.
 * @returns large numeric list of trophies by trophy number
 */
function checkTrophies() {
  const trophiesInCase = new Set<number>();
  const page = visitUrl("trophies.php");

  for (let x = 0; x < loadTrophies().length; x++) {
    if (page.match(`"trophy${x}"`)) trophiesInCase.add(x);
  }
  const trophyOutput = {
    trophies: Array.from(trophiesInCase),
  };
  return trophyOutput;
}

function checkTattoos() {
  const tattoosUnlocked = new Set<string>();
  const page = visitUrl("account_tattoos.php");
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

function main(): void {
  const greenboxOutput: SnapshotData = {
    ...checkSkills(),
    ...checkFamiliars(),
    ...checkTrophies(),
    ...checkTattoos(),
  };

  print(JSON.stringify(greenboxOutput));
}

module.exports.main = main;
