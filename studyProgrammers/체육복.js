// 번호는 체격순이라서, 바로 앞 번호의 학생이나 뒷 번호 학생한테만 체육복 빌리기 가능
//ex 4번은 3번이랑 5번한테만 빌릴수있다
// 도난당한 애들 lost
// 여벌이 있는 애들 reserve 를 비교해서
// 최대한 많은 학생이 들을 수 있는 숫자 리턴
function solution(n, lost, reserve) {
  let answer = 0;

  let allstudent = [...lost, ...reserve];

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  answer = n;

  while (lost.length) {
    const target = lost.shift();

    const num = reserve.filter((student) => student - 1 || student + 1);

    console.log(num);

    if (num.length === 0) answer--;
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
