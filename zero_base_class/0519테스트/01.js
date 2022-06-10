function solution(s, n) {
  let answer = 0;
  let map = {};
  const re = /[A-Z]/;
  let str = s.split(' ').join('');

  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      re.test(str[i]) ? (n -= 2) : (n -= 1);
      map[str[i]] = 1;
    }
  }

  return n > -1 ? s.length : -1;
}

console.log(solution('time to time', 5));
