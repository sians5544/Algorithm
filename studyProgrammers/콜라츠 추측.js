function solution(num) {
  let answer = 0;
  let flag = false;
  const LOOP_CNT = 500;

  if (num === 1) return 0;

  while (answer <= LOOP_CNT) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer += 1;

    if (num === 1) {
      flag = true;
      break;
    }
  }

  return flag ? answer : -1;
}
