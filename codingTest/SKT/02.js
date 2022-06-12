function solution(periods, payments, estimates) {
  let answer = Array(2).fill(0);

  for (let i = 0; i < periods.length; i++) {
    if (periods[i] < 23) continue;

    let flag = [0, 0];
    let total = payments[i].reduce((acc, cur) => acc + cur);
    let nextMonth = payments[i].slice(1, payments[i].length + 1).reduce((acc, cur) => acc + cur);
    console.log(total);
    // 일단 회원의 가입 기간을 봐라 이번달, 다음달 다 가입년도가 가능한지 확인

    // 이번달 vip 확인
    if (periods[i] >= 24) {
      if (periods[i] < 60 && total >= 900000) {
        flag[1] = 1;
      } else if (periods[i] >= 60 && total >= 600000) {
        flag[1] = 1;
      }
    }

    if (periods[i] + 1 >= 24) {
      if (periods[i] + 1 < 60 && nextMonth + estimates[i] >= 900000) {
        flag[0] = 1;
      } else if (periods[i] + 1 >= 60 && nextMonth + estimates[i] >= 600000) {
        flag[0] = 1;
      }
    }

    if (flag[0] && flag[1]) continue;

    answer[0] += flag[0];
    answer[1] += flag[1];
  }

  return answer;
}

console.log(
  solution(
    [20, 23, 24],
    [
      [
        100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000,
        100000,
      ],
      [
        100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000,
        100000,
      ],
      [350000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000],
    ],
    [100000, 100000, 100000]
  )
);
console.log(
  solution(
    [24, 59, 59, 60],
    [
      [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000],
      [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000],
      [350000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000],
      [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000],
    ],
    [350000, 50000, 40000, 50000]
  )
);
