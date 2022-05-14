function solution(number, k) {
  let answer = '';

  let stack = [];
  let cnt = 0;

  for (let num of number) {
    while (cnt < k && stack[stack.length - 1] < num) {
      stack.pop();
      cnt += 1;
    }
    stack.push(num);
  }

  if (stack.length === number.length) stack.pop();
  answer = stack.join('');
  return answer;
}

console.log(solution('94', 1));
console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
