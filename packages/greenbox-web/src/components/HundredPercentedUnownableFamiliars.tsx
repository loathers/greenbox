import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { FamiliarDef } from "greenbox-data";

import Medal from "./Medal";

type Props = {
  familiars: FamiliarDef[];
};

export default function HundredPercentedUnownableFamiliars({ familiars }: Props) {
  if (familiars.length === 0) return null;

  return (
    <List>
      {familiars.map((familiar) => (
        <ListItem>
          <ListIcon as={Medal} title="100% run" />
          {familiar.name}
        </ListItem>
      ))}
    </List>
  );
}
