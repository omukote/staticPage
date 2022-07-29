import React from "react";
import Rlogo from "./logo192.png";
export default function ChildComponent() {
  return (
    <header>
      <nav className="nav">
        <img src={Rlogo} alt="React logo" className="logo" />
        <h4 className="h4">React Facts</h4>
        <h5 className="h5">React Course - Project 1</h5>
      </nav>
    </header>
  );
}
