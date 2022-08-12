import { SimpleGrid } from "@chakra-ui/react";
import { ItemDef } from "greenbox-data";

import { itemStatusToThingState } from "../utils";

import Thing from "./Thing";

type Props = {
  items: number[];
  playerItems: number[];
  idToItem: { [id: number]: ItemDef };
};

export default function ItemGrid({ items, playerItems, idToItem }: Props) {
  return (
    <SimpleGrid columns={6} spacing={1}>
      {items.map(
        (i, index) =>
          idToItem[i] && (
            <Thing
              key={i}
              type="item"
              name={idToItem[i].name}
              image={`itemimages/${idToItem[i].image}`}
              state={itemStatusToThingState(playerItems[index])}
            />
          )
      )}
    </SimpleGrid>
  );
}
