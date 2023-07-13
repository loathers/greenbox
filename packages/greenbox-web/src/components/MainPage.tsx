import { Accordion, Container, ToastId, useToast } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";

import { fetchAll, fetchPlayerData, loadPlayerData, RootState, store } from "../store";

import Familiars from "./Familiars";
import Header from "./Header";
import IotMs from "./IotMs";
import Paths from "./Paths";
import Skills from "./Skills";
import Tattoos from "./Tattoos";
import Trophies from "./Trophies";

export default function MainPage() {
  const [directValue] = useQueryParam("d", StringParam);
  const [playerId] = useQueryParam("u", NumberParam);
  const favouritePlayerId = useSelector((state: RootState) => state.favouritePlayerId);

  const dispatch = useDispatch<typeof store.dispatch>();

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
  const data = useSelector((state: RootState) => state.playerData);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);
  const errorMessage = useSelector((state: RootState) => state.errorMessage);

  const id = "clash-toast";

  useEffect(() => {
    if (loading.wikiClashes && !toast.isActive(id)) {
      clashToast.current = toast({
        description: "Detecting name clashes for wiki links (takes a few seconds)...",
        duration: null,
        id,
      });
    } else if (clashToast.current) {
      if (error.wikiClashes) {
        toast.update(clashToast.current, {
          description: "Clash detection errored (probably don't support web workers)",
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
      <Accordion allowMultiple defaultIndex={[0]}>
        <Header
          direct={!!directValue}
          meta={data?.meta}
          loading={loading.playerData}
          error={error.playerData}
          errorMessage={errorMessage.playerData}
        />
        <IotMs iotms={data?.iotms ?? []} />
        <Skills skills={data?.skills ?? []} />
        <Paths paths={data?.paths ?? []} />
        <Familiars familiars={data?.familiars ?? []} />
        <Tattoos outfitTattoos={data?.outfitTattoos ?? []} />
        <Trophies trophies={data?.trophies ?? []} />
      </Accordion>
    </Container>
  );
}
