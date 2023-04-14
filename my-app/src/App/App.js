import React, { useState } from "react";
import Input from "../Input/Index.js";
import AddButton from "../AddButton/Index.js";
import List from "../List/Index.js"

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), value: inputValue };
    setItems([...items, newItem]);
    setInputValue("");
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>My List</h1>
      <Input value={inputValue} onChange={setInputValue} />
      <AddButton label="Add" onClick={handleAddItem} />
      <List items={items} onDelete={handleDeleteItem} />
    </div>
  );
}

export default App;
