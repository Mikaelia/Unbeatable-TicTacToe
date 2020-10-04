import Board from "./board";
import { HUMANPLAYER, COMPUTERPLAYER } from "../constants";

class Game {
  constructor() {
    this.board = new Board();
    this.humanPlayer = { identifier: HUMANPLAYER };
    this.computerPlayer = { identifier: COMPUTERPLAYER };
    this.winner = null;
  }

  // Shorthand for board cell values
  get boardState() {
    return this.board.board;
  }

  // Allows human and computer to take move turns
  takeTurn(index, player) {
    // If board cell is unvisited...
    if (this.boardState[index] === index && !this.winner) {
      this.makeMove(index, player);

      // If there are no unvisited cells and win has not occured...
      if (!this.board.unvisitedCells().length) {
        console.log(this.winner);
        this.winner = "tie";
      } else {
        player = this.computerPlayer.identifier;
        this.makeMove(this.minimax(this.board, player).index, player);
      }
    }
  }

  // Executes a player turn, checks for win state
  makeMove(index, player) {
    // Trigger selection
    this.board.selectCell(index, player);
    // If win state achieved, update winner status
    let winner = this.checkWinner(this.board, player);
    if (winner) this.winner = winner;
  }

  // Checks for humanPlayer or computerPlayer win
  checkWinner(currentBoard, player) {
    // Gather all player's moves into single array
    let moves = currentBoard.board.reduce((arr, val, idx) => {
      return val === player ? arr.concat(idx) : arr;
    }, []);

    // Iterate through every win combo. If every element of a combo included in
    // moves, player has won.
    let winner = null;
    for (let winCombo of currentBoard.winCombos) {
      if (winCombo.every((elem) => moves.indexOf(elem) > -1)) {
        winner = player;
        break;
      }
    }
    return winner;
  }

  // Minimax algorithm to determine best move
  minimax(newBoard, player) {
    let unvisitedCells = newBoard.unvisitedCells();

    if (this.checkWinner(newBoard, this.humanPlayer.identifier)) {
      return { score: -10 };
    } else if (this.checkWinner(newBoard, this.computerPlayer.identifier)) {
      return { score: 10 };
    } else if (unvisitedCells.length === 0) {
      return { score: 0 };
    }

    let moves = [];
    for (let i = 0; i < unvisitedCells.length; i++) {
      let move = {};
      move.index = newBoard.board[unvisitedCells[i]];
      newBoard.board[unvisitedCells[i]] = player;

      if (player === this.computerPlayer.identifier) {
        let result = this.minimax(newBoard, this.humanPlayer.identifier);
        move.score = result.score;
      } else {
        let result = this.minimax(newBoard, this.computerPlayer.identifier);
        move.score = result.score;
      }

      newBoard.board[unvisitedCells[i]] = move.index;

      moves.push(move);
    }

    let bestMove;
    if (player === this.computerPlayer.identifier) {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  }

  // Resets game board
  reset() {
    this.board = new Board();
  }
}

export default Game;
