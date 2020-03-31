import { removeProduct } from "../../utils/reduceCart";

function cart(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.id];
    case "REMOVE_PRODUCT":
      return removeProduct(state, action.id);
    default:
      return state;
  }
}

export default cart;
