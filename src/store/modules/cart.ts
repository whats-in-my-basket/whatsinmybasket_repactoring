import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPushCart(state, action) {
      return [...state, { ...action.payload, count: 1 }];
    },

    setDeleteCart(state, action) {
      return state.filter((item: any) => item.id !== action.payload);
    },

    setResetCart() {
      return initialState;
    },

    setCountPlus(state, action) {
      const index = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[index].count += 1;
    },

    setCountMinus(state, action) {
      const index = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[index].count -= 1;
    },
  },
});

export const { setPushCart, setDeleteCart, setResetCart, setCountPlus, setCountMinus } =
  cartSlice.actions;
export default cartSlice.reducer;
