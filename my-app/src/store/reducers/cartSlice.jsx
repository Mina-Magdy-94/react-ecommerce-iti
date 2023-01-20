import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cart:[],
    orderedQuantities: {}
}
const cartSlice=createSlice({
    name:"cartList",
    initialState,
    reducers:{
        addProductToCart:(state,action)=>{
            console.log(`state in Cart Slice`,state);
            console.log(`action in Cart Slice`,action);
            const prodToAdd = action.payload;
            if (state.cart.some(prod => prod.id === action.payload.id)) {
                return state
            } else {
                return {...state, 
                    cart: [...state.cart, prodToAdd], 
                    orderedQuantities: {...state.orderedQuantities, [prodToAdd.id]: 1}
                }
            }
        },
        removeProductFromCart:(state,action)=>{
            const newOrderedQuantities = {
                ...state.orderedQuantities
            }
            delete newOrderedQuantities[action.payload.id];
            return {...state, 
                cart: state.cart.filter((product)=>product.id!==action.payload.id),
                orderedQuantities: newOrderedQuantities
            }
        },
        changeProductQuantity: (state, action) => {
            const newOrderedQuantities = {
                ...state.orderedQuantities
            }
            const { prodToAdd, quantityToAdd } = action.payload;
            const currentQuantity = state.cart.find(prod => prod.id === prodToAdd.id).quantity
            console.log(currentQuantity)
            if (newOrderedQuantities[prodToAdd.id] + quantityToAdd >= 1 &&
                currentQuantity >= newOrderedQuantities[prodToAdd.id] + quantityToAdd) {
                newOrderedQuantities[prodToAdd.id] += quantityToAdd;
            }

            return {...state, 
                orderedQuantities: newOrderedQuantities
            }
        }
    }
})

export const cartReducer= cartSlice.reducer;
export const cartActions= cartSlice.actions;