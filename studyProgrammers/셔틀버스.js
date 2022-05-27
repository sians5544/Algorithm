function solution(n, t, m, timetable) {
  let answer = '';
  let busHash = {};
  let busTime = 540;
  let len = timetable.length;
  let check = Array(len).fill(0);

  const changeMinute = (str) => {
    let [min, second] = str.split(':').map(Number);
    return min * 60 + second;
  };

  for (let i = 0; i < n; i++) {
    busHash[busTime] = [];
    busTime += t;
  }

  timetable.sort();

  for (let j = 0; j < len; j++) {
    for (let key in busHash) {
      if (busHash[key].length >= m) continue;

      if (check[j] === 0 && key >= changeMinute(timetable[j])) {
        check[j] = 1;
        busHash[key].push(changeMinute(timetable[j]));
      }
    }
  }

  let lastKey = [...Object.entries(busHash)].sort((a, b) => b[0] - a[0])[0][0];

  busHash[lastKey].length >= m ? (answer = busHash[lastKey][m - 1] - 1) : (answer = lastKey);

  return `${parseInt(answer / 60) >= 10 ? parseInt(answer / 60) : `0${parseInt(answer / 60)}`}:${
    answer % 60 >= 10 ? answer % 60 : `0${answer % 60}`
  }`;
}

console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));
