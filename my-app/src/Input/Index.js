import React from "react";
import { useState } from "react";

import "./Input.css";

function Input(props) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleButtonClick = () => {
    const newItem = { id: Date.now(), value: inputValue };
    setItems([...items, newItem]);
    setInputValue("");
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="Input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleButtonClick}>Add button</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Input;
