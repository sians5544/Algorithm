function solution(board, r, c) {
  let answer = Number.MIN_SAFE_INTEGER;

  let checkArr = Array.from(Array(4), () => Array(4).fill(0));
  let dx = [0, -1, 0, 1];
  let dy = [-1, 0, 1, 0];
  let cx = r;
  let cy = c;
  let queue = [];
  let cnt = 0;

  const BFS = () => {
    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let [x, y] = queue.shift();
        cx = x;
        cy = y;
        for (let k = 0; k < 4; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];

          if (nx >= 0 && ny >= 0 && nx < 4 && ny < 4) {
            if (board[cx][cy] === board[nx][ny]) {
              cnt++;
              board[nx][ny] = 0;
              board[x][y] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
    answer = Math.max(answer, cnt);
    console.log(cnt);
  };

  for (let m = 0; m < 4; m++) {
    cnt = 1;
    let mx = cx + dx[m];
    let my = cy + dy[m];

    if (mx >= 0 && my >= 0 && mx < 4 && my < 4) {
      if (board[mx][my] === 0) {
        cnt++;
        queue.push([mx, my]);
        BFS();
      }

      if (board[mx][my] === board[cx][cy]) {
        cnt++;
        cx = mx;
        cy = my;
        // m = 0;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 0, 0, 3],
      [2, 0, 0, 0],
      [0, 0, 0, 2],
      [3, 0, 1, 0],
    ],
    1,
    0
  )
);
