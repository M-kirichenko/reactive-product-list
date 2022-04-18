import React from "react";
import "./product.css";

const product = () => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img
          src="https://m.media-amazon.com/images/I/41tCIsGV8UL.jpg"
          alt="product-1"
          className="img-responsive"
        />
      </div>
      <h4>Item1</h4>
      <p>Price: 35 $</p>
      <p>Amount: 10</p>
      <div className="buttons-part">
        <span className="add-rem-button">+</span>
        <span>1</span>
        <span className="add-rem-button">-</span>
      </div>
    </div>
  );
};
export default product;
