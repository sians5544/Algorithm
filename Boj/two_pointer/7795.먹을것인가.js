const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let len = +input[0];

let index = 1;

for (let i = 0; i < len; i++) {
  let sum = 0;
  let [m, n] = input[index++].split(' ').map(Number);
  let eatlist = input[index++].split(' ').map(Number);
  let eattenlist = input[index++].split(' ').map(Number);

  eatlist.sort((a, b) => b - a);
  eattenlist.sort((a, b) => a - b);

  for (let j = 0; j < m; j++) {
    for (let k = 0; k < n; k++) {
      if (eatlist[j] > eattenlist[k]) {
        sum++;
      } else break;
    }
  }

  console.log(sum);
}
