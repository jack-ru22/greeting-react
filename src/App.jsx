import React, { useState, useRef } from "react";
import "./styles.css";
import { InputName } from "./components/InputName";
import { Greeting } from "./components/Greeting";

export const App = () => {
  const [inputName, setInputName] = useState("");
  const onChangeName = (event) => setInputName(event.target.value);
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");

  const onClickButton = () => {
    if (inputName === "") return;
    setCount(count + 1);
    setChangeName(inputName);
    setInputName("");
  };

  return (
    <>
      <InputName
        onChange={onChangeName}
        onClick={onClickButton}
        inputName={inputName}
        count={count}
      />

      <Greeting count={count} changeName={changeName} />
    </>
  );
};
