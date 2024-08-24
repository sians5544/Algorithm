function solution(s) {
  let answer = 0;
  let len = s.length;
  let closeObj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const checkStackLen = (currentStr) => {
    let stack = [];

    for (let str of currentStr) {
      if (stack.length && stack[stack.length - 1] === closeObj[str]) {
        stack.pop();
      } else {
        stack.push(str);
      }
    }

    return stack.length;
  };

  for (let i = 0; i < len; i++) {
    if (checkStackLen(s.slice(i) + s.slice(0, i)) === 0) answer++;
  }
  return answer;
}

console.log(solution("[)(]"));
