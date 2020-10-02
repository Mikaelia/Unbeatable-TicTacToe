import React from "react";
import Theme from "./Theme";
import Board from "./components/Board";
import "./App.css";
import styled from "styled-components";

const StyledApp = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
  background: #182039;
`;

function App() {
  return (
    <Theme>
      <StyledApp className="App">
        <Board></Board>
      </StyledApp>
    </Theme>
  );
}

export default App;
