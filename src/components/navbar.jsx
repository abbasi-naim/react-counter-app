import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand">
        Navbar <span className="badge badge-success">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
