import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <div id="alert">
        <p>{this.props.message}</p>
        <button
          className="exit-button"
          onClick={(event) => {
            this.props.hideAlert();
          }}
        >
          &times;
        </button>
      </div>
    );
  }
}

export default Alert;
