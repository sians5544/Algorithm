const { group } = require('console');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, S] = input[0].split(' ').map(Number);

let nums = input[1].split(' ').map(Number);

let answer = Number.MAX_SAFE_INTEGER;
let left = 0;
let sum = 0;

for (let right = 0; right < nums.length; right++) {
  sum += nums[right];

  while (sum >= S && right - left + 1 >= 1) {
    sum -= nums[left];
    answer = Math.min(answer, right - left + 1);
    left++;
  }
}
console.log(nums);
console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);
