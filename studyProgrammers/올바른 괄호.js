function solution(s) {
  let stack = [];

  for (let bracket of s) {
    if (bracket === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (bracket === ')' && stack.length === 0) {
      stack.push(')');
    } else {
      stack.push('(');
    }
  }

  return stack.length > 0 ? false : true;
}

console.log(solution('()()')); //t
console.log(solution('(())()')); //t
console.log(solution(')()(')); //f
console.log(solution('(()(')); //f
console.log(solution('(()(')); //f
console.log(solution('))')); //f
