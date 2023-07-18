import { Box, SimpleGrid } from "@chakra-ui/react";
import { IotMStatus, RawIotM } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector, useItemMap } from "../hooks";
import { createPlayerDataSelector } from "../store";
import { chunk, notNullOrUndefined } from "../utils";

import IotM from "./IotM";
import Section from "./Section";
import Year from "./Year";

const selectPlayerIotMs = createPlayerDataSelector("iotms");

export default function IotMs() {
  const playerIotMs = useAppSelector(selectPlayerIotMs);
  const iotms = useAppSelector((state) => state.iotms);
  const loading = useAppSelector((state) => state.loading.iotms || false);

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
      <SimpleGrid
        spacing={1}
        columns={[3, null, 13]}
        gridTemplateColumns={[null, null, "auto repeat(12, minmax(0, 1fr))"]}
      >
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
                <Box display={["none", null, "block"]} key={`blank-${i}`} />
              ),
            ),
          ];
        })}
      </SimpleGrid>
    </Section>
  );
}
