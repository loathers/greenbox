import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { ItemDef, PathDef } from "greenbox-data";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import AlphaImage from "./AlphaImage";
import Thing from "./Thing";

type Props = {
  path: PathDef;
};

export default function Path({ path }: Props) {
  // Put together a map of item ids to item definitions for this Path
  const items = useSelector((state: RootState) =>
    state.items.length > 0
      ? [...path.items, ...path.equipment].reduce(
          (acc, id) => ({
            ...acc,
            // Because items appear in order of id with some gaps, an item of id i can be really quickly found by searching
            // backwards from position i in the array. Searching backwards is annoying in JavaScript so I just reduce right
            // and truncate the array when I find the item. This is fine because .slice() makes a copy of the state array.
            [id]: state.items
              .slice(0, id)
              .reduceRight((_1, i, _2, arr) => (i.id === id ? ((arr.length = 0), i) : i)),
          }),
          {} as { [id: number]: ItemDef }
        )
      : {}
  );

  return (
    <Stack>
      <Heading as="h3" fontWeight="normal" fontSize="2xl">
        <Stack direction="row">
          <AlphaImage src={path.image} sourceWidth={path.image.startsWith("sigils") ? 50 : 30} />
          <Box>{path.name}</Box>
        </Stack>
      </Heading>
      <SimpleGrid columns={6} spacing={1}>
        {path.items.map(
          (i) =>
            items[i] && (
              <Thing
                key={i}
                type="item"
                name={items[i].name}
                image={`itemimages/${items[i].image}`}
              />
            )
        )}
      </SimpleGrid>
      <SimpleGrid columns={6} spacing={1}>
        {path.equipment.map(
          (i) =>
            items[i] && (
              <Thing
                key={i}
                type="item"
                name={items[i].name}
                image={`itemimages/${items[i].image}`}
              />
            )
        )}
      </SimpleGrid>
      <SimpleGrid columns={6} spacing={1}>
        {path.tattoos.map(({ name, image }) => {
          const i = Array.isArray(image) ? image[0] : image;
          return (
            <Thing
              key={name}
              type="tattoo"
              name={name}
              image={`otherimages/sigils/${i}.gif`}
              sourceWidth={50}
            />
          );
        })}
      </SimpleGrid>
    </Stack>
  );
}
