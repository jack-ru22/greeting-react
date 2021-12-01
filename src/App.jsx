import React, { useState } from "react";
import "./styles.css";
import { InputName } from "./components/InputName";
import { Greeting } from "./components/Greeting";

export const App = () => {
  const [inputName, setInputName] = useState("");
  const [MessageShowFlag, setMessageShowFlag] = useState(false);
  const onChangeName = (event) => setInputName(event.target.value);
  const onClickButton = () => {
    if (inputName === "") return;
    setInputName(inputName);
    setMessageShowFlag(!MessageShowFlag);
  };

  return (
    <>
      <InputName
        onChange={onChangeName}
        onClick={onClickButton}
        message={MessageShowFlag}
        inputName={inputName}
      />
      <Greeting inputName={inputName} message={MessageShowFlag} />
    </>
  );
};
