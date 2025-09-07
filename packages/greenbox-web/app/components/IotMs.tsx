import { BindableStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks.js";
import { createPlayerDataSelector } from "../store/index.js";

import Bindable from "./Bindable.js";
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
      playerIotMs.filter((i) => i[1] == BindableStatus.BOUND).map((i) => i[0])
        .length - (ownsVipKey ? vipIotMs.length - 1 : 0),
    [playerIotMs],
  );

  const idToPlayerIotM = useMemo(
    () => Object.fromEntries(playerIotMs.map((i) => [i[0], i[1]])),
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
        idToStatus={idToPlayerIotM}
        items={normalizedIotms}
        columns={12}
        getRowLabel={(row) => 2004 + row}
        renderItem={(bindable) => (
          <Bindable
            key={bindable.id}
            item={idToItem[bindable.id]}
            bindable={bindable}
            status={idToPlayerIotM[bindable.id] ?? 0}
          />
        )}
      />
    </Section>
  );
}
