
function solution(n, m, arr) {
  let answer = [];
  let graph = Array.from(Array(n + 1), () => Array());
  let indegrees = Array(n + 1).fill(0);
  let table = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let [from, to, cnt] of arr) {
    graph[to].push([from, cnt]);
    indegrees[from] += 1;
  }

  let queue = [];
  for (let i = 1; i < n + 1; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
      table[i][i] = 1;
    }
  }

  while (queue.length) {
    let curr = queue.shift();
    console.log(curr);
    for (let [next, val] of graph[curr]) {
      console.log(next, val);
      for (let j = 0; j < n + 1; j++) {
        table[j][next] += table[j][curr] * val;
      }
      indegrees[next] -= 1;
      if (indegrees[next] === 0) queue.push(next);
    }
  }
  for (let k = 0; k < n + 1; k++) {
    if (table[k][n] > 0) answer.push([k, table[k][n]])
  }
  return answer;
}


let arr = [[5, 1, 2],
[5, 2, 2],
[7, 5, 2],
[6, 5, 2],
[6, 3, 3],
[6, 4, 4],
[7, 6, 3],
[7, 4, 5]];


console.log(solution(7, 8, arr));