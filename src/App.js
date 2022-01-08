import "./App.css";
import NavBar from "./components/navbar";
import React from "react";
import Counters from "./components/counters";

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
