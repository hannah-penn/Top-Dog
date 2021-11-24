import React, { Component } from "react";
import Alert from "./Alert.jsx";

let randomDogNames = ["Rover", "Tiffany Hadish", "Melvyn"];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDogName: "",
      newDogBreed: "",
      inputNameIsUnique: null,
      inputBreedIsValid: null,
      messageForAlert: "",
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
      this.setState((prevState) => {
        return {
          messageForAlert: "Breed must be valid.",
        };
      });
      return false;
    }
    return true;
  };

  checkNameIsUnique = (input) => {
    let capInput = input.toUpperCase();
    for (let i = 0; i < this.props.dogList.length; i++) {
      let capDogName = this.props.dogList[i].name.toUpperCase();
      if (capInput !== capDogName) {
        continue;
      } else {
        this.setState((prevState) => {
          return {
            messageForAlert: "Name must be unique.",
          };
        });
        return false;
      }
    }
    return true;
  };

  hideAlert = () => {
    this.setState((prevState) => {
      return { messageForAlert: "" };
    });
  };

  render() {
    return (
      <div>
        <input
          required
          maxLength="12"
          minLength="1"
          pattern="[A-Za-z]{6}"
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
              this.checkNameIsUnique(this.state.newDogName) &&
              this.checkBreedIsValid(this.state.newDogBreed, this.dogBreeds)
            ) {
              this.props.addToDogList(
                this.state.newDogName,
                this.state.newDogBreed
              );
              this.setState((prevState) => {
                return {
                  messageForAlert: `Successfully added ${this.state.newDogName} the ${this.state.newDogBreed}.`,
                };
              });
            }
          }}
        >
          Submit
        </button>

        {this.state.messageForAlert && (
          <Alert
            message={this.state.messageForAlert}
            hideAlert={this.hideAlert}
          />
        )}

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
