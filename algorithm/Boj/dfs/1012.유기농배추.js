const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const TC = +input.shift();
let data = input;
const maps = [];

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

for (let i = 0; i < TC; i++) {
  let answer = 0;

  let [M, N, K] = data.shift().split(' ').map(Number);
  let map = Array.from({ length: N }).map((row) => (row = Array.from({ length: M }).fill(0)));

  for (let i = 0; i < K; i++) {
    let [X, Y] = [+data[i].split(' ')[0], +data[i].split(' ')[1]];
    map[Y][X] = 1;
  }
  maps.push(map);
  data.splice(0, K);

  let ch = Array.from({ length: N }).map((row) => (row = Array.from({ length: M }).fill(0)));

  const DFS = (x, y) => {
    for (let p = 0; p < 4; p++) {
      let nx = dx[p] + x;
      let ny = dy[p] + y;

      if (nx > 0 && ny > 0 && nx <= M && ny <= M && maps[nx][ny] === 1) {
        maps[nx][ny] = 1;
        DFS(nx, ny);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (maps[i][j] === 1) {
        DFS(i, j);
        answer++;
      }
    }
  }

  console.log(answer);
}
