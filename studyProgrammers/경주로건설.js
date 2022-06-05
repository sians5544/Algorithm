function solution(board) {
  let answer = Number.MAX_SAFE_INTEGER;
  let N = board.length;
  let checkBoard = [];
  let queue = [];
  let dp = Array.from(Array(N), () => Array.from(Array(N), () => Array(4).fill(0)));
  console.log(N);
  let dx = [0, -1, 0, 1];
  let dy = [-1, 0, 1, 0];

  const originBoard = () => {
    checkBoard = [];
    for (let b of board) {
      checkBoard.push([...b]);
    }
  };

  const BFS = () => {
    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let [x, y, z] = queue.shift();

        z = z % 2;

        if (x === N - 1 && y === N - 1) return;

        for (let k = 0; k < 4; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];

          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < N &&
            ny < N &&
            dp[nx][ny][k] === 0 &&
            board[nx][ny] === 0
          ) {
            if (z === 1 && k % 2 === 1) dp[nx][ny][k] = dp[x][y][z] + 100;
            else dp[nx][ny][k] = dp[x][y][z] + 500;
            queue.push([nx, ny, k]);
          }
        }
      }
    }
  };

  for (let k = 0; k < 4; k++) {
    originBoard();
    dp = Array.from(Array(N), () => Array.from(Array(N), () => Array(4).fill(0)));
    dp[0][0][k] = 100;
    let nx = 0 + dx[k];
    let ny = 0 + dy[k];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] === 0) {
      dp[nx][ny][k] = dp[0][0][k] + 100;
      queue = [[nx, ny, k]];
      BFS();
      console.log(dp);
    }
  }
  return answer;
}

console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ])
);
