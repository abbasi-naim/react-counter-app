import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand">
          Navbar{" "}
          <span className="badge badge-success">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
