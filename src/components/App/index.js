import React, { Component } from "react";
import axios from "axios";
import Panel from "../Panel";
import ProductList from "../ProductList";
import "./app.css";

class App extends Component {
  cartAssoc = JSON.parse(localStorage.getItem("products")) || {};

  state = {
    products: [],
    filtered: null,
    cart: null,
  };

  async componentDidMount() {
    const { data } = await axios.get("./db/db.json");
    this.setState((state) => {
      state.products = data;
      state.cart = this.cartAssoc;
      return state;
    });
  }

  search = (name) => {
    const filtered = this.state.products.filter((product) => {
      const productName = product.name.toLowerCase();
      const inputName = name.toLowerCase();
      return productName.includes(inputName);
    });
    this.setState((state) => (state.filtered = filtered));
  };

  addProduct = (id) => {
    if (this.cartAssoc[id]) {
      delete this.cartAssoc[id];
    } else {
      this.cartAssoc[id] = 1;
    }
    localStorage.setItem("products", JSON.stringify(this.cartAssoc));
    this.setState((state) => (state.cart = this.cartAssoc));
  };

  countSum = () => {
    let sum = 0;
    for (let key in this.state.cart) {
      const prodInd = this.state.products.findIndex(
        // eslint-disable-next-line eqeqeq
        (product) => product.id == key
      );
      sum += this.state.products[prodInd].price * this.state.cart[key];
    }
    return sum;
  };

  render() {
    const totalPrice = this.countSum();
    return (
      <>
        <Panel onSearch={this.search} total={totalPrice} />
        <ProductList
          products={
            this.state.filtered ? this.state.filtered : this.state.products
          }
          cart={this.state.cart}
          onProductAdd={this.addProduct}
        />
      </>
    );
  }
}

export default App;
