const fs = require('fs');
const { runMain } = require('module');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input[0].trim();

let strArr = [];
for (let i = 0; i < str.length; i++) {
  strArr.push(str.slice(i));
}

strArr.sort();

console.log(strArr.join('\n'));
