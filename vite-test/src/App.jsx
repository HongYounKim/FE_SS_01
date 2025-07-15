import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import LikeLion from "./components/LikeLion";
import UseEffectCounter from "./components/UseEffectCounter";
import styled from "styled-components";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import Timer from "./components/Timer";

function App() {
  const onClickButton1 = () => {
    console.log("리액트 어렵죠..?");
  };

  const onClickButton2 = () => {
    console.log("세션 끝내기!");
  };

  return (
    <>
      {/* <Counter />
      <Button label="노랑버튼" color="yellow" buttonHandler={onClickButton1} />
      <Button label="초록버튼" color="green " buttonHandler={onClickButton2} /> */}
      <Timer />
    </>
  );
}

export default App;
