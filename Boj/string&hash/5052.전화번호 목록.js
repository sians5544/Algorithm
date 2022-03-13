const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let test = +input[0];
let index = 1;

const addrNumber = (addrs) => {
  let answer = 'YES';

  addrs.sort();

  for (let i = 0; i < addrs.length - 1; i++) {
    let len = addrs[i].length;

    if (addrs[i] === addrs[i + 1].slice(0, len)) {
      return (answer = 'NO');
    }
  }

  return answer;
};

for (let i = 0; i < test; i++) {
  let len = +input[index++];
  let strs = [];

  for (let j = 0; j < len; j++) {
    strs.push(input[index++].trim());
  }

  console.log(addrNumber(strs));
}
