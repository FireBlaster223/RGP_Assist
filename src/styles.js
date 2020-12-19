import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    background: linear-gradient(90deg, #5f4bb6, #404fa0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  button {
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 80px;
    background: linear-gradient(90deg, #5f4bb6, #404fa0);
    border: none;
    border-radius: 10px;
    color: #fff;
    outline: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.125);
    transition: all ease-in-out 250ms;

    &:hover {
      transform: scale(0.97);
      cursor: pointer;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.075);
    }
  }
`;

const InputContainer = styled.div`
  margin: 10px 0;

  p {
    font-size: 24px;
    color: #777;
  }

  input {
    font-size: 16px;
    border: 1px solid #5f4bb6;
    border-radius: 10px;
    background: #fafafa;
    outline: none;
    padding: 4px 10px;
    transition: all ease-in-out 250ms;
    color: #777;

    &:hover {
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.125);
    }
  }
`;

export { Main, InputContainer };
