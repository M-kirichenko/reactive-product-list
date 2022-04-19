import React from "react";
import Product from "../Product";
import "./productList.css";

const productList = ({ products }) => {
  return (
    <div id="products-wrapper">
      {products.length
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : "no data..."}
    </div>
  );
};
export default productList;
