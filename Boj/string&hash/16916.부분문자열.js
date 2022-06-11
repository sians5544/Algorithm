const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

//KMP 로 풀이
// 참고자로 https://www.youtube.com/watch?v=yWWbLrV4PZ8

let sArr = input[0].trim();
let pArr = input[1].trim();
let sLength = input[0].length;
let pLength = input[1].length;

const makeTable = (str) => {
  let tableArr = Array(str.length).fill(0);

  let j = 0;

  for (let i = 1; i < str.length; i++) {
    while (j > 0 && str[i] !== str[j]) {
      j = tableArr[j - 1];
    }

    if (str[i] === str[j]) {
      tableArr[i] = ++j;
    }
  }

  return tableArr;
};
let table = makeTable(pArr);

let j = 0;
for (let i = 0; i < sLength; i++) {
  while (j > 0 && sArr[i] !== pArr[j]) {
    j = table[j - 1];
  }
  if (sArr[i] == pArr[j]) {
    if (j === pLength - 1) {
      return console.log(1);
    } else {
      ++j;
    }
  }
}

console.log(0);
