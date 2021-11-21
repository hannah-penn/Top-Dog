import React from "react";
import { Link } from "@reach/router";
import Form from "./Form";
import TogglePicsButton from "./TogglePicsButton";
import ToggleSubmissionButton from "./ToggleSubmissionButton";
import DogCard from "./DogCard";

const HomePage = (props) => {
  return (
    <div>
      <TogglePicsButton togglePics={props.togglePics} />
      <ToggleSubmissionButton toggleSubmissions={props.toggleSubmissions} />
      {props.showSubmissionForm && (
        <Form addToDogList={props.addToDogList} dogList={props.dogList} />
      )}
      {props.dogList.map((pet, index) =>
        props.selectedDog === null ? (
          <Link to={`/dogs/${pet.name}`}>
            <DogCard
              pet={pet}
              showDogs={props.showDogs}
              selectedDog={props.selectedDog}
              chooseDog={props.chooseDog}
              key={index}
            />
          </Link>
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
