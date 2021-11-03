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
      <span class="tooltiptext">Click to hide or unhide other dogs.</span>
      <li
        style={{
          backgroundColor: "turquoise",
          fontFamily: "Helvetica",
          fontSize: "40px",
          listStyleType: "none",
        }}
      >
        {props.pet.name}
      </li>
      <li
        style={{
          backgroundColor: "pink",
          textDecoration: "underline",
          fontWeight: "bold",
          listStyleType: "none",
        }}
        onClick={(event) => {
          event.stopPropagation();
          let url = "https://www.google.com/search?q=" + props.pet.breed;
          window.open(url, "_blank");
        }}
      >
        {props.pet.breed}
      </li>
      {props.showDogs ? (
        <img
          src={props.pet.url}
          alt=""
          style={{
            maxHeight: "200px",
            maxWidth: "200px",
          }}
        />
      ) : (
        ""
      )}
      {props.showDogs && props.selectedDog
        ? props.pet.extraphotos.map((image) => (
            <img
              src={image.url}
              alt=""
              style={{
                maxHeight: "200px",
                maxWidth: "200px",
              }}
            />
          ))
        : ""}
      <p>{props.selectedDog ? props.pet.bio : ""}</p>
    </div>
  );
};

export default DogCard;
