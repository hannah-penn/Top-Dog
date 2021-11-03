import React from "react";

const UndoButton = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.undoSelect();
        }}
      >
        Undo
      </button>
    </div>
  );
};

export default UndoButton;
