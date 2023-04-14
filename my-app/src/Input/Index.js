import React from "react";

function Input(props) {
  const handleInputChange = (e) => {
    props.onChange(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.onEnter();
    }
  };

  return (
    <input
      type="text"
      value={props.value}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default Input;