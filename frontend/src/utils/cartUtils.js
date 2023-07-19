//   ADD DECIMALS HELPER
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
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
  return state;
};
