import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems.jsx";
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      // console.log(action);
    },
  },
});
export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
