import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    searchQuery: '',
  };
  
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setProducts, setSearchQuery } = productsSlice.actions;

export default productsSlice.reducer;
