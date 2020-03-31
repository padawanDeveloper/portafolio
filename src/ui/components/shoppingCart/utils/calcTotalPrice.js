export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem) return tally;
    return Math.round(tally + cartItem.quantity * cartItem.price);
  }, 0);
}
