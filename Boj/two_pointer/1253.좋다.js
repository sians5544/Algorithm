const { group } = require('console');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];

let nums = input[1].split(' ').map(Number);

nums.sort((a, b) => a - b);

let answer = 0;
let hash = new Map();

if (nums.length <= 2) return console.log(0);

for (let i = 0; i < N; i++) {
  if (hash.has(nums[i])) {
    let list = [...hash.get(nums[i]), i];
    hash.set(nums[i], list);
  } else {
    hash.set(nums[i], [i]);
  }
}

let left = 0;
let right = N - 1;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    let total = nums[i] + nums[j];
    if (hash.has(total)) {
      let list = [];
      for (let num of [...hash.get(total)]) {
        if (i !== num && j !== num) {
          answer += 1;
        } else {
          list.push(num);
        }
      }
      if (list.length !== 0) hash.delete(total);
      hash.set(total, list);
    }
  }
}

console.log(answer);
