import {
  Heading,
  HStack,
  Stack,
  TableContainer,
  Table,
  Tbody,
  Th,
  Thead,
  Td,
  Tr,
} from "@chakra-ui/react";
import { SkillStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks";
import { createPlayerDataSelector } from "../store";

import AlphaImage from "./AlphaImage";
import Skill from "./Skill";

function BlankCell() {
  return <Td bg="chakra-border-color"></Td>;
}

const selectPlayerSkills = createPlayerDataSelector("skills");

export default function DreadsylvaniaSkills() {
  const playerSkills = useAppSelector(selectPlayerSkills);
  const skills = useAppSelector((state) => state.skills);
  const dreadSkills = useMemo(
    () =>
      skills
        .filter((s) => s.id >= 92 && s.id <= 106)
        .reduce(
          (acc, s) => ({ ...acc, [s.id]: s }),
          {} as { [id: number]: (typeof skills)[number] },
        ),
    [skills],
  );
  const idToSkill = useMemo(
    () =>
      playerSkills.reduce(
        (acc, s) => ({ ...acc, [s[0]]: s }),
        {} as { [id: number]: (typeof playerSkills)[number] },
      ),
    [playerSkills],
  );

  const skillFor = (id: number) => (
    <Skill skill={dreadSkills[id]} status={idToSkill[id]?.[1] ?? SkillStatus.NONE} />
  );

  return (
    <Stack>
      <HStack>
        <AlphaImage src="itemimages/dv_skullcap.gif" />
        <Heading as="h3" fontWeight="normal" fontSize="2xl">
          The Machine
        </Heading>
      </HStack>
      <TableContainer>
        <Table>
          <Thead>
            <Tr textAlign="center">
              <Th width="80px">
                <AlphaImage src="itemimages/brain.gif" alt="Class of the brains in The Machine" />
              </Th>
              <Th title="Seal Clubber">SC</Th>
              <Th title="Turtle Tamer">TT</Th>
              <Th title="Pastamancer">PA</Th>
              <Th title="Sauceror">S</Th>
              <Th title="Disco Bandit">DB</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th title="Turtle Tamer">TT</Th>
              <Td padding={1}>{skillFor(92)}</Td>
              <BlankCell />
              <BlankCell />
              <BlankCell />
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Pastamancer">PA</Th>
              <Td padding={1}>{skillFor(93)}</Td>
              <Td padding={1}>{skillFor(97)}</Td>
              <BlankCell />
              <BlankCell />
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Sauceror">S</Th>
              <Td padding={1}>{skillFor(94)}</Td>
              <Td padding={1}>{skillFor(98)}</Td>
              <Td padding={1}>{skillFor(101)}</Td>
              <BlankCell />
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Disco Bandit">DB</Th>
              <Td padding={1}>{skillFor(95)}</Td>
              <Td padding={1}>{skillFor(99)}</Td>
              <Td padding={1}>{skillFor(102)}</Td>
              <Td padding={1}>{skillFor(104)}</Td>
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Accordion Thief">AT</Th>
              <Td padding={1}>{skillFor(96)}</Td>
              <Td padding={1}>{skillFor(100)}</Td>
              <Td padding={1}>{skillFor(103)}</Td>
              <Td padding={1}>{skillFor(105)}</Td>
              <Td padding={1}>{skillFor(106)}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
