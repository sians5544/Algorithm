const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];

let tops = [...input[1].split(' ').map(Number)];

let topCopy = [...tops];

let stack = [];

let checkRecive = Array(n).fill(0);

stack.push(topCopy.length - 1);
topCopy.pop();

while (topCopy.length) {
  while (topCopy[topCopy.length - 1] >= tops[stack[stack.length - 1]]) {
    checkRecive[stack.pop()] = topCopy.length;
  }
  stack.push(topCopy.length - 1);
  topCopy.pop();
}

console.log(checkRecive.join(' '));
