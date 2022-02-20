function solution(board) {
  let answer = 0;
  let n = board.length;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let dist = Array.from(Array(n), () => Array(n).fill(0));

  let checkNum = 1;

  function DFS(x, y) {
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1 && dist[nx][ny] === 0) {
        board[nx][ny] = 0;
        dist[nx][ny] = checkNum;
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        dist[i][j] = checkNum;
        DFS(i, j);
        checkNum += 1;
      }
    }
  }

  let bfsDist = Array.from(Array(n), () => Array(n).fill(0));

  checkNum = 1;

  let queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dist[i][j] === 1) {
        bfsDist[i][j] = 1;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curr = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = curr[0] + dx[j];
        let ny = curr[1] + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && dist[nx][ny] === 2) return answer++;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && dist[nx][ny] === 0 && bfsDist[nx][ny] === 0) {
          bfsDist[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return answer;
}
let arr = [
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
];

console.log(solution(arr));
