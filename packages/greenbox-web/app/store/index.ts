import {
  configureStore,
  createSlice,
  createAsyncThunk,
  createAction,
  createSelector,
} from "@reduxjs/toolkit";
import { createClient } from "data-of-loathing";
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
  type Storage,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const client = createClient();

const dataQuery = client.query({
  allClasses: {
    nodes: {
      id: true,
      name: true,
      image: true,
    },
  },
  allFamiliars: {
    nodes: {
      id: true,
      name: true,
      image: true,
      categories: true,
    },
  },
  allItems: {
    nodes: {
      id: true,
      name: true,
      image: true,
    },
  },
  allSkills: {
    nodes: {
      id: true,
      name: true,
      image: true,
      permable: true,
      maxLevel: true,
    },
  },
});

export type ClassType = NonNullable<
  NonNullable<Awaited<typeof dataQuery>["allClasses"]>["nodes"][number]
>;
export type FamiliarType = NonNullable<
  NonNullable<Awaited<typeof dataQuery>["allFamiliars"]>["nodes"][number]
>;
export type ItemType = NonNullable<
  NonNullable<Awaited<typeof dataQuery>["allItems"]>["nodes"][number]
>;
export type SkillType = NonNullable<
  NonNullable<Awaited<typeof dataQuery>["allSkills"]>["nodes"][number]
>;

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
  classes: ClassType[];
  familiars: FamiliarType[];
  iotms: IotMDef[];
  items: Record<number, ItemType>;
  paths: PathDef[];
  skills: SkillType[];
  tattoos: TattooDef[];
  trophies: TrophyDef[];
  sizeAtLastFetch: Partial<{ [K in keyof GreenboxState | "data"]: number }>;
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
  iotms: [],
  items: [],
  paths: [],
  skills: [],
  tattoos: [],
  trophies: [],
  sizeAtLastFetch: {
    iotms: 0,
    paths: 0,
    tattoos: 0,
    trophies: 0,
  },
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

export const fetchData = createAsyncThunk("data/fetch", async () => dataQuery);
export const fetchIotMs = createAsyncThunk(
  "iotms/fetch",
  async (size: number) => api.loadIotMs(size),
);
export const fetchPaths = createAsyncThunk(
  "paths/fetch",
  async (size: number) => api.loadPaths(size),
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
    dispatch(fetchData());
    dispatch(fetchIotMs(force ? 0 : (state.sizeAtLastFetch.iotms ?? 0)));
    dispatch(fetchPaths(force ? 0 : (state.sizeAtLastFetch.paths ?? 0)));
    dispatch(fetchTattoos(force ? 0 : (state.sizeAtLastFetch.tattoos ?? 0)));
    dispatch(fetchTrophies(force ? 0 : (state.sizeAtLastFetch.trophies ?? 0)));
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
        if (action.payload !== null) {
          const data = action.payload;
          state.items = data.allItems?.nodes.filter((i) => i != null) ?? [];
          state.classes = data.allClasses?.nodes.filter((c) => c != null) ?? [];
          state.familiars =
            data.allFamiliars?.nodes.filter((f) => f != null) ?? [];
          state.skills = data.allSkills?.nodes.filter((s) => s != null) ?? [];
        }

        state.loading.data = false;
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
      });
  },
});

const whitelist: (keyof GreenboxState)[] = [
  ...entities,
  "sizeAtLastFetch",
];

const fakeStorage: Storage = {
  getItem: async () => "",
  setItem: async () => {},
  removeItem: async () => {},
};

const persistedReducer = persistReducer(
  {
    whitelist,
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

export const selectPlayerFamiliars = createPlayerDataSelector("familiars");
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
