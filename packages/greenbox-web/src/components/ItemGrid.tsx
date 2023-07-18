import { SimpleGrid } from "@chakra-ui/react";
import { ItemDef, ItemStatus, RawItem } from "greenbox-data";

import { useAppSelector } from "../hooks";
import { itemStatusToThingState } from "../utils";

import Thing from "./Thing";

type Props = {
  items: number[];
  playerItems: number[];
  columns?: number;
};

export default function ItemGrid({ items, playerItems, columns = 6 }: Props) {
  const idToItem = useAppSelector((state) => state.items);

  return (
    <SimpleGrid columns={columns} spacing={1}>
      {items.map((id, index) => {
        const item = idToItem[id];
        if (!item) return null;
        return (
          <Thing
            key={id}
            type="item"
            name={item.name}
            image={`itemimages/${item.image}`}
            state={itemStatusToThingState(playerItems[index] || 0)}
          />
        );
      })}
    </SimpleGrid>
  );
}
