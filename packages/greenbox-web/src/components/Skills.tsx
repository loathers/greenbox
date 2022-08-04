import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { loadSkills, RawSkill, SkillDef, SkillStatus } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import AlphaImage from "./AlphaImage";
import Progress from "./Progress";
import Skill from "./Skill";

type Props = {
  skills: RawSkill[];
};

export default function Skills({ skills: playerSkills }: Props) {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([] as SkillDef[]);

  useEffect(() => {
    async function load() {
      setSkills((await loadSkills()).filter((s) => s.permable));
      setLoading(false);
    }
    load();
  }, []);

  const totalHardcorePermed = useMemo(
    () => playerSkills.filter((s) => s[1] === SkillStatus.HARDCORE).length,
    [playerSkills]
  );
  const totalSoftcorePermed = useMemo(
    () => playerSkills.filter((s) => s[1] === SkillStatus.SOFTCORE).length,
    [playerSkills]
  );
  const idToSkill = useMemo(
    () =>
      playerSkills.reduce((acc, s) => ({ ...acc, [s[0]]: s }), {} as { [id: number]: RawSkill }),
    [playerSkills]
  );

  const groupedSkills = skills.reduce((acc, s) => {
    const bucket = Math.floor(s.id / 1000);
    return { ...acc, [bucket]: [...(acc[bucket] || []), s] };
  }, {} as { [key: number]: SkillDef[] });

  const bucketedSkills = Object.entries(groupedSkills).sort((a, b) =>
    Number(a[0]) === 0 ? 1 : Number(a[0]) - Number(b[0])
  );

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="3xl">
          <Stack direction="row" flex="1" textAlign="left">
            <AlphaImage src="itemimages/book3.gif" />
            <Box>Skills</Box>
          </Stack>
          <Box alignSelf="stretch" flex="1">
            <Progress
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
            />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <Stack spacing={4}>
          {bucketedSkills.map(([bucket, contents]) => (
            <SimpleGrid key={bucket} columns={6} spacing={1}>
              {contents.map((s) => (
                <Skill
                  key={s.id}
                  skill={s}
                  status={idToSkill[s.id]?.[1] ?? 0}
                  level={idToSkill[s.id]?.[2] ?? 0}
                />
              ))}
            </SimpleGrid>
          ))}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
