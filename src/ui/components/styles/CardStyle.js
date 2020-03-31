import styled from "styled-components";

const Item = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 10px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    padding: 0 3rem;
  }
  .buttonList {
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    background: ${props => props.theme.lightgrey};

    button {
      font-size: 12px;
      font-weight: 300;
      background: transparent;
      outline: none;
      position: relative;
      border: 2px solid #111;
      border-radius: 50px;
      padding: 15px;
      overflow: hidden;
      cursor: pointer;
      margin: 10px;
    }
    button:hover:before {
      opacity: 1;
      transform: translate(0, 0);
    }
    button:before {
      content: attr(data-hover);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 50px;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 800;
      font-size: 1em;
      opacity: 0.4;
      transform: translate(-100%, 0);
      transition: all 0.1s ease-in-out;
      background: ${props => props.theme.red};
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
    button:hover div {
      opacity: 0;
      transform: translate(100%, 0);
    }
    button div {
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 800;
      font-size: 0.8em;
      transition: all 0.2s ease-in-out;
      width: 100%;
    }
  }
`;

export default Item;
