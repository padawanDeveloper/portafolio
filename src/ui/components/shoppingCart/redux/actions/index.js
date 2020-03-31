import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export function addProduct(id) {
  return { type: ADD_PRODUCT, id };
}

export function removeProduct(id) {
  return { type: REMOVE_PRODUCT, id };
}
