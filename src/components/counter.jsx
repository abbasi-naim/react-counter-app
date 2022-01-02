import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <Badge bg="primary m-2">{this.formatCount()}</Badge>
        <Button variant="secondary btn-sm">Increment</Button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
