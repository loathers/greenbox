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
} from "greenbox-data";
import {
  Familiar,
  getPermedSkills,
  haveOutfit,
  myId,
  printHtml,
  Skill,
  toFamiliar,
  toInt,
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
    if (page.includes(tattoo.image)) return TattooStatus.HAVE;
    if (haveOutfit(tattoo.name)) return TattooStatus.HAVE_OUTFIT;
    return TattooStatus.NONE;
  }

  return getOutfitTattoos(loadTattoos()).map(
    (tattoo) => [tattoo.outfit, getStatus(tattoo)] as RawOutfitTattoo
  );
}

function checkTattoos() {
  const page = visitUrl("account_tattoos.php");

  return {
    outfitTattoos: checkOutfitTattoos(page),
  };
}

function main(): void {
  const code = compress({
    skills: checkSkills(),
    familiars: checkFamiliars(),
    trophies: checkTrophies(),
    ...checkTattoos(),
  });

  printHtml(
    `Visit <a href="https://greenbox.loathers.net">https://greenbox.loathers.net</a> and paste the following unique code into the text box!<br />` +
      `<table border="1"><tr><td>${code.replace(/(.{80})/g, "$1\n")}</td></tr></table>`
  );
}

module.exports.main = main;
