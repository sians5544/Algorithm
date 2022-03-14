const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [M, N] = input[0].split(' ').map(Number);

let answer = 0;
let treasure = [];

for (let i = 1; i < input.length; i++) {
  treasure.push(input[i].trim().split(''));
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const BFS = (x, y) => {
  //중복 쳌크를 위함
  let treasureChek = Array.from(Array(M), () => Array(N).fill(0));
  let queue = [];
  treasureChek[x][y] = 1;
  queue.push([x, y]);

  let cnt = 0;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [cx, cy] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = cx + dx[k];
        let ny = cy + dy[k];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < M &&
          ny < N &&
          treasureChek[nx][ny] === 0 &&
          treasure[nx][ny] === 'L'
        ) {
          treasureChek[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    cnt += 1;
  }
  return cnt;
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (treasure[i][j] === 'L') {
      answer = Math.max(answer, BFS(i, j) - 1);
    }
  }
}
console.log(answer);
