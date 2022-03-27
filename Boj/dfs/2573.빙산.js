const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let iceberg = [];

let totalisland = 0;
let icebergCopy = [];

for (let i = 1; i < input.length; i++) {
  iceberg.push(
    input[i].split(' ').map((item) => {
      if (item > 0) totalisland++;

      return Number(item);
    })
  );
  icebergCopy.push(input[i].split(' ').map(Number));
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];
let year = 0;
let flag = false;
let board = Array.from(Array(N), () => Array(M).fill(0));
let islandCnt = 0;

//1 .빙하높이 줄어드는 것 구하는 함수

const icebergHeight = () => {
  flag = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (iceberg[i][j] !== 0) {
        flag = true;
        for (let k = 0; k < 4; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];

          if (nx >= 0 && ny >= 0 && nx < N && ny < M && icebergCopy[nx][ny] === 0) {
            if (iceberg[i][j] >= 1) iceberg[i][j]--;
          }
        }
        if (iceberg[i][j] === 0) totalisland--;
      }
    }
  }
  year++;
};

const DFS = (x, y) => {
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && ny >= 0 && nx < N && ny < M && iceberg[nx][ny] !== 0 && board[nx][ny] === 0) {
      board[nx][ny] = 1;
      DFS(nx, ny);
    }
  }
};
const islandCount = () => {
  islandCnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (iceberg[i][j] !== 0 && board[i][j] === 0) {
        board[i][j] = 1;
        DFS(i, j);
        islandCnt++;
      }
    }
  }

  return islandCnt;
};

const chage = () => {
  for (let i = 0; i < iceberg.length; i++) {
    icebergCopy[i] = [...iceberg[i]];
  }
};

while (totalisland > 0) {
  if (islandCount() > 1) return console.log(0);
  board = Array.from(Array(N), () => Array(M).fill(0));
  icebergHeight();
  chage();
  if (islandCount() > 1) break;
}

console.log(islandCnt > 1 ? year : 0);
