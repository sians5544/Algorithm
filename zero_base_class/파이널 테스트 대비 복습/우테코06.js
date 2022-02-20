// 주 35시간 근무, 금요일에 출발하여 월요일에 돌아오는 일정

// 올해 남은 휴가 시간 time
// 여행 일정을 담은 이차원 배열 plans (여행지, 금요일 출발시간, 월요일 도착시간)

// 남은 휴가 시간 내에 갈 수 있는 여행지 중 올해 마지막 여행지

function solution(time, plans) {
  let result = '';
  //금요일 퇴근, 월요일 출근
  let company = [18, 13];

  for (let plan of plans) {
    let sum = 0;
    let dep =
      plan[1].slice(-2) === 'PM'
        ? Number(plan[1].split('PM')[0]) + 12
        : Number(plan[1].split('AM')[0]);
    let arri =
      plan[2].slice(-2) === 'PM'
        ? Number(plan[2].split('PM')[0]) + 12
        : Number(plan[2].split('AM')[0]);

    if (dep < company[0]) sum += company[0] - dep;

    if (arri > company[1]) sum += arri - company[1];

    if (sum <= time) result = plan[0];
  }

  return result;
}

console.log(
  solution(3.5, [
    ['홍콩', '11PM', '9AM'],
    ['엘에이', '3PM', '2PM'],
  ])
);
