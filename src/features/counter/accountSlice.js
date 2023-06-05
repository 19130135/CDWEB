import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {},
  registerNoti: {},
};

export const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // console.log(action)
      state.account = action.payload;
    },
    setRegisterNoti: (state, action) => {
      console.log("--action", action.payload.registerNotis);
      state.registerNoti = action.payload.registerNotis;
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
export const { setAccount, setRegisterNoti, decrement, incrementByAmount } =
  accountSlice.actions;

export const selectCategories = (state) => state.categories.categories;
export const selectRegisterNoti = (state) => state.accounts.registerNoti;

export default accountSlice.reducer;
