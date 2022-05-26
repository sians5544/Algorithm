function solution(s) {
  let hash = {};

  if (s.length === 1) return 0;
  let arrCall = s.split('');

  for (let j = 1; j <= s.length - 1; j++) {
    for (let i = 0; i <= s.length - j; i++) {
      let str = arrCall.slice(i, i + j).join('');
      if (!hash[str]) {
        hash[str] = 1;
        continue;
      } else {
        hash[str] += 1;
      }
    }
  }

  console.log(hash);
  let maxNum = [...Object.entries(hash)]
    .filter((h) => h[1] > 1 && h[0].length > 1)
    .sort((a, b) => b[0].length - a[0].length);

  return maxNum.length ? maxNum[0][0].length : 0;
}

console.log(solution('aaaaa'));
