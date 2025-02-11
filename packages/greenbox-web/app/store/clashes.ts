import {
  createAsyncThunk,
  createListenerMiddleware,
  type TypedStartListening,
} from "@reduxjs/toolkit";
import * as Comlink from "comlink";

import { type DuplicateFinder } from "../workers/duplicateFinder.js";
import DuplicateFinderWorker from "../workers/duplicateFinder.js?worker";

import {
  type RootState,
  type AppDispatch,
  entities,
  fetchEffects,
  fetchFamiliars,
  fetchItems,
  fetchSkills,
  fetchTattoos,
  fetchTrophies,
} from "./index.js";

export const wikiClashMiddleware = createListenerMiddleware();
const startAppListening =
  wikiClashMiddleware.startListening as TypedStartListening<
    RootState,
    AppDispatch
  >;

export function startListeningForClashes() {
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
        .reduce(
          (acc, e) => ("name" in e ? [...acc, e.name] : acc),
          [] as string[],
        );

      dispatch(processWikiClashes(names));
    },
  });
}

const WrappedDuplicateFinderWorker = Comlink.wrap<DuplicateFinder>(
  new DuplicateFinderWorker(),
);

export const processWikiClashes = createAsyncThunk(
  "wikiClashes/process",
  async (names: string[]) => {
    return await WrappedDuplicateFinderWorker(names);
  },
);
