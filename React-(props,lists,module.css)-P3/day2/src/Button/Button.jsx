import React from "react";

const Button = (props) => {
  //   console.log(props);

  const { buttonText, backGroundColor, click } = props; //js

  return (
    <button
      style={{
        backgroundColor: backGroundColor,
      }}
      onClick={click}
    >
      {buttonText}
    </button>
  );
};

export default Button;

// I want to make my button generic
