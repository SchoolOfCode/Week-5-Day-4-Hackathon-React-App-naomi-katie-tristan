import React from "react";
import DeleteButton from "../Button/index.js";
import FlagButton from "../FlagButton/Index.js";
import "./ListItem.css";

function ListItem(props) {
  return (
    <li>
    <div className="listItem">
      {props.value}
      <DeleteButton label="Delete" onClick={props.onDelete} />
      <FlagButton label="💗" onClick={props.onFlag} />

    </div>
    </li>
  );
}

export default ListItem;