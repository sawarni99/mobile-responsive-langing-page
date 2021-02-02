import React from "react";
import "./Button.css";

function Button({ children, size }) {
  let classNameButton;
  switch (size) {
    case "normal-blue":
      classNameButton = "button-normal-blue";
      break;
    case "normal-red":
      classNameButton = "button-normal-red";
      break;
    case "small":
      classNameButton = "button-small";
      break;
    default:
      classNameButton = "button-normal-blue";
  }
  return (
    <div className={classNameButton}>
      <b>{children}</b>
    </div>
  );
}

export default Button;
