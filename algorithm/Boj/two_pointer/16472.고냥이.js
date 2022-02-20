const { Hash } = require('crypto');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let str = input[1];

let left = 0;
let answer = 0;
let hash = new Map();

for (let right = 0; right < str.length; right++) {
  hash.set(str[right], (hash.get(str[right]) || 0) + 1);

  while (hash.size > n) {
    hash.set(str[left], hash.get(str[left] || 0) - 1);
    if (hash.get(str[left]) === 0) hash.delete(str[left]);
    left++;
  }

  answer = Math.max(right - left + 1, answer);
}

console.log(answer);
