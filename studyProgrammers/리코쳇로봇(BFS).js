function solution(board) {
  let answer = 0;
  let m = board.length;
  let n = board[0].length;

  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let queue = [];
  let visited = Array.from(Array(m), () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "R") {
        queue.push([i, j]);
        visited[i][j] = 1;
      }
    }
  }

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        while (
          nx < m &&
          ny < n &&
          nx > -1 &&
          ny > -1 &&
          board[nx][ny] !== "D"
        ) {
          nx = nx + dx[k];
          ny = ny + dy[k];
        }

        nx -= dx[k];
        ny -= dy[k];

        if (board[nx][ny] === "G") {
          return answer + 1;
        }

        if (visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}
