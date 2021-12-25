function solution(s) {
  let answer = 0;

  let hash = new Map();
  let setNum = new Set();

  for (let m of s) {
    hash.set(m, (hash.get(m) || 0) + 1);
  }

  let backup = [...hash.values()];

  backup.sort((a, b) => a - b);

  for (let back of backup) {
    while (setNum.has(back)) {
      back = back - 1;
      answer++;
      if (back === 0) break;
    }

    setNum.add(back);
  }
  return answer;
}

console.log(solution('aab'));
console.log(solution('aaabbbcc'));
