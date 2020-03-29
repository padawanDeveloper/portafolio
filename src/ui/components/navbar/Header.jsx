import React, { useRef } from "react";
import styled from "styled-components";
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
  width: 100%;
  z-index: 9;
  background: ${props => props.theme.white};
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
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background: ${props => props.theme.white};
  }
`;

function handleStickyChange(subBarRef) {
  if (window.pageYOffset >= 110) {
    subBarRef.current.classList.add("sticky");
  } else {
    subBarRef.current.classList.remove("sticky");
  }
}

const Header = () => {
  const subBarRef = useRef(null);
  window.onscroll = function() {
    handleStickyChange(subBarRef);
  };
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <a>Padawan Dev</a>
        </Logo>
      </div>
      <div className="sub-bar" ref={subBarRef}>
        <Nav />
      </div>
    </StyledHeader>
  );
};

export default Header;
