import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../navbar/Header";
import Home from "../../pages/HomePage";

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
export default props => {
  console.log(props);
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Header />
          <Route exact path="/inicio">
            <Home />
          </Route>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};
