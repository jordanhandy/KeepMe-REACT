import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

// Note function
// Uses custom Material Design delete icons
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  // Return Note
  // Take props from "Note" in app for passing values
  // from event functions

  // onClick of Delte icon, trigger delete
  // function (App.jsx)
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
