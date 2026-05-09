import { ItemStatus } from "greenbox-data";
import { useMemo } from "react";

import type { Item } from "data-of-loathing";
import { useItems } from "../hooks.js";
import { itemStatusToThingState } from "../utils.js";

import Thing from "./Thing.js";
import ThingGrid from "./ThingGrid.js";

type Props = {
  items: number[];
  playerItems: number[];
  columns?: number;
  getRowLabel?: (row: number) => React.ReactNode;
};

export default function ItemGrid({
  items,
  playerItems,
  getRowLabel,
  columns = 6,
}: Props) {
  const idToItem = useItems();

  const itemObjects = items.map((id) => idToItem[id]);

  const idToPlayerItem = useMemo(
    () =>
      Object.fromEntries(
        items.map((item, index) => [item, playerItems[index]]),
      ),
    [items, playerItems],
  );

  const renderItem = (item: Item) => (
    <Thing
      key={item.id}
      type="item"
      name={item.name}
      image={`itemimages/${item.image}`}
      link={`Item:${item.id}`}
      state={itemStatusToThingState(idToPlayerItem[item.id] || ItemStatus.NONE)}
    />
  );

  return (
    <ThingGrid
      items={itemObjects}
      idToStatus={idToPlayerItem}
      columns={columns}
      getRowLabel={getRowLabel}
      renderItem={renderItem}
    />
  );
}
