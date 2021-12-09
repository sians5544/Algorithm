function solution(numbers) {
  var answer = [];
  let len = numbers.length;
  let checkArr = Array(len).fill(0);
  numbers.sort((a, b) => a - b);
  let temp = [];

  function DFS(v) {
    if (v === len) {
      let result = Number(temp.slice().join(''));
      answer.push(result);
      return;
    } else {
      for (let i = 0; i < len; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          temp.push(numbers[i] + '');
          DFS(v + 1);
          temp.pop();
          checkArr[i] = 0;
        }
      }
    }
  }

  DFS(0);

  answer.sort((a, b) => b - a);
  return answer[0] + '';
}

// console.log(solution([6, 10, 2]));
// console.log(solution([3, 30, 34, 5, 9]));

// 프로그래머스 해설 참고 하고 배열 함수 써서 푼 문제

function solution2(numbers) {
  let answer = numbers
    .map((item) => item + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer - 0 === 0 ? '0' : answer;
}

// console.log(solution2([6, 10, 2]));\
console.log(solution2([0, 0, 0, 0]));
console.log(solution2([3, 30, 34, 5, 9]));
