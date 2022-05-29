function solution(board) {
  let square = [];

  const findBlock = (board, square) => {
    let n = board.length;
    let m = board[0].length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        let value = board[i][j];

        if (value !== 0 && j < m - 2 && value === board[i][j + 1] && value === board[i][j + 2]) {
          square.push([i, j]);
          square.push([i, j + 1]);
          square.push([i, j + 2]);
        }

        if (value !== 0 && i < n - 2 && value === board[i + 1][j] && value === board[i + 2][j]) {
          square.push([i, j]);
          square.push([i + 1, j]);
          square.push([i + 2, j]);
        }
      }
    }
  };

  const dropBlock = (board) => {
    let n = board.length;

    for (let j = 0; j < board[0].length; j++) {
      let start = n - 1;
      let end = n - 1;

      while (end >= 0) {
        if (board[end][j] !== 0) {
          let tmp = board[end][j];
          board[end][j] = board[start][j];
          board[start][j] = tmp;
          start--;
        }
        end--;
      }
    }
  };

  const crushBlock = (board, square) => {
    for (s of square) {
      board[s[0]][s[1]] = 0;
    }
  };
  findBlock(board, square);
  if (square.length === 0) return board;

  crushBlock(board, square);

  console.log(board);
  dropBlock(board);

  return solution(board);
}

// console.log(
//   solution([
//     [5, 5, 3, 7, 5],
//     [6, 2, 2, 9, 5],
//     [7, 2, 2, 7, 8],
//     [3, 3, 2, 3, 5],
//     [5, 8, 5, 5, 3],
//   ])
// ); //[[0,0,0,0,5],[5,5,0,7,5],[6,2,0,9,8],[7,2,0,7,5],[5,8,5,5,3]]

console.log(
  solution([
    [5, 5, 3, 7, 5, 23, 11],
    [6, 2, 2, 9, 5, 23, 11],
    [7, 2, 2, 7, 8, 23, 11],
    [3, 3, 2, 3, 5, 23, 11],
    [5, 8, 5, 5, 3, 23, 11],
  ])
); //[[0,0,0,0,5,0,0],[5,5,0,7,5,0,0],[6,2,0,9,8,0,0],[7,2,0,7,5,0,0],[5,8,5,5,3,0,0]]
