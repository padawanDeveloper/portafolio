import React from "react";
import styled from "styled-components";
import ShoppingCart from "../components/shoppingCart";

const ContainerStyle = styled.div`
  flex: 1;
  display: flex;
  background: ${props => props.theme.black};
  padding: 20px;
  .center-text {
    flex: 1;
    background: ${props => props.theme.white};
    border-radius: 20px;
  }
`;

function HomePage() {
  return (
    <ContainerStyle>
      <div className="center-text">
        <ShoppingCart />
      </div>
    </ContainerStyle>
  );
}

export default HomePage;
