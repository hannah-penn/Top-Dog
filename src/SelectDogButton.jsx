import React from "react";

const SelectDogButton = (props) => {
  let chosenDog = props.dogName;
  return (
    <>
      <button
        onClick={(event) => {
          console.log(chosenDog);
          props.chooseDog(chosenDog);
        }}
      >
        Select dog
      </button>
    </>
  );
};

export default SelectDogButton;
