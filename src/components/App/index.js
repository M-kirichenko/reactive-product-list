import React, { Component } from "react";
import axios from "axios";
import Panel from "../Panel";
import ProductList from "../ProductList";
import "./app.css";

class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    const { data: products } = await axios.get("./db/db.json");
    this.setState((state) => (state.products = products));
  }
  render() {
    return (
      <>
        <Panel />
        <ProductList products={this.state.products} />
      </>
    );
  }
}

export default App;
