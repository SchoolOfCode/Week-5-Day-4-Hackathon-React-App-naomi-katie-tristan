import React from "react";
import "./Input.css";

function Input(props) {  // This is a controlled component.
  const handleInputChange = (e) => {   // This function is called when the user types in the input field.
    props.onChange(e.target.value); // Update the state variable.
  };

  const handleKeyPress = (e) => { // This function is called when the user presses a key.
    if (e.key === "Enter") { // If the user presses the Enter key, call the onEnter function.
      props.onEnter(); // Call the onEnter function.
    }
  };

  return (
    <input
      type="text" 
      value={props.value} 
      onChange={handleInputChange} // Call the handleInputChange function when the user types in the input field.
      onKeyPress={handleKeyPress} // Call the handleKeyPress function when the user presses a key.
    />
  );
}

export default Input;