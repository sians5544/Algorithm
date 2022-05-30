function solution(board) {
  let answer = Number.MAX_SAFE_INTEGER;
  let N = board.length;
  let checkBoard = [];
  let queue = [];

  let dx = [0, -1, 0, 1];
  let dy = [-1, 0, 1, 0];

  const originBoard = () => {
    checkBoard = [];
    for (let b of board) {
      checkBoard.push([...b]);
    }
  };

  const BFS = () => {
    let total = 100;

    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let [x, y, z] = queue.shift();

        if (x === N - 1 && y === N - 1) return (total += 100);

        let sx = x + dx[z];
        let sy = y + dy[z];

        console.log(x, y);
        if (sx >= 0 && sy >= 0 && sx < N && sy < N && checkBoard[sx][sy] === 0) {
          checkBoard[sx][sy] = 1;
          queue.push([sx, sy, z]);
          total += 100;
        } else {
          for (let k = 0; k < 4; k++) {
            if (k === z) continue;

            let nx = x + dx[k];
            let ny = y + dy[k];

            if (nx >= 0 && ny >= 0 && nx < N && ny < N && checkBoard[nx][nx] === 0) {
              checkBoard[nx][ny] = 1;
              queue.push([nx, ny, k]);
              total += 500;
            }
          }
        }
      }
    }

    return total;
  };

  for (let k = 0; k < 4; k++) {
    originBoard();
    checkBoard[0][0] = 1;
    let nx = 0 + dx[k];
    let ny = 0 + dy[k];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N && checkBoard[nx][ny] === 0) {
      queue = [[nx, ny, k]];
      answer = Math.min(answer, BFS());
    }
  }
  return answer;
}

// console.log(
//   solution([
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ])
// );
console.log(
  solution([
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0],
  ])
);
