import React, { useState } from "react";
import Input from "../Input/Index.js";
import AddButton from "../AddButton/Index.js";
import List from "../List/Index.js";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(""); // This is the state variable for the input field.  
  const [items, setItems] = useState([]);  // This is the state variable for the items array. 
  const [flag, setFlag] = useState("");  // This is the state variable for the flag array.
  const [idCounter, setIdCounter] = useState(0);  // This is the state variable for the idCounter. 

  const handleAddItem = () => {  // This function is called when the user clicks the Add button or presses the Enter key. (The onEnter prop of the Input component is set to this function.)
  if (inputValue.trim() === "") { // If the input field is empty, do nothing. (The trim() method removes whitespace from both sides of a string.)
  return; 
  }

  const newItem = { id: idCounter, value: inputValue }; // Create a new item object with a unique id and the value from the input field. (The id is the current value of the idCounter.)
  setItems([...items, newItem]); // Add the new item to the items array. (Set the items array to a new array that contains all the items from the old array, plus the new item.)
  setInputValue(""); // Clear the input field. (Set the inputValue to an empty string.)
  setIdCounter(idCounter + 1); // Increment the idCounter. (Set the idCounter to whatever it currently is, plus 1.)
};

  const handleDeleteItem = (id) => {
  const newItems = items.filter((item) => item.id !== id); // Create a new array with all items except the item with the given id. (The filter() method creates a new array with all elements that pass the test)
  setItems(newItems); // Update the items array. (Set the value of the items state variable to the new array.)
};

const handleFlag= (event) => { // This function adds a heart emoji to the item that is clicked on.
  if (event.target.value === "Flag") { // If the button is clicked, add a heart emoji to the item.
  setFlag("💗");
  } else { // If the button is clicked again, remove the heart emoji from the item.
  setFlag("");
  }
};


return (
    <div className="App"> 
      <h1>My List</h1>
      <div className="inputAndButton">
      <Input
        value={inputValue}
        onChange={setInputValue} // when the user types in the input field, update the inputValue state variable.
        onEnter={handleAddItem} // when enter is pressed, call the handleAddItem function.
      />
      <AddButton label="Add" onClick={handleAddItem} />
      </div>

      <List items={items} onDelete={handleDeleteItem} onFlag={handleFlag} />
      
      
    </div>
  );
}

export default App;