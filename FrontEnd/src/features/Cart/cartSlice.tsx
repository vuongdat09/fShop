import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    CurrentItem: null,
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const existingIndex = state.items.findIndex((item:any) => item._id === payload.id);
      if(existingIndex>=0){
        state.totalQuantity+ 1
      }else{
        state.items.push({...payload , totalQuantity:1})
      }
      state.totalQuantity+1,
      state.totalPrice+=payload.price
      localStorage.setItem('cart' , JSON.stringify(state.items))
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice;
