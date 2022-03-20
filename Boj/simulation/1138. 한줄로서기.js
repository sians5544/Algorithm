const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];

let nums = input[1].split(' ').map(Number);
let answer = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  let cnt = nums[i];
  for (let j = 0; j < N; j++) {
    if (cnt === 0 && answer[j] === 0) {
      answer[j] = i + 1;
      break;
    } else if (answer[j] === 0) {
      cnt--;
    }
  }
}

console.log(answer.join(' '));
