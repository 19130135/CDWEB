import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

export const cartProductsSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    cartProducts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.cartProducts = action.payload.cartProducts;
    },
    
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartProducts, updateQuantity, decrement, incrementByAmount } =
  cartProductsSlice.actions;

export const selectCartProducts = (state) => state.cartList.cartProducts;

export default cartProductsSlice.reducer;
