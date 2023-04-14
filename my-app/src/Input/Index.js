
import React from "react";

import "./Input.css";

function Input(props) {
  
  return (
    <div className="Input">
      <input
      type="text"
      placeholder="Enter text here"
      />
    <button className="Button" onClick={props.handleClick}>Add</button>
    </div>
  );
}


export default Input;
