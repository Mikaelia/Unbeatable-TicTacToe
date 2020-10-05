import { BOARD_AREA } from "../constants";

class Board {
  constructor() {
    // Creates array of values numbering 0-8
    this.board = Array.from(Array(BOARD_AREA).keys());
    // Ideally would generate these automatically based on board area
    this.winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
  }

  // Replaces cell number with player identifier
  selectCell(index, identifier) {
    this.board[index] = identifier;
  }

  // Returns array of still unvisited cells
  unvisitedCells() {
    return this.board.filter((v) => {
      return typeof v === "number";
    });
  }
}

export default Board;
