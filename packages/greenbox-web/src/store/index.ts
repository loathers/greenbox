import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "greenbox-data";
import { EffectDef, FamiliarDef, ItemDef, SkillDef, TattooDef, TrophyDef } from "greenbox-data";
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

export interface GreenboxState {
  effects: EffectDef[];
  familiars: FamiliarDef[];
  items: ItemDef[];
  skills: SkillDef[];
  tattoos: TattooDef[];
  trophies: TrophyDef[];
  wikiClashes: string[];
  loading: Partial<{ [K in keyof GreenboxState]: boolean }>;
  error: Partial<{ [K in keyof GreenboxState]: boolean }>;
}

const initialState: GreenboxState = {
  effects: [],
  familiars: [],
  items: [],
  skills: [],
  tattoos: [],
  trophies: [],
  wikiClashes: [],
  loading: {
    effects: false,
    familiars: false,
    items: false,
    skills: false,
    tattoos: false,
    trophies: false,
    wikiClashes: false,
  },
  error: { wikiClashes: false },
};

export const entities = ["effects", "familiars", "items", "skills", "tattoos", "trophies"] as const;

export type EntityTypes = GreenboxState[typeof entities[number]];

export const fetchEffects = createAsyncThunk("effects/fetch", async () => api.loadEffects());

export const fetchFamiliars = createAsyncThunk("familiars/fetch", async () => api.loadFamiliars());

export const fetchItems = createAsyncThunk("items/fetch", async () => api.loadItems());

export const fetchSkills = createAsyncThunk("skills/fetch", async () => api.loadSkills());

export const fetchTattoos = createAsyncThunk("tattoos/fetch", async () => api.loadTattoos());

export const fetchTrophies = createAsyncThunk("trophies/fetch", async () => api.loadTrophies());

export const fetchAll = createAsyncThunk(
  "all/fetch",
  async (force: boolean, { getState, dispatch }) => {
    const state = getState() as RootState;
    if (force || state.effects.length === 0) dispatch(fetchEffects());
    if (force || state.familiars.length === 0) dispatch(fetchFamiliars());
    if (force || state.items.length === 0) dispatch(fetchItems());
    if (force || state.skills.length === 0) dispatch(fetchSkills());
    if (force || state.tattoos.length === 0) dispatch(fetchTattoos());
    if (force || state.trophies.length === 0) dispatch(fetchTrophies());
  }
);

export const greenboxSlice = createSlice({
  name: "greenbox",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEffects.pending, (state) => {
        state.loading.effects = true;
      })
      .addCase(fetchEffects.fulfilled, (state, action) => {
        state.effects = action.payload;
        state.loading.effects = false;
      })
      .addCase(fetchFamiliars.pending, (state) => {
        state.loading.familiars = true;
      })
      .addCase(fetchFamiliars.fulfilled, (state, action) => {
        state.familiars = action.payload;
        state.loading.familiars = false;
      })
      .addCase(fetchItems.pending, (state) => {
        state.loading.items = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading.items = false;
      })
      .addCase(fetchSkills.pending, (state) => {
        state.loading.skills = true;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.skills = action.payload;
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

const persistedReducer = persistReducer(
  {
    whitelist: ["effects", "familiars", "items", "skills", "tattoos", "trophies", "wikiClashes"],
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
