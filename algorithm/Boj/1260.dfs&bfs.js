const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m, v] = input[0].trim().split(' ').map(Number);

let nodes = [];

for (let i = 1; i < input.length; i++) {
  nodes.push(input[i].trim().split(' ').map(Number));
}

let graph = Array.from(Array(n + 1), () => Array().fill(0));
let check = Array(n + 1).fill(0);
let answer = '';

for (let [a, b] of nodes) {
  graph[a].push(b);
  graph[b].push(a);
}

graph.map((item) => {
  item.sort((a, b) => a - b);
});

let DFS = (vertex) => {
  for (let i = 0; i < graph[vertex].length; i++) {
    if (check[graph[vertex][i]] === 0) {
      answer += graph[vertex][i] + ' ';
      check[graph[vertex][i]] = 1;
      DFS(graph[vertex][i]);
    }
  }
};

check[v] = 1;
answer = v + ' ';
DFS(v);
console.log(answer);

let queue = [];
let answerBFS = v + ' ';
queue.push(v);
check = Array(n + 1).fill(0);
check[v] = 1;

let BFS = () => {
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let num = queue.shift();

      for (let gh of graph[num]) {
        if (check[gh] === 0) {
          queue.push(gh);
          answerBFS += gh + ' ';
          check[gh] = 1;
        }
      }
    }
  }
};

BFS();
console.log(answerBFS);
