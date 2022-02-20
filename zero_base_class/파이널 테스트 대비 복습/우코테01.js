function solution(arr) {
  let answer = Array(4).fill(0);

  for (let i = 0; i < arr.length; i++) {
    answer[arr[i]] += 1;
  }

  answer.shift();

  let max = answer.slice().sort((a, b) => b - a)[0];

  for (let j = 0; j < answer.length; j++) {
    answer[j] = max - answer[j];
  }
  return answer;
}

console.log(solution([2, 1, 3, 1, 2, 1]));
console.log(solution([3, 3, 3, 3, 3, 3]));
console.log(solution([1, 2, 3]));
