import React from "react";

export const InputName = (props) => {
  const { onChange, onClick, count, inputName } = props;
  let buttonText;
  if (count < 1) {
    buttonText = "だよ！";
  } else {
    buttonText = "編集";
  }
  return (
    <div className="inputName">
      <p>名前を入力してね！</p>
      <input
        placeholder="あなたの名前は？"
        value={inputName}
        onChange={onChange}
      />
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};
