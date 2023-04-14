import React from "react";

function DeleteButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}
export default DeleteButton;
