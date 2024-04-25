const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input[0].trim();
let arr = Array.from({ length: num + 1 }, (_, i) => i++);
let results = [];

let left = 0;
let sum = 0;
let answer = 0;

for (let i = 2; i <= arr.length; i++) {
  if (arr[i] === 0) continue;

  for (let j = i * i; j <= num; j += i) {
    arr[j] = 0;
  }
}

for (let k = 2; k <= num; k++) {
  if (arr[k] && arr[k] > 1) results.push(arr[k]);
}

for (let right = 0; right < results.length; right++) {
  sum += results[right];

  while (sum > num) {
    sum -= results[left++];
  }

  if (sum === num) answer++;
}

console.log(answer);
