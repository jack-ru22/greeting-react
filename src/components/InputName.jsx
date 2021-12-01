import React from "react";

export const InputName = (props) => {
  const { onChange, onClick, message, inputName } = props;
  return (
    <div className="inputName">
      <p>名前を入力してね！</p>
      <input
        placeholder="あなたの名前は？"
        value={inputName}
        onChange={onChange}
        disabled={message}
      />
      <button disabled={message} onClick={onClick}>
        だよ！
      </button>
    </div>
  );
};
