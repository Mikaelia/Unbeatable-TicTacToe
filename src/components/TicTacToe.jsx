import React, { useState } from "react";
import styled from "styled-components";
import { HUMAN_PLAYER, COMPUTER_PLAYER, BOARD_AREA } from "../constants";
import Game from "../utils/game";
import Cell from "./Cell";
import ResetButton from "./ResetButton";
import O from "./O";
import X from "./X";

const StyledTicTacToe = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-bottom: 2rem;
`;

const StyledMessage = styled.h1`
  color: white;
  font-size: 3.5rem;
  line-height: 4.5rem;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 2px rgb(17, 25, 104, 0.2);

  @media (min-width: 600px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`;

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  height: 15rem;
  width: 15rem;
  margin: 4rem 0 3rem 0;
  padding: 2rem;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 1rem;
  box-shadow: 10px 10px 25px 8px rgb(17, 25, 104, 0.2),
    inset 0px 0px 10px 5px rgb(17, 25, 104, 0.01);

  @media (min-width: 500px) {
    height: 20rem;
    width: 20rem;
  }

  @media (min-width: 600px) {
    height: 25rem;
    width: 25rem;
    align-self: center;
  }
`;

export default function TicTacToe() {
  const [game, setGame] = useState(new Game());

  const [boardState, setBoardState] = useState(game.boardState);

  const handleSelect = (index) => {
    if (boardState[index] === index) game.takeTurn(index, HUMAN_PLAYER);

    setBoardState([...game.boardState]);
  };

  const resetGame = () => {
    const newGame = new Game();
    setGame(newGame);
    setBoardState(newGame.boardState);
  };

  const renderCellState = (index) => {
    if (boardState[index] === HUMAN_PLAYER) return <X />;
    if (boardState[index] === COMPUTER_PLAYER) return <O />;
  };

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < BOARD_AREA; i++) {
      cells.push(
        <Cell onClick={() => handleSelect(i)} key={`${i}`}>
          {renderCellState(i)}
        </Cell>
      );
    }
    return cells;
  };

  const renderWinMessage = () => {
    let message;
    switch (game.winner) {
      case COMPUTER_PLAYER:
        message = "Computer Wins!";
        break;
      case HUMAN_PLAYER:
        message = "You win!";
        break;
      case "tie":
        message = "Tie!";
        break;
      default:
        message = "Play!";
    }
    return <StyledMessage>{message}</StyledMessage>;
  };

  return (
    <StyledTicTacToe data-testid="game">
      {renderWinMessage()}
      <StyledGameBoard>{renderCells()}</StyledGameBoard>
      <ResetButton onClick={() => resetGame()}>Reset</ResetButton>
    </StyledTicTacToe>
  );
}
