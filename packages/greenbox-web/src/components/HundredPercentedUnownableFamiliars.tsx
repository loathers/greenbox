import { SimpleGrid, Text } from "@chakra-ui/react";
import { FamiliarDef } from "greenbox-data";
import { Fragment } from "react";

import AlphaImage from "./AlphaImage";
import Medal from "./Medal";

type Props = {
  familiars: FamiliarDef[];
};

export default function HundredPercentedUnownableFamiliars({ familiars }: Props) {
  if (familiars.length === 0) return null;

  return (
    <SimpleGrid spacingX={3} columns={3} width="30%" templateColumns="repeat(3, max-content)">
      {familiars.map((familiar) => (
        <Fragment key={familiar.id}>
          <Text>{familiar.name}</Text>
          <AlphaImage
            src={`itemimages/${familiar.image}`}
            sourceWidth={30}
            width="20px"
            height="20px"
          />
          <Medal title="100% run" />
        </Fragment>
      ))}
    </SimpleGrid>
  );
}
