import { ItemDef, ItemStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks";
import { itemStatusToThingState, notNullOrUndefined } from "../utils";

import Thing from "./Thing";
import ThingGridGrid from "./ThingGrid";

type Props = {
  items: number[];
  playerItems: number[];
  columns?: number;
  getRowLabel?: (row: number) => React.ReactNode;
};

export default function ItemGrid({ items, playerItems, getRowLabel, columns = 6 }: Props) {
  const idToItem = useAppSelector((state) => state.items);

  const itemObjects = items.map((id) => idToItem[id]);

  const idToStatus = useMemo(
    () =>
      items.reduce(
        (acc, item, index) => ({ ...acc, [item]: playerItems[index] }),
        {} as { [id: number]: ItemStatus },
      ),
    [items, playerItems],
  );

  const renderItem = (item: ItemDef) => (
    <Thing
      key={item.id}
      type="item"
      name={item.name}
      image={`itemimages/${item.image}`}
      state={itemStatusToThingState(idToStatus[item.id] || ItemStatus.NONE)}
    />
  );

  return (
    <ThingGridGrid
      items={itemObjects}
      idToStatus={idToStatus}
      columns={columns}
      getRowLabel={getRowLabel}
      renderItem={renderItem}
    />
  );
}
