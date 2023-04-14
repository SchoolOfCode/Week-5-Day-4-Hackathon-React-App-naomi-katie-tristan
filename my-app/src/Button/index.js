import React from "react";
import "./Button.css";

function DeleteButton(props) {
  return (
    <button className="DeleteButton"  onClick={props.onClick}>
      {props.label}
    </button>
  );
}
export default DeleteButton;
