import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <Badge bg={this.getBadgeClasses()}>{this.formatCount()}</Badge>
        <Button variant="secondary btn-sm">Increment</Button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "";
    classes += this.state.count === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
