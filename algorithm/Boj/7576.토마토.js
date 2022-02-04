const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let board = [];

let answer = 0;

let zerocnt = 0;

let nx = [-1, 0, 1, 0];
let ny = [0, 1, 0, -1];

for (let i = 1; i < input.length; i++) {
  board.push(input[i].trim().split(' ').map(Number));
}

let stack = [];
let check = Array.from(Array(m), () => Array(n).fill(0));

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      check[i][j] = 1;
      stack.push([i, j]);
    }
    if (board[i][j] === 0) {
      zerocnt += 1;
    }
  }
}

if (zerocnt === 0) return console.log(answer);
let head = 0;
while (stack.length > head) {
  let len = stack.length - head;
  let flag = false;
  for (let i = 0; i < len; i++) {
    let position = stack[head++];
    for (let k = 0; k < nx.length; k++) {
      let kx = position[0] + nx[k];
      let ky = position[1] + ny[k];

      if (ky < n && kx < m && ky > -1 && kx > -1 && board[kx][ky] === 0 && check[kx][ky] === 0) {
        flag = true;
        zerocnt -= 1;
        check[kx][ky] = 1;
        stack.push([kx, ky]);
      }
    }
  }
  if (flag) answer += 1;
}

if (zerocnt > 0) return console.log(-1);
console.log(answer);
