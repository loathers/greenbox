import { Container, Tabs } from "@chakra-ui/react";
import { expand, type RawSnapshotData } from "greenbox-data";
import { useEffect } from "react";
import { data, useLoaderData, type LinksFunction } from "react-router";

import ClanDungeons from "../components/ClanDungeons.js";
import General from "../components/General.js";
import Header from "../components/Header.js";
import OtherItems from "../components/OtherItems.js";
import QuestRewards from "../components/QuestRewards.js";
import { WikiLinkProvider } from "../contexts/WikiLinkProvider.js";
import { favouritePlayer } from "../cookies.server.js";
import { prisma } from "../db.js";
import { useAppDispatch } from "../hooks.js";
import {
  fetchAll,
  loadPlayerData,
  setFavouritePlayer,
  setPlayerId,
} from "../store/index.js";

import type { Route } from "./+types/_index.js";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: "/greenbox.png",
    type: "image/png",
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const directData = url.searchParams.get("d");

  let favouritePlayerId: number | null =
    Number(
      (await favouritePlayer.parse(request.headers.get("Cookie")))?.id ?? 0,
    ) || null;

  // Load wiki links from database
  const wikiLinks = await prisma.wikiLinks.findMany();

  if (directData) {
    return {
      data: expand(directData),
      playerId: null,
      direct: true,
      favouritePlayer: favouritePlayerId,
      errorMessage: null,
      wikiLinks,
    };
  }

  const suppliedId = url.searchParams.get("u");

  const fav = url.searchParams.get("fav");

  let headers = {};

  if (fav !== null) {
    favouritePlayerId = fav === "true" ? Number(suppliedId) : null;
    headers = {
      "Set-Cookie": await favouritePlayer.serialize({ id: favouritePlayerId }),
    };
  }

  const playerId = suppliedId ?? favouritePlayerId ?? null;

  if (!playerId)
    return data(
      {
        playerId: null,
        data: null,
        favouritePlayer: favouritePlayerId,
        direct: false,
        errorMessage: null,
        wikiLinks,
      },
      { headers },
    );

  const greenbox = await prisma.greenbox.findFirst({
    where: { playerId: Number(playerId) },
    orderBy: { id: "desc" },
  });

  if (!greenbox) {
    return data({
      data: null, playerId: Number(playerId),
      favouritePlayer: favouritePlayerId,
      direct: false,
      errorMessage: `No data found for player ID ${playerId}. Please check the ID or try again later.`,
      wikiLinks,
    });
  }

  return data(
    {
      data: greenbox.data as unknown as RawSnapshotData,
      playerId: Number(playerId),
      favouritePlayer: favouritePlayerId,
      direct: false,
      errorMessage: null,
      wikiLinks,
    },
    { headers },
  );
}

export default function MainPage() {
  const { data, direct, favouritePlayer, playerId, errorMessage, wikiLinks } =
    useLoaderData<typeof loader>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setPlayerId(playerId));
  }, [dispatch, playerId]);

  useEffect(() => {
    if (data) dispatch(loadPlayerData(data));
  }, [dispatch, data]);

  useEffect(() => {
    if (typeof favouritePlayer !== undefined)
      dispatch(setFavouritePlayer(favouritePlayer));
  }, [dispatch, favouritePlayer]);

  useEffect(() => {
    dispatch(fetchAll(false));
  }, [dispatch]);

  return (
    <WikiLinkProvider wikiLinks={wikiLinks}>
      <Container maxWidth="1000px" width="100%">
        <Header
          direct={direct}
          meta={data?.meta}
          error={!!errorMessage}
          errorMessage={errorMessage ?? undefined}
        />
        <Tabs.Root defaultValue="general" lazyMount variant="outline">
          <Tabs.List>
            <Tabs.Trigger value="general">General</Tabs.Trigger>
            <Tabs.Trigger value="clan">Clan Dungeons</Tabs.Trigger>
            <Tabs.Trigger value="quest">Quest Rewards</Tabs.Trigger>
            <Tabs.Trigger value="misc">Miscellaneous</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="general">
            <General />
          </Tabs.Content>
          <Tabs.Content value="clan" p={0}>
            <ClanDungeons />
          </Tabs.Content>
          <Tabs.Content value="quest" p={0}>
            <QuestRewards />
          </Tabs.Content>
          <Tabs.Content value="misc" p={0}>
            <OtherItems />
          </Tabs.Content>
        </Tabs.Root>
      </Container>
    </WikiLinkProvider>
  );
}
