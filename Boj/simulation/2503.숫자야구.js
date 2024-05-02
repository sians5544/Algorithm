const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0].trim();
let games = [];
let answer = 0;
for (let i = 1; i <= N; i++) {
  games.push(input[i].trim().split(" "));
}
let check = Array(1000).fill(0);

for (let i = 123; i <= 999; i++) {
  let str = i + "";
  let set = new Set(str.split(""));

  if (set.size < 3 || str[0] === "0" || str[1] === "0" || str[2] === "0")
    continue;

  for (let game of games) {
    let ballCnt = 0;
    let strokeCnt = 0;
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (game[0][x] == str[y]) {
          x == y ? ballCnt++ : strokeCnt++;
        }
      }
    }

    if (ballCnt == game[1] && strokeCnt == game[2]) check[i]++;
  }
}

for (let i = 123; i < 1000; i++) {
  if (check[i] === N) answer++;
}

console.log(answer);
