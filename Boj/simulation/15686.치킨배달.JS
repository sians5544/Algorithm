const { count } = require('console');
const fs = require('fs');
const { off } = require('process');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let board = Array(n);
let answer = [];
let arrhouse = [];
let arrChiken = [];
for (let i = 1; i < input.length; i++) {
  board[i - 1] = input[i].trim().split(' ').map(Number);
}

let check = Array(arrChiken.length).fill(0);

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

const checkCount = (idx) => {
  let sum = 0;
  console.log(idx);
  let cnt = Number.MAX_SAFE_INTEGER;
  let r = 0;
  let c = 0;
  let [x, y] = arrChiken[idx];
  for (let arr of arrChiken) {
    r = Math.abs(x - arr[0]);
    c = Math.abs(y - arr[1]);
    cnt = Math.min(r + c, cnt);
    sum += cnt;
  }
  console.log(sum);
  return sum;
};
let tmp = [];

function DFS(idx, cnt) {
  if (cnt === m) {
    answer.push(tmp.slice());
  } else {
    for (let i = idx; i < arrChiken.length; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        console.log(checkCount(i));
        tmp.push(checkCount(i));
        DFS(i, cnt + 1);
        tmp.pop();
        check[i] = 0;
      }
    }
  }
}
DFS(0, 0);

console.log(answer);
