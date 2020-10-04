import React from "react";
import Theme from "./Theme";
import TicTacToe from "./components/TicTacToe";
import "./App.css";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
  background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
`;

function App() {
  return (
    <Theme>
      <StyledApp className="App">
        <TicTacToe></TicTacToe>
      </StyledApp>
    </Theme>
  );
}

export default App;
