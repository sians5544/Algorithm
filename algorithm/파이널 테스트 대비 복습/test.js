const PROBLEM_NUMBER = 20922;

const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./testcase/" + PROBLEM_NUMBER + ".txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = parseInt(input[0].split(" ")[0]);
let k = parseInt(input[0].split(" ")[1]);

let tmp = input[1].split(" ");
let nums = Array(n);
for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}

function solution(n, k, nums) {
  let answer = 0;
  let cnt = Array(100001).fill(0);

  let lt = 0;
  for (let rt = 0; rt < n; rt++) {
    cnt[nums[rt]]++;

    while (k < cnt[nums[rt]]) {
      cnt[nums[lt++]]--;
    }
    answer = Math.max(answer, rt - lt + 1);
  }
  return answer;
}

console.log(solution(n, k, nums));
