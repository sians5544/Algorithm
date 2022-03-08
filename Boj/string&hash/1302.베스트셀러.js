const { Cipher } = require('crypto');
const fs = require('fs');
const { isGeneratorFunction } = require('util/types');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];

let books = [];

for (let i = 1; i < input.length; i++) {
  books.push(input[i].trim());
}

let hash = new Map();

for (let book of books) {
  hash.set(book, (hash.get(book) || 0) + 1);
}

let hashArr = [...hash];

hashArr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] > b[0] < 0 ? 1 : a[0] < b[0] ? -1 : 0;
  else return b[1] - a[1];
});

console.log(hashArr[0][0]);
