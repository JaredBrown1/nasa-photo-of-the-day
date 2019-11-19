import React from "react";
import NavBar from "../src/components/nav-bar";
import Title from "../src/components/title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
