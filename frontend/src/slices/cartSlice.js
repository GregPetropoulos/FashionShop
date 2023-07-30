// USING CREATE SLICE HERE BECAUSE WE ARE NOT USING ASYNCHRONOUS
import { createSlice } from '@reduxjs/toolkit';

import { updateCart } from '../utils/cartUtils';

//So the order keeps items in cart
//Icebox goal - Integrate stripe
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      //* ADD AN ITEM OR CHECK IF AN ITEM EXISTS TO RETURN IT
      if (existItem) {
        state.cartItems = state.cartItems.map((x) => (x._id === existItem._id ? item : x));
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state,item);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCartItems: (state, action) => {
      state.cartItem = []; //once order is created clear the cart
      localStorage.setItem('cart', JSON.stringify(state));
    },
    // NOTE: here we need to reset state for when a user logs out so the next
    // user doesn't inherit the previous users cart and shipping
    resetCart: (state) => (state = initialState),
  },
});
// * ANY REDUCER FUNCTION IN THE REDUCERS{} MUST BE EXPORTED

export const {
  clearCartItems,
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
