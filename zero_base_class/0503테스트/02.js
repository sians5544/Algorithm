function solution(s) {
  let dy = Array(120).fill(0);

  const DFS = (L) => {
    if (s[L] === '0') return 0;
    if (dy[L] > 0) return dy[L]; // 이미 만들 수 있는 경우의 수 저장되어있음

    if (L === s.length - 1 || L === s.length) return 1; // 문자열 마지막 인덱스

    let answer = DFS(L + 1);
    let tmp = parseInt(s.substring(L, L + 2));

    if (tmp <= 26) answer += DFS(L + 2);
    return (dy[L] = answer);
  };

  return DFS(0);
}

console.log(solution('25114')); // 6
console.log(solution('1111111111')); // 89
console.log(solution('10')); // 1
console.log(solution('115213102')); // 9
console.log(solution('35561010212013105164112032121321214')); // 1024
console.log(solution('15561010212013110516411203212132')); // 256
