const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let board = [];

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

let totalCheeze = [];
let answer = 0;
let visited = Array.from(Array(N), () => Array(M).fill(0));
let isvalid = false;
for (let i = 1; i < input.length; i++) {
  board.push(input[i].trim().split(' ').map(Number));
}

// 먼저 치즈의 외곽(내부의 빈공간 x) 의 0인 애들을 3으로 바꿔준다

const checkOutSide = () => {
  visited = visited.map((v) => v.fill(0));
  let queue = [];
  visited[0][0] = 1;
  queue.push([0, 0]);

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          board[nx][ny] !== 1 &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
          board[nx][ny] = 2;
        }
      }
    }
  }
};

while (true) {
  checkOutSide();
  isvalid = false;
  let countCheese = 0;
  let count = 0;
  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < M - 1; j++) {
      if (board[i][j] === 1 && visited[i][j] === 0) {
        let cnt = 0;
        for (let k = 0; k < 4; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];

          if (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] === 2) {
            cnt++;
          }
        }
        if (cnt > 0) {
          board[i][j] = 3;
          isvalid = true;
          count++;
        }
      }
    }
  }

  if (isvalid) {
    for (let i = 1; i < N - 1; i++) {
      for (let j = 1; j < M - 1; j++) {
        if (board[i][j] === 3) {
          countCheese++;
          board[i][j] = 2;
        }
      }
    }
  }

  if (countCheese === 0) break;
  totalCheeze.push(countCheese);
  answer += 1;
}

console.log(answer + '\n' + totalCheeze[answer - 1]);
