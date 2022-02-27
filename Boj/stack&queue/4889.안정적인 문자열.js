const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let strs = [];

for (let i = 0; i < input.length; i++) {
  strs.push(input[i].trim());
}

let index = 0;

while (strs[index][0] !== '-') {
  let stack = [];
  let cnt = 0;
  for (let s of strs[index]) {
    if (s === '}') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        cnt++;
        stack.push('{');
      }
    } else {
      stack.push('{');
    }
  }

  if (stack.length) {
    stack.length % 2 === 0 ? (cnt += stack.length / 2) : (cnt += stack.length);
  }
  console.log(`${++index}. ${cnt}`);
}
