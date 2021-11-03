import React from "react";

const DogCard = (props) => {
  return (
    <div
      style={{
        maxWidth: "500px",
        maxHeight: "400px",
        margin: "20px auto",
        backgroundColor: "lightyellow",
      }}
      onClick={(event) => {
        props.chooseDog(props.pet.name);
        console.log(event.target);
        event.target.style = { ...event.target.style, backgroundColor: "red" };
      }}
      id="dogCard"
      class="tooltipcontainer"
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
      >
        {props.pet.breed}
      </li>
      {props.hierIstHund ? (
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
      <li
        style={{
          backgroundColor: "pink",
          textDecoration: "underline",
          fontWeight: "bold",
          listStyleType: "none",
        }}
      ></li>
    </div>
  );
};

export default DogCard;
