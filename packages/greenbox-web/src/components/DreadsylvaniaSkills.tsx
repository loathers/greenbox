import {
  TableContainer,
  Table,
  Tbody,
  Th,
  Thead,
  Td,
  Tr,
} from "@chakra-ui/react";

import AlphaImage from "./AlphaImage.js";
import Skill from "./Skill.js";
import Subsection from "./Subsection.js";

function BlankCell() {
  return <Td bg="chakra-border-color"></Td>;
}

export default function DreadsylvaniaSkills() {
  return (
    <Subsection title="The Machine" image="itemimages/dv_skullcap.gif">
      <TableContainer>
        <Table>
          <Thead>
            <Tr textAlign="center">
              <Th width="80px">
                <AlphaImage
                  src="itemimages/brain.gif"
                  alt="Class of the brains in The Machine"
                />
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
              <Td padding={1}>
                <Skill id={92} />
              </Td>
              <BlankCell />
              <BlankCell />
              <BlankCell />
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Pastamancer">PA</Th>
              <Td padding={1}>
                <Skill id={93} />
              </Td>
              <Td padding={1}>
                <Skill id={97} />
              </Td>
              <BlankCell />
              <BlankCell />
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Sauceror">S</Th>
              <Td padding={1}>
                <Skill id={94} />
              </Td>
              <Td padding={1}>
                <Skill id={98} />
              </Td>
              <Td padding={1}>
                <Skill id={101} />
              </Td>
              <BlankCell />
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Disco Bandit">DB</Th>
              <Td padding={1}>
                <Skill id={95} />
              </Td>
              <Td padding={1}>
                <Skill id={99} />
              </Td>
              <Td padding={1}>
                <Skill id={102} />
              </Td>
              <Td padding={1}>
                <Skill id={104} />
              </Td>
              <BlankCell />
            </Tr>
            <Tr>
              <Th title="Accordion Thief">AT</Th>
              <Td padding={1}>
                <Skill id={96} />
              </Td>
              <Td padding={1}>
                <Skill id={100} />
              </Td>
              <Td padding={1}>
                <Skill id={103} />
              </Td>
              <Td padding={1}>
                <Skill id={105} />
              </Td>
              <Td padding={1}>
                <Skill id={106} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Subsection>
  );
}
