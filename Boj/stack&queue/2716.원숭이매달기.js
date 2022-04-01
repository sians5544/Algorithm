const { count } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];

let monkeys = [];
let stack = [];
let answer = 0;
let maxDepth = 1;

for (let i = 1; i < input.length; i++) {
  monkeys.push(input[i].trim());
}

for (let monkey of monkeys) {
  stack = [];
  maxDepth = 0;

  if (!monkey) {
    console.log(1);
    continue;
  }

  for (let i = 0; i < monkey.length; i++) {
    if (monkey[i] === ']') {
      console.log(stack);
      maxDepth = Math.max(maxDepth, stack.length);
      stack.pop();
    } else {
      stack.push('[');
    }
  }

  console.log(maxDepth * 2);
}
