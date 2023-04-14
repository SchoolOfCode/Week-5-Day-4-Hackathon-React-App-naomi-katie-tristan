import React from "react";
import './App.css';
import List from "../List/Index.js";
import ListItem from "../List Item/Index.js";
import Button from "../Button/index"; // shut the fuck up
import Input from "../Input/Index.js";
import { useState } from 'react'


function App() {

  const [text, setText] = useState("");

  function addListItem(event) { // event is an object that contains information about the event that triggered the function
    setText(event.target.value); 
  }
  return (
    <div className="App">
    <Input onClick={addListItem} />
     <Button />
     <List></List>
     <ListItem></ListItem>
    </div>
  );
}

export default App;
