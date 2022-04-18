import React, { Component } from "react";
import Panel from "../Panel";
import ProductList from "../ProductList";
import "./app.css";
class App extends Component {
  render() {
    return (
      <>
        <Panel />
        <ProductList />
      </>
    );
  }
}

export default App;
