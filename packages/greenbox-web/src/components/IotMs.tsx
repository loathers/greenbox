import { Badge, Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { IotMStatus, ItemStatus, RawIotM } from "greenbox-data";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";
import { chunk, notNullOrUndefined, useItemMap } from "../utils";

import IotM from "./IotM";
import Section from "./Section";

function Year({ year, complete }: { year: number; complete: boolean }) {
  return (
    <Flex key={`year-${year}`} alignItems="center" justifyContent="flex-end">
      <Badge
        sx={{ transform: "rotate(270deg)" }}
        fontSize="sm"
        bg={complete ? "complete" : undefined}
      >
        {year}
      </Badge>
    </Flex>
  );
}

type Props = {
  iotms: RawIotM[];
};

export default function IotMs({ iotms: playerIotMs }: Props) {
  const iotms = useSelector((state: RootState) => state.iotms);
  const loading = useSelector((state: RootState) => state.loading.iotms || false);

  // Put together a map of item ids to item definitions for this Path
  const idToItem = useItemMap(iotms.map((i) => i.id));

  const vipIotMs = useMemo(() => iotms.filter((i) => i.type === "vip").map((i) => i.id), [iotms]);
  const ownsVipKey = useMemo(
    () => playerIotMs.findIndex((i) => vipIotMs.includes(i[0])) > -1,
    [playerIotMs, vipIotMs],
  );

  const numberOfIotms = useMemo(() => iotms.length - (vipIotMs.length - 1), [iotms]);

  const numberofIotMsBound = useMemo(
    () =>
      playerIotMs.filter((i) => i[1] == IotMStatus.BOUND).map((i) => i[0]).length -
      (ownsVipKey ? vipIotMs.length - 1 : 0),
    [playerIotMs],
  );

  const idToIotM = useMemo(
    () => playerIotMs.reduce((acc, i) => ({ ...acc, [i[0]]: i }), {} as { [id: number]: RawIotM }),
    [playerIotMs],
  );

  const iotmChunks = useMemo(() => chunk([...Array(9).map((_) => null), ...iotms], 12), [iotms]);

  return (
    <Section
      title="IotMs"
      icon="itemimages/mracc.gif"
      loading={loading}
      values={[
        {
          color: "complete",
          value: numberofIotMsBound,
          name: `${numberofIotMsBound} / ${numberOfIotms} IotMs bound`,
        },
      ]}
      max={iotms.length}
    >
      <SimpleGrid columns={[13]} spacing={1} gridTemplateColumns="auto repeat(12, minmax(0, 1fr))">
        {iotmChunks.map((yearChunk, year) => {
          const all = yearChunk
            .filter(notNullOrUndefined)
            .map((i) => idToIotM[i.id]?.[1] ?? IotMStatus.NONE)
            .every((status) => status !== IotMStatus.NONE);
          return [
            <Year key={`year-${year}`} year={year + 2004} complete={all} />,
            ...yearChunk.map((iotm, i) =>
              iotm ? (
                <IotM
                  key={iotm.id}
                  item={idToItem[iotm.id]}
                  iotm={iotm}
                  status={idToIotM[iotm.id]?.[1] ?? 0}
                />
              ) : (
                <Box key={`blank-${i}`} />
              ),
            ),
          ];
        })}
      </SimpleGrid>
    </Section>
  );
}
