import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

export const cartProductsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      let cartProductsUpdate = [...state.cartProducts];
      const index = cartProductsUpdate.findIndex(data => data.id === action.payload.item.id)
      // findIndex return -1: not duplicate
      // return index : duplicate this item in array
      if(index===-1){
        // item chua co trong array cartProducts => push item vao cartProducts[]
        cartProductsUpdate.push(action.payload.item);
      } else {
        // item add da co trong array cartProducts => quantity +1
        
      }
    console.log("--cart",cartProductsUpdate)
      state.cartProducts = cartProductsUpdate;
      return state;
      
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
export const { addToCart, decrement, incrementByAmount } =
  cartProductsSlice.actions;

export const selectCartProducts = (state) => state.products.cartProducts;

export default cartProductsSlice.reducer;
