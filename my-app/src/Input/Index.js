import React from "react";
import { useState } from "react";

import "./Input.css";

function Input(props) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="Input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
