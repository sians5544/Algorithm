const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);

let nums = input[1].split(' ').map(Number);

let cntArray = Array(100001).fill(0);

let answer = 0; 

let left = 0;

for (let right = 0; right < n; right++) {
  cntArray[nums[right]]++;

  while (cntArray[nums[right]] > k) {
    cntArray[nums[left]] -= 1;
    left++;
  }
  answer = Math.max(answer, right - left + 1);
}

console.log(answer);
