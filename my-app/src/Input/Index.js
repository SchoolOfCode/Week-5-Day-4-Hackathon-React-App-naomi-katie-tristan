
import React from "react";
import {useState} from 'react';


import "./Input.css";

function Input(props) {
  
const [inputValue, setInputValue] = useState("");
const [items, setItems] = useState([]);

// const handleInputChange = (e) => {
//   setInputValue(e.target.value);
// };

const handleButtonClick = () => {
  const newItem = <li key={inputValue}>{inputValue}</li>;
  setItems([...items, newItem]);
  setInputValue('');
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
        {items.map(item => (
          [item]
        ))}
      </ul>
    </div>
  );
}


export default Input;
