import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});

export default appStore;
