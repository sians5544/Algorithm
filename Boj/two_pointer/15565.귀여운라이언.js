const { Hash, Cipher } = require('crypto');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);

let nums = input[1].split(' ').map(Number);

let cnt = 0;
let left = 0;
let answer = 1000001;
let check = false;

if (k > n) return console.log(-1);

for (let right = 0; right < nums.length; right++) {
  if (nums[right] === 1) cnt++;

  while (k <= cnt) {
    check = true;

    if (cnt === k) answer = Math.min(answer, right - left + 1);

    if (nums[left] === 1) {
      cnt--;
    }
    
    left++;
  }
}

console.log(check ? answer : -1);
