import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice.js";
import productsReducer from "./ProductSlice.js";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    
  },
});

export default store;
