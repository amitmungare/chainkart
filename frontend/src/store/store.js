import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotal } from "./cartSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

store.dispatch(getTotal());

export default store;
