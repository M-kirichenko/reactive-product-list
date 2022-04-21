import React from "react";
import "./product.css";

const product = ({
  product,
  onProductAdd,
  selected,
  amountSelected,
  controlAmount,
}) => {
  const { id, name, amount, price, img } = product;
  return (
    <div className={` product-item ${selected && "selected-item"}`}>
      <div className="product-image" onClick={() => onProductAdd(id)}>
        <img src={img} alt="product-1" className="img-responsive" />
      </div>
      <h4>{name}</h4>
      <p>Price: {price} $</p>
      <p>Amount: {amount}</p>
      <div className="buttons-part">
        <span
          className="add-rem-button"
          onClick={() => selected && controlAmount(id, "decr")}
        >
          -
        </span>
        <span>{amountSelected}</span>
        <span
          className="add-rem-button"
          onClick={() =>
            selected && amountSelected < amount && controlAmount(id, "inc")
          }
        >
          +
        </span>
      </div>
    </div>
  );
};
export default product;
