import { SimpleGrid } from "@chakra-ui/react";
import { ItemDef } from "greenbox-data";

import { itemStatusToThingState } from "../utils";

import Thing from "./Thing";

type Props = {
  items: number[];
  playerItems: number[];
  idToItem: { [id: number]: ItemDef };
  columns?: number;
};

export default function ItemGrid({ items, playerItems, idToItem, columns = 6 }: Props) {
  return (
    <SimpleGrid columns={columns} spacing={1}>
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
