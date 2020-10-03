import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import O from "./O";
import X from "./X";
import Game from "../utils/game";

import styled from "styled-components";

const GameBoard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  height: 20rem;
  width: 20rem;
  padding: 2rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 1rem;
  box-shadow: inset 0px 0px 4px 4px rgb(0, 0, 0, 0.4);

  @media (min-width: 600px) {
    height: 30rem;
    width: 30rem;
  }
`;

export default function TicTacToe() {
  const [game, setGame] = useState(new Game());
  const [boardState, setBoardState] = useState(game.boardState);

  const handleSelect = (index) => {
    if (boardState[index] === index) game.turn(index);

    setBoardState([...game.boardState]);
    console.log(game.board);
  };

  const resetGame = () => {
    let newGame = new Game();
    setGame(newGame);
    setBoardState(newGame.boardState);
  };

  const renderCellState = (index) => {
    if (boardState[index] === "x") return <X></X>;
    if (boardState[index] === "o") return <O></O>;
  };

  const renderCells = () => {
    let cells = [];
    for (let i = 0; i < 9; i++) {
      cells.push(
        <Cell onClick={() => handleSelect(i)} key={`${i}`}>
          {renderCellState(i)}
        </Cell>
      );
    }
    return cells;
  };
  return (
    <>
      <GameBoard>{renderCells()}</GameBoard>
      <button onClick={() => resetGame()}>Reset</button>
    </>
  );
}
