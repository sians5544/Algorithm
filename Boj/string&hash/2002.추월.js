const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let hash = new Map();
let answer = 0;

for (let i = 1; i <= N; i++) {
  hash.set(input[i].trim(), i - 1);
}

let youngsik = input.slice(N + 1, input.length).map((list) => list.trim());

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (hash.get(youngsik[i]) > hash.get(youngsik[j])) {
      answer++;
      break;
    }
  }
}

console.log(answer);
