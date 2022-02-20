const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input[0].split(' ').map(Number);

let people = [];

for (let i = 1; i < input.length; i++) {
  people.push(input[i].trim().split(' '));
}

let hash = new Map();

for (let person of people) {
  person[1] === 'enter' ? hash.set(person[0], 'enter') : hash.delete(person[0]);
}

let answer = [...hash.keys()];

answer.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

console.log(answer.join('\n'));
