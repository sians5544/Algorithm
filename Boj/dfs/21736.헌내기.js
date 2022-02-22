const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let campus = [];

for (let i = 1; i < input.length; i++) {
  campus.push(input[i].trim().split(''));
}

let board = Array.from(Array(n), () => Array(m).fill(0)); // 중복을 확인하기 위한 배열
let answer = 0;

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

const DFS = (x, y) => {
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m && campus[nx][ny] !== 'X') {
      if (campus[nx][ny] === 'P') {
        answer++;
      }
      campus[nx][ny] = 'X';
      DFS(nx, ny);
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (campus[i][j] === 'I') {
      DFS(i, j);
    }
  }
}

console.log(answer > 0 ? answer : 'TT');
