import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cart:[]
}
const cartSlice=createSlice({
    name:"cartList",
    initialState,
    reducers:{
        addProductToCart:(state,action)=>{
            console.log(`state in Cart Slice`,state);
            console.log(`action in Cart Slice`,action);
            return {state, cart: [...state.cart, action.payload]}
        },
        removeProductFromCart:(state,action)=>{
            return {...state, cart: state.cart.filter((product)=>product.id!==action.payload.id)}
        },
    }
})

export const cartReducer= cartSlice.reducer;
export const cartActions= cartSlice.actions;