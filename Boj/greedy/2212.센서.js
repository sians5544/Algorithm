const fs = require('fs');
const { runMain } = require('module');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0]; // 센서의 개수
let K = +input[1]; // 집중국의 개수

if (K >= N) return console.log(0);

let sensors = input[2].split(' ').map(Number);
sensors.sort((a, b) => a - b);

let answer = [];

for (let i = 0; i < sensors.length - 1; i++) {
  answer.push(sensors[i + 1] - sensors[i]);
}

console.log(answer.sort((a, b) => a - b).slice(0, N - K));

console.log(
  answer
    .sort((a, b) => a - b)
    .slice(0, N - K)
    .reduce((acc, cur) => acc + cur)
);
