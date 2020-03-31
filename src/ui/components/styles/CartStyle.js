import styled from "styled-components";

const CartStyles = styled.div`
  padding: 20px;
  margin: 10px;
  height: 100%;
  width: 40%;
  min-width: 500px;
  max-height: 600px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  transform: translateX(0);
  header {
    border-bottom: 5px solid ${props => props.theme.black};
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double ${props => props.theme.black};
    margin-top: 1rem;
    padding-top: 1rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
    max-height: 400px;
  }
`;

export default CartStyles;
