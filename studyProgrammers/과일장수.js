function solution(k, m, score) {
  let answer = 0;
  let cnt = 0;
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; ) {
    let num = i + m - 1;
    if (cnt === Math.floor(score.length / m) || score[num] > k) break;
    answer += score[num] * m;
    cnt++;
    i = num + 1;
  }
  return answer;
}

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
