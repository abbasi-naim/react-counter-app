import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
