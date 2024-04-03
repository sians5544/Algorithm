function solution(x, y, n) {
  let answer = 0;
  let head = 0;
  let queue = [];
  let visited = Array(1e7).fill(0);

  if (x === y) return 0;

  queue.push(x);

  while (queue.length > head) {
    let len = queue.length - head;
    for (let i = 0; i < len; i++) {
      let nx = queue[head];
      let num = 0;
      for (let k = 0; k < 3; k++) {
        if (k === 0) {
          num = nx + n;
        } else if (k === 1) {
          num = nx * 2;
        } else {
          num = nx * 3;
        }

        if (num === y) return (answer += 1);
        if (num < y && visited[num] === 0) {
          queue.push(num);
          visited[num] = 1;
        }
      }
      head++;
    }
    answer += 1;
  }

  return -1;
}
