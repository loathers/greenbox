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
    // Calculate The universe
    case 144:
      return 4;
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
    case 91: // SkillPool.DOG_TIRED:
    case 116: // SkillPool.HOLLOW_LEG:
      return false;

    // Nemesis skills
    case 49: // SkillPool.GOTHY_HANDWAVE:
    case 50: // SkillPool.BREAK_IT_ON_DOWN:
    case 51: // SkillPool.POP_AND_LOCK:
    case 52: // SkillPool.RUN_LIKE_THE_WIND:
    case 3024: // SkillPool.CARBOLOADING:
      return false;

    case 6019: // SkillPool.GEMELLIS_MARCH_OF_TESTERY:
      return false;

    // Other skills from this class are not permable
    case 17047: // SkillPool.MILD_CURSE:
      return true;

    // Avatar of West of Loathing skills
    case 156: // SkillPool.SHOOT:
      return false;

    // Not permable but granted every ascension
    case 174: // SkillPool.INCREDIBLE_SELF_ESTEEM:
      return false;

    // Permable from PvP
    case 7254: // SkillPool.TOGGLE_OPTIMALITY
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
              (block === 0 ? 1 : 0)
          )
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
      ["", 0] as [string, number]
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
