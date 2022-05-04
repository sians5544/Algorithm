function solution(sentence, keyword, skips) {
  let answer = '';

  let N = sentence.length;
  let M = keyword.length;

  let K = skips.length;

  let idx = 0;

  for (let k = 0; k < K; k++) {
    let insert = keyword[k % M];

    let overflow = false;

    for (let i = 0; i < skips[k]; i++) {
      if (idx >= N) {
        overflow = true;
        break;
      }

      let fromSentence = sentence[idx];
      answer += fromSentence;
      idx++;
      if (fromSentence === insert) {
        break;
      }
    }
    if (overflow) break;
    answer += insert;
  }
  for (let i = idx; i < N; i++) {
    answer += sentence[i];
  }
  return answer;
}

console.log(solution('i love coding', 'mask', [0, 0, 3, 2, 3, 4]));
