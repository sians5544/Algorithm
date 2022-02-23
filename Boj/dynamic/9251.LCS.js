const { Hash, Cipher } = require('crypto');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str1 = input[0].trim().split('');
let str2 = input[1].trim().split('');

let dy = Array.from(Array(1001), () => Array(1001).fill(0));

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dy[i][j] = dy[i - 1][j - 1] + 1;
    } else {
      dy[i][j] = Math.max(dy[i][j - 1], dy[i - 1][j]);
    }
  }
}

console.log(dy[str1.length][str2.length]);
