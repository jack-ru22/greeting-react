import React from "react";

export const Greeting = (props) => {
  const { inputName, message } = props;
  return (
    <div className="greeting">
      <p>
        {message && `こんにちは！ `}
        {message && inputName + `さん☺️`}
      </p>
    </div>
  );
};
