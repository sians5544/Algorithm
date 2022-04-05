const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let board = [];
let answer = 0;
let maxCnt = 0;
let colors = ['C', 'P', 'Z', 'Y'];
let checks = Array(colors.length).fill(0);

//1. 처음에 사탕을 채웠을 때 최대 값으로 연속된 사탕의 개수를 알아낸다
// 2. 이번 칸과 다음 칸의 사탕색이 다르면 둘의 위치를 바꿔서 연속된 개수 세어준다
// 3. 칸을 바꾸고 사탕을 세었다면 보드를 원래대로 되돌려 놓기

for (let i = 1; i < input.length; i++) {
  board.push(input[i].trim().split(''));
}

const swapBoard = (i, j, k, l) => {
  let temp = board[i][j];
  board[i][j] = board[k][l];
  board[k][l] = temp;
};

//행의 최대 값
const rowMax = () => {
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    let color = board[i][0];
    for (let j = 0; j < N; j++) {
      if (board[j][i] === color) cnt++;
      else {
        maxCnt = Math.max(maxCnt, cnt);
        color = board[j][i];
        cnt = 1;
      }
    }
    maxCnt = Math.max(maxCnt, cnt);
    cnt = 0;
  }
};

// 열의 최대 값
const columnMax = () => {
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    let color = board[0][i];
    for (let j = 0; j < N; j++) {
      if (board[i][j] === color) cnt++;
      else {
        maxCnt = Math.max(maxCnt, cnt);
        color = board[i][j];
        cnt = 1;
      }
    }
    maxCnt = Math.max(maxCnt, cnt);
    cnt = 0;
  }
};

rowMax();
columnMax();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    if (i + 1 < N && board[i][j] !== board[i + 1][j]) {
      swapBoard(i, j, i + 1, j);
      rowMax();
      columnMax();
      swapBoard(i + 1, j, i, j);
    }

    if (board[i][j] !== board[i][j + 1]) {
      swapBoard(i, j, i, j + 1);
      rowMax();
      columnMax();
      swapBoard(i, j + 1, i, j);
    }
  }
}

console.log(maxCnt);
