import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

function RemoveFromCart({ onClick }) {
  return (
    <BigButton onClick={onClick} title="Delete Item">
      &times;
    </BigButton>
  );
}

const CartItem = ({ cartItem, removeProduct }) => {
  return (
    <CartItemStyles>
      {cartItem.image && (
        <img width="100" src={cartItem.image} alt={cartItem.title} />
      )}
      <div className="cart-item-details">
        <h3>{cartItem.name}</h3>
        <p>
          {cartItem.price} &times;
          <em>{cartItem.quantity}</em>
        </p>
      </div>
      <RemoveFromCart
        id={cartItem.id}
        onClick={() => removeProduct(cartItem.id)}
      />
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
