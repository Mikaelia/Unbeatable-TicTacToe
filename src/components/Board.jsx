import React from "react";
import Cell from "./Cell";
import O from "./O";
import X from "./X";

import styled from "styled-components";

const GameBoard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  height: 30rem;
  width: 30rem;
  padding: 2rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 1rem;
  box-shadow: inset 0px 0px 4px 4px rgb(0, 0, 0, 0.4);
`;

export default function Board() {
  const handleSelect = (e) => {
    console.log("i am clicked");
  };

  const genCells = () => {
    let cells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cells.push(
          <Cell onClick={(e) => handleSelect(e)} key={`${i}|${j}`}>
            {(i % 2 === 0 && <X></X>) || <O></O>}
          </Cell>
        );
      }
    }
    return cells;
  };
  return <GameBoard>{genCells()}</GameBoard>;
}
