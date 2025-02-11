import {
  configureStore,
  createSlice,
  createAsyncThunk,
  createAction,
  createSelector,
} from "@reduxjs/toolkit";
import {
  type ClassType,
  type EffectType,
  type FamiliarType,
  type ItemType,
  type SkillType,
  loadClasses,
  loadEffects,
  loadFamiliars,
  loadItems,
  loadSkills,
} from "data-of-loathing";
import * as api from "greenbox-data";
import type { TattooDef, TrophyDef, PathDef, IotMDef } from "greenbox-data";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { processWikiClashes, wikiClashMiddleware } from "./clashes.js";

export const entities = [
  "classes",
  "effects",
  "familiars",
  "iotms",
  "items",
  "paths",
  "skills",
  "tattoos",
  "trophies",
] as const;

export type EntityTypes = GreenboxState[(typeof entities)[number]];

export interface GreenboxState {
  playerData: api.RawSnapshotData | null;
  playerId: number | null;
  favouritePlayerId: number | null;
  classes: ClassType[];
  effects: EffectType[];
  familiars: FamiliarType[];
  iotms: IotMDef[];
  items: Record<number, ItemType>;
  paths: PathDef[];
  skills: SkillType[];
  tattoos: TattooDef[];
  trophies: TrophyDef[];
  wikiClashes: string[];
  sizeAtLastFetch: { [K in (typeof entities)[number]]: number };
  loading: Partial<{ [K in keyof GreenboxState]: boolean }>;
  error: Partial<{ [K in keyof GreenboxState]: boolean }>;
  errorMessage: Partial<{ [K in keyof GreenboxState]: string }>;
}

const initialState: GreenboxState = {
  playerId: null,
  playerData: null,
  favouritePlayerId: null,
  classes: [],
  effects: [],
  familiars: [],
  iotms: [],
  items: [],
  paths: [],
  skills: [],
  tattoos: [],
  trophies: [],
  wikiClashes: [],
  sizeAtLastFetch: {
    classes: 0,
    effects: 0,
    familiars: 0,
    iotms: 0,
    items: 0,
    paths: 0,
    skills: 0,
    tattoos: 0,
    trophies: 0,
  },
  loading: {
    classes: false,
    effects: false,
    familiars: false,
    iotms: false,
    items: false,
    paths: false,
    skills: false,
    tattoos: false,
    trophies: false,
    wikiClashes: false,
  },
  error: { wikiClashes: false },
  errorMessage: {},
};

export const loadPlayerData = createAction<api.RawSnapshotData>("playerData/load");

export const setFavouritePlayer = createAction<number | null>("favouritePlayer/set");

export const fetchClasses = createAsyncThunk(
  "classes/fetch",
  async (size: number) => loadClasses(size),
);
export const fetchEffects = createAsyncThunk(
  "effects/fetch",
  async (size: number) => loadEffects(size),
);
export const fetchFamiliars = createAsyncThunk(
  "familiars/fetch",
  async (size: number) => loadFamiliars(size),
);
export const fetchIotMs = createAsyncThunk(
  "iotms/fetch",
  async (size: number) => api.loadIotMs(size),
);
export const fetchItems = createAsyncThunk(
  "items/fetch",
  async (size: number) => loadItems(size),
);
export const fetchPaths = createAsyncThunk(
  "paths/fetch",
  async (size: number) => api.loadPaths(size),
);
export const fetchSkills = createAsyncThunk(
  "skills/fetch",
  async (size: number) => loadSkills(size),
);
export const fetchTattoos = createAsyncThunk(
  "tattoos/fetch",
  async (size: number) => api.loadTattoos(size),
);
export const fetchTrophies = createAsyncThunk(
  "trophies/fetch",
  async (size: number) => api.loadTrophies(size),
);

export const fetchAll = createAsyncThunk(
  "all/fetch",
  async (force: boolean, { getState, dispatch }) => {
    const state = getState() as RootState;
    dispatch(fetchClasses(force ? 0 : state.sizeAtLastFetch.classes));
    dispatch(fetchEffects(force ? 0 : state.sizeAtLastFetch.effects));
    dispatch(fetchFamiliars(force ? 0 : state.sizeAtLastFetch.familiars));
    dispatch(fetchIotMs(force ? 0 : state.sizeAtLastFetch.iotms));
    dispatch(fetchItems(force ? 0 : state.sizeAtLastFetch.items));
    dispatch(fetchPaths(force ? 0 : state.sizeAtLastFetch.paths));
    dispatch(fetchSkills(force ? 0 : state.sizeAtLastFetch.skills));
    dispatch(fetchTattoos(force ? 0 : state.sizeAtLastFetch.tattoos));
    dispatch(fetchTrophies(force ? 0 : state.sizeAtLastFetch.trophies));
  },
);

