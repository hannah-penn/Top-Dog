import React, { Component } from "react";

let randomDogNames = ["Rover", "Tiffany Hadish", "Melvyn"];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDogName: "",
      newDogBreed: "",
    };
  }

  dogBreeds = [
    "Alsatian",
    "Border Collie",
    "Bull Terrier",
    "Chihuahua",
    "Cockapoo",
    "Boxer",
    "Dunker",
    "Rottweiler",
    "Serbian Hound",
    "Whippet",
    "Mexican Hairless Dog",
  ];

  checkBreedIsValid = (input, dogBreeds) => {
    if (!input || !dogBreeds.includes(input)) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div>
        <input
          required
          type="text"
          placeholder="Enter dog name"
          onChange={(event) => {
            this.setState((prevState) => {
              return { newDogName: event.target.value };
            });
            // the setState function can also be invoked simply with the new state object: this.setState({newDogName: event.target.value})
          }}
          value={this.state.newDogName}
        ></input>
        <button onClick={(event) => this.setState({ newDogName: "" })}>
          Clear
        </button>

        <button
          onClick={(event) => {
            let randomName =
              randomDogNames[Math.floor(Math.random() * randomDogNames.length)];
            this.setState((prevState) => {
              return { newDogName: randomName };
            });
          }}
        >
          Random name
        </button>
        <input
          required
          list="dog-breeds"
          type="text"
          onChange={(event) => {
            this.setState((prevState) => {
              return { newDogBreed: event.target.value };
            });
          }}
          value={this.state.newDogBreed}
        ></input>
        <p>
          My name is {this.state.newDogName} and I am a {this.state.newDogBreed}
          .
        </p>
        <button onClick={(event) => this.setState({ newDogBreed: "" })}>
          Clear
        </button>

        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            if (
              !this.checkBreedIsValid(this.state.newDogBreed, this.dogBreeds)
            ) {
              alert("Input must be a valid breed.");
              console.log(
                `Failed to add ${this.state.newDogName} the ${this.state.newDogBreed} to the array of dogs.`
              );
            } else {
              this.props.addToDogList(
                this.state.newDogName,
                this.state.newDogBreed
              );
              alert(
                `Added ${this.state.newDogName} the ${this.state.newDogBreed} to the array of dogs.`
              );
              console.log(
                `Added ${this.state.newDogName} the ${this.state.newDogBreed} to the array of dogs.`
              );
            }
          }}
        >
          Submit
        </button>
        <datalist id="dog-breeds">
          {this.dogBreeds.map((dog, index) => {
            return <option value={dog} key={index}></option>;
          })}
        </datalist>
      </div>
    );
  }
}

export default Form;
