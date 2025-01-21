import { tuple } from "./utils.js";

export const enum SkillStatus {
  NONE = 0,
  SOFTCORE = 1,
  HARDCORE = 2,
}

export const mutexSkillGroups = [
  {
    skillIds: [191, 192, 193],
    groupName: "Drippy Skill",
  },
];

export type RawSkill = [id: number, status: SkillStatus, level: number];

export const compressSkills = (skills: RawSkill[]): string =>
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

        return tuple([r, currentBlock]);
      },
      tuple(["", 0]),
    )[0]
    .replace(/0+($|,)/, "$1");

export const expandSkills = (s = ""): RawSkill[] => {
  let id = 1;

  const result = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    switch (c) {
      case "(": {
        // If we see brackets, adjust the last skill level
        const end = s.indexOf(")", i);
        result[result.length - 1][2] = Number(s.substring(i + 1, end));
        i = end;
        break;
      }
      case ",": {
        // If we see a comma, jump to the next 1k block
        id = (Math.floor(id / 1000) + 1) * 1000;
        break;
      }
      default: {
        const status = Number(c);
        // We can just drop any references to skills we do not have permed
        // or levelled at this stage
        if (status !== SkillStatus.NONE || s[i + 1] === "(") {
          result.push(tuple([id, status, 0]));
        }
        id++;
        break;
      }
    }
  }

  return result;
};
