function solution(s) {
  let len = s.length;
  let answer = Number.MAX_SAFE_INTEGER;
  let str = '';

  if (s.length === 1) return 1;
  for (let i = 1; i <= parseInt(len / 2); i++) {
    let str = '';
    let preStr = s.substring(0, i);
    let cnt = 1;
    for (let j = i; j < len; j += i) {
      let tmpStr = s.substring(j, j + i);
      if (preStr === tmpStr) {
        cnt++;
      } else {
        if (cnt === 1) {
          str = str + preStr;
        } else {
          str = str + cnt + preStr;
        }

        cnt = 1;
      }
      preStr = tmpStr;
    }

    if (cnt === 1) str = str + preStr;
    else str = str + cnt + preStr;
    answer = Math.min(answer, str.length);
  }

  return answer;
}
// console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
// console.log(solution('abcabcdede'));
// console.log(solution('abcabcabcabcdededededede'));
// console.log(solution('xababcdcdababcdcd'));
console.log(solution('aaaaa'));
console.log(solution('a'));
