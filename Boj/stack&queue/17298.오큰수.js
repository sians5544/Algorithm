const fs = require('fs');
const { basename } = require('path');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let nums = input[1].split(' ').map(Number);
let answer = Array(N).fill(-1);
let stack = [];
for (let i = N - 1; i >= 0; i--) {
  while (stack.length) {
    if (stack[stack.length - 1] > nums[i]) {
      answer[i] = stack[stack.length - 1];
      break;
    } else {
      stack.pop();
    }
  }

  stack.push(nums[i]);
}

console.log(answer.join(' '));
