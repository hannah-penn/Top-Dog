import React from "react";

const ToggleSubmissionButton = (props) => {
  return (
    <button onClick={props.toggleSubmissions}>Show Submissions Form</button>
  );
};

export default ToggleSubmissionButton;
