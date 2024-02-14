const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, R] = input[0].trim().split(" ").map(Number);
let originArr = [];
let copyArr = Array.from(Array(N), () => Array(M).fill(0));
let visited = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 1; i < input.length; i++) {
  originArr.push(input[i].trim().split(" ").map(Number));
}
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const DFS = (x, y, k) => {
  if (k >= 4) return;

  let nx = x + dx[k];
  let ny = y + dy[k];

  if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny]) {
    visited[nx][ny] = 1;
    copyArr[nx][ny] = originArr[x][y];
    DFS(nx, ny, k);
  } else {
    DFS(x, y, k + 1);
    return;
  }
};

for (let r = 0; r < R; r++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j]) {
        DFS(i, j, 0);
      }
    }
  }

  for (let l = 0; l < copyArr.length; l++) {
    originArr[l] = [...copyArr[l]];
  }
  visited = Array.from(Array(N), () => Array(M).fill(0));
}

copyArr.forEach((arr) => console.log(arr.join(",").replaceAll(",", " ")));
