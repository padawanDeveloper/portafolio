import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  font-size: 2rem;
  a {
    text-decoration: none;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.black};
    font-weight: 500;
    @media (max-width: 700px) {
      display: none;
    }
    &:after {
      height: 2px;
      background: red;
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 10px;
      @media (max-width: 700px) {
        background: none;
      }
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

const Nav = () => (
  <NavStyles>
    <Link to="/">Inicio</Link>
    <Link to="/portafolio">Portafolio</Link>
  </NavStyles>
);

export default Nav;
