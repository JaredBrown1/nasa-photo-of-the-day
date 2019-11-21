import React from "react";
import Title from "../src/components/title";
import Image from "./components/Iotd_display";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: gray;
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container className="App">
      <Title />
      <Image />
    </Container>
  );
}

export default App;
