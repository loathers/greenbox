import { Box, SimpleGrid } from "@chakra-ui/react";
import { ItemStatus } from "greenbox-data";

import { chunk, notNullOrUndefined } from "../utils";

import RowLabel from "./RowLabel";

type Props<T> = {
  items: (T | null)[];
  idToStatus: Record<number, number>;
  renderItem: (item: T) => React.ReactNode;
  columns?: number;
  getRowLabel?: (row: number) => React.ReactNode;
};

export default function ThingGrid<T extends { id: number }>({
  items,
  renderItem,
  idToStatus,
  getRowLabel,
  columns = 6,
}: Props<T>) {
  const chunks = chunk(items, columns);

  return (
    <SimpleGrid
      spacing={1}
      columns={[3, null, columns + (getRowLabel ? 1 : 0)]}
      gridTemplateColumns={[
        null,
        null,
        `${getRowLabel ? "auto" : ""} repeat(${columns}, minmax(0, 1fr))`,
      ]}
    >
      {chunks.map((chunk, chunkIndex) => {
        const all = chunk
          .filter(notNullOrUndefined)
          .map((item) => idToStatus[item.id] ?? ItemStatus.NONE)
          .every((status) => status !== ItemStatus.NONE);

        return [
          getRowLabel && (
            <RowLabel
              key={`rowlabel-${chunkIndex}`}
              label={getRowLabel(chunkIndex)}
              complete={all}
            />
          ),
          ...chunk.map((item, index) =>
            item ? (
              renderItem(item)
            ) : (
              <Box display={["none", null, "block"]} key={`blank-${index}`} />
            ),
          ),
        ];
      })}
    </SimpleGrid>
  );
}
