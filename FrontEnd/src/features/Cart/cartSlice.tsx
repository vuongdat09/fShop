import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        CurrentItem :null,
        items:[],
        totalQuantity:0,
        totalPrice:0
    },
    reducers:{

        addItems : (state , {payload})=>{
              state.items.push(payload);

               localStorage.setItem('cart', JSON.stringify(state.items)); 
        }
    },
})

export const { addItems } = cartSlice.actions

export default cartSlice;

