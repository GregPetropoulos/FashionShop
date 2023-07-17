// USING CREATE SLICE HERE BECAUSE WE ARE NOT USING ASYNCHRONOUS
import { createSlice } from '@reduxjs/toolkit';

//So the order keeps items in cart
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

//   ADD DECIMALS HELPER
const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

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

      //* CALCULATE ITEMS PRICE, CREATED A NEW ITEMSPRICE TO THE  CART STATE
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      //* CALCULATE SHIPPING PRICE (if order is over $100,then shipping free, else $10 for shipping)
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      //* CALCULATE TAX PRICE (15% tax)
      state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

      //* CALCULATE TOTAL PRICE
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      // * SET TO LOCAL STORAGE
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});
// * ANY REDUCER FUNCTION IN THE REDUCERS{} MUST BE EXPORTED

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
