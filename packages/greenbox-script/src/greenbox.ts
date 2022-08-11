import "core-js/modules/es.string.match-all";
import {
  loadTrophies,
  isPermable,
  loadTattoos,
  getOutfitTattoos,
  SkillStatus,
  FamiliarStatus,
  TrophyStatus,
  TattooStatus,
  TattooDef,
  compress,
  RawOutfitTattoo,
  RawTrophy,
  RawSkill,
  RawFamiliar,
  TrophyDef,
  loadPaths,
  ItemStatus,
  RawPath,
  PathDef,
} from "greenbox-data";
import {
  displayAmount,
  Familiar,
  getPermedSkills,
  haveOutfit,
  Item,
  myId,
  printHtml,
  Skill,
  toFamiliar,
  toInt,
  visitUrl,
} from "kolmafia";
import { have, property } from "libram";

function haveItem(item: Item) {
  return have(item) || displayAmount(item) > 0;
}

/**
 * Generates an object with a list of HC & SC skill perms.
 * @returns large numeric list of skills, comma delimited, in two sections
 */
function checkSkills() {
  // Key existence means permed in some way, true is HC, false is SC
  const permedSkills = getPermedSkills();

  function getStatus(skill: Skill) {
    switch (permedSkills[skill.toString()]) {
      case true:
        return SkillStatus.HARDCORE;
      case false:
        return SkillStatus.SOFTCORE;
      default:
        return SkillStatus.NONE;
    }
  }

  function getLevel(skill: Skill) {
    return property.getNumber(`skillLevel${toInt(skill)}`);
  }

  return Skill.all()
    .filter((skill) => isPermable(toInt(skill)))
    .map((skill) => [toInt(skill), getStatus(skill), getLevel(skill)] as RawSkill);
}

/**
 * Generates a list of familiars with 100% runs
 */
function getHundredPercentFamiliars() {
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
  const hundredPercentFamiliars = getHundredPercentFamiliars();

  function getStatus(familiar: Familiar) {
    if (have(familiar)) return FamiliarStatus.TERRARIUM;
    if (have(familiar.hatchling)) return FamiliarStatus.HATCHLING;
    return FamiliarStatus.NONE;
  }

  function getHundredPercent(familiar: Familiar) {
    return hundredPercentFamiliars.has(familiar);
  }

  return Familiar.all().map(
    (familiar) => [toInt(familiar), getStatus(familiar), getHundredPercent(familiar)] as RawFamiliar
  );
}

/**
 * Generates an object with a list of trophy numbers.
 * @returns large numeric list of trophies by trophy number
 */
function checkTrophies() {
  const page = visitUrl("trophies.php");

  function getStatus(trophy: TrophyDef) {
    return page.includes(`"trophy${trophy.id}"`) ? TrophyStatus.HAVE : TrophyStatus.NONE;
  }

  return loadTrophies().map((trophy) => [trophy.id, getStatus(trophy)] as RawTrophy);
}

function checkOutfitTattoos(page: string) {
  function getStatus(tattoo: TattooDef) {
    if (Array.isArray(tattoo.image)) return TattooStatus.NONE;
    if (page.includes(tattoo.image)) return TattooStatus.HAVE;
    if (haveOutfit(tattoo.name)) return TattooStatus.HAVE_OUTFIT;
    return TattooStatus.NONE;
  }

  return getOutfitTattoos(loadTattoos()).map(
    (tattoo) => [tattoo.outfit, getStatus(tattoo)] as RawOutfitTattoo
  );
}

function checkTattoos(tattoos: string) {
  return {
    outfitTattoos: checkOutfitTattoos(tattoos),
  };
}

function getPathLevel(path: PathDef) {
  if (path.points === null) return 0;
  return Math.min(
    (Array.isArray(path.points) ? path.points : [path.points])
      .map((k) => property.getNumber(k))
      .reduce((sum, v) => sum + v, 0),
    path.maxPoints
  );
}

function checkPaths(tattoos: string) {
  return loadPaths().map((path) => {
    const level = getPathLevel(path);
    const items = path.items.map((i) =>
      haveItem(Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE
    );
    const equipment = path.equipment.map((i) =>
      haveItem(Item.get(i)) ? ItemStatus.HAVE : ItemStatus.NONE
    );
    const tats = path.tattoos.map((tattoo) => {
      if (Array.isArray(tattoo.image)) {
        for (let i = tattoo.image.length - 1; i >= 0; i--) {
          if (tattoos.includes(tattoo.image[i])) {
            return i + 1;
          }
        }
        return 0;
      }

      return tattoos.includes(tattoo.image) ? 1 : 0;
    });

    return [path.id, level, items, equipment, tats] as RawPath;
  });
}

function main(): void {
  const tattoos = visitUrl("account_tattoos.php");

  const code = compress({
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies(),
    ...checkTattoos(tattoos),
    paths: checkPaths(tattoos),
  });

  printHtml(
    `All done! To see your greenboxes, visit: <a href="https://greenbox.loathers.net/?d=${code}">https://greenbox.loathers.net/?d=${code}</a>`
  );
}

module.exports.main = main;
