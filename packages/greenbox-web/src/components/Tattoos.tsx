import {
  OutfitTattooStatus,
  PathDef,
  arrayOf,
  getMaxTattooLevel,
  isMiscTattoo,
} from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks.js";
import {
  selectPlayerMiscTattoos,
  selectPlayerOutfitTattoos,
  selectPlayerPaths,
} from "../store/index.js";

import MiscTattoos from "./MiscTattoos.js";
import OutfitTattoos from "./OutfitTattoos.js";
import PathTattoos from "./PathTattoos.js";
import Section from "./Section.js";

export default function Tattoos() {
  const playerOutfitTattoos = useAppSelector(selectPlayerOutfitTattoos);
  const playerMiscTattoos = useAppSelector(selectPlayerMiscTattoos);
  const playerPaths = useAppSelector(selectPlayerPaths);
  const tattoos = useAppSelector((state) => state.tattoos);
  const paths = useAppSelector((state) => state.paths);
  const loading = useAppSelector((state) => state.loading.tattoos ?? false);

  const totalPathTattoos = paths.flatMap((p) => p.tattoos).length;

  const idToPath = useMemo(
    () =>
      paths.reduce(
        (acc, p) => ({ ...acc, [p.id]: p }),
        {} as Record<number, PathDef>,
      ),
    [paths],
  );

  const miscIdToMaxTattooLevel = useMemo(
    () =>
      tattoos
        .filter(isMiscTattoo)
        .reduce(
          (acc, t) => ({ ...acc, [t.misc]: getMaxTattooLevel(t) }),
          {} as Record<number, number>,
        ),
    [tattoos],
  );

  const totalComplete = useMemo(
    () =>
      playerOutfitTattoos.filter((s) => s[1] === OutfitTattooStatus.HAVE)
        .length +
      playerMiscTattoos.filter((s) => s[1] >= miscIdToMaxTattooLevel[s[0]])
        .length +
      playerPaths.flatMap((p) =>
        idToPath[p[0]]?.tattoos.filter(
          (t, i) => p[4][i] >= arrayOf(t.image).length,
        ),
      ).length,
    [playerOutfitTattoos, playerMiscTattoos],
  );

  const totalPartial = useMemo(
    () =>
      playerOutfitTattoos.filter((s) => s[1] === OutfitTattooStatus.HAVE_OUTFIT)
        .length +
      playerMiscTattoos.filter(
        (s) => s[1] > 0 && s[1] < miscIdToMaxTattooLevel[s[0]],
      ).length +
      playerPaths.flatMap(([pathId, , , , playerPathTats]) =>
        idToPath[pathId]?.tattoos.filter(
          (t, i) =>
            playerPathTats[i] > 0 &&
            playerPathTats[i] < arrayOf(t.image).length,
        ),
      ).length,
    [playerOutfitTattoos],
  );

  const totalTattoos = tattoos.length + totalPathTattoos;

  return (
    <Section
      title="Tattoos"
      icon="otherimages/sigils/margaraxe.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalPartial,
          name: `${totalPartial} / ${totalTattoos} tattoos either not fully levelled or available but not claimed`,
        },
        {
          color: "complete",
          value: totalComplete,
          name: `${totalComplete} / ${totalTattoos} tattoos unlocked`,
        },
      ]}
      max={totalTattoos}
    >
      <PathTattoos />
      <OutfitTattoos />
      <MiscTattoos />
    </Section>
  );
}
