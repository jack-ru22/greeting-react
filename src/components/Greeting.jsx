import React from "react";

export const Greeting = (props) => {
  const { count, changeName } = props;
  let Text;

  if (count < 1) {
    Text = "";
  } else {
    Text = `こんにちは、${changeName}さん☺️`;
  }
  return (
    <div className="greeting">
      <p>{Text}</p>
    </div>
  );
};
