import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="App">
    <Header />
    <Content />
    <Footer />
  </div>
);
