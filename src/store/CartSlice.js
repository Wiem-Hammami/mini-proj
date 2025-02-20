
// import axios from "axios";
// import { createSlice } from "@reduxjs/toolkit";

// const loadCartFromLocalStorage = () => {
//   const savedCart = localStorage.getItem("cart");
//   return savedCart ? JSON.parse(savedCart) : null;
// };

// const initialState = loadCartFromLocalStorage() || {
//   cartId: null,
//   items: [], 
//   total: 0,
//   subTotal: 0,
//   tax: 0,
// };

// const saveCartToLocalStorage = (cart) => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setCart: (state, action) => {
//       state.cartId = action.payload.id;
//       state.items = action.payload.items;
//       state.total = action.payload.total;
//       state.subTotal = action.payload.subTotal;
//       state.tax = action.payload.tax;
//       saveCartToLocalStorage(state); 
//     },
//     addItem: (state, action) => {
//       const existingItem = state.items.find((item) => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.qty += action.payload.qty;
//       } else {
//         state.items.push(action.payload);
//       }
//       state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
//       state.tax = state.subTotal * 0.12;
//       state.total = state.subTotal + state.tax;
//       saveCartToLocalStorage(state);
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//       state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
//       state.tax = state.subTotal * 0.12;
//       state.total = state.subTotal + state.tax;
//       saveCartToLocalStorage(state);
//     },
    
//     updateQuantity: (state, action) => {
//       const { id, qty } = action.payload;
//       const item = state.items.find(item => item.id === id);
//       if (item) {
//         item.qty = qty;
//       }
//       state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
//       state.tax = state.subTotal * 0.2;
//       state.total = state.subTotal + state.tax;
//       saveCartToLocalStorage(state);
//     },
    
//   },
// });

// export const { setCart, addItem, removeFromCart, updateQuantity } = cartSlice.actions;

// export const addToCart = (product, quantity = 1) => async (dispatch, getState) => {
//   const { cart } = getState();

//   const updatedItem = {
//     id: product.id,
//     name: product.name,
//     price: product.price,
//     qty: quantity,
//     imageName: product.imageName,
//   };

//   if (!cart.cartId) {
//     const existingCart = loadCartFromLocalStorage();
//     if (existingCart && existingCart.cartId) {
//       dispatch(setCart(existingCart));
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/carts", {
//         total: updatedItem.price * updatedItem.qty,
//         subTotal: updatedItem.price * updatedItem.qty,
//         tax: (updatedItem.price * updatedItem.qty) * 0.12,
//         items: [updatedItem],
//       });

//       dispatch(setCart(response.data));
//     } catch (error) {
//       console.error("Erreur lors de la création du panier :", error);
//     }
//   } else {
//     dispatch(addItem(updatedItem));

//     try {
//       const updatedCart = {
//         ...cart,
//         total: cart.total + updatedItem.price * updatedItem.qty,
//         subTotal: cart.subTotal + updatedItem.price * updatedItem.qty,
//         tax: cart.tax + (updatedItem.price * updatedItem.qty) * 0.12,
//         items: [...cart.items, updatedItem],
//       };

//       await axios.put(`http://localhost:3000/carts/${cart.cartId}`, updatedCart);
//       dispatch(setCart(updatedCart));
//     } catch (error) {
//       console.error("Erreur lors de la mise à jour du panier :", error);
//     }
//   }
// };

// export default cartSlice.reducer;
 

import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

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
      state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
      state.tax = state.subTotal * 0.12;
      state.total = state.subTotal + state.tax;
      saveCartToLocalStorage(state);
    },
      updateQuantity: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.qty = qty;
      }
      state.subTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
      state.tax = state.subTotal * 0.2;
      state.total = state.subTotal + state.tax;
      saveCartToLocalStorage(state);
    },
    
  },
});

export const { setCart, addItem ,removeFromCart, updateQuantity} = cartSlice.actions;
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
      const response = await axios.post("http://localhost:3000/carts", {
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

      await axios.put(`http://localhost:3000/carts/${cart.cartId}`, updatedCart);
      dispatch(setCart(updatedCart));
    } catch (error) {
      console.error("Erreur lors de la mise à jour du panier :", error);
    }
  }
};

// ✅ Fonction pour récupérer ou créer un panier et naviguer vers la page du panier
export const getOrCreateCart = (navigate) => async (dispatch, getState) => {
  const { cartId } = getState().cart;

  if (cartId) {
    navigate(`/cart/${cartId}`);
    return;
  }

  try {
    const existingCart = loadCartFromLocalStorage();
    if (existingCart && existingCart.cartId) {
      dispatch(setCart(existingCart));
      navigate(`/cart/${existingCart.cartId}`);
      return;
    }

    // Création d'un nouveau panier
    const response = await axios.post("http://localhost:3000/carts", {
      total: 0,
      subTotal: 0,
      tax: 0,
      items: [],
    });

    const newCart = response.data;
    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
    navigate(`/cart/${newCart.id}`);
  } catch (error) {
    console.error("Erreur lors de la création du panier :", error);
  }
};

export default cartSlice.reducer;
