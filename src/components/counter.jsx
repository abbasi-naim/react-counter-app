import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <Badge bg={this.getBadgeClasses()}>{this.formatCount()}</Badge>
        <Button variant="secondary btn-sm">Increment</Button>
        {this.state.tags.length === 0 && <p>There is no tags to display!</p>}
        {this.renderTags()}
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
