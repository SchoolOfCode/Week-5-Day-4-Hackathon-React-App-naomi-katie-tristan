import React from "react";
import "./FlagButton.css";

function FlagButton(props) {
  return (
    <button className="FlagButton"  onClick={props.onClick}>
      {props.label}
    </button>
  );
}
export default FlagButton;
