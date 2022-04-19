import React from "react";
import "./product.css";

const product = ({ product }) => {
  const { name, amount, price, img } = product;
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={img} alt="product-1" className="img-responsive" />
      </div>
      <h4>{name}</h4>
      <p>Price: {price} $</p>
      <p>Amount: {amount}</p>
      <div className="buttons-part">
        <span className="add-rem-button">+</span>
        <span>1</span>
        <span className="add-rem-button">-</span>
      </div>
    </div>
  );
};
export default product;
