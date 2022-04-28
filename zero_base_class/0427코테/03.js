function solution(subway, start, stop) {
  let answer = 0;
  let map = {}; // map  역 마다 호선을 기록
  let lines = [];
  let queue = [];
  let L = 0;
  // 방문한지 안한지 체크
  let visited = Array(subway.length).fill(0);

  for (let i = 0; i < subway.length; i++) {
    lines[i] = [...subway[i]];
  }

  // 다시 체크가힉
  for (let j = 0; j < lines.length; j++) {
    for (let k = 0; k < lines[j].length; k++) {
      if (!map[lines[j][k]]) {
        map[lines[j][k]] = [j];
      } else {
        map[lines[j][k]].push(j);
      }
    }
  }

  queue.push(start);

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      for (let sub of map[current]) {
        if (visited[sub] !== 0) continue;
        visited[sub] = 1;
        for (let location of lines[sub]) {
          if (location === stop) return L++;
          queue.push(location);
        }
      }
    }
    L += 1;
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    6
  )
);

console.log(
  solution(
    [
      [7, 12],
      [5, 19],
      [7, 19],
      [9, 12, 13],
      [9, 5, 15],
    ],
    9,
    19
  )
);
