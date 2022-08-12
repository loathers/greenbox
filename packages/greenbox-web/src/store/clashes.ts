import { createAsyncThunk, createListenerMiddleware, TypedStartListening } from "@reduxjs/toolkit";
import * as Comlink from "comlink";

import { DuplicateFinder } from "../workers/duplicateFinder";
import DuplicateFinderWorker from "../workers/duplicateFinder?worker";

import {
  RootState,
  AppDispatch,
  entities,
  fetchEffects,
  fetchFamiliars,
  fetchItems,
  fetchSkills,
  fetchTattoos,
  fetchTrophies,
} from "./index";

export const wikiClashMiddleware = createListenerMiddleware();
const startAppListening = wikiClashMiddleware.startListening as TypedStartListening<
  RootState,
  AppDispatch
>;

startAppListening({
  predicate: (action, state) => {
    if (
      ![
        fetchEffects.fulfilled,
        fetchFamiliars.fulfilled,
        fetchItems.fulfilled,
        fetchSkills.fulfilled,
        fetchTattoos.fulfilled,
        fetchTrophies.fulfilled,
      ].some((a) => a.match(action))
    ) {
      return false;
    }
    if (action.payload === null) return false;
    if (entities.some((e) => state.loading[e])) return false;
    if (state.loading.wikiClashes) return false;
    return true;
  },
  effect: async (_action, { getState, dispatch }) => {
    const state = getState();

    // Create a list of every entity name
    const names = entities
      .map((e) => state[e])
      .flat()
      .map((e) => e.name);

    dispatch(processWikiClashes(names));
  },
});

const WrappedDuplicateFinderWorker = Comlink.wrap<DuplicateFinder>(new DuplicateFinderWorker());

export const processWikiClashes = createAsyncThunk(
  "wikiClashes/process",
  async (names: string[]) => {
    return await WrappedDuplicateFinderWorker(names);
  }
);
