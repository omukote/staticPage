import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Footer from "./Footer";
import ChildComponent from "./ChildComponent";
import BodyContent from "./BodyContent";
import MoreProjects from "./MoreProjects";

//Parent/Child components

function ParentComponent() {
  return (
    <div>
      <ChildComponent />
      <BodyContent />
      <MoreProjects />
      <Footer />
    </div>
  );
}
//Rendering multiple components
ReactDOM.render(<ParentComponent />, document.getElementById("root"));
