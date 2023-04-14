import React from "react";
import "./AddButton.css";

function AddButton(props) {
  return (
    <button className="AddButton" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default AddButton;
