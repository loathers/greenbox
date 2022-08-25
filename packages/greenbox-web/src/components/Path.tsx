import { Badge, Box, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { ItemStatus, PathDef } from "greenbox-data";

import { itemStatusToThingState, useItemMap } from "../utils";

import AlphaImage from "./AlphaImage";
import RotatedHeading from "./RotatedHeading";
import Thing from "./Thing";

function levelToTitle(level: number, max: number) {
  if (max === 1) {
    return level === 1 ? "Have" : "Do not have";
  }

  return `${level < max ? "Partially have" : "Have"} (level ${level} / ${max})`;
}

function guessAnchorFromTattooImage(i: string) {
  if (i.startsWith("class")) return i.endsWith("hc") ? "#Ascension_Tattoos" : "#Class_Tattoos";
  if (!isNaN(parseFloat(i[i.length - 1]))) return "#Ascension_Tattoos";
  return "";
}

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
      <Heading as="h3" fontWeight="normal" fontSize="2xl">
        <Stack direction="row">
          <AlphaImage src={path.image} sourceWidth={path.image.startsWith("sigils") ? 50 : 30} />
          <Box>{path.name}</Box>
          {path.maxPoints > 0 && (
            <Box position="relative">
              <Badge
                title={`${points} points out of a possible ${path.maxPoints}`}
                position="absolute"
                top={0}
              >
                {points} / {path.maxPoints}
              </Badge>
            </Box>
          )}
        </Stack>
      </Heading>
      <Wrap spacing={1}>
        {path.items.length > 0 && (
          <WrapItem>
            <RotatedHeading size="6px">Items</RotatedHeading>
          </WrapItem>
        )}
        {path.items.map(
          (i, index) =>
            idToItem[i] && (
              <WrapItem>
                <Thing
                  key={i}
                  type="item"
                  name={idToItem[i].name}
                  image={`itemimages/${idToItem[i].image}`}
                  state={itemStatusToThingState(items[index])}
                />
              </WrapItem>
            )
        )}
        {path.equipment.length > 0 && (
          <WrapItem>
            <RotatedHeading size="6px">Equipment</RotatedHeading>
          </WrapItem>
        )}
        {path.equipment.map(
          (i, index) =>
            idToItem[i] && (
              <WrapItem>
                <Thing
                  key={i}
                  type="item"
                  name={idToItem[i].name}
                  image={`itemimages/${idToItem[i].image}`}
                  state={itemStatusToThingState(equipment[index])}
                />
              </WrapItem>
            )
        )}
        {path.tattoos.length > 0 && (
          <WrapItem>
            <RotatedHeading size="6px">Tattoos</RotatedHeading>
          </WrapItem>
        )}
        {path.tattoos.map(({ name, image }, index) => {
          const level = tattoos[index] || 0;
          const max = maxTattooLevel[index];
          const i = Array.isArray(image) ? image[Math.max(0, level - 1)] : image;

          const anchor = guessAnchorFromTattooImage(i);

          return (
            <WrapItem>
              <Thing
                key={name}
                type="tattoo"
                name={name}
                image={`otherimages/sigils/${i}.gif`}
                sourceWidth={50}
                title={levelToTitle(level, max)}
                state={level === 0 ? null : level < max ? "partial" : "complete"}
                link={`Tattoo${anchor}`}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Stack>
  );
}
