import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contactReducer from "../features/contact-form/contactSlice";
import { appApi } from "./app-api";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
