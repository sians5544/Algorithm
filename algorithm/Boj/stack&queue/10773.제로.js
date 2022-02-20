const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let k = +input[0];

let nums = [];

let stack = [];

for (let i = 1; i < input.length; i++) {
  nums.push(+input[i]);
}

for (let num of nums) {
  if (num === 0 && stack.length > 0) {
    stack.pop();
  } else {
    stack.push(num);
  }
}

console.log(stack.reduce((arr, cur) => (arr += cur), 0));
