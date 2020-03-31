import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import products from "./redux/data";
import { addProduct } from "./redux/actions";
import styled from "styled-components";

const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${props => props.theme.maxWidth};
  justify-content: space-between;
`;

const Center = styled.div`
  display: flex;
`;

function GridProduct({ addProduct }) {
  return (
    <Center>
      <ItemsList>
        {products.map(product => (
          <Card
            key={product.id}
            product={product}
            onClick={() => addProduct(product)}
          />
        ))}
      </ItemsList>
    </Center>
  );
}

const mapStateToProps = state => ({
  productCard: state
});

const mapDispatchToProps = dispatch => ({
  addProduct: id => dispatch(addProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GridProduct);
