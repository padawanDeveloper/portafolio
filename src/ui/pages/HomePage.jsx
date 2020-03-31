import React from "react";
import styled from "styled-components";

const ContainerStyle = styled.div`
  flex: 1;
  display: flex;
  background: ${props => props.theme.black};
  padding: 20px;
  .center-text {
    flex: 1;
    background: ${props => props.theme.white};
    border-radius: 20px;
  }
`;

function HomePage() {
  return (
    <ContainerStyle>
      <div className="center-text">
        <h1>Pagina Inicio</h1>
      </div>
    </ContainerStyle>
  );
}

export default HomePage;
