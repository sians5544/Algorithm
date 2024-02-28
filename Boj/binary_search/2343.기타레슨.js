const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].trim().split(" ").map(Number);
let lectures = input[1].trim().split(" ").map(Number);

for (let i = 0; i < input.length; i++) {
  lectures.push();
}

let left = 1;
let right = 1e10;
let answer = 0;
let mid = 0;

const countBulelay = (mid) => {
  let cnt = 1;
  let sum = 0;

  for (let lecture of lectures) {
    if (lecture > mid) {
      cnt = Infinity;
      break;
    }
    sum += lecture;

    if (sum > mid) {
      cnt++;
      sum = lecture;
    }
  }

  return cnt;
};

while (left <= right) {
  mid = parseInt((left + right) / 2);

  if (countBulelay(mid) <= M) {
    right = mid - 1;
    answer = mid;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
