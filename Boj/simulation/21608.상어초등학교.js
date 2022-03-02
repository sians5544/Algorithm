const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let student = Array.from(Array(n * n + 1), () => Array(4).fill(0));
let board = Array.from(Array(n), () => Array(n).fill(0));

let hash = new Map();
let answer = 0;

for (let i = 1; i < input.length; i++) {
  hash.set(+input[i][0], input[i].slice(2, -1).split(' ').map(Number));
}

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
let score = [0, 1, 10, 100, 1000];
let checkArr = [];

// board 전체를 검사 각 학생이 이 자리에 올때의 경우의 수를 구하는 것이다
const count = (value) => {
  checkArr = Array.from(Array(n * n + 1), () => Array(4).fill(0));
  let idx = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
          // value 에 포함되는 값이라면...?
          if (value.includes(board[nx][ny])) checkArr[idx][0]++;
          if (!board[nx][ny]) checkArr[idx][1]++;
        }
      }
      checkArr[idx][2] = i;
      checkArr[idx][3] = j;
      idx++;
    }
  }
};

for (let i = 1; i <= n * n; i++) {
  let value = input[i].split(' ').map(Number);
  let key = value.shift();
  student[key] = [...value];
  count(value);
  checkArr.sort((a, b) => {
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    if (a[0] === b[0]) {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      if (a[1] === b[1]) return 0;
    }
  });

  let check = false;

  for (let i = 0; i < checkArr.length; i++) {
    let col = checkArr[i][2];
    let row = checkArr[i][3];

    if (board[col][row] === 0) {
      board[col][row] = key;
      check = true;
    }

    if (check) break;
  }
}

let sumarr = Array(n * n + 1).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let values = student[board[i][j]];

    for (let k = 0; k < 4; k++) {
      let nx = i + dx[k];
      let ny = j + dy[k];

      if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
        if (values.includes(board[nx][ny])) {
          sumarr[board[i][j]]++;
        }
      }
    }
  }
}

// console.log(sumarr);
for (let chk of sumarr) {
  answer += score[chk];
}

console.log(board);
console.log(answer);
