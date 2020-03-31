import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import styled from "styled-components";
import products from "../shoppingCart/redux/reducers";
import ProductGrid from "./Grid";
import Cart from "./Cart";

const Grid = styled.div`
  display: flex;
  margin: 30px;
`;

let store = createStore(
  products,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function ShoppingCart() {
  return (
    <Provider store={store}>
      <h1>Shopping Cart Redux</h1>
      <Grid>
        <ProductGrid />
        <Cart />
      </Grid>
    </Provider>
  );
}

export default ShoppingCart;
