import {
  MiscTattooDef,
  TattooDef,
  TattooStatus,
  getMaxTattooLevel,
  isMiscTattoo,
} from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks";
import { createPlayerDataSelector } from "../store";

import MiscTattoos from "./MiscTattoos";
import OutfitTattoos from "./OutfitTattoos";
import Section from "./Section";

const selectPlayerOutfitTattoos = createPlayerDataSelector("outfitTattoos");
const selectPlayerMiscTattoos = createPlayerDataSelector("miscTattoos");

export default function Tattoos() {
  const playerOutfitTattoos = useAppSelector(selectPlayerOutfitTattoos);
  const playerMiscTattoos = useAppSelector(selectPlayerMiscTattoos);
  const tattoos = useAppSelector((state) => state.tattoos);
  const loading = useAppSelector((state) => state.loading.tattoos || false);

  const miscIdToMaxTattooLevel = useMemo(
    () =>
      tattoos
        .filter(isMiscTattoo)
        .reduce(
          (acc, t) => ({ ...acc, [t.misc]: getMaxTattooLevel(t) }),
          {} as { [id: number]: number },
        ),
    [tattoos],
  );

  const totalComplete = useMemo(
    () =>
      playerOutfitTattoos.filter((s) => s[1] === TattooStatus.HAVE).length +
      playerMiscTattoos.filter((s) => s[1] >= miscIdToMaxTattooLevel[s[0]]).length,
    [playerOutfitTattoos, playerMiscTattoos],
  );

  const totalPartial = useMemo(
    () =>
      playerOutfitTattoos.filter((s) => s[1] === TattooStatus.HAVE_OUTFIT).length +
      playerMiscTattoos.filter((s) => s[1] > 0 && s[1] < miscIdToMaxTattooLevel[s[0]]).length,
    [playerOutfitTattoos],
  );

  return (
    <Section
      title="Tattoos"
      icon="otherimages/sigils/margaraxe.gif"
      loading={loading}
      values={[
        {
          color: "partial",
          value: totalPartial,
          name: `${totalPartial} / ${tattoos.length} tattoos either not fully levelled or available but not claimed`,
        },
        {
          color: "complete",
          value: totalComplete,
          name: `${totalComplete} / ${tattoos.length} tattoos unlocked`,
        },
      ]}
      max={tattoos.length}
    >
      <OutfitTattoos playerTattoos={playerOutfitTattoos} />
      <MiscTattoos playerTattoos={playerMiscTattoos} />
    </Section>
  );
}
