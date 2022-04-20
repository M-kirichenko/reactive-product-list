import React from "react";
import Product from "../Product";
import "./productList.css";

const productList = ({ products, onProductAdd, cart }) => {
  return (
    <div id="products-wrapper">
      {products.length
        ? products.map((product) => (
            <Product
              selected={cart.hasOwnProperty(product.id)}
              amountSelected={
                cart.hasOwnProperty(product.id) ? cart[product.id] : 0
              }
              key={`product-${product.id}`}
              product={product}
              onProductAdd={onProductAdd}
            />
          ))
        : "no data..."}
    </div>
  );
};
export default productList;
