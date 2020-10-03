class Board {
  constructor() {
    this.board = Array.from(Array(9).keys());
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

  tie() {
    return this.emptyCells().length === 0;
  }

  emptyCells() {
    return this.board.filter((v) => {
      return typeof v === "number";
    });
  }

  selectCell(index, identifier) {
    this.board[index] = identifier;
  }

  checkWin(player) {
    console.log(player);
    let plays = this.board.reduce((arr, val, idx) => {
      return val === player ? arr.concat(idx) : arr;
    }, []);
    console.log(plays);
    let gameWon = null;
    for (let [index, win] of this.winCombos.entries()) {
      if (win.every((elem) => plays.indexOf(elem) > -1)) {
        gameWon = { index: index, player: player };
        break;
      }
    }
    return gameWon;
  }

  gameOver() {
    if (
      this.checkWinner() === "x" ||
      this.checkWinner() === "o" ||
      this.checkWinner() === "tie"
    ) {
      return true;
    }
    return false;
  }
}

export default Board;
