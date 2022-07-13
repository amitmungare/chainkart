import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import { persistStore } from "redux-persist";
import cartReducer, { getTotal } from "./cartSlice";
import userReducer from "./userSlice";
import companyReducer from "./companySlice";
import productReducer from "./productSlice";

const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
  company: companyReducer,
  product: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

store.dispatch(getTotal);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const dispatch: AppDispatch = store.dispatch;

export const selectUser = (state: RootState) => state.user.user;

export const selectU = (state: RootState) => state.user;

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const persistor = persistStore(store);

export default store;
