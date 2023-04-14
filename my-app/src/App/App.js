import React, { useState } from "react";
import Input from "../Input/Index.js";
import AddButton from "../AddButton/Index.js";
import List from "../List/Index.js";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(""); // This is the state variable for the input field.
  const [items, setItems] = useState([]);  // This is the state variable for the items array.
  const [idCounter, setIdCounter] = useState(0);

    const handleAddItem = () => {  // This function is called when the user clicks the Add button or presses the Enter key.
    if (inputValue.trim() === "") { // If the input field is empty, do nothing.
      return; 
    }

    const newItem = { id: idCounter, value: inputValue }; // Create a new item object with a unique id and the value from the input field.
    setItems([...items, newItem]);
    setInputValue("");
    setIdCounter(idCounter + 1);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="App"> 
      <h1>My List</h1>
      <Input
        value={inputValue}
        onChange={setInputValue}
        onEnter={handleAddItem}
      />
      <AddButton label="Add" onClick={handleAddItem} />
      <List items={items} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;