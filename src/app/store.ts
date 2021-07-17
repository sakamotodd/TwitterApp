import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
