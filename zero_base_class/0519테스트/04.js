function solution(bombs) {
  let answer = Number.MIN_SAFE_INTEGER;
  let queue = [];

  const BFS = () => {
    let cnt = 1;
    let check = Array(bombs.length).fill(0);

    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let que = queue.pop();
        let [x, y, z] = bombs[que];
        check[que] = 1;

        for (let k = 0; k < bombs.length; k++) {
          if (check[k] === 1) continue;

          let [dx, dy, dz] = bombs[k];

          let dist = Math.abs(x - dx) ** 2 + Math.abs(y - dy) ** 2;

          if (dist <= z ** 2) {
            check[k] = 1;
            queue.push(k);
            cnt++;
          }
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i < bombs.length; i++) {
    queue.push(i);
    answer = Math.max(BFS(), answer);
  }

  return answer;
}

console.log(
  solution([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 4],
  ])
); // 5
console.log(
  solution([
    [2, 1, 3],
    [6, 1, 4],
  ])
); // 2
console.log(
  solution([
    [1, 1, 5],
    [10, 10, 5],
  ])
); // 1
console.log(
  solution([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [12, 15, 1],
    [17, 19, 1],
  ])
); // 3
