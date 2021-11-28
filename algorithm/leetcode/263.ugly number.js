function solution(n) {
  let answer = true;
  if (n === 0) return false;

  let ugly = [2, 3, 5];

  for (let u of ugly) {
    while (n % u === 0) {
      n = n / u;
    }
  }

  if (n !== 1) answer = false;

  return answer;
}

console.log(solution(6));
