function solution(s, t) {
  let answer = [];

  let hash = new Map();
  let left = 0;
  let minlen = Infinity;
  let len = t.length;

  if (len > s.length) return '';

  if (s === t) return s;

  [...t].map((tslice, index) => hash.set(tslice, (hash.get(tslice) || 0) + 1));

  console.log(hash);

  for (let right = 0; right < s.length; right++) {
    if (hash.has(s[right])) {
      hash.set(s[right], hash.get(s[right]) + 1);
    }

    if ([...hash.values()].every((value) => value === 1)) {
      answer.push(s.slice(left, right + 1));
      console.log(answer);
      while (left <= right) {
        if (hash.has(s[left])) hash.set(s[left], hash.get(s[left]) - 1);
        if ([...hash.values()].every((value) => value === 1)) {
          answer.push(s.slice(left + 1, right + 1));
        }

        left++;
      }
    }
  }

  console.log(answer);

  if (answer.length <= 0) return '';
  answer.sort((a, b) => a.length - b.length);
  return answer[0];
}

// console.log(solution('ADOBECODEBANC', 'ABC'));
// console.log(solution('aa', 'aa'));
console.log(solution('bdab', 'ab'));
