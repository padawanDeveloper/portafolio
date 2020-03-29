import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  background: ${props => props.theme.black};
`;

function HomePage() {
  return <ContainerStyle></ContainerStyle>;
}

export default HomePage;
