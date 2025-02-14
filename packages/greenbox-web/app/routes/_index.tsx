
import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  type ToastId,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../hooks.js";
import { fetchAll, loadPlayerData, setFavouritePlayer } from "../store/index.js";

import ClanDungeons from "../components/ClanDungeons.js";
import General from "../components/General.js";
import Header from "../components/Header.js";
import OtherItems from "../components/OtherItems.js";
import QuestRewards from "../components/QuestRewards.js";
import type { Route } from "./+types/_index.js";
import { favouritePlayer } from "app/cookies.server.js";
import { expand, type RawSnapshotData } from "greenbox-data";
import { data, useLoaderData } from "react-router";
import { startListeningForClashes } from "app/store/clashes.js";

export async function loader({
  request,
}: Route.LoaderArgs) {
  const url = new URL(request.url);
  const directData = url.searchParams.get("d");

  let favouritePlayerId = (await favouritePlayer.parse(request.headers.get("Cookie")))?.id;

  if (directData) {
    return {
      data: expand(directData),
      playerId: null,
      direct: true,
      favouritePlayer: favouritePlayerId,
    };
  }

  const suppliedId = url.searchParams.get("u");

  const fav = url.searchParams.get("fav");

  let headers = {}
  
  if (fav !== null) {
    favouritePlayerId = (fav === "true") ? suppliedId : null;
    headers = { "Set-Cookie": await favouritePlayer.serialize({ id: favouritePlayerId }) };
  }

  const playerId = suppliedId ?? favouritePlayer ?? null

  if (!playerId) return data({
    data: null,
    favouritePlayer: favouritePlayerId,
    direct: false,
  }, { headers });

  const response = await fetch(
    `https://oaf.loathers.net/api/greenbox/${playerId}`,
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.error);
  }

  return data({
    data: json.data as RawSnapshotData,
    playerId: Number(playerId),
    favouritePlayer: favouritePlayerId,
    direct: false,
  }, { headers });
}

export default function MainPage() {
  const { data, direct, favouritePlayer } = useLoaderData<typeof loader>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    startListeningForClashes();
  });

  useEffect(() => {
    if (data) dispatch(loadPlayerData(data));
  }, [dispatch, data]);

  useEffect(() => {
    if (favouritePlayer) dispatch(setFavouritePlayer(favouritePlayer));
  }, [dispatch, favouritePlayer]);

  useEffect(() => {
    dispatch(fetchAll(false));
  }, [dispatch]);

  const toast = useToast();
  const clashToast = useRef<ToastId>(null);
  const loading = useAppSelector((state) => state.loading);
  const error = useAppSelector((state) => state.error);

  const id = "clash-toast";

  useEffect(() => {
    if (loading.wikiClashes && !toast.isActive(id)) {
      clashToast.current = toast({
        description:
          "Detecting name clashes for wiki links (takes a few seconds)...",
        duration: null,
        id,
      });
    } else if (clashToast.current) {
      if (error.wikiClashes) {
        toast.update(clashToast.current, {
          description:
            "Clash detection errored",
          status: "error",
          duration: 2000,
        });
      } else {
        toast.update(clashToast.current, {
          description: "Clash detection complete",
          status: "success",
          duration: 2000,
        });
      }
    }
  }, [loading.wikiClashes]);

  return (
    <Container maxWidth="1000px" width="100%">
      <Header
        direct={direct}
        meta={data?.meta}
      />
      <Tabs isLazy variant="enclosed">
        <TabList>
          <Tab>General</Tab>
          <Tab>Clan Dungeons</Tab>
          <Tab>Quest Rewards</Tab>
          <Tab>Miscellaneous</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <General />
          </TabPanel>
          <TabPanel p={0}>
            <ClanDungeons />
          </TabPanel>
          <TabPanel p={0}>
            <QuestRewards />
          </TabPanel>
          <TabPanel p={0}>
            <OtherItems />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
