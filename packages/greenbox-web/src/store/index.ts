import { configureStore, createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import * as api from "greenbox-data";
import {
  EffectDef,
  FamiliarDef,
  ItemDef,
  SkillDef,
  TattooDef,
  TrophyDef,
  ClassDef,
  PathDef,
  IotMDef,
} from "greenbox-data";
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

import { processWikiClashes, wikiClashMiddleware } from "./clashes";

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
  classes: ClassDef[];
  effects: EffectDef[];
  familiars: FamiliarDef[];
  iotms: IotMDef[];
  items: ItemDef[];
  paths: PathDef[];
  skills: SkillDef[];
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
  favouritePlayerId: null,
  playerData: null,
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

export const fetchClasses = createAsyncThunk("classes/fetch", async (size: number) =>
  api.loadClasses(size),
);
export const fetchEffects = createAsyncThunk("effects/fetch", async (size: number) =>
  api.loadEffects(size),
);
export const fetchFamiliars = createAsyncThunk("familiars/fetch", async (size: number) =>
  api.loadFamiliars(size),
);
export const fetchIotMs = createAsyncThunk("iotms/fetch", async (size: number) =>
  api.loadIotMs(size),
);
export const fetchItems = createAsyncThunk("items/fetch", async (size: number) =>
  api.loadItems(size),
);
export const fetchPaths = createAsyncThunk("paths/fetch", async (size: number) =>
  api.loadPaths(size),
);
export const fetchSkills = createAsyncThunk("skills/fetch", async (size: number) =>
  api.loadSkills(size),
);
export const fetchTattoos = createAsyncThunk("tattoos/fetch", async (size: number) =>
  api.loadTattoos(size),
);
export const fetchTrophies = createAsyncThunk("trophies/fetch", async (size: number) =>
  api.loadTrophies(size),
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

export const fetchPlayerData = createAsyncThunk("playerData/fetch", async (playerId: number) => {
  const response = await fetch(`https://oaf-discord.herokuapp.com/api/greenbox/${playerId}`);
  const json = await response.json();
  if (response.status !== 200) {
    throw new Error(json.error);
  }
  return json.greenboxString as string;
});

export const loadPlayerData = createAction<string>("playerData/load");

export const updateFavouritePlayerId = createAction<number | null>("favouritePlayerId/update");

export const greenboxSlice = createSlice({
  name: "greenbox",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
          state.items = action.payload.data;
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
      })
      .addCase(fetchPlayerData.pending, (state, action) => {
        state.loading.playerData = true;
      })
      .addCase(fetchPlayerData.fulfilled, (state, action) => {
        // Set current player id
        state.playerId = action.meta.arg;
        // Parse and load greenbox string
        const greenboxString = action.payload;
        state.playerData = api.expand(greenboxString);
        state.loading.playerData = false;
        state.error.playerData = false;
        state.errorMessage.playerData = undefined;
      })
      .addCase(loadPlayerData, (state, action) => {
        state.playerId = null;
        const greenboxString = action.payload;
        state.playerData = api.expand(greenboxString);
      })
      .addCase(fetchPlayerData.rejected, (state, action) => {
        state.loading.playerData = false;
        state.error.playerData = true;
        state.errorMessage.playerData = action.error.message;
      })
      .addCase(updateFavouritePlayerId, (state, action) => {
        state.favouritePlayerId = action.payload;
      });
  },
});

const whitelist: (keyof GreenboxState)[] = [
  ...entities,
  "wikiClashes",
  "sizeAtLastFetch",
  "favouritePlayerId",
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
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }).prepend(wikiClashMiddleware.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
