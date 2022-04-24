const isCorrect = (str) => {
  let flag = true;
  let stack = [];

  [...str].forEach((s, _) => {
    if (s === '(') stack.push(s);
    else {
      if (stack.length) {
        stack.pop();
      }
    }
  });

  stack.length > 0 ? (flag = false) : (flag = true);
  return flag;
};
// 올바른 괄호 문자열 이라면 u 의 문자열을 anwer 에 가져다 붙여라 (지속적인 재귀 작업 필요)
// 올바른 괄호 문자열 아닐 때는 v 새로운 메서드 실행

function solution(p) {
  console.log(p);
  let open = 0;
  let close = 0;

  let isRight = true;
  if (p.length === 0) return p;
  else {
    for (let i = 0; i < p.length; i++) {
      p[i] === '(' ? (open += 1) : (close += 1);
      if (open !== close) isRight = false;
      if (open === close) {
        let [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];
        if (isCorrect(u)) return u + solution(v);
        else {
          let emptyString = '(' + solution(v) + ')';
          const slicedReversedString = u
            .slice(1, u.length - 1)
            .split('')
            .map((bracket) => (bracket === '(' ? ')' : '('))
            .join('');
          return emptyString + slicedReversedString;
        }
      }
    }
  }
}
