import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Badge, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
  };
  handeDecrement = (product) => {
    this.setState({ count: this.state.count - 1 });
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
        <container>
          <Row className="justify-content-md-center">
            <Col xs lg="3">
              <Badge bg={this.getBadgeClasses()}>{this.formatCount()}</Badge>
            </Col>
            <Col xs lg="3">
              <Button
                onClick={(product) => this.handleIncrement(product)}
                variant="secondary btn-sm"
              >
                Increment
              </Button>
            </Col>

            {this.state.tags.length === 0 && (
              <p>There is no tags to display!</p>
            )}
            <Col xs lg="3">
              {/* {this.renderTags()} */}
              <Button
                onClick={(product) => this.handeDecrement(product)}
                variant="secondary btn-sm"
              >
                Decrement
              </Button>
            </Col>
          </Row>
        </container>
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
