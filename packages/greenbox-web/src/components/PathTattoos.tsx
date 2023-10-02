import { tuple } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks";
import { selectPlayerPaths } from "../store";
import { unzip } from "../utils";

import Subsection from "./Subsection";
import TattooGrid from "./TattooGrid";

export default function PathTattoos() {
  const paths = useAppSelector((state) => state.paths);
  const playerPaths = useAppSelector(selectPlayerPaths);

  const idToPlayerTattoo = useMemo(
    () =>
      playerPaths.reduce(
        (acc, t) => ({ ...acc, [t[0]]: t }),
        {} as { [id: number]: (typeof playerPaths)[number] },
      ),
    [playerPaths],
  );

  const [tattoos, playerTattoos] = useMemo(
    () =>
      unzip(
        paths.flatMap((p) =>
          p.tattoos.map((t, i) =>
            tuple([{ ...t, name: `${p.name} - ${t.name}` }, idToPlayerTattoo[p.id]?.[4][i]]),
          ),
        ),
      ),
    [paths, idToPlayerTattoo],
  );

  return (
    <Subsection title="Ascension" image="itemimages/rip.gif">
      <TattooGrid tattoos={tattoos} getLevel={(t, i) => playerTattoos[i] ?? 0} />
    </Subsection>
  );
}
