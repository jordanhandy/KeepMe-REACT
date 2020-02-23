import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

// State of expanded text written area
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  // Setting note object. Takes:
  // Title
  // Content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // On change of input fields,
  // Set values of title and content
  // Depending on field name (deconstructed)
  function handleChange(event) {
    const { name, value } = event.target;

    // To set the value of the notes for output to screen
    // Set value of note to state change value
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Handler for submitting notes
  // Take a note object when adding
  // new note
  // Set note values back to null for new values
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    // Prevent page refresh on submit of note
    event.preventDefault();
  }

  // Function for expanding text field
  function expand() {
    setExpanded(true);
  }

  // Return note form
  // Ternary operators use "isExpanded"
  // function to hide text fields before isExpanded
  // is Triggered.

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
