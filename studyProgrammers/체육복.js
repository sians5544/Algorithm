// 번호는 체격순이라서, 바로 앞 번호의 학생이나 뒷 번호 학생한테만 체육복 빌리기 가능
//ex 4번은 3번이랑 5번한테만 빌릴수있다
// 도난당한 애들 lost
// 여벌이 있는 애들 reserve 를 비교해서
// 최대한 많은 학생이 들을 수 있는 숫자 리턴
function solution(n, lost, reserve) {
  let answer = 0;

  let student = Array(n).fill(1);

  for (let lostStudent of lost) {
    student[lostStudent - 1]--;
  }

  for (let reserveStudent of reserve) {
    student[reserveStudent - 1]++;
  }

  for (let i = 0; i < student.length; i++) {
    if (student[i] === 0) {
      if (student[i - 1] === 2) {
        student[i - 1]--;
        student[i]++;
      } else if (student[i + 1] === 2) {
        student[i + 1]--;
        student[i]++;
      }
    }
  }

  for (let s of student) {
    if (s !== 0) answer++;
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
