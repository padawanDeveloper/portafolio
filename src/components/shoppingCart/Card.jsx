import React from "react";
import ItemStyles from "../styles/CardStyle";
import Title from "../styles/Title";

function ProductCard({ onClick, product }) {
  return (
    <ItemStyles>
      {product.image && <img src={product.image} alt={product.title} />}
      <Title>
        <a>{product.name}</a>
      </Title>
      <p>{product.description}</p>

      <div className="buttonList">
        <button onClick={onClick} data-hover="🛒">
          <div>Add To Cart!</div>
        </button>
      </div>
    </ItemStyles>
  );
}

export default ProductCard;
