import React from "react";
import ListItem from "../List Item/Index.js";
import "./List.css";

function List(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <ListItem
          key={item.id}  
          value={item.value} 
          onDelete={() => props.onDelete(item.id)} 
        />
      ))}
    </ul>
  );
}

export default List;