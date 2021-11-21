import React from "react";
import DogCard from "./DogCard";

const DogPage = (props) => {
  return (
    <div>
      <h1>This is {props.hundname}'s homepage!</h1>
      <p>Welcome to my page.</p>

      <DogCard
        pet={
          props.dogList.filter((dog) => {
            if (dog.name === props.hundname) {
              return true;
            } else {
              return false;
            }
          })[0]
        }
        showDogs={true}
        selectedDog={props.hundname}
      />
    </div>
  );
};

export default DogPage;
