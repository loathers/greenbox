import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";

import { useAppDispatch, useAppSelector } from "../hooks.js";
import { fetchAll, fetchPlayerData, loadPlayerData } from "../store/index.js";

import ClanDungeons from "./ClanDungeons.js";
import General from "./General.js";
import Header from "./Header.js";
import OtherItems from "./OtherItems.js";
import QuestRewards from "./QuestRewards.js";

export default function MainPage() {
  const [directValue] = useQueryParam("d", StringParam);
  const [playerId] = useQueryParam("u", NumberParam);
  const favouritePlayerId = useAppSelector((state) => state.favouritePlayerId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = playerId || favouritePlayerId;
    if (id) dispatch(fetchPlayerData(id));
  }, [playerId, dispatch, favouritePlayerId]);

  useEffect(() => {
    if (!directValue) return;
    dispatch(loadPlayerData(directValue));
  }, [directValue, dispatch]);

  useEffect(() => {
    dispatch(fetchAll(false));
  }, [dispatch]);

  const toast = useToast();
  const clashToast = useRef<ToastId>();
  const data = useAppSelector((state) => state.playerData);
  const loading = useAppSelector((state) => state.loading);
  const error = useAppSelector((state) => state.error);
  const errorMessage = useAppSelector((state) => state.errorMessage);

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
            "Clash detection errored (probably don't support web workers)",
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
        direct={!!directValue}
        meta={data?.meta}
        loading={loading.playerData}
        error={error.playerData}
        errorMessage={errorMessage.playerData}
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
