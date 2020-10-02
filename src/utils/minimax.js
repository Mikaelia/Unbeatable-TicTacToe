function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // If spot is available
      if (board[i][j] === "") {
        board[i][j] = ai;
        let score = minimax(board, 0, true);
        board[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  let move = random(available);
  board[move.i][move.j] = ai;
  currentPlayer = human;
}

function minimax(board, depth, isMaximizing) {
  return 1;
}
