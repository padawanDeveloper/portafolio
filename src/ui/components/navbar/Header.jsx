import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  font-size: 2rem;
  margin-top: 20px;
  a {
    border-radius: 20px;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 9;
  .bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border-bottom: 10px solid ${props => props.theme.black};
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

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

const Header = () => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <div className="bar">
        <Logo>
          <a>Padawan Dev</a>
        </Logo>
      </div>
      <div className="sub-bar">
        <Nav />
      </div>
    </StyledHeader>
  </ThemeProvider>
);

export default Header;
