function isugly(n) {
  let answer = true;
  if (n === 0) return false;

  let ugly = [2, 3, 5];

  for (let u of ugly) {
    while (n % u === 0) {
      n = n / u;
    }
  }

  if (n !== 1) answer = false;

  return answer;
}

function solution(n) {
  let answer = 1;
  let count = 1;

  if (n === 0) return 0;

  while (n >= count) {
    if (isugly(answer)) {
      if (count === n) break;
      count++;
    }
    answer++;
  }
  return answer;
}

console.log(solution(10));
////////////////////여기까지는 time limited 발생 다시 코드 짰다

var nthUglyNumber = function (n) {
  let answer = [];

  answer[0] = 1;

  let p2 = 0,
    p3 = 0,
    p5 = 0;

  if (n === 0) return 0;

  while (answer.length < n) {
    let m2 = answer[p2] * 2;
    let m3 = answer[p3] * 3;
    let m5 = answer[p5] * 5;

    let min = Math.min(m2, m3, m5);

    if (min === m2) p2++;
    if (min === m3) p3++;
    if (min === m5) p5++;

    answer.push(min);
  }

  return answer[n - 1];
};
