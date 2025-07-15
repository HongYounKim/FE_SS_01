import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${(props) => props.color};
`;

export function Button({ label, color, buttonHandler }) {
  return (
    <ButtonStyle color={color} onClick={buttonHandler}>
      {label}
    </ButtonStyle>
  );
}
