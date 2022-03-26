const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [S, E, Q] = input[0].split(' ').map((item) => Number(item.replace(':', '')));

let chatting = [];
let answer = [];

let hash = new Map();

for (let i = 1; i < input.length; i++) {
  chatting.push(input[i].trim().split(' '));
}

for (let chat of chatting) {
  let time = Number(chat[0].replace(':', ''));
  let nickName = chat[1];

  if (!hash.has(nickName) && time <= S) {
    hash.set(nickName, time);
  }

  if (hash.has(nickName) && time >= E && time <= Q) {
    hash.delete(nickName);
    answer.push(nickName);
  }
}

console.log(answer.length);
