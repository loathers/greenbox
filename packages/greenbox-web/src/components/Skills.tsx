import { SimpleGrid, Stack } from "@chakra-ui/react";
import { SkillDef, SkillStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks";
import { createPlayerDataSelector } from "../store";
import { getSkillBucket } from "../utils";

import MutexSkills from "./MutexSkills";
import Section from "./Section";
import Skill from "./Skill";
import SkillClassHeading from "./SkillClassHeading";

const selectPlayerSkills = createPlayerDataSelector("skills");

export default function Skills() {
  const playerSkills = useAppSelector(selectPlayerSkills);
  const allSkills = useAppSelector((state) => state.skills);
  const skills = useMemo(() => allSkills.filter((s) => s.permable), [allSkills]);
  const classes = useAppSelector((state) => state.classes);
  const loading = useAppSelector((state) => state.loading.skills || false);

  const totalHardcorePermed = useMemo(
    () => playerSkills.filter((s) => s[1] === SkillStatus.HARDCORE).length,
    [playerSkills],
  );
  const totalSoftcorePermed = useMemo(
    () => playerSkills.filter((s) => s[1] === SkillStatus.SOFTCORE).length,
    [playerSkills],
  );
  const idToSkill = useMemo(
    () =>
      playerSkills.reduce(
        (acc, s) => ({ ...acc, [s[0]]: s }),
        {} as { [id: number]: (typeof playerSkills)[number] },
      ),
    [playerSkills],
  );
  const idToClass = useMemo(
    () =>
      classes.reduce(
        (acc, c) => ({ ...acc, [c.id]: c }),
        {} as { [id: number]: (typeof classes)[number] },
      ),
    [classes],
  );

  const groupedSkills = useMemo(
    () =>
      skills.reduce(
        (acc, s) => {
          const bucket = getSkillBucket(s);
          return { ...acc, [bucket]: [...(acc[bucket] || []), s] };
        },
        {} as { [key: number]: SkillDef[] },
      ),
    [skills],
  );

  const bucketedSkills = useMemo(
    () =>
      Object.entries(groupedSkills)
        .map(([bucket, skills]) => [Number(bucket), skills] as const)
        .sort((a, b) => {
          // Order should be x >= 1 in order, then 0 < x < 1, then 0
          if (a[0] === 0 || (a[0] < 1 && b[0] >= 1)) return 1;
          if (b[0] === 0 || (b[0] < 1 && a[0] >= 1)) return -1;
          return a[0] - b[0];
        }),
    [groupedSkills],
  );

  // Not ideal but we accumulate mutually exclusive groups of skills in this array as we traverse the skills array (if necessary).
  const skillGroup = [] as SkillDef[];

  return (
    <Section
      title="Skills"
      icon="itemimages/book3.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalSoftcorePermed,
          name: `${totalSoftcorePermed} / ${skills.length} softcore permed`,
        },
        {
          color: "complete",
          value: totalHardcorePermed,
          name: `${totalHardcorePermed} / ${skills.length} hardcore permed`,
        },
      ]}
      max={skills.length}
    >
      <Stack spacing={4}>
        {bucketedSkills.map(([bucket, contents]) => {
          const allHardcorePermed = contents.every(
            (s) => idToSkill[s.id]?.[1] === SkillStatus.HARDCORE,
          );

          return (
            <Stack spacing={4} key={bucket}>
              <SkillClassHeading
                bucket={Number(bucket)}
                cls={idToClass[Number(bucket)]}
                medal={allHardcorePermed}
              />
              <SimpleGrid columns={6} spacing={1}>
                {contents.map((s) => {
                  switch (s.id) {
                    case 191:
                    case 192:
                    case 193:
                      skillGroup.push(s);
                      if (s.id !== 193) return null;

                      const group = [...skillGroup];
                      skillGroup.length = 0;
                      return (
                        <MutexSkills
                          key={s.id}
                          groupName="Drippy Skill"
                          skills={group}
                          statuses={group.map((s) => idToSkill[s.id]?.[1] ?? SkillStatus.NONE)}
                        />
                      );
                    default:
                      return (
                        <Skill
                          key={s.id}
                          skill={s}
                          status={idToSkill[s.id]?.[1] ?? SkillStatus.NONE}
                          level={idToSkill[s.id]?.[2] ?? 0}
                        />
                      );
                  }
                })}
              </SimpleGrid>
            </Stack>
          );
        })}
      </Stack>
    </Section>
  );
}
