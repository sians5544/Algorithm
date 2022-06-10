const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let board = [];

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

let dp = Array.from(Array(501), () => Array(501).fill(0));
let answer = 0;

for (let i = 1; i < input.length; i++) {
  board.push(input[i].split(' ').map(Number));
}

const DFS = (x, y) => {
  if (dp[x][y] !== 0) return dp[x][y];

  let result = 0;

  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      if (board[x][y] < board[nx][ny]) {
        result = Math.max(DFS(nx, ny), result);
      }
    }
  }

  return (dp[x][y] = result + 1);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer = Math.max(DFS(i, j), answer);
  }
}

console.log(answer);
