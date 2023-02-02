function solution1(numbers) {
  var answer = [];
  let right = 0;

  for (let left = 0; left < numbers.length; left++) {
    right = left + 1;

    while (numbers[right] <= numbers[left]) {
      right++;
      console.log(right);
    }

    if (numbers[left] < numbers[right]) {
      answer.push(numbers[right]);
      continue;
    }
    answer.push(-1);
  }

  return answer;
}

function solution(numbers) {
  const N = numbers.length;
  let answer = Array(N).fill(-1);
  let stack = [];

  for (let i = N - 1; i >= 0; i--) {
    while (stack.length) {
      if (stack[stack.length - 1] > numbers[i]) {
        answer[i] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(numbers[i]);
  }

  return answer;
}
console.log(solution([2, 3, 3, 5]));
