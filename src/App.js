import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import React from "react";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container"></main>
      </div>
    );
  }
}

export default App;
