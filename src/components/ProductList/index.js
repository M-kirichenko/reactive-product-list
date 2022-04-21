import React from "react";
import Product from "../Product";
import "./productList.css";

const productList = ({ products, onProductAdd, cart, controlAmount }) => {
  return (
    <div id="products-wrapper">
      {products.length
        ? products.map((product) => (
            <Product
              selected={cart.hasOwnProperty(product.id)}
              amountSelected={cart[product.id] || 0}
              key={`product-${product.id}`}
              product={product}
              onProductAdd={onProductAdd}
              controlAmount={controlAmount}
            />
          ))
        : "no data..."}
    </div>
  );
};
export default productList;
