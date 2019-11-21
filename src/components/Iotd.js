import React from "react";
import styled from "styled-components";

const Iotd = props => {
  return (
    <div key={props.id}>
      <img alt="Random NASA pic of the day" src={props.url} />
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  );
};

export default Iotd;