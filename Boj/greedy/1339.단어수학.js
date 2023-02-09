const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let nums = Array.from({ length: 9 }, (v, i) => i + 1).reverse();
nums.push(0);
let strs = [];
for (let i = 1; i <= N; i++) {
  strs.push(input[i].trim());
}

strs.sort((a, b) => (a.length < b.length ? 1 : a.length > b.length ? -1 : 0));

let len = `1${'0'.repeat(strs[0].length - 1)}`;
let hash = {};
let copyStrs = strs.map((str) =>
  str.length < len ? `${'*'.repeat(len.length - str.length)}${str}` : str
);

for (let str of copyStrs) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '*') continue;

    if (!hash[str[i]]) {
      hash[str[i]] = +`1${'0'.repeat(len.length - 1 - i)}`;
    } else {
      hash[str[i]] += +`1${'0'.repeat(len.length - 1 - i)}`;
    }
  }
}

let copyHash = Object.entries(hash);
copyHash.sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0));

let numHash1 = {};
for (let j = 0; j < copyHash.length; j++) {
  numHash1[copyHash[j][0]] = nums[j];
}

let answer = 0;

for (let str of strs) {
  answer += +[...str].map((s) => numHash1[s]).join('');
}

console.log(answer);
