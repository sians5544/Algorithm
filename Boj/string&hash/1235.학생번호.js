const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];

let students = [];

for (let i = 1; i < input.length; i++) {
  students.push(input[i].trim().split('').reverse());
}

let len = students[0].length;
let set = new Set();

for (let i = 1; i <= len; i++) {
  let flag = true;
  let str = '';
  for (let j = 0; j < n; j++) {
    str = students[j].slice(0, i).join('');
    if (!set.has(str)) set.add(str);
    else flag = false;
  }
  if (flag) {
    console.log(str.length);
    return;
  }
}
