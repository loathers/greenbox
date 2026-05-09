import {
  configureStore,
  createSlice,
  createAction,
  createSelector,
} from "@reduxjs/toolkit";
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

export const entities = [
  "iotms",
  "paths",
  "tattoos",
  "trophies",
] as const;

export interface GreenboxState {
  playerData: api.RawSnapshotData | null;
  playerId: number | null;
  favouritePlayerId: number | null;
  iotms: BindableDef[];
  iotys: BindableDef[];
  paths: PathDef[];
  tattoos: TattooDef[];
  trophies: TrophyDef[];
}

const initialState: GreenboxState = {
  playerId: null,
  playerData: null,
  favouritePlayerId: null,
  iotms: api.getIotMs(),
  iotys: api.getIotYs(),
  paths: api.getPaths(),
  tattoos: api.getTattoos(),
  trophies: api.getTrophies(),
};

export const loadPlayerData =
  createAction<api.RawSnapshotData>("playerData/load");

export const setFavouritePlayer = createAction<number | null>(
  "favouritePlayer/set",
);
export const setPlayerId = createAction<number | null>("playerId/set");

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
    (data): api.RawSnapshotData[K] => data?.[key] ?? [],
  );
};

export const selectPlayerSkills = createPlayerDataSelector("skills");

export const selectIdToPlayerSkills = createSelector(
  selectPlayerSkills,
  (playerSkills) => Object.fromEntries(playerSkills.map((s) => [s[0], s])),
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
