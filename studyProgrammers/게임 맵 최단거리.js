function solution(maps) {
  let answer = 0;
  let cnt = 0;
  let row = maps.length - 1;
  let col = maps[0].length - 1;

  // 게임 캐릭터는 항상 0,0 상대방 진영은 n,m에 도착
  let check = Array.from(Array(row + 1), () => Array(col + 1).fill(0));
  let queue = [];

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  queue.push([0, 0]);

  check[0][0] = 1;
  let head = 0;

  if (maps[row][col] === 0) return answer;

  while (queue.length > head) {
    let len = queue.length - head;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue[head++];

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && ny >= 0 && nx <= row && ny <= col) {
          if (maps[nx][ny] === 0) continue;
          if (maps[nx][ny] === 1 && check[nx][ny] === 0) {
            check[nx][ny] = check[x][y] + 1;
            console.log(check);
            queue.push([nx, ny]);
            maps[nx][ny] = 0;
          }
        }
      }
    }
  }

  if (check[row][col] === 0) {
    return -1;
  }

  console.log(check);

  return check[row][col];
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

console.log(
  solution([
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
