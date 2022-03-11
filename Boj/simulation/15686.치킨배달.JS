const { count } = require('console');
const fs = require('fs');
const { off } = require('process');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let board = Array(n);
let answer = Number.MAX_SAFE_INTEGER;
let arrhouse = [];
let arrChiken = [];
for (let i = 1; i < input.length; i++) {
  board[i - 1] = input[i].trim().split(' ').map(Number);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      arrhouse.push([i, j]);
    }
    if (board[i][j] === 2) {
      arrChiken.push([i, j]);
    }
  }
}

let check = [];

const checkCount = () => {
  let sum = 0;

  for (let chk of arrhouse) {
    let cnt = Number.MAX_SAFE_INTEGER;

    for (let arr of check) {
      let r = Math.abs(chk[0] - arr[0]);
      let c = Math.abs(chk[1] - arr[1]);
      cnt = Math.min(cnt, r + c);
    }
    sum += cnt;
  }

  return sum;
};

function DFS(idx, cnt) {
  if (cnt === m) {
    answer = Math.min(answer, checkCount());
    return;
  } else {
    for (let i = idx; i < arrChiken.length; i++) {
      check.push(arrChiken[i]);
      DFS(i + 1, cnt + 1);
      check.pop();
    }
  }
}
DFS(0, 0);

console.log(answer);
