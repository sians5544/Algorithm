const fs = require('fs');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number); // 세로, 가로

let laboratory = [];

let copyLaboratory = [];
let virus = [];
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

let maxCount = 0;
for (let i = 1; i < input.length; i++) {
  laboratory.push(input[i].split(' ').map(Number));
}

let around = [];

const resetBoard = () => {
  copyLaboratory = Array.from(Array(M), () => Array(N).fill(0));

  for (let i = 0; i < laboratory.length; i++) {
    copyLaboratory[i] = [...laboratory[i]];
  }
};

const checkVirus = () => {
  let tqueue = [...virus];
  while (tqueue.length) {
    let len = tqueue.length;
    for (let i = 0; i < len; i++) {
      let [x, y] = tqueue.shift();
      for (let k = 0; k < 4; k++) {
        let nx = dx[k] + x;
        let ny = dy[k] + y;

        if (nx < N && ny < M && nx >= 0 && ny >= 0 && copyLaboratory[nx][ny] === 0) {
          copyLaboratory[nx][ny] = 2;
          tqueue.push([nx, ny]);
          around.push([nx, ny]);
        }
      }
    }
  }
};

//조합을 만들 배열
let tmp = [];

const Count = (queueBfs) => {
  resetBoard();

  queueBfs.forEach((pos) => {
    copyLaboratory[pos[0]][pos[1]] = 1;
  });

  let cnt = 0;
  let vqueue = [...virus];
  while (vqueue.length) {
    let len = vqueue.length;
    for (let i = 0; i < len; i++) {
      let [nx, ny] = vqueue.shift();

      for (let k = 0; k < 4; k++) {
        let cx = nx + dx[k];
        let cy = ny + dy[k];

        if (cx >= 0 && cy >= 0 && cx < N && cy < M && copyLaboratory[cx][cy] === 0) {
          copyLaboratory[cx][cy] = 2;
          vqueue.push([cx, cy]);
        }
      }
    }
  }

  // console.log(copyLaboratory);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (copyLaboratory[i][j] === 0) cnt++;
    }
  }

  return cnt;
};

const DFS = (L, s) => {
  if (L === 3) {
    queue = tmp.slice();
    maxCount = Math.max(maxCount, Count(queue));
  } else {
    for (let i = s; i < around.length; i++) {
      tmp.push(around[i]);
      DFS(L + 1, i + 1);
      tmp.pop();
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (laboratory[i][j] === 2) {
      virus.push([i, j]);
    }
  }
}
resetBoard();
checkVirus();
DFS(0, 0);

console.log(maxCount);
