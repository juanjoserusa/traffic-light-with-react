//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Traffic from "/workspace/react-hello/src/js/component/Traffic.jsx"

//render your react application
ReactDOM.render(<Traffic />, document.querySelector("#app"));
