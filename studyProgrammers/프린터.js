function solution(priorities, location) {
  let answer = [];
  let stack = [];

  stack.push(priorities[0]);

  for (let i = 1; i < priorities.length; i++) {
    if (stack[stack.length - 1] >= priorities[i]) {
      stack.push(priorities[i]);
    } else {
      answer.push(priorities[i]);
    }
  }

  answer = [...answer, ...stack];

  console.log(answer.indexOf(priorities[location]) + 1);
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 5));
