import { IotMStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks.js";
import { createPlayerDataSelector } from "../store/index.js";

import IotM from "./IotM.js";
import Section from "./Section.js";
import ThingGrid from "./ThingGrid.js";

const selectPlayerIotMs = createPlayerDataSelector("iotms");

export default function IotYs() {
  const playerIotMs = useAppSelector(selectPlayerIotMs);
  const iotys = useAppSelector((state) => state.iotms).filter(
    (i) => i.month <= 0,
  );
  const loading = useAppSelector((state) => state.loading.iotms || false);
  const idToItem = useAppSelector((state) => state.items);

  const vipIotYs = useMemo(
    () => iotys.filter((i) => i.type === "vip").map((i) => i.id),
    [iotys],
  );
  const ownsVipKey = useMemo(
    () => playerIotMs.findIndex((i) => vipIotYs.includes(i[0])) > -1,
    [playerIotMs, vipIotYs],
  );

  const numberOfIoyms = useMemo(
    () => iotys.length - (vipIotYs.length - 1),
    [iotys],
  );

  const numberofIotYsBound = useMemo(
    () =>
      playerIotMs.filter((i) => i[1] == IotMStatus.BOUND).map((i) => i[0])
        .length - (ownsVipKey ? vipIotYs.length - 1 : 0),
    [playerIotMs],
  );

  const idToPlayerIotY = useMemo(
    () => Object.fromEntries(playerIotMs.map((i) => [i[0], i[1]])),
    [playerIotMs],
  );

  const normalizedIotysDual = useMemo(
    () => [
      ...Array(9).map((_) => null),
      ...iotys.filter((i) => i.year <= 2016),
    ],
    [iotys],
  );

  const normalizedIotys = useMemo(
    () => [
      ...Array(9).map((_) => null),
      ...iotys.filter((i) => i.year >= 2017),
    ],
    [iotys],
  );

  return (
    <Section
      title="IotYs"
      wiki="Mr. Store"
      icon="itemimages/mrsacc.gif"
      loading={loading}
      values={[
        {
          color: "complete",
          value: numberofIotYsBound,
          name: `${numberofIotYsBound} / ${numberOfIoyms} IotYs bound`,
        },
      ]}
      max={iotys.length}
    >
      <ThingGrid
        idToStatus={idToPlayerIotY}
        items={normalizedIotysDual.filter((i) => i)}
        columns={2}
        getRowLabel={(row) => 2005 + row}
        renderItem={(ioty) => (
          <IotM
            key={ioty.id}
            item={idToItem[ioty.id]}
            iotm={ioty}
            status={idToPlayerIotY[ioty.id] ?? 0}
          />
        )}
      />
      <ThingGrid
        idToStatus={idToPlayerIotY}
        items={normalizedIotys.filter((i) => i)}
        columns={1}
        getRowLabel={(row) => 2017 + row}
        renderItem={(ioty) => (
          <IotM
            key={ioty.id}
            item={idToItem[ioty.id]}
            iotm={ioty}
            status={idToPlayerIotY[ioty.id] ?? 0}
          />
        )}
      />
    </Section>
  );
}
