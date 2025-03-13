function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let endTime = (schedules[i] / 100) * 60 + (schedules[i] % 100) + 11;

    let count = 0;

    console.log(endTime);

    for (let j = 0; j < timelogs[i].length; j++) {
      let num = (startday + j) % 6;
      if (num === 0 || num === 1) {
        count++;
        continue;
      }

      const minutes =
        Math.floor(timelogs[i][j] / 100) * 60 + (timelogs[i][j] % 100);

      if (minutes < endTime) {
        count++;
      }
    }

    if (count === 7) answer++;
  }
  return answer;
}

console.log(
  solution(
    [700, 800, 1100],
    [
      [710, 2359, 1050, 700, 650, 631, 659],
      [800, 801, 805, 800, 759, 810, 809],
      [1105, 1001, 1002, 600, 1059, 1001, 1100],
    ],
    5
  )
);
