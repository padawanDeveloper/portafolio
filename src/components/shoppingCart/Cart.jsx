import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CartStyles from "../styles/CartStyle";
import CartItem from "./CartItem";
import { reduceProduct } from "./utils/reduceCart";
import calcTotalPrice from "./utils/calcTotalPrice";
import { removeProduct } from "./redux/actions";

const Title = styled.h3`
  background: ${props => props.theme.red};
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 2rem;
`;

function Cart({ productsCard, removeProduct }) {
  return (
    <CartStyles>
      <header>
        <Title>
          <a>Mi Shopping cart</a>
        </Title>
      </header>
      <ul>
        {productsCard.map(cartItem => {
          return (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              removeProduct={removeProduct}
            />
          );
        })}
      </ul>
      <footer>
        Total: <p>{calcTotalPrice(productsCard)}</p>
      </footer>
    </CartStyles>
  );
}

const mapStateToProps = state => ({
  productsCard: reduceProduct(state.cart)
});

const mapDispatchToProps = dispatch => ({
  removeProduct: id => dispatch(removeProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
