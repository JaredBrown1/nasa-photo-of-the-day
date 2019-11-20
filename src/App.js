import React from "react";
import NavBar from "../src/components/nav-bar";
import Title from "../src/components/title";
import Image from "./components/Iotd_display";
import About from "../src/components/about";
import Footer from "../src/components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <Image />
    </div>
  );
}

export default App;
