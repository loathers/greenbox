import { IconButton } from "@chakra-ui/react";

import { useAppSelector } from "../hooks.js";

import Image from "./Image.js";
import { Link } from "react-router";

export function FavouriteButton() {
  const playerId = useAppSelector((state) => state.playerId);
  const favouritePlayerId = useAppSelector((state) => state.favouritePlayerId);

  const current = favouritePlayerId === playerId;

  const icon = current ? "star_full" : "star";

  const title = current
    ? "Stop remembering this player"
    : `Remember this player${
        favouritePlayerId
          ? ` (currently your favourite is #${favouritePlayerId})`
          : ""
      }`;

  return (
    <Link to={`?u=${playerId}&fav=${current ? "true" : "false"}`}>
      <IconButton
        size="xs"
        aria-label={title}
        title={title}
        icon={<Image height="60%" src={`/${icon}.png`} />}
      />
    </Link>
  );
}
