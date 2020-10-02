class Game {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.available = [[""], [""], [""], [""], [""], [""], [""], [""], [""]];
  }

  threeEqual(a, b, c) {
    return a === b && b === c && a !== "";
  }

  checkWinner() {
    let winner = null;
    // horizontal
    for (let i = 0; i < 3; i++) {
      if (
        this.threeEqual(this.board[i][0], this.board[i][1], this.board[i][2])
      ) {
        winner = this.board[i][0];
      }
    }

    // vertical
    for (let i = 0; i < 3; i++) {
      if (
        this.threeEqual(this.board[0][i], this.board[1][i], this.board[2][i])
      ) {
        winner = this.board[0][i];
      }
    }

    // diagonals
    if (this.threeEqual(this.board[0][0], this.board[1][1], this.board[2][2])) {
      winner = this.board[0][0];
    }

    if (this.threeEqual(this.board[2][0], this.board[1][1], this.board[0][2])) {
      winner = this.board[2][0];
    }

    if (this.available.length === 0 && this.winner === null) return "tie";
    // returns 'x', 'o'
    return winner;
  }
}

export default Game;
