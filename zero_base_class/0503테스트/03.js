function solution(room, x1, y1, x2, y2) {
  let answer = 0;
  let n = room.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let queue = [];

  queue.push([x1, y1]);
  room[x1][y1] = 2;

  const BFS = () => {
    while (queue.length) {
      let curr = queue.shift();
      let x = curr[0];
      let y = curr[1];

      for (let i = 0; i < 4; i++) {
        let xx = x;
        let yy = y;

        while (
          xx + dx[i] >= 0 &&
          xx + dx[i] < n &&
          yy + dy[i] >= 0 &&
          yy + dy[i] < n &&
          room[xx + dx[i]][yy + dy[i] !== 1]
        ) {
          if (room[xx + dx[i]][yy + dy[i]] === 0) {
            queue.push([xx + dx[i], yy + dy[i]]);
            room[xx + dx[i]][yy + dy[i]] = room[x][y] + 1;
          }
        }
        xx = xx + dx[i];
        yy = yy + dy[i];
      }
    }
  };

  BFS();

  console.log(room);
  return room[x2][y2] === 0 ? -1 : room[x2][y2] - 3;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    ],
    0,
    0,
    9,
    8
  )
);
