import { createAsyncThunk, createListenerMiddleware, TypedStartListening } from "@reduxjs/toolkit";
import { Worker, spawn, Thread } from "threads";

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

export const processWikiClashes = createAsyncThunk(
  "wikiClashes/process",
  async (names: string[]) => {
    const findClashes = await spawn(
      new Worker("../workers/counter.ts", { _baseURL: import.meta.url, type: "module" })
    );
    const clashes = await findClashes(names);
    await Thread.terminate(findClashes);
    return clashes;
  }
);
