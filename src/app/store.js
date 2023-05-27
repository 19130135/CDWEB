import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/counter/productsSlice";
import categoriesSlice from "../features/counter/categoriesSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
  },
});

export default store;
