"use client";
import { configureStore } from "@reduxjs/toolkit";
import globalState from "./slice/state";
import { hotelsServiceV1, hotelsServiceV2 } from "./fetchData/service";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage
// }

// const rootReducer = combineReducers({
//     testSlice,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: {
    state: globalState,
    [hotelsServiceV1.reducerPath]: hotelsServiceV1.reducer,
    [hotelsServiceV2.reducerPath]: hotelsServiceV2.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      hotelsServiceV2.middleware,
      hotelsServiceV1.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
