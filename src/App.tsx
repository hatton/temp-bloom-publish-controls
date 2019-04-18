import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BasePublishScreen } from "./components/BasePublishScreen";
import { AndroidPublishScreen } from "./components/AndroidPublishScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AndroidPublishScreen />
      </div>
    );
  }
}

export default App;
