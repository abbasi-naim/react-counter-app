import react from "react";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
