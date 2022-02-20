const { Cipher } = require('crypto');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let pattern = input[1].trim();

let patternArr = pattern.trim().split('*');

let len = patternArr[0].length + patternArr[1].length;

let files = [];

for (let i = 2; i < input.length; i++) {
  files.push(input[i].trim());
}

for (let file of files) {
  if (len <= file.length) {
    let first = file.slice(0, patternArr[0].length);
    let last = file.slice(-patternArr[1].length);

    if (first === patternArr[0] && last === patternArr[1]) {
      console.log('DA');
    } else {
      console.log('NE');
    }
  } else {
    console.log('NE');
  }
}
