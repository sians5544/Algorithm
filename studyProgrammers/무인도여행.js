function solution(maps) {
  var answer = [];
  let queue = [];
  let n = maps.length;
  let m = maps[0].length;

  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];

  let copyMap = Array.from(Array(n), () => Array(m).fill(0));

  const BFS = () => {
    let cnt = 0;
    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let [x, y] = queue.shift();

        for (let k = 0; k < 4; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];

          if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < m &&
            maps[nx][ny] !== 'X' &&
            copyMap[nx][ny] === 0
          ) {
            cnt += +maps[nx][ny];
            copyMap[nx][ny] = 1;

            queue.push([nx, ny]);
          }
        }
      }
    }

    return cnt;
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== 'X' && copyMap[i][j] === 0) {
        queue.push([i, j]);
        copyMap[i][j] = 1;
        answer.push(BFS() + +maps[i][j]);
      }
    }
  }

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}
console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));
