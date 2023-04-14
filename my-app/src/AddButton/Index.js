import React from "react";

function AddButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default AddButton;
