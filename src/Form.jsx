import React, { Component } from "react";

let randomDogNames = ["Rover", "Tiffany Hadish", "Melvyn"];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newDogName: "",
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          //   placeholder="Enter dog name"
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
            this.setState((prevState) => {
              return { newDogName: prevState.newDogName.toUpperCase() };
            });
          }}
        >
          Capitalize
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
        <p>I am a {this.state.newDogName}</p>
        <input type="text"></input>
        {/* <button
          type="submit"
          onClick={(event) => {
            props.dogList(event.target.value);
          }}
        >
          Submit
        </button> */}
      </div>
    );
  }
}

export default Form;
