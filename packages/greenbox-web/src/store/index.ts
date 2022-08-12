import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  "items",
  "paths",
  "skills",
  "tattoos",
  "trophies",
] as const;

export type EntityTypes = GreenboxState[typeof entities[number]];

export interface GreenboxState {
  classes: ClassDef[];
  effects: EffectDef[];
  familiars: FamiliarDef[];
  items: ItemDef[];
  paths: PathDef[];
  skills: SkillDef[];
  tattoos: TattooDef[];
  trophies: TrophyDef[];
  wikiClashes: string[];
  sizeAtLastFetch: { [K in typeof entities[number]]: number };
  loading: Partial<{ [K in keyof GreenboxState]: boolean }>;
  error: Partial<{ [K in keyof GreenboxState]: boolean }>;
}

const initialState: GreenboxState = {
  classes: [],
  effects: [],
  familiars: [],
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
    items: false,
    paths: false,
    skills: false,
    tattoos: false,
    trophies: false,
    wikiClashes: false,
  },
  error: { wikiClashes: false },
};

type RemoteThunkProps = { size: number };
export const fetchClasses = createAsyncThunk("classes/fetch", async () => api.loadClasses());
export const fetchEffects = createAsyncThunk("effects/fetch", async ({ size }: RemoteThunkProps) =>
  api.loadEffects(size)
);
export const fetchFamiliars = createAsyncThunk(
  "familiars/fetch",
  async ({ size }: RemoteThunkProps) => api.loadFamiliars(size)
);
export const fetchItems = createAsyncThunk("items/fetch", async ({ size }: RemoteThunkProps) =>
  api.loadItems(size)
);
export const fetchPaths = createAsyncThunk("paths/fetch", async () => api.loadPaths());
export const fetchSkills = createAsyncThunk("skills/fetch", async ({ size }: RemoteThunkProps) =>
  api.loadSkills(size)
);
export const fetchTattoos = createAsyncThunk("tattoos/fetch", async () => api.loadTattoos());
export const fetchTrophies = createAsyncThunk("trophies/fetch", async () => api.loadTrophies());

export const fetchAll = createAsyncThunk(
  "all/fetch",
  async (force: boolean, { getState, dispatch }) => {
    const state = getState() as RootState;
    // Always load ones that aren't calculated from mafia files
    dispatch(fetchClasses());
    dispatch(fetchTattoos());
    dispatch(fetchTrophies());
    dispatch(fetchPaths());

    // For those calculated from mafia files, check most recent updates
    dispatch(fetchEffects({ size: force ? 0 : state.sizeAtLastFetch.effects }));
    dispatch(fetchFamiliars({ size: force ? 0 : state.sizeAtLastFetch.familiars }));
    dispatch(fetchItems({ size: force ? 0 : state.sizeAtLastFetch.items }));
    dispatch(fetchSkills({ size: force ? 0 : state.sizeAtLastFetch.skills }));
  }
);

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
        state.classes = action.payload;
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
        state.paths = action.payload;
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
        state.tattoos = action.payload;
        state.loading.tattoos = false;
      })
      .addCase(fetchTrophies.pending, (state) => {
        state.loading.trophies = true;
      })
      .addCase(fetchTrophies.fulfilled, (state, action) => {
        state.trophies = action.payload;
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

const whitelist: (keyof GreenboxState)[] = [...entities, "wikiClashes", "sizeAtLastFetch"];

const persistedReducer = persistReducer(
  {
    whitelist,
    key: "greenbox",
    version: 1,
    storage,
  },
  greenboxSlice.reducer
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
