import { SimpleGrid } from "@chakra-ui/react";
import { SkillStatus, mutexSkillGroups } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks.js";
import {
  selectIdToPlayerSkills,
  selectPlayerSkills,
  type SkillType,
} from "../store/index.js";
import { getSkillBucket } from "../utils.js";

import MutexSkills from "./MutexSkills.js";
import Section from "./Section.js";
import Skill from "./Skill.js";
import SkillBucket from "./SkillBucket.js";

const IMPOSSIBLE_SKILL_COUNT = mutexSkillGroups.reduce(
  (accumulator, mutexSkillGroup) =>
    accumulator + mutexSkillGroup.skillIds.length - 1,
  0,
);

export default function Skills() {
  const playerSkills = useAppSelector(selectPlayerSkills);
  const idToSkill = useAppSelector(selectIdToPlayerSkills);

  const allSkills = useAppSelector((state) => state.skills);
  const skills = useMemo(
    () => allSkills.filter((s) => s.permable),
    [allSkills],
  );
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

  const groupedSkills = useMemo(
    () =>
      skills.reduce<Record<number, SkillType[]>>((acc, s) => {
        const bucket = getSkillBucket(s);
        return { ...acc, [bucket]: [...(acc[bucket] || []), s] };
      }, {}),
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

  const skillsPermable = skills.length - IMPOSSIBLE_SKILL_COUNT;

  // Not ideal but we accumulate mutually exclusive groups of skills in this array as we traverse the skills array (if necessary).
  const mutexGroup = [] as SkillType[];

  function handleMutex(s: SkillType) {
    const matchingMutexSkillGroup = mutexSkillGroups.find((mutexSkillGroup) =>
      mutexSkillGroup.skillIds.includes(s.id),
    );
    // Is this skill part of a mutex?
    if (!matchingMutexSkillGroup) return false;

    // Accumulate the skill
    mutexGroup.push(s);

    // Are we mid-group? If so, allow accumulation to continue
    if (
      matchingMutexSkillGroup.skillIds[
        matchingMutexSkillGroup.skillIds.length - 1
      ] !== s.id
    ) {
      return null;
    }

    // Otherwise, spit out accumulated group
    const group = [...mutexGroup];
    mutexGroup.length = 0;

    return (
      <MutexSkills
        key={s.id}
        groupName={matchingMutexSkillGroup.groupName}
        skills={group}
        statuses={group.map((s) => idToSkill[s.id]?.[1] ?? SkillStatus.NONE)}
      />
    );
  }

  return (
    <Section
      title="Skills"
      icon="itemimages/book3.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalSoftcorePermed,
          name: `${totalSoftcorePermed} / ${skillsPermable} softcore permed`,
        },
        {
          color: "complete",
          value: totalHardcorePermed,
          name: `${totalHardcorePermed} / ${skillsPermable} hardcore permed`,
        },
      ]}
      max={skillsPermable}
    >
      {bucketedSkills.map(([bucket, contents]) => {
        const allHardcorePermed = contents.every(
          (s) => idToSkill[s.id]?.[1] === SkillStatus.HARDCORE,
        );

        return (
          <SkillBucket
            key={bucket}
            bucket={Number(bucket)}
            cls={classes[Number(bucket)]}
            medal={allHardcorePermed}
          >
            <SimpleGrid columns={6} gap={1}>
              {contents.map((s) => {
                const mutexHandler = handleMutex(s);
                if (mutexHandler !== false) return mutexHandler;
                return <Skill key={s.id} id={s.id} />;
              })}
            </SimpleGrid>
          </SkillBucket>
        );
      })}
    </Section>
  );
}
