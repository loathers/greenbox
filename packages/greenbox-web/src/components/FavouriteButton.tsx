import { IconButton } from "@chakra-ui/react";
import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../hooks";
import { updateFavouritePlayerId } from "../store";

import Image from "./Image";

export function FavouriteButton() {
  const playerId = useAppSelector((state) => state.playerId);
  const favouritePlayerId = useAppSelector((state) => state.favouritePlayerId);

  const current = favouritePlayerId === playerId;

  const icon = current ? "star_full" : "star";

  const title = current
    ? "Stop remembering this player"
    : `Remember this player${
        favouritePlayerId ? ` (currently your favourite is #${favouritePlayerId})` : ""
      }`;

  const dispatch = useAppDispatch();
  const toggle = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      dispatch(updateFavouritePlayerId(current ? null : playerId));
    },
    [dispatch, current, playerId],
  );

  return (
    <IconButton
      size="xs"
      onClick={toggle}
      aria-label={title}
      title={title}
      icon={<Image height="60%" src={`/${icon}.png`} />}
    />
  );
}
