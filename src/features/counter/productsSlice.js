import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  searchedProducts: [],
  allProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log("action", action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products = action.payload.products;
      state.filteredProducts = action.payload.filteredProducts;
      state.searchedProducts = action.payload.searchedProducts;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload.products;
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
export const { increment, setAllProducts, decrement, incrementByAmount } =
  productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectAllProducts = (state) => state.products.allProducts;

export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const selectSearchedProducts = (state) =>
  state.products.searchedProducts;
export default productsSlice.reducer;
