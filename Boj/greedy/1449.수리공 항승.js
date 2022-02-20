const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, L] = input[0].split(' ').map(Number);

let nums = input[1].split(' ').map(Number);

let answer = 1;

nums.sort((a, b) => a - b);

let target = nums[0] - 0.5;

for (let num of nums) {
  if (num > target + L) {
    answer++;
    target = num - 0.5;
  }
}

console.log(answer);
