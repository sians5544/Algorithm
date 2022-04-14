function solution(answers) {
  let answer = [];
  let len = answers.length;
  let students = Array(3).fill(0);
  let rightCnt = [];
  let repeatCnt = Math.ceil(len / 5);
  let max = 0;

  students[0] = '12345'.repeat(repeatCnt).split('').map(Number);
  students[1] = '21232425'.repeat(repeatCnt).split('').map(Number);
  students[2] = '3311224455'.repeat(repeatCnt).split('').map(Number);

  for (let i = 0; i < students.length; i++) {
    rightCnt.push(
      students[i].slice(0, len).filter((correct, idx) => correct === answers[idx]).length
    );
  }

  for (let i = 0; i < rightCnt.length; i++) {
    if (rightCnt[i] > max) {
      if (answer.length > 0) {
        answer.pop();
      }
      answer.push(i + 1);
      max = rightCnt[i];
    } else if (rightCnt[i] === max) {
      answer.push(i + 1);
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}
