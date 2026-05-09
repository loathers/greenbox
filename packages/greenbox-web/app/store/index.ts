import {
  configureStore,
  createSlice,
  createAsyncThunk,
  createAction,
  createSelector,
} from "@reduxjs/toolkit";
import {
  AscensionClass,
  createClient,
  Familiar,
  Item,
  Skill,
} from "data-of-loathing";
import * as api from "greenbox-data";
import type { TattooDef, TrophyDef, PathDef, BindableDef } from "greenbox-data";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  type Storage,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const client = createClient();

export type ClassType = AscensionClass;
export type FamiliarType = Familiar;
export type ItemType = Item;
export type SkillType = Skill;

export const entities = [
  "classes",
  "familiars",
  "iotms",
  "items",
  "paths",
  "skills",
  "tattoos",
  "trophies",
] as const;

export interface GreenboxState {
  playerData: api.RawSnapshotData | null;
  playerId: number | null;
  favouritePlayerId: number | null;
  classes: Record<number, ClassType>;
  familiars: FamiliarType[];
  iotms: BindableDef[];
  iotys: BindableDef[];
  items: Record<number, ItemType>;
  paths: PathDef[];
  skills: SkillType[];
  tattoos: TattooDef[];
  trophies: TrophyDef[];
  loading: Partial<{ [K in keyof GreenboxState | "data"]: boolean }>;
  error: Partial<{ [K in keyof GreenboxState]: boolean }>;
  errorMessage: Partial<{ [K in keyof GreenboxState]: string }>;
}

const initialState: GreenboxState = {
  playerId: null,
  playerData: null,
  favouritePlayerId: null,
  classes: [],
  familiars: [],
  iotms: api.getIotMs(),
  iotys: api.getIotYs(),
  items: [],
  paths: api.getPaths(),
  skills: [],
  tattoos: api.getTattoos(),
  trophies: api.getTrophies(),
  loading: {
    iotms: false,
    paths: false,
    tattoos: false,
    trophies: false,
    data: false,
  },
  error: {},
  errorMessage: {},
};

export const loadPlayerData =
  createAction<api.RawSnapshotData>("playerData/load");

export const setFavouritePlayer = createAction<number | null>(
  "favouritePlayer/set",
);
export const setPlayerId = createAction<number | null>("playerId/set");

export const fetchData = createAsyncThunk("data/fetch", async () => {
  await client.load();
  const [classes, familiars, items, skills] = await Promise.all([
    client.query.findAll(AscensionClass, { orderBy: { id: "ASC" } }),
    client.query.findAll(Familiar, { orderBy: { id: "ASC" } }),
    client.query.findAll(Item, { orderBy: { id: "ASC" } }),
    client.query.findAll(Skill, { orderBy: { id: "ASC" } }),
  ]);
  return { classes, familiars, items, skills };
});

export const greenboxSlice = createSlice({
  name: "greenbox",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPlayerData, (state, action) => {
        state.playerData = action.payload;
      })
      .addCase(setPlayerId, (state, action) => {
        state.playerId = action.payload;
      })
      .addCase(setFavouritePlayer, (state, action) => {
        state.favouritePlayerId = action.payload;
      })
      .addCase(fetchData.pending, (state) => {
        state.loading.data = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const { classes, familiars, items, skills } = action.payload;
        state.items = Object.fromEntries(items.map((i) => [i.id, i]));
        state.classes = Object.fromEntries(classes.map((c) => [c.id, c]));
        state.familiars = familiars;
        state.skills = skills;
        state.loading.data = false;
      });
  },
});

const fakeStorage: Storage = {
  getItem: async () => "",
  setItem: async () => {},
  removeItem: async () => {},
};

const persistedReducer = persistReducer(
  {
    whitelist: [...entities],
    key: "greenbox",
    version: 1,
    storage: typeof window === "undefined" ? fakeStorage : storage,
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
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const createPlayerDataSelector = <
  K extends Exclude<keyof api.RawSnapshotData, "meta">,
>(
  key: K,
) => {
  const selectPlayerData = (state: RootState) => state.playerData;
  return createSelector(
    selectPlayerData,
    (data) => data?.[key] ?? ([] as api.RawSnapshotData[K]),
  );
};

export const selectPlayerSkills = createPlayerDataSelector("skills");

export const selectIdToPlayerSkills = createSelector(
  selectPlayerSkills,
  (playerSkills) => Object.fromEntries(playerSkills.map((s) => [s[0], s])),
);

export const selectIdToSkills = createSelector(
  (state: RootState) => state.skills,
  (skills) => Object.fromEntries(skills.map((s) => [s.id, s])),
);

export const selectPlayerFamiliars = createPlayerDataSelector("familiars");
export const selectPlayerItems = createPlayerDataSelector("items");
export const selectPlayerPaths = createPlayerDataSelector("paths");
export const selectPlayerOutfitTattoos =
  createPlayerDataSelector("outfitTattoos");
export const selectPlayerMiscTattoos = createPlayerDataSelector("miscTattoos");

export const selectIdToPlayerItems = createSelector(
  selectPlayerItems,
  (playerItems) => Object.fromEntries(playerItems.map((s) => [s[0], s])),
);
