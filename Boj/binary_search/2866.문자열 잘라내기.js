const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [r, c] = input[0].split(' ').map(Number);

let table = [];
for (let i = 1; i < input.length; i++) {
  table.push(input[i].trim().split(''));
}

let top = 0;
let bottom = r;
let answer = 0;

const Count = (mid) => {
  let set = new Set();
  for (let i = 0; i < c; i++) {
    let str = '';
    for (let j = mid; j < r; j++) {
      str += table[j][i];
    }
    if (set.has(str)) return false;
    set.add(str.trim());
  }

  return true;
};

while (top <= bottom) {
  let mid = parseInt((top + bottom) / 2);

  if (Count(mid)) {
    answer = mid;
    top = mid + 1;
  } else {
    bottom = mid - 1;
  }
}

console.log(answer);
