const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];

let board = [];
let greenBorad = [];
let answer = 0;
let answer2 = 0;

let flag = true;

for (let i = 1; i < input.length; i++) {
  board.push(input[i].trim().split(''));
  greenBorad.push(input[i].trim().replace(/[G]/g, 'R').split(''));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const DFS = (x, y, color) => {
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (!flag) {
      greenBorad[x][y] = 'X';
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && greenBorad[nx][ny] !== 'X') {
        // 적록색 아닐시
        if (greenBorad[nx][ny] === color) {
          DFS(nx, ny, color);
        }
      }
    } else {
      board[x][y] = 'X';
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] !== 'X') {
        // 적록색 아닐시
        if (board[nx][ny] === color) {
          DFS(nx, ny, color);
        }
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] !== 'X') {
      DFS(i, j, board[i][j]);
      answer++;
    }
  }
}
flag = false;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (greenBorad[i][j] !== 'X') {
      DFS(i, j, greenBorad[i][j]);
      answer2++;
    }
  }
}

console.log(answer, answer2);
