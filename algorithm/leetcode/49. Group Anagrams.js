// 순서가 달라도 알파벳의 개수가 동일하면됨
function solution(strs) {
  let hash = new Map();

  for (let str of strs) {
    let sortArray = str.split('').sort().join('');

    if (hash.has(sortArray)) hash.get(sortArray).push(str);
    else {
      hash.set(sortArray, [str]);
    }
  }

  return [...hash.values()].sort((a, b) => a.length - b.length);
}

console.log(solution(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(solution(['']));
console.log(solution(['a']));
