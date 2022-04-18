import React from "react";
import "./panel.css";

const panel = () => {
  return (
    <div id="panel">
      <div id="panel-items">
        <input type="text" className="panel-el" placeholder="Product name" />
        <button type="button" className="panel-el">
          Search
        </button>
        <strong>Total value of selected items: 0&nbsp;$</strong>
      </div>
    </div>
  );
};
export default panel;
