const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let s = input[0].trim().split('');
let t = input[1].trim().split('');

while (t.length) {
  if (t.length > s.length && t[t.length - 1] === 'A') {
    t.pop();
  } else if (t.length > s.length && t[t.length - 1] === 'B') {
    t.pop();
    t.reverse();
  } else {
    s.join() === t.join() ? console.log(1) : console.log(0);
    return;
  }
}
