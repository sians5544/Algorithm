const fs = require('fs');
const { basename } = require('path');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [R, C] = input[0].split(' ').map(Number);

let copyMap = [];
let realMap = [];
let total = 0;
let cnt = 0;
let minMapArray = [];

let minI = Number.MAX_SAFE_INTEGER;
let maxJ = Number.MIN_SAFE_INTEGER;
let minJ = Number.MAX_SAFE_INTEGER;
let maxI = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < input.length; i++) {
  copyMap.push(input[i].trim().split(''));
  realMap.push(input[i].trim().split(''));
}

// x -> 땅, . -> 바다

let dx = [0, -1, 0, 1];
let dy = [1, 0, -1, 0];

const subCounts = (x, y) => {
  let flag = false;
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && ny >= 0 && nx < R && ny < C) {
      if (realMap[nx][ny] === '.') {
        cnt += 1;
      }
    }

    if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
      cnt += 1;
    }

    if (cnt >= 3) {
      flag = true;
      break;
    }
  }

  return flag;
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    cnt = 0;
    if (realMap[i][j] === 'X' && subCounts(i, j)) {
      copyMap[i][j] = '.';
    }
  }
}

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (copyMap[i][j] === 'X') {
      minI = Math.min(minI, i);
      maxI = Math.max(maxI, i);
      minJ = Math.min(minJ, j);
      maxJ = Math.max(maxJ, j);
    }
  }
}

for (let i = minI; i <= maxI; i++) {
  let arr = [];
  for (let j = minJ; j <= maxJ; j++) {
    arr.push(copyMap[i][j]);
  }
  console.log(arr.join(''));
}
