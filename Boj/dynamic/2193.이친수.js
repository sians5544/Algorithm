const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];

let dy = Array.from(Array(91), () => Array(2).fill(BigInt(0)));

dy[1][0] = BigInt(0);
dy[1][1] = BigInt(1);

for (let i = 2; i <= 90; i++) {
  dy[i][0] = dy[i - 1][0] + dy[i - 1][1];
  dy[i][1] = dy[i - 1][0];
}

console.log(String(dy[n][0] + dy[n][1]));
