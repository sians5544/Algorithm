function checkCount(num) {
  let answer = 1;
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
function solution(start, end) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = start; i <= end; i++) {
    let collatz = checkCount(i);
    if (max < collatz) {
      max = checkCount(i);
      answer = i;
    }
  }

  return { max: max, num: answer };
}

console.log(solution(1, 10));
