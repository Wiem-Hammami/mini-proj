
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000/carts"; // URL de l'API

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : null;
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = loadCartFromLocalStorage() || {
  cartId: null,
  items: [],
  total: 0,
  subTotal: 0,
  tax: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartId = action.payload.id;
      state.items = action.payload.items;
      state.total = action.payload.total;
      state.subTotal = action.payload.subTotal;
      state.tax = action.payload.tax;
      saveCartToLocalStorage(state);
    },

    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty += action.payload.qty;
      } else {
        state.items.push(action.payload);
      }
      state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
      state.tax = state.subTotal * 0.12;
      state.total = state.subTotal + state.tax;
      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      if (state.items.length === 0) {
        state.total = 0;
        state.subTotal = 0;
        state.tax = 0;
      } else {
        state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        state.tax = state.subTotal * 0.12;
        state.total = state.subTotal + state.tax;
      }

      saveCartToLocalStorage(state);
    },

    updateQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        if (qty === 0) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          item.qty = qty;
        }
      }

      state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
      state.tax = state.subTotal * 0.2;
      state.total = state.subTotal + state.tax;
      saveCartToLocalStorage(state);
    },
  },
});

export const { setCart, addItem, removeFromCart, updateQuantity } = cartSlice.actions;

export const addToCart = (product, quantity = 1) => async (dispatch, getState) => {
  const { cart } = getState();
  const updatedItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    qty: quantity,
    imageName: product.imageName,
  };

  if (!cart.cartId) {
    const existingCart = loadCartFromLocalStorage();
    if (existingCart && existingCart.cartId) {
      dispatch(setCart(existingCart));
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        total: updatedItem.price * updatedItem.qty,
        subTotal: updatedItem.price * updatedItem.qty,
        tax: (updatedItem.price * updatedItem.qty) * 0.12,
        items: [updatedItem],
      });

      dispatch(setCart(response.data));
    } catch (error) {
      console.error("Erreur lors de la création du panier :", error);
    }
  } else {
    dispatch(addItem(updatedItem));

    try {
      const updatedCart = {
        ...cart,
        total: cart.total + updatedItem.price * updatedItem.qty,
        subTotal: cart.subTotal + updatedItem.price * updatedItem.qty,
        tax: cart.tax + (updatedItem.price * updatedItem.qty) * 0.12,
        items: [...cart.items, updatedItem],
      };

      await axios.put(`${API_URL}/${cart.cartId}`, updatedCart);
      dispatch(setCart(updatedCart));
    } catch (error) {
      console.error("Erreur lors de la mise à jour du panier :", error);
    }
  }
};
export const updateItemQuantity = (id, qty) => async (dispatch, getState) => {
  const { cart } = getState();
  if (!cart.cartId) return;

  try {
    const updatedItems = cart.items.map(item => (item.id === id ? { ...item, qty } : item));
    const updatedCart = { 
      ...cart, 
      items: updatedItems,
      subTotal: updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0),
      tax: updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0) * 0.12,
      total: updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0) * 1.12,
    };

    const response = await axios.put(`${API_URL}/${cart.cartId}`, updatedCart);
    dispatch(setCart(response.data));
    saveCartToLocalStorage(response.data); 
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la quantité :", error);
  }
};
export const removeItemFromCart = (id) => async (dispatch, getState) => {
  const { cart } = getState();
  if (!cart.cartId) return;

  try {
    const updatedItems = cart.items.filter(item => item.id !== id);
    const updatedCart = { ...cart, items: updatedItems };

    await axios.put(`${API_URL}/${cart.cartId}`, updatedCart);
    dispatch(removeFromCart(id));
  } catch (error) {
    console.error("Erreur lors de la suppression du produit :", error);
  }
};





export default cartSlice.reducer;
