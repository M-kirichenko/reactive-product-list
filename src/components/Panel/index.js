import React, { Component } from "react";
import "./panel.css";

class Panel extends Component {
  constructor({ onSearch }) {
    super();
    this.search = onSearch;
  }

  state = {
    input: "",
  };

  render() {
    return (
      <div id="panel">
        <div id="panel-items">
          <input
            type="text"
            className="panel-el"
            placeholder="Product name"
            onInput={({ target }) => {
              if (target.value.length === 0) this.search("");
              else this.setState((state) => (state.input = target.value));
            }}
          />
          <button
            type="button"
            className="panel-el"
            onClick={() => this.search(this.state.input)}
          >
            Search
          </button>
          <strong>Total value of selected items: 0&nbsp;$</strong>
        </div>
      </div>
    );
  }
}
export default Panel;
