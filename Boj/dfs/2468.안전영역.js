const fs = require('fs');
const { fileURLToPath } = require('url');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let N = +input[0];

let lands = [];
let answer = 0;
let maxNum = Number.MIN_SAFE_INTEGER;
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

for (let i = 1; i < input.length; i++) {
  lands.push(input[i].split(' ').map(Number));
  maxNum = Math.max(...input[i].split(' ').map(Number), maxNum);
}

const originland = () => {
  for (let i = 1; i < input.length; i++) {
    lands[i - 1] = input[i].split(' ').map(Number);
  }
};

const DFS = (x, y) => {
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N && lands[nx][ny] === 101) {
      lands[nx][ny] = 0; // 침수
      DFS(nx, ny);
    }
  }
};

const findHeight = (height) => {
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (lands[i][j] > height) {
        lands[i][j] = 101;
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (lands[i][j] === 101) {
        lands[i][j] = 0;
        DFS(i, j);
        cnt += 1;
      }
    }
  }

  return cnt;
};

for (let i = maxNum; i >= 0; i--) {
  answer = Math.max(findHeight(i), answer);
  originland();
}

console.log(answer);
