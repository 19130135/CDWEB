import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/counter/productsSlice";
import categoriesSlice from "../features/counter/categoriesSlice";
import accountSlice from "../features/counter/accountSlice";
import cartProductsSlice from "../features/counter/cartProductsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    accountSlice: accountSlice,
    cartProductsSlice: cartProductsSlice,
  },
});

export default store;
