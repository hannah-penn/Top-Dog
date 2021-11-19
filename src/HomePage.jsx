import React from "react";
import Form from "./Form";
import TogglePicsButton from "./TogglePicsButton";
import DogCard from "./DogCard";

const HomePage = (props) => {
  return (
    <div>
      <TogglePicsButton togglePics={props.togglePics} />
      <Form addToDogList={props.addToDogList} />
      {props.dogList.map((pet, index) =>
        props.selectedDog === null ? (
          <DogCard
            pet={pet}
            showDogs={props.showDogs}
            selectedDog={props.selectedDog}
            chooseDog={props.chooseDog}
            key={index}
          />
        ) : (
          props.selectedDog === pet.name && (
            <DogCard
              pet={pet}
              showDogs={props.showDogs}
              selectedDog={props.selectedDog}
              chooseDog={props.chooseDog}
              key={index}
            />
          )
        )
      )}
    </div>
  );
};

export default HomePage;
