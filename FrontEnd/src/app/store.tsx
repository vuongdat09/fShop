import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productApi from "../api/product";
import CategoryApi from "../api/category";
import cartSlice from "../features/Cart/cartSlice";
import userApi from "../api/user";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [CategoryApi.reducerPath]: CategoryApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(CategoryApi.middleware)
      .concat(userApi.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
