
//테스트 케이스 4개 밖에 통과 못한 풀이 
// DFS 로 풀어버렸다 

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
    .sort((a, b) => b + a - (a + b)) // (b+a) -> 303  ,(a+b) -> 330 이렇게 값을 비교해서  결합되었을 때 더 큰 애들 기준으로 정렬!!   
    .join('');

  return answer - 0 === 0 ? '0' : answer; //[0,0,0,0] 테스트 케이스는 이 과정을 안해주면 0000 으로 출력되어서 계속 오류 났었다 그래서 숫자로 바꿔주고 확인
}

// console.log(solution2([6, 10, 2]));
console.log(solution2([0, 0, 0, 0])); 
console.log(solution2([3, 30, 34, 5, 9]));
