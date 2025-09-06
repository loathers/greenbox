import { BindableStatus } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks.js";
import { createPlayerDataSelector } from "../store/index.js";

import Bindable from "./Bindable.js";
import Section from "./Section.js";
import ThingGrid from "./ThingGrid.js";

const selectPlayerIotYs = createPlayerDataSelector("iotys");

export default function IotYs() {
  const playerIotMs = useAppSelector(selectPlayerIotYs);
  const iotys = useAppSelector((state) => state.iotys);
  const loading = useAppSelector((state) => state.loading.iotys || false);
  const idToItem = useAppSelector((state) => state.items);

  const numberOfIoyms = useMemo(() => iotys.length, [iotys]);

  const numberofIotYsBound = useMemo(
    () =>
      playerIotMs.filter((i) => i[1] == BindableStatus.BOUND).map((i) => i[0])
        .length,
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
        renderItem={(bindable) => (
          <Bindable
            key={bindable.id}
            item={idToItem[bindable.id]}
            bindable={bindable}
            status={idToPlayerIotY[bindable.id] ?? 0}
          />
        )}
      />
      <ThingGrid
        idToStatus={idToPlayerIotY}
        items={normalizedIotys.filter((i) => i)}
        columns={1}
        getRowLabel={(row) => 2017 + row}
        renderItem={(bindable) => (
          <Bindable
            key={bindable.id}
            item={idToItem[bindable.id]}
            bindable={bindable}
            status={idToPlayerIotY[bindable.id] ?? 0}
          />
        )}
      />
    </Section>
  );
}
