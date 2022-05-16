const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let s = input[0] + '';
let dy = Array(500).fill(0);
let answer = 0;
let len = s.length;

const DFS = (L) => {
  if (s[L] === '0') return 0;
  if (dy[L] > 0) return dy[L];

  if (len - 1 === L || len === L) return 1;

  dy[L] = 1;
  answer = DFS(L + 1);

  let tmp = s.substring(L, L + 2);
  if (+tmp <= 26) answer += DFS(L + 2);

  return (dy[L] = answer);
};

console.log(DFS(0) % 1000000);
