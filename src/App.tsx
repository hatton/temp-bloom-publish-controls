import theme from "./bloomMaterialUITheme";
import React, { Component } from "react";
import "./App.css";
import { BRPublishScreen } from "./components/BRPublish/BRPublishScreen";
import { ThemeProvider } from "@material-ui/styles";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <BRPublishScreen />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
