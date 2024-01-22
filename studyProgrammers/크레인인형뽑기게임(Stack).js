function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let boardObj = {};

  for (let i = 0; i < board[0].length; i++) {
    boardObj[i + 1] = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i]) {
        boardObj[i + 1].unshift(board[j][i]);
      }
    }
  }

  for (let move of moves) {
    if (boardObj[move].length > 0) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === boardObj[move][boardObj[move].length - 1]
      ) {
        answer += 2;
        stack.pop();
        boardObj[move].pop();
      } else {
        stack.push(boardObj[move].pop());
      }
    }
  }
  return answer;
}