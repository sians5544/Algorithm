const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let set = new Set();
let answer = [];

for (let i = 1; i <= n; i++) {
  set.add(input[i].trim());
}

for (let j = n + 1; j < input.length; j++) {
  if (set.has(input[j].trim())) answer.push(input[j].trim());
}

answer.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
console.log(answer.length);
console.log(answer.join('\n'));
