class Game {
  constructor() {
    this.board = [
      ["", "x", ""],
      ["", "", "o"],
      ["", "", ""],
    ];
  }

  checkWinner() {
    let winner = null;

    //horizontal
    for (let i = 0; i < 3; i++) {
      if ((this.board[i][0] === this.board[i][1]) === this.board[i][2])
        winner = this.board[i][0];
    }
    for (let i = 0; i < 3; i++) {
      if ((this.board[0][i] === this.board[1][i]) === this.board[2][i])
        winner = this.board[0][i];
    }
    return winner;
  }
}
export default Game;
