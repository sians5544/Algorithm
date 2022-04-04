const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str1 = input[0];
let str2 = input[1];

let board = Array.from(Array(str1.length), () => Array(str2.length).fill(0));

let answer = 0;

for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      if (i === 0 || j === 0) {
        board[i][j] = 1;
      } else {
        board[i][j] = board[i - 1][j - 1] + 1;
      }
    }
    answer = Math.max(board[i][j], answer);
  }
}

console.log(answer);
