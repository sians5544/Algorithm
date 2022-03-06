const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let strs = [];

for (let i = 1; i < input.length; i++) {
  strs.push(input[i].trim().split(' ').map(Number));
}

let arr = Array(n).fill(1);

for (let i = 0; i < strs.length; i++) {
  for (let j = 0; j < strs.length; j++) {
    if (i !== j) {
      if (strs[i][0] < strs[j][0] && strs[i][1] < strs[j][1]) {
        arr[i]++;
      }
    }
  }
}

console.log(arr.join(' '));
