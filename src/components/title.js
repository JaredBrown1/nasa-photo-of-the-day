import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  background-color: blue;
  height: 100px;
  padding-top: 70px;
  border-radius: 100px;
`;

const Title = props => {
  return (
    <div>
      <Header>Nasa Photo Of The Day!</Header>
    </div>
  );
};

export default Title;
