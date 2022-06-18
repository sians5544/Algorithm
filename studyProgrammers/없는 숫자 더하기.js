function solution(numbers) {
  let answer = 0;
  let index = 0;

  let findArr = Array.from(Array(10), () => index++);

  for (let i = 0; i < findArr.length; i++) {
    if (!numbers.includes(findArr[i])) answer += findArr[i];
  }

  return answer;
}
