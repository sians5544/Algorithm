function solution(s) {
  let answer = "";

  let stack = []; // 스택 생성
  for (const x of s) {
    // 문자열 하나씩 탐색
    if (x !== "]") {
      // 현재 문자가 닫는 괄호가 아니면
      stack.push(x); // 스택에 삽입 -> 닫는 괄호가 나올 때까지 모든 문자를 스택에 넣음
    } else {
      // 현재 문자가 닫는 괄호이면 -> 현재 스택에 들어간 문자들을 꺼내서 개수를 곱해서 다시 스택에 넣어줌
      // 숫자가 아닌 문자만 꺼내는 부분
      let str = ""; // 꺼낸 문자를 합쳐서 저장할 문자열 변수
      let tmp = stack.pop(); // 꺼낸 문자 하나를 저장할 변수
      while (tmp !== "[") {
        // tmp(스택에서 꺼낸 값)이 여는 괄호가 아니면 -> 문자면
        str = tmp + str; // 꺼낸 문자를 저장할 문자열 변수 앞에 붙여줌 ex) str = "abc", tmp = "d" -> str = "dabc"
        tmp = stack.pop(); // 문자 하나를 스택에서 꺼내서 tmp에 저장, 이 방식으로 하면 닫는 괄호는 자동으로 버려짐
      }

      // 숫자를 꺼내는 부분, 닫는 괄호가 나오면 문자열을 꺼내고 그 다음에 숫자를 꺼냄
      let num = ""; // 꺼낸 숫자를 문자열로 저장할 문자열 변수
      while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
        // 스택이 비어있지 않고 스택에서 꺼낸 문자가 숫자일 때까지 반복
        num = stack.pop() + num; // 스택에서 꺼낸 숫자를 num 변수에 붙여서 저장
      }
      stack.push(str.repeat(parseInt(num))); // num 횟수만큼 반복한 문자열을 다시 스택에 삽입
    }
  }

  // 반복문이 끝나면 스택에 있는 문자열을 이어붙여서 정답 변수에 저장
  while (stack.length) {
    answer = stack.pop() + answer;
  }

  return answer;
}
