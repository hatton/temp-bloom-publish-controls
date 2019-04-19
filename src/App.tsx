import theme from "./bloomMaterialUITheme";
import React, { Component } from "react";
import "./App.css";
import { BloomReaderPublishScreen } from "./components/BloomReaderPublishScreen";
import { ThemeProvider } from "@material-ui/styles";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <BloomReaderPublishScreen />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
