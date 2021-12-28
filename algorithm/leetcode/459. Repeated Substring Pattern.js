function solution(s) {
  let answer = false;

  if (s.length <= 1) return answer;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let sub = s.slice(0, i);
    if (sub.repeat(parseInt(s.length / i)) === s) return true;
  }

  return answer;
}

console.log(solution('abab')); // true
console.log(solution('aba')); //false
console.log(solution('abcabcabcabc')); //true
