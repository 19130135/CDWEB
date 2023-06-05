import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersInfo: [],
  orderModal: {
    isOpen: false,
    billDetails: [],
  },
};

export const orderSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    ordersInfo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
      state.ordersInfo = action.payload.orders;
    },
    orderModal: (state, action) => {
      state.orderModal.billDetails = action.payload.billDetails;
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
export const { ordersInfo, orderModal, decrement, incrementByAmount } =
  orderSlice.actions;

export const selectOrdersInfo = (state) => state.orderList.ordersInfo;

export const selectOrderModal = (state) =>
  state.orderList.orderModal.billDetails;

export default orderSlice.reducer;
