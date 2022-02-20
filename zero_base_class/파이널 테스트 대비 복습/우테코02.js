function solution(log) {
  let answer = '';
  let time = [];
  let len = log.length;
  let total = 0;
  for (let i = 1; i < len; i++) {
    if ((i - 1) % 2 === 0) {
      let start = Number(log[i - 1].split(':')[0] * 60) + Number(log[i - 1].split(':')[1]);
      let end = Number(log[i].split(':')[0] * 60) + Number(log[i].split(':')[1]);

      time.push(end - start);
    }
  }

  for (let t of time) {
    if (t >= 5 && t < 105) {
      total += t;
    } else if (t > 105) {
      total += 105;
    }
  }

  let hour = Math.floor(total / 60);
  let minit = Math.floor(total % 60);

  answer = (hour < 10 ? '0' + hour : string(hour)) + ':' + minit;
  return answer;
}

console.log(solution(['08:30', '09:00', '14:00', '16:00', '16:01', '16:06', '16:07', '16:11']));
console.log(solution(['01:00', '08:00', '15:00', '15:04', '23:00', '23:59']));
