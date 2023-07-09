// USING CREATE SLICE HERE BECAUSE WE ARE NOT USING ASYNCHRONOUS
import { createSlice } from '@reduxjs/toolkit';

//So the order keeps items in cart
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
