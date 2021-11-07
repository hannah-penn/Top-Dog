import React from "react";
import "./App.css";

const DogCard = (props) => {
  return (
    <div
      className={
        props.selectedDog
          ? "tooltipcontainer selectedCard"
          : "tooltipcontainer anyCard"
      }
      onClick={(event) => {
        props.chooseDog(props.pet.name);
      }}
      id="dogCard"
    >
      <span className="tooltiptext">Click to hide or unhide other dogs.</span>
      <li className="nameBar">{props.pet.name}</li>
      <li
        className="breedBar"
        onClick={(event) => {
          event.stopPropagation();
          let url = "https://www.google.com/search?q=" + props.pet.breed;
          window.open(url, "_blank");
        }}
      >
        {props.pet.breed}
      </li>
      {props.showDogs && (
        <img src={props.pet.url} alt="" className="profilePhoto" />
      )}
      {props.showDogs &&
        props.selectedDog &&
        props.pet.extraphotos.map((image) => (
          <img src={image.url} alt="" className="profilePhoto" />
        ))}
      <p>{props.selectedDog && props.pet.bio}</p>
    </div>
  );
};

export default DogCard;
