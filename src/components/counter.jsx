import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // handleIncrement = (product) => {
  //   this.setState({ count: this.props.counter.count + 1 });
  // };
  // handleDecrement = (product) => {
  //   if (this.props.counter.count >= 1) {
  //     this.setState({ count: this.props.counter.count - 1 });
  //   }
  // };

  // renderTags() {
  //   return (
  //     <ul>
  //       {this.props.counter.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <Badge bg={this.getBadgeClasses()}>{this.formatCount()}</Badge>
        </div>
        <div className="col">
          <Button
            onClick={() => this.props.onIncrement(this.props.counter)}
            variant="secondary btn-sm m-2"
          >
            Increment
          </Button>

          {/* {this.props.counter.tags.length === 0 && (
          <p>There is no tags to display!</p>
        )} */}

          {/* {this.renderTags()} */}
          <Button
            onClick={() => this.props.onDecrement(this.props.counter)}
            variant="secondary btn-sm"
          >
            Decrement
          </Button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        {/* <h1>Counter #{this.props.counter.id}</h1> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "";
    classes += this.props.counter.value === 0 ? "warning m-2" : "primary m-2";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
