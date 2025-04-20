import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice.jsx";
import modalReducer from "./features/modal/ModalSlice.jsx";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
