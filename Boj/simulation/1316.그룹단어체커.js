const fs = require('fs');
const { basename } = require('path');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().replace(/\r/g, '').split('\n');

let num = +input[0];
let answer = 0;

for (let i = 1; i <= num; i++) {
  let hash = {};
  let flag = true;

  [...input[i]].forEach((str, index) => {
    if (!hash[str]) {
      hash[str] = index + 1;
      return;
    }
    if (hash[str] === index) hash[str] = index + 1;
    else return (flag = false);
  });

  if (flag) answer += 1;
}

console.log(answer);
