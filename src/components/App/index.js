import React, { Component } from "react";
import axios from "axios";
import Panel from "../Panel";
import ProductList from "../ProductList";
import "./app.css";

class App extends Component {
  state = {
    products: [],
    filtered: null,
  };

  async componentDidMount() {
    const { data: products } = await axios.get("./db/db.json");
    this.setState((state) => (state.products = products));
  }

  search = (name) => {
    const filtered = this.state.products.filter((product) => {
      const productName = product.name.toLowerCase();
      const inputName = name.toLowerCase();
      return productName.includes(inputName);
    });
    this.setState((state) => (state.filtered = filtered));
  };

  render() {
    return (
      <>
        <Panel onSearch={this.search} />
        <ProductList
          products={
            this.state.filtered ? this.state.filtered : this.state.products
          }
        />
      </>
    );
  }
}

export default App;
