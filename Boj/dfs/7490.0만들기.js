const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0].trim();
let operations = ["_", "+", "-"];

for (let i = 1; i < input.length; i++) {
  let nums = Array.from({ length: +input[i].trim() }, (_, idx) => idx + 1);
  let tmp = [];

  const DFS = (n, s, flag, tmp) => {
    if (n === nums.length) {
      if (eval(tmp.join("").replaceAll("_", "")) === 0) {
        console.log(tmp.join("").replaceAll("_", " "));
      }
      return;
    }

    if (!flag) {
      for (let operation of operations) {
        tmp.push(operation);
        DFS(n, s, true, tmp);
        tmp.pop();
      }
    } else {
      for (let i = s; i < nums.length; i++) {
        tmp.push(nums[i]);
        DFS(n + 1, i + 1, false, tmp);
        tmp.pop();
      }
    }
  };

  DFS(0, 0, true, tmp);
  if (i < input.length - 1) console.log();
}
