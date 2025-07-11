import { SimpleGrid } from "@chakra-ui/react";
import { type TattooDef } from "greenbox-data";

import Tattoo from "./Tattoo.js";

type Props<T> = {
  tattoos: T[];
  getLevel: (tattoo: T, index: number) => number;
};

export default function TattooGrid<T extends TattooDef>({
  tattoos,
  getLevel,
}: Props<T>) {
  return (
    <SimpleGrid columns={[4, null, 6]} gap={1}>
      {tattoos.map((tattoo, index) => (
        <Tattoo
          key={tattoo.name}
          tattoo={tattoo}
          level={getLevel(tattoo, index)}
        />
      ))}
    </SimpleGrid>
  );
}
