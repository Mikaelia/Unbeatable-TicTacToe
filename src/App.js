import React from "react";
import styled from "styled-components";
import Theme from "./Theme";
import TicTacToe from "./components/TicTacToe";

const StyledApp = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 1rem 0;

  @media (min-width: 600px) {
    padding: 2rem 0;
  }
`;

function App() {
  return (
    <Theme>
      <StyledApp className="App">
        <TicTacToe />
      </StyledApp>
    </Theme>
  );
}

export default App;
