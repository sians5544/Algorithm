function solution(a, b, n) {
  let answer = 0;
  let total = n;

    
  while (total >= a) {
    let cnt = Math.floor(total / a);
    let col = cnt * b;
    answer+=col;
    total= total - cnt * a + col;
  }
  return answer;
}