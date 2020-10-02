import React, { useState } from "react";
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

export default function Board() {
  const [game, setGame] = useState(new Game());
  const [boardState, setBoardState] = useState(game.board);

  const handleSelect = (i, j) => {
    let newBoard = [...boardState];
    if (newBoard[i][j] === "") newBoard[i][j] = "x";
    setBoardState(newBoard);

    // remove available cells count
    game.available.pop();

    if (!!hasWon()) resetGame();
  };

  const hasWon = () => {
    return game.checkWinner();
  };

  const resetGame = () => {
    let newGame = new Game();
    setGame(newGame);
    setBoardState(newGame.board);
  };

  const renderCellState = (i, j) => {
    if (boardState[i][j] === "x") return <X></X>;
    if (boardState[i][j] === "o") return <O></O>;
  };

  const renderCells = () => {
    let cells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cells.push(
          <Cell onClick={() => handleSelect(i, j)} key={`${i}|${j}`}>
            {renderCellState(i, j)}
          </Cell>
        );
      }
    }
    return cells;
  };
  return <GameBoard>{renderCells()}</GameBoard>;
}
