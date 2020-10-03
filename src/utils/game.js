import Board from "./board";
import Computer from "./computer";

class Game {
  constructor() {
    this.board = new Board();
    this.computer = new Computer();
    this.human = { identifier: "x" };
    this.winner = null;
  }

  get boardState() {
    return this.board.board;
  }

  isWinner(player) {
    return this.board.checkWin(player);
  }

  reset(winner) {
    this.board = new Board();
  }

  turn(index) {
    // checking if cell not already clicked
    if (this.boardState[index] === index && !this.winner) {
      this.playerMove(index, this.human.identifier);
      // if a tie hasn't occured or the board has not been reset
      if (this.board.tie()) this.winner = "tie";
      else if (this.board.emptyCells().length !== 9)
        this.playerMove(this.computer.bestMove(this), this.computer.identifier);
    }
  }

  playerMove(index, player) {
    this.board.selectCell(index, player);
    let gameWon = this.isWinner(player);
    if (gameWon) this.winner = gameWon.player;
  }
}

export default Game;
