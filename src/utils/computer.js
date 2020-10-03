import Board from "./board";

class Computer {
  constructor() {
    this.identifier = "o";
  }

  bestMove(game) {
    return game.board.emptyCells()[0];
  }
}

export default Computer;
