function solution(newId) {
  let answer = newId
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/[.]{2,}/g, '.')
    .replace(/^\.| \.$/g, '') // 역슬래시 뒤에 특수 문자가 나오면 일반 문자로 해석
    .replace(/^$/, 'a') //시작문자도, 종료문자도 없으므로 빈 문자열
    .slice(0, 15)
    .replace(/\.$/, '');

  // if (answer.length <= 2) {
  //   let lastStr = answer.slice(-1);
  //   while (answer.length < 3) {
  //     answer += lastStr;
  //   }
  // }

  // padEnd 함수 (3자리가 되어야한다, 그런데 안되면 얘네를 채워넣어라)

  return answer.padEnd(3, answer[answer.length - 1]);
}

// console.log(solution('...!@BaT#*..y.abcdefghijklm'));
// console.log(solution('=.='));
console.log(solution('abcdefghijklmn.p'));
