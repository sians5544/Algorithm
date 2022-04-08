const fs = require('fs');
const { basename } = require('path');
const { getSystemErrorMap } = require('util');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let total = +input[1];

let students = input[2].trim().split(' ').map(Number);
let score = Array(total).fill(0);
let candidates = []; //[추천 학생, 들어온 순서] // 후보틀
let order = 1;

const setPrioritze = () => {
  let minScore = Number.MAX_SAFE_INTEGER;
  let index = 0;

  for (let i = 0; i < N; i++) {
    if (minScore > score[candidates[i][0]]) {
      minScore = score[candidates[i][0]];
      index = i;
    } else if (minScore === score[candidates[i][0]]) {
      if (candidates[index][1] > candidates[i][1]) index = i;
    }
  }

  return index;
};

for (let student of students) {
  if (score[student - 1] > 0) {
    score[student - 1]++;
    continue;
  }

  if (candidates.length < N) {
    candidates.push([student - 1, order]);
    score[student - 1]++;
  } else {
    let index = setPrioritze();
    score[candidates[index][0]] = 0;
    candidates[index] = [student - 1, order];
    score[student - 1]++;
  }
  order++;
}

console.log(
  candidates
    .sort((a, b) => a[0] - b[0])
    .map((candidate) => candidate[0] + 1)
    .join(' ')
);
