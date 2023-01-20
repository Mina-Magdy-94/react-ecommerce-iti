import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartSlice";
import { productsReducer } from "./reducers/productSlice";
// import rootReducers from "./reducers";

const store = configureStore({
  reducer: {
    productsList: productsReducer,
    cartList: cartReducer,
  },
});

export default store;
