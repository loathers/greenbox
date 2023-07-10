import { loadMafiaData } from "./utils";

export const enum SkillStatus {
  NONE = 0,
  SOFTCORE = 1,
  HARDCORE = 2,
}

export type SkillDef = {
  id: number;
  name: string;
  image: string;
  permable: boolean;
};

export const getMaxSkillLevel = (id: number) => {
  switch (id) {
    // Will probably be this way forever

    // Slimy Sinews
    case 46:
      return 10;
    // Slimy Synapes
    case 47:
      return 10;
    // Slimy Shoulders
    case 48:
      return 10;
    // Summon Annoyance
    case 107:
      return 9;
    // Belch The Rainbow
    case 117:
      return 11;

    // Will change in future

    // Pirate Bellow
    case 118:
      return 6;
    // Summon Holiday Fun
    case 121:
      return 6;
    // Summon Carrot
    case 128:
      return 5;
    // Bear Essence
    case 134:
      return 6;
    // Calculate the Universe
    case 144:
      return 5;
    // Experience Safari
    case 180:
      return 4;
    // Implode Universe
    case 188:
      return 13;
    // Toggle Optimality
    case 7254:
      return 3;
    default:
      return 0;
  }
};

export const isPermable = (id: number) => {
  // Random old skills
  if (id < 10) return false;

  // Bad Moon
  if (id > 20 && id <= 27) return false;

  // Way of the Surprising Fist skills
  if (id > 63 && id <= 73) return false;

  // Spirit derived skills
  if (id > 7175 && id < 7181) return false;

  switch (id) {
    // VIP lounge skills
    case 91: // Dog Tired
    case 116: // Hollow Leg
      return false;

    // Nemesis skills
    case 49: // Gothy Handwave
    case 50: // Break It On Down
    case 51: // Pop and Lock
    case 52: // Run Like the Wind
    case 3024: // Carboloading
      return false;

    case 6019: // Gemlli's March of Testery
      return false;

    // Other skills from this class are not permable
    case 17047: // Mild Curs
      return true;

    // Avatar of West of Loathing skills
    case 156: // Shoot
      return false;

    // Not permable but granted every ascension
    case 174: // Incrdible Self-Estem
      return false;

    // S.I.T. Course certificate skills
    case 218: // Cryptobotanist
    case 219: // Insectologist
    case 220: // Psychogeologist
      return false;

    // Replica skills
    case 222: // Replica Emotionally Chipped
      return false;

    // Permable from PvP
    case 7254: // Toggle Optimality
      return true;
  }

  switch (Math.floor(id / 1000)) {
    case 7: // Skills granted by items
    case 8: // Mystical Bookshelf Skills
    case 11: // Avatar of Boris skills
    case 12: // Zombie Slayer skills
    case 14: // Avatar of Jarlsberg skills
    case 15: // Avatar of Sneaky Pete skills
    case 16: // Heavy Rains skills
    case 17: // Ed skills
    case 18: // Cow Puncher skills
    case 19: // Bean Slinger skills
    case 20: // Snake Oiler skills
    case 21: // The Source skills
    case 22: // Nuclear Autumn skills
    case 23: // Gelatinous Noob skills
    case 24: // Vampyre skills
    case 25: // Plumber skills
    case 27: // Grey Goo skills
    case 28: // AoSOL; Pig Skinner skills
    case 29: // AoSOL; Cheese Wizard skills
    case 30: // AoSOL; Jazz Agent skills
      return false;
  }

  return true;
};

const parseSkill = (parts: string[]): SkillDef => ({
  id: Number(parts[0]),
  name: parts[1],
  image: parts[2],
  permable: isPermable(Number(parts[0])),
});

export const loadSkills = async (lastKnownSize: number) => {
  const raw = await loadMafiaData("classskills", lastKnownSize);

  if (raw === null) return null;

  return {
    ...raw,
    data: raw.data.filter((p) => p.length > 2).map(parseSkill),
  };
};

export type RawSkill = [id: number, status: SkillStatus, level: number];

export const compressSkills = (skills: RawSkill[]) =>
  skills
    .sort((a, b) => a[0] - b[0])
    .reduce(
      (acc, skill) => {
        let r = acc[0];
        let currentBlock = acc[1];
        const block = Math.floor(skill[0] / 1000);
        // Add a comma between 1000 breaks
        if (block > currentBlock) {
          r += ",".repeat(block - currentBlock);
          currentBlock = block;
        }

        // Pad any missing skill ids
        const blockContents = r.substring(r.lastIndexOf(",") + 1);
        const zeros = "0".repeat(
          Math.max(
            0,
            skill[0] -
              block * 1000 -
              blockContents.replace(/\(\d+\)/g, "").length -
              (block === 0 ? 1 : 0),
          ),
        );
        r += zeros;

        // Add the skill status
        r += skill[1];

        // Add the level in parenthesis f applicable
        if (skill[2] > 0) {
          r += `(${skill[2]})`;
        }

        return [r, currentBlock] as [string, number];
      },
      ["", 0] as [string, number],
    )[0]
    .replace(/0+($|,)/, "$1");

export const expandSkills = (s = "") => {
  let id = 1;

  let result = [] as RawSkill[];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case "(":
        // If we see brackets, adjust the last skill level
        const end = s.indexOf(")", i);
        result[result.length - 1][2] = Number(s.substring(i + 1, end));
        i = end;
        break;
      case ",":
        // If we see a comma, jump to the next 1k block
        id = (Math.floor(id / 1000) + 1) * 1000;
        break;
      default:
        const status = Number(c) as SkillStatus;
        // We can just drop any references to skills we do not have permed
        // or levelled at this stage
        if (status !== SkillStatus.NONE || s[i + 1] === "(") {
          result.push([id, status, 0]);
        }
        id++;
        break;
    }
  }

  return result;
};
