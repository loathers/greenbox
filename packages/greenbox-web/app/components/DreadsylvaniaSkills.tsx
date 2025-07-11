import { Table } from "@chakra-ui/react";

import AlphaImage from "./AlphaImage.js";
import Skill from "./Skill.js";
import Subsection from "./Subsection.js";

function BlankCell() {
  return <Table.Cell bg="chakra-border-color"></Table.Cell>;
}

export default function DreadsylvaniaSkills() {
  return (
    <Subsection title="The Machine" image="itemimages/dv_skullcap.gif">
      <Table.ScrollArea>
        <Table.Root>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.ColumnHeader width="80px">
                <AlphaImage
                  src="itemimages/brain.gif"
                  alt="Class of the brains in The Machine"
                />
              </Table.ColumnHeader>
              <Table.ColumnHeader title="Seal Clubber">SC</Table.ColumnHeader>
              <Table.ColumnHeader title="Turtle Tamer">TT</Table.ColumnHeader>
              <Table.ColumnHeader title="Pastamancer">PA</Table.ColumnHeader>
              <Table.ColumnHeader title="Sauceror">S</Table.ColumnHeader>
              <Table.ColumnHeader title="Disco Bandit">DB</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.ColumnHeader title="Turtle Tamer">TT</Table.ColumnHeader>
              <Table.Cell padding={1}>
                <Skill id={92} />
              </Table.Cell>
              <BlankCell />
              <BlankCell />
              <BlankCell />
              <BlankCell />
            </Table.Row>
            <Table.Row>
              <Table.ColumnHeader title="Pastamancer">PA</Table.ColumnHeader>
              <Table.Cell padding={1}>
                <Skill id={93} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={97} />
              </Table.Cell>
              <BlankCell />
              <BlankCell />
              <BlankCell />
            </Table.Row>
            <Table.Row>
              <Table.ColumnHeader title="Sauceror">S</Table.ColumnHeader>
              <Table.Cell padding={1}>
                <Skill id={94} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={98} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={101} />
              </Table.Cell>
              <BlankCell />
              <BlankCell />
            </Table.Row>
            <Table.Row>
              <Table.ColumnHeader title="Disco Bandit">DB</Table.ColumnHeader>
              <Table.Cell padding={1}>
                <Skill id={95} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={99} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={102} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={104} />
              </Table.Cell>
              <BlankCell />
            </Table.Row>
            <Table.Row>
              <Table.ColumnHeader title="Accordion Thief">
                AT
              </Table.ColumnHeader>
              <Table.Cell padding={1}>
                <Skill id={96} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={100} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={103} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={105} />
              </Table.Cell>
              <Table.Cell padding={1}>
                <Skill id={106} />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
    </Subsection>
  );
}
