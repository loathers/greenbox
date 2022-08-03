import "core-js/modules/es.string.match-all";
import { loadTrophies, isPermable, SnapshotData } from "greenbox-data";
import {
  Familiar,
  getPermedSkills,
  myId,
  print,
  propertyExists,
  Skill,
  toFamiliar,
  toInt,
  toSkill,
  visitUrl,
} from "kolmafia";
import { have, property } from "libram";

/**
 * Generates an object with a list of HC & SC skill perms.
 * @returns large numeric list of skills, comma delimited, in two sections
 */
function checkSkills() {
  // Key existence means permed in some way, true is HC, false is SC
  const permedSkills = getPermedSkills();

  return Skill.all()
    .filter((s) => isPermable(toInt(s)))
    .reduce((r, skill) => {
      const id = toInt(skill);
      const block = Math.floor(id / 1000);
      let result = r[block] || "";
      switch (permedSkills[skill.name]) {
        case true:
          result += "2";
          break;
        case false:
          result += "1";
          break;
        default:
          result += "0";
          break;
      }
      if (propertyExists(`skillLevel${id}`)) result += `(${property.getNumber(`skillLevel${id}`)})`;
      return {
        ...r,
        [block]: result,
      };
    }, {} as { [key: number]: string });
}

/**
 * Generates a list of familiars with 100% runs
 */
function checkHundredPercentFamiliars() {
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
  const hundredPercentFamiliars = checkHundredPercentFamiliars();

  return Familiar.all().reduce((r, fam) => {
    if (have(fam)) {
      r += "2";
    } else if (have(fam.hatchling)) {
      r += "1";
    } else {
      r += "0";
    }
    if (hundredPercentFamiliars.has(fam)) r += "*";
    return r;
  }, "");
}

/**
 * Generates an object with a list of trophy numbers.
 * @returns large numeric list of trophies by trophy number
 */
function checkTrophies() {
  const page = visitUrl("trophies.php");
  return Array<number>(loadTrophies().length).reduce(
    (r, _, i) => r + (page.match(`"trophy${i}"`) ? "1" : "0"),
    ""
  );
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
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies(),
    ...checkTattoos(),
  };

  print(JSON.stringify(greenboxOutput));
}

module.exports.main = main;
