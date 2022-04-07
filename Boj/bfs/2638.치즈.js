const fs = require('fs');
const { basename } = require('path');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let board = [];

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

let totalCheeze = 0;
let answer = 0;
let cnt = 0;
let num = 0;
let checknum = 10;
let visited = [];

for (let i = 1; i < input.length; i++) {
  board.push(
    input[i]
      .trim()
      .split(' ')
      .map((item) => {
        if (item === '1') totalCheeze++;

        return +item;
      })
  );
}

let queue = [];

// 먼저 치즈의 외곽(내부의 빈공간 x) 의 0인 애들을 3으로 바꿔준다

const BFS = () => {
  console.log(queue);
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = dx[k] + x;
        let ny = dy[k] + y;

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          board[nx][ny] === 0 &&
          visited[nx][ny] === 0
        ) {
          board[nx][ny] = num;
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
};

const liveCheeze = () => {
  let num = answer + 10;
  visited = Array.from(Array(N), () => Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === num) {
        queue.push([i, j]);
        board[i][j] = num;
        visited[i][j] = 1;
        BFS();
        num++;
      }
    }
  }
};

const checkCheeze = (x, y) => {
  cnt = 0;
  for (let k = 0; k < 4; k++) {
    let nx = dx[k] + x;
    let ny = dy[k] + y;

    if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
      if (board[nx][ny] === 3) cnt += 1;
    }

    if (cnt >= 2) {
      board[x][y] = answer + 10;
      totalCheeze--;
      break;
    }
  }
};

const countDFS = (nx, ny) => {
  for (let k = 0; k < 4; k++) {
    let nx = dx[k] + x;
    let ny = dy[k] + y;

    if (nx >= 0 && ny >= 0 && nx < N && ny < M && board[nx][ny] === 0) {
      board[nx][ny] = checknum;
      countDFS(nx, ny);
    }
  }
};
// totalcheeze 가 0이 아닐 때 까지 dfs 을 실행한다

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) {
      board[i][j] = checknum;
      countDFS(i, j);
    }
  }
}
while (totalCheeze > 0) {
  liveCheeze();
  answer++;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1) {
        checkCheeze(i, j);
      }
    }
  }
  console.log('/////////////////////');
  console.log(board, totalCheeze);
}

console.log(answer);
