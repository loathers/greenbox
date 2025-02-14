import {
  createAction,
  createAsyncThunk,
  createListenerMiddleware,
  type TypedStartListening,
} from "@reduxjs/toolkit";

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

const duplicateFinder = (strings: string[]) => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const string of strings) {
    if (seen.has(string)) {
      duplicates.add(string);
    } else {
      seen.add(string);
    }
  }
  return [...duplicates];
};

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
    effect: (_action, { getState, dispatch }) => {
      const state = getState();

      // Create a list of every entity name
      const names = entities
        .map((e) => state[e])
        .flat()
        .reduce(
          (acc, e) => ("name" in e ? [...acc, e.name] : acc),
          [] as string[],
        );

      // Find the clashes
      const clashes = duplicateFinder(names);

      dispatch(processWikiClashes(clashes));
    },
  });
}

export const processWikiClashes = createAction<string[]>("wikiClashes/process");
