import React from "react";
import DeleteButton from "../Button/index.js";

function ListItem(props) {
  return (
    <li>
      {props.value}
      <DeleteButton label="Delete" onClick={props.onDelete} />
    </li>
  );
}

export default ListItem;