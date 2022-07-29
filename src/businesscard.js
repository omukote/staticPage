import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import TestCard from "./TestCard";

function BusinessCard() {
  return (
    <div>
      <TestCard />
    </div>
  );
}

ReactDOM.render(<BusinessCard />, document.getElementById("toor"));
