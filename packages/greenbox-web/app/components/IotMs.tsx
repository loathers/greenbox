import { IotMStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks.js";
import { createPlayerDataSelector } from "../store/index.js";

import IotM from "./IotM.js";
import Section from "./Section.js";
import ThingGrid from "./ThingGrid.js";

const selectPlayerIotMs = createPlayerDataSelector("iotms");

export default function IotMs() {
  const playerIotMs = useAppSelector(selectPlayerIotMs);
  const iotms = useAppSelector((state) => state.iotms);
  const loading = useAppSelector((state) => state.loading.iotms || false);
  const idToItem = useAppSelector((state) => state.items);

  const vipIotMs = useMemo(
    () => iotms.filter((i) => i.type === "vip").map((i) => i.id),
    [iotms],
  );
  const ownsVipKey = useMemo(
    () => playerIotMs.findIndex((i) => vipIotMs.includes(i[0])) > -1,
    [playerIotMs, vipIotMs],
  );

  const numberOfIotms = useMemo(
    () => iotms.length - (vipIotMs.length - 1),
    [iotms],
  );

  const numberofIotMsBound = useMemo(
    () =>
      playerIotMs.filter((i) => i[1] == IotMStatus.BOUND).map((i) => i[0])
        .length - (ownsVipKey ? vipIotMs.length - 1 : 0),
    [playerIotMs],
  );

  const idToStatus = useMemo(
    () =>
      playerIotMs.reduce(
        (acc, i) => ({ ...acc, [i[0]]: i[1] }),
        {} as Record<number, IotMStatus>,
      ),
    [playerIotMs],
  );

  const normalizedIotms = useMemo(
    () => [...Array(9).map((_) => null), ...iotms],
    [iotms],
  );

  return (
    <Section
      title="IotMs"
      wiki="Mr. Store"
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
      <ThingGrid
        idToStatus={idToStatus}
        items={normalizedIotms}
        columns={12}
        getRowLabel={(row) => 2004 + row}
        renderItem={(iotm) => (
          <IotM
            key={iotm.id}
            item={idToItem[iotm.id]}
            iotm={iotm}
            status={idToStatus[iotm.id] ?? 0}
          />
        )}
      />
    </Section>
  );
}
