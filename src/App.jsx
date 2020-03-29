import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./ui/components/navbar/Header";
import Home from "./ui/pages/HomePage";

const theme = {
  white: "#fff",
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
