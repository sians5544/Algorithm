const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let trees = [];

for (let str of input) {
  trees.push(str.trim());
}

let hash = new Map();

for (let tree of trees) {
  hash.set(tree, (hash.get(tree) || 0) + 1);
}

let hashtree = [...hash];

hashtree.sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));

for (let [key, value] of hashtree) {
  let num = (value / trees.length) * 100;

  console.log(`${key} ${num.toFixed(4)}`);
}
