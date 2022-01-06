import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = (product) => {
    if (this.state.count >= 1) {
      this.setState({ count: this.state.count - 1 });
    }
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
        <h1>Counter #{this.props.id}</h1>
        <Badge bg={this.getBadgeClasses()}>{this.formatCount()}</Badge>

        <Button
          onClick={(product) => this.handleIncrement(product)}
          variant="secondary btn-sm m-2"
        >
          Increment
        </Button>

        {this.state.tags.length === 0 && <p>There is no tags to display!</p>}

        {/* {this.renderTags()} */}
        <Button
          onClick={(product) => this.handleDecrement(product)}
          variant="secondary btn-sm"
        >
          Decrement
        </Button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
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
