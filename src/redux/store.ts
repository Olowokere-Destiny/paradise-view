"use client";
import { configureStore } from "@reduxjs/toolkit";
import locationsSlice from "./slice/locationsSlice";
import { hotelsService } from "./fetchData/service";
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
    location: locationsSlice,
    [hotelsService.reducerPath]: hotelsService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([hotelsService.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
