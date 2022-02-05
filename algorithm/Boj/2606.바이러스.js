const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let m = +input[1];

let nums = [];
let tmp = 0;

for (let i = 2; i < input.length; i++) {
  nums.push(input[i].trim().split(' ').map(Number));
}

let answer = 0;
let graph = Array.from(Array(n + 1), () => Array().fill(0));
let check = Array(n + 1).fill(0);

for (let [a, b] of nums) {
  graph[a].push(b);
  graph[b].push(a);
}

let DFS = (v) => {
  for (let i = 0; i < graph[v].length; i++) {
    if (check[graph[v][i]] === 0) {
      check[graph[v][i]] = 1;
      DFS(graph[v][i]);
      answer++;
    }
  }
};

check[1] = 1;
DFS(1);

console.log(answer);
