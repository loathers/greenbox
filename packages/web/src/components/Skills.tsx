import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgressLabel,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { loadSkills, SkillDef } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import { CircularMultiProgress } from "./CircularMultiProgress";
import Skill from "./Skill";

type Props = {
  hardcore: number[];
  softcore: number[];
};

export default function Skills({ hardcore, softcore }: Props) {
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([] as SkillDef[]);
  const [validSkillIds, setValidSkillIds] = useState(new Set());

  useEffect(() => {
    async function load() {
      const sks = (await loadSkills()).filter((s) => s.permable);
      setSkills(sks);
      setValidSkillIds(new Set([...sks.map((s) => s.id)]));
      setLoading(false);
    }
    load();
  }, []);

  const hc = useMemo(
    () => hardcore.filter((id) => validSkillIds.has(id)),
    [hardcore, validSkillIds]
  );
  const sc = useMemo(
    () => softcore.filter((id) => validSkillIds.has(id)),
    [softcore, validSkillIds]
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
          <Box flex="1" textAlign="left" fontSize="inherit">
            Skills
          </Box>
          <CircularMultiProgress
            size="1em"
            colors={["partial", "complete"]}
            values={[sc.length, hc.length]}
            max={skills.length}
            isIndeterminate={loading}
          >
            <CircularProgressLabel>
              {sc.length + hc.length} / {skills.length}
            </CircularProgressLabel>
          </CircularMultiProgress>
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
                  hardcore={hardcore.includes(s.id)}
                  softcore={softcore.includes(s.id)}
                />
              ))}
            </SimpleGrid>
          ))}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
