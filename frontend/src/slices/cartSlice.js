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
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItem: (state, action) => {
      state.cartItem = [];//once order is created clear the cart
      return updateCart(state);
    },
  },
});
// * ANY REDUCER FUNCTION IN THE REDUCERS{} MUST BE EXPORTED

export const { addToCart, removeFromCart, saveShippingAddress, savePaymentMethod } =
  cartSlice.actions;

export default cartSlice.reducer;
