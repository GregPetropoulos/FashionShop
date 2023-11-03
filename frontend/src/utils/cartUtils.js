//   ADD DECIMALS HELPER AND ROUND TO WHOLE NUMBERS
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //* CALCULATE ITEMS PRICE, CREATED A NEW ITEMSPRICE TO THE  CART STATE

  const itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + (item.price * 100 * item.qty) / 100,
    0
  );

  state.itemsPrice = addDecimals(itemsPrice);

  //* CALCULATE SHIPPING PRICE (if order is over $100,then shipping free, else $10 for shipping)
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = addDecimals(shippingPrice);

  //* CALCULATE TAX PRICE (15% tax)
  const taxPrice = 0.15 * itemsPrice;
  state.taxPrice = addDecimals(taxPrice);

  //* CALCULATE TOTAL PRICE
  const totalPrice = itemsPrice + shippingPrice + taxPrice;
  state.totalPrice = addDecimals(totalPrice);

  // * SET TO LOCAL STORAGE
  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
