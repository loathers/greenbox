import { SimpleGrid, Stack } from "@chakra-ui/react";
import { ClassDef, RawSkill, SkillDef, SkillStatus } from "greenbox-data";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import MutexSkills from "./MutexSkills";
import Section from "./Section";
import Skill from "./Skill";
import SkillClassHeading from "./SkillClassHeading";

type Props = {
  skills: RawSkill[];
};

export default function Skills({ skills: playerSkills }: Props) {
  const skills = useSelector((state: RootState) => state.skills.filter((s) => s.permable));
  const classes = useSelector((state: RootState) => state.classes);
  const loading = useSelector((state: RootState) => state.loading.skills || false);

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
      playerSkills.reduce((acc, s) => ({ ...acc, [s[0]]: s }), {} as { [id: number]: RawSkill }),
    [playerSkills],
  );
  const idToClass = useMemo(
    () => classes.reduce((acc, c) => ({ ...acc, [c.id]: c }), {} as { [id: number]: ClassDef }),
    [classes],
  );

  const groupedSkills = useMemo(
    () =>
      skills.reduce(
        (acc, s) => {
          let bucket = Math.floor(s.id / 1000);
          // This is just for Toggle Optimality :)
          if (bucket === 7) bucket = 0;
          return { ...acc, [bucket]: [...(acc[bucket] || []), s] };
        },
        {} as { [key: number]: SkillDef[] },
      ),
    [skills],
  );

  const bucketedSkills = useMemo(
    () =>
      Object.entries(groupedSkills).sort((a, b) =>
        Number(a[0]) === 0 ? 1 : Number(a[0]) - Number(b[0]),
      ),
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
