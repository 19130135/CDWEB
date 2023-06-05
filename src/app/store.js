import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/counter/productsSlice";
import categoriesSlice from "../features/counter/categoriesSlice";
import accountSlice from "../features/counter/accountSlice";
import cartProductsSlice from "../features/counter/cartProductsSlice";
import orderSlice from "../features/counter/orderSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    accounts: accountSlice,
    cartList: cartProductsSlice,
    orderList: orderSlice,
  },
});

export default store;
