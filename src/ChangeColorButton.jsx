import React from "react";

const ChangeColorButton = (props) => {
  return (
    <div>
      <button onClick={props.changeColor}>
        Click here to change the background colour.
      </button>
    </div>
  );
};

export default ChangeColorButton;
