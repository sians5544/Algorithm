function solution(s) {
  let answer = s.length;
  let dfsResultArray = [];
  let first = '';
  let tmp = [];

  if (answer === 1) return 1;
  const checkLenStr = (results) => {
    let copyStr = s;

    // console.log(results);
    // let check = Array(results.length).fill(0);

    for (let j = 0; j < results.length; j++) {
      let check = false;
      let len = results[j].length;
      for (let i = 0; i < copyStr.length; i += len) {
        console.log(results[j], copyStr.slice(i, i + len), i, i + len);
        if (copyStr.slice(i, i + len) === results[j]) {
          let cnt = 1;
          let left = i + len;
          while (left <= copyStr.length - len) {
            if (copyStr.slice(left, left + len) === results[j]) {
              cnt++;
              left += len;
            } else break;
          }
          if (cnt > 1) {
            let startStr = '';
            if (i > 0) {
              startStr = copyStr.slice(0, i);
            }

            copyStr = startStr + cnt + results[j] + copyStr.slice(left, copyStr.length);
            console.log('여기 맞니?', left, copyStr);
            i = left + 1;
          }
        }
        console.log(copyStr);
        answer = Math.min(answer, copyStr.length);
      }
    }
  };

  for (let i = 6; i <= 6; i++) {
    dfsResultArray = [];

    for (let j = 0; j < s.length - i; j += i) {
      dfsResultArray.push(s.slice(j, j + i));
    }
    console.log(dfsResultArray);
    checkLenStr(dfsResultArray);
  }

  return answer;
}
// console.log(solution('aabbaccc'));
// console.log(solution('ababcdcdababcdcd'));
// console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
// console.log(solution('xababcdcdababcdcd'));
// console.log(solution('aaaaa'));
// console.log(solution('aaz'));
