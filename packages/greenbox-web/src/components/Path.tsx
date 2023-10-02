import { Badge, Box, Heading } from "@chakra-ui/react";
import { HARDCORE, ItemStatus, PathDef, SOFTCORE } from "greenbox-data";

import ItemGrid from "./ItemGrid";
import Subsection from "./Subsection";
import TattooGrid from "./TattooGrid";

const ROW_LABEL_RENDERERS: { [id: number]: (i: number) => React.ReactNode } = {
  [SOFTCORE]: (i: number) => 2015 + i,
  [HARDCORE]: (i: number) => (i === 0 ? null : 2015 + (i - 1)),
};

type Props = {
  path: PathDef;
  points: number;
  items: ItemStatus[];
  equipment: ItemStatus[];
  tattoos: number[];
};

export default function Path({
  path,
  points,
  items,
  equipment,
  tattoos,
}: Props) {
  return (
    <Subsection
      title={path.name}
      image={path.image}
      right={
        path.maxPoints > 0 && (
          <Box alignSelf="start" position="relative">
            <Badge
              title={`${points} points out of a possible ${path.maxPoints}`}
              position="absolute"
              top={0}
            >
              {points} / {path.maxPoints}
            </Badge>
          </Box>
        )
      }
    >
      {path.items.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Items
          </Heading>
          <ItemGrid items={path.items} playerItems={items} />
        </>
      )}
      {path.equipment.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Equipment
          </Heading>
          <ItemGrid
            items={path.equipment}
            playerItems={equipment}
            getRowLabel={ROW_LABEL_RENDERERS[path.id]}
          />
        </>
      )}
      {path.tattoos.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Tattoos
          </Heading>
          <TattooGrid
            tattoos={path.tattoos}
            getLevel={(t, i) => tattoos[i] || 0}
          />
        </>
      )}
    </Subsection>
  );
}
