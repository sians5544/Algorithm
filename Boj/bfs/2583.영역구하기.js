const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [M, N, K] = input[0].split(' ').map(Number);
let cordi = [];

for (let i = 1; i < input.length; i++) {
  cordi.push(input[i].split(' ').map(Number));
}
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let stack = [];

let board = Array.from(Array(101), () => Array(101).fill(0));
let visited = Array.from(Array(101), () => Array(101).fill(0));
let answer = [];

// 오른쪽 위부터 왼쪽 아래까지
for (let cor of cordi) {
  for (let i = M - cor[3]; i < M - cor[1]; i++) {
    for (let j = cor[0]; j < cor[2]; j++) {
      if (board[i][j] === 0 && visited[i][j] === 0) {
        board[i][j] = 1;
        visited[i][j] = 1;
      }
    }
  }
}

function BFS() {
  let num = 1;
  while (stack.length) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let [x, y] = stack.shift();
      visited[x][y] = 1;
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && ny >= 0 && nx < M && ny < N && visited[nx][ny] === 0) {
          stack.push([nx, ny]);
          visited[nx][ny] = 1;
          num++;
        }
      }
    }
  }
  return num;
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 0 && visited[i][j] === 0) {
      stack.push([i, j]);
      answer.push(BFS());
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join(' '));

// DFS 로 풀었을 때 N , M 이 100 이되면 스택 오버플로우가 발생 그래서 BFS 로 풀어줬다
// 반례 100 100  1 0 0 1 1
