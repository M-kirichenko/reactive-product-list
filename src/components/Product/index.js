import React from "react";
import "./product.css";

const product = ({ product, onProductAdd, selected, amountSelected }) => {
  const { id, name, amount, price, img } = product;
  return (
    <div
      className={` product-item ${selected && "selected-item"}`}
      onClick={() => onProductAdd(id)}
    >
      <div className="product-image">
        <img src={img} alt="product-1" className="img-responsive" />
      </div>
      <h4>{name}</h4>
      <p>Price: {price} $</p>
      <p>Amount: {amount}</p>
      <div className="buttons-part">
        <span className="add-rem-button">-</span>
        <span>{amountSelected}</span>
        <span className="add-rem-button">+</span>
      </div>
    </div>
  );
};
export default product;
