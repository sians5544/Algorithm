function solution(n) {
  let ans = '';
  console.log((n - 1) % 26);
  while (n) {
    ans = String.fromCharCode(((n - 1) % 26) + 65) + ans;
    console.log(ans);
    n = Math.floor((n - 1) / 26);
  }

  return ans;
}

console.log(solution(701));
