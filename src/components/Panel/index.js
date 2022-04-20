import React, { Component } from "react";
import "./panel.css";

class Panel extends Component {
  state = {
    input: "",
  };

  render() {
    const { onSearch, total } = this.props;
    return (
      <div id="panel">
        <div id="panel-items">
          <input
            type="text"
            className="panel-el"
            placeholder="Product name"
            onInput={({ target }) =>
              this.setState((state) => (state.input = target.value))
            }
          />
          <button
            type="button"
            className="panel-el"
            onClick={() => onSearch(this.state.input)}
          >
            Search
          </button>
          <strong>Total value of selected items: {total} &nbsp;$ </strong>
        </div>
      </div>
    );
  }
}
export default Panel;
