import { Badge, Box, Heading, HStack, Stack } from "@chakra-ui/react";
import { ItemStatus, PathDef } from "greenbox-data";

import { useItemMap } from "../hooks";

import AlphaImage from "./AlphaImage";
import ItemGrid from "./ItemGrid";
import PathTattoos from "./PathTattoos";

type Props = {
  path: PathDef;
  points: number;
  items: ItemStatus[];
  equipment: ItemStatus[];
  tattoos: number[];
  maxTattooLevel: number[];
};

export default function Path({ path, points, items, equipment, tattoos, maxTattooLevel }: Props) {
  // Put together a map of item ids to item definitions for this Path
  const idToItem = useItemMap([...path.items, ...path.equipment]);

  return (
    <Stack>
      <HStack>
        <AlphaImage src={path.image} sourceWidth={path.image.startsWith("sigils") ? 50 : 30} />
        <Heading as="h3" fontWeight="normal" fontSize="2xl">
          {path.name}
        </Heading>
        {path.maxPoints > 0 && (
          <Box alignSelf="start" position="relative">
            <Badge
              title={`${points} points out of a possible ${path.maxPoints}`}
              position="absolute"
              top={0}
            >
              {points} / {path.maxPoints}
            </Badge>
          </Box>
        )}
      </HStack>
      {path.items.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Items
          </Heading>
          <ItemGrid items={path.items} playerItems={items} idToItem={idToItem} />
        </>
      )}
      {path.equipment.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Equipment
          </Heading>
          <ItemGrid items={path.equipment} playerItems={equipment} idToItem={idToItem} />
        </>
      )}
      {path.tattoos.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Tattoos
          </Heading>
          <PathTattoos
            tattoos={path.tattoos}
            playerTattoos={tattoos}
            maxTattooLevel={maxTattooLevel}
          />
        </>
      )}
    </Stack>
  );
}
