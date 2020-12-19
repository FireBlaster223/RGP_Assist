import { useState, useEffect } from "react";
import { Main, InputContainer } from "./styles";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    race: "",
    class: "",
    advantages: "",
  });

  const inputs = [
    {
      name: "Nome",
      onchange: (value) => {
        setUserData({ ...userData, name: value });
      },
    },
    {
      name: "Idade",
      onchange: (value) => {
        setUserData({ ...userData, age: value });
      },
    },
    {
      name: "Raça",
      onchange: (value) => {
        setUserData({ ...userData, race: value });
      },
    },
    {
      name: "Classe",
      onchange: (value) => {
        setUserData({ ...userData, class: value });
      },
    },
    {
      name: "Vantagens",
      onchange: (value) => {
        setUserData({ ...userData, advantages: value });
      },
    },
  ];

  useEffect(() => console.log(userData), [userData]);

  const handleSubmit = () => {
    localStorage.setItem("ficha_data", JSON.stringify(userData));
    alert("Os dados foram salvos!");
  };

  return (
    <Main className="App">
      <h1>RPG Assist</h1>
      {inputs.map(({ name, onchange }, index) => (
        <InputContainer key={index}>
          <p>{name}</p>
          <input
            type="text"
            onChange={({ target: { value } }) => onchange(value)}
          />
        </InputContainer>
      ))}
      <button onClick={() => handleSubmit()}>Enviar</button>
    </Main>
  );
}

export default App;
