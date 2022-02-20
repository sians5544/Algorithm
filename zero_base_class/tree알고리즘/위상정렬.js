function solution(n, m, node) {

  let answer = [];
  let graph = Array.from(Array(n + 1), () => Array().fill(0));
  let indegrees = Array(n + 1).fill(0);

  let queue = [];

  for (let [a, b] of node) {
    graph[a].push(b);
    indegrees[b]++;
  }


  // 0인 애들을 첫 스타드 애들로 써야하니까 0 있는 애들은 queue 에 세팅한다 
  for (let i = 1; i < n + 1; i++) {
    if (indegrees[i] === 0) queue.push(i);
  }

  while (queue.length) {

    let check = queue.shift();
    answer.push(check);


    for (let next of graph[check]) {
      indegrees[next]--;
      if (indegrees[next] === 0) queue.push(next);
    }


  }

  return answer;
}


node = [
  [1, 4],
  [5, 4],
  [4, 3],
  [2, 5],
  [2, 3],
  [6, 2]];

console.log(solution(6, 6, node));