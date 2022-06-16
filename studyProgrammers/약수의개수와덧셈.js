function checkMaxLength(n) {
  let cnt = 0;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      cnt++;

      if (i * i < n) cnt++;
    }
  }

  return cnt;
}

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    checkMaxLength(i) % 2 > 0 ? (answer -= i) : (answer += i);
  }
  return answer;
}
