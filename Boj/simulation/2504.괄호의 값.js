const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let strs = [];

for (let i = 0; i < input.length; i++) {
  strs = input[i].trim().split('');
}

if (strs.length <= 0 || strs.length > 30) return console.log(0);
let stack = [];
let answer = 0;
let tmp = 1;
for (let i = 0; i < strs.length; i++) {
  if (strs[i] === '(') {
    tmp *= 2;
    stack.push('(');
  } else if (strs[i] === ')') {
    if (strs[i - 1] === '(') answer += tmp;
    if (stack[stack.length - 1] === '(') {
      stack.pop();
    }
    tmp = tmp / 2;
  } else if (strs[i] === '[') {
    console.log('tmp3', tmp, answer);
    tmp *= 3;
    stack.push('[');
  } else {
    if (strs[i - 1] === '[') answer += tmp;
    if (stack[stack.length - 1] === '[') {
      stack.pop();
    }
    tmp = tmp / 3;
  }
}

console.log(stack.length > 0 ? 0 : answer);
