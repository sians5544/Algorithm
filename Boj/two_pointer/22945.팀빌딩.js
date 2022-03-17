const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];

let programmer = input[1].split(' ').map(Number);

let len = programmer.length;
let left = 0;
let right = len - 1;
let answer = 0;

while (left < right) {
  let ability = (right - left - 1) * Math.min(programmer[left], programmer[right]);
  if (programmer[left] > programmer[right]) {
    right--;
  } else {
    left++;
  }
  answer = Math.max(answer, ability);
}

console.log(answer);