export const greenboxSlice = createSlice({
  name: "greenbox",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPlayerData, (state, action) => {
        state.playerData = action.payload;
      })
      .addCase(setFavouritePlayer, (state, action) => {
        state.favouritePlayerId = action.payload;
      })
      .addCase(fetchClasses.pending, (state) => {
        state.loading.classes = true;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.classes = action.payload.data;
          state.sizeAtLastFetch.classes = action.payload.size;
        }

        state.loading.classes = false;
      })
      .addCase(fetchEffects.pending, (state) => {
        state.loading.effects = true;
      })
      .addCase(fetchEffects.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.effects = action.payload.data;
          state.sizeAtLastFetch.effects = action.payload.size;
        }

        state.loading.effects = false;
      })
      .addCase(fetchFamiliars.pending, (state) => {
        state.loading.familiars = true;
      })
      .addCase(fetchFamiliars.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.familiars = action.payload.data;
          state.sizeAtLastFetch.familiars = action.payload.size;
        }

        state.loading.familiars = false;
      })
      .addCase(fetchIotMs.pending, (state) => {
        state.loading.iotms = true;
      })
      .addCase(fetchIotMs.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.iotms = action.payload.data;
          state.sizeAtLastFetch.iotms = action.payload.size;
        }

        state.loading.iotms = false;
      })
      .addCase(fetchItems.pending, (state) => {
        state.loading.items = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        if (action.payload !== null) {
          const items = action.payload.data;
          state.items = items.reduce(
            (acc, i) => ({ ...acc, [i.id]: i }),
            {} as Record<number, (typeof items)[number]>,
          );
          state.sizeAtLastFetch.items = action.payload.size;
        }

        state.loading.items = false;
      })
      .addCase(fetchPaths.pending, (state) => {
        state.loading.paths = true;
      })
      .addCase(fetchPaths.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.paths = action.payload.data;
          state.sizeAtLastFetch.paths = action.payload.size;
        }

        state.loading.paths = false;
      })
      .addCase(fetchSkills.pending, (state) => {
        state.loading.skills = true;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.skills = action.payload.data;
          state.sizeAtLastFetch.skills = action.payload.size;
        }

        state.loading.skills = false;
      })
      .addCase(fetchTattoos.pending, (state) => {
        state.loading.tattoos = true;
      })
      .addCase(fetchTattoos.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.tattoos = action.payload.data;
          state.sizeAtLastFetch.tattoos = action.payload.size;
        }

        state.loading.tattoos = false;
      })
      .addCase(fetchTrophies.pending, (state) => {
        state.loading.trophies = true;
      })
      .addCase(fetchTrophies.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.trophies = action.payload.data;
          state.sizeAtLastFetch.trophies = action.payload.size;
        }

        state.loading.trophies = false;
      })
      .addCase(processWikiClashes.pending, (state) => {
        state.loading.wikiClashes = true;
        state.error.wikiClashes = false;
      })
      .addCase(processWikiClashes.fulfilled, (state, action) => {
        state.wikiClashes = action.payload;
        state.loading.wikiClashes = false;
      })
      .addCase(processWikiClashes.rejected, (state) => {
        state.error.wikiClashes = true;
      });
  },
});

const whitelist: (keyof GreenboxState)[] = [
  ...entities,
  "wikiClashes",
  "sizeAtLastFetch",
];

const persistedReducer = persistReducer(
  {
    whitelist,
    key: "greenbox",
    version: 1,
    storage,
  },
  greenboxSlice.reducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(wikiClashMiddleware.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const createPlayerDataSelector = <
  K extends Exclude<keyof api.RawSnapshotData, "meta">,
>(
  key: K,
) => {
  const selectPlayerData = (state: RootState) => state.playerData?.[key];
  return createSelector(
    [selectPlayerData],
    (data) => data ?? ([] as api.RawSnapshotData[K]),
  );
};

export const selectPlayerSkills = createPlayerDataSelector("skills");

export const selectIdToPlayerSkills = createSelector(
  selectPlayerSkills,
  (playerSkills) =>
    playerSkills.reduce(
      (acc, s) => ({ ...acc, [s[0]]: s }),
      {} as Record<number, (typeof playerSkills)[number]>,
    ),
);

export const selectIdToSkills = createSelector(
  (state: RootState) => state.skills,
  (skills) =>
    skills.reduce(
      (acc, s) => ({ ...acc, [s.id]: s }),
      {} as Record<number, (typeof skills)[number]>,
    ),
);

export const selectPlayerItems = createPlayerDataSelector("items");
export const selectPlayerPaths = createPlayerDataSelector("paths");
export const selectPlayerOutfitTattoos =
  createPlayerDataSelector("outfitTattoos");
export const selectPlayerMiscTattoos = createPlayerDataSelector("miscTattoos");

export const selectIdToPlayerItems = createSelector(
  selectPlayerItems,
  (playerItems) =>
    playerItems.reduce(
      (acc, s) => ({ ...acc, [s[0]]: s }),
      {} as Record<number, (typeof playerItems)[number]>,
    ),
);
