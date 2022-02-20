const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let tmp = input[1].split(' ').map(Number);

let total = 0;

let maxNum = Math.max(...tmp.map((item) => Math.abs(item)), 0);

let positive_arr = [];
let nagative_arr = [];

for (let t of tmp) {
  t > 0 ? positive_arr.push(t) : nagative_arr.push(Math.abs(t));
}

positive_arr.sort((a, b) => b - a);
nagative_arr.sort((a, b) => b - a);

for (let i = 0; i < positive_arr.length;) {
  total += positive_arr[i] * 2;
  i += m;
}

for (let k = 0; k < nagative_arr.length;) {
  total += nagative_arr[k] * 2;
  k += m;
}

total -= maxNum;

console.log(total);
