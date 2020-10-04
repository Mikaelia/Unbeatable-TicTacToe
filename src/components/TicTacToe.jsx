import React, { useState } from "react";
import styled from "styled-components";
import { HUMANPLAYER, COMPUTERPLAYER } from "../constants";
import Game from "../utils/game";
import Cell from "./Cell";
import ResetButton from "./ResetButton";
import O from "./O";
import X from "./X";

const StyledTicTacToe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMessage = styled.h1`
  position: absolute;
  top: 3rem;
  margin: 0;
  color: white;
  font-size: 5rem;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 2px rgb(17, 25, 104, 0.2);
`;

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  height: 20rem;
  width: 20rem;
  margin: 10rem 0 3rem 0;
  padding: 2rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 1rem;
  box-shadow: 10px 10px 25px 8px rgb(17, 25, 104, 0.2),
    inset 0px 0px 10px 5px rgb(17, 25, 104, 0.01);

  @media (min-width: 600px) {
    height: 30rem;
    width: 30rem;
    align-self: center;
  }
`;

export default function TicTacToe() {
  const [game, setGame] = useState(new Game());

  const [boardState, setBoardState] = useState(game.boardState);

  const handleSelect = (index) => {
    if (boardState[index] === index) game.takeTurn(index, HUMANPLAYER);

    setBoardState([...game.boardState]);
  };

  const resetGame = () => {
    let newGame = new Game();
    setGame(newGame);
    setBoardState(newGame.boardState);
  };

  const renderCellState = (index) => {
    if (boardState[index] === HUMANPLAYER) return <X></X>;
    if (boardState[index] === COMPUTERPLAYER) return <O></O>;
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

  const renderWinMessage = () => {
    let message = "Play!";
    if (game.winner === COMPUTERPLAYER) message = "Computer Wins!";
    if (game.winner === HUMANPLAYER) message = "You Win!";
    if (game.winner === "tie") message = "Tie!";
    return <StyledMessage>{message}</StyledMessage>;
  };
  return (
    <StyledTicTacToe>
      {renderWinMessage()}
      <StyledGameBoard>{renderCells()}</StyledGameBoard>
      <ResetButton onClick={() => resetGame()}>Reset</ResetButton>
    </StyledTicTacToe>
  );
}
